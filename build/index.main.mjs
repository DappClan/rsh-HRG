// Automatically generated with Reach 0.1.11 (f33abc3d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f33abc3d)';
export const _backendVersion = 23;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    CheckingWin: ctc0,
    Finished: ctc0,
    Joining: ctc0,
    PayingWinners: ctc0,
    PickingRoles: ctc0,
    Wagering: ctc0
    });
  return {
    GamePhase: {
      phase: [ctc1]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc3,
    Some: ctc1
    });
  const map0_ctc = ctc4;
  
  const map1_ctc = ctc5;
  
  const map2_ctc = ctc4;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      2: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      12: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      15: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1],
      17: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      18: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      19: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      22: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1],
      24: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      25: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      26: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      27: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      28: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      29: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc1, ctc3, ctc1]);
  return {
    mapDataTy: ctc4
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Object({
    amt: ctc2,
    numPlayers: ctc2,
    rounds: ctc2
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  
  const v1163 = stdlib.protect(ctc4, interact.setParams, 'for Admin\'s interact field setParams');
  const v1164 = v1163.amt;
  const v1165 = v1163.numPlayers;
  const v1166 = v1163.rounds;
  
  const txn1 = await (ctc.sendrecv({
    args: [v1165, v1164, v1166],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:61:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1173, v1174, v1175], secs: v1177, time: v1176, didSend: v48, from: v1172 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v1173, v1174, v1175], secs: v1177, time: v1176, didSend: v48, from: v1172 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v1172, v1173, v1174, v1175],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1176,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:63:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1180, time: v1179, didSend: v53, from: v1178 } = txn2;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1180, time: v1179, didSend: v53, from: v1178 } = txn2;
  ;
  const v1181 = stdlib.addressEq(v1172, v1178);
  stdlib.assert(v1181, {
    at: './index.rsh:63:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:64:23:application',
    fs: ['at ./index.rsh:64:23:application call to [unknown function] (defined at: ./index.rsh:64:23:function exp)', 'at ./index.rsh:64:23:application call to "liftedInteract" (defined at: ./index.rsh:64:23:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1185, time: v1184, didSend: v61, from: v1183 } = txn3;
  ;
  let v1186 = v1175;
  let v1187 = v1184;
  let v1194 = stdlib.checkedBigNumberify('./index.rsh:55:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1197 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
    
    return v1197;})()) {
    const v1198 = ['Joining', null];
    null;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1210], secs: v1212, time: v1211, didSend: v106, from: v1209 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v1213 = stdlib.addressEq(v1209, v1172);
    const v1214 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1209), null);
    const v1215 = {
      None: 0,
      Some: 1
      }[v1214[0]];
    const v1216 = stdlib.eq(v1215, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1217 = v1216 ? false : true;
    const v1218 = v1213 ? v1217 : false;
    stdlib.assert(v1218, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:155:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1220 = null;
    await txn4.getOutput('Player_join', 'v1220', ctc0, v1220);
    await stdlib.mapSet(map0, v1209, null);
    let v1227 = stdlib.checkedBigNumberify('./index.rsh:158:22:decimal', stdlib.UInt_max, '0');
    let v1228 = v1211;
    let v1235 = v1194;
    
    while (await (async () => {
      const v1240 = stdlib.safeSub(v1173, stdlib.checkedBigNumberify('./index.rsh:161:40:decimal', stdlib.UInt_max, '1'));
      const v1241 = stdlib.lt(v1227, v1240);
      
      return v1241;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 28,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1253], secs: v1255, time: v1254, didSend: v217, from: v1252 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v1257 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1252), null);
      const v1258 = {
        None: 0,
        Some: 1
        }[v1257[0]];
      const v1259 = stdlib.eq(v1258, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1260 = v1259 ? false : true;
      stdlib.assert(v1260, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:164:20:application call to [unknown function] (defined at: ./index.rsh:164:20:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v1262 = null;
      await txn5.getOutput('Player_join', 'v1262', ctc0, v1262);
      await stdlib.mapSet(map0, v1252, null);
      const v1269 = stdlib.safeAdd(v1227, stdlib.checkedBigNumberify('./index.rsh:167:33:decimal', stdlib.UInt_max, '1'));
      const cv1227 = v1269;
      const cv1228 = v1254;
      const cv1235 = v1235;
      
      v1227 = cv1227;
      v1228 = cv1228;
      v1235 = cv1235;
      
      continue;
      
      }
    const v1271 = ['Wagering', null];
    null;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1282], secs: v1284, time: v1283, didSend: v289, from: v1281 } = txn5;
    undefined /* setApiDetails */;
    const v1286 = stdlib.add(v1235, v1174);
    ;
    const v1287 = stdlib.addressEq(v1281, v1172);
    const v1288 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1281), null);
    const v1289 = {
      None: 0,
      Some: 1
      }[v1288[0]];
    const v1290 = stdlib.eq(v1289, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1291 = v1287 ? v1290 : false;
    stdlib.assert(v1291, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:174:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1293 = null;
    await txn5.getOutput('Player_wager', 'v1293', ctc0, v1293);
    let v1299 = v1174;
    let v1300 = v1227;
    let v1301 = v1283;
    let v1308 = v1286;
    
    while (await (async () => {
      const v1312 = stdlib.gt(v1300, stdlib.checkedBigNumberify('./index.rsh:180:32:decimal', stdlib.UInt_max, '0'));
      
      return v1312;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 27,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1327], secs: v1329, time: v1328, didSend: v436, from: v1326 } = txn6;
      undefined /* setApiDetails */;
      const v1331 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
      const v1332 = {
        None: 0,
        Some: 1
        }[v1331[0]];
      const v1333 = stdlib.eq(v1332, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1333, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:182:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v1336 = stdlib.add(v1308, v1174);
      ;
      const v1341 = null;
      await txn6.getOutput('Player_wager', 'v1341', ctc0, v1341);
      const v1347 = stdlib.safeAdd(v1299, v1174);
      const v1348 = stdlib.safeSub(v1300, stdlib.checkedBigNumberify('./index.rsh:185:55:decimal', stdlib.UInt_max, '1'));
      const cv1299 = v1347;
      const cv1300 = v1348;
      const cv1301 = v1328;
      const cv1308 = v1336;
      
      v1299 = cv1299;
      v1300 = cv1300;
      v1301 = cv1301;
      v1308 = cv1308;
      
      continue;
      
      }
    const v1350 = ['PickingRoles', null];
    null;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1363], secs: v1365, time: v1364, didSend: v504, from: v1362 } = txn6;
    undefined /* setApiDetails */;
    ;
    const v1366 = v1363[stdlib.checkedBigNumberify('./index.rsh:102:17:array', stdlib.UInt_max, '0')];
    const v1367 = stdlib.addressEq(v1362, v1172);
    const v1368 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1362), null);
    const v1369 = {
      None: 0,
      Some: 1
      }[v1368[0]];
    const v1370 = stdlib.eq(v1369, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1371 = v1367 ? v1370 : false;
    stdlib.assert(v1371, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:105:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1373 = null;
    await txn6.getOutput('Player_getRole', 'v1373', ctc0, v1373);
    await stdlib.mapSet(map1, v1362, v1366);
    let v1380 = stdlib.checkedBigNumberify('./index.rsh:195:22:decimal', stdlib.UInt_max, '0');
    let v1381 = v1364;
    let v1388 = v1308;
    
    while (await (async () => {
      const v1392 = stdlib.lt(v1380, v1227);
      
      return v1392;})()) {
      const txn7 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 26,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1406], secs: v1408, time: v1407, didSend: v614, from: v1405 } = txn7;
      undefined /* setApiDetails */;
      ;
      const v1410 = v1406[stdlib.checkedBigNumberify('./index.rsh:199:10:spread', stdlib.UInt_max, '0')];
      const v1411 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1405), null);
      const v1412 = {
        None: 0,
        Some: 1
        }[v1411[0]];
      const v1413 = stdlib.eq(v1412, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1413, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:201:18:application call to [unknown function] (defined at: ./index.rsh:201:18:function exp)'],
        msg: 'Participant is not in the game',
        who: 'Admin'
        });
      const v1416 = null;
      await txn7.getOutput('Player_getRole', 'v1416', ctc0, v1416);
      await stdlib.mapSet(map1, v1405, v1410);
      const v1423 = stdlib.safeAdd(v1380, stdlib.checkedBigNumberify('./index.rsh:204:31:decimal', stdlib.UInt_max, '1'));
      const cv1380 = v1423;
      const cv1381 = v1407;
      const cv1388 = v1388;
      
      v1380 = cv1380;
      v1381 = cv1381;
      v1388 = cv1388;
      
      continue;
      
      }
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 10,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1428, time: v1427, didSend: v656, from: v1426 } = txn7;
    ;
    const v1429 = stdlib.addressEq(v1183, v1426);
    stdlib.assert(v1429, {
      at: './index.rsh:210:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    const v1430 = ['CheckingWin', null];
    null;
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 11,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1443], secs: v1445, time: v1444, didSend: v693, from: v1442 } = txn8;
    undefined /* setApiDetails */;
    ;
    const v1446 = v1443[stdlib.checkedBigNumberify('./index.rsh:111:17:array', stdlib.UInt_max, '0')];
    const v1447 = stdlib.addressEq(v1442, v1172);
    const v1448 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1442), null);
    const v1449 = {
      None: 0,
      Some: 1
      }[v1448[0]];
    const v1450 = stdlib.eq(v1449, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1451 = v1447 ? v1450 : false;
    stdlib.assert(v1451, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:114:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:214:59:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1453 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1442), null);
    const v1454 = stdlib.fromSome(v1453, stdlib.checkedBigNumberify('./index.rsh:115:55:decimal', stdlib.UInt_max, '0'));
    const v1455 = stdlib.eq(v1454, v1446);
    const v1456 = v1455 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
    const v1457 = stdlib.eq(v1456, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v1457) {
      const v1461 = true;
      await txn8.getOutput('Player_seeWinner', 'v1461', ctc7, v1461);
      await stdlib.mapSet(map1, v1442, undefined /* Nothing */);
      await stdlib.mapSet(map2, v1442, null);
      let v1472 = v1380;
      let v1473 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
      let v1474 = v1444;
      let v1481 = v1388;
      
      while (await (async () => {
        const v1485 = stdlib.gt(v1472, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        
        return v1485;})()) {
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 18,
          out_tys: [ctc6],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1494], secs: v1496, time: v1495, didSend: v785, from: v1493 } = txn9;
        undefined /* setApiDetails */;
        ;
        const v1498 = v1494[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
        const v1499 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1493), null);
        const v1500 = stdlib.fromSome(v1499, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
        const v1501 = stdlib.eq(v1500, v1498);
        const v1502 = v1501 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1503 = stdlib.eq(v1502, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1503) {
          const v1507 = true;
          await txn9.getOutput('Player_seeWinner', 'v1507', ctc7, v1507);
          await stdlib.mapSet(map1, v1493, undefined /* Nothing */);
          await stdlib.mapSet(map2, v1493, null);
          await stdlib.mapSet(map0, v1493, undefined /* Nothing */);
          const v1516 = stdlib.safeAdd(v1473, stdlib.checkedBigNumberify('./index.rsh:233:29:decimal', stdlib.UInt_max, '1'));
          const v1517 = stdlib.safeSub(v1472, stdlib.checkedBigNumberify('./index.rsh:233:45:decimal', stdlib.UInt_max, '1'));
          const cv1472 = v1517;
          const cv1473 = v1516;
          const cv1474 = v1495;
          const cv1481 = v1481;
          
          v1472 = cv1472;
          v1473 = cv1473;
          v1474 = cv1474;
          v1481 = cv1481;
          
          continue;}
        else {
          const v1522 = false;
          await txn9.getOutput('Player_seeWinner', 'v1522', ctc7, v1522);
          await stdlib.mapSet(map1, v1493, undefined /* Nothing */);
          await stdlib.mapSet(map0, v1493, undefined /* Nothing */);
          const v1530 = stdlib.safeSub(v1472, stdlib.checkedBigNumberify('./index.rsh:240:42:decimal', stdlib.UInt_max, '1'));
          const cv1472 = v1530;
          const cv1473 = v1473;
          const cv1474 = v1495;
          const cv1481 = v1481;
          
          v1472 = cv1472;
          v1473 = cv1473;
          v1474 = cv1474;
          v1481 = cv1481;
          
          continue;}
        
        }
      const v1538 = stdlib.sub(v1481, v1299);
      ;
      const v1539 = stdlib.safeDiv(v1299, v1473);
      let v1540 = false;
      let v1541 = v1473;
      let v1542 = v1474;
      let v1549 = v1538;
      
      while (await (async () => {
        const v1553 = stdlib.gt(v1541, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        
        return v1553;})()) {
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 14,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1556, time: v1555, didSend: v842, from: v1554 } = txn9;
        const v1558 = stdlib.add(v1549, v1539);
        ;
        const v1559 = stdlib.addressEq(v1183, v1554);
        stdlib.assert(v1559, {
          at: './index.rsh:253:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Admin'
          });
        if (v1540) {
          let v1639 = v1183;
          let v1640 = v1555;
          let v1647 = v1558;
          
          while (await (async () => {
            const v1651 = stdlib.addressEq(v1639, v1183);
            const v1652 = stdlib.gt(v1541, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
            const v1653 = v1651 ? v1652 : false;
            
            return v1653;})()) {
            const txn10 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 16,
              out_tys: [ctc5],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1664], secs: v1666, time: v1665, didSend: v1012, from: v1663 } = txn10;
            undefined /* setApiDetails */;
            ;
            const v1668 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1663), null);
            const v1669 = {
              None: 0,
              Some: 1
              }[v1668[0]];
            const v1670 = stdlib.eq(v1669, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            stdlib.assert(v1670, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./index.rsh:274:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:27:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)'],
              msg: 'Player is not a winner',
              who: 'Admin'
              });
            const v1672 = null;
            await txn10.getOutput('Player_receivePay', 'v1672', ctc0, v1672);
            await stdlib.mapSet(map2, v1663, undefined /* Nothing */);
            const cv1639 = v1663;
            const cv1640 = v1665;
            const cv1647 = v1647;
            
            v1639 = cv1639;
            v1640 = cv1640;
            v1647 = cv1647;
            
            continue;
            
            }
          const v1684 = stdlib.sub(v1647, v1647);
          ;
          const v1685 = stdlib.safeSub(v1541, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
          const cv1540 = true;
          const cv1541 = v1685;
          const cv1542 = v1640;
          const cv1549 = v1684;
          
          v1540 = cv1540;
          v1541 = cv1541;
          v1542 = cv1542;
          v1549 = cv1549;
          
          continue;}
        else {
          const v1561 = ['PayingWinners', null];
          null;
          const txn10 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 17,
            out_tys: [ctc5],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1572], secs: v1574, time: v1573, didSend: v879, from: v1571 } = txn10;
          undefined /* setApiDetails */;
          ;
          const v1575 = stdlib.addressEq(v1571, v1172);
          const v1576 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1571), null);
          const v1577 = {
            None: 0,
            Some: 1
            }[v1576[0]];
          const v1578 = stdlib.eq(v1577, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v1579 = v1575 ? v1578 : false;
          stdlib.assert(v1579, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:137:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
            msg: null,
            who: 'Admin'
            });
          const v1581 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1571), null);
          const v1582 = {
            None: 0,
            Some: 1
            }[v1581[0]];
          const v1583 = stdlib.eq(v1582, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v1583) {
            const v1584 = null;
            await txn10.getOutput('Player_receivePay', 'v1584', ctc0, v1584);
            await stdlib.mapSet(map0, v1571, undefined /* Nothing */);
            const v1595 = stdlib.sub(v1558, v1558);
            ;
            await stdlib.mapSet(map2, v1172, undefined /* Nothing */);
            const v1601 = stdlib.sub(v1595, v1595);
            ;
            const v1603 = stdlib.safeSub(v1541, stdlib.checkedBigNumberify('./index.rsh:263:71:decimal', stdlib.UInt_max, '1'));
            const cv1540 = true;
            const cv1541 = v1603;
            const cv1542 = v1573;
            const cv1549 = v1601;
            
            v1540 = cv1540;
            v1541 = cv1541;
            v1542 = cv1542;
            v1549 = cv1549;
            
            continue;}
          else {
            const v1611 = null;
            await txn10.getOutput('Player_receivePay', 'v1611', ctc0, v1611);
            await stdlib.mapSet(map0, v1571, undefined /* Nothing */);
            const v1622 = stdlib.sub(v1558, v1558);
            ;
            await stdlib.mapSet(map2, v1172, undefined /* Nothing */);
            const v1628 = stdlib.sub(v1622, v1622);
            ;
            const v1630 = stdlib.safeSub(v1541, stdlib.checkedBigNumberify('./index.rsh:263:71:decimal', stdlib.UInt_max, '1'));
            const cv1540 = true;
            const cv1541 = v1630;
            const cv1542 = v1573;
            const cv1549 = v1628;
            
            v1540 = cv1540;
            v1541 = cv1541;
            v1542 = cv1542;
            v1549 = cv1549;
            
            continue;}
          
          }
        
        }
      const v1690 = stdlib.sub(v1549, v1549);
      ;
      const v1691 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
      const cv1186 = v1691;
      const cv1187 = v1542;
      const cv1194 = v1690;
      
      v1186 = cv1186;
      v1187 = cv1187;
      v1194 = cv1194;
      
      continue;}
    else {
      const v1692 = false;
      await txn8.getOutput('Player_seeWinner', 'v1692', ctc7, v1692);
      await stdlib.mapSet(map1, v1442, undefined /* Nothing */);
      let v1702 = v1380;
      let v1703 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
      let v1704 = v1444;
      let v1711 = v1388;
      
      while (await (async () => {
        const v1715 = stdlib.gt(v1702, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        
        return v1715;})()) {
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 25,
          out_tys: [ctc6],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1724], secs: v1726, time: v1725, didSend: v785, from: v1723 } = txn9;
        undefined /* setApiDetails */;
        ;
        const v1728 = v1724[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
        const v1729 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1723), null);
        const v1730 = stdlib.fromSome(v1729, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
        const v1731 = stdlib.eq(v1730, v1728);
        const v1732 = v1731 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1733 = stdlib.eq(v1732, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1733) {
          const v1737 = true;
          await txn9.getOutput('Player_seeWinner', 'v1737', ctc7, v1737);
          await stdlib.mapSet(map1, v1723, undefined /* Nothing */);
          await stdlib.mapSet(map2, v1723, null);
          await stdlib.mapSet(map0, v1723, undefined /* Nothing */);
          const v1746 = stdlib.safeAdd(v1703, stdlib.checkedBigNumberify('./index.rsh:233:29:decimal', stdlib.UInt_max, '1'));
          const v1747 = stdlib.safeSub(v1702, stdlib.checkedBigNumberify('./index.rsh:233:45:decimal', stdlib.UInt_max, '1'));
          const cv1702 = v1747;
          const cv1703 = v1746;
          const cv1704 = v1725;
          const cv1711 = v1711;
          
          v1702 = cv1702;
          v1703 = cv1703;
          v1704 = cv1704;
          v1711 = cv1711;
          
          continue;}
        else {
          const v1752 = false;
          await txn9.getOutput('Player_seeWinner', 'v1752', ctc7, v1752);
          await stdlib.mapSet(map1, v1723, undefined /* Nothing */);
          await stdlib.mapSet(map0, v1723, undefined /* Nothing */);
          const v1760 = stdlib.safeSub(v1702, stdlib.checkedBigNumberify('./index.rsh:240:42:decimal', stdlib.UInt_max, '1'));
          const cv1702 = v1760;
          const cv1703 = v1703;
          const cv1704 = v1725;
          const cv1711 = v1711;
          
          v1702 = cv1702;
          v1703 = cv1703;
          v1704 = cv1704;
          v1711 = cv1711;
          
          continue;}
        
        }
      const v1768 = stdlib.sub(v1711, v1299);
      ;
      const v1769 = stdlib.safeDiv(v1299, v1703);
      let v1770 = false;
      let v1771 = v1703;
      let v1772 = v1704;
      let v1779 = v1768;
      
      while (await (async () => {
        const v1783 = stdlib.gt(v1771, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        
        return v1783;})()) {
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 21,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1786, time: v1785, didSend: v842, from: v1784 } = txn9;
        const v1788 = stdlib.add(v1779, v1769);
        ;
        const v1789 = stdlib.addressEq(v1183, v1784);
        stdlib.assert(v1789, {
          at: './index.rsh:253:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Admin'
          });
        if (v1770) {
          let v1869 = v1183;
          let v1870 = v1785;
          let v1877 = v1788;
          
          while (await (async () => {
            const v1881 = stdlib.addressEq(v1869, v1183);
            const v1882 = stdlib.gt(v1771, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
            const v1883 = v1881 ? v1882 : false;
            
            return v1883;})()) {
            const txn10 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 23,
              out_tys: [ctc5],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1894], secs: v1896, time: v1895, didSend: v1012, from: v1893 } = txn10;
            undefined /* setApiDetails */;
            ;
            const v1898 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1893), null);
            const v1899 = {
              None: 0,
              Some: 1
              }[v1898[0]];
            const v1900 = stdlib.eq(v1899, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            stdlib.assert(v1900, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./index.rsh:274:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:27:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)'],
              msg: 'Player is not a winner',
              who: 'Admin'
              });
            const v1902 = null;
            await txn10.getOutput('Player_receivePay', 'v1902', ctc0, v1902);
            await stdlib.mapSet(map2, v1893, undefined /* Nothing */);
            const cv1869 = v1893;
            const cv1870 = v1895;
            const cv1877 = v1877;
            
            v1869 = cv1869;
            v1870 = cv1870;
            v1877 = cv1877;
            
            continue;
            
            }
          const v1914 = stdlib.sub(v1877, v1877);
          ;
          const v1915 = stdlib.safeSub(v1771, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
          const cv1770 = true;
          const cv1771 = v1915;
          const cv1772 = v1870;
          const cv1779 = v1914;
          
          v1770 = cv1770;
          v1771 = cv1771;
          v1772 = cv1772;
          v1779 = cv1779;
          
          continue;}
        else {
          const v1791 = ['PayingWinners', null];
          null;
          const txn10 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 24,
            out_tys: [ctc5],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1802], secs: v1804, time: v1803, didSend: v879, from: v1801 } = txn10;
          undefined /* setApiDetails */;
          ;
          const v1805 = stdlib.addressEq(v1801, v1172);
          const v1806 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1801), null);
          const v1807 = {
            None: 0,
            Some: 1
            }[v1806[0]];
          const v1808 = stdlib.eq(v1807, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v1809 = v1805 ? v1808 : false;
          stdlib.assert(v1809, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:137:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
            msg: null,
            who: 'Admin'
            });
          const v1811 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1801), null);
          const v1812 = {
            None: 0,
            Some: 1
            }[v1811[0]];
          const v1813 = stdlib.eq(v1812, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v1813) {
            const v1814 = null;
            await txn10.getOutput('Player_receivePay', 'v1814', ctc0, v1814);
            await stdlib.mapSet(map0, v1801, undefined /* Nothing */);
            const v1838 = stdlib.sub(v1788, v1788);
            ;
            const cv1770 = true;
            const cv1771 = v1771;
            const cv1772 = v1803;
            const cv1779 = v1838;
            
            v1770 = cv1770;
            v1771 = cv1771;
            v1772 = cv1772;
            v1779 = cv1779;
            
            continue;}
          else {
            const v1841 = null;
            await txn10.getOutput('Player_receivePay', 'v1841', ctc0, v1841);
            await stdlib.mapSet(map0, v1801, undefined /* Nothing */);
            const v1865 = stdlib.sub(v1788, v1788);
            ;
            const cv1770 = true;
            const cv1771 = v1771;
            const cv1772 = v1803;
            const cv1779 = v1865;
            
            v1770 = cv1770;
            v1771 = cv1771;
            v1772 = cv1772;
            v1779 = cv1779;
            
            continue;}
          
          }
        
        }
      const v1920 = stdlib.sub(v1779, v1779);
      ;
      const v1921 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
      const cv1186 = v1921;
      const cv1187 = v1772;
      const cv1194 = v1920;
      
      v1186 = cv1186;
      v1187 = cv1187;
      v1194 = cv1194;
      
      continue;}
    
    
    
    
    
    
    
    
    
    }
  const v1922 = ['Finished', null];
  null;
  return;
  
  
  
  
  
  
  };
