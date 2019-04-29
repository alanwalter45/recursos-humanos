var _0x1435=['ensureAuthenticated','parse','body','json','gestion_id','query','\x0a\x20\x20select\x20es.*,\x0a\x20\x20un.nombre\x20as\x20unidad,\x0a\x20\x20ar.nombre\x20as\x20area,\x0a\x20\x20ca.nombre\x20as\x20cargo,\x0a\x20\x20ns.haber_basico,\x0a\x20\x20ns.nivel\x0a\x20\x20from\x20estructuras\x20es\x20INNER\x20JOIN\x20unidades\x20un\x20ON\x20es.unidad_id=un.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20areas\x20ar\x20ON\x20un.area_id=ar.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20escalas_salariales\x20esa\x20ON\x20es.escala_salarial_id=esa.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20cargos\x20ca\x20ON\x20esa.cargo_id=ca.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20niveles_salariales\x20ns\x20ON\x20esa.nivel_salarial_id=ns.id\x0a\x20\x20where\x20es.gestion_id\x20=?\x20AND\x20es.status<>0\x0a\x20\x20order\x20by\x20cast(es.numero\x20as\x20number)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','status','send','length','get','/estructuras/get-all-actual','/estructuras/get','\x0a\x20\x20select\x20es.*,\x0a\x20\x20un.nombre\x20as\x20unidad,\x0a\x20\x20ar.nombre\x20as\x20area,\x0a\x20\x20ca.nombre\x20as\x20cargo,\x0a\x20\x20ns.haber_basico,\x0a\x20\x20ns.nivel,\x0a\x20\x20spu.nombres,\x0a\x20\x20spu.apellido_paterno,\x0a\x20\x20spu.apellido_materno,\x0a\x20\x20spu.numero_documento,\x0a\x20\x20dep.nombre\x20as\x20departamento\x0a\x20\x20from\x20estructuras\x20es\x20INNER\x20JOIN\x20unidades\x20un\x20ON\x20es.unidad_id=un.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20areas\x20ar\x20ON\x20un.area_id=ar.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20escalas_salariales\x20esa\x20ON\x20es.escala_salarial_id=esa.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20cargos\x20ca\x20ON\x20esa.cargo_id=ca.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20niveles_salariales\x20ns\x20ON\x20esa.nivel_salarial_id=ns.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20registros\x20reg\x20ON\x20reg.estructura_id=es.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20servidores_publicos\x20spu\x20ON\x20spu.id=reg.servidor_publico_id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20departamentos\x20dep\x20ON\x20dep.id=spu.departamento_id\x0a\x20\x20where\x20es.gestion_id\x20=(SELECT\x20id\x20FROM\x20gestiones\x20WHERE\x20selected=1)\x20AND\x20es.status<>0\x20AND\x20es.id=?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','escala_salarial_id','numero','format','YYYY-MM-DD\x20HH:mm:ss','categoria_programatica_id','affectedRows','UPDATE\x20estructuras\x20set\x20status=?\x0a\x20\x20\x20\x20WHERE\x20id=?\x20AND\x20status=1','/estructuras/update/row','unidad_id','tipo_contratacion','UPDATE\x20estructuras\x0a\x20\x20\x20\x20set\x20gestion_id=?,\x0a\x20\x20\x20\x20unidad_id=?,\x0a\x20\x20\x20\x20escala_salarial_id=?,\x0a\x20\x20\x20\x20tipo_contratacion=?,\x0a\x20\x20\x20\x20numero=?,\x0a\x20\x20\x20\x20fecha_modificacion=?,\x0a\x20\x20\x20\x20categoria_programatica_id=?\x0a\x0a\x20\x20\x20\x20WHERE\x20id=?\x20AND\x20status=1','exports','Router','./../../middleware','./../../databaseMysql','post','/estructuras/get-all'];(function(_0x48ab1c,_0x2e5e42){var _0x5e2b56=function(_0x199d4f){while(--_0x199d4f){_0x48ab1c['push'](_0x48ab1c['shift']());}};_0x5e2b56(++_0x2e5e42);}(_0x1435,0xb5));var _0x3656=function(_0x1d7bd4,_0xab4ea3){_0x1d7bd4=_0x1d7bd4-0x0;var _0x500a01=_0x1435[_0x1d7bd4];return _0x500a01;};const express=require('express');const router=express[_0x3656('0x0')]();const middleware=require(_0x3656('0x1'));const mysqldb=require(_0x3656('0x2'));const moment=require('moment');router[_0x3656('0x3')](_0x3656('0x4'),middleware[_0x3656('0x5')],(_0x399598,_0x2f654c,_0x54c349)=>{const _0x3a1934=JSON[_0x3656('0x6')](_0x399598[_0x3656('0x7')][_0x3656('0x8')]);const _0x3a8f51=_0x3a1934[_0x3656('0x9')];mysqldb[_0x3656('0xa')](_0x3656('0xb'),[_0x3a8f51],(_0x585400,_0x21406e)=>{if(_0x585400)throw _0x585400;_0x2f654c[_0x3656('0xc')](0xc8)[_0x3656('0xd')]({'success':_0x21406e[_0x3656('0xe')]?!![]:![],'result':_0x21406e});});});router[_0x3656('0xf')](_0x3656('0x10'),middleware[_0x3656('0x5')],(_0x162d55,_0x3bf2a2,_0x396015)=>{mysqldb[_0x3656('0xa')]('\x0a\x20\x20select\x20es.*,\x0a\x20\x20un.nombre\x20as\x20unidad,\x0a\x20\x20ar.nombre\x20as\x20area,\x0a\x20\x20ca.nombre\x20as\x20cargo,\x0a\x20\x20ns.haber_basico,\x0a\x20\x20ns.nivel,\x0a\x20\x20es.categoria_programatica_id,\x0a\x20\x20cp.codigo\x20as\x20categoria_programatica\x0a\x20\x20from\x20estructuras\x20es\x20INNER\x20JOIN\x20unidades\x20un\x20ON\x20es.unidad_id=un.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20areas\x20ar\x20ON\x20un.area_id=ar.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20escalas_salariales\x20esa\x20ON\x20es.escala_salarial_id=esa.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20cargos\x20ca\x20ON\x20esa.cargo_id=ca.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20niveles_salariales\x20ns\x20ON\x20esa.nivel_salarial_id=ns.id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20LEFT\x20JOIN\x20categorias_programaticas\x20cp\x20ON\x20cp.id=es.categoria_programatica_id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20where\x20es.gestion_id\x20=(SELECT\x20id\x20FROM\x20gestiones\x20WHERE\x20selected=1)\x20AND\x20es.status<>0\x0a\x20\x20order\x20by\x20es.numero\x20asc\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',(_0x50a3f9,_0x3d424f)=>{if(_0x50a3f9)throw _0x50a3f9;_0x3bf2a2[_0x3656('0xc')](0xc8)[_0x3656('0xd')]({'success':_0x3d424f[_0x3656('0xe')]?!![]:![],'result':_0x3d424f});});});router[_0x3656('0x3')](_0x3656('0x11'),middleware[_0x3656('0x5')],(_0x3c151a,_0x57a2b9,_0x26b9a0)=>{const _0x54e717=JSON[_0x3656('0x6')](_0x3c151a[_0x3656('0x7')][_0x3656('0x8')]);const _0x5de1be=_0x54e717['estructura_id'];mysqldb['query'](_0x3656('0x12'),[_0x5de1be],(_0x42c5ed,_0x117baa)=>{if(_0x42c5ed)throw _0x42c5ed;_0x57a2b9[_0x3656('0xc')](0xc8)[_0x3656('0xd')]({'success':_0x117baa[_0x3656('0xe')]?!![]:![],'result':_0x117baa[0x0]});});});router[_0x3656('0x3')]('/estructuras/add/row',middleware['ensureAuthenticated'],(_0x5e667d,_0x16e580,_0x3b275a)=>{const _0x1ea5f9=JSON[_0x3656('0x6')](_0x5e667d[_0x3656('0x7')]['json']);const _0x5c4c70=_0x1ea5f9[_0x3656('0x9')];const _0x497ad1=_0x1ea5f9['unidad_id'];const _0x46f072=_0x1ea5f9[_0x3656('0x13')];const _0x5ae3b4=_0x1ea5f9['tipo_contratacion'];const _0x4aad76=_0x1ea5f9[_0x3656('0x14')];const _0x2cc4ef=moment(new Date())[_0x3656('0x15')](_0x3656('0x16'));const _0x2a1f4d=0x1;const _0xd614bf=_0x1ea5f9[_0x3656('0x17')];mysqldb[_0x3656('0xa')]('INSERT\x20INTO\x20estructuras(gestion_id,unidad_id,escala_salarial_id,tipo_contratacion,numero,fecha_modificacion,status,categoria_programatica_id)\x0a\x20\x20\x20\x20SELECT\x20?,?,?,?,?,?,?,?\x0a\x20\x20\x20\x20WHERE\x20NOT\x20EXISTS(SELECT\x201\x20FROM\x20estructuras\x0a\x20\x20\x20\x20\x20\x20WHERE\x20gestion_id=?\x20AND\x20unidad_id=?\x20AND\x20escala_salarial_id=?\x20AND\x20tipo_contratacion=?\x20AND\x20numero=?\x20AND\x20status=?\x20AND\x20numero=?)',[_0x5c4c70,_0x497ad1,_0x46f072,_0x5ae3b4,_0x4aad76,_0x2cc4ef,_0x2a1f4d,_0xd614bf,_0x5c4c70,_0x497ad1,_0x46f072,_0x5ae3b4,_0x4aad76,_0x2a1f4d,_0x4aad76],function(_0x35bd19,_0x557dce){if(_0x35bd19)throw _0x35bd19;_0x16e580['status'](0xc8)[_0x3656('0xd')]({'success':_0x557dce[_0x3656('0x18')]?!![]:![],'result':_0x557dce['affectedRows']});});});router[_0x3656('0x3')]('/estructuras/remove/row',middleware[_0x3656('0x5')],(_0x8abf30,_0x582d16,_0x5681d0)=>{const _0x410db2=JSON[_0x3656('0x6')](_0x8abf30['body'][_0x3656('0x8')]);const _0x2fbcce=_0x410db2['id'];const _0x204b27=0x0;mysqldb[_0x3656('0xa')](_0x3656('0x19'),[_0x204b27,_0x2fbcce],function(_0x3bcc5e,_0x490bee){if(_0x3bcc5e)throw _0x3bcc5e;_0x582d16['status'](0xc8)[_0x3656('0xd')]({'success':_0x490bee[_0x3656('0x18')]?!![]:![],'result':_0x490bee[_0x3656('0x18')]});});});router[_0x3656('0x3')](_0x3656('0x1a'),middleware[_0x3656('0x5')],(_0xd8dc6c,_0x41be5a,_0x1827be)=>{const _0x5411c5=JSON[_0x3656('0x6')](_0xd8dc6c[_0x3656('0x7')][_0x3656('0x8')]);const _0x557f83=_0x5411c5['id'];const _0x5be779=_0x5411c5[_0x3656('0x9')];const _0x3148c7=_0x5411c5[_0x3656('0x1b')];const _0x2c37fa=_0x5411c5[_0x3656('0x13')];const _0x321a49=_0x5411c5[_0x3656('0x1c')];const _0xf578f9=_0x5411c5[_0x3656('0x14')];const _0x2a95bc=_0x5411c5[_0x3656('0x17')];const _0x2adde4=moment(new Date())[_0x3656('0x15')](_0x3656('0x16'));mysqldb[_0x3656('0xa')](_0x3656('0x1d'),[_0x5be779,_0x3148c7,_0x2c37fa,_0x321a49,_0xf578f9,_0x2adde4,_0x2a95bc,_0x557f83],function(_0x3e4c9a,_0x24cd9b){if(_0x3e4c9a)throw _0x3e4c9a;_0x41be5a[_0x3656('0xc')](0xc8)['send']({'success':_0x24cd9b[_0x3656('0x18')]?!![]:![],'result':_0x24cd9b[_0x3656('0x18')]});});});module[_0x3656('0x1e')]=router;