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
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Object({
    role: ctc1
    });
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc4,
    Some: ctc3
    });
  const map0_ctc = ctc5;
  
  const map1_ctc = ctc6;
  
  const map2_ctc = ctc5;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      2: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1, ctc1],
      12: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1, ctc1],
      13: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1, ctc1],
      16: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      17: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1],
      19: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      20: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      21: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1],
      24: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      25: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1],
      27: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      28: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      29: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1],
      30: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1],
      31: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1],
      32: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1]
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
  const ctc3 = stdlib.T_Object({
    role: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc4, ctc1]);
  return {
    mapDataTy: ctc5
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
  const ctc3 = stdlib.T_Object({
    role: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Object({
    amt: ctc2,
    numPlayers: ctc2,
    rounds: ctc2
    });
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc2]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
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
  
  
  const v1117 = stdlib.protect(ctc5, interact.setParams, 'for Admin\'s interact field setParams');
  const v1118 = v1117.amt;
  const v1119 = v1117.numPlayers;
  const v1120 = v1117.rounds;
  
  const txn1 = await (ctc.sendrecv({
    args: [v1119, v1118, v1120],
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
      
      const {data: [v1127, v1128, v1129], secs: v1131, time: v1130, didSend: v48, from: v1126 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v1127, v1128, v1129], secs: v1131, time: v1130, didSend: v48, from: v1126 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v1126, v1127, v1128, v1129],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1130,
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
      
      const {data: [], secs: v1134, time: v1133, didSend: v53, from: v1132 } = txn2;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1134, time: v1133, didSend: v53, from: v1132 } = txn2;
  ;
  const v1135 = stdlib.addressEq(v1126, v1132);
  stdlib.assert(v1135, {
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
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc6],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1144], secs: v1146, time: v1145, didSend: v70, from: v1143 } = txn3;
  ;
  let v1148 = v1129;
  let v1149 = v1145;
  let v1156 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1159 = stdlib.gt(v1148, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
    
    return v1159;})()) {
    const v1160 = ['Joining', null];
    null;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1172], secs: v1174, time: v1173, didSend: v119, from: v1171 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v1175 = stdlib.addressEq(v1171, v1126);
    const v1176 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1171), null);
    const v1177 = {
      None: 0,
      Some: 1
      }[v1176[0]];
    const v1178 = stdlib.eq(v1177, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1179 = v1178 ? false : true;
    const v1180 = v1175 ? v1179 : false;
    stdlib.assert(v1180, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:93:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:145:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1182 = null;
    await txn4.getOutput('Player_join', 'v1182', ctc0, v1182);
    await stdlib.mapSet(map0, v1171, null);
    let v1189 = stdlib.checkedBigNumberify('./index.rsh:148:22:decimal', stdlib.UInt_max, '0');
    let v1190 = v1173;
    let v1197 = v1156;
    
    while (await (async () => {
      const v1201 = stdlib.lt(v1189, v1127);
      
      return v1201;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 31,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1213], secs: v1215, time: v1214, didSend: v228, from: v1212 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v1217 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1212), null);
      const v1218 = {
        None: 0,
        Some: 1
        }[v1217[0]];
      const v1219 = stdlib.eq(v1218, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1220 = v1219 ? false : true;
      stdlib.assert(v1220, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:153:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:154:20:application call to [unknown function] (defined at: ./index.rsh:154:20:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v1222 = null;
      await txn5.getOutput('Player_join', 'v1222', ctc0, v1222);
      await stdlib.mapSet(map0, v1212, null);
      const v1229 = stdlib.safeAdd(v1189, stdlib.checkedBigNumberify('./index.rsh:157:33:decimal', stdlib.UInt_max, '1'));
      const cv1189 = v1229;
      const cv1190 = v1214;
      const cv1197 = v1197;
      
      v1189 = cv1189;
      v1190 = cv1190;
      v1197 = cv1197;
      
      continue;
      
      }
    const v1231 = ['Wagering', null];
    null;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1242], secs: v1244, time: v1243, didSend: v300, from: v1241 } = txn5;
    undefined /* setApiDetails */;
    const v1246 = stdlib.add(v1197, v1128);
    ;
    const v1247 = stdlib.addressEq(v1241, v1126);
    const v1248 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1241), null);
    const v1249 = {
      None: 0,
      Some: 1
      }[v1248[0]];
    const v1250 = stdlib.eq(v1249, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1251 = v1247 ? v1250 : false;
    stdlib.assert(v1251, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:103:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:164:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1253 = null;
    await txn5.getOutput('Player_wager', 'v1253', ctc0, v1253);
    let v1259 = v1128;
    let v1260 = v1189;
    let v1261 = v1243;
    let v1268 = v1246;
    
    while (await (async () => {
      const v1272 = stdlib.gt(v1260, stdlib.checkedBigNumberify('./index.rsh:170:32:decimal', stdlib.UInt_max, '0'));
      
      return v1272;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 30,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1287], secs: v1289, time: v1288, didSend: v447, from: v1286 } = txn6;
      undefined /* setApiDetails */;
      const v1291 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1286), null);
      const v1292 = {
        None: 0,
        Some: 1
        }[v1291[0]];
      const v1293 = stdlib.eq(v1292, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1293, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:172:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:30:application call to [unknown function] (defined at: ./index.rsh:171:30:function exp)', 'at ./index.rsh:171:30:application call to [unknown function] (defined at: ./index.rsh:171:30:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v1296 = stdlib.add(v1268, v1128);
      ;
      const v1301 = null;
      await txn6.getOutput('Player_wager', 'v1301', ctc0, v1301);
      const v1307 = stdlib.safeAdd(v1259, v1128);
      const v1308 = stdlib.safeSub(v1260, stdlib.checkedBigNumberify('./index.rsh:175:55:decimal', stdlib.UInt_max, '1'));
      const cv1259 = v1307;
      const cv1260 = v1308;
      const cv1261 = v1288;
      const cv1268 = v1296;
      
      v1259 = cv1259;
      v1260 = cv1260;
      v1261 = cv1261;
      v1268 = cv1268;
      
      continue;
      
      }
    const v1310 = ['PickingRoles', null];
    null;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1324], secs: v1326, time: v1325, didSend: v516, from: v1323 } = txn6;
    undefined /* setApiDetails */;
    ;
    const v1327 = v1324[stdlib.checkedBigNumberify('./index.rsh:109:17:array', stdlib.UInt_max, '0')];
    const v1328 = stdlib.addressEq(v1323, v1126);
    const v1329 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1323), null);
    const v1330 = {
      None: 0,
      Some: 1
      }[v1329[0]];
    const v1331 = stdlib.eq(v1330, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1332 = v1328 ? v1331 : false;
    stdlib.assert(v1332, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:112:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:182:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1334 = null;
    await txn6.getOutput('Player_getRole', 'v1334', ctc0, v1334);
    await stdlib.mapSet(map1, v1323, v1327);
    let v1342 = stdlib.checkedBigNumberify('./index.rsh:185:22:decimal', stdlib.UInt_max, '0');
    let v1343 = v1325;
    let v1350 = v1268;
    
    while (await (async () => {
      const v1354 = stdlib.lt(v1342, v1189);
      
      return v1354;})()) {
      const txn7 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 29,
        out_tys: [ctc8],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1369], secs: v1371, time: v1370, didSend: v629, from: v1368 } = txn7;
      undefined /* setApiDetails */;
      ;
      const v1373 = v1369[stdlib.checkedBigNumberify('./index.rsh:189:10:spread', stdlib.UInt_max, '0')];
      const v1374 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1368), null);
      const v1375 = {
        None: 0,
        Some: 1
        }[v1374[0]];
      const v1376 = stdlib.eq(v1375, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1376, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:190:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:18:application call to [unknown function] (defined at: ./index.rsh:191:18:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v1379 = null;
      await txn7.getOutput('Player_getRole', 'v1379', ctc0, v1379);
      await stdlib.mapSet(map1, v1368, v1373);
      const v1387 = stdlib.safeAdd(v1342, stdlib.checkedBigNumberify('./index.rsh:194:31:decimal', stdlib.UInt_max, '1'));
      const cv1342 = v1387;
      const cv1343 = v1370;
      const cv1350 = v1350;
      
      v1342 = cv1342;
      v1343 = cv1343;
      v1350 = cv1350;
      
      continue;
      
      }
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 10,
      out_tys: [ctc2, ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1392, v1393], secs: v1395, time: v1394, didSend: v673, from: v1391 } = txn7;
    ;
    const v1396 = stdlib.addressEq(v1143, v1391);
    stdlib.assert(v1396, {
      at: './index.rsh:203:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    const v1397 = stdlib.digest([ctc2, ctc2], [v1392, v1393]);
    const v1398 = stdlib.digestEq(v1144, v1397);
    stdlib.assert(v1398, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:204:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 11,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1402], secs: v1404, time: v1403, didSend: v685, from: v1401 } = txn8;
    ;
    const v1405 = stdlib.addressEq(v1143, v1401);
    stdlib.assert(v1405, {
      at: './index.rsh:210:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    const v1406 = ['CheckingWin', null];
    null;
    const txn9 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 12,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1419], secs: v1421, time: v1420, didSend: v722, from: v1418 } = txn9;
    undefined /* setApiDetails */;
    ;
    const v1422 = v1419[stdlib.checkedBigNumberify('./index.rsh:118:17:array', stdlib.UInt_max, '0')];
    const v1423 = stdlib.addressEq(v1418, v1126);
    const v1424 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1418), null);
    const v1425 = {
      None: 0,
      Some: 1
      }[v1424[0]];
    const v1426 = stdlib.eq(v1425, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1427 = v1423 ? v1426 : false;
    stdlib.assert(v1427, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:121:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:214:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
      msg: null,
      who: 'Admin'
      });
    const v1429 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1418), null);
    const v1430 = {
      role: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
      };
    const v1431 = stdlib.fromSome(v1429, v1430);
    const v1432 = v1431.role;
    const v1433 = stdlib.eq(v1432, v1422);
    const v1434 = v1433 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
    const v1435 = stdlib.eq(v1434, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v1435) {
      const v1439 = true;
      await txn9.getOutput('Player_seeWinner', 'v1439', ctc10, v1439);
      await stdlib.mapSet(map1, v1418, undefined /* Nothing */);
      await stdlib.mapSet(map2, v1418, null);
      let v1447 = v1342;
      let v1448 = stdlib.checkedBigNumberify('./index.rsh:131:18:decimal', stdlib.UInt_max, '1');
      let v1449 = v1420;
      let v1456 = v1350;
      
      while (await (async () => {
        const v1460 = stdlib.gt(v1447, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        
        return v1460;})()) {
        const txn10 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 20,
          out_tys: [ctc9],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1469], secs: v1471, time: v1470, didSend: v812, from: v1468 } = txn10;
        undefined /* setApiDetails */;
        ;
        const v1473 = v1469[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
        const v1474 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1468), null);
        const v1476 = stdlib.fromSome(v1474, v1430);
        const v1477 = v1476.role;
        const v1478 = stdlib.eq(v1477, v1473);
        const v1479 = v1478 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1480 = stdlib.eq(v1479, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1480) {
          const v1484 = true;
          await txn10.getOutput('Player_seeWinner', 'v1484', ctc10, v1484);
          await stdlib.mapSet(map1, v1468, undefined /* Nothing */);
          const v1491 = stdlib.safeAdd(v1448, stdlib.checkedBigNumberify('./index.rsh:232:29:decimal', stdlib.UInt_max, '1'));
          const v1492 = stdlib.safeSub(v1447, stdlib.checkedBigNumberify('./index.rsh:232:44:decimal', stdlib.UInt_max, '1'));
          const cv1447 = v1492;
          const cv1448 = v1491;
          const cv1449 = v1470;
          const cv1456 = v1456;
          
          v1447 = cv1447;
          v1448 = cv1448;
          v1449 = cv1449;
          v1456 = cv1456;
          
          continue;}
        else {
          const v1497 = false;
          await txn10.getOutput('Player_seeWinner', 'v1497', ctc10, v1497);
          await stdlib.mapSet(map1, v1468, undefined /* Nothing */);
          const v1504 = stdlib.safeSub(v1447, stdlib.checkedBigNumberify('./index.rsh:238:42:decimal', stdlib.UInt_max, '1'));
          const cv1447 = v1504;
          const cv1448 = v1448;
          const cv1449 = v1470;
          const cv1456 = v1456;
          
          v1447 = cv1447;
          v1448 = cv1448;
          v1449 = cv1449;
          v1456 = cv1456;
          
          continue;}
        
        }
      const v1512 = stdlib.sub(v1456, v1259);
      ;
      let v1513 = v1127;
      let v1514 = v1449;
      let v1521 = v1512;
      
      while (await (async () => {
        const v1524 = stdlib.gt(v1513, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
        
        return v1524;})()) {
        const v1525 = stdlib.safeDiv(v1259, v1448);
        const txn10 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 15,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1528, time: v1527, didSend: v866, from: v1526 } = txn10;
        const v1530 = stdlib.add(v1521, v1525);
        ;
        const v1531 = stdlib.addressEq(v1143, v1526);
        stdlib.assert(v1531, {
          at: './index.rsh:252:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Admin'
          });
        const v1532 = ['PayingWinners', null];
        null;
        const txn11 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 16,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1535, time: v1534, didSend: v872, from: v1533 } = txn11;
        ;
        const v1536 = stdlib.addressEq(v1143, v1533);
        stdlib.assert(v1536, {
          at: './index.rsh:256:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Admin'
          });
        let v1537 = v1127;
        let v1538 = v1143;
        let v1539 = v1534;
        let v1546 = v1530;
        
        while (await (async () => {
          const v1549 = stdlib.addressEq(v1538, v1143);
          const v1550 = stdlib.gt(v1537, stdlib.checkedBigNumberify('./index.rsh:261:46:decimal', stdlib.UInt_max, '0'));
          const v1551 = v1549 ? v1550 : false;
          
          return v1551;})()) {
          const txn12 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 19,
            out_tys: [ctc7],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1562], secs: v1564, time: v1563, didSend: v947, from: v1561 } = txn12;
          undefined /* setApiDetails */;
          ;
          const v1566 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1561), null);
          const v1567 = {
            None: 0,
            Some: 1
            }[v1566[0]];
          const v1568 = stdlib.eq(v1567, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v1568, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:263:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:264:25:application call to [unknown function] (defined at: ./index.rsh:264:25:function exp)'],
            msg: 'Participant is not in the game',
            who: 'Admin'
            });
          const v1570 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1561), null);
          const v1571 = {
            None: 0,
            Some: 1
            }[v1570[0]];
          const v1572 = stdlib.eq(v1571, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v1572) {
            const v1573 = null;
            await txn12.getOutput('Player_receivePay', 'v1573', ctc0, v1573);
            await stdlib.mapSet(map2, v1561, undefined /* Nothing */);
            await stdlib.mapSet(map0, v1561, undefined /* Nothing */);
            const v1581 = stdlib.safeSub(v1537, stdlib.checkedBigNumberify('./index.rsh:269:37:decimal', stdlib.UInt_max, '1'));
            const cv1537 = v1581;
            const cv1538 = v1561;
            const cv1539 = v1563;
            const cv1546 = v1546;
            
            v1537 = cv1537;
            v1538 = cv1538;
            v1539 = cv1539;
            v1546 = cv1546;
            
            continue;}
          else {
            const v1586 = null;
            await txn12.getOutput('Player_receivePay', 'v1586', ctc0, v1586);
            await stdlib.mapSet(map0, v1561, undefined /* Nothing */);
            const v1593 = stdlib.safeSub(v1537, stdlib.checkedBigNumberify('./index.rsh:273:39:decimal', stdlib.UInt_max, '1'));
            const cv1537 = v1593;
            const cv1538 = v1538;
            const cv1539 = v1563;
            const cv1546 = v1546;
            
            v1537 = cv1537;
            v1538 = cv1538;
            v1539 = cv1539;
            v1546 = cv1546;
            
            continue;}
          
          }
        const txn12 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 18,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1600, time: v1599, didSend: v1001, from: v1598 } = txn12;
        ;
        const v1601 = stdlib.addressEq(v1143, v1598);
        stdlib.assert(v1601, {
          at: './index.rsh:280:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Admin'
          });
        const v1606 = stdlib.sub(v1546, v1546);
        ;
        const v1607 = stdlib.safeSub(v1513, stdlib.checkedBigNumberify('./index.rsh:283:39:decimal', stdlib.UInt_max, '1'));
        const cv1513 = v1607;
        const cv1514 = v1599;
        const cv1521 = v1606;
        
        v1513 = cv1513;
        v1514 = cv1514;
        v1521 = cv1521;
        
        continue;
        
        
        
        
        
        }
      const v1608 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
      const cv1148 = v1608;
      const cv1149 = v1514;
      const cv1156 = v1521;
      
      v1148 = cv1148;
      v1149 = cv1149;
      v1156 = cv1156;
      
      continue;}
    else {
      const v1609 = false;
      await txn9.getOutput('Player_seeWinner', 'v1609', ctc10, v1609);
      await stdlib.mapSet(map1, v1418, undefined /* Nothing */);
      let v1616 = v1342;
      let v1617 = stdlib.checkedBigNumberify('./index.rsh:137:18:decimal', stdlib.UInt_max, '0');
      let v1618 = v1420;
      let v1625 = v1350;
      
      while (await (async () => {
        const v1629 = stdlib.gt(v1616, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        
        return v1629;})()) {
        const txn10 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 28,
          out_tys: [ctc9],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1638], secs: v1640, time: v1639, didSend: v812, from: v1637 } = txn10;
        undefined /* setApiDetails */;
        ;
        const v1642 = v1638[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
        const v1643 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1637), null);
        const v1645 = stdlib.fromSome(v1643, v1430);
        const v1646 = v1645.role;
        const v1647 = stdlib.eq(v1646, v1642);
        const v1648 = v1647 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1649 = stdlib.eq(v1648, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1649) {
          const v1653 = true;
          await txn10.getOutput('Player_seeWinner', 'v1653', ctc10, v1653);
          await stdlib.mapSet(map1, v1637, undefined /* Nothing */);
          const v1660 = stdlib.safeAdd(v1617, stdlib.checkedBigNumberify('./index.rsh:232:29:decimal', stdlib.UInt_max, '1'));
          const v1661 = stdlib.safeSub(v1616, stdlib.checkedBigNumberify('./index.rsh:232:44:decimal', stdlib.UInt_max, '1'));
          const cv1616 = v1661;
          const cv1617 = v1660;
          const cv1618 = v1639;
          const cv1625 = v1625;
          
          v1616 = cv1616;
          v1617 = cv1617;
          v1618 = cv1618;
          v1625 = cv1625;
          
          continue;}
        else {
          const v1666 = false;
          await txn10.getOutput('Player_seeWinner', 'v1666', ctc10, v1666);
          await stdlib.mapSet(map1, v1637, undefined /* Nothing */);
          const v1673 = stdlib.safeSub(v1616, stdlib.checkedBigNumberify('./index.rsh:238:42:decimal', stdlib.UInt_max, '1'));
          const cv1616 = v1673;
          const cv1617 = v1617;
          const cv1618 = v1639;
          const cv1625 = v1625;
          
          v1616 = cv1616;
          v1617 = cv1617;
          v1618 = cv1618;
          v1625 = cv1625;
          
          continue;}
        
        }
      const v1681 = stdlib.sub(v1625, v1259);
      ;
      let v1682 = v1127;
      let v1683 = v1618;
      let v1690 = v1681;
      
      while (await (async () => {
        const v1693 = stdlib.gt(v1682, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
        
        return v1693;})()) {
        const v1694 = stdlib.safeDiv(v1259, v1617);
        const txn10 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 23,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1697, time: v1696, didSend: v866, from: v1695 } = txn10;
        const v1699 = stdlib.add(v1690, v1694);
        ;
        const v1700 = stdlib.addressEq(v1143, v1695);
        stdlib.assert(v1700, {
          at: './index.rsh:252:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Admin'
          });
        const v1701 = ['PayingWinners', null];
        null;
        const txn11 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 24,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1704, time: v1703, didSend: v872, from: v1702 } = txn11;
        ;
        const v1705 = stdlib.addressEq(v1143, v1702);
        stdlib.assert(v1705, {
          at: './index.rsh:256:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Admin'
          });
        let v1706 = v1127;
        let v1707 = v1143;
        let v1708 = v1703;
        let v1715 = v1699;
        
        while (await (async () => {
          const v1718 = stdlib.addressEq(v1707, v1143);
          const v1719 = stdlib.gt(v1706, stdlib.checkedBigNumberify('./index.rsh:261:46:decimal', stdlib.UInt_max, '0'));
          const v1720 = v1718 ? v1719 : false;
          
          return v1720;})()) {
          const txn12 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 27,
            out_tys: [ctc7],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1731], secs: v1733, time: v1732, didSend: v947, from: v1730 } = txn12;
          undefined /* setApiDetails */;
          ;
          const v1735 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1730), null);
          const v1736 = {
            None: 0,
            Some: 1
            }[v1735[0]];
          const v1737 = stdlib.eq(v1736, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v1737, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:263:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:264:25:application call to [unknown function] (defined at: ./index.rsh:264:25:function exp)'],
            msg: 'Participant is not in the game',
            who: 'Admin'
            });
          const v1739 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1730), null);
          const v1740 = {
            None: 0,
            Some: 1
            }[v1739[0]];
          const v1741 = stdlib.eq(v1740, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v1741) {
            const v1742 = null;
            await txn12.getOutput('Player_receivePay', 'v1742', ctc0, v1742);
            await stdlib.mapSet(map2, v1730, undefined /* Nothing */);
            await stdlib.mapSet(map0, v1730, undefined /* Nothing */);
            const v1750 = stdlib.safeSub(v1706, stdlib.checkedBigNumberify('./index.rsh:269:37:decimal', stdlib.UInt_max, '1'));
            const cv1706 = v1750;
            const cv1707 = v1730;
            const cv1708 = v1732;
            const cv1715 = v1715;
            
            v1706 = cv1706;
            v1707 = cv1707;
            v1708 = cv1708;
            v1715 = cv1715;
            
            continue;}
          else {
            const v1755 = null;
            await txn12.getOutput('Player_receivePay', 'v1755', ctc0, v1755);
            await stdlib.mapSet(map0, v1730, undefined /* Nothing */);
            const v1762 = stdlib.safeSub(v1706, stdlib.checkedBigNumberify('./index.rsh:273:39:decimal', stdlib.UInt_max, '1'));
            const cv1706 = v1762;
            const cv1707 = v1707;
            const cv1708 = v1732;
            const cv1715 = v1715;
            
            v1706 = cv1706;
            v1707 = cv1707;
            v1708 = cv1708;
            v1715 = cv1715;
            
            continue;}
          
          }
        const txn12 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 26,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1769, time: v1768, didSend: v1001, from: v1767 } = txn12;
        ;
        const v1770 = stdlib.addressEq(v1143, v1767);
        stdlib.assert(v1770, {
          at: './index.rsh:280:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Admin'
          });
        const v1775 = stdlib.sub(v1715, v1715);
        ;
        const v1776 = stdlib.safeSub(v1682, stdlib.checkedBigNumberify('./index.rsh:283:39:decimal', stdlib.UInt_max, '1'));
        const cv1682 = v1776;
        const cv1683 = v1768;
        const cv1690 = v1775;
        
        v1682 = cv1682;
        v1683 = cv1683;
        v1690 = cv1690;
        
        continue;
        
        
        
        
        
        }
      const v1777 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
      const cv1148 = v1777;
      const cv1149 = v1683;
      const cv1156 = v1690;
      
      v1148 = cv1148;
      v1149 = cv1149;
      v1156 = cv1156;
      
      continue;}
    
    
    
    
    
    
    
    
    
    
    
    }
  const v1778 = ['Finished', null];
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
  const ctc3 = stdlib.T_Object({
    role: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Tuple([ctc2]);
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
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
  const {data: [v1127, v1128, v1129], secs: v1131, time: v1130, didSend: v48, from: v1126 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1134, time: v1133, didSend: v53, from: v1132 } = txn2;
  ;
  const v1135 = stdlib.addressEq(v1126, v1132);
  stdlib.assert(v1135, {
    at: './index.rsh:62:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Game'
    });
  const v1139 = stdlib.protect(ctc2, await interact.getCards(v1127), {
    at: './index.rsh:67:37:application',
    fs: ['at ./index.rsh:66:12:application call to [unknown function] (defined at: ./index.rsh:66:16:function exp)'],
    msg: 'getCards',
    who: 'Game'
    });
  const v1140 = stdlib.protect(ctc2, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:68:48:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:66:12:application call to [unknown function] (defined at: ./index.rsh:66:16:function exp)'],
    msg: 'random',
    who: 'Game'
    });
  const v1141 = stdlib.digest([ctc2, ctc2], [v1140, v1139]);
  
  const txn3 = await (ctc.sendrecv({
    args: [v1126, v1127, v1128, v1129, v1141],
    evt_cnt: 1,
    funcNum: 2,
    lct: v1133,
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:72:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1144], secs: v1146, time: v1145, didSend: v70, from: v1143 } = txn3;
      
      ;
      
      const v1148 = v1129;
      const v1149 = v1145;
      const v1156 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1159 = stdlib.gt(v1148, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
        
        return v1159;})()) {
        const v1160 = ['Joining', null];
        null;
        sim_r.isHalt = false;
        }
      else {
        const v1778 = ['Finished', null];
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
    tys: [ctc10, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1144], secs: v1146, time: v1145, didSend: v70, from: v1143 } = txn3;
  ;
  stdlib.protect(ctc0, await interact.showCardsHash(v1144), {
    at: './index.rsh:73:30:application',
    fs: ['at ./index.rsh:73:30:application call to [unknown function] (defined at: ./index.rsh:73:30:function exp)', 'at ./index.rsh:73:30:application call to "liftedInteract" (defined at: ./index.rsh:73:30:application)'],
    msg: 'showCardsHash',
    who: 'Game'
    });
  
  let v1148 = v1129;
  let v1149 = v1145;
  let v1156 = stdlib.checkedBigNumberify('./index.rsh:54:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1159 = stdlib.gt(v1148, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
    
    return v1159;})()) {
    const v1160 = ['Joining', null];
    null;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1172], secs: v1174, time: v1173, didSend: v119, from: v1171 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v1175 = stdlib.addressEq(v1171, v1126);
    const v1176 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1171), null);
    const v1177 = {
      None: 0,
      Some: 1
      }[v1176[0]];
    const v1178 = stdlib.eq(v1177, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1179 = v1178 ? false : true;
    const v1180 = v1175 ? v1179 : false;
    stdlib.assert(v1180, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:93:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:145:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1182 = null;
    await txn4.getOutput('Player_join', 'v1182', ctc0, v1182);
    await stdlib.mapSet(map0, v1171, null);
    let v1189 = stdlib.checkedBigNumberify('./index.rsh:148:22:decimal', stdlib.UInt_max, '0');
    let v1190 = v1173;
    let v1197 = v1156;
    
    while (await (async () => {
      const v1201 = stdlib.lt(v1189, v1127);
      
      return v1201;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 31,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1213], secs: v1215, time: v1214, didSend: v228, from: v1212 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v1217 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1212), null);
      const v1218 = {
        None: 0,
        Some: 1
        }[v1217[0]];
      const v1219 = stdlib.eq(v1218, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1220 = v1219 ? false : true;
      stdlib.assert(v1220, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:153:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:154:20:application call to [unknown function] (defined at: ./index.rsh:154:20:function exp)'],
        msg: null,
        who: 'Game'
        });
      const v1222 = null;
      await txn5.getOutput('Player_join', 'v1222', ctc0, v1222);
      await stdlib.mapSet(map0, v1212, null);
      const v1229 = stdlib.safeAdd(v1189, stdlib.checkedBigNumberify('./index.rsh:157:33:decimal', stdlib.UInt_max, '1'));
      const cv1189 = v1229;
      const cv1190 = v1214;
      const cv1197 = v1197;
      
      v1189 = cv1189;
      v1190 = cv1190;
      v1197 = cv1197;
      
      continue;
      
      }
    const v1231 = ['Wagering', null];
    null;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1242], secs: v1244, time: v1243, didSend: v300, from: v1241 } = txn5;
    undefined /* setApiDetails */;
    const v1246 = stdlib.add(v1197, v1128);
    ;
    const v1247 = stdlib.addressEq(v1241, v1126);
    const v1248 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1241), null);
    const v1249 = {
      None: 0,
      Some: 1
      }[v1248[0]];
    const v1250 = stdlib.eq(v1249, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1251 = v1247 ? v1250 : false;
    stdlib.assert(v1251, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:103:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:164:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1253 = null;
    await txn5.getOutput('Player_wager', 'v1253', ctc0, v1253);
    let v1259 = v1128;
    let v1260 = v1189;
    let v1261 = v1243;
    let v1268 = v1246;
    
    while (await (async () => {
      const v1272 = stdlib.gt(v1260, stdlib.checkedBigNumberify('./index.rsh:170:32:decimal', stdlib.UInt_max, '0'));
      
      return v1272;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 30,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1287], secs: v1289, time: v1288, didSend: v447, from: v1286 } = txn6;
      undefined /* setApiDetails */;
      const v1291 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1286), null);
      const v1292 = {
        None: 0,
        Some: 1
        }[v1291[0]];
      const v1293 = stdlib.eq(v1292, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1293, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:172:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:30:application call to [unknown function] (defined at: ./index.rsh:171:30:function exp)', 'at ./index.rsh:171:30:application call to [unknown function] (defined at: ./index.rsh:171:30:function exp)'],
        msg: null,
        who: 'Game'
        });
      const v1296 = stdlib.add(v1268, v1128);
      ;
      const v1301 = null;
      await txn6.getOutput('Player_wager', 'v1301', ctc0, v1301);
      const v1307 = stdlib.safeAdd(v1259, v1128);
      const v1308 = stdlib.safeSub(v1260, stdlib.checkedBigNumberify('./index.rsh:175:55:decimal', stdlib.UInt_max, '1'));
      const cv1259 = v1307;
      const cv1260 = v1308;
      const cv1261 = v1288;
      const cv1268 = v1296;
      
      v1259 = cv1259;
      v1260 = cv1260;
      v1261 = cv1261;
      v1268 = cv1268;
      
      continue;
      
      }
    const v1310 = ['PickingRoles', null];
    null;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1324], secs: v1326, time: v1325, didSend: v516, from: v1323 } = txn6;
    undefined /* setApiDetails */;
    ;
    const v1327 = v1324[stdlib.checkedBigNumberify('./index.rsh:109:17:array', stdlib.UInt_max, '0')];
    const v1328 = stdlib.addressEq(v1323, v1126);
    const v1329 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1323), null);
    const v1330 = {
      None: 0,
      Some: 1
      }[v1329[0]];
    const v1331 = stdlib.eq(v1330, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1332 = v1328 ? v1331 : false;
    stdlib.assert(v1332, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:112:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:182:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1334 = null;
    await txn6.getOutput('Player_getRole', 'v1334', ctc0, v1334);
    await stdlib.mapSet(map1, v1323, v1327);
    let v1342 = stdlib.checkedBigNumberify('./index.rsh:185:22:decimal', stdlib.UInt_max, '0');
    let v1343 = v1325;
    let v1350 = v1268;
    
    while (await (async () => {
      const v1354 = stdlib.lt(v1342, v1189);
      
      return v1354;})()) {
      const txn7 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 29,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1369], secs: v1371, time: v1370, didSend: v629, from: v1368 } = txn7;
      undefined /* setApiDetails */;
      ;
      const v1373 = v1369[stdlib.checkedBigNumberify('./index.rsh:189:10:spread', stdlib.UInt_max, '0')];
      const v1374 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1368), null);
      const v1375 = {
        None: 0,
        Some: 1
        }[v1374[0]];
      const v1376 = stdlib.eq(v1375, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1376, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:190:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:18:application call to [unknown function] (defined at: ./index.rsh:191:18:function exp)'],
        msg: null,
        who: 'Game'
        });
      const v1379 = null;
      await txn7.getOutput('Player_getRole', 'v1379', ctc0, v1379);
      await stdlib.mapSet(map1, v1368, v1373);
      const v1387 = stdlib.safeAdd(v1342, stdlib.checkedBigNumberify('./index.rsh:194:31:decimal', stdlib.UInt_max, '1'));
      const cv1342 = v1387;
      const cv1343 = v1370;
      const cv1350 = v1350;
      
      v1342 = cv1342;
      v1343 = cv1343;
      v1350 = cv1350;
      
      continue;
      
      }
    const txn7 = await (ctc.sendrecv({
      args: [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1342, v1350, v1140, v1139],
      evt_cnt: 2,
      funcNum: 10,
      lct: v1343,
      onlyIf: true,
      out_tys: [ctc2, ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:203:10:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [v1392, v1393], secs: v1395, time: v1394, didSend: v673, from: v1391 } = txn7;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc10, ctc2, ctc2, ctc10, ctc5, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v1392, v1393], secs: v1395, time: v1394, didSend: v673, from: v1391 } = txn7;
    ;
    const v1396 = stdlib.addressEq(v1143, v1391);
    stdlib.assert(v1396, {
      at: './index.rsh:203:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Game'
      });
    const v1397 = stdlib.digest([ctc2, ctc2], [v1392, v1393]);
    const v1398 = stdlib.digestEq(v1144, v1397);
    stdlib.assert(v1398, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:204:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Game'
      });
    stdlib.protect(ctc0, await interact.showWinningRole(v1393), {
      at: './index.rsh:208:62:application',
      fs: ['at ./index.rsh:207:14:application call to [unknown function] (defined at: ./index.rsh:207:18:function exp)'],
      msg: 'showWinningRole',
      who: 'Game'
      });
    
    const txn8 = await (ctc.sendrecv({
      args: [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1342, v1350, null],
      evt_cnt: 1,
      funcNum: 11,
      lct: v1394,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:210:10:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn8) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [v1402], secs: v1404, time: v1403, didSend: v685, from: v1401 } = txn8;
        
        ;
        const v1406 = ['CheckingWin', null];
        null;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc10, ctc2, ctc2, ctc10, ctc5, ctc2, ctc2, ctc2, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v1402], secs: v1404, time: v1403, didSend: v685, from: v1401 } = txn8;
    ;
    const v1405 = stdlib.addressEq(v1143, v1401);
    stdlib.assert(v1405, {
      at: './index.rsh:210:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Game'
      });
    const v1406 = ['CheckingWin', null];
    null;
    const txn9 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 12,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1419], secs: v1421, time: v1420, didSend: v722, from: v1418 } = txn9;
    undefined /* setApiDetails */;
    ;
    const v1422 = v1419[stdlib.checkedBigNumberify('./index.rsh:118:17:array', stdlib.UInt_max, '0')];
    const v1423 = stdlib.addressEq(v1418, v1126);
    const v1424 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1418), null);
    const v1425 = {
      None: 0,
      Some: 1
      }[v1424[0]];
    const v1426 = stdlib.eq(v1425, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    const v1427 = v1423 ? v1426 : false;
    stdlib.assert(v1427, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:121:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:214:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
      msg: null,
      who: 'Game'
      });
    const v1429 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1418), null);
    const v1430 = {
      role: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
      };
    const v1431 = stdlib.fromSome(v1429, v1430);
    const v1432 = v1431.role;
    const v1433 = stdlib.eq(v1432, v1422);
    const v1434 = v1433 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
    const v1435 = stdlib.eq(v1434, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v1435) {
      const v1439 = true;
      await txn9.getOutput('Player_seeWinner', 'v1439', ctc9, v1439);
      await stdlib.mapSet(map1, v1418, undefined /* Nothing */);
      await stdlib.mapSet(map2, v1418, null);
      let v1447 = v1342;
      let v1448 = stdlib.checkedBigNumberify('./index.rsh:131:18:decimal', stdlib.UInt_max, '1');
      let v1449 = v1420;
      let v1456 = v1350;
      
      while (await (async () => {
        const v1460 = stdlib.gt(v1447, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        
        return v1460;})()) {
        const txn10 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 20,
          out_tys: [ctc8],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1469], secs: v1471, time: v1470, didSend: v812, from: v1468 } = txn10;
        undefined /* setApiDetails */;
        ;
        const v1473 = v1469[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
        const v1474 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1468), null);
        const v1476 = stdlib.fromSome(v1474, v1430);
        const v1477 = v1476.role;
        const v1478 = stdlib.eq(v1477, v1473);
        const v1479 = v1478 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1480 = stdlib.eq(v1479, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1480) {
          const v1484 = true;
          await txn10.getOutput('Player_seeWinner', 'v1484', ctc9, v1484);
          await stdlib.mapSet(map1, v1468, undefined /* Nothing */);
          const v1491 = stdlib.safeAdd(v1448, stdlib.checkedBigNumberify('./index.rsh:232:29:decimal', stdlib.UInt_max, '1'));
          const v1492 = stdlib.safeSub(v1447, stdlib.checkedBigNumberify('./index.rsh:232:44:decimal', stdlib.UInt_max, '1'));
          const cv1447 = v1492;
          const cv1448 = v1491;
          const cv1449 = v1470;
          const cv1456 = v1456;
          
          v1447 = cv1447;
          v1448 = cv1448;
          v1449 = cv1449;
          v1456 = cv1456;
          
          continue;}
        else {
          const v1497 = false;
          await txn10.getOutput('Player_seeWinner', 'v1497', ctc9, v1497);
          await stdlib.mapSet(map1, v1468, undefined /* Nothing */);
          const v1504 = stdlib.safeSub(v1447, stdlib.checkedBigNumberify('./index.rsh:238:42:decimal', stdlib.UInt_max, '1'));
          const cv1447 = v1504;
          const cv1448 = v1448;
          const cv1449 = v1470;
          const cv1456 = v1456;
          
          v1447 = cv1447;
          v1448 = cv1448;
          v1449 = cv1449;
          v1456 = cv1456;
          
          continue;}
        
        }
      const v1512 = stdlib.sub(v1456, v1259);
      ;
      let v1513 = v1127;
      let v1514 = v1449;
      let v1521 = v1512;
      
      while (await (async () => {
        const v1524 = stdlib.gt(v1513, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
        
        return v1524;})()) {
        const v1525 = stdlib.safeDiv(v1259, v1448);
        const txn10 = await (ctc.sendrecv({
          args: [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1448, v1513, v1521, v1525],
          evt_cnt: 0,
          funcNum: 15,
          lct: v1514,
          onlyIf: true,
          out_tys: [],
          pay: [v1525, []],
          sim_p: (async (txn10) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1528, time: v1527, didSend: v866, from: v1526 } = txn10;
            
            const v1530 = stdlib.add(v1521, v1525);
            sim_r.txns.push({
              amt: v1525,
              kind: 'to',
              tok: undefined /* Nothing */
              });
            const v1532 = ['PayingWinners', null];
            null;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc10, ctc2, ctc2, ctc10, ctc5, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1528, time: v1527, didSend: v866, from: v1526 } = txn10;
        const v1530 = stdlib.add(v1521, v1525);
        ;
        const v1531 = stdlib.addressEq(v1143, v1526);
        stdlib.assert(v1531, {
          at: './index.rsh:252:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Game'
          });
        const v1532 = ['PayingWinners', null];
        null;
        const txn11 = await (ctc.sendrecv({
          args: [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1448, v1513, v1530],
          evt_cnt: 0,
          funcNum: 16,
          lct: v1527,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:256:12:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn11) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1535, time: v1534, didSend: v872, from: v1533 } = txn11;
            
            ;
            const v1537 = v1127;
            const v1538 = v1143;
            const v1539 = v1534;
            const v1546 = v1530;
            
            if (await (async () => {
              const v1549 = stdlib.addressEq(v1538, v1143);
              const v1550 = stdlib.gt(v1537, stdlib.checkedBigNumberify('./index.rsh:261:46:decimal', stdlib.UInt_max, '0'));
              const v1551 = v1549 ? v1550 : false;
              
              return v1551;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc10, ctc2, ctc2, ctc10, ctc5, ctc2, ctc2, ctc2, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1535, time: v1534, didSend: v872, from: v1533 } = txn11;
        ;
        const v1536 = stdlib.addressEq(v1143, v1533);
        stdlib.assert(v1536, {
          at: './index.rsh:256:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Game'
          });
        let v1537 = v1127;
        let v1538 = v1143;
        let v1539 = v1534;
        let v1546 = v1530;
        
        while (await (async () => {
          const v1549 = stdlib.addressEq(v1538, v1143);
          const v1550 = stdlib.gt(v1537, stdlib.checkedBigNumberify('./index.rsh:261:46:decimal', stdlib.UInt_max, '0'));
          const v1551 = v1549 ? v1550 : false;
          
          return v1551;})()) {
          const txn12 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 19,
            out_tys: [ctc6],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1562], secs: v1564, time: v1563, didSend: v947, from: v1561 } = txn12;
          undefined /* setApiDetails */;
          ;
          const v1566 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1561), null);
          const v1567 = {
            None: 0,
            Some: 1
            }[v1566[0]];
          const v1568 = stdlib.eq(v1567, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v1568, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:263:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:264:25:application call to [unknown function] (defined at: ./index.rsh:264:25:function exp)'],
            msg: 'Participant is not in the game',
            who: 'Game'
            });
          const v1570 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1561), null);
          const v1571 = {
            None: 0,
            Some: 1
            }[v1570[0]];
          const v1572 = stdlib.eq(v1571, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v1572) {
            const v1573 = null;
            await txn12.getOutput('Player_receivePay', 'v1573', ctc0, v1573);
            await stdlib.mapSet(map2, v1561, undefined /* Nothing */);
            await stdlib.mapSet(map0, v1561, undefined /* Nothing */);
            const v1581 = stdlib.safeSub(v1537, stdlib.checkedBigNumberify('./index.rsh:269:37:decimal', stdlib.UInt_max, '1'));
            const cv1537 = v1581;
            const cv1538 = v1561;
            const cv1539 = v1563;
            const cv1546 = v1546;
            
            v1537 = cv1537;
            v1538 = cv1538;
            v1539 = cv1539;
            v1546 = cv1546;
            
            continue;}
          else {
            const v1586 = null;
            await txn12.getOutput('Player_receivePay', 'v1586', ctc0, v1586);
            await stdlib.mapSet(map0, v1561, undefined /* Nothing */);
            const v1593 = stdlib.safeSub(v1537, stdlib.checkedBigNumberify('./index.rsh:273:39:decimal', stdlib.UInt_max, '1'));
            const cv1537 = v1593;
            const cv1538 = v1538;
            const cv1539 = v1563;
            const cv1546 = v1546;
            
            v1537 = cv1537;
            v1538 = cv1538;
            v1539 = cv1539;
            v1546 = cv1546;
            
            continue;}
          
          }
        const txn12 = await (ctc.sendrecv({
          args: [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1448, v1513, v1538, v1546],
          evt_cnt: 0,
          funcNum: 18,
          lct: v1539,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:280:12:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn12) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1600, time: v1599, didSend: v1001, from: v1598 } = txn12;
            
            ;
            const v1606 = stdlib.sub(v1546, v1546);
            sim_r.txns.push({
              kind: 'from',
              to: v1538,
              tok: undefined /* Nothing */
              });
            const v1607 = stdlib.safeSub(v1513, stdlib.checkedBigNumberify('./index.rsh:283:39:decimal', stdlib.UInt_max, '1'));
            const cv1513 = v1607;
            const cv1514 = v1599;
            const cv1521 = v1606;
            
            await (async () => {
              const v1513 = cv1513;
              const v1514 = cv1514;
              const v1521 = cv1521;
              
              if (await (async () => {
                const v1524 = stdlib.gt(v1513, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
                
                return v1524;})()) {
                const v1525 = stdlib.safeDiv(v1259, v1448);
                sim_r.isHalt = false;
                }
              else {
                const v1608 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
                const cv1148 = v1608;
                const cv1149 = v1514;
                const cv1156 = v1521;
                
                await (async () => {
                  const v1148 = cv1148;
                  const v1149 = cv1149;
                  const v1156 = cv1156;
                  
                  if (await (async () => {
                    const v1159 = stdlib.gt(v1148, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
                    
                    return v1159;})()) {
                    const v1160 = ['Joining', null];
                    null;
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1778 = ['Finished', null];
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc10, ctc2, ctc2, ctc10, ctc5, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1600, time: v1599, didSend: v1001, from: v1598 } = txn12;
        ;
        const v1601 = stdlib.addressEq(v1143, v1598);
        stdlib.assert(v1601, {
          at: './index.rsh:280:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Game'
          });
        const v1606 = stdlib.sub(v1546, v1546);
        ;
        const v1607 = stdlib.safeSub(v1513, stdlib.checkedBigNumberify('./index.rsh:283:39:decimal', stdlib.UInt_max, '1'));
        const cv1513 = v1607;
        const cv1514 = v1599;
        const cv1521 = v1606;
        
        v1513 = cv1513;
        v1514 = cv1514;
        v1521 = cv1521;
        
        continue;
        
        
        
        
        
        }
      const v1608 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
      const cv1148 = v1608;
      const cv1149 = v1514;
      const cv1156 = v1521;
      
      v1148 = cv1148;
      v1149 = cv1149;
      v1156 = cv1156;
      
      continue;}
    else {
      const v1609 = false;
      await txn9.getOutput('Player_seeWinner', 'v1609', ctc9, v1609);
      await stdlib.mapSet(map1, v1418, undefined /* Nothing */);
      let v1616 = v1342;
      let v1617 = stdlib.checkedBigNumberify('./index.rsh:137:18:decimal', stdlib.UInt_max, '0');
      let v1618 = v1420;
      let v1625 = v1350;
      
      while (await (async () => {
        const v1629 = stdlib.gt(v1616, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        
        return v1629;})()) {
        const txn10 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 28,
          out_tys: [ctc8],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1638], secs: v1640, time: v1639, didSend: v812, from: v1637 } = txn10;
        undefined /* setApiDetails */;
        ;
        const v1642 = v1638[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
        const v1643 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1637), null);
        const v1645 = stdlib.fromSome(v1643, v1430);
        const v1646 = v1645.role;
        const v1647 = stdlib.eq(v1646, v1642);
        const v1648 = v1647 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
        const v1649 = stdlib.eq(v1648, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1649) {
          const v1653 = true;
          await txn10.getOutput('Player_seeWinner', 'v1653', ctc9, v1653);
          await stdlib.mapSet(map1, v1637, undefined /* Nothing */);
          const v1660 = stdlib.safeAdd(v1617, stdlib.checkedBigNumberify('./index.rsh:232:29:decimal', stdlib.UInt_max, '1'));
          const v1661 = stdlib.safeSub(v1616, stdlib.checkedBigNumberify('./index.rsh:232:44:decimal', stdlib.UInt_max, '1'));
          const cv1616 = v1661;
          const cv1617 = v1660;
          const cv1618 = v1639;
          const cv1625 = v1625;
          
          v1616 = cv1616;
          v1617 = cv1617;
          v1618 = cv1618;
          v1625 = cv1625;
          
          continue;}
        else {
          const v1666 = false;
          await txn10.getOutput('Player_seeWinner', 'v1666', ctc9, v1666);
          await stdlib.mapSet(map1, v1637, undefined /* Nothing */);
          const v1673 = stdlib.safeSub(v1616, stdlib.checkedBigNumberify('./index.rsh:238:42:decimal', stdlib.UInt_max, '1'));
          const cv1616 = v1673;
          const cv1617 = v1617;
          const cv1618 = v1639;
          const cv1625 = v1625;
          
          v1616 = cv1616;
          v1617 = cv1617;
          v1618 = cv1618;
          v1625 = cv1625;
          
          continue;}
        
        }
      const v1681 = stdlib.sub(v1625, v1259);
      ;
      let v1682 = v1127;
      let v1683 = v1618;
      let v1690 = v1681;
      
      while (await (async () => {
        const v1693 = stdlib.gt(v1682, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
        
        return v1693;})()) {
        const v1694 = stdlib.safeDiv(v1259, v1617);
        const txn10 = await (ctc.sendrecv({
          args: [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1617, v1682, v1690, v1694],
          evt_cnt: 0,
          funcNum: 23,
          lct: v1683,
          onlyIf: true,
          out_tys: [],
          pay: [v1694, []],
          sim_p: (async (txn10) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1697, time: v1696, didSend: v866, from: v1695 } = txn10;
            
            const v1699 = stdlib.add(v1690, v1694);
            sim_r.txns.push({
              amt: v1694,
              kind: 'to',
              tok: undefined /* Nothing */
              });
            const v1701 = ['PayingWinners', null];
            null;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc10, ctc2, ctc2, ctc10, ctc5, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1697, time: v1696, didSend: v866, from: v1695 } = txn10;
        const v1699 = stdlib.add(v1690, v1694);
        ;
        const v1700 = stdlib.addressEq(v1143, v1695);
        stdlib.assert(v1700, {
          at: './index.rsh:252:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Game'
          });
        const v1701 = ['PayingWinners', null];
        null;
        const txn11 = await (ctc.sendrecv({
          args: [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1617, v1682, v1699],
          evt_cnt: 0,
          funcNum: 24,
          lct: v1696,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:256:12:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn11) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1704, time: v1703, didSend: v872, from: v1702 } = txn11;
            
            ;
            const v1706 = v1127;
            const v1707 = v1143;
            const v1708 = v1703;
            const v1715 = v1699;
            
            if (await (async () => {
              const v1718 = stdlib.addressEq(v1707, v1143);
              const v1719 = stdlib.gt(v1706, stdlib.checkedBigNumberify('./index.rsh:261:46:decimal', stdlib.UInt_max, '0'));
              const v1720 = v1718 ? v1719 : false;
              
              return v1720;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc10, ctc2, ctc2, ctc10, ctc5, ctc2, ctc2, ctc2, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1704, time: v1703, didSend: v872, from: v1702 } = txn11;
        ;
        const v1705 = stdlib.addressEq(v1143, v1702);
        stdlib.assert(v1705, {
          at: './index.rsh:256:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Game'
          });
        let v1706 = v1127;
        let v1707 = v1143;
        let v1708 = v1703;
        let v1715 = v1699;
        
        while (await (async () => {
          const v1718 = stdlib.addressEq(v1707, v1143);
          const v1719 = stdlib.gt(v1706, stdlib.checkedBigNumberify('./index.rsh:261:46:decimal', stdlib.UInt_max, '0'));
          const v1720 = v1718 ? v1719 : false;
          
          return v1720;})()) {
          const txn12 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 27,
            out_tys: [ctc6],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1731], secs: v1733, time: v1732, didSend: v947, from: v1730 } = txn12;
          undefined /* setApiDetails */;
          ;
          const v1735 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1730), null);
          const v1736 = {
            None: 0,
            Some: 1
            }[v1735[0]];
          const v1737 = stdlib.eq(v1736, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          stdlib.assert(v1737, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:263:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:264:25:application call to [unknown function] (defined at: ./index.rsh:264:25:function exp)'],
            msg: 'Participant is not in the game',
            who: 'Game'
            });
          const v1739 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1730), null);
          const v1740 = {
            None: 0,
            Some: 1
            }[v1739[0]];
          const v1741 = stdlib.eq(v1740, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v1741) {
            const v1742 = null;
            await txn12.getOutput('Player_receivePay', 'v1742', ctc0, v1742);
            await stdlib.mapSet(map2, v1730, undefined /* Nothing */);
            await stdlib.mapSet(map0, v1730, undefined /* Nothing */);
            const v1750 = stdlib.safeSub(v1706, stdlib.checkedBigNumberify('./index.rsh:269:37:decimal', stdlib.UInt_max, '1'));
            const cv1706 = v1750;
            const cv1707 = v1730;
            const cv1708 = v1732;
            const cv1715 = v1715;
            
            v1706 = cv1706;
            v1707 = cv1707;
            v1708 = cv1708;
            v1715 = cv1715;
            
            continue;}
          else {
            const v1755 = null;
            await txn12.getOutput('Player_receivePay', 'v1755', ctc0, v1755);
            await stdlib.mapSet(map0, v1730, undefined /* Nothing */);
            const v1762 = stdlib.safeSub(v1706, stdlib.checkedBigNumberify('./index.rsh:273:39:decimal', stdlib.UInt_max, '1'));
            const cv1706 = v1762;
            const cv1707 = v1707;
            const cv1708 = v1732;
            const cv1715 = v1715;
            
            v1706 = cv1706;
            v1707 = cv1707;
            v1708 = cv1708;
            v1715 = cv1715;
            
            continue;}
          
          }
        const txn12 = await (ctc.sendrecv({
          args: [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1617, v1682, v1707, v1715],
          evt_cnt: 0,
          funcNum: 26,
          lct: v1708,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:280:12:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn12) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1769, time: v1768, didSend: v1001, from: v1767 } = txn12;
            
            ;
            const v1775 = stdlib.sub(v1715, v1715);
            sim_r.txns.push({
              kind: 'from',
              to: v1707,
              tok: undefined /* Nothing */
              });
            const v1776 = stdlib.safeSub(v1682, stdlib.checkedBigNumberify('./index.rsh:283:39:decimal', stdlib.UInt_max, '1'));
            const cv1682 = v1776;
            const cv1683 = v1768;
            const cv1690 = v1775;
            
            await (async () => {
              const v1682 = cv1682;
              const v1683 = cv1683;
              const v1690 = cv1690;
              
              if (await (async () => {
                const v1693 = stdlib.gt(v1682, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
                
                return v1693;})()) {
                const v1694 = stdlib.safeDiv(v1259, v1617);
                sim_r.isHalt = false;
                }
              else {
                const v1777 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
                const cv1148 = v1777;
                const cv1149 = v1683;
                const cv1156 = v1690;
                
                await (async () => {
                  const v1148 = cv1148;
                  const v1149 = cv1149;
                  const v1156 = cv1156;
                  
                  if (await (async () => {
                    const v1159 = stdlib.gt(v1148, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
                    
                    return v1159;})()) {
                    const v1160 = ['Joining', null];
                    null;
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1778 = ['Finished', null];
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc10, ctc2, ctc2, ctc10, ctc5, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1769, time: v1768, didSend: v1001, from: v1767 } = txn12;
        ;
        const v1770 = stdlib.addressEq(v1143, v1767);
        stdlib.assert(v1770, {
          at: './index.rsh:280:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Game'
          });
        const v1775 = stdlib.sub(v1715, v1715);
        ;
        const v1776 = stdlib.safeSub(v1682, stdlib.checkedBigNumberify('./index.rsh:283:39:decimal', stdlib.UInt_max, '1'));
        const cv1682 = v1776;
        const cv1683 = v1768;
        const cv1690 = v1775;
        
        v1682 = cv1682;
        v1683 = cv1683;
        v1690 = cv1690;
        
        continue;
        
        
        
        
        
        }
      const v1777 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
      const cv1148 = v1777;
      const cv1149 = v1683;
      const cv1156 = v1690;
      
      v1148 = cv1148;
      v1149 = cv1149;
      v1156 = cv1156;
      
      continue;}
    
    
    
    
    
    
    
    
    
    
    
    }
  const v1778 = ['Finished', null];
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
  const ctc3 = stdlib.T_Object({
    role: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc3]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
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
  
  
  const [v1126, v1127, v1128, v1143, v1144, v1148, v1189, v1259, v1268] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc2, ctc2]);
  const v1311 = ctc.selfAddress();
  const v1313 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:109:9:application',
    fs: ['at ./index.rsh:109:9:application call to [unknown function] (defined at: ./index.rsh:109:9:function exp)', 'at ./index.rsh:182:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
    msg: 'in',
    who: 'Player_getRole'
    });
  const v1317 = stdlib.addressEq(v1311, v1126);
  const v1318 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1311), null);
  const v1319 = {
    None: 0,
    Some: 1
    }[v1318[0]];
  const v1320 = stdlib.eq(v1319, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1321 = v1317 ? v1320 : false;
  stdlib.assert(v1321, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:111:32:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:109:9:application call to [unknown function] (defined at: ./index.rsh:111:24:function exp)', 'at ./index.rsh:109:9:application call to [unknown function] (defined at: ./index.rsh:109:9:function exp)', 'at ./index.rsh:182:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
    msg: null,
    who: 'Player_getRole'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1126, v1127, v1128, v1143, v1144, v1148, v1189, v1259, v1268, v1313],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:109:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1324], secs: v1326, time: v1325, didSend: v516, from: v1323 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_getRole"
        });
      ;
      const v1327 = v1324[stdlib.checkedBigNumberify('./index.rsh:109:17:array', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1323), null);
      const v1334 = null;
      const v1335 = await txn1.getOutput('Player_getRole', 'v1334', ctc0, v1334);
      
      await stdlib.simMapSet(sim_r, 1, v1323, v1327);
      const v2992 = stdlib.checkedBigNumberify('./index.rsh:185:22:decimal', stdlib.UInt_max, '0');
      const v2994 = v1268;
      const v2995 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:185:22:decimal', stdlib.UInt_max, '0'), v1189);
      if (v2995) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc2, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1324], secs: v1326, time: v1325, didSend: v516, from: v1323 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1327 = v1324[stdlib.checkedBigNumberify('./index.rsh:109:17:array', stdlib.UInt_max, '0')];
  const v1328 = stdlib.addressEq(v1323, v1126);
  const v1329 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1323), null);
  const v1330 = {
    None: 0,
    Some: 1
    }[v1329[0]];
  const v1331 = stdlib.eq(v1330, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1332 = v1328 ? v1331 : false;
  stdlib.assert(v1332, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:112:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:182:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
    msg: null,
    who: 'Player_getRole'
    });
  const v1334 = null;
  const v1335 = await txn1.getOutput('Player_getRole', 'v1334', ctc0, v1334);
  stdlib.protect(ctc0, await interact.out(v1324, v1335), {
    at: './index.rsh:109:9:application',
    fs: ['at ./index.rsh:109:9:application call to [unknown function] (defined at: ./index.rsh:109:9:function exp)', 'at ./index.rsh:113:10:application call to "k" (defined at: ./index.rsh:109:9:function exp)', 'at ./index.rsh:182:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
    msg: 'out',
    who: 'Player_getRole'
    });
  
  await stdlib.mapSet(map1, v1323, v1327);
  const v2992 = stdlib.checkedBigNumberify('./index.rsh:185:22:decimal', stdlib.UInt_max, '0');
  const v2994 = v1268;
  const v2995 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:185:22:decimal', stdlib.UInt_max, '0'), v1189);
  if (v2995) {
    return;
    }
  else {
    return;
    }
  
  
  };
export async function _Player_getRole30(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_getRole30 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_getRole30 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    role: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc3]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
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
  
  
  const [v1126, v1127, v1128, v1143, v1144, v1148, v1189, v1259, v1342, v1350] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'), [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1355 = ctc.selfAddress();
  const v1357 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:189:34:application call to [unknown function] (defined at: ./index.rsh:189:34:function exp)', 'at ./index.rsh:189:34:application call to [unknown function] (defined at: ./index.rsh:189:34:function exp)'],
    msg: 'in',
    who: 'Player_getRole'
    });
  const v1361 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1355), null);
  const v1362 = {
    None: 0,
    Some: 1
    }[v1361[0]];
  const v1363 = stdlib.eq(v1362, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1363, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:190:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:189:34:application call to [unknown function] (defined at: ./index.rsh:189:34:function exp)', 'at ./index.rsh:189:34:application call to [unknown function] (defined at: ./index.rsh:189:34:function exp)'],
    msg: null,
    who: 'Player_getRole'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1126, v1127, v1128, v1143, v1144, v1148, v1189, v1259, v1342, v1350, v1357],
    evt_cnt: 1,
    funcNum: 29,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:189:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1369], secs: v1371, time: v1370, didSend: v629, from: v1368 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_getRole"
        });
      ;
      const v1373 = v1369[stdlib.checkedBigNumberify('./index.rsh:189:10:spread', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1368), null);
      const v1379 = null;
      const v1380 = await txn1.getOutput('Player_getRole', 'v1379', ctc0, v1379);
      
      await stdlib.simMapSet(sim_r, 1, v1368, v1373);
      const v1387 = stdlib.safeAdd(v1342, stdlib.checkedBigNumberify('./index.rsh:194:31:decimal', stdlib.UInt_max, '1'));
      const v3182 = v1387;
      const v3184 = v1350;
      const v3185 = stdlib.lt(v1387, v1189);
      if (v3185) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1369], secs: v1371, time: v1370, didSend: v629, from: v1368 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1373 = v1369[stdlib.checkedBigNumberify('./index.rsh:189:10:spread', stdlib.UInt_max, '0')];
  const v1374 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1368), null);
  const v1375 = {
    None: 0,
    Some: 1
    }[v1374[0]];
  const v1376 = stdlib.eq(v1375, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1376, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:190:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:18:application call to [unknown function] (defined at: ./index.rsh:191:18:function exp)'],
    msg: null,
    who: 'Player_getRole'
    });
  const v1379 = null;
  const v1380 = await txn1.getOutput('Player_getRole', 'v1379', ctc0, v1379);
  if (v629) {
    stdlib.protect(ctc0, await interact.out(v1369, v1380), {
      at: './index.rsh:189:11:application',
      fs: ['at ./index.rsh:189:11:application call to [unknown function] (defined at: ./index.rsh:189:11:function exp)', 'at ./index.rsh:192:10:application call to "k" (defined at: ./index.rsh:191:18:function exp)', 'at ./index.rsh:191:18:application call to [unknown function] (defined at: ./index.rsh:191:18:function exp)'],
      msg: 'out',
      who: 'Player_getRole'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map1, v1368, v1373);
  const v1387 = stdlib.safeAdd(v1342, stdlib.checkedBigNumberify('./index.rsh:194:31:decimal', stdlib.UInt_max, '1'));
  const v3182 = v1387;
  const v3184 = v1350;
  const v3185 = stdlib.lt(v1387, v1189);
  if (v3185) {
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
  const ctc3 = stdlib.T_Object({
    role: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
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
  
  
  const [v1126, v1127, v1128, v1143, v1144, v1148, v1156] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2]);
  const v1161 = ctc.selfAddress();
  const v1163 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:90:9:application',
    fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:9:function exp)', 'at ./index.rsh:145:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
    msg: 'in',
    who: 'Player_join'
    });
  const v1164 = stdlib.addressEq(v1161, v1126);
  const v1165 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1161), null);
  const v1166 = {
    None: 0,
    Some: 1
    }[v1165[0]];
  const v1167 = stdlib.eq(v1166, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1168 = v1167 ? false : true;
  const v1169 = v1164 ? v1168 : false;
  stdlib.assert(v1169, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:92:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:92:20:function exp)', 'at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:9:function exp)', 'at ./index.rsh:145:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1126, v1127, v1128, v1143, v1144, v1148, v1156, v1163],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:90:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1172], secs: v1174, time: v1173, didSend: v119, from: v1171 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_join"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1171), null);
      const v1182 = null;
      const v1183 = await txn1.getOutput('Player_join', 'v1182', ctc0, v1182);
      
      await stdlib.simMapSet(sim_r, 0, v1171, null);
      const v3372 = stdlib.checkedBigNumberify('./index.rsh:148:22:decimal', stdlib.UInt_max, '0');
      const v3374 = v1156;
      const v3375 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:148:22:decimal', stdlib.UInt_max, '0'), v1127);
      if (v3375) {
        sim_r.isHalt = false;
        }
      else {
        const v3376 = ['Wagering', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1172], secs: v1174, time: v1173, didSend: v119, from: v1171 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1175 = stdlib.addressEq(v1171, v1126);
  const v1176 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1171), null);
  const v1177 = {
    None: 0,
    Some: 1
    }[v1176[0]];
  const v1178 = stdlib.eq(v1177, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1179 = v1178 ? false : true;
  const v1180 = v1175 ? v1179 : false;
  stdlib.assert(v1180, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:93:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:145:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  const v1182 = null;
  const v1183 = await txn1.getOutput('Player_join', 'v1182', ctc0, v1182);
  stdlib.protect(ctc0, await interact.out(v1172, v1183), {
    at: './index.rsh:90:9:application',
    fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:9:function exp)', 'at ./index.rsh:94:10:application call to "k" (defined at: ./index.rsh:90:9:function exp)', 'at ./index.rsh:145:24:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
    msg: 'out',
    who: 'Player_join'
    });
  
  await stdlib.mapSet(map0, v1171, null);
  const v3372 = stdlib.checkedBigNumberify('./index.rsh:148:22:decimal', stdlib.UInt_max, '0');
  const v3374 = v1156;
  const v3375 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:148:22:decimal', stdlib.UInt_max, '0'), v1127);
  if (v3375) {
    return;
    }
  else {
    const v3376 = ['Wagering', null];
    null;
    return;
    }
  
  
  };
