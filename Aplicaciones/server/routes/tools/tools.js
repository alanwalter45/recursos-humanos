var _0x2b9b=['totalmem','freemem','cpus','model','hostname','express','Router','mdb','exceljs','xlsx','./tools-global','moment','post','/tools/import-xlsx','ensureAuthenticated','getPathSO','/biometrico/resumen-calculos','format','.xlsx','readFile','getTime','YYYY-MM-DD','query','DELETE\x20from\x20temp_resumen_calculos\x20where\x20fecha_importacion=?','(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27','\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','replace',',\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','INSERT\x20INTO\x20temp_resumen_calculos(codigo_biometrico,carnet_identidad,nombre_completo,retraso,ausente,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vacacion,cumpleanhos,matrimonio,nacimiento,oficial,taller,viaje,duelo,baja_medica,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20hora_particular,licencia_sin_goce_haber,comision,fecha_importacion\x20)\x20VALUES\x20','status','stringify','affectedRows','/tools/import-mdb','/biometrico/backup','DD-MM-YYYY','Sheets','(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',',\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27','\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27','\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27','\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27','\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200,\x20\x27','\x27),','log','INSERT\x20INTO\x20temp_userinfo(codigo_biometrico,carnet_identidad,nombre_completo,genero,cargo,telefono,fecha_nacimiento,fecha_inicio,direccion,ciudad,estado,numero_contrato,tipo_cargo,unidad_trabajo,tickeado,fecha_importacion)\x20VALUES\x20','getCell','alignment','middle','center','border','thin','font','Times\x20New\x20Roman','fill','pattern','/tools/export-xlsx','parse','body','json','option','Workbook','creator','alanwalter45\x20recursos-humanos','lastModifiedBy','alanwalter45','created','modified','lastPrinted','addWorksheet','margins','SUELDO','codigo\x20biometrico','codigo_biometrico','carnet\x20identidad','nombre\x20completo','tipo\x20de\x20cargo','tipo_cargo','numero\x20de\x20cargo','cargo','unidad\x20de\x20trabajo','unidad_trabajo','atrazos\x20en\x20minutos','atrazos_minutos','faltas','faltas\x20segun\x20normativa','faltas_normativa','L.S.G.H','licencia_sin_goce_haber','tiempo\x20en\x20dias','tiempo_dias','observaciones','\x0a\x20\x20\x20\x20SELECT\x20sp.codigo_biometrico,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sp.carnet_identidad,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sp.nombre_completo,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sp.tipo_cargo\x20as\x20vinculacion_laboral,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sp.numero_contrato,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sp.cargo,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sp.unidad_trabajo,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20resumen.retraso,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20resumen.ausente,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(resumen.licencia_sin_goce_haber/8)\x20as\x20licencia_sin_goce_haber\x0a\x20\x20\x20\x20FROM\x20temp_userinfo\x20sp\x20INNER\x20JOIN\x20temp_resumen_calculos\x20resumen\x20ON\x20sp.codigo_biometrico=resumen.codigo_biometrico\x0a\x20\x20\x20\x20WHERE\x20sp.tipo_cargo\x20like\x20\x27%','split','%\x27\x0a\x20\x20\x20\x20AND\x20sp.fecha_importacion\x20like\x20\x27','%\x27\x0a\x20\x20\x20\x20ORDER\x20BY\x20sp.nombre_completo\x0a\x20\x20\x20\x20','retraso','ausente','carnet_identidad','vinculacion_laboral','numero_contrato','FF00FF00','FFFF0000','pageSetup','printArea','A1:N','length','writeFile','/biometrico/','then','send','columns','nombre_completo','fecha\x20inicio','fecha_inicio','matrimonio','defuncion','nacimiento','vacacion','baja\x20medica','baja_medica','comision','%\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20resumen.fecha_importacion\x20like\x20\x27','%\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ORDER\x20BY\x20sp.nombre_completo\x0a\x20\x20\x20\x20','forEach','addRow','duelo','toFixed','viaje','FFFFFF00','FFFF3300','FFFF00F7','FFFF9400','FF00CC00','FF00FA00','get','/tools/cargar-cod-bio-xlsx','/biometrico/resumen-calculos25-09-2018.xlsx','parallelize','begin\x20transaction','UPDATE\x20servidores_publicos\x20SET\x20codigo_biometrico=?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20numero_documento=?','commit','/tools/status-system','arch'];(function(_0x3b9519,_0x448b5e){var _0x2c7a1b=function(_0x4bfb17){while(--_0x4bfb17){_0x3b9519['push'](_0x3b9519['shift']());}};_0x2c7a1b(++_0x448b5e);}(_0x2b9b,0x1b5));var _0x5dac=function(_0xe860ae,_0x1ba192){_0xe860ae=_0xe860ae-0x0;var _0x1f0123=_0x2b9b[_0xe860ae];return _0x1f0123;};const express=require(_0x5dac('0x0'));const router=express[_0x5dac('0x1')]();const mdb=require(_0x5dac('0x2'));const os=require('os');const Excel=require(_0x5dac('0x3'));const fs=require('fs');const XLSX=require(_0x5dac('0x4'));const mysqldb=require('./../../databaseMysql');const tools_global=require(_0x5dac('0x5'));const moment=require(_0x5dac('0x6'));const middleware=require('./../../middleware');router[_0x5dac('0x7')](_0x5dac('0x8'),middleware[_0x5dac('0x9')],(_0x287c43,_0x581760,_0x1c9442)=>{const _0x58e736=tools_global[_0x5dac('0xa')]();const _0x2072c6=_0x58e736['replace']('\x20','\x20')+_0x5dac('0xb')+moment(new Date()['getTime']())[_0x5dac('0xc')]('DD-MM-YYYY')+_0x5dac('0xd');const _0x55e44c=XLSX[_0x5dac('0xe')](_0x2072c6);const _0x4ee0fd=_0x55e44c['SheetNames'][0x0];const _0x3c8ee9=_0x55e44c['Sheets'][_0x4ee0fd];let _0x594d55=0x0;row=0x2;const _0x347536=moment(new Date()[_0x5dac('0xf')]())[_0x5dac('0xc')](_0x5dac('0x10'));mysqldb[_0x5dac('0x11')](_0x5dac('0x12'),[_0x347536],function(_0x4c539c){if(_0x4c539c)throw _0x4c539c;let _0x17c1b7='';while(_0x3c8ee9['A'+row]!==undefined){_0x17c1b7+=_0x5dac('0x13')+(_0x3c8ee9['A'+row]?_0x3c8ee9['A'+row]['v']:0x0)+',\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27'+(_0x3c8ee9['B'+row]?_0x3c8ee9['B'+row]['v']:'')+_0x5dac('0x14')+(_0x3c8ee9['C'+row]?_0x3c8ee9['C'+row]['v']:'')+_0x5dac('0x15')+(_0x3c8ee9['F'+row]?_0x3c8ee9['F'+row]['v'][_0x5dac('0x16')](',','.'):'')+',\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+(_0x3c8ee9['H'+row]?_0x3c8ee9['H'+row]['v']['replace'](',','.'):'')+_0x5dac('0x17')+(_0x3c8ee9['T'+row]?_0x3c8ee9['T'+row]['v'][_0x5dac('0x16')](',','.'):'')+_0x5dac('0x17')+(_0x3c8ee9['U'+row]?_0x3c8ee9['U'+row]['v']['replace'](',','.'):'')+_0x5dac('0x17')+(_0x3c8ee9['V'+row]?_0x3c8ee9['V'+row]['v'][_0x5dac('0x16')](',','.'):'')+_0x5dac('0x17')+(_0x3c8ee9['AF'+row]?_0x3c8ee9['AF'+row]['v'][_0x5dac('0x16')](',','.'):'')+_0x5dac('0x17')+(_0x3c8ee9['W'+row]?_0x3c8ee9['W'+row]['v'][_0x5dac('0x16')](',','.'):'')+_0x5dac('0x17')+(_0x3c8ee9['X'+row]?_0x3c8ee9['X'+row]['v'][_0x5dac('0x16')](',','.'):'')+',\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+(_0x3c8ee9['Y'+row]?_0x3c8ee9['Y'+row]['v'][_0x5dac('0x16')](',','.'):'')+_0x5dac('0x17')+(_0x3c8ee9['Z'+row]?_0x3c8ee9['Z'+row]['v'][_0x5dac('0x16')](',','.'):'')+_0x5dac('0x17')+(_0x3c8ee9['AA'+row]?_0x3c8ee9['AA'+row]['v'][_0x5dac('0x16')](',','.'):'')+',\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+(_0x3c8ee9['AB'+row]?_0x3c8ee9['AB'+row]['v'][_0x5dac('0x16')](',','.'):'')+',\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+(_0x3c8ee9['AD'+row]?_0x3c8ee9['AD'+row]['v'][_0x5dac('0x16')](',','.'):'')+_0x5dac('0x17')+(_0x3c8ee9['AN'+row]?_0x3c8ee9['AN'+row]['v'][_0x5dac('0x16')](',','.'):'')+',\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27'+_0x347536+'\x27),';row++;_0x594d55++;if(_0x594d55>=0x4b0){break;}};_0x17c1b7=_0x17c1b7[_0x5dac('0x16')](/.$/,';');mysqldb[_0x5dac('0x11')](_0x5dac('0x18')+_0x17c1b7,(_0x1533f2,_0x406b3d)=>{if(_0x1533f2)throw _0x1533f2;_0x581760[_0x5dac('0x19')](0xc8)['send'](JSON[_0x5dac('0x1a')]({'result':_0x406b3d[_0x5dac('0x1b')]?!![]:![],'rowLength':_0x594d55}));});});});router[_0x5dac('0x7')](_0x5dac('0x1c'),middleware[_0x5dac('0x9')],(_0x3c6c54,_0xb13995,_0x579920)=>{const _0x212392=tools_global['getPathSO']();const _0x49465e=_0x212392[_0x5dac('0x16')]('\x20','\x20')+_0x5dac('0x1d')+moment(new Date()[_0x5dac('0xf')]())['format'](_0x5dac('0x1e'))+_0x5dac('0xd');const _0x4f8ab2=XLSX['readFile'](_0x49465e);const _0x2d1db7=_0x4f8ab2['SheetNames'][0x0];const _0x7f2deb=_0x4f8ab2[_0x5dac('0x1f')][_0x2d1db7];let _0x177906=0x0;row=0x2;const _0x3d9cc6=moment(new Date()[_0x5dac('0xf')]())[_0x5dac('0xc')](_0x5dac('0x10'));mysqldb['query']('DELETE\x20from\x20temp_userinfo\x20where\x20fecha_importacion=?',[_0x3d9cc6],function(_0xc2af8a){if(_0xc2af8a)throw _0xc2af8a;let _0x1b7d86='';while(_0x7f2deb['A'+row]!==undefined){_0x1b7d86+=_0x5dac('0x20')+(_0x7f2deb['B'+row]?_0x7f2deb['B'+row]['v']:0x0)+_0x5dac('0x21')+(_0x7f2deb['C'+row]?_0x7f2deb['C'+row]['v']:'')+_0x5dac('0x22')+(_0x7f2deb['D'+row]?_0x7f2deb['D'+row]['v']:'')+_0x5dac('0x23')+(_0x7f2deb['E'+row]?_0x7f2deb['E'+row]['v']:'')+'\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27'+(_0x7f2deb['F'+row]?_0x7f2deb['F'+row]['v']:'')+_0x5dac('0x22')+(_0x7f2deb['G'+row]?_0x7f2deb['G'+row]['v']:'')+_0x5dac('0x24')+(_0x7f2deb['H'+row]?_0x7f2deb['H'+row]['v']:'')+_0x5dac('0x22')+(_0x7f2deb['I'+row]?_0x7f2deb['I'+row]['v']:'')+_0x5dac('0x22')+(_0x7f2deb['J'+row]?_0x7f2deb['J'+row]['v']:'')+_0x5dac('0x22')+(_0x7f2deb['K'+row]?_0x7f2deb['K'+row]['v']:'')+_0x5dac('0x22')+(_0x7f2deb['L'+row]?_0x7f2deb['L'+row]['v']:'')+_0x5dac('0x22')+(_0x7f2deb['A'+row]?_0x7f2deb['A'+row]['v']:'')+_0x5dac('0x24')+(_0x7f2deb['N'+row]?_0x7f2deb['N'+row]['v']:'')+'\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27'+(_0x7f2deb['Y'+row]?_0x7f2deb['Y'+row]['v']:'')+_0x5dac('0x25')+_0x3d9cc6+_0x5dac('0x26');row++;_0x177906++;if(_0x177906>=0x4b0){break;}};_0x1b7d86=_0x1b7d86[_0x5dac('0x16')](/.$/,';');console[_0x5dac('0x27')](_0x1b7d86);mysqldb[_0x5dac('0x11')](_0x5dac('0x28')+_0x1b7d86,(_0x327678,_0x7dd25e)=>{if(_0x327678)throw _0x327678;_0xb13995[_0x5dac('0x19')](0xc8)['send'](JSON[_0x5dac('0x1a')]({'result':_0x7dd25e['affectedRows']?!![]:![],'rowLength':_0x177906}));});});});function alineando_celda(_0x203789,_0x5a0b2d,_0xaaf53d=undefined){_0x203789[_0x5dac('0x29')](_0x5a0b2d)[_0x5dac('0x2a')]={'wrapText':!![],'vertical':_0x5dac('0x2b'),'horizontal':_0x5a0b2d['indexOf']('C')!==-0x1?'left':_0x5dac('0x2c')};_0x203789[_0x5dac('0x29')](_0x5a0b2d)[_0x5dac('0x2d')]={'top':{'style':_0x5dac('0x2e')},'left':{'style':_0x5dac('0x2e')},'bottom':{'style':_0x5dac('0x2e')},'right':{'style':_0x5dac('0x2e')}};_0x203789[_0x5dac('0x29')](_0x5a0b2d)[_0x5dac('0x2f')]={'name':_0x5dac('0x30'),'family':0x4,'size':0x9,'underline':![],'bold':![]};}function aplicando_estilo_celda(_0x413675,_0x2e5aea,_0x1a98d9){alineando_celda(_0x413675,_0x2e5aea,_0x1a98d9);_0x413675['getCell'](_0x2e5aea)[_0x5dac('0x31')]={'type':_0x5dac('0x32'),'pattern':'mediumGray','bgColor':{'argb':_0x1a98d9}};}router[_0x5dac('0x7')](_0x5dac('0x33'),middleware[_0x5dac('0x9')],(_0x124da1,_0x453e8b,_0x1ec26d)=>{let _0x38a7c6=JSON[_0x5dac('0x34')](_0x124da1[_0x5dac('0x35')][_0x5dac('0x36')]);let _0x5e5118=_0x38a7c6[_0x5dac('0x37')];let _0x52d5c4=tools_global['getPathSO']();var _0x142a80=new Excel[(_0x5dac('0x38'))]();_0x142a80[_0x5dac('0x39')]=_0x5dac('0x3a');_0x142a80[_0x5dac('0x3b')]=_0x5dac('0x3c');_0x142a80[_0x5dac('0x3d')]=new Date();_0x142a80[_0x5dac('0x3e')]=new Date();_0x142a80[_0x5dac('0x3f')]=new Date();let _0x2a22dc=_0x142a80[_0x5dac('0x40')](_0x5e5118,{'pageSetup':{'paperSize':undefined,'orientation':'landscape'}});_0x2a22dc['pageSetup'][_0x5dac('0x41')]={'left':0.5,'right':0.5,'top':0.5,'bottom':0.5,'header':0.5,'footer':0.5};if(_0x5e5118['split']('\x20')[0x0]===_0x5dac('0x42')){_0x2a22dc['columns']=[{'header':_0x5dac('0x43'),'key':_0x5dac('0x44'),'width':0xa},{'header':_0x5dac('0x45'),'key':'carnet_identidad','width':0xf},{'header':_0x5dac('0x46'),'key':'nombre_completo','width':0x3c},{'header':_0x5dac('0x47'),'key':_0x5dac('0x48'),'width':0xf},{'header':_0x5dac('0x49'),'key':'numero_cargo','width':0xa},{'header':_0x5dac('0x4a'),'key':_0x5dac('0x4a'),'width':0x23},{'header':_0x5dac('0x4b'),'key':_0x5dac('0x4c'),'width':0x32},{'header':'minutos','key':'minutos','width':0x4},{'header':_0x5dac('0x4d'),'key':_0x5dac('0x4e'),'width':0x4},{'header':_0x5dac('0x4f'),'key':_0x5dac('0x4f'),'width':0x4},{'header':_0x5dac('0x50'),'key':_0x5dac('0x51'),'width':0x4},{'header':_0x5dac('0x52'),'key':_0x5dac('0x53'),'width':0x4},{'header':_0x5dac('0x54'),'key':_0x5dac('0x55'),'width':0x4},{'header':_0x5dac('0x56'),'key':_0x5dac('0x56'),'width':0x4}];mysqldb['query'](_0x5dac('0x57')+_0x5e5118[_0x5dac('0x58')]('\x20')[0x1]+'%\x27\x20AND\x20resumen.fecha_importacion\x20like\x20\x27'+moment(new Date())[_0x5dac('0xc')](_0x5dac('0x10'))+_0x5dac('0x59')+moment(new Date())[_0x5dac('0xc')](_0x5dac('0x10'))+_0x5dac('0x5a'),(_0x11df8d,_0x15d749)=>{if(_0x11df8d)throw _0x11df8d;_0x15d749['forEach']((_0x58792f,_0x326efe)=>{let _0x3d204c=_0x58792f[_0x5dac('0x5b')]>=0x2e&&_0x58792f[_0x5dac('0x5b')]<=0x3c?0.5:_0x58792f[_0x5dac('0x5b')]>=0x3d&&_0x58792f[_0x5dac('0x5b')]<=0x5a?0x1:_0x58792f['retraso']>=0x5b&&_0x58792f[_0x5dac('0x5b')]<=0x78?0x2:_0x58792f[_0x5dac('0x5b')]>=0x79&&_0x58792f[_0x5dac('0x5b')]<=0x96?0x3:_0x58792f['retraso']>=0x97?0x4:_0x58792f[_0x5dac('0x5b')]==0x0?0x0:_0x58792f['retraso'];let _0x11206e=_0x58792f[_0x5dac('0x5c')]*0x2;_0x2a22dc['addRow']([_0x58792f[_0x5dac('0x44')],_0x58792f[_0x5dac('0x5d')],_0x58792f['nombre_completo'],_0x58792f[_0x5dac('0x5e')],_0x58792f[_0x5dac('0x5f')],_0x58792f['cargo'],_0x58792f[_0x5dac('0x4c')],_0x58792f['retraso']==0x0?'':_0x58792f[_0x5dac('0x5b')],_0x3d204c==0x0?'':_0x58792f[_0x5dac('0x5b')]>0x2d?_0x3d204c+'d':'',_0x58792f[_0x5dac('0x5c')]==0x0?'':_0x58792f['ausente'],_0x58792f['ausente']==0x0?'':_0x11206e==0x0?'':_0x11206e+'d',_0x58792f[_0x5dac('0x53')]==0x0?'':_0x58792f[_0x5dac('0x53')],_0x3d204c+_0x11206e+_0x58792f[_0x5dac('0x53')]===0x0?'':_0x58792f[_0x5dac('0x5b')]>0x2d?_0x3d204c+_0x11206e+_0x58792f[_0x5dac('0x53')]+'d':_0x11206e+_0x58792f[_0x5dac('0x53')]===0x0?'':_0x11206e+_0x58792f[_0x5dac('0x53')]+'d','-']);alineando_celda(_0x2a22dc,'A'+(_0x326efe+0x2));alineando_celda(_0x2a22dc,'B'+(_0x326efe+0x2));alineando_celda(_0x2a22dc,'C'+(_0x326efe+0x2));alineando_celda(_0x2a22dc,'D'+(_0x326efe+0x2));alineando_celda(_0x2a22dc,'E'+(_0x326efe+0x2));alineando_celda(_0x2a22dc,'F'+(_0x326efe+0x2));alineando_celda(_0x2a22dc,'G'+(_0x326efe+0x2));alineando_celda(_0x2a22dc,'H'+(_0x326efe+0x2));alineando_celda(_0x2a22dc,'I'+(_0x326efe+0x2));alineando_celda(_0x2a22dc,'J'+(_0x326efe+0x2));alineando_celda(_0x2a22dc,'K'+(_0x326efe+0x2));alineando_celda(_0x2a22dc,'L'+(_0x326efe+0x2));alineando_celda(_0x2a22dc,'M'+(_0x326efe+0x2));alineando_celda(_0x2a22dc,'N'+(_0x326efe+0x2));if(_0x58792f['retraso']>0x2d){color='FFFFFF00';aplicando_estilo_celda(_0x2a22dc,'H'+(_0x326efe+0x2),color);aplicando_estilo_celda(_0x2a22dc,'I'+(_0x326efe+0x2),color);}if(_0x58792f[_0x5dac('0x53')]>0x0){color=_0x5dac('0x60');aplicando_estilo_celda(_0x2a22dc,'L'+(_0x326efe+0x2),color);}if(_0x58792f[_0x5dac('0x5c')]>0x0){color=_0x5dac('0x61');aplicando_estilo_celda(_0x2a22dc,'J'+(_0x326efe+0x2),color);aplicando_estilo_celda(_0x2a22dc,'K'+(_0x326efe+0x2),color);}_0x2a22dc['lastRow']['height']=0x14;});_0x2a22dc[_0x5dac('0x62')][_0x5dac('0x63')]=_0x5dac('0x64')+_0x15d749[_0x5dac('0x65')];_0x142a80['xlsx'][_0x5dac('0x66')](_0x52d5c4+_0x5dac('0x67')+_0x5e5118+'.xlsx')[_0x5dac('0x68')](()=>{_0x453e8b[_0x5dac('0x19')](0xc8)[_0x5dac('0x69')]({'result':!![],'dataArr':JSON[_0x5dac('0x1a')](_0x15d749)});});});}else if(_0x5e5118[_0x5dac('0x58')]('\x20')[0x0]==='BONO'){_0x2a22dc[_0x5dac('0x6a')]=[{'header':_0x5dac('0x43'),'key':_0x5dac('0x44'),'width':0x5},{'header':_0x5dac('0x45'),'key':'carnet_identidad','width':0x7},{'header':'nombre\x20completo','key':_0x5dac('0x6b'),'width':0x3c},{'header':_0x5dac('0x6c'),'key':_0x5dac('0x6d'),'width':0xa},{'header':_0x5dac('0x4a'),'key':_0x5dac('0x4a'),'width':0x23},{'header':_0x5dac('0x4c'),'key':_0x5dac('0x4c'),'width':0x1e},{'header':_0x5dac('0x47'),'key':_0x5dac('0x48'),'width':0xa},{'header':_0x5dac('0x6e'),'key':_0x5dac('0x6e'),'width':0x4},{'header':_0x5dac('0x6f'),'key':'defuncion','width':0x4},{'header':_0x5dac('0x70'),'key':_0x5dac('0x70'),'width':0x4},{'header':_0x5dac('0x52'),'key':_0x5dac('0x53'),'width':0x4},{'header':_0x5dac('0x71'),'key':_0x5dac('0x71'),'width':0x4},{'header':_0x5dac('0x72'),'key':_0x5dac('0x73'),'width':0x4},{'header':'viajes','key':'viajes','width':0x4},{'header':_0x5dac('0x4f'),'key':'faltas','width':0x4},{'header':'comision','key':_0x5dac('0x74'),'width':0x4},{'header':_0x5dac('0x54'),'key':_0x5dac('0x55'),'width':0x4},{'header':_0x5dac('0x56'),'key':'observaciones','width':0x4}];mysqldb[_0x5dac('0x11')]('\x0a\x20\x20\x20\x20SELECT\x20sp.codigo_biometrico,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sp.carnet_identidad,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sp.nombre_completo,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sp.fecha_inicio,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sp.cargo,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sp.tipo_cargo,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sp.unidad_trabajo,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20resumen.matrimonio,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20resumen.duelo,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20resumen.nacimiento,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(resumen.licencia_sin_goce_haber/8)\x20as\x20licencia_sin_goce_haber,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(resumen.vacacion/8)\x20as\x20vacacion,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(resumen.baja_medica/8)\x20as\x20baja_medica,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(resumen.viaje/8)\x20as\x20viaje,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20resumen.ausente,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(resumen.comision/8)\x20as\x20comision\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20temp_userinfo\x20sp\x20INNER\x20JOIN\x20temp_resumen_calculos\x20resumen\x20ON\x20sp.codigo_biometrico=resumen.codigo_biometrico\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20sp.tipo_cargo\x20like\x20\x27%'+_0x5e5118[_0x5dac('0x58')]('\x20')[0x1]+_0x5dac('0x75')+moment(new Date())['format'](_0x5dac('0x10'))+'%\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20sp.fecha_importacion\x20like\x20\x27'+moment(new Date())['format'](_0x5dac('0x10'))+_0x5dac('0x76'),(_0x49c6bc,_0x1e5c79)=>{if(_0x49c6bc)throw _0x49c6bc;JSON['parse'](JSON[_0x5dac('0x1a')](_0x1e5c79))[_0x5dac('0x77')]((_0x21eca6,_0x2cf6ab)=>{_0x2a22dc[_0x5dac('0x78')]([_0x21eca6[_0x5dac('0x44')],_0x21eca6[_0x5dac('0x5d')],_0x21eca6[_0x5dac('0x6b')],moment(new Date((_0x21eca6[_0x5dac('0x6d')]-(0x63df+0x1))*0x15180*0x3e8))['format'](_0x5dac('0x1e')),_0x21eca6[_0x5dac('0x4a')],_0x21eca6[_0x5dac('0x4c')],_0x21eca6[_0x5dac('0x48')],_0x21eca6[_0x5dac('0x6e')]==0x0?'':_0x21eca6[_0x5dac('0x6e')]['toFixed'](0x1),_0x21eca6[_0x5dac('0x79')]==0x0?'':_0x21eca6[_0x5dac('0x79')][_0x5dac('0x7a')](0x1),_0x21eca6[_0x5dac('0x70')]==0x0?'':_0x21eca6['nacimiento']['toFixed'](0x1),_0x21eca6[_0x5dac('0x53')]==0x0?'':_0x21eca6[_0x5dac('0x53')][_0x5dac('0x7a')](0x1),_0x21eca6[_0x5dac('0x71')]==0x0?'':_0x21eca6['vacacion'][_0x5dac('0x7a')](0x1),_0x21eca6['baja_medica']==0x0?'':_0x21eca6[_0x5dac('0x73')][_0x5dac('0x7a')](0x1),_0x21eca6[_0x5dac('0x7b')]==0x0?'':_0x21eca6[_0x5dac('0x7b')]['toFixed'](0x1),_0x21eca6[_0x5dac('0x5c')]==0x0?'':_0x21eca6['ausente'][_0x5dac('0x7a')](0x1),_0x21eca6[_0x5dac('0x74')]==0x0?'':_0x21eca6[_0x5dac('0x74')][_0x5dac('0x7a')](0x1),_0x21eca6[_0x5dac('0x6e')]+_0x21eca6['duelo']+_0x21eca6[_0x5dac('0x70')]+_0x21eca6[_0x5dac('0x53')]+_0x21eca6['vacacion']+_0x21eca6[_0x5dac('0x73')]+_0x21eca6[_0x5dac('0x7b')]+_0x21eca6[_0x5dac('0x5c')]+_0x21eca6['comision']===0x0?'':(_0x21eca6[_0x5dac('0x6e')]+_0x21eca6['duelo']+_0x21eca6['nacimiento']+_0x21eca6[_0x5dac('0x53')]+_0x21eca6[_0x5dac('0x71')]+_0x21eca6['baja_medica']+_0x21eca6['viaje']+_0x21eca6[_0x5dac('0x5c')]+_0x21eca6[_0x5dac('0x74')])['toFixed'](0x1)+'d','-']);alineando_celda(_0x2a22dc,'B'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'C'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'A'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'D'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'E'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'F'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'G'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'H'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'I'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'J'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'K'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'L'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'M'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'N'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'O'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'P'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'Q'+(_0x2cf6ab+0x2));alineando_celda(_0x2a22dc,'R'+(_0x2cf6ab+0x2));if(_0x21eca6[_0x5dac('0x6e')]>0x0){color=_0x5dac('0x7c');aplicando_estilo_celda(_0x2a22dc,'H'+(_0x2cf6ab+0x2),color);}if(_0x21eca6['duelo']>0x0){color=_0x5dac('0x7d');aplicando_estilo_celda(_0x2a22dc,'I'+(_0x2cf6ab+0x2),color);}if(_0x21eca6['nacimiento']>0x0){color=_0x5dac('0x61');aplicando_estilo_celda(_0x2a22dc,'J'+(_0x2cf6ab+0x2),color);}if(_0x21eca6[_0x5dac('0x53')]>0x0){color='FFFFFF00';aplicando_estilo_celda(_0x2a22dc,'K'+(_0x2cf6ab+0x2),color);}if(_0x21eca6[_0x5dac('0x71')]>0x0){color='FF23FF23';aplicando_estilo_celda(_0x2a22dc,'L'+(_0x2cf6ab+0x2),color);}if(_0x21eca6[_0x5dac('0x73')]>0x0){color=_0x5dac('0x7e');aplicando_estilo_celda(_0x2a22dc,'M'+(_0x2cf6ab+0x2),color);}if(_0x21eca6[_0x5dac('0x7b')]>0x0){color=_0x5dac('0x7f');aplicando_estilo_celda(_0x2a22dc,'N'+(_0x2cf6ab+0x2),color);}if(_0x21eca6[_0x5dac('0x5c')]>0x0){color=_0x5dac('0x80');aplicando_estilo_celda(_0x2a22dc,'O'+(_0x2cf6ab+0x2),color);}if(_0x21eca6[_0x5dac('0x74')]>0x0){color=_0x5dac('0x81');aplicando_estilo_celda(_0x2a22dc,'P'+(_0x2cf6ab+0x2),color);}_0x2a22dc['lastRow']['height']=0x14;});_0x2a22dc['pageSetup'][_0x5dac('0x63')]='A1:N'+_0x1e5c79['length'];_0x142a80[_0x5dac('0x4')][_0x5dac('0x66')](_0x52d5c4+'/biometrico/'+_0x5e5118+_0x5dac('0xd'))[_0x5dac('0x68')](()=>{_0x453e8b[_0x5dac('0x19')](0xc8)[_0x5dac('0x69')]({'result':!![]});});});}});router[_0x5dac('0x82')](_0x5dac('0x83'),(_0x37f308,_0x4b999b,_0xf2acab)=>{const _0x2be574=tools_global[_0x5dac('0xa')]();const _0xa8cde6=_0x2be574[_0x5dac('0x16')]('\x20','\x20')+_0x5dac('0x84');const _0x5c5319=XLSX[_0x5dac('0xe')](_0xa8cde6);const _0x25b823=_0x5c5319['SheetNames'][0x0];const _0x4efccf=_0x5c5319[_0x5dac('0x1f')][_0x25b823];let _0x3bcb6e=0x0;row=0x2;const _0x32dcde=moment(new Date()[_0x5dac('0xf')]())['format'](_0x5dac('0x10'));sqlitedb[_0x5dac('0x85')](function(){mysqldb[_0x5dac('0x11')](_0x5dac('0x86'));while(_0x4efccf['A'+row]!==undefined){mysqldb['query'](_0x5dac('0x87'),[_0x4efccf['A'+row]?_0x4efccf['A'+row]['v']:'',_0x4efccf['B'+row]?_0x4efccf['B'+row]['v']:''],_0x569fe8=>{if(_0x569fe8)throw _0x569fe8;});row++;_0x3bcb6e++;if(_0x3bcb6e>=0x4b0){break;}}mysqldb['query'](_0x5dac('0x88'));_0x4b999b[_0x5dac('0x19')](0xc8)[_0x5dac('0x69')](JSON['stringify']({'result':!![],'rowLength':_0x3bcb6e}));});});router[_0x5dac('0x82')](_0x5dac('0x89'),middleware[_0x5dac('0x9')],(_0x27b070,_0x5e5738,_0x2c7745)=>{_0x5e5738[_0x5dac('0x19')](0xc8)[_0x5dac('0x69')]({'success':!![],'result':{'arquitectura':os[_0x5dac('0x8a')](),'memoria_total':os[_0x5dac('0x8b')](),'memoria_libre':os[_0x5dac('0x8c')](),'cpus':os[_0x5dac('0x8d')]()[0x0][_0x5dac('0x8e')],'hostname':os[_0x5dac('0x8f')]}});});module['exports']=router;