var _0x7bdc=['js-yaml','safeLoad','readFileSync','utf-8','parse','stringify','app','listen','gral','production','network','localhost','\x0a\x20PLATAFORMA\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20','platform','arch','\x0a\x20PID\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20','\x0a\x20INICIADO\x20\x20\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20','now','YYYY-MM-DD\x20hh:mm:ss','moment','path','express','createServer','enable','use','json','urlencoded','static','join','/public','setHeader','Access-Control-Allow-Origin','Access-Control-Allow-Headers','X-Requested-With,content-type','Access-Control-Allow-Credentials','./file.js','readdirSync','./server/routes','forEach','/api','./routes/','get','sendFile','./../dist/index.html','whatPathFileConfig'];(function(_0x304ed3,_0x32f133){var _0x3045e4=function(_0x2fbe05){while(--_0x2fbe05){_0x304ed3['push'](_0x304ed3['shift']());}};_0x3045e4(++_0x32f133);}(_0x7bdc,0x6d));var _0x28bd=function(_0x49550b,_0x9b1a1a){_0x49550b=_0x49550b-0x0;var _0x48414e=_0x7bdc[_0x49550b];return _0x48414e;};const fs=require('fs');const bodyParser=require('body-parser');const cors=require('cors');const moment=require(_0x28bd('0x0'));const path=require(_0x28bd('0x1'));const express=require(_0x28bd('0x2'));const app=express();const Server=require('http')[_0x28bd('0x3')](app);app[_0x28bd('0x4')]('trust\x20proxy');app[_0x28bd('0x5')](cors());app[_0x28bd('0x5')](bodyParser[_0x28bd('0x6')]());app[_0x28bd('0x5')](bodyParser[_0x28bd('0x7')]({'extended':![]}));app[_0x28bd('0x5')](express[_0x28bd('0x8')](path[_0x28bd('0x9')](__dirname,'./../dist')));app[_0x28bd('0x5')](express['static'](path[_0x28bd('0x9')](__dirname,_0x28bd('0xa'))));app[_0x28bd('0x5')]((_0x92cdd8,_0x35a07b,_0x32bb1a)=>{_0x35a07b[_0x28bd('0xb')](_0x28bd('0xc'),'*');_0x35a07b[_0x28bd('0xb')](_0x28bd('0xd'),_0x28bd('0xe'));_0x35a07b[_0x28bd('0xb')](_0x28bd('0xf'),!![]);_0x32bb1a();});app[_0x28bd('0x5')]('/api',require(_0x28bd('0x10')));fs[_0x28bd('0x11')](_0x28bd('0x12'))[_0x28bd('0x13')](_0x2cb03c=>{app['use'](_0x28bd('0x14'),require(_0x28bd('0x15')+_0x2cb03c+'/'+_0x2cb03c));});app[_0x28bd('0x16')]('*',(_0x5fecbd,_0x333674)=>{_0x333674[_0x28bd('0x17')](path[_0x28bd('0x9')](__dirname,_0x28bd('0x18')));});let pathFileConfig=require('./os');var path_file=pathFileConfig[_0x28bd('0x19')]();const yaml=require(_0x28bd('0x1a'));const docYML=yaml[_0x28bd('0x1b')](fs[_0x28bd('0x1c')](path_file,_0x28bd('0x1d')));var congigYML=JSON[_0x28bd('0x1e')](JSON[_0x28bd('0x1f')](docYML));let port=congigYML[_0x28bd('0x20')]['network']['port']||0xbb8;Server[_0x28bd('0x21')](port,()=>{console['log']('\x0a\x20PERFIL\x202\x20\x20\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20INMEDIATO\x20SUPERIOR\x0a+++++++++++++++++++++++++++++++++++++++++++++++++++\x0a\x20DIRECCIÓN\x20\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20'+(congigYML['app'][_0x28bd('0x22')][_0x28bd('0x23')]?congigYML[_0x28bd('0x20')][_0x28bd('0x24')]['ip']:_0x28bd('0x25'))+':'+port+_0x28bd('0x26')+process[_0x28bd('0x27')]+'\x20'+process[_0x28bd('0x28')]+_0x28bd('0x29')+process['pid']+_0x28bd('0x2a')+moment(Date[_0x28bd('0x2b')]())['format'](_0x28bd('0x2c'))+'\x0a\x20AUTOR\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20alanwalter45@gmail.com');});