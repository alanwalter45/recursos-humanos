var _0x5257=['YYYY-MM-DD','fecha_inicio_rrhh','query','\x0a\x20\x20\x20\x20INSERT\x20INTO\x20declaraciones_juradas(fecha_inicio,fecha_contraloria_general,fecha_recursos_humanos,fecha_modificacion,motivo,servidor_publico_id)\x0a\x20\x20\x20\x20VALUES(?,?,?,?,?,?)\x0a\x20\x20','status','send','ensureAuthenticated','\x0a\x20\x20SELECT\x20decla.*,\x0a\x20\x20sp.nombres,sp.apellido_paterno,sp.apellido_materno,\x0a\x20\x20sp.numero_documento\x0a\x20\x20FROM\x20declaraciones_juradas\x20decla\x20INNER\x20JOIN\x20servidores_publicos\x20sp\x20ON\x20decla.servidor_publico_id=sp.id\x0a\x20\x20ORDER\x20BY\x20decla.fecha_inicio\x20ASC','parse','\x0a\x20\x20DELETE\x20FROM\x20\x20declaraciones_juradas\x0a\x20\x20WHERE\x20id=?','affectedRows','exports','express','Router','../../middleware','../../databaseMysql','moment','post','/declaraciones-juradas/add','body','json','fecha_inicio','format','fecha_inicio_gde'];(function(_0x1f39ce,_0x480869){var _0xe2b0ee=function(_0x436f3a){while(--_0x436f3a){_0x1f39ce['push'](_0x1f39ce['shift']());}};_0xe2b0ee(++_0x480869);}(_0x5257,0x84));var _0x4f8b=function(_0x599a58,_0x3af414){_0x599a58=_0x599a58-0x0;var _0x47b05d=_0x5257[_0x599a58];return _0x47b05d;};const express=require(_0x4f8b('0x0'));const router=express[_0x4f8b('0x1')]();const middleware=require(_0x4f8b('0x2'));const mysqldb=require(_0x4f8b('0x3'));const moment=require(_0x4f8b('0x4'));router[_0x4f8b('0x5')](_0x4f8b('0x6'),middleware['ensureAuthenticated'],(_0x33c7a0,_0x21e68e,_0x303d9a)=>{const _0x807a6e=JSON['parse'](_0x33c7a0[_0x4f8b('0x7')][_0x4f8b('0x8')]);const _0x594e72=_0x807a6e['servidor_publico_id'];const _0x3fdabb=moment(_0x807a6e[_0x4f8b('0x9')])[_0x4f8b('0xa')]('YYYY-MM-DD');const _0x1b769d=moment(_0x807a6e[_0x4f8b('0xb')])['format'](_0x4f8b('0xc'));const _0x17c332=moment(_0x807a6e[_0x4f8b('0xd')])[_0x4f8b('0xa')]('YYYY-MM-DD');const _0x206df3=moment(new Date())[_0x4f8b('0xa')]('YYYY-MM-DD\x20HH:mm:ss');const _0x16d9ea=_0x807a6e['motivo'];mysqldb[_0x4f8b('0xe')](_0x4f8b('0xf'),[_0x3fdabb,_0x1b769d,_0x17c332,_0x206df3,_0x16d9ea,_0x594e72],function(_0x2ce086,_0x20b641){if(_0x2ce086)throw _0x2ce086;_0x21e68e[_0x4f8b('0x10')](0xc8)[_0x4f8b('0x11')]({'success':_0x20b641['affectedRows']?!![]:![],'result':_0x20b641});});});router['get']('/declaraciones-juradas/get-all-actual',middleware[_0x4f8b('0x12')],(_0xd542b,_0x4f345b,_0x4a71f3)=>{mysqldb[_0x4f8b('0xe')](_0x4f8b('0x13'),(_0x315d5c,_0x31c80e)=>{if(_0x315d5c){throw _0x315d5c;}_0x4f345b[_0x4f8b('0x10')](0xc8)[_0x4f8b('0x11')]({'success':_0x31c80e['length']?!![]:![],'result':_0x31c80e});});});router[_0x4f8b('0x5')]('/declaraciones-juradas/delete',middleware['ensureAuthenticated'],(_0x25c9e2,_0x224814,_0x3d7282)=>{const _0x430b5f=JSON[_0x4f8b('0x14')](_0x25c9e2[_0x4f8b('0x7')][_0x4f8b('0x8')]);const _0x5200c5=_0x430b5f['id'];mysqldb[_0x4f8b('0xe')](_0x4f8b('0x15'),[_0x5200c5],function(_0x3a676f,_0x23157f){if(_0x3a676f)throw _0x3a676f;_0x224814[_0x4f8b('0x10')](0xc8)[_0x4f8b('0x11')]({'success':_0x23157f[_0x4f8b('0x16')]?!![]:![],'result':_0x23157f[_0x4f8b('0x16')]});});});module[_0x4f8b('0x17')]=router;