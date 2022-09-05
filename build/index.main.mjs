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
      14: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1],
      16: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      17: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      18: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      21: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1],
      23: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      24: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      25: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      26: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      27: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      28: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1]
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
  
  
  const v1155 = stdlib.protect(ctc4, interact.setParams, 'for Admin\'s interact field setParams');
  const v1156 = v1155.amt;
  const v1157 = v1155.numPlayers;
  const v1158 = v1155.rounds;
  
  const txn1 = await (ctc.sendrecv({
    args: [v1157, v1156, v1158],
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
      
      const {data: [v1165, v1166, v1167], secs: v1169, time: v1168, didSend: v48, from: v1164 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v1165, v1166, v1167], secs: v1169, time: v1168, didSend: v48, from: v1164 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v1164, v1165, v1166, v1167],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1168,
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
      
      const {data: [], secs: v1172, time: v1171, didSend: v53, from: v1170 } = txn2;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1172, time: v1171, didSend: v53, from: v1170 } = txn2;
  ;
  const v1173 = stdlib.addressEq(v1164, v1170);
  stdlib.assert(v1173, {
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
  const {data: [], secs: v1177, time: v1176, didSend: v61, from: v1175 } = txn3;
  ;
  let v1178 = v1167;
  let v1179 = v1176;
  let v1186 = stdlib.checkedBigNumberify('./index.rsh:55:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1189 = stdlib.gt(v1178, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
    
    return v1189;})()) {
    const v1190 = ['Joining', null];
    null;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1202], secs: v1204, time: v1203, didSend: v106, from: v1201 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v1205 = stdlib.addressEq(v1201, v1164);
    const v1206 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1201), null);
    const v1207 = {
      None: 0,
      Some: 1
      }[v1206[0]];
    const v1208 = stdlib.eq(v1207, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1209 = v1208 ? false : true;
    const v1210 = v1205 ? v1209 : false;
    stdlib.assert(v1210, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:155:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1212 = null;
    await txn4.getOutput('Player_join', 'v1212', ctc0, v1212);
    await stdlib.mapSet(map0, v1201, null);
    let v1219 = stdlib.checkedBigNumberify('./index.rsh:158:22:decimal', stdlib.UInt_max, '0');
    let v1220 = v1203;
    let v1227 = v1186;
    
    while (await (async () => {
      const v1231 = stdlib.lt(v1219, v1165);
      
      return v1231;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 27,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1243], secs: v1245, time: v1244, didSend: v215, from: v1242 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v1247 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1242), null);
      const v1248 = {
        None: 0,
        Some: 1
        }[v1247[0]];
      const v1249 = stdlib.eq(v1248, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1250 = v1249 ? false : true;
      stdlib.assert(v1250, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:164:20:application call to [unknown function] (defined at: ./index.rsh:164:20:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v1252 = null;
      await txn5.getOutput('Player_join', 'v1252', ctc0, v1252);
      await stdlib.mapSet(map0, v1242, null);
      const v1259 = stdlib.safeAdd(v1219, stdlib.checkedBigNumberify('./index.rsh:167:33:decimal', stdlib.UInt_max, '1'));
      const cv1219 = v1259;
      const cv1220 = v1244;
      const cv1227 = v1227;
      
      v1219 = cv1219;
      v1220 = cv1220;
      v1227 = cv1227;
      
      continue;
      
      }
    const v1261 = ['Wagering', null];
    null;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1272], secs: v1274, time: v1273, didSend: v287, from: v1271 } = txn5;
    undefined /* setApiDetails */;
    const v1276 = stdlib.add(v1227, v1166);
    ;
    const v1277 = stdlib.addressEq(v1271, v1164);
    const v1278 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1271), null);
    const v1279 = {
      None: 0,
      Some: 1
      }[v1278[0]];
    const v1280 = stdlib.eq(v1279, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1281 = v1277 ? v1280 : false;
    stdlib.assert(v1281, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:174:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1283 = null;
    await txn5.getOutput('Player_wager', 'v1283', ctc0, v1283);
    let v1289 = v1166;
    let v1290 = v1219;
    let v1291 = v1273;
    let v1298 = v1276;
    
    while (await (async () => {
      const v1302 = stdlib.gt(v1290, stdlib.checkedBigNumberify('./index.rsh:180:32:decimal', stdlib.UInt_max, '0'));
      
      return v1302;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 26,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1317], secs: v1319, time: v1318, didSend: v434, from: v1316 } = txn6;
      undefined /* setApiDetails */;
      const v1321 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1316), null);
      const v1322 = {
        None: 0,
        Some: 1
        }[v1321[0]];
      const v1323 = stdlib.eq(v1322, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1323, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:182:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v1326 = stdlib.add(v1298, v1166);
      ;
      const v1331 = null;
      await txn6.getOutput('Player_wager', 'v1331', ctc0, v1331);
      const v1337 = stdlib.safeAdd(v1289, v1166);
      const v1338 = stdlib.safeSub(v1290, stdlib.checkedBigNumberify('./index.rsh:185:55:decimal', stdlib.UInt_max, '1'));
      const cv1289 = v1337;
      const cv1290 = v1338;
      const cv1291 = v1318;
      const cv1298 = v1326;
      
      v1289 = cv1289;
      v1290 = cv1290;
      v1291 = cv1291;
      v1298 = cv1298;
      
      continue;
      
      }
    const v1340 = ['PickingRoles', null];
    null;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1353], secs: v1355, time: v1354, didSend: v502, from: v1352 } = txn6;
    undefined /* setApiDetails */;
    ;
    const v1356 = v1353[stdlib.checkedBigNumberify('./index.rsh:102:17:array', stdlib.UInt_max, '0')];
    const v1357 = stdlib.addressEq(v1352, v1164);
    const v1358 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1352), null);
    const v1359 = {
      None: 0,
      Some: 1
      }[v1358[0]];
    const v1360 = stdlib.eq(v1359, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1361 = v1357 ? v1360 : false;
    stdlib.assert(v1361, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:105:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1363 = null;
    await txn6.getOutput('Player_getRole', 'v1363', ctc0, v1363);
    await stdlib.mapSet(map1, v1352, v1356);
    let v1370 = stdlib.checkedBigNumberify('./index.rsh:195:22:decimal', stdlib.UInt_max, '0');
    let v1371 = v1354;
    let v1378 = v1298;
    
    while (await (async () => {
      const v1382 = stdlib.lt(v1370, v1219);
      
      return v1382;})()) {
      const txn7 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 25,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1396], secs: v1398, time: v1397, didSend: v612, from: v1395 } = txn7;
      undefined /* setApiDetails */;
      ;
      const v1400 = v1396[stdlib.checkedBigNumberify('./index.rsh:199:10:spread', stdlib.UInt_max, '0')];
      const v1401 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1395), null);
      const v1402 = {
        None: 0,
        Some: 1
        }[v1401[0]];
      const v1403 = stdlib.eq(v1402, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1403, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:201:18:application call to [unknown function] (defined at: ./index.rsh:201:18:function exp)'],
        msg: 'Participant is not in the game',
        who: 'Admin'
        });
      const v1406 = null;
      await txn7.getOutput('Player_getRole', 'v1406', ctc0, v1406);
      await stdlib.mapSet(map1, v1395, v1400);
      const v1413 = stdlib.safeAdd(v1370, stdlib.checkedBigNumberify('./index.rsh:204:31:decimal', stdlib.UInt_max, '1'));
      const cv1370 = v1413;
      const cv1371 = v1397;
      const cv1378 = v1378;
      
      v1370 = cv1370;
      v1371 = cv1371;
      v1378 = cv1378;
      
      continue;
      
      }
    const v1417 = ['CheckingWin', null];
    null;
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 10,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1430], secs: v1432, time: v1431, didSend: v685, from: v1429 } = txn7;
    undefined /* setApiDetails */;
    ;
    const v1433 = v1430[stdlib.checkedBigNumberify('./index.rsh:111:17:array', stdlib.UInt_max, '0')];
    const v1434 = stdlib.addressEq(v1429, v1164);
    const v1435 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1429), null);
    const v1436 = {
      None: 0,
      Some: 1
      }[v1435[0]];
    const v1437 = stdlib.eq(v1436, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1438 = v1434 ? v1437 : false;
    stdlib.assert(v1438, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:114:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:214:59:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1440 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1429), null);
    const v1441 = stdlib.fromSome(v1440, stdlib.checkedBigNumberify('./index.rsh:115:55:decimal', stdlib.UInt_max, '0'));
    const v1442 = stdlib.eq(v1441, v1433);
    const v1443 = v1442 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
    const v1444 = stdlib.eq(v1443, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v1444) {
      const v1448 = true;
      await txn7.getOutput('Player_seeWinner', 'v1448', ctc7, v1448);
      await stdlib.mapSet(map1, v1429, undefined /* Nothing */);
      await stdlib.mapSet(map2, v1429, null);
      let v1459 = v1370;
      let v1460 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
      let v1461 = v1431;
      let v1468 = v1378;
      
      while (await (async () => {
        const v1472 = stdlib.gt(v1459, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        
        return v1472;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 17,
          out_tys: [ctc6],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1481], secs: v1483, time: v1482, didSend: v777, from: v1480 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1485 = v1481[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
        const v1486 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1480), null);
        const v1487 = stdlib.fromSome(v1486, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
        const v1488 = stdlib.eq(v1487, v1485);
        const v1489 = v1488 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1490 = stdlib.eq(v1489, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1490) {
          const v1494 = true;
          await txn8.getOutput('Player_seeWinner', 'v1494', ctc7, v1494);
          await stdlib.mapSet(map1, v1480, undefined /* Nothing */);
          await stdlib.mapSet(map2, v1480, null);
          await stdlib.mapSet(map0, v1480, undefined /* Nothing */);
          const v1503 = stdlib.safeAdd(v1460, stdlib.checkedBigNumberify('./index.rsh:233:29:decimal', stdlib.UInt_max, '1'));
          const v1504 = stdlib.safeSub(v1459, stdlib.checkedBigNumberify('./index.rsh:233:45:decimal', stdlib.UInt_max, '1'));
          const cv1459 = v1504;
          const cv1460 = v1503;
          const cv1461 = v1482;
          const cv1468 = v1468;
          
          v1459 = cv1459;
          v1460 = cv1460;
          v1461 = cv1461;
          v1468 = cv1468;
          
          continue;}
        else {
          const v1509 = false;
          await txn8.getOutput('Player_seeWinner', 'v1509', ctc7, v1509);
          await stdlib.mapSet(map1, v1480, undefined /* Nothing */);
          await stdlib.mapSet(map0, v1480, undefined /* Nothing */);
          const v1517 = stdlib.safeSub(v1459, stdlib.checkedBigNumberify('./index.rsh:240:42:decimal', stdlib.UInt_max, '1'));
          const cv1459 = v1517;
          const cv1460 = v1460;
          const cv1461 = v1482;
          const cv1468 = v1468;
          
          v1459 = cv1459;
          v1460 = cv1460;
          v1461 = cv1461;
          v1468 = cv1468;
          
          continue;}
        
        }
      const v1525 = stdlib.sub(v1468, v1289);
      ;
      const v1526 = stdlib.safeDiv(v1289, v1460);
      let v1527 = false;
      let v1528 = v1460;
      let v1529 = v1461;
      let v1536 = v1525;
      
      while (await (async () => {
        const v1540 = stdlib.gt(v1528, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        
        return v1540;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 13,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1543, time: v1542, didSend: v834, from: v1541 } = txn8;
        const v1545 = stdlib.add(v1536, v1526);
        ;
        const v1546 = stdlib.addressEq(v1175, v1541);
        stdlib.assert(v1546, {
          at: './index.rsh:253:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Admin'
          });
        if (v1527) {
          let v1626 = v1175;
          let v1627 = v1542;
          let v1634 = v1545;
          
          while (await (async () => {
            const v1638 = stdlib.addressEq(v1626, v1175);
            const v1639 = stdlib.gt(v1528, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
            const v1640 = v1638 ? v1639 : false;
            
            return v1640;})()) {
            const txn9 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 15,
              out_tys: [ctc5],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1651], secs: v1653, time: v1652, didSend: v1004, from: v1650 } = txn9;
            undefined /* setApiDetails */;
            ;
            const v1655 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1650), null);
            const v1656 = {
              None: 0,
              Some: 1
              }[v1655[0]];
            const v1657 = stdlib.eq(v1656, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            stdlib.assert(v1657, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./index.rsh:274:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:27:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)'],
              msg: 'Player is not a winner',
              who: 'Admin'
              });
            const v1659 = null;
            await txn9.getOutput('Player_receivePay', 'v1659', ctc0, v1659);
            await stdlib.mapSet(map2, v1650, undefined /* Nothing */);
            const cv1626 = v1650;
            const cv1627 = v1652;
            const cv1634 = v1634;
            
            v1626 = cv1626;
            v1627 = cv1627;
            v1634 = cv1634;
            
            continue;
            
            }
          const v1671 = stdlib.sub(v1634, v1634);
          ;
          const v1672 = stdlib.safeSub(v1528, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
          const cv1527 = true;
          const cv1528 = v1672;
          const cv1529 = v1627;
          const cv1536 = v1671;
          
          v1527 = cv1527;
          v1528 = cv1528;
          v1529 = cv1529;
          v1536 = cv1536;
          
          continue;}
        else {
          const v1548 = ['PayingWinners', null];
          null;
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 16,
            out_tys: [ctc5],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1559], secs: v1561, time: v1560, didSend: v871, from: v1558 } = txn9;
          undefined /* setApiDetails */;
          ;
          const v1562 = stdlib.addressEq(v1558, v1164);
          const v1563 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1558), null);
          const v1564 = {
            None: 0,
            Some: 1
            }[v1563[0]];
          const v1565 = stdlib.eq(v1564, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v1566 = v1562 ? v1565 : false;
          stdlib.assert(v1566, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:137:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
            msg: null,
            who: 'Admin'
            });
          const v1568 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1558), null);
          const v1569 = {
            None: 0,
            Some: 1
            }[v1568[0]];
          const v1570 = stdlib.eq(v1569, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v1570) {
            const v1571 = null;
            await txn9.getOutput('Player_receivePay', 'v1571', ctc0, v1571);
            await stdlib.mapSet(map0, v1558, undefined /* Nothing */);
            const v1582 = stdlib.sub(v1545, v1545);
            ;
            await stdlib.mapSet(map2, v1164, undefined /* Nothing */);
            const v1588 = stdlib.sub(v1582, v1582);
            ;
            const v1590 = stdlib.safeSub(v1528, stdlib.checkedBigNumberify('./index.rsh:263:71:decimal', stdlib.UInt_max, '1'));
            const cv1527 = true;
            const cv1528 = v1590;
            const cv1529 = v1560;
            const cv1536 = v1588;
            
            v1527 = cv1527;
            v1528 = cv1528;
            v1529 = cv1529;
            v1536 = cv1536;
            
            continue;}
          else {
            const v1598 = null;
            await txn9.getOutput('Player_receivePay', 'v1598', ctc0, v1598);
            await stdlib.mapSet(map0, v1558, undefined /* Nothing */);
            const v1609 = stdlib.sub(v1545, v1545);
            ;
            await stdlib.mapSet(map2, v1164, undefined /* Nothing */);
            const v1615 = stdlib.sub(v1609, v1609);
            ;
            const v1617 = stdlib.safeSub(v1528, stdlib.checkedBigNumberify('./index.rsh:263:71:decimal', stdlib.UInt_max, '1'));
            const cv1527 = true;
            const cv1528 = v1617;
            const cv1529 = v1560;
            const cv1536 = v1615;
            
            v1527 = cv1527;
            v1528 = cv1528;
            v1529 = cv1529;
            v1536 = cv1536;
            
            continue;}
          
          }
        
        }
      const v1677 = stdlib.sub(v1536, v1536);
      ;
      const v1678 = ['Finished', null];
      null;
      const v1679 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
      const cv1178 = v1679;
      const cv1179 = v1529;
      const cv1186 = v1677;
      
      v1178 = cv1178;
      v1179 = cv1179;
      v1186 = cv1186;
      
      continue;}
    else {
      const v1680 = false;
      await txn7.getOutput('Player_seeWinner', 'v1680', ctc7, v1680);
      await stdlib.mapSet(map1, v1429, undefined /* Nothing */);
      let v1690 = v1370;
      let v1691 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
      let v1692 = v1431;
      let v1699 = v1378;
      
      while (await (async () => {
        const v1703 = stdlib.gt(v1690, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        
        return v1703;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 24,
          out_tys: [ctc6],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1712], secs: v1714, time: v1713, didSend: v777, from: v1711 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1716 = v1712[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
        const v1717 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1711), null);
        const v1718 = stdlib.fromSome(v1717, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
        const v1719 = stdlib.eq(v1718, v1716);
        const v1720 = v1719 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1721 = stdlib.eq(v1720, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1721) {
          const v1725 = true;
          await txn8.getOutput('Player_seeWinner', 'v1725', ctc7, v1725);
          await stdlib.mapSet(map1, v1711, undefined /* Nothing */);
          await stdlib.mapSet(map2, v1711, null);
          await stdlib.mapSet(map0, v1711, undefined /* Nothing */);
          const v1734 = stdlib.safeAdd(v1691, stdlib.checkedBigNumberify('./index.rsh:233:29:decimal', stdlib.UInt_max, '1'));
          const v1735 = stdlib.safeSub(v1690, stdlib.checkedBigNumberify('./index.rsh:233:45:decimal', stdlib.UInt_max, '1'));
          const cv1690 = v1735;
          const cv1691 = v1734;
          const cv1692 = v1713;
          const cv1699 = v1699;
          
          v1690 = cv1690;
          v1691 = cv1691;
          v1692 = cv1692;
          v1699 = cv1699;
          
          continue;}
        else {
          const v1740 = false;
          await txn8.getOutput('Player_seeWinner', 'v1740', ctc7, v1740);
          await stdlib.mapSet(map1, v1711, undefined /* Nothing */);
          await stdlib.mapSet(map0, v1711, undefined /* Nothing */);
          const v1748 = stdlib.safeSub(v1690, stdlib.checkedBigNumberify('./index.rsh:240:42:decimal', stdlib.UInt_max, '1'));
          const cv1690 = v1748;
          const cv1691 = v1691;
          const cv1692 = v1713;
          const cv1699 = v1699;
          
          v1690 = cv1690;
          v1691 = cv1691;
          v1692 = cv1692;
          v1699 = cv1699;
          
          continue;}
        
        }
      const v1756 = stdlib.sub(v1699, v1289);
      ;
      const v1757 = stdlib.safeDiv(v1289, v1691);
      let v1758 = false;
      let v1759 = v1691;
      let v1760 = v1692;
      let v1767 = v1756;
      
      while (await (async () => {
        const v1771 = stdlib.gt(v1759, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        
        return v1771;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 20,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1774, time: v1773, didSend: v834, from: v1772 } = txn8;
        const v1776 = stdlib.add(v1767, v1757);
        ;
        const v1777 = stdlib.addressEq(v1175, v1772);
        stdlib.assert(v1777, {
          at: './index.rsh:253:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Admin'
          });
        if (v1758) {
          let v1857 = v1175;
          let v1858 = v1773;
          let v1865 = v1776;
          
          while (await (async () => {
            const v1869 = stdlib.addressEq(v1857, v1175);
            const v1870 = stdlib.gt(v1759, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
            const v1871 = v1869 ? v1870 : false;
            
            return v1871;})()) {
            const txn9 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 22,
              out_tys: [ctc5],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1882], secs: v1884, time: v1883, didSend: v1004, from: v1881 } = txn9;
            undefined /* setApiDetails */;
            ;
            const v1886 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1881), null);
            const v1887 = {
              None: 0,
              Some: 1
              }[v1886[0]];
            const v1888 = stdlib.eq(v1887, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            stdlib.assert(v1888, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./index.rsh:274:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:27:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)'],
              msg: 'Player is not a winner',
              who: 'Admin'
              });
            const v1890 = null;
            await txn9.getOutput('Player_receivePay', 'v1890', ctc0, v1890);
            await stdlib.mapSet(map2, v1881, undefined /* Nothing */);
            const cv1857 = v1881;
            const cv1858 = v1883;
            const cv1865 = v1865;
            
            v1857 = cv1857;
            v1858 = cv1858;
            v1865 = cv1865;
            
            continue;
            
            }
          const v1902 = stdlib.sub(v1865, v1865);
          ;
          const v1903 = stdlib.safeSub(v1759, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
          const cv1758 = true;
          const cv1759 = v1903;
          const cv1760 = v1858;
          const cv1767 = v1902;
          
          v1758 = cv1758;
          v1759 = cv1759;
          v1760 = cv1760;
          v1767 = cv1767;
          
          continue;}
        else {
          const v1779 = ['PayingWinners', null];
          null;
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 23,
            out_tys: [ctc5],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1790], secs: v1792, time: v1791, didSend: v871, from: v1789 } = txn9;
          undefined /* setApiDetails */;
          ;
          const v1793 = stdlib.addressEq(v1789, v1164);
          const v1794 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1789), null);
          const v1795 = {
            None: 0,
            Some: 1
            }[v1794[0]];
          const v1796 = stdlib.eq(v1795, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v1797 = v1793 ? v1796 : false;
          stdlib.assert(v1797, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:137:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
            msg: null,
            who: 'Admin'
            });
          const v1799 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1789), null);
          const v1800 = {
            None: 0,
            Some: 1
            }[v1799[0]];
          const v1801 = stdlib.eq(v1800, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v1801) {
            const v1802 = null;
            await txn9.getOutput('Player_receivePay', 'v1802', ctc0, v1802);
            await stdlib.mapSet(map0, v1789, undefined /* Nothing */);
            const v1826 = stdlib.sub(v1776, v1776);
            ;
            const cv1758 = true;
            const cv1759 = v1759;
            const cv1760 = v1791;
            const cv1767 = v1826;
            
            v1758 = cv1758;
            v1759 = cv1759;
            v1760 = cv1760;
            v1767 = cv1767;
            
            continue;}
          else {
            const v1829 = null;
            await txn9.getOutput('Player_receivePay', 'v1829', ctc0, v1829);
            await stdlib.mapSet(map0, v1789, undefined /* Nothing */);
            const v1853 = stdlib.sub(v1776, v1776);
            ;
            const cv1758 = true;
            const cv1759 = v1759;
            const cv1760 = v1791;
            const cv1767 = v1853;
            
            v1758 = cv1758;
            v1759 = cv1759;
            v1760 = cv1760;
            v1767 = cv1767;
            
            continue;}
          
          }
        
        }
      const v1908 = stdlib.sub(v1767, v1767);
      ;
      const v1909 = ['Finished', null];
      null;
      const v1910 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
      const cv1178 = v1910;
      const cv1179 = v1760;
      const cv1186 = v1908;
      
      v1178 = cv1178;
      v1179 = cv1179;
      v1186 = cv1186;
      
      continue;}
    
    
    
    
    
    
    
    }
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
  const {data: [v1165, v1166, v1167], secs: v1169, time: v1168, didSend: v48, from: v1164 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1172, time: v1171, didSend: v53, from: v1170 } = txn2;
  ;
  const v1173 = stdlib.addressEq(v1164, v1170);
  stdlib.assert(v1173, {
    at: './index.rsh:63:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Game'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v1164, v1165, v1166, v1167],
    evt_cnt: 0,
    funcNum: 2,
    lct: v1171,
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
      
      const {data: [], secs: v1177, time: v1176, didSend: v61, from: v1175 } = txn3;
      
      ;
      const v1178 = v1167;
      const v1179 = v1176;
      const v1186 = stdlib.checkedBigNumberify('./index.rsh:55:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1189 = stdlib.gt(v1178, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
        
        return v1189;})()) {
        const v1190 = ['Joining', null];
        null;
        sim_r.isHalt = false;
        }
      else {
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
  const {data: [], secs: v1177, time: v1176, didSend: v61, from: v1175 } = txn3;
  ;
  let v1178 = v1167;
  let v1179 = v1176;
  let v1186 = stdlib.checkedBigNumberify('./index.rsh:55:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1189 = stdlib.gt(v1178, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
    
    return v1189;})()) {
    const v1190 = ['Joining', null];
    null;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1202], secs: v1204, time: v1203, didSend: v106, from: v1201 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v1205 = stdlib.addressEq(v1201, v1164);
    const v1206 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1201), null);
    const v1207 = {
      None: 0,
      Some: 1
      }[v1206[0]];
    const v1208 = stdlib.eq(v1207, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1209 = v1208 ? false : true;
    const v1210 = v1205 ? v1209 : false;
    stdlib.assert(v1210, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:155:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1212 = null;
    await txn4.getOutput('Player_join', 'v1212', ctc0, v1212);
    await stdlib.mapSet(map0, v1201, null);
    let v1219 = stdlib.checkedBigNumberify('./index.rsh:158:22:decimal', stdlib.UInt_max, '0');
    let v1220 = v1203;
    let v1227 = v1186;
    
    while (await (async () => {
      const v1231 = stdlib.lt(v1219, v1165);
      
      return v1231;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 27,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1243], secs: v1245, time: v1244, didSend: v215, from: v1242 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v1247 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1242), null);
      const v1248 = {
        None: 0,
        Some: 1
        }[v1247[0]];
      const v1249 = stdlib.eq(v1248, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1250 = v1249 ? false : true;
      stdlib.assert(v1250, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:164:20:application call to [unknown function] (defined at: ./index.rsh:164:20:function exp)'],
        msg: null,
        who: 'Game'
        });
      const v1252 = null;
      await txn5.getOutput('Player_join', 'v1252', ctc0, v1252);
      await stdlib.mapSet(map0, v1242, null);
      const v1259 = stdlib.safeAdd(v1219, stdlib.checkedBigNumberify('./index.rsh:167:33:decimal', stdlib.UInt_max, '1'));
      const cv1219 = v1259;
      const cv1220 = v1244;
      const cv1227 = v1227;
      
      v1219 = cv1219;
      v1220 = cv1220;
      v1227 = cv1227;
      
      continue;
      
      }
    const v1261 = ['Wagering', null];
    null;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1272], secs: v1274, time: v1273, didSend: v287, from: v1271 } = txn5;
    undefined /* setApiDetails */;
    const v1276 = stdlib.add(v1227, v1166);
    ;
    const v1277 = stdlib.addressEq(v1271, v1164);
    const v1278 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1271), null);
    const v1279 = {
      None: 0,
      Some: 1
      }[v1278[0]];
    const v1280 = stdlib.eq(v1279, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1281 = v1277 ? v1280 : false;
    stdlib.assert(v1281, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:174:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1283 = null;
    await txn5.getOutput('Player_wager', 'v1283', ctc0, v1283);
    let v1289 = v1166;
    let v1290 = v1219;
    let v1291 = v1273;
    let v1298 = v1276;
    
    while (await (async () => {
      const v1302 = stdlib.gt(v1290, stdlib.checkedBigNumberify('./index.rsh:180:32:decimal', stdlib.UInt_max, '0'));
      
      return v1302;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 26,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1317], secs: v1319, time: v1318, didSend: v434, from: v1316 } = txn6;
      undefined /* setApiDetails */;
      const v1321 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1316), null);
      const v1322 = {
        None: 0,
        Some: 1
        }[v1321[0]];
      const v1323 = stdlib.eq(v1322, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1323, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:182:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)'],
        msg: null,
        who: 'Game'
        });
      const v1326 = stdlib.add(v1298, v1166);
      ;
      const v1331 = null;
      await txn6.getOutput('Player_wager', 'v1331', ctc0, v1331);
      const v1337 = stdlib.safeAdd(v1289, v1166);
      const v1338 = stdlib.safeSub(v1290, stdlib.checkedBigNumberify('./index.rsh:185:55:decimal', stdlib.UInt_max, '1'));
      const cv1289 = v1337;
      const cv1290 = v1338;
      const cv1291 = v1318;
      const cv1298 = v1326;
      
      v1289 = cv1289;
      v1290 = cv1290;
      v1291 = cv1291;
      v1298 = cv1298;
      
      continue;
      
      }
    const v1340 = ['PickingRoles', null];
    null;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1353], secs: v1355, time: v1354, didSend: v502, from: v1352 } = txn6;
    undefined /* setApiDetails */;
    ;
    const v1356 = v1353[stdlib.checkedBigNumberify('./index.rsh:102:17:array', stdlib.UInt_max, '0')];
    const v1357 = stdlib.addressEq(v1352, v1164);
    const v1358 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1352), null);
    const v1359 = {
      None: 0,
      Some: 1
      }[v1358[0]];
    const v1360 = stdlib.eq(v1359, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1361 = v1357 ? v1360 : false;
    stdlib.assert(v1361, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:105:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1363 = null;
    await txn6.getOutput('Player_getRole', 'v1363', ctc0, v1363);
    await stdlib.mapSet(map1, v1352, v1356);
    let v1370 = stdlib.checkedBigNumberify('./index.rsh:195:22:decimal', stdlib.UInt_max, '0');
    let v1371 = v1354;
    let v1378 = v1298;
    
    while (await (async () => {
      const v1382 = stdlib.lt(v1370, v1219);
      
      return v1382;})()) {
      const txn7 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 25,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1396], secs: v1398, time: v1397, didSend: v612, from: v1395 } = txn7;
      undefined /* setApiDetails */;
      ;
      const v1400 = v1396[stdlib.checkedBigNumberify('./index.rsh:199:10:spread', stdlib.UInt_max, '0')];
      const v1401 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1395), null);
      const v1402 = {
        None: 0,
        Some: 1
        }[v1401[0]];
      const v1403 = stdlib.eq(v1402, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1403, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:201:18:application call to [unknown function] (defined at: ./index.rsh:201:18:function exp)'],
        msg: 'Participant is not in the game',
        who: 'Game'
        });
      const v1406 = null;
      await txn7.getOutput('Player_getRole', 'v1406', ctc0, v1406);
      await stdlib.mapSet(map1, v1395, v1400);
      const v1413 = stdlib.safeAdd(v1370, stdlib.checkedBigNumberify('./index.rsh:204:31:decimal', stdlib.UInt_max, '1'));
      const cv1370 = v1413;
      const cv1371 = v1397;
      const cv1378 = v1378;
      
      v1370 = cv1370;
      v1371 = cv1371;
      v1378 = cv1378;
      
      continue;
      
      }
    stdlib.protect(ctc0, await interact.showWinningRole(), {
      at: './index.rsh:209:31:application',
      fs: ['at ./index.rsh:208:14:application call to [unknown function] (defined at: ./index.rsh:208:18:function exp)'],
      msg: 'showWinningRole',
      who: 'Game'
      });
    
    const v1417 = ['CheckingWin', null];
    null;
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 10,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1430], secs: v1432, time: v1431, didSend: v685, from: v1429 } = txn7;
    undefined /* setApiDetails */;
    ;
    const v1433 = v1430[stdlib.checkedBigNumberify('./index.rsh:111:17:array', stdlib.UInt_max, '0')];
    const v1434 = stdlib.addressEq(v1429, v1164);
    const v1435 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1429), null);
    const v1436 = {
      None: 0,
      Some: 1
      }[v1435[0]];
    const v1437 = stdlib.eq(v1436, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1438 = v1434 ? v1437 : false;
    stdlib.assert(v1438, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:114:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:214:59:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1440 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1429), null);
    const v1441 = stdlib.fromSome(v1440, stdlib.checkedBigNumberify('./index.rsh:115:55:decimal', stdlib.UInt_max, '0'));
    const v1442 = stdlib.eq(v1441, v1433);
    const v1443 = v1442 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
    const v1444 = stdlib.eq(v1443, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v1444) {
      const v1448 = true;
      await txn7.getOutput('Player_seeWinner', 'v1448', ctc6, v1448);
      await stdlib.mapSet(map1, v1429, undefined /* Nothing */);
      await stdlib.mapSet(map2, v1429, null);
      let v1459 = v1370;
      let v1460 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
      let v1461 = v1431;
      let v1468 = v1378;
      
      while (await (async () => {
        const v1472 = stdlib.gt(v1459, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        
        return v1472;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 17,
          out_tys: [ctc5],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1481], secs: v1483, time: v1482, didSend: v777, from: v1480 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1485 = v1481[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
        const v1486 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1480), null);
        const v1487 = stdlib.fromSome(v1486, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
        const v1488 = stdlib.eq(v1487, v1485);
        const v1489 = v1488 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1490 = stdlib.eq(v1489, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1490) {
          const v1494 = true;
          await txn8.getOutput('Player_seeWinner', 'v1494', ctc6, v1494);
          await stdlib.mapSet(map1, v1480, undefined /* Nothing */);
          await stdlib.mapSet(map2, v1480, null);
          await stdlib.mapSet(map0, v1480, undefined /* Nothing */);
          const v1503 = stdlib.safeAdd(v1460, stdlib.checkedBigNumberify('./index.rsh:233:29:decimal', stdlib.UInt_max, '1'));
          const v1504 = stdlib.safeSub(v1459, stdlib.checkedBigNumberify('./index.rsh:233:45:decimal', stdlib.UInt_max, '1'));
          const cv1459 = v1504;
          const cv1460 = v1503;
          const cv1461 = v1482;
          const cv1468 = v1468;
          
          v1459 = cv1459;
          v1460 = cv1460;
          v1461 = cv1461;
          v1468 = cv1468;
          
          continue;}
        else {
          const v1509 = false;
          await txn8.getOutput('Player_seeWinner', 'v1509', ctc6, v1509);
          await stdlib.mapSet(map1, v1480, undefined /* Nothing */);
          await stdlib.mapSet(map0, v1480, undefined /* Nothing */);
          const v1517 = stdlib.safeSub(v1459, stdlib.checkedBigNumberify('./index.rsh:240:42:decimal', stdlib.UInt_max, '1'));
          const cv1459 = v1517;
          const cv1460 = v1460;
          const cv1461 = v1482;
          const cv1468 = v1468;
          
          v1459 = cv1459;
          v1460 = cv1460;
          v1461 = cv1461;
          v1468 = cv1468;
          
          continue;}
        
        }
      const v1525 = stdlib.sub(v1468, v1289);
      ;
      const v1526 = stdlib.safeDiv(v1289, v1460);
      let v1527 = false;
      let v1528 = v1460;
      let v1529 = v1461;
      let v1536 = v1525;
      
      while (await (async () => {
        const v1540 = stdlib.gt(v1528, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        
        return v1540;})()) {
        const txn8 = await (ctc.sendrecv({
          args: [v1164, v1165, v1166, v1175, v1178, v1526, v1527, v1528, v1536],
          evt_cnt: 0,
          funcNum: 13,
          lct: v1529,
          onlyIf: true,
          out_tys: [],
          pay: [v1526, []],
          sim_p: (async (txn8) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1543, time: v1542, didSend: v834, from: v1541 } = txn8;
            
            const v1545 = stdlib.add(v1536, v1526);
            sim_r.txns.push({
              amt: v1526,
              kind: 'to',
              tok: undefined /* Nothing */
              });
            if (v1527) {
              
              const v1626 = v1175;
              const v1627 = v1542;
              const v1634 = v1545;
              
              if (await (async () => {
                const v1638 = stdlib.addressEq(v1626, v1175);
                const v1639 = stdlib.gt(v1528, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
                const v1640 = v1638 ? v1639 : false;
                
                return v1640;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1671 = stdlib.sub(v1634, v1634);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1626,
                  tok: undefined /* Nothing */
                  });
                const v1672 = stdlib.safeSub(v1528, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
                const cv1527 = true;
                const cv1528 = v1672;
                const cv1529 = v1627;
                const cv1536 = v1671;
                
                await (async () => {
                  const v1527 = cv1527;
                  const v1528 = cv1528;
                  const v1529 = cv1529;
                  const v1536 = cv1536;
                  
                  if (await (async () => {
                    const v1540 = stdlib.gt(v1528, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
                    
                    return v1540;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1677 = stdlib.sub(v1536, v1536);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v1175,
                      tok: undefined /* Nothing */
                      });
                    const v1678 = ['Finished', null];
                    null;
                    const v1679 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
                    const cv1178 = v1679;
                    const cv1179 = v1529;
                    const cv1186 = v1677;
                    
                    await (async () => {
                      const v1178 = cv1178;
                      const v1179 = cv1179;
                      const v1186 = cv1186;
                      
                      if (await (async () => {
                        const v1189 = stdlib.gt(v1178, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
                        
                        return v1189;})()) {
                        const v1190 = ['Joining', null];
                        null;
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }})();}})();}}
            else {
              const v1548 = ['PayingWinners', null];
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
        const {data: [], secs: v1543, time: v1542, didSend: v834, from: v1541 } = txn8;
        const v1545 = stdlib.add(v1536, v1526);
        ;
        const v1546 = stdlib.addressEq(v1175, v1541);
        stdlib.assert(v1546, {
          at: './index.rsh:253:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Game'
          });
        if (v1527) {
          stdlib.protect(ctc0, await interact.payApiWinners(), {
            at: './index.rsh:267:36:application',
            fs: ['at ./index.rsh:267:36:application call to [unknown function] (defined at: ./index.rsh:267:36:function exp)', 'at ./index.rsh:267:36:application call to "liftedInteract" (defined at: ./index.rsh:267:36:application)'],
            msg: 'payApiWinners',
            who: 'Game'
            });
          
          let v1626 = v1175;
          let v1627 = v1542;
          let v1634 = v1545;
          
          while (await (async () => {
            const v1638 = stdlib.addressEq(v1626, v1175);
            const v1639 = stdlib.gt(v1528, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
            const v1640 = v1638 ? v1639 : false;
            
            return v1640;})()) {
            const txn9 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 15,
              out_tys: [ctc4],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1651], secs: v1653, time: v1652, didSend: v1004, from: v1650 } = txn9;
            undefined /* setApiDetails */;
            ;
            const v1655 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1650), null);
            const v1656 = {
              None: 0,
              Some: 1
              }[v1655[0]];
            const v1657 = stdlib.eq(v1656, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            stdlib.assert(v1657, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./index.rsh:274:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:27:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)'],
              msg: 'Player is not a winner',
              who: 'Game'
              });
            const v1659 = null;
            await txn9.getOutput('Player_receivePay', 'v1659', ctc0, v1659);
            await stdlib.mapSet(map2, v1650, undefined /* Nothing */);
            const cv1626 = v1650;
            const cv1627 = v1652;
            const cv1634 = v1634;
            
            v1626 = cv1626;
            v1627 = cv1627;
            v1634 = cv1634;
            
            continue;
            
            }
          const v1671 = stdlib.sub(v1634, v1634);
          ;
          const v1672 = stdlib.safeSub(v1528, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
          const cv1527 = true;
          const cv1528 = v1672;
          const cv1529 = v1627;
          const cv1536 = v1671;
          
          v1527 = cv1527;
          v1528 = cv1528;
          v1529 = cv1529;
          v1536 = cv1536;
          
          continue;}
        else {
          const v1548 = ['PayingWinners', null];
          null;
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 16,
            out_tys: [ctc4],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1559], secs: v1561, time: v1560, didSend: v871, from: v1558 } = txn9;
          undefined /* setApiDetails */;
          ;
          const v1562 = stdlib.addressEq(v1558, v1164);
          const v1563 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1558), null);
          const v1564 = {
            None: 0,
            Some: 1
            }[v1563[0]];
          const v1565 = stdlib.eq(v1564, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v1566 = v1562 ? v1565 : false;
          stdlib.assert(v1566, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:137:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
            msg: null,
            who: 'Game'
            });
          const v1568 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1558), null);
          const v1569 = {
            None: 0,
            Some: 1
            }[v1568[0]];
          const v1570 = stdlib.eq(v1569, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v1570) {
            const v1571 = null;
            await txn9.getOutput('Player_receivePay', 'v1571', ctc0, v1571);
            await stdlib.mapSet(map0, v1558, undefined /* Nothing */);
            const v1582 = stdlib.sub(v1545, v1545);
            ;
            await stdlib.mapSet(map2, v1164, undefined /* Nothing */);
            const v1588 = stdlib.sub(v1582, v1582);
            ;
            const v1590 = stdlib.safeSub(v1528, stdlib.checkedBigNumberify('./index.rsh:263:71:decimal', stdlib.UInt_max, '1'));
            const cv1527 = true;
            const cv1528 = v1590;
            const cv1529 = v1560;
            const cv1536 = v1588;
            
            v1527 = cv1527;
            v1528 = cv1528;
            v1529 = cv1529;
            v1536 = cv1536;
            
            continue;}
          else {
            const v1598 = null;
            await txn9.getOutput('Player_receivePay', 'v1598', ctc0, v1598);
            await stdlib.mapSet(map0, v1558, undefined /* Nothing */);
            const v1609 = stdlib.sub(v1545, v1545);
            ;
            await stdlib.mapSet(map2, v1164, undefined /* Nothing */);
            const v1615 = stdlib.sub(v1609, v1609);
            ;
            const v1617 = stdlib.safeSub(v1528, stdlib.checkedBigNumberify('./index.rsh:263:71:decimal', stdlib.UInt_max, '1'));
            const cv1527 = true;
            const cv1528 = v1617;
            const cv1529 = v1560;
            const cv1536 = v1615;
            
            v1527 = cv1527;
            v1528 = cv1528;
            v1529 = cv1529;
            v1536 = cv1536;
            
            continue;}
          
          }
        
        }
      const v1677 = stdlib.sub(v1536, v1536);
      ;
      const v1678 = ['Finished', null];
      null;
      const v1679 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
      const cv1178 = v1679;
      const cv1179 = v1529;
      const cv1186 = v1677;
      
      v1178 = cv1178;
      v1179 = cv1179;
      v1186 = cv1186;
      
      continue;}
    else {
      const v1680 = false;
      await txn7.getOutput('Player_seeWinner', 'v1680', ctc6, v1680);
      await stdlib.mapSet(map1, v1429, undefined /* Nothing */);
      let v1690 = v1370;
      let v1691 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
      let v1692 = v1431;
      let v1699 = v1378;
      
      while (await (async () => {
        const v1703 = stdlib.gt(v1690, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        
        return v1703;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 24,
          out_tys: [ctc5],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1712], secs: v1714, time: v1713, didSend: v777, from: v1711 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1716 = v1712[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
        const v1717 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1711), null);
        const v1718 = stdlib.fromSome(v1717, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
        const v1719 = stdlib.eq(v1718, v1716);
        const v1720 = v1719 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1721 = stdlib.eq(v1720, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1721) {
          const v1725 = true;
          await txn8.getOutput('Player_seeWinner', 'v1725', ctc6, v1725);
          await stdlib.mapSet(map1, v1711, undefined /* Nothing */);
          await stdlib.mapSet(map2, v1711, null);
          await stdlib.mapSet(map0, v1711, undefined /* Nothing */);
          const v1734 = stdlib.safeAdd(v1691, stdlib.checkedBigNumberify('./index.rsh:233:29:decimal', stdlib.UInt_max, '1'));
          const v1735 = stdlib.safeSub(v1690, stdlib.checkedBigNumberify('./index.rsh:233:45:decimal', stdlib.UInt_max, '1'));
          const cv1690 = v1735;
          const cv1691 = v1734;
          const cv1692 = v1713;
          const cv1699 = v1699;
          
          v1690 = cv1690;
          v1691 = cv1691;
          v1692 = cv1692;
          v1699 = cv1699;
          
          continue;}
        else {
          const v1740 = false;
          await txn8.getOutput('Player_seeWinner', 'v1740', ctc6, v1740);
          await stdlib.mapSet(map1, v1711, undefined /* Nothing */);
          await stdlib.mapSet(map0, v1711, undefined /* Nothing */);
          const v1748 = stdlib.safeSub(v1690, stdlib.checkedBigNumberify('./index.rsh:240:42:decimal', stdlib.UInt_max, '1'));
          const cv1690 = v1748;
          const cv1691 = v1691;
          const cv1692 = v1713;
          const cv1699 = v1699;
          
          v1690 = cv1690;
          v1691 = cv1691;
          v1692 = cv1692;
          v1699 = cv1699;
          
          continue;}
        
        }
      const v1756 = stdlib.sub(v1699, v1289);
      ;
      const v1757 = stdlib.safeDiv(v1289, v1691);
      let v1758 = false;
      let v1759 = v1691;
      let v1760 = v1692;
      let v1767 = v1756;
      
      while (await (async () => {
        const v1771 = stdlib.gt(v1759, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        
        return v1771;})()) {
        const txn8 = await (ctc.sendrecv({
          args: [v1164, v1165, v1166, v1175, v1178, v1757, v1758, v1759, v1767],
          evt_cnt: 0,
          funcNum: 20,
          lct: v1760,
          onlyIf: true,
          out_tys: [],
          pay: [v1757, []],
          sim_p: (async (txn8) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1774, time: v1773, didSend: v834, from: v1772 } = txn8;
            
            const v1776 = stdlib.add(v1767, v1757);
            sim_r.txns.push({
              amt: v1757,
              kind: 'to',
              tok: undefined /* Nothing */
              });
            if (v1758) {
              
              const v1857 = v1175;
              const v1858 = v1773;
              const v1865 = v1776;
              
              if (await (async () => {
                const v1869 = stdlib.addressEq(v1857, v1175);
                const v1870 = stdlib.gt(v1759, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
                const v1871 = v1869 ? v1870 : false;
                
                return v1871;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1902 = stdlib.sub(v1865, v1865);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1857,
                  tok: undefined /* Nothing */
                  });
                const v1903 = stdlib.safeSub(v1759, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
                const cv1758 = true;
                const cv1759 = v1903;
                const cv1760 = v1858;
                const cv1767 = v1902;
                
                await (async () => {
                  const v1758 = cv1758;
                  const v1759 = cv1759;
                  const v1760 = cv1760;
                  const v1767 = cv1767;
                  
                  if (await (async () => {
                    const v1771 = stdlib.gt(v1759, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
                    
                    return v1771;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1908 = stdlib.sub(v1767, v1767);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v1175,
                      tok: undefined /* Nothing */
                      });
                    const v1909 = ['Finished', null];
                    null;
                    const v1910 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
                    const cv1178 = v1910;
                    const cv1179 = v1760;
                    const cv1186 = v1908;
                    
                    await (async () => {
                      const v1178 = cv1178;
                      const v1179 = cv1179;
                      const v1186 = cv1186;
                      
                      if (await (async () => {
                        const v1189 = stdlib.gt(v1178, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
                        
                        return v1189;})()) {
                        const v1190 = ['Joining', null];
                        null;
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }})();}})();}}
            else {
              const v1779 = ['PayingWinners', null];
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
        const {data: [], secs: v1774, time: v1773, didSend: v834, from: v1772 } = txn8;
        const v1776 = stdlib.add(v1767, v1757);
        ;
        const v1777 = stdlib.addressEq(v1175, v1772);
        stdlib.assert(v1777, {
          at: './index.rsh:253:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Game'
          });
        if (v1758) {
          stdlib.protect(ctc0, await interact.payApiWinners(), {
            at: './index.rsh:267:36:application',
            fs: ['at ./index.rsh:267:36:application call to [unknown function] (defined at: ./index.rsh:267:36:function exp)', 'at ./index.rsh:267:36:application call to "liftedInteract" (defined at: ./index.rsh:267:36:application)'],
            msg: 'payApiWinners',
            who: 'Game'
            });
          
          let v1857 = v1175;
          let v1858 = v1773;
          let v1865 = v1776;
          
          while (await (async () => {
            const v1869 = stdlib.addressEq(v1857, v1175);
            const v1870 = stdlib.gt(v1759, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
            const v1871 = v1869 ? v1870 : false;
            
            return v1871;})()) {
            const txn9 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 22,
              out_tys: [ctc4],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1882], secs: v1884, time: v1883, didSend: v1004, from: v1881 } = txn9;
            undefined /* setApiDetails */;
            ;
            const v1886 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1881), null);
            const v1887 = {
              None: 0,
              Some: 1
              }[v1886[0]];
            const v1888 = stdlib.eq(v1887, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            stdlib.assert(v1888, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./index.rsh:274:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:27:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)'],
              msg: 'Player is not a winner',
              who: 'Game'
              });
            const v1890 = null;
            await txn9.getOutput('Player_receivePay', 'v1890', ctc0, v1890);
            await stdlib.mapSet(map2, v1881, undefined /* Nothing */);
            const cv1857 = v1881;
            const cv1858 = v1883;
            const cv1865 = v1865;
            
            v1857 = cv1857;
            v1858 = cv1858;
            v1865 = cv1865;
            
            continue;
            
            }
          const v1902 = stdlib.sub(v1865, v1865);
          ;
          const v1903 = stdlib.safeSub(v1759, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
          const cv1758 = true;
          const cv1759 = v1903;
          const cv1760 = v1858;
          const cv1767 = v1902;
          
          v1758 = cv1758;
          v1759 = cv1759;
          v1760 = cv1760;
          v1767 = cv1767;
          
          continue;}
        else {
          const v1779 = ['PayingWinners', null];
          null;
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 23,
            out_tys: [ctc4],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1790], secs: v1792, time: v1791, didSend: v871, from: v1789 } = txn9;
          undefined /* setApiDetails */;
          ;
          const v1793 = stdlib.addressEq(v1789, v1164);
          const v1794 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1789), null);
          const v1795 = {
            None: 0,
            Some: 1
            }[v1794[0]];
          const v1796 = stdlib.eq(v1795, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v1797 = v1793 ? v1796 : false;
          stdlib.assert(v1797, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:137:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
            msg: null,
            who: 'Game'
            });
          const v1799 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1789), null);
          const v1800 = {
            None: 0,
            Some: 1
            }[v1799[0]];
          const v1801 = stdlib.eq(v1800, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v1801) {
            const v1802 = null;
            await txn9.getOutput('Player_receivePay', 'v1802', ctc0, v1802);
            await stdlib.mapSet(map0, v1789, undefined /* Nothing */);
            const v1826 = stdlib.sub(v1776, v1776);
            ;
            const cv1758 = true;
            const cv1759 = v1759;
            const cv1760 = v1791;
            const cv1767 = v1826;
            
            v1758 = cv1758;
            v1759 = cv1759;
            v1760 = cv1760;
            v1767 = cv1767;
            
            continue;}
          else {
            const v1829 = null;
            await txn9.getOutput('Player_receivePay', 'v1829', ctc0, v1829);
            await stdlib.mapSet(map0, v1789, undefined /* Nothing */);
            const v1853 = stdlib.sub(v1776, v1776);
            ;
            const cv1758 = true;
            const cv1759 = v1759;
            const cv1760 = v1791;
            const cv1767 = v1853;
            
            v1758 = cv1758;
            v1759 = cv1759;
            v1760 = cv1760;
            v1767 = cv1767;
            
            continue;}
          
          }
        
        }
      const v1908 = stdlib.sub(v1767, v1767);
      ;
      const v1909 = ['Finished', null];
      null;
      const v1910 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
      const cv1178 = v1910;
      const cv1179 = v1760;
      const cv1186 = v1908;
      
      v1178 = cv1178;
      v1179 = cv1179;
      v1186 = cv1186;
      
      continue;}
    
    
    
    
    
    
    
    }
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
  
  
  const [v1164, v1165, v1166, v1175, v1178, v1219, v1289, v1298] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2]);
  const v1341 = ctc.selfAddress();
  const v1343 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:102:9:application',
    fs: ['at ./index.rsh:102:9:application call to [unknown function] (defined at: ./index.rsh:102:9:function exp)', 'at ./index.rsh:192:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'in',
    who: 'Player_getRole'
    });
  const v1346 = stdlib.addressEq(v1341, v1164);
  const v1347 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1341), null);
  const v1348 = {
    None: 0,
    Some: 1
    }[v1347[0]];
  const v1349 = stdlib.eq(v1348, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1350 = v1346 ? v1349 : false;
  stdlib.assert(v1350, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:104:32:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:102:9:application call to [unknown function] (defined at: ./index.rsh:104:24:function exp)', 'at ./index.rsh:102:9:application call to [unknown function] (defined at: ./index.rsh:102:9:function exp)', 'at ./index.rsh:192:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_getRole'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1164, v1165, v1166, v1175, v1178, v1219, v1289, v1298, v1343],
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
      
      const {data: [v1353], secs: v1355, time: v1354, didSend: v502, from: v1352 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_getRole"
        });
      ;
      const v1356 = v1353[stdlib.checkedBigNumberify('./index.rsh:102:17:array', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1352), null);
      const v1363 = null;
      const v1364 = await txn1.getOutput('Player_getRole', 'v1363', ctc0, v1363);
      
      await stdlib.simMapSet(sim_r, 1, v1352, v1356);
      const v3064 = stdlib.checkedBigNumberify('./index.rsh:195:22:decimal', stdlib.UInt_max, '0');
      const v3066 = v1298;
      const v3067 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:195:22:decimal', stdlib.UInt_max, '0'), v1219);
      if (v3067) {
        sim_r.isHalt = false;
        }
      else {
        const v3068 = ['CheckingWin', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1353], secs: v1355, time: v1354, didSend: v502, from: v1352 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1356 = v1353[stdlib.checkedBigNumberify('./index.rsh:102:17:array', stdlib.UInt_max, '0')];
  const v1357 = stdlib.addressEq(v1352, v1164);
  const v1358 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1352), null);
  const v1359 = {
    None: 0,
    Some: 1
    }[v1358[0]];
  const v1360 = stdlib.eq(v1359, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1361 = v1357 ? v1360 : false;
  stdlib.assert(v1361, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:105:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_getRole'
    });
  const v1363 = null;
  const v1364 = await txn1.getOutput('Player_getRole', 'v1363', ctc0, v1363);
  stdlib.protect(ctc0, await interact.out(v1353, v1364), {
    at: './index.rsh:102:9:application',
    fs: ['at ./index.rsh:102:9:application call to [unknown function] (defined at: ./index.rsh:102:9:function exp)', 'at ./index.rsh:106:10:application call to "k" (defined at: ./index.rsh:102:9:function exp)', 'at ./index.rsh:192:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'out',
    who: 'Player_getRole'
    });
  
  await stdlib.mapSet(map1, v1352, v1356);
  const v3064 = stdlib.checkedBigNumberify('./index.rsh:195:22:decimal', stdlib.UInt_max, '0');
  const v3066 = v1298;
  const v3067 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:195:22:decimal', stdlib.UInt_max, '0'), v1219);
  if (v3067) {
    return;
    }
  else {
    const v3068 = ['CheckingWin', null];
    null;
    return;
    }
  
  
  };
