var _0x21cc=['database','exports','mysql','js-yaml','safeLoad','readFileSync','/config.yml','parse','createPool','app','gral','production','host','user','password'];(function(_0x4ee6de,_0x757898){var _0x116d8d=function(_0x1ddff7){while(--_0x1ddff7){_0x4ee6de['push'](_0x4ee6de['shift']());}};_0x116d8d(++_0x757898);}(_0x21cc,0x6b));var _0x4ffd=function(_0x49cbd5,_0x32bdf7){_0x49cbd5=_0x49cbd5-0x0;var _0x510f15=_0x21cc[_0x49cbd5];return _0x510f15;};const mysql=require(_0x4ffd('0x0'));const fs=require('fs');const yaml=require(_0x4ffd('0x1'));var docYML=yaml[_0x4ffd('0x2')](fs[_0x4ffd('0x3')](__dirname+_0x4ffd('0x4'),'utf-8'));var configYML=JSON[_0x4ffd('0x5')](JSON['stringify'](docYML));var connectionMyql=mysql[_0x4ffd('0x6')]({'connectionLimit':0xc8,'host':configYML[_0x4ffd('0x7')][_0x4ffd('0x8')][_0x4ffd('0x9')]?configYML[_0x4ffd('0x7')]['db'][_0x4ffd('0x0')][_0x4ffd('0xa')]:'localhost','port':configYML[_0x4ffd('0x7')][_0x4ffd('0x8')]['production']?configYML[_0x4ffd('0x7')]['db'][_0x4ffd('0x0')]['port']:0xcea,'user':configYML['app']['db'][_0x4ffd('0x0')][_0x4ffd('0xb')],'password':configYML[_0x4ffd('0x7')]['db'][_0x4ffd('0x0')][_0x4ffd('0xc')],'database':configYML[_0x4ffd('0x7')]['db'][_0x4ffd('0x0')][_0x4ffd('0xd')],'multipleStatements':!![]});module[_0x4ffd('0xe')]=connectionMyql;