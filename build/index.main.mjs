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
      15: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1],
      17: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      18: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1],
      20: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      21: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      24: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1],
      25: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1],
      27: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      28: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1],
      30: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      31: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      32: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      33: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      34: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1]
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
  
  
  const v1176 = stdlib.protect(ctc4, interact.setParams, 'for Admin\'s interact field setParams');
  const v1177 = v1176.amt;
  const v1178 = v1176.numPlayers;
  const v1179 = v1176.rounds;
  
  const txn1 = await (ctc.sendrecv({
    args: [v1178, v1177, v1179],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:60:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1186, v1187, v1188], secs: v1190, time: v1189, didSend: v48, from: v1185 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v1186, v1187, v1188], secs: v1190, time: v1189, didSend: v48, from: v1185 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1188],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1189,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:62:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1193, time: v1192, didSend: v53, from: v1191 } = txn2;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1193, time: v1192, didSend: v53, from: v1191 } = txn2;
  ;
  const v1194 = stdlib.addressEq(v1185, v1191);
  stdlib.assert(v1194, {
    at: './index.rsh:62:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:63:23:application',
    fs: ['at ./index.rsh:63:23:application call to [unknown function] (defined at: ./index.rsh:63:23:function exp)', 'at ./index.rsh:63:23:application call to "liftedInteract" (defined at: ./index.rsh:63:23:application)'],
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
  const {data: [], secs: v1198, time: v1197, didSend: v61, from: v1196 } = txn3;
  ;
  let v1199 = v1188;
  let v1200 = v1197;
  let v1207 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1210 = stdlib.gt(v1199, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
    
    return v1210;})()) {
    const v1211 = ['Joining', null];
    null;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1223], secs: v1225, time: v1224, didSend: v106, from: v1222 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v1226 = stdlib.addressEq(v1222, v1185);
    const v1227 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1222), null);
    const v1228 = {
      None: 0,
      Some: 1
      }[v1227[0]];
    const v1229 = stdlib.eq(v1228, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1230 = v1229 ? false : true;
    const v1231 = v1226 ? v1230 : false;
    stdlib.assert(v1231, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:154:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1233 = null;
    await txn4.getOutput('Player_join', 'v1233', ctc0, v1233);
    await stdlib.mapSet(map0, v1222, null);
    let v1240 = stdlib.checkedBigNumberify('./index.rsh:157:22:decimal', stdlib.UInt_max, '0');
    let v1241 = v1224;
    let v1248 = v1207;
    
    while (await (async () => {
      const v1252 = stdlib.lt(v1240, v1186);
      
      return v1252;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 33,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1264], secs: v1266, time: v1265, didSend: v215, from: v1263 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v1268 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1263), null);
      const v1269 = {
        None: 0,
        Some: 1
        }[v1268[0]];
      const v1270 = stdlib.eq(v1269, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1271 = v1270 ? false : true;
      stdlib.assert(v1271, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:163:20:application call to [unknown function] (defined at: ./index.rsh:163:20:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v1273 = null;
      await txn5.getOutput('Player_join', 'v1273', ctc0, v1273);
      await stdlib.mapSet(map0, v1263, null);
      const v1280 = stdlib.safeAdd(v1240, stdlib.checkedBigNumberify('./index.rsh:166:33:decimal', stdlib.UInt_max, '1'));
      const cv1240 = v1280;
      const cv1241 = v1265;
      const cv1248 = v1248;
      
      v1240 = cv1240;
      v1241 = cv1241;
      v1248 = cv1248;
      
      continue;
      
      }
    const v1282 = ['Wagering', null];
    null;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1293], secs: v1295, time: v1294, didSend: v287, from: v1292 } = txn5;
    undefined /* setApiDetails */;
    const v1297 = stdlib.add(v1248, v1187);
    ;
    const v1298 = stdlib.addressEq(v1292, v1185);
    const v1299 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1292), null);
    const v1300 = {
      None: 0,
      Some: 1
      }[v1299[0]];
    const v1301 = stdlib.eq(v1300, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1302 = v1298 ? v1301 : false;
    stdlib.assert(v1302, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:95:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1304 = null;
    await txn5.getOutput('Player_wager', 'v1304', ctc0, v1304);
    let v1310 = v1187;
    let v1311 = v1240;
    let v1312 = v1294;
    let v1319 = v1297;
    
    while (await (async () => {
      const v1323 = stdlib.gt(v1311, stdlib.checkedBigNumberify('./index.rsh:179:32:decimal', stdlib.UInt_max, '0'));
      
      return v1323;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 32,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1338], secs: v1340, time: v1339, didSend: v434, from: v1337 } = txn6;
      undefined /* setApiDetails */;
      const v1342 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1337), null);
      const v1343 = {
        None: 0,
        Some: 1
        }[v1342[0]];
      const v1344 = stdlib.eq(v1343, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1344, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:181:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v1347 = stdlib.add(v1319, v1187);
      ;
      const v1352 = null;
      await txn6.getOutput('Player_wager', 'v1352', ctc0, v1352);
      const v1358 = stdlib.safeAdd(v1310, v1187);
      const v1359 = stdlib.safeSub(v1311, stdlib.checkedBigNumberify('./index.rsh:184:55:decimal', stdlib.UInt_max, '1'));
      const cv1310 = v1358;
      const cv1311 = v1359;
      const cv1312 = v1339;
      const cv1319 = v1347;
      
      v1310 = cv1310;
      v1311 = cv1311;
      v1312 = cv1312;
      v1319 = cv1319;
      
      continue;
      
      }
    const v1361 = ['PickingRoles', null];
    null;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1374], secs: v1376, time: v1375, didSend: v502, from: v1373 } = txn6;
    undefined /* setApiDetails */;
    ;
    const v1377 = v1374[stdlib.checkedBigNumberify('./index.rsh:101:17:array', stdlib.UInt_max, '0')];
    const v1378 = stdlib.addressEq(v1373, v1185);
    const v1379 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1373), null);
    const v1380 = {
      None: 0,
      Some: 1
      }[v1379[0]];
    const v1381 = stdlib.eq(v1380, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1382 = v1378 ? v1381 : false;
    stdlib.assert(v1382, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:104:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1384 = null;
    await txn6.getOutput('Player_getRole', 'v1384', ctc0, v1384);
    await stdlib.mapSet(map1, v1373, v1377);
    let v1391 = stdlib.checkedBigNumberify('./index.rsh:194:22:decimal', stdlib.UInt_max, '0');
    let v1392 = v1375;
    let v1399 = v1319;
    
    while (await (async () => {
      const v1403 = stdlib.lt(v1391, v1240);
      
      return v1403;})()) {
      const txn7 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 31,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1417], secs: v1419, time: v1418, didSend: v612, from: v1416 } = txn7;
      undefined /* setApiDetails */;
      ;
      const v1421 = v1417[stdlib.checkedBigNumberify('./index.rsh:198:10:spread', stdlib.UInt_max, '0')];
      const v1422 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1416), null);
      const v1423 = {
        None: 0,
        Some: 1
        }[v1422[0]];
      const v1424 = stdlib.eq(v1423, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1424, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:18:application call to [unknown function] (defined at: ./index.rsh:200:18:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v1427 = null;
      await txn7.getOutput('Player_getRole', 'v1427', ctc0, v1427);
      await stdlib.mapSet(map1, v1416, v1421);
      const v1434 = stdlib.safeAdd(v1391, stdlib.checkedBigNumberify('./index.rsh:203:31:decimal', stdlib.UInt_max, '1'));
      const cv1391 = v1434;
      const cv1392 = v1418;
      const cv1399 = v1399;
      
      v1391 = cv1391;
      v1392 = cv1392;
      v1399 = cv1399;
      
      continue;
      
      }
    const v1438 = ['CheckingWin', null];
    null;
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 10,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1451], secs: v1453, time: v1452, didSend: v685, from: v1450 } = txn7;
    undefined /* setApiDetails */;
    ;
    const v1454 = v1451[stdlib.checkedBigNumberify('./index.rsh:110:17:array', stdlib.UInt_max, '0')];
    const v1455 = stdlib.addressEq(v1450, v1185);
    const v1456 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1450), null);
    const v1457 = {
      None: 0,
      Some: 1
      }[v1456[0]];
    const v1458 = stdlib.eq(v1457, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1459 = v1455 ? v1458 : false;
    stdlib.assert(v1459, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:113:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:213:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1461 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1450), null);
    const v1462 = stdlib.fromSome(v1461, stdlib.checkedBigNumberify('./index.rsh:114:55:decimal', stdlib.UInt_max, '0'));
    const v1463 = stdlib.eq(v1462, v1454);
    const v1464 = v1463 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
    const v1465 = stdlib.eq(v1464, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v1465) {
      const v1469 = true;
      await txn7.getOutput('Player_seeWinner', 'v1469', ctc7, v1469);
      await stdlib.mapSet(map1, v1450, undefined /* Nothing */);
      await stdlib.mapSet(map2, v1450, null);
      let v1477 = v1391;
      let v1478 = stdlib.checkedBigNumberify('./index.rsh:122:18:decimal', stdlib.UInt_max, '1');
      let v1479 = v1452;
      let v1486 = v1399;
      
      while (await (async () => {
        const v1490 = stdlib.gt(v1477, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        
        return v1490;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 20,
          out_tys: [ctc6],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1499], secs: v1501, time: v1500, didSend: v773, from: v1498 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1503 = v1499[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
        const v1504 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1498), null);
        const v1505 = stdlib.fromSome(v1504, stdlib.checkedBigNumberify('./index.rsh:222:51:decimal', stdlib.UInt_max, '0'));
        const v1506 = stdlib.eq(v1505, v1503);
        const v1507 = v1506 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1508 = stdlib.eq(v1507, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1508) {
          const v1512 = true;
          await txn8.getOutput('Player_seeWinner', 'v1512', ctc7, v1512);
          await stdlib.mapSet(map1, v1498, undefined /* Nothing */);
          await stdlib.mapSet(map2, v1498, null);
          const v1520 = stdlib.safeAdd(v1478, stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '1'));
          const v1521 = stdlib.safeSub(v1477, stdlib.checkedBigNumberify('./index.rsh:231:45:decimal', stdlib.UInt_max, '1'));
          const cv1477 = v1521;
          const cv1478 = v1520;
          const cv1479 = v1500;
          const cv1486 = v1486;
          
          v1477 = cv1477;
          v1478 = cv1478;
          v1479 = cv1479;
          v1486 = cv1486;
          
          continue;}
        else {
          const v1526 = false;
          await txn8.getOutput('Player_seeWinner', 'v1526', ctc7, v1526);
          await stdlib.mapSet(map1, v1498, undefined /* Nothing */);
          const v1533 = stdlib.safeSub(v1477, stdlib.checkedBigNumberify('./index.rsh:237:42:decimal', stdlib.UInt_max, '1'));
          const cv1477 = v1533;
          const cv1478 = v1478;
          const cv1479 = v1500;
          const cv1486 = v1486;
          
          v1477 = cv1477;
          v1478 = cv1478;
          v1479 = cv1479;
          v1486 = cv1486;
          
          continue;}
        
        }
      const v1541 = stdlib.sub(v1486, v1310);
      ;
      const v1542 = stdlib.safeDiv(v1310, v1478);
      const v1543 = ['PayingWinners', null];
      null;
      let v1544 = false;
      let v1545 = v1186;
      let v1546 = v1479;
      let v1553 = v1541;
      
      while (await (async () => {
        const v1556 = stdlib.gt(v1545, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
        
        return v1556;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 13,
          out_tys: [ctc5],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1567], secs: v1569, time: v1568, didSend: v855, from: v1566 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1570 = stdlib.addressEq(v1566, v1185);
        const v1571 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1566), null);
        const v1572 = {
          None: 0,
          Some: 1
          }[v1571[0]];
        const v1573 = stdlib.eq(v1572, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v1574 = v1570 ? v1573 : false;
        stdlib.assert(v1574, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:136:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v1576 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1566), null);
        const v1577 = {
          None: 0,
          Some: 1
          }[v1576[0]];
        const v1578 = stdlib.eq(v1577, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v1578) {
          const v1579 = null;
          await txn8.getOutput('Player_receivePay', 'v1579', ctc0, v1579);
          await stdlib.mapSet(map0, v1566, undefined /* Nothing */);
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 14,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1588, time: v1587, didSend: v903, from: v1586 } = txn9;
          const v1590 = stdlib.add(v1553, v1542);
          ;
          const v1591 = stdlib.addressEq(v1196, v1586);
          stdlib.assert(v1591, {
            at: './index.rsh:253:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Admin'
            });
          if (v1544) {
            let v1600 = v1186;
            let v1601 = v1196;
            let v1602 = v1587;
            let v1609 = v1590;
            
            while (await (async () => {
              const v1613 = stdlib.addressEq(v1601, v1196);
              const v1614 = stdlib.gt(v1600, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
              const v1615 = v1613 ? v1614 : false;
              
              return v1615;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 16,
                out_tys: [ctc5],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v1626], secs: v1628, time: v1627, didSend: v988, from: v1625 } = txn10;
              undefined /* setApiDetails */;
              ;
              const v1630 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1625), null);
              const v1631 = {
                None: 0,
                Some: 1
                }[v1630[0]];
              const v1632 = stdlib.eq(v1631, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v1632, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:269:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
                msg: 'Participant is not in the game',
                who: 'Admin'
                });
              const v1634 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1625), null);
              const v1635 = {
                None: 0,
                Some: 1
                }[v1634[0]];
              const v1636 = stdlib.eq(v1635, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              if (v1636) {
                const v1637 = null;
                await txn10.getOutput('Player_receivePay', 'v1637', ctc0, v1637);
                await stdlib.mapSet(map2, v1625, undefined /* Nothing */);
                await stdlib.mapSet(map0, v1625, undefined /* Nothing */);
                const v1649 = stdlib.sub(v1609, v1609);
                ;
                const v1650 = stdlib.safeSub(v1600, stdlib.checkedBigNumberify('./index.rsh:276:35:decimal', stdlib.UInt_max, '1'));
                const cv1600 = v1650;
                const cv1601 = v1625;
                const cv1602 = v1627;
                const cv1609 = v1649;
                
                v1600 = cv1600;
                v1601 = cv1601;
                v1602 = cv1602;
                v1609 = cv1609;
                
                continue;}
              else {
                const v1655 = null;
                await txn10.getOutput('Player_receivePay', 'v1655', ctc0, v1655);
                await stdlib.mapSet(map0, v1625, undefined /* Nothing */);
                const v1662 = stdlib.safeSub(v1600, stdlib.checkedBigNumberify('./index.rsh:280:37:decimal', stdlib.UInt_max, '1'));
                const cv1600 = v1662;
                const cv1601 = v1601;
                const cv1602 = v1627;
                const cv1609 = v1609;
                
                v1600 = cv1600;
                v1601 = cv1601;
                v1602 = cv1602;
                v1609 = cv1609;
                
                continue;}
              
              }
            const v1671 = stdlib.sub(v1609, v1609);
            ;
            const v1672 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
            const cv1544 = true;
            const cv1545 = v1672;
            const cv1546 = v1602;
            const cv1553 = v1671;
            
            v1544 = cv1544;
            v1545 = cv1545;
            v1546 = cv1546;
            v1553 = cv1553;
            
            continue;}
          else {
            const v1597 = stdlib.sub(v1590, v1590);
            ;
            await stdlib.mapSet(map2, v1185, undefined /* Nothing */);
            const v1599 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:259:53:decimal', stdlib.UInt_max, '1'));
            const cv1544 = true;
            const cv1545 = v1599;
            const cv1546 = v1587;
            const cv1553 = v1597;
            
            v1544 = cv1544;
            v1545 = cv1545;
            v1546 = cv1546;
            v1553 = cv1553;
            
            continue;}
          
          }
        else {
          const v1673 = null;
          await txn8.getOutput('Player_receivePay', 'v1673', ctc0, v1673);
          await stdlib.mapSet(map0, v1566, undefined /* Nothing */);
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 17,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1682, time: v1681, didSend: v903, from: v1680 } = txn9;
          const v1684 = stdlib.add(v1553, v1542);
          ;
          const v1685 = stdlib.addressEq(v1196, v1680);
          stdlib.assert(v1685, {
            at: './index.rsh:253:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Admin'
            });
          if (v1544) {
            let v1694 = v1186;
            let v1695 = v1196;
            let v1696 = v1681;
            let v1703 = v1684;
            
            while (await (async () => {
              const v1707 = stdlib.addressEq(v1695, v1196);
              const v1708 = stdlib.gt(v1694, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
              const v1709 = v1707 ? v1708 : false;
              
              return v1709;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 19,
                out_tys: [ctc5],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v1720], secs: v1722, time: v1721, didSend: v988, from: v1719 } = txn10;
              undefined /* setApiDetails */;
              ;
              const v1724 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1719), null);
              const v1725 = {
                None: 0,
                Some: 1
                }[v1724[0]];
              const v1726 = stdlib.eq(v1725, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v1726, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:269:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
                msg: 'Participant is not in the game',
                who: 'Admin'
                });
              const v1728 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1719), null);
              const v1729 = {
                None: 0,
                Some: 1
                }[v1728[0]];
              const v1730 = stdlib.eq(v1729, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              if (v1730) {
                const v1731 = null;
                await txn10.getOutput('Player_receivePay', 'v1731', ctc0, v1731);
                await stdlib.mapSet(map2, v1719, undefined /* Nothing */);
                await stdlib.mapSet(map0, v1719, undefined /* Nothing */);
                const v1743 = stdlib.sub(v1703, v1703);
                ;
                const v1744 = stdlib.safeSub(v1694, stdlib.checkedBigNumberify('./index.rsh:276:35:decimal', stdlib.UInt_max, '1'));
                const cv1694 = v1744;
                const cv1695 = v1719;
                const cv1696 = v1721;
                const cv1703 = v1743;
                
                v1694 = cv1694;
                v1695 = cv1695;
                v1696 = cv1696;
                v1703 = cv1703;
                
                continue;}
              else {
                const v1749 = null;
                await txn10.getOutput('Player_receivePay', 'v1749', ctc0, v1749);
                await stdlib.mapSet(map0, v1719, undefined /* Nothing */);
                const v1756 = stdlib.safeSub(v1694, stdlib.checkedBigNumberify('./index.rsh:280:37:decimal', stdlib.UInt_max, '1'));
                const cv1694 = v1756;
                const cv1695 = v1695;
                const cv1696 = v1721;
                const cv1703 = v1703;
                
                v1694 = cv1694;
                v1695 = cv1695;
                v1696 = cv1696;
                v1703 = cv1703;
                
                continue;}
              
              }
            const v1765 = stdlib.sub(v1703, v1703);
            ;
            const v1766 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
            const cv1544 = true;
            const cv1545 = v1766;
            const cv1546 = v1696;
            const cv1553 = v1765;
            
            v1544 = cv1544;
            v1545 = cv1545;
            v1546 = cv1546;
            v1553 = cv1553;
            
            continue;}
          else {
            const v1691 = stdlib.sub(v1684, v1684);
            ;
            await stdlib.mapSet(map2, v1185, undefined /* Nothing */);
            const v1693 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:259:53:decimal', stdlib.UInt_max, '1'));
            const cv1544 = true;
            const cv1545 = v1693;
            const cv1546 = v1681;
            const cv1553 = v1691;
            
            v1544 = cv1544;
            v1545 = cv1545;
            v1546 = cv1546;
            v1553 = cv1553;
            
            continue;}
          
          }
        
        }
      const v1767 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
      const cv1199 = v1767;
      const cv1200 = v1546;
      const cv1207 = v1553;
      
      v1199 = cv1199;
      v1200 = cv1200;
      v1207 = cv1207;
      
      continue;}
    else {
      const v1768 = false;
      await txn7.getOutput('Player_seeWinner', 'v1768', ctc7, v1768);
      await stdlib.mapSet(map1, v1450, undefined /* Nothing */);
      let v1775 = v1391;
      let v1776 = stdlib.checkedBigNumberify('./index.rsh:128:18:decimal', stdlib.UInt_max, '0');
      let v1777 = v1452;
      let v1784 = v1399;
      
      while (await (async () => {
        const v1788 = stdlib.gt(v1775, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        
        return v1788;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 30,
          out_tys: [ctc6],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1797], secs: v1799, time: v1798, didSend: v773, from: v1796 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1801 = v1797[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
        const v1802 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1796), null);
        const v1803 = stdlib.fromSome(v1802, stdlib.checkedBigNumberify('./index.rsh:222:51:decimal', stdlib.UInt_max, '0'));
        const v1804 = stdlib.eq(v1803, v1801);
        const v1805 = v1804 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1806 = stdlib.eq(v1805, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1806) {
          const v1810 = true;
          await txn8.getOutput('Player_seeWinner', 'v1810', ctc7, v1810);
          await stdlib.mapSet(map1, v1796, undefined /* Nothing */);
          await stdlib.mapSet(map2, v1796, null);
          const v1818 = stdlib.safeAdd(v1776, stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '1'));
          const v1819 = stdlib.safeSub(v1775, stdlib.checkedBigNumberify('./index.rsh:231:45:decimal', stdlib.UInt_max, '1'));
          const cv1775 = v1819;
          const cv1776 = v1818;
          const cv1777 = v1798;
          const cv1784 = v1784;
          
          v1775 = cv1775;
          v1776 = cv1776;
          v1777 = cv1777;
          v1784 = cv1784;
          
          continue;}
        else {
          const v1824 = false;
          await txn8.getOutput('Player_seeWinner', 'v1824', ctc7, v1824);
          await stdlib.mapSet(map1, v1796, undefined /* Nothing */);
          const v1831 = stdlib.safeSub(v1775, stdlib.checkedBigNumberify('./index.rsh:237:42:decimal', stdlib.UInt_max, '1'));
          const cv1775 = v1831;
          const cv1776 = v1776;
          const cv1777 = v1798;
          const cv1784 = v1784;
          
          v1775 = cv1775;
          v1776 = cv1776;
          v1777 = cv1777;
          v1784 = cv1784;
          
          continue;}
        
        }
      const v1839 = stdlib.sub(v1784, v1310);
      ;
      const v1840 = stdlib.safeDiv(v1310, v1776);
      const v1841 = ['PayingWinners', null];
      null;
      let v1842 = false;
      let v1843 = v1186;
      let v1844 = v1777;
      let v1851 = v1839;
      
      while (await (async () => {
        const v1854 = stdlib.gt(v1843, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
        
        return v1854;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 23,
          out_tys: [ctc5],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1865], secs: v1867, time: v1866, didSend: v855, from: v1864 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1868 = stdlib.addressEq(v1864, v1185);
        const v1869 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1864), null);
        const v1870 = {
          None: 0,
          Some: 1
          }[v1869[0]];
        const v1871 = stdlib.eq(v1870, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v1872 = v1868 ? v1871 : false;
        stdlib.assert(v1872, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:136:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v1874 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1864), null);
        const v1875 = {
          None: 0,
          Some: 1
          }[v1874[0]];
        const v1876 = stdlib.eq(v1875, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v1876) {
          const v1877 = null;
          await txn8.getOutput('Player_receivePay', 'v1877', ctc0, v1877);
          await stdlib.mapSet(map0, v1864, undefined /* Nothing */);
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 24,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1886, time: v1885, didSend: v903, from: v1884 } = txn9;
          const v1888 = stdlib.add(v1851, v1840);
          ;
          const v1889 = stdlib.addressEq(v1196, v1884);
          stdlib.assert(v1889, {
            at: './index.rsh:253:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Admin'
            });
          if (v1842) {
            let v1898 = v1186;
            let v1899 = v1196;
            let v1900 = v1885;
            let v1907 = v1888;
            
            while (await (async () => {
              const v1911 = stdlib.addressEq(v1899, v1196);
              const v1912 = stdlib.gt(v1898, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
              const v1913 = v1911 ? v1912 : false;
              
              return v1913;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 26,
                out_tys: [ctc5],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v1924], secs: v1926, time: v1925, didSend: v988, from: v1923 } = txn10;
              undefined /* setApiDetails */;
              ;
              const v1928 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1923), null);
              const v1929 = {
                None: 0,
                Some: 1
                }[v1928[0]];
              const v1930 = stdlib.eq(v1929, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v1930, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:269:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
                msg: 'Participant is not in the game',
                who: 'Admin'
                });
              const v1932 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1923), null);
              const v1933 = {
                None: 0,
                Some: 1
                }[v1932[0]];
              const v1934 = stdlib.eq(v1933, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              if (v1934) {
                const v1935 = null;
                await txn10.getOutput('Player_receivePay', 'v1935', ctc0, v1935);
                await stdlib.mapSet(map2, v1923, undefined /* Nothing */);
                await stdlib.mapSet(map0, v1923, undefined /* Nothing */);
                const v1947 = stdlib.sub(v1907, v1907);
                ;
                const v1948 = stdlib.safeSub(v1898, stdlib.checkedBigNumberify('./index.rsh:276:35:decimal', stdlib.UInt_max, '1'));
                const cv1898 = v1948;
                const cv1899 = v1923;
                const cv1900 = v1925;
                const cv1907 = v1947;
                
                v1898 = cv1898;
                v1899 = cv1899;
                v1900 = cv1900;
                v1907 = cv1907;
                
                continue;}
              else {
                const v1953 = null;
                await txn10.getOutput('Player_receivePay', 'v1953', ctc0, v1953);
                await stdlib.mapSet(map0, v1923, undefined /* Nothing */);
                const v1960 = stdlib.safeSub(v1898, stdlib.checkedBigNumberify('./index.rsh:280:37:decimal', stdlib.UInt_max, '1'));
                const cv1898 = v1960;
                const cv1899 = v1899;
                const cv1900 = v1925;
                const cv1907 = v1907;
                
                v1898 = cv1898;
                v1899 = cv1899;
                v1900 = cv1900;
                v1907 = cv1907;
                
                continue;}
              
              }
            const v1969 = stdlib.sub(v1907, v1907);
            ;
            const v1970 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
            const cv1842 = true;
            const cv1843 = v1970;
            const cv1844 = v1900;
            const cv1851 = v1969;
            
            v1842 = cv1842;
            v1843 = cv1843;
            v1844 = cv1844;
            v1851 = cv1851;
            
            continue;}
          else {
            const v1895 = stdlib.sub(v1888, v1888);
            ;
            await stdlib.mapSet(map2, v1185, undefined /* Nothing */);
            const v1897 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:259:53:decimal', stdlib.UInt_max, '1'));
            const cv1842 = true;
            const cv1843 = v1897;
            const cv1844 = v1885;
            const cv1851 = v1895;
            
            v1842 = cv1842;
            v1843 = cv1843;
            v1844 = cv1844;
            v1851 = cv1851;
            
            continue;}
          
          }
        else {
          const v1971 = null;
          await txn8.getOutput('Player_receivePay', 'v1971', ctc0, v1971);
          await stdlib.mapSet(map0, v1864, undefined /* Nothing */);
          const txn9 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 27,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1980, time: v1979, didSend: v903, from: v1978 } = txn9;
          const v1982 = stdlib.add(v1851, v1840);
          ;
          const v1983 = stdlib.addressEq(v1196, v1978);
          stdlib.assert(v1983, {
            at: './index.rsh:253:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Admin'
            });
          if (v1842) {
            let v1992 = v1186;
            let v1993 = v1196;
            let v1994 = v1979;
            let v2001 = v1982;
            
            while (await (async () => {
              const v2005 = stdlib.addressEq(v1993, v1196);
              const v2006 = stdlib.gt(v1992, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
              const v2007 = v2005 ? v2006 : false;
              
              return v2007;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 29,
                out_tys: [ctc5],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v2018], secs: v2020, time: v2019, didSend: v988, from: v2017 } = txn10;
              undefined /* setApiDetails */;
              ;
              const v2022 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2017), null);
              const v2023 = {
                None: 0,
                Some: 1
                }[v2022[0]];
              const v2024 = stdlib.eq(v2023, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v2024, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:269:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
                msg: 'Participant is not in the game',
                who: 'Admin'
                });
              const v2026 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2017), null);
              const v2027 = {
                None: 0,
                Some: 1
                }[v2026[0]];
              const v2028 = stdlib.eq(v2027, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              if (v2028) {
                const v2029 = null;
                await txn10.getOutput('Player_receivePay', 'v2029', ctc0, v2029);
                await stdlib.mapSet(map2, v2017, undefined /* Nothing */);
                await stdlib.mapSet(map0, v2017, undefined /* Nothing */);
                const v2041 = stdlib.sub(v2001, v2001);
                ;
                const v2042 = stdlib.safeSub(v1992, stdlib.checkedBigNumberify('./index.rsh:276:35:decimal', stdlib.UInt_max, '1'));
                const cv1992 = v2042;
                const cv1993 = v2017;
                const cv1994 = v2019;
                const cv2001 = v2041;
                
                v1992 = cv1992;
                v1993 = cv1993;
                v1994 = cv1994;
                v2001 = cv2001;
                
                continue;}
              else {
                const v2047 = null;
                await txn10.getOutput('Player_receivePay', 'v2047', ctc0, v2047);
                await stdlib.mapSet(map0, v2017, undefined /* Nothing */);
                const v2054 = stdlib.safeSub(v1992, stdlib.checkedBigNumberify('./index.rsh:280:37:decimal', stdlib.UInt_max, '1'));
                const cv1992 = v2054;
                const cv1993 = v1993;
                const cv1994 = v2019;
                const cv2001 = v2001;
                
                v1992 = cv1992;
                v1993 = cv1993;
                v1994 = cv1994;
                v2001 = cv2001;
                
                continue;}
              
              }
            const v2063 = stdlib.sub(v2001, v2001);
            ;
            const v2064 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
            const cv1842 = true;
            const cv1843 = v2064;
            const cv1844 = v1994;
            const cv1851 = v2063;
            
            v1842 = cv1842;
            v1843 = cv1843;
            v1844 = cv1844;
            v1851 = cv1851;
            
            continue;}
          else {
            const v1989 = stdlib.sub(v1982, v1982);
            ;
            await stdlib.mapSet(map2, v1185, undefined /* Nothing */);
            const v1991 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:259:53:decimal', stdlib.UInt_max, '1'));
            const cv1842 = true;
            const cv1843 = v1991;
            const cv1844 = v1979;
            const cv1851 = v1989;
            
            v1842 = cv1842;
            v1843 = cv1843;
            v1844 = cv1844;
            v1851 = cv1851;
            
            continue;}
          
          }
        
        }
      const v2065 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
      const cv1199 = v2065;
      const cv1200 = v1844;
      const cv1207 = v1851;
      
      v1199 = cv1199;
      v1200 = cv1200;
      v1207 = cv1207;
      
      continue;}
    
    
    
    
    
    
    
    }
  const v2066 = ['Finished', null];
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
  const {data: [v1186, v1187, v1188], secs: v1190, time: v1189, didSend: v48, from: v1185 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1193, time: v1192, didSend: v53, from: v1191 } = txn2;
  ;
  const v1194 = stdlib.addressEq(v1185, v1191);
  stdlib.assert(v1194, {
    at: './index.rsh:62:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Game'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1188],
    evt_cnt: 0,
    funcNum: 2,
    lct: v1192,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:66:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1198, time: v1197, didSend: v61, from: v1196 } = txn3;
      
      ;
      const v1199 = v1188;
      const v1200 = v1197;
      const v1207 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1210 = stdlib.gt(v1199, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        
        return v1210;})()) {
        const v1211 = ['Joining', null];
        null;
        sim_r.isHalt = false;
        }
      else {
        const v2066 = ['Finished', null];
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
  const {data: [], secs: v1198, time: v1197, didSend: v61, from: v1196 } = txn3;
  ;
  let v1199 = v1188;
  let v1200 = v1197;
  let v1207 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1210 = stdlib.gt(v1199, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
    
    return v1210;})()) {
    const v1211 = ['Joining', null];
    null;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1223], secs: v1225, time: v1224, didSend: v106, from: v1222 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v1226 = stdlib.addressEq(v1222, v1185);
    const v1227 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1222), null);
    const v1228 = {
      None: 0,
      Some: 1
      }[v1227[0]];
    const v1229 = stdlib.eq(v1228, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1230 = v1229 ? false : true;
    const v1231 = v1226 ? v1230 : false;
    stdlib.assert(v1231, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:154:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1233 = null;
    await txn4.getOutput('Player_join', 'v1233', ctc0, v1233);
    await stdlib.mapSet(map0, v1222, null);
    let v1240 = stdlib.checkedBigNumberify('./index.rsh:157:22:decimal', stdlib.UInt_max, '0');
    let v1241 = v1224;
    let v1248 = v1207;
    
    while (await (async () => {
      const v1252 = stdlib.lt(v1240, v1186);
      
      return v1252;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 33,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1264], secs: v1266, time: v1265, didSend: v215, from: v1263 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v1268 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1263), null);
      const v1269 = {
        None: 0,
        Some: 1
        }[v1268[0]];
      const v1270 = stdlib.eq(v1269, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1271 = v1270 ? false : true;
      stdlib.assert(v1271, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:163:20:application call to [unknown function] (defined at: ./index.rsh:163:20:function exp)'],
        msg: null,
        who: 'Game'
        });
      const v1273 = null;
      await txn5.getOutput('Player_join', 'v1273', ctc0, v1273);
      await stdlib.mapSet(map0, v1263, null);
      const v1280 = stdlib.safeAdd(v1240, stdlib.checkedBigNumberify('./index.rsh:166:33:decimal', stdlib.UInt_max, '1'));
      const cv1240 = v1280;
      const cv1241 = v1265;
      const cv1248 = v1248;
      
      v1240 = cv1240;
      v1241 = cv1241;
      v1248 = cv1248;
      
      continue;
      
      }
    const v1282 = ['Wagering', null];
    null;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1293], secs: v1295, time: v1294, didSend: v287, from: v1292 } = txn5;
    undefined /* setApiDetails */;
    const v1297 = stdlib.add(v1248, v1187);
    ;
    const v1298 = stdlib.addressEq(v1292, v1185);
    const v1299 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1292), null);
    const v1300 = {
      None: 0,
      Some: 1
      }[v1299[0]];
    const v1301 = stdlib.eq(v1300, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1302 = v1298 ? v1301 : false;
    stdlib.assert(v1302, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:95:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1304 = null;
    await txn5.getOutput('Player_wager', 'v1304', ctc0, v1304);
    let v1310 = v1187;
    let v1311 = v1240;
    let v1312 = v1294;
    let v1319 = v1297;
    
    while (await (async () => {
      const v1323 = stdlib.gt(v1311, stdlib.checkedBigNumberify('./index.rsh:179:32:decimal', stdlib.UInt_max, '0'));
      
      return v1323;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 32,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1338], secs: v1340, time: v1339, didSend: v434, from: v1337 } = txn6;
      undefined /* setApiDetails */;
      const v1342 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1337), null);
      const v1343 = {
        None: 0,
        Some: 1
        }[v1342[0]];
      const v1344 = stdlib.eq(v1343, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1344, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:181:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)'],
        msg: null,
        who: 'Game'
        });
      const v1347 = stdlib.add(v1319, v1187);
      ;
      const v1352 = null;
      await txn6.getOutput('Player_wager', 'v1352', ctc0, v1352);
      const v1358 = stdlib.safeAdd(v1310, v1187);
      const v1359 = stdlib.safeSub(v1311, stdlib.checkedBigNumberify('./index.rsh:184:55:decimal', stdlib.UInt_max, '1'));
      const cv1310 = v1358;
      const cv1311 = v1359;
      const cv1312 = v1339;
      const cv1319 = v1347;
      
      v1310 = cv1310;
      v1311 = cv1311;
      v1312 = cv1312;
      v1319 = cv1319;
      
      continue;
      
      }
    const v1361 = ['PickingRoles', null];
    null;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1374], secs: v1376, time: v1375, didSend: v502, from: v1373 } = txn6;
    undefined /* setApiDetails */;
    ;
    const v1377 = v1374[stdlib.checkedBigNumberify('./index.rsh:101:17:array', stdlib.UInt_max, '0')];
    const v1378 = stdlib.addressEq(v1373, v1185);
    const v1379 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1373), null);
    const v1380 = {
      None: 0,
      Some: 1
      }[v1379[0]];
    const v1381 = stdlib.eq(v1380, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1382 = v1378 ? v1381 : false;
    stdlib.assert(v1382, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:104:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1384 = null;
    await txn6.getOutput('Player_getRole', 'v1384', ctc0, v1384);
    await stdlib.mapSet(map1, v1373, v1377);
    let v1391 = stdlib.checkedBigNumberify('./index.rsh:194:22:decimal', stdlib.UInt_max, '0');
    let v1392 = v1375;
    let v1399 = v1319;
    
    while (await (async () => {
      const v1403 = stdlib.lt(v1391, v1240);
      
      return v1403;})()) {
      const txn7 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 31,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1417], secs: v1419, time: v1418, didSend: v612, from: v1416 } = txn7;
      undefined /* setApiDetails */;
      ;
      const v1421 = v1417[stdlib.checkedBigNumberify('./index.rsh:198:10:spread', stdlib.UInt_max, '0')];
      const v1422 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1416), null);
      const v1423 = {
        None: 0,
        Some: 1
        }[v1422[0]];
      const v1424 = stdlib.eq(v1423, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1424, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:18:application call to [unknown function] (defined at: ./index.rsh:200:18:function exp)'],
        msg: null,
        who: 'Game'
        });
      const v1427 = null;
      await txn7.getOutput('Player_getRole', 'v1427', ctc0, v1427);
      await stdlib.mapSet(map1, v1416, v1421);
      const v1434 = stdlib.safeAdd(v1391, stdlib.checkedBigNumberify('./index.rsh:203:31:decimal', stdlib.UInt_max, '1'));
      const cv1391 = v1434;
      const cv1392 = v1418;
      const cv1399 = v1399;
      
      v1391 = cv1391;
      v1392 = cv1392;
      v1399 = cv1399;
      
      continue;
      
      }
    stdlib.protect(ctc0, await interact.showWinningRole(), {
      at: './index.rsh:208:31:application',
      fs: ['at ./index.rsh:207:14:application call to [unknown function] (defined at: ./index.rsh:207:18:function exp)'],
      msg: 'showWinningRole',
      who: 'Game'
      });
    
    const v1438 = ['CheckingWin', null];
    null;
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 10,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1451], secs: v1453, time: v1452, didSend: v685, from: v1450 } = txn7;
    undefined /* setApiDetails */;
    ;
    const v1454 = v1451[stdlib.checkedBigNumberify('./index.rsh:110:17:array', stdlib.UInt_max, '0')];
    const v1455 = stdlib.addressEq(v1450, v1185);
    const v1456 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1450), null);
    const v1457 = {
      None: 0,
      Some: 1
      }[v1456[0]];
    const v1458 = stdlib.eq(v1457, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1459 = v1455 ? v1458 : false;
    stdlib.assert(v1459, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:113:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:213:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1461 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1450), null);
    const v1462 = stdlib.fromSome(v1461, stdlib.checkedBigNumberify('./index.rsh:114:55:decimal', stdlib.UInt_max, '0'));
    const v1463 = stdlib.eq(v1462, v1454);
    const v1464 = v1463 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
    const v1465 = stdlib.eq(v1464, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v1465) {
      const v1469 = true;
      await txn7.getOutput('Player_seeWinner', 'v1469', ctc6, v1469);
      await stdlib.mapSet(map1, v1450, undefined /* Nothing */);
      await stdlib.mapSet(map2, v1450, null);
      let v1477 = v1391;
      let v1478 = stdlib.checkedBigNumberify('./index.rsh:122:18:decimal', stdlib.UInt_max, '1');
      let v1479 = v1452;
      let v1486 = v1399;
      
      while (await (async () => {
        const v1490 = stdlib.gt(v1477, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        
        return v1490;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 20,
          out_tys: [ctc5],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1499], secs: v1501, time: v1500, didSend: v773, from: v1498 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1503 = v1499[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
        const v1504 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1498), null);
        const v1505 = stdlib.fromSome(v1504, stdlib.checkedBigNumberify('./index.rsh:222:51:decimal', stdlib.UInt_max, '0'));
        const v1506 = stdlib.eq(v1505, v1503);
        const v1507 = v1506 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1508 = stdlib.eq(v1507, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1508) {
          const v1512 = true;
          await txn8.getOutput('Player_seeWinner', 'v1512', ctc6, v1512);
          await stdlib.mapSet(map1, v1498, undefined /* Nothing */);
          await stdlib.mapSet(map2, v1498, null);
          const v1520 = stdlib.safeAdd(v1478, stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '1'));
          const v1521 = stdlib.safeSub(v1477, stdlib.checkedBigNumberify('./index.rsh:231:45:decimal', stdlib.UInt_max, '1'));
          const cv1477 = v1521;
          const cv1478 = v1520;
          const cv1479 = v1500;
          const cv1486 = v1486;
          
          v1477 = cv1477;
          v1478 = cv1478;
          v1479 = cv1479;
          v1486 = cv1486;
          
          continue;}
        else {
          const v1526 = false;
          await txn8.getOutput('Player_seeWinner', 'v1526', ctc6, v1526);
          await stdlib.mapSet(map1, v1498, undefined /* Nothing */);
          const v1533 = stdlib.safeSub(v1477, stdlib.checkedBigNumberify('./index.rsh:237:42:decimal', stdlib.UInt_max, '1'));
          const cv1477 = v1533;
          const cv1478 = v1478;
          const cv1479 = v1500;
          const cv1486 = v1486;
          
          v1477 = cv1477;
          v1478 = cv1478;
          v1479 = cv1479;
          v1486 = cv1486;
          
          continue;}
        
        }
      const v1541 = stdlib.sub(v1486, v1310);
      ;
      const v1542 = stdlib.safeDiv(v1310, v1478);
      const v1543 = ['PayingWinners', null];
      null;
      let v1544 = false;
      let v1545 = v1186;
      let v1546 = v1479;
      let v1553 = v1541;
      
      while (await (async () => {
        const v1556 = stdlib.gt(v1545, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
        
        return v1556;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 13,
          out_tys: [ctc4],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1567], secs: v1569, time: v1568, didSend: v855, from: v1566 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1570 = stdlib.addressEq(v1566, v1185);
        const v1571 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1566), null);
        const v1572 = {
          None: 0,
          Some: 1
          }[v1571[0]];
        const v1573 = stdlib.eq(v1572, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v1574 = v1570 ? v1573 : false;
        stdlib.assert(v1574, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:136:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
          msg: null,
          who: 'Game'
          });
        const v1576 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1566), null);
        const v1577 = {
          None: 0,
          Some: 1
          }[v1576[0]];
        const v1578 = stdlib.eq(v1577, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v1578) {
          const v1579 = null;
          await txn8.getOutput('Player_receivePay', 'v1579', ctc0, v1579);
          await stdlib.mapSet(map0, v1566, undefined /* Nothing */);
          const txn9 = await (ctc.sendrecv({
            args: [v1185, v1186, v1187, v1196, v1199, v1542, v1544, v1545, v1553],
            evt_cnt: 0,
            funcNum: 14,
            lct: v1568,
            onlyIf: true,
            out_tys: [],
            pay: [v1542, []],
            sim_p: (async (txn9) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1588, time: v1587, didSend: v903, from: v1586 } = txn9;
              
              const v1590 = stdlib.add(v1553, v1542);
              sim_r.txns.push({
                amt: v1542,
                kind: 'to',
                tok: undefined /* Nothing */
                });
              if (v1544) {
                const v1600 = v1186;
                const v1601 = v1196;
                const v1602 = v1587;
                const v1609 = v1590;
                
                if (await (async () => {
                  const v1613 = stdlib.addressEq(v1601, v1196);
                  const v1614 = stdlib.gt(v1600, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
                  const v1615 = v1613 ? v1614 : false;
                  
                  return v1615;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v1671 = stdlib.sub(v1609, v1609);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v1601,
                    tok: undefined /* Nothing */
                    });
                  const v1672 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
                  const cv1544 = true;
                  const cv1545 = v1672;
                  const cv1546 = v1602;
                  const cv1553 = v1671;
                  
                  await (async () => {
                    const v1544 = cv1544;
                    const v1545 = cv1545;
                    const v1546 = cv1546;
                    const v1553 = cv1553;
                    
                    if (await (async () => {
                      const v1556 = stdlib.gt(v1545, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
                      
                      return v1556;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v1767 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
                      const cv1199 = v1767;
                      const cv1200 = v1546;
                      const cv1207 = v1553;
                      
                      await (async () => {
                        const v1199 = cv1199;
                        const v1200 = cv1200;
                        const v1207 = cv1207;
                        
                        if (await (async () => {
                          const v1210 = stdlib.gt(v1199, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
                          
                          return v1210;})()) {
                          const v1211 = ['Joining', null];
                          null;
                          sim_r.isHalt = false;
                          }
                        else {
                          const v2066 = ['Finished', null];
                          null;
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }})();}})();}}
              else {
                const v1597 = stdlib.sub(v1590, v1590);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1185,
                  tok: undefined /* Nothing */
                  });
                await stdlib.simMapSet(sim_r, 2, v1185, undefined /* Nothing */);
                const v1599 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:259:53:decimal', stdlib.UInt_max, '1'));
                const cv1544 = true;
                const cv1545 = v1599;
                const cv1546 = v1587;
                const cv1553 = v1597;
                
                await (async () => {
                  const v1544 = cv1544;
                  const v1545 = cv1545;
                  const v1546 = cv1546;
                  const v1553 = cv1553;
                  
                  if (await (async () => {
                    const v1556 = stdlib.gt(v1545, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
                    
                    return v1556;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1767 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
                    const cv1199 = v1767;
                    const cv1200 = v1546;
                    const cv1207 = v1553;
                    
                    await (async () => {
                      const v1199 = cv1199;
                      const v1200 = cv1200;
                      const v1207 = cv1207;
                      
                      if (await (async () => {
                        const v1210 = stdlib.gt(v1199, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
                        
                        return v1210;})()) {
                        const v1211 = ['Joining', null];
                        null;
                        sim_r.isHalt = false;
                        }
                      else {
                        const v2066 = ['Finished', null];
                        null;
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }})();}})();}
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc7, ctc2, ctc2, ctc7, ctc2, ctc2, ctc6, ctc2, ctc2],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1588, time: v1587, didSend: v903, from: v1586 } = txn9;
          const v1590 = stdlib.add(v1553, v1542);
          ;
          const v1591 = stdlib.addressEq(v1196, v1586);
          stdlib.assert(v1591, {
            at: './index.rsh:253:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Game'
            });
          if (v1544) {
            let v1600 = v1186;
            let v1601 = v1196;
            let v1602 = v1587;
            let v1609 = v1590;
            
            while (await (async () => {
              const v1613 = stdlib.addressEq(v1601, v1196);
              const v1614 = stdlib.gt(v1600, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
              const v1615 = v1613 ? v1614 : false;
              
              return v1615;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 16,
                out_tys: [ctc4],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v1626], secs: v1628, time: v1627, didSend: v988, from: v1625 } = txn10;
              undefined /* setApiDetails */;
              ;
              const v1630 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1625), null);
              const v1631 = {
                None: 0,
                Some: 1
                }[v1630[0]];
              const v1632 = stdlib.eq(v1631, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v1632, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:269:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
                msg: 'Participant is not in the game',
                who: 'Game'
                });
              const v1634 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1625), null);
              const v1635 = {
                None: 0,
                Some: 1
                }[v1634[0]];
              const v1636 = stdlib.eq(v1635, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              if (v1636) {
                const v1637 = null;
                await txn10.getOutput('Player_receivePay', 'v1637', ctc0, v1637);
                await stdlib.mapSet(map2, v1625, undefined /* Nothing */);
                await stdlib.mapSet(map0, v1625, undefined /* Nothing */);
                const v1649 = stdlib.sub(v1609, v1609);
                ;
                const v1650 = stdlib.safeSub(v1600, stdlib.checkedBigNumberify('./index.rsh:276:35:decimal', stdlib.UInt_max, '1'));
                const cv1600 = v1650;
                const cv1601 = v1625;
                const cv1602 = v1627;
                const cv1609 = v1649;
                
                v1600 = cv1600;
                v1601 = cv1601;
                v1602 = cv1602;
                v1609 = cv1609;
                
                continue;}
              else {
                const v1655 = null;
                await txn10.getOutput('Player_receivePay', 'v1655', ctc0, v1655);
                await stdlib.mapSet(map0, v1625, undefined /* Nothing */);
                const v1662 = stdlib.safeSub(v1600, stdlib.checkedBigNumberify('./index.rsh:280:37:decimal', stdlib.UInt_max, '1'));
                const cv1600 = v1662;
                const cv1601 = v1601;
                const cv1602 = v1627;
                const cv1609 = v1609;
                
                v1600 = cv1600;
                v1601 = cv1601;
                v1602 = cv1602;
                v1609 = cv1609;
                
                continue;}
              
              }
            const v1671 = stdlib.sub(v1609, v1609);
            ;
            const v1672 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
            const cv1544 = true;
            const cv1545 = v1672;
            const cv1546 = v1602;
            const cv1553 = v1671;
            
            v1544 = cv1544;
            v1545 = cv1545;
            v1546 = cv1546;
            v1553 = cv1553;
            
            continue;}
          else {
            const v1597 = stdlib.sub(v1590, v1590);
            ;
            await stdlib.mapSet(map2, v1185, undefined /* Nothing */);
            const v1599 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:259:53:decimal', stdlib.UInt_max, '1'));
            const cv1544 = true;
            const cv1545 = v1599;
            const cv1546 = v1587;
            const cv1553 = v1597;
            
            v1544 = cv1544;
            v1545 = cv1545;
            v1546 = cv1546;
            v1553 = cv1553;
            
            continue;}
          
          }
        else {
          const v1673 = null;
          await txn8.getOutput('Player_receivePay', 'v1673', ctc0, v1673);
          await stdlib.mapSet(map0, v1566, undefined /* Nothing */);
          const txn9 = await (ctc.sendrecv({
            args: [v1185, v1186, v1187, v1196, v1199, v1542, v1544, v1545, v1553],
            evt_cnt: 0,
            funcNum: 17,
            lct: v1568,
            onlyIf: true,
            out_tys: [],
            pay: [v1542, []],
            sim_p: (async (txn9) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1682, time: v1681, didSend: v903, from: v1680 } = txn9;
              
              const v1684 = stdlib.add(v1553, v1542);
              sim_r.txns.push({
                amt: v1542,
                kind: 'to',
                tok: undefined /* Nothing */
                });
              if (v1544) {
                const v1694 = v1186;
                const v1695 = v1196;
                const v1696 = v1681;
                const v1703 = v1684;
                
                if (await (async () => {
                  const v1707 = stdlib.addressEq(v1695, v1196);
                  const v1708 = stdlib.gt(v1694, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
                  const v1709 = v1707 ? v1708 : false;
                  
                  return v1709;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v1765 = stdlib.sub(v1703, v1703);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v1695,
                    tok: undefined /* Nothing */
                    });
                  const v1766 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
                  const cv1544 = true;
                  const cv1545 = v1766;
                  const cv1546 = v1696;
                  const cv1553 = v1765;
                  
                  await (async () => {
                    const v1544 = cv1544;
                    const v1545 = cv1545;
                    const v1546 = cv1546;
                    const v1553 = cv1553;
                    
                    if (await (async () => {
                      const v1556 = stdlib.gt(v1545, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
                      
                      return v1556;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v1767 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
                      const cv1199 = v1767;
                      const cv1200 = v1546;
                      const cv1207 = v1553;
                      
                      await (async () => {
                        const v1199 = cv1199;
                        const v1200 = cv1200;
                        const v1207 = cv1207;
                        
                        if (await (async () => {
                          const v1210 = stdlib.gt(v1199, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
                          
                          return v1210;})()) {
                          const v1211 = ['Joining', null];
                          null;
                          sim_r.isHalt = false;
                          }
                        else {
                          const v2066 = ['Finished', null];
                          null;
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }})();}})();}}
              else {
                const v1691 = stdlib.sub(v1684, v1684);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1185,
                  tok: undefined /* Nothing */
                  });
                await stdlib.simMapSet(sim_r, 2, v1185, undefined /* Nothing */);
                const v1693 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:259:53:decimal', stdlib.UInt_max, '1'));
                const cv1544 = true;
                const cv1545 = v1693;
                const cv1546 = v1681;
                const cv1553 = v1691;
                
                await (async () => {
                  const v1544 = cv1544;
                  const v1545 = cv1545;
                  const v1546 = cv1546;
                  const v1553 = cv1553;
                  
                  if (await (async () => {
                    const v1556 = stdlib.gt(v1545, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
                    
                    return v1556;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1767 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
                    const cv1199 = v1767;
                    const cv1200 = v1546;
                    const cv1207 = v1553;
                    
                    await (async () => {
                      const v1199 = cv1199;
                      const v1200 = cv1200;
                      const v1207 = cv1207;
                      
                      if (await (async () => {
                        const v1210 = stdlib.gt(v1199, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
                        
                        return v1210;})()) {
                        const v1211 = ['Joining', null];
                        null;
                        sim_r.isHalt = false;
                        }
                      else {
                        const v2066 = ['Finished', null];
                        null;
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }})();}})();}
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc7, ctc2, ctc2, ctc7, ctc2, ctc2, ctc6, ctc2, ctc2],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1682, time: v1681, didSend: v903, from: v1680 } = txn9;
          const v1684 = stdlib.add(v1553, v1542);
          ;
          const v1685 = stdlib.addressEq(v1196, v1680);
          stdlib.assert(v1685, {
            at: './index.rsh:253:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Game'
            });
          if (v1544) {
            let v1694 = v1186;
            let v1695 = v1196;
            let v1696 = v1681;
            let v1703 = v1684;
            
            while (await (async () => {
              const v1707 = stdlib.addressEq(v1695, v1196);
              const v1708 = stdlib.gt(v1694, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
              const v1709 = v1707 ? v1708 : false;
              
              return v1709;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 19,
                out_tys: [ctc4],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v1720], secs: v1722, time: v1721, didSend: v988, from: v1719 } = txn10;
              undefined /* setApiDetails */;
              ;
              const v1724 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1719), null);
              const v1725 = {
                None: 0,
                Some: 1
                }[v1724[0]];
              const v1726 = stdlib.eq(v1725, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v1726, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:269:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
                msg: 'Participant is not in the game',
                who: 'Game'
                });
              const v1728 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1719), null);
              const v1729 = {
                None: 0,
                Some: 1
                }[v1728[0]];
              const v1730 = stdlib.eq(v1729, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              if (v1730) {
                const v1731 = null;
                await txn10.getOutput('Player_receivePay', 'v1731', ctc0, v1731);
                await stdlib.mapSet(map2, v1719, undefined /* Nothing */);
                await stdlib.mapSet(map0, v1719, undefined /* Nothing */);
                const v1743 = stdlib.sub(v1703, v1703);
                ;
                const v1744 = stdlib.safeSub(v1694, stdlib.checkedBigNumberify('./index.rsh:276:35:decimal', stdlib.UInt_max, '1'));
                const cv1694 = v1744;
                const cv1695 = v1719;
                const cv1696 = v1721;
                const cv1703 = v1743;
                
                v1694 = cv1694;
                v1695 = cv1695;
                v1696 = cv1696;
                v1703 = cv1703;
                
                continue;}
              else {
                const v1749 = null;
                await txn10.getOutput('Player_receivePay', 'v1749', ctc0, v1749);
                await stdlib.mapSet(map0, v1719, undefined /* Nothing */);
                const v1756 = stdlib.safeSub(v1694, stdlib.checkedBigNumberify('./index.rsh:280:37:decimal', stdlib.UInt_max, '1'));
                const cv1694 = v1756;
                const cv1695 = v1695;
                const cv1696 = v1721;
                const cv1703 = v1703;
                
                v1694 = cv1694;
                v1695 = cv1695;
                v1696 = cv1696;
                v1703 = cv1703;
                
                continue;}
              
              }
            const v1765 = stdlib.sub(v1703, v1703);
            ;
            const v1766 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
            const cv1544 = true;
            const cv1545 = v1766;
            const cv1546 = v1696;
            const cv1553 = v1765;
            
            v1544 = cv1544;
            v1545 = cv1545;
            v1546 = cv1546;
            v1553 = cv1553;
            
            continue;}
          else {
            const v1691 = stdlib.sub(v1684, v1684);
            ;
            await stdlib.mapSet(map2, v1185, undefined /* Nothing */);
            const v1693 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:259:53:decimal', stdlib.UInt_max, '1'));
            const cv1544 = true;
            const cv1545 = v1693;
            const cv1546 = v1681;
            const cv1553 = v1691;
            
            v1544 = cv1544;
            v1545 = cv1545;
            v1546 = cv1546;
            v1553 = cv1553;
            
            continue;}
          
          }
        
        }
      const v1767 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
      const cv1199 = v1767;
      const cv1200 = v1546;
      const cv1207 = v1553;
      
      v1199 = cv1199;
      v1200 = cv1200;
      v1207 = cv1207;
      
      continue;}
    else {
      const v1768 = false;
      await txn7.getOutput('Player_seeWinner', 'v1768', ctc6, v1768);
      await stdlib.mapSet(map1, v1450, undefined /* Nothing */);
      let v1775 = v1391;
      let v1776 = stdlib.checkedBigNumberify('./index.rsh:128:18:decimal', stdlib.UInt_max, '0');
      let v1777 = v1452;
      let v1784 = v1399;
      
      while (await (async () => {
        const v1788 = stdlib.gt(v1775, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        
        return v1788;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 30,
          out_tys: [ctc5],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1797], secs: v1799, time: v1798, didSend: v773, from: v1796 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1801 = v1797[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
        const v1802 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1796), null);
        const v1803 = stdlib.fromSome(v1802, stdlib.checkedBigNumberify('./index.rsh:222:51:decimal', stdlib.UInt_max, '0'));
        const v1804 = stdlib.eq(v1803, v1801);
        const v1805 = v1804 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1806 = stdlib.eq(v1805, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1806) {
          const v1810 = true;
          await txn8.getOutput('Player_seeWinner', 'v1810', ctc6, v1810);
          await stdlib.mapSet(map1, v1796, undefined /* Nothing */);
          await stdlib.mapSet(map2, v1796, null);
          const v1818 = stdlib.safeAdd(v1776, stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '1'));
          const v1819 = stdlib.safeSub(v1775, stdlib.checkedBigNumberify('./index.rsh:231:45:decimal', stdlib.UInt_max, '1'));
          const cv1775 = v1819;
          const cv1776 = v1818;
          const cv1777 = v1798;
          const cv1784 = v1784;
          
          v1775 = cv1775;
          v1776 = cv1776;
          v1777 = cv1777;
          v1784 = cv1784;
          
          continue;}
        else {
          const v1824 = false;
          await txn8.getOutput('Player_seeWinner', 'v1824', ctc6, v1824);
          await stdlib.mapSet(map1, v1796, undefined /* Nothing */);
          const v1831 = stdlib.safeSub(v1775, stdlib.checkedBigNumberify('./index.rsh:237:42:decimal', stdlib.UInt_max, '1'));
          const cv1775 = v1831;
          const cv1776 = v1776;
          const cv1777 = v1798;
          const cv1784 = v1784;
          
          v1775 = cv1775;
          v1776 = cv1776;
          v1777 = cv1777;
          v1784 = cv1784;
          
          continue;}
        
        }
      const v1839 = stdlib.sub(v1784, v1310);
      ;
      const v1840 = stdlib.safeDiv(v1310, v1776);
      const v1841 = ['PayingWinners', null];
      null;
      let v1842 = false;
      let v1843 = v1186;
      let v1844 = v1777;
      let v1851 = v1839;
      
      while (await (async () => {
        const v1854 = stdlib.gt(v1843, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
        
        return v1854;})()) {
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 23,
          out_tys: [ctc4],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1865], secs: v1867, time: v1866, didSend: v855, from: v1864 } = txn8;
        undefined /* setApiDetails */;
        ;
        const v1868 = stdlib.addressEq(v1864, v1185);
        const v1869 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1864), null);
        const v1870 = {
          None: 0,
          Some: 1
          }[v1869[0]];
        const v1871 = stdlib.eq(v1870, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v1872 = v1868 ? v1871 : false;
        stdlib.assert(v1872, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:136:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
          msg: null,
          who: 'Game'
          });
        const v1874 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1864), null);
        const v1875 = {
          None: 0,
          Some: 1
          }[v1874[0]];
        const v1876 = stdlib.eq(v1875, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v1876) {
          const v1877 = null;
          await txn8.getOutput('Player_receivePay', 'v1877', ctc0, v1877);
          await stdlib.mapSet(map0, v1864, undefined /* Nothing */);
          const txn9 = await (ctc.sendrecv({
            args: [v1185, v1186, v1187, v1196, v1199, v1840, v1842, v1843, v1851],
            evt_cnt: 0,
            funcNum: 24,
            lct: v1866,
            onlyIf: true,
            out_tys: [],
            pay: [v1840, []],
            sim_p: (async (txn9) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1886, time: v1885, didSend: v903, from: v1884 } = txn9;
              
              const v1888 = stdlib.add(v1851, v1840);
              sim_r.txns.push({
                amt: v1840,
                kind: 'to',
                tok: undefined /* Nothing */
                });
              if (v1842) {
                const v1898 = v1186;
                const v1899 = v1196;
                const v1900 = v1885;
                const v1907 = v1888;
                
                if (await (async () => {
                  const v1911 = stdlib.addressEq(v1899, v1196);
                  const v1912 = stdlib.gt(v1898, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
                  const v1913 = v1911 ? v1912 : false;
                  
                  return v1913;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v1969 = stdlib.sub(v1907, v1907);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v1899,
                    tok: undefined /* Nothing */
                    });
                  const v1970 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
                  const cv1842 = true;
                  const cv1843 = v1970;
                  const cv1844 = v1900;
                  const cv1851 = v1969;
                  
                  await (async () => {
                    const v1842 = cv1842;
                    const v1843 = cv1843;
                    const v1844 = cv1844;
                    const v1851 = cv1851;
                    
                    if (await (async () => {
                      const v1854 = stdlib.gt(v1843, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
                      
                      return v1854;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v2065 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
                      const cv1199 = v2065;
                      const cv1200 = v1844;
                      const cv1207 = v1851;
                      
                      await (async () => {
                        const v1199 = cv1199;
                        const v1200 = cv1200;
                        const v1207 = cv1207;
                        
                        if (await (async () => {
                          const v1210 = stdlib.gt(v1199, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
                          
                          return v1210;})()) {
                          const v1211 = ['Joining', null];
                          null;
                          sim_r.isHalt = false;
                          }
                        else {
                          const v2066 = ['Finished', null];
                          null;
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }})();}})();}}
              else {
                const v1895 = stdlib.sub(v1888, v1888);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1185,
                  tok: undefined /* Nothing */
                  });
                await stdlib.simMapSet(sim_r, 2, v1185, undefined /* Nothing */);
                const v1897 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:259:53:decimal', stdlib.UInt_max, '1'));
                const cv1842 = true;
                const cv1843 = v1897;
                const cv1844 = v1885;
                const cv1851 = v1895;
                
                await (async () => {
                  const v1842 = cv1842;
                  const v1843 = cv1843;
                  const v1844 = cv1844;
                  const v1851 = cv1851;
                  
                  if (await (async () => {
                    const v1854 = stdlib.gt(v1843, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
                    
                    return v1854;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v2065 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
                    const cv1199 = v2065;
                    const cv1200 = v1844;
                    const cv1207 = v1851;
                    
                    await (async () => {
                      const v1199 = cv1199;
                      const v1200 = cv1200;
                      const v1207 = cv1207;
                      
                      if (await (async () => {
                        const v1210 = stdlib.gt(v1199, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
                        
                        return v1210;})()) {
                        const v1211 = ['Joining', null];
                        null;
                        sim_r.isHalt = false;
                        }
                      else {
                        const v2066 = ['Finished', null];
                        null;
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }})();}})();}
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc7, ctc2, ctc2, ctc7, ctc2, ctc2, ctc6, ctc2, ctc2],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1886, time: v1885, didSend: v903, from: v1884 } = txn9;
          const v1888 = stdlib.add(v1851, v1840);
          ;
          const v1889 = stdlib.addressEq(v1196, v1884);
          stdlib.assert(v1889, {
            at: './index.rsh:253:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Game'
            });
          if (v1842) {
            let v1898 = v1186;
            let v1899 = v1196;
            let v1900 = v1885;
            let v1907 = v1888;
            
            while (await (async () => {
              const v1911 = stdlib.addressEq(v1899, v1196);
              const v1912 = stdlib.gt(v1898, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
              const v1913 = v1911 ? v1912 : false;
              
              return v1913;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 26,
                out_tys: [ctc4],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v1924], secs: v1926, time: v1925, didSend: v988, from: v1923 } = txn10;
              undefined /* setApiDetails */;
              ;
              const v1928 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1923), null);
              const v1929 = {
                None: 0,
                Some: 1
                }[v1928[0]];
              const v1930 = stdlib.eq(v1929, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v1930, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:269:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
                msg: 'Participant is not in the game',
                who: 'Game'
                });
              const v1932 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1923), null);
              const v1933 = {
                None: 0,
                Some: 1
                }[v1932[0]];
              const v1934 = stdlib.eq(v1933, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              if (v1934) {
                const v1935 = null;
                await txn10.getOutput('Player_receivePay', 'v1935', ctc0, v1935);
                await stdlib.mapSet(map2, v1923, undefined /* Nothing */);
                await stdlib.mapSet(map0, v1923, undefined /* Nothing */);
                const v1947 = stdlib.sub(v1907, v1907);
                ;
                const v1948 = stdlib.safeSub(v1898, stdlib.checkedBigNumberify('./index.rsh:276:35:decimal', stdlib.UInt_max, '1'));
                const cv1898 = v1948;
                const cv1899 = v1923;
                const cv1900 = v1925;
                const cv1907 = v1947;
                
                v1898 = cv1898;
                v1899 = cv1899;
                v1900 = cv1900;
                v1907 = cv1907;
                
                continue;}
              else {
                const v1953 = null;
                await txn10.getOutput('Player_receivePay', 'v1953', ctc0, v1953);
                await stdlib.mapSet(map0, v1923, undefined /* Nothing */);
                const v1960 = stdlib.safeSub(v1898, stdlib.checkedBigNumberify('./index.rsh:280:37:decimal', stdlib.UInt_max, '1'));
                const cv1898 = v1960;
                const cv1899 = v1899;
                const cv1900 = v1925;
                const cv1907 = v1907;
                
                v1898 = cv1898;
                v1899 = cv1899;
                v1900 = cv1900;
                v1907 = cv1907;
                
                continue;}
              
              }
            const v1969 = stdlib.sub(v1907, v1907);
            ;
            const v1970 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
            const cv1842 = true;
            const cv1843 = v1970;
            const cv1844 = v1900;
            const cv1851 = v1969;
            
            v1842 = cv1842;
            v1843 = cv1843;
            v1844 = cv1844;
            v1851 = cv1851;
            
            continue;}
          else {
            const v1895 = stdlib.sub(v1888, v1888);
            ;
            await stdlib.mapSet(map2, v1185, undefined /* Nothing */);
            const v1897 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:259:53:decimal', stdlib.UInt_max, '1'));
            const cv1842 = true;
            const cv1843 = v1897;
            const cv1844 = v1885;
            const cv1851 = v1895;
            
            v1842 = cv1842;
            v1843 = cv1843;
            v1844 = cv1844;
            v1851 = cv1851;
            
            continue;}
          
          }
        else {
          const v1971 = null;
          await txn8.getOutput('Player_receivePay', 'v1971', ctc0, v1971);
          await stdlib.mapSet(map0, v1864, undefined /* Nothing */);
          const txn9 = await (ctc.sendrecv({
            args: [v1185, v1186, v1187, v1196, v1199, v1840, v1842, v1843, v1851],
            evt_cnt: 0,
            funcNum: 27,
            lct: v1866,
            onlyIf: true,
            out_tys: [],
            pay: [v1840, []],
            sim_p: (async (txn9) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1980, time: v1979, didSend: v903, from: v1978 } = txn9;
              
              const v1982 = stdlib.add(v1851, v1840);
              sim_r.txns.push({
                amt: v1840,
                kind: 'to',
                tok: undefined /* Nothing */
                });
              if (v1842) {
                const v1992 = v1186;
                const v1993 = v1196;
                const v1994 = v1979;
                const v2001 = v1982;
                
                if (await (async () => {
                  const v2005 = stdlib.addressEq(v1993, v1196);
                  const v2006 = stdlib.gt(v1992, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
                  const v2007 = v2005 ? v2006 : false;
                  
                  return v2007;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v2063 = stdlib.sub(v2001, v2001);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v1993,
                    tok: undefined /* Nothing */
                    });
                  const v2064 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
                  const cv1842 = true;
                  const cv1843 = v2064;
                  const cv1844 = v1994;
                  const cv1851 = v2063;
                  
                  await (async () => {
                    const v1842 = cv1842;
                    const v1843 = cv1843;
                    const v1844 = cv1844;
                    const v1851 = cv1851;
                    
                    if (await (async () => {
                      const v1854 = stdlib.gt(v1843, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
                      
                      return v1854;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v2065 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
                      const cv1199 = v2065;
                      const cv1200 = v1844;
                      const cv1207 = v1851;
                      
                      await (async () => {
                        const v1199 = cv1199;
                        const v1200 = cv1200;
                        const v1207 = cv1207;
                        
                        if (await (async () => {
                          const v1210 = stdlib.gt(v1199, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
                          
                          return v1210;})()) {
                          const v1211 = ['Joining', null];
                          null;
                          sim_r.isHalt = false;
                          }
                        else {
                          const v2066 = ['Finished', null];
                          null;
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }})();}})();}}
              else {
                const v1989 = stdlib.sub(v1982, v1982);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1185,
                  tok: undefined /* Nothing */
                  });
                await stdlib.simMapSet(sim_r, 2, v1185, undefined /* Nothing */);
                const v1991 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:259:53:decimal', stdlib.UInt_max, '1'));
                const cv1842 = true;
                const cv1843 = v1991;
                const cv1844 = v1979;
                const cv1851 = v1989;
                
                await (async () => {
                  const v1842 = cv1842;
                  const v1843 = cv1843;
                  const v1844 = cv1844;
                  const v1851 = cv1851;
                  
                  if (await (async () => {
                    const v1854 = stdlib.gt(v1843, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
                    
                    return v1854;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v2065 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
                    const cv1199 = v2065;
                    const cv1200 = v1844;
                    const cv1207 = v1851;
                    
                    await (async () => {
                      const v1199 = cv1199;
                      const v1200 = cv1200;
                      const v1207 = cv1207;
                      
                      if (await (async () => {
                        const v1210 = stdlib.gt(v1199, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
                        
                        return v1210;})()) {
                        const v1211 = ['Joining', null];
                        null;
                        sim_r.isHalt = false;
                        }
                      else {
                        const v2066 = ['Finished', null];
                        null;
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }})();}})();}
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc7, ctc2, ctc2, ctc7, ctc2, ctc2, ctc6, ctc2, ctc2],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1980, time: v1979, didSend: v903, from: v1978 } = txn9;
          const v1982 = stdlib.add(v1851, v1840);
          ;
          const v1983 = stdlib.addressEq(v1196, v1978);
          stdlib.assert(v1983, {
            at: './index.rsh:253:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Game'
            });
          if (v1842) {
            let v1992 = v1186;
            let v1993 = v1196;
            let v1994 = v1979;
            let v2001 = v1982;
            
            while (await (async () => {
              const v2005 = stdlib.addressEq(v1993, v1196);
              const v2006 = stdlib.gt(v1992, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
              const v2007 = v2005 ? v2006 : false;
              
              return v2007;})()) {
              const txn10 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 29,
                out_tys: [ctc4],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v2018], secs: v2020, time: v2019, didSend: v988, from: v2017 } = txn10;
              undefined /* setApiDetails */;
              ;
              const v2022 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2017), null);
              const v2023 = {
                None: 0,
                Some: 1
                }[v2022[0]];
              const v2024 = stdlib.eq(v2023, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v2024, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./index.rsh:269:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
                msg: 'Participant is not in the game',
                who: 'Game'
                });
              const v2026 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2017), null);
              const v2027 = {
                None: 0,
                Some: 1
                }[v2026[0]];
              const v2028 = stdlib.eq(v2027, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              if (v2028) {
                const v2029 = null;
                await txn10.getOutput('Player_receivePay', 'v2029', ctc0, v2029);
                await stdlib.mapSet(map2, v2017, undefined /* Nothing */);
                await stdlib.mapSet(map0, v2017, undefined /* Nothing */);
                const v2041 = stdlib.sub(v2001, v2001);
                ;
                const v2042 = stdlib.safeSub(v1992, stdlib.checkedBigNumberify('./index.rsh:276:35:decimal', stdlib.UInt_max, '1'));
                const cv1992 = v2042;
                const cv1993 = v2017;
                const cv1994 = v2019;
                const cv2001 = v2041;
                
                v1992 = cv1992;
                v1993 = cv1993;
                v1994 = cv1994;
                v2001 = cv2001;
                
                continue;}
              else {
                const v2047 = null;
                await txn10.getOutput('Player_receivePay', 'v2047', ctc0, v2047);
                await stdlib.mapSet(map0, v2017, undefined /* Nothing */);
                const v2054 = stdlib.safeSub(v1992, stdlib.checkedBigNumberify('./index.rsh:280:37:decimal', stdlib.UInt_max, '1'));
                const cv1992 = v2054;
                const cv1993 = v1993;
                const cv1994 = v2019;
                const cv2001 = v2001;
                
                v1992 = cv1992;
                v1993 = cv1993;
                v1994 = cv1994;
                v2001 = cv2001;
                
                continue;}
              
              }
            const v2063 = stdlib.sub(v2001, v2001);
            ;
            const v2064 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
            const cv1842 = true;
            const cv1843 = v2064;
            const cv1844 = v1994;
            const cv1851 = v2063;
            
            v1842 = cv1842;
            v1843 = cv1843;
            v1844 = cv1844;
            v1851 = cv1851;
            
            continue;}
          else {
            const v1989 = stdlib.sub(v1982, v1982);
            ;
            await stdlib.mapSet(map2, v1185, undefined /* Nothing */);
            const v1991 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:259:53:decimal', stdlib.UInt_max, '1'));
            const cv1842 = true;
            const cv1843 = v1991;
            const cv1844 = v1979;
            const cv1851 = v1989;
            
            v1842 = cv1842;
            v1843 = cv1843;
            v1844 = cv1844;
            v1851 = cv1851;
            
            continue;}
          
          }
        
        }
      const v2065 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
      const cv1199 = v2065;
      const cv1200 = v1844;
      const cv1207 = v1851;
      
      v1199 = cv1199;
      v1200 = cv1200;
      v1207 = cv1207;
      
      continue;}
    
    
    
    
    
    
    
    }
  const v2066 = ['Finished', null];
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
  
  
  const [v1185, v1186, v1187, v1196, v1199, v1240, v1310, v1319] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2]);
  const v1362 = ctc.selfAddress();
  const v1364 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:101:9:application',
    fs: ['at ./index.rsh:101:9:application call to [unknown function] (defined at: ./index.rsh:101:9:function exp)', 'at ./index.rsh:191:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'in',
    who: 'Player_getRole'
    });
  const v1367 = stdlib.addressEq(v1362, v1185);
  const v1368 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1362), null);
  const v1369 = {
    None: 0,
    Some: 1
    }[v1368[0]];
  const v1370 = stdlib.eq(v1369, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1371 = v1367 ? v1370 : false;
  stdlib.assert(v1371, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:103:32:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:9:application call to [unknown function] (defined at: ./index.rsh:103:24:function exp)', 'at ./index.rsh:101:9:application call to [unknown function] (defined at: ./index.rsh:101:9:function exp)', 'at ./index.rsh:191:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_getRole'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1196, v1199, v1240, v1310, v1319, v1364],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:101:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1374], secs: v1376, time: v1375, didSend: v502, from: v1373 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_getRole"
        });
      ;
      const v1377 = v1374[stdlib.checkedBigNumberify('./index.rsh:101:17:array', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1373), null);
      const v1384 = null;
      const v1385 = await txn1.getOutput('Player_getRole', 'v1384', ctc0, v1384);
      
      await stdlib.simMapSet(sim_r, 1, v1373, v1377);
      const v3544 = stdlib.checkedBigNumberify('./index.rsh:194:22:decimal', stdlib.UInt_max, '0');
      const v3546 = v1319;
      const v3547 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:194:22:decimal', stdlib.UInt_max, '0'), v1240);
      if (v3547) {
        sim_r.isHalt = false;
        }
      else {
        const v3548 = ['CheckingWin', null];
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
  const {data: [v1374], secs: v1376, time: v1375, didSend: v502, from: v1373 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1377 = v1374[stdlib.checkedBigNumberify('./index.rsh:101:17:array', stdlib.UInt_max, '0')];
  const v1378 = stdlib.addressEq(v1373, v1185);
  const v1379 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1373), null);
  const v1380 = {
    None: 0,
    Some: 1
    }[v1379[0]];
  const v1381 = stdlib.eq(v1380, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1382 = v1378 ? v1381 : false;
  stdlib.assert(v1382, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:104:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_getRole'
    });
  const v1384 = null;
  const v1385 = await txn1.getOutput('Player_getRole', 'v1384', ctc0, v1384);
  stdlib.protect(ctc0, await interact.out(v1374, v1385), {
    at: './index.rsh:101:9:application',
    fs: ['at ./index.rsh:101:9:application call to [unknown function] (defined at: ./index.rsh:101:9:function exp)', 'at ./index.rsh:105:10:application call to "k" (defined at: ./index.rsh:101:9:function exp)', 'at ./index.rsh:191:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'out',
    who: 'Player_getRole'
    });
  
  await stdlib.mapSet(map1, v1373, v1377);
  const v3544 = stdlib.checkedBigNumberify('./index.rsh:194:22:decimal', stdlib.UInt_max, '0');
  const v3546 = v1319;
  const v3547 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:194:22:decimal', stdlib.UInt_max, '0'), v1240);
  if (v3547) {
    return;
    }
  else {
    const v3548 = ['CheckingWin', null];
    null;
    return;
    }
  
  
  };
export async function _Player_getRole32(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_getRole32 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_getRole32 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1185, v1186, v1187, v1196, v1199, v1240, v1310, v1391, v1399] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1404 = ctc.selfAddress();
  const v1406 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:198:34:application call to [unknown function] (defined at: ./index.rsh:198:34:function exp)', 'at ./index.rsh:198:34:application call to [unknown function] (defined at: ./index.rsh:198:34:function exp)'],
    msg: 'in',
    who: 'Player_getRole'
    });
  const v1409 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1404), null);
  const v1410 = {
    None: 0,
    Some: 1
    }[v1409[0]];
  const v1411 = stdlib.eq(v1410, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1411, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:198:34:application call to [unknown function] (defined at: ./index.rsh:198:34:function exp)', 'at ./index.rsh:198:34:application call to [unknown function] (defined at: ./index.rsh:198:34:function exp)'],
    msg: null,
    who: 'Player_getRole'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1196, v1199, v1240, v1310, v1391, v1399, v1406],
    evt_cnt: 1,
    funcNum: 31,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:198:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1417], secs: v1419, time: v1418, didSend: v612, from: v1416 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_getRole"
        });
      ;
      const v1421 = v1417[stdlib.checkedBigNumberify('./index.rsh:198:10:spread', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1416), null);
      const v1427 = null;
      const v1428 = await txn1.getOutput('Player_getRole', 'v1427', ctc0, v1427);
      
      await stdlib.simMapSet(sim_r, 1, v1416, v1421);
      const v1434 = stdlib.safeAdd(v1391, stdlib.checkedBigNumberify('./index.rsh:203:31:decimal', stdlib.UInt_max, '1'));
      const v3807 = v1434;
      const v3809 = v1399;
      const v3810 = stdlib.lt(v1434, v1240);
      if (v3810) {
        sim_r.isHalt = false;
        }
      else {
        const v3811 = ['CheckingWin', null];
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
  const {data: [v1417], secs: v1419, time: v1418, didSend: v612, from: v1416 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1421 = v1417[stdlib.checkedBigNumberify('./index.rsh:198:10:spread', stdlib.UInt_max, '0')];
  const v1422 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1416), null);
  const v1423 = {
    None: 0,
    Some: 1
    }[v1422[0]];
  const v1424 = stdlib.eq(v1423, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1424, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:18:application call to [unknown function] (defined at: ./index.rsh:200:18:function exp)'],
    msg: null,
    who: 'Player_getRole'
    });
  const v1427 = null;
  const v1428 = await txn1.getOutput('Player_getRole', 'v1427', ctc0, v1427);
  if (v612) {
    stdlib.protect(ctc0, await interact.out(v1417, v1428), {
      at: './index.rsh:198:11:application',
      fs: ['at ./index.rsh:198:11:application call to [unknown function] (defined at: ./index.rsh:198:11:function exp)', 'at ./index.rsh:201:10:application call to "k" (defined at: ./index.rsh:200:18:function exp)', 'at ./index.rsh:200:18:application call to [unknown function] (defined at: ./index.rsh:200:18:function exp)'],
      msg: 'out',
      who: 'Player_getRole'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map1, v1416, v1421);
  const v1434 = stdlib.safeAdd(v1391, stdlib.checkedBigNumberify('./index.rsh:203:31:decimal', stdlib.UInt_max, '1'));
  const v3807 = v1434;
  const v3809 = v1399;
  const v3810 = stdlib.lt(v1434, v1240);
  if (v3810) {
    return;
    }
  else {
    const v3811 = ['CheckingWin', null];
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
  
  
  const [v1185, v1186, v1187, v1196, v1199, v1207] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2]);
  const v1212 = ctc.selfAddress();
  const v1214 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:82:9:application',
    fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:9:function exp)', 'at ./index.rsh:154:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'in',
    who: 'Player_join'
    });
  const v1215 = stdlib.addressEq(v1212, v1185);
  const v1216 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1212), null);
  const v1217 = {
    None: 0,
    Some: 1
    }[v1216[0]];
  const v1218 = stdlib.eq(v1217, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1219 = v1218 ? false : true;
  const v1220 = v1215 ? v1219 : false;
  stdlib.assert(v1220, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:84:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:84:20:function exp)', 'at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:9:function exp)', 'at ./index.rsh:154:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1196, v1199, v1207, v1214],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:82:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1223], secs: v1225, time: v1224, didSend: v106, from: v1222 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_join"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1222), null);
      const v1233 = null;
      const v1234 = await txn1.getOutput('Player_join', 'v1233', ctc0, v1233);
      
      await stdlib.simMapSet(sim_r, 0, v1222, null);
      const v4070 = stdlib.checkedBigNumberify('./index.rsh:157:22:decimal', stdlib.UInt_max, '0');
      const v4072 = v1207;
      const v4073 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:157:22:decimal', stdlib.UInt_max, '0'), v1186);
      if (v4073) {
        sim_r.isHalt = false;
        }
      else {
        const v4074 = ['Wagering', null];
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
  const {data: [v1223], secs: v1225, time: v1224, didSend: v106, from: v1222 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1226 = stdlib.addressEq(v1222, v1185);
  const v1227 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1222), null);
  const v1228 = {
    None: 0,
    Some: 1
    }[v1227[0]];
  const v1229 = stdlib.eq(v1228, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1230 = v1229 ? false : true;
  const v1231 = v1226 ? v1230 : false;
  stdlib.assert(v1231, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:154:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  const v1233 = null;
  const v1234 = await txn1.getOutput('Player_join', 'v1233', ctc0, v1233);
  stdlib.protect(ctc0, await interact.out(v1223, v1234), {
    at: './index.rsh:82:9:application',
    fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:9:function exp)', 'at ./index.rsh:86:10:application call to "k" (defined at: ./index.rsh:82:9:function exp)', 'at ./index.rsh:154:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'out',
    who: 'Player_join'
    });
  
  await stdlib.mapSet(map0, v1222, null);
  const v4070 = stdlib.checkedBigNumberify('./index.rsh:157:22:decimal', stdlib.UInt_max, '0');
  const v4072 = v1207;
  const v4073 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:157:22:decimal', stdlib.UInt_max, '0'), v1186);
  if (v4073) {
    return;
    }
  else {
    const v4074 = ['Wagering', null];
    null;
    return;
    }
  
  
  };