export async function Game(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Game expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Game expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc2, ctc2, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1173, v1174, v1175], secs: v1177, time: v1176, didSend: v48, from: v1172 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1180, time: v1179, didSend: v53, from: v1178 } = txn2;
  ;
  const v1181 = stdlib.addressEq(v1172, v1178);
  stdlib.assert(v1181, {
    at: './index.rsh:63:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Game'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v1172, v1173, v1174, v1175],
    evt_cnt: 0,
    funcNum: 2,
    lct: v1179,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:67:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1185, time: v1184, didSend: v61, from: v1183 } = txn3;
      
      ;
      const v1186 = v1175;
      const v1187 = v1184;
      const v1194 = stdlib.checkedBigNumberify('./index.rsh:55:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1197 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
        
        return v1197;})()) {
        const v1198 = ['Joining', null];
        null;
        sim_r.isHalt = false;
        }
      else {
        const v1922 = ['Finished', null];
        null;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1185, time: v1184, didSend: v61, from: v1183 } = txn3;
  ;
  let v1186 = v1175;
  let v1187 = v1184;
  let v1194 = stdlib.checkedBigNumberify('./index.rsh:55:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1197 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
    
    return v1197;})()) {
    const v1198 = ['Joining', null];
    null;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1210], secs: v1212, time: v1211, didSend: v106, from: v1209 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v1213 = stdlib.addressEq(v1209, v1172);
    const v1214 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1209), null);
    const v1215 = {
      None: 0,
      Some: 1
      }[v1214[0]];
    const v1216 = stdlib.eq(v1215, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1217 = v1216 ? false : true;
    const v1218 = v1213 ? v1217 : false;
    stdlib.assert(v1218, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:155:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1220 = null;
    await txn4.getOutput('Player_join', 'v1220', ctc0, v1220);
    await stdlib.mapSet(map0, v1209, null);
    let v1227 = stdlib.checkedBigNumberify('./index.rsh:158:22:decimal', stdlib.UInt_max, '0');
    let v1228 = v1211;
    let v1235 = v1194;
    
    while (await (async () => {
      const v1240 = stdlib.safeSub(v1173, stdlib.checkedBigNumberify('./index.rsh:161:40:decimal', stdlib.UInt_max, '1'));
      const v1241 = stdlib.lt(v1227, v1240);
      
      return v1241;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 28,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1253], secs: v1255, time: v1254, didSend: v217, from: v1252 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v1257 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1252), null);
      const v1258 = {
        None: 0,
        Some: 1
        }[v1257[0]];
      const v1259 = stdlib.eq(v1258, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1260 = v1259 ? false : true;
      stdlib.assert(v1260, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:164:20:application call to [unknown function] (defined at: ./index.rsh:164:20:function exp)'],
        msg: null,
        who: 'Game'
        });
      const v1262 = null;
      await txn5.getOutput('Player_join', 'v1262', ctc0, v1262);
      await stdlib.mapSet(map0, v1252, null);
      const v1269 = stdlib.safeAdd(v1227, stdlib.checkedBigNumberify('./index.rsh:167:33:decimal', stdlib.UInt_max, '1'));
      const cv1227 = v1269;
      const cv1228 = v1254;
      const cv1235 = v1235;
      
      v1227 = cv1227;
      v1228 = cv1228;
      v1235 = cv1235;
      
      continue;
      
      }
    const v1271 = ['Wagering', null];
    null;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1282], secs: v1284, time: v1283, didSend: v289, from: v1281 } = txn5;
    undefined /* setApiDetails */;
    const v1286 = stdlib.add(v1235, v1174);
    ;
    const v1287 = stdlib.addressEq(v1281, v1172);
    const v1288 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1281), null);
    const v1289 = {
      None: 0,
      Some: 1
      }[v1288[0]];
    const v1290 = stdlib.eq(v1289, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1291 = v1287 ? v1290 : false;
    stdlib.assert(v1291, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:174:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1293 = null;
    await txn5.getOutput('Player_wager', 'v1293', ctc0, v1293);
    let v1299 = v1174;
    let v1300 = v1227;
    let v1301 = v1283;
    let v1308 = v1286;
    
    while (await (async () => {
      const v1312 = stdlib.gt(v1300, stdlib.checkedBigNumberify('./index.rsh:180:32:decimal', stdlib.UInt_max, '0'));
      
      return v1312;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 27,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1327], secs: v1329, time: v1328, didSend: v436, from: v1326 } = txn6;
      undefined /* setApiDetails */;
      const v1331 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
      const v1332 = {
        None: 0,
        Some: 1
        }[v1331[0]];
      const v1333 = stdlib.eq(v1332, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1333, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:182:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)'],
        msg: null,
        who: 'Game'
        });
      const v1336 = stdlib.add(v1308, v1174);
      ;
      const v1341 = null;
      await txn6.getOutput('Player_wager', 'v1341', ctc0, v1341);
      const v1347 = stdlib.safeAdd(v1299, v1174);
      const v1348 = stdlib.safeSub(v1300, stdlib.checkedBigNumberify('./index.rsh:185:55:decimal', stdlib.UInt_max, '1'));
      const cv1299 = v1347;
      const cv1300 = v1348;
      const cv1301 = v1328;
      const cv1308 = v1336;
      
      v1299 = cv1299;
      v1300 = cv1300;
      v1301 = cv1301;
      v1308 = cv1308;
      
      continue;
      
      }
    const v1350 = ['PickingRoles', null];
    null;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1363], secs: v1365, time: v1364, didSend: v504, from: v1362 } = txn6;
    undefined /* setApiDetails */;
    ;
    const v1366 = v1363[stdlib.checkedBigNumberify('./index.rsh:102:17:array', stdlib.UInt_max, '0')];
    const v1367 = stdlib.addressEq(v1362, v1172);
    const v1368 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1362), null);
    const v1369 = {
      None: 0,
      Some: 1
      }[v1368[0]];
    const v1370 = stdlib.eq(v1369, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1371 = v1367 ? v1370 : false;
    stdlib.assert(v1371, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:105:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1373 = null;
    await txn6.getOutput('Player_getRole', 'v1373', ctc0, v1373);
    await stdlib.mapSet(map1, v1362, v1366);
    let v1380 = stdlib.checkedBigNumberify('./index.rsh:195:22:decimal', stdlib.UInt_max, '0');
    let v1381 = v1364;
    let v1388 = v1308;
    
    while (await (async () => {
      const v1392 = stdlib.lt(v1380, v1227);
      
      return v1392;})()) {
      const txn7 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 26,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1406], secs: v1408, time: v1407, didSend: v614, from: v1405 } = txn7;
      undefined /* setApiDetails */;
      ;
      const v1410 = v1406[stdlib.checkedBigNumberify('./index.rsh:199:10:spread', stdlib.UInt_max, '0')];
      const v1411 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1405), null);
      const v1412 = {
        None: 0,
        Some: 1
        }[v1411[0]];
      const v1413 = stdlib.eq(v1412, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1413, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:201:18:application call to [unknown function] (defined at: ./index.rsh:201:18:function exp)'],
        msg: 'Participant is not in the game',
        who: 'Game'
        });
      const v1416 = null;
      await txn7.getOutput('Player_getRole', 'v1416', ctc0, v1416);
      await stdlib.mapSet(map1, v1405, v1410);
      const v1423 = stdlib.safeAdd(v1380, stdlib.checkedBigNumberify('./index.rsh:204:31:decimal', stdlib.UInt_max, '1'));
      const cv1380 = v1423;
      const cv1381 = v1407;
      const cv1388 = v1388;
      
      v1380 = cv1380;
      v1381 = cv1381;
      v1388 = cv1388;
      
      continue;
      
      }
    stdlib.protect(ctc0, await interact.showWinningRole(), {
      at: './index.rsh:209:34:application',
      fs: ['at ./index.rsh:209:34:application call to [unknown function] (defined at: ./index.rsh:209:34:function exp)', 'at ./index.rsh:209:34:application call to "liftedInteract" (defined at: ./index.rsh:209:34:application)'],
      msg: 'showWinningRole',
      who: 'Game'
      });
    
    const txn7 = await (ctc.sendrecv({
      args: [v1172, v1173, v1174, v1183, v1186, v1299, v1380, v1388],
      evt_cnt: 0,
      funcNum: 10,
      lct: v1381,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:210:10:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v1428, time: v1427, didSend: v656, from: v1426 } = txn7;
        
        ;
        const v1430 = ['CheckingWin', null];
        null;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc2, ctc2, ctc7, ctc2, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1428, time: v1427, didSend: v656, from: v1426 } = txn7;
    ;
    const v1429 = stdlib.addressEq(v1183, v1426);
    stdlib.assert(v1429, {
      at: './index.rsh:210:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Game'
      });
    const v1430 = ['CheckingWin', null];
    null;
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 11,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1443], secs: v1445, time: v1444, didSend: v693, from: v1442 } = txn8;
    undefined /* setApiDetails */;
    ;
    const v1446 = v1443[stdlib.checkedBigNumberify('./index.rsh:111:17:array', stdlib.UInt_max, '0')];
    const v1447 = stdlib.addressEq(v1442, v1172);
    const v1448 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1442), null);
    const v1449 = {
      None: 0,
      Some: 1
      }[v1448[0]];
    const v1450 = stdlib.eq(v1449, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1451 = v1447 ? v1450 : false;
    stdlib.assert(v1451, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:114:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:214:59:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1453 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1442), null);
    const v1454 = stdlib.fromSome(v1453, stdlib.checkedBigNumberify('./index.rsh:115:55:decimal', stdlib.UInt_max, '0'));
    const v1455 = stdlib.eq(v1454, v1446);
    const v1456 = v1455 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
    const v1457 = stdlib.eq(v1456, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v1457) {
      const v1461 = true;
      await txn8.getOutput('Player_seeWinner', 'v1461', ctc6, v1461);
      await stdlib.mapSet(map1, v1442, undefined /* Nothing */);
      await stdlib.mapSet(map2, v1442, null);
      let v1472 = v1380;
      let v1473 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
      let v1474 = v1444;
      let v1481 = v1388;
      
      while (await (async () => {
        const v1485 = stdlib.gt(v1472, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        
        return v1485;})()) {
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 18,
          out_tys: [ctc5],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1494], secs: v1496, time: v1495, didSend: v785, from: v1493 } = txn9;
        undefined /* setApiDetails */;
        ;
        const v1498 = v1494[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
        const v1499 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1493), null);
        const v1500 = stdlib.fromSome(v1499, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
        const v1501 = stdlib.eq(v1500, v1498);
        const v1502 = v1501 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1503 = stdlib.eq(v1502, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1503) {
          const v1507 = true;
          await txn9.getOutput('Player_seeWinner', 'v1507', ctc6, v1507);
          await stdlib.mapSet(map1, v1493, undefined /* Nothing */);
          await stdlib.mapSet(map2, v1493, null);
          await stdlib.mapSet(map0, v1493, undefined /* Nothing */);
          const v1516 = stdlib.safeAdd(v1473, stdlib.checkedBigNumberify('./index.rsh:233:29:decimal', stdlib.UInt_max, '1'));
          const v1517 = stdlib.safeSub(v1472, stdlib.checkedBigNumberify('./index.rsh:233:45:decimal', stdlib.UInt_max, '1'));
          const cv1472 = v1517;
          const cv1473 = v1516;
          const cv1474 = v1495;
          const cv1481 = v1481;
          
          v1472 = cv1472;
          v1473 = cv1473;
          v1474 = cv1474;
          v1481 = cv1481;
          
          continue;}
        else {
          const v1522 = false;
          await txn9.getOutput('Player_seeWinner', 'v1522', ctc6, v1522);
          await stdlib.mapSet(map1, v1493, undefined /* Nothing */);
          await stdlib.mapSet(map0, v1493, undefined /* Nothing */);
          const v1530 = stdlib.safeSub(v1472, stdlib.checkedBigNumberify('./index.rsh:240:42:decimal', stdlib.UInt_max, '1'));
          const cv1472 = v1530;
          const cv1473 = v1473;
          const cv1474 = v1495;
          const cv1481 = v1481;
          
          v1472 = cv1472;
          v1473 = cv1473;
          v1474 = cv1474;
          v1481 = cv1481;
          
          continue;}
        
        }
      const v1538 = stdlib.sub(v1481, v1299);
      ;
      const v1539 = stdlib.safeDiv(v1299, v1473);
      let v1540 = false;
      let v1541 = v1473;
      let v1542 = v1474;
      let v1549 = v1538;
      
      while (await (async () => {
        const v1553 = stdlib.gt(v1541, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        
        return v1553;})()) {
        const txn9 = await (ctc.sendrecv({
          args: [v1172, v1173, v1174, v1183, v1186, v1539, v1540, v1541, v1549],
          evt_cnt: 0,
          funcNum: 14,
          lct: v1542,
          onlyIf: true,
          out_tys: [],
          pay: [v1539, []],
          sim_p: (async (txn9) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1556, time: v1555, didSend: v842, from: v1554 } = txn9;
            
            const v1558 = stdlib.add(v1549, v1539);
            sim_r.txns.push({
              amt: v1539,
              kind: 'to',
              tok: undefined /* Nothing */
              });
            if (v1540) {
              
              const v1639 = v1183;
              const v1640 = v1555;
              const v1647 = v1558;
              
              if (await (async () => {
                const v1651 = stdlib.addressEq(v1639, v1183);
                const v1652 = stdlib.gt(v1541, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
                const v1653 = v1651 ? v1652 : false;
                
                return v1653;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1684 = stdlib.sub(v1647, v1647);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1639,
                  tok: undefined /* Nothing */
                  });
                const v1685 = stdlib.safeSub(v1541, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
                const cv1540 = true;
                const cv1541 = v1685;
                const cv1542 = v1640;
                const cv1549 = v1684;
                
                await (async () => {
                  const v1540 = cv1540;
                  const v1541 = cv1541;
                  const v1542 = cv1542;
                  const v1549 = cv1549;
                  
                  if (await (async () => {
                    const v1553 = stdlib.gt(v1541, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
                    
                    return v1553;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1690 = stdlib.sub(v1549, v1549);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v1183,
                      tok: undefined /* Nothing */
                      });
                    const v1691 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
                    const cv1186 = v1691;
                    const cv1187 = v1542;
                    const cv1194 = v1690;
                    
                    await (async () => {
                      const v1186 = cv1186;
                      const v1187 = cv1187;
                      const v1194 = cv1194;
                      
                      if (await (async () => {
                        const v1197 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
                        
                        return v1197;})()) {
                        const v1198 = ['Joining', null];
                        null;
                        sim_r.isHalt = false;
                        }
                      else {
                        const v1922 = ['Finished', null];
                        null;
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }})();}})();}}
            else {
              const v1561 = ['PayingWinners', null];
              null;
              sim_r.isHalt = false;
              }
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc2, ctc2, ctc7, ctc2, ctc2, ctc6, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1556, time: v1555, didSend: v842, from: v1554 } = txn9;
        const v1558 = stdlib.add(v1549, v1539);
        ;
        const v1559 = stdlib.addressEq(v1183, v1554);
        stdlib.assert(v1559, {
          at: './index.rsh:253:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Game'
          });
        if (v1540) {
          stdlib.protect(ctc0, await interact.payApiWinners(), {
            at: './index.rsh:267:36:application',
            fs: ['at ./index.rsh:267:36:application call to [unknown function] (defined at: ./index.rsh:267:36:function exp)', 'at ./index.rsh:267:36:application call to "liftedInteract" (defined at: ./index.rsh:267:36:application)'],
            msg: 'payApiWinners',
            who: 'Game'
            });
          
          let v1639 = v1183;
          let v1640 = v1555;
          let v1647 = v1558;
          
          while (await (async () => {
            const v1651 = stdlib.addressEq(v1639, v1183);
            const v1652 = stdlib.gt(v1541, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
            const v1653 = v1651 ? v1652 : false;
            
            return v1653;})()) {
            const txn10 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 16,
              out_tys: [ctc4],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1664], secs: v1666, time: v1665, didSend: v1012, from: v1663 } = txn10;
            undefined /* setApiDetails */;
            ;
            const v1668 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1663), null);
            const v1669 = {
              None: 0,
              Some: 1
              }[v1668[0]];
            const v1670 = stdlib.eq(v1669, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            stdlib.assert(v1670, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./index.rsh:274:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:27:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)'],
              msg: 'Player is not a winner',
              who: 'Game'
              });
            const v1672 = null;
            await txn10.getOutput('Player_receivePay', 'v1672', ctc0, v1672);
            await stdlib.mapSet(map2, v1663, undefined /* Nothing */);
            const cv1639 = v1663;
            const cv1640 = v1665;
            const cv1647 = v1647;
            
            v1639 = cv1639;
            v1640 = cv1640;
            v1647 = cv1647;
            
            continue;
            
            }
          const v1684 = stdlib.sub(v1647, v1647);
          ;
          const v1685 = stdlib.safeSub(v1541, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
          const cv1540 = true;
          const cv1541 = v1685;
          const cv1542 = v1640;
          const cv1549 = v1684;
          
          v1540 = cv1540;
          v1541 = cv1541;
          v1542 = cv1542;
          v1549 = cv1549;
          
          continue;}
        else {
          const v1561 = ['PayingWinners', null];
          null;
          const txn10 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 17,
            out_tys: [ctc4],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1572], secs: v1574, time: v1573, didSend: v879, from: v1571 } = txn10;
          undefined /* setApiDetails */;
          ;
          const v1575 = stdlib.addressEq(v1571, v1172);
          const v1576 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1571), null);
          const v1577 = {
            None: 0,
            Some: 1
            }[v1576[0]];
          const v1578 = stdlib.eq(v1577, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v1579 = v1575 ? v1578 : false;
          stdlib.assert(v1579, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:137:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
            msg: null,
            who: 'Game'
            });
          const v1581 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1571), null);
          const v1582 = {
            None: 0,
            Some: 1
            }[v1581[0]];
          const v1583 = stdlib.eq(v1582, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v1583) {
            const v1584 = null;
            await txn10.getOutput('Player_receivePay', 'v1584', ctc0, v1584);
            await stdlib.mapSet(map0, v1571, undefined /* Nothing */);
            const v1595 = stdlib.sub(v1558, v1558);
            ;
            await stdlib.mapSet(map2, v1172, undefined /* Nothing */);
            const v1601 = stdlib.sub(v1595, v1595);
            ;
            const v1603 = stdlib.safeSub(v1541, stdlib.checkedBigNumberify('./index.rsh:263:71:decimal', stdlib.UInt_max, '1'));
            const cv1540 = true;
            const cv1541 = v1603;
            const cv1542 = v1573;
            const cv1549 = v1601;
            
            v1540 = cv1540;
            v1541 = cv1541;
            v1542 = cv1542;
            v1549 = cv1549;
            
            continue;}
          else {
            const v1611 = null;
            await txn10.getOutput('Player_receivePay', 'v1611', ctc0, v1611);
            await stdlib.mapSet(map0, v1571, undefined /* Nothing */);
            const v1622 = stdlib.sub(v1558, v1558);
            ;
            await stdlib.mapSet(map2, v1172, undefined /* Nothing */);
            const v1628 = stdlib.sub(v1622, v1622);
            ;
            const v1630 = stdlib.safeSub(v1541, stdlib.checkedBigNumberify('./index.rsh:263:71:decimal', stdlib.UInt_max, '1'));
            const cv1540 = true;
            const cv1541 = v1630;
            const cv1542 = v1573;
            const cv1549 = v1628;
            
            v1540 = cv1540;
            v1541 = cv1541;
            v1542 = cv1542;
            v1549 = cv1549;
            
            continue;}
          
          }
        
        }
      const v1690 = stdlib.sub(v1549, v1549);
      ;
      const v1691 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
      const cv1186 = v1691;
      const cv1187 = v1542;
      const cv1194 = v1690;
      
      v1186 = cv1186;
      v1187 = cv1187;
      v1194 = cv1194;
      
      continue;}
    else {
      const v1692 = false;
      await txn8.getOutput('Player_seeWinner', 'v1692', ctc6, v1692);
      await stdlib.mapSet(map1, v1442, undefined /* Nothing */);
      let v1702 = v1380;
      let v1703 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
      let v1704 = v1444;
      let v1711 = v1388;
      
      while (await (async () => {
        const v1715 = stdlib.gt(v1702, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        
        return v1715;})()) {
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 25,
          out_tys: [ctc5],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1724], secs: v1726, time: v1725, didSend: v785, from: v1723 } = txn9;
        undefined /* setApiDetails */;
        ;
        const v1728 = v1724[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
        const v1729 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1723), null);
        const v1730 = stdlib.fromSome(v1729, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
        const v1731 = stdlib.eq(v1730, v1728);
        const v1732 = v1731 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1733 = stdlib.eq(v1732, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1733) {
          const v1737 = true;
          await txn9.getOutput('Player_seeWinner', 'v1737', ctc6, v1737);
          await stdlib.mapSet(map1, v1723, undefined /* Nothing */);
          await stdlib.mapSet(map2, v1723, null);
          await stdlib.mapSet(map0, v1723, undefined /* Nothing */);
          const v1746 = stdlib.safeAdd(v1703, stdlib.checkedBigNumberify('./index.rsh:233:29:decimal', stdlib.UInt_max, '1'));
          const v1747 = stdlib.safeSub(v1702, stdlib.checkedBigNumberify('./index.rsh:233:45:decimal', stdlib.UInt_max, '1'));
          const cv1702 = v1747;
          const cv1703 = v1746;
          const cv1704 = v1725;
          const cv1711 = v1711;
          
          v1702 = cv1702;
          v1703 = cv1703;
          v1704 = cv1704;
          v1711 = cv1711;
          
          continue;}
        else {
          const v1752 = false;
          await txn9.getOutput('Player_seeWinner', 'v1752', ctc6, v1752);
          await stdlib.mapSet(map1, v1723, undefined /* Nothing */);
          await stdlib.mapSet(map0, v1723, undefined /* Nothing */);
          const v1760 = stdlib.safeSub(v1702, stdlib.checkedBigNumberify('./index.rsh:240:42:decimal', stdlib.UInt_max, '1'));
          const cv1702 = v1760;
          const cv1703 = v1703;
          const cv1704 = v1725;
          const cv1711 = v1711;
          
          v1702 = cv1702;
          v1703 = cv1703;
          v1704 = cv1704;
          v1711 = cv1711;
          
          continue;}
        
        }
      const v1768 = stdlib.sub(v1711, v1299);
      ;
      const v1769 = stdlib.safeDiv(v1299, v1703);
      let v1770 = false;
      let v1771 = v1703;
      let v1772 = v1704;
      let v1779 = v1768;
      
      while (await (async () => {
        const v1783 = stdlib.gt(v1771, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        
        return v1783;})()) {
        const txn9 = await (ctc.sendrecv({
          args: [v1172, v1173, v1174, v1183, v1186, v1769, v1770, v1771, v1779],
          evt_cnt: 0,
          funcNum: 21,
          lct: v1772,
          onlyIf: true,
          out_tys: [],
          pay: [v1769, []],
          sim_p: (async (txn9) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1786, time: v1785, didSend: v842, from: v1784 } = txn9;
            
            const v1788 = stdlib.add(v1779, v1769);
            sim_r.txns.push({
              amt: v1769,
              kind: 'to',
              tok: undefined /* Nothing */
              });
            if (v1770) {
              
              const v1869 = v1183;
              const v1870 = v1785;
              const v1877 = v1788;
              
              if (await (async () => {
                const v1881 = stdlib.addressEq(v1869, v1183);
                const v1882 = stdlib.gt(v1771, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
                const v1883 = v1881 ? v1882 : false;
                
                return v1883;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1914 = stdlib.sub(v1877, v1877);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1869,
                  tok: undefined /* Nothing */
                  });
                const v1915 = stdlib.safeSub(v1771, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
                const cv1770 = true;
                const cv1771 = v1915;
                const cv1772 = v1870;
                const cv1779 = v1914;
                
                await (async () => {
                  const v1770 = cv1770;
                  const v1771 = cv1771;
                  const v1772 = cv1772;
                  const v1779 = cv1779;
                  
                  if (await (async () => {
                    const v1783 = stdlib.gt(v1771, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
                    
                    return v1783;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1920 = stdlib.sub(v1779, v1779);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v1183,
                      tok: undefined /* Nothing */
                      });
                    const v1921 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
                    const cv1186 = v1921;
                    const cv1187 = v1772;
                    const cv1194 = v1920;
                    
                    await (async () => {
                      const v1186 = cv1186;
                      const v1187 = cv1187;
                      const v1194 = cv1194;
                      
                      if (await (async () => {
                        const v1197 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
                        
                        return v1197;})()) {
                        const v1198 = ['Joining', null];
                        null;
                        sim_r.isHalt = false;
                        }
                      else {
                        const v1922 = ['Finished', null];
                        null;
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }})();}})();}}
            else {
              const v1791 = ['PayingWinners', null];
              null;
              sim_r.isHalt = false;
              }
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc2, ctc2, ctc7, ctc2, ctc2, ctc6, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1786, time: v1785, didSend: v842, from: v1784 } = txn9;
        const v1788 = stdlib.add(v1779, v1769);
        ;
        const v1789 = stdlib.addressEq(v1183, v1784);
        stdlib.assert(v1789, {
          at: './index.rsh:253:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Game'
          });
        if (v1770) {
          stdlib.protect(ctc0, await interact.payApiWinners(), {
            at: './index.rsh:267:36:application',
            fs: ['at ./index.rsh:267:36:application call to [unknown function] (defined at: ./index.rsh:267:36:function exp)', 'at ./index.rsh:267:36:application call to "liftedInteract" (defined at: ./index.rsh:267:36:application)'],
            msg: 'payApiWinners',
            who: 'Game'
            });
          
          let v1869 = v1183;
          let v1870 = v1785;
          let v1877 = v1788;
          
          while (await (async () => {
            const v1881 = stdlib.addressEq(v1869, v1183);
            const v1882 = stdlib.gt(v1771, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
            const v1883 = v1881 ? v1882 : false;
            
            return v1883;})()) {
            const txn10 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 23,
              out_tys: [ctc4],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1894], secs: v1896, time: v1895, didSend: v1012, from: v1893 } = txn10;
            undefined /* setApiDetails */;
            ;
            const v1898 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1893), null);
            const v1899 = {
              None: 0,
              Some: 1
              }[v1898[0]];
            const v1900 = stdlib.eq(v1899, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            stdlib.assert(v1900, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./index.rsh:274:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:27:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)'],
              msg: 'Player is not a winner',
              who: 'Game'
              });
            const v1902 = null;
            await txn10.getOutput('Player_receivePay', 'v1902', ctc0, v1902);
            await stdlib.mapSet(map2, v1893, undefined /* Nothing */);
            const cv1869 = v1893;
            const cv1870 = v1895;
            const cv1877 = v1877;
            
            v1869 = cv1869;
            v1870 = cv1870;
            v1877 = cv1877;
            
            continue;
            
            }
          const v1914 = stdlib.sub(v1877, v1877);
          ;
          const v1915 = stdlib.safeSub(v1771, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
          const cv1770 = true;
          const cv1771 = v1915;
          const cv1772 = v1870;
          const cv1779 = v1914;
          
          v1770 = cv1770;
          v1771 = cv1771;
          v1772 = cv1772;
          v1779 = cv1779;
          
          continue;}
        else {
          const v1791 = ['PayingWinners', null];
          null;
          const txn10 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 24,
            out_tys: [ctc4],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1802], secs: v1804, time: v1803, didSend: v879, from: v1801 } = txn10;
          undefined /* setApiDetails */;
          ;
          const v1805 = stdlib.addressEq(v1801, v1172);
          const v1806 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1801), null);
          const v1807 = {
            None: 0,
            Some: 1
            }[v1806[0]];
          const v1808 = stdlib.eq(v1807, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v1809 = v1805 ? v1808 : false;
          stdlib.assert(v1809, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:137:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
            msg: null,
            who: 'Game'
            });
          const v1811 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1801), null);
          const v1812 = {
            None: 0,
            Some: 1
            }[v1811[0]];
          const v1813 = stdlib.eq(v1812, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v1813) {
            const v1814 = null;
            await txn10.getOutput('Player_receivePay', 'v1814', ctc0, v1814);
            await stdlib.mapSet(map0, v1801, undefined /* Nothing */);
            const v1838 = stdlib.sub(v1788, v1788);
            ;
            const cv1770 = true;
            const cv1771 = v1771;
            const cv1772 = v1803;
            const cv1779 = v1838;
            
            v1770 = cv1770;
            v1771 = cv1771;
            v1772 = cv1772;
            v1779 = cv1779;
            
            continue;}
          else {
            const v1841 = null;
            await txn10.getOutput('Player_receivePay', 'v1841', ctc0, v1841);
            await stdlib.mapSet(map0, v1801, undefined /* Nothing */);
            const v1865 = stdlib.sub(v1788, v1788);
            ;
            const cv1770 = true;
            const cv1771 = v1771;
            const cv1772 = v1803;
            const cv1779 = v1865;
            
            v1770 = cv1770;
            v1771 = cv1771;
            v1772 = cv1772;
            v1779 = cv1779;
            
            continue;}
          
          }
        
        }
      const v1920 = stdlib.sub(v1779, v1779);
      ;
      const v1921 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
      const cv1186 = v1921;
      const cv1187 = v1772;
      const cv1194 = v1920;
      
      v1186 = cv1186;
      v1187 = cv1187;
      v1194 = cv1194;
      
      continue;}
    
    
    
    
    
    
    
    
    
    }
  const v1922 = ['Finished', null];
  null;
  return;
  
  
  
  
  
  
  };
