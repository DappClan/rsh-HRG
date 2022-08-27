'reach 0.1';

const [ isOutcome, PLOSE, PWIN ] = makeEnum(2);

const outcome = (PRole, WRole) => ((PRole == WRole) ? 1 : 0);

forall(UInt, PRole =>
  forall(UInt, WRole => 
    assert(isOutcome(outcome(PRole,WRole)))));


const playerFuncs = Struct([["join", UInt],["wager", UInt],["getRole" , UInt],["seeWinner" , UInt]]);
const PFO = playerFuncs.fromObject({join: 1, wager: 2,getRole: 3, seeWinner: 4});

assert(Struct.toObject(PFO).join     == 1  ||
      Struct.toObject(PFO).wager     == 2  ||
      Struct.toObject(PFO).getRole   == 3  ||
      Struct.toObject(PFO).seeWinner == 4   );

//The function reps
const join = Struct.toObject(PFO).join;
const wager = Struct.toObject(PFO).wager;
const getRole = Struct.toObject(PFO).getRole;
const seeWinner = Struct.toObject(PFO).seeWinner;


const gameParams = Object({ numPlayers: UInt, amt: UInt, rounds: UInt});


export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const Admin = Participant('Admin', {
    setParams: gameParams,
    ready: Fun([], Null)
  });

  const Game = Participant('Game', {
    ...hasRandom,
    getCards: Fun([UInt], UInt),
    showCardsHash: Fun([Digest], Null),
    showWinningRole: Fun([UInt], Null),
  });

  const Player = API('Player', {
    join: Fun([], Null),
    wager: Fun([], Null),
    getRole: Fun([Object({ role: UInt })], Null),
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
  Game.only(() => {
    const _cards = interact.getCards(numPlayers);
    const [ _commitG, _saltG ] = makeCommitment(interact,_cards);
    const commitG = declassify(_commitG);
  });

  Game.publish(commitG);
  Game.interact.showCardsHash(commitG);


  var remainingRounds = rounds;
  invariant(balance() == 0) 
  while(remainingRounds > 0){

    // Maps and sets of in game concepts
    const playersM = new Set();
    const playerCardM = new Map(Address, Object({role: UInt}));
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
        .pay(()=> amt)
        .assume(() => check(this == Admin && playersM.member(this)));
        check(this == Admin && playersM.member(this));
        k(null);
        return amt;

      } else if (apiFunc == 3) {

        const [ [card], k ] = 
        call(Player.getRole)
        .assume((card) => check(this == Admin && playersM.member(this)));
        check(this == Admin && playersM.member(this));
        k(null);
        playerCardM[this] = card;
        
      } else  {// Change winning logic

        const [ [WRole], k ] = 
        call(Player.seeWinner)
        .assume((WRole) => check(this == Admin && playersM.member(this)));
        check(this == Admin && playersM.member(this));
        const adminCard = fromSome(playerCardM[this], {role: 0});
        const adminRole = adminCard.role;
        const result = outcome(adminRole, WRole)
        assert(result == PWIN || result == PLOSE);
        if(result == PWIN) {

          k(true);
          delete playerCardM[this];
          winnerM.insert(this)
          return 1;

        } else {

          k(false);
          delete playerCardM[this];
          return 0;
          
        }
      }  
    }
    
    GP.phase(Phase.Joining());
    commit();
    awaitAdminPlayerAPI(join);
    
    const [playersJoined] =
    parallelReduce([ 0 ])
    .invariant(balance() == 0)
    .invariant(playersJoined <= numPlayers)
    .while(playersJoined < numPlayers )
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

    const [pickedCards] = 
    parallelReduce([ 0 ])
    .invariant(balance() == totalWager)
    .invariant(pickedCards <= playersJoined)
    .while(pickedCards < playersJoined)
    .api_(Player.getRole, (card) => {
      check(playersM.member(this))
      return[(k) => {
        k(null);
        playerCardM[this] = card;
        return [pickedCards + 1];
      }]
    })

    commit();
    Game.only(() => {
      const saltG = declassify(_saltG);
      const Cards = declassify(_cards);
    });
    Game.publish(saltG, Cards);
    checkCommitment(commitG, saltG, Cards);

    commit();
    Game.only(() => {
      const winningRole = declassify(interact.showWinningRole(Cards));
    })
    Game.publish(winningRole);

    GP.phase(Phase.CheckingWin());
    commit();
    const numWinners = awaitAdminPlayerAPI(seeWinner);

    const [winners, remainingP ] = 
    parallelReduce([ numWinners, pickedCards])
    .invariant(balance() == totalWager)
    .invariant(remainingP <= pickedCards)
    .while(remainingP > 0)
    .api(Player.seeWinner, 
      (WRole,k) => {
        const PCard = fromSome(playerCardM[this], {role: 0});
        const PRole = PCard.role;
        const result = outcome(PRole,WRole);
        assert(result == PWIN || result == PLOSE);

        if(result == PWIN){

          k(true);
          delete playerCardM[this];
          return [winners + 1, remainingP -1];

        } else {

          k(false);
          delete playerCardM[this];
          return [ winners, remainingP - 1 ];

        }
    });

    GP.phase(Phase.PayingWinners());
    commit();
    Game.publish();

    const[remainingWager,unpaidP]=
    parallelReduce([totalWager,numPlayers])
    .invariant(balance() == remainingWager)
    .invariant(unpaidP <= numPlayers)
    .while(unpaidP > 0)
    .api_(Player.receivePay, () => {
      const amtW = (amt * (numPlayers + 1))/winners
      check(playersM.member(this));
      return[(k) => {
        if(winnerM.member(this)){
          transfer(amtW).to(this);
          return[remainingWager-amtW,unpaidP-1];
        } else {
          return[remainingWager,unpaidP-1];
        }
      }]
    });

    transfer(remainingWager).to(numWinners == 1 ? Admin : Game);

    remainingRounds = remainingRounds - 1
    continue;
  }

  GP.phase(Phase.Finished());
  commit()
  exit();
});
