var _0x1974=['mimetype','image/jpeg','.jpg','application/pdf','.pdf','audio/mp3','.mp4','destination','rename','unlink','single','size','replace','img','/publicaciones/','/files/delete-publicacion','unlinkSync','tipoArchivo','photos','/biometrico/','getTime','format','DD-MM-YYYY','chmodSync','777','exports','express','Router','/public/assets/photos','moment','post','/files/create-folder','parse','body','json','propietario','existsSync','createReadStream','/imagen-perfil.jpg','pipe','createWriteStream','status','imagen','file','send','path','nombreArchivo'];(function(_0x465664,_0x300d0c){var _0x14ea1b=function(_0x2d2212){while(--_0x2d2212){_0x465664['push'](_0x465664['shift']());}};_0x14ea1b(++_0x300d0c);}(_0x1974,0xd6));var _0x5b34=function(_0x2d37d7,_0x34eae8){_0x2d37d7=_0x2d37d7-0x0;var _0x527aa0=_0x1974[_0x2d37d7];return _0x527aa0;};const express=require(_0x5b34('0x0'));const router=express[_0x5b34('0x1')]();const fs=require('fs');const multer=require('multer');const upload=multer({'dest':__dirname+_0x5b34('0x2')});const moment=require(_0x5b34('0x3'));router[_0x5b34('0x4')](_0x5b34('0x5'),(_0x2ddca1,_0x1aec01,_0x499cbc)=>{const _0x2d8446=JSON[_0x5b34('0x6')](_0x2ddca1[_0x5b34('0x7')][_0x5b34('0x8')]);const _0x8667e8=_0x2d8446[_0x5b34('0x9')];const _0x12ffe2=__dirname+_0x5b34('0x2');if(!fs[_0x5b34('0xa')](_0x12ffe2+'/'+_0x8667e8)){fs['mkdirSync'](_0x12ffe2+'/'+_0x8667e8);fs[_0x5b34('0xb')](_0x12ffe2+_0x5b34('0xc'))[_0x5b34('0xd')](fs[_0x5b34('0xe')](_0x12ffe2+'/'+_0x8667e8+_0x5b34('0xc')));}_0x1aec01[_0x5b34('0xf')](0xc8)['send'](!![]);});router['post']('/files/upload',upload['single'](_0x5b34('0x10')),(_0x30bfb6,_0x5ad395,_0x374e89)=>{let _0x2f8773=_0x30bfb6[_0x5b34('0x11')];if(_0x2f8773==undefined){_0x5ad395[_0x5b34('0xf')](0xc8)[_0x5b34('0x12')](!![]);}else{let _0x17fb74=_0x2f8773[_0x5b34('0x13')];if(_0x2f8773['size']/0x400/0x400<=0x3){let _0x5c15e8=_0x30bfb6['body'][_0x5b34('0x14')];let _0x3a9668=_0x30bfb6['body']['propietario'];let _0x46dc05='';switch(_0x2f8773[_0x5b34('0x15')]){case _0x5b34('0x16'):_0x46dc05=_0x5b34('0x17');break;case _0x5b34('0x18'):_0x46dc05=_0x5b34('0x19');break;case _0x5b34('0x1a'):_0x46dc05='.mp3';break;case'video/mp4':_0x46dc05=_0x5b34('0x1b');break;}const _0x340229=_0x2f8773[_0x5b34('0x1c')]+'/'+_0x3a9668+'/'+_0x5c15e8+_0x46dc05;fs[_0x5b34('0x1d')](_0x17fb74,_0x340229,_0x57f332=>{if(_0x57f332)throw _0x57f332;_0x5ad395[_0x5b34('0xf')](0xc8)[_0x5b34('0x12')](!![]);});}else{fs[_0x5b34('0x1e')](_0x17fb74,_0x141554=>{if(_0x141554)throw _0x141554;});_0x5ad395[_0x5b34('0xf')](0xc8)[_0x5b34('0x12')](![]);}}});router[_0x5b34('0x4')]('/files/upload/publicacion',upload[_0x5b34('0x1f')]('imagen'),(_0x8ba6c6,_0x39af78,_0x4f7e96)=>{let _0x1cd1b3=_0x8ba6c6[_0x5b34('0x11')];if(_0x1cd1b3==undefined){_0x39af78[_0x5b34('0xf')](0xc8)[_0x5b34('0x12')](!![]);}else{let _0x3e5423=_0x1cd1b3['path'];if(_0x1cd1b3[_0x5b34('0x20')]/0x400/0x400<=0x1){let _0x3da4ee=_0x8ba6c6[_0x5b34('0x7')]['nombreArchivo'];let _0x10ee42=_0x8ba6c6[_0x5b34('0x7')]['propietario'];let _0x419b51=_0x1cd1b3[_0x5b34('0x1c')][_0x5b34('0x21')]('photos',_0x5b34('0x22'))+_0x5b34('0x23')+_0x3da4ee;fs[_0x5b34('0x1d')](_0x3e5423,_0x419b51,_0x3e6d12=>{if(_0x3e6d12){throw _0x3e6d12;}_0x39af78[_0x5b34('0xf')](0xc8)[_0x5b34('0x12')](!![]);});}else{fs[_0x5b34('0x1e')](_0x3e5423,_0x204801=>{if(_0x204801){throw _0x204801;}});_0x39af78[_0x5b34('0xf')](0xc8)[_0x5b34('0x12')](![]);}}});router[_0x5b34('0x4')](_0x5b34('0x24'),(_0x408655,_0x54a124,_0x2811a3)=>{const _0x40c58c=JSON[_0x5b34('0x6')](_0x408655[_0x5b34('0x7')]['json']);const _0x20bb62=_0x40c58c[_0x5b34('0x14')];const _0x3bed03=__dirname+'/public/assets/img/publicaciones/'+_0x20bb62;fs[_0x5b34('0x25')](_0x3bed03);_0x54a124[_0x5b34('0xf')](0xc8)['send'](!![]);});router[_0x5b34('0x4')]('/files/copy-file-biometrico',upload['single'](_0x5b34('0x10')),(_0x427c6b,_0x42d3aa,_0x596db1)=>{let _0x404588=_0x427c6b[_0x5b34('0x11')];if(_0x404588==undefined){_0x42d3aa[_0x5b34('0xf')](0xc8)[_0x5b34('0x12')](!![]);}else{let _0x47fdc3=_0x404588[_0x5b34('0x13')];if(_0x404588['size']/0x400/0x400<=0x12c){let _0x342973=_0x427c6b[_0x5b34('0x7')][_0x5b34('0x14')];let _0x33c284=_0x427c6b['body'][_0x5b34('0x26')];let _0x305ef8=_0x427c6b['body'][_0x5b34('0x9')];const _0x33e449=_0x404588[_0x5b34('0x1c')][_0x5b34('0x21')](_0x5b34('0x27'),'docs')+_0x5b34('0x28')+_0x342973+moment(new Date()[_0x5b34('0x29')]())[_0x5b34('0x2a')](_0x5b34('0x2b'))+'.'+_0x33c284;fs['rename'](_0x47fdc3,_0x33e449,_0x19d923=>{if(_0x19d923){throw _0x19d923;}fs[_0x5b34('0x2c')](_0x33e449,_0x5b34('0x2d'));_0x42d3aa[_0x5b34('0xf')](0xc8)[_0x5b34('0x12')](!![]);});}else{fs['unlink'](_0x47fdc3,_0x433ccc=>{if(_0x433ccc)throw _0x433ccc;});_0x42d3aa[_0x5b34('0xf')](0xc8)['send'](![]);}}});module[_0x5b34('0x2e')]=router;