export async function _Player_getRole26(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_getRole26 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_getRole26 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1164, v1165, v1166, v1175, v1178, v1219, v1289, v1370, v1378] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '26'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1383 = ctc.selfAddress();
  const v1385 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:199:34:application call to [unknown function] (defined at: ./index.rsh:199:34:function exp)', 'at ./index.rsh:199:34:application call to [unknown function] (defined at: ./index.rsh:199:34:function exp)'],
    msg: 'in',
    who: 'Player_getRole'
    });
  const v1388 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1383), null);
  const v1389 = {
    None: 0,
    Some: 1
    }[v1388[0]];
  const v1390 = stdlib.eq(v1389, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1390, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:199:34:application call to [unknown function] (defined at: ./index.rsh:199:34:function exp)', 'at ./index.rsh:199:34:application call to [unknown function] (defined at: ./index.rsh:199:34:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_getRole'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1164, v1165, v1166, v1175, v1178, v1219, v1289, v1370, v1378, v1385],
    evt_cnt: 1,
    funcNum: 25,
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
      
      const {data: [v1396], secs: v1398, time: v1397, didSend: v612, from: v1395 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_getRole"
        });
      ;
      const v1400 = v1396[stdlib.checkedBigNumberify('./index.rsh:199:10:spread', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1395), null);
      const v1406 = null;
      const v1407 = await txn1.getOutput('Player_getRole', 'v1406', ctc0, v1406);
      
      await stdlib.simMapSet(sim_r, 1, v1395, v1400);
      const v1413 = stdlib.safeAdd(v1370, stdlib.checkedBigNumberify('./index.rsh:204:31:decimal', stdlib.UInt_max, '1'));
      const v3247 = v1413;
      const v3249 = v1378;
      const v3250 = stdlib.lt(v1413, v1219);
      if (v3250) {
        sim_r.isHalt = false;
        }
      else {
        const v3251 = ['CheckingWin', null];
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
  const {data: [v1396], secs: v1398, time: v1397, didSend: v612, from: v1395 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1400 = v1396[stdlib.checkedBigNumberify('./index.rsh:199:10:spread', stdlib.UInt_max, '0')];
  const v1401 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1395), null);
  const v1402 = {
    None: 0,
    Some: 1
    }[v1401[0]];
  const v1403 = stdlib.eq(v1402, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1403, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:201:18:application call to [unknown function] (defined at: ./index.rsh:201:18:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_getRole'
    });
  const v1406 = null;
  const v1407 = await txn1.getOutput('Player_getRole', 'v1406', ctc0, v1406);
  if (v612) {
    stdlib.protect(ctc0, await interact.out(v1396, v1407), {
      at: './index.rsh:199:11:application',
      fs: ['at ./index.rsh:199:11:application call to [unknown function] (defined at: ./index.rsh:199:11:function exp)', 'at ./index.rsh:202:10:application call to "k" (defined at: ./index.rsh:201:18:function exp)', 'at ./index.rsh:201:18:application call to [unknown function] (defined at: ./index.rsh:201:18:function exp)'],
      msg: 'out',
      who: 'Player_getRole'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map1, v1395, v1400);
  const v1413 = stdlib.safeAdd(v1370, stdlib.checkedBigNumberify('./index.rsh:204:31:decimal', stdlib.UInt_max, '1'));
  const v3247 = v1413;
  const v3249 = v1378;
  const v3250 = stdlib.lt(v1413, v1219);
  if (v3250) {
    return;
    }
  else {
    const v3251 = ['CheckingWin', null];
    null;
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
  
  
  const [v1164, v1165, v1166, v1175, v1178, v1186] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2]);
  const v1191 = ctc.selfAddress();
  const v1193 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:83:9:application',
    fs: ['at ./index.rsh:83:9:application call to [unknown function] (defined at: ./index.rsh:83:9:function exp)', 'at ./index.rsh:155:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'in',
    who: 'Player_join'
    });
  const v1194 = stdlib.addressEq(v1191, v1164);
  const v1195 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1191), null);
  const v1196 = {
    None: 0,
    Some: 1
    }[v1195[0]];
  const v1197 = stdlib.eq(v1196, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1198 = v1197 ? false : true;
  const v1199 = v1194 ? v1198 : false;
  stdlib.assert(v1199, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:85:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:83:9:application call to [unknown function] (defined at: ./index.rsh:85:20:function exp)', 'at ./index.rsh:83:9:application call to [unknown function] (defined at: ./index.rsh:83:9:function exp)', 'at ./index.rsh:155:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1164, v1165, v1166, v1175, v1178, v1186, v1193],
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
      
      const {data: [v1202], secs: v1204, time: v1203, didSend: v106, from: v1201 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_join"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1201), null);
      const v1212 = null;
      const v1213 = await txn1.getOutput('Player_join', 'v1212', ctc0, v1212);
      
      await stdlib.simMapSet(sim_r, 0, v1201, null);
      const v3430 = stdlib.checkedBigNumberify('./index.rsh:158:22:decimal', stdlib.UInt_max, '0');
      const v3432 = v1186;
      const v3433 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:158:22:decimal', stdlib.UInt_max, '0'), v1165);
      if (v3433) {
        sim_r.isHalt = false;
        }
      else {
        const v3434 = ['Wagering', null];
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
  const {data: [v1202], secs: v1204, time: v1203, didSend: v106, from: v1201 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1205 = stdlib.addressEq(v1201, v1164);
  const v1206 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1201), null);
  const v1207 = {
    None: 0,
    Some: 1
    }[v1206[0]];
  const v1208 = stdlib.eq(v1207, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1209 = v1208 ? false : true;
  const v1210 = v1205 ? v1209 : false;
  stdlib.assert(v1210, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:155:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  const v1212 = null;
  const v1213 = await txn1.getOutput('Player_join', 'v1212', ctc0, v1212);
  stdlib.protect(ctc0, await interact.out(v1202, v1213), {
    at: './index.rsh:83:9:application',
    fs: ['at ./index.rsh:83:9:application call to [unknown function] (defined at: ./index.rsh:83:9:function exp)', 'at ./index.rsh:87:10:application call to "k" (defined at: ./index.rsh:83:9:function exp)', 'at ./index.rsh:155:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'out',
    who: 'Player_join'
    });
  
  await stdlib.mapSet(map0, v1201, null);
  const v3430 = stdlib.checkedBigNumberify('./index.rsh:158:22:decimal', stdlib.UInt_max, '0');
  const v3432 = v1186;
  const v3433 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:158:22:decimal', stdlib.UInt_max, '0'), v1165);
  if (v3433) {
    return;
    }
  else {
    const v3434 = ['Wagering', null];
    null;
    return;
    }
  
  
  };
export async function _Player_join28(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_join28 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_join28 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1164, v1165, v1166, v1175, v1178, v1219, v1227] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '28'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2]);
  const v1232 = ctc.selfAddress();
  const v1234 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:162:27:application call to [unknown function] (defined at: ./index.rsh:162:27:function exp)', 'at ./index.rsh:162:27:application call to [unknown function] (defined at: ./index.rsh:162:27:function exp)'],
    msg: 'in',
    who: 'Player_join'
    });
  const v1235 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1232), null);
  const v1236 = {
    None: 0,
    Some: 1
    }[v1235[0]];
  const v1237 = stdlib.eq(v1236, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1238 = v1237 ? false : true;
  stdlib.assert(v1238, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:162:27:application call to [unknown function] (defined at: ./index.rsh:162:27:function exp)', 'at ./index.rsh:162:27:application call to [unknown function] (defined at: ./index.rsh:162:27:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1164, v1165, v1166, v1175, v1178, v1219, v1227, v1234],
    evt_cnt: 1,
    funcNum: 27,
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
      
      const {data: [v1243], secs: v1245, time: v1244, didSend: v215, from: v1242 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_join"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1242), null);
      const v1252 = null;
      const v1253 = await txn1.getOutput('Player_join', 'v1252', ctc0, v1252);
      
      await stdlib.simMapSet(sim_r, 0, v1242, null);
      const v1259 = stdlib.safeAdd(v1219, stdlib.checkedBigNumberify('./index.rsh:167:33:decimal', stdlib.UInt_max, '1'));
      const v3675 = v1259;
      const v3677 = v1227;
      const v3678 = stdlib.lt(v1259, v1165);
      if (v3678) {
        sim_r.isHalt = false;
        }
      else {
        const v3679 = ['Wagering', null];
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
  const {data: [v1243], secs: v1245, time: v1244, didSend: v215, from: v1242 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1247 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1242), null);
  const v1248 = {
    None: 0,
    Some: 1
    }[v1247[0]];
  const v1249 = stdlib.eq(v1248, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1250 = v1249 ? false : true;
  stdlib.assert(v1250, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:164:20:application call to [unknown function] (defined at: ./index.rsh:164:20:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  const v1252 = null;
  const v1253 = await txn1.getOutput('Player_join', 'v1252', ctc0, v1252);
  if (v215) {
    stdlib.protect(ctc0, await interact.out(v1243, v1253), {
      at: './index.rsh:162:11:application',
      fs: ['at ./index.rsh:162:11:application call to [unknown function] (defined at: ./index.rsh:162:11:function exp)', 'at ./index.rsh:165:10:application call to "k" (defined at: ./index.rsh:164:20:function exp)', 'at ./index.rsh:164:20:application call to [unknown function] (defined at: ./index.rsh:164:20:function exp)'],
      msg: 'out',
      who: 'Player_join'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v1242, null);
  const v1259 = stdlib.safeAdd(v1219, stdlib.checkedBigNumberify('./index.rsh:167:33:decimal', stdlib.UInt_max, '1'));
  const v3675 = v1259;
  const v3677 = v1227;
  const v3678 = stdlib.lt(v1259, v1165);
  if (v3678) {
    return;
    }
  else {
    const v3679 = ['Wagering', null];
    null;
    return;
    }
  
  
  };
export async function _Player_receivePay16(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay16 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay16 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1164, v1165, v1166, v1175, v1178, v1526, v1528, v1634] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2]);
  const v1641 = ctc.selfAddress();
  const v1643 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:273:41:application call to [unknown function] (defined at: ./index.rsh:273:41:function exp)', 'at ./index.rsh:273:41:application call to [unknown function] (defined at: ./index.rsh:273:41:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1644 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1641), null);
  const v1645 = {
    None: 0,
    Some: 1
    }[v1644[0]];
  const v1646 = stdlib.eq(v1645, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1646, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:274:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:273:41:application call to [unknown function] (defined at: ./index.rsh:273:41:function exp)', 'at ./index.rsh:273:41:application call to [unknown function] (defined at: ./index.rsh:273:41:function exp)'],
    msg: 'Player is not a winner',
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1164, v1165, v1166, v1175, v1178, v1526, v1528, v1634, v1643],
    evt_cnt: 1,
    funcNum: 15,
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
      
      const {data: [v1651], secs: v1653, time: v1652, didSend: v1004, from: v1650 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1650), null);
      const v1659 = null;
      const v1660 = await txn1.getOutput('Player_receivePay', 'v1659', ctc0, v1659);
      
      await stdlib.simMapSet(sim_r, 2, v1650, undefined /* Nothing */);
      const v3922 = v1634;
      const v3923 = stdlib.addressEq(v1650, v1175);
      const v3924 = stdlib.gt(v1528, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
      const v3925 = v3923 ? v3924 : false;
      if (v3925) {
        sim_r.isHalt = false;
        }
      else {
        const v3926 = stdlib.sub(v1634, v1634);
        sim_r.txns.push({
          kind: 'from',
          to: v1650,
          tok: undefined /* Nothing */
          });
        const v3927 = stdlib.safeSub(v1528, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
        const v3928 = true;
        const v3929 = v3927;
        const v3931 = v3926;
        const v3932 = stdlib.gt(v3927, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        if (v3932) {
          sim_r.isHalt = false;
          }
        else {
          const v3933 = stdlib.sub(v3926, v3926);
          sim_r.txns.push({
            kind: 'from',
            to: v1175,
            tok: undefined /* Nothing */
            });
          const v3934 = ['Finished', null];
          null;
          const v3935 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
          const v3936 = v3935;
          const v3938 = v3933;
          const v3939 = stdlib.gt(v3935, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
          if (v3939) {
            const v3940 = ['Joining', null];
            null;
            sim_r.isHalt = false;
            }
          else {
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
  const {data: [v1651], secs: v1653, time: v1652, didSend: v1004, from: v1650 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1655 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1650), null);
  const v1656 = {
    None: 0,
    Some: 1
    }[v1655[0]];
  const v1657 = stdlib.eq(v1656, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1657, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:274:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:27:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)'],
    msg: 'Player is not a winner',
    who: 'Player_receivePay'
    });
  const v1659 = null;
  const v1660 = await txn1.getOutput('Player_receivePay', 'v1659', ctc0, v1659);
  if (v1004) {
    stdlib.protect(ctc0, await interact.out(v1651, v1660), {
      at: './index.rsh:273:19:application',
      fs: ['at ./index.rsh:273:19:application call to [unknown function] (defined at: ./index.rsh:273:19:function exp)', 'at ./index.rsh:276:18:application call to "k" (defined at: ./index.rsh:275:27:function exp)', 'at ./index.rsh:275:27:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map2, v1650, undefined /* Nothing */);
  const v3922 = v1634;
  const v3923 = stdlib.addressEq(v1650, v1175);
  const v3924 = stdlib.gt(v1528, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
  const v3925 = v3923 ? v3924 : false;
  if (v3925) {
    return;
    }
  else {
    const v3926 = stdlib.sub(v1634, v1634);
    ;
    const v3927 = stdlib.safeSub(v1528, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
    const v3928 = true;
    const v3929 = v3927;
    const v3931 = v3926;
    const v3932 = stdlib.gt(v3927, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
    if (v3932) {
      return;
      }
    else {
      const v3933 = stdlib.sub(v3926, v3926);
      ;
      const v3934 = ['Finished', null];
      null;
      const v3935 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
      const v3936 = v3935;
      const v3938 = v3933;
      const v3939 = stdlib.gt(v3935, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
      if (v3939) {
        const v3940 = ['Joining', null];
        null;
        return;
        }
      else {
        return;
        }}}
  
  
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
  
  
  const [v1164, v1165, v1166, v1175, v1178, v1526, v1528, v1545] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2]);
  const v1549 = ctc.selfAddress();
  const v1551 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:134:9:application',
    fs: ['at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1552 = stdlib.addressEq(v1549, v1164);
  const v1553 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1549), null);
  const v1554 = {
    None: 0,
    Some: 1
    }[v1553[0]];
  const v1555 = stdlib.eq(v1554, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1556 = v1552 ? v1555 : false;
  stdlib.assert(v1556, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:136:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:136:20:function exp)', 'at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1164, v1165, v1166, v1175, v1178, v1526, v1528, v1545, v1551],
    evt_cnt: 1,
    funcNum: 16,
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
      
      const {data: [v1559], secs: v1561, time: v1560, didSend: v871, from: v1558 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1558), null);
      const v1568 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1558), null);
      const v1569 = {
        None: 0,
        Some: 1
        }[v1568[0]];
      const v1570 = stdlib.eq(v1569, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1570) {
        const v1571 = null;
        const v1572 = await txn1.getOutput('Player_receivePay', 'v1571', ctc0, v1571);
        
        await stdlib.simMapSet(sim_r, 0, v1558, undefined /* Nothing */);
        const v1582 = stdlib.sub(v1545, v1545);
        sim_r.txns.push({
          kind: 'from',
          to: v1164,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1164, undefined /* Nothing */);
        const v1588 = stdlib.sub(v1582, v1582);
        sim_r.txns.push({
          kind: 'from',
          to: v1175,
          tok: undefined /* Nothing */
          });
        const v1590 = stdlib.safeSub(v1528, stdlib.checkedBigNumberify('./index.rsh:263:71:decimal', stdlib.UInt_max, '1'));
        const v3941 = true;
        const v3942 = v1590;
        const v3944 = v1588;
        const v3945 = stdlib.gt(v1590, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        if (v3945) {
          sim_r.isHalt = false;
          }
        else {
          const v3946 = stdlib.sub(v1588, v1588);
          sim_r.txns.push({
            kind: 'from',
            to: v1175,
            tok: undefined /* Nothing */
            });
          const v3947 = ['Finished', null];
          null;
          const v3948 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
          const v3949 = v3948;
          const v3951 = v3946;
          const v3952 = stdlib.gt(v3948, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
          if (v3952) {
            const v3953 = ['Joining', null];
            null;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1598 = null;
        const v1599 = await txn1.getOutput('Player_receivePay', 'v1598', ctc0, v1598);
        
        await stdlib.simMapSet(sim_r, 0, v1558, undefined /* Nothing */);
        const v1609 = stdlib.sub(v1545, v1545);
        sim_r.txns.push({
          kind: 'from',
          to: v1164,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1164, undefined /* Nothing */);
        const v1615 = stdlib.sub(v1609, v1609);
        sim_r.txns.push({
          kind: 'from',
          to: v1175,
          tok: undefined /* Nothing */
          });
        const v1617 = stdlib.safeSub(v1528, stdlib.checkedBigNumberify('./index.rsh:263:71:decimal', stdlib.UInt_max, '1'));
        const v3954 = true;
        const v3955 = v1617;
        const v3957 = v1615;
        const v3958 = stdlib.gt(v1617, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        if (v3958) {
          sim_r.isHalt = false;
          }
        else {
          const v3959 = stdlib.sub(v1615, v1615);
          sim_r.txns.push({
            kind: 'from',
            to: v1175,
            tok: undefined /* Nothing */
            });
          const v3960 = ['Finished', null];
          null;
          const v3961 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
          const v3962 = v3961;
          const v3964 = v3959;
          const v3965 = stdlib.gt(v3961, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
          if (v3965) {
            const v3966 = ['Joining', null];
            null;
            sim_r.isHalt = false;
            }
          else {
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
  const {data: [v1559], secs: v1561, time: v1560, didSend: v871, from: v1558 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1562 = stdlib.addressEq(v1558, v1164);
  const v1563 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1558), null);
  const v1564 = {
    None: 0,
    Some: 1
    }[v1563[0]];
  const v1565 = stdlib.eq(v1564, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1566 = v1562 ? v1565 : false;
  stdlib.assert(v1566, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:137:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_receivePay'
    });
  const v1568 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1558), null);
  const v1569 = {
    None: 0,
    Some: 1
    }[v1568[0]];
  const v1570 = stdlib.eq(v1569, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v1570) {
    const v1571 = null;
    const v1572 = await txn1.getOutput('Player_receivePay', 'v1571', ctc0, v1571);
    stdlib.protect(ctc0, await interact.out(v1559, v1572), {
      at: './index.rsh:134:9:application',
      fs: ['at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:140:12:application call to "k" (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    
    await stdlib.mapSet(map0, v1558, undefined /* Nothing */);
    const v1582 = stdlib.sub(v1545, v1545);
    ;
    await stdlib.mapSet(map2, v1164, undefined /* Nothing */);
    const v1588 = stdlib.sub(v1582, v1582);
    ;
    const v1590 = stdlib.safeSub(v1528, stdlib.checkedBigNumberify('./index.rsh:263:71:decimal', stdlib.UInt_max, '1'));
    const v3941 = true;
    const v3942 = v1590;
    const v3944 = v1588;
    const v3945 = stdlib.gt(v1590, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
    if (v3945) {
      return;
      }
    else {
      const v3946 = stdlib.sub(v1588, v1588);
      ;
      const v3947 = ['Finished', null];
      null;
      const v3948 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
      const v3949 = v3948;
      const v3951 = v3946;
      const v3952 = stdlib.gt(v3948, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
      if (v3952) {
        const v3953 = ['Joining', null];
        null;
        return;
        }
      else {
        return;
        }}}
  else {
    const v1598 = null;
    const v1599 = await txn1.getOutput('Player_receivePay', 'v1598', ctc0, v1598);
    stdlib.protect(ctc0, await interact.out(v1559, v1599), {
      at: './index.rsh:134:9:application',
      fs: ['at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:145:12:application call to "k" (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    
    await stdlib.mapSet(map0, v1558, undefined /* Nothing */);
    const v1609 = stdlib.sub(v1545, v1545);
    ;
    await stdlib.mapSet(map2, v1164, undefined /* Nothing */);
    const v1615 = stdlib.sub(v1609, v1609);
    ;
    const v1617 = stdlib.safeSub(v1528, stdlib.checkedBigNumberify('./index.rsh:263:71:decimal', stdlib.UInt_max, '1'));
    const v3954 = true;
    const v3955 = v1617;
    const v3957 = v1615;
    const v3958 = stdlib.gt(v1617, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
    if (v3958) {
      return;
      }
    else {
      const v3959 = stdlib.sub(v1615, v1615);
      ;
      const v3960 = ['Finished', null];
      null;
      const v3961 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
      const v3962 = v3961;
      const v3964 = v3959;
      const v3965 = stdlib.gt(v3961, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
      if (v3965) {
        const v3966 = ['Joining', null];
        null;
        return;
        }
      else {
        return;
        }}}
  
  
  };
export async function _Player_receivePay23(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay23 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay23 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1164, v1165, v1166, v1175, v1178, v1757, v1759, v1865] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '23'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2]);
  const v1872 = ctc.selfAddress();
  const v1874 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:273:41:application call to [unknown function] (defined at: ./index.rsh:273:41:function exp)', 'at ./index.rsh:273:41:application call to [unknown function] (defined at: ./index.rsh:273:41:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1875 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1872), null);
  const v1876 = {
    None: 0,
    Some: 1
    }[v1875[0]];
  const v1877 = stdlib.eq(v1876, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1877, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:274:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:273:41:application call to [unknown function] (defined at: ./index.rsh:273:41:function exp)', 'at ./index.rsh:273:41:application call to [unknown function] (defined at: ./index.rsh:273:41:function exp)'],
    msg: 'Player is not a winner',
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1164, v1165, v1166, v1175, v1178, v1757, v1759, v1865, v1874],
    evt_cnt: 1,
    funcNum: 22,
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
      
      const {data: [v1882], secs: v1884, time: v1883, didSend: v1004, from: v1881 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1881), null);
      const v1890 = null;
      const v1891 = await txn1.getOutput('Player_receivePay', 'v1890', ctc0, v1890);
      
      await stdlib.simMapSet(sim_r, 2, v1881, undefined /* Nothing */);
      const v3969 = v1865;
      const v3970 = stdlib.addressEq(v1881, v1175);
      const v3971 = stdlib.gt(v1759, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
      const v3972 = v3970 ? v3971 : false;
      if (v3972) {
        sim_r.isHalt = false;
        }
      else {
        const v3973 = stdlib.sub(v1865, v1865);
        sim_r.txns.push({
          kind: 'from',
          to: v1881,
          tok: undefined /* Nothing */
          });
        const v3974 = stdlib.safeSub(v1759, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
        const v3975 = true;
        const v3976 = v3974;
        const v3978 = v3973;
        const v3979 = stdlib.gt(v3974, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        if (v3979) {
          sim_r.isHalt = false;
          }
        else {
          const v3980 = stdlib.sub(v3973, v3973);
          sim_r.txns.push({
            kind: 'from',
            to: v1175,
            tok: undefined /* Nothing */
            });
          const v3981 = ['Finished', null];
          null;
          const v3982 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
          const v3983 = v3982;
          const v3985 = v3980;
          const v3986 = stdlib.gt(v3982, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
          if (v3986) {
            const v3987 = ['Joining', null];
            null;
            sim_r.isHalt = false;
            }
          else {
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
  const {data: [v1882], secs: v1884, time: v1883, didSend: v1004, from: v1881 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1886 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1881), null);
  const v1887 = {
    None: 0,
    Some: 1
    }[v1886[0]];
  const v1888 = stdlib.eq(v1887, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1888, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:274:20:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:27:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)'],
    msg: 'Player is not a winner',
    who: 'Player_receivePay'
    });
  const v1890 = null;
  const v1891 = await txn1.getOutput('Player_receivePay', 'v1890', ctc0, v1890);
  if (v1004) {
    stdlib.protect(ctc0, await interact.out(v1882, v1891), {
      at: './index.rsh:273:19:application',
      fs: ['at ./index.rsh:273:19:application call to [unknown function] (defined at: ./index.rsh:273:19:function exp)', 'at ./index.rsh:276:18:application call to "k" (defined at: ./index.rsh:275:27:function exp)', 'at ./index.rsh:275:27:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map2, v1881, undefined /* Nothing */);
  const v3969 = v1865;
  const v3970 = stdlib.addressEq(v1881, v1175);
  const v3971 = stdlib.gt(v1759, stdlib.checkedBigNumberify('./index.rsh:272:54:decimal', stdlib.UInt_max, '0'));
  const v3972 = v3970 ? v3971 : false;
  if (v3972) {
    return;
    }
  else {
    const v3973 = stdlib.sub(v1865, v1865);
    ;
    const v3974 = stdlib.safeSub(v1759, stdlib.checkedBigNumberify('./index.rsh:284:55:decimal', stdlib.UInt_max, '1'));
    const v3975 = true;
    const v3976 = v3974;
    const v3978 = v3973;
    const v3979 = stdlib.gt(v3974, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
    if (v3979) {
      return;
      }
    else {
      const v3980 = stdlib.sub(v3973, v3973);
      ;
      const v3981 = ['Finished', null];
      null;
      const v3982 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
      const v3983 = v3982;
      const v3985 = v3980;
      const v3986 = stdlib.gt(v3982, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
      if (v3986) {
        const v3987 = ['Joining', null];
        null;
        return;
        }
      else {
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
  
  
  const [v1164, v1165, v1166, v1175, v1178, v1757, v1759, v1776] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '24'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2]);
  const v1780 = ctc.selfAddress();
  const v1782 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:134:9:application',
    fs: ['at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1783 = stdlib.addressEq(v1780, v1164);
  const v1784 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1780), null);
  const v1785 = {
    None: 0,
    Some: 1
    }[v1784[0]];
  const v1786 = stdlib.eq(v1785, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1787 = v1783 ? v1786 : false;
  stdlib.assert(v1787, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:136:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:136:20:function exp)', 'at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1164, v1165, v1166, v1175, v1178, v1757, v1759, v1776, v1782],
    evt_cnt: 1,
    funcNum: 23,
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
      
      const {data: [v1790], secs: v1792, time: v1791, didSend: v871, from: v1789 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1789), null);
      const v1799 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1789), null);
      const v1800 = {
        None: 0,
        Some: 1
        }[v1799[0]];
      const v1801 = stdlib.eq(v1800, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1801) {
        const v1802 = null;
        const v1803 = await txn1.getOutput('Player_receivePay', 'v1802', ctc0, v1802);
        
        await stdlib.simMapSet(sim_r, 0, v1789, undefined /* Nothing */);
        const v1826 = stdlib.sub(v1776, v1776);
        sim_r.txns.push({
          kind: 'from',
          to: v1175,
          tok: undefined /* Nothing */
          });
        const v3988 = true;
        const v3989 = v1759;
        const v3991 = v1826;
        const v3992 = stdlib.gt(v1759, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        if (v3992) {
          sim_r.isHalt = false;
          }
        else {
          const v3993 = stdlib.sub(v1826, v1826);
          sim_r.txns.push({
            kind: 'from',
            to: v1175,
            tok: undefined /* Nothing */
            });
          const v3994 = ['Finished', null];
          null;
          const v3995 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
          const v3996 = v3995;
          const v3998 = v3993;
          const v3999 = stdlib.gt(v3995, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
          if (v3999) {
            const v4000 = ['Joining', null];
            null;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1829 = null;
        const v1830 = await txn1.getOutput('Player_receivePay', 'v1829', ctc0, v1829);
        
        await stdlib.simMapSet(sim_r, 0, v1789, undefined /* Nothing */);
        const v1853 = stdlib.sub(v1776, v1776);
        sim_r.txns.push({
          kind: 'from',
          to: v1175,
          tok: undefined /* Nothing */
          });
        const v4001 = true;
        const v4002 = v1759;
        const v4004 = v1853;
        const v4005 = stdlib.gt(v1759, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
        if (v4005) {
          sim_r.isHalt = false;
          }
        else {
          const v4006 = stdlib.sub(v1853, v1853);
          sim_r.txns.push({
            kind: 'from',
            to: v1175,
            tok: undefined /* Nothing */
            });
          const v4007 = ['Finished', null];
          null;
          const v4008 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
          const v4009 = v4008;
          const v4011 = v4006;
          const v4012 = stdlib.gt(v4008, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
          if (v4012) {
            const v4013 = ['Joining', null];
            null;
            sim_r.isHalt = false;
            }
          else {
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
  const {data: [v1790], secs: v1792, time: v1791, didSend: v871, from: v1789 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1793 = stdlib.addressEq(v1789, v1164);
  const v1794 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1789), null);
  const v1795 = {
    None: 0,
    Some: 1
    }[v1794[0]];
  const v1796 = stdlib.eq(v1795, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1797 = v1793 ? v1796 : false;
  stdlib.assert(v1797, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:137:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_receivePay'
    });
  const v1799 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1789), null);
  const v1800 = {
    None: 0,
    Some: 1
    }[v1799[0]];
  const v1801 = stdlib.eq(v1800, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v1801) {
    const v1802 = null;
    const v1803 = await txn1.getOutput('Player_receivePay', 'v1802', ctc0, v1802);
    stdlib.protect(ctc0, await interact.out(v1790, v1803), {
      at: './index.rsh:134:9:application',
      fs: ['at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:140:12:application call to "k" (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    
    await stdlib.mapSet(map0, v1789, undefined /* Nothing */);
    const v1826 = stdlib.sub(v1776, v1776);
    ;
    const v3988 = true;
    const v3989 = v1759;
    const v3991 = v1826;
    const v3992 = stdlib.gt(v1759, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
    if (v3992) {
      return;
      }
    else {
      const v3993 = stdlib.sub(v1826, v1826);
      ;
      const v3994 = ['Finished', null];
      null;
      const v3995 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
      const v3996 = v3995;
      const v3998 = v3993;
      const v3999 = stdlib.gt(v3995, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
      if (v3999) {
        const v4000 = ['Joining', null];
        null;
        return;
        }
      else {
        return;
        }}}
  else {
    const v1829 = null;
    const v1830 = await txn1.getOutput('Player_receivePay', 'v1829', ctc0, v1829);
    stdlib.protect(ctc0, await interact.out(v1790, v1830), {
      at: './index.rsh:134:9:application',
      fs: ['at ./index.rsh:134:9:application call to [unknown function] (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:145:12:application call to "k" (defined at: ./index.rsh:134:9:function exp)', 'at ./index.rsh:257:28:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    
    await stdlib.mapSet(map0, v1789, undefined /* Nothing */);
    const v1853 = stdlib.sub(v1776, v1776);
    ;
    const v4001 = true;
    const v4002 = v1759;
    const v4004 = v1853;
    const v4005 = stdlib.gt(v1759, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
    if (v4005) {
      return;
      }
    else {
      const v4006 = stdlib.sub(v1853, v1853);
      ;
      const v4007 = ['Finished', null];
      null;
      const v4008 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
      const v4009 = v4008;
      const v4011 = v4006;
      const v4012 = stdlib.gt(v4008, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
      if (v4012) {
        const v4013 = ['Joining', null];
        null;
        return;
        }
      else {
        return;
        }}}
  
  
  };
export async function _Player_seeWinner11(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_seeWinner11 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_seeWinner11 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1164, v1165, v1166, v1175, v1178, v1289, v1370, v1378] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2]);
  const v1418 = ctc.selfAddress();
  const v1420 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:111:9:application',
    fs: ['at ./index.rsh:111:9:application call to [unknown function] (defined at: ./index.rsh:111:9:function exp)', 'at ./index.rsh:214:59:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'in',
    who: 'Player_seeWinner'
    });
  const v1423 = stdlib.addressEq(v1418, v1164);
  const v1424 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1418), null);
  const v1425 = {
    None: 0,
    Some: 1
    }[v1424[0]];
  const v1426 = stdlib.eq(v1425, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1427 = v1423 ? v1426 : false;
  stdlib.assert(v1427, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:113:33:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:111:9:application call to [unknown function] (defined at: ./index.rsh:113:25:function exp)', 'at ./index.rsh:111:9:application call to [unknown function] (defined at: ./index.rsh:111:9:function exp)', 'at ./index.rsh:214:59:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1164, v1165, v1166, v1175, v1178, v1289, v1370, v1378, v1420],
    evt_cnt: 1,
    funcNum: 10,
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
      
      const {data: [v1430], secs: v1432, time: v1431, didSend: v685, from: v1429 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_seeWinner"
        });
      ;
      const v1433 = v1430[stdlib.checkedBigNumberify('./index.rsh:111:17:array', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1429), null);
      const v1440 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1429), null);
      const v1441 = stdlib.fromSome(v1440, stdlib.checkedBigNumberify('./index.rsh:115:55:decimal', stdlib.UInt_max, '0'));
      const v1442 = stdlib.eq(v1441, v1433);
      const v1443 = v1442 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
      const v1444 = stdlib.eq(v1443, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v1444) {
        const v1448 = true;
        const v1449 = await txn1.getOutput('Player_seeWinner', 'v1448', ctc6, v1448);
        
        await stdlib.simMapSet(sim_r, 1, v1429, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 2, v1429, null);
        const v4014 = v1370;
        const v4015 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
        const v4017 = v1378;
        const v4018 = stdlib.gt(v1370, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4018) {
          sim_r.isHalt = false;
          }
        else {
          const v4019 = stdlib.sub(v1378, v1289);
          sim_r.txns.push({
            kind: 'from',
            to: v1175,
            tok: undefined /* Nothing */
            });
          const v4020 = v1289;
          const v4077 = false;
          const v4078 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
          const v4080 = v4019;
          sim_r.isHalt = false;
          }}
      else {
        const v1680 = false;
        const v1681 = await txn1.getOutput('Player_seeWinner', 'v1680', ctc6, v1680);
        
        await stdlib.simMapSet(sim_r, 1, v1429, undefined /* Nothing */);
        const v4090 = v1370;
        const v4091 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
        const v4093 = v1378;
        const v4094 = stdlib.gt(v1370, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4094) {
          sim_r.isHalt = false;
          }
        else {
          const v4095 = stdlib.sub(v1378, v1289);
          sim_r.txns.push({
            kind: 'from',
            to: v1175,
            tok: undefined /* Nothing */
            });
          const v4154 = stdlib.sub(v4095, v4095);
          sim_r.txns.push({
            kind: 'from',
            to: v1175,
            tok: undefined /* Nothing */
            });
          const v4155 = ['Finished', null];
          null;
          const v4156 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
          const v4157 = v4156;
          const v4159 = v4154;
          const v4160 = stdlib.gt(v4156, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
          if (v4160) {
            const v4161 = ['Joining', null];
            null;
            sim_r.isHalt = false;
            }
          else {
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
  const {data: [v1430], secs: v1432, time: v1431, didSend: v685, from: v1429 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1433 = v1430[stdlib.checkedBigNumberify('./index.rsh:111:17:array', stdlib.UInt_max, '0')];
  const v1434 = stdlib.addressEq(v1429, v1164);
  const v1435 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1429), null);
  const v1436 = {
    None: 0,
    Some: 1
    }[v1435[0]];
  const v1437 = stdlib.eq(v1436, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1438 = v1434 ? v1437 : false;
  stdlib.assert(v1438, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:114:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:214:59:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_seeWinner'
    });
  const v1440 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1429), null);
  const v1441 = stdlib.fromSome(v1440, stdlib.checkedBigNumberify('./index.rsh:115:55:decimal', stdlib.UInt_max, '0'));
  const v1442 = stdlib.eq(v1441, v1433);
  const v1443 = v1442 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
  const v1444 = stdlib.eq(v1443, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v1444) {
    const v1448 = true;
    const v1449 = await txn1.getOutput('Player_seeWinner', 'v1448', ctc6, v1448);
    stdlib.protect(ctc0, await interact.out(v1430, v1449), {
      at: './index.rsh:111:9:application',
      fs: ['at ./index.rsh:111:9:application call to [unknown function] (defined at: ./index.rsh:111:9:function exp)', 'at ./index.rsh:120:12:application call to "k" (defined at: ./index.rsh:111:9:function exp)', 'at ./index.rsh:214:59:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: 'out',
      who: 'Player_seeWinner'
      });
    
    await stdlib.mapSet(map1, v1429, undefined /* Nothing */);
    await stdlib.mapSet(map2, v1429, null);
    const v4014 = v1370;
    const v4015 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
    const v4017 = v1378;
    const v4018 = stdlib.gt(v1370, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4018) {
      return;
      }
    else {
      const v4019 = stdlib.sub(v1378, v1289);
      ;
      const v4020 = v1289;
      const v4077 = false;
      const v4078 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
      const v4080 = v4019;
      return;
      }}
  else {
    const v1680 = false;
    const v1681 = await txn1.getOutput('Player_seeWinner', 'v1680', ctc6, v1680);
    stdlib.protect(ctc0, await interact.out(v1430, v1681), {
      at: './index.rsh:111:9:application',
      fs: ['at ./index.rsh:111:9:application call to [unknown function] (defined at: ./index.rsh:111:9:function exp)', 'at ./index.rsh:127:12:application call to "k" (defined at: ./index.rsh:111:9:function exp)', 'at ./index.rsh:214:59:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
      msg: 'out',
      who: 'Player_seeWinner'
      });
    
    await stdlib.mapSet(map1, v1429, undefined /* Nothing */);
    const v4090 = v1370;
    const v4091 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
    const v4093 = v1378;
    const v4094 = stdlib.gt(v1370, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4094) {
      return;
      }
    else {
      const v4095 = stdlib.sub(v1378, v1289);
      ;
      const v4154 = stdlib.sub(v4095, v4095);
      ;
      const v4155 = ['Finished', null];
      null;
      const v4156 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
      const v4157 = v4156;
      const v4159 = v4154;
      const v4160 = stdlib.gt(v4156, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
      if (v4160) {
        const v4161 = ['Joining', null];
        null;
        return;
        }
      else {
        return;
        }}}
  
  
  };
export async function _Player_seeWinner18(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_seeWinner18 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_seeWinner18 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1164, v1165, v1166, v1175, v1178, v1289, v1459, v1460, v1468] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '18'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1475 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:221:9:application call to [unknown function] (defined at: ./index.rsh:221:9:function exp)', 'at ./index.rsh:221:9:application call to [unknown function] (defined at: ./index.rsh:221:9:function exp)'],
    msg: 'in',
    who: 'Player_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1164, v1165, v1166, v1175, v1178, v1289, v1459, v1460, v1468, v1475],
    evt_cnt: 1,
    funcNum: 17,
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
      
      const {data: [v1481], secs: v1483, time: v1482, didSend: v777, from: v1480 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_seeWinner"
        });
      ;
      const v1485 = v1481[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
      const v1486 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1480), null);
      const v1487 = stdlib.fromSome(v1486, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
      const v1488 = stdlib.eq(v1487, v1485);
      const v1489 = v1488 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
      const v1490 = stdlib.eq(v1489, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v1490) {
        const v1494 = true;
        const v1495 = await txn1.getOutput('Player_seeWinner', 'v1494', ctc6, v1494);
        
        await stdlib.simMapSet(sim_r, 1, v1480, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 2, v1480, null);
        await stdlib.simMapSet(sim_r, 0, v1480, undefined /* Nothing */);
        const v1503 = stdlib.safeAdd(v1460, stdlib.checkedBigNumberify('./index.rsh:233:29:decimal', stdlib.UInt_max, '1'));
        const v1504 = stdlib.safeSub(v1459, stdlib.checkedBigNumberify('./index.rsh:233:45:decimal', stdlib.UInt_max, '1'));
        const v4162 = v1504;
        const v4163 = v1503;
        const v4165 = v1468;
        const v4166 = stdlib.gt(v1504, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4166) {
          sim_r.isHalt = false;
          }
        else {
          const v4167 = stdlib.sub(v1468, v1289);
          sim_r.txns.push({
            kind: 'from',
            to: v1175,
            tok: undefined /* Nothing */
            });
          const v4168 = stdlib.safeDiv(v1289, v1503);
          const v4225 = false;
          const v4226 = v1503;
          const v4228 = v4167;
          const v4229 = stdlib.gt(v1503, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
          if (v4229) {
            sim_r.isHalt = false;
            }
          else {
            const v4230 = stdlib.sub(v4167, v4167);
            sim_r.txns.push({
              kind: 'from',
              to: v1175,
              tok: undefined /* Nothing */
              });
            const v4231 = ['Finished', null];
            null;
            const v4232 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
            const v4233 = v4232;
            const v4235 = v4230;
            const v4236 = stdlib.gt(v4232, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
            if (v4236) {
              const v4237 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1509 = false;
        const v1510 = await txn1.getOutput('Player_seeWinner', 'v1509', ctc6, v1509);
        
        await stdlib.simMapSet(sim_r, 1, v1480, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 0, v1480, undefined /* Nothing */);
        const v1517 = stdlib.safeSub(v1459, stdlib.checkedBigNumberify('./index.rsh:240:42:decimal', stdlib.UInt_max, '1'));
        const v4238 = v1517;
        const v4239 = v1460;
        const v4241 = v1468;
        const v4242 = stdlib.gt(v1517, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4242) {
          sim_r.isHalt = false;
          }
        else {
          const v4243 = stdlib.sub(v1468, v1289);
          sim_r.txns.push({
            kind: 'from',
            to: v1175,
            tok: undefined /* Nothing */
            });
          const v4244 = stdlib.safeDiv(v1289, v1460);
          const v4301 = false;
          const v4302 = v1460;
          const v4304 = v4243;
          const v4305 = stdlib.gt(v1460, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
          if (v4305) {
            sim_r.isHalt = false;
            }
          else {
            const v4306 = stdlib.sub(v4243, v4243);
            sim_r.txns.push({
              kind: 'from',
              to: v1175,
              tok: undefined /* Nothing */
              });
            const v4307 = ['Finished', null];
            null;
            const v4308 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
            const v4309 = v4308;
            const v4311 = v4306;
            const v4312 = stdlib.gt(v4308, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
            if (v4312) {
              const v4313 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
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
  const {data: [v1481], secs: v1483, time: v1482, didSend: v777, from: v1480 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1485 = v1481[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
  const v1486 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1480), null);
  const v1487 = stdlib.fromSome(v1486, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
  const v1488 = stdlib.eq(v1487, v1485);
  const v1489 = v1488 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
  const v1490 = stdlib.eq(v1489, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v1490) {
    const v1494 = true;
    const v1495 = await txn1.getOutput('Player_seeWinner', 'v1494', ctc6, v1494);
    if (v777) {
      stdlib.protect(ctc0, await interact.out(v1481, v1495), {
        at: './index.rsh:221:10:application',
        fs: ['at ./index.rsh:221:10:application call to [unknown function] (defined at: ./index.rsh:221:10:function exp)', 'at ./index.rsh:229:12:application call to "k" (defined at: ./index.rsh:222:17:function exp)', 'at ./index.rsh:222:17:application call to [unknown function] (defined at: ./index.rsh:222:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1480, undefined /* Nothing */);
    await stdlib.mapSet(map2, v1480, null);
    await stdlib.mapSet(map0, v1480, undefined /* Nothing */);
    const v1503 = stdlib.safeAdd(v1460, stdlib.checkedBigNumberify('./index.rsh:233:29:decimal', stdlib.UInt_max, '1'));
    const v1504 = stdlib.safeSub(v1459, stdlib.checkedBigNumberify('./index.rsh:233:45:decimal', stdlib.UInt_max, '1'));
    const v4162 = v1504;
    const v4163 = v1503;
    const v4165 = v1468;
    const v4166 = stdlib.gt(v1504, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4166) {
      return;
      }
    else {
      const v4167 = stdlib.sub(v1468, v1289);
      ;
      const v4168 = stdlib.safeDiv(v1289, v1503);
      const v4225 = false;
      const v4226 = v1503;
      const v4228 = v4167;
      const v4229 = stdlib.gt(v1503, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
      if (v4229) {
        return;
        }
      else {
        const v4230 = stdlib.sub(v4167, v4167);
        ;
        const v4231 = ['Finished', null];
        null;
        const v4232 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
        const v4233 = v4232;
        const v4235 = v4230;
        const v4236 = stdlib.gt(v4232, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
        if (v4236) {
          const v4237 = ['Joining', null];
          null;
          return;
          }
        else {
          return;
          }}}}
  else {
    const v1509 = false;
    const v1510 = await txn1.getOutput('Player_seeWinner', 'v1509', ctc6, v1509);
    if (v777) {
      stdlib.protect(ctc0, await interact.out(v1481, v1510), {
        at: './index.rsh:221:10:application',
        fs: ['at ./index.rsh:221:10:application call to [unknown function] (defined at: ./index.rsh:221:10:function exp)', 'at ./index.rsh:237:12:application call to "k" (defined at: ./index.rsh:222:17:function exp)', 'at ./index.rsh:222:17:application call to [unknown function] (defined at: ./index.rsh:222:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1480, undefined /* Nothing */);
    await stdlib.mapSet(map0, v1480, undefined /* Nothing */);
    const v1517 = stdlib.safeSub(v1459, stdlib.checkedBigNumberify('./index.rsh:240:42:decimal', stdlib.UInt_max, '1'));
    const v4238 = v1517;
    const v4239 = v1460;
    const v4241 = v1468;
    const v4242 = stdlib.gt(v1517, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4242) {
      return;
      }
    else {
      const v4243 = stdlib.sub(v1468, v1289);
      ;
      const v4244 = stdlib.safeDiv(v1289, v1460);
      const v4301 = false;
      const v4302 = v1460;
      const v4304 = v4243;
      const v4305 = stdlib.gt(v1460, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
      if (v4305) {
        return;
        }
      else {
        const v4306 = stdlib.sub(v4243, v4243);
        ;
        const v4307 = ['Finished', null];
        null;
        const v4308 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
        const v4309 = v4308;
        const v4311 = v4306;
        const v4312 = stdlib.gt(v4308, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
        if (v4312) {
          const v4313 = ['Joining', null];
          null;
          return;
          }
        else {
          return;
          }}}}
  
  
  };
export async function _Player_seeWinner25(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_seeWinner25 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_seeWinner25 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1164, v1165, v1166, v1175, v1178, v1289, v1690, v1691, v1699] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1706 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:221:9:application call to [unknown function] (defined at: ./index.rsh:221:9:function exp)', 'at ./index.rsh:221:9:application call to [unknown function] (defined at: ./index.rsh:221:9:function exp)'],
    msg: 'in',
    who: 'Player_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1164, v1165, v1166, v1175, v1178, v1289, v1690, v1691, v1699, v1706],
    evt_cnt: 1,
    funcNum: 24,
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
      
      const {data: [v1712], secs: v1714, time: v1713, didSend: v777, from: v1711 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_seeWinner"
        });
      ;
      const v1716 = v1712[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
      const v1717 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1711), null);
      const v1718 = stdlib.fromSome(v1717, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
      const v1719 = stdlib.eq(v1718, v1716);
      const v1720 = v1719 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
      const v1721 = stdlib.eq(v1720, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v1721) {
        const v1725 = true;
        const v1726 = await txn1.getOutput('Player_seeWinner', 'v1725', ctc6, v1725);
        
        await stdlib.simMapSet(sim_r, 1, v1711, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 2, v1711, null);
        await stdlib.simMapSet(sim_r, 0, v1711, undefined /* Nothing */);
        const v1734 = stdlib.safeAdd(v1691, stdlib.checkedBigNumberify('./index.rsh:233:29:decimal', stdlib.UInt_max, '1'));
        const v1735 = stdlib.safeSub(v1690, stdlib.checkedBigNumberify('./index.rsh:233:45:decimal', stdlib.UInt_max, '1'));
        const v4314 = v1735;
        const v4315 = v1734;
        const v4317 = v1699;
        const v4318 = stdlib.gt(v1735, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4318) {
          sim_r.isHalt = false;
          }
        else {
          const v4319 = stdlib.sub(v1699, v1289);
          sim_r.txns.push({
            kind: 'from',
            to: v1175,
            tok: undefined /* Nothing */
            });
          const v4320 = stdlib.safeDiv(v1289, v1734);
          const v4373 = false;
          const v4374 = v1734;
          const v4376 = v4319;
          const v4377 = stdlib.gt(v1734, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
          if (v4377) {
            sim_r.isHalt = false;
            }
          else {
            const v4378 = stdlib.sub(v4319, v4319);
            sim_r.txns.push({
              kind: 'from',
              to: v1175,
              tok: undefined /* Nothing */
              });
            const v4379 = ['Finished', null];
            null;
            const v4380 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
            const v4381 = v4380;
            const v4383 = v4378;
            const v4384 = stdlib.gt(v4380, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
            if (v4384) {
              const v4385 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1740 = false;
        const v1741 = await txn1.getOutput('Player_seeWinner', 'v1740', ctc6, v1740);
        
        await stdlib.simMapSet(sim_r, 1, v1711, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 0, v1711, undefined /* Nothing */);
        const v1748 = stdlib.safeSub(v1690, stdlib.checkedBigNumberify('./index.rsh:240:42:decimal', stdlib.UInt_max, '1'));
        const v4386 = v1748;
        const v4387 = v1691;
        const v4389 = v1699;
        const v4390 = stdlib.gt(v1748, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4390) {
          sim_r.isHalt = false;
          }
        else {
          const v4391 = stdlib.sub(v1699, v1289);
          sim_r.txns.push({
            kind: 'from',
            to: v1175,
            tok: undefined /* Nothing */
            });
          const v4392 = stdlib.safeDiv(v1289, v1691);
          const v4445 = false;
          const v4446 = v1691;
          const v4448 = v4391;
          const v4449 = stdlib.gt(v1691, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
          if (v4449) {
            sim_r.isHalt = false;
            }
          else {
            const v4450 = stdlib.sub(v4391, v4391);
            sim_r.txns.push({
              kind: 'from',
              to: v1175,
              tok: undefined /* Nothing */
              });
            const v4451 = ['Finished', null];
            null;
            const v4452 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
            const v4453 = v4452;
            const v4455 = v4450;
            const v4456 = stdlib.gt(v4452, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
            if (v4456) {
              const v4457 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
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
  const {data: [v1712], secs: v1714, time: v1713, didSend: v777, from: v1711 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1716 = v1712[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
  const v1717 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1711), null);
  const v1718 = stdlib.fromSome(v1717, stdlib.checkedBigNumberify('./index.rsh:223:51:decimal', stdlib.UInt_max, '0'));
  const v1719 = stdlib.eq(v1718, v1716);
  const v1720 = v1719 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
  const v1721 = stdlib.eq(v1720, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v1721) {
    const v1725 = true;
    const v1726 = await txn1.getOutput('Player_seeWinner', 'v1725', ctc6, v1725);
    if (v777) {
      stdlib.protect(ctc0, await interact.out(v1712, v1726), {
        at: './index.rsh:221:10:application',
        fs: ['at ./index.rsh:221:10:application call to [unknown function] (defined at: ./index.rsh:221:10:function exp)', 'at ./index.rsh:229:12:application call to "k" (defined at: ./index.rsh:222:17:function exp)', 'at ./index.rsh:222:17:application call to [unknown function] (defined at: ./index.rsh:222:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1711, undefined /* Nothing */);
    await stdlib.mapSet(map2, v1711, null);
    await stdlib.mapSet(map0, v1711, undefined /* Nothing */);
    const v1734 = stdlib.safeAdd(v1691, stdlib.checkedBigNumberify('./index.rsh:233:29:decimal', stdlib.UInt_max, '1'));
    const v1735 = stdlib.safeSub(v1690, stdlib.checkedBigNumberify('./index.rsh:233:45:decimal', stdlib.UInt_max, '1'));
    const v4314 = v1735;
    const v4315 = v1734;
    const v4317 = v1699;
    const v4318 = stdlib.gt(v1735, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4318) {
      return;
      }
    else {
      const v4319 = stdlib.sub(v1699, v1289);
      ;
      const v4320 = stdlib.safeDiv(v1289, v1734);
      const v4373 = false;
      const v4374 = v1734;
      const v4376 = v4319;
      const v4377 = stdlib.gt(v1734, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
      if (v4377) {
        return;
        }
      else {
        const v4378 = stdlib.sub(v4319, v4319);
        ;
        const v4379 = ['Finished', null];
        null;
        const v4380 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
        const v4381 = v4380;
        const v4383 = v4378;
        const v4384 = stdlib.gt(v4380, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
        if (v4384) {
          const v4385 = ['Joining', null];
          null;
          return;
          }
        else {
          return;
          }}}}
  else {
    const v1740 = false;
    const v1741 = await txn1.getOutput('Player_seeWinner', 'v1740', ctc6, v1740);
    if (v777) {
      stdlib.protect(ctc0, await interact.out(v1712, v1741), {
        at: './index.rsh:221:10:application',
        fs: ['at ./index.rsh:221:10:application call to [unknown function] (defined at: ./index.rsh:221:10:function exp)', 'at ./index.rsh:237:12:application call to "k" (defined at: ./index.rsh:222:17:function exp)', 'at ./index.rsh:222:17:application call to [unknown function] (defined at: ./index.rsh:222:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1711, undefined /* Nothing */);
    await stdlib.mapSet(map0, v1711, undefined /* Nothing */);
    const v1748 = stdlib.safeSub(v1690, stdlib.checkedBigNumberify('./index.rsh:240:42:decimal', stdlib.UInt_max, '1'));
    const v4386 = v1748;
    const v4387 = v1691;
    const v4389 = v1699;
    const v4390 = stdlib.gt(v1748, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4390) {
      return;
      }
    else {
      const v4391 = stdlib.sub(v1699, v1289);
      ;
      const v4392 = stdlib.safeDiv(v1289, v1691);
      const v4445 = false;
      const v4446 = v1691;
      const v4448 = v4391;
      const v4449 = stdlib.gt(v1691, stdlib.checkedBigNumberify('./index.rsh:250:28:decimal', stdlib.UInt_max, '0'));
      if (v4449) {
        return;
        }
      else {
        const v4450 = stdlib.sub(v4391, v4391);
        ;
        const v4451 = ['Finished', null];
        null;
        const v4452 = stdlib.safeSub(v1178, stdlib.checkedBigNumberify('./index.rsh:290:41:decimal', stdlib.UInt_max, '1'));
        const v4453 = v4452;
        const v4455 = v4450;
        const v4456 = stdlib.gt(v4452, stdlib.checkedBigNumberify('./index.rsh:72:27:decimal', stdlib.UInt_max, '0'));
        if (v4456) {
          const v4457 = ['Joining', null];
          null;
          return;
          }
        else {
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
  
  
  const [v1164, v1165, v1166, v1175, v1178, v1219, v1227] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2]);
  const v1262 = ctc.selfAddress();
  const v1264 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:92:9:application',
    fs: ['at ./index.rsh:92:9:application call to [unknown function] (defined at: ./index.rsh:92:9:function exp)', 'at ./index.rsh:174:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'in',
    who: 'Player_wager'
    });
  const v1265 = stdlib.addressEq(v1262, v1164);
  const v1266 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1262), null);
  const v1267 = {
    None: 0,
    Some: 1
    }[v1266[0]];
  const v1268 = stdlib.eq(v1267, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1269 = v1265 ? v1268 : false;
  stdlib.assert(v1269, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:95:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:92:9:application call to [unknown function] (defined at: ./index.rsh:95:20:function exp)', 'at ./index.rsh:92:9:application call to [unknown function] (defined at: ./index.rsh:92:9:function exp)', 'at ./index.rsh:174:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1164, v1165, v1166, v1175, v1178, v1219, v1227, v1264],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v1166, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1272], secs: v1274, time: v1273, didSend: v287, from: v1271 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_wager"
        });
      const v1276 = stdlib.add(v1227, v1166);
      sim_r.txns.push({
        amt: v1166,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1271), null);
      const v1283 = null;
      const v1284 = await txn1.getOutput('Player_wager', 'v1283', ctc0, v1283);
      
      const v4458 = v1166;
      const v4459 = v1219;
      const v4461 = v1276;
      const v4462 = stdlib.gt(v1219, stdlib.checkedBigNumberify('./index.rsh:180:32:decimal', stdlib.UInt_max, '0'));
      if (v4462) {
        sim_r.isHalt = false;
        }
      else {
        const v4463 = ['PickingRoles', null];
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
  const {data: [v1272], secs: v1274, time: v1273, didSend: v287, from: v1271 } = txn1;
  undefined /* setApiDetails */;
  const v1276 = stdlib.add(v1227, v1166);
  ;
  const v1277 = stdlib.addressEq(v1271, v1164);
  const v1278 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1271), null);
  const v1279 = {
    None: 0,
    Some: 1
    }[v1278[0]];
  const v1280 = stdlib.eq(v1279, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1281 = v1277 ? v1280 : false;
  stdlib.assert(v1281, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:174:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  const v1283 = null;
  const v1284 = await txn1.getOutput('Player_wager', 'v1283', ctc0, v1283);
  stdlib.protect(ctc0, await interact.out(v1272, v1284), {
    at: './index.rsh:92:9:application',
    fs: ['at ./index.rsh:92:9:application call to [unknown function] (defined at: ./index.rsh:92:9:function exp)', 'at ./index.rsh:97:10:application call to "k" (defined at: ./index.rsh:92:9:function exp)', 'at ./index.rsh:174:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:79:43:function exp)'],
    msg: 'out',
    who: 'Player_wager'
    });
  
  const v4458 = v1166;
  const v4459 = v1219;
  const v4461 = v1276;
  const v4462 = stdlib.gt(v1219, stdlib.checkedBigNumberify('./index.rsh:180:32:decimal', stdlib.UInt_max, '0'));
  if (v4462) {
    return;
    }
  else {
    const v4463 = ['PickingRoles', null];
    null;
    return;
    }
  
  
  };
export async function _Player_wager27(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_wager27 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_wager27 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1164, v1165, v1166, v1175, v1178, v1219, v1289, v1290, v1298] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1303 = ctc.selfAddress();
  const v1305 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)'],
    msg: 'in',
    who: 'Player_wager'
    });
  const v1306 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1303), null);
  const v1307 = {
    None: 0,
    Some: 1
    }[v1306[0]];
  const v1308 = stdlib.eq(v1307, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1308, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:182:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1164, v1165, v1166, v1175, v1178, v1219, v1289, v1290, v1298, v1305],
    evt_cnt: 1,
    funcNum: 26,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v1166, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1317], secs: v1319, time: v1318, didSend: v434, from: v1316 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_wager"
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1316), null);
      const v1326 = stdlib.add(v1298, v1166);
      sim_r.txns.push({
        amt: v1166,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1331 = null;
      const v1332 = await txn1.getOutput('Player_wager', 'v1331', ctc0, v1331);
      
      const v1337 = stdlib.safeAdd(v1289, v1166);
      const v1338 = stdlib.safeSub(v1290, stdlib.checkedBigNumberify('./index.rsh:185:55:decimal', stdlib.UInt_max, '1'));
      const v4672 = v1337;
      const v4673 = v1338;
      const v4675 = v1326;
      const v4676 = stdlib.gt(v1338, stdlib.checkedBigNumberify('./index.rsh:180:32:decimal', stdlib.UInt_max, '0'));
      if (v4676) {
        sim_r.isHalt = false;
        }
      else {
        const v4677 = ['PickingRoles', null];
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
  const {data: [v1317], secs: v1319, time: v1318, didSend: v434, from: v1316 } = txn1;
  undefined /* setApiDetails */;
  const v1321 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1316), null);
  const v1322 = {
    None: 0,
    Some: 1
    }[v1321[0]];
  const v1323 = stdlib.eq(v1322, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1323, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:182:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)', 'at ./index.rsh:181:30:application call to [unknown function] (defined at: ./index.rsh:181:30:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  const v1326 = stdlib.add(v1298, v1166);
  ;
  const v1331 = null;
  const v1332 = await txn1.getOutput('Player_wager', 'v1331', ctc0, v1331);
  if (v434) {
    stdlib.protect(ctc0, await interact.out(v1317, v1332), {
      at: './index.rsh:181:13:application',
      fs: ['at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)', 'at ./index.rsh:184:12:application call to "k" (defined at: ./index.rsh:183:27:function exp)', 'at ./index.rsh:183:27:application call to [unknown function] (defined at: ./index.rsh:183:27:function exp)'],
      msg: 'out',
      who: 'Player_wager'
      });
    }
  else {
    }
  
  const v1337 = stdlib.safeAdd(v1289, v1166);
  const v1338 = stdlib.safeSub(v1290, stdlib.checkedBigNumberify('./index.rsh:185:55:decimal', stdlib.UInt_max, '1'));
  const v4672 = v1337;
  const v4673 = v1338;
  const v4675 = v1326;
  const v4676 = stdlib.gt(v1338, stdlib.checkedBigNumberify('./index.rsh:180:32:decimal', stdlib.UInt_max, '0'));
  if (v4676) {
    return;
    }
  else {
    const v4677 = ['PickingRoles', null];
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
  if (step == 26) {return _Player_getRole26(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '26')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
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
  if (step == 28) {return _Player_join28(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '28')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_receivePay(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_receivePay expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_receivePay expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 16) {return _Player_receivePay16(ctcTop, interact);}
  if (step == 17) {return _Player_receivePay17(ctcTop, interact);}
  if (step == 23) {return _Player_receivePay23(ctcTop, interact);}
  if (step == 24) {return _Player_receivePay24(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '23'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '24')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_seeWinner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_seeWinner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_seeWinner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 11) {return _Player_seeWinner11(ctcTop, interact);}
  if (step == 18) {return _Player_seeWinner18(ctcTop, interact);}
  if (step == 25) {return _Player_seeWinner25(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '18'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
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
  if (step == 27) {return _Player_wager27(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Player_getRole(uint64)byte[0]`, `Player_join()byte[0]`, `Player_receivePay()byte[0]`, `Player_seeWinner(uint64)byte`, `Player_wager()byte[0]`, `_Player_getRole25(uint64)byte[0]`, `_Player_getRole8(uint64)byte[0]`, `_Player_join27()byte[0]`, `_Player_join4()byte[0]`, `_Player_receivePay15()byte[0]`, `_Player_receivePay16()byte[0]`, `_Player_receivePay22()byte[0]`, `_Player_receivePay23()byte[0]`, `_Player_seeWinner10(uint64)byte`, `_Player_seeWinner17(uint64)byte`, `_Player_seeWinner24(uint64)byte`, `_Player_wager26()byte[0]`, `_Player_wager6()byte[0]`],
    pure: [],
    sigs: [`Player_getRole(uint64)byte[0]`, `Player_join()byte[0]`, `Player_receivePay()byte[0]`, `Player_seeWinner(uint64)byte`, `Player_wager()byte[0]`, `_Player_getRole25(uint64)byte[0]`, `_Player_getRole8(uint64)byte[0]`, `_Player_join27()byte[0]`, `_Player_join4()byte[0]`, `_Player_receivePay15()byte[0]`, `_Player_receivePay16()byte[0]`, `_Player_receivePay22()byte[0]`, `_Player_receivePay23()byte[0]`, `_Player_seeWinner10(uint64)byte`, `_Player_seeWinner17(uint64)byte`, `_Player_seeWinner24(uint64)byte`, `_Player_wager26()byte[0]`, `_Player_wager6()byte[0]`]
    },
  appApproval: `BiA1AAEgKFBYYApoCRAbEQgXGhgZAgtwBAYFjIji5AXB+8DHCP6G9/UNw8nnoQ7F/MCsDhYP4dq7ygjC6sC8B42RhfEH+8XohwaL9OLhAq2jr+QE2IGwhwWb5tOeBYKAoIsE56P11AGny8bTAu3yko0BHBQVYWkSDQ4HMCYFAQAAAQEF1RDwzAMF1RDwzAEiNQAxGEETNSlkSSJbNQEhDVs1AjEZIxJBAAoxACghE69mQhMBNhoAF0lBAaEiNQQjNQZJIRgMQADWSSEZDEAAmEkhGgxAAGVJIRsMQABDSSEcDEAACCEcEkQpQgxzIRsSRDQBSSEdDEAAEkkhDgxAAAchDhJEQgCLSEIA1kkhCgxAAAchChJEQgE/IR4SREIBLCEaEkQ0AUkhCwxAAAchCxJEQgBFIRUSREL/rUkhHwxAAAohHxJENhoBQgI5IRkSRDQBSSEPDEAAByEPEkRCADohFhJEQgBXSSEgDEAAGUkhIQxAAAghIRJEKUIBEyEgEkQ2GgFCCrNJISIMQAAIISISRClCA6YhGBJEKUIBZ0khIwxAAGlJISQMQAAqSSElDEAAGUkhJgxAAAghJhJEKUILCyElEkQ2GgFCAk0hJBJENhoBQgWeSSEnDEAACCEnEkQpQgRdISMSRDQBSSEMDEAAFUkhEAxAAAchEBJEQv/GIQwSREL/ySEHEkRCABJJISgMQAAsSSEpDEAACiEpEkQ2GgFCCPwhKBJENAFJIREMQAAHIRESREL/DCENEkRC/0BJISoMQAAIISoSRClCB6eBs4GSgQESRClCBjs2GgIXNQQ2GgM2GgEXSSEKDEAHakkhDgxAA7xJIREMQAGTSSEPDEAA/0khCwxAAHghCxJEISs0ARJENARJIhJMNAISEUQoZDUDSTUFNf+ABIwah6s0/1CwMQCIETBXAAEiVSMTRIAIAAAAAAAABOSwKTUHMQAoMQCIERIjIkxWZjQDVwAgNAMkWzQDJVs0A1cwIDQDIQRbNAMhBVsjCDIGNAMhBltCDBBIIQs0ARJENARJIhJMNAISEUQoZEk1AyVbNf9JNQU1/oAEZRiTOzT+ULAxAIgQtlcAASJVIxJENP+IELiACAAAAAAAAAUzsCk1BzQDVwAgNAMkWzT/NANXMCA0AyEEWzQDIQVbNAMhBls0/wg0AyEIWyMJMgY0AyEUWzT/CEIMCEghDzQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AExNCnCzT/ULAxAIgQO1cAASJVIxJEgAgAAAAAAAAFfrApNQcxACgxAIgQHSo0/1A1/klXAAE0/lBMVwoBUGY0A1cAIDQDJFs0AyVbNANXMCA0AyEEWzQDIQVbNAMhBls0AyEIWyMIMgY0AyEUW0IMAkkhEAxAASNIIRE0ARJENARJIhJMNAISEUQoZEk1A0lKSkpJVwAgNf8kWzX+JVs1/VcwIDX8IQRbNfshBVs1+iEGWzX5IQhbNfghFFs190k1BTX2gARQgKisNPZQsCIjIjEAiA9zVwEJSTX1I1s09SJVTTT2FxJNIxJBAF+ACQAAAAAAAAa9AbAqNQcxACgxAIgPRSEJrzX1SVcAATT1UExXCgFQZjEAKDEAiA8rIyEHTFZmMQAoMQCIDx0iIkxWZjT/NP40/TT8NPs0+jT5Iwk0+CMIMgY090INH4AJAAAAAAAABswAsCg1BzEAKDEAiA7mIQmvNfVJVwABNPVQTFcKAVBmMQAoMQCIDswiIkxWZjT/NP40/TT8NPs0+jT5Iwk0+DIGNPdCDNBIIRA0ARJENARJIhJMNAISEUQoZEk1A0lKSkpXACA1/yRbNf4lWzX9VzAgNfwhBFs1+yEFWzX6IQZbNfkhCFs1+Ek1BTX3gAQ77kBFNPdQsDEANP8SMQCIDlRXAAEiVSMSEEQxAIgORlcKASJVIxJBAEOACAAAAAAAAAcKsCk1BzEAKDEAiA4mIiJMVmaxIrIBNPiyCCOyEDT8sgezNP80/jT9NPw0+zT6IzT5MgY0+EkJQgyWgAgAAAAAAAAHJbApNQcxACgxAIgN4yIiTFZmsSKyATT4sggjshA0/LIHszT/NP40/TT8NPs0+iM0+TIGNPhJCUIMU0khLAxAAS9JIR0MQAB7SCEONAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gARVfk5DNP9QsDEAiA1+VwoBIlUjEkSACAAAAAAAAAdisCk1BzEAKDEAiA1gIiEHTFZmNANXACA0AyRbNAMlWzQDVzAgNAMhBFs0AyEFWzQDIQZbMQAyBjQDIQhbQgxEISwSRCEtNAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf8kWzX+JVs1/VcwIDX8IQRbNfshBVs1+iEuWzX5gASo2IFksDQDIS9bNPoINfg0+ogM5zT8MQASRDQDV2ABF0EAFzT/NP40/TT8NPs0+jT5NPwyBjT4QgvJK7A0/zT+FlA0/RZQNPxQNPsWUDT6FlA0+RZQNPgWUChLAVcAcGdIIRA1ATIGNQJCDC5JIQwMQAEmIQwSRCEwNAESRDQESSISTDQCEhFEKGRJNQNJSkpKSVcAIDX/JFs1/iVbNf1XMCA1/CEEWzX7IQVbNfohBls1+SEIWzX4IRRbNfdJNQU19oAEzk8/wTT2ULAiIyIxAIgMGFcBCUk19SNbNPUiVU009hcSTSMSQQBfgAkAAAAAAAAF1gGwKjUHMQAoMQCIC+ohCa819UlXAAE09VBMVwoBUGYxACgxAIgL0CMhB0xWZjEAKDEAiAvCIiJMVmY0/zT+NP00/DT7NPo0+SMJNPgjCDIGNPdCCFSACQAAAAAAAAXlALAoNQcxACgxAIgLiyEJrzX1SVcAATT1UExXCgFQZjEAKDEAiAtxIiJMVmY0/zT+NP00/DT7NPo0+SMJNPgyBjT3QggFSCEMNAESRDQESSISTDQCEhFEKGRJNQNJSkpKVwAgNf8kWzX+JVs1/VcwIDX8IQRbNfshBVs1+iEGWzX5IQhbNfhJNQU194AEdErMoDT3ULAxADT/EjEAiAr5VwABIlUjEhBEMQCICutXCgEiVSMSQQBpgAgAAAAAAAAGI7ApNQcxACgxAIgKyyIiTFZmNPhJCTX2sSKyATT4sggjshA0/7IHszT/KDT/iAqoIiEHTFZmsSKyATT2sggjshA0/LIHszT/NP40/TT8NPs0+iM0+SMJMgY09kkJQgelgAgAAAAAAAAGPrApNQcxACgxAIgKYiIiTFZmNPhJCTX2sSKyATT4sggjshA0/7IHszT/KDT/iAo/IiEHTFZmsSKyATT2sggjshA0/LIHszT/NP40/TT8NPs0+iM0+SMJMgY09kkJQgc8SSEWDEADbEkhBwxAAkdJITEMQAEvSSEeDEAAe0ghCjQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AEtmjS8zT/ULAxAIgJyVcKASJVIxJEgAgAAAAAAAAGe7ApNQcxACgxAIgJqyIhB0xWZjQDVwAgNAMkWzQDJVs0A1cwIDQDIQRbNAMhBVs0AyEGWzEAMgY0AyEIW0IHHyExEkQhMjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/JFs1/iVbNf1XMCA1/CEEWzX7IQVbNfohLls1+YAEIp+XA7A0AyEvWzT6CDX4NPqICTI0/DEAEkQ0A1dgARdBABc0/zT+NP00/DT7NPo0+TT8MgY0+EIGpCuwNP80/hZQNP0WUDT8UDT7FlA0+hZQNPkWUDT4FlAoSwFXAHBnSCEMNQEyBjUCQgh5IQcSRCETNAESRDQESSISTDQCEhFEKGRJNQNJSkpKVwAgNf8kWzX+JVs1/VcwIDX8IQRbNfshBVs1+iEGWzX5IQhbNfhJNQU194AEN+njIDT3ULAxADT/EjEAiAhuVwABIlUjEhBEIiMiMQCICF1XAQlJNfYjWzT2IlVNNPcXEk0jEkEATYAJAAAAAAAABagBsCo1BzEAKDEAiAgvIQmvNfZJVwABNPZQTFcKAVBmMQAoMQCICBUjIQdMVmY0/zT+NP00/DT7NPo0+SMyBjT4QgSrgAkAAAAAAAAGkACwKDUHMQAoMQCIB+IhCa819klXAAE09lBMVwoBUGY0/zT+NP00/DT7NPo0+SIyBjT4QgXcSSENDEAAkyENEkQhCTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQU1/oAEZh/u1jT+ULAxADT/EjEAiAd7VwABIlUjEhBEgAgAAAAAAAAFU7ApNQcxACgxAIgHXCo0/lA1/UlXAAE0/VBMVwoBUGY0/zQDJFs0AyVbNANXMCA0AyEEWzQDIQVbNAMhBlsiMgY0AyEIW0IDSiEWEkQhMzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yVbNf4hBVs1/Uk1BTX8gATJ6I0MNPxQsDT+iAbxMQA0/xIxAIgG2FcAASJVIxIQRIAIAAAAAAAABQOwKTUHNP80AyRbNP40A1cwIDQDIQRbNP00/jT9MgY0AyEGWzT+CEICP0khEgxAALxJIRUMQAB7IRUSRCEXNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BTX+gATU4BgtNP5QsDEANP8SMQCIBlZXAAEiVSMTEESACAAAAAAAAAS8sCk1BzEAKDEAiAY3IyJMVmY0/zQDJFs0AyVbNANXMCA0AyEEWyIyBjQDIQVbQgE+IRISRCESNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbA0A1cAIDQDJFs0AyVbMQA0AyE0WzIGIkIAvEkjDEAAWEgjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JFs1/iVbNf0hNFs1/IAEmouRdLA0/zEAEkQ0/zT+FlA0/RZQNPwWUChLAVcAOGdIIRI1ATIGNQJCBSlIgaCNBogFgiI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hDVs1/iEKWzX9gAT3cRNNNP8WUDT+FlA0/RZQsDEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgTLNf81/jX9Nfw1+zX6Nfk0/SINQQAwgAXVEPDMArA0+TT6FlA0+xZQNPxQNP0WUDT/FlAoSwFXAGBnSCEXNQEyBjUCQgSGQgRnNf81/jX9Nfw1+zX6Nfk1+DT9NPkMQQAsNPg0+RZQNPoWUDT7UDT8FlA0/RZQNP8WUChLAVcAaGdIISs1ATIGNQJCBD+ABdUQ8MwFsDT4NPkWUDT6FlA0+1A0/BZQNP0WUDT/FlAoSwFXAGhnSCEzNQEyBjUCQgQLNf81/jX9Nfw1+zX6Nfk1+DX3NfY0/SINQQA0NPY09xZQNPgWUDT5UDT6FlA0+xZQNPwWUDT9FlA0/xZQKEsBVwB4Z0ghCzUBMgY1AkIDvIAF1RDwzASwNPY09xZQNPgWUDT5UDT6FlA0+xZQNPwWUDT/FlAoSwFXAHBnSCEJNQEyBjUCQgOENf81/jX9Nfw1+zX6Nfk1+DX3NfY0/TT7DEEANDT2NPcWUDT4FlA0+VA0+hZQNPsWUDT8FlA0/RZQNP8WUChLAVcAeGdIIQ81ATIGNQJCAzSABdUQ8MwAsDT2NPcWUDT4FlA0+VA0+hZQNPwWUDT9FlA0/xZQKEsBVwBwZ0ghEzUBMgY1AkIC/DX/Nf41/TX8Nfs1+jX5Nfg19zX2NPwiDUEANDT2NPcWUDT4FlA0+VA0+hZQNPsWUDT8FlA0/RZQNP8WUChLAVcAeGdIITA1ATIGNQJCAq2xIrIBNPuyCCOyEDT5sgezNPY09zT4NPk0+jT7NP0KIjT9NP40/zT7CUIAADX/Nf41/TX8Nfs1+jX5Nfg19zX2NP0iDUEANzT2NPcWUDT4FlA0+VA0+hZQNPsWUDT8FlEHCFA0/RZQNP8WUChLAVcAcWdIITI1ATIGNQJCAi+xIrIBNP+yCCOyEDT5sgezJwSwNPY09zT4NPk0+iMJNP40/0kJQv08Nf81/jX9Nfw1+zX6Nfk1+DX3NfY0/TT5EjT8Ig0QQQAwNPY09xZQNPgWUDT5UDT6FlA0+xZQNPwWUDT/FlAoSwFXAHBnSCEKNQEyBjUCQgG2sSKyATT/sggjshA0/bIHszT2NPc0+DT5NPo0+yM0/CMJNP40/0kJQv8LNf81/jX9Nfw1+zX6Nfk1+DX3NfY0/CINQQA0NPY09xZQNPgWUDT5UDT6FlA0+xZQNPwWUDT9FlA0/xZQKEsBVwB4Z0ghETUBMgY1AkIBPbEisgE0+7III7IQNPmyB7M09jT3NPg0+TT6NPs0/QoiNP00/jT/NPsJQgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY0/SINQQA3NPY09xZQNPgWUDT5UDT6FlA0+xZQNPwWUQcIUDT9FlA0/xZQKEsBVwBxZ0ghLTUBMgY1AkIAv7EisgE0/7III7IQNPmyB7MnBLA09jT3NPg0+TT6Iwk0/jT/SQlC+8w1/zX+Nf01/DX7Nfo1+TX4Nfc19jT9NPkSNPwiDRBBADA09jT3FlA0+BZQNPlQNPoWUDT7FlA0/BZQNP8WUChLAVcAcGdIIQ41ATIGNQJCAEaxIrIBNP+yCCOyEDT9sgezNPY09zT4NPk0+jT7IzT8Iwk0/jT/SQlC/wsxGSEXEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIRIxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIROviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "name": "v1165",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1166",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1167",
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
                "name": "v1165",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1166",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1167",
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
                "name": "v1430",
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
    "name": "_reach_e13",
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
                "name": "v1651",
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
    "name": "_reach_e15",
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
                "name": "v1559",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1481",
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
    "name": "_reach_e20",
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
                "name": "v1882",
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
    "name": "_reach_e22",
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
                "name": "v1790",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1712",
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
                "name": "v1396",
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
                "internalType": "bool",
                "name": "v1317",
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
                "name": "v1243",
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
                "name": "v1202",
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
                "name": "v1272",
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
                "name": "v1353",
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
    "name": "_reach_oe_v1212",
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
    "name": "_reach_oe_v1252",
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
    "name": "_reach_oe_v1283",
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
    "name": "_reach_oe_v1331",
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
    "name": "_reach_oe_v1363",
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
    "name": "_reach_oe_v1406",
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
    "name": "_reach_oe_v1448",
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
    "name": "_reach_oe_v1494",
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
    "name": "_reach_oe_v1509",
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
    "name": "_reach_oe_v1571",
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
    "name": "_reach_oe_v1598",
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
    "name": "_reach_oe_v1659",
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
    "name": "_reach_oe_v1680",
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
    "name": "_reach_oe_v1725",
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
    "name": "_reach_oe_v1740",
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
    "name": "_reach_oe_v1802",
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
    "name": "_reach_oe_v1829",
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
    "name": "_reach_oe_v1890",
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
    "name": "_Player_getRole25",
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
    "name": "_Player_join27",
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
    "name": "_Player_receivePay15",
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
    "name": "_Player_receivePay22",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "_Player_seeWinner10",
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
    "name": "_Player_seeWinner17",
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
    "name": "_Player_seeWinner24",
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
    "name": "_Player_wager26",
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
                "name": "v1430",
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
    "name": "_reach_m13",
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
                "name": "v1651",
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
    "name": "_reach_m15",
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
                "name": "v1559",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1481",
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
    "name": "_reach_m20",
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
                "name": "v1882",
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
    "name": "_reach_m22",
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
                "name": "v1790",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v1712",
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
                "name": "v1396",
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
                "internalType": "bool",
                "name": "v1317",
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
                "name": "v1243",
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
                "name": "v1202",
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
                "name": "v1272",
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
                "name": "v1353",
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
  Bytecode: `0x60806040526040516200644538038062006445833981016040819052620000269162000255565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a162000095341560076200014e565b620000ca604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a0909301905281516200014592600292019062000178565b50505062000329565b81620001745760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200018690620002ec565b90600052602060002090601f016020900481019282620001aa5760008555620001f5565b82601f10620001c557805160ff1916838001178555620001f5565b82800160010185558215620001f5579182015b82811115620001f5578251825591602001919060010190620001d8565b506200020392915062000207565b5090565b5b8082111562000203576000815560010162000208565b604051606081016001600160401b03811182821017156200024f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200026957600080fd5b604080519081016001600160401b03811182821017156200029a57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002b457600080fd5b620002be6200021e565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200030157607f821691505b602082108114156200032357634e487b7160e01b600052602260045260246000fd5b50919050565b61610c80620003396000396000f3fe6080604052600436106102325760003560e01c80636da017a01161012d578063a98bf223116100b0578063c855f5d011610077578063c855f5d0146104e1578063c90a044c146104e9578063cadc2e7a146104f1578063dd7a2cf01461051e578063edd136c614610531578063f32009651461053957005b8063a98bf2231461047d578063ab53f2c614610490578063ac420936146104b3578063b26072a7146104bb578063b69e158a146104ce57005b806383bf2935116100f457806383bf29351461043457806385b1e57414610447578063876496881461044f57806388c48cc5146104575780638bca673a1461046a57005b80636da017a0146103c657806377c7af8c146103d95780637eea518c146103ec578063817d57f3146103ff578063832307571461041f57005b80633bc5b7bf116101b5578063531291b71161017c578063531291b7146103725780635471c5a814610385578063558879191461039857806358892c90146103ab5780635dde45b3146103b357005b80633bc5b7bf146102f95780633c2493ab1461032657806342414754146103395780634364845c1461034c5780634f7b87081461035f57005b80632c10a159116101f95780632c10a159146102b05780632feabbb4146102c357806333792fbd146102cb5780633750b462146102de5780633b55bda3146102e657005b806308905a151461023b5780630ca328e4146102585780630f3f93991461026b5780631c4983cc1461027e5780631e93b0f11461029157005b3661023957005b005b610243610541565b60405190151581526020015b60405180910390f35b61023961026636600461563a565b610570565b610243610279366004615656565b610594565b61023961028c36600461563a565b6105c5565b34801561029d57600080fd5b506003545b60405190815260200161024f565b6102396102be36600461563a565b6105e5565b610243610605565b6102436102d9366004615656565b610634565b610243610664565b6102396102f436600461563a565b610743565b34801561030557600080fd5b50610319610314366004615684565b610763565b60405161024f91906156c7565b61023961033436600461563a565b61078f565b61023961034736600461563a565b6107af565b61024361035a366004615656565b6107cf565b61023961036d36600461563a565b6107ff565b610243610380366004615656565b61081f565b61023961039336600461563a565b610850565b6102396103a636600461563a565b610870565b610243610890565b6102396103c136600461563a565b6108c0565b6102396103d436600461563a565b6108e0565b6102396103e736600461563a565b610900565b6102396103fa36600461563a565b610920565b34801561040b57600080fd5b5061031961041a366004615684565b610940565b34801561042b57600080fd5b506001546102a2565b61023961044236600461563a565b610966565b610243610986565b6102436109b6565b610243610465366004615656565b6109e6565b61023961047836600461563a565b610a17565b61023961048b36600461563a565b610a37565b34801561049c57600080fd5b506104a5610a57565b60405161024f9291906156f9565b610243610af4565b6102436104c9366004615656565b610c57565b6102436104dc366004615656565b610d52565b610243610dcd565b610243610e80565b3480156104fd57600080fd5b5061051161050c366004615684565b610eb0565b60405161024f9190615756565b61023961052c36600461563a565b610ed6565b610243610ef6565b610243610f26565b600061054b615101565b60208101516000905261055c615130565b6105668282610f55565b60a0015192915050565b610578615130565b61059061058a3684900384018461587a565b8261117b565b5050565b600061059e6151c4565b6020810151518390526105af615130565b6105b982826113b9565b6101a001519392505050565b6105cd615130565b6105906105df368490038401846158fb565b82610f55565b6105ed615130565b6105906105ff36849003840184615917565b82611759565b600061060f615101565b602081015160009052610620615130565b61062a8282611941565b60e0015192915050565b600061063e6151c4565b60208101515183905261064f615130565b6106598282611b59565b604001519392505050565b60008054600614806106785750600054601a145b61068157600080fd5b600054600614156106f557306001600160a01b031663edd136c66040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f09190615986565b905090565b600054601a141561074057306001600160a01b03166385b1e5746040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106cc573d6000803e3d6000fd5b90565b61074b615130565b61059061075d368490038401846158fb565b82611d8c565b60408051606081018252600080825260208201819052918101919091526107898261223b565b92915050565b610797615130565b6105906107a9368490038401846158fb565b82612313565b6107b7615130565b6105906107c936849003840184615917565b82612549565b60006107d96151c4565b6020810151518390526107ea615130565b6107f4828261117b565b602001519392505050565b610807615130565b610590610819368490038401846158fb565b82611941565b60006108296151c4565b60208101515183905261083a615130565b6108448282612855565b61018001519392505050565b610858615130565b61059061086a36849003840184615917565b82612bde565b610878615130565b61059061088a3684900384018461587a565b82612855565b600061089a615101565b6020810151600090526108ab615130565b6108b58282611d8c565b610100015192915050565b6108c8615130565b6105906108da368490038401846158fb565b82612ebe565b6108e8615130565b6105906108fa368490038401846158fb565b82613181565b610908615130565b61059061091a3684900384018461587a565b8261339e565b610928615130565b61059061093a36849003840184615917565b82613739565b6040805160608101825260008082526020820181905291810191909152610789826138ab565b61096e615130565b6105906109803684900384018461587a565b82611b59565b6000610990615101565b6020810151600090526109a1615130565b6109ab8282612313565b610220015192915050565b60006109c0615101565b6020810151600090526109d1615130565b6109db8282612ebe565b610140015192915050565b60006109f06151c4565b602081015151839052610a01615130565b610a0b828261339e565b6101c001519392505050565b610a1f615130565b610590610a313684900384018461587a565b826113b9565b610a3f615130565b610590610a51368490038401846158fb565b82613938565b600060606000546002808054610a6c906159a3565b80601f0160208091040260200160405190810160405280929190818152602001828054610a98906159a3565b8015610ae55780601f10610aba57610100808354040283529160200191610ae5565b820191906000526020600020905b815481529060010190602001808311610ac857829003601f168201915b50505050509050915091509091565b60008054600f1480610b0857506000546010145b80610b1557506000546016145b80610b2257506000546017145b610b2b57600080fd5b600054600f1415610b7657306001600160a01b0316632feabbb46040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106cc573d6000803e3d6000fd5b60005460101415610bc157306001600160a01b03166358892c906040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106cc573d6000803e3d6000fd5b60005460161415610c0c57306001600160a01b031663c90a044c6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106cc573d6000803e3d6000fd5b6000546017141561074057306001600160a01b031663876496886040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106cc573d6000803e3d6000fd5b60008054600a1480610c6b57506000546011145b80610c7857506000546018145b610c8157600080fd5b600054600a1415610cef5760405163531291b760e01b815260048101839052309063531291b7906024015b6020604051808303816000875af1158015610ccb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107899190615986565b60005460111415610d1e57604051630f3f939960e01b8152600481018390523090630f3f939990602401610cac565b60005460181415610d4d576040516388c48cc560e01b81526004810183905230906388c48cc590602401610cac565b919050565b6000805460081480610d6657506000546019145b610d6f57600080fd5b60005460081415610d9e576040516310d9211760e21b8152600481018390523090634364845c90602401610cac565b60005460191415610d4d576040516333792fbd60e01b81526004810183905230906333792fbd90602401610cac565b6000805460041480610de15750600054601b145b610dea57600080fd5b60005460041415610e3557306001600160a01b031663f32009656040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106cc573d6000803e3d6000fd5b600054601b141561074057306001600160a01b03166308905a156040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106cc573d6000803e3d6000fd5b6000610e8a615101565b602081015160009052610e9b615130565b610ea58282613b63565b610120015192915050565b604080516060810182526000808252602082018190529181019190915261078982613d7b565b610ede615130565b610590610ef0368490038401846158fb565b82613b63565b6000610f00615101565b602081015160009052610f11615130565b610f1b8282613181565b610200015192915050565b6000610f30615101565b602081015160009052610f41615130565b610f4b8282613938565b6080015192915050565b610f65601c600054146047613e3e565b8151610f80901580610f7957508251600154145b6048613e3e565b600080805560028054610f92906159a3565b80601f0160208091040260200160405190810160405280929190818152602001828054610fbe906159a3565b801561100b5780601f10610fe05761010080835404028352916020019161100b565b820191906000526020600020905b815481529060010190602001808311610fee57829003601f168201915b505050505080602001905181019061102391906159e3565b90507fa0daf7e88e8c7106ac0a52788be9a37db2d9737d053516fb080775f840aaa31e3384604051611056929190615a89565b60405180910390a161106a34156045613e3e565b6110a060016110783361223b565b51600181111561108a5761108a6156a1565b14611096576001611099565b60005b6046613e3e565b604051600081527fae6190be30f281dad7c9a89bae44b7aacb224d3b3ede62eb8737feb0efe3430e9060200160405180910390a1600060608301819052338152600460205260409020805462ff00ff191660011790556110fe6151f1565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a0820151611150906001613e64565b602080830180519290925281514391015260c083015190516040015261117581613eb1565b50505050565b61118b6009600054146019613e3e565b81516111a690158061119f57508251600154145b601a613e3e565b6000808055600280546111b8906159a3565b80601f01602080910402602001604051908101604052809291908181526020018280546111e4906159a3565b80156112315780601f1061120657610100808354040283529160200191611231565b820191906000526020600020905b81548152906001019060200180831161121457829003601f168201915b50505050508060200190518101906112499190615b64565b90507f0d0c50c34bf538d7a3a69bc85bb10bcfe23f8f46c119741a7807a8319a6ae248338460405161127c929190615b81565b60405180910390a161129034156017613e3e565b80516112d2906001600160a01b031633146112ac5760006112cb565b60016112b73361223b565b5160018111156112c9576112c96156a1565b145b6018613e3e565b604051600081527fba0c66db2e93c503df8f4756544edea3960c8801dc0a6e87766df77712edc3d19060200160405180910390a16000808352338152600560209081526040909120805460ff19166001908117825591850151515191015561133861524d565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925260808085015184519091015260a08085015184519091015260c08085015184519091015280830180516000905280514392019190915260e084015190519091015261117581614018565b6113c9601260005414602c613e3e565b81516113e49015806113dd57508251600154145b602d613e3e565b6000808055600280546113f6906159a3565b80601f0160208091040260200160405190810160405280929190818152602001828054611422906159a3565b801561146f5780601f106114445761010080835404028352916020019161146f565b820191906000526020600020905b81548152906001019060200180831161145257829003601f168201915b50505050508060200190518101906114879190615c31565b90507f164fb1d3fa5138ce26c88b90d0b59cf30407ef5804ca182fe6b9f2ba6361d56233846040516114ba929190615b81565b60405180910390a16114ce3415602b613e3e565b60208301515151600190816114e233613d7b565b5160018111156114f4576114f46156a1565b1461150057600061150e565b61150933613d7b565b604001515b1461151a57600061151d565b60015b141561164d57604051600181527fb3f7dbd9cd6852e4305ce1dc66a0893cc5abcda773fd92ed66806a142e63aee79060200160405180910390a160016101608301819052336000908152600560209081526040808320805461ffff19168155840183905560068252808320805462ff00ff19169094179093556004905220805462ffffff191690556115ad6152aa565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c082015161160b90600161422b565b60208201515260e0820151611621906001613e64565b60208083018051909101919091528051436040909101526101008301519051606001526111758161427a565b604051600081527f8187db75add19639e0c5326706633d21974a3d7cce6f146a8a885724479c71ab9060200160405180910390a160006101608301819052338152600560209081526040808320805461ffff1916815560010183905560049091529020805462ffffff191690556116c26152aa565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c082015161172090600161422b565b602080830180519290925260e08401518251909101528051436040909101526101008301519051606001526111758161427a565b505050565b611769600160005414600a613e3e565b815161178490158061177d57508251600154145b600b613e3e565b600080805560028054611796906159a3565b80601f01602080910402602001604051908101604052809291908181526020018280546117c2906159a3565b801561180f5780601f106117e45761010080835404028352916020019161180f565b820191906000526020600020905b8154815290600101906020018083116117f257829003601f168201915b50505050508060200190518101906118279190615c4e565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338460405161185a929190615ccb565b60405180910390a161186e34156008613e3e565b8051611886906001600160a01b031633146009613e3e565b6118ba604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b031680825260208084015181840190815260408086015181860190815260608088015181880190815260026000554360015583519586019690965292519184019190915251908201529051608082015260a0016040516020818303038152906040526002908051906020019061193a929190615315565b5050505050565b6119516010600054146025613e3e565b815161196c90158061196557508251600154145b6026613e3e565b60008080556002805461197e906159a3565b80601f01602080910402602001604051908101604052809291908181526020018280546119aa906159a3565b80156119f75780601f106119cc576101008083540402835291602001916119f7565b820191906000526020600020905b8154815290600101906020018083116119da57829003601f168201915b5050505050806020019051810190611a0f9190615b64565b90507fc385b531bfdb596e9c4d4fba16778429b84fe13e45047887fd4a68f24be2836d3384604051611a42929190615a89565b60405180910390a1611a5634156023613e3e565b611a7e6001611a64336138ab565b516001811115611a7657611a766156a1565b146024613e3e565b604051600081527f823af3f1904f1e6029ba4b3bc98c76dd71728eb57ffe4277a12f92adec1c30df9060200160405180910390a1600060c08301819052338152600660205260409020805462ffffff19169055611ad9615399565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925260808085015184519091015260a08085015184519091015260c080850151845190910152808301805133905280514392019190915260e084015190519091015261117581614497565b611b69601a60005414603f613e3e565b8151611b84901580611b7d57508251600154145b6040613e3e565b600080805560028054611b96906159a3565b80601f0160208091040260200160405190810160405280929190818152602001828054611bc2906159a3565b8015611c0f5780601f10611be457610100808354040283529160200191611c0f565b820191906000526020600020905b815481529060010190602001808311611bf257829003601f168201915b5050505050806020019051810190611c279190615c31565b90507fc3e32c6c3764dfb43f9c6ab0ed9e9afaf43c45c1adfadd966e7b79fadb871b2d3384604051611c5a929190615b81565b60405180910390a1611c6e3415603d613e3e565b611c966001611c7c3361223b565b516001811115611c8e57611c8e6156a1565b14603e613e3e565b604051600081527fcfa6c510ff8cb4d0c7b40504a03ce1132f90d3c5828845a825f30a9cfa4ee1489060200160405180910390a16000808352338152600560209081526040909120805460ff191660019081178255918501515151910155611cfc61524d565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e0820151611d66906001613e64565b602080830180519290925281514391015261010083015190516040015261117581614018565b611d9c6011600054146029613e3e565b8151611db7901580611db057508251600154145b602a613e3e565b600080805560028054611dc9906159a3565b80601f0160208091040260200160405190810160405280929190818152602001828054611df5906159a3565b8015611e425780601f10611e1757610100808354040283529160200191611e42565b820191906000526020600020905b815481529060010190602001808311611e2557829003601f168201915b5050505050806020019051810190611e5a9190615b64565b9050611e79604051806040016040528060008152602001600081525090565b7f0ee57ec4ccee7f41c279d8e964cfed8c10ea2cf1f82984995d6aa5922d4a28683385604051611eaa929190615a89565b60405180910390a1611ebe34156027613e3e565b8151611f00906001600160a01b03163314611eda576000611ef9565b6001611ee53361223b565b516001811115611ef757611ef76156a1565b145b6028613e3e565b6001611f0b336138ab565b516001811115611f1d57611f1d6156a1565b14156120ac57604051600081527f3c0c56c4963d7763c31b1005a13064684fedb73d3dc3371486832825522d76879060200160405180910390a1600060c08401819052338152600460205260408120805462ffffff191690558152815160e08301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611fb5573d6000803e3d6000fd5b5081516001600160a01b03908116600090815260066020526040808220805462ffffff1916905560608501518451915193169281156108fc0292818181858888f1935050505015801561200c573d6000803e3d6000fd5b50612015615419565b825181516001600160a01b03918216905260208085015183518201526040808601518451909101526060808601518451931692019190915260808085015183519091015260a08085015183519091015281015160019081905260c084015161207c9161422b565b6020828101805190910191909152514360409091015260006020820151606001526120a681614682565b50611175565b604051600081527fe0d44fe56f3119a8ab1fa6edc0e7a3b00b1057671a6b88b7a5a79bb65e511f219060200160405180910390a1600060c08401819052338152600460205260408120805462ffffff191690556020820152815160e08301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612141573d6000803e3d6000fd5b5081516001600160a01b039081166000908152600660209081526040808320805462ffffff191690556060860151918501519051919093169280156108fc0292909190818181858888f193505050501580156121a1573d6000803e3d6000fd5b506121aa615419565b825181516001600160a01b03918216905260208085015183518201526040808601518451909101526060808601518451931692019190915260808085015183519091015260a08085015183519091015281015160019081905260c08401516122119161422b565b60208281018051909101919091525143604090910152600060208201516060015261193a81614682565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115612287576122876156a1565b1415612304576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156122c8576122c86156a1565b60018111156122d9576122d96156a1565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b612323601b600054146043613e3e565b815161233e90158061233757508251600154145b6044613e3e565b600080805560028054612350906159a3565b80601f016020809104026020016040519081016040528092919081815260200182805461237c906159a3565b80156123c95780601f1061239e576101008083540402835291602001916123c9565b820191906000526020600020905b8154815290600101906020018083116123ac57829003601f168201915b50505050508060200190518101906123e19190615c31565b90507fadd4c7f3d57d8b248e35dfaeed2d54392e536e02c2c4de5ab6fb5ef4e5e63ad03384604051612414929190615a89565b60405180910390a1612444600161242a3361223b565b51600181111561243c5761243c6156a1565b146041613e3e565b612455816040015134146042613e3e565b604051600081527f1cb5781aeb15b1ce6f48a4944d39cac87c6f6ee266c0d32ba487c53bb3b0a82c9060200160405180910390a160006101e0830152612499615485565b815181516001600160a01b039182169052602080840151835190910152604080840180518451909201919091526060808501518451931692019190915260808084015183519091015260a08084015183519091015260c083015190516124ff9190613e64565b60208201515260e082015161251590600161422b565b6020828101805190910191909152514360409182015261010083015190830151015b60208201516060015261117581614882565b6125596015600054146030613e3e565b815161257490158061256d57508251600154145b6031613e3e565b600080805560028054612586906159a3565b80601f01602080910402602001604051908101604052809291908181526020018280546125b2906159a3565b80156125ff5780601f106125d4576101008083540402835291602001916125ff565b820191906000526020600020905b8154815290600101906020018083116125e257829003601f168201915b50505050508060200190518101906126179190615d81565b90506126216154c4565b7f8e29e181297ffc5dd7c8e58e47aa3961b18298687be481f5f3ea6ea9d11883fd3385604051612652929190615ccb565b60405180910390a161010082015160a083015101815260a082015161267a903414602e613e3e565b6060820151612695906001600160a01b03163314602f613e3e565b8160c0015115612727576126a7615399565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087018051865190861692019190915260808088015186519091015260a08088015186519091015260e0870151855160c001525182850180519190941690528251439201919091528351915101526120a681614a89565b6020810180516003905280516000608090910152516040516000805160206160b78339815191529161275891615d9e565b60405180910390a16127ba60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260e08086015160c0850152845190840152601860005543600155905161282991839101615e1f565b6040516020818303038152906040526002908051906020019061284d929190615315565b505050505050565b612865600b60005414601d613e3e565b815161288090158061287957508251600154145b601e613e3e565b600080805560028054612892906159a3565b80601f01602080910402602001604051908101604052809291908181526020018280546128be906159a3565b801561290b5780601f106128e05761010080835404028352916020019161290b565b820191906000526020600020905b8154815290600101906020018083116128ee57829003601f168201915b50505050508060200190518101906129239190615b64565b90507f8ef10ecf82600a0e607d2b4732e42a9011d02a836d5c8900039202caf70fa8f23384604051612956929190615b81565b60405180910390a161296a3415601b613e3e565b80516129ac906001600160a01b031633146129865760006129a5565b60016129913361223b565b5160018111156129a3576129a36156a1565b145b601c613e3e565b60208301515151600190816129c033613d7b565b5160018111156129d2576129d26156a1565b146129de5760006129ec565b6129e733613d7b565b604001515b146129f85760006129fb565b60015b1415612afd57604051600181527fbfa1184ca4425df6000c56d810743d76fcddd7f1600a1e6e09d2bca188d0a8ea9060200160405180910390a160016101608301819052336000908152600560209081526040808320805461ffff19168155840183905560069091529020805462ff00ff19169091179055612a7b6152aa565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855194169381019390935260808086015185519091015260a08086015185519091015260c08501518285018051919091528051600193019290925281514391015260e08401519051909101526111758161427a565b604051600081527f616167bd40229ae49391aa5c283fb4f0b19766c7c1b4f8b1115bf64a4f81c4ab9060200160405180910390a160006101608301819052338152600560205260408120805461ffff1916815560010155612b5c6152aa565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855194169381019390935260808086015185519091015260a08086015185519091015260c08501518285018051919091528051600093019290925281514391015260e084015190519091015261117581614c82565b612bee600e600054146021613e3e565b8151612c09901580612c0257508251600154145b6022613e3e565b600080805560028054612c1b906159a3565b80601f0160208091040260200160405190810160405280929190818152602001828054612c47906159a3565b8015612c945780601f10612c6957610100808354040283529160200191612c94565b820191906000526020600020905b815481529060010190602001808311612c7757829003601f168201915b5050505050806020019051810190612cac9190615d81565b9050612cb66154c4565b7f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f79007642983385604051612ce7929190615ccb565b60405180910390a161010082015160a083015101815260a0820151612d0f903414601f613e3e565b6060820151612d2a906001600160a01b031633146020613e3e565b8160c0015115612dbc57612d3c615399565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087018051865190861692019190915260808088015186519091015260a08088015186519091015260e0870151855160c001525182850180519190941690528251439201919091528351915101526120a681614497565b6020810180516003905280516000608090910152516040516000805160206160b783398151915291612ded91615d9e565b60405180910390a1612e4f60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260e08086015160c0850152845190840152601160005543600155905161282991839101615e1f565b612ece6018600054146038613e3e565b8151612ee9901580612ee257508251600154145b6039613e3e565b600080805560028054612efb906159a3565b80601f0160208091040260200160405190810160405280929190818152602001828054612f27906159a3565b8015612f745780601f10612f4957610100808354040283529160200191612f74565b820191906000526020600020905b815481529060010190602001808311612f5757829003601f168201915b5050505050806020019051810190612f8c9190615b64565b90507f680249228d8618a45b50a0ae255e010443406da860026841fad3e6b41439b6183384604051612fbf929190615a89565b60405180910390a1612fd334156036613e3e565b8051613015906001600160a01b03163314612fef57600061300e565b6001612ffa3361223b565b51600181111561300c5761300c6156a1565b145b6037613e3e565b6001613020336138ab565b516001811115613032576130326156a1565b141561315057604051600081527f2eceaadade663ac9700651c0e0d88310c86b6332d1314789ecc14e628820a81a906020015b60405180910390a1600060c0830181905233815260046020526040808220805462ffffff19169055606083015160e084015191516001600160a01b03909116926108fc831502929190818181858888f193505050501580156130cb573d6000803e3d6000fd5b506130d4615419565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855194169381019390935260808086015185519091015260a08086015185519091015281840180516001905260c086015181519093019290925281514391015251600091015261117581614e6a565b604051600081527f943906aa3e70d1dcc0b0a07f7156a085429ae89c5068a99fbf0b640281a9990790602001613065565b6131916007600054146015613e3e565b81516131ac9015806131a557508251600154145b6016613e3e565b6000808055600280546131be906159a3565b80601f01602080910402602001604051908101604052809291908181526020018280546131ea906159a3565b80156132375780601f1061320c57610100808354040283529160200191613237565b820191906000526020600020905b81548152906001019060200180831161321a57829003601f168201915b505050505080602001905181019061324f91906159e3565b90507f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe3384604051613282929190615a89565b60405180910390a161329b816040015134146013613e3e565b80516132dd906001600160a01b031633146132b75760006132d6565b60016132c23361223b565b5160018111156132d4576132d46156a1565b145b6014613e3e565b604051600081527f1c348f1a2cd969fc3f66a9c51f07f2d4c8a3045eeb89cc839306a226bde88feb9060200160405180910390a160006101e0830152613321615485565b815181516001600160a01b03918216905260208084015183518201526040808501805185518301526060808701518651951694019390935260808086015185519091015260a080860180518651909201919091528351838601805191909152905181519093019290925290514391015260c0830151905101612537565b6133ae601960005414603b613e3e565b81516133c99015806133c257508251600154145b603c613e3e565b6000808055600280546133db906159a3565b80601f0160208091040260200160405190810160405280929190818152602001828054613407906159a3565b80156134545780601f1061342957610100808354040283529160200191613454565b820191906000526020600020905b81548152906001019060200180831161343757829003601f168201915b505050505080602001905181019061346c9190615c31565b90507fcd4b0f150b3ad4b3c94ac2ecc95e0914e700b1e9e916de972183d4d3ff0279fc338460405161349f929190615b81565b60405180910390a16134b33415603a613e3e565b60208301515151600190816134c733613d7b565b5160018111156134d9576134d96156a1565b146134e55760006134f3565b6134ee33613d7b565b604001515b146134ff576000613502565b60015b141561363257604051600181527f1eabc8f7e05ad1841f0dd61ae03513e450ba526edabf386ccbf906855fed0a459060200160405180910390a160016101608301819052336000908152600560209081526040808320805461ffff19168155840183905560068252808320805462ff00ff19169094179093556004905220805462ffffff191690556135926152aa565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08201516135f090600161422b565b60208201515260e0820151613606906001613e64565b602080830180519091019190915280514360409091015261010083015190516060015261117581614c82565b604051600081527f3bb8de3b4cc6f0f5d91bb6dc77f8c269228d7a267c2c2cf864f11dc5ebac68ec9060200160405180910390a160006101608301819052338152600560209081526040808320805461ffff1916815560010183905560049091529020805462ffffff191690556136a76152aa565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c082015161370590600161422b565b602080830180519290925260e084015182519091015280514360409091015261010083015190516060015261117581614c82565b613749600260005414600d613e3e565b815161376490158061375d57508251600154145b600e613e3e565b600080805560028054613776906159a3565b80601f01602080910402602001604051908101604052809291908181526020018280546137a2906159a3565b80156137ef5780601f106137c4576101008083540402835291602001916137ef565b820191906000526020600020905b8154815290600101906020018083116137d257829003601f168201915b50505050508060200190518101906138079190615c4e565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338460405161383a929190615ccb565b60405180910390a161384e3415600c613e3e565b613856615517565b815181516001600160a01b039091169052602080830151825182015260408084015183518201528251336060918201528401518284018051919091528051439301929092529051600091015261117581614f6a565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156138f7576138f76156a1565b1415612304576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156122c8576122c86156a1565b6139486005600054146011613e3e565b815161396390158061395c57508251600154145b6012613e3e565b600080805560028054613975906159a3565b80601f01602080910402602001604051908101604052809291908181526020018280546139a1906159a3565b80156139ee5780601f106139c3576101008083540402835291602001916139ee565b820191906000526020600020905b8154815290600101906020018083116139d157829003601f168201915b5050505050806020019051810190613a069190615e83565b90507f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943384604051613a39929190615a89565b60405180910390a1613a4d3415600f613e3e565b8051613a9c906001600160a01b03163314613a69576000613a95565b6001613a743361223b565b516001811115613a8657613a866156a1565b14613a92576001613a95565b60005b6010613e3e565b604051600081527f533a6f5875447d1c4501e35638c2ca9a66356f330d832b0f0a86c65df810df049060200160405180910390a1600060608301819052338152600460205260409020805462ff00ff19166001179055613afa6151f1565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925260808085015184519091015280830180516000905280514392019190915260a084015190519091015261117581613eb1565b613b736017600054146034613e3e565b8151613b8e901580613b8757508251600154145b6035613e3e565b600080805560028054613ba0906159a3565b80601f0160208091040260200160405190810160405280929190818152602001828054613bcc906159a3565b8015613c195780601f10613bee57610100808354040283529160200191613c19565b820191906000526020600020905b815481529060010190602001808311613bfc57829003601f168201915b5050505050806020019051810190613c319190615b64565b90507fb8c0306d7ca31f5865f2793c8da951eae672d48684a12cb12c2b1ecf9edd390c3384604051613c64929190615a89565b60405180910390a1613c7834156032613e3e565b613ca06001613c86336138ab565b516001811115613c9857613c986156a1565b146033613e3e565b604051600081527f7e18c3804bbbcb45d6660e43bef8d65a0dedab997f1caad916c04562babe7b739060200160405180910390a1600060c08301819052338152600660205260409020805462ffffff19169055613cfb615399565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925260808085015184519091015260a08085015184519091015260c080850151845190910152808301805133905280514392019190915260e084015190519091015261117581614a89565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115613dc757613dc76156a1565b1415612304576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115613e0857613e086156a1565b6001811115613e1957613e196156a1565b81528154610100900460ff161515602082015260019091015460409091015292915050565b816105905760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082613e718382615f32565b91508110156107895760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401613e5b565b613eb9615547565b815160209081015190830151511015613f6957613ed4615588565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925284516080908101519084015280850180515160a08501525182015160c0840152601c600055436001559051613f4591839101615f4a565b60405160208183030381529060405260029080519060200190611175929190615315565b8051600590528051600060c09091015280516040516000805160206160b783398151915291613f9791615d9e565b60405180910390a1613fa7615588565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925284516080908101519084015280850180515160a08501525182015160c08401526007600055436001559051613f4591839101615f4a565b614020615547565b815160a00151602083015151101561411d5761409360405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252845160809081015190840152845160a09081015190840152845160c0908101519084015280850180515160e085015251820151610100840152601a600055436001559051613f4591839101615fa1565b805160009081905281516020015280516040516000805160206160b78339815191529161414991615d9e565b60405180910390a16141ab60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252845160809081015190840152845160c09081015160a0850152818601805151918501919091525182015160e0840152600b600055436001559051613f4591839101615e1f565b600082614238838261600e565b91508111156107895760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401613e5b565b60208101515115614390576142e660405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931683850152845160809081015190850152845160a0908101519085015281850180515160c0860152805183015160e08601525190920151610100840152601260005543600155905161436c91839101615fa1565b60405160208183030381529060405260029080519060200190611754929190615315565b8051606081015160a0909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156143d3573d6000803e3d6000fd5b506143dc615419565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451909101528351606090810151845193169201919091528251608090810151835190910152825160a00151818401519091015161444191906150b3565b815160a09081019190915260208083018051600090528482018051830151825190930192909252815160409081015191510152516060015183519091015190035b60208201516060015261059081614682565b50565b8051606001516020820151516001600160a01b039081169116146144bc5760006144c5565b805160c0015115155b156145a55761452460405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931692840192909252835160809081015190840152835160a09081015190840152835160c090810151908401528084015182015160e0840152601060005543600155905161436c91839101615e1f565b6020810151805160409182015191516001600160a01b039091169180156108fc02916000818181858888f193505050501580156145e6573d6000803e3d6000fd5b506145ef615419565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451909101528351606090810151845193169201919091528251608090810151835190910152825160a090810151835190910152810151600190819052825160c001516146629161422b565b602082810180518201929092528381015101519051604001526000614482565b61468a615547565b602080830151015115614782576146fa60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160001515815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a09081015190850152818601805151151560c0860152805183015160e08601525190920151610100840152600e600055436001559051613f4591839101616025565b8160000151606001516001600160a01b03166108fc8360200151606001519081150290604051600060405180830381858888f193505050501580156147cb573d6000803e3d6000fd5b5080516001905280516000604091820152815190516000805160206160b7833981519152916147f991615d9e565b60405180910390a1614809615517565b82515181516001600160a01b0391821690528351602090810151835190910152835160409081015183519091015283516060908101518351921691015282516080015161485790600161422b565b6020828101805192909252848101516040015191510152600060208201516040015261175481614f6a565b61488a615547565b60208083015101511561497e576148f860405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a0908101519085015281860180515160c0860152805183015160e08601525190920151610100840152601b600055436001559051613f4591839101615fa1565b8051600490528051600060a09091015280516040516000805160206160b7833981519152916149ac91615d9e565b60405180910390a1614a0e60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a0908101519085015281860180515160c0860152519092015160e08401526009600055436001559051613f4591839101615e1f565b8051606001516020820151516001600160a01b03908116911614614aae576000614ab7565b805160c0015115155b15614b9757614b1660405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931692840192909252835160809081015190840152835160a09081015190840152835160c090810151908401528084015182015160e0840152601760005543600155905161436c91839101615e1f565b6020810151805160409182015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015614bd8573d6000803e3d6000fd5b50614be1615419565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451909101528351606090810151845193169201919091528251608090810151835190910152825160a090810151835190910152810151600190819052825160c00151614c549161422b565b6020828101805182019290925283810151015190516040015260005b60208201516060015261059081614e6a565b60208101515115614d7457614cee60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931683850152845160809081015190850152845160a0908101519085015281850180515160c0860152805183015160e08601525190920151610100840152601960005543600155905161436c91839101615fa1565b8051606081015160a0909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015614db7573d6000803e3d6000fd5b50614dc0615419565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451909101528351606090810151845193169201919091528251608090810151835190910152825160a001518184015190910151614e2591906150b3565b815160a0908101919091526020808301805160009052848201805183015182519093019290925281516040908101519151015251606001518351909101519003614c70565b614e72615547565b60208083015101511561478257614ee260405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160001515815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a09081015190850152818601805151151560c0860152805183015160e086015251909201516101008401526015600055436001559051613f4591839101616025565b614f72615547565b6020820151511561509d578051600290528051600060609091015280516040516000805160206160b783398151915291614fab91615d9e565b60405180910390a1614ffe6040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b018051516080808c01918252915186015160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951694830194909452925191810191909152905160c082015260e001613f45565b60008080556001819055610590906002906155d7565b6000816150f05760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b6044820152606401613e5b565b6150fa8284616094565b9392505050565b60405180604001604052806000815260200161512b60405180602001604052806000151581525090565b905290565b6040805161024081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081019190915290565b60405180604001604052806000815260200161512b60408051808201909152600060208201908152815290565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c08201929092529081905b815260200161512b60405180606001604052806000815260200160008152602001600081525090565b60405180604001604052806152246040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e08201929092529081905b815260200161512b6040518060800160405280600081526020016000815260200160008152602001600081525090565b828054615321906159a3565b90600052602060002090601f0160209004810192826153435760008555615389565b82601f1061535c57805160ff1916838001178555615389565b82800160010185558215615389579182015b8281111561538957825182559160200191906001019061536e565b5061539592915061560d565b5090565b60405180604001604052806153f66040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b815260408051606081018252600080825260208281018290529282015291015290565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e0820192909252908190815260200161512b60405180608001604052806000151581526020016000815260200160008152602001600081525090565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e08201929092529081906152e5565b60405180604001604052806000815260200161512b6040805160e08101909152806000815260006020820181905260408201819052606082018190526080820181905260a0820181905260c09091015290565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190615224565b6040805161010081018252600060208201818152928201819052606082018190526080820181905260a0820181905260c0820181905260e082015290815290565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b5080546155e3906159a3565b6000825580601f106155f3575050565b601f01602090049060005260206000209081019061449491905b5b80821115615395576000815560010161560e565b60006040828403121561563457600080fd5b50919050565b60006040828403121561564c57600080fd5b6150fa8383615622565b60006020828403121561566857600080fd5b5035919050565b6001600160a01b038116811461449457600080fd5b60006020828403121561569657600080fd5b81356150fa8161566f565b634e487b7160e01b600052602160045260246000fd5b60028110614494576144946156a1565b815160608201906156d7816156b7565b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b8181101561572d57858101830151858201606001528201615711565b8181111561573f576000606083870101525b50601f01601f191692909201606001949350505050565b81516060820190615766816156b7565b808352506020830151151560208301526040830151604083015292915050565b6040516020810167ffffffffffffffff811182821017156157b757634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff811182821017156157b757634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff811182821017156157b757634e487b7160e01b600052604160045260246000fd5b6000818303604081121561583357600080fd5b61583b6157bd565b8335815291506020601f198201121561585357600080fd5b5061585c615786565b615864615786565b6020938401358152815291810191909152919050565b60006040828403121561588c57600080fd5b6150fa8383615820565b801515811461449457600080fd5b600081830360408112156158b757600080fd5b6158bf6157bd565b8335815291506020601f19820112156158d757600080fd5b506158e0615786565b60208301356158ee81615896565b8152602082015292915050565b60006040828403121561590d57600080fd5b6150fa83836158a4565b60006040828403121561592957600080fd5b6040516040810181811067ffffffffffffffff8211171561595a57634e487b7160e01b600052604160045260246000fd5b60405282358152602083013561596f81615896565b60208201529392505050565b8051610d4d81615896565b60006020828403121561599857600080fd5b81516150fa81615896565b600181811c908216806159b757607f821691505b6020821081141561563457634e487b7160e01b600052602260045260246000fd5b8051610d4d8161566f565b600060e082840312156159f557600080fd5b60405160e0810181811067ffffffffffffffff82111715615a2657634e487b7160e01b600052604160045260246000fd5b6040528251615a348161566f565b8082525060208301516020820152604083015160408201526060830151615a5a8161566f565b806060830152506080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152606081016150fa602083018480518252602090810151511515910152565b6000610100808385031215615ac757600080fd5b6040519081019067ffffffffffffffff82118183101715615af857634e487b7160e01b600052604160045260246000fd5b8160405280925083519150615b0c8261566f565b8181526020840151602082015260408401516040820152615b2f606085016159d8565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b60006101008284031215615b7757600080fd5b6150fa8383615ab3565b6001600160a01b0383168152606081016150fa6020830184805182526020908101515151910152565b60006101208284031215615bbd57600080fd5b615bc56157ee565b9050615bd0826159d8565b81526020820151602082015260408201516040820152615bf2606083016159d8565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525092915050565b60006101208284031215615c4457600080fd5b6150fa8383615baa565b600060808284031215615c6057600080fd5b6040516080810181811067ffffffffffffffff82111715615c9157634e487b7160e01b600052604160045260246000fd5b6040528251615c9f8161566f565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b60006101208284031215615d0657600080fd5b615d0e6157ee565b9050615d19826159d8565b81526020820151602082015260408201516040820152615d3b606083016159d8565b60608201526080820151608082015260a082015160a0820152615d6060c0830161597b565b60c082015260e082015160e082015261010080830151818301525092915050565b60006101208284031215615d9457600080fd5b6150fa8383615cf3565b815160e082019060068110615db557615db56156a1565b808352506020830151151560208301526040830151151560408301526060830151151560608301526080830151615df0608084018215159052565b5060a0830151615e0460a084018215159052565b5060c0830151615e1860c084018215159052565b5092915050565b6101008101610789828460018060a01b038082511683526020820151602084015260408201516040840152806060830151166060840152506080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b600060c08284031215615e9557600080fd5b60405160c0810181811067ffffffffffffffff82111715615ec657634e487b7160e01b600052604160045260246000fd5b6040528251615ed48161566f565b8082525060208301516020820152604083015160408201526060830151615efa8161566f565b60608201526080838101519082015260a0928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115615f4557615f45615f1c565b500190565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c0808301519082015260e0808301519082015261010080830151908201526101208101610789565b60008282101561602057616020615f1c565b500390565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c08083015115159082015260e0808301519082015261010080830151908201526101208101610789565b6000826160b157634e487b7160e01b600052601260045260246000fd5b50049056fe3457ee6571e662a8bb768bc5dc3a2139ed5d5cd81c69401f82a7339096e9bf5da2646970667358221220007e25221b0d697c59f5fad9b5540d292d7e886f2b7b10b7346a5b6ee75def8364736f6c634300080c0033`,
  BytecodeLen: 25669,
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
    at: './index.rsh:294:3:after expr stmt',
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
    at: './index.rsh:213:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:252:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:270:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:256:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: './index.rsh:217:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  21: {
    at: './index.rsh:252:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  23: {
    at: './index.rsh:270:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  24: {
    at: './index.rsh:256:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  25: {
    at: './index.rsh:217:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  26: {
    at: './index.rsh:195:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  27: {
    at: './index.rsh:177:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  28: {
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
