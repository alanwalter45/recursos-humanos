var _0x1955=['gestion_id','affectedRows','/niveles-salariales/remove','\x0a\x20\x20\x20\x20\x20\x20\x20\x20DELETE\x20FROM\x20niveles_salariales\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id=?','/niveles-salariales/update','\x0a\x20\x20\x20\x20\x20\x20\x20\x20UPDATE\x20niveles_salariales\x20set\x20nivel=?,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20haber_basico=?\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id\x20\x20=\x20?','exports','express','./../../databaseMysql','get','ensureAuthenticated','\x0a\x20\x20select\x20*\x20from\x20niveles_salariales\x0a\x20\x20order\x20by\x20nivel\x20asc;','status','send','/niveles-salariales/get-all-gestion-actual','query','\x0a\x20\x20select\x20*\x20from\x20niveles_salariales\x0a\x20\x20where\x20gestion_id\x20=\x20(\x20select\x20id\x20from\x20gestiones\x20where\x20selected=1)\x0a\x20\x20order\x20by\x20nivel\x20asc;','length','post','/niveles-salariales/add','parse','body','json','nivel','haber_basico','format','YYYY-MM-DD\x20HH:mm:ss'];(function(_0x4102eb,_0x5e2b60){var _0x2399b4=function(_0x12793f){while(--_0x12793f){_0x4102eb['push'](_0x4102eb['shift']());}};_0x2399b4(++_0x5e2b60);}(_0x1955,0x1ed));var _0x535c=function(_0x49cb2d,_0x4be408){_0x49cb2d=_0x49cb2d-0x0;var _0x3a2b74=_0x1955[_0x49cb2d];return _0x3a2b74;};const express=require(_0x535c('0x0'));const router=express['Router']();const middleware=require('./../../middleware');const mysqldb=require(_0x535c('0x1'));const moment=require('moment');router[_0x535c('0x2')]('/niveles-salariales/get-all',middleware[_0x535c('0x3')],(_0x2b6d66,_0x27fd99,_0x351304)=>{mysqldb['query'](_0x535c('0x4'),(_0x5e5591,_0x5d5e6d)=>{if(_0x5e5591){throw _0x5e5591;}_0x27fd99[_0x535c('0x5')](0xc8)[_0x535c('0x6')]({'success':_0x5d5e6d['length'],'result':_0x5d5e6d});});});router[_0x535c('0x2')](_0x535c('0x7'),middleware['ensureAuthenticated'],(_0x1a137b,_0x484562,_0x572bbe)=>{mysqldb[_0x535c('0x8')](_0x535c('0x9'),(_0x24ed55,_0x2fa99e)=>{if(_0x24ed55){throw _0x24ed55;}_0x484562[_0x535c('0x5')](0xc8)[_0x535c('0x6')]({'success':_0x2fa99e[_0x535c('0xa')],'result':_0x2fa99e});});});router[_0x535c('0xb')](_0x535c('0xc'),middleware['ensureAuthenticated'],(_0x5ecb45,_0x57a9e3,_0x19bbb1)=>{const _0x3ae9d5=JSON[_0x535c('0xd')](_0x5ecb45[_0x535c('0xe')][_0x535c('0xf')]);const _0x1b9954=_0x3ae9d5[_0x535c('0x10')];const _0x255762=_0x3ae9d5[_0x535c('0x11')];const _0x4a2592=moment(new Date())[_0x535c('0x12')](_0x535c('0x13'));const _0x5bd717=_0x3ae9d5[_0x535c('0x14')];mysqldb['query']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20INSERT\x20INTO\x20niveles_salariales(nivel,haber_basico,gestion_id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20select\x20?,?,?\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20NOT\x20EXISTS(SELECT\x201\x20FROM\x20niveles_salariales\x20WHERE\x20nivel=?\x20and\x20haber_basico=?\x20AND\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gestion_id\x20\x20=\x20?)',[_0x1b9954,_0x255762,_0x5bd717,_0x1b9954,_0x255762,_0x5bd717],function(_0x50a223,_0x25f110){if(_0x50a223){throw _0x50a223;}_0x57a9e3[_0x535c('0x5')](0xc8)['send']({'success':_0x25f110[_0x535c('0x15')]?!![]:![],'result':_0x25f110});});});router['post'](_0x535c('0x16'),middleware[_0x535c('0x3')],(_0x5682fb,_0x2d3115,_0xdf40)=>{const _0x895368=JSON['parse'](_0x5682fb[_0x535c('0xe')][_0x535c('0xf')]);const _0x586227=_0x895368['id'];mysqldb[_0x535c('0x8')](_0x535c('0x17'),[_0x586227],function(_0x97d095,_0x67b260){if(_0x97d095){throw _0x97d095;}_0x2d3115[_0x535c('0x5')](0xc8)[_0x535c('0x6')]({'success':_0x67b260['affectedRows']?!![]:![],'result':_0x67b260});});});router[_0x535c('0xb')](_0x535c('0x18'),middleware[_0x535c('0x3')],(_0x104aa4,_0x42e0e2,_0x32852d)=>{const _0x1bd8ff=JSON[_0x535c('0xd')](_0x104aa4[_0x535c('0xe')][_0x535c('0xf')]);const _0x4d42c9=_0x1bd8ff[_0x535c('0x10')];const _0x45df9c=_0x1bd8ff[_0x535c('0x11')];const _0x380f45=moment(new Date())[_0x535c('0x12')](_0x535c('0x13'));const _0x50f1dd=_0x1bd8ff['id'];mysqldb[_0x535c('0x8')](_0x535c('0x19'),[_0x4d42c9,_0x45df9c,_0x50f1dd],function(_0x4d7178,_0x3eb835){if(_0x4d7178)throw _0x4d7178;_0x42e0e2[_0x535c('0x5')](0xc8)[_0x535c('0x6')]({'success':_0x3eb835[_0x535c('0x15')]?!![]:![],'result':_0x3eb835});});});module[_0x535c('0x1a')]=router;