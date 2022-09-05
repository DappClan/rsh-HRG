'reach 0.1';

const [ isOutcome, PLOSE, PWIN ] = makeEnum(2);

const outcome = (PRole, WRole) => ((PRole == WRole) ? 1 : 0);

forall(UInt, PRole =>
  forall(UInt, WRole => 
    assert(isOutcome(outcome(PRole,WRole)))));


const playerFuncs = Struct([["join", UInt],["wager", UInt],["getRole" , UInt],["seeWinner" , UInt],["receivePay" , UInt]]);
const PFO = playerFuncs.fromObject({join: 1, wager: 2,getRole: 3, seeWinner: 4, receivePay: 5});

assert(Struct.toObject(PFO).join     == 1  ||
      Struct.toObject(PFO).wager     == 2  ||
      Struct.toObject(PFO).getRole   == 3  ||
      Struct.toObject(PFO).seeWinner == 4  ||
      Struct.toObject(PFO).receivePay == 5  );

//The function reps
const join = Struct.toObject(PFO).join;
const wager = Struct.toObject(PFO).wager;
const getRole = Struct.toObject(PFO).getRole;
const seeWinner = Struct.toObject(PFO).seeWinner;
const receivePay = Struct.toObject(PFO).receivePay;



const gameParams = Object({ numPlayers: UInt, amt: UInt, rounds: UInt});


