var _0x2776=['user','password','database','exports','mysql','js-yaml','readFileSync','./server/config.yml','parse','stringify','createPool','app','gral','production'];(function(_0x287b2e,_0x36ccef){var _0xb50d9f=function(_0x4bc624){while(--_0x4bc624){_0x287b2e['push'](_0x287b2e['shift']());}};_0xb50d9f(++_0x36ccef);}(_0x2776,0x66));var _0x60ed=function(_0x46fb6c,_0x366980){_0x46fb6c=_0x46fb6c-0x0;var _0x16bd68=_0x2776[_0x46fb6c];return _0x16bd68;};const mysql=require(_0x60ed('0x0'));const fs=require('fs');const yaml=require(_0x60ed('0x1'));var docYML=yaml['safeLoad'](fs[_0x60ed('0x2')](_0x60ed('0x3'),'utf-8'));var configYML=JSON[_0x60ed('0x4')](JSON[_0x60ed('0x5')](docYML));var connectionMyql=mysql[_0x60ed('0x6')]({'connectionLimit':0xc8,'host':configYML[_0x60ed('0x7')][_0x60ed('0x8')][_0x60ed('0x9')]?configYML[_0x60ed('0x7')]['db'][_0x60ed('0x0')]['host']:'localhost','port':configYML[_0x60ed('0x7')][_0x60ed('0x8')][_0x60ed('0x9')]?configYML['app']['db'][_0x60ed('0x0')]['port']:0xcea,'user':configYML[_0x60ed('0x7')]['db'][_0x60ed('0x0')][_0x60ed('0xa')],'password':configYML[_0x60ed('0x7')]['db'][_0x60ed('0x0')][_0x60ed('0xb')],'database':configYML['app']['db'][_0x60ed('0x0')][_0x60ed('0xc')],'multipleStatements':!![]});module[_0x60ed('0xd')]=connectionMyql;