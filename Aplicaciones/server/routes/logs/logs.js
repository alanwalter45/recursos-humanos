var _0x1094=['body','json','YYYY-MM-DD\x20HH:mm:ss','accion','CALL\x20add_log(?,?,?,?)','affectedRows','post','/logs/last3','ensureAuthenticated','numero_documento','\x0a\x0a\x20\x20SELECT\x20\x20\x20l.ip,l.usuario,l.fecha,l.accion,\x0a\x20\x20r.nombres,\x0a\x20\x20r.apellido_paterno,\x0a\x20\x20r.apellido_materno,\x0a\x20\x20r.numero_documento\x0a\x20\x20FROM\x20servidores_publicos\x20r\x20left\x20join\x20logs\x20l\x20\x20on\x20l.usuario\x20=\x20r.numero_documento\x0a\x20\x20WHERE\x20r.numero_documento\x20=\x20?\x20AND\x20l.accion\x20like\x20\x27%INGRESÓ%\x27\x0a\x20\x20ORDER\x20BY\x20l.fecha\x20DESC\x0a\x20\x20LIMIT\x206;\x0a\x0a\x20\x20','express','Router','query','\x0a\x20\x0a\x20\x20SELECT\x20\x20\x20l.ip,l.usuario,l.fecha,l.accion,\x0a\x20\x20r.nombres,\x0a\x20\x20r.apellido_paterno,\x0a\x20\x20r.apellido_materno,\x0a\x20\x20r.numero_documento\x0a\x20\x20FROM\x20servidores_publicos\x20r\x20left\x20join\x20logs\x20l\x20\x20on\x20l.usuario\x20=\x20r.numero_documento\x0a\x20\x20ORDER\x20BY\x20l.fecha\x20DESC\x0a\x0a\x20\x20','status','send','/logs/add','parse'];(function(_0x2c7efd,_0x51c11d){var _0x8f3124=function(_0x47eb72){while(--_0x47eb72){_0x2c7efd['push'](_0x2c7efd['shift']());}};_0x8f3124(++_0x51c11d);}(_0x1094,0x14e));var _0x44bf=function(_0x4df055,_0x35bc1c){_0x4df055=_0x4df055-0x0;var _0x14e1a2=_0x1094[_0x4df055];return _0x14e1a2;};'use strict';const express=require(_0x44bf('0x0'));const router=express[_0x44bf('0x1')]();const mysqldb=require('../../databaseMysql');const middleware=require('./../../middleware');const moment=require('moment');router['get']('/logs',middleware['ensureAuthenticated'],(_0x3a8e80,_0x27cf65,_0xfcd87c)=>{mysqldb[_0x44bf('0x2')](_0x44bf('0x3'),(_0x3135ac,_0x74b299)=>{if(_0x3135ac){throw _0x3135ac;}_0x27cf65[_0x44bf('0x4')](0xc8)[_0x44bf('0x5')](_0x74b299);});});router['post'](_0x44bf('0x6'),(_0x345800,_0x11ab86,_0x4baecd)=>{let _0x2b2813=JSON[_0x44bf('0x7')](_0x345800[_0x44bf('0x8')][_0x44bf('0x9')]);let _0x4ce36d=_0x2b2813['usuario'];let _0x472c6b=moment(new Date())['format'](_0x44bf('0xa'));let _0x3aa6ba=_0x345800['ip'];let _0x2d92ab=_0x2b2813[_0x44bf('0xb')];mysqldb[_0x44bf('0x2')](_0x44bf('0xc'),[_0x3aa6ba,_0x472c6b,_0x4ce36d,_0x2d92ab],function(_0x46a260,_0x37eebd){if(_0x46a260)throw _0x46a260;const _0x42ffd7={'success':_0x37eebd[_0x44bf('0xd')]?!![]:![],'result':_0x37eebd};_0x11ab86['status'](0xc8)['send'](_0x42ffd7);});});router[_0x44bf('0xe')](_0x44bf('0xf'),middleware[_0x44bf('0x10')],(_0x43aa94,_0x968e7b,_0x1b1231)=>{const _0x5ecdde=JSON[_0x44bf('0x7')](_0x43aa94[_0x44bf('0x8')][_0x44bf('0x9')]);const _0x39f12e=_0x5ecdde[_0x44bf('0x11')];mysqldb['query'](_0x44bf('0x12'),[_0x39f12e],(_0x416237,_0x309de5)=>{if(_0x416237)throw _0x416237;_0x968e7b[_0x44bf('0x4')](0xc8)[_0x44bf('0x5')]({'results':_0x309de5});});});module['exports']=router;