export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const Admin = Participant('Admin', {
    setParams: gameParams,
    ready: Fun([], Null)
  });

  const Game = Participant('Game', {
    showWinningRole: Fun([], Null),
    payApiWinners: Fun([],Null),
  });

  const Player = API('Player', {
    join: Fun([], Null),
    wager: Fun([], Null),
    getRole: Fun([ UInt], Null),
    seeWinner: Fun([UInt], Bool),
    receivePay: Fun([], Null) 
  });

  const Phase = Data({Joining: Null, Wagering: Null, PickingRoles: Null, CheckingWin: Null, PayingWinners: Null, Finished: Null})
  const GP = Events('GamePhase', { phase: [ Phase ]});
  init();
  
  Admin.only(() => {
    const { numPlayers, amt, rounds } = declassify(interact.setParams);
  });

  Admin.publish( numPlayers, amt, rounds);
  commit();
  Admin.publish();
  Admin.interact.ready();

  commit();
  Game.publish();


  var remainingRounds = rounds;
  invariant(balance() == 0) 
  while(remainingRounds > 0){

    // Maps and sets of in game concepts
    const playersM = new Set();
    const playerRoleM = new Map(Address, UInt);
    const winnerM = new Set();

    const awaitAdminPlayerAPI = (apiFunc) => {
      
      if  (apiFunc == 1) {

        const [ [], k ] = 
        call(Player.join)
        .assume(() => check(this == Admin && !playersM.member(this)))
        check(this == Admin && !playersM.member(this));
        k(null);
        playersM.insert(this);
        
      } else if (apiFunc == 2) {

        const [[], k] = 
        call(Player.wager)
        .pay(() => amt)
        .assume(() => check(this == Admin && playersM.member(this)));
        check(this == Admin && playersM.member(this));
        k(null);
        return amt;

      } else if (apiFunc == 3) {

        const [ [role], k ] = 
        call(Player.getRole)
        .assume((role) => check(this == Admin && playersM.member(this)));
        check(this == Admin && playersM.member(this));
        k(null);
        playerRoleM[this] = role;
        
      } else if(apiFunc == 4) {// Change winning logic

        const [ [WRole], k ] = 
        call(Player.seeWinner)
        .assume((WRole) => check(this == Admin && playersM.member(this)));
        check(this == Admin && playersM.member(this));
        const adminRole = fromSome(playerRoleM[this], 0);
        const result = outcome(adminRole, WRole)
        assert(result == PWIN || result == PLOSE);
        if(result == PWIN) {

          k(true);
          delete playerRoleM[this];
          winnerM.insert(this);
          return [1,true];

        } else {

          k(false);
          delete playerRoleM[this];
          return [0,false];
          
        }
      } else {

        const [ [], k ] = 
        call(Player.receivePay)
        .assume(() => check(this == Admin && playersM.member(this)));
        check(this == Admin && playersM.member(this));
        if(winnerM.member(this)) {

          k(null);
          playersM.remove(this);

        } else {

          k(null);
          playersM.remove(this)
          
        }

      }  
    } 
    
    GP.phase(Phase.Joining());
    commit();
    awaitAdminPlayerAPI(join);
    
    const [playersJoined] =
    parallelReduce([ 0 ])
    .invariant(balance() == 0)
    .invariant(playersJoined <= numPlayers -1)
    .while(playersJoined < numPlayers -1)
    .api_(Player.join, () => {
      check(!playersM.member(this));
      return [ (k) => {
        k(null);
        playersM.insert(this);
        return [playersJoined + 1];
      }]
    })
    .timeout(false);

    GP.phase(Phase.Wagering());
    commit();
    const adminWager = awaitAdminPlayerAPI(wager);

    const [totalWager, wageringPlayers] = 
    parallelReduce([ adminWager, playersJoined ])
      .invariant(balance() == totalWager)
      .invariant(wageringPlayers <= playersJoined)
      .while(wageringPlayers > 0)
      .api_(Player.wager, () => {
        check(playersM.member(this))
        return [amt,  (k) => {
          k(null);
          return [totalWager + amt, wageringPlayers - 1];
        }]
      })
      .timeout(false)
    
    GP.phase(Phase.PickingRoles());
    commit();
    awaitAdminPlayerAPI(getRole);

    const [pickedRoles] = 
    parallelReduce([ 0 ])
    .invariant(balance() == totalWager)
    .invariant(pickedRoles <= playersJoined)
    .while(pickedRoles < playersJoined)
    .api_(Player.getRole, (role) => {
      check(playersM.member(this), "Participant is not in the game");
      return[(k) => {
        k(null);
        playerRoleM[this] = role;
        return [pickedRoles + 1];
      }]
    })

    commit();
    Game.interact.showWinningRole();
    Game.publish();

    GP.phase(Phase.CheckingWin());
    commit();
    const [numWinners,isAdminWinner] = awaitAdminPlayerAPI(seeWinner);

    const [winners, remainingP ] = 
    parallelReduce([ numWinners, pickedRoles])
    .invariant(balance() == totalWager)
    .invariant(remainingP <= pickedRoles)
    .while(remainingP > 0)
    .api(Player.seeWinner, 
      (WRole,k) => {
        const PRole = fromSome(playerRoleM[this], 0);
        const result = outcome(PRole,WRole);
        assert(result == PWIN || result == PLOSE);

        if(result == PWIN){

          k(true);
          delete playerRoleM[this];
          winnerM.insert(this);
          playersM.remove(this);
          return [winners + 1, remainingP - 1];

        } else {

          k(false);
          delete playerRoleM[this];
          playersM.remove(this);
          return [ winners, remainingP - 1 ];

        }
    });

    transfer(totalWager).to(Game);
    const payout = totalWager / winners;

    var [unpaidWinners, adminPaid] = [winners, false];
    invariant(balance() == balance());
    while (unpaidWinners > 0) {

      commit();
      Game.pay(payout);
      if (!adminPaid) {
        GP.phase(Phase.PayingWinners());
        commit();
        awaitAdminPlayerAPI(receivePay);
        if (isAdminWinner) {
          transfer(balance()).to(Admin);
          winnerM.remove(Admin);
        }
        transfer(balance()).to(Game);
        [unpaidWinners, adminPaid] = [isAdminWinner ? unpaidWinners - 1 : unpaidWinners, true];
        continue;

      } else {
        Game.interact.payApiWinners();

        const [winner] =
          parallelReduce([Game])
            .invariant(balance() == balance())
            .while(winner == Game && unpaidWinners > 0)
            .api_(Player.receivePay, () => {
              check(winnerM.member(this), 'Player is not a winner')
              return [(k) => {
                k(null);
                winnerM.remove(this);
                return [this];
              }];
            })
            .timeout(false)

        transfer(balance()).to(winner);
        [unpaidWinners, adminPaid] = [unpaidWinners - 1, adminPaid];
        continue;
      }
    }
    transfer(balance()).to(Game);
    remainingRounds = remainingRounds - 1;
    continue;
  }
  GP.phase(Phase.Finished());
  commit()
  exit();
});