export async function _Player_getRole9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_getRole9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_getRole9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc2]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1172, v1173, v1174, v1183, v1186, v1227, v1299, v1308] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2]);
  const v1351 = ctc.selfAddress();
  const v1353 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:102:9:application',
    fs: ['at ./index.rsh:102:9:application call to [unknown function] (defined at: ./index.rsh:102:9:function exp)', 'at ./index.rsh:192:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'in',
    who: 'Player_getRole'
    });
  const v1356 = stdlib.addressEq(v1351, v1172);
  const v1357 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1351), null);
  const v1358 = {
    None: 0,
    Some: 1
    }[v1357[0]];
  const v1359 = stdlib.eq(v1358, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1360 = v1356 ? v1359 : false;
  stdlib.assert(v1360, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:104:32:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:102:9:application call to [unknown function] (defined at: ./index.rsh:104:24:function exp)', 'at ./index.rsh:102:9:application call to [unknown function] (defined at: ./index.rsh:102:9:function exp)', 'at ./index.rsh:192:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_getRole'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1172, v1173, v1174, v1183, v1186, v1227, v1299, v1308, v1353],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:102:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1363], secs: v1365, time: v1364, didSend: v504, from: v1362 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_getRole"
        });
      ;
      const v1366 = v1363[stdlib.checkedBigNumberify('./index.rsh:102:17:array', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1362), null);
      const v1373 = null;
      const v1374 = await txn1.getOutput('Player_getRole', 'v1373', ctc0, v1373);
      
      await stdlib.simMapSet(sim_r, 1, v1362, v1366);
      const v3104 = stdlib.checkedBigNumberify('./index.rsh:195:22:decimal', stdlib.UInt_max, '0');
      const v3106 = v1308;
      const v3107 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:195:22:decimal', stdlib.UInt_max, '0'), v1227);
      if (v3107) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1363], secs: v1365, time: v1364, didSend: v504, from: v1362 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1366 = v1363[stdlib.checkedBigNumberify('./index.rsh:102:17:array', stdlib.UInt_max, '0')];
  const v1367 = stdlib.addressEq(v1362, v1172);
  const v1368 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1362), null);
  const v1369 = {
    None: 0,
    Some: 1
    }[v1368[0]];
  const v1370 = stdlib.eq(v1369, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1371 = v1367 ? v1370 : false;
  stdlib.assert(v1371, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:105:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_getRole'
    });
  const v1373 = null;
  const v1374 = await txn1.getOutput('Player_getRole', 'v1373', ctc0, v1373);
  stdlib.protect(ctc0, await interact.out(v1363, v1374), {
    at: './index.rsh:102:9:application',
    fs: ['at ./index.rsh:102:9:application call to [unknown function] (defined at: ./index.rsh:102:9:function exp)', 'at ./index.rsh:106:10:application call to "k" (defined at: ./index.rsh:102:9:function exp)', 'at ./index.rsh:192:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'out',
    who: 'Player_getRole'
    });
  
  await stdlib.mapSet(map1, v1362, v1366);
  const v3104 = stdlib.checkedBigNumberify('./index.rsh:195:22:decimal', stdlib.UInt_max, '0');
  const v3106 = v1308;
  const v3107 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:195:22:decimal', stdlib.UInt_max, '0'), v1227);
  if (v3107) {
    return;
    }
  else {
    return;
    }
  
  
  };
