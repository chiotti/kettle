this.wp=this.wp||{},this.wp.keycodes=function(t){var n={};function r(e){if(n[e])return n[e].exports;var u=n[e]={i:e,l:!1,exports:{}};return t[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=196)}({1:function(t,n){!function(){t.exports=this.wp.i18n}()},15:function(t,n,r){"use strict";function e(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}r.d(n,"a",function(){return e})},19:function(t,n,r){"use strict";var e=r(32);function u(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||Object(e.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(n,"a",function(){return u})},196:function(t,n,r){"use strict";r.r(n);var e=r(15),u=r(19),c=r(2),o=r(1);function i(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:window).navigator.platform;return-1!==t.indexOf("Mac")||Object(c.includes)(["iPad","iPhone"],t)}r.d(n,"BACKSPACE",function(){return a}),r.d(n,"TAB",function(){return f}),r.d(n,"ENTER",function(){return d}),r.d(n,"ESCAPE",function(){return l}),r.d(n,"SPACE",function(){return s}),r.d(n,"LEFT",function(){return b}),r.d(n,"UP",function(){return O}),r.d(n,"RIGHT",function(){return j}),r.d(n,"DOWN",function(){return p}),r.d(n,"DELETE",function(){return h}),r.d(n,"F10",function(){return v}),r.d(n,"ALT",function(){return y}),r.d(n,"CTRL",function(){return m}),r.d(n,"COMMAND",function(){return A}),r.d(n,"SHIFT",function(){return g}),r.d(n,"modifiers",function(){return w}),r.d(n,"rawShortcut",function(){return C}),r.d(n,"displayShortcutList",function(){return S}),r.d(n,"displayShortcut",function(){return E}),r.d(n,"shortcutAriaLabel",function(){return P}),r.d(n,"isKeyboardEvent",function(){return _});var a=8,f=9,d=13,l=27,s=32,b=37,O=38,j=39,p=40,h=46,v=121,y="alt",m="ctrl",A="meta",g="shift",w={primary:function(t){return t()?[A]:[m]},primaryShift:function(t){return t()?[g,A]:[m,g]},primaryAlt:function(t){return t()?[y,A]:[m,y]},secondary:function(t){return t()?[g,y,A]:[m,g,y]},access:function(t){return t()?[m,y]:[g,y]},ctrl:function(){return[m]},alt:function(){return[y]},ctrlShift:function(){return[m,g]},shift:function(){return[g]},shiftAlt:function(){return[g,y]}},C=Object(c.mapValues)(w,function(t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return[].concat(Object(u.a)(t(r)),[n.toLowerCase()]).join("+")}}),S=Object(c.mapValues)(w,function(t){return function(n){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,a=o(),f=(r={},Object(e.a)(r,y,a?"⌥":"Alt"),Object(e.a)(r,m,a?"^":"Ctrl"),Object(e.a)(r,A,"⌘"),Object(e.a)(r,g,a?"⇧":"Shift"),r),d=t(o).reduce(function(t,n){var r=Object(c.get)(f,n,n);return[].concat(Object(u.a)(t),a?[r]:[r,"+"])},[]),l=Object(c.capitalize)(n);return[].concat(Object(u.a)(d),[l])}}),E=Object(c.mapValues)(S,function(t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return t(n,r).join("")}}),P=Object(c.mapValues)(w,function(t){return function(n){var r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,f=a(),d=(r={},Object(e.a)(r,g,"Shift"),Object(e.a)(r,A,f?"Command":"Control"),Object(e.a)(r,m,"Control"),Object(e.a)(r,y,f?"Option":"Alt"),Object(e.a)(r,",",Object(o.__)("Comma")),Object(e.a)(r,".",Object(o.__)("Period")),Object(e.a)(r,"`",Object(o.__)("Backtick")),r);return[].concat(Object(u.a)(t(a)),[n]).map(function(t){return Object(c.capitalize)(Object(c.get)(d,t,t))}).join(f?" ":" + ")}}),_=Object(c.mapValues)(w,function(t){return function(n,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,u=t(e);return!!u.every(function(t){return n["".concat(t,"Key")]})&&(r?n.key===r:Object(c.includes)(u,n.key.toLowerCase()))}})},2:function(t,n){!function(){t.exports=this.lodash}()},32:function(t,n,r){"use strict";function e(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}r.d(n,"a",function(){return e})}});