var _0x42cf=['\x0a\x20\x20SELECT\x20ge.id,\x0a\x20\x20ge.anho,\x0a\x20\x20me.mes,\x0a\x20\x20me.nombre\x0aFROM\x20meses\x20me\x20INNER\x20JOIN\x20gestiones\x20ge\x20ON\x20me.gestion_id=ge.id\x0a\x20\x20WHERE\x20ge.selected=1\x20AND\x20me.selected=1','/gestiones/tickear-gestion','mes','UPDATE\x20meses\x20SET\x20selected=0','UPDATE\x20meses\x20SET\x20selected=1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id\x20=\x20?\x20AND\x20mes=?','affectedRows','post','/gestiones/tickear-anho','anho','UPDATE\x20gestiones\x20SET\x20selected=0','select\x20count(*)\x20from\x20\x20gestiones','/gestiones/add-month','nombre','fecha_inicio','fecha_final','YYYY-MM-DD\x20HH:mm:ss','\x0a\x20\x20INSERT\x20INTO\x20meses(nombre,mes,fecha_inicio,fecha_final,selected,gestion_id,fecha_modificacion,status)\x0a\x20\x20SELECT\x20?,?,?,?,?,?,?,?\x0a\x20\x20WHERE\x20NOT\x20EXISTS(SELECT\x201\x20FROM\x20meses\x20WHERE\x20nombre=?\x20AND\x20mes=?\x20AND\x20gestion_id=?\x20AND\x20status=1)','insertId','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20*\x0a\x20\x20\x20\x20\x20\x20FROM\x20registros\x0a\x20\x20\x20\x20\x20\x20WHERE\x20mes_id=\x20(SELECT\x20id\x20FROM\x20meses\x20WHERE\x20selected=1)\x20AND\x20estado>0','forEach','servidor_publico_id','estado','select\x20*\x20from\x20inf_contratacion\x20where\x20registro_id=?','insert\x20into\x20inf_contratacion(lugar_trabajo,forma_ingreso,programa_proyecto,es_tecnico_campo,referencia,registro_id,fecha_inicio,fecha_conclusion,motivo_conclusion,antiguedad_calificada,requisitos_para_acceder_cargo)\x20values(?,?,?,?,?,?,?,?,?,?,?)','lugar_trabajo','forma_ingreso','programa_proyecto','referencia','fecha_conclusion','motivo_conclusion','antiguedad_calificada','region','representante','imagen','select\x20*\x20from\x20documentos_presentados\x20where\x20registro_id=?','documento_requerido_id','tickeado','imagen_adjunta','fecha_modificacion','YYYY-MM-DD','replace','numero_proceso','\x27,\x27','fecha_llamada_proceso','format','descripcion','tipo','\x27),','/gestiones/clear-month','delete\x20from\x20inf_contratacion\x20where\x20registro_id=?','delete\x20from\x20inf_politica\x20where\x20registro_id=?','delete\x20from\x20documentos_presentados\x20where\x20registro_id=?','delete\x20FROM\x20registros\x20WHERE\x20id=?','/gestiones/remove-month','delete\x20FROM\x20meses\x20WHERE\x20id=?','/gestiones/update-anho','log','UPDATE\x20gestiones\x20SET\x20anho=?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id\x20=\x20?','exports','express','Router','./../../middleware','./../../databaseMysql','moment','/gestiones/get-all','ensureAuthenticated','parse','body','json','gestion_id','query','send','length','get','/gestiones/get-all-actual','\x0a\x20\x20SELECT\x20me.*,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ge.id\x20as\x20gestion_id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ge.anho\x0a\x20\x20FROM\x20meses\x20me\x20INNER\x20JOIN\x20gestiones\x20ge\x20ON\x20me.gestion_id=ge.id\x0a\x20\x20WHERE\x20ge.id=(SELECT\x20id\x20FROM\x20gestiones\x20where\x20selected=1)\x0a\x20\x20ORDER\x20BY\x20me.mes_numero','/gestiones/get-all-anhos','\x0a\x20\x20SELECT\x20*\x20FROM\x20gestiones','status','/gestiones/get-actual'];(function(_0x1e6642,_0x181355){var _0x1d23af=function(_0x28059c){while(--_0x28059c){_0x1e6642['push'](_0x1e6642['shift']());}};_0x1d23af(++_0x181355);}(_0x42cf,0x12b));var _0x42b8=function(_0x5c9d56,_0x4b9562){_0x5c9d56=_0x5c9d56-0x0;var _0x7f1ee=_0x42cf[_0x5c9d56];return _0x7f1ee;};const express=require(_0x42b8('0x0'));const router=express[_0x42b8('0x1')]();const middleware=require(_0x42b8('0x2'));const mysqldb=require(_0x42b8('0x3'));const moment=require(_0x42b8('0x4'));router['post'](_0x42b8('0x5'),middleware[_0x42b8('0x6')],(_0x27c76d,_0xcdb854,_0xbecceb)=>{const _0x455941=JSON[_0x42b8('0x7')](_0x27c76d[_0x42b8('0x8')][_0x42b8('0x9')]);const _0x35facb=_0x455941[_0x42b8('0xa')];mysqldb[_0x42b8('0xb')]('\x0a\x20\x20SELECT\x20me.*,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ge.id\x20as\x20gestion_id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ge.anho\x0a\x20\x20FROM\x20meses\x20me\x20INNER\x20JOIN\x20gestiones\x20ge\x20ON\x20me.gestion_id=ge.id\x0a\x20\x20WHERE\x20ge.id=?\x0a\x20\x20ORDER\x20BY\x20me.mes_numero',[_0x35facb],(_0x5d8496,_0xec52ff)=>{if(_0x5d8496){throw _0x5d8496;}_0xcdb854['status'](0xc8)[_0x42b8('0xc')]({'success':_0xec52ff[_0x42b8('0xd')]?!![]:![],'result':_0xec52ff});});});router[_0x42b8('0xe')](_0x42b8('0xf'),middleware['ensureAuthenticated'],(_0x577879,_0x368644,_0x21a043)=>{mysqldb[_0x42b8('0xb')](_0x42b8('0x10'),(_0x338e2d,_0x5e961f)=>{if(_0x338e2d){throw _0x338e2d;}_0x368644['status'](0xc8)['send']({'success':_0x5e961f[_0x42b8('0xd')]?!![]:![],'result':_0x5e961f});});});router['get'](_0x42b8('0x11'),middleware[_0x42b8('0x6')],(_0x102d42,_0x104ae9,_0x51710b)=>{mysqldb[_0x42b8('0xb')](_0x42b8('0x12'),(_0x9b0d8c,_0x3468aa)=>{if(_0x9b0d8c){throw _0x9b0d8c;}_0x104ae9[_0x42b8('0x13')](0xc8)[_0x42b8('0xc')]({'success':_0x3468aa[_0x42b8('0xd')]?!![]:![],'result':_0x3468aa});});});router[_0x42b8('0xe')](_0x42b8('0x14'),(_0x43ce77,_0x3e1b54,_0x5538c6)=>{mysqldb['query'](_0x42b8('0x15'),(_0x28052e,_0x65d936)=>{if(_0x28052e)throw _0x28052e;_0x3e1b54[_0x42b8('0x13')](0xc8)[_0x42b8('0xc')]({'success':_0x65d936[_0x42b8('0xd')]?!![]:![],'result':_0x65d936[0x0]});});});router['post'](_0x42b8('0x16'),middleware['ensureAuthenticated'],(_0x3a7c62,_0x3a425c,_0x373e68)=>{const _0x4fffec=JSON[_0x42b8('0x7')](_0x3a7c62['body'][_0x42b8('0x9')]);const _0x2cd0c0=_0x4fffec['id'];const _0x5149f5=_0x4fffec[_0x42b8('0x17')];mysqldb[_0x42b8('0xb')](_0x42b8('0x18'),(_0x2b63fd,_0x1c865d)=>{if(_0x2b63fd)throw _0x2b63fd;mysqldb[_0x42b8('0xb')](_0x42b8('0x19'),[_0x2cd0c0,_0x5149f5],(_0x30d255,_0x222cf9)=>{if(_0x30d255)throw _0x30d255;_0x3a425c[_0x42b8('0x13')](0xc8)['send']({'success':_0x222cf9[_0x42b8('0x1a')]?!![]:![]});});});});router[_0x42b8('0x1b')](_0x42b8('0x1c'),middleware['ensureAuthenticated'],(_0xecdba0,_0x3098d0,_0xd94c3d)=>{const _0x51bce1=JSON[_0x42b8('0x7')](_0xecdba0[_0x42b8('0x8')][_0x42b8('0x9')]);const _0x101ada=_0x51bce1['id'];const _0x18b2d5=_0x51bce1[_0x42b8('0x1d')];mysqldb[_0x42b8('0xb')](_0x42b8('0x1e'),(_0x505714,_0x552783)=>{if(_0x505714)throw _0x505714;mysqldb[_0x42b8('0xb')]('UPDATE\x20gestiones\x20SET\x20selected=1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id\x20=\x20?\x20AND\x20anho=?',[_0x101ada,_0x18b2d5],(_0x18b34f,_0x224959)=>{if(_0x18b34f)throw _0x18b34f;_0x3098d0['status'](0xc8)[_0x42b8('0xc')]({'success':_0x224959[_0x42b8('0x1a')]?!![]:![]});});});});router[_0x42b8('0x1b')]('/gestiones/add-year',middleware[_0x42b8('0x6')],(_0xd72e44,_0x8f66b8,_0x269a2a)=>{const _0x5ae3d4=JSON[_0x42b8('0x7')](_0xd72e44[_0x42b8('0x8')][_0x42b8('0x9')]);const _0x29b54b=_0x5ae3d4[_0x42b8('0x1d')];mysqldb[_0x42b8('0xb')](_0x42b8('0x1f'),(_0x45c2e7,_0x15e727)=>{if(_0x45c2e7)throw _0x45c2e7;if(_0x15e727[_0x42b8('0xd')]<=0x32){mysqldb['query']('INSERT\x20INTO\x20gestiones(anho)\x20values\x20(?)',[_0x29b54b],(_0x49620a,_0x302483)=>{if(_0x49620a)throw _0x49620a;_0x8f66b8[_0x42b8('0x13')](0xc8)[_0x42b8('0xc')]({'success':_0x302483[_0x42b8('0x1a')]?!![]:![]});});}});});router[_0x42b8('0x1b')](_0x42b8('0x20'),middleware[_0x42b8('0x6')],(_0x47ba1f,_0x38ed1b,_0x1493b4)=>{const _0x4119cb=JSON[_0x42b8('0x7')](_0x47ba1f[_0x42b8('0x8')][_0x42b8('0x9')]);const _0x2b4d7a=_0x4119cb[_0x42b8('0x21')];const _0x10f53e=_0x4119cb[_0x42b8('0x17')]['toUpperCase']();const _0x3faf7d=_0x4119cb[_0x42b8('0x22')];const _0x44708c=_0x4119cb[_0x42b8('0x23')];const _0x40c966=0x0;const _0x45b1bd=_0x4119cb['id'];const _0x283400=moment(new Date())['format'](_0x42b8('0x24'));const _0x4dfea2=0x0;let _0x361f8a=0x0;mysqldb[_0x42b8('0xb')](_0x42b8('0x25'),[_0x2b4d7a,_0x10f53e,_0x3faf7d,_0x44708c,_0x40c966,_0x45b1bd,_0x283400,_0x4dfea2,_0x2b4d7a,_0x10f53e,_0x45b1bd],function(_0x226538,_0x52ec6a){if(_0x226538)throw _0x226538;var _0x541cb4=_0x52ec6a[_0x42b8('0x26')];mysqldb[_0x42b8('0xb')](_0x42b8('0x27'),function(_0x461be5,_0x13877f){if(_0x461be5)throw _0x461be5;_0x13877f[_0x42b8('0x28')](_0x4f44b4=>{mysqldb[_0x42b8('0xb')]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INSERT\x20INTO\x20registros(servidor_publico_id,fecha_modificacion,estructura_id,mes_id,estado)\x20VALUES\x20(?,?,?,?,?)\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',[_0x4f44b4[_0x42b8('0x29')],_0x283400,_0x4f44b4['estructura_id'],_0x541cb4,_0x4f44b4[_0x42b8('0x2a')]],function(_0xeb3384,_0x416c1e){if(_0xeb3384)throw _0xeb3384;let _0x3e5bd3=_0x416c1e[_0x42b8('0x26')];mysqldb[_0x42b8('0xb')](_0x42b8('0x2b'),[_0x4f44b4['id']],(_0x3d7019,_0x829121)=>{if(_0x3d7019)throw _0x3d7019;result=_0x829121[0x0];mysqldb[_0x42b8('0xb')](_0x42b8('0x2c'),[result[_0x42b8('0x2d')],result[_0x42b8('0x2e')],result[_0x42b8('0x2f')],result['es_tecnico_campo'],result[_0x42b8('0x30')],_0x3e5bd3,result[_0x42b8('0x22')],result[_0x42b8('0x31')],result[_0x42b8('0x32')],result[_0x42b8('0x33')],result['requisitos_para_acceder_cargo']]);});mysqldb[_0x42b8('0xb')]('select\x20*\x20from\x20inf_politica\x20where\x20registro_id=?',[_0x4f44b4['id']],(_0x20965e,_0x152078)=>{if(_0x20965e)throw _0x20965e;result=_0x152078[0x0];mysqldb[_0x42b8('0xb')]('insert\x20into\x20inf_politica(distrito_municipio,region,organizacion_respaldo,representante,registro_id,imagen)\x20values(?,?,?,?,?,?)',[result['distrito_municipio'],result[_0x42b8('0x34')],result['organizacion_respaldo'],result[_0x42b8('0x35')],_0x3e5bd3,result[_0x42b8('0x36')]]);});mysqldb['query'](_0x42b8('0x37'),[_0x4f44b4['id']],(_0x4d60e0,_0x1aeba1)=>{if(_0x4d60e0)throw _0x4d60e0;let _0x2da5e6='';_0x1aeba1[_0x42b8('0x28')](_0x403c20=>{_0x2da5e6+='('+_0x403c20[_0x42b8('0x38')]+','+_0x3e5bd3+','+_0x403c20[_0x42b8('0x39')]+',\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x403c20[_0x42b8('0x3a')]+',\x27'+moment(_0x403c20[_0x42b8('0x3b')])['format'](_0x42b8('0x3c'))+'\x27),';});_0x2da5e6=_0x2da5e6[_0x42b8('0x3d')](/.$/,';');mysqldb[_0x42b8('0xb')]('insert\x20into\x20documentos_presentados(documento_requerido_id,registro_id,tickeado,imagen_adjunta,fecha_modificacion)\x20values\x20'+_0x2da5e6);});mysqldb[_0x42b8('0xb')]('select\x20*\x20from\x20procesos_llamadas\x20where\x20registro_id=?',[_0x4f44b4['id']],(_0x5aae2a,_0x4cd1dd)=>{if(_0x5aae2a)throw _0x5aae2a;let _0xe97109='';_0x4cd1dd[_0x42b8('0x28')](_0x578ca9=>{_0xe97109+='(\x27'+_0x578ca9[_0x42b8('0x3e')]+_0x42b8('0x3f')+moment(_0x578ca9[_0x42b8('0x40')])[_0x42b8('0x41')]('YYYY-MM-DD')+'\x27,\x27'+_0x578ca9[_0x42b8('0x42')]+'\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x578ca9[_0x42b8('0x3a')]+','+_0x3e5bd3+',\x27'+moment(_0x578ca9[_0x42b8('0x3b')])['format']('YYYY-MM-DD\x20HH:mm:ss')+'\x27,\x27'+_0x578ca9[_0x42b8('0x43')]+_0x42b8('0x44');});_0xe97109=_0xe97109['replace'](/.$/,';');mysqldb[_0x42b8('0xb')]('insert\x20into\x20procesos_llamadas(numero_proceso,fecha_llamada_proceso,descripcion,imagen_adjunta,registro_id,fecha_modificacion,tipo)\x20values\x20'+_0xe97109);});});});_0x38ed1b['status'](0xc8)[_0x42b8('0xc')]({'success':!![],'result':!![]});});});});router[_0x42b8('0x1b')](_0x42b8('0x45'),middleware[_0x42b8('0x6')],(_0xe8e436,_0xb802ee,_0x5520d6)=>{const _0x3545f0=JSON[_0x42b8('0x7')](_0xe8e436[_0x42b8('0x8')][_0x42b8('0x9')]);const _0xb0f278=_0x3545f0['id'];mysqldb[_0x42b8('0xb')]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20registros\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20mes_id=\x20?',[_0xb0f278],function(_0x1a9969,_0x226f9f){if(_0x1a9969)throw _0x1a9969;_0x226f9f[_0x42b8('0x28')](_0x24b53d=>{mysqldb[_0x42b8('0xb')](_0x42b8('0x46'),[_0x24b53d['id']],(_0x55fac6,_0x50fb55)=>{if(_0x55fac6)throw _0x55fac6;mysqldb[_0x42b8('0xb')](_0x42b8('0x47'),[_0x24b53d['id']],(_0x17fe65,_0x158e65)=>{if(_0x17fe65)throw _0x17fe65;mysqldb[_0x42b8('0xb')](_0x42b8('0x48'),[_0x24b53d['id']],(_0x5b7d5f,_0x1e24e5)=>{if(_0x5b7d5f)throw _0x5b7d5f;mysqldb['query']('delete\x20from\x20procesos_llamadas\x20where\x20registro_id=?',[_0x24b53d['id']],(_0x35fca2,_0x4ff6d8)=>{if(_0x35fca2)throw _0x35fca2;mysqldb[_0x42b8('0xb')](_0x42b8('0x49'),[_0x24b53d['id']]);});});});});});_0xb802ee[_0x42b8('0x13')](0xc8)[_0x42b8('0xc')]({'success':!![],'result':!![]});});});router['post'](_0x42b8('0x4a'),middleware[_0x42b8('0x6')],(_0x4cd8eb,_0x4a951b,_0x268832)=>{const _0x54fef9=JSON[_0x42b8('0x7')](_0x4cd8eb[_0x42b8('0x8')][_0x42b8('0x9')]);const _0xbf7856=_0x54fef9['id'];mysqldb[_0x42b8('0xb')](_0x42b8('0x4b'),[_0xbf7856],(_0x3a0f94,_0x11e1ed)=>{if(_0x3a0f94)throw _0x3a0f94;_0x4a951b[_0x42b8('0x13')](0xc8)[_0x42b8('0xc')]({'success':_0x11e1ed[_0x42b8('0x1a')]?!![]:![],'result':_0x11e1ed[_0x42b8('0x1a')]});});});router[_0x42b8('0x1b')](_0x42b8('0x4c'),middleware['ensureAuthenticated'],(_0x426ae8,_0x19ade1,_0x32e7dc)=>{const _0x4b083c=JSON['parse'](_0x426ae8[_0x42b8('0x8')][_0x42b8('0x9')]);const _0xd6a2dd=_0x4b083c['id'];const _0x467d57=_0x4b083c[_0x42b8('0x1d')];console[_0x42b8('0x4d')](_0x4b083c);mysqldb[_0x42b8('0xb')](_0x42b8('0x4e'),[_0x467d57,_0xd6a2dd],(_0x4ccb11,_0x3d77b6)=>{if(_0x4ccb11)throw _0x4ccb11;_0x19ade1['status'](0xc8)[_0x42b8('0xc')]({'success':_0x3d77b6[_0x42b8('0x1a')]?!![]:![]});});});module[_0x42b8('0x4f')]=router;