export async function _Player_getRole27(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_getRole27 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_getRole27 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc2]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1172, v1173, v1174, v1183, v1186, v1227, v1299, v1380, v1388] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1393 = ctc.selfAddress();
  const v1395 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:199:34:application call to [unknown function] (defined at: ./index.rsh:199:34:function exp)', 'at ./index.rsh:199:34:application call to [unknown function] (defined at: ./index.rsh:199:34:function exp)'],
    msg: 'in',
    who: 'Player_getRole'
    });
  const v1398 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1393), null);
  const v1399 = {
    None: 0,
    Some: 1
    }[v1398[0]];
  const v1400 = stdlib.eq(v1399, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1400, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:199:34:application call to [unknown function] (defined at: ./index.rsh:199:34:function exp)', 'at ./index.rsh:199:34:application call to [unknown function] (defined at: ./index.rsh:199:34:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_getRole'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1172, v1173, v1174, v1183, v1186, v1227, v1299, v1380, v1388, v1395],
    evt_cnt: 1,
    funcNum: 26,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:199:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1406], secs: v1408, time: v1407, didSend: v614, from: v1405 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_getRole"
        });
      ;
      const v1410 = v1406[stdlib.checkedBigNumberify('./index.rsh:199:10:spread', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1405), null);
      const v1416 = null;
      const v1417 = await txn1.getOutput('Player_getRole', 'v1416', ctc0, v1416);
      
      await stdlib.simMapSet(sim_r, 1, v1405, v1410);
      const v1423 = stdlib.safeAdd(v1380, stdlib.checkedBigNumberify('./index.rsh:204:31:decimal', stdlib.UInt_max, '1'));
      const v3290 = v1423;
      const v3292 = v1388;
      const v3293 = stdlib.lt(v1423, v1227);
      if (v3293) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1406], secs: v1408, time: v1407, didSend: v614, from: v1405 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1410 = v1406[stdlib.checkedBigNumberify('./index.rsh:199:10:spread', stdlib.UInt_max, '0')];
  const v1411 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1405), null);
  const v1412 = {
    None: 0,
    Some: 1
    }[v1411[0]];
  const v1413 = stdlib.eq(v1412, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1413, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:201:18:application call to [unknown function] (defined at: ./index.rsh:201:18:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_getRole'
    });
  const v1416 = null;
  const v1417 = await txn1.getOutput('Player_getRole', 'v1416', ctc0, v1416);
  if (v614) {
    stdlib.protect(ctc0, await interact.out(v1406, v1417), {
      at: './index.rsh:199:11:application',
      fs: ['at ./index.rsh:199:11:application call to [unknown function] (defined at: ./index.rsh:199:11:function exp)', 'at ./index.rsh:202:10:application call to "k" (defined at: ./index.rsh:201:18:function exp)', 'at ./index.rsh:201:18:application call to [unknown function] (defined at: ./index.rsh:201:18:function exp)'],
      msg: 'out',
      who: 'Player_getRole'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map1, v1405, v1410);
  const v1423 = stdlib.safeAdd(v1380, stdlib.checkedBigNumberify('./index.rsh:204:31:decimal', stdlib.UInt_max, '1'));
  const v3290 = v1423;
  const v3292 = v1388;
  const v3293 = stdlib.lt(v1423, v1227);
  if (v3293) {
    return;
    }
  else {
    return;
    }
  
  
  };
export async function _Player_join5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_join5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_join5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1172, v1173, v1174, v1183, v1186, v1194] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2]);
  const v1199 = ctc.selfAddress();
  const v1201 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:83:9:application',
    fs: ['at ./index.rsh:83:9:application call to [unknown function] (defined at: ./index.rsh:83:9:function exp)', 'at ./index.rsh:155:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'in',
    who: 'Player_join'
    });
  const v1202 = stdlib.addressEq(v1199, v1172);
  const v1203 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1199), null);
  const v1204 = {
    None: 0,
    Some: 1
    }[v1203[0]];
  const v1205 = stdlib.eq(v1204, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1206 = v1205 ? false : true;
  const v1207 = v1202 ? v1206 : false;
  stdlib.assert(v1207, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:85:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:9:application call to [unknown function] (defined at: ./index.rsh:85:20:function exp)', 'at ./index.rsh:83:9:application call to [unknown function] (defined at: ./index.rsh:83:9:function exp)', 'at ./index.rsh:155:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1172, v1173, v1174, v1183, v1186, v1194, v1201],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:83:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1210], secs: v1212, time: v1211, didSend: v106, from: v1209 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_join"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1209), null);
      const v1220 = null;
      const v1221 = await txn1.getOutput('Player_join', 'v1220', ctc0, v1220);
      
      await stdlib.simMapSet(sim_r, 0, v1209, null);
      const v3476 = stdlib.checkedBigNumberify('./index.rsh:158:22:decimal', stdlib.UInt_max, '0');
      const v3478 = v1194;
      const v3479 = stdlib.safeSub(v1173, stdlib.checkedBigNumberify('./index.rsh:161:40:decimal', stdlib.UInt_max, '1'));
      const v3480 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:158:22:decimal', stdlib.UInt_max, '0'), v3479);
      if (v3480) {
        sim_r.isHalt = false;
        }
      else {
        const v3481 = ['Wagering', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1210], secs: v1212, time: v1211, didSend: v106, from: v1209 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1213 = stdlib.addressEq(v1209, v1172);
  const v1214 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1209), null);
  const v1215 = {
    None: 0,
    Some: 1
    }[v1214[0]];
  const v1216 = stdlib.eq(v1215, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1217 = v1216 ? false : true;
  const v1218 = v1213 ? v1217 : false;
  stdlib.assert(v1218, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:155:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  const v1220 = null;
  const v1221 = await txn1.getOutput('Player_join', 'v1220', ctc0, v1220);
  stdlib.protect(ctc0, await interact.out(v1210, v1221), {
    at: './index.rsh:83:9:application',
    fs: ['at ./index.rsh:83:9:application call to [unknown function] (defined at: ./index.rsh:83:9:function exp)', 'at ./index.rsh:87:10:application call to "k" (defined at: ./index.rsh:83:9:function exp)', 'at ./index.rsh:155:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'out',
    who: 'Player_join'
    });
  
  await stdlib.mapSet(map0, v1209, null);
  const v3476 = stdlib.checkedBigNumberify('./index.rsh:158:22:decimal', stdlib.UInt_max, '0');
  const v3478 = v1194;
  const v3479 = stdlib.safeSub(v1173, stdlib.checkedBigNumberify('./index.rsh:161:40:decimal', stdlib.UInt_max, '1'));
  const v3480 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:158:22:decimal', stdlib.UInt_max, '0'), v3479);
  if (v3480) {
    return;
    }
  else {
    const v3481 = ['Wagering', null];
    null;
    return;
    }
  
  
  };
export async function _Player_join29(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_join29 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_join29 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1172, v1173, v1174, v1183, v1186, v1227, v1235] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '29'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2]);
  const v1242 = ctc.selfAddress();
  const v1244 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:162:27:application call to [unknown function] (defined at: ./index.rsh:162:27:function exp)', 'at ./index.rsh:162:27:application call to [unknown function] (defined at: ./index.rsh:162:27:function exp)'],
    msg: 'in',
    who: 'Player_join'
    });
  const v1245 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1242), null);
  const v1246 = {
    None: 0,
    Some: 1
    }[v1245[0]];
  const v1247 = stdlib.eq(v1246, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1248 = v1247 ? false : true;
  stdlib.assert(v1248, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:162:27:application call to [unknown function] (defined at: ./index.rsh:162:27:function exp)', 'at ./index.rsh:162:27:application call to [unknown function] (defined at: ./index.rsh:162:27:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1172, v1173, v1174, v1183, v1186, v1227, v1235, v1244],
    evt_cnt: 1,
    funcNum: 28,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:162:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1253], secs: v1255, time: v1254, didSend: v217, from: v1252 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_join"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1252), null);
      const v1262 = null;
      const v1263 = await txn1.getOutput('Player_join', 'v1262', ctc0, v1262);
      
      await stdlib.simMapSet(sim_r, 0, v1252, null);
      const v1269 = stdlib.safeAdd(v1227, stdlib.checkedBigNumberify('./index.rsh:167:33:decimal', stdlib.UInt_max, '1'));
      const v3725 = v1269;
      const v3727 = v1235;
      const v3728 = stdlib.safeSub(v1173, stdlib.checkedBigNumberify('./index.rsh:161:40:decimal', stdlib.UInt_max, '1'));
      const v3729 = stdlib.lt(v1269, v3728);
      if (v3729) {
        sim_r.isHalt = false;
        }
      else {
        const v3730 = ['Wagering', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1253], secs: v1255, time: v1254, didSend: v217, from: v1252 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1257 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1252), null);
  const v1258 = {
    None: 0,
    Some: 1
    }[v1257[0]];
  const v1259 = stdlib.eq(v1258, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1260 = v1259 ? false : true;
  stdlib.assert(v1260, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:164:20:application call to [unknown function] (defined at: ./index.rsh:164:20:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  const v1262 = null;
  const v1263 = await txn1.getOutput('Player_join', 'v1262', ctc0, v1262);
  if (v217) {
    stdlib.protect(ctc0, await interact.out(v1253, v1263), {
      at: './index.rsh:162:11:application',
      fs: ['at ./index.rsh:162:11:application call to [unknown function] (defined at: ./index.rsh:162:11:function exp)', 'at ./index.rsh:165:10:application call to "k" (defined at: ./index.rsh:164:20:function exp)', 'at ./index.rsh:164:20:application call to [unknown function] (defined at: ./index.rsh:164:20:function exp)'],
      msg: 'out',
      who: 'Player_join'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v1252, null);
  const v1269 = stdlib.safeAdd(v1227, stdlib.checkedBigNumberify('./index.rsh:167:33:decimal', stdlib.UInt_max, '1'));
  const v3725 = v1269;
  const v3727 = v1235;
  const v3728 = stdlib.safeSub(v1173, stdlib.checkedBigNumberify('./index.rsh:161:40:decimal', stdlib.UInt_max, '1'));
  const v3729 = stdlib.lt(v1269, v3728);
  if (v3729) {
    return;
    }
  else {
    const v3730 = ['Wagering', null];
    null;
    return;
    }
  
  
  };
export async function _Player_receivePay17(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay17 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay17 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1172, v1173, v1174, v1183, v1186, v1539, v1541, v1647] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2]);
  const v1654 = ctc.selfAddress();
  const v1656 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:273:41:application call to [unknown function] (defined at: ./index.rsh:273:41:function exp)', 'at ./index.rsh:273:41:application call to [unknown function] (defined at: ./index.rsh:273:41:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1657 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1654), null);
  const v1658 = {
    None: 0,
    Some: 1
    }[v1657[0]];
  const v1659 = stdlib.eq(v1658, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1659, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:274:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:273:41:application call to [unknown function] (defined at: ./index.rsh:273:41:function exp)', 'at ./index.rsh:273:41:application call to [unknown function] (defined at: ./index.rsh:273:41:function exp)'],
    msg: 'Player is not a winner',
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1172, v1173, v1174, v1183, v1186, v1539, v1541, v1647, v1656],
    evt_cnt: 1,
    funcNum: 16,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:273:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1664], secs: v1666, time: v1665, didSend: v1012, from: v1663 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1663), null);
      const v1672 = null;
      const v1673 = await txn1.getOutput('Player_receivePay', 'v1672', ctc0, v1672);
      
      await stdlib.simMapSet(sim_r, 2, v1663, undefined /* Nothing */);
      const v3976 = v1647;
      const v3977 = stdlib.addressEq(v1663, v1183);
      const v3978 = stdlib.gt(v1541, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
      const v3979 = v3977 ? v3978 : false;
      if (v3979) {
        sim_r.isHalt = false;
        }
      else {
        const v3980 = stdlib.sub(v1647, v1647);
        sim_r.txns.push({
          kind: 'from',
          to: v1663,
          tok: undefined /* Nothing */
          });
        const v3981 = stdlib.safeSub(v1541, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
        const v3982 = true;
        const v3983 = v3981;
        const v3985 = v3980;
        const v3986 = stdlib.gt(v3981, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        if (v3986) {
          sim_r.isHalt = false;
          }
        else {
          const v3987 = stdlib.sub(v3980, v3980);
          sim_r.txns.push({
            kind: 'from',
            to: v1183,
            tok: undefined /* Nothing */
            });
          const v3988 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
          const v3989 = v3988;
          const v3991 = v3987;
          const v3992 = stdlib.gt(v3988, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
          if (v3992) {
            const v3993 = ['Joining', null];
            null;
            sim_r.isHalt = false;
            }
          else {
            const v3994 = ['Finished', null];
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1664], secs: v1666, time: v1665, didSend: v1012, from: v1663 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1668 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1663), null);
  const v1669 = {
    None: 0,
    Some: 1
    }[v1668[0]];
  const v1670 = stdlib.eq(v1669, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1670, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:274:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:27:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)'],
    msg: 'Player is not a winner',
    who: 'Player_receivePay'
    });
  const v1672 = null;
  const v1673 = await txn1.getOutput('Player_receivePay', 'v1672', ctc0, v1672);
  if (v1012) {
    stdlib.protect(ctc0, await interact.out(v1664, v1673), {
      at: './index.rsh:273:19:application',
      fs: ['at ./index.rsh:273:19:application call to [unknown function] (defined at: ./index.rsh:273:19:function exp)', 'at ./index.rsh:276:18:application call to "k" (defined at: ./index.rsh:275:27:function exp)', 'at ./index.rsh:275:27:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map2, v1663, undefined /* Nothing */);
  const v3976 = v1647;
  const v3977 = stdlib.addressEq(v1663, v1183);
  const v3978 = stdlib.gt(v1541, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
  const v3979 = v3977 ? v3978 : false;
  if (v3979) {
    return;
    }
  else {
    const v3980 = stdlib.sub(v1647, v1647);
    ;
    const v3981 = stdlib.safeSub(v1541, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
    const v3982 = true;
    const v3983 = v3981;
    const v3985 = v3980;
    const v3986 = stdlib.gt(v3981, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
    if (v3986) {
      return;
      }
    else {
      const v3987 = stdlib.sub(v3980, v3980);
      ;
      const v3988 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
      const v3989 = v3988;
      const v3991 = v3987;
      const v3992 = stdlib.gt(v3988, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
      if (v3992) {
        const v3993 = ['Joining', null];
        null;
        return;
        }
      else {
        const v3994 = ['Finished', null];
        null;
        return;
        }}}
  
  
  };
export async function _Player_receivePay18(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay18 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay18 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1172, v1173, v1174, v1183, v1186, v1539, v1541, v1558] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '18'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2]);
  const v1562 = ctc.selfAddress();
  const v1564 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:134:9:application',
    fs: ['at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1565 = stdlib.addressEq(v1562, v1172);
  const v1566 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1562), null);
  const v1567 = {
    None: 0,
    Some: 1
    }[v1566[0]];
  const v1568 = stdlib.eq(v1567, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1569 = v1565 ? v1568 : false;
  stdlib.assert(v1569, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:136:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:136:20:function exp)', 'at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1172, v1173, v1174, v1183, v1186, v1539, v1541, v1558, v1564],
    evt_cnt: 1,
    funcNum: 17,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:134:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1572], secs: v1574, time: v1573, didSend: v879, from: v1571 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1571), null);
      const v1581 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1571), null);
      const v1582 = {
        None: 0,
        Some: 1
        }[v1581[0]];
      const v1583 = stdlib.eq(v1582, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1583) {
        const v1584 = null;
        const v1585 = await txn1.getOutput('Player_receivePay', 'v1584', ctc0, v1584);
        
        await stdlib.simMapSet(sim_r, 0, v1571, undefined /* Nothing */);
        const v1595 = stdlib.sub(v1558, v1558);
        sim_r.txns.push({
          kind: 'from',
          to: v1172,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1172, undefined /* Nothing */);
        const v1601 = stdlib.sub(v1595, v1595);
        sim_r.txns.push({
          kind: 'from',
          to: v1183,
          tok: undefined /* Nothing */
          });
        const v1603 = stdlib.safeSub(v1541, stdlib.checkedBigNumberify('./index.rsh:263:71:decimal', stdlib.UInt_max, '1'));
        const v3995 = true;
        const v3996 = v1603;
        const v3998 = v1601;
        const v3999 = stdlib.gt(v1603, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        if (v3999) {
          sim_r.isHalt = false;
          }
        else {
          const v4000 = stdlib.sub(v1601, v1601);
          sim_r.txns.push({
            kind: 'from',
            to: v1183,
            tok: undefined /* Nothing */
            });
          const v4001 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
          const v4002 = v4001;
          const v4004 = v4000;
          const v4005 = stdlib.gt(v4001, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
          if (v4005) {
            const v4006 = ['Joining', null];
            null;
            sim_r.isHalt = false;
            }
          else {
            const v4007 = ['Finished', null];
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1611 = null;
        const v1612 = await txn1.getOutput('Player_receivePay', 'v1611', ctc0, v1611);
        
        await stdlib.simMapSet(sim_r, 0, v1571, undefined /* Nothing */);
        const v1622 = stdlib.sub(v1558, v1558);
        sim_r.txns.push({
          kind: 'from',
          to: v1172,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1172, undefined /* Nothing */);
        const v1628 = stdlib.sub(v1622, v1622);
        sim_r.txns.push({
          kind: 'from',
          to: v1183,
          tok: undefined /* Nothing */
          });
        const v1630 = stdlib.safeSub(v1541, stdlib.checkedBigNumberify('./index.rsh:263:71:decimal', stdlib.UInt_max, '1'));
        const v4008 = true;
        const v4009 = v1630;
        const v4011 = v1628;
        const v4012 = stdlib.gt(v1630, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        if (v4012) {
          sim_r.isHalt = false;
          }
        else {
          const v4013 = stdlib.sub(v1628, v1628);
          sim_r.txns.push({
            kind: 'from',
            to: v1183,
            tok: undefined /* Nothing */
            });
          const v4014 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
          const v4015 = v4014;
          const v4017 = v4013;
          const v4018 = stdlib.gt(v4014, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
          if (v4018) {
            const v4019 = ['Joining', null];
            null;
            sim_r.isHalt = false;
            }
          else {
            const v4020 = ['Finished', null];
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1572], secs: v1574, time: v1573, didSend: v879, from: v1571 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1575 = stdlib.addressEq(v1571, v1172);
  const v1576 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1571), null);
  const v1577 = {
    None: 0,
    Some: 1
    }[v1576[0]];
  const v1578 = stdlib.eq(v1577, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1579 = v1575 ? v1578 : false;
  stdlib.assert(v1579, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:137:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_receivePay'
    });
  const v1581 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1571), null);
  const v1582 = {
    None: 0,
    Some: 1
    }[v1581[0]];
  const v1583 = stdlib.eq(v1582, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v1583) {
    const v1584 = null;
    const v1585 = await txn1.getOutput('Player_receivePay', 'v1584', ctc0, v1584);
    stdlib.protect(ctc0, await interact.out(v1572, v1585), {
      at: './index.rsh:134:9:application',
      fs: ['at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:140:12:application call to "k" (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    
    await stdlib.mapSet(map0, v1571, undefined /* Nothing */);
    const v1595 = stdlib.sub(v1558, v1558);
    ;
    await stdlib.mapSet(map2, v1172, undefined /* Nothing */);
    const v1601 = stdlib.sub(v1595, v1595);
    ;
    const v1603 = stdlib.safeSub(v1541, stdlib.checkedBigNumberify('./index.rsh:263:71:decimal', stdlib.UInt_max, '1'));
    const v3995 = true;
    const v3996 = v1603;
    const v3998 = v1601;
    const v3999 = stdlib.gt(v1603, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
    if (v3999) {
      return;
      }
    else {
      const v4000 = stdlib.sub(v1601, v1601);
      ;
      const v4001 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
      const v4002 = v4001;
      const v4004 = v4000;
      const v4005 = stdlib.gt(v4001, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
      if (v4005) {
        const v4006 = ['Joining', null];
        null;
        return;
        }
      else {
        const v4007 = ['Finished', null];
        null;
        return;
        }}}
  else {
    const v1611 = null;
    const v1612 = await txn1.getOutput('Player_receivePay', 'v1611', ctc0, v1611);
    stdlib.protect(ctc0, await interact.out(v1572, v1612), {
      at: './index.rsh:134:9:application',
      fs: ['at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:145:12:application call to "k" (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    
    await stdlib.mapSet(map0, v1571, undefined /* Nothing */);
    const v1622 = stdlib.sub(v1558, v1558);
    ;
    await stdlib.mapSet(map2, v1172, undefined /* Nothing */);
    const v1628 = stdlib.sub(v1622, v1622);
    ;
    const v1630 = stdlib.safeSub(v1541, stdlib.checkedBigNumberify('./index.rsh:263:71:decimal', stdlib.UInt_max, '1'));
    const v4008 = true;
    const v4009 = v1630;
    const v4011 = v1628;
    const v4012 = stdlib.gt(v1630, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
    if (v4012) {
      return;
      }
    else {
      const v4013 = stdlib.sub(v1628, v1628);
      ;
      const v4014 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
      const v4015 = v4014;
      const v4017 = v4013;
      const v4018 = stdlib.gt(v4014, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
      if (v4018) {
        const v4019 = ['Joining', null];
        null;
        return;
        }
      else {
        const v4020 = ['Finished', null];
        null;
        return;
        }}}
  
  
  };
export async function _Player_receivePay24(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay24 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay24 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1172, v1173, v1174, v1183, v1186, v1769, v1771, v1877] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '24'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2]);
  const v1884 = ctc.selfAddress();
  const v1886 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:273:41:application call to [unknown function] (defined at: ./index.rsh:273:41:function exp)', 'at ./index.rsh:273:41:application call to [unknown function] (defined at: ./index.rsh:273:41:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1887 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1884), null);
  const v1888 = {
    None: 0,
    Some: 1
    }[v1887[0]];
  const v1889 = stdlib.eq(v1888, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1889, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:274:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:273:41:application call to [unknown function] (defined at: ./index.rsh:273:41:function exp)', 'at ./index.rsh:273:41:application call to [unknown function] (defined at: ./index.rsh:273:41:function exp)'],
    msg: 'Player is not a winner',
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1172, v1173, v1174, v1183, v1186, v1769, v1771, v1877, v1886],
    evt_cnt: 1,
    funcNum: 23,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:273:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1894], secs: v1896, time: v1895, didSend: v1012, from: v1893 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1893), null);
      const v1902 = null;
      const v1903 = await txn1.getOutput('Player_receivePay', 'v1902', ctc0, v1902);
      
      await stdlib.simMapSet(sim_r, 2, v1893, undefined /* Nothing */);
      const v4023 = v1877;
      const v4024 = stdlib.addressEq(v1893, v1183);
      const v4025 = stdlib.gt(v1771, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
      const v4026 = v4024 ? v4025 : false;
      if (v4026) {
        sim_r.isHalt = false;
        }
      else {
        const v4027 = stdlib.sub(v1877, v1877);
        sim_r.txns.push({
          kind: 'from',
          to: v1893,
          tok: undefined /* Nothing */
          });
        const v4028 = stdlib.safeSub(v1771, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
        const v4029 = true;
        const v4030 = v4028;
        const v4032 = v4027;
        const v4033 = stdlib.gt(v4028, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        if (v4033) {
          sim_r.isHalt = false;
          }
        else {
          const v4034 = stdlib.sub(v4027, v4027);
          sim_r.txns.push({
            kind: 'from',
            to: v1183,
            tok: undefined /* Nothing */
            });
          const v4035 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
          const v4036 = v4035;
          const v4038 = v4034;
          const v4039 = stdlib.gt(v4035, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
          if (v4039) {
            const v4040 = ['Joining', null];
            null;
            sim_r.isHalt = false;
            }
          else {
            const v4041 = ['Finished', null];
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1894], secs: v1896, time: v1895, didSend: v1012, from: v1893 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1898 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1893), null);
  const v1899 = {
    None: 0,
    Some: 1
    }[v1898[0]];
  const v1900 = stdlib.eq(v1899, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1900, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:274:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:27:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)'],
    msg: 'Player is not a winner',
    who: 'Player_receivePay'
    });
  const v1902 = null;
  const v1903 = await txn1.getOutput('Player_receivePay', 'v1902', ctc0, v1902);
  if (v1012) {
    stdlib.protect(ctc0, await interact.out(v1894, v1903), {
      at: './index.rsh:273:19:application',
      fs: ['at ./index.rsh:273:19:application call to [unknown function] (defined at: ./index.rsh:273:19:function exp)', 'at ./index.rsh:276:18:application call to "k" (defined at: ./index.rsh:275:27:function exp)', 'at ./index.rsh:275:27:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map2, v1893, undefined /* Nothing */);
  const v4023 = v1877;
  const v4024 = stdlib.addressEq(v1893, v1183);
  const v4025 = stdlib.gt(v1771, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
  const v4026 = v4024 ? v4025 : false;
  if (v4026) {
    return;
    }
  else {
    const v4027 = stdlib.sub(v1877, v1877);
    ;
    const v4028 = stdlib.safeSub(v1771, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
    const v4029 = true;
    const v4030 = v4028;
    const v4032 = v4027;
    const v4033 = stdlib.gt(v4028, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
    if (v4033) {
      return;
      }
    else {
      const v4034 = stdlib.sub(v4027, v4027);
      ;
      const v4035 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
      const v4036 = v4035;
      const v4038 = v4034;
      const v4039 = stdlib.gt(v4035, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
      if (v4039) {
        const v4040 = ['Joining', null];
        null;
        return;
        }
      else {
        const v4041 = ['Finished', null];
        null;
        return;
        }}}
  
  
  };
export async function _Player_receivePay25(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay25 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay25 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1172, v1173, v1174, v1183, v1186, v1769, v1771, v1788] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2]);
  const v1792 = ctc.selfAddress();
  const v1794 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:134:9:application',
    fs: ['at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1795 = stdlib.addressEq(v1792, v1172);
  const v1796 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1792), null);
  const v1797 = {
    None: 0,
    Some: 1
    }[v1796[0]];
  const v1798 = stdlib.eq(v1797, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1799 = v1795 ? v1798 : false;
  stdlib.assert(v1799, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:136:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:136:20:function exp)', 'at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1172, v1173, v1174, v1183, v1186, v1769, v1771, v1788, v1794],
    evt_cnt: 1,
    funcNum: 24,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:134:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1802], secs: v1804, time: v1803, didSend: v879, from: v1801 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1801), null);
      const v1811 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1801), null);
      const v1812 = {
        None: 0,
        Some: 1
        }[v1811[0]];
      const v1813 = stdlib.eq(v1812, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1813) {
        const v1814 = null;
        const v1815 = await txn1.getOutput('Player_receivePay', 'v1814', ctc0, v1814);
        
        await stdlib.simMapSet(sim_r, 0, v1801, undefined /* Nothing */);
        const v1838 = stdlib.sub(v1788, v1788);
        sim_r.txns.push({
          kind: 'from',
          to: v1183,
          tok: undefined /* Nothing */
          });
        const v4042 = true;
        const v4043 = v1771;
        const v4045 = v1838;
        const v4046 = stdlib.gt(v1771, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        if (v4046) {
          sim_r.isHalt = false;
          }
        else {
          const v4047 = stdlib.sub(v1838, v1838);
          sim_r.txns.push({
            kind: 'from',
            to: v1183,
            tok: undefined /* Nothing */
            });
          const v4048 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
          const v4049 = v4048;
          const v4051 = v4047;
          const v4052 = stdlib.gt(v4048, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
          if (v4052) {
            const v4053 = ['Joining', null];
            null;
            sim_r.isHalt = false;
            }
          else {
            const v4054 = ['Finished', null];
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1841 = null;
        const v1842 = await txn1.getOutput('Player_receivePay', 'v1841', ctc0, v1841);
        
        await stdlib.simMapSet(sim_r, 0, v1801, undefined /* Nothing */);
        const v1865 = stdlib.sub(v1788, v1788);
        sim_r.txns.push({
          kind: 'from',
          to: v1183,
          tok: undefined /* Nothing */
          });
        const v4055 = true;
        const v4056 = v1771;
        const v4058 = v1865;
        const v4059 = stdlib.gt(v1771, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        if (v4059) {
          sim_r.isHalt = false;
          }
        else {
          const v4060 = stdlib.sub(v1865, v1865);
          sim_r.txns.push({
            kind: 'from',
            to: v1183,
            tok: undefined /* Nothing */
            });
          const v4061 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
          const v4062 = v4061;
          const v4064 = v4060;
          const v4065 = stdlib.gt(v4061, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
          if (v4065) {
            const v4066 = ['Joining', null];
            null;
            sim_r.isHalt = false;
            }
          else {
            const v4067 = ['Finished', null];
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1802], secs: v1804, time: v1803, didSend: v879, from: v1801 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1805 = stdlib.addressEq(v1801, v1172);
  const v1806 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1801), null);
  const v1807 = {
    None: 0,
    Some: 1
    }[v1806[0]];
  const v1808 = stdlib.eq(v1807, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1809 = v1805 ? v1808 : false;
  stdlib.assert(v1809, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:137:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_receivePay'
    });
  const v1811 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1801), null);
  const v1812 = {
    None: 0,
    Some: 1
    }[v1811[0]];
  const v1813 = stdlib.eq(v1812, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v1813) {
    const v1814 = null;
    const v1815 = await txn1.getOutput('Player_receivePay', 'v1814', ctc0, v1814);
    stdlib.protect(ctc0, await interact.out(v1802, v1815), {
      at: './index.rsh:134:9:application',
      fs: ['at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:140:12:application call to "k" (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    
    await stdlib.mapSet(map0, v1801, undefined /* Nothing */);
    const v1838 = stdlib.sub(v1788, v1788);
    ;
    const v4042 = true;
    const v4043 = v1771;
    const v4045 = v1838;
    const v4046 = stdlib.gt(v1771, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
    if (v4046) {
      return;
      }
    else {
      const v4047 = stdlib.sub(v1838, v1838);
      ;
      const v4048 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
      const v4049 = v4048;
      const v4051 = v4047;
      const v4052 = stdlib.gt(v4048, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
      if (v4052) {
        const v4053 = ['Joining', null];
        null;
        return;
        }
      else {
        const v4054 = ['Finished', null];
        null;
        return;
        }}}
  else {
    const v1841 = null;
    const v1842 = await txn1.getOutput('Player_receivePay', 'v1841', ctc0, v1841);
    stdlib.protect(ctc0, await interact.out(v1802, v1842), {
      at: './index.rsh:134:9:application',
      fs: ['at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:145:12:application call to "k" (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    
    await stdlib.mapSet(map0, v1801, undefined /* Nothing */);
    const v1865 = stdlib.sub(v1788, v1788);
    ;
    const v4055 = true;
    const v4056 = v1771;
    const v4058 = v1865;
    const v4059 = stdlib.gt(v1771, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
    if (v4059) {
      return;
      }
    else {
      const v4060 = stdlib.sub(v1865, v1865);
      ;
      const v4061 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
      const v4062 = v4061;
      const v4064 = v4060;
      const v4065 = stdlib.gt(v4061, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
      if (v4065) {
        const v4066 = ['Joining', null];
        null;
        return;
        }
      else {
        const v4067 = ['Finished', null];
        null;
        return;
        }}}
  
  
  };
export async function _Player_seeWinner12(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_seeWinner12 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_seeWinner12 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1172, v1173, v1174, v1183, v1186, v1299, v1380, v1388] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2]);
  const v1431 = ctc.selfAddress();
  const v1433 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:111:9:application',
    fs: ['at ./index.rsh:111:9:application call to [unknown function] (defined at: ./index.rsh:111:9:function exp)', 'at ./index.rsh:214:59:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'in',
    who: 'Player_seeWinner'
    });
  const v1436 = stdlib.addressEq(v1431, v1172);
  const v1437 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1431), null);
  const v1438 = {
    None: 0,
    Some: 1
    }[v1437[0]];
  const v1439 = stdlib.eq(v1438, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1440 = v1436 ? v1439 : false;
  stdlib.assert(v1440, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:113:33:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:111:9:application call to [unknown function] (defined at: ./index.rsh:113:25:function exp)', 'at ./index.rsh:111:9:application call to [unknown function] (defined at: ./index.rsh:111:9:function exp)', 'at ./index.rsh:214:59:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1172, v1173, v1174, v1183, v1186, v1299, v1380, v1388, v1433],
    evt_cnt: 1,
    funcNum: 11,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:111:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1443], secs: v1445, time: v1444, didSend: v693, from: v1442 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_seeWinner"
        });
      ;
      const v1446 = v1443[stdlib.checkedBigNumberify('./index.rsh:111:17:array', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1442), null);
      const v1453 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1442), null);
      const v1454 = stdlib.fromSome(v1453, stdlib.checkedBigNumberify('./index.rsh:115:55:decimal', stdlib.UInt_max, '0'));
      const v1455 = stdlib.eq(v1454, v1446);
      const v1456 = v1455 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
      const v1457 = stdlib.eq(v1456, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v1457) {
        const v1461 = true;
        const v1462 = await txn1.getOutput('Player_seeWinner', 'v1461', ctc6, v1461);
        
        await stdlib.simMapSet(sim_r, 1, v1442, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 2, v1442, null);
        const v4068 = v1380;
        const v4069 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
        const v4071 = v1388;
        const v4072 = stdlib.gt(v1380, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4072) {
          sim_r.isHalt = false;
          }
        else {
          const v4073 = stdlib.sub(v1388, v1299);
          sim_r.txns.push({
            kind: 'from',
            to: v1183,
            tok: undefined /* Nothing */
            });
          const v4074 = v1299;
          const v4130 = false;
          const v4131 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
          const v4133 = v4073;
          sim_r.isHalt = false;
          }}
      else {
        const v1692 = false;
        const v1693 = await txn1.getOutput('Player_seeWinner', 'v1692', ctc6, v1692);
        
        await stdlib.simMapSet(sim_r, 1, v1442, undefined /* Nothing */);
        const v4143 = v1380;
        const v4144 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
        const v4146 = v1388;
        const v4147 = stdlib.gt(v1380, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4147) {
          sim_r.isHalt = false;
          }
        else {
          const v4148 = stdlib.sub(v1388, v1299);
          sim_r.txns.push({
            kind: 'from',
            to: v1183,
            tok: undefined /* Nothing */
            });
          const v4206 = stdlib.sub(v4148, v4148);
          sim_r.txns.push({
            kind: 'from',
            to: v1183,
            tok: undefined /* Nothing */
            });
          const v4207 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
          const v4208 = v4207;
          const v4210 = v4206;
          const v4211 = stdlib.gt(v4207, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
          if (v4211) {
            const v4212 = ['Joining', null];
            null;
            sim_r.isHalt = false;
            }
          else {
            const v4213 = ['Finished', null];
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1443], secs: v1445, time: v1444, didSend: v693, from: v1442 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1446 = v1443[stdlib.checkedBigNumberify('./index.rsh:111:17:array', stdlib.UInt_max, '0')];
  const v1447 = stdlib.addressEq(v1442, v1172);
  const v1448 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1442), null);
  const v1449 = {
    None: 0,
    Some: 1
    }[v1448[0]];
  const v1450 = stdlib.eq(v1449, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1451 = v1447 ? v1450 : false;
  stdlib.assert(v1451, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:114:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:214:59:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_seeWinner'
    });
  const v1453 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1442), null);
  const v1454 = stdlib.fromSome(v1453, stdlib.checkedBigNumberify('./index.rsh:115:55:decimal', stdlib.UInt_max, '0'));
  const v1455 = stdlib.eq(v1454, v1446);
  const v1456 = v1455 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
  const v1457 = stdlib.eq(v1456, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v1457) {
    const v1461 = true;
    const v1462 = await txn1.getOutput('Player_seeWinner', 'v1461', ctc6, v1461);
    stdlib.protect(ctc0, await interact.out(v1443, v1462), {
      at: './index.rsh:111:9:application',
      fs: ['at ./index.rsh:111:9:application call to [unknown function] (defined at: ./index.rsh:111:9:function exp)', 'at ./index.rsh:120:12:application call to "k" (defined at: ./index.rsh:111:9:function exp)', 'at ./index.rsh:214:59:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: 'out',
      who: 'Player_seeWinner'
      });
    
    await stdlib.mapSet(map1, v1442, undefined /* Nothing */);
    await stdlib.mapSet(map2, v1442, null);
    const v4068 = v1380;
    const v4069 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
    const v4071 = v1388;
    const v4072 = stdlib.gt(v1380, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4072) {
      return;
      }
    else {
      const v4073 = stdlib.sub(v1388, v1299);
      ;
      const v4074 = v1299;
      const v4130 = false;
      const v4131 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
      const v4133 = v4073;
      return;
      }}
  else {
    const v1692 = false;
    const v1693 = await txn1.getOutput('Player_seeWinner', 'v1692', ctc6, v1692);
    stdlib.protect(ctc0, await interact.out(v1443, v1693), {
      at: './index.rsh:111:9:application',
      fs: ['at ./index.rsh:111:9:application call to [unknown function] (defined at: ./index.rsh:111:9:function exp)', 'at ./index.rsh:127:12:application call to "k" (defined at: ./index.rsh:111:9:function exp)', 'at ./index.rsh:214:59:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: 'out',
      who: 'Player_seeWinner'
      });
    
    await stdlib.mapSet(map1, v1442, undefined /* Nothing */);
    const v4143 = v1380;
    const v4144 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
    const v4146 = v1388;
    const v4147 = stdlib.gt(v1380, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4147) {
      return;
      }
    else {
      const v4148 = stdlib.sub(v1388, v1299);
      ;
      const v4206 = stdlib.sub(v4148, v4148);
      ;
      const v4207 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
      const v4208 = v4207;
      const v4210 = v4206;
      const v4211 = stdlib.gt(v4207, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
      if (v4211) {
        const v4212 = ['Joining', null];
        null;
        return;
        }
      else {
        const v4213 = ['Finished', null];
        null;
        return;
        }}}
  
  
  };
export async function _Player_seeWinner19(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_seeWinner19 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_seeWinner19 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1172, v1173, v1174, v1183, v1186, v1299, v1472, v1473, v1481] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '19'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1488 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:221:9:application call to [unknown function] (defined at: ./index.rsh:221:9:function exp)', 'at ./index.rsh:221:9:application call to [unknown function] (defined at: ./index.rsh:221:9:function exp)'],
    msg: 'in',
    who: 'Player_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1172, v1173, v1174, v1183, v1186, v1299, v1472, v1473, v1481, v1488],
    evt_cnt: 1,
    funcNum: 18,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:221:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1494], secs: v1496, time: v1495, didSend: v785, from: v1493 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_seeWinner"
        });
      ;
      const v1498 = v1494[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
      const v1499 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1493), null);
      const v1500 = stdlib.fromSome(v1499, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
      const v1501 = stdlib.eq(v1500, v1498);
      const v1502 = v1501 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
      const v1503 = stdlib.eq(v1502, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v1503) {
        const v1507 = true;
        const v1508 = await txn1.getOutput('Player_seeWinner', 'v1507', ctc6, v1507);
        
        await stdlib.simMapSet(sim_r, 1, v1493, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 2, v1493, null);
        await stdlib.simMapSet(sim_r, 0, v1493, undefined /* Nothing */);
        const v1516 = stdlib.safeAdd(v1473, stdlib.checkedBigNumberify('./index.rsh:233:29:decimal', stdlib.UInt_max, '1'));
        const v1517 = stdlib.safeSub(v1472, stdlib.checkedBigNumberify('./index.rsh:233:45:decimal', stdlib.UInt_max, '1'));
        const v4214 = v1517;
        const v4215 = v1516;
        const v4217 = v1481;
        const v4218 = stdlib.gt(v1517, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4218) {
          sim_r.isHalt = false;
          }
        else {
          const v4219 = stdlib.sub(v1481, v1299);
          sim_r.txns.push({
            kind: 'from',
            to: v1183,
            tok: undefined /* Nothing */
            });
          const v4220 = stdlib.safeDiv(v1299, v1516);
          const v4276 = false;
          const v4277 = v1516;
          const v4279 = v4219;
          const v4280 = stdlib.gt(v1516, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
          if (v4280) {
            sim_r.isHalt = false;
            }
          else {
            const v4281 = stdlib.sub(v4219, v4219);
            sim_r.txns.push({
              kind: 'from',
              to: v1183,
              tok: undefined /* Nothing */
              });
            const v4282 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
            const v4283 = v4282;
            const v4285 = v4281;
            const v4286 = stdlib.gt(v4282, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
            if (v4286) {
              const v4287 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4288 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1522 = false;
        const v1523 = await txn1.getOutput('Player_seeWinner', 'v1522', ctc6, v1522);
        
        await stdlib.simMapSet(sim_r, 1, v1493, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 0, v1493, undefined /* Nothing */);
        const v1530 = stdlib.safeSub(v1472, stdlib.checkedBigNumberify('./index.rsh:240:42:decimal', stdlib.UInt_max, '1'));
        const v4289 = v1530;
        const v4290 = v1473;
        const v4292 = v1481;
        const v4293 = stdlib.gt(v1530, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4293) {
          sim_r.isHalt = false;
          }
        else {
          const v4294 = stdlib.sub(v1481, v1299);
          sim_r.txns.push({
            kind: 'from',
            to: v1183,
            tok: undefined /* Nothing */
            });
          const v4295 = stdlib.safeDiv(v1299, v1473);
          const v4351 = false;
          const v4352 = v1473;
          const v4354 = v4294;
          const v4355 = stdlib.gt(v1473, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
          if (v4355) {
            sim_r.isHalt = false;
            }
          else {
            const v4356 = stdlib.sub(v4294, v4294);
            sim_r.txns.push({
              kind: 'from',
              to: v1183,
              tok: undefined /* Nothing */
              });
            const v4357 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
            const v4358 = v4357;
            const v4360 = v4356;
            const v4361 = stdlib.gt(v4357, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
            if (v4361) {
              const v4362 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4363 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1494], secs: v1496, time: v1495, didSend: v785, from: v1493 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1498 = v1494[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
  const v1499 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1493), null);
  const v1500 = stdlib.fromSome(v1499, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
  const v1501 = stdlib.eq(v1500, v1498);
  const v1502 = v1501 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
  const v1503 = stdlib.eq(v1502, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v1503) {
    const v1507 = true;
    const v1508 = await txn1.getOutput('Player_seeWinner', 'v1507', ctc6, v1507);
    if (v785) {
      stdlib.protect(ctc0, await interact.out(v1494, v1508), {
        at: './index.rsh:221:10:application',
        fs: ['at ./index.rsh:221:10:application call to [unknown function] (defined at: ./index.rsh:221:10:function exp)', 'at ./index.rsh:229:12:application call to "k" (defined at: ./index.rsh:222:17:function exp)', 'at ./index.rsh:222:17:application call to [unknown function] (defined at: ./index.rsh:222:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1493, undefined /* Nothing */);
    await stdlib.mapSet(map2, v1493, null);
    await stdlib.mapSet(map0, v1493, undefined /* Nothing */);
    const v1516 = stdlib.safeAdd(v1473, stdlib.checkedBigNumberify('./index.rsh:233:29:decimal', stdlib.UInt_max, '1'));
    const v1517 = stdlib.safeSub(v1472, stdlib.checkedBigNumberify('./index.rsh:233:45:decimal', stdlib.UInt_max, '1'));
    const v4214 = v1517;
    const v4215 = v1516;
    const v4217 = v1481;
    const v4218 = stdlib.gt(v1517, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4218) {
      return;
      }
    else {
      const v4219 = stdlib.sub(v1481, v1299);
      ;
      const v4220 = stdlib.safeDiv(v1299, v1516);
      const v4276 = false;
      const v4277 = v1516;
      const v4279 = v4219;
      const v4280 = stdlib.gt(v1516, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
      if (v4280) {
        return;
        }
      else {
        const v4281 = stdlib.sub(v4219, v4219);
        ;
        const v4282 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
        const v4283 = v4282;
        const v4285 = v4281;
        const v4286 = stdlib.gt(v4282, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
        if (v4286) {
          const v4287 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4288 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1522 = false;
    const v1523 = await txn1.getOutput('Player_seeWinner', 'v1522', ctc6, v1522);
    if (v785) {
      stdlib.protect(ctc0, await interact.out(v1494, v1523), {
        at: './index.rsh:221:10:application',
        fs: ['at ./index.rsh:221:10:application call to [unknown function] (defined at: ./index.rsh:221:10:function exp)', 'at ./index.rsh:237:12:application call to "k" (defined at: ./index.rsh:222:17:function exp)', 'at ./index.rsh:222:17:application call to [unknown function] (defined at: ./index.rsh:222:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1493, undefined /* Nothing */);
    await stdlib.mapSet(map0, v1493, undefined /* Nothing */);
    const v1530 = stdlib.safeSub(v1472, stdlib.checkedBigNumberify('./index.rsh:240:42:decimal', stdlib.UInt_max, '1'));
    const v4289 = v1530;
    const v4290 = v1473;
    const v4292 = v1481;
    const v4293 = stdlib.gt(v1530, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4293) {
      return;
      }
    else {
      const v4294 = stdlib.sub(v1481, v1299);
      ;
      const v4295 = stdlib.safeDiv(v1299, v1473);
      const v4351 = false;
      const v4352 = v1473;
      const v4354 = v4294;
      const v4355 = stdlib.gt(v1473, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
      if (v4355) {
        return;
        }
      else {
        const v4356 = stdlib.sub(v4294, v4294);
        ;
        const v4357 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
        const v4358 = v4357;
        const v4360 = v4356;
        const v4361 = stdlib.gt(v4357, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
        if (v4361) {
          const v4362 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4363 = ['Finished', null];
          null;
          return;
          }}}}
  
  
  };
export async function _Player_seeWinner26(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_seeWinner26 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_seeWinner26 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1172, v1173, v1174, v1183, v1186, v1299, v1702, v1703, v1711] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '26'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1718 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:221:9:application call to [unknown function] (defined at: ./index.rsh:221:9:function exp)', 'at ./index.rsh:221:9:application call to [unknown function] (defined at: ./index.rsh:221:9:function exp)'],
    msg: 'in',
    who: 'Player_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1172, v1173, v1174, v1183, v1186, v1299, v1702, v1703, v1711, v1718],
    evt_cnt: 1,
    funcNum: 25,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:221:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1724], secs: v1726, time: v1725, didSend: v785, from: v1723 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_seeWinner"
        });
      ;
      const v1728 = v1724[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
      const v1729 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1723), null);
      const v1730 = stdlib.fromSome(v1729, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
      const v1731 = stdlib.eq(v1730, v1728);
      const v1732 = v1731 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
      const v1733 = stdlib.eq(v1732, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v1733) {
        const v1737 = true;
        const v1738 = await txn1.getOutput('Player_seeWinner', 'v1737', ctc6, v1737);
        
        await stdlib.simMapSet(sim_r, 1, v1723, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 2, v1723, null);
        await stdlib.simMapSet(sim_r, 0, v1723, undefined /* Nothing */);
        const v1746 = stdlib.safeAdd(v1703, stdlib.checkedBigNumberify('./index.rsh:233:29:decimal', stdlib.UInt_max, '1'));
        const v1747 = stdlib.safeSub(v1702, stdlib.checkedBigNumberify('./index.rsh:233:45:decimal', stdlib.UInt_max, '1'));
        const v4364 = v1747;
        const v4365 = v1746;
        const v4367 = v1711;
        const v4368 = stdlib.gt(v1747, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4368) {
          sim_r.isHalt = false;
          }
        else {
          const v4369 = stdlib.sub(v1711, v1299);
          sim_r.txns.push({
            kind: 'from',
            to: v1183,
            tok: undefined /* Nothing */
            });
          const v4370 = stdlib.safeDiv(v1299, v1746);
          const v4422 = false;
          const v4423 = v1746;
          const v4425 = v4369;
          const v4426 = stdlib.gt(v1746, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
          if (v4426) {
            sim_r.isHalt = false;
            }
          else {
            const v4427 = stdlib.sub(v4369, v4369);
            sim_r.txns.push({
              kind: 'from',
              to: v1183,
              tok: undefined /* Nothing */
              });
            const v4428 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
            const v4429 = v4428;
            const v4431 = v4427;
            const v4432 = stdlib.gt(v4428, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
            if (v4432) {
              const v4433 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4434 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1752 = false;
        const v1753 = await txn1.getOutput('Player_seeWinner', 'v1752', ctc6, v1752);
        
        await stdlib.simMapSet(sim_r, 1, v1723, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 0, v1723, undefined /* Nothing */);
        const v1760 = stdlib.safeSub(v1702, stdlib.checkedBigNumberify('./index.rsh:240:42:decimal', stdlib.UInt_max, '1'));
        const v4435 = v1760;
        const v4436 = v1703;
        const v4438 = v1711;
        const v4439 = stdlib.gt(v1760, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4439) {
          sim_r.isHalt = false;
          }
        else {
          const v4440 = stdlib.sub(v1711, v1299);
          sim_r.txns.push({
            kind: 'from',
            to: v1183,
            tok: undefined /* Nothing */
            });
          const v4441 = stdlib.safeDiv(v1299, v1703);
          const v4493 = false;
          const v4494 = v1703;
          const v4496 = v4440;
          const v4497 = stdlib.gt(v1703, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
          if (v4497) {
            sim_r.isHalt = false;
            }
          else {
            const v4498 = stdlib.sub(v4440, v4440);
            sim_r.txns.push({
              kind: 'from',
              to: v1183,
              tok: undefined /* Nothing */
              });
            const v4499 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
            const v4500 = v4499;
            const v4502 = v4498;
            const v4503 = stdlib.gt(v4499, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
            if (v4503) {
              const v4504 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4505 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1724], secs: v1726, time: v1725, didSend: v785, from: v1723 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1728 = v1724[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
  const v1729 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1723), null);
  const v1730 = stdlib.fromSome(v1729, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
  const v1731 = stdlib.eq(v1730, v1728);
  const v1732 = v1731 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
  const v1733 = stdlib.eq(v1732, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v1733) {
    const v1737 = true;
    const v1738 = await txn1.getOutput('Player_seeWinner', 'v1737', ctc6, v1737);
    if (v785) {
      stdlib.protect(ctc0, await interact.out(v1724, v1738), {
        at: './index.rsh:221:10:application',
        fs: ['at ./index.rsh:221:10:application call to [unknown function] (defined at: ./index.rsh:221:10:function exp)', 'at ./index.rsh:229:12:application call to "k" (defined at: ./index.rsh:222:17:function exp)', 'at ./index.rsh:222:17:application call to [unknown function] (defined at: ./index.rsh:222:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1723, undefined /* Nothing */);
    await stdlib.mapSet(map2, v1723, null);
    await stdlib.mapSet(map0, v1723, undefined /* Nothing */);
    const v1746 = stdlib.safeAdd(v1703, stdlib.checkedBigNumberify('./index.rsh:233:29:decimal', stdlib.UInt_max, '1'));
    const v1747 = stdlib.safeSub(v1702, stdlib.checkedBigNumberify('./index.rsh:233:45:decimal', stdlib.UInt_max, '1'));
    const v4364 = v1747;
    const v4365 = v1746;
    const v4367 = v1711;
    const v4368 = stdlib.gt(v1747, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4368) {
      return;
      }
    else {
      const v4369 = stdlib.sub(v1711, v1299);
      ;
      const v4370 = stdlib.safeDiv(v1299, v1746);
      const v4422 = false;
      const v4423 = v1746;
      const v4425 = v4369;
      const v4426 = stdlib.gt(v1746, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
      if (v4426) {
        return;
        }
      else {
        const v4427 = stdlib.sub(v4369, v4369);
        ;
        const v4428 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
        const v4429 = v4428;
        const v4431 = v4427;
        const v4432 = stdlib.gt(v4428, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
        if (v4432) {
          const v4433 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4434 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1752 = false;
    const v1753 = await txn1.getOutput('Player_seeWinner', 'v1752', ctc6, v1752);
    if (v785) {
      stdlib.protect(ctc0, await interact.out(v1724, v1753), {
        at: './index.rsh:221:10:application',
        fs: ['at ./index.rsh:221:10:application call to [unknown function] (defined at: ./index.rsh:221:10:function exp)', 'at ./index.rsh:237:12:application call to "k" (defined at: ./index.rsh:222:17:function exp)', 'at ./index.rsh:222:17:application call to [unknown function] (defined at: ./index.rsh:222:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1723, undefined /* Nothing */);
    await stdlib.mapSet(map0, v1723, undefined /* Nothing */);
    const v1760 = stdlib.safeSub(v1702, stdlib.checkedBigNumberify('./index.rsh:240:42:decimal', stdlib.UInt_max, '1'));
    const v4435 = v1760;
    const v4436 = v1703;
    const v4438 = v1711;
    const v4439 = stdlib.gt(v1760, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4439) {
      return;
      }
    else {
      const v4440 = stdlib.sub(v1711, v1299);
      ;
      const v4441 = stdlib.safeDiv(v1299, v1703);
      const v4493 = false;
      const v4494 = v1703;
      const v4496 = v4440;
      const v4497 = stdlib.gt(v1703, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
      if (v4497) {
        return;
        }
      else {
        const v4498 = stdlib.sub(v4440, v4440);
        ;
        const v4499 = stdlib.safeSub(v1186, stdlib.checkedBigNumberify('./index.rsh:289:41:decimal', stdlib.UInt_max, '1'));
        const v4500 = v4499;
        const v4502 = v4498;
        const v4503 = stdlib.gt(v4499, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
        if (v4503) {
          const v4504 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4505 = ['Finished', null];
          null;
          return;
          }}}}
  
  
  };
export async function _Player_wager7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_wager7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_wager7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1172, v1173, v1174, v1183, v1186, v1227, v1235] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2]);
  const v1272 = ctc.selfAddress();
  const v1274 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:92:9:application',
    fs: ['at ./index.rsh:92:9:application call to [unknown function] (defined at: ./index.rsh:92:9:function exp)', 'at ./index.rsh:174:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'in',
    who: 'Player_wager'
    });
  const v1275 = stdlib.addressEq(v1272, v1172);
  const v1276 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1272), null);
  const v1277 = {
    None: 0,
    Some: 1
    }[v1276[0]];
  const v1278 = stdlib.eq(v1277, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1279 = v1275 ? v1278 : false;
  stdlib.assert(v1279, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:95:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:92:9:application call to [unknown function] (defined at: ./index.rsh:95:20:function exp)', 'at ./index.rsh:92:9:application call to [unknown function] (defined at: ./index.rsh:92:9:function exp)', 'at ./index.rsh:174:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1172, v1173, v1174, v1183, v1186, v1227, v1235, v1274],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v1174, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1282], secs: v1284, time: v1283, didSend: v289, from: v1281 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_wager"
        });
      const v1286 = stdlib.add(v1235, v1174);
      sim_r.txns.push({
        amt: v1174,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1281), null);
      const v1293 = null;
      const v1294 = await txn1.getOutput('Player_wager', 'v1293', ctc0, v1293);
      
      const v4506 = v1174;
      const v4507 = v1227;
      const v4509 = v1286;
      const v4510 = stdlib.gt(v1227, stdlib.checkedBigNumberify('./index.rsh:180:32:decimal', stdlib.UInt_max, '0'));
      if (v4510) {
        sim_r.isHalt = false;
        }
      else {
        const v4511 = ['PickingRoles', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1282], secs: v1284, time: v1283, didSend: v289, from: v1281 } = txn1;
  undefined /* setApiDetails */;
  const v1286 = stdlib.add(v1235, v1174);
  ;
  const v1287 = stdlib.addressEq(v1281, v1172);
  const v1288 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1281), null);
  const v1289 = {
    None: 0,
    Some: 1
    }[v1288[0]];
  const v1290 = stdlib.eq(v1289, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1291 = v1287 ? v1290 : false;
  stdlib.assert(v1291, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:174:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  const v1293 = null;
  const v1294 = await txn1.getOutput('Player_wager', 'v1293', ctc0, v1293);
  stdlib.protect(ctc0, await interact.out(v1282, v1294), {
    at: './index.rsh:92:9:application',
    fs: ['at ./index.rsh:92:9:application call to [unknown function] (defined at: ./index.rsh:92:9:function exp)', 'at ./index.rsh:97:10:application call to "k" (defined at: ./index.rsh:92:9:function exp)', 'at ./index.rsh:174:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'out',
    who: 'Player_wager'
    });
  
  const v4506 = v1174;
  const v4507 = v1227;
  const v4509 = v1286;
  const v4510 = stdlib.gt(v1227, stdlib.checkedBigNumberify('./index.rsh:180:32:decimal', stdlib.UInt_max, '0'));
  if (v4510) {
    return;
    }
  else {
    const v4511 = ['PickingRoles', null];
    null;
    return;
    }
  
  
  };
export async function _Player_wager28(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_wager28 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_wager28 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v1172, v1173, v1174, v1183, v1186, v1227, v1299, v1300, v1308] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '28'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1313 = ctc.selfAddress();
  const v1315 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)'],
    msg: 'in',
    who: 'Player_wager'
    });
  const v1316 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1313), null);
  const v1317 = {
    None: 0,
    Some: 1
    }[v1316[0]];
  const v1318 = stdlib.eq(v1317, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1318, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:182:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1172, v1173, v1174, v1183, v1186, v1227, v1299, v1300, v1308, v1315],
    evt_cnt: 1,
    funcNum: 27,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v1174, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1327], secs: v1329, time: v1328, didSend: v436, from: v1326 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_wager"
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1326), null);
      const v1336 = stdlib.add(v1308, v1174);
      sim_r.txns.push({
        amt: v1174,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1341 = null;
      const v1342 = await txn1.getOutput('Player_wager', 'v1341', ctc0, v1341);
      
      const v1347 = stdlib.safeAdd(v1299, v1174);
      const v1348 = stdlib.safeSub(v1300, stdlib.checkedBigNumberify('./index.rsh:185:55:decimal', stdlib.UInt_max, '1'));
      const v4723 = v1347;
      const v4724 = v1348;
      const v4726 = v1336;
      const v4727 = stdlib.gt(v1348, stdlib.checkedBigNumberify('./index.rsh:180:32:decimal', stdlib.UInt_max, '0'));
      if (v4727) {
        sim_r.isHalt = false;
        }
      else {
        const v4728 = ['PickingRoles', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1327], secs: v1329, time: v1328, didSend: v436, from: v1326 } = txn1;
  undefined /* setApiDetails */;
  const v1331 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
  const v1332 = {
    None: 0,
    Some: 1
    }[v1331[0]];
  const v1333 = stdlib.eq(v1332, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1333, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:182:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  const v1336 = stdlib.add(v1308, v1174);
  ;
  const v1341 = null;
  const v1342 = await txn1.getOutput('Player_wager', 'v1341', ctc0, v1341);
  if (v436) {
    stdlib.protect(ctc0, await interact.out(v1327, v1342), {
      at: './index.rsh:181:13:application',
      fs: ['at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)', 'at ./index.rsh:184:12:application call to "k" (defined at: ./index.rsh:183:27:function exp)', 'at ./index.rsh:183:27:application call to [unknown function] (defined at: ./index.rsh:183:27:function exp)'],
      msg: 'out',
      who: 'Player_wager'
      });
    }
  else {
    }
  
  const v1347 = stdlib.safeAdd(v1299, v1174);
  const v1348 = stdlib.safeSub(v1300, stdlib.checkedBigNumberify('./index.rsh:185:55:decimal', stdlib.UInt_max, '1'));
  const v4723 = v1347;
  const v4724 = v1348;
  const v4726 = v1336;
  const v4727 = stdlib.gt(v1348, stdlib.checkedBigNumberify('./index.rsh:180:32:decimal', stdlib.UInt_max, '0'));
  if (v4727) {
    return;
    }
  else {
    const v4728 = ['PickingRoles', null];
    null;
    return;
    }
  
  
  };
export async function Player_getRole(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_getRole expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_getRole expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Player_getRole9(ctcTop, interact);}
  if (step == 27) {return _Player_getRole27(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_join(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_join expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_join expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Player_join5(ctcTop, interact);}
  if (step == 29) {return _Player_join29(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '29')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_receivePay(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_receivePay expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_receivePay expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 17) {return _Player_receivePay17(ctcTop, interact);}
  if (step == 18) {return _Player_receivePay18(ctcTop, interact);}
  if (step == 24) {return _Player_receivePay24(ctcTop, interact);}
  if (step == 25) {return _Player_receivePay25(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '18'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '24'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_seeWinner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_seeWinner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_seeWinner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 12) {return _Player_seeWinner12(ctcTop, interact);}
  if (step == 19) {return _Player_seeWinner19(ctcTop, interact);}
  if (step == 26) {return _Player_seeWinner26(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '19'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '26')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_wager(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_wager expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_wager expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Player_wager7(ctcTop, interact);}
  if (step == 28) {return _Player_wager28(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '28')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Player_getRole(uint64)byte[0]`, `Player_join()byte[0]`, `Player_receivePay()byte[0]`, `Player_seeWinner(uint64)byte`, `Player_wager()byte[0]`, `_Player_getRole26(uint64)byte[0]`, `_Player_getRole8(uint64)byte[0]`, `_Player_join28()byte[0]`, `_Player_join4()byte[0]`, `_Player_receivePay16()byte[0]`, `_Player_receivePay17()byte[0]`, `_Player_receivePay23()byte[0]`, `_Player_receivePay24()byte[0]`, `_Player_seeWinner11(uint64)byte`, `_Player_seeWinner18(uint64)byte`, `_Player_seeWinner25(uint64)byte`, `_Player_wager27()byte[0]`, `_Player_wager6()byte[0]`],
    pure: [],
    sigs: [`Player_getRole(uint64)byte[0]`, `Player_join()byte[0]`, `Player_receivePay()byte[0]`, `Player_seeWinner(uint64)byte`, `Player_wager()byte[0]`, `_Player_getRole26(uint64)byte[0]`, `_Player_getRole8(uint64)byte[0]`, `_Player_join28()byte[0]`, `_Player_join4()byte[0]`, `_Player_receivePay16()byte[0]`, `_Player_receivePay17()byte[0]`, `_Player_receivePay23()byte[0]`, `_Player_receivePay24()byte[0]`, `_Player_seeWinner11(uint64)byte`, `_Player_seeWinner18(uint64)byte`, `_Player_seeWinner25(uint64)byte`, `_Player_wager27()byte[0]`, `_Player_wager6()byte[0]`]
    },
  appApproval: `BiA2AAEgKFBYYGgJCgscEggYERsZGgJwEAQGBcLqwLwHz8DZnA7F/MCsDp2A6a0O26GTvg7DyeehDhfB+8DHCP6G9/UNrJv7twiL9OLhApSP2KcF+8Xohwbu0sn1Bpvm054F56P11AHzt6qMArOBkoEBHRUWYWkTDg8MBzAmBAEAAAEBBdUQ8MwDIjUAMRhBE70pZEkiWzUBIQ1bNQIxGSMSQQAKMQAoIQqvZkITiTYaABdJQQGgIjUEIzUGSSEZDEAA1kkhGgxAAHBJIRsMQAAmSSEcDEAAF0khHQxAAAghHRJEKUICGCEcEkQpQgRHIRsSRClCDO9JIR4MQAA0IR4SRDQBSSEfDEAAEkkhDgxAAAchDhJEQv/SSEIApEkhDwxAAAchDxJEQgALIRUSREIBEyEaEkQpQgdeSSEgDEAAPUkhIQxAABshIRJENAFJIQsMQAAHIQsSREIAXSEWEkRC/5AhIBJENAFJIRAMQAAHIRASREL/bCEXEkRCAFxJISIMQAAKISISRDYaAUIChCEZEkQ2GgFCCyhJISMMQABnSSEkDEAAKEkhJQxAABdJISYMQAAIISYSRClCAM0hJRJEKUIEfiEkEkQ2GgFCCVRJIScMQAAIIScSRClCC3YhIxJENAFJIQwMQAAVSSERDEAAByEREkRC/5AhDBJEQgAZIQoSREL/wkkhKAxAACxJISkMQAAKISkSRDYaAUIFTyEoEkQ0AUkhEgxAAAchEhJEQgAdIQ0SREL/WUkhKgxAAAghKhJEKUIHk4HyrMg9EkQ2GgFCASk2GgIXNQQ2GgM2GgEXSSEVDEAH7EkhDgxAA7xJIRIMQAGTSSEQDEAA/0khCwxAAHghCxJEISs0ARJENARJIhJMNAISEUQoZDUDSTUFNf+ABEc6tcc0/1CwMQCIEblXAAEiVSMTRIAIAAAAAAAABO6wKTUHMQAoMQCIEZsjIkxWZjQDVwAgNAMkWzQDJVs0A1cwIDQDIQRbNAMhBVsjCDIGNAMhBltCDKVIIQs0ARJENARJIhJMNAISEUQoZEk1AyVbNf9JNQU1/oAEjBqHqzT+ULAxAIgRP1cAASJVIxJENP+IEUGACAAAAAAAAAU9sCk1BzQDVwAgNAMkWzT/NANXMCA0AyEEWzQDIQVbNAMhBls0/wg0AyEHWyMJMgY0AyEUWzT/CEIMn0ghEDQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AE/0arXDT/ULAxAIgQxFcAASJVIxJEgAgAAAAAAAAFiLApNQcxACgxAIgQpio0/1A1/klXAAE0/lBMVwoBUGY0A1cAIDQDJFs0AyVbNANXMCA0AyEEWzQDIQVbNAMhBls0AyEHWyMIMgY0AyEUW0IMmUkhEQxAASNIIRI0ARJENARJIhJMNAISEUQoZEk1A0lKSkpJVwAgNf8kWzX+JVs1/VcwIDX8IQRbNfshBVs1+iEGWzX5IQdbNfghFFs190k1BTX2gATE0KcLNPZQsCIjIjEAiA/8VwEJSTX1I1s09SJVTTT2FxJNIxJBAF+ACQAAAAAAAAbJAbAqNQcxACgxAIgPziEIrzX1SVcAATT1UExXCgFQZjEAKDEAiA+0IyEJTFZmMQAoMQCID6YiIkxWZjT/NP40/TT8NPs0+jT5Iwk0+CMIMgY090INq4AJAAAAAAAABtgAsCg1BzEAKDEAiA9vIQivNfVJVwABNPVQTFcKAVBmMQAoMQCID1UiIkxWZjT/NP40/TT8NPs0+jT5Iwk0+DIGNPdCDVxIIRE0ARJENARJIhJMNAISEUQoZEk1A0lKSkpXACA1/yRbNf4lWzX9VzAgNfwhBFs1+yEFWzX6IQZbNfkhB1s1+Ek1BTX3gARMsWU+NPdQsDEANP8SMQCIDt1XAAEiVSMSEEQxAIgOz1cKASJVIxJBAEOACAAAAAAAAAcWsCk1BzEAKDEAiA6vIiJMVmaxIrIBNPiyCCOyEDT8sgezNP80/jT9NPw0+zT6IzT5MgY0+EkJQg0igAgAAAAAAAAHMbApNQcxACgxAIgObCIiTFZmsSKyATT4sggjshA0/LIHszT/NP40/TT8NPs0+iM0+TIGNPhJCUIM30khDAxAAlxJISwMQAEvSSEfDEAAe0ghDjQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AEO+5ARTT/ULAxAIgOAFcKASJVIxJEgAgAAAAAAAAHbrApNQcxACgxAIgN4iIhCUxWZjQDVwAgNAMkWzQDJVs0A1cwIDQDIQRbNAMhBVs0AyEGWzEAMgY0AyEHW0IMxiEsEkQhLTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/JFs1/iVbNf1XMCA1/CEEWzX7IQVbNfohLls1+YAElk+nSLA0AyEvWzT6CDX4NPqIDWk0/DEAEkQ0A1dgARdBABc0/zT+NP00/DT7NPo0+TT8MgY0+EIMSyuwNP80/hZQNP0WUDT8UDT7FlA0+hZQNPkWUDT4FlAoSwFXAHBnSCERNQEyBjUCQgywIQwSRCEwNAESRDQESSISTDQCEhFEKGRJNQNJSkpKSVcAIDX/JFs1/iVbNf1XMCA1/CEEWzX7IQVbNfohBls1+SEHWzX4IRRbNfdJNQU19oAEL1y8/DT2ULAiIyIxAIgMoVcBCUk19SNbNPUiVU009hcSTSMSQQBfgAkAAAAAAAAF4wGwKjUHMQAoMQCIDHMhCK819UlXAAE09VBMVwoBUGYxACgxAIgMWSMhCUxWZjEAKDEAiAxLIiJMVmY0/zT+NP00/DT7NPo0+SMJNPgjCDIGNPdCCOOACQAAAAAAAAXyALAoNQcxACgxAIgMFCEIrzX1SVcAATT1UExXCgFQZjEAKDEAiAv6IiJMVmY0/zT+NP00/DT7NPo0+SMJNPgyBjT3QgiUSSEPDEABREghDDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSlcAIDX/JFs1/iVbNf1XMCA1/CEEWzX7IQVbNfohBls1+SEHWzX4STUFNfeABJZbwe0091CwMQA0/xIxAIgLe1cAASJVIxIQRDEAiAttVwoBIlUjEkEAaYAIAAAAAAAABjCwKTUHMQAoMQCIC00iIkxWZjT4SQk19rEisgE0+LIII7IQNP+yB7M0/yg0/4gLKiIhCUxWZrEisgE09rIII7IQNPyyB7M0/zT+NP00/DT7NPojNPkjCTIGNPZJCUIILYAIAAAAAAAABkuwKTUHMQAoMQCICuQiIkxWZjT4SQk19rEisgE0+LIII7IQNP+yB7M0/yg0/4gKwSIhCUxWZrEisgE09rIII7IQNPyyB7M0/zT+NP00/DT7NPojNPkjCTIGNPZJCUIHxEghDzQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AEdErMoDT/ULAxAIgKZ1cKASJVIxJEgAgAAAAAAAAGiLApNQcxACgxAIgKSSIhCUxWZjQDVwAgNAMkWzQDJVs0A1cwIDQDIQRbNAMhBVs0AyEGWzEAMgY0AyEHW0IHwEkhFwxAA3dJIQkMQAJSSSEKDEABxUkhMQxAAK0hMRJEITI0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yRbNf4lWzX9VzAgNfwhBFs1+yEFWzX6IS5bNfmABM+JAiCwNAMhL1s0+gg1+DT6iAm0NPwxABJENANXYAEXQQAXNP80/jT9NPw0+zT6NPk0/DIGNPhCBykrsDT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5FlA0+BZQKEsBVwBwZ0ghDDUBMgY1AkII+yEKEkQhMzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSlcAIDX/JFs1/iVbNf1XMCA1/CEEWzX7IQVbNfohBls1+SEHWzX4STUFNfeABGC35zA091CwMQA0/xIxAIgI8FcAASJVIxIQRCIjIjEAiAjfVwEJSTX2I1s09iJVTTT3FxJNIxJBAE2ACQAAAAAAAAW1AbAqNQcxACgxAIgIsSEIrzX2SVcAATT2UExXCgFQZjEAKDEAiAiXIyEJTFZmNP80/jT9NPw0+zT6NPkjMgY0+EIFM4AJAAAAAAAABpwAsCg1BzEAKDEAiAhkIQivNfZJVwABNPZQTFcKAVBmNP80/jT9NPw0+zT6NPkiMgY0+EIGYUghCjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSlcAIDX/JFs1/iVbNf1XMCA1/CEEWzX7IQVbNfohBls1+SEHWzX4gATTRHMjsDT8MQASRIAF1RDwzACwNP80/hZQNP0WUDT8UDT7FlA0+hZQNPkWUDT4FlAoSwFXAHBnSCEzNQEyBjUCQgdkSSENDEAAkyENEkQhCDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQU1/oAEZh/u1jT+ULAxADT/EjEAiAd3VwABIlUjEhBEgAgAAAAAAAAFXbApNQcxACgxAIgHWCo0/lA1/UlXAAE0/VBMVwoBUGY0/zQDJFs0AyVbNANXMCA0AyEEWzQDIQVbNAMhBlsiMgY0AyEHW0IDVCEXEkQhNDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yVbNf4hBVs1/Uk1BTX8gATJ6I0MNPxQsDT+iAbtMQA0/xIxAIgG1FcAASJVIxIQRIAIAAAAAAAABQ2wKTUHNP80AyRbNP40A1cwIDQDIQRbNP00/jT9MgY0AyEGWzT+CEICSUkhEwxAALxJIRYMQAB7IRYSRCEYNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BTX+gATU4BgtNP5QsDEANP8SMQCIBlJXAAEiVSMTEESACAAAAAAAAATEsCk1BzEAKDEAiAYzIyJMVmY0/zQDJFs0AyVbNANXMCA0AyEEWyIyBjQDIQVbQgFGIRMSRCETNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbA0A1cAIDQDJFs0AyVbMQA0AyE1WzIGIkIAvEkjDEAAWEgjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JFs1/iVbNf0hNVs1/IAEmouRdLA0/zEAEkQ0/zT+FlA0/RZQNPwWUChLAVcAOGdIIRM1ATIGNQJCBSVIgaCNBogFfiI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hDVs1/iEVWzX9gAT3cRNNNP8WUDT+FlA0/RZQsDEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgTHNf81/jX9Nfw1+zX6Nfk0/SINQQAwgAXVEPDMArA0+TT6FlA0+xZQNPxQNP0WUDT/FlAoSwFXAGBnSCEYNQEyBjUCQgSCgAXVEPDMAbBCBFs1/zX+Nf01/DX7Nfo1+TX4NP00+SMJDEEALDT4NPkWUDT6FlA0+1A0/BZQNP0WUDT/FlAoSwFXAGhnSCErNQEyBjUCQgQxgAXVEPDMBbA0+DT5FlA0+hZQNPtQNPwWUDT9FlA0/xZQKEsBVwBoZ0ghNDUBMgY1AkID/TX/Nf41/TX8Nfs1+jX5Nfg19zX2NP0iDUEANDT2NPcWUDT4FlA0+VA0+hZQNPsWUDT8FlA0/RZQNP8WUChLAVcAeGdIIQs1ATIGNQJCA66ABdUQ8MwEsDT2NPcWUDT4FlA0+VA0+hZQNPsWUDT8FlA0/xZQKEsBVwBwZ0ghCDUBMgY1AkIDdjX/Nf41/TX8Nfs1+jX5Nfg19zX2NP00+wxBADQ09jT3FlA0+BZQNPlQNPoWUDT7FlA0/BZQNP0WUDT/FlAoSwFXAHhnSCEQNQEyBjUCQgMmNPY09xZQNPgWUDT5UDT6FlA0/BZQNP0WUDT/FlAoSwFXAHBnSCEKNQEyBjUCQgL2Nf81/jX9Nfw1+zX6Nfk1+DX3NfY0/CINQQA0NPY09xZQNPgWUDT5UDT6FlA0+xZQNPwWUDT9FlA0/xZQKEsBVwB4Z0ghMDUBMgY1AkICp7EisgE0+7III7IQNPmyB7M09jT3NPg0+TT6NPs0/QoiNP00/jT/NPsJQgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY0/SINQQA3NPY09xZQNPgWUDT5UDT6FlA0+xZQNPwWUQcIUDT9FlA0/xZQKEsBVwBxZ0ghMjUBMgY1AkICKbEisgE0/7III7IQNPmyB7M09jT3NPg0+TT6Iwk0/jT/SQlC/T01/zX+Nf01/DX7Nfo1+TX4Nfc19jT9NPkSNPwiDRBBADA09jT3FlA0+BZQNPlQNPoWUDT7FlA0/BZQNP8WUChLAVcAcGdIIQ81ATIGNQJCAbOxIrIBNP+yCCOyEDT9sgezNPY09zT4NPk0+jT7IzT8Iwk0/jT/SQlC/w41/zX+Nf01/DX7Nfo1+TX4Nfc19jT8Ig1BADQ09jT3FlA0+BZQNPlQNPoWUDT7FlA0/BZQNP0WUDT/FlAoSwFXAHhnSCESNQEyBjUCQgE6sSKyATT7sggjshA0+bIHszT2NPc0+DT5NPo0+zT9CiI0/TT+NP80+wlCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jT9Ig1BADc09jT3FlA0+BZQNPlQNPoWUDT7FlA0/BZRBwhQNP0WUDT/FlAoSwFXAHFnSCEtNQEyBjUCQgC8sSKyATT/sggjshA0+bIHszT2NPc0+DT5NPojCTT+NP9JCUL70DX/Nf41/TX8Nfs1+jX5Nfg19zX2NP00+RI0/CINEEEAMDT2NPcWUDT4FlA0+VA0+hZQNPsWUDT8FlA0/xZQKEsBVwBwZ0ghDjUBMgY1AkIARrEisgE0/7III7IQNP2yB7M09jT3NPg0+TT6NPsjNPwjCTT+NP9JCUL/DjEZIRgSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhEzE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghCq+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 11,
  stateKeys: 1,
  stateSize: 120,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1174",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1175",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T10",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_CheckingWin",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Finished",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Joining",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_PayingWinners",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_PickingRoles",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Wagering",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "GamePhase_phase",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1174",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1175",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1443",
                "type": "tuple"
              }
            ],
            "internalType": "struct T39",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T40",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1664",
                "type": "bool"
              }
            ],
            "internalType": "struct T51",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T52",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e16",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1572",
                "type": "bool"
              }
            ],
            "internalType": "struct T53",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T54",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e17",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1494",
                "type": "tuple"
              }
            ],
            "internalType": "struct T55",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T56",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e18",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e21",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1894",
                "type": "bool"
              }
            ],
            "internalType": "struct T67",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T68",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e23",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1802",
                "type": "bool"
              }
            ],
            "internalType": "struct T69",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T70",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e24",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1724",
                "type": "tuple"
              }
            ],
            "internalType": "struct T71",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T72",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e25",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1406",
                "type": "tuple"
              }
            ],
            "internalType": "struct T73",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T74",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e26",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1327",
                "type": "bool"
              }
            ],
            "internalType": "struct T75",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T76",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e27",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1253",
                "type": "bool"
              }
            ],
            "internalType": "struct T77",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T78",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e28",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1210",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1282",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1363",
                "type": "tuple"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T31",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1220",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1262",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1293",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1341",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1373",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1416",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1461",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1507",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1522",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1584",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1611",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1672",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1692",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1737",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1752",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1814",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1841",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1902",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Player_getRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Player_join",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Player_receivePay",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Player_seeWinner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Player_wager",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "_Player_getRole26",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "_Player_getRole8",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_Player_join28",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_Player_join4",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_Player_receivePay16",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_Player_receivePay17",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_Player_receivePay23",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_Player_receivePay24",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "_Player_seeWinner11",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "_Player_seeWinner18",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "_Player_seeWinner25",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_Player_wager27",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_Player_wager6",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1443",
                "type": "tuple"
              }
            ],
            "internalType": "struct T39",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T40",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1664",
                "type": "bool"
              }
            ],
            "internalType": "struct T51",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T52",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m16",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1572",
                "type": "bool"
              }
            ],
            "internalType": "struct T53",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T54",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m17",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1494",
                "type": "tuple"
              }
            ],
            "internalType": "struct T55",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T56",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m18",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m21",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1894",
                "type": "bool"
              }
            ],
            "internalType": "struct T67",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T68",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m23",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1802",
                "type": "bool"
              }
            ],
            "internalType": "struct T69",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T70",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m24",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1724",
                "type": "tuple"
              }
            ],
            "internalType": "struct T71",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T72",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m25",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1406",
                "type": "tuple"
              }
            ],
            "internalType": "struct T73",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T74",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m26",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1327",
                "type": "bool"
              }
            ],
            "internalType": "struct T75",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T76",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m27",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1253",
                "type": "bool"
              }
            ],
            "internalType": "struct T77",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T78",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m28",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1210",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1282",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1363",
                "type": "tuple"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T31",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200662f3803806200662f833981016040819052620000269162000255565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a162000095341560076200014e565b620000ca604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a0909301905281516200014592600292019062000178565b50505062000329565b81620001745760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200018690620002ec565b90600052602060002090601f016020900481019282620001aa5760008555620001f5565b82601f10620001c557805160ff1916838001178555620001f5565b82800160010185558215620001f5579182015b82811115620001f5578251825591602001919060010190620001d8565b506200020392915062000207565b5090565b5b8082111562000203576000815560010162000208565b604051606081016001600160401b03811182821017156200024f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200026957600080fd5b604080519081016001600160401b03811182821017156200029a57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002b457600080fd5b620002be6200021e565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200030157607f821691505b602082108114156200032357634e487b7160e01b600052602260045260246000fd5b50919050565b6162f680620003396000396000f3fe60806040526004361061023d5760003560e01c806383bf29351161012d578063b69e158a116100b0578063d50d51a211610077578063d50d51a21461050e578063e00acef114610516578063e48cef2114610529578063edd136c61461053c578063f320096514610544578063f595b0d91461054c57005b8063b69e158a146104ab578063c359fa5b146104be578063c855f5d0146104c6578063cadc2e7a146104ce578063d421a502146104fb57005b8063a98bf223116100f4578063a98bf22314610447578063ab53f2c61461045a578063ac4209361461047d578063b22a977114610485578063b26072a71461049857005b806383bf2935146103fe5780638764968814610411578063a035b2e014610419578063a3a561491461042c578063a4a8e4651461043f57005b806343397610116101c057806369c4f7b01161018757806369c4f7b01461037d5780636da017a0146103905780637a53a5d7146103a35780637eea518c146103b6578063817d57f3146103c957806383230757146103e957005b806343397610146103295780634364845c1461033c5780634ff97cf51461034f57806358892c90146103625780635dde45b31461036a57005b806324fab0a21161020457806324fab0a2146102bb5780632c10a159146102ce5780633750b462146102e15780633b55bda3146102e95780633bc5b7bf146102fc57005b80630427d643146102465780630ca328e4146102635780631b26a4bf146102765780631c4983cc146102895780631e93b0f11461029c57005b3661024457005b005b61024e61055f565b60405190151581526020015b60405180910390f35b610244610271366004615824565b61058f565b610244610284366004615824565b6105b3565b610244610297366004615824565b6105d3565b3480156102a857600080fd5b506003545b60405190815260200161025a565b6102446102c9366004615824565b6105f3565b6102446102dc366004615824565b610613565b61024e610633565b6102446102f7366004615824565b610712565b34801561030857600080fd5b5061031c610317366004615855565b610732565b60405161025a9190615898565b61024e6103373660046158ca565b61075e565b61024e61034a3660046158ca565b61078f565b61024461035d366004615824565b6107bf565b61024e6107df565b610244610378366004615824565b61080e565b61024e61038b3660046158ca565b61082e565b61024461039e366004615824565b61085f565b6102446103b1366004615824565b61087f565b6102446103c4366004615824565b61089f565b3480156103d557600080fd5b5061031c6103e4366004615855565b6108bf565b3480156103f557600080fd5b506001546102ad565b61024461040c366004615824565b6108e5565b61024e610905565b610244610427366004615824565b610935565b61024e61043a3660046158ca565b610955565b61024e610986565b610244610455366004615824565b6109b6565b34801561046657600080fd5b5061046f6109d6565b60405161025a9291906158e3565b61024e610a73565b610244610493366004615824565b610bd6565b61024e6104a63660046158ca565b610bf6565b61024e6104b93660046158ca565b610cf1565b61024e610d6c565b61024e610d9b565b3480156104da57600080fd5b506104ee6104e9366004615855565b610e4e565b60405161025a9190615940565b610244610509366004615824565b610e74565b61024e610e94565b610244610524366004615824565b610ec4565b61024e6105373660046158ca565b610ee4565b61024e610f14565b61024e610f44565b61024461055a366004615824565b610f73565b6000610569615295565b60208101516000905261057a6152c4565b6105848282610f93565b610140015192915050565b6105976152c4565b6105af6105a936849003840184615a64565b82611261565b5050565b6105bb6152c4565b6105af6105cd36849003840184615a8e565b8261149f565b6105db6152c4565b6105af6105ed36849003840184615b49565b826117b1565b6105fb6152c4565b6105af61060d36849003840184615a64565b826119e7565b61061b6152c4565b6105af61062d36849003840184615a8e565b82611d70565b60008054600614806106475750600054601b145b61065057600080fd5b600054600614156106c457306001600160a01b031663edd136c66040518163ffffffff1660e01b81526004016020604051808303816000875af115801561069b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106bf9190615b70565b905090565b600054601b141561070f57306001600160a01b031663d50d51a26040518163ffffffff1660e01b81526004016020604051808303816000875af115801561069b573d6000803e3d6000fd5b90565b61071a6152c4565b6105af61072c36849003840184615b49565b82611f58565b604080516060810182526000808252602082018190529181019190915261075882612170565b92915050565b6000610768615358565b6020810151518390526107796152c4565b6107838282612248565b6101c001519392505050565b6000610799615358565b6020810151518390526107aa6152c4565b6107b48282611261565b602001519392505050565b6107c76152c4565b6105af6107d936849003840184615a64565b826125e3565b60006107e9615295565b6020810151600090526107fa6152c4565b6108048282611f58565b60e0015192915050565b6108166152c4565b6105af61082836849003840184615b49565b8261297e565b6000610838615358565b6020810151518390526108496152c4565b61085382826119e7565b61018001519392505050565b6108676152c4565b6105af61087936849003840184615b49565b82612b96565b6108876152c4565b6105af61089936849003840184615b49565b82610f93565b6108a76152c4565b6105af6108b936849003840184615a8e565b82612db3565b604080516060810182526000808252602082018190529181019190915261075882612f25565b6108ed6152c4565b6105af6108ff36849003840184615a64565b82612248565b600061090f615295565b6020810151600090526109206152c4565b61092a828261297e565b610120015192915050565b61093d6152c4565b6105af61094f36849003840184615a8e565b82612fb2565b600061095f615358565b6020810151518390526109706152c4565b61097a82826125e3565b6101a001519392505050565b6000610990615295565b6020810151600090526109a16152c4565b6109ab8282613292565b610100015192915050565b6109be6152c4565b6105af6109d036849003840184615b49565b8261373b565b6000606060005460028080546109eb90615b8d565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1790615b8d565b8015610a645780601f10610a3957610100808354040283529160200191610a64565b820191906000526020600020905b815481529060010190602001808311610a4757829003601f168201915b50505050509050915091509091565b6000805460101480610a8757506000546011145b80610a9457506000546017145b80610aa157506000546018145b610aaa57600080fd5b60005460101415610af557306001600160a01b03166358892c906040518163ffffffff1660e01b81526004016020604051808303816000875af115801561069b573d6000803e3d6000fd5b60005460111415610b4057306001600160a01b031663a4a8e4656040518163ffffffff1660e01b81526004016020604051808303816000875af115801561069b573d6000803e3d6000fd5b60005460171415610b8b57306001600160a01b031663876496886040518163ffffffff1660e01b81526004016020604051808303816000875af115801561069b573d6000803e3d6000fd5b6000546018141561070f57306001600160a01b0316630427d6436040518163ffffffff1660e01b81526004016020604051808303816000875af115801561069b573d6000803e3d6000fd5b610bde6152c4565b6105af610bf036849003840184615b49565b82613292565b60008054600b1480610c0a57506000546012145b80610c1757506000546019145b610c2057600080fd5b600054600b1415610c8e5760405163069c4f7b60e41b81526004810183905230906369c4f7b0906024015b6020604051808303816000875af1158015610c6a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107589190615b70565b60005460121415610cbd5760405163a3a5614960e01b815260048101839052309063a3a5614990602401610c4b565b60005460191415610cec57604051630433976160e41b8152600481018390523090634339761090602401610c4b565b919050565b6000805460081480610d055750600054601a145b610d0e57600080fd5b60005460081415610d3d576040516310d9211760e21b8152600481018390523090634364845c90602401610c4b565b600054601a1415610cec5760405163e48cef2160e01b815260048101839052309063e48cef2190602401610c4b565b6000610d76615295565b602081015160009052610d876152c4565b610d918282613966565b60a0015192915050565b6000805460041480610daf5750600054601c145b610db857600080fd5b60005460041415610e0357306001600160a01b031663f32009656040518163ffffffff1660e01b81526004016020604051808303816000875af115801561069b573d6000803e3d6000fd5b600054601c141561070f57306001600160a01b031663c359fa5b6040518163ffffffff1660e01b81526004016020604051808303816000875af115801561069b573d6000803e3d6000fd5b604080516060810182526000808252602082018190529181019190915261075882613b86565b610e7c6152c4565b6105af610e8e36849003840184615a64565b82613c49565b6000610e9e615295565b602081015160009052610eaf6152c4565b610eb982826117b1565b610220015192915050565b610ecc6152c4565b6105af610ede36849003840184615a8e565b82613e7c565b6000610eee615358565b602081015151839052610eff6152c4565b610f098282613c49565b604001519392505050565b6000610f1e615295565b602081015160009052610f2f6152c4565b610f398282612b96565b610200015192915050565b6000610f4e615295565b602081015160009052610f5f6152c4565b610f69828261373b565b6080015192915050565b610f7b6152c4565b6105af610f8d36849003840184615b49565b82613966565b610fa3601960005414603c614062565b8151610fbe901580610fb757508251600154145b603d614062565b600080805560028054610fd090615b8d565b80601f0160208091040260200160405190810160405280929190818152602001828054610ffc90615b8d565b80156110495780601f1061101e57610100808354040283529160200191611049565b820191906000526020600020905b81548152906001019060200180831161102c57829003601f168201915b50505050508060200190518101906110619190615c7e565b90507ff1238b48d495d70c91dd3fbd44ab287568841521b9ebda1232bae33b4677e1133384604051611094929190615c9b565b60405180910390a16110a83415603a614062565b80516110ea906001600160a01b031633146110c45760006110e3565b60016110cf33612170565b5160018111156110e1576110e1615872565b145b603b614062565b60016110f533612f25565b51600181111561110757611107615872565b141561122b57604051600081527f03a08e883d1d3209f7aef71e4cc9e6af717f728b79e1b262fa079a2083c39c69906020015b60405180910390a1600060c0830181905233815260046020526040808220805462ffffff19169055606083015160e084015191516001600160a01b03909116926108fc831502929190818181858888f193505050501580156111a0573d6000803e3d6000fd5b506111a9615385565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855194169381019390935260808086015185519091015260a08086015185519091015281840180516001905260c086015181519093019290925281514391015251600091015261122581614088565b50505050565b604051600081527f7921f699e7248473e614076ec55a9b9f739a3c46836a0bfa52b718f925761bc29060200161113a565b505050565b6112716009600054146019614062565b815161128c90158061128557508251600154145b601a614062565b60008080556002805461129e90615b8d565b80601f01602080910402602001604051908101604052809291908181526020018280546112ca90615b8d565b80156113175780601f106112ec57610100808354040283529160200191611317565b820191906000526020600020905b8154815290600101906020018083116112fa57829003601f168201915b505050505080602001905181019061132f9190615c7e565b90507f0d0c50c34bf538d7a3a69bc85bb10bcfe23f8f46c119741a7807a8319a6ae2483384604051611362929190615cc5565b60405180910390a161137634156017614062565b80516113b8906001600160a01b031633146113925760006113b1565b600161139d33612170565b5160018111156113af576113af615872565b145b6018614062565b604051600081527f1910941ad8800fa47b9ba46f815d75fc9d06611b1458cd6c4769da75f75a5ea99060200160405180910390a16000808352338152600560209081526040909120805460ff19166001908117825591850151515191015561141e6153f1565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925260808085015184519091015260a08085015184519091015260c08085015184519091015280830180516000905280514392019190915260e084015190519091015261122581614272565b6114af6016600054146034614062565b81516114ca9015806114c357508251600154145b6035614062565b6000808055600280546114dc90615b8d565b80601f016020809104026020016040519081016040528092919081815260200182805461150890615b8d565b80156115555780601f1061152a57610100808354040283529160200191611555565b820191906000526020600020905b81548152906001019060200180831161153857829003601f168201915b505050505080602001905181019061156d9190615d7c565b9050611577615477565b7f9f5a2b78e8420f15858c48ff22a343af532c140d0056b7eb6df350ad20753f6e33856040516115a8929190615d99565b60405180910390a161010082015160a083015101815260a08201516115d09034146032614062565b60608201516115eb906001600160a01b031633146033614062565b8160c0015115611683576115fd615491565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087018051865190861692019190915260808088015186519091015260a08088015186519091015260e0870151855160c0015251828501805191909416905282514392019190915283519151015261167d816143f7565b50611225565b6020810180516003905280516000608090910152516040516000805160206162a1833981519152916116b491615dc1565b60405180910390a161171660405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260e08086015160c0850152845190840152601960005543600155905161178591839101615e42565b604051602081830303815290604052600290805190602001906117a9929190615511565b505050505050565b6117c1601c600054146047614062565b81516117dc9015806117d557508251600154145b6048614062565b6000808055600280546117ee90615b8d565b80601f016020809104026020016040519081016040528092919081815260200182805461181a90615b8d565b80156118675780601f1061183c57610100808354040283529160200191611867565b820191906000526020600020905b81548152906001019060200180831161184a57829003601f168201915b505050505080602001905181019061187f9190615f2d565b90507fa0daf7e88e8c7106ac0a52788be9a37db2d9737d053516fb080775f840aaa31e33846040516118b2929190615c9b565b60405180910390a16118e260016118c833612170565b5160018111156118da576118da615872565b146045614062565b6118f3816040015134146046614062565b604051600081527f3f44dc181dcc5a739aa3223aab6a591e61e77b3c3313cd475c59f52ec9e7dc229060200160405180910390a160006101e0830152611937615595565b815181516001600160a01b039182169052602080840151835190910152604080840180518451909201919091526060808501518451931692019190915260808084015183519091015260a08084015183519091015260c0830151905161199d91906145f0565b60208201515260e08201516119b390600161463d565b6020828101805190910191909152514360409182015261010083015190830151015b6020820151606001526112258161468c565b6119f7600c600054146021614062565b8151611a12901580611a0b57508251600154145b6022614062565b600080805560028054611a2490615b8d565b80601f0160208091040260200160405190810160405280929190818152602001828054611a5090615b8d565b8015611a9d5780601f10611a7257610100808354040283529160200191611a9d565b820191906000526020600020905b815481529060010190602001808311611a8057829003601f168201915b5050505050806020019051810190611ab59190615c7e565b90507fc2754c1005342796f181a0aa38e76a8368eed81f9c00ece446ac039633dc7ab13384604051611ae8929190615cc5565b60405180910390a1611afc3415601f614062565b8051611b3e906001600160a01b03163314611b18576000611b37565b6001611b2333612170565b516001811115611b3557611b35615872565b145b6020614062565b6020830151515160019081611b5233613b86565b516001811115611b6457611b64615872565b14611b70576000611b7e565b611b7933613b86565b604001515b14611b8a576000611b8d565b60015b1415611c8f57604051600181527fb2fd704e36cc88705a86bb657c57a4adda54f397de96b55e458cc30af424c17a9060200160405180910390a160016101608301819052336000908152600560209081526040808320805461ffff19168155840183905560069091529020805462ff00ff19169091179055611c0d615600565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855194169381019390935260808086015185519091015260a08086015185519091015260c08501518285018051919091528051600193019290925281514391015260e0840151905190910152611225816148b7565b604051600081527f9c751f4e1ae32521d52aea10d147853eeab4d5c875c8617aaacccbdc0dfbba8f9060200160405180910390a160006101608301819052338152600560205260408120805461ffff1916815560010155611cee615600565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855194169381019390935260808086015185519091015260a08086015185519091015260c08501518285018051919091528051600093019290925281514391015260e084015190519091015261122581614aad565b611d80600160005414600a614062565b8151611d9b901580611d9457508251600154145b600b614062565b600080805560028054611dad90615b8d565b80601f0160208091040260200160405190810160405280929190818152602001828054611dd990615b8d565b8015611e265780601f10611dfb57610100808354040283529160200191611e26565b820191906000526020600020905b815481529060010190602001808311611e0957829003601f168201915b5050505050806020019051810190611e3e9190615f4a565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051611e71929190615d99565b60405180910390a1611e8534156008614062565b8051611e9d906001600160a01b031633146009614062565b611ed1604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b031680825260208084015181840190815260408086015181860190815260608088015181880190815260026000554360015583519586019690965292519184019190915251908201529051608082015260a00160405160208183030381529060405260029080519060200190611f51929190615511565b5050505050565b611f686011600054146029614062565b8151611f83901580611f7c57508251600154145b602a614062565b600080805560028054611f9590615b8d565b80601f0160208091040260200160405190810160405280929190818152602001828054611fc190615b8d565b801561200e5780601f10611fe35761010080835404028352916020019161200e565b820191906000526020600020905b815481529060010190602001808311611ff157829003601f168201915b50505050508060200190518101906120269190615c7e565b90507f0ee57ec4ccee7f41c279d8e964cfed8c10ea2cf1f82984995d6aa5922d4a28683384604051612059929190615c9b565b60405180910390a161206d34156027614062565b612095600161207b33612f25565b51600181111561208d5761208d615872565b146028614062565b604051600081527f2305335f26d36f1d84e5720282fc25f9af7fdf9d9c8cd02131ad1e9ee44f8d109060200160405180910390a1600060c08301819052338152600660205260409020805462ffffff191690556120f0615491565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925260808085015184519091015260a08085015184519091015260c080850151845190910152808301805133905280514392019190915260e084015190519091015261122581614c95565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156121bc576121bc615872565b1415612239576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156121fd576121fd615872565b600181111561220e5761220e615872565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b612258601a60005414603f614062565b815161227390158061226c57508251600154145b6040614062565b60008080556002805461228590615b8d565b80601f01602080910402602001604051908101604052809291908181526020018280546122b190615b8d565b80156122fe5780601f106122d3576101008083540402835291602001916122fe565b820191906000526020600020905b8154815290600101906020018083116122e157829003601f168201915b50505050508060200190518101906123169190615f2d565b90507fc3e32c6c3764dfb43f9c6ab0ed9e9afaf43c45c1adfadd966e7b79fadb871b2d3384604051612349929190615cc5565b60405180910390a161235d3415603e614062565b602083015151516001908161237133613b86565b51600181111561238357612383615872565b1461238f57600061239d565b61239833613b86565b604001515b146123a95760006123ac565b60015b14156124dc57604051600181527f7fc699b3b3b438565ed571688272548ee9469b8145825e236d955e251ee3491e9060200160405180910390a160016101608301819052336000908152600560209081526040808320805461ffff19168155840183905560068252808320805462ff00ff19169094179093556004905220805462ffffff1916905561243c615600565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c082015161249a90600161463d565b60208201515260e08201516124b09060016145f0565b602080830180519091019190915280514360409091015261010083015190516060015261122581614aad565b604051600081527f116918049d475a2daf0207b1f021b9afb313a205d6452207d7057f37a88ca3cc9060200160405180910390a160006101608301819052338152600560209081526040808320805461ffff1916815560010183905560049091529020805462ffffff19169055612551615600565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08201516125af90600161463d565b602080830180519290925260e084015182519091015280514360409091015261010083015190516060015261122581614aad565b6125f36013600054146030614062565b815161260e90158061260757508251600154145b6031614062565b60008080556002805461262090615b8d565b80601f016020809104026020016040519081016040528092919081815260200182805461264c90615b8d565b80156126995780601f1061266e57610100808354040283529160200191612699565b820191906000526020600020905b81548152906001019060200180831161267c57829003601f168201915b50505050508060200190518101906126b19190615f2d565b90507f10cb23dfa1ce1fe2076eb7f555e6affd6a9245575aa197d02d50d06f3af440d033846040516126e4929190615cc5565b60405180910390a16126f83415602f614062565b602083015151516001908161270c33613b86565b51600181111561271e5761271e615872565b1461272a576000612738565b61273333613b86565b604001515b14612744576000612747565b60015b141561287757604051600181527f088364109722bfc50b93a90781780ad5a1b6db6397819f68f4d466419ee804209060200160405180910390a160016101608301819052336000908152600560209081526040808320805461ffff19168155840183905560068252808320805462ff00ff19169094179093556004905220805462ffffff191690556127d7615600565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c082015161283590600161463d565b60208201515260e082015161284b9060016145f0565b6020808301805190910191909152805143604090910152610100830151905160600152611225816148b7565b604051600081527f7c0ec7727087b62b30d830665ccaf0151ba9f4300fccb685255193885bf480239060200160405180910390a160006101608301819052338152600560209081526040808320805461ffff1916815560010183905560049091529020805462ffffff191690556128ec615600565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c082015161294a90600161463d565b602080830180519290925260e0840151825190910152805143604090910152610100830151905160600152611225816148b7565b61298e6018600054146038614062565b81516129a99015806129a257508251600154145b6039614062565b6000808055600280546129bb90615b8d565b80601f01602080910402602001604051908101604052809291908181526020018280546129e790615b8d565b8015612a345780601f10612a0957610100808354040283529160200191612a34565b820191906000526020600020905b815481529060010190602001808311612a1757829003601f168201915b5050505050806020019051810190612a4c9190615c7e565b90507f680249228d8618a45b50a0ae255e010443406da860026841fad3e6b41439b6183384604051612a7f929190615c9b565b60405180910390a1612a9334156036614062565b612abb6001612aa133612f25565b516001811115612ab357612ab3615872565b146037614062565b604051600081527fde4bc28d640636e55fb3199cb7bfc7c6f90503f6472fa8b1e38b9d8667c138229060200160405180910390a1600060c08301819052338152600660205260409020805462ffffff19169055612b16615491565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925260808085015184519091015260a08085015184519091015260c080850151845190910152808301805133905280514392019190915260e0840151905190910152611225816143f7565b612ba66007600054146015614062565b8151612bc1901580612bba57508251600154145b6016614062565b600080805560028054612bd390615b8d565b80601f0160208091040260200160405190810160405280929190818152602001828054612bff90615b8d565b8015612c4c5780601f10612c2157610100808354040283529160200191612c4c565b820191906000526020600020905b815481529060010190602001808311612c2f57829003601f168201915b5050505050806020019051810190612c649190615fc7565b90507f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe3384604051612c97929190615c9b565b60405180910390a1612cb0816040015134146013614062565b8051612cf2906001600160a01b03163314612ccc576000612ceb565b6001612cd733612170565b516001811115612ce957612ce9615872565b145b6014614062565b604051600081527f3dcc1742bf5fdc97840a03b30f186b4abfc675f397a2f6813b6e33bfdf30f89c9060200160405180910390a160006101e0830152612d36615595565b815181516001600160a01b03918216905260208084015183518201526040808501805185518301526060808701518651951694019390935260808086015185519091015260a080860180518651909201919091528351838601805191909152905181519093019290925290514391015260c08301519051016119d5565b612dc3600260005414600d614062565b8151612dde901580612dd757508251600154145b600e614062565b600080805560028054612df090615b8d565b80601f0160208091040260200160405190810160405280929190818152602001828054612e1c90615b8d565b8015612e695780601f10612e3e57610100808354040283529160200191612e69565b820191906000526020600020905b815481529060010190602001808311612e4c57829003601f168201915b5050505050806020019051810190612e819190615f4a565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503384604051612eb4929190615d99565b60405180910390a1612ec83415600c614062565b612ed061563f565b815181516001600160a01b039091169052602080830151825182015260408084015183518201528251336060918201528401518284018051919091528051439301929092529051600091015261122581614e80565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115612f7157612f71615872565b1415612239576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156121fd576121fd615872565b612fc2600f600054146025614062565b8151612fdd901580612fd657508251600154145b6026614062565b600080805560028054612fef90615b8d565b80601f016020809104026020016040519081016040528092919081815260200182805461301b90615b8d565b80156130685780601f1061303d57610100808354040283529160200191613068565b820191906000526020600020905b81548152906001019060200180831161304b57829003601f168201915b50505050508060200190518101906130809190615d7c565b905061308a615477565b7fbceae83a94d4d1f9424beafb2b187ba867236f6cf452b6b01322429f6474900433856040516130bb929190615d99565b60405180910390a161010082015160a083015101815260a08201516130e39034146023614062565b60608201516130fe906001600160a01b031633146024614062565b8160c001511561319057613110615491565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087018051865190861692019190915260808088015186519091015260a08088015186519091015260e0870151855160c0015251828501805191909416905282514392019190915283519151015261167d81614c95565b6020810180516003905280516000608090910152516040516000805160206162a1833981519152916131c191615dc1565b60405180910390a161322360405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260e08086015160c0850152845190840152601260005543600155905161178591839101615e42565b6132a2601260005414602d614062565b81516132bd9015806132b657508251600154145b602e614062565b6000808055600280546132cf90615b8d565b80601f01602080910402602001604051908101604052809291908181526020018280546132fb90615b8d565b80156133485780601f1061331d57610100808354040283529160200191613348565b820191906000526020600020905b81548152906001019060200180831161332b57829003601f168201915b50505050508060200190518101906133609190615c7e565b905061337f604051806040016040528060008152602001600081525090565b7f0556bc848378db98d636a62875af5fa52a4ae0b068a1c9dc6c68476e4eb7107933856040516133b0929190615c9b565b60405180910390a16133c43415602b614062565b8151613406906001600160a01b031633146133e05760006133ff565b60016133eb33612170565b5160018111156133fd576133fd615872565b145b602c614062565b600161341133612f25565b51600181111561342357613423615872565b14156135ac57604051600081527fdc1818af4ae5ce453495f7a0c861ba8ecdb157c915da3b699e89dca4ca9c5e4a9060200160405180910390a1600060c08401819052338152600460205260408120805462ffffff191690558152815160e08301516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156134bb573d6000803e3d6000fd5b5081516001600160a01b03908116600090815260066020526040808220805462ffffff1916905560608501518451915193169281156108fc0292818181858888f19350505050158015613512573d6000803e3d6000fd5b5061351b615385565b825181516001600160a01b03918216905260208085015183518201526040808601518451909101526060808601518451931692019190915260808085015183519091015260a08085015183519091015281015160019081905260c08401516135829161463d565b60208281018051909101919091525143604090910152600060208201516060015261167d81615002565b604051600081527f716b9039a524ce285dda1ac950c8ceef8769c07be1528c56520483b83fe134e89060200160405180910390a1600060c08401819052338152600460205260408120805462ffffff191690556020820152815160e08301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613641573d6000803e3d6000fd5b5081516001600160a01b039081166000908152600660209081526040808320805462ffffff191690556060860151918501519051919093169280156108fc0292909190818181858888f193505050501580156136a1573d6000803e3d6000fd5b506136aa615385565b825181516001600160a01b03918216905260208085015183518201526040808601518451909101526060808601518451931692019190915260808085015183519091015260a08085015183519091015281015160019081905260c08401516137119161463d565b602082810180519091019190915251436040909101526000602082015160600152611f5181615002565b61374b6005600054146011614062565b815161376690158061375f57508251600154145b6012614062565b60008080556002805461377890615b8d565b80601f01602080910402602001604051908101604052809291908181526020018280546137a490615b8d565b80156137f15780601f106137c6576101008083540402835291602001916137f1565b820191906000526020600020905b8154815290600101906020018083116137d457829003601f168201915b5050505050806020019051810190613809919061606d565b90507f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b94338460405161383c929190615c9b565b60405180910390a16138503415600f614062565b805161389f906001600160a01b0316331461386c576000613898565b600161387733612170565b51600181111561388957613889615872565b14613895576001613898565b60005b6010614062565b604051600081527f798546d0766a94a5283da0257e2258333c073083cdb7c6497be0514ced6219d59060200160405180910390a1600060608301819052338152600460205260409020805462ff00ff191660011790556138fd61566f565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925260808085015184519091015280830180516000905280514392019190915260a0840151905190910152611225816150fa565b613976601d60005414604b614062565b815161399190158061398a57508251600154145b604c614062565b6000808055600280546139a390615b8d565b80601f01602080910402602001604051908101604052809291908181526020018280546139cf90615b8d565b8015613a1c5780601f106139f157610100808354040283529160200191613a1c565b820191906000526020600020905b8154815290600101906020018083116139ff57829003601f168201915b5050505050806020019051810190613a349190615fc7565b90507f801c48b3dae00728a1da62e5d2ef2f34c1a1d757ba343e43c40c5cbe148c5f973384604051613a67929190615c9b565b60405180910390a1613a7b34156049614062565b613ab16001613a8933612170565b516001811115613a9b57613a9b615872565b14613aa7576001613aaa565b60005b604a614062565b604051600081527fe3c40d0c3d1d9fc0b2945e6b294bdaae9e03df3c19f39278941e81bd69ffe0ab9060200160405180910390a1600060608301819052338152600460205260409020805462ff00ff19166001179055613b0f61566f565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a0820151613b619060016145f0565b602080830180519290925281514391015260c0830151905160400152611225816150fa565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115613bd257613bd2615872565b1415612239576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115613c1357613c13615872565b6001811115613c2457613c24615872565b81528154610100900460ff161515602082015260019091015460409091015292915050565b613c59601b600054146043614062565b8151613c74901580613c6d57508251600154145b6044614062565b600080805560028054613c8690615b8d565b80601f0160208091040260200160405190810160405280929190818152602001828054613cb290615b8d565b8015613cff5780601f10613cd457610100808354040283529160200191613cff565b820191906000526020600020905b815481529060010190602001808311613ce257829003601f168201915b5050505050806020019051810190613d179190615f2d565b90507ff0a5ccbb117218b226ec2375677ae5e074010fb1ddb177a5c8630db40d4d378e3384604051613d4a929190615cc5565b60405180910390a1613d5e34156041614062565b613d866001613d6c33612170565b516001811115613d7e57613d7e615872565b146042614062565b604051600081527f1ebf55c1d76015dfdd832718a5ce9c876f11fb779a63cc12cf48d773d2001b0a9060200160405180910390a16000808352338152600560209081526040909120805460ff191660019081178255918501515151910155613dec6153f1565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e0820151613e569060016145f0565b602080830180519290925281514391015261010083015190516040015261122581614272565b613e8c600b60005414601d614062565b8151613ea7901580613ea057508251600154145b601e614062565b600080805560028054613eb990615b8d565b80601f0160208091040260200160405190810160405280929190818152602001828054613ee590615b8d565b8015613f325780601f10613f0757610100808354040283529160200191613f32565b820191906000526020600020905b815481529060010190602001808311613f1557829003601f168201915b5050505050806020019051810190613f4a9190615c7e565b9050613f546156a6565b7f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a3385604051613f85929190615d99565b60405180910390a1613f993415601b614062565b6060820151613fb4906001600160a01b03163314601c614062565b805160009081905281516020015280516040516000805160206162a183398151915291613fe091615dc1565b60405180910390a1613ff06156b9565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e08086015190840152600c60005543600155905161178591839101615e42565b816105af5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6020808201510151156141a4576140f860405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160001515815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931683850152845160809081015190850152845160a09081015190850152818501805151151560c0860152805183015160e08601525190920151610100840152601660005543600155905161418091839101616106565b6040516020818303038152906040526002908051906020019061125c929190615511565b8060000151606001516001600160a01b03166108fc8260200151606001519081150290604051600060405180830381858888f193505050501580156141ed573d6000803e3d6000fd5b506141f661563f565b81515181516001600160a01b0391821690528251602090810151835190910152825160409081015183519091015282516060908101518351921691015281516080015161424490600161463d565b602082810180519290925283810151604001519151015260006020820151604001526105af81614e80565b50565b805160a00151602082015151101561436f576142e560405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931692840192909252835160809081015190840152835160a09081015190840152835160c0908101519084015280840180515160e085015251820151610100840152601b60005543600155905161418091839101616175565b6143776156b9565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931692840192909252835160809081015190840152835160c09081015160a0850152818501805151918501919091525182015160e0840152600b60005543600155905161418091839101615e42565b8051606001516020820151516001600160a01b0390811691161461441c576000614425565b805160c0015115155b156145055761448460405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931692840192909252835160809081015190840152835160a09081015190840152835160c090810151908401528084015182015160e0840152601860005543600155905161418091839101615e42565b6020810151805160409182015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015614546573d6000803e3d6000fd5b5061454f615385565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451909101528351606090810151845193169201919091528251608090810151835190910152825160a090810151835190910152810151600190819052825160c001516145c29161463d565b6020828101805182019290925283810151015190516040015260005b6020820151606001526105af81614088565b6000826145fd83826161f8565b91508110156107585760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161407f565b60008261464a8382616210565b91508111156107585760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b604482015260640161407f565b6146946156a6565b6020808301510151156147ac5761470260405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a0908101519085015281860180515160c0860152805183015160e08601525190920151610100840152601c60005543600155905161478891839101616175565b60405160208183030381529060405260029080519060200190611225929190615511565b8051600490528051600060a09091015280516040516000805160206162a1833981519152916147da91615dc1565b60405180910390a161483c60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a0908101519085015281860180515160c0860152519092015160e0840152600960005543600155905161478891839101615e42565b602081015151156149a95761492360405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931683850152845160809081015190850152845160a0908101519085015281850180515160c0860152805183015160e08601525190920151610100840152601360005543600155905161418091839101616175565b8051606081015160a0909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156149ec573d6000803e3d6000fd5b506149f5615385565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451909101528351606090810151845193169201919091528251608090810151835190910152825160a001518184015190910151614a5a9190615247565b815160a09081019190915260208083018051600090528482018051830151825190930192909252815160409081015191510152516060015183519091015190035b6020820151606001526105af81615002565b60208101515115614b9f57614b1960405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931683850152845160809081015190850152845160a0908101519085015281850180515160c0860152805183015160e08601525190920151610100840152601a60005543600155905161418091839101616175565b8051606081015160a0909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015614be2573d6000803e3d6000fd5b50614beb615385565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451909101528351606090810151845193169201919091528251608090810151835190910152825160a001518184015190910151614c509190615247565b815160a09081019190915260208083018051600090528482018051830151825190930192909252815160409081015191510152516060015183519091015190036145de565b8051606001516020820151516001600160a01b03908116911614614cba576000614cc3565b805160c0015115155b15614da357614d2260405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931692840192909252835160809081015190840152835160a09081015190840152835160c090810151908401528084015182015160e0840152601160005543600155905161418091839101615e42565b6020810151805160409182015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015614de4573d6000803e3d6000fd5b50614ded615385565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451909101528351606090810151845193169201919091528251608090810151835190910152825160a090810151835190910152810151600190819052825160c00151614e609161463d565b602082810180518201929092528381015101519051604001526000614a9b565b614e88615710565b60208201515115614fb3578051600290528051600060609091015280516040516000805160206162a183398151915291614ec191615dc1565b60405180910390a1614f146040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b018051516080808c01918252915186015160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951694830194909452925191810191909152905160c082015260e001614788565b6020810180516001905280516000604091820152905190516000805160206162a183398151915291614fe491615dc1565b60405180910390a1600080805560018190556105af90600290615730565b6020808201510151156141a45761507260405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160001515815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931683850152845160809081015190850152845160a09081015190850152818501805151151560c0860152805183015160e08601525190920151610100840152600f60005543600155905161418091839101616106565b6151026156a6565b81516020015161511390600161463d565b60208301515110156151985761512761576a565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925284516080908101519084015280850180515160a08501525182015160c0840152601d60005543600155905161478891839101616227565b8051600590528051600060c09091015280516040516000805160206162a1833981519152916151c691615dc1565b60405180910390a16151d661576a565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925284516080908101519084015280850180515160a08501525182015160c0840152600760005543600155905161478891839101616227565b6000816152845760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b604482015260640161407f565b61528e828461627e565b9392505050565b6040518060400160405280600081526020016152bf60405180602001604052806000151581525090565b905290565b6040805161024081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081019190915290565b6040518060400160405280600081526020016152bf60408051808201909152600060208201908152815290565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e082019290925290819081526020016152bf60405180608001604052806000151581526020016000815260200160008152602001600081525090565b604051806040016040528061544e6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81526020016152bf60405180606001604052806000815260200160008152602001600081525090565b6040518060400160405280600081526020016152bf6157b9565b60405180604001604052806154ee6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b815260408051606081018252600080825260208281018290529282015291015290565b82805461551d90615b8d565b90600052602060002090601f01602090048101928261553f5760008555615585565b82601f1061555857805160ff1916838001178555615585565b82800160010185558215615585579182015b8281111561558557825182559160200191906001019061556a565b506155919291506157f7565b5090565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e08201929092529081905b81526020016152bf6040518060800160405280600081526020016000815260200160008152602001600081525090565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e08201929092529081906155d0565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819061544e565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c082019290925290819061544e565b60405180602001604052806152bf6157b9565b60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b60405180604001604052806157236157b9565b81526020016152bf6157b9565b50805461573c90615b8d565b6000825580601f1061574c575050565b601f01602090049060005260206000209081019061426f91906157f7565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6040805160e08101909152806000815260006020820181905260408201819052606082018190526080820181905260a0820181905260c09091015290565b5b8082111561559157600081556001016157f8565b60006040828403121561581e57600080fd5b50919050565b60006040828403121561583657600080fd5b61528e838361580c565b6001600160a01b038116811461426f57600080fd5b60006020828403121561586757600080fd5b813561528e81615840565b634e487b7160e01b600052602160045260246000fd5b6002811061426f5761426f615872565b815160608201906158a881615888565b8083525060208301511515602083015260408301511515604083015292915050565b6000602082840312156158dc57600080fd5b5035919050565b82815260006020604081840152835180604085015260005b81811015615917578581018301518582016060015282016158fb565b81811115615929576000606083870101525b50601f01601f191692909201606001949350505050565b8151606082019061595081615888565b808352506020830151151560208301526040830151604083015292915050565b6040516020810167ffffffffffffffff811182821017156159a157634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff811182821017156159a157634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff811182821017156159a157634e487b7160e01b600052604160045260246000fd5b60008183036040811215615a1d57600080fd5b615a256159a7565b8335815291506020601f1982011215615a3d57600080fd5b50615a46615970565b615a4e615970565b6020938401358152815291810191909152919050565b600060408284031215615a7657600080fd5b61528e8383615a0a565b801515811461426f57600080fd5b600060408284031215615aa057600080fd5b6040516040810181811067ffffffffffffffff82111715615ad157634e487b7160e01b600052604160045260246000fd5b604052823581526020830135615ae681615a80565b60208201529392505050565b60008183036040811215615b0557600080fd5b615b0d6159a7565b8335815291506020601f1982011215615b2557600080fd5b50615b2e615970565b6020830135615b3c81615a80565b8152602082015292915050565b600060408284031215615b5b57600080fd5b61528e8383615af2565b8051610cec81615a80565b600060208284031215615b8257600080fd5b815161528e81615a80565b600181811c90821680615ba157607f821691505b6020821081141561581e57634e487b7160e01b600052602260045260246000fd5b8051610cec81615840565b6000610100808385031215615be157600080fd5b6040519081019067ffffffffffffffff82118183101715615c1257634e487b7160e01b600052604160045260246000fd5b8160405280925083519150615c2682615840565b8181526020840151602082015260408401516040820152615c4960608501615bc2565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b60006101008284031215615c9157600080fd5b61528e8383615bcd565b6001600160a01b03831681526060810161528e602083018480518252602090810151511515910152565b6001600160a01b03831681526060810161528e6020830184805182526020908101515151910152565b60006101208284031215615d0157600080fd5b615d096159d8565b9050615d1482615bc2565b81526020820151602082015260408201516040820152615d3660608301615bc2565b60608201526080820151608082015260a082015160a0820152615d5b60c08301615b65565b60c082015260e082015160e082015261010080830151818301525092915050565b60006101208284031215615d8f57600080fd5b61528e8383615cee565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b815160e082019060068110615dd857615dd8615872565b808352506020830151151560208301526040830151151560408301526060830151151560608301526080830151615e13608084018215159052565b5060a0830151615e2760a084018215159052565b5060c0830151615e3b60c084018215159052565b5092915050565b6101008101610758828460018060a01b038082511683526020820151602084015260408201516040840152806060830151166060840152506080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b60006101208284031215615eb957600080fd5b615ec16159d8565b9050615ecc82615bc2565b81526020820151602082015260408201516040820152615eee60608301615bc2565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525092915050565b60006101208284031215615f4057600080fd5b61528e8383615ea6565b600060808284031215615f5c57600080fd5b6040516080810181811067ffffffffffffffff82111715615f8d57634e487b7160e01b600052604160045260246000fd5b6040528251615f9b81615840565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b600060e08284031215615fd957600080fd5b60405160e0810181811067ffffffffffffffff8211171561600a57634e487b7160e01b600052604160045260246000fd5b604052825161601881615840565b808252506020830151602082015260408301516040820152606083015161603e81615840565b806060830152506080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b600060c0828403121561607f57600080fd5b60405160c0810181811067ffffffffffffffff821117156160b057634e487b7160e01b600052604160045260246000fd5b60405282516160be81615840565b80825250602083015160208201526040830151604082015260608301516160e481615840565b60608201526080838101519082015260a0928301519281019290925250919050565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c08083015115159082015260e0808301519082015261010080830151908201526101208101610758565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c0808301519082015260e0808301519082015261010080830151908201526101208101610758565b634e487b7160e01b600052601160045260246000fd5b6000821982111561620b5761620b6161e2565b500190565b600082821015616222576162226161e2565b500390565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b60008261629b57634e487b7160e01b600052601260045260246000fd5b50049056fe3457ee6571e662a8bb768bc5dc3a2139ed5d5cd81c69401f82a7339096e9bf5da2646970667358221220174bd5abf114fb0437cc98745bdb07a04c5e3b6f4ab81c58d8a3db37574c8c7f64736f6c634300080c0033`,
  BytecodeLen: 26159,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:62:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:66:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:293:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:154:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:173:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:191:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:208:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:213:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:252:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:270:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: './index.rsh:256:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  19: {
    at: './index.rsh:217:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  22: {
    at: './index.rsh:252:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  24: {
    at: './index.rsh:270:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  25: {
    at: './index.rsh:256:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  26: {
    at: './index.rsh:217:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  27: {
    at: './index.rsh:195:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  28: {
    at: './index.rsh:177:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  29: {
    at: './index.rsh:158:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Game": Game,
  "Player_getRole": Player_getRole,
  "Player_join": Player_join,
  "Player_receivePay": Player_receivePay,
  "Player_seeWinner": Player_seeWinner,
  "Player_wager": Player_wager
  };
export const _APIs = {
  Player: {
    getRole: Player_getRole,
    join: Player_join,
    receivePay: Player_receivePay,
    seeWinner: Player_seeWinner,
    wager: Player_wager
    }
  };
