var _0x40fb=['port','listen','log','\x0a\x20PERFIL\x203\x20\x20\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20ADMINISTRACIÓN\x20DE\x20PERSONAL\x0a+++++++++++++++++++++++++++++++++++++++++++++++++++\x0a\x20DIRECCIÓN\x20\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20','gral','production','localhost','platform','arch','now','format','YYYY-MM-DD\x20hh:mm:ss','\x0a\x20AUTOR\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20alanwalter45@gmail.com','body-parser','cors','moment','express','createServer','trust\x20proxy','use','json','urlencoded','static','join','./../dist','/public','setHeader','X-Requested-With,content-type','Access-Control-Allow-Credentials','/api','./file.js','./server/routes','forEach','sendFile','./../dist/index.html','./os','js-yaml','safeLoad','readFileSync','parse','stringify','app','network'];(function(_0x27799c,_0x389e22){var _0x1caefd=function(_0x288967){while(--_0x288967){_0x27799c['push'](_0x27799c['shift']());}};_0x1caefd(++_0x389e22);}(_0x40fb,0x8e));var _0x1a63=function(_0x2ab21e,_0x169f02){_0x2ab21e=_0x2ab21e-0x0;var _0x3a8077=_0x40fb[_0x2ab21e];return _0x3a8077;};const fs=require('fs');const bodyParser=require(_0x1a63('0x0'));const cors=require(_0x1a63('0x1'));const moment=require(_0x1a63('0x2'));const path=require('path');const express=require(_0x1a63('0x3'));const app=express();const Server=require('http')[_0x1a63('0x4')](app);app['enable'](_0x1a63('0x5'));app[_0x1a63('0x6')](cors());app[_0x1a63('0x6')](bodyParser[_0x1a63('0x7')]());app[_0x1a63('0x6')](bodyParser[_0x1a63('0x8')]({'extended':![]}));app[_0x1a63('0x6')](express[_0x1a63('0x9')](path[_0x1a63('0xa')](__dirname,_0x1a63('0xb'))));app['use'](express['static'](path['join'](__dirname,_0x1a63('0xc'))));app[_0x1a63('0x6')]((_0x228685,_0x2294b4,_0x28d8ca)=>{_0x2294b4[_0x1a63('0xd')]('Access-Control-Allow-Origin','*');_0x2294b4[_0x1a63('0xd')]('Access-Control-Allow-Headers',_0x1a63('0xe'));_0x2294b4[_0x1a63('0xd')](_0x1a63('0xf'),!![]);_0x28d8ca();});app[_0x1a63('0x6')](_0x1a63('0x10'),require(_0x1a63('0x11')));fs['readdirSync'](_0x1a63('0x12'))[_0x1a63('0x13')](_0x42d84a=>{app[_0x1a63('0x6')]('/api',require('./routes/'+_0x42d84a+'/'+_0x42d84a));});app['get']('*',(_0x2ee00a,_0x1c9e59)=>{_0x1c9e59[_0x1a63('0x14')](path['join'](__dirname,_0x1a63('0x15')));});let pathFileConfig=require(_0x1a63('0x16'));var path_file=pathFileConfig['whatPathFileConfig']();const yaml=require(_0x1a63('0x17'));const docYML=yaml[_0x1a63('0x18')](fs[_0x1a63('0x19')](path_file,'utf-8'));var congigYML=JSON[_0x1a63('0x1a')](JSON[_0x1a63('0x1b')](docYML));let port=congigYML[_0x1a63('0x1c')][_0x1a63('0x1d')][_0x1a63('0x1e')]||0xbb8;Server[_0x1a63('0x1f')](port,()=>{console[_0x1a63('0x20')](_0x1a63('0x21')+(congigYML[_0x1a63('0x1c')][_0x1a63('0x22')][_0x1a63('0x23')]?congigYML[_0x1a63('0x1c')][_0x1a63('0x1d')]['ip']:_0x1a63('0x24'))+':'+port+'\x0a\x20PLATAFORMA\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20'+process[_0x1a63('0x25')]+'\x20'+process[_0x1a63('0x26')]+'\x0a\x20PID\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20'+process['pid']+'\x0a\x20INICIADO\x20\x20\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20'+moment(Date[_0x1a63('0x27')]())[_0x1a63('0x28')](_0x1a63('0x29'))+_0x1a63('0x2a'));});