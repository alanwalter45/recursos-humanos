var _0xc3ec=['./routes/gestiones/gestiones.js','./routes/logs/logs.js','./routes/migrations/migrations.js','./routes/municipio/municipio.js','./routes/pais/pais.js','./routes/parametros/parametros.js','./routes/permisos/permisos.js','./routes/planillas/planillas.js','./routes/procesos_llamadas/procesos_llamadas.js','./routes/programaciones_mensuales/programaciones_mensuales.js','./routes/programaciones_mensuales_viajes/programaciones_mensuales_viajes.js','./routes/provincias/provincias.js','./routes/publicaciones/publicaciones.js','./routes/registros/registros.js','./routes/requisitos/requisitos.js','./routes/servidores_publicos/servidores_publicos.js','./routes/sys/sys.js','./routes/unidades/unidades.js','./routes/usuarios/usuarios.js','./routes/viajes/viajes.js','get','send','status','utf-8','parse','stringify','app','port','log','\x20===================================================\x0a\x20\x20SISTEMA\x20DE\x20GESTION\x20DE\x20INFORMACION\x0a\x20===================================================\x0a\x20===|\x20\x20\x20URL\x20\x20\x20\x20\x20\x20\x20\x20=\x20\x20','gral','production','localhost','network','platform','arch','\x0a\x20===|\x20\x20\x20PID\x20\x20\x20\x20\x20\x20\x20\x20=\x20\x20','pid','\x0a\x20===|\x20\x20\x20INICIADO\x20\x20\x20=\x20\x20','now','format','\x0a\x20===================================================\x0a\x20\x20DESARROLLADO\x20POR\x20\x20alanwalter45@gmail.com\x0a\x20===================================================','path','express','createServer','enable','trust\x20proxy','use','json','15mb','urlencoded','static','join','./../dist','/public','/doc','setHeader','Access-Control-Allow-Origin','X-Requested-With,content-type','/api','./routes/areas/areas.js','./routes/biometricos/biometricos.js','./routes/cargos/cargos.js','./routes/categorias_programaticas/categorias_programaticas.js','./routes/contrataciones_anteriores/contrataciones_anteriores.js','./routes/declaraciones_juradas/declaraciones_juradas.js','./routes/dias_festivos/dias_festivos.js','./routes/doc/doc.js','./routes/email/email.js','./routes/escalas_salariales/escalas_salariales.js'];(function(_0x2504e4,_0x1508e4){var _0x520a7f=function(_0xc5b5a2){while(--_0xc5b5a2){_0x2504e4['push'](_0x2504e4['shift']());}};_0x520a7f(++_0x1508e4);}(_0xc3ec,0x1ce));var _0x1cbe=function(_0x5e4a14,_0x223e21){_0x5e4a14=_0x5e4a14-0x0;var _0x196c75=_0xc3ec[_0x5e4a14];return _0x196c75;};const fs=require('fs'),cors=require('cors'),moment=require('moment'),path=require(_0x1cbe('0x0')),yaml=require('js-yaml'),express=require(_0x1cbe('0x1')),app=express(),Server=require('http')[_0x1cbe('0x2')](app);app[_0x1cbe('0x3')](_0x1cbe('0x4'));app['use'](cors());app[_0x1cbe('0x5')](express[_0x1cbe('0x6')]({'limit':_0x1cbe('0x7')}));app[_0x1cbe('0x5')](express[_0x1cbe('0x8')]({'extended':![]}));app[_0x1cbe('0x5')](express[_0x1cbe('0x9')](path[_0x1cbe('0xa')](__dirname,_0x1cbe('0xb'))));app[_0x1cbe('0x5')](express[_0x1cbe('0x9')](path[_0x1cbe('0xa')](__dirname,_0x1cbe('0xc'))));app[_0x1cbe('0x5')](_0x1cbe('0xd'),express[_0x1cbe('0x9')](path['join'](__dirname,_0x1cbe('0xd'))));app[_0x1cbe('0x5')]((_0x3251c6,_0x55f0de,_0x5f4ee8)=>{_0x55f0de[_0x1cbe('0xe')](_0x1cbe('0xf'),'*');_0x55f0de[_0x1cbe('0xe')]('Access-Control-Allow-Headers',_0x1cbe('0x10'));_0x55f0de[_0x1cbe('0xe')]('Access-Control-Allow-Credentials',!![]);_0x5f4ee8();});app['use'](_0x1cbe('0x11'),require('./file.js'));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require(_0x1cbe('0x12')));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require(_0x1cbe('0x13')));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require('./routes/calificacion_anhos_servicio/calificacion_anhos_servicio.js'));app[_0x1cbe('0x5')]('/api',require(_0x1cbe('0x14')));app[_0x1cbe('0x5')]('/api',require(_0x1cbe('0x15')));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require(_0x1cbe('0x16')));app[_0x1cbe('0x5')]('/api',require(_0x1cbe('0x17')));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require('./routes/departamento/departamento.js'));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require(_0x1cbe('0x18')));app[_0x1cbe('0x5')]('/api',require(_0x1cbe('0x19')));app['use'](_0x1cbe('0x11'),require('./routes/documentos_presentados/documentos_presentados.js'));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require(_0x1cbe('0x1a')));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require(_0x1cbe('0x1b')));app[_0x1cbe('0x5')]('/api',require('./routes/estructuras/estructuras.js'));app[_0x1cbe('0x5')]('/api',require(_0x1cbe('0x1c')));app[_0x1cbe('0x5')]('/api',require(_0x1cbe('0x1d')));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require(_0x1cbe('0x1e')));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require(_0x1cbe('0x1f')));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require('./routes/niveles_salariales/niveles_salariales.js'));app[_0x1cbe('0x5')]('/api',require(_0x1cbe('0x20')));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require(_0x1cbe('0x21')));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require(_0x1cbe('0x22')));app['use'](_0x1cbe('0x11'),require(_0x1cbe('0x23')));app[_0x1cbe('0x5')]('/api',require(_0x1cbe('0x24')));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require('./routes/programaciones_anuales/programaciones_anuales.js'));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require(_0x1cbe('0x25')));app['use'](_0x1cbe('0x11'),require(_0x1cbe('0x26')));app['use']('/api',require(_0x1cbe('0x27')));app[_0x1cbe('0x5')]('/api',require(_0x1cbe('0x28')));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require(_0x1cbe('0x29')));app[_0x1cbe('0x5')]('/api',require(_0x1cbe('0x2a')));app['use'](_0x1cbe('0x11'),require(_0x1cbe('0x2b')));app[_0x1cbe('0x5')]('/api',require('./routes/sms/sms.js'));app[_0x1cbe('0x5')]('/api',require(_0x1cbe('0x2c')));app['use']('/api',require('./routes/tipoPermisos/tipoPermisos.js'));app['use'](_0x1cbe('0x11'),require('./routes/tool/tool.js'));app[_0x1cbe('0x5')](_0x1cbe('0x11'),require('./routes/tools/tools.js'));app[_0x1cbe('0x5')]('/api',require(_0x1cbe('0x2d')));app['use'](_0x1cbe('0x11'),require(_0x1cbe('0x2e')));app[_0x1cbe('0x5')]('/api',require('./routes/vacaciones/vacaciones.js'));app['use'](_0x1cbe('0x11'),require(_0x1cbe('0x2f')));app[_0x1cbe('0x5')]('/api',require('./routes/zkteco/zkteco.js'));app[_0x1cbe('0x30')]('*',(_0x1680e8,_0x5e9cb3)=>{_0x5e9cb3[_0x1cbe('0x31')]('404\x20servidor\x20caido.')[_0x1cbe('0x32')](0x190);});const docYML=yaml['safeLoad'](fs['readFileSync']('./server/config.yml',_0x1cbe('0x33')));var congigYML=JSON[_0x1cbe('0x34')](JSON[_0x1cbe('0x35')](docYML));let port=congigYML[_0x1cbe('0x36')]['network'][_0x1cbe('0x37')]||0xbb8;Server['listen'](port,()=>{console[_0x1cbe('0x38')](_0x1cbe('0x39')+(congigYML[_0x1cbe('0x36')][_0x1cbe('0x3a')][_0x1cbe('0x3b')]?congigYML['app']['network']['ip']:_0x1cbe('0x3c'))+':'+congigYML['app'][_0x1cbe('0x3d')][_0x1cbe('0x37')]+'\x0a\x20===|\x20\x20\x20PLATAFORMA\x20=\x20\x20'+process[_0x1cbe('0x3e')]+'\x20'+process[_0x1cbe('0x3f')]+_0x1cbe('0x40')+process[_0x1cbe('0x41')]+_0x1cbe('0x42')+moment(Date[_0x1cbe('0x43')]())[_0x1cbe('0x44')]('DD\x20MMM\x20YYYY\x20HH:mm:ss')+_0x1cbe('0x45'));});