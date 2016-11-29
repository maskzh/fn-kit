!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.fnKit=t():e.fnKit=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),f=o(i),c=n(2),a=o(c),l=n(3),d=o(l),s=n(4),p=o(s),y=n(5),v=o(y),b=n(6),j=o(b),_=n(7),m=o(_),O=n(8),h=o(O),g=n(9),M=o(g),P=n(10),S=o(P),x=n(11),T=r(x);e.exports=u({copy:f["default"],debounce:a["default"],genId:d["default"],getSingle:p["default"],hasSomeProperties:v["default"],immediate:j["default"],numberFormat:m["default"],objectToQueryString:h["default"],queryStringToObject:M["default"],throttle:S["default"]},T)},function(e,t){"use strict";function n(e,t){var o=function(){function e(e,n){return t(e)===n}function t(e){return n[Object.prototype.toString.call(e)]||"object"}var n={},r=["Null","Undefined","Number","Boolean","String","Object","Function","Array","RegExp","Date"];return r.forEach(function(e){n["[object "+e+"]"]=e.toLowerCase()}),{isType:e,getType:t}}();if(null===e||"object"!==("undefined"==typeof e?"undefined":r(e)))return e;var u,i,f,c=o.isType(e,"array")?[]:{};for(u in e)i=e[u],f=o.getType(i),!t||"array"!==f&&"object"!==f?c[u]=i:c[u]=n(i);return c}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t["default"]=n},function(e,t){"use strict";function n(e){var t=arguments.length<=1||void 0===arguments[1]?500:arguments[1],n=arguments[2],r=null;return function(){r&&clearTimeout(r);var o=arguments;r=setTimeout(function(){e.apply(n,o)},t)}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t){"use strict";function n(e,t,n){for(null==e&&(e=32),null==t&&(t=""),null==n&&(n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");e-- >0;)t+=n.charAt(Math.floor(Math.random()*n.length));return t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t){"use strict";function n(e,t){var n=void 0;return function(){return n||(n=e.apply(t,arguments))}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t){"use strict";function n(e){var t=!1;for(var n in e)e.hasOwnProperty(n)&&(t=!0);return t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t){"use strict";function n(e){var t=arguments.length<=1||void 0===arguments[1]?500:arguments[1],n=arguments[2],r=null,o=!0;return function(){var u=arguments;o&&(e.apply(n,u),o=!1),r&&clearTimeout(r),r=setTimeout(function(){o=!0},t)}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t){"use strict";function n(e,t,n,r){e=(e+"").replace(/[^0-9+-Ee.]/g,"");var o=isFinite(+e)?+e:0,u=isFinite(+t)?Math.abs(t):0,i="undefined"==typeof r?",":r,f="undefined"==typeof n?".":n,c="",a=function(e,t){var n=Math.pow(10,t);return""+Math.floor(e*n)/n};c=(u?a(o,u):""+Math.round(o)).split(".");for(var l=/(-?\d+)(\d{3})/;l.test(c[0]);)c[0]=c[0].replace(l,"$1"+i+"$2");return(c[1]||"").length<u&&(c[1]=c[1]||"",c[1]+=new Array(u-c[1].length+1).join("0")),c.join(f)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t){"use strict";function n(e){return Object.keys(JSON.parse(JSON.stringify(e))).reduce(function(t,n){return t.concat(n+"="+e[n])},[]).join("&")}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t){"use strict";function n(e){return e.replace(/(^\?)/,"").split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t){"use strict";function n(e){var t=arguments.length<=1||void 0===arguments[1]?500:arguments[1],n=arguments[2],r=!0;return function(){var o=arguments;r&&(e.apply(n,o),r=!1,setTimeout(function(){r=!0},t))}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t){"use strict";function n(e){return/^(((13[0-9]{1})|15[0-9]{1}|18[0-9]{1}|17[0-9]{1})+\d{8})$/.test(e)}function r(e){return/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isMobilePhoneNumber=n,t.isEmail=r}])});
//# sourceMappingURL=fn-kit.js.map