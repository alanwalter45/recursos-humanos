var _0x5dc2=['task','execSync','rm\x20-rf\x20./../docker/server','ofuscar-server','./*.js','pipe','dest','./../docker/server','src','./config.yml','copiar-a-docker','platform','linux','cp\x20-rf\x20./../server/public\x20\x20./../docker/server/','cp\x20-rf\x20./../dist/rh2018\x20\x20./../docker/dist','mkdir\x20.\x5c..\x5cdocker\x5cserver\x5croutes\x20','mkdir\x20.\x5c..\x5cdocker\x5cserver\x5cpublic\x20','xcopy\x20.\x5c..\x5cserver\x5cpublic\x20\x20.\x5c..\x5cdocker\x5cserver\x5cpublic\x20/s\x20/i','xcopy\x20.\x5c..\x5cdist\x5crh2018\x20\x20.\x5c..\x5cdocker\x5cdist\x20/s\x20/i','limpiar-docker','log','completado...','gulp','gulp-javascript-obfuscator','gulp-concat','gulp-rimraf'];(function(_0x5d08d7,_0xbae151){var _0x5ed552=function(_0x3f6ec8){while(--_0x3f6ec8){_0x5d08d7['push'](_0x5d08d7['shift']());}};_0x5ed552(++_0xbae151);}(_0x5dc2,0x168));var _0x5adb=function(_0x52a7fa,_0x377d58){_0x52a7fa=_0x52a7fa-0x0;var _0x3c955b=_0x5dc2[_0x52a7fa];return _0x3c955b;};const gulp=require(_0x5adb('0x0'));const javascriptObfuscator=require(_0x5adb('0x1'));const concat=require(_0x5adb('0x2'));const clean=require(_0x5adb('0x3'));const fs=require('fs');const child_process=require('child_process');const os=require('os');gulp[_0x5adb('0x4')]('limpiar-docker',()=>{child_process['execSync']('rm\x20-rf\x20./../docker/dist');child_process[_0x5adb('0x5')](_0x5adb('0x6'));});gulp['task'](_0x5adb('0x7'),()=>{gulp['src'](_0x5adb('0x8'))[_0x5adb('0x9')](javascriptObfuscator())[_0x5adb('0x9')](gulp[_0x5adb('0xa')](_0x5adb('0xb')));gulp[_0x5adb('0xc')](_0x5adb('0xd'))['pipe'](gulp[_0x5adb('0xa')]('./../docker/server'));gulp[_0x5adb('0xc')]('./routes/*/*.js')[_0x5adb('0x9')](javascriptObfuscator())[_0x5adb('0x9')](gulp[_0x5adb('0xa')]('./../docker/server/routes'));});gulp['task'](_0x5adb('0xe'),()=>{if(os[_0x5adb('0xf')]()==_0x5adb('0x10')){child_process[_0x5adb('0x5')](_0x5adb('0x11'));child_process[_0x5adb('0x5')](_0x5adb('0x12'));}else{child_process[_0x5adb('0x5')](_0x5adb('0x13'));child_process[_0x5adb('0x5')](_0x5adb('0x14'));child_process[_0x5adb('0x5')](_0x5adb('0x15'));child_process[_0x5adb('0x5')](_0x5adb('0x16'));}});gulp['task']('default',[_0x5adb('0x17'),_0x5adb('0x7'),'copiar-a-docker'],()=>{console[_0x5adb('0x18')](_0x5adb('0x19'));});