export async function _Player_join34(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_join34 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_join34 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1185, v1186, v1187, v1196, v1199, v1240, v1248] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '34'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2]);
  const v1253 = ctc.selfAddress();
  const v1255 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:161:27:application call to [unknown function] (defined at: ./index.rsh:161:27:function exp)', 'at ./index.rsh:161:27:application call to [unknown function] (defined at: ./index.rsh:161:27:function exp)'],
    msg: 'in',
    who: 'Player_join'
    });
  const v1256 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1253), null);
  const v1257 = {
    None: 0,
    Some: 1
    }[v1256[0]];
  const v1258 = stdlib.eq(v1257, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1259 = v1258 ? false : true;
  stdlib.assert(v1259, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:27:application call to [unknown function] (defined at: ./index.rsh:161:27:function exp)', 'at ./index.rsh:161:27:application call to [unknown function] (defined at: ./index.rsh:161:27:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1196, v1199, v1240, v1248, v1255],
    evt_cnt: 1,
    funcNum: 33,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:161:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1264], secs: v1266, time: v1265, didSend: v215, from: v1263 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_join"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1263), null);
      const v1273 = null;
      const v1274 = await txn1.getOutput('Player_join', 'v1273', ctc0, v1273);
      
      await stdlib.simMapSet(sim_r, 0, v1263, null);
      const v1280 = stdlib.safeAdd(v1240, stdlib.checkedBigNumberify('./index.rsh:166:33:decimal', stdlib.UInt_max, '1'));
      const v4395 = v1280;
      const v4397 = v1248;
      const v4398 = stdlib.lt(v1280, v1186);
      if (v4398) {
        sim_r.isHalt = false;
        }
      else {
        const v4399 = ['Wagering', null];
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
  const {data: [v1264], secs: v1266, time: v1265, didSend: v215, from: v1263 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1268 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1263), null);
  const v1269 = {
    None: 0,
    Some: 1
    }[v1268[0]];
  const v1270 = stdlib.eq(v1269, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1271 = v1270 ? false : true;
  stdlib.assert(v1271, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:163:20:application call to [unknown function] (defined at: ./index.rsh:163:20:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  const v1273 = null;
  const v1274 = await txn1.getOutput('Player_join', 'v1273', ctc0, v1273);
  if (v215) {
    stdlib.protect(ctc0, await interact.out(v1264, v1274), {
      at: './index.rsh:161:11:application',
      fs: ['at ./index.rsh:161:11:application call to [unknown function] (defined at: ./index.rsh:161:11:function exp)', 'at ./index.rsh:164:10:application call to "k" (defined at: ./index.rsh:163:20:function exp)', 'at ./index.rsh:163:20:application call to [unknown function] (defined at: ./index.rsh:163:20:function exp)'],
      msg: 'out',
      who: 'Player_join'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v1263, null);
  const v1280 = stdlib.safeAdd(v1240, stdlib.checkedBigNumberify('./index.rsh:166:33:decimal', stdlib.UInt_max, '1'));
  const v4395 = v1280;
  const v4397 = v1248;
  const v4398 = stdlib.lt(v1280, v1186);
  if (v4398) {
    return;
    }
  else {
    const v4399 = ['Wagering', null];
    null;
    return;
    }
  
  
  };
export async function _Player_receivePay14(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay14 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay14 expects to receive an interact object as its second argument.`));}
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
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([]);
  
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
  
  
  const [v1185, v1186, v1187, v1196, v1199, v1542, v1544, v1545, v1553] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc5, ctc2, ctc2]);
  const v1557 = ctc.selfAddress();
  const v1559 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:133:9:application',
    fs: ['at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:251:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1560 = stdlib.addressEq(v1557, v1185);
  const v1561 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1557), null);
  const v1562 = {
    None: 0,
    Some: 1
    }[v1561[0]];
  const v1563 = stdlib.eq(v1562, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1564 = v1560 ? v1563 : false;
  stdlib.assert(v1564, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:135:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:135:20:function exp)', 'at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:251:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1196, v1199, v1542, v1544, v1545, v1553, v1559],
    evt_cnt: 1,
    funcNum: 13,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:133:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1567], secs: v1569, time: v1568, didSend: v855, from: v1566 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1566), null);
      const v1576 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1566), null);
      const v1577 = {
        None: 0,
        Some: 1
        }[v1576[0]];
      const v1578 = stdlib.eq(v1577, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1578) {
        const v1579 = null;
        const v1580 = await txn1.getOutput('Player_receivePay', 'v1579', ctc0, v1579);
        
        await stdlib.simMapSet(sim_r, 0, v1566, undefined /* Nothing */);
        sim_r.isHalt = false;
        }
      else {
        const v1673 = null;
        const v1674 = await txn1.getOutput('Player_receivePay', 'v1673', ctc0, v1673);
        
        await stdlib.simMapSet(sim_r, 0, v1566, undefined /* Nothing */);
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc5, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v1567], secs: v1569, time: v1568, didSend: v855, from: v1566 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1570 = stdlib.addressEq(v1566, v1185);
  const v1571 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1566), null);
  const v1572 = {
    None: 0,
    Some: 1
    }[v1571[0]];
  const v1573 = stdlib.eq(v1572, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1574 = v1570 ? v1573 : false;
  stdlib.assert(v1574, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:136:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_receivePay'
    });
  const v1576 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1566), null);
  const v1577 = {
    None: 0,
    Some: 1
    }[v1576[0]];
  const v1578 = stdlib.eq(v1577, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v1578) {
    const v1579 = null;
    const v1580 = await txn1.getOutput('Player_receivePay', 'v1579', ctc0, v1579);
    stdlib.protect(ctc0, await interact.out(v1567, v1580), {
      at: './index.rsh:133:9:application',
      fs: ['at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:139:12:application call to "k" (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:251:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    
    await stdlib.mapSet(map0, v1566, undefined /* Nothing */);
    return;
    }
  else {
    const v1673 = null;
    const v1674 = await txn1.getOutput('Player_receivePay', 'v1673', ctc0, v1673);
    stdlib.protect(ctc0, await interact.out(v1567, v1674), {
      at: './index.rsh:133:9:application',
      fs: ['at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:144:12:application call to "k" (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:251:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    
    await stdlib.mapSet(map0, v1566, undefined /* Nothing */);
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
  
  
  const [v1185, v1186, v1187, v1196, v1199, v1542, v1545, v1600, v1601, v1609] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc4, ctc2]);
  const v1616 = ctc.selfAddress();
  const v1618 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:268:37:application call to [unknown function] (defined at: ./index.rsh:268:37:function exp)', 'at ./index.rsh:268:37:application call to [unknown function] (defined at: ./index.rsh:268:37:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1619 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1616), null);
  const v1620 = {
    None: 0,
    Some: 1
    }[v1619[0]];
  const v1621 = stdlib.eq(v1620, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1621, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:269:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:268:37:application call to [unknown function] (defined at: ./index.rsh:268:37:function exp)', 'at ./index.rsh:268:37:application call to [unknown function] (defined at: ./index.rsh:268:37:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1196, v1199, v1542, v1545, v1600, v1601, v1609, v1618],
    evt_cnt: 1,
    funcNum: 16,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:268:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1626], secs: v1628, time: v1627, didSend: v988, from: v1625 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1625), null);
      const v1634 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1625), null);
      const v1635 = {
        None: 0,
        Some: 1
        }[v1634[0]];
      const v1636 = stdlib.eq(v1635, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1636) {
        const v1637 = null;
        const v1638 = await txn1.getOutput('Player_receivePay', 'v1637', ctc0, v1637);
        
        await stdlib.simMapSet(sim_r, 2, v1625, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 0, v1625, undefined /* Nothing */);
        const v1649 = stdlib.sub(v1609, v1609);
        sim_r.txns.push({
          kind: 'from',
          to: v1625,
          tok: undefined /* Nothing */
          });
        const v1650 = stdlib.safeSub(v1600, stdlib.checkedBigNumberify('./index.rsh:276:35:decimal', stdlib.UInt_max, '1'));
        const v4720 = v1650;
        const v4721 = v1625;
        const v4723 = v1649;
        const v4724 = stdlib.addressEq(v1625, v1196);
        const v4725 = stdlib.gt(v1650, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
        const v4726 = v4724 ? v4725 : false;
        if (v4726) {
          sim_r.isHalt = false;
          }
        else {
          const v4727 = stdlib.sub(v1649, v1649);
          sim_r.txns.push({
            kind: 'from',
            to: v1625,
            tok: undefined /* Nothing */
            });
          const v4728 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
          const v4729 = true;
          const v4730 = v4728;
          const v4732 = v4727;
          const v4733 = stdlib.gt(v4728, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v4733) {
            sim_r.isHalt = false;
            }
          else {
            const v4734 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
            const v4735 = v4734;
            const v4737 = v4727;
            const v4738 = stdlib.gt(v4734, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4738) {
              const v4739 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4740 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1655 = null;
        const v1656 = await txn1.getOutput('Player_receivePay', 'v1655', ctc0, v1655);
        
        await stdlib.simMapSet(sim_r, 0, v1625, undefined /* Nothing */);
        const v1662 = stdlib.safeSub(v1600, stdlib.checkedBigNumberify('./index.rsh:280:37:decimal', stdlib.UInt_max, '1'));
        const v4741 = v1662;
        const v4742 = v1601;
        const v4744 = v1609;
        const v4745 = stdlib.addressEq(v1601, v1196);
        const v4746 = stdlib.gt(v1662, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
        const v4747 = v4745 ? v4746 : false;
        if (v4747) {
          sim_r.isHalt = false;
          }
        else {
          const v4748 = stdlib.sub(v1609, v1609);
          sim_r.txns.push({
            kind: 'from',
            to: v1601,
            tok: undefined /* Nothing */
            });
          const v4749 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
          const v4750 = true;
          const v4751 = v4749;
          const v4753 = v4748;
          const v4754 = stdlib.gt(v4749, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v4754) {
            sim_r.isHalt = false;
            }
          else {
            const v4755 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
            const v4756 = v4755;
            const v4758 = v4748;
            const v4759 = stdlib.gt(v4755, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4759) {
              const v4760 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4761 = ['Finished', null];
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
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc4, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1626], secs: v1628, time: v1627, didSend: v988, from: v1625 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1630 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1625), null);
  const v1631 = {
    None: 0,
    Some: 1
    }[v1630[0]];
  const v1632 = stdlib.eq(v1631, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1632, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:269:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  const v1634 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1625), null);
  const v1635 = {
    None: 0,
    Some: 1
    }[v1634[0]];
  const v1636 = stdlib.eq(v1635, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v1636) {
    const v1637 = null;
    const v1638 = await txn1.getOutput('Player_receivePay', 'v1637', ctc0, v1637);
    if (v988) {
      stdlib.protect(ctc0, await interact.out(v1626, v1638), {
        at: './index.rsh:268:15:application',
        fs: ['at ./index.rsh:268:15:application call to [unknown function] (defined at: ./index.rsh:268:15:function exp)', 'at ./index.rsh:272:16:application call to "k" (defined at: ./index.rsh:270:23:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map2, v1625, undefined /* Nothing */);
    await stdlib.mapSet(map0, v1625, undefined /* Nothing */);
    const v1649 = stdlib.sub(v1609, v1609);
    ;
    const v1650 = stdlib.safeSub(v1600, stdlib.checkedBigNumberify('./index.rsh:276:35:decimal', stdlib.UInt_max, '1'));
    const v4720 = v1650;
    const v4721 = v1625;
    const v4723 = v1649;
    const v4724 = stdlib.addressEq(v1625, v1196);
    const v4725 = stdlib.gt(v1650, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
    const v4726 = v4724 ? v4725 : false;
    if (v4726) {
      return;
      }
    else {
      const v4727 = stdlib.sub(v1649, v1649);
      ;
      const v4728 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
      const v4729 = true;
      const v4730 = v4728;
      const v4732 = v4727;
      const v4733 = stdlib.gt(v4728, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v4733) {
        return;
        }
      else {
        const v4734 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
        const v4735 = v4734;
        const v4737 = v4727;
        const v4738 = stdlib.gt(v4734, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4738) {
          const v4739 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4740 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1655 = null;
    const v1656 = await txn1.getOutput('Player_receivePay', 'v1655', ctc0, v1655);
    if (v988) {
      stdlib.protect(ctc0, await interact.out(v1626, v1656), {
        at: './index.rsh:268:15:application',
        fs: ['at ./index.rsh:268:15:application call to [unknown function] (defined at: ./index.rsh:268:15:function exp)', 'at ./index.rsh:278:16:application call to "k" (defined at: ./index.rsh:270:23:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v1625, undefined /* Nothing */);
    const v1662 = stdlib.safeSub(v1600, stdlib.checkedBigNumberify('./index.rsh:280:37:decimal', stdlib.UInt_max, '1'));
    const v4741 = v1662;
    const v4742 = v1601;
    const v4744 = v1609;
    const v4745 = stdlib.addressEq(v1601, v1196);
    const v4746 = stdlib.gt(v1662, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
    const v4747 = v4745 ? v4746 : false;
    if (v4747) {
      return;
      }
    else {
      const v4748 = stdlib.sub(v1609, v1609);
      ;
      const v4749 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
      const v4750 = true;
      const v4751 = v4749;
      const v4753 = v4748;
      const v4754 = stdlib.gt(v4749, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v4754) {
        return;
        }
      else {
        const v4755 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
        const v4756 = v4755;
        const v4758 = v4748;
        const v4759 = stdlib.gt(v4755, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4759) {
          const v4760 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4761 = ['Finished', null];
          null;
          return;
          }}}}
  
  
  };
export async function _Player_receivePay20(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay20 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay20 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1185, v1186, v1187, v1196, v1199, v1542, v1545, v1694, v1695, v1703] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc4, ctc2]);
  const v1710 = ctc.selfAddress();
  const v1712 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:268:37:application call to [unknown function] (defined at: ./index.rsh:268:37:function exp)', 'at ./index.rsh:268:37:application call to [unknown function] (defined at: ./index.rsh:268:37:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1713 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1710), null);
  const v1714 = {
    None: 0,
    Some: 1
    }[v1713[0]];
  const v1715 = stdlib.eq(v1714, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1715, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:269:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:268:37:application call to [unknown function] (defined at: ./index.rsh:268:37:function exp)', 'at ./index.rsh:268:37:application call to [unknown function] (defined at: ./index.rsh:268:37:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1196, v1199, v1542, v1545, v1694, v1695, v1703, v1712],
    evt_cnt: 1,
    funcNum: 19,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:268:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1720], secs: v1722, time: v1721, didSend: v988, from: v1719 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1719), null);
      const v1728 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1719), null);
      const v1729 = {
        None: 0,
        Some: 1
        }[v1728[0]];
      const v1730 = stdlib.eq(v1729, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1730) {
        const v1731 = null;
        const v1732 = await txn1.getOutput('Player_receivePay', 'v1731', ctc0, v1731);
        
        await stdlib.simMapSet(sim_r, 2, v1719, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 0, v1719, undefined /* Nothing */);
        const v1743 = stdlib.sub(v1703, v1703);
        sim_r.txns.push({
          kind: 'from',
          to: v1719,
          tok: undefined /* Nothing */
          });
        const v1744 = stdlib.safeSub(v1694, stdlib.checkedBigNumberify('./index.rsh:276:35:decimal', stdlib.UInt_max, '1'));
        const v4762 = v1744;
        const v4763 = v1719;
        const v4765 = v1743;
        const v4766 = stdlib.addressEq(v1719, v1196);
        const v4767 = stdlib.gt(v1744, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
        const v4768 = v4766 ? v4767 : false;
        if (v4768) {
          sim_r.isHalt = false;
          }
        else {
          const v4769 = stdlib.sub(v1743, v1743);
          sim_r.txns.push({
            kind: 'from',
            to: v1719,
            tok: undefined /* Nothing */
            });
          const v4770 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
          const v4771 = true;
          const v4772 = v4770;
          const v4774 = v4769;
          const v4775 = stdlib.gt(v4770, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v4775) {
            sim_r.isHalt = false;
            }
          else {
            const v4776 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
            const v4777 = v4776;
            const v4779 = v4769;
            const v4780 = stdlib.gt(v4776, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4780) {
              const v4781 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4782 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1749 = null;
        const v1750 = await txn1.getOutput('Player_receivePay', 'v1749', ctc0, v1749);
        
        await stdlib.simMapSet(sim_r, 0, v1719, undefined /* Nothing */);
        const v1756 = stdlib.safeSub(v1694, stdlib.checkedBigNumberify('./index.rsh:280:37:decimal', stdlib.UInt_max, '1'));
        const v4783 = v1756;
        const v4784 = v1695;
        const v4786 = v1703;
        const v4787 = stdlib.addressEq(v1695, v1196);
        const v4788 = stdlib.gt(v1756, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
        const v4789 = v4787 ? v4788 : false;
        if (v4789) {
          sim_r.isHalt = false;
          }
        else {
          const v4790 = stdlib.sub(v1703, v1703);
          sim_r.txns.push({
            kind: 'from',
            to: v1695,
            tok: undefined /* Nothing */
            });
          const v4791 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
          const v4792 = true;
          const v4793 = v4791;
          const v4795 = v4790;
          const v4796 = stdlib.gt(v4791, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v4796) {
            sim_r.isHalt = false;
            }
          else {
            const v4797 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
            const v4798 = v4797;
            const v4800 = v4790;
            const v4801 = stdlib.gt(v4797, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4801) {
              const v4802 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4803 = ['Finished', null];
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
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc4, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1720], secs: v1722, time: v1721, didSend: v988, from: v1719 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1724 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1719), null);
  const v1725 = {
    None: 0,
    Some: 1
    }[v1724[0]];
  const v1726 = stdlib.eq(v1725, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1726, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:269:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  const v1728 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1719), null);
  const v1729 = {
    None: 0,
    Some: 1
    }[v1728[0]];
  const v1730 = stdlib.eq(v1729, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v1730) {
    const v1731 = null;
    const v1732 = await txn1.getOutput('Player_receivePay', 'v1731', ctc0, v1731);
    if (v988) {
      stdlib.protect(ctc0, await interact.out(v1720, v1732), {
        at: './index.rsh:268:15:application',
        fs: ['at ./index.rsh:268:15:application call to [unknown function] (defined at: ./index.rsh:268:15:function exp)', 'at ./index.rsh:272:16:application call to "k" (defined at: ./index.rsh:270:23:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map2, v1719, undefined /* Nothing */);
    await stdlib.mapSet(map0, v1719, undefined /* Nothing */);
    const v1743 = stdlib.sub(v1703, v1703);
    ;
    const v1744 = stdlib.safeSub(v1694, stdlib.checkedBigNumberify('./index.rsh:276:35:decimal', stdlib.UInt_max, '1'));
    const v4762 = v1744;
    const v4763 = v1719;
    const v4765 = v1743;
    const v4766 = stdlib.addressEq(v1719, v1196);
    const v4767 = stdlib.gt(v1744, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
    const v4768 = v4766 ? v4767 : false;
    if (v4768) {
      return;
      }
    else {
      const v4769 = stdlib.sub(v1743, v1743);
      ;
      const v4770 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
      const v4771 = true;
      const v4772 = v4770;
      const v4774 = v4769;
      const v4775 = stdlib.gt(v4770, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v4775) {
        return;
        }
      else {
        const v4776 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
        const v4777 = v4776;
        const v4779 = v4769;
        const v4780 = stdlib.gt(v4776, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4780) {
          const v4781 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4782 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1749 = null;
    const v1750 = await txn1.getOutput('Player_receivePay', 'v1749', ctc0, v1749);
    if (v988) {
      stdlib.protect(ctc0, await interact.out(v1720, v1750), {
        at: './index.rsh:268:15:application',
        fs: ['at ./index.rsh:268:15:application call to [unknown function] (defined at: ./index.rsh:268:15:function exp)', 'at ./index.rsh:278:16:application call to "k" (defined at: ./index.rsh:270:23:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v1719, undefined /* Nothing */);
    const v1756 = stdlib.safeSub(v1694, stdlib.checkedBigNumberify('./index.rsh:280:37:decimal', stdlib.UInt_max, '1'));
    const v4783 = v1756;
    const v4784 = v1695;
    const v4786 = v1703;
    const v4787 = stdlib.addressEq(v1695, v1196);
    const v4788 = stdlib.gt(v1756, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
    const v4789 = v4787 ? v4788 : false;
    if (v4789) {
      return;
      }
    else {
      const v4790 = stdlib.sub(v1703, v1703);
      ;
      const v4791 = stdlib.safeSub(v1545, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
      const v4792 = true;
      const v4793 = v4791;
      const v4795 = v4790;
      const v4796 = stdlib.gt(v4791, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v4796) {
        return;
        }
      else {
        const v4797 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
        const v4798 = v4797;
        const v4800 = v4790;
        const v4801 = stdlib.gt(v4797, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4801) {
          const v4802 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4803 = ['Finished', null];
          null;
          return;
          }}}}
  
  
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
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([]);
  
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
  
  
  const [v1185, v1186, v1187, v1196, v1199, v1840, v1842, v1843, v1851] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '24'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc5, ctc2, ctc2]);
  const v1855 = ctc.selfAddress();
  const v1857 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:133:9:application',
    fs: ['at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:251:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1858 = stdlib.addressEq(v1855, v1185);
  const v1859 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1855), null);
  const v1860 = {
    None: 0,
    Some: 1
    }[v1859[0]];
  const v1861 = stdlib.eq(v1860, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1862 = v1858 ? v1861 : false;
  stdlib.assert(v1862, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:135:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:135:20:function exp)', 'at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:251:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1196, v1199, v1840, v1842, v1843, v1851, v1857],
    evt_cnt: 1,
    funcNum: 23,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:133:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1865], secs: v1867, time: v1866, didSend: v855, from: v1864 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1864), null);
      const v1874 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1864), null);
      const v1875 = {
        None: 0,
        Some: 1
        }[v1874[0]];
      const v1876 = stdlib.eq(v1875, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1876) {
        const v1877 = null;
        const v1878 = await txn1.getOutput('Player_receivePay', 'v1877', ctc0, v1877);
        
        await stdlib.simMapSet(sim_r, 0, v1864, undefined /* Nothing */);
        sim_r.isHalt = false;
        }
      else {
        const v1971 = null;
        const v1972 = await txn1.getOutput('Player_receivePay', 'v1971', ctc0, v1971);
        
        await stdlib.simMapSet(sim_r, 0, v1864, undefined /* Nothing */);
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc5, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v1865], secs: v1867, time: v1866, didSend: v855, from: v1864 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1868 = stdlib.addressEq(v1864, v1185);
  const v1869 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1864), null);
  const v1870 = {
    None: 0,
    Some: 1
    }[v1869[0]];
  const v1871 = stdlib.eq(v1870, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1872 = v1868 ? v1871 : false;
  stdlib.assert(v1872, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:136:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_receivePay'
    });
  const v1874 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1864), null);
  const v1875 = {
    None: 0,
    Some: 1
    }[v1874[0]];
  const v1876 = stdlib.eq(v1875, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v1876) {
    const v1877 = null;
    const v1878 = await txn1.getOutput('Player_receivePay', 'v1877', ctc0, v1877);
    stdlib.protect(ctc0, await interact.out(v1865, v1878), {
      at: './index.rsh:133:9:application',
      fs: ['at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:139:12:application call to "k" (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:251:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    
    await stdlib.mapSet(map0, v1864, undefined /* Nothing */);
    return;
    }
  else {
    const v1971 = null;
    const v1972 = await txn1.getOutput('Player_receivePay', 'v1971', ctc0, v1971);
    stdlib.protect(ctc0, await interact.out(v1865, v1972), {
      at: './index.rsh:133:9:application',
      fs: ['at ./index.rsh:133:9:application call to [unknown function] (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:144:12:application call to "k" (defined at: ./index.rsh:133:9:function exp)', 'at ./index.rsh:251:48:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: 'out',
      who: 'Player_receivePay'
      });
    
    await stdlib.mapSet(map0, v1864, undefined /* Nothing */);
    return;
    }
  
  
  };
export async function _Player_receivePay27(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay27 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay27 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1185, v1186, v1187, v1196, v1199, v1840, v1843, v1898, v1899, v1907] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc4, ctc2]);
  const v1914 = ctc.selfAddress();
  const v1916 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:268:37:application call to [unknown function] (defined at: ./index.rsh:268:37:function exp)', 'at ./index.rsh:268:37:application call to [unknown function] (defined at: ./index.rsh:268:37:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1917 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1914), null);
  const v1918 = {
    None: 0,
    Some: 1
    }[v1917[0]];
  const v1919 = stdlib.eq(v1918, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1919, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:269:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:268:37:application call to [unknown function] (defined at: ./index.rsh:268:37:function exp)', 'at ./index.rsh:268:37:application call to [unknown function] (defined at: ./index.rsh:268:37:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1196, v1199, v1840, v1843, v1898, v1899, v1907, v1916],
    evt_cnt: 1,
    funcNum: 26,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:268:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1924], secs: v1926, time: v1925, didSend: v988, from: v1923 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1923), null);
      const v1932 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1923), null);
      const v1933 = {
        None: 0,
        Some: 1
        }[v1932[0]];
      const v1934 = stdlib.eq(v1933, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1934) {
        const v1935 = null;
        const v1936 = await txn1.getOutput('Player_receivePay', 'v1935', ctc0, v1935);
        
        await stdlib.simMapSet(sim_r, 2, v1923, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 0, v1923, undefined /* Nothing */);
        const v1947 = stdlib.sub(v1907, v1907);
        sim_r.txns.push({
          kind: 'from',
          to: v1923,
          tok: undefined /* Nothing */
          });
        const v1948 = stdlib.safeSub(v1898, stdlib.checkedBigNumberify('./index.rsh:276:35:decimal', stdlib.UInt_max, '1'));
        const v4804 = v1948;
        const v4805 = v1923;
        const v4807 = v1947;
        const v4808 = stdlib.addressEq(v1923, v1196);
        const v4809 = stdlib.gt(v1948, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
        const v4810 = v4808 ? v4809 : false;
        if (v4810) {
          sim_r.isHalt = false;
          }
        else {
          const v4811 = stdlib.sub(v1947, v1947);
          sim_r.txns.push({
            kind: 'from',
            to: v1923,
            tok: undefined /* Nothing */
            });
          const v4812 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
          const v4813 = true;
          const v4814 = v4812;
          const v4816 = v4811;
          const v4817 = stdlib.gt(v4812, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v4817) {
            sim_r.isHalt = false;
            }
          else {
            const v4818 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
            const v4819 = v4818;
            const v4821 = v4811;
            const v4822 = stdlib.gt(v4818, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4822) {
              const v4823 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4824 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1953 = null;
        const v1954 = await txn1.getOutput('Player_receivePay', 'v1953', ctc0, v1953);
        
        await stdlib.simMapSet(sim_r, 0, v1923, undefined /* Nothing */);
        const v1960 = stdlib.safeSub(v1898, stdlib.checkedBigNumberify('./index.rsh:280:37:decimal', stdlib.UInt_max, '1'));
        const v4825 = v1960;
        const v4826 = v1899;
        const v4828 = v1907;
        const v4829 = stdlib.addressEq(v1899, v1196);
        const v4830 = stdlib.gt(v1960, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
        const v4831 = v4829 ? v4830 : false;
        if (v4831) {
          sim_r.isHalt = false;
          }
        else {
          const v4832 = stdlib.sub(v1907, v1907);
          sim_r.txns.push({
            kind: 'from',
            to: v1899,
            tok: undefined /* Nothing */
            });
          const v4833 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
          const v4834 = true;
          const v4835 = v4833;
          const v4837 = v4832;
          const v4838 = stdlib.gt(v4833, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v4838) {
            sim_r.isHalt = false;
            }
          else {
            const v4839 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
            const v4840 = v4839;
            const v4842 = v4832;
            const v4843 = stdlib.gt(v4839, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4843) {
              const v4844 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4845 = ['Finished', null];
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
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc4, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1924], secs: v1926, time: v1925, didSend: v988, from: v1923 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1928 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1923), null);
  const v1929 = {
    None: 0,
    Some: 1
    }[v1928[0]];
  const v1930 = stdlib.eq(v1929, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1930, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:269:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  const v1932 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1923), null);
  const v1933 = {
    None: 0,
    Some: 1
    }[v1932[0]];
  const v1934 = stdlib.eq(v1933, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v1934) {
    const v1935 = null;
    const v1936 = await txn1.getOutput('Player_receivePay', 'v1935', ctc0, v1935);
    if (v988) {
      stdlib.protect(ctc0, await interact.out(v1924, v1936), {
        at: './index.rsh:268:15:application',
        fs: ['at ./index.rsh:268:15:application call to [unknown function] (defined at: ./index.rsh:268:15:function exp)', 'at ./index.rsh:272:16:application call to "k" (defined at: ./index.rsh:270:23:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map2, v1923, undefined /* Nothing */);
    await stdlib.mapSet(map0, v1923, undefined /* Nothing */);
    const v1947 = stdlib.sub(v1907, v1907);
    ;
    const v1948 = stdlib.safeSub(v1898, stdlib.checkedBigNumberify('./index.rsh:276:35:decimal', stdlib.UInt_max, '1'));
    const v4804 = v1948;
    const v4805 = v1923;
    const v4807 = v1947;
    const v4808 = stdlib.addressEq(v1923, v1196);
    const v4809 = stdlib.gt(v1948, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
    const v4810 = v4808 ? v4809 : false;
    if (v4810) {
      return;
      }
    else {
      const v4811 = stdlib.sub(v1947, v1947);
      ;
      const v4812 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
      const v4813 = true;
      const v4814 = v4812;
      const v4816 = v4811;
      const v4817 = stdlib.gt(v4812, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v4817) {
        return;
        }
      else {
        const v4818 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
        const v4819 = v4818;
        const v4821 = v4811;
        const v4822 = stdlib.gt(v4818, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4822) {
          const v4823 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4824 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1953 = null;
    const v1954 = await txn1.getOutput('Player_receivePay', 'v1953', ctc0, v1953);
    if (v988) {
      stdlib.protect(ctc0, await interact.out(v1924, v1954), {
        at: './index.rsh:268:15:application',
        fs: ['at ./index.rsh:268:15:application call to [unknown function] (defined at: ./index.rsh:268:15:function exp)', 'at ./index.rsh:278:16:application call to "k" (defined at: ./index.rsh:270:23:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v1923, undefined /* Nothing */);
    const v1960 = stdlib.safeSub(v1898, stdlib.checkedBigNumberify('./index.rsh:280:37:decimal', stdlib.UInt_max, '1'));
    const v4825 = v1960;
    const v4826 = v1899;
    const v4828 = v1907;
    const v4829 = stdlib.addressEq(v1899, v1196);
    const v4830 = stdlib.gt(v1960, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
    const v4831 = v4829 ? v4830 : false;
    if (v4831) {
      return;
      }
    else {
      const v4832 = stdlib.sub(v1907, v1907);
      ;
      const v4833 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
      const v4834 = true;
      const v4835 = v4833;
      const v4837 = v4832;
      const v4838 = stdlib.gt(v4833, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v4838) {
        return;
        }
      else {
        const v4839 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
        const v4840 = v4839;
        const v4842 = v4832;
        const v4843 = stdlib.gt(v4839, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4843) {
          const v4844 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4845 = ['Finished', null];
          null;
          return;
          }}}}
  
  
  };
export async function _Player_receivePay30(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay30 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay30 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1185, v1186, v1187, v1196, v1199, v1840, v1843, v1992, v1993, v2001] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc4, ctc2]);
  const v2008 = ctc.selfAddress();
  const v2010 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:268:37:application call to [unknown function] (defined at: ./index.rsh:268:37:function exp)', 'at ./index.rsh:268:37:application call to [unknown function] (defined at: ./index.rsh:268:37:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v2011 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2008), null);
  const v2012 = {
    None: 0,
    Some: 1
    }[v2011[0]];
  const v2013 = stdlib.eq(v2012, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2013, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:269:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:268:37:application call to [unknown function] (defined at: ./index.rsh:268:37:function exp)', 'at ./index.rsh:268:37:application call to [unknown function] (defined at: ./index.rsh:268:37:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1196, v1199, v1840, v1843, v1992, v1993, v2001, v2010],
    evt_cnt: 1,
    funcNum: 29,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:268:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2018], secs: v2020, time: v2019, didSend: v988, from: v2017 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2017), null);
      const v2026 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2017), null);
      const v2027 = {
        None: 0,
        Some: 1
        }[v2026[0]];
      const v2028 = stdlib.eq(v2027, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v2028) {
        const v2029 = null;
        const v2030 = await txn1.getOutput('Player_receivePay', 'v2029', ctc0, v2029);
        
        await stdlib.simMapSet(sim_r, 2, v2017, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 0, v2017, undefined /* Nothing */);
        const v2041 = stdlib.sub(v2001, v2001);
        sim_r.txns.push({
          kind: 'from',
          to: v2017,
          tok: undefined /* Nothing */
          });
        const v2042 = stdlib.safeSub(v1992, stdlib.checkedBigNumberify('./index.rsh:276:35:decimal', stdlib.UInt_max, '1'));
        const v4846 = v2042;
        const v4847 = v2017;
        const v4849 = v2041;
        const v4850 = stdlib.addressEq(v2017, v1196);
        const v4851 = stdlib.gt(v2042, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
        const v4852 = v4850 ? v4851 : false;
        if (v4852) {
          sim_r.isHalt = false;
          }
        else {
          const v4853 = stdlib.sub(v2041, v2041);
          sim_r.txns.push({
            kind: 'from',
            to: v2017,
            tok: undefined /* Nothing */
            });
          const v4854 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
          const v4855 = true;
          const v4856 = v4854;
          const v4858 = v4853;
          const v4859 = stdlib.gt(v4854, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v4859) {
            sim_r.isHalt = false;
            }
          else {
            const v4860 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
            const v4861 = v4860;
            const v4863 = v4853;
            const v4864 = stdlib.gt(v4860, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4864) {
              const v4865 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4866 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v2047 = null;
        const v2048 = await txn1.getOutput('Player_receivePay', 'v2047', ctc0, v2047);
        
        await stdlib.simMapSet(sim_r, 0, v2017, undefined /* Nothing */);
        const v2054 = stdlib.safeSub(v1992, stdlib.checkedBigNumberify('./index.rsh:280:37:decimal', stdlib.UInt_max, '1'));
        const v4867 = v2054;
        const v4868 = v1993;
        const v4870 = v2001;
        const v4871 = stdlib.addressEq(v1993, v1196);
        const v4872 = stdlib.gt(v2054, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
        const v4873 = v4871 ? v4872 : false;
        if (v4873) {
          sim_r.isHalt = false;
          }
        else {
          const v4874 = stdlib.sub(v2001, v2001);
          sim_r.txns.push({
            kind: 'from',
            to: v1993,
            tok: undefined /* Nothing */
            });
          const v4875 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
          const v4876 = true;
          const v4877 = v4875;
          const v4879 = v4874;
          const v4880 = stdlib.gt(v4875, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v4880) {
            sim_r.isHalt = false;
            }
          else {
            const v4881 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
            const v4882 = v4881;
            const v4884 = v4874;
            const v4885 = stdlib.gt(v4881, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4885) {
              const v4886 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4887 = ['Finished', null];
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
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc4, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v2018], secs: v2020, time: v2019, didSend: v988, from: v2017 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v2022 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2017), null);
  const v2023 = {
    None: 0,
    Some: 1
    }[v2022[0]];
  const v2024 = stdlib.eq(v2023, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2024, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:269:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  const v2026 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2017), null);
  const v2027 = {
    None: 0,
    Some: 1
    }[v2026[0]];
  const v2028 = stdlib.eq(v2027, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v2028) {
    const v2029 = null;
    const v2030 = await txn1.getOutput('Player_receivePay', 'v2029', ctc0, v2029);
    if (v988) {
      stdlib.protect(ctc0, await interact.out(v2018, v2030), {
        at: './index.rsh:268:15:application',
        fs: ['at ./index.rsh:268:15:application call to [unknown function] (defined at: ./index.rsh:268:15:function exp)', 'at ./index.rsh:272:16:application call to "k" (defined at: ./index.rsh:270:23:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map2, v2017, undefined /* Nothing */);
    await stdlib.mapSet(map0, v2017, undefined /* Nothing */);
    const v2041 = stdlib.sub(v2001, v2001);
    ;
    const v2042 = stdlib.safeSub(v1992, stdlib.checkedBigNumberify('./index.rsh:276:35:decimal', stdlib.UInt_max, '1'));
    const v4846 = v2042;
    const v4847 = v2017;
    const v4849 = v2041;
    const v4850 = stdlib.addressEq(v2017, v1196);
    const v4851 = stdlib.gt(v2042, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
    const v4852 = v4850 ? v4851 : false;
    if (v4852) {
      return;
      }
    else {
      const v4853 = stdlib.sub(v2041, v2041);
      ;
      const v4854 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
      const v4855 = true;
      const v4856 = v4854;
      const v4858 = v4853;
      const v4859 = stdlib.gt(v4854, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v4859) {
        return;
        }
      else {
        const v4860 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
        const v4861 = v4860;
        const v4863 = v4853;
        const v4864 = stdlib.gt(v4860, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4864) {
          const v4865 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4866 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v2047 = null;
    const v2048 = await txn1.getOutput('Player_receivePay', 'v2047', ctc0, v2047);
    if (v988) {
      stdlib.protect(ctc0, await interact.out(v2018, v2048), {
        at: './index.rsh:268:15:application',
        fs: ['at ./index.rsh:268:15:application call to [unknown function] (defined at: ./index.rsh:268:15:function exp)', 'at ./index.rsh:278:16:application call to "k" (defined at: ./index.rsh:270:23:function exp)', 'at ./index.rsh:270:23:application call to [unknown function] (defined at: ./index.rsh:270:23:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v2017, undefined /* Nothing */);
    const v2054 = stdlib.safeSub(v1992, stdlib.checkedBigNumberify('./index.rsh:280:37:decimal', stdlib.UInt_max, '1'));
    const v4867 = v2054;
    const v4868 = v1993;
    const v4870 = v2001;
    const v4871 = stdlib.addressEq(v1993, v1196);
    const v4872 = stdlib.gt(v2054, stdlib.checkedBigNumberify('./index.rsh:267:44:decimal', stdlib.UInt_max, '0'));
    const v4873 = v4871 ? v4872 : false;
    if (v4873) {
      return;
      }
    else {
      const v4874 = stdlib.sub(v2001, v2001);
      ;
      const v4875 = stdlib.safeSub(v1843, stdlib.checkedBigNumberify('./index.rsh:286:53:decimal', stdlib.UInt_max, '1'));
      const v4876 = true;
      const v4877 = v4875;
      const v4879 = v4874;
      const v4880 = stdlib.gt(v4875, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v4880) {
        return;
        }
      else {
        const v4881 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
        const v4882 = v4881;
        const v4884 = v4874;
        const v4885 = stdlib.gt(v4881, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4885) {
          const v4886 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4887 = ['Finished', null];
          null;
          return;
          }}}}
  
  
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
  
  
  const [v1185, v1186, v1187, v1196, v1199, v1310, v1391, v1399] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2]);
  const v1439 = ctc.selfAddress();
  const v1441 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:110:9:application',
    fs: ['at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:110:9:function exp)', 'at ./index.rsh:213:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'in',
    who: 'Player_seeWinner'
    });
  const v1444 = stdlib.addressEq(v1439, v1185);
  const v1445 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1439), null);
  const v1446 = {
    None: 0,
    Some: 1
    }[v1445[0]];
  const v1447 = stdlib.eq(v1446, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1448 = v1444 ? v1447 : false;
  stdlib.assert(v1448, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:112:33:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:112:25:function exp)', 'at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:110:9:function exp)', 'at ./index.rsh:213:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1196, v1199, v1310, v1391, v1399, v1441],
    evt_cnt: 1,
    funcNum: 10,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:110:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1451], secs: v1453, time: v1452, didSend: v685, from: v1450 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_seeWinner"
        });
      ;
      const v1454 = v1451[stdlib.checkedBigNumberify('./index.rsh:110:17:array', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1450), null);
      const v1461 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1450), null);
      const v1462 = stdlib.fromSome(v1461, stdlib.checkedBigNumberify('./index.rsh:114:55:decimal', stdlib.UInt_max, '0'));
      const v1463 = stdlib.eq(v1462, v1454);
      const v1464 = v1463 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
      const v1465 = stdlib.eq(v1464, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v1465) {
        const v1469 = true;
        const v1470 = await txn1.getOutput('Player_seeWinner', 'v1469', ctc6, v1469);
        
        await stdlib.simMapSet(sim_r, 1, v1450, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 2, v1450, null);
        const v4888 = v1391;
        const v4889 = stdlib.checkedBigNumberify('./index.rsh:122:18:decimal', stdlib.UInt_max, '1');
        const v4891 = v1399;
        const v4892 = stdlib.gt(v1391, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        if (v4892) {
          sim_r.isHalt = false;
          }
        else {
          const v4893 = stdlib.sub(v1399, v1310);
          sim_r.txns.push({
            kind: 'from',
            to: v1196,
            tok: undefined /* Nothing */
            });
          const v4894 = v1310;
          const v4895 = ['PayingWinners', null];
          null;
          const v4989 = false;
          const v4990 = v1186;
          const v4992 = v4893;
          const v4993 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v4993) {
            sim_r.isHalt = false;
            }
          else {
            const v4994 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
            const v4995 = v4994;
            const v4997 = v4893;
            const v4998 = stdlib.gt(v4994, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v4998) {
              const v4999 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v5000 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1768 = false;
        const v1769 = await txn1.getOutput('Player_seeWinner', 'v1768', ctc6, v1768);
        
        await stdlib.simMapSet(sim_r, 1, v1450, undefined /* Nothing */);
        const v5001 = v1391;
        const v5002 = stdlib.checkedBigNumberify('./index.rsh:128:18:decimal', stdlib.UInt_max, '0');
        const v5004 = v1399;
        const v5005 = stdlib.gt(v1391, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        if (v5005) {
          sim_r.isHalt = false;
          }
        else {
          const v5006 = stdlib.sub(v1399, v1310);
          sim_r.txns.push({
            kind: 'from',
            to: v1196,
            tok: undefined /* Nothing */
            });
          const v5007 = stdlib.safeDiv(v1310, stdlib.checkedBigNumberify('./index.rsh:128:18:decimal', stdlib.UInt_max, '0'));
          const v5008 = ['PayingWinners', null];
          null;
          const v5102 = false;
          const v5103 = v1186;
          const v5105 = v5006;
          const v5106 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v5106) {
            sim_r.isHalt = false;
            }
          else {
            const v5107 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
            const v5108 = v5107;
            const v5110 = v5006;
            const v5111 = stdlib.gt(v5107, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v5111) {
              const v5112 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v5113 = ['Finished', null];
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
    tys: [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1451], secs: v1453, time: v1452, didSend: v685, from: v1450 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1454 = v1451[stdlib.checkedBigNumberify('./index.rsh:110:17:array', stdlib.UInt_max, '0')];
  const v1455 = stdlib.addressEq(v1450, v1185);
  const v1456 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1450), null);
  const v1457 = {
    None: 0,
    Some: 1
    }[v1456[0]];
  const v1458 = stdlib.eq(v1457, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1459 = v1455 ? v1458 : false;
  stdlib.assert(v1459, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:113:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:213:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_seeWinner'
    });
  const v1461 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1450), null);
  const v1462 = stdlib.fromSome(v1461, stdlib.checkedBigNumberify('./index.rsh:114:55:decimal', stdlib.UInt_max, '0'));
  const v1463 = stdlib.eq(v1462, v1454);
  const v1464 = v1463 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
  const v1465 = stdlib.eq(v1464, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v1465) {
    const v1469 = true;
    const v1470 = await txn1.getOutput('Player_seeWinner', 'v1469', ctc6, v1469);
    stdlib.protect(ctc0, await interact.out(v1451, v1470), {
      at: './index.rsh:110:9:application',
      fs: ['at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:110:9:function exp)', 'at ./index.rsh:119:12:application call to "k" (defined at: ./index.rsh:110:9:function exp)', 'at ./index.rsh:213:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: 'out',
      who: 'Player_seeWinner'
      });
    
    await stdlib.mapSet(map1, v1450, undefined /* Nothing */);
    await stdlib.mapSet(map2, v1450, null);
    const v4888 = v1391;
    const v4889 = stdlib.checkedBigNumberify('./index.rsh:122:18:decimal', stdlib.UInt_max, '1');
    const v4891 = v1399;
    const v4892 = stdlib.gt(v1391, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
    if (v4892) {
      return;
      }
    else {
      const v4893 = stdlib.sub(v1399, v1310);
      ;
      const v4894 = v1310;
      const v4895 = ['PayingWinners', null];
      null;
      const v4989 = false;
      const v4990 = v1186;
      const v4992 = v4893;
      const v4993 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v4993) {
        return;
        }
      else {
        const v4994 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
        const v4995 = v4994;
        const v4997 = v4893;
        const v4998 = stdlib.gt(v4994, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v4998) {
          const v4999 = ['Joining', null];
          null;
          return;
          }
        else {
          const v5000 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1768 = false;
    const v1769 = await txn1.getOutput('Player_seeWinner', 'v1768', ctc6, v1768);
    stdlib.protect(ctc0, await interact.out(v1451, v1769), {
      at: './index.rsh:110:9:application',
      fs: ['at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:110:9:function exp)', 'at ./index.rsh:126:12:application call to "k" (defined at: ./index.rsh:110:9:function exp)', 'at ./index.rsh:213:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
      msg: 'out',
      who: 'Player_seeWinner'
      });
    
    await stdlib.mapSet(map1, v1450, undefined /* Nothing */);
    const v5001 = v1391;
    const v5002 = stdlib.checkedBigNumberify('./index.rsh:128:18:decimal', stdlib.UInt_max, '0');
    const v5004 = v1399;
    const v5005 = stdlib.gt(v1391, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
    if (v5005) {
      return;
      }
    else {
      const v5006 = stdlib.sub(v1399, v1310);
      ;
      const v5007 = stdlib.safeDiv(v1310, stdlib.checkedBigNumberify('./index.rsh:128:18:decimal', stdlib.UInt_max, '0'));
      const v5008 = ['PayingWinners', null];
      null;
      const v5102 = false;
      const v5103 = v1186;
      const v5105 = v5006;
      const v5106 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v5106) {
        return;
        }
      else {
        const v5107 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
        const v5108 = v5107;
        const v5110 = v5006;
        const v5111 = stdlib.gt(v5107, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v5111) {
          const v5112 = ['Joining', null];
          null;
          return;
          }
        else {
          const v5113 = ['Finished', null];
          null;
          return;
          }}}}
  
  
  };
export async function _Player_seeWinner21(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_seeWinner21 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_seeWinner21 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1185, v1186, v1187, v1196, v1199, v1310, v1477, v1478, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1493 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:220:9:application call to [unknown function] (defined at: ./index.rsh:220:9:function exp)', 'at ./index.rsh:220:9:application call to [unknown function] (defined at: ./index.rsh:220:9:function exp)'],
    msg: 'in',
    who: 'Player_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1196, v1199, v1310, v1477, v1478, v1486, v1493],
    evt_cnt: 1,
    funcNum: 20,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:220:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1499], secs: v1501, time: v1500, didSend: v773, from: v1498 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_seeWinner"
        });
      ;
      const v1503 = v1499[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
      const v1504 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1498), null);
      const v1505 = stdlib.fromSome(v1504, stdlib.checkedBigNumberify('./index.rsh:222:51:decimal', stdlib.UInt_max, '0'));
      const v1506 = stdlib.eq(v1505, v1503);
      const v1507 = v1506 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
      const v1508 = stdlib.eq(v1507, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v1508) {
        const v1512 = true;
        const v1513 = await txn1.getOutput('Player_seeWinner', 'v1512', ctc6, v1512);
        
        await stdlib.simMapSet(sim_r, 1, v1498, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 2, v1498, null);
        const v1520 = stdlib.safeAdd(v1478, stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '1'));
        const v1521 = stdlib.safeSub(v1477, stdlib.checkedBigNumberify('./index.rsh:231:45:decimal', stdlib.UInt_max, '1'));
        const v5114 = v1521;
        const v5115 = v1520;
        const v5117 = v1486;
        const v5118 = stdlib.gt(v1521, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        if (v5118) {
          sim_r.isHalt = false;
          }
        else {
          const v5119 = stdlib.sub(v1486, v1310);
          sim_r.txns.push({
            kind: 'from',
            to: v1196,
            tok: undefined /* Nothing */
            });
          const v5120 = stdlib.safeDiv(v1310, v1520);
          const v5121 = ['PayingWinners', null];
          null;
          const v5215 = false;
          const v5216 = v1186;
          const v5218 = v5119;
          const v5219 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v5219) {
            sim_r.isHalt = false;
            }
          else {
            const v5220 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
            const v5221 = v5220;
            const v5223 = v5119;
            const v5224 = stdlib.gt(v5220, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v5224) {
              const v5225 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v5226 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1526 = false;
        const v1527 = await txn1.getOutput('Player_seeWinner', 'v1526', ctc6, v1526);
        
        await stdlib.simMapSet(sim_r, 1, v1498, undefined /* Nothing */);
        const v1533 = stdlib.safeSub(v1477, stdlib.checkedBigNumberify('./index.rsh:237:42:decimal', stdlib.UInt_max, '1'));
        const v5227 = v1533;
        const v5228 = v1478;
        const v5230 = v1486;
        const v5231 = stdlib.gt(v1533, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        if (v5231) {
          sim_r.isHalt = false;
          }
        else {
          const v5232 = stdlib.sub(v1486, v1310);
          sim_r.txns.push({
            kind: 'from',
            to: v1196,
            tok: undefined /* Nothing */
            });
          const v5233 = stdlib.safeDiv(v1310, v1478);
          const v5234 = ['PayingWinners', null];
          null;
          const v5328 = false;
          const v5329 = v1186;
          const v5331 = v5232;
          const v5332 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v5332) {
            sim_r.isHalt = false;
            }
          else {
            const v5333 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
            const v5334 = v5333;
            const v5336 = v5232;
            const v5337 = stdlib.gt(v5333, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v5337) {
              const v5338 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v5339 = ['Finished', null];
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
  const {data: [v1499], secs: v1501, time: v1500, didSend: v773, from: v1498 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1503 = v1499[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
  const v1504 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1498), null);
  const v1505 = stdlib.fromSome(v1504, stdlib.checkedBigNumberify('./index.rsh:222:51:decimal', stdlib.UInt_max, '0'));
  const v1506 = stdlib.eq(v1505, v1503);
  const v1507 = v1506 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
  const v1508 = stdlib.eq(v1507, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v1508) {
    const v1512 = true;
    const v1513 = await txn1.getOutput('Player_seeWinner', 'v1512', ctc6, v1512);
    if (v773) {
      stdlib.protect(ctc0, await interact.out(v1499, v1513), {
        at: './index.rsh:220:10:application',
        fs: ['at ./index.rsh:220:10:application call to [unknown function] (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:228:12:application call to "k" (defined at: ./index.rsh:221:17:function exp)', 'at ./index.rsh:221:17:application call to [unknown function] (defined at: ./index.rsh:221:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1498, undefined /* Nothing */);
    await stdlib.mapSet(map2, v1498, null);
    const v1520 = stdlib.safeAdd(v1478, stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '1'));
    const v1521 = stdlib.safeSub(v1477, stdlib.checkedBigNumberify('./index.rsh:231:45:decimal', stdlib.UInt_max, '1'));
    const v5114 = v1521;
    const v5115 = v1520;
    const v5117 = v1486;
    const v5118 = stdlib.gt(v1521, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
    if (v5118) {
      return;
      }
    else {
      const v5119 = stdlib.sub(v1486, v1310);
      ;
      const v5120 = stdlib.safeDiv(v1310, v1520);
      const v5121 = ['PayingWinners', null];
      null;
      const v5215 = false;
      const v5216 = v1186;
      const v5218 = v5119;
      const v5219 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v5219) {
        return;
        }
      else {
        const v5220 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
        const v5221 = v5220;
        const v5223 = v5119;
        const v5224 = stdlib.gt(v5220, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v5224) {
          const v5225 = ['Joining', null];
          null;
          return;
          }
        else {
          const v5226 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1526 = false;
    const v1527 = await txn1.getOutput('Player_seeWinner', 'v1526', ctc6, v1526);
    if (v773) {
      stdlib.protect(ctc0, await interact.out(v1499, v1527), {
        at: './index.rsh:220:10:application',
        fs: ['at ./index.rsh:220:10:application call to [unknown function] (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:235:12:application call to "k" (defined at: ./index.rsh:221:17:function exp)', 'at ./index.rsh:221:17:application call to [unknown function] (defined at: ./index.rsh:221:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1498, undefined /* Nothing */);
    const v1533 = stdlib.safeSub(v1477, stdlib.checkedBigNumberify('./index.rsh:237:42:decimal', stdlib.UInt_max, '1'));
    const v5227 = v1533;
    const v5228 = v1478;
    const v5230 = v1486;
    const v5231 = stdlib.gt(v1533, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
    if (v5231) {
      return;
      }
    else {
      const v5232 = stdlib.sub(v1486, v1310);
      ;
      const v5233 = stdlib.safeDiv(v1310, v1478);
      const v5234 = ['PayingWinners', null];
      null;
      const v5328 = false;
      const v5329 = v1186;
      const v5331 = v5232;
      const v5332 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v5332) {
        return;
        }
      else {
        const v5333 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
        const v5334 = v5333;
        const v5336 = v5232;
        const v5337 = stdlib.gt(v5333, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v5337) {
          const v5338 = ['Joining', null];
          null;
          return;
          }
        else {
          const v5339 = ['Finished', null];
          null;
          return;
          }}}}
  
  
  };
export async function _Player_seeWinner31(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_seeWinner31 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_seeWinner31 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1185, v1186, v1187, v1196, v1199, v1310, v1775, v1776, v1784] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '31'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1791 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:220:9:application call to [unknown function] (defined at: ./index.rsh:220:9:function exp)', 'at ./index.rsh:220:9:application call to [unknown function] (defined at: ./index.rsh:220:9:function exp)'],
    msg: 'in',
    who: 'Player_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1196, v1199, v1310, v1775, v1776, v1784, v1791],
    evt_cnt: 1,
    funcNum: 30,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:220:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1797], secs: v1799, time: v1798, didSend: v773, from: v1796 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_seeWinner"
        });
      ;
      const v1801 = v1797[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
      const v1802 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1796), null);
      const v1803 = stdlib.fromSome(v1802, stdlib.checkedBigNumberify('./index.rsh:222:51:decimal', stdlib.UInt_max, '0'));
      const v1804 = stdlib.eq(v1803, v1801);
      const v1805 = v1804 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
      const v1806 = stdlib.eq(v1805, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v1806) {
        const v1810 = true;
        const v1811 = await txn1.getOutput('Player_seeWinner', 'v1810', ctc6, v1810);
        
        await stdlib.simMapSet(sim_r, 1, v1796, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 2, v1796, null);
        const v1818 = stdlib.safeAdd(v1776, stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '1'));
        const v1819 = stdlib.safeSub(v1775, stdlib.checkedBigNumberify('./index.rsh:231:45:decimal', stdlib.UInt_max, '1'));
        const v5340 = v1819;
        const v5341 = v1818;
        const v5343 = v1784;
        const v5344 = stdlib.gt(v1819, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        if (v5344) {
          sim_r.isHalt = false;
          }
        else {
          const v5345 = stdlib.sub(v1784, v1310);
          sim_r.txns.push({
            kind: 'from',
            to: v1196,
            tok: undefined /* Nothing */
            });
          const v5346 = stdlib.safeDiv(v1310, v1818);
          const v5347 = ['PayingWinners', null];
          null;
          const v5441 = false;
          const v5442 = v1186;
          const v5444 = v5345;
          const v5445 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v5445) {
            sim_r.isHalt = false;
            }
          else {
            const v5446 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
            const v5447 = v5446;
            const v5449 = v5345;
            const v5450 = stdlib.gt(v5446, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v5450) {
              const v5451 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v5452 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1824 = false;
        const v1825 = await txn1.getOutput('Player_seeWinner', 'v1824', ctc6, v1824);
        
        await stdlib.simMapSet(sim_r, 1, v1796, undefined /* Nothing */);
        const v1831 = stdlib.safeSub(v1775, stdlib.checkedBigNumberify('./index.rsh:237:42:decimal', stdlib.UInt_max, '1'));
        const v5453 = v1831;
        const v5454 = v1776;
        const v5456 = v1784;
        const v5457 = stdlib.gt(v1831, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
        if (v5457) {
          sim_r.isHalt = false;
          }
        else {
          const v5458 = stdlib.sub(v1784, v1310);
          sim_r.txns.push({
            kind: 'from',
            to: v1196,
            tok: undefined /* Nothing */
            });
          const v5459 = stdlib.safeDiv(v1310, v1776);
          const v5460 = ['PayingWinners', null];
          null;
          const v5554 = false;
          const v5555 = v1186;
          const v5557 = v5458;
          const v5558 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v5558) {
            sim_r.isHalt = false;
            }
          else {
            const v5559 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
            const v5560 = v5559;
            const v5562 = v5458;
            const v5563 = stdlib.gt(v5559, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
            if (v5563) {
              const v5564 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v5565 = ['Finished', null];
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
  const {data: [v1797], secs: v1799, time: v1798, didSend: v773, from: v1796 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1801 = v1797[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
  const v1802 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1796), null);
  const v1803 = stdlib.fromSome(v1802, stdlib.checkedBigNumberify('./index.rsh:222:51:decimal', stdlib.UInt_max, '0'));
  const v1804 = stdlib.eq(v1803, v1801);
  const v1805 = v1804 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
  const v1806 = stdlib.eq(v1805, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v1806) {
    const v1810 = true;
    const v1811 = await txn1.getOutput('Player_seeWinner', 'v1810', ctc6, v1810);
    if (v773) {
      stdlib.protect(ctc0, await interact.out(v1797, v1811), {
        at: './index.rsh:220:10:application',
        fs: ['at ./index.rsh:220:10:application call to [unknown function] (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:228:12:application call to "k" (defined at: ./index.rsh:221:17:function exp)', 'at ./index.rsh:221:17:application call to [unknown function] (defined at: ./index.rsh:221:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1796, undefined /* Nothing */);
    await stdlib.mapSet(map2, v1796, null);
    const v1818 = stdlib.safeAdd(v1776, stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, '1'));
    const v1819 = stdlib.safeSub(v1775, stdlib.checkedBigNumberify('./index.rsh:231:45:decimal', stdlib.UInt_max, '1'));
    const v5340 = v1819;
    const v5341 = v1818;
    const v5343 = v1784;
    const v5344 = stdlib.gt(v1819, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
    if (v5344) {
      return;
      }
    else {
      const v5345 = stdlib.sub(v1784, v1310);
      ;
      const v5346 = stdlib.safeDiv(v1310, v1818);
      const v5347 = ['PayingWinners', null];
      null;
      const v5441 = false;
      const v5442 = v1186;
      const v5444 = v5345;
      const v5445 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v5445) {
        return;
        }
      else {
        const v5446 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
        const v5447 = v5446;
        const v5449 = v5345;
        const v5450 = stdlib.gt(v5446, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v5450) {
          const v5451 = ['Joining', null];
          null;
          return;
          }
        else {
          const v5452 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1824 = false;
    const v1825 = await txn1.getOutput('Player_seeWinner', 'v1824', ctc6, v1824);
    if (v773) {
      stdlib.protect(ctc0, await interact.out(v1797, v1825), {
        at: './index.rsh:220:10:application',
        fs: ['at ./index.rsh:220:10:application call to [unknown function] (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:235:12:application call to "k" (defined at: ./index.rsh:221:17:function exp)', 'at ./index.rsh:221:17:application call to [unknown function] (defined at: ./index.rsh:221:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1796, undefined /* Nothing */);
    const v1831 = stdlib.safeSub(v1775, stdlib.checkedBigNumberify('./index.rsh:237:42:decimal', stdlib.UInt_max, '1'));
    const v5453 = v1831;
    const v5454 = v1776;
    const v5456 = v1784;
    const v5457 = stdlib.gt(v1831, stdlib.checkedBigNumberify('./index.rsh:219:25:decimal', stdlib.UInt_max, '0'));
    if (v5457) {
      return;
      }
    else {
      const v5458 = stdlib.sub(v1784, v1310);
      ;
      const v5459 = stdlib.safeDiv(v1310, v1776);
      const v5460 = ['PayingWinners', null];
      null;
      const v5554 = false;
      const v5555 = v1186;
      const v5557 = v5458;
      const v5558 = stdlib.gt(v1186, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v5558) {
        return;
        }
      else {
        const v5559 = stdlib.safeSub(v1199, stdlib.checkedBigNumberify('./index.rsh:293:41:decimal', stdlib.UInt_max, '1'));
        const v5560 = v5559;
        const v5562 = v5458;
        const v5563 = stdlib.gt(v5559, stdlib.checkedBigNumberify('./index.rsh:71:27:decimal', stdlib.UInt_max, '0'));
        if (v5563) {
          const v5564 = ['Joining', null];
          null;
          return;
          }
        else {
          const v5565 = ['Finished', null];
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
  
  
  const [v1185, v1186, v1187, v1196, v1199, v1240, v1248] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2]);
  const v1283 = ctc.selfAddress();
  const v1285 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:91:9:application',
    fs: ['at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:9:function exp)', 'at ./index.rsh:173:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'in',
    who: 'Player_wager'
    });
  const v1286 = stdlib.addressEq(v1283, v1185);
  const v1287 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1283), null);
  const v1288 = {
    None: 0,
    Some: 1
    }[v1287[0]];
  const v1289 = stdlib.eq(v1288, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1290 = v1286 ? v1289 : false;
  stdlib.assert(v1290, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:94:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:94:20:function exp)', 'at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:9:function exp)', 'at ./index.rsh:173:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1196, v1199, v1240, v1248, v1285],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v1187, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1293], secs: v1295, time: v1294, didSend: v287, from: v1292 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_wager"
        });
      const v1297 = stdlib.add(v1248, v1187);
      sim_r.txns.push({
        amt: v1187,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1292), null);
      const v1304 = null;
      const v1305 = await txn1.getOutput('Player_wager', 'v1304', ctc0, v1304);
      
      const v5566 = v1187;
      const v5567 = v1240;
      const v5569 = v1297;
      const v5570 = stdlib.gt(v1240, stdlib.checkedBigNumberify('./index.rsh:179:32:decimal', stdlib.UInt_max, '0'));
      if (v5570) {
        sim_r.isHalt = false;
        }
      else {
        const v5571 = ['PickingRoles', null];
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
  const {data: [v1293], secs: v1295, time: v1294, didSend: v287, from: v1292 } = txn1;
  undefined /* setApiDetails */;
  const v1297 = stdlib.add(v1248, v1187);
  ;
  const v1298 = stdlib.addressEq(v1292, v1185);
  const v1299 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1292), null);
  const v1300 = {
    None: 0,
    Some: 1
    }[v1299[0]];
  const v1301 = stdlib.eq(v1300, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1302 = v1298 ? v1301 : false;
  stdlib.assert(v1302, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:95:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  const v1304 = null;
  const v1305 = await txn1.getOutput('Player_wager', 'v1304', ctc0, v1304);
  stdlib.protect(ctc0, await interact.out(v1293, v1305), {
    at: './index.rsh:91:9:application',
    fs: ['at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:9:function exp)', 'at ./index.rsh:96:10:application call to "k" (defined at: ./index.rsh:91:9:function exp)', 'at ./index.rsh:173:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:78:43:function exp)'],
    msg: 'out',
    who: 'Player_wager'
    });
  
  const v5566 = v1187;
  const v5567 = v1240;
  const v5569 = v1297;
  const v5570 = stdlib.gt(v1240, stdlib.checkedBigNumberify('./index.rsh:179:32:decimal', stdlib.UInt_max, '0'));
  if (v5570) {
    return;
    }
  else {
    const v5571 = ['PickingRoles', null];
    null;
    return;
    }
  
  
  };
export async function _Player_wager33(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_wager33 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_wager33 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1185, v1186, v1187, v1196, v1199, v1240, v1310, v1311, v1319] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '33'), [ctc4, ctc2, ctc2, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1324 = ctc.selfAddress();
  const v1326 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)'],
    msg: 'in',
    who: 'Player_wager'
    });
  const v1327 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1324), null);
  const v1328 = {
    None: 0,
    Some: 1
    }[v1327[0]];
  const v1329 = stdlib.eq(v1328, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1329, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:181:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1186, v1187, v1196, v1199, v1240, v1310, v1311, v1319, v1326],
    evt_cnt: 1,
    funcNum: 32,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v1187, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1338], secs: v1340, time: v1339, didSend: v434, from: v1337 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_wager"
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1337), null);
      const v1347 = stdlib.add(v1319, v1187);
      sim_r.txns.push({
        amt: v1187,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1352 = null;
      const v1353 = await txn1.getOutput('Player_wager', 'v1352', ctc0, v1352);
      
      const v1358 = stdlib.safeAdd(v1310, v1187);
      const v1359 = stdlib.safeSub(v1311, stdlib.checkedBigNumberify('./index.rsh:184:55:decimal', stdlib.UInt_max, '1'));
      const v5860 = v1358;
      const v5861 = v1359;
      const v5863 = v1347;
      const v5864 = stdlib.gt(v1359, stdlib.checkedBigNumberify('./index.rsh:179:32:decimal', stdlib.UInt_max, '0'));
      if (v5864) {
        sim_r.isHalt = false;
        }
      else {
        const v5865 = ['PickingRoles', null];
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
  const {data: [v1338], secs: v1340, time: v1339, didSend: v434, from: v1337 } = txn1;
  undefined /* setApiDetails */;
  const v1342 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1337), null);
  const v1343 = {
    None: 0,
    Some: 1
    }[v1342[0]];
  const v1344 = stdlib.eq(v1343, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1344, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:181:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)', 'at ./index.rsh:180:30:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  const v1347 = stdlib.add(v1319, v1187);
  ;
  const v1352 = null;
  const v1353 = await txn1.getOutput('Player_wager', 'v1352', ctc0, v1352);
  if (v434) {
    stdlib.protect(ctc0, await interact.out(v1338, v1353), {
      at: './index.rsh:180:13:application',
      fs: ['at ./index.rsh:180:13:application call to [unknown function] (defined at: ./index.rsh:180:13:function exp)', 'at ./index.rsh:183:12:application call to "k" (defined at: ./index.rsh:182:27:function exp)', 'at ./index.rsh:182:27:application call to [unknown function] (defined at: ./index.rsh:182:27:function exp)'],
      msg: 'out',
      who: 'Player_wager'
      });
    }
  else {
    }
  
  const v1358 = stdlib.safeAdd(v1310, v1187);
  const v1359 = stdlib.safeSub(v1311, stdlib.checkedBigNumberify('./index.rsh:184:55:decimal', stdlib.UInt_max, '1'));
  const v5860 = v1358;
  const v5861 = v1359;
  const v5863 = v1347;
  const v5864 = stdlib.gt(v1359, stdlib.checkedBigNumberify('./index.rsh:179:32:decimal', stdlib.UInt_max, '0'));
  if (v5864) {
    return;
    }
  else {
    const v5865 = ['PickingRoles', null];
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
  if (step == 32) {return _Player_getRole32(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
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
  if (step == 34) {return _Player_join34(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '34')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_receivePay(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_receivePay expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_receivePay expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 14) {return _Player_receivePay14(ctcTop, interact);}
  if (step == 17) {return _Player_receivePay17(ctcTop, interact);}
  if (step == 20) {return _Player_receivePay20(ctcTop, interact);}
  if (step == 24) {return _Player_receivePay24(ctcTop, interact);}
  if (step == 27) {return _Player_receivePay27(ctcTop, interact);}
  if (step == 30) {return _Player_receivePay30(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '24'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
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
  if (step == 21) {return _Player_seeWinner21(ctcTop, interact);}
  if (step == 31) {return _Player_seeWinner31(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '31')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
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
  if (step == 33) {return _Player_wager33(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '33')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Player_getRole(uint64)byte[0]`, `Player_join()byte[0]`, `Player_receivePay()byte[0]`, `Player_seeWinner(uint64)byte`, `Player_wager()byte[0]`, `_Player_getRole31(uint64)byte[0]`, `_Player_getRole8(uint64)byte[0]`, `_Player_join33()byte[0]`, `_Player_join4()byte[0]`, `_Player_receivePay13()byte[0]`, `_Player_receivePay16()byte[0]`, `_Player_receivePay19()byte[0]`, `_Player_receivePay23()byte[0]`, `_Player_receivePay26()byte[0]`, `_Player_receivePay29()byte[0]`, `_Player_seeWinner10(uint64)byte`, `_Player_seeWinner20(uint64)byte`, `_Player_seeWinner30(uint64)byte`, `_Player_wager32()byte[0]`, `_Player_wager6()byte[0]`],
    pure: [],
    sigs: [`Player_getRole(uint64)byte[0]`, `Player_join()byte[0]`, `Player_receivePay()byte[0]`, `Player_seeWinner(uint64)byte`, `Player_wager()byte[0]`, `_Player_getRole31(uint64)byte[0]`, `_Player_getRole8(uint64)byte[0]`, `_Player_join33()byte[0]`, `_Player_join4()byte[0]`, `_Player_receivePay13()byte[0]`, `_Player_receivePay16()byte[0]`, `_Player_receivePay19()byte[0]`, `_Player_receivePay23()byte[0]`, `_Player_receivePay26()byte[0]`, `_Player_receivePay29()byte[0]`, `_Player_seeWinner10(uint64)byte`, `_Player_seeWinner20(uint64)byte`, `_Player_seeWinner30(uint64)byte`, `_Player_wager32()byte[0]`, `_Player_wager6()byte[0]`]
    },
  appApproval: `BiA9AAEgKFBYCmBoCSEUYWkIHh8LEBtwkAEYDhECFxodEwQGBaG+1M4H/ob39Q3DyeehDsX8wKwOztnOuw8N1Mit9w3jhanjCIjL4P4I+eWS/AvB+8DHCKfy2OkC+8Xohwae+9fvBsLqwLwHm+bTngXno/XUAafLxtMCi/Ti4QKvr/yqASIcGRUSDwcwJgQBAAABAQXVEPDMAyI1ADEYQRj/KWRJIls1ASEOWzUCMRkjEkEACjEAKCERr2ZCGMs2GgAXSUEB3CI1BCM1BkkhIQxAAQJJISIMQACkSSEjDEAAcUkhJAxAABdJISUMQAAIISUSRClCAd4hJBJEKUIRHiEjEkQ0AUkhGgxAACNJIRsMQAAVSSEcDEAAByEcEkRCAIAhGxJEQgCpIRoSREIA2kkhEgxAABVJIR0MQAAHIR0SREIBTiESEkRCAVMhJhJEQgDOSSEnDEAACiEnEkQ2GgFCAwEhIhJENAFJIQoMQAAHIQoSREL/fCEeEkRC/31JISgMQAAoSSEpDEAAGUkhKgxAAAohKhJENhoBQgh+ISkSRClCA8ghKBJEKUIBnUkhKwxAABkhKxJENAFJJAxAAAYkEkRC/+MhHxJEQgBLISESRClCBWZJISwMQABISSEtDEAAKkkhLgxAABtJIS8MQAAKIS8SRDYaAUIO9iEuEkQ2GgFCAcUhLRJEKUIG50khMAxAAAghMBJEKUIPfSEsEkQpQgycSSExDEAAXEkhMgxAADpJITMMQAApITMSRDQBSSELDEAAFUkhDwxAAAchDxJEQv8JIQsSREL/PCEGEkRCAAQhMhJENhoBQg10ITESRDQBSSEQDEAAByEQEkRC/38hDhJEQv9uSSE0DEAACCE0EkQpQgiOgbOBkoEBEkQpQgpXNhoCFzUENhoDNhoBF0khHQxACXFJIRMMQARoSSEQDEABkUkkDEAA/0khCgxAAHghChJEITU0ARJENARJIhJMNAISEUQoZDUDSTUFNf+ABPKZyqE0/1CwMQCIFsBXAAEiVSMTRIAIAAAAAAAABPmwKTUHMQAoMQCIFqIjIkxWZjQDVwAgNAMkWzQDJVs0A1cwIDQDIQRbNAMhBVsjCDIGNAMhB1tCEJFIIQo0ARJENARJIhJMNAISEUQoZEk1AyVbNf9JNQU1/oAEe6Z/ADT+ULAxAIgWRlcAASJVIxJENP+IFkiACAAAAAAAAAVIsCk1BzQDVwAgNAMkWzT/NANXMCA0AyEEWzQDIQVbNAMhB1s0/wg0AyEIWyMJMgY0AyEUWzT/CEIQiUgkNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gARp07fjNP9QsDEAiBXMVwABIlUjEkSACAAAAAAAAAWTsCk1BzEAKDEAiBWuKjT/UDX+SVcAATT+UExXCgFQZjQDVwAgNAMkWzQDJVs0A1cwIDQDIQRbNAMhBVs0AyEHWzQDIQhbIwgyBjQDIRRbQhCESSEcDEACFEkhDwxAAQlIIRA0ARJENARJIhJMNAISEUQoZEk1A0lKSkpJVwAgNf8kWzX+JVs1/VcwIDX8IQRbNfshBVs1+iEHWzX5IQhbNfghFFs190k1BTX2gATwRAIENPZQsCIjIjEAiBT9VwEJSTX1I1s09SJVTTT2FxJNIxJBAFKACQAAAAAAAAcSAbAqNQcxACgxAIgUzyEJrzX1SVcAATT1UExXCgFQZjEAKDEAiBS1IyEGTFZmNP80/jT9NPw0+zT6NPkjCTT4IwgyBjT3QhIugAkAAAAAAAAHIACwKDUHMQAoMQCIFH0hCa819UlXAAE09VBMVwoBUGY0/zT+NP00/DT7NPo0+SMJNPgyBjT3QhHsSCEPNAESRDQESSISTDQCEhFEKGQqZFBJNQNJSkpKSVcAIDX/JFs1/iVbNf1XMCA1/CEEWzX7IQVbNfohB1s1+SEIWzX4IRVbNfdJNQU19oAEJadS7TT2ULAxAIgT9FcAASJVIxJEMQCIE+dXCgEiVSMSQQBWgAgAAAAAAAAH7bApNQcxACgxAIgTxyIhBkxWZjEAKDEAiBO5IiJMVmaxIrIBNPeyCCOyEDEAsgezNP80/jT9NPw0+zT6NPk0+CMJMQAyBjT3SQlCEo6ACAAAAAAAAAf/sCk1BzEAKDEAiBNxIiJMVmY0/zT+NP00/DT7NPo0+TT4Iwk0A1dwIDIGNPdCElUhExJEITY0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yRbNf4lWzX9VzAgNfwhBFs1+yEFWzX6IQxbNfmABKvRFKKwNAMhDVs0+gg1+DT6iBMINPwxABJENANXYAEXQQAZNP80/jT9NPw0+zT6NPk0/jT8MgY0+EIR2LEisgE0+LIII7IQNP+yB7M0/yg0/4gSuSIhBkxWZjT/NP40/TT8NPs0+iM0+SMJMgY0+EkJQhCwSSEaDEAC5EkhFgxAAcBJIRsMQAEESCETNAESRDQESSISTDQCEhFEKGQqZFBJNQNJSkpKSVcAIDX/JFs1/iVbNf1XMCA1/CEEWzX7IQVbNfohB1s1+SEIWzX4IRVbNfdJNQU19oAEZRiTOzT2ULAxAIgSJlcAASJVIxJEMQCIEhlXCgEiVSMSQQBWgAgAAAAAAAAHj7ApNQcxACgxAIgR+SIhBkxWZjEAKDEAiBHrIiJMVmaxIrIBNPeyCCOyEDEAsgezNP80/jT9NPw0+zT6NPk0+CMJMQAyBjT3SQlCEDWACAAAAAAAAAehsCk1BzEAKDEAiBGjIiJMVmY0/zT+NP00/DT7NPo0+TT4Iwk0A1dwIDIGNPdCD/whFhJEITc0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yRbNf4lWzX9VzAgNfwhBFs1+yEFWzX6IQxbNfmABOQ1lYiwNAMhDVs0+gg1+DT6iBE6NPwxABJENANXYAEXQQAZNP80/jT9NPw0+zT6NPk0/jT8MgY0+EIPf7EisgE0+LIII7IQNP+yB7M0/yg0/4gQ6yIhBkxWZjT/NP40/TT8NPs0+iM0+SMJMgY0+EkJQg7iSCEWNAESRDQESSISTDQCEhFEKGRJNQNJSkpKSVcAIDX/JFs1/iVbNf1XMCA1/CEEWzX7IQVbNfpXYAEXNfkhDFs1+CENWzX3STUFNfaABDvuQEU09lCwMQA0/xIxAIgQalcAASJVIxIQRDEAiBBcVwoBIlUjEkEAUoAIAAAAAAAAB1WwKTUHMQAoMQCIEDwiIkxWZjT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5FlEHCFA0+BZQNPcWUChLAVcAcWdIITc1ATIGNQJCD66ACAAAAAAAAAezsCk1BzEAKDEAiA/qIiJMVmY0/zT+FlA0/RZQNPxQNPsWUDT6FlA0+RZRBwhQNPgWUDT3FlAoSwFXAHFnSCE2NQEyBjUCQg9cSSELDEABDCELEkQhODQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSklXACA1/yRbNf4lWzX9VzAgNfwhBFs1+yEFWzX6IQdbNfkhCFs1+CEUWzX3STUFNfaABOMbau809lCwIiMiMQCID0ZXAQlJNfUjWzT1IlVNNPYXEk0jEkEAUoAJAAAAAAAABegBsCo1BzEAKDEAiA8YIQmvNfVJVwABNPVQTFcKAVBmMQAoMQCIDv4jIQZMVmY0/zT+NP00/DT7NPo0+SMJNPgjCDIGNPdCCn+ACQAAAAAAAAX2ALAoNQcxACgxAIgOxiEJrzX1SVcAATT1UExXCgFQZjT/NP40/TT8NPs0+jT5Iwk0+DIGNPdCCj1IIQs0ARJENARJIhJMNAISEUQoZCpkUEk1A0lKSkpJVwAgNf8kWzX+JVs1/VcwIDX8IQRbNfshBVs1+iEHWzX5IQhbNfghFVs190k1BTX2gAR0451PNPZQsDEAiA49VwABIlUjEkQxAIgOMFcKASJVIxJBAFaACAAAAAAAAAbDsCk1BzEAKDEAiA4QIiEGTFZmMQAoMQCIDgIiIkxWZrEisgE097III7IQMQCyB7M0/zT+NP00/DT7NPo0+TT4IwkxADIGNPdJCUIK34AIAAAAAAAABtWwKTUHMQAoMQCIDboiIkxWZjT/NP40/TT8NPs0+jT5NPgjCTQDV3AgMgY090IKpkkhDgxABVJJIRcMQAJ8SSESDEABwEkhGAxAALUhGBJEITk0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yRbNf4lWzX9VzAgNfwhBFs1+yEFWzX6IQxbNfmABACB0o6wNAMhDVs0+gg1+DT6iA01NPwxABJENANXYAEXQQAZNP80/jT9NPw0+zT6NPk0/jT8MgY0+EIKDbEisgE0+LIII7IQNP+yB7M0/yg0/4gM5iIhBkxWZjT/NP40/TT8NPs0+iM0+SMJMgY0+EkJQgjlSCEYNAESRDQESSISTDQCEhFEKGQqZFBJNQNJSkpKSVcAIDX/JFs1/iVbNf1XMCA1/CEEWzX7IQVbNfohB1s1+SEIWzX4IRVbNfdJNQU19oAEdErMoDT2ULAxAIgMaFcAASJVIxJEMQCIDFtXCgEiVSMSQQBWgAgAAAAAAAAGZbApNQcxACgxAIgMOyIhBkxWZjEAKDEAiAwtIiJMVmaxIrIBNPeyCCOyEDEAsgezNP80/jT9NPw0+zT6NPk0+CMJMQAyBjT3SQlCCH+ACAAAAAAAAAZ3sCk1BzEAKDEAiAvlIiJMVmY0/zT+NP00/DT7NPo0+TT4Iwk0A1dwIDIGNPdCCEYhFxJEITo0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yRbNf4lWzX9VzAgNfwhBFs1+yEFWzX6IQxbNfmABM+JAiCwNAMhDVs0+gg1+DT6iAt8NPwxABJENANXYAEXQQAZNP80/jT9NPw0+zT6NPk0/jT8MgY0+EIHybEisgE0+LIII7IQNP+yB7M0/yg0/4gLLSIhBkxWZjT/NP40/TT8NPs0+iM0+SMJMgY0+EkJQgcsSSEGDEACNUkhJgxAAR1IIRc0ARJENARJIhJMNAISEUQoZEk1A0lKSkpJVwAgNf8kWzX+JVs1/VcwIDX8IQRbNfshBVs1+ldgARc1+SEMWzX4IQ1bNfdJNQU19oAE7X69+zT2ULAxADT/EjEAiAqeVwABIlUjEhBEMQCICpBXCgEiVSMSQQBSgAgAAAAAAAAGK7ApNQcxACgxAIgKcCIiTFZmNP80/hZQNP0WUDT8UDT7FlA0+hZQNPkWUQcIUDT4FlA09xZQKEsBVwBxZ0ghOjUBMgY1AkIJ4oAIAAAAAAAABomwKTUHMQAoMQCICh4iIkxWZjT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5FlEHCFA0+BZQNPcWUChLAVcAcWdIITk1ATIGNQJCCZAhBhJEIRE0ARJENARJIhJMNAISEUQoZEk1A0lKSkpXACA1/yRbNf4lWzX9VzAgNfwhBFs1+yEFWzX6IQdbNfkhCFs1+Ek1BTX3gAQ36eMgNPdQsDEANP8SMQCICYVXAAEiVSMSEEQiIyIxAIgJdFcBCUk19iNbNPYiVU009xcSTSMSQQBNgAkAAAAAAAAFvQGwKjUHMQAoMQCICUYhCa819klXAAE09lBMVwoBUGYxACgxAIgJLCMhBkxWZjT/NP40/TT8NPs0+jT5IzIGNPhCBLKACQAAAAAAAAboALAoNQcxACgxAIgI+SEJrzX2SVcAATT2UExXCgFQZjT/NP40/TT8NPs0+jT5IjIGNPhCBmshDhJEIQk0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFNf6ABGYf7tY0/lCwMQA0/xIxAIgImVcAASJVIxIQRIAIAAAAAAAABWiwKTUHMQAoMQCICHoqNP5QNf1JVwABNP1QTFcKAVBmNP80AyRbNAMlWzQDVzAgNAMhBFs0AyEFWzQDIQdbIjIGNAMhCFtCA1lJIRkMQAFHSSEeDEABBkkhHwxAAIQhHxJEITs0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8lWzX+IQVbNf1JNQU1/IAEyeiNDDT8ULA0/ogH+jEANP8SMQCIB+FXAAEiVSMSEESACAAAAAAAAAUYsCk1BzT/NAMkWzT+NANXMCA0AyEEWzT9NP40/TIGNAMhB1s0/ghCAjkhHhJEISA0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFNf6ABNTgGC00/lCwMQA0/xIxAIgHbVcAASJVIxMQRIAIAAAAAAAABNGwKTUHMQAoMQCIB04jIkxWZjT/NAMkWzQDJVs0A1cwIDQDIQRbIjIGNAMhBVtCAUYhGRJEIRk0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDQDVwAgNAMkWzQDJVsxADQDITxbMgYiQgC8SSMMQABYSCM0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8kWzX+JVs1/SE8WzX8gASai5F0sDT/MQASRDT/NP4WUDT9FlA0/BZQKEsBVwA4Z0ghGTUBMgY1AkIGQEiBoI0GiAaZIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEOWzX+IRJbNf2ABPdxE000/xZQNP4WUDT9FlCwMQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCBeI1/zX+Nf01/DX7Nfo1+TT9Ig1BADCABdUQ8MwCsDT5NPoWUDT7FlA0/FA0/RZQNP8WUChLAVcAYGdIISA1ATIGNQJCBZ2ABdUQ8MwBsEIFdjX/Nf41/TX8Nfs1+jX5Nfg0/TT5DEEALDT4NPkWUDT6FlA0+1A0/BZQNP0WUDT/FlAoSwFXAGhnSCE1NQEyBjUCQgVOgAXVEPDMBbA0+DT5FlA0+hZQNPtQNPwWUDT9FlA0/xZQKEsBVwBoZ0ghOzUBMgY1AkIFGjX/Nf41/TX8Nfs1+jX5Nfg19zX2NP0iDUEANDT2NPcWUDT4FlA0+VA0+hZQNPsWUDT8FlA0/RZQNP8WUChLAVcAeGdIIQo1ATIGNQJCBMuABdUQ8MwEsDT2NPcWUDT4FlA0+VA0+hZQNPsWUDT8FlA0/xZQKEsBVwBwZ0ghCTUBMgY1AkIEkzX/Nf41/TX8Nfs1+jX5Nfg19zX2NP00+wxBADM09jT3FlA0+BZQNPlQNPoWUDT7FlA0/BZQNP0WUDT/FlAoSwFXAHhnSCQ1ATIGNQJCBESABdUQ8MwAsDT2NPcWUDT4FlA0+VA0+hZQNPwWUDT9FlA0/xZQKEsBVwBwZ0ghETUBMgY1AkIEDDX/Nf41/TX8Nfs1+jX5Nfg19zX2NPwiDUEANDT2NPcWUDT4FlA0+VA0+hZQNPsWUDT8FlA0/RZQNP8WUChLAVcAeGdIITg1ATIGNQJCA72xIrIBNPuyCCOyEDT5sgezK7A09jT3NPg0+TT6NPs0/QoiNPc0/jT/NPsJQgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY0/SINQQA3NPY09xZQNPgWUDT5UDT6FlA0+xZQNPwWUQcIUDT9FlA0/xZQKEsBVwBxZ0ghFzUBMgY1AkIDPTT2NPc0+DT5NPojCTT+NP9C/Ug1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NP00+BI0/CINEEEAPjT1NPYWUDT3FlA0+FA0+RZQNPoWUDT7FlA0/BZQNPhQNP8WUChLAVcAf2cqSwFXfxlnSCEYNQEyBjUCQgLJsSKyATT/sggjshA0/bIHszT1NPY09zT4NPk0+iM0+yMJNP40/0kJQv8QNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT9NPgSNPwiDRBBAD409TT2FlA09xZQNPhQNPkWUDT6FlA0+xZQNPwWUDT4UDT/FlAoSwFXAH9nKksBV38ZZ0ghCzUBMgY1AkICPrEisgE0/7III7IQNP2yB7M09TT2NPc0+DT5NPojNPsjCTT+NP9JCUL+hTX/Nf41/TX8Nfs1+jX5Nfg19zX2NPwiDUEANDT2NPcWUDT4FlA0+VA0+hZQNPsWUDT8FlA0/RZQNP8WUChLAVcAeGdIIRA1ATIGNQJCAcWxIrIBNPuyCCOyEDT5sgezK7A09jT3NPg0+TT6NPs0/QoiNPc0/jT/NPsJQgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY0/SINQQA3NPY09xZQNPgWUDT5UDT6FlA0+xZQNPwWUQcIUDT9FlA0/xZQKEsBVwBxZ0ghFjUBMgY1AkIBRTT2NPc0+DT5NPojCTT+NP9C+1A1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NP00+BI0/CINEEEAPjT1NPYWUDT3FlA0+FA0+RZQNPoWUDT7FlA0/BZQNPhQNP8WUChLAVcAf2cqSwFXfxlnSCETNQEyBjUCQgDRsSKyATT/sggjshA0/bIHszT1NPY09zT4NPk0+iM0+yMJNP40/0kJQv8QNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT9NPgSNPwiDRBBAD409TT2FlA09xZQNPhQNPkWUDT6FlA0+xZQNPwWUDT4UDT/FlAoSwFXAH9nKksBV38ZZ0ghDzUBMgY1AkIARrEisgE0/7III7IQNP2yB7M09TT2NPc0+DT5NPojNPsjCTT+NP9JCUL+hTEZISASRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghEa+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 3,
  mapDataKeys: 1,
  mapDataSize: 11,
  stateKeys: 2,
  stateSize: 152,
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
                "name": "v1186",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1187",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1188",
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
                "name": "v1186",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1187",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1188",
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
                "name": "v1451",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1567",
                "type": "bool"
              }
            ],
            "internalType": "struct T46",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T47",
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
                "name": "v1626",
                "type": "bool"
              }
            ],
            "internalType": "struct T52",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T53",
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
                "internalType": "bool",
                "name": "v1720",
                "type": "bool"
              }
            ],
            "internalType": "struct T57",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T58",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e19",
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
                "name": "v1499",
                "type": "tuple"
              }
            ],
            "internalType": "struct T59",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T60",
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
                "name": "v1865",
                "type": "bool"
              }
            ],
            "internalType": "struct T66",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T67",
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
                "internalType": "bool",
                "name": "v1924",
                "type": "bool"
              }
            ],
            "internalType": "struct T72",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T73",
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
                "name": "v2018",
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
    "name": "_reach_e29",
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
                "name": "v1797",
                "type": "tuple"
              }
            ],
            "internalType": "struct T79",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T80",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e30",
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
                "name": "v1417",
                "type": "tuple"
              }
            ],
            "internalType": "struct T81",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T82",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e31",
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
                "name": "v1338",
                "type": "bool"
              }
            ],
            "internalType": "struct T83",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T84",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e32",
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
                "name": "v1264",
                "type": "bool"
              }
            ],
            "internalType": "struct T85",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T86",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e33",
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
                "name": "v1223",
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
                "name": "v1293",
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
                "name": "v1374",
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
    "name": "_reach_oe_v1233",
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
    "name": "_reach_oe_v1273",
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
    "name": "_reach_oe_v1304",
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
    "name": "_reach_oe_v1352",
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
    "name": "_reach_oe_v1384",
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
    "name": "_reach_oe_v1427",
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
    "name": "_reach_oe_v1469",
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
    "name": "_reach_oe_v1512",
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
    "name": "_reach_oe_v1526",
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
    "name": "_reach_oe_v1579",
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
    "name": "_reach_oe_v1637",
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
    "name": "_reach_oe_v1655",
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
    "name": "_reach_oe_v1673",
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
    "name": "_reach_oe_v1731",
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
    "name": "_reach_oe_v1749",
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
    "name": "_reach_oe_v1768",
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
    "name": "_reach_oe_v1810",
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
    "name": "_reach_oe_v1824",
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
    "name": "_reach_oe_v1877",
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
    "name": "_reach_oe_v1935",
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
    "name": "_reach_oe_v1953",
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
    "name": "_reach_oe_v1971",
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
    "name": "_reach_oe_v2029",
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
    "name": "_reach_oe_v2047",
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
    "name": "_Player_getRole31",
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
    "name": "_Player_join33",
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
    "name": "_Player_receivePay13",
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
    "name": "_Player_receivePay19",
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
    "name": "_Player_receivePay26",
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
    "name": "_Player_receivePay29",
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
    "name": "_Player_seeWinner20",
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
    "name": "_Player_seeWinner30",
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
    "name": "_Player_wager32",
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
                "name": "v1451",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1567",
                "type": "bool"
              }
            ],
            "internalType": "struct T46",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T47",
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
                "name": "v1626",
                "type": "bool"
              }
            ],
            "internalType": "struct T52",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T53",
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
                "internalType": "bool",
                "name": "v1720",
                "type": "bool"
              }
            ],
            "internalType": "struct T57",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T58",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m19",
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
                "name": "v1499",
                "type": "tuple"
              }
            ],
            "internalType": "struct T59",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T60",
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
                "name": "v1865",
                "type": "bool"
              }
            ],
            "internalType": "struct T66",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T67",
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
                "internalType": "bool",
                "name": "v1924",
                "type": "bool"
              }
            ],
            "internalType": "struct T72",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T73",
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
                "name": "v2018",
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
    "name": "_reach_m29",
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
                "name": "v1797",
                "type": "tuple"
              }
            ],
            "internalType": "struct T79",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T80",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m30",
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
                "name": "v1417",
                "type": "tuple"
              }
            ],
            "internalType": "struct T81",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T82",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m31",
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
                "name": "v1338",
                "type": "bool"
              }
            ],
            "internalType": "struct T83",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T84",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m32",
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
                "name": "v1264",
                "type": "bool"
              }
            ],
            "internalType": "struct T85",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T86",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m33",
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
                "name": "v1223",
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
                "name": "v1293",
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
                "name": "v1374",
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
  Bytecode: `0x60806040526040516200777a3803806200777a833981016040819052620000269162000255565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a162000095341560076200014e565b620000ca604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a0909301905281516200014592600292019062000178565b50505062000329565b81620001745760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200018690620002ec565b90600052602060002090601f016020900481019282620001aa5760008555620001f5565b82601f10620001c557805160ff1916838001178555620001f5565b82800160010185558215620001f5579182015b82811115620001f5578251825591602001919060010190620001d8565b506200020392915062000207565b5090565b5b8082111562000203576000815560010162000208565b604051606081016001600160401b03811182821017156200024f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200026957600080fd5b604080519081016001600160401b03811182821017156200029a57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002b457600080fd5b620002be6200021e565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200030157607f821691505b602082108114156200032357634e487b7160e01b600052602260045260246000fd5b50919050565b61744180620003396000396000f3fe6080604052600436106102745760003560e01c8063891e833b1161014e578063c8b91c9e116100bb578063edd136c611610077578063edd136c614610599578063f0b0bac1146105a1578063f3200965146105a9578063f6053350146105b1578063f780ed47146105c4578063fd83a4e8146105d757005b8063c8b91c9e14610518578063cadc2e7a1461052b578063d09ec8de14610558578063e07016ee1461056b578063e4a4e8801461057e578063ecacb5b51461059157005b8063a9b9855c1161010a578063a9b9855c146104ac578063ab53f2c6146104bf578063ac420936146104e2578063b26072a7146104ea578063b69e158a146104fd578063c855f5d01461051057005b8063891e833b146104505780638ebe74ee1461045857806398b99f6b1461046b5780639f25181014610473578063a035b2e014610486578063a98bf2231461049957005b80634565f536116101ec5780636da017a0116101a85780636da017a0146103da5780637eea518c146103ed578063817d57f3146104005780638323075714610420578063876496881461043557806387daa2191461043d57005b80634565f5361461037e57806351b5d6d214610386578063531291b71461039957806355887919146103ac57806358892c90146103bf5780635dde45b3146103c757005b80632c10a1591161023b5780632c10a159146102ed5780633750b462146103005780633b55bda3146103185780633bc5b7bf1461032b5780633c2493ab146103585780634364845c1461036b57005b80630b9184ce1461027d5780630ca328e4146102905780631e93b0f1146102a35780631f6a9c4d146102c7578063230f396e146102da57005b3661027b57005b005b61027b61028b3660046167ea565b6105df565b61027b61029e3660046167ea565b610603565b3480156102af57600080fd5b506003545b6040519081526020015b60405180910390f35b61027b6102d53660046167ea565b610623565b61027b6102e83660046167ea565b610643565b61027b6102fb3660046167ea565b610663565b610308610683565b60405190151581526020016102be565b61027b6103263660046167ea565b610762565b34801561033757600080fd5b5061034b61034636600461681b565b610782565b6040516102be919061685e565b61027b6103663660046167ea565b6107ae565b610308610379366004616890565b6107ce565b6103086107fe565b610308610394366004616890565b61082e565b6103086103a7366004616890565b61085e565b61027b6103ba3660046167ea565b61088f565b6103086108af565b61027b6103d53660046167ea565b6108df565b61027b6103e83660046167ea565b6108ff565b61027b6103fb3660046167ea565b61091f565b34801561040c57600080fd5b5061034b61041b36600461681b565b61093f565b34801561042c57600080fd5b506001546102b4565b610308610965565b61030861044b366004616890565b610995565b6103086109c6565b61027b6104663660046167ea565b6109f6565b610308610a16565b61027b6104813660046167ea565b610a45565b61027b6104943660046167ea565b610a65565b61027b6104a73660046167ea565b610a85565b61027b6104ba3660046167ea565b610aa5565b3480156104cb57600080fd5b506104d4610ac5565b6040516102be9291906168a9565b610308610b62565b6103086104f8366004616890565b610d75565b61030861050b366004616890565b610e70565b610308610eeb565b610308610526366004616890565b610f9e565b34801561053757600080fd5b5061054b61054636600461681b565b610fcf565b6040516102be9190616906565b61027b6105663660046167ea565b610ff5565b61027b6105793660046167ea565b611015565b61027b61058c3660046167ea565b611035565b610308611055565b610308611085565b6103086110b5565b6103086110e5565b61027b6105bf3660046167ea565b611114565b61027b6105d23660046167ea565b611134565b610308611154565b6105e7616290565b6105ff6105f936849003840184616a5c565b82611183565b5050565b61060b616290565b6105ff61061d36849003840184616a5c565b82611503565b61062b616290565b6105ff61063d36849003840184616a5c565b82611741565b61064b616290565b6105ff61065d36849003840184616add565b82611974565b61066b616290565b6105ff61067d36849003840184616af9565b82611baa565b600080546006148061069757506000546020145b6106a057600080fd5b6000546006141561071457306001600160a01b031663edd136c66040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070f9190616b68565b905090565b6000546020141561075f57306001600160a01b031663f0b0bac16040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b90565b61076a616290565b6105ff61077c36849003840184616add565b82611d93565b60408051606081018252600080825260208201819052918101919091526107a882612130565b92915050565b6107b6616290565b6105ff6107c836849003840184616add565b82612208565b60006107d8616334565b6020810151518390526107e9616290565b6107f38282611503565b602001519392505050565b6000610808616366565b602081015160009052610819616290565b6108238282612208565b610160015192915050565b6000610838616334565b602081015151839052610849616290565b6108538282611741565b604001519392505050565b6000610868616334565b602081015151839052610879616290565b61088382826125a5565b6101c001519392505050565b610897616290565b6105ff6108a936849003840184616a5c565b826125a5565b60006108b9616366565b6020810151600090526108ca616290565b6108d48282611d93565b610100015192915050565b6108e7616290565b6105ff6108f936849003840184616add565b8261292e565b610907616290565b6105ff61091936849003840184616add565b82612c5c565b610927616290565b6105ff61093936849003840184616af9565b82612e79565b60408051606081018252600080825260208201819052918101919091526107a882612feb565b600061096f616366565b602081015160009052610980616290565b61098a828261292e565b610140015192915050565b600061099f616334565b6020810151518390526109b0616290565b6109ba8282611183565b6101e001519392505050565b60006109d0616366565b6020810151600090526109e1616290565b6109eb8282613078565b610120015192915050565b6109fe616290565b6105ff610a1036849003840184616af9565b82613415565b6000610a20616366565b602081015160009052610a31616290565b610a3b828261370a565b60e0015192915050565b610a4d616290565b6105ff610a5f36849003840184616af9565b82613a38565b610a6d616290565b6105ff610a7f36849003840184616af9565b82613d27565b610a8d616290565b6105ff610a9f36849003840184616add565b82613f1f565b610aad616290565b6105ff610abf36849003840184616add565b8261370a565b600060606000546002808054610ada90616b85565b80601f0160208091040260200160405190810160405280929190818152602001828054610b0690616b85565b8015610b535780601f10610b2857610100808354040283529160200191610b53565b820191906000526020600020905b815481529060010190602001808311610b3657829003601f168201915b50505050509050915091509091565b60008054600d1480610b7657506000546010145b80610b8357506000546013145b80610b9057506000546017145b80610b9d5750600054601a145b80610baa5750600054601d145b610bb357600080fd5b600054600d1415610bfe57306001600160a01b03166398b99f6b6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b60005460101415610c4957306001600160a01b03166358892c906040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b60005460131415610c9457306001600160a01b031663891e833b6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b60005460171415610cdf57306001600160a01b031663876496886040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b600054601a1415610d2a57306001600160a01b0316634565f5366040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b600054601d141561075f57306001600160a01b031663ecacb5b56040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b60008054600a1480610d8957506000546014145b80610d965750600054601e145b610d9f57600080fd5b600054600a1415610e0d5760405163531291b760e01b815260048101839052309063531291b7906024015b6020604051808303816000875af1158015610de9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a89190616b68565b60005460141415610e3c576040516387daa21960e01b81526004810183905230906387daa21990602401610dca565b600054601e1415610e6b5760405163645c8e4f60e11b815260048101839052309063c8b91c9e90602401610dca565b919050565b6000805460081480610e845750600054601f145b610e8d57600080fd5b60005460081415610ebc576040516310d9211760e21b8152600481018390523090634364845c90602401610dca565b600054601f1415610e6b576040516328daeb6960e11b81526004810183905230906351b5d6d290602401610dca565b6000805460041480610eff57506000546021145b610f0857600080fd5b60005460041415610f5357306001600160a01b031663f32009656040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b6000546021141561075f57306001600160a01b031663fd83a4e86040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106eb573d6000803e3d6000fd5b6000610fa8616334565b602081015151839052610fb9616290565b610fc3828261414a565b61020001519392505050565b60408051606081018252600080825260208201819052918101919091526107a8826144bf565b610ffd616290565b6105ff61100f36849003840184616add565b82614582565b61101d616290565b6105ff61102f36849003840184616add565b8261491f565b61103d616290565b6105ff61104f36849003840184616a5c565b8261414a565b600061105f616366565b602081015160009052611070616290565b61107a8282614582565b610180015192915050565b600061108f616366565b6020810151600090526110a0616290565b6110aa8282612c5c565b610240015192915050565b60006110bf616366565b6020810151600090526110d0616290565b6110da8282611974565b610260015192915050565b60006110ef616366565b602081015160009052611100616290565b61110a8282613f1f565b6080015192915050565b61111c616290565b6105ff61112e36849003840184616af9565b82614b3f565b61113c616290565b6105ff61114e36849003840184616add565b82613078565b600061115e616366565b60208101516000905261116f616290565b611179828261491f565b60a0015192915050565b6111936015600054146034614d37565b81516111ae9015806111a757508251600154145b6035614d37565b6000808055600280546111c090616b85565b80601f01602080910402602001604051908101604052809291908181526020018280546111ec90616b85565b80156112395780601f1061120e57610100808354040283529160200191611239565b820191906000526020600020905b81548152906001019060200180831161121c57829003601f168201915b50505050508060200190518101906112519190616c4c565b90507fdcf26d41875d589aabd0f8284691cd0af439a4906f715a9a317c07aa814cb6fb3384604051611284929190616c69565b60405180910390a161129834156033614d37565b60208301515151600190816112ac336144bf565b5160018111156112be576112be616838565b146112ca5760006112d8565b6112d3336144bf565b604001515b146112e45760006112e7565b60015b141561140d57604051600181527ffae4a69d511fa08abfbd964471978799b40c8c01e16b6c2cc9dfc223ebb25f1c9060200160405180910390a160016101a08301819052336000908152600560209081526040808320805461ffff19168155840183905560069091529020805462ff00ff19169091179055611367616390565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08201516113c5906001614d5d565b60208201515260e08201516113db906001614dac565b602080830180519091019190915280514360409091015261010083015190516060015261140781614df9565b50505050565b604051600081527f21e015075526b03e740fedb9ce33fa0d8a5ff6516b38060da9102154578367489060200160405180910390a160006101a08301819052338152600560205260408120805461ffff191681556001015561146c616390565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08201516114ca906001614d5d565b602080830180519290925260e084015182519091015280514360409091015261010083015190516060015261140781614df9565b505050565b6115136009600054146019614d37565b815161152e90158061152757508251600154145b601a614d37565b60008080556002805461154090616b85565b80601f016020809104026020016040519081016040528092919081815260200182805461156c90616b85565b80156115b95780601f1061158e576101008083540402835291602001916115b9565b820191906000526020600020905b81548152906001019060200180831161159c57829003601f168201915b50505050508060200190518101906115d19190616d43565b90507f0d0c50c34bf538d7a3a69bc85bb10bcfe23f8f46c119741a7807a8319a6ae2483384604051611604929190616c69565b60405180910390a161161834156017614d37565b805161165a906001600160a01b03163314611634576000611653565b600161163f33612130565b51600181111561165157611651616838565b145b6018614d37565b604051600081527fccc1ca5cc5f0227aa3b6bde8b9d6108561308b7a27310b38a7d8691c6ead7a909060200160405180910390a16000808352338152600560209081526040909120805460ff1916600190811782559185015151519101556116c06163fb565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925260808085015184519091015260a08085015184519091015260c08085015184519091015280830180516000905280514392019190915260e08401519051909101526114078161504f565b611751602060005414604f614d37565b815161176c90158061176557508251600154145b6050614d37565b60008080556002805461177e90616b85565b80601f01602080910402602001604051908101604052809291908181526020018280546117aa90616b85565b80156117f75780601f106117cc576101008083540402835291602001916117f7565b820191906000526020600020905b8154815290600101906020018083116117da57829003601f168201915b505050505080602001905181019061180f9190616c4c565b90507f116e00b68618d6bd158da087caeeece48a5b0b1ea3e15a88ffd71f966f8f9e3e3384604051611842929190616c69565b60405180910390a16118563415604d614d37565b61187e600161186433612130565b51600181111561187657611876616838565b14604e614d37565b604051600081527fcbc36556b92829da21812d87c95b56f42bbb8c4969a6fd33e7adfe3caf2368a69060200160405180910390a16000808352338152600560209081526040909120805460ff1916600190811782559185015151519101556118e46163fb565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e082015161194e906001614dac565b60208083018051929092528151439101526101008301519051604001526114078161504f565b6119846021600054146053614d37565b815161199f90158061199857508251600154145b6054614d37565b6000808055600280546119b190616b85565b80601f01602080910402602001604051908101604052809291908181526020018280546119dd90616b85565b8015611a2a5780601f106119ff57610100808354040283529160200191611a2a565b820191906000526020600020905b815481529060010190602001808311611a0d57829003601f168201915b5050505050806020019051810190611a429190616c4c565b90507f2ab3768601c2011922bc14e77a3294be1b91cae31d82de5271d70e979c7499ad3384604051611a75929190616d60565b60405180910390a1611aa56001611a8b33612130565b516001811115611a9d57611a9d616838565b146051614d37565b611ab6816040015134146052614d37565b604051600081527ff350600f78c4ab622df2355f313525c831adf239fe1cd4d6cc25a9fb79dd39239060200160405180910390a16000610220830152611afa616481565b815181516001600160a01b039182169052602080840151835190910152604080840180518451909201919091526060808501518451931692019190915260808084015183519091015260a08084015183519091015260c08301519051611b609190614dac565b60208201515260e0820151611b76906001614d5d565b6020828101805190910191909152514360409182015261010083015190830151015b60208201516060015261140781615262565b611bba600160005414600a614d37565b8151611bd5901580611bce57508251600154145b600b614d37565b600080805560028054611be790616b85565b80601f0160208091040260200160405190810160405280929190818152602001828054611c1390616b85565b8015611c605780601f10611c3557610100808354040283529160200191611c60565b820191906000526020600020905b815481529060010190602001808311611c4357829003601f168201915b5050505050806020019051810190611c789190616d8a565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051611cab929190616e07565b60405180910390a1611cbf34156008614d37565b8051611cd7906001600160a01b031633146009614d37565b611d0b604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b031680825260208084015181840190815260408086015181860190815260608088015181880190815260026000554360015583519586019690965292519184019190915251908201529051608082015260a0015b60405160208183030381529060405260029080519060200190611d8c9291906164c0565b5050505050565b611da36011600054146029614d37565b8151611dbe901580611db757508251600154145b602a614d37565b600080805560028054611dd090616b85565b80601f0160208091040260200160405190810160405280929190818152602001828054611dfc90616b85565b8015611e495780601f10611e1e57610100808354040283529160200191611e49565b820191906000526020600020905b815481529060010190602001808311611e2c57829003601f168201915b5050505050806020019051810190611e619190616ec9565b90507f0ee57ec4ccee7f41c279d8e964cfed8c10ea2cf1f82984995d6aa5922d4a28683384604051611e94929190616d60565b60405180910390a1611ea834156027614d37565b611ed06001611eb633612130565b516001811115611ec857611ec8616838565b146028614d37565b6001611edb33612feb565b516001811115611eed57611eed616838565b141561202c57604051600081527f53b26294374eb1ea5fd301e99f6138a1e9eadfbdb447a79c000c3b377f8b17119060200160405180910390a1600060c0830181905233808252600660209081526040808420805462ffffff19908116909155600490925280842080549092169091556101208401519051919281156108fc029290818181858888f19350505050158015611f8c573d6000803e3d6000fd5b50611f95616544565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e0820151611fff906001614d5d565b60208281018051929092528151339101525143604090910152600060208201516060015261140781615469565b604051600081527f84ec5632ceb04c22b207292f417fd65696cc1f8089566a1983041461a7d3755f9060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff19169055612087616544565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e08201516120f1906001614d5d565b602080830180519290925261010084015182516001600160a01b0390911691015280514360409091015261012083015190516060015261140781615469565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561217c5761217c616838565b14156121f9576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156121bd576121bd616838565b60018111156121ce576121ce616838565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b612218601b600054146040614d37565b815161223390158061222c57508251600154145b6041614d37565b60008080556002805461224590616b85565b80601f016020809104026020016040519081016040528092919081815260200182805461227190616b85565b80156122be5780601f10612293576101008083540402835291602001916122be565b820191906000526020600020905b8154815290600101906020018083116122a157829003601f168201915b50505050508060200190518101906122d69190616ec9565b90507fadd4c7f3d57d8b248e35dfaeed2d54392e536e02c2c4de5ab6fb5ef4e5e63ad03384604051612309929190616d60565b60405180910390a161231d3415603e614d37565b612345600161232b33612130565b51600181111561233d5761233d616838565b14603f614d37565b600161235033612feb565b51600181111561236257612362616838565b14156124a157604051600081527f16f042b34eff3879b0b4b7f6459a33d024c50e81ceeafaacb66cec02c086c4bf9060200160405180910390a1600060c0830181905233808252600660209081526040808420805462ffffff19908116909155600490925280842080549092169091556101208401519051919281156108fc029290818181858888f19350505050158015612401573d6000803e3d6000fd5b5061240a616544565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e0820151612474906001614d5d565b602082810180519290925281513391015251436040909101526000602082015160600152611407816156c8565b604051600081527f6f098552c38d900d975f3bb69473f5daf2cbe48b3b501161176a62388517be599060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff191690556124fc616544565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e0820151612566906001614d5d565b602080830180519290925261010084015182516001600160a01b03909116910152805143604090910152610120830151905160600152611407816156c8565b6125b5600b60005414601d614d37565b81516125d09015806125c957508251600154145b601e614d37565b6000808055600280546125e290616b85565b80601f016020809104026020016040519081016040528092919081815260200182805461260e90616b85565b801561265b5780601f106126305761010080835404028352916020019161265b565b820191906000526020600020905b81548152906001019060200180831161263e57829003601f168201915b50505050508060200190518101906126739190616d43565b90507f8ef10ecf82600a0e607d2b4732e42a9011d02a836d5c8900039202caf70fa8f233846040516126a6929190616c69565b60405180910390a16126ba3415601b614d37565b80516126fc906001600160a01b031633146126d65760006126f5565b60016126e133612130565b5160018111156126f3576126f3616838565b145b601c614d37565b6020830151515160019081612710336144bf565b51600181111561272257612722616838565b1461272e57600061273c565b612737336144bf565b604001515b1461274857600061274b565b60015b141561284d57604051600181527fc1bbaa6dbc15990cc4c3b78c21dec9e684ba09a2718716fc646e11ac05815f279060200160405180910390a160016101a08301819052336000908152600560209081526040808320805461ffff19168155840183905560069091529020805462ff00ff191690911790556127cb616390565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855194169381019390935260808086015185519091015260a08086015185519091015260c08501518285018051919091528051600193019290925281514391015260e084015190519091015261140781614df9565b604051600081527fec54ea6165dc5353ae5c508fa10a7751da2aeb2d6c0a364d858371b4d7797dd89060200160405180910390a160006101a08301819052338152600560205260408120805461ffff19168155600101556128ac616390565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855194169381019390935260808086015185519091015260a08086015185519091015260c08501518285018051919091528051600093019290925281514391015260e084015190519091015261140781615900565b61293e6018600054146038614d37565b815161295990158061295257508251600154145b6039614d37565b60008080556002805461296b90616b85565b80601f016020809104026020016040519081016040528092919081815260200182805461299790616b85565b80156129e45780601f106129b9576101008083540402835291602001916129e4565b820191906000526020600020905b8154815290600101906020018083116129c757829003601f168201915b50505050508060200190518101906129fc9190616f74565b90507f680249228d8618a45b50a0ae255e010443406da860026841fad3e6b41439b6183384604051612a2f929190616d60565b60405180910390a1612a4334156036614d37565b8051612a85906001600160a01b03163314612a5f576000612a7e565b6001612a6a33612130565b516001811115612a7c57612a7c616838565b145b6037614d37565b6001612a9033612feb565b516001811115612aa257612aa2616838565b1415612b8257604051600081527f1caa275c573280d9ca40f68307445d186a35f0f6a52456dd1e971cb0634afe979060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff19169055612b03616590565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092526080808501519084015260a0808501519084015260c08085015115159084015260e0808501519084015261010080850151908401526019600055436001559051611d6891839101616f91565b604051600081527f660809e664922b08aedce54e120c14b0cd71a7f1888c4a77b6bc2d5482e560bd9060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff19169055612bdd616590565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092526080808501519084015260a0808501519084015260c08085015115159084015260e080850151908401526101008085015190840152601c600055436001559051611d6891839101616f91565b612c6c6007600054146015614d37565b8151612c87901580612c8057508251600154145b6016614d37565b600080805560028054612c9990616b85565b80601f0160208091040260200160405190810160405280929190818152602001828054612cc590616b85565b8015612d125780601f10612ce757610100808354040283529160200191612d12565b820191906000526020600020905b815481529060010190602001808311612cf557829003601f168201915b5050505050806020019051810190612d2a9190617000565b90507f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe3384604051612d5d929190616d60565b60405180910390a1612d76816040015134146013614d37565b8051612db8906001600160a01b03163314612d92576000612db1565b6001612d9d33612130565b516001811115612daf57612daf616838565b145b6014614d37565b604051600081527f739cba73c279725c50ecd2780eed20435186508b90b669de3209d5965684876a9060200160405180910390a16000610220830152612dfc616481565b815181516001600160a01b03918216905260208084015183518201526040808501805185518301526060808701518651951694019390935260808086015185519091015260a080860180518651909201919091528351838601805191909152905181519093019290925290514391015260c0830151905101611b98565b612e89600260005414600d614d37565b8151612ea4901580612e9d57508251600154145b600e614d37565b600080805560028054612eb690616b85565b80601f0160208091040260200160405190810160405280929190818152602001828054612ee290616b85565b8015612f2f5780601f10612f0457610100808354040283529160200191612f2f565b820191906000526020600020905b815481529060010190602001808311612f1257829003601f168201915b5050505050806020019051810190612f479190616d8a565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503384604051612f7a929190616e07565b60405180910390a1612f8e3415600c614d37565b612f966165f0565b815181516001600160a01b039091169052602080830151825182015260408084015183518201528251336060918201528401518284018051919091528051439301929092529051600091015261140781615b32565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff16600181111561303757613037616838565b14156121f9576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156121bd576121bd616838565b6130886014600054146031614d37565b81516130a390158061309c57508251600154145b6032614d37565b6000808055600280546130b590616b85565b80601f01602080910402602001604051908101604052809291908181526020018280546130e190616b85565b801561312e5780601f106131035761010080835404028352916020019161312e565b820191906000526020600020905b81548152906001019060200180831161311157829003601f168201915b50505050508060200190518101906131469190616ec9565b90507fc481898b6397924b9ae6276db21d0cd8f5b982e79a481d958d8e360148cf6a7e3384604051613179929190616d60565b60405180910390a161318d3415602f614d37565b6131b5600161319b33612130565b5160018111156131ad576131ad616838565b146030614d37565b60016131c033612feb565b5160018111156131d2576131d2616838565b141561331157604051600081527ffe6b60f5405e572b59113674d6f1060f77b9439a44d5f401987b419d3101632b9060200160405180910390a1600060c0830181905233808252600660209081526040808420805462ffffff19908116909155600490925280842080549092169091556101208401519051919281156108fc029290818181858888f19350505050158015613271573d6000803e3d6000fd5b5061327a616544565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e08201516132e4906001614d5d565b60208281018051929092528151339101525143604090910152600060208201516060015261140781615cb4565b604051600081527ffd68718b48adc9ae23e3063c82be3e2fb2723c36304247c9d13de7b8035de3239060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff1916905561336c616544565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e08201516133d6906001614d5d565b602080830180519290925261010084015182516001600160a01b0390911691015280514360409091015261012083015190516060015261140781615cb4565b613425601c600054146044614d37565b815161344090158061343957508251600154145b6045614d37565b60008080556002805461345290616b85565b80601f016020809104026020016040519081016040528092919081815260200182805461347e90616b85565b80156134cb5780601f106134a0576101008083540402835291602001916134cb565b820191906000526020600020905b8154815290600101906020018083116134ae57829003601f168201915b50505050508060200190518101906134e39190616f74565b90506134fb6040518060200160405280600081525090565b7ffa2742024f1977b0cd88e2d1726ea822f20bb74e6ab0a49a9257e9f2c72aed7d338560405161352c929190616e07565b60405180910390a161010082015160a083015101815260a08201516135549034146042614d37565b606082015161356f906001600160a01b031633146043614d37565b8160c001511561361357613581616544565b825181516001600160a01b0391821690526020808501805184518301526040808701518551820152606080880180518751908716908301526080808a015188519091015260a0808a015188519091015260e0890151875160c001529251848701805191909152925183519516949093019390935280514393019290925283519151015261360d81615df9565b50611407565b815181516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561364d573d6000803e3d6000fd5b5081516001600160a01b03166000908152600660205260409020805462ffffff19169055613679616620565b825181516001600160a01b03918216905260208085015183518201526040808601518451909101526060808601518451931692019190915260808085015183519091015260a08085015183519091015281015160019081905260e08401516136e091614d5d565b602082810180519091019190915251436040909101526000602082015160600152611d8c81615f3e565b61371a600e600054146021614d37565b815161373590158061372e57508251600154145b6022614d37565b60008080556002805461374790616b85565b80601f016020809104026020016040519081016040528092919081815260200182805461377390616b85565b80156137c05780601f10613795576101008083540402835291602001916137c0565b820191906000526020600020905b8154815290600101906020018083116137a357829003601f168201915b50505050508060200190518101906137d89190616f74565b90507fc299decf3d819192b45fbfa5962d20828e9997091c154d6e4234231c271ca3a3338460405161380b929190616d60565b60405180910390a161381f3415601f614d37565b8051613861906001600160a01b0316331461383b57600061385a565b600161384633612130565b51600181111561385857613858616838565b145b6020614d37565b600161386c33612feb565b51600181111561387e5761387e616838565b141561395e57604051600081527fb0e9c67f4f287ac926943f50e7dadf88a2179772136d6c357c9e5e114e9d52619060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff191690556138df616590565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092526080808501519084015260a0808501519084015260c08085015115159084015260e080850151908401526101008085015190840152600f600055436001559051611d6891839101616f91565b604051600081527f9d1e7b809f666614beb0cd26b8d82cff4f3bddaaf9169c9bd70c85934f2b615a9060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff191690556139b9616590565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092526080808501519084015260a0808501519084015260c08085015115159084015260e0808501519084015261010080850151908401526012600055436001559051611d6891839101616f91565b613a48601260005414602d614d37565b8151613a63901580613a5c57508251600154145b602e614d37565b600080805560028054613a7590616b85565b80601f0160208091040260200160405190810160405280929190818152602001828054613aa190616b85565b8015613aee5780601f10613ac357610100808354040283529160200191613aee565b820191906000526020600020905b815481529060010190602001808311613ad157829003601f168201915b5050505050806020019051810190613b069190616f74565b9050613b1e6040518060200160405280600081525090565b7f64113158b98ebf731808bbb342c34e04d362d554ea35de57d908ad65e9eed2353385604051613b4f929190616e07565b60405180910390a161010082015160a083015101815260a0820151613b77903414602b614d37565b6060820151613b92906001600160a01b03163314602c614d37565b8160c0015115613c3057613ba4616544565b825181516001600160a01b0391821690526020808501805184518301526040808701518551820152606080880180518751908716908301526080808a015188519091015260a0808a015188519091015260e0890151875160c001529251848701805191909152925183519516949093019390935280514393019290925283519151015261360d81615cb4565b815181516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613c6a573d6000803e3d6000fd5b5081516001600160a01b03166000908152600660205260409020805462ffffff19169055613c96616620565b825181516001600160a01b03918216905260208085015183518201526040808601518451909101526060808601518451931692019190915260808085015183519091015260a08085015183519091015281015160019081905260e0840151613cfd91614d5d565b602082810180519091019190915251436040909101526000602082015160600152611d8c81616062565b613d37600f600054146025614d37565b8151613d52901580613d4b57508251600154145b6026614d37565b600080805560028054613d6490616b85565b80601f0160208091040260200160405190810160405280929190818152602001828054613d9090616b85565b8015613ddd5780601f10613db257610100808354040283529160200191613ddd565b820191906000526020600020905b815481529060010190602001808311613dc057829003601f168201915b5050505050806020019051810190613df59190616f74565b9050613e0d6040518060200160405280600081525090565b7fbceae83a94d4d1f9424beafb2b187ba867236f6cf452b6b01322429f647490043385604051613e3e929190616e07565b60405180910390a161010082015160a083015101815260a0820151613e669034146023614d37565b6060820151613e81906001600160a01b031633146024614d37565b8160c0015115613c3057613e93616544565b825181516001600160a01b0391821690526020808501805184518301526040808701518551820152606080880180518751908716908301526080808a015188519091015260a0808a015188519091015260e0890151875160c001529251848701805191909152925183519516949093019390935280514393019290925283519151015261360d81615469565b613f2f6005600054146011614d37565b8151613f4a901580613f4357508251600154145b6012614d37565b600080805560028054613f5c90616b85565b80601f0160208091040260200160405190810160405280929190818152602001828054613f8890616b85565b8015613fd55780601f10613faa57610100808354040283529160200191613fd5565b820191906000526020600020905b815481529060010190602001808311613fb857829003601f168201915b5050505050806020019051810190613fed91906170a6565b90507f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943384604051614020929190616d60565b60405180910390a16140343415600f614d37565b8051614083906001600160a01b0316331461405057600061407c565b600161405b33612130565b51600181111561406d5761406d616838565b1461407957600161407c565b60005b6010614d37565b604051600081527fb6abe81cbd275f88dfe0b36b336dd68ba01c60238cedd2c8cf9313bad72ef16a9060200160405180910390a1600060608301819052338152600460205260409020805462ff00ff191660011790556140e161668c565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925260808085015184519091015280830180516000905280514392019190915260a0840151905190910152611407816160ff565b61415a601f60005414604b614d37565b815161417590158061416e57508251600154145b604c614d37565b60008080556002805461418790616b85565b80601f01602080910402602001604051908101604052809291908181526020018280546141b390616b85565b80156142005780601f106141d557610100808354040283529160200191614200565b820191906000526020600020905b8154815290600101906020018083116141e357829003601f168201915b50505050508060200190518101906142189190616c4c565b90507f5c8035541e3eb92c09bc1ada379548674f80095669b9e303e40e255cf856ffc2338460405161424b929190616c69565b60405180910390a161425f3415604a614d37565b6020830151515160019081614273336144bf565b51600181111561428557614285616838565b1461429157600061429f565b61429a336144bf565b604001515b146142ab5760006142ae565b60015b14156143ce57604051600181527fdbafb38ab6ae096f86e745afa2eed18c048575c189e7558a2e534eb9e4fa061f9060200160405180910390a160016101a08301819052336000908152600560209081526040808320805461ffff19168155840183905560069091529020805462ff00ff1916909117905561432e616390565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c082015161438c906001614d5d565b60208201515260e08201516143a2906001614dac565b602080830180519091019190915280514360409091015261010083015190516060015261140781615900565b604051600081527f04ae884c14ee197fbc49daced5c723c0e9ab5b4533b885ec5986b00de18d82d29060200160405180910390a160006101a08301819052338152600560205260408120805461ffff191681556001015561442d616390565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c082015161448b906001614d5d565b602080830180519290925260e084015182519091015280514360409091015261010083015190516060015261140781615900565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561450b5761450b616838565b14156121f9576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561454c5761454c616838565b600181111561455d5761455d616838565b81528154610100900460ff161515602082015260019091015460409091015292915050565b614592601e600054146048614d37565b81516145ad9015806145a657508251600154145b6049614d37565b6000808055600280546145bf90616b85565b80601f01602080910402602001604051908101604052809291908181526020018280546145eb90616b85565b80156146385780601f1061460d57610100808354040283529160200191614638565b820191906000526020600020905b81548152906001019060200180831161461b57829003601f168201915b50505050508060200190518101906146509190616ec9565b90507f77b3d5475f0eb469e120f27f05b37e58961501ecbd05cd52e95078115592da823384604051614683929190616d60565b60405180910390a161469734156046614d37565b6146bf60016146a533612130565b5160018111156146b7576146b7616838565b146047614d37565b60016146ca33612feb565b5160018111156146dc576146dc616838565b141561481b57604051600081527fe91948264beced5b00d4a0f199f531345269dad3aa3322b69d528532c4ed08ab9060200160405180910390a1600060c0830181905233808252600660209081526040808420805462ffffff19908116909155600490925280842080549092169091556101208401519051919281156108fc029290818181858888f1935050505015801561477b573d6000803e3d6000fd5b50614784616544565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e08201516147ee906001614d5d565b60208281018051929092528151339101525143604090910152600060208201516060015261140781615df9565b604051600081527fdb7350ec89defb2af69885a86110222a9262ac92e4949f389230a2218a9d97749060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff19169055614876616544565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e08201516148e0906001614d5d565b602080830180519290925261010084015182516001600160a01b0390911691015280514360409091015261012083015190516060015261140781615df9565b61492f6022600054146057614d37565b815161494a90158061494357508251600154145b6058614d37565b60008080556002805461495c90616b85565b80601f016020809104026020016040519081016040528092919081815260200182805461498890616b85565b80156149d55780601f106149aa576101008083540402835291602001916149d5565b820191906000526020600020905b8154815290600101906020018083116149b857829003601f168201915b50505050508060200190518101906149ed9190617000565b90507f5b2fd06f7ff40893bb60fe663e74f44b402062c661e4681e9c1523019d37a44f3384604051614a20929190616d60565b60405180910390a1614a3434156055614d37565b614a6a6001614a4233612130565b516001811115614a5457614a54616838565b14614a60576001614a63565b60005b6056614d37565b604051600081527f47127cfc36d601b1806f71ea2ba4da6a1621cdf5df3a2d0a2595bf1e5f2d753f9060200160405180910390a1600060608301819052338152600460205260409020805462ff00ff19166001179055614ac861668c565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a0820151614b1a906001614dac565b602080830180519290925281514391015260c0830151905160400152611407816160ff565b614b4f601960005414603c614d37565b8151614b6a901580614b6357508251600154145b603d614d37565b600080805560028054614b7c90616b85565b80601f0160208091040260200160405190810160405280929190818152602001828054614ba890616b85565b8015614bf55780601f10614bca57610100808354040283529160200191614bf5565b820191906000526020600020905b815481529060010190602001808311614bd857829003601f168201915b5050505050806020019051810190614c0d9190616f74565b9050614c256040518060200160405280600081525090565b7fc16265324396b4615004177193a57a0697de14cc64da1feff4f20c97b4ac24b83385604051614c56929190616e07565b60405180910390a161010082015160a083015101815260a0820151614c7e903414603a614d37565b6060820151614c99906001600160a01b03163314603b614d37565b8160c001511561361357614cab616544565b825181516001600160a01b0391821690526020808501805184518301526040808701518551820152606080880180518751908716908301526080808a015188519091015260a0808a015188519091015260e0890151875160c001529251848701805191909152925183519516949093019390935280514393019290925283519151015261360d816156c8565b816105ff5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082614d6a8382617155565b91508111156107a85760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401614d54565b600082614db9838261716c565b91508110156107a85760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401614d54565b614e016166c3565b60208201515115614f1757614e6d60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a0908101519085015281860180515160c0860152805183015160e086015251909201516101008401526015600055436001559051614ef391839101617184565b604051602081830303815290604052600290805190602001906114079291906164c0565b8151606081015160a0909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015614f5a573d6000803e3d6000fd5b508051600390528051600060809091015280516040516000805160206173ec83398151915291614f89916171f1565b60405180910390a1614f99616620565b82515181516001600160a01b0391821690528351602090810151835182015284516040908101518451909101528451606090810151845193169201919091528351608090810151835190910152835160a001518185015190910151614ffe9190616242565b815160a090810191909152602080830180516000905285518201518151830152908501805160409081015192510191909152516060015184519091015190036020820151606001526114fe81616062565b6150576166c3565b815160a001516020830151511015615154576150ca60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252845160809081015190840152845160a09081015190840152845160c0908101519084015280850180515160e0850152518201516101008401526000819055436001559051614ef391839101617184565b805160009081905281516020015280516040516000805160206173ec83398151915291615180916171f1565b60405180910390a16151e260405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252845160809081015190840152845160c09081015160a0850152818601805151918501919091525182015160e0840152600b600055436001559051614ef391839101617272565b61526a6166c3565b60208083015101511561535e576152d860405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a0908101519085015281860180515160c0860152805183015160e086015251909201516101008401526021600055436001559051614ef391839101617184565b8051600490528051600060a09091015280516040516000805160206173ec8339815191529161538c916171f1565b60405180910390a16153ee60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a0908101519085015281860180515160c0860152519092015160e08401526009600055436001559051614ef391839101617272565b8060000151606001516001600160a01b03168160200151602001516001600160a01b0316146154995760006154a2565b60208101515115155b156155d25761551860405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151841681860152855160809081015190860152855160a09081015190860152855160c0908101519086015282860180515160e0870152865182015190941661010086015292519092015161012084015260116000554360015590516155ae91839101617363565b604051602081830303815290604052600290805190602001906114fe9291906164c0565b8060200151602001516001600160a01b03166108fc8260200151606001519081150290604051600060405180830381858888f1935050505015801561561b573d6000803e3d6000fd5b50615624616620565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451909101528351606090810151845193169201919091528251608090810151835190910152825160a090810151835190910152810151600190819052825160c0015161569791614d5d565b602082810180518201929092528301516040908101519151015260006020820151606001526105ff81616062565b50565b8060000151606001516001600160a01b03168160200151602001516001600160a01b0316146156f8576000615701565b60208101515115155b1561580d5761577760405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151841681860152855160809081015190860152855160a09081015190860152855160c0908101519086015282860180515160e08701528651820151909416610100860152925190920151610120840152601b6000554360015590516155ae91839101617363565b8060200151602001516001600160a01b03166108fc8260200151606001519081150290604051600060405180830381858888f19350505050158015615856573d6000803e3d6000fd5b5061585f616620565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451909101528351606090810151845193169201919091528251608090810151835190910152825160a090810151835190910152810151600190819052825160c001516158d291614d5d565b602082810180518201929092528301516040908101519151015260006020820151606001526105ff81615f3e565b6159086166c3565b602082015151156159fa5761597460405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a0908101519085015281860180515160c0860152805183015160e08601525190920151610100840152601f600055436001559051614ef391839101617184565b8151606081015160a0909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015615a3d573d6000803e3d6000fd5b508051600390528051600060809091015280516040516000805160206173ec83398151915291615a6c916171f1565b60405180910390a1615a7c616620565b82515181516001600160a01b0391821690528351602090810151835182015284516040908101518451909101528451606090810151845193169201919091528351608090810151835190910152835160a001518185015190910151615ae19190616242565b815160a090810191909152602080830180516000905285518201518151830152908501805160409081015192510191909152516060015184519091015190036020820151606001526114fe81615f3e565b615b3a6166d6565b60208201515115615c65578051600290528051600060609091015280516040516000805160206173ec83398151915291615b73916171f1565b60405180910390a1615bc66040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b018051516080808c01918252915186015160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951694830194909452925191810191909152905160c082015260e001614ef3565b6020810180516001905280516000604091820152905190516000805160206173ec83398151915291615c96916171f1565b60405180910390a1600080805560018190556105ff906002906166f6565b8060000151606001516001600160a01b03168160200151602001516001600160a01b031614615ce4576000615ced565b60208101515115155b156155d257615d6360405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151841681860152855160809081015190860152855160a09081015190860152855160c0908101519086015282860180515160e0870152865182015190941661010086015292519092015161012084015260146000554360015590516155ae91839101617363565b8060000151606001516001600160a01b03168160200151602001516001600160a01b031614615e29576000615e32565b60208101515115155b1561580d57615ea860405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151841681860152855160809081015190860152855160a09081015190860152855160c0908101519086015282860180515160e08701528651820151909416610100860152925190920151610120840152601e6000554360015590516155ae91839101617363565b602080820151015115615fdb57615f53616590565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931683850152845160809081015190850152845160a09081015190850152818501805151151560c0860152805183015160e0860152519092015161010084015260186000554360015590516155ae91839101616f91565b615fe36165f0565b81515181516001600160a01b03918216905282516020908101518351909101528251604090810151835190910152825160609081015183519216910152815160800151616031906001614d5d565b602080830180519290925283810180516040908101518451909301929092525160600151915101526105ff81615b32565b602080820151015115615fdb57616077616590565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931683850152845160809081015190850152845160a09081015190850152818501805151151560c0860152805183015160e08601525190920151610100840152600e6000554360015590516155ae91839101616f91565b6161076166c3565b81516020908101519083015151101561619357616122616730565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925284516080908101519084015280850180515160a08501525182015160c08401526022600055436001559051614ef391839101617372565b8051600590528051600060c09091015280516040516000805160206173ec833981519152916161c1916171f1565b60405180910390a16161d1616730565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925284516080908101519084015280850180515160a08501525182015160c08401526007600055436001559051614ef391839101617372565b60008161627f5760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b6044820152606401614d54565b61628982846173c9565b9392505050565b6040805161028081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e0810182905261020081018290526102208101829052610240810182905261026081019190915290565b60405180604001604052806000815260200161636160408051808201909152600060208201908152815290565b905290565b60405180604001604052806000815260200161636160405180602001604052806000151581525090565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e08201929092529081905b81526020016163616040518060800160405280600081526020016000815260200160008152602001600081525090565b60405180604001604052806164586040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b815260200161636160405180606001604052806000815260200160008152602001600081525090565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e08201929092529081906163cb565b8280546164cc90616b85565b90600052602060002090601f0160209004810192826164ee5760008555616534565b82601f1061650757805160ff1916838001178555616534565b82800160010185558215616534579182015b82811115616534578251825591602001919060010190616519565b5061654092915061677f565b5090565b6040518060400160405280616557616730565b815260200161636160405180608001604052806000815260200160006001600160a01b0316815260200160008152602001600081525090565b60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160001515815260200160008152602001600081525090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190616458565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e0820192909252908190815260200161636160405180608001604052806000151581526020016000815260200160008152602001600081525090565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c0820192909252908190616458565b6040518060200160405280616361616794565b60405180604001604052806166e9616794565b8152602001616361616794565b50805461670290616b85565b6000825580601f10616712575050565b601f0160209004906000526020600020908101906156c5919061677f565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b5b808211156165405760008155600101616780565b6040805160e08101909152806000815260006020820181905260408201819052606082018190526080820181905260a0820181905260c09091015290565b6000604082840312156167e457600080fd5b50919050565b6000604082840312156167fc57600080fd5b61628983836167d2565b6001600160a01b03811681146156c557600080fd5b60006020828403121561682d57600080fd5b813561628981616806565b634e487b7160e01b600052602160045260246000fd5b600281106156c5576156c5616838565b8151606082019061686e8161684e565b8083525060208301511515602083015260408301511515604083015292915050565b6000602082840312156168a257600080fd5b5035919050565b82815260006020604081840152835180604085015260005b818110156168dd578581018301518582016060015282016168c1565b818111156168ef576000606083870101525b50601f01601f191692909201606001949350505050565b815160608201906169168161684e565b808352506020830151151560208301526040830151604083015292915050565b6040516020810167ffffffffffffffff8111828210171561696757634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff8111828210171561696757634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff8111828210171561696757634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561696757634e487b7160e01b600052604160045260246000fd5b60008183036040811215616a1557600080fd5b616a1d61696d565b8335815291506020601f1982011215616a3557600080fd5b50616a3e616936565b616a46616936565b6020938401358152815291810191909152919050565b600060408284031215616a6e57600080fd5b6162898383616a02565b80151581146156c557600080fd5b60008183036040811215616a9957600080fd5b616aa161696d565b8335815291506020601f1982011215616ab957600080fd5b50616ac2616936565b6020830135616ad081616a78565b8152602082015292915050565b600060408284031215616aef57600080fd5b6162898383616a86565b600060408284031215616b0b57600080fd5b6040516040810181811067ffffffffffffffff82111715616b3c57634e487b7160e01b600052604160045260246000fd5b604052823581526020830135616b5181616a78565b60208201529392505050565b8051610e6b81616a78565b600060208284031215616b7a57600080fd5b815161628981616a78565b600181811c90821680616b9957607f821691505b602082108114156167e457634e487b7160e01b600052602260045260246000fd5b8051610e6b81616806565b60006101208284031215616bd857600080fd5b616be061699e565b9050616beb82616bba565b81526020820151602082015260408201516040820152616c0d60608301616bba565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525092915050565b60006101208284031215616c5f57600080fd5b6162898383616bc5565b6001600160a01b0383168152606081016162896020830184805182526020908101515151910152565b6000610100808385031215616ca657600080fd5b6040519081019067ffffffffffffffff82118183101715616cd757634e487b7160e01b600052604160045260246000fd5b8160405280925083519150616ceb82616806565b8181526020840151602082015260408401516040820152616d0e60608501616bba565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b60006101008284031215616d5657600080fd5b6162898383616c92565b6001600160a01b038316815260608101616289602083018480518252602090810151511515910152565b600060808284031215616d9c57600080fd5b6040516080810181811067ffffffffffffffff82111715616dcd57634e487b7160e01b600052604160045260246000fd5b6040528251616ddb81616806565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b60006101408284031215616e4257600080fd5b616e4a6169d0565b9050616e5582616bba565b81526020820151602082015260408201516040820152616e7760608301616bba565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e0820152610100616eb2818401616bba565b818301525061012080830151818301525092915050565b60006101408284031215616edc57600080fd5b6162898383616e2f565b60006101208284031215616ef957600080fd5b616f0161699e565b9050616f0c82616bba565b81526020820151602082015260408201516040820152616f2e60608301616bba565b60608201526080820151608082015260a082015160a0820152616f5360c08301616b5d565b60c082015260e082015160e082015261010080830151818301525092915050565b60006101208284031215616f8757600080fd5b6162898383616ee6565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c08083015115159082015260e08083015190820152610100808301519082015261012081016107a8565b600060e0828403121561701257600080fd5b60405160e0810181811067ffffffffffffffff8211171561704357634e487b7160e01b600052604160045260246000fd5b604052825161705181616806565b808252506020830151602082015260408301516040820152606083015161707781616806565b806060830152506080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b600060c082840312156170b857600080fd5b60405160c0810181811067ffffffffffffffff821117156170e957634e487b7160e01b600052604160045260246000fd5b60405282516170f781616806565b808252506020830151602082015260408301516040820152606083015161711d81616806565b60608201526080838101519082015260a0928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156171675761716761713f565b500390565b6000821982111561717f5761717f61713f565b500190565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012081016107a8565b815160e08201906006811061720857617208616838565b808352506020830151151560208301526040830151151560408301526060830151151560608301526080830151617243608084018215159052565b5060a083015161725760a084018215159052565b5060c083015161726b60c084018215159052565b5092915050565b61010081016107a8828460018060a01b038082511683526020820151602084015260408201516040840152806060830151166060840152506080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b80516001600160a01b031682526020810151602083015260408101516040830152606081015161731160608401826001600160a01b03169052565b506080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151617355828501826001600160a01b03169052565b505061012090810151910152565b61014081016107a882846172d6565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b6000826173e657634e487b7160e01b600052601260045260246000fd5b50049056fe3457ee6571e662a8bb768bc5dc3a2139ed5d5cd81c69401f82a7339096e9bf5da2646970667358221220c082635a740ba57472a829194a83a6ba94b1d36f8965167fbb49c6468e53aad764736f6c634300080c0033`,
  BytecodeLen: 30586,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:61:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:65:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:298:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:153:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:172:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:190:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:212:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:250:15:after expr stmt semicolon',
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
    at: './index.rsh:265:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: './index.rsh:252:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  20: {
    at: './index.rsh:265:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  21: {
    at: './index.rsh:216:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  24: {
    at: './index.rsh:250:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  25: {
    at: './index.rsh:252:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  27: {
    at: './index.rsh:265:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  28: {
    at: './index.rsh:252:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  30: {
    at: './index.rsh:265:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  31: {
    at: './index.rsh:216:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  32: {
    at: './index.rsh:194:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  33: {
    at: './index.rsh:176:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  34: {
    at: './index.rsh:157:19:after expr stmt semicolon',
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