export async function _Player_join32(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_join32 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_join32 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    role: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
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
  
  
  const [v1126, v1127, v1128, v1143, v1144, v1148, v1189, v1197] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'), [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc2]);
  const v1202 = ctc.selfAddress();
  const v1204 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:152:27:application call to [unknown function] (defined at: ./index.rsh:152:27:function exp)', 'at ./index.rsh:152:27:application call to [unknown function] (defined at: ./index.rsh:152:27:function exp)'],
    msg: 'in',
    who: 'Player_join'
    });
  const v1205 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1202), null);
  const v1206 = {
    None: 0,
    Some: 1
    }[v1205[0]];
  const v1207 = stdlib.eq(v1206, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1208 = v1207 ? false : true;
  stdlib.assert(v1208, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:153:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:152:27:application call to [unknown function] (defined at: ./index.rsh:152:27:function exp)', 'at ./index.rsh:152:27:application call to [unknown function] (defined at: ./index.rsh:152:27:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1126, v1127, v1128, v1143, v1144, v1148, v1189, v1197, v1204],
    evt_cnt: 1,
    funcNum: 31,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:152:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1213], secs: v1215, time: v1214, didSend: v228, from: v1212 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_join"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1212), null);
      const v1222 = null;
      const v1223 = await txn1.getOutput('Player_join', 'v1222', ctc0, v1222);
      
      await stdlib.simMapSet(sim_r, 0, v1212, null);
      const v1229 = stdlib.safeAdd(v1189, stdlib.checkedBigNumberify('./index.rsh:157:33:decimal', stdlib.UInt_max, '1'));
      const v3624 = v1229;
      const v3626 = v1197;
      const v3627 = stdlib.lt(v1229, v1127);
      if (v3627) {
        sim_r.isHalt = false;
        }
      else {
        const v3628 = ['Wagering', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1213], secs: v1215, time: v1214, didSend: v228, from: v1212 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1217 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1212), null);
  const v1218 = {
    None: 0,
    Some: 1
    }[v1217[0]];
  const v1219 = stdlib.eq(v1218, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1220 = v1219 ? false : true;
  stdlib.assert(v1220, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:153:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:154:20:application call to [unknown function] (defined at: ./index.rsh:154:20:function exp)'],
    msg: null,
    who: 'Player_join'
    });
  const v1222 = null;
  const v1223 = await txn1.getOutput('Player_join', 'v1222', ctc0, v1222);
  if (v228) {
    stdlib.protect(ctc0, await interact.out(v1213, v1223), {
      at: './index.rsh:152:11:application',
      fs: ['at ./index.rsh:152:11:application call to [unknown function] (defined at: ./index.rsh:152:11:function exp)', 'at ./index.rsh:155:10:application call to "k" (defined at: ./index.rsh:154:20:function exp)', 'at ./index.rsh:154:20:application call to [unknown function] (defined at: ./index.rsh:154:20:function exp)'],
      msg: 'out',
      who: 'Player_join'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v1212, null);
  const v1229 = stdlib.safeAdd(v1189, stdlib.checkedBigNumberify('./index.rsh:157:33:decimal', stdlib.UInt_max, '1'));
  const v3624 = v1229;
  const v3626 = v1197;
  const v3627 = stdlib.lt(v1229, v1127);
  if (v3627) {
    return;
    }
  else {
    const v3628 = ['Wagering', null];
    null;
    return;
    }
  
  
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
  const ctc3 = stdlib.T_Object({
    role: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
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
  
  
  const [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1448, v1513, v1537, v1538, v1546] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v1552 = ctc.selfAddress();
  const v1554 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:262:39:application call to [unknown function] (defined at: ./index.rsh:262:39:function exp)', 'at ./index.rsh:262:39:application call to [unknown function] (defined at: ./index.rsh:262:39:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1555 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1552), null);
  const v1556 = {
    None: 0,
    Some: 1
    }[v1555[0]];
  const v1557 = stdlib.eq(v1556, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1557, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:263:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:262:39:application call to [unknown function] (defined at: ./index.rsh:262:39:function exp)', 'at ./index.rsh:262:39:application call to [unknown function] (defined at: ./index.rsh:262:39:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1448, v1513, v1537, v1538, v1546, v1554],
    evt_cnt: 1,
    funcNum: 19,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:262:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1562], secs: v1564, time: v1563, didSend: v947, from: v1561 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1561), null);
      const v1570 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1561), null);
      const v1571 = {
        None: 0,
        Some: 1
        }[v1570[0]];
      const v1572 = stdlib.eq(v1571, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1572) {
        const v1573 = null;
        const v1574 = await txn1.getOutput('Player_receivePay', 'v1573', ctc0, v1573);
        
        await stdlib.simMapSet(sim_r, 2, v1561, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 0, v1561, undefined /* Nothing */);
        const v1581 = stdlib.safeSub(v1537, stdlib.checkedBigNumberify('./index.rsh:269:37:decimal', stdlib.UInt_max, '1'));
        const v3876 = v1581;
        const v3877 = v1561;
        const v3879 = v1546;
        const v3880 = stdlib.addressEq(v1561, v1143);
        const v3881 = stdlib.gt(v1581, stdlib.checkedBigNumberify('./index.rsh:261:46:decimal', stdlib.UInt_max, '0'));
        const v3882 = v3880 ? v3881 : false;
        if (v3882) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      else {
        const v1586 = null;
        const v1587 = await txn1.getOutput('Player_receivePay', 'v1586', ctc0, v1586);
        
        await stdlib.simMapSet(sim_r, 0, v1561, undefined /* Nothing */);
        const v1593 = stdlib.safeSub(v1537, stdlib.checkedBigNumberify('./index.rsh:273:39:decimal', stdlib.UInt_max, '1'));
        const v3890 = v1593;
        const v3891 = v1538;
        const v3893 = v1546;
        const v3894 = stdlib.addressEq(v1538, v1143);
        const v3895 = stdlib.gt(v1593, stdlib.checkedBigNumberify('./index.rsh:261:46:decimal', stdlib.UInt_max, '0'));
        const v3896 = v3894 ? v3895 : false;
        if (v3896) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1562], secs: v1564, time: v1563, didSend: v947, from: v1561 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1566 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1561), null);
  const v1567 = {
    None: 0,
    Some: 1
    }[v1566[0]];
  const v1568 = stdlib.eq(v1567, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1568, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:263:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:264:25:application call to [unknown function] (defined at: ./index.rsh:264:25:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  const v1570 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1561), null);
  const v1571 = {
    None: 0,
    Some: 1
    }[v1570[0]];
  const v1572 = stdlib.eq(v1571, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v1572) {
    const v1573 = null;
    const v1574 = await txn1.getOutput('Player_receivePay', 'v1573', ctc0, v1573);
    if (v947) {
      stdlib.protect(ctc0, await interact.out(v1562, v1574), {
        at: './index.rsh:262:17:application',
        fs: ['at ./index.rsh:262:17:application call to [unknown function] (defined at: ./index.rsh:262:17:function exp)', 'at ./index.rsh:266:18:application call to "k" (defined at: ./index.rsh:264:25:function exp)', 'at ./index.rsh:264:25:application call to [unknown function] (defined at: ./index.rsh:264:25:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map2, v1561, undefined /* Nothing */);
    await stdlib.mapSet(map0, v1561, undefined /* Nothing */);
    const v1581 = stdlib.safeSub(v1537, stdlib.checkedBigNumberify('./index.rsh:269:37:decimal', stdlib.UInt_max, '1'));
    const v3876 = v1581;
    const v3877 = v1561;
    const v3879 = v1546;
    const v3880 = stdlib.addressEq(v1561, v1143);
    const v3881 = stdlib.gt(v1581, stdlib.checkedBigNumberify('./index.rsh:261:46:decimal', stdlib.UInt_max, '0'));
    const v3882 = v3880 ? v3881 : false;
    if (v3882) {
      return;
      }
    else {
      return;
      }}
  else {
    const v1586 = null;
    const v1587 = await txn1.getOutput('Player_receivePay', 'v1586', ctc0, v1586);
    if (v947) {
      stdlib.protect(ctc0, await interact.out(v1562, v1587), {
        at: './index.rsh:262:17:application',
        fs: ['at ./index.rsh:262:17:application call to [unknown function] (defined at: ./index.rsh:262:17:function exp)', 'at ./index.rsh:271:18:application call to "k" (defined at: ./index.rsh:264:25:function exp)', 'at ./index.rsh:264:25:application call to [unknown function] (defined at: ./index.rsh:264:25:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v1561, undefined /* Nothing */);
    const v1593 = stdlib.safeSub(v1537, stdlib.checkedBigNumberify('./index.rsh:273:39:decimal', stdlib.UInt_max, '1'));
    const v3890 = v1593;
    const v3891 = v1538;
    const v3893 = v1546;
    const v3894 = stdlib.addressEq(v1538, v1143);
    const v3895 = stdlib.gt(v1593, stdlib.checkedBigNumberify('./index.rsh:261:46:decimal', stdlib.UInt_max, '0'));
    const v3896 = v3894 ? v3895 : false;
    if (v3896) {
      return;
      }
    else {
      return;
      }}
  
  
  };
export async function _Player_receivePay28(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_receivePay28 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_receivePay28 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    role: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
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
  
  
  const [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1617, v1682, v1706, v1707, v1715] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '28'), [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v1721 = ctc.selfAddress();
  const v1723 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:262:39:application call to [unknown function] (defined at: ./index.rsh:262:39:function exp)', 'at ./index.rsh:262:39:application call to [unknown function] (defined at: ./index.rsh:262:39:function exp)'],
    msg: 'in',
    who: 'Player_receivePay'
    });
  const v1724 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1721), null);
  const v1725 = {
    None: 0,
    Some: 1
    }[v1724[0]];
  const v1726 = stdlib.eq(v1725, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1726, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:263:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:262:39:application call to [unknown function] (defined at: ./index.rsh:262:39:function exp)', 'at ./index.rsh:262:39:application call to [unknown function] (defined at: ./index.rsh:262:39:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1617, v1682, v1706, v1707, v1715, v1723],
    evt_cnt: 1,
    funcNum: 27,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:262:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1731], secs: v1733, time: v1732, didSend: v947, from: v1730 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_receivePay"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1730), null);
      const v1739 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1730), null);
      const v1740 = {
        None: 0,
        Some: 1
        }[v1739[0]];
      const v1741 = stdlib.eq(v1740, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1741) {
        const v1742 = null;
        const v1743 = await txn1.getOutput('Player_receivePay', 'v1742', ctc0, v1742);
        
        await stdlib.simMapSet(sim_r, 2, v1730, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 0, v1730, undefined /* Nothing */);
        const v1750 = stdlib.safeSub(v1706, stdlib.checkedBigNumberify('./index.rsh:269:37:decimal', stdlib.UInt_max, '1'));
        const v3904 = v1750;
        const v3905 = v1730;
        const v3907 = v1715;
        const v3908 = stdlib.addressEq(v1730, v1143);
        const v3909 = stdlib.gt(v1750, stdlib.checkedBigNumberify('./index.rsh:261:46:decimal', stdlib.UInt_max, '0'));
        const v3910 = v3908 ? v3909 : false;
        if (v3910) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      else {
        const v1755 = null;
        const v1756 = await txn1.getOutput('Player_receivePay', 'v1755', ctc0, v1755);
        
        await stdlib.simMapSet(sim_r, 0, v1730, undefined /* Nothing */);
        const v1762 = stdlib.safeSub(v1706, stdlib.checkedBigNumberify('./index.rsh:273:39:decimal', stdlib.UInt_max, '1'));
        const v3918 = v1762;
        const v3919 = v1707;
        const v3921 = v1715;
        const v3922 = stdlib.addressEq(v1707, v1143);
        const v3923 = stdlib.gt(v1762, stdlib.checkedBigNumberify('./index.rsh:261:46:decimal', stdlib.UInt_max, '0'));
        const v3924 = v3922 ? v3923 : false;
        if (v3924) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1731], secs: v1733, time: v1732, didSend: v947, from: v1730 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1735 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1730), null);
  const v1736 = {
    None: 0,
    Some: 1
    }[v1735[0]];
  const v1737 = stdlib.eq(v1736, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1737, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:263:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:264:25:application call to [unknown function] (defined at: ./index.rsh:264:25:function exp)'],
    msg: 'Participant is not in the game',
    who: 'Player_receivePay'
    });
  const v1739 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1730), null);
  const v1740 = {
    None: 0,
    Some: 1
    }[v1739[0]];
  const v1741 = stdlib.eq(v1740, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v1741) {
    const v1742 = null;
    const v1743 = await txn1.getOutput('Player_receivePay', 'v1742', ctc0, v1742);
    if (v947) {
      stdlib.protect(ctc0, await interact.out(v1731, v1743), {
        at: './index.rsh:262:17:application',
        fs: ['at ./index.rsh:262:17:application call to [unknown function] (defined at: ./index.rsh:262:17:function exp)', 'at ./index.rsh:266:18:application call to "k" (defined at: ./index.rsh:264:25:function exp)', 'at ./index.rsh:264:25:application call to [unknown function] (defined at: ./index.rsh:264:25:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map2, v1730, undefined /* Nothing */);
    await stdlib.mapSet(map0, v1730, undefined /* Nothing */);
    const v1750 = stdlib.safeSub(v1706, stdlib.checkedBigNumberify('./index.rsh:269:37:decimal', stdlib.UInt_max, '1'));
    const v3904 = v1750;
    const v3905 = v1730;
    const v3907 = v1715;
    const v3908 = stdlib.addressEq(v1730, v1143);
    const v3909 = stdlib.gt(v1750, stdlib.checkedBigNumberify('./index.rsh:261:46:decimal', stdlib.UInt_max, '0'));
    const v3910 = v3908 ? v3909 : false;
    if (v3910) {
      return;
      }
    else {
      return;
      }}
  else {
    const v1755 = null;
    const v1756 = await txn1.getOutput('Player_receivePay', 'v1755', ctc0, v1755);
    if (v947) {
      stdlib.protect(ctc0, await interact.out(v1731, v1756), {
        at: './index.rsh:262:17:application',
        fs: ['at ./index.rsh:262:17:application call to [unknown function] (defined at: ./index.rsh:262:17:function exp)', 'at ./index.rsh:271:18:application call to "k" (defined at: ./index.rsh:264:25:function exp)', 'at ./index.rsh:264:25:application call to [unknown function] (defined at: ./index.rsh:264:25:function exp)'],
        msg: 'out',
        who: 'Player_receivePay'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v1730, undefined /* Nothing */);
    const v1762 = stdlib.safeSub(v1706, stdlib.checkedBigNumberify('./index.rsh:273:39:decimal', stdlib.UInt_max, '1'));
    const v3918 = v1762;
    const v3919 = v1707;
    const v3921 = v1715;
    const v3922 = stdlib.addressEq(v1707, v1143);
    const v3923 = stdlib.gt(v1762, stdlib.checkedBigNumberify('./index.rsh:261:46:decimal', stdlib.UInt_max, '0'));
    const v3924 = v3922 ? v3923 : false;
    if (v3924) {
      return;
      }
    else {
      return;
      }}
  
  
  };
export async function _Player_seeWinner13(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_seeWinner13 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_seeWinner13 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    role: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc2]);
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
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
  
  
  const [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1342, v1350] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13'), [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc2, ctc2]);
  const v1407 = ctc.selfAddress();
  const v1409 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:118:9:application',
    fs: ['at ./index.rsh:118:9:application call to [unknown function] (defined at: ./index.rsh:118:9:function exp)', 'at ./index.rsh:214:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
    msg: 'in',
    who: 'Player_seeWinner'
    });
  const v1412 = stdlib.addressEq(v1407, v1126);
  const v1413 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1407), null);
  const v1414 = {
    None: 0,
    Some: 1
    }[v1413[0]];
  const v1415 = stdlib.eq(v1414, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1416 = v1412 ? v1415 : false;
  stdlib.assert(v1416, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:120:33:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:118:9:application call to [unknown function] (defined at: ./index.rsh:120:25:function exp)', 'at ./index.rsh:118:9:application call to [unknown function] (defined at: ./index.rsh:118:9:function exp)', 'at ./index.rsh:214:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
    msg: null,
    who: 'Player_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1342, v1350, v1409],
    evt_cnt: 1,
    funcNum: 12,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:118:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1419], secs: v1421, time: v1420, didSend: v722, from: v1418 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_seeWinner"
        });
      ;
      const v1422 = v1419[stdlib.checkedBigNumberify('./index.rsh:118:17:array', stdlib.UInt_max, '0')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1418), null);
      const v1429 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1418), null);
      const v1430 = {
        role: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v1431 = stdlib.fromSome(v1429, v1430);
      const v1432 = v1431.role;
      const v1433 = stdlib.eq(v1432, v1422);
      const v1434 = v1433 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
      const v1435 = stdlib.eq(v1434, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v1435) {
        const v1439 = true;
        const v1440 = await txn1.getOutput('Player_seeWinner', 'v1439', ctc8, v1439);
        
        await stdlib.simMapSet(sim_r, 1, v1418, undefined /* Nothing */);
        await stdlib.simMapSet(sim_r, 2, v1418, null);
        const v3932 = v1342;
        const v3933 = stdlib.checkedBigNumberify('./index.rsh:131:18:decimal', stdlib.UInt_max, '1');
        const v3935 = v1350;
        const v3936 = stdlib.gt(v1342, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v3936) {
          sim_r.isHalt = false;
          }
        else {
          const v3937 = stdlib.sub(v1350, v1259);
          sim_r.txns.push({
            kind: 'from',
            to: v1143,
            tok: undefined /* Nothing */
            });
          const v3987 = v1127;
          const v3989 = v3937;
          const v3990 = stdlib.gt(v1127, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v3990) {
            const v3991 = v1259;
            sim_r.isHalt = false;
            }
          else {
            const v3992 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
            const v3993 = v3992;
            const v3995 = v3937;
            const v3996 = stdlib.gt(v3992, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
            if (v3996) {
              const v3997 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v3998 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1609 = false;
        const v1610 = await txn1.getOutput('Player_seeWinner', 'v1609', ctc8, v1609);
        
        await stdlib.simMapSet(sim_r, 1, v1418, undefined /* Nothing */);
        const v3999 = v1342;
        const v4000 = stdlib.checkedBigNumberify('./index.rsh:137:18:decimal', stdlib.UInt_max, '0');
        const v4002 = v1350;
        const v4003 = stdlib.gt(v1342, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4003) {
          sim_r.isHalt = false;
          }
        else {
          const v4004 = stdlib.sub(v1350, v1259);
          sim_r.txns.push({
            kind: 'from',
            to: v1143,
            tok: undefined /* Nothing */
            });
          const v4054 = v1127;
          const v4056 = v4004;
          const v4057 = stdlib.gt(v1127, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v4057) {
            const v4058 = stdlib.safeDiv(v1259, stdlib.checkedBigNumberify('./index.rsh:137:18:decimal', stdlib.UInt_max, '0'));
            sim_r.isHalt = false;
            }
          else {
            const v4059 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
            const v4060 = v4059;
            const v4062 = v4004;
            const v4063 = stdlib.gt(v4059, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
            if (v4063) {
              const v4064 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4065 = ['Finished', null];
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
    tys: [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc2, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1419], secs: v1421, time: v1420, didSend: v722, from: v1418 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1422 = v1419[stdlib.checkedBigNumberify('./index.rsh:118:17:array', stdlib.UInt_max, '0')];
  const v1423 = stdlib.addressEq(v1418, v1126);
  const v1424 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1418), null);
  const v1425 = {
    None: 0,
    Some: 1
    }[v1424[0]];
  const v1426 = stdlib.eq(v1425, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1427 = v1423 ? v1426 : false;
  stdlib.assert(v1427, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:121:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:214:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
    msg: null,
    who: 'Player_seeWinner'
    });
  const v1429 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1418), null);
  const v1430 = {
    role: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v1431 = stdlib.fromSome(v1429, v1430);
  const v1432 = v1431.role;
  const v1433 = stdlib.eq(v1432, v1422);
  const v1434 = v1433 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
  const v1435 = stdlib.eq(v1434, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v1435) {
    const v1439 = true;
    const v1440 = await txn1.getOutput('Player_seeWinner', 'v1439', ctc8, v1439);
    stdlib.protect(ctc0, await interact.out(v1419, v1440), {
      at: './index.rsh:118:9:application',
      fs: ['at ./index.rsh:118:9:application call to [unknown function] (defined at: ./index.rsh:118:9:function exp)', 'at ./index.rsh:128:12:application call to "k" (defined at: ./index.rsh:118:9:function exp)', 'at ./index.rsh:214:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
      msg: 'out',
      who: 'Player_seeWinner'
      });
    
    await stdlib.mapSet(map1, v1418, undefined /* Nothing */);
    await stdlib.mapSet(map2, v1418, null);
    const v3932 = v1342;
    const v3933 = stdlib.checkedBigNumberify('./index.rsh:131:18:decimal', stdlib.UInt_max, '1');
    const v3935 = v1350;
    const v3936 = stdlib.gt(v1342, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v3936) {
      return;
      }
    else {
      const v3937 = stdlib.sub(v1350, v1259);
      ;
      const v3987 = v1127;
      const v3989 = v3937;
      const v3990 = stdlib.gt(v1127, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v3990) {
        const v3991 = v1259;
        return;
        }
      else {
        const v3992 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
        const v3993 = v3992;
        const v3995 = v3937;
        const v3996 = stdlib.gt(v3992, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
        if (v3996) {
          const v3997 = ['Joining', null];
          null;
          return;
          }
        else {
          const v3998 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1609 = false;
    const v1610 = await txn1.getOutput('Player_seeWinner', 'v1609', ctc8, v1609);
    stdlib.protect(ctc0, await interact.out(v1419, v1610), {
      at: './index.rsh:118:9:application',
      fs: ['at ./index.rsh:118:9:application call to [unknown function] (defined at: ./index.rsh:118:9:function exp)', 'at ./index.rsh:135:12:application call to "k" (defined at: ./index.rsh:118:9:function exp)', 'at ./index.rsh:214:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
      msg: 'out',
      who: 'Player_seeWinner'
      });
    
    await stdlib.mapSet(map1, v1418, undefined /* Nothing */);
    const v3999 = v1342;
    const v4000 = stdlib.checkedBigNumberify('./index.rsh:137:18:decimal', stdlib.UInt_max, '0');
    const v4002 = v1350;
    const v4003 = stdlib.gt(v1342, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4003) {
      return;
      }
    else {
      const v4004 = stdlib.sub(v1350, v1259);
      ;
      const v4054 = v1127;
      const v4056 = v4004;
      const v4057 = stdlib.gt(v1127, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v4057) {
        const v4058 = stdlib.safeDiv(v1259, stdlib.checkedBigNumberify('./index.rsh:137:18:decimal', stdlib.UInt_max, '0'));
        return;
        }
      else {
        const v4059 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
        const v4060 = v4059;
        const v4062 = v4004;
        const v4063 = stdlib.gt(v4059, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
        if (v4063) {
          const v4064 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4065 = ['Finished', null];
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
  const ctc3 = stdlib.T_Object({
    role: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc2]);
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
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
  
  
  const [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1430, v1447, v1448, v1456] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'), [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v1463 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:221:9:application call to [unknown function] (defined at: ./index.rsh:221:9:function exp)', 'at ./index.rsh:221:9:application call to [unknown function] (defined at: ./index.rsh:221:9:function exp)'],
    msg: 'in',
    who: 'Player_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1430, v1447, v1448, v1456, v1463],
    evt_cnt: 1,
    funcNum: 20,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:221:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1469], secs: v1471, time: v1470, didSend: v812, from: v1468 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_seeWinner"
        });
      ;
      const v1473 = v1469[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
      const v1474 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1468), null);
      const v1476 = stdlib.fromSome(v1474, v1430);
      const v1477 = v1476.role;
      const v1478 = stdlib.eq(v1477, v1473);
      const v1479 = v1478 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
      const v1480 = stdlib.eq(v1479, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v1480) {
        const v1484 = true;
        const v1485 = await txn1.getOutput('Player_seeWinner', 'v1484', ctc8, v1484);
        
        await stdlib.simMapSet(sim_r, 1, v1468, undefined /* Nothing */);
        const v1491 = stdlib.safeAdd(v1448, stdlib.checkedBigNumberify('./index.rsh:232:29:decimal', stdlib.UInt_max, '1'));
        const v1492 = stdlib.safeSub(v1447, stdlib.checkedBigNumberify('./index.rsh:232:44:decimal', stdlib.UInt_max, '1'));
        const v4066 = v1492;
        const v4067 = v1491;
        const v4069 = v1456;
        const v4070 = stdlib.gt(v1492, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4070) {
          sim_r.isHalt = false;
          }
        else {
          const v4071 = stdlib.sub(v1456, v1259);
          sim_r.txns.push({
            kind: 'from',
            to: v1143,
            tok: undefined /* Nothing */
            });
          const v4121 = v1127;
          const v4123 = v4071;
          const v4124 = stdlib.gt(v1127, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v4124) {
            const v4125 = stdlib.safeDiv(v1259, v1491);
            sim_r.isHalt = false;
            }
          else {
            const v4126 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
            const v4127 = v4126;
            const v4129 = v4071;
            const v4130 = stdlib.gt(v4126, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
            if (v4130) {
              const v4131 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4132 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1497 = false;
        const v1498 = await txn1.getOutput('Player_seeWinner', 'v1497', ctc8, v1497);
        
        await stdlib.simMapSet(sim_r, 1, v1468, undefined /* Nothing */);
        const v1504 = stdlib.safeSub(v1447, stdlib.checkedBigNumberify('./index.rsh:238:42:decimal', stdlib.UInt_max, '1'));
        const v4133 = v1504;
        const v4134 = v1448;
        const v4136 = v1456;
        const v4137 = stdlib.gt(v1504, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4137) {
          sim_r.isHalt = false;
          }
        else {
          const v4138 = stdlib.sub(v1456, v1259);
          sim_r.txns.push({
            kind: 'from',
            to: v1143,
            tok: undefined /* Nothing */
            });
          const v4188 = v1127;
          const v4190 = v4138;
          const v4191 = stdlib.gt(v1127, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v4191) {
            const v4192 = stdlib.safeDiv(v1259, v1448);
            sim_r.isHalt = false;
            }
          else {
            const v4193 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
            const v4194 = v4193;
            const v4196 = v4138;
            const v4197 = stdlib.gt(v4193, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
            if (v4197) {
              const v4198 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4199 = ['Finished', null];
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
    tys: [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1469], secs: v1471, time: v1470, didSend: v812, from: v1468 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1473 = v1469[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
  const v1474 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1468), null);
  const v1476 = stdlib.fromSome(v1474, v1430);
  const v1477 = v1476.role;
  const v1478 = stdlib.eq(v1477, v1473);
  const v1479 = v1478 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
  const v1480 = stdlib.eq(v1479, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v1480) {
    const v1484 = true;
    const v1485 = await txn1.getOutput('Player_seeWinner', 'v1484', ctc8, v1484);
    if (v812) {
      stdlib.protect(ctc0, await interact.out(v1469, v1485), {
        at: './index.rsh:221:10:application',
        fs: ['at ./index.rsh:221:10:application call to [unknown function] (defined at: ./index.rsh:221:10:function exp)', 'at ./index.rsh:230:12:application call to "k" (defined at: ./index.rsh:222:17:function exp)', 'at ./index.rsh:222:17:application call to [unknown function] (defined at: ./index.rsh:222:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1468, undefined /* Nothing */);
    const v1491 = stdlib.safeAdd(v1448, stdlib.checkedBigNumberify('./index.rsh:232:29:decimal', stdlib.UInt_max, '1'));
    const v1492 = stdlib.safeSub(v1447, stdlib.checkedBigNumberify('./index.rsh:232:44:decimal', stdlib.UInt_max, '1'));
    const v4066 = v1492;
    const v4067 = v1491;
    const v4069 = v1456;
    const v4070 = stdlib.gt(v1492, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4070) {
      return;
      }
    else {
      const v4071 = stdlib.sub(v1456, v1259);
      ;
      const v4121 = v1127;
      const v4123 = v4071;
      const v4124 = stdlib.gt(v1127, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v4124) {
        const v4125 = stdlib.safeDiv(v1259, v1491);
        return;
        }
      else {
        const v4126 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
        const v4127 = v4126;
        const v4129 = v4071;
        const v4130 = stdlib.gt(v4126, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
        if (v4130) {
          const v4131 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4132 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1497 = false;
    const v1498 = await txn1.getOutput('Player_seeWinner', 'v1497', ctc8, v1497);
    if (v812) {
      stdlib.protect(ctc0, await interact.out(v1469, v1498), {
        at: './index.rsh:221:10:application',
        fs: ['at ./index.rsh:221:10:application call to [unknown function] (defined at: ./index.rsh:221:10:function exp)', 'at ./index.rsh:236:12:application call to "k" (defined at: ./index.rsh:222:17:function exp)', 'at ./index.rsh:222:17:application call to [unknown function] (defined at: ./index.rsh:222:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1468, undefined /* Nothing */);
    const v1504 = stdlib.safeSub(v1447, stdlib.checkedBigNumberify('./index.rsh:238:42:decimal', stdlib.UInt_max, '1'));
    const v4133 = v1504;
    const v4134 = v1448;
    const v4136 = v1456;
    const v4137 = stdlib.gt(v1504, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4137) {
      return;
      }
    else {
      const v4138 = stdlib.sub(v1456, v1259);
      ;
      const v4188 = v1127;
      const v4190 = v4138;
      const v4191 = stdlib.gt(v1127, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v4191) {
        const v4192 = stdlib.safeDiv(v1259, v1448);
        return;
        }
      else {
        const v4193 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
        const v4194 = v4193;
        const v4196 = v4138;
        const v4197 = stdlib.gt(v4193, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
        if (v4197) {
          const v4198 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4199 = ['Finished', null];
          null;
          return;
          }}}}
  
  
  };
export async function _Player_seeWinner29(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_seeWinner29 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_seeWinner29 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    role: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc2]);
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
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
  
  
  const [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1430, v1616, v1617, v1625] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '29'), [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v1632 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:221:9:application call to [unknown function] (defined at: ./index.rsh:221:9:function exp)', 'at ./index.rsh:221:9:application call to [unknown function] (defined at: ./index.rsh:221:9:function exp)'],
    msg: 'in',
    who: 'Player_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1126, v1127, v1128, v1143, v1144, v1148, v1259, v1430, v1616, v1617, v1625, v1632],
    evt_cnt: 1,
    funcNum: 28,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:221:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1638], secs: v1640, time: v1639, didSend: v812, from: v1637 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_seeWinner"
        });
      ;
      const v1642 = v1638[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
      const v1643 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1637), null);
      const v1645 = stdlib.fromSome(v1643, v1430);
      const v1646 = v1645.role;
      const v1647 = stdlib.eq(v1646, v1642);
      const v1648 = v1647 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
      const v1649 = stdlib.eq(v1648, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v1649) {
        const v1653 = true;
        const v1654 = await txn1.getOutput('Player_seeWinner', 'v1653', ctc8, v1653);
        
        await stdlib.simMapSet(sim_r, 1, v1637, undefined /* Nothing */);
        const v1660 = stdlib.safeAdd(v1617, stdlib.checkedBigNumberify('./index.rsh:232:29:decimal', stdlib.UInt_max, '1'));
        const v1661 = stdlib.safeSub(v1616, stdlib.checkedBigNumberify('./index.rsh:232:44:decimal', stdlib.UInt_max, '1'));
        const v4200 = v1661;
        const v4201 = v1660;
        const v4203 = v1625;
        const v4204 = stdlib.gt(v1661, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4204) {
          sim_r.isHalt = false;
          }
        else {
          const v4205 = stdlib.sub(v1625, v1259);
          sim_r.txns.push({
            kind: 'from',
            to: v1143,
            tok: undefined /* Nothing */
            });
          const v4255 = v1127;
          const v4257 = v4205;
          const v4258 = stdlib.gt(v1127, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v4258) {
            const v4259 = stdlib.safeDiv(v1259, v1660);
            sim_r.isHalt = false;
            }
          else {
            const v4260 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
            const v4261 = v4260;
            const v4263 = v4205;
            const v4264 = stdlib.gt(v4260, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
            if (v4264) {
              const v4265 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4266 = ['Finished', null];
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1666 = false;
        const v1667 = await txn1.getOutput('Player_seeWinner', 'v1666', ctc8, v1666);
        
        await stdlib.simMapSet(sim_r, 1, v1637, undefined /* Nothing */);
        const v1673 = stdlib.safeSub(v1616, stdlib.checkedBigNumberify('./index.rsh:238:42:decimal', stdlib.UInt_max, '1'));
        const v4267 = v1673;
        const v4268 = v1617;
        const v4270 = v1625;
        const v4271 = stdlib.gt(v1673, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
        if (v4271) {
          sim_r.isHalt = false;
          }
        else {
          const v4272 = stdlib.sub(v1625, v1259);
          sim_r.txns.push({
            kind: 'from',
            to: v1143,
            tok: undefined /* Nothing */
            });
          const v4322 = v1127;
          const v4324 = v4272;
          const v4325 = stdlib.gt(v1127, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
          if (v4325) {
            const v4326 = stdlib.safeDiv(v1259, v1617);
            sim_r.isHalt = false;
            }
          else {
            const v4327 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
            const v4328 = v4327;
            const v4330 = v4272;
            const v4331 = stdlib.gt(v4327, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
            if (v4331) {
              const v4332 = ['Joining', null];
              null;
              sim_r.isHalt = false;
              }
            else {
              const v4333 = ['Finished', null];
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
    tys: [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc3, ctc2, ctc2, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1638], secs: v1640, time: v1639, didSend: v812, from: v1637 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1642 = v1638[stdlib.checkedBigNumberify('./index.rsh:221:9:spread', stdlib.UInt_max, '0')];
  const v1643 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1637), null);
  const v1645 = stdlib.fromSome(v1643, v1430);
  const v1646 = v1645.role;
  const v1647 = stdlib.eq(v1646, v1642);
  const v1648 = v1647 ? stdlib.checkedBigNumberify('./index.rsh:5:55:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:5:59:decimal', stdlib.UInt_max, '0');
  const v1649 = stdlib.eq(v1648, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v1649) {
    const v1653 = true;
    const v1654 = await txn1.getOutput('Player_seeWinner', 'v1653', ctc8, v1653);
    if (v812) {
      stdlib.protect(ctc0, await interact.out(v1638, v1654), {
        at: './index.rsh:221:10:application',
        fs: ['at ./index.rsh:221:10:application call to [unknown function] (defined at: ./index.rsh:221:10:function exp)', 'at ./index.rsh:230:12:application call to "k" (defined at: ./index.rsh:222:17:function exp)', 'at ./index.rsh:222:17:application call to [unknown function] (defined at: ./index.rsh:222:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1637, undefined /* Nothing */);
    const v1660 = stdlib.safeAdd(v1617, stdlib.checkedBigNumberify('./index.rsh:232:29:decimal', stdlib.UInt_max, '1'));
    const v1661 = stdlib.safeSub(v1616, stdlib.checkedBigNumberify('./index.rsh:232:44:decimal', stdlib.UInt_max, '1'));
    const v4200 = v1661;
    const v4201 = v1660;
    const v4203 = v1625;
    const v4204 = stdlib.gt(v1661, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4204) {
      return;
      }
    else {
      const v4205 = stdlib.sub(v1625, v1259);
      ;
      const v4255 = v1127;
      const v4257 = v4205;
      const v4258 = stdlib.gt(v1127, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v4258) {
        const v4259 = stdlib.safeDiv(v1259, v1660);
        return;
        }
      else {
        const v4260 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
        const v4261 = v4260;
        const v4263 = v4205;
        const v4264 = stdlib.gt(v4260, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
        if (v4264) {
          const v4265 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4266 = ['Finished', null];
          null;
          return;
          }}}}
  else {
    const v1666 = false;
    const v1667 = await txn1.getOutput('Player_seeWinner', 'v1666', ctc8, v1666);
    if (v812) {
      stdlib.protect(ctc0, await interact.out(v1638, v1667), {
        at: './index.rsh:221:10:application',
        fs: ['at ./index.rsh:221:10:application call to [unknown function] (defined at: ./index.rsh:221:10:function exp)', 'at ./index.rsh:236:12:application call to "k" (defined at: ./index.rsh:222:17:function exp)', 'at ./index.rsh:222:17:application call to [unknown function] (defined at: ./index.rsh:222:17:function exp)'],
        msg: 'out',
        who: 'Player_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map1, v1637, undefined /* Nothing */);
    const v1673 = stdlib.safeSub(v1616, stdlib.checkedBigNumberify('./index.rsh:238:42:decimal', stdlib.UInt_max, '1'));
    const v4267 = v1673;
    const v4268 = v1617;
    const v4270 = v1625;
    const v4271 = stdlib.gt(v1673, stdlib.checkedBigNumberify('./index.rsh:220:25:decimal', stdlib.UInt_max, '0'));
    if (v4271) {
      return;
      }
    else {
      const v4272 = stdlib.sub(v1625, v1259);
      ;
      const v4322 = v1127;
      const v4324 = v4272;
      const v4325 = stdlib.gt(v1127, stdlib.checkedBigNumberify('./index.rsh:248:27:decimal', stdlib.UInt_max, '0'));
      if (v4325) {
        const v4326 = stdlib.safeDiv(v1259, v1617);
        return;
        }
      else {
        const v4327 = stdlib.safeSub(v1148, stdlib.checkedBigNumberify('./index.rsh:287:41:decimal', stdlib.UInt_max, '1'));
        const v4328 = v4327;
        const v4330 = v4272;
        const v4331 = stdlib.gt(v4327, stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '0'));
        if (v4331) {
          const v4332 = ['Joining', null];
          null;
          return;
          }
        else {
          const v4333 = ['Finished', null];
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
  const ctc3 = stdlib.T_Object({
    role: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
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
  
  
  const [v1126, v1127, v1128, v1143, v1144, v1148, v1189, v1197] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc2]);
  const v1232 = ctc.selfAddress();
  const v1234 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:99:9:application',
    fs: ['at ./index.rsh:99:9:application call to [unknown function] (defined at: ./index.rsh:99:9:function exp)', 'at ./index.rsh:164:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
    msg: 'in',
    who: 'Player_wager'
    });
  const v1235 = stdlib.addressEq(v1232, v1126);
  const v1236 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1232), null);
  const v1237 = {
    None: 0,
    Some: 1
    }[v1236[0]];
  const v1238 = stdlib.eq(v1237, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1239 = v1235 ? v1238 : false;
  stdlib.assert(v1239, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:102:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:9:application call to [unknown function] (defined at: ./index.rsh:102:20:function exp)', 'at ./index.rsh:99:9:application call to [unknown function] (defined at: ./index.rsh:99:9:function exp)', 'at ./index.rsh:164:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1126, v1127, v1128, v1143, v1144, v1148, v1189, v1197, v1234],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v1128, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1242], secs: v1244, time: v1243, didSend: v300, from: v1241 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_wager"
        });
      const v1246 = stdlib.add(v1197, v1128);
      sim_r.txns.push({
        amt: v1128,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1241), null);
      const v1253 = null;
      const v1254 = await txn1.getOutput('Player_wager', 'v1253', ctc0, v1253);
      
      const v4334 = v1128;
      const v4335 = v1189;
      const v4337 = v1246;
      const v4338 = stdlib.gt(v1189, stdlib.checkedBigNumberify('./index.rsh:170:32:decimal', stdlib.UInt_max, '0'));
      if (v4338) {
        sim_r.isHalt = false;
        }
      else {
        const v4339 = ['PickingRoles', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1242], secs: v1244, time: v1243, didSend: v300, from: v1241 } = txn1;
  undefined /* setApiDetails */;
  const v1246 = stdlib.add(v1197, v1128);
  ;
  const v1247 = stdlib.addressEq(v1241, v1126);
  const v1248 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1241), null);
  const v1249 = {
    None: 0,
    Some: 1
    }[v1248[0]];
  const v1250 = stdlib.eq(v1249, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1251 = v1247 ? v1250 : false;
  stdlib.assert(v1251, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:103:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:164:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  const v1253 = null;
  const v1254 = await txn1.getOutput('Player_wager', 'v1253', ctc0, v1253);
  stdlib.protect(ctc0, await interact.out(v1242, v1254), {
    at: './index.rsh:99:9:application',
    fs: ['at ./index.rsh:99:9:application call to [unknown function] (defined at: ./index.rsh:99:9:function exp)', 'at ./index.rsh:104:10:application call to "k" (defined at: ./index.rsh:99:9:function exp)', 'at ./index.rsh:164:43:application call to "awaitAdminPlayerAPI" (defined at: ./index.rsh:86:43:function exp)'],
    msg: 'out',
    who: 'Player_wager'
    });
  
  const v4334 = v1128;
  const v4335 = v1189;
  const v4337 = v1246;
  const v4338 = stdlib.gt(v1189, stdlib.checkedBigNumberify('./index.rsh:170:32:decimal', stdlib.UInt_max, '0'));
  if (v4338) {
    return;
    }
  else {
    const v4339 = ['PickingRoles', null];
    null;
    return;
    }
  
  
  };
export async function _Player_wager31(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_wager31 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_wager31 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    role: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
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
  
  
  const [v1126, v1127, v1128, v1143, v1144, v1148, v1189, v1259, v1260, v1268] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '31'), [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v1273 = ctc.selfAddress();
  const v1275 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:171:30:application call to [unknown function] (defined at: ./index.rsh:171:30:function exp)', 'at ./index.rsh:171:30:application call to [unknown function] (defined at: ./index.rsh:171:30:function exp)'],
    msg: 'in',
    who: 'Player_wager'
    });
  const v1276 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1273), null);
  const v1277 = {
    None: 0,
    Some: 1
    }[v1276[0]];
  const v1278 = stdlib.eq(v1277, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1278, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:172:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:30:application call to [unknown function] (defined at: ./index.rsh:171:30:function exp)', 'at ./index.rsh:171:30:application call to [unknown function] (defined at: ./index.rsh:171:30:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1126, v1127, v1128, v1143, v1144, v1148, v1189, v1259, v1260, v1268, v1275],
    evt_cnt: 1,
    funcNum: 30,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v1128, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1287], secs: v1289, time: v1288, didSend: v447, from: v1286 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Player_wager"
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1286), null);
      const v1296 = stdlib.add(v1268, v1128);
      sim_r.txns.push({
        amt: v1128,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1301 = null;
      const v1302 = await txn1.getOutput('Player_wager', 'v1301', ctc0, v1301);
      
      const v1307 = stdlib.safeAdd(v1259, v1128);
      const v1308 = stdlib.safeSub(v1260, stdlib.checkedBigNumberify('./index.rsh:175:55:decimal', stdlib.UInt_max, '1'));
      const v4555 = v1307;
      const v4556 = v1308;
      const v4558 = v1296;
      const v4559 = stdlib.gt(v1308, stdlib.checkedBigNumberify('./index.rsh:170:32:decimal', stdlib.UInt_max, '0'));
      if (v4559) {
        sim_r.isHalt = false;
        }
      else {
        const v4560 = ['PickingRoles', null];
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc2, ctc5, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1287], secs: v1289, time: v1288, didSend: v447, from: v1286 } = txn1;
  undefined /* setApiDetails */;
  const v1291 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1286), null);
  const v1292 = {
    None: 0,
    Some: 1
    }[v1291[0]];
  const v1293 = stdlib.eq(v1292, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1293, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:172:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:30:application call to [unknown function] (defined at: ./index.rsh:171:30:function exp)', 'at ./index.rsh:171:30:application call to [unknown function] (defined at: ./index.rsh:171:30:function exp)'],
    msg: null,
    who: 'Player_wager'
    });
  const v1296 = stdlib.add(v1268, v1128);
  ;
  const v1301 = null;
  const v1302 = await txn1.getOutput('Player_wager', 'v1301', ctc0, v1301);
  if (v447) {
    stdlib.protect(ctc0, await interact.out(v1287, v1302), {
      at: './index.rsh:171:13:application',
      fs: ['at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)', 'at ./index.rsh:174:12:application call to "k" (defined at: ./index.rsh:173:27:function exp)', 'at ./index.rsh:173:27:application call to [unknown function] (defined at: ./index.rsh:173:27:function exp)'],
      msg: 'out',
      who: 'Player_wager'
      });
    }
  else {
    }
  
  const v1307 = stdlib.safeAdd(v1259, v1128);
  const v1308 = stdlib.safeSub(v1260, stdlib.checkedBigNumberify('./index.rsh:175:55:decimal', stdlib.UInt_max, '1'));
  const v4555 = v1307;
  const v4556 = v1308;
  const v4558 = v1296;
  const v4559 = stdlib.gt(v1308, stdlib.checkedBigNumberify('./index.rsh:170:32:decimal', stdlib.UInt_max, '0'));
  if (v4559) {
    return;
    }
  else {
    const v4560 = ['PickingRoles', null];
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
  if (step == 30) {return _Player_getRole30(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
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
  if (step == 32) {return _Player_join32(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_receivePay(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_receivePay expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_receivePay expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 20) {return _Player_receivePay20(ctcTop, interact);}
  if (step == 28) {return _Player_receivePay28(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '28')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_seeWinner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_seeWinner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_seeWinner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 13) {return _Player_seeWinner13(ctcTop, interact);}
  if (step == 21) {return _Player_seeWinner21(ctcTop, interact);}
  if (step == 29) {return _Player_seeWinner29(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '29')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
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
  if (step == 31) {return _Player_wager31(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '31')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Player_getRole((uint64))byte[0]`, `Player_join()byte[0]`, `Player_receivePay()byte[0]`, `Player_seeWinner(uint64)byte`, `Player_wager()byte[0]`, `_Player_getRole29((uint64))byte[0]`, `_Player_getRole8((uint64))byte[0]`, `_Player_join31()byte[0]`, `_Player_join4()byte[0]`, `_Player_receivePay19()byte[0]`, `_Player_receivePay27()byte[0]`, `_Player_seeWinner12(uint64)byte`, `_Player_seeWinner20(uint64)byte`, `_Player_seeWinner28(uint64)byte`, `_Player_wager30()byte[0]`, `_Player_wager6()byte[0]`],
    pure: [],
    sigs: [`Player_getRole((uint64))byte[0]`, `Player_join()byte[0]`, `Player_receivePay()byte[0]`, `Player_seeWinner(uint64)byte`, `Player_wager()byte[0]`, `_Player_getRole29((uint64))byte[0]`, `_Player_getRole8((uint64))byte[0]`, `_Player_join31()byte[0]`, `_Player_join4()byte[0]`, `_Player_receivePay19()byte[0]`, `_Player_receivePay27()byte[0]`, `_Player_seeWinner12(uint64)byte`, `_Player_seeWinner20(uint64)byte`, `_Player_seeWinner28(uint64)byte`, `_Player_wager30()byte[0]`, `_Player_wager6()byte[0]`]
    },
  appApproval: `BiAzAAEgKHB4gAGIAZABCQgfFAsbHR4cDBATmAEKGAIEBgWps7/OCMPJ56EOhNK3kg/r/dTFD8X8wKwO+eWS/Av+hvf1DcPW2r0JmPr6uwXBzvSuCMH7wMcI2s+shAaL9OLhApvm054Fr6/8qgG4AbABGRURDQcwJgQBAAEBAAXVEPDMAyI1ADEYQRYJKmRJIls1ASEKWzUCMRkjEkEACjEAKCENr2ZCFdU2GgAXSUEBaSI1BCM1BkkhHAxAALJJIR0MQABMSSEeDEAAG0khHwxAAAohHxJENhoBQg0pIR4SRDYaAUIKlEkhIAxAAAghIBJEKkIOTCEdEkQ0AUkhDgxAAAchDhJEQgCaIRQSREIA+EkhIQxAACxJISIMQAAbISISRDQBSSELDEAAByELEkRCAIghGRJEQv+4ISESRDYaAUIGbUkhIwxAABshIxJENAFJIQ8MQAAHIQ8SREIAtSEKEkRC/3EhHBJENhoBQgKFSSEkDEAASEkhJQxAACpJISYMQAAbISYSRDQBSSEQDEAAByEQEkRCABohGhJEQgAxISUSRCpCA2FJIScMQAAIIScSRCpCARMhJBJEKkIAj0khKAxAADhJISkMQAAIISkSRCpCDOEhKBJENAFJIQwMQAAVSSERDEAAByEREkRC/3ohDBJEQv9HIRISREL+40khKgxAAAghKhJEKkIGv4Gtl6lTEkQ2GgFCATg2GgIXNQQ2GgM2GgEXSYESDEAIGkmBGgxABFBJIQ8MQAGqSSEQDEABDkkhCwxAAH8hCxJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQNQNJNQU1/4AEWtiafTT/ULAxAIgUOlcAASJVIxNEgAgAAAAAAAAExrAqNQcxACgxAIgUHCMiTFZmNANXACA0AyRbNAMlWzQDVzAgNANXUCA0AyEEWzQDIQVbIwgyBjQDIQZbQg5USCELNAESRDQESSISTDQCEhFEKGQpZFBJNQMlWzX/STUFNf6ABN2P7sE0/lCwMQCIE7hXAAEiVSMSRDT/iBO6gAgAAAAAAAAFFbAqNQc0A1cAIDQDJFs0/zQDVzAgNANXUCA0AyEEWzQDIQVbNAMhBls0/wg0AyEHWyMJMgY0AyEIWzT/CEIOWUghEDQBEkQ0BEkiEkw0AhIRRChkKWRQNQNJNQU1/4AE7jZPGTT/ULAxAIgTNVcAASJVIxJEgAgAAAAAAAAFY7AqNQcxACgxAIgTFyk0/1A1/klXAAE0/lBMVwoBUGY0A1cAIDQDJFs0AyVbNANXMCA0A1dQIDQDIQRbNAMhBVs0AyEGWzQDIQdbIwgyBjQDIQhbQg5hSSEODEACIEkhEQxAARRIIQ80ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpKSVcAIDX/JFs1/iVbNf1XMCA1/FdQIDX7IQRbNfohBVs1+VeACDX4IQdbNfchCFs19iEVWzX1STUFNfSABLProUA09FCwIiM0+DEAiBJSVwEJSTXzVwEINPMiVU0XNPQXEk0jEkEASIAJAAAAAAAABnUBsCk1BzEAKDEAiBIiIQmvNfNJVwABNPNQTFcKAVBmNP80/jT9NPw0+zT6NPk0+DT3Iwk09iMIMgY09UIPz4AJAAAAAAAABoIAsCg1BzEAKDEAiBHaIQmvNfNJVwABNPNQTFcKAVBmNP80/jT9NPw0+zT6NPk0+DT3Iwk09jIGNPVCD4lIIRE0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpKSVcAIDX/JFs1/iVbNf1XMCA1/FdQIDX7IQRbNfohBVs1+SEGWzX4IQdbNfchCFs19iErWzX1STUFNfSABIwah6s09FCwMQCIEUJXAAEiVSMSRDEAiBE1VwoBIlUjEkEASIAIAAAAAAAABs6wKjUHMQAoMQCIERUiIRZMVmYxACgxAIgRByIiTFZmNP80/jT9NPw0+zT6NPk0+DT3NPYjCTEAMgY09UIPyIAIAAAAAAAABtuwKjUHMQAoMQCIEM0iIkxWZjT/NP40/TT8NPs0+jT5NPg09zT2Iwk0A1eYIDIGNPVCD4tIIQ40ARJENARJIhJMNAISEUQoZClkUEk1A0lXMCA1/yEsWzX+gARe+3KmsDT/MQASRLEisgE0/rIII7IQNANXkCCyB7M0A1cAIDQDJFs0AyVbNP80A1dQIDQDIQRbNAMhBVs0AyEGWzQDIQdbIwkyBjT+SQlCDphJIQwMQAI4SYEXDEABGkkhFwxAAGghFxJEIS00ARJENARJIhJMNAISEUQoZClkUEk1A0kkWzX/VzAgNf6ABOQ1lYiwNP4xABJENANXACA0/zQDJVs0/jQDV1AgNAMhBFs0AyEFWzQDIQZbNAMhB1s0/zT+MgY0AyEIW0IOlkghFzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkpXACA1/yRbNf4lWzX9VzAgNfxXUCA1+yEEWzX6IQVbNfkhBls1+CEHWzX3IRVbNfaABBo1J0CwNAMhCFs09gg19TT2iA9bNPwxABJEK7A0/zT+FlA0/RZQNPxQNPtQNPoWUDT5FlA0+BZQNPcWUDT1FlAoSwFXAH9nKUsBV38ZZ0ghLTUBMgY1AkIOtCEMEkQhLjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkpJVwAgNf8kWzX+JVs1/VcwIDX8V1AgNfshBFs1+iEFWzX5V4AINfghB1s19yEIWzX2IRVbNfVJNQU19IAE4xtq7zT0ULAiIzT4MQCIDpZXAQlJNfNXAQg08yJVTRc09BcSTSMSQQBIgAkAAAAAAAAFzAGwKTUHMQAoMQCIDmYhCa8180lXAAE081BMVwoBUGY0/zT+NP00/DT7NPo0+TT4NPcjCTT2IwgyBjT1QgpfgAkAAAAAAAAF2QCwKDUHMQAoMQCIDh4hCa8180lXAAE081BMVwoBUGY0/zT+NP00/DT7NPo0+TT4NPcjCTT2MgY09UIKGUkhFAxAAQVIIQw0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpKSVcAIDX/JFs1/iVbNf1XMCA1/FdQIDX7IQRbNfohBVs1+SEGWzX4IQdbNfchCFs19iErWzX1STUFNfSABHTjnU809FCwMQCIDX9XAAEiVSMSRDEAiA1yVwoBIlUjEkEASIAIAAAAAAAABiWwKjUHMQAoMQCIDVIiIRZMVmYxACgxAIgNRCIiTFZmNP80/jT9NPw0+zT6NPk0+DT3NPYjCTEAMgY09UIKUYAIAAAAAAAABjKwKjUHMQAoMQCIDQoiIkxWZjT/NP40/TT8NPs0+jT5NPg09zT2Iwk0A1eYIDIGNPVCChRIIRQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lXMCA1/yEsWzX+gARSLQFGsDT/MQASRLEisgE0/rIII7IQNANXkCCyB7M0A1cAIDQDJFs0AyVbNP80A1dQIDQDIQRbNAMhBVs0AyEGWzQDIQdbIwkyBjT+SQlCCSFJIQoMQAROSSESDEACS0mBDwxAARpJIRMMQABoIRMSRCEvNAESRDQESSISTDQCEhFEKGQpZFBJNQNJJFs1/1cwIDX+gAQARWqOsDT+MQASRDQDVwAgNP80AyVbNP40A1dQIDQDIQRbNAMhBVs0AyEGWzQDIQdbNP80/jIGNAMhCFtCCRhIIRM0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpKVwAgNf8kWzX+JVs1/VcwIDX8V1AgNfshBFs1+iEFWzX5IQZbNfghB1s19yEVWzX2gARGR4xesDQDIQhbNPYINfU09ogLkTT8MQASRCuwNP80/hZQNP0WUDT8UDT7UDT6FlA0+RZQNPgWUDT3FlA09RZQKEsBVwB/ZylLAVd/GWdIIS81ATIGNQJCCuohEhJEITA0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8kWzX+JVs1/VcwIDX8V1AgNfshBFs1+iEFWzX5IQZbNfghB1s190k1BTX2gAQ6SRrYNPZQsDEANP8SMQCICtZXAAEiVSMSEEQhCq819SIjNPUxAIgKv1cBCUk19FcBCDT0IlVNFzT2FxJNIxJBAFGACQAAAAAAAAWfAbApNQcxACgxAIgKjyEJrzX0SVcAATT0UExXCgFQZjEAKDEAiAp1IyEWTFZmNP80/jT9NPw0+zT6NPk09TT4IzIGNPdCBn+ACQAAAAAAAAZJALAoNQcxACgxAIgKPiEJrzX0SVcAATT0UExXCgFQZjT/NP40/TT8NPs0+jT5NPU0+CIyBjT3QgfwSSEWDEABWkkhDQxAAKFIIRI0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8kWzX+JVs1/VcwIDX8V1AgNfshBFs1+iEFWzX5IQZbNfghB1s190k1BTX2gAQsTUfRNPZQsDT8MQASRIAF1RDwzACwNP80/hZQNP0WUDT8UDT7UDT6FlA0+RZQNPgWUDT3FlAoSwFXAH9nKUsBV38RZ0ghMDUBMgY1AkIJEUghDTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/yRbNf4lWzX9VzAgNfxXUCA1+yEEWzX6IQVbNfkhBls1+CEHWzX3STUFSSJbNfYhCls19YAEk6X2PDT2FlA09RZQsDT8MQASRDT7NPYWNPUWUAESRDT/NP4WUDT9FlA0/FA0+1A0+hZQNPkWUDT4FlA09xZQKEsBVwB/ZylLAVd/EWdIIRI1ATIGNQJCCF8hChJEIQk0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/STUFNf6ABL3nuIw0/lCwMQA0/xIxAIgIdlcAASJVIxIQRIAIAAAAAAAABTawKjUHMQAoMQCICFcpNP5QNf1JVwABNP1QTFcKAVBmNP80AyRbNAMlWzQDVzAgNANXUCA0AyEEWzQDIQVbNAMhBlsiMgY0AyEHW0IDqkkhGAxAAWFJIRkMQAEWSSEaDEAAjCEaEkQhMTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUlXACA1/yVbNf4hBVs1/Uk1BTX8gATJ6I0MNPxQsDT+iAfPMQA0/xIxAIgHtlcAASJVIxIQRIAIAAAAAAAABOWwKjUHNP80AyRbNP40A1cwIDQDV1AgNAMhBFs0/TT+NP0yBjQDIQZbNP4IQgJsIRkSRCEbNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/0k1BTX+gATU4BgtNP5QsDEANP8SMQCIBzpXAAEiVSMTEESACAAAAAAAAASesCo1BzEAKDEAiAcbIyJMVmY0/zQDJFs0AyVbNANXMCA0A1dQIDQDIQRbIjIGNAMhBVtCAVwhGBJEIRg0ARJENARJIhJMNAISEUQoZDUDSTUFNf+ABJm/5Zo0/1CwNANXACA0AyRbNAMlWzEANP80AyEyWzIGIkIAvEkjDEAAWEgjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JFs1/iVbNf0hMls1/IAEmouRdLA0/zEAEkQ0/zT+FlA0/RZQNPwWUChLAVcAOGdIIRg1ATIGNQJCBf5IgaCNBogGVyI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hCls1/iETWzX9gAT3cRNNNP8WUDT+FlA0/RZQsDEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgWgNf81/jX9Nfw1+zX6Nfk1+DT9Ig1BADqABdUQ8MwCsDT4NPkWUDT6FlA0+1A0/FA0/RZQNP8WUChLAVcAf2cpSwFXfwFnSCEbNQEyBjUCQgVPgAXVEPDMAbBCBSg1/zX+Nf01/DX7Nfo1+TX4Nfc0/TT4DEEANTT3NPgWUDT5FlA0+lA0+1A0/BZQNP0WUDT/FlAoSwFXAH9nKUsBV38JZ0gkNQEyBjUCQgT1gAXVEPDMBbA09zT4FlA0+RZQNPpQNPtQNPwWUDT9FlA0/xZQKEsBVwB/ZylLAVd/CWdIITE1ATIGNQJCBLc1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NP0iDUEAPjT1NPYWUDT3FlA0+FA0+VA0+hZQNPsWUDT8FlA0/RZQNP8WUChLAVcAf2cpSwFXfxlnSCELNQEyBjUCQgRcgAXVEPDMBLA09TT2FlA09xZQNPhQNPlQNPoWUDT7FlA0/BZQNP8WUChLAVcAf2cpSwFXfxFnSCEJNQEyBjUCQgQaNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT9NPsMQQA+NPU09hZQNPcWUDT4UDT5UDT6FlA0+xZQNPwWUDT9FlA0/xZQKEsBVwB/ZylLAVd/GWdIIRA1ATIGNQJCA7409TT2FlA09xZQNPhQNPlQNPoWUDT8FlA0/RZQNP8WUChLAVcAf2cpSwFXfxFnSCENNQEyBjUCQgOENf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NPwiDUEAQTT0NPUWUDT2FlA091A0+FA0+RZQNPoWUDT7UDT8FlA0/RZQNP8WUChLAVcAf2cpSwFXfyFnSCEuNQEyBjUCQgMksSKyATT6sggjshA097IHszT0NPU09jT3NPg0+TT6NP009TT+NP80+glCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NP0iDUEASTT7NPwKNfQ09TT2FlA09xZQNPhQNPlQNPoWUDT7FlA0/BZQNP0WUDT/FlA09BZQKEsBVwB/ZylLAVd/IWdIIRM1ATIGNQJCApI09TT2NPc0+DT5NPojCTT+NP9C/N01/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zT9NPYSNPwiDRBBAEU08zT0FlA09RZQNPZQNPdQNPgWUDT5FlA0+hZQNPsWUDT8FlA09lA0/xZQKEsBVwB/ZylLAVd/QWdIIQw1ATIGNQJCAhE08zT0FlA09RZQNPZQNPdQNPgWUDT5FlA0+hZQNPsWUDT9UDT/FlAoSwFXAH9nKUsBV385Z0ghFDUBMgY1AkIB0DX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DT8Ig1BAEE09DT1FlA09hZQNPdQNPhQNPkWUDT6FlA0+1A0/BZQNP0WUDT/FlAoSwFXAH9nKUsBV38hZ0ghDzUBMgY1AkIBcLEisgE0+rIII7IQNPeyB7M09DT1NPY09zT4NPk0+jT9NPU0/jT/NPoJQgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT9Ig1BAEk0+zT8CjX0NPU09hZQNPcWUDT4UDT5UDT6FlA0+xZQNPwWUDT9FlA0/xZQNPQWUChLAVcAf2cpSwFXfyFnSCEXNQEyBjUCQgDeNPU09jT3NPg0+TT6Iwk0/jT/QvspNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM0/TT2EjT8Ig0QQQBFNPM09BZQNPUWUDT2UDT3UDT4FlA0+RZQNPoWUDT7FlA0/BZQNPZQNP8WUChLAVcAf2cpSwFXf0FnSCERNQEyBjUCQgBdNPM09BZQNPUWUDT2UDT3UDT4FlA0+RZQNPoWUDT7FlA0/VA0/xZQKEsBVwB/ZylLAVd/OWdIIQ41ATIGNQJCABwxGSEbEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIQ2viShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 11,
  stateKeys: 2,
  stateSize: 192,
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
                "name": "v1127",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1128",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1129",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
            "internalType": "enum _enum_T13",
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
        "internalType": "struct T13",
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
                "name": "v1127",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1128",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1129",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
        "internalType": "struct T7",
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
                "internalType": "uint256",
                "name": "v1392",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1393",
                "type": "uint256"
              }
            ],
            "internalType": "struct T37",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T38",
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
                "name": "v1402",
                "type": "bool"
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T46",
                "name": "v1419",
                "type": "tuple"
              }
            ],
            "internalType": "struct T47",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T48",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
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
        "internalType": "struct T7",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1562",
                "type": "bool"
              }
            ],
            "internalType": "struct T60",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T61",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v1144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
                "internalType": "struct T46",
                "name": "v1469",
                "type": "tuple"
              }
            ],
            "internalType": "struct T62",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T63",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
                "name": "v1731",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T46",
                "name": "v1638",
                "type": "tuple"
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
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "_role",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T32",
                "name": "v1369",
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
                "internalType": "bool",
                "name": "v1287",
                "type": "bool"
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
                "internalType": "bool",
                "name": "v1213",
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
                "name": "v1172",
                "type": "bool"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
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
                "name": "v1242",
                "type": "bool"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
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
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "_role",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T32",
                "name": "v1324",
                "type": "tuple"
              }
            ],
            "internalType": "struct T33",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T34",
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
    "name": "_reach_oe_v1182",
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
    "name": "_reach_oe_v1222",
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
    "name": "_reach_oe_v1253",
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
    "name": "_reach_oe_v1301",
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
    "name": "_reach_oe_v1334",
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
    "name": "_reach_oe_v1379",
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
    "name": "_reach_oe_v1439",
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
    "name": "_reach_oe_v1484",
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
    "name": "_reach_oe_v1497",
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
    "name": "_reach_oe_v1573",
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
    "name": "_reach_oe_v1586",
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
    "name": "_reach_oe_v1609",
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
    "name": "_reach_oe_v1653",
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
    "name": "_reach_oe_v1666",
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
    "name": "_reach_oe_v1742",
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
    "name": "_reach_oe_v1755",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "_role",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "_a0",
        "type": "tuple"
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
        "components": [
          {
            "internalType": "uint256",
            "name": "_role",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "_Player_getRole29",
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
        "components": [
          {
            "internalType": "uint256",
            "name": "_role",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "_a0",
        "type": "tuple"
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
    "name": "_Player_join31",
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
    "name": "_Player_receivePay27",
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
    "name": "_Player_seeWinner12",
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
    "name": "_Player_seeWinner28",
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
    "name": "_Player_wager30",
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
            "internalType": "enum _enum_T2",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "_role",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
        "internalType": "struct T7",
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
                "internalType": "uint256",
                "name": "v1392",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1393",
                "type": "uint256"
              }
            ],
            "internalType": "struct T37",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T38",
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
                "name": "v1402",
                "type": "bool"
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T46",
                "name": "v1419",
                "type": "tuple"
              }
            ],
            "internalType": "struct T47",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T48",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
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
        "internalType": "struct T7",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1562",
                "type": "bool"
              }
            ],
            "internalType": "struct T60",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T61",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v1144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
                "internalType": "struct T46",
                "name": "v1469",
                "type": "tuple"
              }
            ],
            "internalType": "struct T62",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T63",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
                "name": "v1731",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T46",
                "name": "v1638",
                "type": "tuple"
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
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "_role",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T32",
                "name": "v1369",
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
                "internalType": "bool",
                "name": "v1287",
                "type": "bool"
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
                "internalType": "bool",
                "name": "v1213",
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
                "name": "v1172",
                "type": "bool"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
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
                "name": "v1242",
                "type": "bool"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
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
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "_role",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T32",
                "name": "v1324",
                "type": "tuple"
              }
            ],
            "internalType": "struct T33",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T34",
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
  Bytecode: `0x60806040526040516200749838038062007498833981016040819052620000269162000255565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a162000095341560076200014e565b620000ca604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a0909301905281516200014592600292019062000178565b50505062000329565b81620001745760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200018690620002ec565b90600052602060002090601f016020900481019282620001aa5760008555620001f5565b82601f10620001c557805160ff1916838001178555620001f5565b82800160010185558215620001f5579182015b82811115620001f5578251825591602001919060010190620001d8565b506200020392915062000207565b5090565b5b8082111562000203576000815560010162000208565b604051606081016001600160401b03811182821017156200024f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200026957600080fd5b604080519081016001600160401b03811182821017156200029a57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002b457600080fd5b620002be6200021e565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200030157607f821691505b602082108114156200032357634e487b7160e01b600052602260045260246000fd5b50919050565b61715f80620003396000396000f3fe6080604052600436106102485760003560e01c8063891e833b11610138578063b22595aa116100b0578063e373f07b11610077578063e373f07b14610542578063edd136c61461054a578063f19b435214610552578063f320096514610565578063f60533501461056d578063f780ed471461058057005b8063b22595aa146104d4578063b26072a7146104e7578063c855f5d0146104fa578063cadc2e7a14610502578063cf4a6cf41461052f57005b8063a4257ce7116100ff578063a4257ce71461045d578063a98bf22314610470578063ab53f2c614610483578063ac420936146104a6578063ac908f21146104ae578063b18adbd6146104c157005b8063891e833b1461041457806389b4e8de1461041c5780638d73458614610424578063907f2d7a146104375780639f20f2321461044a57005b80633a31ddbd116101cb5780636da017a0116101925780636da017a0146103935780637dcfddce146103a657806380cd3c44146103b9578063817d57f3146103cc57806383230757146103ec57806387daa2191461040157005b80633a31ddbd1461031a5780633bc5b7bf1461032d5780633c15d6d61461035a57806345f703961461036d57806364395e481461038057005b806323eed2591161020f57806323eed259146102c657806328adf537146102d95780632c10a159146102ec57806333e32499146102ff5780633750b4621461031257005b80630b9184ce1461025157806316013779146102645780631c4983cc146102775780631e93b0f11461028a5780631f149128146102ae57005b3661024f57005b005b61024f61025f366004615fe3565b610593565b61024f610272366004615fe3565b6105b7565b61024f610285366004615fe3565b6105d7565b34801561029657600080fd5b506003545b6040519081526020015b60405180910390f35b6102b66105f7565b60405190151581526020016102a5565b6102b66102d4366004616153565b610627565b61024f6102e736600461616f565b610657565b61024f6102fa366004615fe3565b610677565b61024f61030d366004615fe3565b610697565b6102b66106b7565b61024f610328366004615fe3565b610796565b34801561033957600080fd5b5061034d610348366004616196565b6107b6565b6040516102a591906161d9565b6102b661036836600461620b565b6107e2565b61024f61037b366004615fe3565b610813565b61024f61038e366004615fe3565b610833565b61024f6103a1366004615fe3565b610853565b6102b66103b4366004616153565b610873565b61024f6103c7366004615fe3565b6108a3565b3480156103d857600080fd5b5061034d6103e7366004616196565b6108c3565b3480156103f857600080fd5b5060015461029b565b6102b661040f36600461620b565b6108e9565b6102b661091a565b6102b6610949565b61024f610432366004615fe3565b610979565b61024f610445366004615fe3565b610999565b6102b6610458366004616153565b6109b9565b61024f61046b366004615fe3565b610a78565b61024f61047e366004615fe3565b610a98565b34801561048f57600080fd5b50610498610ab8565b6040516102a5929190616224565b6102b6610b55565b61024f6104bc366004615fe3565b610c08565b61024f6104cf366004615fe3565b610c28565b6102b66104e236600461620b565b610c48565b6102b66104f536600461620b565b610c79565b6102b6610d30565b34801561050e57600080fd5b5061052261051d366004616196565b610de3565b6040516102a59190616281565b61024f61053d366004615fe3565b610e18565b6102b6610e38565b6102b6610e67565b61024f610560366004615fe3565b610e97565b6102b6610eb7565b61024f61057b366004615fe3565b610ee6565b61024f61058e366004615fe3565b610f06565b61059b615976565b6105b36105ad36849003840184616318565b82610f26565b5050565b6105bf615976565b6105b36105d136849003840184616399565b826112c6565b6105df615976565b6105b36105f136849003840184616399565b826114e3565b60006106016159fa565b602081015160009052610612615976565b61061c8282611884565b6101e0015192915050565b6000610631615a29565b602081015151839052610642615976565b61064c8282611ac7565b602001519392505050565b61065f615976565b6105b3610671368490038401846163b5565b82611d13565b61067f615976565b6105b36106913684900384018461640f565b82611f59565b61069f615976565b6105b36106b136849003840184616490565b8261211b565b60008054600614806106cb5750600054601e145b6106d457600080fd5b6000546006141561074857306001600160a01b031663edd136c66040518163ffffffff1660e01b81526004016020604051808303816000875af115801561071f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074391906164ac565b905090565b600054601e141561079357306001600160a01b0316631f1491286040518163ffffffff1660e01b81526004016020604051808303816000875af115801561071f573d6000803e3d6000fd5b90565b61079e615976565b6105b36107b03684900384018461640f565b8261235c565b60408051606081018252600080825260208201819052918101919091526107dc826125d0565b92915050565b60006107ec615a5d565b6020810151518390526107fd615976565b61080782826126a8565b61018001519392505050565b61081b615976565b6105b361082d368490038401846164c9565b82612a3d565b61083b615976565b6105b361084d3684900384018461640f565b82612bc9565b61085b615976565b6105b361086d36849003840184616399565b82612ddf565b600061087d615a29565b60208101515183905261088e615976565b610898828261211b565b604001519392505050565b6108ab615976565b6105b36108bd36849003840184616318565b826126a8565b60408051606081018252600080825260208201819052918101919091526107dc82613008565b60006108f3615a5d565b602081015151839052610904615976565b61090e8282610f26565b61016001519392505050565b60006109246159fa565b602081015160009052610935615976565b61093f8282613095565b60e0015192915050565b60006109536159fa565b602081015160009052610964615976565b61096e82826114e3565b610100015192915050565b610981615976565b6105b361099336849003840184616318565b82613436565b6109a1615976565b6105b36109b33684900384018461640f565b82613817565b60008054600814806109cd5750600054601d145b6109d657600080fd5b60005460081415610a44576040516323eed25960e01b81528251600482015230906323eed259906024015b6020604051808303816000875af1158015610a20573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107dc91906164ac565b600054601d1415610a7357604051633ee7eee760e11b8152825160048201523090637dcfddce90602401610a01565b919050565b610a80615976565b6105b3610a9236849003840184616399565b82613a2d565b610aa0615976565b6105b3610ab236849003840184616399565b82613c59565b600060606000546002808054610acd906164f4565b80601f0160208091040260200160405190810160405280929190818152602001828054610af9906164f4565b8015610b465780601f10610b1b57610100808354040283529160200191610b46565b820191906000526020600020905b815481529060010190602001808311610b2957829003601f168201915b50505050509050915091509091565b6000805460131480610b695750600054601b145b610b7257600080fd5b60005460131415610bbd57306001600160a01b031663891e833b6040518163ffffffff1660e01b81526004016020604051808303816000875af115801561071f573d6000803e3d6000fd5b600054601b141561079357306001600160a01b03166389b4e8de6040518163ffffffff1660e01b81526004016020604051808303816000875af115801561071f573d6000803e3d6000fd5b610c10615976565b6105b3610c2236849003840184616399565b82611884565b610c30615976565b6105b3610c423684900384018461640f565b82613e90565b6000610c52615a5d565b602081015151839052610c63615976565b610c6d8282613436565b61014001519392505050565b60008054600c1480610c8d57506000546014145b80610c9a5750600054601c145b610ca357600080fd5b600054600c1415610cd257604051635912cad560e11b815260048101839052309063b22595aa90602401610a01565b60005460141415610d01576040516387daa21960e01b81526004810183905230906387daa21990602401610a01565b600054601c1415610a7357604051631e0aeb6b60e11b8152600481018390523090633c15d6d690602401610a01565b6000805460041480610d445750600054601f145b610d4d57600080fd5b60005460041415610d9857306001600160a01b031663f32009656040518163ffffffff1660e01b81526004016020604051808303816000875af115801561071f573d6000803e3d6000fd5b600054601f141561079357306001600160a01b031663e373f07b6040518163ffffffff1660e01b81526004016020604051808303816000875af115801561071f573d6000803e3d6000fd5b610e0f604080516060810182526000808252602080830182905283519081018452908152909182015290565b6107dc82614104565b610e20615976565b6105b3610e3236849003840184616490565b82611ac7565b6000610e426159fa565b602081015160009052610e53615976565b610e5d8282613a2d565b60a0015192915050565b6000610e716159fa565b602081015160009052610e82615976565b610e8c8282612ddf565b6101c0015192915050565b610e9f615976565b6105b3610eb13684900384018461640f565b826141e2565b6000610ec16159fa565b602081015160009052610ed2615976565b610edc8282613c59565b6080015192915050565b610eee615976565b6105b3610f003684900384018461640f565b826143c4565b610f0e615976565b6105b3610f2036849003840184616399565b82613095565b610f3660156000541460396145a6565b8151610f51901580610f4a57508251600154145b603a6145a6565b600080805560028054610f63906164f4565b80601f0160208091040260200160405190810160405280929190818152602001828054610f8f906164f4565b8015610fdc5780601f10610fb157610100808354040283529160200191610fdc565b820191906000526020600020905b815481529060010190602001808311610fbf57829003601f168201915b5050505050806020019051810190610ff491906165fe565b90507fdcf26d41875d589aabd0f8284691cd0af439a4906f715a9a317c07aa814cb6fb338460405161102792919061661b565b60405180910390a161103b341560386145a6565b602083015151516001908161104f33614104565b516001811115611061576110616161b3565b14611070578260e0015161107e565b61107933614104565b604001515b511461108b57600061108e565b60015b14156111b657604051600181527ffc104d6167f94a9e63d2d49b846d23b9dcf80aa7fc38de34402855ac48527b509060200160405180910390a160016101208301819052336000908152600560205260408120805461ffff19168155909101556110f6615a8a565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e08083015182519091015261010082015161116d9060016145cc565b60208201515261012082015161118490600161461b565b60208083018051909101919091528051436040909101526101408301519051606001526111b081614668565b50505050565b604051600081527fda0729da5cb44df6a79cb32734dd361dace2a6d302687e962ac35154306251f99060200160405180910390a160006101208301819052338152600560205260408120805461ffff1916815560010155611215615a8a565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e08083015182519091015261010082015161128c9060016145cc565b60208083018051929092526101208401518251909101528051436040909101526101408301519051606001526111b081614668565b505050565b6112d6600c6000541460226145a6565b81516112f19015806112ea57508251600154145b60236145a6565b600080805560028054611303906164f4565b80601f016020809104026020016040519081016040528092919081815260200182805461132f906164f4565b801561137c5780601f106113515761010080835404028352916020019161137c565b820191906000526020600020905b81548152906001019060200180831161135f57829003601f168201915b505050505080602001905181019061139491906166cb565b905061139e615acd565b7ff83c076bd4c0d71c52b5e6c31f5b75951081ea51d930ed4c540a97b78913927333856040516113cf9291906166e8565b60405180910390a16113e3341560206145a6565b60608201516113fe906001600160a01b0316331460216145a6565b8051600090819052815160200152805160405160008051602061710a8339815191529161142a91616712565b60405180910390a161143a615ae0565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e080860151908401526101008086015190840152600d6000554360015590516114b791839101616793565b604051602081830303815290604052600290805190602001906114db929190615b3e565b505050505050565b6114f3601c6000541460496145a6565b815161150e90158061150757508251600154145b604a6145a6565b600080805560028054611520906164f4565b80601f016020809104026020016040519081016040528092919081815260200182805461154c906164f4565b80156115995780601f1061156e57610100808354040283529160200191611599565b820191906000526020600020905b81548152906001019060200180831161157c57829003601f168201915b50505050508060200190518101906115b191906168b2565b90507fa0daf7e88e8c7106ac0a52788be9a37db2d9737d053516fb080775f840aaa31e33846040516115e49291906166e8565b60405180910390a16115f8341560476145a6565b6116206001611606336125d0565b516001811115611618576116186161b3565b1460486145a6565b600161162b33613008565b51600181111561163d5761163d6161b3565b141561176657604051600081527fcbee918d9ab5c5bd1e10bbe19179aaaaffaba80446a31b9ac3a48312a41234e99060200160405180910390a1600060c08301819052338152600660209081526040808320805462ffffff199081169091556004909252909120805490911690556116b3615bc2565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e080830151825190910152610100808301518251909101526101208201516117379060016145cc565b60208083018051929092528151339101528051436040909101526101608301519051606001526111b08161483d565b604051600081527fcafdc2cbee8ee57c7b9e96f793d2d68fb24fdeeeabbdb869140e69575f998aaa9060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff191690556117c1615bc2565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e080830151825190910152610100808301518251909101526101208201516118459060016145cc565b602080830180519290925261014084015182516001600160a01b039091169101528051436040909101526101608301519051606001526111b08161483d565b611894601f6000541460546145a6565b81516118af9015806118a857508251600154145b60556145a6565b6000808055600280546118c1906164f4565b80601f01602080910402602001604051908101604052809291908181526020018280546118ed906164f4565b801561193a5780601f1061190f5761010080835404028352916020019161193a565b820191906000526020600020905b81548152906001019060200180831161191d57829003601f168201915b50505050508060200190518101906119529190616962565b90507fdb446ee203a5dad82b756a03891ac7dea1af581afbcd2e5604c02edcd7bbc7e533846040516119859291906166e8565b60405180910390a16119b5600161199b336125d0565b5160018111156119ad576119ad6161b3565b1460526145a6565b6119c68160400151341460536145a6565b604051600081527f2e12d916138cad594719c9eea533d17d8ea5c300b9d9f03a3cfc87f80bbad4a49060200160405180910390a160006101a0830152611a0a615c67565b815181516001600160a01b039182169052602080840151835190910152604080840180518451909201919091526060808501518451931692019190915260808084015183519091015260a08084015183519091015260c08084015183519091015260e08301519051611a7c919061461b565b602082015152610100820151611a939060016145cc565b6020828101805190910191909152514360409182015261012083015190830151015b6020820151606001526111b081614ac9565b611ad760096000541460196145a6565b8151611af2901580611aeb57508251600154145b601a6145a6565b600080805560028054611b04906164f4565b80601f0160208091040260200160405190810160405280929190818152602001828054611b30906164f4565b8015611b7d5780601f10611b5257610100808354040283529160200191611b7d565b820191906000526020600020905b815481529060010190602001808311611b6057829003601f168201915b5050505050806020019051810190611b9591906166cb565b90507fc11525b2d4f661fb47937c1ff311ab7e4d1a56ceaff54297a9e238948a62fab33384604051611bc892919061697f565b60405180910390a1611bdc341560176145a6565b8051611c1e906001600160a01b03163314611bf8576000611c17565b6001611c03336125d0565b516001811115611c1557611c156161b3565b145b60186145a6565b604051600081527ffbcdc10403ea3904c76283615e1b7f4dc5a9f33bc88912565dd1050e69b11bfe9060200160405180910390a16000808352338152600560209081526040909120805460ff19166001908117825591850151515151910155611c85615cc4565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925260808085015184519091015260a08085015184519091015260c08085015184519091015260e0808501518451909101528083018051600090528051439201919091526101008401519051909101526111b081614d1c565b611d23600b60005414601e6145a6565b8151611d3e901580611d3757508251600154145b601f6145a6565b600080805560028054611d50906164f4565b80601f0160208091040260200160405190810160405280929190818152602001828054611d7c906164f4565b8015611dc95780601f10611d9e57610100808354040283529160200191611dc9565b820191906000526020600020905b815481529060010190602001808311611dac57829003601f168201915b5050505050806020019051810190611de191906166cb565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f3355ea27a9de0a9476dc454c9992d9c8728dffbd2709023aabe4dab2336b9a6a919081900360800190a1611e403415601b6145a6565b6060810151611e5b906001600160a01b03163314601c6145a6565b602080840151805190820151604051611ea993611e8393929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c826080015114601d6145a6565b611eb1615ae0565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092526080808501519084015260a0808501519084015260c0808501519084015260e080850151908401526101008085015190840152600c600055436001559051611f2e91839101616793565b60405160208183030381529060405260029080519060200190611f52929190615b3e565b5050505050565b611f69600160005414600a6145a6565b8151611f84901580611f7d57508251600154145b600b6145a6565b600080805560028054611f96906164f4565b80601f0160208091040260200160405190810160405280929190818152602001828054611fc2906164f4565b801561200f5780601f10611fe45761010080835404028352916020019161200f565b820191906000526020600020905b815481529060010190602001808311611ff257829003601f168201915b505050505080602001905181019061202791906169a9565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338460405161205a929190616a26565b60405180910390a161206e341560086145a6565b8051612086906001600160a01b0316331460096145a6565b6120ba604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b031680825260208084015181840190815260408086015181860190815260608088015181880190815260026000554360015583519586019690965292519184019190915251908201529051608082015260a001611f2e565b61212b601e6000541460506145a6565b815161214690158061213f57508251600154145b60516145a6565b600080805560028054612158906164f4565b80601f0160208091040260200160405190810160405280929190818152602001828054612184906164f4565b80156121d15780601f106121a6576101008083540402835291602001916121d1565b820191906000526020600020905b8154815290600101906020018083116121b457829003601f168201915b50505050508060200190518101906121e99190616962565b90507fcaf6a344ed20c6eab04f72c3ea2812ea0cae4f9e8582e3288eaac3d3a5f7217c338460405161221c92919061697f565b60405180910390a16122303415604e6145a6565b612258600161223e336125d0565b516001811115612250576122506161b3565b14604f6145a6565b604051600081527f9e89ee439a0663a7df76ca29f10c399fa3a7f5b3b8c240444d5388d63c6512a29060200160405180910390a16000808352338152600560209081526040909120805460ff191660019081178255918501515151519101556122bf615cc4565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e08083015182519091015261010082015161233690600161461b565b60208083018051929092528151439101526101208301519051604001526111b081614d1c565b61236c601060005414602a6145a6565b815161238790158061238057508251600154145b602b6145a6565b600080805560028054612399906164f4565b80601f01602080910402602001604051908101604052809291908181526020018280546123c5906164f4565b80156124125780601f106123e757610100808354040283529160200191612412565b820191906000526020600020905b8154815290600101906020018083116123f557829003601f168201915b505050505080602001905181019061242a9190616aed565b9050612434615d52565b7f25e51d2f848b9d4b7b439abc02e736d9b5c0f74cf1c0a0a6cddab55c2ab0626b3385604051612465929190616a26565b60405180910390a161012082015161014083015101815261014082015161248f90341460286145a6565b60608201516124aa906001600160a01b0316331460296145a6565b60208101805160039052805160006080909101525160405160008051602061710a833981519152916124db91616712565b60405180910390a161254b60405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e080860151908401526101008086015190840152835161012084015260116000554360015590516114b791839101616b85565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561261c5761261c6161b3565b1415612699576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561265d5761265d6161b3565b600181111561266e5761266e6161b3565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b6126b8601d60005414604c6145a6565b81516126d39015806126cc57508251600154145b604d6145a6565b6000808055600280546126e5906164f4565b80601f0160208091040260200160405190810160405280929190818152602001828054612711906164f4565b801561275e5780601f106127335761010080835404028352916020019161275e565b820191906000526020600020905b81548152906001019060200180831161274157829003601f168201915b505050505080602001905181019061277691906165fe565b90507fb97047a0840e786eaabc5fe9e0fab120fcc6ca0238dfca5b381ba7a91211e68133846040516127a992919061661b565b60405180910390a16127bd3415604b6145a6565b60208301515151600190816127d133614104565b5160018111156127e3576127e36161b3565b146127f2578260e00151612800565b6127fb33614104565b604001515b511461280d576000612810565b60015b141561293257604051600181527f91cd20a77510682f535799db5445dfba78b6fc196d2110113d479a3cd617a8a69060200160405180910390a160016101208301819052336000908152600560205260408120805461ffff1916815590910155612878615a8a565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e0808301518251909101526101008201516128ef9060016145cc565b60208201515261012082015161290690600161461b565b60208083018051909101919091528051436040909101526101408301519051606001526111b081614ec2565b604051600081527f78d05b539d1df031ccd805ed63f82847b6542cd29e7a791f1ed6a4f85f2e22d89060200160405180910390a160006101208301819052338152600560205260408120805461ffff1916815560010155612991615a8a565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e080830151825190910152610100820151612a089060016145cc565b60208083018051929092526101208401518251909101528051436040909101526101408301519051606001526111b081614ec2565b612a4d600260005414600d6145a6565b8151612a68901580612a6157508251600154145b600e6145a6565b600080805560028054612a7a906164f4565b80601f0160208091040260200160405190810160405280929190818152602001828054612aa6906164f4565b8015612af35780601f10612ac857610100808354040283529160200191612af3565b820191906000526020600020905b815481529060010190602001808311612ad657829003601f168201915b5050505050806020019051810190612b0b91906169a9565b604080513381528551602080830191909152860151518183015290519192507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8919081900360600190a1612b613415600c6145a6565b612b69615d6c565b815181516001600160a01b039091169052602080830151825182015260408084015183518201528251336060918201528683015151845160800152840151828401805191909152805143930192909252905160009101526111b081615070565b612bd9601b6000541460456145a6565b8151612bf4901580612bed57508251600154145b60466145a6565b600080805560028054612c06906164f4565b80601f0160208091040260200160405190810160405280929190818152602001828054612c32906164f4565b8015612c7f5780601f10612c5457610100808354040283529160200191612c7f565b820191906000526020600020905b815481529060010190602001808311612c6257829003601f168201915b5050505050806020019051810190612c979190616c3a565b90507f6bc6e66127bd2de8053aace64f30cc83868969c876bc39173e1bb43d8f21201a3384604051612cca929190616a26565b60405180910390a1612cde341560436145a6565b6060810151612cf9906001600160a01b0316331460446145a6565b8061012001516001600160a01b03166108fc8261014001519081150290604051600060405180830381858888f19350505050158015612d3c573d6000803e3d6000fd5b50612d45615cc4565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e080830151825190910152610100820151612dbc9060016145cc565b60208281018051929092528151439101525160006040909101526111b08161521d565b612def60076000541460156145a6565b8151612e0a901580612e0357508251600154145b60166145a6565b600080805560028054612e1c906164f4565b80601f0160208091040260200160405190810160405280929190818152602001828054612e48906164f4565b8015612e955780601f10612e6a57610100808354040283529160200191612e95565b820191906000526020600020905b815481529060010190602001808311612e7857829003601f168201915b5050505050806020019051810190612ead9190616c57565b90507f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe3384604051612ee09291906166e8565b60405180910390a1612ef98160400151341460136145a6565b8051612f3b906001600160a01b03163314612f15576000612f34565b6001612f20336125d0565b516001811115612f3257612f326161b3565b145b60146145a6565b604051600081527f19d508bb1f6c48108caed7efafa1ac68686fb73002fdb6ae99cf4f3e9b707d439060200160405180910390a160006101a0830152612f7f615c67565b815181516001600160a01b03918216905260208084015183518201526040808501805185518301526060808701518651951694019390935260808086015185519091015260a08086015185519091015260c080860180518651909201919091528351838601805191909152905181519093019290925290514391015260e0830151905101611ab5565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115613054576130546161b3565b1415612699576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561265d5761265d6161b3565b6130a560146000541460366145a6565b81516130c09015806130b957508251600154145b60376145a6565b6000808055600280546130d2906164f4565b80601f01602080910402602001604051908101604052809291908181526020018280546130fe906164f4565b801561314b5780601f106131205761010080835404028352916020019161314b565b820191906000526020600020905b81548152906001019060200180831161312e57829003601f168201915b505050505080602001905181019061316391906168b2565b90507fc481898b6397924b9ae6276db21d0cd8f5b982e79a481d958d8e360148cf6a7e33846040516131969291906166e8565b60405180910390a16131aa341560346145a6565b6131d260016131b8336125d0565b5160018111156131ca576131ca6161b3565b1460356145a6565b60016131dd33613008565b5160018111156131ef576131ef6161b3565b141561331857604051600081527f6d46253644490a7705f217f4c6e74c4f5a155466a5fd610672be14ced1ab1c439060200160405180910390a1600060c08301819052338152600660209081526040808320805462ffffff19908116909155600490925290912080549091169055613265615bc2565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e080830151825190910152610100808301518251909101526101208201516132e99060016145cc565b60208083018051929092528151339101528051436040909101526101608301519051606001526111b0816153f9565b604051600081527fa12dd8d96a0720e011b8dfac258d6afc8bbaefeee4fbb38b82991af1bd32582f9060200160405180910390a1600060c08301819052338152600460205260409020805462ffffff19169055613373615bc2565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e080830151825190910152610100808301518251909101526101208201516133f79060016145cc565b602080830180519290925261014084015182516001600160a01b039091169101528051436040909101526101608301519051606001526111b0816153f9565b613446600d6000541460266145a6565b815161346190158061345a57508251600154145b60276145a6565b600080805560028054613473906164f4565b80601f016020809104026020016040519081016040528092919081815260200182805461349f906164f4565b80156134ec5780601f106134c1576101008083540402835291602001916134ec565b820191906000526020600020905b8154815290600101906020018083116134cf57829003601f168201915b505050505080602001905181019061350491906166cb565b905061352160408051808201909152600060208201908152815290565b7f1c2676733c3845865a8a34c148f946857334a2b88c1490ba6e0b9b7cc826513e338560405161355292919061661b565b60405180910390a1613566341560246145a6565b81516135a8906001600160a01b031633146135825760006135a1565b600161358d336125d0565b51600181111561359f5761359f6161b3565b145b60256145a6565b80516000905260208401515151600190816135c233614104565b5160018111156135d4576135d46161b3565b146135e05782516135ee565b6135e933614104565b604001515b51146135fb5760006135fe565b60015b141561371e57604051600181527f0591663a4529cdf0c5a3b4972370d9e5fa52c24d07536cef1685e7bb140e8de49060200160405180910390a160016101208401819052336000908152600560209081526040808320805461ffff19168155840183905560069091529020805462ff00ff1916909117905561367e615a8a565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169381019390935260808087015185519091015260a08087015185519091015260c0808701518551909101528451845160e0908101919091528601518285018051919091528051600193019290925281514391015261010085015190519091015261371881614668565b506111b0565b604051600081527f666ed62907ef7d15d4ff48d558632dc86a0bb242c0f1066d87b3a1e83f7385589060200160405180910390a160006101208401819052338152600560205260408120805461ffff191681556001015561377d615a8a565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169381019390935260808087015185519091015260a08087015185519091015260c0808701518551909101528451845160e09081019190915286015182850180519190915280516000930192909252815143910152610100850151905190910152611f5281614ec2565b61382760136000541460326145a6565b815161384290158061383b57508251600154145b60336145a6565b600080805560028054613854906164f4565b80601f0160208091040260200160405190810160405280929190818152602001828054613880906164f4565b80156138cd5780601f106138a2576101008083540402835291602001916138cd565b820191906000526020600020905b8154815290600101906020018083116138b057829003601f168201915b50505050508060200190518101906138e59190616c3a565b90507f02f04c0e78318f5d09ccc56ac8af0bd02b06c06d254746fa325dd8508fb7d31c3384604051613918929190616a26565b60405180910390a161392c341560306145a6565b6060810151613947906001600160a01b0316331460316145a6565b8061012001516001600160a01b03166108fc8261014001519081150290604051600060405180830381858888f1935050505015801561398a573d6000803e3d6000fd5b50613993615cc4565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c08083015182519091015260e080830151825190910152610100820151613a0a9060016145cc565b60208281018051929092528151439101525160006040909101526111b081615685565b613a3d60206000541460586145a6565b8151613a58901580613a5157508251600154145b60596145a6565b600080805560028054613a6a906164f4565b80601f0160208091040260200160405190810160405280929190818152602001828054613a96906164f4565b8015613ae35780601f10613ab857610100808354040283529160200191613ae3565b820191906000526020600020905b815481529060010190602001808311613ac657829003601f168201915b5050505050806020019051810190613afb9190616c57565b90507f815fd3668ed116016e82b11172f5dea0cb9f3e2b6758011bb27836b9d94840053384604051613b2e9291906166e8565b60405180910390a1613b42341560566145a6565b613b786001613b50336125d0565b516001811115613b6257613b626161b3565b14613b6e576001613b71565b60005b60576145a6565b604051600081527f5a89e46585295308eb489e3285fd79d6cbfdbb275c28e9e8e50a607b2395a75d9060200160405180910390a1600060608301819052338152600460205260409020805462ff00ff19166001179055613bd6615da3565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260808083015182519091015260a08083015182519091015260c0820151613c3490600161461b565b602080830180519290925281514391015260e08301519051604001526111b0816157cd565b613c6960056000541460116145a6565b8151613c84901580613c7d57508251600154145b60126145a6565b600080805560028054613c96906164f4565b80601f0160208091040260200160405190810160405280929190818152602001828054613cc2906164f4565b8015613d0f5780601f10613ce457610100808354040283529160200191613d0f565b820191906000526020600020905b815481529060010190602001808311613cf257829003601f168201915b5050505050806020019051810190613d279190616d08565b90507f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943384604051613d5a9291906166e8565b60405180910390a1613d6e3415600f6145a6565b8051613dbd906001600160a01b03163314613d8a576000613db6565b6001613d95336125d0565b516001811115613da757613da76161b3565b14613db3576001613db6565b60005b60106145a6565b604051600081527f0118c5f3878e2e53f81deac81bd4cca3c4995828576250d597018705c6dabbe29060200160405180910390a1600060608301819052338152600460205260409020805462ff00ff19166001179055613e1b615da3565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925260808085015184519091015260a08085015184519091015280830180516000905280514392019190915260c08401519051909101526111b0816157cd565b613ea0601860005414603d6145a6565b8151613ebb901580613eb457508251600154145b603e6145a6565b600080805560028054613ecd906164f4565b80601f0160208091040260200160405190810160405280929190818152602001828054613ef9906164f4565b8015613f465780601f10613f1b57610100808354040283529160200191613f46565b820191906000526020600020905b815481529060010190602001808311613f2957829003601f168201915b5050505050806020019051810190613f5e9190616aed565b9050613f68615d52565b7fc284f4882132d70a21e8f6484a76c2ec3bfd2aac6c9c25cf8555874e7726719e3385604051613f99929190616a26565b60405180910390a1610120820151610140830151018152610140820151613fc3903414603b6145a6565b6060820151613fde906001600160a01b03163314603c6145a6565b60208101805160039052805160006080909101525160405160008051602061710a8339815191529161400f91616712565b60405180910390a161407f60405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e080860151908401526101008086015190840152835161012084015260196000554360015590516114b791839101616b85565b614130604080516060810182526000808252602080830182905283519081018452908152909182015290565b60016001600160a01b03831660009081526005602052604090205460ff16600181111561415f5761415f6161b3565b1415612699576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156141a0576141a06161b3565b60018111156141b1576141b16161b3565b81528154610100900460ff161515602080830191909152604080519182018152600190930154815291015292915050565b6141f2601160005414602e6145a6565b815161420d90158061420657508251600154145b602f6145a6565b60008080556002805461421f906164f4565b80601f016020809104026020016040519081016040528092919081815260200182805461424b906164f4565b80156142985780601f1061426d57610100808354040283529160200191614298565b820191906000526020600020905b81548152906001019060200180831161427b57829003601f168201915b50505050508060200190518101906142b09190616962565b90507fda00a95c1dcc12171d6effb435667fe1e6639deaf742996695658fb05741b8d733846040516142e3929190616a26565b60405180910390a16142f73415602c6145a6565b6060810151614312906001600160a01b03163314602d6145a6565b61431a615bc2565b815181516001600160a01b03918216905260208084018051845183015260408086015185518201526060808701805187519087169083015260808089015188519091015260a08089015188519091015260c08089015188519091015260e0808901518851909101526101008089015188519091015292518487018051919091529251835195169490930193909352805143930192909252610120840151915101526111b0816153f9565b6143d460196000541460416145a6565b81516143ef9015806143e857508251600154145b60426145a6565b600080805560028054614401906164f4565b80601f016020809104026020016040519081016040528092919081815260200182805461442d906164f4565b801561447a5780601f1061444f5761010080835404028352916020019161447a565b820191906000526020600020905b81548152906001019060200180831161445d57829003601f168201915b50505050508060200190518101906144929190616962565b90507fc16265324396b4615004177193a57a0697de14cc64da1feff4f20c97b4ac24b833846040516144c5929190616a26565b60405180910390a16144d93415603f6145a6565b60608101516144f4906001600160a01b0316331460406145a6565b6144fc615bc2565b815181516001600160a01b03918216905260208084018051845183015260408086015185518201526060808701805187519087169083015260808089015188519091015260a08089015188519091015260c08089015188519091015260e0808901518851909101526101008089015188519091015292518487018051919091529251835195169490930193909352805143930192909252610120840151915101526111b08161483d565b816105b35760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826145d98382616dc4565b91508111156107dc5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016145c3565b6000826146288382616ddb565b91508110156107dc5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016145c3565b6020810151511561473f5761467b615de2565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931683850152845160809081015190850152845160a09081015190850152845160c09081015190850152845160e0908101519085015281850180515161010086015280518301516101208601525190920151610140840152601560005543600155905161471b91839101616e82565b604051602081830303815290604052600290805190602001906112c1929190615b3e565b8051606081015160c0909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015614782573d6000803e3d6000fd5b5061478b615cc4565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451820152845160609081015185519416938101939093528451608090810151855190910152845160a090810151855190910152845160c09081015185518201528286018051840151865160e001528651840151848701805191909152815184015181519095019490945251909301518551909301519151919092039101526105b381615685565b50565b8060000151606001516001600160a01b03168160200151602001516001600160a01b03161461486d576000614876565b60208101515115155b156149aa576148fa60405180610180016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151841681860152855160809081015190860152855160a09081015190860152855160c09081015190860152855160e09081015190860152855161010090810151908601528286018051516101208701528651820151909416610140860152925190920151610160840152601c60005543600155905161471b91839101616f36565b614a2260405180610160016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151841681860152855160809081015190860152855160a09081015190860152855160c09081015190860152855160e09081015190860152855161010090810151908601528286018051840151909416610120860152925190920151610140840152601b60005543600155905161471b91839101616fde565b614ad1615acd565b602080830151015115614bfd57614b4660405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a09081015190850152855160c0908101519085015281860180515160e086015280518301516101008601525190920151610120840152601f600055436001559051614bd991839101616b85565b604051602081830303815290604052600290805190602001906111b0929190615b3e565b8051600490528051600060a090910152805160405160008051602061710a83398151915291614c2b91616712565b60405180910390a1614c9460405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a09081015190850152855160c0908101519085015281860180515160e086015251909201516101008401526009600055436001559051614bd991839101616793565b805160c001516020820151511015614e2d57614d9660405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931692840192909252835160809081015190840152835160a09081015190840152835160c09081015190840152835160e0908101519084015280840180515161010085015251820151610120840152601e60005543600155905161471b91839101616b85565b614e35615ae0565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931692840192909252835160809081015190840152835160a09081015190840152835160e09081015160c08501528185018051519185019190915251820151610100840152600b60005543600155905161471b91839101616793565b60208101515115614f7557614ed5615de2565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190931683850152845160809081015190850152845160a09081015190850152845160c09081015190850152845160e0908101519085015281850180515161010086015280518301516101208601525190920151610140840152601d60005543600155905161471b91839101616e82565b8051606081015160c0909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015614fb8573d6000803e3d6000fd5b50614fc1615cc4565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451820152845160609081015185519416938101939093528451608090810151855190910152845160a090810151855190910152845160c09081015185518201528286018051840151865160e001528651840151848701805191909152815184015181519095019490945251909301518551909301519151919092039101526105b38161521d565b615078615e62565b602082015151156151ce5780516002905280516000606090910152805160405160008051602061710a833981519152916150b191616712565b60405180910390a161510b6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925284516080908101519084015280850180515160a08501525182015160c08401526005600055436001559051614bd99183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b60208101805160019052805160006040918201529051905160008051602061710a833981519152916151ff91616712565b60405180910390a1600080805560018190556105b390600290615e82565b6040805160208101909152600081526020820151511561536557815160c081015160e09091015161524e9190615928565b8160000181815250506152c660405180610160016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252845160809081015190840152845160a09081015190840152845160c09081015190840152845160e090810151908401528085018051516101008501525182015161012084015283516101408401526018600055436001559051614bd991839101617073565b61536d615d6c565b82515181516001600160a01b039182169052835160209081015183519091015283516040908101518351909101528351606090810151835192169101528251608090810151825190910152825160a001516153c99060016145cc565b6020808301805192909252848101805182015183519092019190915251604090810151915101526112c181615070565b8060000151606001516001600160a01b03168160200151602001516001600160a01b031614615429576000615432565b60208101515115155b15615566576154b660405180610180016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151841681860152855160809081015190860152855160a09081015190860152855160c09081015190860152855160e09081015190860152855161010090810151908601528286018051516101208701528651820151909416610140860152925190920151610160840152601460005543600155905161471b91839101616f36565b6155de60405180610160016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151841681860152855160809081015190860152855160a09081015190860152855160c09081015190860152855160e09081015190860152855161010090810151908601528286018051840151909416610120860152925190920151610140840152601360005543600155905161471b91839101616fde565b6040805160208101909152600081526020820151511561536557815160c081015160e0909101516156b69190615928565b81600001818152505061572e60405180610160016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252845160809081015190840152845160a09081015190840152845160c09081015190840152845160e090810151908401528085018051516101008501525182015161012084015283516101408401526010600055436001559051614bd991839101617073565b6157d5615acd565b81516020908101519083015151101561586d576157f0615ebc565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252845160809081015190840152845160a0908101519084015280850180515160c08501525182015160e08401526000819055436001559051614bd991839101617082565b8051600590528051600060c090910152805160405160008051602061710a8339815191529161589b91616712565b60405180910390a16158ab615ebc565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252845160809081015190840152845160a0908101519084015280850180515160c08501525182015160e08401526007600055436001559051614bd991839101617082565b6000816159655760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b60448201526064016145c3565b61596f82846170e7565b9392505050565b6040805161020081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e081019190915290565b604051806040016040528060008152602001615a2460405180602001604052806000151581525090565b905290565b604051806040016040528060008152602001615a246040805160608101825260009181019182526020810191825290815290565b604051806040016040528060008152602001615a2460408051808201909152600060208201908152815290565b6040518060400160405280615a9d615f13565b8152602001615a246040518060800160405280600081526020016000815260200160008152602001600081525090565b6040518060200160405280615a24615f78565b60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b828054615b4a906164f4565b90600052602060002090601f016020900481019282615b6c5760008555615bb2565b82601f10615b8557805160ff1916838001178555615bb2565b82800160010185558215615bb2579182015b82811115615bb2578251825591602001919060010190615b97565b50615bbe929150615fb6565b5090565b6040518060400160405280615c2e60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8152602001615a2460405180608001604052806000815260200160006001600160a01b0316815260200160008152602001600081525090565b6040518060400160405280615a9d6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6040518060400160405280615d2960405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8152602001615a2460405180606001604052806000815260200160008152602001600081525090565b604051806040016040528060008152602001615a24615f78565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c0820192909252908190615d29565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e0820192909252908190615d29565b60405180610160016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001615e476040518060200160405280600081525090565b81526020016000815260200160008152602001600081525090565b6040518060400160405280615e75615f78565b8152602001615a24615f78565b508054615e8e906164f4565b6000825580601f10615e9e575050565b601f01602090049060005260206000209081019061483a9190615fb6565b60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001615a246040518060200160405280600081525090565b6040805160e08101909152806000815260006020820181905260408201819052606082018190526080820181905260a0820181905260c09091015290565b5b80821115615bbe5760008155600101615fb7565b600060408284031215615fdd57600080fd5b50919050565b600060408284031215615ff557600080fd5b61596f8383615fcb565b6040516020810167ffffffffffffffff8111828210171561603057634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff8111828210171561603057634e487b7160e01b600052604160045260246000fd5b604051610160810167ffffffffffffffff8111828210171561603057634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff8111828210171561603057634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff8111828210171561603057634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561603057634e487b7160e01b600052604160045260246000fd5b60006020828403121561614157600080fd5b616149615fff565b9135825250919050565b60006020828403121561616557600080fd5b61596f838361612f565b600060608284031215615fdd57600080fd5b6001600160a01b038116811461483a57600080fd5b6000602082840312156161a857600080fd5b813561596f81616181565b634e487b7160e01b600052602160045260246000fd5b6002811061483a5761483a6161b3565b815160608201906161e9816161c9565b8083525060208301511515602083015260408301511515604083015292915050565b60006020828403121561621d57600080fd5b5035919050565b82815260006020604081840152835180604085015260005b818110156162585785810183015185820160600152820161623c565b8181111561626a576000606083870101525b50601f01601f191692909201606001949350505050565b81516060820190616291816161c9565b80835250602083015115156020830152604083015151604083015292915050565b6000602082840312156162c457600080fd5b6162cc615fff565b90506162d8838361612f565b815292915050565b6000604082840312156162f257600080fd5b6162fa616036565b90508135815261630d83602084016162b2565b602082015292915050565b60006040828403121561632a57600080fd5b61596f83836162e0565b801515811461483a57600080fd5b6000818303604081121561635557600080fd5b61635d616036565b8335815291506020601f198201121561637557600080fd5b5061637e615fff565b602083013561638c81616334565b8152602082015292915050565b6000604082840312156163ab57600080fd5b61596f8383616342565b600081830360608112156163c857600080fd5b6163d0616036565b833581526040601f19830112156163e657600080fd5b6163ee616036565b60208581013582526040909501358582015293810193909352509092915050565b60006040828403121561642157600080fd5b616429616036565b82358152602083013561643b81616334565b60208201529392505050565b6000818303604081121561645a57600080fd5b616462616036565b8335815291506020601f198201121561647a57600080fd5b50616483615fff565b61638c84602085016162b2565b6000604082840312156164a257600080fd5b61596f8383616447565b6000602082840312156164be57600080fd5b815161596f81616334565b6000604082840312156164db57600080fd5b6164e3616036565b8235815261643b846020850161612f565b600181811c9082168061650857607f821691505b60208210811415615fdd57634e487b7160e01b600052602260045260246000fd5b8051610a7381616181565b60006020828403121561654657600080fd5b61654e615fff565b9151825250919050565b6000610160828403121561656b57600080fd5b616573616067565b905061657e82616529565b815260208201516020820152604082015160408201526165a060608301616529565b60608201526080820151608082015260a082015160a082015260c082015160c08201526165d08360e08401616534565b60e0820152610100828101519082015261012080830151908201526101409182015191810191909152919050565b6000610160828403121561661157600080fd5b61596f8383616558565b6001600160a01b03831681526060810161596f6020830184805182526020908101515151910152565b6000610120828403121561665757600080fd5b61665f616099565b905061666a82616529565b8152602082015160208201526040820151604082015261668c60608301616529565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525092915050565b600061012082840312156166de57600080fd5b61596f8383616644565b6001600160a01b03831681526060810161596f602083018480518252602090810151511515910152565b815160e082019060068110616729576167296161b3565b808352506020830151151560208301526040830151151560408301526060830151151560608301526080830151616764608084018215159052565b5060a083015161677860a084018215159052565b5060c083015161678c60c084018215159052565b5092915050565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012081016107dc565b6000610180828403121561681357600080fd5b61681b6160cb565b905061682682616529565b8152602082015160208201526040820151604082015261684860608301616529565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525061014061689b818401616529565b818301525061016080830151818301525092915050565b600061018082840312156168c557600080fd5b61596f8383616800565b600061014082840312156168e257600080fd5b6168ea6160fd565b90506168f582616529565b8152602082015160208201526040820151604082015261691760608301616529565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525092915050565b6000610140828403121561697557600080fd5b61596f83836168cf565b6001600160a01b03831681526060810161596f602083018480518252602090810151515151910152565b6000608082840312156169bb57600080fd5b6040516080810181811067ffffffffffffffff821117156169ec57634e487b7160e01b600052604160045260246000fd5b60405282516169fa81616181565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b60006101608284031215616a6157600080fd5b616a69616067565b9050616a7482616529565b81526020820151602082015260408201516040820152616a9660608301616529565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525061014080830151818301525092915050565b60006101608284031215616b0057600080fd5b61596f8383616a4e565b80516001600160a01b0316825260208101516020830152604081015160408301526060810151616b4560608401826001600160a01b03169052565b506080818101519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012090810151910152565b61014081016107dc8284616b0a565b60006101608284031215616ba757600080fd5b616baf616067565b9050616bba82616529565b81526020820151602082015260408201516040820152616bdc60608301616529565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e0820152610100808301518183015250610120616c23818401616529565b818301525061014080830151818301525092915050565b60006101608284031215616c4d57600080fd5b61596f8383616b94565b6000610100808385031215616c6b57600080fd5b6040519081019067ffffffffffffffff82118183101715616c9c57634e487b7160e01b600052604160045260246000fd5b8160405283519150616cad82616181565b8181526020840151602082015260408401516040820152616cd060608501616529565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060e08284031215616d1a57600080fd5b60405160e0810181811067ffffffffffffffff82111715616d4b57634e487b7160e01b600052604160045260246000fd5b6040528251616d5981616181565b8082525060208301516020820152604083015160408201526060830151616d7f81616181565b806060830152506080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082821015616dd657616dd6616dae565b500390565b60008219821115616dee57616dee616dae565b500190565b80516001600160a01b0316825260208101516020830152604081015160408301526060810151616e2e60608401826001600160a01b03169052565b506080810151608083015260a081015160a083015260c081015160c083015260e0810151616e5f60e0840182519052565b506101008181015190830152610120808201519083015261014090810151910152565b61016081016107dc8284616df3565b80516001600160a01b0316825260208101516020830152604081015160408301526060810151616ecc60608401826001600160a01b03169052565b506080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151818401525061014080820151616f28828501826001600160a01b03169052565b505061016090810151910152565b61018081016107dc8284616e91565b80516001600160a01b0316825260208101516020830152604081015160408301526060810151616f8060608401826001600160a01b03169052565b506080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151616fd0828501826001600160a01b03169052565b505061014090810151910152565b61016081016107dc8284616f45565b80516001600160a01b031682526020810151602083015260408101516040830152606081015161702860608401826001600160a01b03169052565b506080818101519083015260a0808201519083015260c0808201519083015260e080820151908301526101008082015190830152610120808201519083015261014090810151910152565b61016081016107dc8284616fed565b60006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60008261710457634e487b7160e01b600052601260045260246000fd5b50049056fe3457ee6571e662a8bb768bc5dc3a2139ed5d5cd81c69401f82a7339096e9bf5da2646970667358221220e8ca7a2ef2fa47371772d3967c7e801acf204c112b15e69ae4613e1bc0ef403064736f6c634300080c0033`,
  BytecodeLen: 29848,
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
    at: './index.rsh:292:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:144:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:163:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:181:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:198:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:206:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:213:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:251:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:255:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  19: {
    at: './index.rsh:279:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  20: {
    at: './index.rsh:259:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  21: {
    at: './index.rsh:217:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  24: {
    at: './index.rsh:251:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  25: {
    at: './index.rsh:255:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  27: {
    at: './index.rsh:279:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  28: {
    at: './index.rsh:259:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  29: {
    at: './index.rsh:217:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  30: {
    at: './index.rsh:185:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  31: {
    at: './index.rsh:167:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  32: {
    at: './index.rsh:148:19:after expr stmt semicolon',
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
