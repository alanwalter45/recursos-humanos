var _0x54fe=['/public/assets/img/publicaciones/','unlinkSync','/files/copy-file-biometrico','tipoArchivo','docs','/biometrico/','getTime','format','DD-MM-YYYY','777','exports','Router','multer','/public/assets/photos','moment','post','/files/create-folder','parse','json','propietario','existsSync','mkdirSync','createReadStream','/imagen-perfil.jpg','pipe','createWriteStream','status','/files/upload','single','imagen','file','send','path','body','mimetype','image/jpeg','application/pdf','.pdf','audio/mp3','.mp3','video/mp4','.mp4','rename','unlink','/files/upload/publicacion','size','nombreArchivo','destination','replace','photos','img','/publicaciones/'];(function(_0x34be68,_0x42207a){var _0x2ddb41=function(_0x44230a){while(--_0x44230a){_0x34be68['push'](_0x34be68['shift']());}};_0x2ddb41(++_0x42207a);}(_0x54fe,0x143));var _0x68e9=function(_0x5b1e61,_0x5c98a8){_0x5b1e61=_0x5b1e61-0x0;var _0x5909f1=_0x54fe[_0x5b1e61];return _0x5909f1;};const express=require('express');const router=express[_0x68e9('0x0')]();const fs=require('fs');const multer=require(_0x68e9('0x1'));const upload=multer({'dest':__dirname+_0x68e9('0x2')});const moment=require(_0x68e9('0x3'));router[_0x68e9('0x4')](_0x68e9('0x5'),(_0x3f52d4,_0x92a06d,_0x1e88ad)=>{const _0x14fea6=JSON[_0x68e9('0x6')](_0x3f52d4['body'][_0x68e9('0x7')]);const _0x2a55b0=_0x14fea6[_0x68e9('0x8')];const _0x50c60e=__dirname+'/public/assets/photos';if(!fs[_0x68e9('0x9')](_0x50c60e+'/'+_0x2a55b0)){fs[_0x68e9('0xa')](_0x50c60e+'/'+_0x2a55b0);fs[_0x68e9('0xb')](_0x50c60e+_0x68e9('0xc'))[_0x68e9('0xd')](fs[_0x68e9('0xe')](_0x50c60e+'/'+_0x2a55b0+_0x68e9('0xc')));}_0x92a06d[_0x68e9('0xf')](0xc8)['send'](!![]);});router[_0x68e9('0x4')](_0x68e9('0x10'),upload[_0x68e9('0x11')](_0x68e9('0x12')),(_0x3a686b,_0x5f11b7,_0x33fccd)=>{let _0x530b09=_0x3a686b[_0x68e9('0x13')];if(_0x530b09==undefined){_0x5f11b7[_0x68e9('0xf')](0xc8)[_0x68e9('0x14')](!![]);}else{let _0x46e34d=_0x530b09[_0x68e9('0x15')];if(_0x530b09['size']/0x400/0x400<=0x3){let _0x26d4af=_0x3a686b[_0x68e9('0x16')]['nombreArchivo'];let _0x249490=_0x3a686b['body'][_0x68e9('0x8')];let _0xcc450a='';switch(_0x530b09[_0x68e9('0x17')]){case _0x68e9('0x18'):_0xcc450a='.jpg';break;case _0x68e9('0x19'):_0xcc450a=_0x68e9('0x1a');break;case _0x68e9('0x1b'):_0xcc450a=_0x68e9('0x1c');break;case _0x68e9('0x1d'):_0xcc450a=_0x68e9('0x1e');break;}const _0x46e8da=_0x530b09['destination']+'/'+_0x249490+'/'+_0x26d4af+_0xcc450a;fs[_0x68e9('0x1f')](_0x46e34d,_0x46e8da,_0x388f31=>{if(_0x388f31)throw _0x388f31;_0x5f11b7[_0x68e9('0xf')](0xc8)[_0x68e9('0x14')](!![]);});}else{fs[_0x68e9('0x20')](_0x46e34d,_0x1009d8=>{if(_0x1009d8)throw _0x1009d8;});_0x5f11b7[_0x68e9('0xf')](0xc8)['send'](![]);}}});router['post'](_0x68e9('0x21'),upload[_0x68e9('0x11')](_0x68e9('0x12')),(_0x538382,_0x109074,_0x5d032f)=>{let _0x1775ea=_0x538382[_0x68e9('0x13')];if(_0x1775ea==undefined){_0x109074[_0x68e9('0xf')](0xc8)[_0x68e9('0x14')](!![]);}else{let _0x599dbc=_0x1775ea[_0x68e9('0x15')];if(_0x1775ea[_0x68e9('0x22')]/0x400/0x400<=0x1){let _0x55a208=_0x538382[_0x68e9('0x16')][_0x68e9('0x23')];let _0x3596c5=_0x538382[_0x68e9('0x16')][_0x68e9('0x8')];let _0x5f1df9=_0x1775ea[_0x68e9('0x24')][_0x68e9('0x25')](_0x68e9('0x26'),_0x68e9('0x27'))+_0x68e9('0x28')+_0x55a208;fs[_0x68e9('0x1f')](_0x599dbc,_0x5f1df9,_0xa37c4f=>{if(_0xa37c4f){throw _0xa37c4f;}_0x109074[_0x68e9('0xf')](0xc8)[_0x68e9('0x14')](!![]);});}else{fs[_0x68e9('0x20')](_0x599dbc,_0x533e82=>{if(_0x533e82){throw _0x533e82;}});_0x109074[_0x68e9('0xf')](0xc8)[_0x68e9('0x14')](![]);}}});router[_0x68e9('0x4')]('/files/delete-publicacion',(_0x5383e7,_0x4dc709,_0x4519c6)=>{const _0x1572a0=JSON[_0x68e9('0x6')](_0x5383e7[_0x68e9('0x16')][_0x68e9('0x7')]);const _0x369ae1=_0x1572a0[_0x68e9('0x23')];const _0x4b3e43=__dirname+_0x68e9('0x29')+_0x369ae1;fs[_0x68e9('0x2a')](_0x4b3e43);_0x4dc709[_0x68e9('0xf')](0xc8)[_0x68e9('0x14')](!![]);});router[_0x68e9('0x4')](_0x68e9('0x2b'),upload[_0x68e9('0x11')](_0x68e9('0x12')),(_0x78f075,_0x4aea7d,_0x2a431d)=>{let _0x45f876=_0x78f075['file'];if(_0x45f876==undefined){_0x4aea7d[_0x68e9('0xf')](0xc8)['send'](!![]);}else{let _0x1fc257=_0x45f876[_0x68e9('0x15')];if(_0x45f876[_0x68e9('0x22')]/0x400/0x400<=0x12c){let _0x41deed=_0x78f075[_0x68e9('0x16')][_0x68e9('0x23')];let _0x221fbe=_0x78f075[_0x68e9('0x16')][_0x68e9('0x2c')];let _0x4ebf7b=_0x78f075[_0x68e9('0x16')][_0x68e9('0x8')];const _0x5d0847=_0x45f876[_0x68e9('0x24')][_0x68e9('0x25')]('photos',_0x68e9('0x2d'))+_0x68e9('0x2e')+_0x41deed+moment(new Date()[_0x68e9('0x2f')]())[_0x68e9('0x30')](_0x68e9('0x31'))+'.'+_0x221fbe;fs[_0x68e9('0x1f')](_0x1fc257,_0x5d0847,_0xbd2bec=>{if(_0xbd2bec){throw _0xbd2bec;}fs['chmodSync'](_0x5d0847,_0x68e9('0x32'));_0x4aea7d[_0x68e9('0xf')](0xc8)[_0x68e9('0x14')](!![]);});}else{fs[_0x68e9('0x20')](_0x1fc257,_0x4473b0=>{if(_0x4473b0)throw _0x4473b0;});_0x4aea7d[_0x68e9('0xf')](0xc8)['send'](![]);}}});module[_0x68e9('0x33')]=router;