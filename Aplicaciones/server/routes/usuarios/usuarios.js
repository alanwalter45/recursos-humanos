var _0x375c=['/usuarios/add','tipo','\x0a\x20\x20INSERT\x20INTO\x20usuarios(login,password,tipo)\x20values\x20(?,?,?)','/usuarios/delete','\x0a\x20\x20DELETE\x20FROM\x20usuarios\x20WHERE\x20login=?\x20AND\x20tipo=?','/usuarios/habilitar-desabilitar-usuario','\x0a\x20\x20\x20\x20\x20\x20UPDATE\x20usuarios\x20SET\x20estado=?\x0a\x20\x20\x20\x20\x20\x20WHERE\x20login=?','/usuarios/cambiar-tipo-usuario','\x0a\x20\x20\x20\x20\x20\x20UPDATE\x20usuarios\x20SET\x20tipo=?\x0a\x20\x20\x20\x20\x20\x20WHERE\x20login=?','jwt-simple','moment','Router','../../databaseMysql','../../middleware','js-yaml','post','body','json','login','password','\x0a\x20\x20SELECT\x20login\x20as\x20CarnetIdentidad,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20tipo\x20as\x20Tipo,\x20estado\x20as\x20Estado\x0a\x20\x20FROM\x20usuarios\x0a\x20\x20WHERE\x20login=?\x20AND\x20password=?','parse','stringify','length','safeLoad','readFileSync','utf-8','unix','add','app','gral','credentials_time_minutes','minutes','secret_api_key','alg','application/text;charset=utf-8','status','send','/usuarios/autenticar-servidor-publico','query','../../os','whatPathFileConfig','setHeader','content-type','ensureAuthenticated','newPassword','\x0a\x20\x20\x20\x20UPDATE\x20usuarios\x20SET\x20password=?\x0a\x20\x20\x20\x20WHERE\x20login=?\x20AND\x20password=?','affectedRows','\x0a\x20\x20\x20\x20\x20\x20UPDATE\x20usuarios\x20SET\x20password=?\x20,\x20estado=1\x20,\x20tipo=?\x0a\x20\x20\x20\x20\x20\x20WHERE\x20login=?','estado','usuario','split','UPDATE\x20usuarios\x20set\x20estado=?\x20where\x20login=?\x0a\x20\x20\x20\x20','/usuarios/recovery-info-authentication','numeroDocumento','\x0a\x20\x20SELECT\x20nombres,apellido_paterno,apellido_materno,\x0a\x20\x20correo_electronico\x20,codigo_biometrico\x20FROM\x20servidores_publicos\x0a\x20\x20WHERE\x20numero_documento=?','/usuarios'];(function(_0x4c5dfe,_0x38cff9){var _0x10106b=function(_0x29b366){while(--_0x29b366){_0x4c5dfe['push'](_0x4c5dfe['shift']());}};_0x10106b(++_0x38cff9);}(_0x375c,0x15f));var _0x42a6=function(_0x237553,_0x5cf3ef){_0x237553=_0x237553-0x0;var _0xe95cb8=_0x375c[_0x237553];return _0xe95cb8;};const jwt=require(_0x42a6('0x0'));const moment=require(_0x42a6('0x1'));const express=require('express');const router=express[_0x42a6('0x2')]();const mysqldb=require(_0x42a6('0x3'));const middleware=require(_0x42a6('0x4'));const fs=require('fs');const yaml=require(_0x42a6('0x5'));router[_0x42a6('0x6')]('/usuarios/autenticar',(_0x24164c,_0xd9fba7,_0x18e6ef)=>{const _0xa11ea=JSON['parse'](_0x24164c[_0x42a6('0x7')][_0x42a6('0x8')]);const _0x5cb2b5=_0xa11ea[_0x42a6('0x9')];const _0x1ae293=_0xa11ea[_0x42a6('0xa')];mysqldb['query'](_0x42a6('0xb'),[_0x5cb2b5,_0x1ae293],(_0x7f7c51,_0x1de72e)=>{if(_0x7f7c51){throw _0x7f7c51;}_0x1de72e=JSON[_0x42a6('0xc')](JSON[_0x42a6('0xd')](_0x1de72e));if(_0x1de72e[_0x42a6('0xe')]){let _0x393863=require('../../os');var _0x2b6e28=_0x393863['whatPathFileConfig']();const _0x49d1e2=yaml[_0x42a6('0xf')](fs[_0x42a6('0x10')](_0x2b6e28,_0x42a6('0x11')));var _0x2aebd0=JSON['parse'](JSON[_0x42a6('0xd')](_0x49d1e2));const _0x465038={'sub':_0x5cb2b5,'data':_0x1de72e[0x0],'iat':moment()[_0x42a6('0x12')](),'exp':moment()[_0x42a6('0x13')](_0x2aebd0[_0x42a6('0x14')][_0x42a6('0x15')][_0x42a6('0x16')],_0x42a6('0x17'))['unix']()};const _0x1584fb=jwt['encode'](_0x465038,_0x2aebd0[_0x42a6('0x14')][_0x42a6('0x15')][_0x42a6('0x18')],_0x2aebd0['app'][_0x42a6('0x15')][_0x42a6('0x19')]);_0xd9fba7['setHeader']('content-type',_0x42a6('0x1a'));_0xd9fba7[_0x42a6('0x1b')](0xc8)[_0x42a6('0x1c')](JSON[_0x42a6('0xd')]({'success':!![],'result':_0x1584fb}));}else{_0xd9fba7[_0x42a6('0x1b')](0xc8)[_0x42a6('0x1c')](JSON[_0x42a6('0xd')]({'success':![]}));}});});router[_0x42a6('0x6')](_0x42a6('0x1d'),(_0x4e89f7,_0x3748b2,_0x430bf0)=>{const _0x1b6c1d=JSON[_0x42a6('0xc')](_0x4e89f7['body'][_0x42a6('0x8')]);const _0x91c815=_0x1b6c1d[_0x42a6('0x9')];const _0x29f32e=_0x1b6c1d[_0x42a6('0xa')];mysqldb[_0x42a6('0x1e')]('\x0a\x20\x20SELECT\x20\x20sp.numero_documento\x20as\x20CarnetIdentidad,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20us.tipo\x20as\x20Tipo,\x20us.estado\x20as\x20Estado\x0a\x20\x20FROM\x20servidores_publicos\x20sp\x20INNER\x20JOIN\x20usuarios\x20us\x20ON\x20sp.numero_documento=us.login\x0a\x20\x20WHERE\x20numero_documento=?\x20AND\x20codigo_biometrico=?',[_0x91c815,_0x29f32e],(_0x4530eb,_0x28ec2d)=>{if(_0x4530eb){throw _0x4530eb;}if(_0x28ec2d[_0x42a6('0xe')]){let _0x2eaa8a=require(_0x42a6('0x1f'));var _0x32e651=_0x2eaa8a[_0x42a6('0x20')]();const _0x31707d=yaml['safeLoad'](fs[_0x42a6('0x10')](_0x32e651,'utf-8'));var _0x379031=JSON[_0x42a6('0xc')](JSON[_0x42a6('0xd')](_0x31707d));const _0x1a30ae={'sub':_0x91c815,'data':_0x28ec2d[0x0],'iat':moment()[_0x42a6('0x12')](),'exp':moment()[_0x42a6('0x13')](_0x379031[_0x42a6('0x14')][_0x42a6('0x15')][_0x42a6('0x16')],_0x42a6('0x17'))['unix']()};const _0x4e49ec=jwt['encode'](_0x1a30ae,_0x379031[_0x42a6('0x14')]['gral']['secret_api_key'],_0x379031[_0x42a6('0x14')][_0x42a6('0x15')]['alg']);_0x3748b2[_0x42a6('0x21')](_0x42a6('0x22'),_0x42a6('0x1a'));_0x3748b2[_0x42a6('0x1b')](0xc8)[_0x42a6('0x1c')](JSON[_0x42a6('0xd')]({'success':!![],'result':_0x4e49ec}));}else{_0x3748b2[_0x42a6('0x1b')](0xc8)[_0x42a6('0x1c')](JSON[_0x42a6('0xd')]({'success':![]}));}});});router[_0x42a6('0x6')]('/usuarios/update-password',middleware[_0x42a6('0x23')],(_0x400d18,_0xc1024c,_0x41c540)=>{const _0x4c9b9b=JSON[_0x42a6('0xc')](_0x400d18['body'][_0x42a6('0x8')]);const _0x4b88c3=_0x4c9b9b['login'];const _0x51cf3a=_0x4c9b9b['password'];const _0x370c70=_0x4c9b9b[_0x42a6('0x24')];mysqldb[_0x42a6('0x1e')](_0x42a6('0x25'),[_0x370c70,_0x4b88c3,_0x51cf3a],function(_0x5ddd32,_0x2ecfb9){if(_0x5ddd32)throw _0x5ddd32;_0xc1024c[_0x42a6('0x1b')](0xc8)[_0x42a6('0x1c')](JSON[_0x42a6('0xd')]({'success':_0x2ecfb9[_0x42a6('0x26')]?!![]:![],'result':_0x2ecfb9[_0x42a6('0x26')]?!![]:![]}));});});router['post']('/usuarios/restablecer-credenciales-usuario',middleware[_0x42a6('0x23')],(_0x348ead,_0x34a0d1,_0x46565a)=>{const _0x4b7c12=JSON['parse'](_0x348ead[_0x42a6('0x7')][_0x42a6('0x8')]),_0x44eb67=_0x4b7c12['login'],_0x58bcd8=_0x4b7c12[_0x42a6('0xa')],_0x5612f5=_0x4b7c12['tipo'];mysqldb['query']('SELECT\x20*\x20FROM\x20usuarios\x20WHERE\x20login=?',[_0x44eb67],(_0x2bc458,_0xfaae7e)=>{if(_0x2bc458)throw _0x2bc458;if(!_0xfaae7e[_0x42a6('0xe')]){mysqldb[_0x42a6('0x1e')]('\x0a\x20\x20\x20\x20\x20\x20INSERT\x20INTO\x20usuarios(login,password,estado,tipo)\x20VALUES\x20(?,?,1,?)',[_0x44eb67,_0x58bcd8,_0x5612f5],function(_0x2e1fa1,_0x1f7ebb){if(_0x2e1fa1)throw _0x2e1fa1;_0x34a0d1[_0x42a6('0x1b')](0xc8)['send'](JSON[_0x42a6('0xd')]({'success':_0x1f7ebb[_0x42a6('0x26')]?!![]:![],'result':_0x1f7ebb['affectedRows']?!![]:![]}));});}else{mysqldb[_0x42a6('0x1e')](_0x42a6('0x27'),[_0x58bcd8,_0x5612f5,_0x44eb67],function(_0x376c0e,_0x4961d0){if(_0x376c0e)throw _0x376c0e;_0x34a0d1[_0x42a6('0x1b')](0xc8)['send'](JSON[_0x42a6('0xd')]({'success':_0x4961d0[_0x42a6('0x26')]?!![]:![],'result':_0x4961d0[_0x42a6('0x26')]?!![]:![]}));});}});});router['post']('/usuarios/update-estado',middleware[_0x42a6('0x23')],(_0x1cf8c2,_0x58fc7a,_0x139737)=>{let _0x28e2c8=JSON[_0x42a6('0xc')](_0x1cf8c2[_0x42a6('0x7')]['json']);let _0x406b9c=_0x28e2c8[_0x42a6('0x28')];let _0x39f7f3=_0x28e2c8[_0x42a6('0x29')]['toString']()[_0x42a6('0x2a')]('\x20')[0x0];mysqldb[_0x42a6('0x1e')](_0x42a6('0x2b'),[_0x406b9c,_0x39f7f3],(_0x318723,_0x534173,_0x559a6a)=>{if(_0x318723){throw _0x318723;}_0x58fc7a['status'](0xc8)[_0x42a6('0x1c')]({'success':_0x534173[_0x42a6('0x26')]?!![]:![],'result':_0x534173});});});router[_0x42a6('0x6')](_0x42a6('0x2c'),(_0x41295d,_0x263fde,_0x4d5a3f)=>{const _0x339c8b=JSON['parse'](_0x41295d[_0x42a6('0x7')]['json']);const _0x1acb6f=_0x339c8b[_0x42a6('0x2d')];mysqldb[_0x42a6('0x1e')](_0x42a6('0x2e'),[_0x1acb6f],(_0x2aa9ae,_0x54873e)=>{if(_0x2aa9ae)throw _0x2aa9ae;_0x263fde[_0x42a6('0x1b')](0xc8)[_0x42a6('0x1c')]({'success':_0x54873e,'result':_0x54873e});});});router['get'](_0x42a6('0x2f'),middleware[_0x42a6('0x23')],(_0x1192c7,_0x30bec4,_0x2824da)=>{mysqldb[_0x42a6('0x1e')]('\x0a\x20\x20SELECT\x20us.*,\x20sp.nombres,sp.apellido_paterno,sp.apellido_materno\x20\x20,\x20sp.numero_documento\x0a\x20\x20\x20FROM\x20usuarios\x20us\x20INNER\x20JOIN\x20servidores_publicos\x20sp\x20ON\x20us.login=sp.numero_documento',function(_0x2553c7,_0x4d89b5){if(_0x2553c7)throw _0x2553c7;_0x30bec4[_0x42a6('0x1b')](0xc8)[_0x42a6('0x1c')]({'success':_0x4d89b5['length']?!![]:![],'result':_0x4d89b5});});});router[_0x42a6('0x6')](_0x42a6('0x30'),(_0x3a458e,_0xf9f394,_0x48b1e8)=>{const _0x4f50a3=JSON[_0x42a6('0xc')](_0x3a458e['body'][_0x42a6('0x8')]);const _0x33f0ad=_0x4f50a3['login'];const _0x3298d1=_0x4f50a3[_0x42a6('0xa')];const _0x503301=_0x4f50a3[_0x42a6('0x31')];mysqldb[_0x42a6('0x1e')](_0x42a6('0x32'),[_0x33f0ad,_0x3298d1,_0x503301],(_0x34cd1b,_0x52788f)=>{if(_0x34cd1b)throw _0x34cd1b;_0xf9f394['status'](0xc8)['send']({'success':_0x52788f['affectedRows']?!![]:![],'result':_0x52788f});});});router[_0x42a6('0x6')](_0x42a6('0x33'),(_0xcc1c58,_0x252e95,_0x30b712)=>{const _0x7f2bcf=JSON['parse'](_0xcc1c58[_0x42a6('0x7')][_0x42a6('0x8')]);const _0x4dd453=_0x7f2bcf[_0x42a6('0x9')];const _0xc69cd1=_0x7f2bcf['tipo'];mysqldb[_0x42a6('0x1e')](_0x42a6('0x34'),[_0x4dd453,_0xc69cd1],(_0x4a6511,_0x19cf20)=>{if(_0x4a6511)throw _0x4a6511;_0x252e95[_0x42a6('0x1b')](0xc8)[_0x42a6('0x1c')]({'success':_0x19cf20[_0x42a6('0x26')]?!![]:![],'result':_0x19cf20});});});router[_0x42a6('0x6')](_0x42a6('0x35'),middleware[_0x42a6('0x23')],(_0x5c0a0f,_0x390e84,_0x202be5)=>{const _0x7e7dde=JSON[_0x42a6('0xc')](_0x5c0a0f['body'][_0x42a6('0x8')]),_0xca1744=_0x7e7dde[_0x42a6('0x9')],_0xf4f183=!_0x7e7dde[_0x42a6('0x28')];mysqldb[_0x42a6('0x1e')](_0x42a6('0x36'),[_0xf4f183,_0xca1744],function(_0x42fe98,_0x591f96){if(_0x42fe98)throw _0x42fe98;_0x390e84[_0x42a6('0x1b')](0xc8)[_0x42a6('0x1c')](JSON[_0x42a6('0xd')]({'success':_0x591f96[_0x42a6('0x26')]?!![]:![],'result':_0x591f96['affectedRows']?!![]:![]}));});});router[_0x42a6('0x6')](_0x42a6('0x37'),middleware[_0x42a6('0x23')],(_0x2c49ac,_0x474ff9,_0x4e4b54)=>{const _0x549c32=JSON['parse'](_0x2c49ac[_0x42a6('0x7')][_0x42a6('0x8')]),_0xbd973b=_0x549c32[_0x42a6('0x9')],_0x15f896=_0x549c32[_0x42a6('0x31')];mysqldb[_0x42a6('0x1e')](_0x42a6('0x38'),[_0x15f896,_0xbd973b],function(_0x35fd31,_0x6317c7){if(_0x35fd31)throw _0x35fd31;_0x474ff9[_0x42a6('0x1b')](0xc8)['send']({'success':_0x6317c7['affectedRows']?!![]:![],'result':_0x6317c7});});});module['exports']=router;