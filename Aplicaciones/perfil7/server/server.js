var _0x5dda=['readdirSync','forEach','/api','./routes/','sendFile','./../dist/index.html','connection','./os','whatPathFileConfig','safeLoad','readFileSync','utf-8','stringify','app','network','port','log','----------------------------------------\x0a\x20\x20\x20\x20API\x20-\x20RECURSOS\x20HUMANOS\x0a----------------------------------------\x0a\x20server:\x20','gral','production','localhost','\x0a\x20platform:\x20\x20','platform','arch','\x0a\x20pid:\x20\x20','pid','\x0a\x20startup:\x20\x20','now','format','body-parser','cors','moment','path','express','http','createServer','socket.io','enable','trust\x20proxy','use','json','urlencoded','join','./../dist','static','setHeader','Access-Control-Allow-Origin','Access-Control-Allow-Headers','X-Requested-With,content-type','Access-Control-Allow-Credentials','./file.js'];(function(_0xacd42,_0x547ba2){var _0x14228d=function(_0x173c72){while(--_0x173c72){_0xacd42['push'](_0xacd42['shift']());}};_0x14228d(++_0x547ba2);}(_0x5dda,0xe9));var _0x41ea=function(_0x189478,_0x3bd6fa){_0x189478=_0x189478-0x0;var _0x34a02c=_0x5dda[_0x189478];return _0x34a02c;};const fs=require('fs');const bodyParser=require(_0x41ea('0x0'));const cors=require(_0x41ea('0x1'));const moment=require(_0x41ea('0x2'));const path=require(_0x41ea('0x3'));const express=require(_0x41ea('0x4'));const app=express();const Server=require(_0x41ea('0x5'))[_0x41ea('0x6')](app);const ioServer=require(_0x41ea('0x7'))(Server,{'pingInterval':0x61a8,'pingTimeout':0xea60});app[_0x41ea('0x8')](_0x41ea('0x9'));app[_0x41ea('0xa')](cors());app[_0x41ea('0xa')](bodyParser[_0x41ea('0xb')]());app['use'](bodyParser[_0x41ea('0xc')]({'extended':![]}));app[_0x41ea('0xa')](express['static'](path[_0x41ea('0xd')](__dirname,_0x41ea('0xe'))));app[_0x41ea('0xa')](express[_0x41ea('0xf')](path[_0x41ea('0xd')](__dirname,'/public')));app[_0x41ea('0xa')]((_0x4599c5,_0x33df5d,_0x191590)=>{_0x33df5d[_0x41ea('0x10')](_0x41ea('0x11'),'*');_0x33df5d[_0x41ea('0x10')](_0x41ea('0x12'),_0x41ea('0x13'));_0x33df5d[_0x41ea('0x10')](_0x41ea('0x14'),!![]);_0x191590();});app[_0x41ea('0xa')]('/api',require(_0x41ea('0x15')));fs[_0x41ea('0x16')]('./server/routes')[_0x41ea('0x17')](_0x43d9ac=>{app['use'](_0x41ea('0x18'),require(_0x41ea('0x19')+_0x43d9ac+'/'+_0x43d9ac));});app['get']('*',(_0x15e54c,_0x1a35e5)=>{_0x1a35e5[_0x41ea('0x1a')](path[_0x41ea('0xd')](__dirname,_0x41ea('0x1b')));});ioServer['on'](_0x41ea('0x1c'),_0x51c5d0=>{});let pathFileConfig=require(_0x41ea('0x1d'));var path_file=pathFileConfig[_0x41ea('0x1e')]();const yaml=require('js-yaml');const docYML=yaml[_0x41ea('0x1f')](fs[_0x41ea('0x20')](path_file,_0x41ea('0x21')));var congigYML=JSON['parse'](JSON[_0x41ea('0x22')](docYML));let port=congigYML[_0x41ea('0x23')][_0x41ea('0x24')][_0x41ea('0x25')]||0xbb8;Server['listen'](port,()=>{console[_0x41ea('0x26')](_0x41ea('0x27')+(congigYML[_0x41ea('0x23')][_0x41ea('0x28')][_0x41ea('0x29')]?congigYML[_0x41ea('0x23')]['network']['ip']:_0x41ea('0x2a'))+':'+congigYML[_0x41ea('0x23')][_0x41ea('0x24')][_0x41ea('0x25')]+_0x41ea('0x2b')+process[_0x41ea('0x2c')]+'\x20'+process[_0x41ea('0x2d')]+_0x41ea('0x2e')+process[_0x41ea('0x2f')]+_0x41ea('0x30')+moment(Date[_0x41ea('0x31')]())[_0x41ea('0x32')]('YYYY-MM-DD\x20hh:mm:ss')+'\x0a----------------------------------------\x0a\x20\x20\x20alanwalter45@gmail.com\x0a----------------------------------------');});