var _0x5afb=['exports','mysql','js-yaml','safeLoad','readFileSync','/config.yml','createPool','gral','app','host','localhost','production','database'];(function(_0x85736c,_0x513baa){var _0x4d7e61=function(_0x4c8c94){while(--_0x4c8c94){_0x85736c['push'](_0x85736c['shift']());}};_0x4d7e61(++_0x513baa);}(_0x5afb,0x11f));var _0x45b8=function(_0x5741f2,_0x24e972){_0x5741f2=_0x5741f2-0x0;var _0x31e786=_0x5afb[_0x5741f2];return _0x31e786;};const mysql=require(_0x45b8('0x0'));const fs=require('fs');const yaml=require(_0x45b8('0x1'));var docYML=yaml[_0x45b8('0x2')](fs[_0x45b8('0x3')](__dirname+_0x45b8('0x4'),'utf-8'));var configYML=JSON['parse'](JSON['stringify'](docYML));var connectionMyql=mysql[_0x45b8('0x5')]({'connectionLimit':0x15e,'host':configYML['app'][_0x45b8('0x6')]['production']?configYML[_0x45b8('0x7')]['mysql'][_0x45b8('0x8')]:_0x45b8('0x9'),'port':configYML[_0x45b8('0x7')]['gral'][_0x45b8('0xa')]?configYML[_0x45b8('0x7')][_0x45b8('0x0')]['port']:0xcea,'user':configYML[_0x45b8('0x7')]['db'][_0x45b8('0x0')]['user'],'password':configYML['app']['db']['mysql']['password'],'database':configYML[_0x45b8('0x7')]['db'][_0x45b8('0x0')][_0x45b8('0xb')],'multipleStatements':!![]});module[_0x45b8('0xc')]=connectionMyql;