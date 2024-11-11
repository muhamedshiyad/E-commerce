var e,t,o,n,r={7507:(e,t,o)=>{(()=>{var t={2584:e=>{e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},4184:(e,t)=>{var o;!function(){var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)){if(o.length){var s=r.apply(null,o);s&&e.push(s)}}else if("object"===i){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var a in o)n.call(o,a)&&o[a]&&e.push(a)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=(function(){return r}).apply(t,[]))||(e.exports=o)}()},8514:(e,t,o)=>{var n=o(6115);e.exports=function(e,t,o){e&&n(function(){e.apply(o||null,t||[])})}},5229:(e,t,o)=>{var n=o(2584),r=o(8514);e.exports=function(e,t){var o=t||{},i={};return void 0===e&&(e={}),e.on=function(t,o){return i[t]?i[t].push(o):i[t]=[o],e},e.once=function(t,o){return o._once=!0,e.on(t,o),e},e.off=function(t,o){var n=arguments.length;if(1===n)delete i[t];else if(0===n)i={};else{var r=i[t];if(!r)return e;r.splice(r.indexOf(o),1)}return e},e.emit=function(){var t=n(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var s=(i[t]||[]).slice(0);return function(){var i=n(arguments),a=this||e;if("error"===t&&!1!==o.throws&&!s.length)throw 1===i.length?i[0]:i;return s.forEach(function(n){o.async?r(n,i,a):n.apply(a,i),n._once&&e.off(t,n)}),e}},e}},3285:(e,t,o)=>{o(8691),e.exports=o(4579).Array.isArray},6981:(e,t,o)=>{o(2699),e.exports=o(4579).Object.assign},5627:(e,t,o)=>{o(6760);var n=o(4579).Object;e.exports=function(e,t){return n.create(e,t)}},7965:(e,t,o)=>{o(520),e.exports=o(4579).Object.entries},8613:(e,t,o)=>{o(961),e.exports=o(4579).Object.keys},433:(e,t,o)=>{o(9349),e.exports=o(4579).Object.setPrototypeOf},5663:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},2159:(e,t,o)=>{var n=o(6727);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},7428:(e,t,o)=>{var n=o(7932),r=o(8728),i=o(6531);e.exports=function(e){return function(t,o,s){var a,l=n(t),c=r(l.length),d=i(s,c);if(e&&o!=o){for(;c>d;)if((a=l[d++])!=a)return!0}else for(;c>d;d++)if((e||d in l)&&l[d]===o)return e||d||0;return!e&&-1}}},2894:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},4579:e=>{var t=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=t)},9216:(e,t,o)=>{var n=o(5663);e.exports=function(e,t,o){if(n(e),void 0===t)return e;switch(o){case 1:return function(o){return e.call(t,o)};case 2:return function(o,n){return e.call(t,o,n)};case 3:return function(o,n,r){return e.call(t,o,n,r)}}return function(){return e.apply(t,arguments)}}},8333:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},9666:(e,t,o)=>{e.exports=!o(7929)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},7467:(e,t,o)=>{var n=o(6727),r=o(3938).document,i=n(r)&&n(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},3338:e=>{e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},3856:(e,t,o)=>{var n=o(3938),r=o(4579),i=o(9216),s=o(1818),a=o(7069),l="prototype",c=function(e,t,o){var d,h,u,p=e&c.F,f=e&c.G,m=e&c.S,g=e&c.P,b=e&c.B,v=e&c.W,y=f?r:r[t]||(r[t]={}),w=y[l],C=f?n:m?n[t]:(n[t]||{})[l];for(d in f&&(o=t),o)(h=!p&&C&&void 0!==C[d])&&a(y,d)||(u=h?C[d]:o[d],y[d]=f&&"function"!=typeof C[d]?o[d]:b&&h?i(u,n):v&&C[d]==u?function(e){var t=function(t,o,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,o)}return new e(t,o,n)}return e.apply(this,arguments)};return t[l]=e[l],t}(u):g&&"function"==typeof u?i(Function.call,u):u,g&&((y.virtual||(y.virtual={}))[d]=u,e&c.R&&w&&!w[d]&&s(w,d,u)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},7929:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},3938:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},7069:e=>{var t={}.hasOwnProperty;e.exports=function(e,o){return t.call(e,o)}},1818:(e,t,o)=>{var n=o(4743),r=o(3101);e.exports=o(9666)?function(e,t,o){return n.f(e,t,r(1,o))}:function(e,t,o){return e[t]=o,e}},4881:(e,t,o)=>{var n=o(3938).document;e.exports=n&&n.documentElement},3758:(e,t,o)=>{e.exports=!o(9666)&&!o(7929)(function(){return 7!=Object.defineProperty(o(7467)("div"),"a",{get:function(){return 7}}).a})},799:(e,t,o)=>{var n=o(2894);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},1421:(e,t,o)=>{var n=o(2894);e.exports=Array.isArray||function(e){return"Array"==n(e)}},6727:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},6227:e=>{e.exports=!0},8082:(e,t,o)=>{var n=o(9666),r=o(6162),i=o(8195),s=o(6274),a=o(6530),l=o(799),c=Object.assign;e.exports=!c||o(7929)(function(){var e={},t={},o=Symbol(),n="abcdefghijklmnopqrst";return e[o]=7,n.split("").forEach(function(e){t[e]=e}),7!=c({},e)[o]||Object.keys(c({},t)).join("")!=n})?function(e,t){for(var o=a(e),c=arguments.length,d=1,h=i.f,u=s.f;c>d;)for(var p,f=l(arguments[d++]),m=h?r(f).concat(h(f)):r(f),g=m.length,b=0;g>b;)p=m[b++],n&&!u.call(f,p)||(o[p]=f[p]);return o}:c},526:(e,t,o)=>{var n=o(2159),r=o(7856),i=o(3338),s=o(8989)("IE_PROTO"),a=function(){},l="prototype",c=function(){var e,t=o(7467)("iframe"),n=i.length;for(t.style.display="none",o(4881).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object</script>"),e.close(),c=e.F;n--;)delete c[l][i[n]];return c()};e.exports=Object.create||function(e,t){var o;return null!==e?(a[l]=n(e),o=new a,a[l]=null,o[s]=e):o=c(),void 0===t?o:r(o,t)}},4743:(e,t,o)=>{var n=o(2159),r=o(3758),i=o(3206),s=Object.defineProperty;t.f=o(9666)?Object.defineProperty:function(e,t,o){if(n(e),t=i(t,!0),n(o),r)try{return s(e,t,o)}catch(e){}if("get"in o||"set"in o)throw TypeError("Accessors not supported!");return"value"in o&&(e[t]=o.value),e}},7856:(e,t,o)=>{var n=o(4743),r=o(2159),i=o(6162);e.exports=o(9666)?Object.defineProperties:function(e,t){r(e);for(var o,s=i(t),a=s.length,l=0;a>l;)n.f(e,o=s[l++],t[o]);return e}},6183:(e,t,o)=>{var n=o(6274),r=o(3101),i=o(7932),s=o(3206),a=o(7069),l=o(3758),c=Object.getOwnPropertyDescriptor;t.f=o(9666)?c:function(e,t){if(e=i(e),t=s(t,!0),l)try{return c(e,t)}catch(e){}if(a(e,t))return r(!n.f.call(e,t),e[t])}},8195:(e,t)=>{t.f=Object.getOwnPropertySymbols},2963:(e,t,o)=>{var n=o(7069),r=o(7932),i=o(7428)(!1),s=o(8989)("IE_PROTO");e.exports=function(e,t){var o,a=r(e),l=0,c=[];for(o in a)o!=s&&n(a,o)&&c.push(o);for(;t.length>l;)n(a,o=t[l++])&&(~i(c,o)||c.push(o));return c}},6162:(e,t,o)=>{var n=o(2963),r=o(3338);e.exports=Object.keys||function(e){return n(e,r)}},6274:(e,t)=>{t.f=({}).propertyIsEnumerable},4938:(e,t,o)=>{var n=o(3856),r=o(4579),i=o(7929);e.exports=function(e,t){var o=(r.Object||{})[e]||Object[e],s={};s[e]=t(o),n(n.S+n.F*i(function(){o(1)}),"Object",s)}},2050:(e,t,o)=>{var n=o(9666),r=o(6162),i=o(7932),s=o(6274).f;e.exports=function(e){return function(t){for(var o,a=i(t),l=r(a),c=l.length,d=0,h=[];c>d;)o=l[d++],n&&!s.call(a,o)||h.push(e?[o,a[o]]:a[o]);return h}}},3101:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2906:(e,t,o)=>{var n=o(6727),r=o(2159),i=function(e,t){if(r(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=o(9216)(Function.call,o(6183).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,o){return i(e,o),t?e.__proto__=o:n(e,o),e}}({},!1):void 0),check:i}},8989:(e,t,o)=>{var n=o(250)("keys"),r=o(5730);e.exports=function(e){return n[e]||(n[e]=r(e))}},250:(e,t,o)=>{var n=o(4579),r=o(3938),i="__core-js_shared__",s=r[i]||(r[i]={});(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:o(6227)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},6531:(e,t,o)=>{var n=o(1052),r=Math.max,i=Math.min;e.exports=function(e,t){return(e=n(e))<0?r(e+t,0):i(e,t)}},1052:e=>{var t=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?o:t)(e)}},7932:(e,t,o)=>{var n=o(799),r=o(8333);e.exports=function(e){return n(r(e))}},8728:(e,t,o)=>{var n=o(1052),r=Math.min;e.exports=function(e){return e>0?r(n(e),9007199254740991):0}},6530:(e,t,o)=>{var n=o(8333);e.exports=function(e){return Object(n(e))}},3206:(e,t,o)=>{var n=o(6727);e.exports=function(e,t){var o,r;if(!n(e))return e;if(t&&"function"==typeof(o=e.toString)&&!n(r=o.call(e))||"function"==typeof(o=e.valueOf)&&!n(r=o.call(e))||!t&&"function"==typeof(o=e.toString)&&!n(r=o.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},5730:e=>{var t=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+o).toString(36))}},8691:(e,t,o)=>{var n=o(3856);n(n.S,"Array",{isArray:o(1421)})},2699:(e,t,o)=>{var n=o(3856);n(n.S+n.F,"Object",{assign:o(8082)})},6760:(e,t,o)=>{var n=o(3856);n(n.S,"Object",{create:o(526)})},961:(e,t,o)=>{var n=o(6530),r=o(6162);o(4938)("keys",function(){return function(e){return r(n(e))}})},9349:(e,t,o)=>{var n=o(3856);n(n.S,"Object",{setPrototypeOf:o(2906).set})},520:(e,t,o)=>{var n=o(3856),r=o(2050)(!0);n(n.S,"Object",{entries:function(e){return r(e)}})},1808:(e,t,o)=>{var n=o(9638),r=o(4874),i=o.g.document,s=function(e,t,o,n){return e.addEventListener(t,o,n)},a=function(e,t,o,n){return e.removeEventListener(t,o,n)},l=[];function c(e,t,o){var n=function(e,t,o){var n,r;for(n=0;n<l.length;n++)if((r=l[n]).element===e&&r.type===t&&r.fn===o)return n}(e,t,o);if(n){var r=l[n].wrapper;return l.splice(n,1),r}}o.g.addEventListener||(s=function(e,t,n){var r;return e.attachEvent("on"+t,(r=c(e,t,n)||function(t){var r=t||o.g.event;r.target=r.target||r.srcElement,r.preventDefault=r.preventDefault||function(){r.returnValue=!1},r.stopPropagation=r.stopPropagation||function(){r.cancelBubble=!0},r.which=r.which||r.keyCode,n.call(e,r)},l.push({wrapper:r,element:e,type:t,fn:n}),r))},a=function(e,t,o){var n=c(e,t,o);if(n)return e.detachEvent("on"+t,n)}),e.exports={add:s,remove:a,fabricate:function(e,t,o){var s,a=-1===r.indexOf(t)?new n(t,{detail:o}):(i.createEvent?(s=i.createEvent("Event")).initEvent(t,!0,!0):i.createEventObject&&(s=i.createEventObject()),s);e.dispatchEvent?e.dispatchEvent(a):e.fireEvent("on"+t,a)}}},4874:(e,t,o)=>{var n=[],r="",i=/^on/;for(r in o.g)i.test(r)&&n.push(r.slice(2));e.exports=n},9638:(e,t,o)=>{var n=o.g.CustomEvent;e.exports=!function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?"function"==typeof document.createEvent?function(e,t){var o=document.createEvent("CustomEvent");return t?o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):o.initCustomEvent(e,!1,!1,void 0),o}:function(e,t){var o=document.createEventObject();return o.type=e,t?(o.bubbles=!!t.bubbles,o.cancelable=!!t.cancelable,o.detail=t.detail):(o.bubbles=!1,o.cancelable=!1,o.detail=void 0),o}:n},3249:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=void 0;var r=function(){};n(o(139)).default&&(r=document.addEventListener?function(e,t,o,n){return e.removeEventListener(t,o,n||!1)}:document.attachEvent?function(e,t,o){return e.detachEvent("on"+t,o)}:void 0);var i=r;t.default=i,e.exports=t.default},1416:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=void 0;var r=function(){};n(o(139)).default&&(r=document.addEventListener?function(e,t,o,n){return e.addEventListener(t,o,n||!1)}:document.attachEvent?function(e,t,o){return e.attachEvent("on"+t,function(t){(t=t||window.event).target=t.target||t.srcElement,t.currentTarget=e,o.call(e,t)})}:void 0);var i=r;t.default=i,e.exports=t.default},9981:(e,t)=>{t.__esModule=!0,t.default=function(e){return e&&e.ownerDocument||document},e.exports=t.default},1629:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=void 0;var r=n(o(139)).default?function(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):i(e,t)}:i;function i(e,t){if(t)do if(t===e)return!0;while(t=t.parentNode)return!1}t.default=r,e.exports=t.default},7624:(e,t)=>{t.__esModule=!0,t.default=function(e){return e===e.window?e:9===e.nodeType&&(e.defaultView||e.parentWindow)},e.exports=t.default},2565:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e){var t=(0,s.default)(e),o=(0,i.default)(t),n=t&&t.documentElement,a={top:0,left:0,height:0,width:0};if(t)return(0,r.default)(n,e)?(void 0!==e.getBoundingClientRect&&(a=e.getBoundingClientRect()),{top:a.top+(o.pageYOffset||n.scrollTop)-(n.clientTop||0),left:a.left+(o.pageXOffset||n.scrollLeft)-(n.clientLeft||0),width:(null==a.width?e.offsetWidth:a.width)||0,height:(null==a.height?e.offsetHeight:a.height)||0}):a};var r=n(o(1629)),i=n(o(7624)),s=n(o(9981));e.exports=t.default},2939:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e){for(var t=(0,r.default)(e),o=e&&e.offsetParent;o&&"html"!==(e.nodeName&&e.nodeName.toLowerCase())&&"static"===(0,i.default)(o,"position");)o=o.offsetParent;return o||t.documentElement};var r=n(o(9981)),i=n(o(162));e.exports=t.default},7265:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e,t){var o,n,d={top:0,left:0};return"fixed"===(0,c.default)(e,"position")?n=e.getBoundingClientRect():(t=t||(0,s.default)(e),n=(0,i.default)(e),"html"!==((o=t).nodeName&&o.nodeName.toLowerCase())&&(d=(0,i.default)(t)),d.top+=parseInt((0,c.default)(t,"borderTopWidth"),10)-(0,a.default)(t)||0,d.left+=parseInt((0,c.default)(t,"borderLeftWidth"),10)-(0,l.default)(t)||0),(0,r.default)({},n,{top:n.top-d.top-(parseInt((0,c.default)(e,"marginTop"),10)||0),left:n.left-d.left-(parseInt((0,c.default)(e,"marginLeft"),10)||0)})};var r=n(o(434)),i=n(o(2565)),s=n(o(2939)),a=n(o(504)),l=n(o(5770)),c=n(o(162));e.exports=t.default},5770:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e,t){var o=(0,r.default)(e);if(void 0===t)return o?"pageXOffset"in o?o.pageXOffset:o.document.documentElement.scrollLeft:e.scrollLeft;o?o.scrollTo(t,"pageYOffset"in o?o.pageYOffset:o.document.documentElement.scrollTop):e.scrollLeft=t};var r=n(o(7624));e.exports=t.default},504:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e,t){var o=(0,r.default)(e);if(void 0===t)return o?"pageYOffset"in o?o.pageYOffset:o.document.documentElement.scrollTop:e.scrollTop;o?o.scrollTo("pageXOffset"in o?o.pageXOffset:o.document.documentElement.scrollLeft,t):e.scrollTop=t};var r=n(o(7624));e.exports=t.default},7023:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e){if(!e)throw TypeError("No Element passed to `getComputedStyle()`");var t=e.ownerDocument;return"defaultView"in t?t.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):window.getComputedStyle(e,null):{getPropertyValue:function(t){var o=e.style;"float"==(t=(0,r.default)(t))&&(t="styleFloat");var n=e.currentStyle[t]||null;if(null==n&&o&&o[t]&&(n=o[t]),s.test(n)&&!i.test(t)){var a=o.left,l=e.runtimeStyle,c=l&&l.left;c&&(l.left=e.currentStyle.left),o.left="fontSize"===t?"1em":n,n=o.pixelLeft+"px",o.left=a,c&&(l.left=c)}return n}}};var r=n(o(3497)),i=/^(top|right|bottom|left)$/,s=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;e.exports=t.default},162:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e,t,o){var n="",d="",h=t;if("string"==typeof t){if(void 0===o)return e.style[(0,r.default)(t)]||(0,s.default)(e).getPropertyValue((0,i.default)(t));(h={})[t]=o}Object.keys(h).forEach(function(t){var o=h[t];o||0===o?(0,c.default)(t)?d+=t+"("+o+") ":n+=(0,i.default)(t)+": "+o+";":(0,a.default)(e,(0,i.default)(t))}),d&&(n+=l.transform+": "+d+";"),e.style.cssText+=";"+n};var r=n(o(3497)),i=n(o(4403)),s=n(o(7023)),a=n(o(1760)),l=o(702),c=n(o(3293));e.exports=t.default},1760:(e,t)=>{t.__esModule=!0,t.default=function(e,t){return"removeProperty"in e.style?e.style.removeProperty(t):e.style.removeAttribute(t)},e.exports=t.default},3293:(e,t)=>{t.__esModule=!0,t.default=function(e){return!(!e||!o.test(e))};var o=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;e.exports=t.default},702:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var r,i,s,a,l,c,d,h,u,p,f,m=n(o(139)),g="transform";if(t.transform=g,t.animationEnd=s,t.transitionEnd=i,t.transitionDelay=d,t.transitionTiming=c,t.transitionDuration=l,t.transitionProperty=a,t.animationDelay=f,t.animationTiming=p,t.animationDuration=u,t.animationName=h,m.default){var b=function(){for(var e,t,o=document.createElement("div").style,n={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},r=Object.keys(n),i="",s=0;s<r.length;s++){var a=r[s];if(a+"TransitionProperty" in o){i="-"+a.toLowerCase(),e=n[a]("TransitionEnd"),t=n[a]("AnimationEnd");break}}return!e&&"transitionProperty"in o&&(e="transitionend"),!t&&"animationName"in o&&(t="animationend"),o=null,{animationEnd:t,transitionEnd:e,prefix:i}}();r=b.prefix,t.transitionEnd=i=b.transitionEnd,t.animationEnd=s=b.animationEnd,t.transform=g=r+"-"+g,t.transitionProperty=a=r+"-transition-property",t.transitionDuration=l=r+"-transition-duration",t.transitionDelay=d=r+"-transition-delay",t.transitionTiming=c=r+"-transition-timing-function",t.animationName=h=r+"-animation-name",t.animationDuration=u=r+"-animation-duration",t.animationTiming=p=r+"-animation-delay",t.animationDelay=f=r+"-animation-timing-function"}var v={transform:g,end:i,property:a,timing:c,delay:d,duration:l};t.default=v},1908:(e,t)=>{t.__esModule=!0,t.default=function(e){return e.replace(o,function(e,t){return t.toUpperCase()})};var o=/-(.)/g;e.exports=t.default},3497:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e){return(0,r.default)(e.replace(i,"ms-"))};var r=n(o(1908)),i=/^-ms-/;e.exports=t.default},1185:(e,t)=>{t.__esModule=!0,t.default=function(e){return e.replace(o,"-$1").toLowerCase()};var o=/([A-Z])/g;e.exports=t.default},4403:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e){return(0,r.default)(e).replace(i,"-ms-")};var r=n(o(1185)),i=/^ms-/;e.exports=t.default},139:(e,t)=>{t.__esModule=!0,t.default=void 0;var o=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=o,e.exports=t.default},9425:e=>{var t={};function o(e){var o=t[e];return o?o.lastIndex=0:t[e]=o=RegExp("(?:^|\\s)"+e+"(?:\\s|$)","g"),o}e.exports={add:function(e,t){var n=e.className;n.length?o(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(o(t)," ").trim()}}},7137:(e,t,o)=>{var n=o(5229),r=o(1808),i=o(9425),s=document,a=s.documentElement;function l(e,t,n,i){o.g.navigator.pointerEnabled?r[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[n],i):o.g.navigator.msPointerEnabled?r[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[n],i):(r[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[n],i),r[t](e,n,i))}function c(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function d(e,t){return void 0!==o.g[t]?o.g[t]:a.clientHeight?a[e]:s.body[e]}function h(e,t,o){var n,r=e||{},i=r.className;return r.className+=" gu-hide",n=s.elementFromPoint(t,o),r.className=i,n}function u(){return!1}function p(){return!0}function f(e){return e.width||e.right-e.left}function m(e){return e.height||e.bottom-e.top}function g(e){return e.parentNode===s?null:e.parentNode}function b(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(t){return!!t&&"false"!==t.contentEditable&&("true"===t.contentEditable||e(g(t)))}(e)}function v(e){return e.nextElementSibling||function(){var t=e;do t=t.nextSibling;while(t&&1!==t.nodeType)return t}()}function y(e,t){var o=t.targetTouches&&t.targetTouches.length?t.targetTouches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,n={pageX:"clientX",pageY:"clientY"};return e in n&&!(e in o)&&n[e]in o&&(e=n[e]),o[e]}e.exports=function(e,t){1==arguments.length&&!1===Array.isArray(e)&&(t=e,e=[]);var o,w,C,S,x,_,R,T,k,E,O,I,M=null,D=t||{};void 0===D.moves&&(D.moves=p),void 0===D.accepts&&(D.accepts=p),void 0===D.invalid&&(D.invalid=function(){return!1}),void 0===D.containers&&(D.containers=e||[]),void 0===D.isContainer&&(D.isContainer=u),void 0===D.copy&&(D.copy=!1),void 0===D.copySortSource&&(D.copySortSource=!1),void 0===D.revertOnSpill&&(D.revertOnSpill=!1),void 0===D.removeOnSpill&&(D.removeOnSpill=!1),void 0===D.direction&&(D.direction="vertical"),void 0===D.ignoreInputTextSelection&&(D.ignoreInputTextSelection=!0),void 0===D.mirrorContainer&&(D.mirrorContainer=s.body);var A=n({containers:D.containers,start:function(e){var t=W(e);t&&G(t)},end:B,cancel:q,remove:Z,destroy:function(){P(!0),V({})},canMove:function(e){return!!W(e)},dragging:!1});return!0===D.removeOnSpill&&A.on("over",function(e){i.rm(e,"gu-hide")}).on("out",function(e){A.dragging&&i.add(e,"gu-hide")}),P(),A;function $(e){return -1!==A.containers.indexOf(e)||D.isContainer(e)}function P(e){var t=e?"remove":"add";l(a,t,"mousedown",L),l(a,t,"mouseup",V)}function N(e){l(a,e?"remove":"add","mousemove",F)}function z(e){var t=e?"remove":"add";r[t](a,"selectstart",H),r[t](a,"click",H)}function H(e){I&&e.preventDefault()}function L(e){if(_=e.clientX,R=e.clientY,!(1!==c(e)||e.metaKey||e.ctrlKey)){var t=e.target,o=W(t);o&&(I=o,N(),"mousedown"===e.type&&(b(t)?t.focus():e.preventDefault()))}}function F(e){if(I){if(0!==c(e)){if(void 0===e.clientX||e.clientX!==_||void 0===e.clientY||e.clientY!==R){if(D.ignoreInputTextSelection){var t=y("clientX",e),n=y("clientY",e);if(b(s.elementFromPoint(t,n)))return}var r=I;N(!0),z(),B(),G(r);var h,u={left:(h=C.getBoundingClientRect()).left+d("scrollLeft","pageXOffset"),top:h.top+d("scrollTop","pageYOffset")};S=y("pageX",e)-u.left,x=y("pageY",e)-u.top,i.add(E||C,"gu-transit"),function(){if(!o){var e=C.getBoundingClientRect();(o=C.cloneNode(!0)).style.width=f(e)+"px",o.style.height=m(e)+"px",i.rm(o,"gu-transit"),i.add(o,"gu-mirror"),D.mirrorContainer.appendChild(o),l(a,"add","mousemove",X),i.add(D.mirrorContainer,"gu-unselectable"),A.emit("cloned",o,C,"mirror")}}(),X(e)}}else V({})}}function W(e){if(!(A.dragging&&o||$(e))){for(var t=e;g(e)&&!1===$(g(e));)if(D.invalid(e,t)||!(e=g(e)))return;var n=g(e);if(n&&!D.invalid(e,t)&&D.moves(e,n,t,v(e)))return{item:e,source:n}}}function G(e){var t,o;t=e.item,o=e.source,("boolean"==typeof D.copy?D.copy:D.copy(t,o))&&(E=e.item.cloneNode(!0),A.emit("cloned",E,e.item,"copy")),w=e.source,C=e.item,T=k=v(e.item),A.dragging=!0,A.emit("drag",C,w)}function B(){if(A.dragging){var e=E||C;j(e,g(e))}}function U(){I=!1,N(!0),z(!0)}function V(e){if(U(),A.dragging){var t=E||C,n=y("clientX",e),r=y("clientY",e),i=Q(h(o,n,r),n,r);i&&(E&&D.copySortSource||!E||i!==w)?j(t,i):D.removeOnSpill?Z():q()}}function j(e,t){var o=g(e);E&&D.copySortSource&&t===w&&o.removeChild(C),Y(t)?A.emit("cancel",e,w,w):A.emit("drop",e,t,w,k),K()}function Z(){if(A.dragging){var e=E||C,t=g(e);t&&t.removeChild(e),A.emit(E?"cancel":"remove",e,t,w),K()}}function q(e){if(A.dragging){var t=arguments.length>0?e:D.revertOnSpill,o=E||C,n=g(o),r=Y(n);!1===r&&t&&(E?n&&n.removeChild(E):w.insertBefore(o,T)),r||t?A.emit("cancel",o,w,w):A.emit("drop",o,n,w,k),K()}}function K(){var e=E||C;U(),o&&(i.rm(D.mirrorContainer,"gu-unselectable"),l(a,"remove","mousemove",X),g(o).removeChild(o),o=null),e&&i.rm(e,"gu-transit"),O&&clearTimeout(O),A.dragging=!1,M&&A.emit("out",e,M,w),A.emit("dragend",e),w=C=E=T=k=O=M=null}function Y(e,t){var n;return n=void 0!==t?t:o?k:v(E||C),e===w&&n===T}function Q(e,t,o){for(var n=e;n&&!function(){if(!1===$(n))return!1;var r=J(n,e),i=ee(n,r,t,o);return!!Y(n,i)||D.accepts(C,n,w,i)}();)n=g(n);return n}function X(e){if(o){e.preventDefault();var t=y("clientX",e),n=y("clientY",e),r=t-S,i=n-x;o.style.left=r+"px",o.style.top=i+"px";var s=E||C,a=h(o,t,n),l=Q(a,t,n),c=null!==l&&l!==M;(c||null===l)&&(M&&f("out"),M=l,c&&f("over"));var d=g(s);if(l!==w||!E||D.copySortSource){var u,p=J(l,a);if(null!==p)u=ee(l,p,t,n);else{if(!0!==D.revertOnSpill||E)return void(E&&d&&d.removeChild(s));u=T,l=w}(null===u&&c||u!==s&&u!==v(s))&&(k=u,l.insertBefore(s,u),A.emit("shadow",s,l,w))}else d&&d.removeChild(s)}function f(e){A.emit(e,s,M,w)}}function J(e,t){for(var o=t;o!==e&&g(o)!==e;)o=g(o);return o===a?null:o}function ee(e,t,o,n){var r,i="horizontal"===D.direction;return t!==e?(r=t.getBoundingClientRect(),i?o>r.left+f(r)/2?v(t):t:n>r.top+m(r)/2?v(t):t):function(){var t,r,s,a=e.children.length;for(t=0;t<a;t++)if(s=(r=e.children[t]).getBoundingClientRect(),i&&s.left+s.width/2>o||!i&&s.top+s.height/2>n)return r;return null}()}}},9915:(e,t,o)=>{o.d(t,{Z:()=>m});var n=o(4184),r=o.n(n),i=o(6689),s=o.n(i);class a{name;notify;constructor(e,t){this.name=e,this.notify=t}}class l{observer;unsubscribeCallback;constructor(e,t){this.observer=e,this.unsubscribeCallback=t}unsubscribe(){this.unsubscribeCallback(this.observer)}}let c=new class{observers;constructor(){this.observers=new Set}broadcast(e){this.observers&&this.observers.forEach(t=>{e.name===t.name&&t.notify(e)})}subscribe(e,t){let o=new a(e,t);return this.observers.add(o),new l(o,e=>{this.observers.delete(e)})}unsubscribe(e){e&&e.unsubscribe()}},d="ON_DRAG_START",h="ON_DRAG_END",u=null,p=new Map;class f extends s().Component{dndComponentRef=s().createRef();mounted=!1;onDragStartSubscription;onDragEndSubscription;constructor(e){super(e),this.onDragStartSubscription=c.subscribe(d,e=>{let t=null!==e.content&&p.get(e.content);this.setState({isDroppable:this.canDrop(void 0,t,this.props.dndData)})}),this.onDragEndSubscription=c.subscribe(h,()=>{this.mounted&&this.setState({isDroppable:!1})}),this.state={isDragging:!1,isDroppable:!1,isOver:!1}}componentDidMount(){if(this.mounted=!0,null!==u){let e=p.get(u);this.setState({isDroppable:this.canDrop(void 0,e,this.props.dndData)})}}componentWillUnmount(){this.mounted=!1,this.onDragStartSubscription.unsubscribe(),this.onDragEndSubscription.unsubscribe()}canDrop(e,t,o){let{canDrop:n}=this.props;return n&&("boolean"==typeof n||n(e,t,o))}addDragEndEventListenerOnce(){let e=this.dndComponentRef?.current;e&&(e.removeEventListener("dragend",this.onDragEnd),e.addEventListener("dragend",this.onDragEnd,{once:!0}))}isDraggable(){let{canDrag:e,dndData:t}=this.props;return!!e&&("boolean"==typeof e||e(t))}onDragEnter(e){if(e.stopPropagation(),this.setState({isOver:!0}),this.props.onDragEnter){let t=p.get(u);this.props.onDragEnter(e,t,this.props.dndData)}}onDragLeave(e){e.stopPropagation();let t=p.get(u);this.props.onDragLeave&&this.props.onDragLeave(e,t,this.props.dndData),this.setState({isDroppable:this.canDrop(void 0,t,this.props.dndData),isOver:!1})}onDrag(e){e.stopPropagation()}onDragOver(e){e.stopPropagation();let t=p.get(u);this.canDrop(e,t,this.props.dndData)&&(e.preventDefault(),this.setState({isOver:!0}))}onDragStart(e){e.stopPropagation();let{dndData:t,dndId:o,onBeginDrag:n}=this.props;u=o,p.set(u,t),this.addDragEndEventListenerOnce(),c.broadcast({name:d,content:u}),n&&n(e,t),this.setState({isDragging:!0})}onDragEnd=e=>{e.stopPropagation();let{dndData:t,onEndDrag:o}=this.props;o&&o(e,p.get(u),t),c.broadcast({name:h,content:u}),p.delete(u),u=null,this.mounted&&this.setState({isDragging:!1})};onDrop(e){e.stopPropagation();let{dndData:t,onDrop:o}=this.props;o&&(o(e,p.get(u),t),this.setState({isOver:!1}))}cloneChildrenWithShallowMergedProps(e,t){if(e)return s().Children.map(e,e=>s().isValidElement(e)?s().cloneElement(e,t):e)}render(){let{children:e,className:t,forwardDndPropsToChildren:o,style:n}=this.props,{isDragging:i,isDroppable:a,isOver:l}=this.state,c=this.isDraggable(),d=r()("dnd-component",t,{draggable:c,dragging:i,droppable:a,hovering:l});return s().createElement("div",{className:d,draggable:c,onDrag:e=>this.onDrag(e),onDragEnter:e=>this.onDragEnter(e),onDragLeave:e=>this.onDragLeave(e),onDragOver:e=>this.onDragOver(e),onDragStart:e=>this.onDragStart(e),onDrop:e=>this.onDrop(e),ref:this.dndComponentRef,style:n},o?this.cloneChildrenWithShallowMergedProps(e,{isDraggable:c,isDragging:i,isDroppable:a,isOver:l}):e)}}var m=f},3607:(e,t,o)=>{let n;o.d(t,{Z:()=>rj});var r,i,s,a,l={};o.r(l),o.d(l,{types:()=>n4});var c=o(4184),d=o.n(c),h=o(6689),u=o.n(h);function p(e){switch(e){case 48:break;case 49:return 1;case 50:return 2;case 51:return 3;case 52:return 4;case 53:return 5;case 54:return 6;case 55:return 7;case 56:return 8;case 57:return 9;case 97:case 65:return 10;case 98:case 66:return 11;case 99:case 67:return 12;case 100:case 68:return 13;case 101:case 69:return 14;case 102:case 70:return 15}return 0}function f(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}function m(e){let t,o,n;let r=e.h/360,{s:i,l:s,a:a}=e;if(0===i)t=o=n=s;else{let e=s<.5?s*(1+i):s+i-s*i,a=2*s-e;t=f(a,e,r+1/3),o=f(a,e,r),n=f(a,e,r-1/3)}return{type:"rgba",r:Math.round(255*t),g:Math.round(255*o),b:Math.round(255*n),a:a}}let g=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function b(e){let t;if(0===(e=e.trim()).length)return null;if(35===e.charCodeAt(0))return function(e){let t=(e=e.trim()).length;if(0===t||35!==e.charCodeAt(0))return null;if(7===t)return{type:"rgba",r:16*p(e.charCodeAt(1))+p(e.charCodeAt(2)),g:16*p(e.charCodeAt(3))+p(e.charCodeAt(4)),b:16*p(e.charCodeAt(5))+p(e.charCodeAt(6)),a:1};if(9===t)return{type:"rgba",r:16*p(e.charCodeAt(1))+p(e.charCodeAt(2)),g:16*p(e.charCodeAt(3))+p(e.charCodeAt(4)),b:16*p(e.charCodeAt(5))+p(e.charCodeAt(6)),a:(16*p(e.charCodeAt(7))+p(e.charCodeAt(8)))/255};if(4===t){let t=p(e.charCodeAt(1)),o=p(e.charCodeAt(2)),n=p(e.charCodeAt(3));return{type:"rgba",r:16*t+t,g:16*o+o,b:16*n+n,a:1}}if(5===t){let t=p(e.charCodeAt(1)),o=p(e.charCodeAt(2)),n=p(e.charCodeAt(3)),r=p(e.charCodeAt(4));return{type:"rgba",r:16*t+t,g:16*o+o,b:16*n+n,a:(16*r+r)/255}}return null}(e);let o=g.exec(e);if(null==o)return null;let n=o[1];switch(n){case"rgb":case"hsl":t=[parseInt(o[2],10),parseInt(o[3],10),parseInt(o[4],10),1];break;case"rgba":case"hsla":t=[parseInt(o[2],10),parseInt(o[3],10),parseInt(o[4],10),parseFloat(o[5])];break;default:return null}return"hsl"===n||"hsla"===n?m({h:t[0],s:t[1],l:t[2],a:t[3]}):{type:"rgba",r:t[0],g:t[1],b:t[2],a:t[3]}}let v=e=>{var t;return"hsla"===(t=b(e)).type&&(t=m(t)),(299*t.r+587*t.g+114*t.b)/1e3<128?"#FFFFFF":"#000000"};var y=o(827),w=o(3308);let C=e=>!(e===y.o$||e===y.lH),S=/^.*(:?\n){0,2}/m;function x(e,t="\n"){return e.replace("\n"===t?S:RegExp(`^.*(:?${t}){0,2}`,"m"),"")}let _=/^co-authored-by:\s*([^\s<>]+(?:\s+[^\s<>]+)*)\s*<([^<>]+)>/gim;function R(e){let t=[];for(let o=_.exec(e);null!==o;o=_.exec(e)){let[,e,n]=o;t.push({name:e,email:n})}return t}var T=o(376),k=o(7675);let E=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,O=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,I=new Map,M=["th","st","nd","rd"],D={};function A(e,t,o,n){let r=`${e}${n?"_compact":""}`,i=D[e];return i||(i=o+e*t+t/2,D[r]=i,i)}let $={d:"d",fill:"fill","shape-rendering":"shapeRendering","stroke-linejoin":"strokeLinejoin","stroke-width":"strokeWidth","stroke-dasharray":"strokeDasharray",stroke:"stroke",x1:"x1",x2:"x2",y1:"y1",y2:"y2"};function P(e,t){let o="";for(let[e,n]of Object.entries($)){let r=t[n];r&&(o+=` ${e}="${r}"`)}return`<${e}${o} />`}function N(e){return P("line",e)}function z(e,t,o,n){return{fill:"none",shapeRendering:"auto",strokeLinejoin:"round",strokeWidth:o,strokeDasharray:C(e)?n?1:2:0,stroke:t}}function H(e,t,o,n){return`${e}_${t}_${o||"+"}${n?"_compact":""}`}function L(e,t,o){return`${e}_${t||"+"}${o?"_compact":""}`}var F=o(5191),W=o(466);let G={"CommitDiffSection-FileAdded":"added","CommitDiffSection-FileDeleted":"deleted","CommitDiffSection-FileModified":"modified","CommitDiffSection-FileRenamed":"renamed","CommitDiffSection-NFilesAdded":"{0} added","CommitDiffSection-NFilesDeleted":"{0} deleted","CommitDiffSection-NFilesModified":"{0} modified","CommitDiffSection-NFilesRenamed":"{0} renamed","Graph-IsLoadingRows":"Loading...","Graph-NoCommits":"No commits","Graph-WorkInProgress":"Work in progress","GraphHeader-BranchTag":"BRANCH / TAG","GraphHeader-Changes":"CHANGES","GraphHeader-CommitAuthor":"AUTHOR","GraphHeader-CommitDateTime":"COMMIT DATE / TIME","GraphHeader-CommitGraph":"GRAPH","GraphHeader-CommitMessage":"COMMIT MESSAGE","GraphHeader-CommitSha":"SHA","GraphHeader-EditColumns":"Columns settings","GraphHeader-Filter":"Filter","GraphHeader-HiddenRefs-btn":"Hidden Branches / Tags","OptionalGraphZone-CommitAuthor":"Author","OptionalGraphZone-CommitDateTime":"Date / Time","OptionalGraphZone-CommitSha":"Sha","IssueIcon-Tooltip":"{0}: {1}","PullRequestIcon-Tooltip":"#{0}: {1}\n Double-click to open pull request on {2}","Ref-Current":"Current Branch","Ref-Local":"Local Branch","Ref-Remote":"Remote Branch","Ref-Tag":"Tag","RefZone-EnterBranchName":"enter branch name","RefZone-EnterTagName":"enter tag name","Timeline-1HourAgo":"1 hour ago","Timeline-NHoursAgo":"{0} hours ago","Timeline-Yesterday":"yesterday","Timeline-NDaysAgo":"{0} days ago","Timeline-1WeekAgo":"a week ago","Timeline-NWeeksAgo":"{0} weeks ago","Timeline-1MonthAgo":"a month ago","Timeline-NMonthsAgo":"{0} months ago","Timeline-1YearAgo":"a year ago","Timeline-NYearsAgo":"{0} years ago","Timeline-NPlusYearsAgo":"{0}+ years ago","UpstreamIndicatorIcon-BehindAndAheadTooltip":"{0} commit(s) behind and {1} commit(s) ahead of {2}\n Double-click to pull changes","UpstreamIndicatorIcon-BehindTooltip":"{0} commit(s) behind {1}\n Double-click to pull changes","UpstreamIndicatorIcon-AheadTooltip":"{0} commit(s) ahead of {1}\n Double-click to pull changes",ResizePanel:"Resize Panel",Stash:"Stash",Hide:"Hide",Show:"Show","WorkDirMessageInput-WIPPlaceholder":"WIP"};var B=o(8649),U=o(4561);let V={0:1,90:0,180:-1,270:0},j={0:0,90:1,180:0,270:-1},Z=w.O5-w.NP,q=` A ${Z} ${Z} 0 0 0 `;function K(e,t,o){let n=V[o],r=j[o];return{x:e-w.O5*n,xOffset:-n*w.NP,y:t+w.O5*r,yOffset:r*w.NP}}let Y={};var Q=function(e,t,o,n,r,i,s,a){let l=z(n,e,s,a);return l.d=function(e,t,o,n){let r=`${e}_${t}_${o}_${n}`,i=Y[r];if(i)return i;let s=K(e,t,n),a=K(e,t,o);return i=`M ${s.x} ${s.y}${a.xOffset?` H ${s.x+a.xOffset}`:` V ${s.y+a.yOffset}`}${q}${a.x+s.xOffset} ${a.y+s.yOffset}${s.xOffset?` H ${a.x}`:` V ${a.y}`}`,Y[r]=i,i}(r,i,o,t),P("path",l)};let X={},J={},ee={},et={};function eo(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function en(e){return(en="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function er(e){var t=function(e,t){if("object"!==en(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!==en(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===en(t)?t:String(t)}function ei(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,er(n.key),n)}}function es(e,t,o){return t&&ei(e.prototype,t),o&&ei(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function ea(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function el(e,t){if(t&&("object"===en(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return ea(e)}function ec(e){return(ec=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ed(e,t){return(ed=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function eh(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ed(e,t)}function eu(e,t,o){return(t=er(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var ep=o(6871);function ef(){return(ef=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}let em=function(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=function e(t){var o,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t))for(o=0;o<t.length;o++)t[o]&&(n=e(t[o]))&&(r&&(r+=" "),r+=n);else for(o in t)t[o]&&(r&&(r+=" "),r+=o)}return r}(e))&&(n&&(n+=" "),n+=t);return n};function eg(e){var t=e.cellCount,o=e.cellSize,n=e.computeMetadataCallback,r=e.computeMetadataCallbackProps,i=e.nextCellsCount,s=e.nextCellSize,a=e.nextScrollToIndex,l=e.scrollToIndex,c=e.updateScrollOffsetForScrollToIndex;t===i&&("number"!=typeof o&&"number"!=typeof s||o===s)||(n(r),l>=0&&l===a&&c())}function eb(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var ev=function(){function e(t){var o=t.cellCount,n=t.cellSizeGetter,r=t.estimatedCellSize;eo(this,e),eu(this,"_cellSizeAndPositionData",{}),eu(this,"_lastMeasuredIndex",-1),eu(this,"_lastBatchedIndex",-1),eu(this,"_cellCount",void 0),eu(this,"_cellSizeGetter",void 0),eu(this,"_estimatedCellSize",void 0),this._cellSizeGetter=n,this._cellCount=o,this._estimatedCellSize=r}return es(e,[{key:"areOffsetsAdjusted",value:function(){return!1}},{key:"configure",value:function(e){var t=e.cellCount,o=e.estimatedCellSize,n=e.cellSizeGetter;this._cellCount=t,this._estimatedCellSize=o,this._cellSizeGetter=n}},{key:"getCellCount",value:function(){return this._cellCount}},{key:"getEstimatedCellSize",value:function(){return this._estimatedCellSize}},{key:"getLastMeasuredIndex",value:function(){return this._lastMeasuredIndex}},{key:"getOffsetAdjustment",value:function(){return 0}},{key:"getSizeAndPositionOfCell",value:function(e){if(e<0||e>=this._cellCount)throw Error("Requested index ".concat(e," is outside of range 0..").concat(this._cellCount));if(e>this._lastMeasuredIndex)for(var t=this.getSizeAndPositionOfLastMeasuredCell(),o=t.offset+t.size,n=this._lastMeasuredIndex+1;n<=e;n++){var r=this._cellSizeGetter({index:n});if(void 0===r||isNaN(r))throw Error("Invalid size returned for cell ".concat(n," of value ").concat(r));null===r?(this._cellSizeAndPositionData[n]={offset:o,size:0},this._lastBatchedIndex=e):(this._cellSizeAndPositionData[n]={offset:o,size:r},o+=r,this._lastMeasuredIndex=e)}return this._cellSizeAndPositionData[e]}},{key:"getSizeAndPositionOfLastMeasuredCell",value:function(){return this._lastMeasuredIndex>=0?this._cellSizeAndPositionData[this._lastMeasuredIndex]:{offset:0,size:0}}},{key:"getTotalSize",value:function(){var e=this.getSizeAndPositionOfLastMeasuredCell();return e.offset+e.size+(this._cellCount-this._lastMeasuredIndex-1)*this._estimatedCellSize}},{key:"getUpdatedOffsetForIndex",value:function(e){var t=e.align,o=e.containerSize,n=e.currentOffset,r=e.targetIndex;if(o<=0)return 0;var i,s=this.getSizeAndPositionOfCell(r),a=s.offset,l=a-o+s.size;switch(void 0===t?"auto":t){case"start":i=a;break;case"end":i=l;break;case"center":i=a-(o-s.size)/2;break;default:i=Math.max(l,Math.min(a,n))}return Math.max(0,Math.min(this.getTotalSize()-o,i))}},{key:"getVisibleCellRange",value:function(e){var t=e.containerSize,o=e.offset;if(0===this.getTotalSize())return{};var n=o+t,r=this._findNearestCell(o),i=this.getSizeAndPositionOfCell(r);o=i.offset+i.size;for(var s=r;o<n&&s<this._cellCount-1;)s++,o+=this.getSizeAndPositionOfCell(s).size;return{start:r,stop:s}}},{key:"resetCell",value:function(e){this._lastMeasuredIndex=Math.min(this._lastMeasuredIndex,e-1)}},{key:"_binarySearch",value:function(e,t,o){for(;t<=e;){var n=t+Math.floor((e-t)/2),r=this.getSizeAndPositionOfCell(n).offset;if(r===o)return n;r<o?t=n+1:r>o&&(e=n-1)}return t>0?t-1:0}},{key:"_exponentialSearch",value:function(e,t){for(var o=1;e<this._cellCount&&this.getSizeAndPositionOfCell(e).offset<t;)e+=o,o*=2;return this._binarySearch(Math.min(e,this._cellCount-1),Math.floor(e/2),t)}},{key:"_findNearestCell",value:function(e){if(isNaN(e))throw Error("Invalid offset ".concat(e," specified"));e=Math.max(0,e);var t=this.getSizeAndPositionOfLastMeasuredCell(),o=Math.max(0,this._lastMeasuredIndex);return t.offset>=e?this._binarySearch(o,0,e):this._exponentialSearch(o,e)}}]),e}(),ey=function(){function e(t){var o=t.maxScrollSize,n=void 0===o?"undefined"!=typeof window&&window.chrome?16777100:15e5:o,r=eb(t,["maxScrollSize"]);eo(this,e),eu(this,"_cellSizeAndPositionManager",void 0),eu(this,"_maxScrollSize",void 0),this._cellSizeAndPositionManager=new ev(r),this._maxScrollSize=n}return es(e,[{key:"areOffsetsAdjusted",value:function(){return this._cellSizeAndPositionManager.getTotalSize()>this._maxScrollSize}},{key:"configure",value:function(e){this._cellSizeAndPositionManager.configure(e)}},{key:"getCellCount",value:function(){return this._cellSizeAndPositionManager.getCellCount()}},{key:"getEstimatedCellSize",value:function(){return this._cellSizeAndPositionManager.getEstimatedCellSize()}},{key:"getLastMeasuredIndex",value:function(){return this._cellSizeAndPositionManager.getLastMeasuredIndex()}},{key:"getOffsetAdjustment",value:function(e){var t=e.containerSize,o=e.offset,n=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize();return Math.round(this._getOffsetPercentage({containerSize:t,offset:o,totalSize:r})*(r-n))}},{key:"getSizeAndPositionOfCell",value:function(e){return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(e)}},{key:"getSizeAndPositionOfLastMeasuredCell",value:function(){return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell()}},{key:"getTotalSize",value:function(){return Math.min(this._maxScrollSize,this._cellSizeAndPositionManager.getTotalSize())}},{key:"getUpdatedOffsetForIndex",value:function(e){var t=e.align,o=e.containerSize,n=e.currentOffset,r=e.targetIndex;n=this._safeOffsetToOffset({containerSize:o,offset:n});var i=this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({align:void 0===t?"auto":t,containerSize:o,currentOffset:n,targetIndex:r});return this._offsetToSafeOffset({containerSize:o,offset:i})}},{key:"getVisibleCellRange",value:function(e){var t=e.containerSize,o=e.offset;return o=this._safeOffsetToOffset({containerSize:t,offset:o}),this._cellSizeAndPositionManager.getVisibleCellRange({containerSize:t,offset:o})}},{key:"resetCell",value:function(e){this._cellSizeAndPositionManager.resetCell(e)}},{key:"_getOffsetPercentage",value:function(e){var t=e.containerSize,o=e.offset,n=e.totalSize;return n<=t?0:o/(n-t)}},{key:"_offsetToSafeOffset",value:function(e){var t=e.containerSize,o=e.offset,n=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize();return n===r?o:Math.round(this._getOffsetPercentage({containerSize:t,offset:o,totalSize:n})*(r-t))}},{key:"_safeOffsetToOffset",value:function(e){var t=e.containerSize,o=e.offset,n=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize();return n===r?o:Math.round(this._getOffsetPercentage({containerSize:t,offset:o,totalSize:r})*(n-t))}}]),e}();function ew(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t={};return function(o){var n=o.callback,r=o.indices,i=Object.keys(r),s=!e||i.every(function(e){var t=r[e];return Array.isArray(t)?t.length>0:t>=0}),a=i.length!==Object.keys(t).length||i.some(function(e){var o=t[e],n=r[e];return Array.isArray(n)?o.join(",")!==n.join(","):o!==n});t=r,s&&a&&n(r)}}function eC(e){var t=e.cellSize,o=e.cellSizeAndPositionManager,n=e.previousCellsCount,r=e.previousCellSize,i=e.previousScrollToAlignment,s=e.previousScrollToIndex,a=e.previousSize,l=e.scrollOffset,c=e.scrollToAlignment,d=e.scrollToIndex,h=e.size,u=e.sizeJustIncreasedFromZero,p=e.updateScrollIndexCallback,f=o.getCellCount(),m=d>=0&&d<f;m&&(h!==a||u||!r||"number"==typeof t&&t!==r||c!==i||d!==s)?p(d):!m&&f>0&&(h<a||f<n)&&l>o.getTotalSize()-h&&p(f-1)}let eS=!("undefined"==typeof window||!window.document||!window.document.createElement);function ex(e){if((!e_&&0!==e_||e)&&eS){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),e_=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return e_}var e_,eR,eT,ek,eE=(eR="undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).requestAnimationFrame||eR.webkitRequestAnimationFrame||eR.mozRequestAnimationFrame||eR.oRequestAnimationFrame||eR.msRequestAnimationFrame||function(e){return eR.setTimeout(e,1e3/60)},eO=eR.cancelAnimationFrame||eR.webkitCancelAnimationFrame||eR.mozCancelAnimationFrame||eR.oCancelAnimationFrame||eR.msCancelAnimationFrame||function(e){eR.clearTimeout(e)},eI=function(e){return eO(e.id)},eM=function(e,t){Promise.resolve().then(function(){o=Date.now()});var o,n={id:eE(function r(){Date.now()-o>=t?e.call():n.id=eE(r)})};return n};function eD(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function eA(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?eD(o,!0).forEach(function(t){eu(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):eD(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var e$="requested",eP=(ek=eT=function(e){function t(e){eo(this,t),eu(ea(o=el(this,ec(t).call(this,e))),"_onGridRenderedMemoizer",ew()),eu(ea(o),"_onScrollMemoizer",ew(!1)),eu(ea(o),"_deferredInvalidateColumnIndex",null),eu(ea(o),"_deferredInvalidateRowIndex",null),eu(ea(o),"_recomputeScrollLeftFlag",!1),eu(ea(o),"_recomputeScrollTopFlag",!1),eu(ea(o),"_horizontalScrollBarSize",0),eu(ea(o),"_verticalScrollBarSize",0),eu(ea(o),"_scrollbarPresenceChanged",!1),eu(ea(o),"_scrollingContainer",void 0),eu(ea(o),"_childrenToDisplay",void 0),eu(ea(o),"_columnStartIndex",void 0),eu(ea(o),"_columnStopIndex",void 0),eu(ea(o),"_rowStartIndex",void 0),eu(ea(o),"_rowStopIndex",void 0),eu(ea(o),"_renderedColumnStartIndex",0),eu(ea(o),"_renderedColumnStopIndex",0),eu(ea(o),"_renderedRowStartIndex",0),eu(ea(o),"_renderedRowStopIndex",0),eu(ea(o),"_initialScrollTop",void 0),eu(ea(o),"_initialScrollLeft",void 0),eu(ea(o),"_disablePointerEventsTimeoutId",void 0),eu(ea(o),"_styleCache",{}),eu(ea(o),"_cellCache",{}),eu(ea(o),"_debounceScrollEndedCallback",function(){o._disablePointerEventsTimeoutId=null,o.setState({isScrolling:!1,needToResetStyleCache:!1})}),eu(ea(o),"_invokeOnGridRenderedHelper",function(){var e=o.props.onSectionRendered;o._onGridRenderedMemoizer({callback:e,indices:{columnOverscanStartIndex:o._columnStartIndex,columnOverscanStopIndex:o._columnStopIndex,columnStartIndex:o._renderedColumnStartIndex,columnStopIndex:o._renderedColumnStopIndex,rowOverscanStartIndex:o._rowStartIndex,rowOverscanStopIndex:o._rowStopIndex,rowStartIndex:o._renderedRowStartIndex,rowStopIndex:o._renderedRowStopIndex}})}),eu(ea(o),"_onWheel",function(e){var t=e.deltaX,n=e.deltaY;o.handleWheelEvent({deltaX:t,deltaY:n})}),eu(ea(o),"_setScrollingContainerRef",function(e){e&&(e.removeEventListener("wheel",o.preventDefault),e.addEventListener("wheel",o.preventDefault,{passive:!1})),o._scrollingContainer=e}),eu(ea(o),"_onScroll",function(e){e.target===o._scrollingContainer&&o.handleScrollEvent(e.target)});var o,n=new ey({cellCount:e.columnCount,cellSizeGetter:function(o){return t._wrapSizeGetter(e.columnWidth)(o)},estimatedCellSize:t._getEstimatedColumnSize(e)}),r=new ey({cellCount:e.rowCount,cellSizeGetter:function(o){return t._wrapSizeGetter(e.rowHeight)(o)},estimatedCellSize:t._getEstimatedRowSize(e)});return o.state={instanceProps:{columnSizeAndPositionManager:n,rowSizeAndPositionManager:r,prevColumnWidth:e.columnWidth,prevRowHeight:e.rowHeight,prevColumnCount:e.columnCount,prevRowCount:e.rowCount,prevIsScrolling:!0===e.isScrolling,prevScrollToColumn:e.scrollToColumn,prevScrollToRow:e.scrollToRow,scrollbarSize:0,scrollbarSizeMeasured:!1},isScrolling:!1,scrollDirectionHorizontal:1,scrollDirectionVertical:1,scrollLeft:0,scrollTop:0,scrollPositionChangeReason:null,needToResetStyleCache:!1},e.scrollToRow>0&&(o._initialScrollTop=o._getCalculatedScrollTop(e,o.state)),e.scrollToColumn>0&&(o._initialScrollLeft=o._getCalculatedScrollLeft(e,o.state)),o}return eh(t,e),es(t,[{key:"getOffsetForCell",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.alignment,o=void 0===t?this.props.scrollToAlignment:t,n=e.columnIndex,r=void 0===n?this.props.scrollToColumn:n,i=e.rowIndex,s=void 0===i?this.props.scrollToRow:i,a=eA({},this.props,{scrollToAlignment:o,scrollToColumn:r,scrollToRow:s});return{scrollLeft:this._getCalculatedScrollLeft(a),scrollTop:this._getCalculatedScrollTop(a)}}},{key:"getTotalRowsHeight",value:function(){return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize()}},{key:"getTotalColumnsWidth",value:function(){return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize()}},{key:"handleScrollEvent",value:function(e){var t=e.scrollLeft,o=e.scrollTop,n=void 0===o?0:o;if(!(n<0)){this._debounceScrollEnded();var r=this.props,i=r.autoHeight,s=r.autoWidth,a=r.height,l=r.width,c=this.state.instanceProps,d=c.scrollbarSize,h=c.rowSizeAndPositionManager.getTotalSize(),u=c.columnSizeAndPositionManager.getTotalSize(),p=Math.min(Math.max(0,u-l+d),void 0===t?0:t),f=Math.min(Math.max(0,h-a+d),n);if(this.state.scrollLeft!==p||this.state.scrollTop!==f){var m={isScrolling:!0,scrollDirectionHorizontal:p!==this.state.scrollLeft?p>this.state.scrollLeft?1:-1:this.state.scrollDirectionHorizontal,scrollDirectionVertical:f!==this.state.scrollTop?f>this.state.scrollTop?1:-1:this.state.scrollDirectionVertical,scrollPositionChangeReason:"observed"};i||(m.scrollTop=f),s||(m.scrollLeft=p),m.needToResetStyleCache=!1,this.setState(m)}this._invokeOnScrollMemoizer({scrollLeft:p,scrollTop:f,totalColumnsWidth:u,totalRowsHeight:h})}}},{key:"preventDefault",value:function(e){e.preventDefault()}},{key:"handleWheelEvent",value:function(e){var t=e.deltaX,o=e.deltaY;this._debounceScrollEnded();var n=this.props,r=n.autoHeight,i=n.autoWidth,s=n.height,a=n.width,l=this.state.instanceProps.scrollbarSize,c=this.state.instanceProps.rowSizeAndPositionManager.getTotalSize(),d=this.state.instanceProps.columnSizeAndPositionManager.getTotalSize(),h=Math.min(Math.max(0,d-a+l),Math.max(0,this._scrollingContainer.scrollLeft+t)),u=Math.min(Math.max(0,c-s+l),Math.max(0,this._scrollingContainer.scrollTop+o));if(this.state.scrollLeft!==h||this.state.scrollTop!==u){var p={isScrolling:!0,scrollDirectionHorizontal:h!==this.state.scrollLeft?h>this.state.scrollLeft?1:-1:this.state.scrollDirectionHorizontal,scrollDirectionVertical:u!==this.state.scrollTop?u>this.state.scrollTop?1:-1:this.state.scrollDirectionVertical,scrollPositionChangeReason:e$};r||(p.scrollTop=u),i||(p.scrollLeft=h),p.needToResetStyleCache=!1,this.setState(p)}this._invokeOnScrollMemoizer({scrollLeft:h,scrollTop:u,totalColumnsWidth:d,totalRowsHeight:c})}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,o=e.rowIndex;this._deferredInvalidateColumnIndex="number"==typeof this._deferredInvalidateColumnIndex?Math.min(this._deferredInvalidateColumnIndex,t):t,this._deferredInvalidateRowIndex="number"==typeof this._deferredInvalidateRowIndex?Math.min(this._deferredInvalidateRowIndex,o):o}},{key:"measureAllCells",value:function(){var e=this.props,t=e.columnCount,o=e.rowCount,n=this.state.instanceProps;n.columnSizeAndPositionManager.getSizeAndPositionOfCell(t-1),n.rowSizeAndPositionManager.getSizeAndPositionOfCell(o-1)}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,o=void 0===t?0:t,n=e.rowIndex,r=void 0===n?0:n,i=this.props,s=i.scrollToColumn,a=i.scrollToRow,l=this.state.instanceProps;l.columnSizeAndPositionManager.resetCell(o),l.rowSizeAndPositionManager.resetCell(r),this._recomputeScrollLeftFlag=s>=0&&(1===this.state.scrollDirectionHorizontal?o<=s:o>=s),this._recomputeScrollTopFlag=a>=0&&(1===this.state.scrollDirectionVertical?r<=a:r>=a),this._styleCache={},this._cellCache={},this.forceUpdate()}},{key:"scrollToCell",value:function(e){var t=e.columnIndex,o=e.rowIndex,n=this.props,r=n.columnCount,i=n.onScrollToTargetCausedUpdate,s=this.state,a=s.scrollLeft,l=s.scrollTop,c=this.props,d=this.state,h=void 0,u=void 0;if(r>1&&void 0!==t){var p=this._updateScrollLeftForScrollToColumn(eA({},c,{scrollToColumn:t}),d,!0);p&&"number"==typeof p.scrollLeft&&p.scrollLeft>=0&&(h=p.scrollLeft)}if(void 0!==o){var f=this._updateScrollTopForScrollToRow(eA({},c,{scrollToRow:o}),d,!0);f&&"number"==typeof f.scrollTop&&f.scrollTop>=0&&(u=f.scrollTop)}if(i&&("number"==typeof h||"number"==typeof u)){var m="number"!=typeof h?h:a,g="number"!=typeof u?u:l;i({clientHeight:c.height,clientWidth:c.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:m,scrollTop:g,scrollWidth:this.getTotalColumnsWidth()})}}},{key:"componentDidMount",value:function(){var e=this.props,o=e.getScrollbarSize,n=e.height,r=e.scrollLeft,i=e.scrollToColumn,s=e.scrollTop,a=e.scrollToRow,l=e.width,c=this.state.instanceProps;if(this._initialScrollTop=0,this._initialScrollLeft=0,this._handleInvalidatedGridSize(),c.scrollbarSizeMeasured||this.setState(function(e){var t=eA({},e,{needToResetStyleCache:!1});return t.instanceProps.scrollbarSize=o(),t.instanceProps.scrollbarSizeMeasured=!0,t}),"number"==typeof r&&r>=0||"number"==typeof s&&s>=0){var d=t._getScrollToPositionStateUpdate({prevState:this.state,scrollLeft:r,scrollTop:s});d&&(d.needToResetStyleCache=!1,this.setState(d))}this._scrollingContainer&&(this._scrollingContainer.scrollLeft!==this.state.scrollLeft&&(this._scrollingContainer.scrollLeft=this.state.scrollLeft),this._scrollingContainer.scrollTop!==this.state.scrollTop&&(this._scrollingContainer.scrollTop=this.state.scrollTop));var h=n>0&&l>0;i>=0&&h&&this._updateScrollLeftForScrollToColumn(),a>=0&&h&&this._updateScrollTopForScrollToRow(),this._invokeOnGridRenderedHelper(),this._invokeOnScrollMemoizer({scrollLeft:r||0,scrollTop:s||0,totalColumnsWidth:c.columnSizeAndPositionManager.getTotalSize(),totalRowsHeight:c.rowSizeAndPositionManager.getTotalSize()}),this._maybeCallOnScrollbarPresenceChange()}},{key:"componentDidUpdate",value:function(e,t){var o=this,n=this.props,r=n.autoHeight,i=n.autoWidth,s=n.columnCount,a=n.height,l=n.rowCount,c=n.scrollToAlignment,d=n.scrollToColumn,h=n.scrollToRow,u=n.width,p=this.state,f=p.scrollLeft,m=p.scrollPositionChangeReason,g=p.scrollTop,b=p.instanceProps;this._handleInvalidatedGridSize();var v=s>0&&0===e.columnCount||l>0&&0===e.rowCount;m===e$&&(!i&&f>=0&&(f!==this._scrollingContainer.scrollLeft||v)&&(this._scrollingContainer.scrollLeft=f),!r&&g>=0&&(g!==this._scrollingContainer.scrollTop||v)&&(this._scrollingContainer.scrollTop=g));var y=(0===e.width||0===e.height)&&a>0&&u>0;if(this._recomputeScrollLeftFlag?(this._recomputeScrollLeftFlag=!1,this._updateScrollLeftForScrollToColumn(this.props)):eC({cellSizeAndPositionManager:b.columnSizeAndPositionManager,previousCellsCount:e.columnCount,previousCellSize:e.columnWidth,previousScrollToAlignment:e.scrollToAlignment,previousScrollToIndex:e.scrollToColumn,previousSize:e.width,scrollOffset:f,scrollToAlignment:c,scrollToIndex:d,size:u,sizeJustIncreasedFromZero:y,updateScrollIndexCallback:function(){return o._updateScrollLeftForScrollToColumn(o.props)}}),this._recomputeScrollTopFlag?(this._recomputeScrollTopFlag=!1,this._updateScrollTopForScrollToRow(this.props)):eC({cellSizeAndPositionManager:b.rowSizeAndPositionManager,previousCellsCount:e.rowCount,previousCellSize:e.rowHeight,previousScrollToAlignment:e.scrollToAlignment,previousScrollToIndex:e.scrollToRow,previousSize:e.height,scrollOffset:g,scrollToAlignment:c,scrollToIndex:h,size:a,sizeJustIncreasedFromZero:y,updateScrollIndexCallback:function(){return o._updateScrollTopForScrollToRow(o.props)}}),this._invokeOnGridRenderedHelper(),f!==t.scrollLeft||g!==t.scrollTop){var w=b.rowSizeAndPositionManager.getTotalSize(),C=b.columnSizeAndPositionManager.getTotalSize();this._invokeOnScrollMemoizer({scrollLeft:f,scrollTop:g,totalColumnsWidth:C,totalRowsHeight:w})}this._maybeCallOnScrollbarPresenceChange()}},{key:"componentWillUnmount",value:function(){this._scrollingContainer&&this._scrollingContainer.removeEventListener("wheel",this.preventDefault),this._disablePointerEventsTimeoutId&&eI(this._disablePointerEventsTimeoutId)}},{key:"render",value:function(){var e=this.props,t=e.autoContainerWidth,o=e.autoHeight,n=e.autoWidth,r=e.className,i=e.containerProps,s=e.containerRole,a=e.containerStyle,l=e.height,c=e.id,d=e.noContentRenderer,u=e.role,p=e.style,f=e.tabIndex,m=e.width,g=this.state,b=g.instanceProps,v=g.needToResetStyleCache,y=this._isScrolling(),w={boxSizing:"border-box",direction:"ltr",height:o?"auto":l,position:"relative",width:n?"auto":m,WebkitOverflowScrolling:"touch",willChange:"transform"};v&&(this._styleCache={}),this.state.isScrolling||this._resetStyleCache(),this._calculateChildrenToRender(this.props,this.state);var C=b.columnSizeAndPositionManager.getTotalSize(),S=b.rowSizeAndPositionManager.getTotalSize(),x=S>l?b.scrollbarSize:0,_=C>m?b.scrollbarSize:0;_===this._horizontalScrollBarSize&&x===this._verticalScrollBarSize||(this._horizontalScrollBarSize=_,this._verticalScrollBarSize=x,this._scrollbarPresenceChanged=!0),w.overflowX=C+x<=m?"hidden":"auto",w.overflowY=S+_<=l?"hidden":"auto";var R=this._childrenToDisplay,T=0===R.length&&l>0&&m>0;return h.createElement("div",ef({ref:this._setScrollingContainerRef},i,{"aria-label":this.props["aria-label"],"aria-readonly":this.props["aria-readonly"],className:em("ReactVirtualized__Grid",r),id:c,onScroll:this._onScroll,onWheel:this._onWheel,role:u,style:eA({},w,{},p),tabIndex:f}),R.length>0&&h.createElement("div",{className:"ReactVirtualized__Grid__innerScrollContainer",role:s,style:eA({width:t?"auto":C,height:S,maxWidth:C,maxHeight:S,overflow:"hidden",pointerEvents:y?"none":"",position:"relative"},a)},R),T&&d())}},{key:"_calculateChildrenToRender",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,o=e.cellRenderer,n=e.cellRangeRenderer,r=e.columnCount,i=e.deferredMeasurementCache,s=e.height,a=e.overscanColumnCount,l=e.overscanIndicesGetter,c=e.overscanRowCount,d=e.rowCount,h=e.width,u=e.isScrollingOptOut,p=t.scrollDirectionHorizontal,f=t.scrollDirectionVertical,m=t.instanceProps,g=this._initialScrollTop>0?this._initialScrollTop:t.scrollTop,b=this._initialScrollLeft>0?this._initialScrollLeft:t.scrollLeft,v=this._isScrolling(e,t);if(this._childrenToDisplay=[],s>0&&h>0){var y=m.columnSizeAndPositionManager.getVisibleCellRange({containerSize:h,offset:b}),w=m.rowSizeAndPositionManager.getVisibleCellRange({containerSize:s,offset:g}),C=m.columnSizeAndPositionManager.getOffsetAdjustment({containerSize:h,offset:b}),S=m.rowSizeAndPositionManager.getOffsetAdjustment({containerSize:s,offset:g});this._renderedColumnStartIndex=y.start,this._renderedColumnStopIndex=y.stop,this._renderedRowStartIndex=w.start,this._renderedRowStopIndex=w.stop;var x=l({direction:"horizontal",cellCount:r,overscanCellsCount:a,scrollDirection:p,startIndex:"number"==typeof y.start?y.start:0,stopIndex:"number"==typeof y.stop?y.stop:-1}),_=l({direction:"vertical",cellCount:d,overscanCellsCount:c,scrollDirection:f,startIndex:"number"==typeof w.start?w.start:0,stopIndex:"number"==typeof w.stop?w.stop:-1}),R=x.overscanStartIndex,T=x.overscanStopIndex,k=_.overscanStartIndex,E=_.overscanStopIndex;if(i){if(!i.hasFixedHeight()){for(var O=k;O<=E;O++)if(!i.has(O,0)){R=0,T=r-1;break}}if(!i.hasFixedWidth()){for(var I=R;I<=T;I++)if(!i.has(0,I)){k=0,E=d-1;break}}}this._childrenToDisplay=n({cellCache:this._cellCache,cellRenderer:o,columnSizeAndPositionManager:m.columnSizeAndPositionManager,columnStartIndex:R,columnStopIndex:T,deferredMeasurementCache:i,horizontalOffsetAdjustment:C,isScrolling:v,isScrollingOptOut:u,parent:this,rowSizeAndPositionManager:m.rowSizeAndPositionManager,rowStartIndex:k,rowStopIndex:E,scrollLeft:b,scrollTop:g,styleCache:this._styleCache,verticalOffsetAdjustment:S,visibleColumnIndices:y,visibleRowIndices:w}),this._columnStartIndex=R,this._columnStopIndex=T,this._rowStartIndex=k,this._rowStopIndex=E}}},{key:"_debounceScrollEnded",value:function(){var e=this.props.scrollingResetTimeInterval;this._disablePointerEventsTimeoutId&&eI(this._disablePointerEventsTimeoutId),this._disablePointerEventsTimeoutId=eM(this._debounceScrollEndedCallback,e)}},{key:"_handleInvalidatedGridSize",value:function(){if("number"==typeof this._deferredInvalidateColumnIndex&&"number"==typeof this._deferredInvalidateRowIndex){var e=this._deferredInvalidateColumnIndex,t=this._deferredInvalidateRowIndex;this._deferredInvalidateColumnIndex=null,this._deferredInvalidateRowIndex=null,this.recomputeGridSize({columnIndex:e,rowIndex:t})}}},{key:"_invokeOnScrollMemoizer",value:function(e){var t=this,o=e.scrollLeft,n=e.scrollTop,r=e.totalColumnsWidth,i=e.totalRowsHeight;this._onScrollMemoizer({callback:function(e){var o=e.scrollLeft,n=e.scrollTop,s=t.props,a=s.height;(0,s.onScroll)({clientHeight:a,clientWidth:s.width,scrollHeight:i,scrollLeft:o,scrollTop:n,scrollWidth:r})},indices:{scrollLeft:o,scrollTop:n}})}},{key:"_isScrolling",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return Object.hasOwnProperty.call(e,"isScrolling")?!!e.isScrolling:!!t.isScrolling}},{key:"_maybeCallOnScrollbarPresenceChange",value:function(){if(this._scrollbarPresenceChanged){var e=this.props.onScrollbarPresenceChange;this._scrollbarPresenceChanged=!1,e({horizontal:this._horizontalScrollBarSize>0,size:this.state.instanceProps.scrollbarSize,vertical:this._verticalScrollBarSize>0})}}},{key:"scrollToPosition",value:function(e){var o=e.scrollLeft,n=e.scrollTop,r=t._getScrollToPositionStateUpdate({prevState:this.state,scrollLeft:o,scrollTop:n});r&&(r.needToResetStyleCache=!1,this.setState(r))}},{key:"_getCalculatedScrollLeft",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return t._getCalculatedScrollLeft(e,o)}},{key:"_updateScrollLeftForScrollToColumn",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t._getScrollLeftForScrollToColumnStateUpdate(e,o);if(r)return r.needToResetStyleCache=!1,this.setState(r),e.onScrollToTargetCausedUpdate&&!n&&e.onScrollToTargetCausedUpdate({clientHeight:e.height,clientWidth:e.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollWidth:this.getTotalColumnsWidth()}),r}},{key:"_getCalculatedScrollTop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return t._getCalculatedScrollTop(e,o)}},{key:"_resetStyleCache",value:function(){var e=this._styleCache,t=this._cellCache,o=this.props.isScrollingOptOut;this._cellCache={},this._styleCache={};for(var n=this._rowStartIndex;n<=this._rowStopIndex;n++)for(var r=this._columnStartIndex;r<=this._columnStopIndex;r++){var i="".concat(n,"-").concat(r);this._styleCache[i]=e[i],o&&(this._cellCache[i]=t[i])}}},{key:"_updateScrollTopForScrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t._getScrollTopForScrollToRowStateUpdate(e,o);if(r)return r.needToResetStyleCache=!1,this.setState(r),e.onScrollToTargetCausedUpdate&&!n&&e.onScrollToTargetCausedUpdate({clientHeight:e.height,clientWidth:e.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollWidth:this.getTotalColumnsWidth()}),r}}],[{key:"getDerivedStateFromProps",value:function(e,o){var n={};0===e.columnCount&&0!==o.scrollLeft||0===e.rowCount&&0!==o.scrollTop?(n.scrollLeft=0,n.scrollTop=0):(e.scrollLeft!==o.scrollLeft&&e.scrollToColumn<0||e.scrollTop!==o.scrollTop&&e.scrollToRow<0)&&Object.assign(n,t._getScrollToPositionStateUpdate({prevState:o,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}));var r,i,s=o.instanceProps;return n.needToResetStyleCache=!1,e.columnWidth===s.prevColumnWidth&&e.rowHeight===s.prevRowHeight||(n.needToResetStyleCache=!0),s.columnSizeAndPositionManager.configure({cellCount:e.columnCount,estimatedCellSize:t._getEstimatedColumnSize(e),cellSizeGetter:t._wrapSizeGetter(e.columnWidth)}),s.rowSizeAndPositionManager.configure({cellCount:e.rowCount,estimatedCellSize:t._getEstimatedRowSize(e),cellSizeGetter:t._wrapSizeGetter(e.rowHeight)}),0!==s.prevColumnCount&&0!==s.prevRowCount||(s.prevColumnCount=0,s.prevRowCount=0),e.autoHeight&&!1===e.isScrolling&&!0===s.prevIsScrolling&&Object.assign(n,{isScrolling:!1}),eg({cellCount:s.prevColumnCount,cellSize:"number"==typeof s.prevColumnWidth?s.prevColumnWidth:null,computeMetadataCallback:function(){return s.columnSizeAndPositionManager.resetCell(0)},computeMetadataCallbackProps:e,nextCellsCount:e.columnCount,nextCellSize:"number"==typeof e.columnWidth?e.columnWidth:null,nextScrollToIndex:e.scrollToColumn,scrollToIndex:s.prevScrollToColumn,updateScrollOffsetForScrollToIndex:function(){r=t._getScrollLeftForScrollToColumnStateUpdate(e,o)}}),eg({cellCount:s.prevRowCount,cellSize:"number"==typeof s.prevRowHeight?s.prevRowHeight:null,computeMetadataCallback:function(){return s.rowSizeAndPositionManager.resetCell(0)},computeMetadataCallbackProps:e,nextCellsCount:e.rowCount,nextCellSize:"number"==typeof e.rowHeight?e.rowHeight:null,nextScrollToIndex:e.scrollToRow,scrollToIndex:s.prevScrollToRow,updateScrollOffsetForScrollToIndex:function(){i=t._getScrollTopForScrollToRowStateUpdate(e,o)}}),s.prevColumnCount=e.columnCount,s.prevColumnWidth=e.columnWidth,s.prevIsScrolling=!0===e.isScrolling,s.prevRowCount=e.rowCount,s.prevRowHeight=e.rowHeight,s.prevScrollToColumn=e.scrollToColumn,s.prevScrollToRow=e.scrollToRow,s.scrollbarSize=e.getScrollbarSize(),void 0===s.scrollbarSize?(s.scrollbarSizeMeasured=!1,s.scrollbarSize=0):s.scrollbarSizeMeasured=!0,n.instanceProps=s,eA({},n,{},r,{},i)}},{key:"_getEstimatedColumnSize",value:function(e){return"number"==typeof e.columnWidth?e.columnWidth:e.estimatedColumnSize}},{key:"_getEstimatedRowSize",value:function(e){return"number"==typeof e.rowHeight?e.rowHeight:e.estimatedRowSize}},{key:"_getScrollToPositionStateUpdate",value:function(e){var t=e.prevState,o=e.scrollLeft,n=e.scrollTop,r={scrollPositionChangeReason:e$};return"number"==typeof o&&o>=0&&(r.scrollDirectionHorizontal=o>t.scrollLeft?1:-1,r.scrollLeft=o),"number"==typeof n&&n>=0&&(r.scrollDirectionVertical=n>t.scrollTop?1:-1,r.scrollTop=n),"number"==typeof o&&o>=0&&o!==t.scrollLeft||"number"==typeof n&&n>=0&&n!==t.scrollTop?r:{}}},{key:"_wrapSizeGetter",value:function(e){return"function"==typeof e?e:function(){return e}}},{key:"_getCalculatedScrollLeft",value:function(e,t){var o=e.columnCount,n=e.height,r=e.scrollToAlignment,i=e.scrollToColumn,s=e.width,a=t.scrollLeft,l=t.instanceProps;if(o>0){var c=o-1,d=l.rowSizeAndPositionManager.getTotalSize(),h=l.scrollbarSizeMeasured&&d>n?l.scrollbarSize:0;return l.columnSizeAndPositionManager.getUpdatedOffsetForIndex({align:r,containerSize:s-h,currentOffset:a,targetIndex:i<0?c:Math.min(c,i)})}return 0}},{key:"_getScrollLeftForScrollToColumnStateUpdate",value:function(e,o){var n=o.scrollLeft,r=t._getCalculatedScrollLeft(e,o);return"number"==typeof r&&r>=0&&n!==r?t._getScrollToPositionStateUpdate({prevState:o,scrollLeft:r,scrollTop:-1}):{}}},{key:"_getCalculatedScrollTop",value:function(e,t){var o=e.height,n=e.rowCount,r=e.scrollToAlignment,i=e.scrollToRow,s=e.width,a=t.scrollTop,l=t.instanceProps;if(n>0){var c=n-1,d=l.columnSizeAndPositionManager.getTotalSize(),h=l.scrollbarSizeMeasured&&d>s?l.scrollbarSize:0;return l.rowSizeAndPositionManager.getUpdatedOffsetForIndex({align:r,containerSize:o-h,currentOffset:a,targetIndex:i<0?c:Math.min(c,i)})}return 0}},{key:"_getScrollTopForScrollToRowStateUpdate",value:function(e,o){var n=o.scrollTop,r=t._getCalculatedScrollTop(e,o);return"number"==typeof r&&r>=0&&n!==r?t._getScrollToPositionStateUpdate({prevState:o,scrollLeft:-1,scrollTop:r}):{}}}]),t}(h.PureComponent),eu(eT,"propTypes",null),ek);function eN(e){var t=e.cellCount,o=e.overscanCellsCount,n=e.scrollDirection,r=e.startIndex,i=e.stopIndex;return o=Math.max(1,o),1===n?{overscanStartIndex:Math.max(0,r-1),overscanStopIndex:Math.min(t-1,i+o)}:{overscanStartIndex:Math.max(0,r-o),overscanStopIndex:Math.min(t-1,i+1)}}function ez(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}eu(eP,"defaultProps",{"aria-label":"grid","aria-readonly":!0,autoContainerWidth:!1,autoHeight:!1,autoWidth:!1,cellRangeRenderer:function(e){for(var t=e.cellCache,o=e.cellRenderer,n=e.columnSizeAndPositionManager,r=e.columnStartIndex,i=e.columnStopIndex,s=e.deferredMeasurementCache,a=e.horizontalOffsetAdjustment,l=e.isScrolling,c=e.isScrollingOptOut,d=e.parent,h=e.rowSizeAndPositionManager,u=e.rowStartIndex,p=e.rowStopIndex,f=e.styleCache,m=e.verticalOffsetAdjustment,g=e.visibleColumnIndices,b=e.visibleRowIndices,v=[],y=n.areOffsetsAdjusted()||h.areOffsetsAdjusted(),w=!l&&!y,C=u;C<=p;C++)for(var S=h.getSizeAndPositionOfCell(C),x=r;x<=i;x++){var _=n.getSizeAndPositionOfCell(x),R=x>=g.start&&x<=g.stop&&C>=b.start&&C<=b.stop,T="".concat(C,"-").concat(x),k=void 0;w&&f[T]?k=f[T]:s&&!s.has(C,x)?k={height:"auto",left:0,position:"absolute",top:0,width:"auto"}:(k={height:S.size,left:_.offset+a,position:"absolute",top:S.offset+m,width:_.size},f[T]=k);var E={columnIndex:x,isScrolling:l,isVisible:R,key:T,parent:d,rowIndex:C,style:k},O=void 0;!c&&!l||a||m?O=o(E):(t[T]||(t[T]=o(E)),O=t[T]),null!=O&&!1!==O&&v.push(O)}return v},containerRole:"rowgroup",containerStyle:{},estimatedColumnSize:100,estimatedRowSize:30,getScrollbarSize:ex,noContentRenderer:function(){return null},onScroll:function(){},onScrollbarPresenceChange:function(){},onSectionRendered:function(){},overscanColumnCount:0,overscanIndicesGetter:function(e){var t=e.cellCount,o=e.overscanCellsCount,n=e.scrollDirection,r=e.startIndex,i=e.stopIndex;return 1===n?{overscanStartIndex:Math.max(0,r),overscanStopIndex:Math.min(t-1,i+o)}:{overscanStartIndex:Math.max(0,r-o),overscanStopIndex:Math.min(t-1,i)}},overscanRowCount:10,role:"grid",scrollingResetTimeInterval:150,scrollToAlignment:"auto",scrollToColumn:-1,scrollToRow:-1,style:{},tabIndex:0,isScrollingOptOut:!1}),(0,ep.polyfill)(eP);var eH=(eB=eG=function(e){function t(){var e,o;eo(this,t);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return eu(ea(o=el(this,(e=ec(t)).call.apply(e,[this].concat(r)))),"state",{scrollToColumn:0,scrollToRow:0,instanceProps:{prevScrollToColumn:0,prevScrollToRow:0}}),eu(ea(o),"_columnStartIndex",0),eu(ea(o),"_columnStopIndex",0),eu(ea(o),"_rowStartIndex",0),eu(ea(o),"_rowStopIndex",0),eu(ea(o),"_onKeyDown",function(e){var t=o.props,n=t.columnCount,r=t.disabled,i=t.mode,s=t.rowCount;if(!r){var a=o._getScrollState(),l=a.scrollToColumn,c=a.scrollToRow,d=o._getScrollState(),h=d.scrollToColumn,u=d.scrollToRow;switch(e.key){case"ArrowDown":u="cells"===i?Math.min(u+1,s-1):Math.min(o._rowStopIndex+1,s-1);break;case"ArrowLeft":h="cells"===i?Math.max(h-1,0):Math.max(o._columnStartIndex-1,0);break;case"ArrowRight":h="cells"===i?Math.min(h+1,n-1):Math.min(o._columnStopIndex+1,n-1);break;case"ArrowUp":u="cells"===i?Math.max(u-1,0):Math.max(o._rowStartIndex-1,0)}h===l&&u===c||(e.preventDefault(),o._updateScrollState({scrollToColumn:h,scrollToRow:u}))}}),eu(ea(o),"_onSectionRendered",function(e){var t=e.columnStartIndex,n=e.columnStopIndex,r=e.rowStartIndex,i=e.rowStopIndex;o._columnStartIndex=t,o._columnStopIndex=n,o._rowStartIndex=r,o._rowStopIndex=i}),o}return eh(t,e),es(t,[{key:"setScrollIndexes",value:function(e){var t=e.scrollToColumn,o=e.scrollToRow;this.setState({scrollToRow:o,scrollToColumn:t})}},{key:"render",value:function(){var e=this.props,t=e.className,o=e.children,n=this._getScrollState(),r=n.scrollToColumn,i=n.scrollToRow;return h.createElement("div",{className:t,onKeyDown:this._onKeyDown},o({onSectionRendered:this._onSectionRendered,scrollToColumn:r,scrollToRow:i}))}},{key:"_getScrollState",value:function(){return this.props.isControlled?this.props:this.state}},{key:"_updateScrollState",value:function(e){var t=e.scrollToColumn,o=e.scrollToRow,n=this.props,r=n.isControlled,i=n.onScrollToChange;"function"==typeof i&&i({scrollToColumn:t,scrollToRow:o}),r||this.setState({scrollToColumn:t,scrollToRow:o})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.isControlled?{}:e.scrollToColumn!==t.instanceProps.prevScrollToColumn||e.scrollToRow!==t.instanceProps.prevScrollToRow?function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ez(o,!0).forEach(function(t){eu(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ez(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({},t,{scrollToColumn:e.scrollToColumn,scrollToRow:e.scrollToRow,instanceProps:{prevScrollToColumn:e.scrollToColumn,prevScrollToRow:e.scrollToRow}}):{}}}]),t}(h.PureComponent),eu(eG,"propTypes",null),eB);function eL(e,t){var n,r=void 0!==(n=void 0!==t?t:"undefined"!=typeof window?window:"undefined"!=typeof self?self:o.g).document&&n.document.attachEvent;if(!r){var i,s,a=(i=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||function(e){return n.setTimeout(e,20)},function(e){return i(e)}),l=(s=n.cancelAnimationFrame||n.mozCancelAnimationFrame||n.webkitCancelAnimationFrame||n.clearTimeout,function(e){return s(e)}),c=function(e){var t=e.__resizeTriggers__,o=t.firstElementChild,n=t.lastElementChild,r=o.firstElementChild;n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,r.style.width=o.offsetWidth+1+"px",r.style.height=o.offsetHeight+1+"px",o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight},d=function(e){if(!(e.target.className&&"function"==typeof e.target.className.indexOf&&0>e.target.className.indexOf("contract-trigger")&&0>e.target.className.indexOf("expand-trigger"))){var t=this;c(this),this.__resizeRAF__&&l(this.__resizeRAF__),this.__resizeRAF__=a(function(){(t.offsetWidth!=t.__resizeLast__.width||t.offsetHeight!=t.__resizeLast__.height)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach(function(o){o.call(t,e)}))})}},h=!1,u="",p="animationstart",f="Webkit Moz O ms".split(" "),m="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),g=n.document.createElement("fakeelement");if(void 0!==g.style.animationName&&(h=!0),!1===h){for(var b=0;b<f.length;b++)if(void 0!==g.style[f[b]+"AnimationName"]){u="-"+f[b].toLowerCase()+"-",p=m[b],h=!0;break}}var v="resizeanim",y="@"+u+"keyframes "+v+" { from { opacity: 0; } to { opacity: 0; } } ",w=u+"animation: 1ms "+v+"; "}return{addResizeListener:function(t,o){if(r)t.attachEvent("onresize",o);else{if(!t.__resizeTriggers__){var i=t.ownerDocument,s=n.getComputedStyle(t);s&&"static"==s.position&&(t.style.position="relative"),function(t){if(!t.getElementById("detectElementResize")){var o=(y||"")+".resize-triggers { "+(w||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',n=t.head||t.getElementsByTagName("head")[0],r=t.createElement("style");r.id="detectElementResize",r.type="text/css",null!=e&&r.setAttribute("nonce",e),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(t.createTextNode(o)),n.appendChild(r)}}(i),t.__resizeLast__={},t.__resizeListeners__=[],(t.__resizeTriggers__=i.createElement("div")).className="resize-triggers";var a='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';if(window.trustedTypes){var l=trustedTypes.createPolicy("react-virtualized-auto-sizer",{createHTML:function(){return a}});t.__resizeTriggers__.innerHTML=l.createHTML("")}else t.__resizeTriggers__.innerHTML=a;t.appendChild(t.__resizeTriggers__),c(t),t.addEventListener("scroll",d,!0),p&&(t.__resizeTriggers__.__animationListener__=function(e){e.animationName==v&&c(t)},t.__resizeTriggers__.addEventListener(p,t.__resizeTriggers__.__animationListener__))}t.__resizeListeners__.push(o)}},removeResizeListener:function(e,t){if(r)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",d,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(p,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(e){}}}}}function eF(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}eu(eH,"defaultProps",{disabled:!1,isControlled:!1,mode:"edges",scrollToColumn:0,scrollToRow:0}),(0,ep.polyfill)(eH);var eW=(eV=eU=function(e){function t(){var e,o;eo(this,t);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return eu(ea(o=el(this,(e=ec(t)).call.apply(e,[this].concat(r)))),"state",{height:o.props.defaultHeight||0,width:o.props.defaultWidth||0}),eu(ea(o),"_parentNode",void 0),eu(ea(o),"_autoSizer",void 0),eu(ea(o),"_window",void 0),eu(ea(o),"_detectElementResize",void 0),eu(ea(o),"_onResize",function(){var e=o.props,t=e.disableHeight,n=e.disableWidth,r=e.onResize;if(o._parentNode){var i=o._parentNode.offsetHeight||0,s=o._parentNode.offsetWidth||0,a=(o._window||window).getComputedStyle(o._parentNode)||{},l=parseInt(a.paddingLeft,10)||0,c=parseInt(a.paddingRight,10)||0,d=parseInt(a.paddingTop,10)||0,h=parseInt(a.paddingBottom,10)||0,u=i-d-h,p=s-l-c;(t||o.state.height===u)&&(n||o.state.width===p)||(o.setState({height:i-d-h,width:s-l-c}),r({height:i,width:s}))}}),eu(ea(o),"_setRef",function(e){o._autoSizer=e}),o}return eh(t,e),es(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._window=this._autoSizer.parentNode.ownerDocument.defaultView,this._detectElementResize=eL(e,this._window),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,o=e.className,n=e.disableHeight,r=e.disableWidth,i=e.style,s=this.state,a=s.height,l=s.width,c={overflow:"visible"},d={};return n||(c.height=0,d.height=a),r||(c.width=0,d.width=l),h.createElement("div",{className:o,ref:this._setRef,style:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?eF(o,!0).forEach(function(t){eu(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):eF(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({},c,{},i)},t(d))}}]),t}(h.Component),eu(eU,"propTypes",null),eV);eu(eW,"defaultProps",{onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}});var eG,eB,eU,eV,ej,eZ,eq=o(6405),eK=o.n(eq),eY=(eZ=ej=function(e){function t(){var e,o;eo(this,t);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return eu(ea(o=el(this,(e=ec(t)).call.apply(e,[this].concat(r)))),"_child",void 0),eu(ea(o),"_measure",function(){var e=o.props,t=e.cache,n=e.columnIndex,r=void 0===n?0:n,i=e.parent,s=e.rowIndex,a=void 0===s?o.props.index||0:s,l=o._getCellMeasurements(),c=l.height,d=l.width;c===t.getHeight(a,r)&&d===t.getWidth(a,r)||(t.set(a,r,d,c),i&&"function"==typeof i.recomputeGridSize&&i.recomputeGridSize({columnIndex:r,rowIndex:a}))}),eu(ea(o),"_registerChild",function(e){e&&Element,o._child=e,e&&o._maybeMeasureCell()}),o}return eh(t,e),es(t,[{key:"componentDidMount",value:function(){this._maybeMeasureCell()}},{key:"componentDidUpdate",value:function(){this._maybeMeasureCell()}},{key:"render",value:function(){var e=this.props.children;return"function"==typeof e?e({measure:this._measure,registerChild:this._registerChild}):e}},{key:"_getCellMeasurements",value:function(){var e=this.props.cache,t=this._child||(0,eq.findDOMNode)(this);if(t&&t.ownerDocument&&t.ownerDocument.defaultView&&t instanceof t.ownerDocument.defaultView.HTMLElement){var o=t.style.width,n=t.style.height;e.hasFixedWidth()||(t.style.width="auto"),e.hasFixedHeight()||(t.style.height="auto");var r=Math.ceil(t.offsetHeight),i=Math.ceil(t.offsetWidth);return o&&(t.style.width=o),n&&(t.style.height=n),{height:r,width:i}}return{height:0,width:0}}},{key:"_maybeMeasureCell",value:function(){var e=this.props,t=e.cache,o=e.columnIndex,n=void 0===o?0:o,r=e.parent,i=e.rowIndex,s=void 0===i?this.props.index||0:i;if(!t.has(s,n)){var a=this._getCellMeasurements(),l=a.height,c=a.width;t.set(s,n,c,l),r&&"function"==typeof r.invalidateCellSizeAfterRender&&r.invalidateCellSizeAfterRender({columnIndex:n,rowIndex:s})}}}]),t}(h.PureComponent),eu(ej,"propTypes",null),eZ);function eQ(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}eu(eY,"__internalCellMeasurerFlag",!1);var eX="requested",eJ=function(e){function t(){var e,o;eo(this,t);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return eu(ea(o=el(this,(e=ec(t)).call.apply(e,[this].concat(r)))),"state",{isScrolling:!1,scrollLeft:0,scrollTop:0}),eu(ea(o),"_calculateSizeAndPositionDataOnNextUpdate",!1),eu(ea(o),"_onSectionRenderedMemoizer",ew()),eu(ea(o),"_onScrollMemoizer",ew(!1)),eu(ea(o),"_invokeOnSectionRenderedHelper",function(){var e=o.props,t=e.cellLayoutManager,n=e.onSectionRendered;o._onSectionRenderedMemoizer({callback:n,indices:{indices:t.getLastRenderedIndices()}})}),eu(ea(o),"_setScrollingContainerRef",function(e){o._scrollingContainer=e}),eu(ea(o),"_updateScrollPositionForScrollToCell",function(){var e=o.props,t=e.cellLayoutManager,n=e.height,r=e.scrollToAlignment,i=e.scrollToCell,s=e.width,a=o.state,l=a.scrollLeft,c=a.scrollTop;if(i>=0){var d=t.getScrollPositionForCell({align:r,cellIndex:i,height:n,scrollLeft:l,scrollTop:c,width:s});d.scrollLeft===l&&d.scrollTop===c||o._setScrollPosition(d)}}),eu(ea(o),"_onScroll",function(e){if(e.target===o._scrollingContainer){o._enablePointerEventsAfterDelay();var t=o.props,n=t.cellLayoutManager,r=t.height,i=t.isScrollingChange,s=t.width,a=o._scrollbarSize,l=n.getTotalSize(),c=l.height,d=l.width,h=Math.max(0,Math.min(d-s+a,e.target.scrollLeft)),u=Math.max(0,Math.min(c-r+a,e.target.scrollTop));if(o.state.scrollLeft!==h||o.state.scrollTop!==u){var p=e.cancelable?"observed":eX;o.state.isScrolling||i(!0),o.setState({isScrolling:!0,scrollLeft:h,scrollPositionChangeReason:p,scrollTop:u})}o._invokeOnScrollMemoizer({scrollLeft:h,scrollTop:u,totalWidth:d,totalHeight:c})}}),o._scrollbarSize=ex(),void 0===o._scrollbarSize?(o._scrollbarSizeMeasured=!1,o._scrollbarSize=0):o._scrollbarSizeMeasured=!0,o}return eh(t,e),es(t,[{key:"recomputeCellSizesAndPositions",value:function(){this._calculateSizeAndPositionDataOnNextUpdate=!0,this.forceUpdate()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.cellLayoutManager,o=e.scrollLeft,n=e.scrollToCell,r=e.scrollTop;this._scrollbarSizeMeasured||(this._scrollbarSize=ex(),this._scrollbarSizeMeasured=!0,this.setState({})),n>=0?this._updateScrollPositionForScrollToCell():(o>=0||r>=0)&&this._setScrollPosition({scrollLeft:o,scrollTop:r}),this._invokeOnSectionRenderedHelper();var i=t.getTotalSize(),s=i.height,a=i.width;this._invokeOnScrollMemoizer({scrollLeft:o||0,scrollTop:r||0,totalHeight:s,totalWidth:a})}},{key:"componentDidUpdate",value:function(e,t){var o=this.props,n=o.height,r=o.scrollToAlignment,i=o.scrollToCell,s=o.width,a=this.state,l=a.scrollLeft,c=a.scrollPositionChangeReason,d=a.scrollTop;c===eX&&(l>=0&&l!==t.scrollLeft&&l!==this._scrollingContainer.scrollLeft&&(this._scrollingContainer.scrollLeft=l),d>=0&&d!==t.scrollTop&&d!==this._scrollingContainer.scrollTop&&(this._scrollingContainer.scrollTop=d)),n===e.height&&r===e.scrollToAlignment&&i===e.scrollToCell&&s===e.width||this._updateScrollPositionForScrollToCell(),this._invokeOnSectionRenderedHelper()}},{key:"componentWillUnmount",value:function(){this._disablePointerEventsTimeoutId&&clearTimeout(this._disablePointerEventsTimeoutId)}},{key:"render",value:function(){var e=this.props,t=e.autoHeight,o=e.cellCount,n=e.cellLayoutManager,r=e.className,i=e.height,s=e.horizontalOverscanSize,a=e.id,l=e.noContentRenderer,c=e.style,d=e.verticalOverscanSize,u=e.width,p=this.state,f=p.isScrolling,m=p.scrollLeft,g=p.scrollTop;(this._lastRenderedCellCount!==o||this._lastRenderedCellLayoutManager!==n||this._calculateSizeAndPositionDataOnNextUpdate)&&(this._lastRenderedCellCount=o,this._lastRenderedCellLayoutManager=n,this._calculateSizeAndPositionDataOnNextUpdate=!1,n.calculateSizeAndPositionData());var b=n.getTotalSize(),v=b.height,y=b.width,w=Math.max(0,m-s),C=Math.max(0,g-d),S=Math.min(y,m+u+s),x=Math.min(v,g+i+d),_=i>0&&u>0?n.cellRenderers({height:x-C,isScrolling:f,width:S-w,x:w,y:C}):[],R={boxSizing:"border-box",direction:"ltr",height:t?"auto":i,position:"relative",WebkitOverflowScrolling:"touch",width:u,willChange:"transform"},T=v>i?this._scrollbarSize:0,k=y>u?this._scrollbarSize:0;return R.overflowX=y+T<=u?"hidden":"auto",R.overflowY=v+k<=i?"hidden":"auto",h.createElement("div",{ref:this._setScrollingContainerRef,"aria-label":this.props["aria-label"],className:em("ReactVirtualized__Collection",r),id:a,onScroll:this._onScroll,role:"grid",style:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?eQ(o,!0).forEach(function(t){eu(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):eQ(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({},R,{},c),tabIndex:0},o>0&&h.createElement("div",{className:"ReactVirtualized__Collection__innerScrollContainer",style:{height:v,maxHeight:v,maxWidth:y,overflow:"hidden",pointerEvents:f?"none":"",width:y}},_),0===o&&l())}},{key:"_enablePointerEventsAfterDelay",value:function(){var e=this;this._disablePointerEventsTimeoutId&&clearTimeout(this._disablePointerEventsTimeoutId),this._disablePointerEventsTimeoutId=setTimeout(function(){(0,e.props.isScrollingChange)(!1),e._disablePointerEventsTimeoutId=null,e.setState({isScrolling:!1})},150)}},{key:"_invokeOnScrollMemoizer",value:function(e){var t=this,o=e.scrollLeft,n=e.scrollTop,r=e.totalHeight,i=e.totalWidth;this._onScrollMemoizer({callback:function(e){var o=e.scrollLeft,n=e.scrollTop,s=t.props,a=s.height;(0,s.onScroll)({clientHeight:a,clientWidth:s.width,scrollHeight:r,scrollLeft:o,scrollTop:n,scrollWidth:i})},indices:{scrollLeft:o,scrollTop:n}})}},{key:"_setScrollPosition",value:function(e){var t=e.scrollLeft,o=e.scrollTop,n={scrollPositionChangeReason:eX};t>=0&&(n.scrollLeft=t),o>=0&&(n.scrollTop=o),(t>=0&&t!==this.state.scrollLeft||o>=0&&o!==this.state.scrollTop)&&this.setState(n)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return 0!==e.cellCount||0===t.scrollLeft&&0===t.scrollTop?e.scrollLeft!==t.scrollLeft||e.scrollTop!==t.scrollTop?{scrollLeft:null!=e.scrollLeft?e.scrollLeft:t.scrollLeft,scrollTop:null!=e.scrollTop?e.scrollTop:t.scrollTop,scrollPositionChangeReason:eX}:null:{scrollLeft:0,scrollTop:0,scrollPositionChangeReason:eX}}}]),t}(h.PureComponent);eu(eJ,"defaultProps",{"aria-label":"grid",horizontalOverscanSize:0,noContentRenderer:function(){return null},onScroll:function(){return null},onSectionRendered:function(){return null},scrollToAlignment:"auto",scrollToCell:-1,style:{},verticalOverscanSize:0}),eJ.propTypes={},(0,ep.polyfill)(eJ);var e0=function(){function e(t){var o=t.height,n=t.width,r=t.x,i=t.y;eo(this,e),this.height=o,this.width=n,this.x=r,this.y=i,this._indexMap={},this._indices=[]}return es(e,[{key:"addCellIndex",value:function(e){var t=e.index;this._indexMap[t]||(this._indexMap[t]=!0,this._indices.push(t))}},{key:"getCellIndices",value:function(){return this._indices}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y," ").concat(this.width,"x").concat(this.height)}}]),e}(),e1=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;eo(this,e),this._sectionSize=t,this._cellMetadata=[],this._sections={}}return es(e,[{key:"getCellIndices",value:function(e){var t=e.height,o=e.width,n=e.x,r=e.y,i={};return this.getSections({height:t,width:o,x:n,y:r}).forEach(function(e){return e.getCellIndices().forEach(function(e){i[e]=e})}),Object.keys(i).map(function(e){return i[e]})}},{key:"getCellMetadata",value:function(e){var t=e.index;return this._cellMetadata[t]}},{key:"getSections",value:function(e){for(var t=e.height,o=e.width,n=e.x,r=e.y,i=Math.floor(n/this._sectionSize),s=Math.floor((n+o-1)/this._sectionSize),a=Math.floor(r/this._sectionSize),l=Math.floor((r+t-1)/this._sectionSize),c=[],d=i;d<=s;d++)for(var h=a;h<=l;h++){var u="".concat(d,".").concat(h);this._sections[u]||(this._sections[u]=new e0({height:this._sectionSize,width:this._sectionSize,x:d*this._sectionSize,y:h*this._sectionSize})),c.push(this._sections[u])}return c}},{key:"getTotalSectionCount",value:function(){return Object.keys(this._sections).length}},{key:"toString",value:function(){var e=this;return Object.keys(this._sections).map(function(t){return e._sections[t].toString()})}},{key:"registerCell",value:function(e){var t=e.cellMetadatum,o=e.index;this._cellMetadata[o]=t,this.getSections(t).forEach(function(e){return e.addCellIndex({index:o})})}}]),e}();function e2(e){var t=e.align,o=e.cellOffset,n=e.cellSize,r=e.containerSize,i=e.currentOffset,s=o-r+n;switch(void 0===t?"auto":t){case"start":return o;case"end":return s;case"center":return o-(r-n)/2;default:return Math.max(s,Math.min(o,i))}}var e5=function(e){function t(e,o){var n;return eo(this,t),(n=el(this,ec(t).call(this,e,o)))._cellMetadata=[],n._lastRenderedCellIndices=[],n._cellCache=[],n._isScrollingChange=n._isScrollingChange.bind(ea(n)),n._setCollectionViewRef=n._setCollectionViewRef.bind(ea(n)),n}return eh(t,e),es(t,[{key:"forceUpdate",value:function(){void 0!==this._collectionView&&this._collectionView.forceUpdate()}},{key:"recomputeCellSizesAndPositions",value:function(){this._cellCache=[],this._collectionView.recomputeCellSizesAndPositions()}},{key:"render",value:function(){var e=ef({},this.props);return h.createElement(eJ,ef({cellLayoutManager:this,isScrollingChange:this._isScrollingChange,ref:this._setCollectionViewRef},e))}},{key:"calculateSizeAndPositionData",value:function(){var e=this.props,t=function(e){for(var t=e.cellCount,o=e.cellSizeAndPositionGetter,n=e.sectionSize,r=[],i=new e1(n),s=0,a=0,l=0;l<t;l++){var c=o({index:l});if(null==c.height||isNaN(c.height)||null==c.width||isNaN(c.width)||null==c.x||isNaN(c.x)||null==c.y||isNaN(c.y))throw Error("Invalid metadata returned for cell ".concat(l,":\n        x:").concat(c.x,", y:").concat(c.y,", width:").concat(c.width,", height:").concat(c.height));s=Math.max(s,c.y+c.height),a=Math.max(a,c.x+c.width),r[l]=c,i.registerCell({cellMetadatum:c,index:l})}return{cellMetadata:r,height:s,sectionManager:i,width:a}}({cellCount:e.cellCount,cellSizeAndPositionGetter:e.cellSizeAndPositionGetter,sectionSize:e.sectionSize});this._cellMetadata=t.cellMetadata,this._sectionManager=t.sectionManager,this._height=t.height,this._width=t.width}},{key:"getLastRenderedIndices",value:function(){return this._lastRenderedCellIndices}},{key:"getScrollPositionForCell",value:function(e){var t=e.align,o=e.cellIndex,n=e.height,r=e.scrollLeft,i=e.scrollTop,s=e.width,a=this.props.cellCount;if(o>=0&&o<a){var l=this._cellMetadata[o];r=e2({align:t,cellOffset:l.x,cellSize:l.width,containerSize:s,currentOffset:r,targetIndex:o}),i=e2({align:t,cellOffset:l.y,cellSize:l.height,containerSize:n,currentOffset:i,targetIndex:o})}return{scrollLeft:r,scrollTop:i}}},{key:"getTotalSize",value:function(){return{height:this._height,width:this._width}}},{key:"cellRenderers",value:function(e){var t=this,o=e.height,n=e.isScrolling,r=e.width,i=e.x,s=e.y,a=this.props,l=a.cellGroupRenderer,c=a.cellRenderer;return this._lastRenderedCellIndices=this._sectionManager.getCellIndices({height:o,width:r,x:i,y:s}),l({cellCache:this._cellCache,cellRenderer:c,cellSizeAndPositionGetter:function(e){var o=e.index;return t._sectionManager.getCellMetadata({index:o})},indices:this._lastRenderedCellIndices,isScrolling:n})}},{key:"_isScrollingChange",value:function(e){e||(this._cellCache=[])}},{key:"_setCollectionViewRef",value:function(e){this._collectionView=e}}]),t}(h.PureComponent);function e3(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}function e6(e,t){if(e){if("string"==typeof e)return e3(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e3(e,t):void 0}}eu(e5,"defaultProps",{"aria-label":"grid",cellGroupRenderer:function(e){var t=e.cellCache,o=e.cellRenderer,n=e.cellSizeAndPositionGetter,r=e.indices,i=e.isScrolling;return r.map(function(e){var r=n({index:e}),s={index:e,isScrolling:i,key:e,style:{height:r.height,left:r.x,position:"absolute",top:r.y,width:r.width}};return i?(e in t||(t[e]=o(s)),t[e]):o(s)}).filter(function(e){return!!e})}}),e5.propTypes={},function(e){function t(e,o){var n;return eo(this,t),(n=el(this,ec(t).call(this,e,o)))._registerChild=n._registerChild.bind(ea(n)),n}return eh(t,e),es(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,o=t.columnMaxWidth,n=t.columnMinWidth,r=t.columnCount,i=t.width;o===e.columnMaxWidth&&n===e.columnMinWidth&&r===e.columnCount&&i===e.width||this._registeredChild&&this._registeredChild.recomputeGridSize()}},{key:"render",value:function(){var e=this.props,t=e.children,o=e.columnMaxWidth,n=e.columnMinWidth,r=e.columnCount,i=e.width,s=i/r;return s=Math.floor(s=Math.min(o?Math.min(o,i):i,s=Math.max(n||1,s))),t({adjustedWidth:Math.min(i,s*r),columnWidth:s,getColumnWidth:function(){return s},registerChild:this._registerChild})}},{key:"_registerChild",value:function(e){if(e&&"function"!=typeof e.recomputeGridSize)throw Error("Unexpected child type registered; only Grid/MultiGrid children are supported.");this._registeredChild=e,this._registeredChild&&this._registeredChild.recomputeGridSize()}}]),t}(h.PureComponent).propTypes={};var e4=function(e){function t(e,o){var n;return eo(this,t),(n=el(this,ec(t).call(this,e,o)))._loadMoreRowsMemoizer=ew(),n._onRowsRendered=n._onRowsRendered.bind(ea(n)),n._registerChild=n._registerChild.bind(ea(n)),n}return eh(t,e),es(t,[{key:"resetLoadMoreRowsCache",value:function(e){this._loadMoreRowsMemoizer=ew(),e&&this._doStuff(this._lastRenderedStartIndex,this._lastRenderedStopIndex)}},{key:"render",value:function(){return(0,this.props.children)({onRowsRendered:this._onRowsRendered,registerChild:this._registerChild})}},{key:"_loadUnloadedRanges",value:function(e){var t=this,o=this.props.loadMoreRows;e.forEach(function(e){var n=o(e);n&&n.then(function(){var o,n,r,i,s;n=(o={lastRenderedStartIndex:t._lastRenderedStartIndex,lastRenderedStopIndex:t._lastRenderedStopIndex,startIndex:e.startIndex,stopIndex:e.stopIndex}).lastRenderedStartIndex,r=o.lastRenderedStopIndex,i=o.startIndex,s=o.stopIndex,i>r||s<n||t._registeredChild&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o="function"==typeof e.recomputeGridSize?e.recomputeGridSize:e.recomputeRowHeights;o?o.call(e,t):e.forceUpdate()}(t._registeredChild,t._lastRenderedStartIndex)})})}},{key:"_onRowsRendered",value:function(e){var t=e.startIndex,o=e.stopIndex;this._lastRenderedStartIndex=t,this._lastRenderedStopIndex=o,this._doStuff(t,o)}},{key:"_doStuff",value:function(e,t){var o,n,r=this,i=this.props,s=i.isRowLoaded,a=i.minimumBatchSize,l=i.rowCount,c=i.threshold,d=function(e){for(var t=e.isRowLoaded,o=e.minimumBatchSize,n=e.rowCount,r=e.startIndex,i=e.stopIndex,s=[],a=null,l=null,c=r;c<=i;c++)t({index:c})?null!==l&&(s.push({startIndex:a,stopIndex:l}),a=l=null):(l=c,null===a&&(a=c));if(null!==l){for(var d=Math.min(Math.max(l,a+o-1),n-1),h=l+1;h<=d&&!t({index:h});h++)l=h;s.push({startIndex:a,stopIndex:l})}if(s.length)for(var u=s[0];u.stopIndex-u.startIndex+1<o&&u.startIndex>0;){var p=u.startIndex-1;if(t({index:p}))break;u.startIndex=p}return s}({isRowLoaded:s,minimumBatchSize:a,rowCount:l,startIndex:Math.max(0,e-c),stopIndex:Math.min(l-1,t+c)}),h=(n=[]).concat.apply(n,function(e){if(Array.isArray(e))return e3(e)}(o=d.map(function(e){return[e.startIndex,e.stopIndex]}))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||e6(o)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());this._loadMoreRowsMemoizer({callback:function(){r._loadUnloadedRanges(d)},indices:{squashedUnloadedRanges:h}})}},{key:"_registerChild",value:function(e){this._registeredChild=e}}]),t}(h.PureComponent);eu(e4,"defaultProps",{minimumBatchSize:10,rowCount:0,threshold:15}),e4.propTypes={};var e7,e9,e8=(e9=e7=function(e){function t(){var e,o;eo(this,t);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return eu(ea(o=el(this,(e=ec(t)).call.apply(e,[this].concat(r)))),"Grid",void 0),eu(ea(o),"_cellRenderer",function(e){var t=e.parent,n=e.rowIndex,r=e.style,i=e.isScrolling,s=e.isVisible,a=e.key,l=o.props.rowRenderer,c=Object.getOwnPropertyDescriptor(r,"width");return c&&c.writable&&(r.width="100%"),l({index:n,style:r,isScrolling:i,isVisible:s,key:a,parent:t})}),eu(ea(o),"_setRef",function(e){o.Grid=e}),eu(ea(o),"_onScroll",function(e){var t=e.clientHeight,n=e.scrollHeight,r=e.scrollTop;(0,o.props.onScroll)({clientHeight:t,scrollHeight:n,scrollTop:r})}),eu(ea(o),"_onScrollToRowCausedUpdate",function(e){var t=e.clientHeight,n=e.scrollHeight,r=e.scrollTop;(0,o.props.onScrollToRowCausedUpdate)({clientHeight:t,scrollHeight:n,scrollTop:r})}),eu(ea(o),"_onSectionRendered",function(e){var t=e.rowOverscanStartIndex,n=e.rowOverscanStopIndex,r=e.rowStartIndex,i=e.rowStopIndex;(0,o.props.onRowsRendered)({overscanStartIndex:t,overscanStopIndex:n,startIndex:r,stopIndex:i})}),o}return eh(t,e),es(t,[{key:"forceUpdateGrid",value:function(){this.Grid&&this.Grid.forceUpdate()}},{key:"getOffsetForRow",value:function(e){var t=e.alignment,o=e.index;return this.Grid?this.Grid.getOffsetForCell({alignment:t,rowIndex:o,columnIndex:0}).scrollTop:0}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,o=e.rowIndex;this.Grid&&this.Grid.invalidateCellSizeAfterRender({rowIndex:o,columnIndex:t})}},{key:"measureAllRows",value:function(){this.Grid&&this.Grid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,o=e.rowIndex;this.Grid&&this.Grid.recomputeGridSize({rowIndex:void 0===o?0:o,columnIndex:void 0===t?0:t})}},{key:"recomputeRowHeights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.recomputeGridSize({rowIndex:e,columnIndex:0})}},{key:"scrollToPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToPosition({scrollTop:e})}},{key:"scrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToCell({columnIndex:0,rowIndex:e})}},{key:"render",value:function(){var e=this.props,t=e.className,o=e.noRowsRenderer,n=e.scrollToIndex,r=e.width,i=em("ReactVirtualized__List",t);return h.createElement(eP,ef({},this.props,{autoContainerWidth:!0,cellRenderer:this._cellRenderer,className:i,columnWidth:r,columnCount:1,noContentRenderer:o,onScroll:this._onScroll,onScrollToTargetCausedUpdate:this._onScrollToRowCausedUpdate,onSectionRendered:this._onSectionRendered,ref:this._setRef,scrollToRow:n}))}}]),t}(h.PureComponent),eu(e7,"propTypes",null),e9);eu(e8,"defaultProps",{autoHeight:!1,estimatedRowSize:30,onScroll:function(){},onScrollToRowCausedUpdate:function(){},noRowsRenderer:function(){return null},onRowsRendered:function(){},overscanIndicesGetter:eN,overscanRowCount:10,scrollToAlignment:"auto",scrollToIndex:-1,style:{}});let te={ge:function(e,t,o,n,r){return"function"==typeof o?function(e,t,o,n,r){for(var i=o+1;t<=o;){var s=t+o>>>1;r(e[s],n)>=0?(i=s,o=s-1):t=s+1}return i}(e,void 0===n?0:0|n,void 0===r?e.length-1:0|r,t,o):function(e,t,o,n){for(var r=o+1;t<=o;){var i=t+o>>>1;e[i]>=n?(r=i,o=i-1):t=i+1}return r}(e,void 0===o?0:0|o,void 0===n?e.length-1:0|n,t)},gt:function(e,t,o,n,r){return"function"==typeof o?function(e,t,o,n,r){for(var i=o+1;t<=o;){var s=t+o>>>1;r(e[s],n)>0?(i=s,o=s-1):t=s+1}return i}(e,void 0===n?0:0|n,void 0===r?e.length-1:0|r,t,o):function(e,t,o,n){for(var r=o+1;t<=o;){var i=t+o>>>1;e[i]>n?(r=i,o=i-1):t=i+1}return r}(e,void 0===o?0:0|o,void 0===n?e.length-1:0|n,t)},lt:function(e,t,o,n,r){return"function"==typeof o?function(e,t,o,n,r){for(var i=t-1;t<=o;){var s=t+o>>>1;0>r(e[s],n)?(i=s,t=s+1):o=s-1}return i}(e,void 0===n?0:0|n,void 0===r?e.length-1:0|r,t,o):function(e,t,o,n){for(var r=t-1;t<=o;){var i=t+o>>>1;e[i]<n?(r=i,t=i+1):o=i-1}return r}(e,void 0===o?0:0|o,void 0===n?e.length-1:0|n,t)},le:function(e,t,o,n,r){return"function"==typeof o?function(e,t,o,n,r){for(var i=t-1;t<=o;){var s=t+o>>>1;0>=r(e[s],n)?(i=s,t=s+1):o=s-1}return i}(e,void 0===n?0:0|n,void 0===r?e.length-1:0|r,t,o):function(e,t,o,n){for(var r=t-1;t<=o;){var i=t+o>>>1;e[i]<=n?(r=i,t=i+1):o=i-1}return r}(e,void 0===o?0:0|o,void 0===n?e.length-1:0|n,t)},eq:function(e,t,o,n,r){return"function"==typeof o?function(e,t,o,n,r){for(;t<=o;){var i=t+o>>>1,s=r(e[i],n);if(0===s)return i;s<=0?t=i+1:o=i-1}return -1}(e,void 0===n?0:0|n,void 0===r?e.length-1:0|r,t,o):function(e,t,o,n){for(;t<=o;){var r=t+o>>>1,i=e[r];if(i===n)return r;i<=n?t=r+1:o=r-1}return -1}(e,void 0===o?0:0|o,void 0===n?e.length-1:0|n,t)}};function tt(e,t,o,n,r){this.mid=e,this.left=t,this.right=o,this.leftPoints=n,this.rightPoints=r,this.count=(t?t.count:0)+(o?o.count:0)+n.length}var to=tt.prototype;function tn(e,t){e.mid=t.mid,e.left=t.left,e.right=t.right,e.leftPoints=t.leftPoints,e.rightPoints=t.rightPoints,e.count=t.count}function tr(e,t){var o=tp(t);e.mid=o.mid,e.left=o.left,e.right=o.right,e.leftPoints=o.leftPoints,e.rightPoints=o.rightPoints,e.count=o.count}function ti(e,t){var o=e.intervals([]);o.push(t),tr(e,o)}function ts(e,t){var o=e.intervals([]),n=o.indexOf(t);return n<0?0:(o.splice(n,1),tr(e,o),1)}function ta(e,t,o){for(var n=0;n<e.length&&e[n][0]<=t;++n){var r=o(e[n]);if(r)return r}}function tl(e,t,o){for(var n=e.length-1;n>=0&&e[n][1]>=t;--n){var r=o(e[n]);if(r)return r}}function tc(e,t){for(var o=0;o<e.length;++o){var n=t(e[o]);if(n)return n}}function td(e,t){return e-t}function th(e,t){return e[0]-t[0]||e[1]-t[1]}function tu(e,t){return e[1]-t[1]||e[0]-t[0]}function tp(e){if(0===e.length)return null;for(var t=[],o=0;o<e.length;++o)t.push(e[o][0],e[o][1]);t.sort(td);var n=t[t.length>>1],r=[],i=[],s=[];for(o=0;o<e.length;++o){var a=e[o];a[1]<n?r.push(a):n<a[0]?i.push(a):s.push(a)}var l=s.slice();return s.sort(th),l.sort(tu),new tt(n,tp(r),tp(i),s,l)}function tf(e){this.root=e}to.intervals=function(e){return e.push.apply(e,this.leftPoints),this.left&&this.left.intervals(e),this.right&&this.right.intervals(e),e},to.insert=function(e){var t=this.count-this.leftPoints.length;if(this.count+=1,e[1]<this.mid)this.left?4*(this.left.count+1)>3*(t+1)?ti(this,e):this.left.insert(e):this.left=tp([e]);else if(e[0]>this.mid)this.right?4*(this.right.count+1)>3*(t+1)?ti(this,e):this.right.insert(e):this.right=tp([e]);else{var o=te.ge(this.leftPoints,e,th),n=te.ge(this.rightPoints,e,tu);this.leftPoints.splice(o,0,e),this.rightPoints.splice(n,0,e)}},to.remove=function(e){var t=this.count-this.leftPoints;if(e[1]<this.mid)return this.left?4*(this.right?this.right.count:0)>3*(t-1)?ts(this,e):2===(i=this.left.remove(e))?(this.left=null,this.count-=1,1):(1===i&&(this.count-=1),i):0;if(e[0]>this.mid)return this.right?4*(this.left?this.left.count:0)>3*(t-1)?ts(this,e):2===(i=this.right.remove(e))?(this.right=null,this.count-=1,1):(1===i&&(this.count-=1),i):0;if(1===this.count)return this.leftPoints[0]===e?2:0;if(1===this.leftPoints.length&&this.leftPoints[0]===e){if(this.left&&this.right){for(var o=this,n=this.left;n.right;)o=n,n=n.right;if(o===this)n.right=this.right;else{var r=this.left,i=this.right;o.count-=n.count,o.right=n.left,n.left=r,n.right=i}tn(this,n),this.count=(this.left?this.left.count:0)+(this.right?this.right.count:0)+this.leftPoints.length}else this.left?tn(this,this.left):tn(this,this.right);return 1}for(r=te.ge(this.leftPoints,e,th);r<this.leftPoints.length&&this.leftPoints[r][0]===e[0];++r)if(this.leftPoints[r]===e){for(this.count-=1,this.leftPoints.splice(r,1),i=te.ge(this.rightPoints,e,tu);i<this.rightPoints.length&&this.rightPoints[i][1]===e[1];++i)if(this.rightPoints[i]===e)return this.rightPoints.splice(i,1),1}return 0},to.queryPoint=function(e,t){if(e<this.mid)return this.left&&(o=this.left.queryPoint(e,t))?o:ta(this.leftPoints,e,t);if(e>this.mid){var o;return this.right&&(o=this.right.queryPoint(e,t))?o:tl(this.rightPoints,e,t)}return tc(this.leftPoints,t)},to.queryInterval=function(e,t,o){var n;return e<this.mid&&this.left&&(n=this.left.queryInterval(e,t,o))||t>this.mid&&this.right&&(n=this.right.queryInterval(e,t,o))?n:t<this.mid?ta(this.leftPoints,t,o):e>this.mid?tl(this.rightPoints,e,o):tc(this.leftPoints,o)};var tm=tf.prototype;tm.insert=function(e){this.root?this.root.insert(e):this.root=new tt(e[0],null,null,[e],[e])},tm.remove=function(e){if(this.root){var t=this.root.remove(e);return 2===t&&(this.root=null),0!==t}return!1},tm.queryPoint=function(e,t){if(this.root)return this.root.queryPoint(e,t)},tm.queryInterval=function(e,t,o){if(e<=t&&this.root)return this.root.queryInterval(e,t,o)},Object.defineProperty(tm,"count",{get:function(){return this.root?this.root.count:0}}),Object.defineProperty(tm,"intervals",{get:function(){return this.root?this.root.intervals([]):[]}});var tg,tb,tv=function(){function e(){var t;eo(this,e),eu(this,"_columnSizeMap",{}),eu(this,"_intervalTree",new tf(t&&0!==t.length?tp(t):null)),eu(this,"_leftMap",{})}return es(e,[{key:"estimateTotalHeight",value:function(e,t,o){var n=e-this.count;return this.tallestColumnSize+Math.ceil(n/t)*o}},{key:"range",value:function(e,t,o){var n=this;this._intervalTree.queryInterval(e,e+t,function(e){var t=function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,i,s,a=[],l=!0,c=!1;try{if(i=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;l=!1}else for(;!(l=(n=i.call(o)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{if(!l&&null!=o.return&&(s=o.return(),Object(s)!==s))return}finally{if(c)throw r}}return a}}(e,3)||e6(e,3)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=t[0],i=(t[1],t[2]);return o(i,n._leftMap[i],r)})}},{key:"setPosition",value:function(e,t,o,n){this._intervalTree.insert([o,o+n,e]),this._leftMap[e]=t;var r=this._columnSizeMap,i=r[t];r[t]=void 0===i?o+n:Math.max(i,o+n)}},{key:"count",get:function(){return this._intervalTree.count}},{key:"shortestColumnSize",get:function(){var e=this._columnSizeMap,t=0;for(var o in e){var n=e[o];t=0===t?n:Math.min(t,n)}return t}},{key:"tallestColumnSize",get:function(){var e=this._columnSizeMap,t=0;for(var o in e)t=Math.max(t,e[o]);return t}}]),e}();function ty(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}var tw=(tb=tg=function(e){function t(){var e,o;eo(this,t);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return eu(ea(o=el(this,(e=ec(t)).call.apply(e,[this].concat(r)))),"state",{isScrolling:!1,scrollTop:0}),eu(ea(o),"_debounceResetIsScrollingId",void 0),eu(ea(o),"_invalidateOnUpdateStartIndex",null),eu(ea(o),"_invalidateOnUpdateStopIndex",null),eu(ea(o),"_positionCache",new tv),eu(ea(o),"_startIndex",null),eu(ea(o),"_startIndexMemoized",null),eu(ea(o),"_stopIndex",null),eu(ea(o),"_stopIndexMemoized",null),eu(ea(o),"_debounceResetIsScrollingCallback",function(){o.setState({isScrolling:!1})}),eu(ea(o),"_setScrollingContainerRef",function(e){o._scrollingContainer=e}),eu(ea(o),"_onScroll",function(e){var t=o.props.height,n=e.currentTarget.scrollTop,r=Math.min(Math.max(0,o._getEstimatedTotalHeight()-t),n);n===r&&(o._debounceResetIsScrolling(),o.state.scrollTop!==r&&o.setState({isScrolling:!0,scrollTop:r}))}),o}return eh(t,e),es(t,[{key:"clearCellPositions",value:function(){this._positionCache=new tv,this.forceUpdate()}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.rowIndex;null===this._invalidateOnUpdateStartIndex?(this._invalidateOnUpdateStartIndex=t,this._invalidateOnUpdateStopIndex=t):(this._invalidateOnUpdateStartIndex=Math.min(this._invalidateOnUpdateStartIndex,t),this._invalidateOnUpdateStopIndex=Math.max(this._invalidateOnUpdateStopIndex,t))}},{key:"recomputeCellPositions",value:function(){var e=this._positionCache.count-1;this._positionCache=new tv,this._populatePositionCache(0,e),this.forceUpdate()}},{key:"componentDidMount",value:function(){this._checkInvalidateOnUpdate(),this._invokeOnScrollCallback(),this._invokeOnCellsRenderedCallback()}},{key:"componentDidUpdate",value:function(e,t){this._checkInvalidateOnUpdate(),this._invokeOnScrollCallback(),this._invokeOnCellsRenderedCallback(),this.props.scrollTop!==e.scrollTop&&this._debounceResetIsScrolling()}},{key:"componentWillUnmount",value:function(){this._debounceResetIsScrollingId&&eI(this._debounceResetIsScrollingId)}},{key:"render",value:function(){var e,t=this,o=this.props,n=o.autoHeight,r=o.cellCount,i=o.cellMeasurerCache,s=o.cellRenderer,a=o.className,l=o.height,c=o.id,d=o.keyMapper,u=o.overscanByPixels,p=o.role,f=o.style,m=o.tabIndex,g=o.width,b=o.rowDirection,v=this.state,y=v.isScrolling,w=v.scrollTop,C=[],S=this._getEstimatedTotalHeight(),x=this._positionCache.shortestColumnSize,_=this._positionCache.count,R=0;if(this._positionCache.range(Math.max(0,w-u),l+2*u,function(o,n,r){var a;void 0===e?(R=o,e=o):(R=Math.min(R,o),e=Math.max(e,o)),C.push(s({index:o,isScrolling:y,key:d(o),parent:t,style:(eu(a={height:i.getHeight(o)},"ltr"===b?"left":"right",n),eu(a,"position","absolute"),eu(a,"top",r),eu(a,"width",i.getWidth(o)),a)}))}),x<w+l+u&&_<r)for(var T=Math.min(r-_,Math.ceil((w+l+u-x)/i.defaultHeight*g/i.defaultWidth)),k=_;k<_+T;k++)e=k,C.push(s({index:k,isScrolling:y,key:d(k),parent:this,style:{width:i.getWidth(k)}}));return this._startIndex=R,this._stopIndex=e,h.createElement("div",{ref:this._setScrollingContainerRef,"aria-label":this.props["aria-label"],className:em("ReactVirtualized__Masonry",a),id:c,onScroll:this._onScroll,role:p,style:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ty(o,!0).forEach(function(t){eu(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ty(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({boxSizing:"border-box",direction:"ltr",height:n?"auto":l,overflowX:"hidden",overflowY:S<l?"hidden":"auto",position:"relative",width:g,WebkitOverflowScrolling:"touch",willChange:"transform"},f),tabIndex:m},h.createElement("div",{className:"ReactVirtualized__Masonry__innerScrollContainer",style:{width:"100%",height:S,maxWidth:"100%",maxHeight:S,overflow:"hidden",pointerEvents:y?"none":"",position:"relative"}},C))}},{key:"_checkInvalidateOnUpdate",value:function(){if("number"==typeof this._invalidateOnUpdateStartIndex){var e=this._invalidateOnUpdateStartIndex,t=this._invalidateOnUpdateStopIndex;this._invalidateOnUpdateStartIndex=null,this._invalidateOnUpdateStopIndex=null,this._populatePositionCache(e,t),this.forceUpdate()}}},{key:"_debounceResetIsScrolling",value:function(){var e=this.props.scrollingResetTimeInterval;this._debounceResetIsScrollingId&&eI(this._debounceResetIsScrollingId),this._debounceResetIsScrollingId=eM(this._debounceResetIsScrollingCallback,e)}},{key:"_getEstimatedTotalHeight",value:function(){var e=this.props,t=e.cellCount,o=e.cellMeasurerCache,n=Math.max(1,Math.floor(e.width/o.defaultWidth));return this._positionCache.estimateTotalHeight(t,n,o.defaultHeight)}},{key:"_invokeOnScrollCallback",value:function(){var e=this.props,t=e.height,o=e.onScroll,n=this.state.scrollTop;this._onScrollMemoized!==n&&(o({clientHeight:t,scrollHeight:this._getEstimatedTotalHeight(),scrollTop:n}),this._onScrollMemoized=n)}},{key:"_invokeOnCellsRenderedCallback",value:function(){this._startIndexMemoized===this._startIndex&&this._stopIndexMemoized===this._stopIndex||((0,this.props.onCellsRendered)({startIndex:this._startIndex,stopIndex:this._stopIndex}),this._startIndexMemoized=this._startIndex,this._stopIndexMemoized=this._stopIndex)}},{key:"_populatePositionCache",value:function(e,t){for(var o=this.props,n=o.cellMeasurerCache,r=o.cellPositioner,i=e;i<=t;i++){var s=r(i),a=s.left,l=s.top;this._positionCache.setPosition(i,a,l,n.getHeight(i))}}}],[{key:"getDerivedStateFromProps",value:function(e,t){return void 0!==e.scrollTop&&t.scrollTop!==e.scrollTop?{isScrolling:!0,scrollTop:e.scrollTop}:null}}]),t}(h.PureComponent),eu(tg,"propTypes",null),tb);function tC(){}eu(tw,"defaultProps",{autoHeight:!1,keyMapper:function(e){return e},onCellsRendered:tC,onScroll:tC,overscanByPixels:20,role:"grid",scrollingResetTimeInterval:150,style:{},tabIndex:0,rowDirection:"ltr"}),(0,ep.polyfill)(tw);var tS=function(){function e(){var t=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};eo(this,e),eu(this,"_cellMeasurerCache",void 0),eu(this,"_columnIndexOffset",void 0),eu(this,"_rowIndexOffset",void 0),eu(this,"columnWidth",function(e){var o=e.index;t._cellMeasurerCache.columnWidth({index:o+t._columnIndexOffset})}),eu(this,"rowHeight",function(e){var o=e.index;t._cellMeasurerCache.rowHeight({index:o+t._rowIndexOffset})});var n=o.cellMeasurerCache,r=o.columnIndexOffset,i=o.rowIndexOffset;this._cellMeasurerCache=n,this._columnIndexOffset=void 0===r?0:r,this._rowIndexOffset=void 0===i?0:i}return es(e,[{key:"clear",value:function(e,t){this._cellMeasurerCache.clear(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"clearAll",value:function(){this._cellMeasurerCache.clearAll()}},{key:"hasFixedHeight",value:function(){return this._cellMeasurerCache.hasFixedHeight()}},{key:"hasFixedWidth",value:function(){return this._cellMeasurerCache.hasFixedWidth()}},{key:"getHeight",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.getHeight(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"getWidth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.getWidth(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"has",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.has(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"set",value:function(e,t,o,n){this._cellMeasurerCache.set(e+this._rowIndexOffset,t+this._columnIndexOffset,o,n)}},{key:"defaultHeight",get:function(){return this._cellMeasurerCache.defaultHeight}},{key:"defaultWidth",get:function(){return this._cellMeasurerCache.defaultWidth}}]),e}();function tx(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function t_(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?tx(o,!0).forEach(function(t){eu(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):tx(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var tR=function(e){function t(e,o){eo(this,t),eu(ea(n=el(this,ec(t).call(this,e,o))),"state",{scrollLeft:0,scrollTop:0,scrollbarSize:0,showHorizontalScrollbar:!1,showVerticalScrollbar:!1}),eu(ea(n),"_deferredInvalidateColumnIndex",null),eu(ea(n),"_deferredInvalidateRowIndex",null),eu(ea(n),"_bottomLeftGridRef",function(e){n._bottomLeftGrid=e}),eu(ea(n),"_bottomRightGridRef",function(e){n._bottomRightGrid=e}),eu(ea(n),"_cellRendererBottomLeftGrid",function(e){var t=e.rowIndex,o=eb(e,["rowIndex"]),r=n.props,i=r.cellRenderer,s=r.fixedRowCount;return t===r.rowCount-s?h.createElement("div",{key:o.key,style:t_({},o.style,{height:20})}):i(t_({},o,{parent:ea(n),rowIndex:t+s}))}),eu(ea(n),"_cellRendererBottomRightGrid",function(e){var t=e.columnIndex,o=e.rowIndex,r=eb(e,["columnIndex","rowIndex"]),i=n.props,s=i.cellRenderer,a=i.fixedColumnCount,l=i.fixedRowCount;return s(t_({},r,{columnIndex:t+a,parent:ea(n),rowIndex:o+l}))}),eu(ea(n),"_cellRendererTopRightGrid",function(e){var t=e.columnIndex,o=eb(e,["columnIndex"]),r=n.props,i=r.cellRenderer,s=r.columnCount,a=r.fixedColumnCount;return t===s-a?h.createElement("div",{key:o.key,style:t_({},o.style,{width:20})}):i(t_({},o,{columnIndex:t+a,parent:ea(n)}))}),eu(ea(n),"_columnWidthRightGrid",function(e){var t=e.index,o=n.props,r=o.columnCount,i=o.fixedColumnCount,s=o.columnWidth,a=n.state,l=a.scrollbarSize;return a.showHorizontalScrollbar&&t===r-i?l:"function"==typeof s?s({index:t+i}):s}),eu(ea(n),"_onScroll",function(e){var t=e.scrollLeft,o=e.scrollTop;n.setState({scrollLeft:t,scrollTop:o});var r=n.props.onScroll;r&&r(e)}),eu(ea(n),"_onScrollbarPresenceChange",function(e){var t=e.horizontal,o=e.size,r=e.vertical,i=n.state,s=i.showHorizontalScrollbar,a=i.showVerticalScrollbar;if(t!==s||r!==a){n.setState({scrollbarSize:o,showHorizontalScrollbar:t,showVerticalScrollbar:r});var l=n.props.onScrollbarPresenceChange;"function"==typeof l&&l({horizontal:t,size:o,vertical:r})}}),eu(ea(n),"_onScrollLeft",function(e){var t=e.scrollLeft;n._onScroll({scrollLeft:t,scrollTop:n.state.scrollTop})}),eu(ea(n),"_onScrollTop",function(e){var t=e.scrollTop;n._onScroll({scrollTop:t,scrollLeft:n.state.scrollLeft})}),eu(ea(n),"_rowHeightBottomGrid",function(e){var t=e.index,o=n.props,r=o.fixedRowCount,i=o.rowCount,s=o.rowHeight,a=n.state,l=a.scrollbarSize;return a.showVerticalScrollbar&&t===i-r?l:"function"==typeof s?s({index:t+r}):s}),eu(ea(n),"_topLeftGridRef",function(e){n._topLeftGrid=e}),eu(ea(n),"_topRightGridRef",function(e){n._topRightGrid=e});var n,r=e.deferredMeasurementCache,i=e.fixedColumnCount,s=e.fixedRowCount;return n._maybeCalculateCachedStyles(!0),r&&(n._deferredMeasurementCacheBottomLeftGrid=s>0?new tS({cellMeasurerCache:r,columnIndexOffset:0,rowIndexOffset:s}):r,n._deferredMeasurementCacheBottomRightGrid=i>0||s>0?new tS({cellMeasurerCache:r,columnIndexOffset:i,rowIndexOffset:s}):r,n._deferredMeasurementCacheTopRightGrid=i>0?new tS({cellMeasurerCache:r,columnIndexOffset:i,rowIndexOffset:0}):r),n}return eh(t,e),es(t,[{key:"forceUpdateGrids",value:function(){this._bottomLeftGrid&&this._bottomLeftGrid.forceUpdate(),this._bottomRightGrid&&this._bottomRightGrid.forceUpdate(),this._topLeftGrid&&this._topLeftGrid.forceUpdate(),this._topRightGrid&&this._topRightGrid.forceUpdate()}},{key:"invalidateCellSizeAfterRender",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,o=void 0===t?0:t,n=e.rowIndex,r=void 0===n?0:n;this._deferredInvalidateColumnIndex="number"==typeof this._deferredInvalidateColumnIndex?Math.min(this._deferredInvalidateColumnIndex,o):o,this._deferredInvalidateRowIndex="number"==typeof this._deferredInvalidateRowIndex?Math.min(this._deferredInvalidateRowIndex,r):r}},{key:"measureAllCells",value:function(){this._bottomLeftGrid&&this._bottomLeftGrid.measureAllCells(),this._bottomRightGrid&&this._bottomRightGrid.measureAllCells(),this._topLeftGrid&&this._topLeftGrid.measureAllCells(),this._topRightGrid&&this._topRightGrid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,o=void 0===t?0:t,n=e.rowIndex,r=void 0===n?0:n,i=this.props,s=i.fixedColumnCount,a=i.fixedRowCount,l=Math.max(0,o-s),c=Math.max(0,r-a);this._bottomLeftGrid&&this._bottomLeftGrid.recomputeGridSize({columnIndex:o,rowIndex:c}),this._bottomRightGrid&&this._bottomRightGrid.recomputeGridSize({columnIndex:l,rowIndex:c}),this._topLeftGrid&&this._topLeftGrid.recomputeGridSize({columnIndex:o,rowIndex:r}),this._topRightGrid&&this._topRightGrid.recomputeGridSize({columnIndex:l,rowIndex:r}),this._leftGridWidth=null,this._topGridHeight=null,this._maybeCalculateCachedStyles(!0)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.scrollLeft,o=e.scrollTop;if(t>0||o>0){var n={};t>0&&(n.scrollLeft=t),o>0&&(n.scrollTop=o),this.setState(n)}this._handleInvalidatedGridSize()}},{key:"componentDidUpdate",value:function(){this._handleInvalidatedGridSize()}},{key:"render",value:function(){var e=this.props,t=e.onScroll,o=e.onSectionRendered,n=(e.onScrollbarPresenceChange,e.scrollLeft,e.scrollToColumn),r=(e.scrollTop,e.scrollToRow),i=eb(e,["onScroll","onSectionRendered","onScrollbarPresenceChange","scrollLeft","scrollToColumn","scrollTop","scrollToRow"]);if(this._prepareForRender(),0===this.props.width||0===this.props.height)return null;var s=this.state,a=s.scrollLeft,l=s.scrollTop;return h.createElement("div",{style:this._containerOuterStyle},h.createElement("div",{style:this._containerTopStyle},this._renderTopLeftGrid(i),this._renderTopRightGrid(t_({},i,{onScroll:t,scrollLeft:a}))),h.createElement("div",{style:this._containerBottomStyle},this._renderBottomLeftGrid(t_({},i,{onScroll:t,scrollTop:l})),this._renderBottomRightGrid(t_({},i,{onScroll:t,onSectionRendered:o,scrollLeft:a,scrollToColumn:n,scrollToRow:r,scrollTop:l}))))}},{key:"_getBottomGridHeight",value:function(e){return e.height-this._getTopGridHeight(e)}},{key:"_getLeftGridWidth",value:function(e){var t=e.fixedColumnCount,o=e.columnWidth;if(null==this._leftGridWidth){if("function"==typeof o){for(var n=0,r=0;r<t;r++)n+=o({index:r});this._leftGridWidth=n}else this._leftGridWidth=o*t}return this._leftGridWidth}},{key:"_getRightGridWidth",value:function(e){return e.width-this._getLeftGridWidth(e)}},{key:"_getTopGridHeight",value:function(e){var t=e.fixedRowCount,o=e.rowHeight;if(null==this._topGridHeight){if("function"==typeof o){for(var n=0,r=0;r<t;r++)n+=o({index:r});this._topGridHeight=n}else this._topGridHeight=o*t}return this._topGridHeight}},{key:"_handleInvalidatedGridSize",value:function(){if("number"==typeof this._deferredInvalidateColumnIndex){var e=this._deferredInvalidateColumnIndex,t=this._deferredInvalidateRowIndex;this._deferredInvalidateColumnIndex=null,this._deferredInvalidateRowIndex=null,this.recomputeGridSize({columnIndex:e,rowIndex:t}),this.forceUpdate()}}},{key:"_maybeCalculateCachedStyles",value:function(e){var t=this.props,o=t.columnWidth,n=t.enableFixedColumnScroll,r=t.enableFixedRowScroll,i=t.height,s=t.fixedColumnCount,a=t.fixedRowCount,l=t.rowHeight,c=t.style,d=t.styleBottomLeftGrid,h=t.styleBottomRightGrid,u=t.styleTopLeftGrid,p=t.styleTopRightGrid,f=t.width,m=e||i!==this._lastRenderedHeight||f!==this._lastRenderedWidth,g=e||o!==this._lastRenderedColumnWidth||s!==this._lastRenderedFixedColumnCount,b=e||a!==this._lastRenderedFixedRowCount||l!==this._lastRenderedRowHeight;(e||m||c!==this._lastRenderedStyle)&&(this._containerOuterStyle=t_({height:i,overflow:"visible",width:f},c)),(e||m||b)&&(this._containerTopStyle={height:this._getTopGridHeight(this.props),position:"relative",width:f},this._containerBottomStyle={height:i-this._getTopGridHeight(this.props),overflow:"visible",position:"relative",width:f}),(e||d!==this._lastRenderedStyleBottomLeftGrid)&&(this._bottomLeftGridStyle=t_({left:0,overflowX:"hidden",overflowY:n?"auto":"hidden",position:"absolute"},d)),(e||g||h!==this._lastRenderedStyleBottomRightGrid)&&(this._bottomRightGridStyle=t_({left:this._getLeftGridWidth(this.props),position:"absolute"},h)),(e||u!==this._lastRenderedStyleTopLeftGrid)&&(this._topLeftGridStyle=t_({left:0,overflowX:"hidden",overflowY:"hidden",position:"absolute",top:0},u)),(e||g||p!==this._lastRenderedStyleTopRightGrid)&&(this._topRightGridStyle=t_({left:this._getLeftGridWidth(this.props),overflowX:r?"auto":"hidden",overflowY:"hidden",position:"absolute",top:0},p)),this._lastRenderedColumnWidth=o,this._lastRenderedFixedColumnCount=s,this._lastRenderedFixedRowCount=a,this._lastRenderedHeight=i,this._lastRenderedRowHeight=l,this._lastRenderedStyle=c,this._lastRenderedStyleBottomLeftGrid=d,this._lastRenderedStyleBottomRightGrid=h,this._lastRenderedStyleTopLeftGrid=u,this._lastRenderedStyleTopRightGrid=p,this._lastRenderedWidth=f}},{key:"_prepareForRender",value:function(){this._lastRenderedColumnWidth===this.props.columnWidth&&this._lastRenderedFixedColumnCount===this.props.fixedColumnCount||(this._leftGridWidth=null),this._lastRenderedFixedRowCount===this.props.fixedRowCount&&this._lastRenderedRowHeight===this.props.rowHeight||(this._topGridHeight=null),this._maybeCalculateCachedStyles(),this._lastRenderedColumnWidth=this.props.columnWidth,this._lastRenderedFixedColumnCount=this.props.fixedColumnCount,this._lastRenderedFixedRowCount=this.props.fixedRowCount,this._lastRenderedRowHeight=this.props.rowHeight}},{key:"_renderBottomLeftGrid",value:function(e){var t=e.enableFixedColumnScroll,o=e.fixedColumnCount,n=e.fixedRowCount,r=e.rowCount,i=e.hideBottomLeftGridScrollbar,s=this.state.showVerticalScrollbar;if(!o)return null;var a=this._getBottomGridHeight(e),l=this._getLeftGridWidth(e),c=this.state.showVerticalScrollbar?this.state.scrollbarSize:0,d=h.createElement(eP,ef({},e,{cellRenderer:this._cellRendererBottomLeftGrid,className:this.props.classNameBottomLeftGrid,columnCount:o,deferredMeasurementCache:this._deferredMeasurementCacheBottomLeftGrid,height:a,onScroll:t?this._onScrollTop:void 0,ref:this._bottomLeftGridRef,rowCount:Math.max(0,r-n)+(s?1:0),rowHeight:this._rowHeightBottomGrid,style:this._bottomLeftGridStyle,tabIndex:null,width:i?l+c:l}));return i?h.createElement("div",{className:"BottomLeftGrid_ScrollWrapper",style:t_({},this._bottomLeftGridStyle,{height:a,width:l,overflowY:"hidden"})},d):d}},{key:"_renderBottomRightGrid",value:function(e){var t=e.columnCount,o=e.fixedColumnCount,n=e.fixedRowCount,r=e.rowCount,i=e.scrollToColumn,s=e.scrollToRow;return h.createElement(eP,ef({},e,{cellRenderer:this._cellRendererBottomRightGrid,className:this.props.classNameBottomRightGrid,columnCount:Math.max(0,t-o),columnWidth:this._columnWidthRightGrid,deferredMeasurementCache:this._deferredMeasurementCacheBottomRightGrid,height:this._getBottomGridHeight(e),onScroll:this._onScroll,onScrollbarPresenceChange:this._onScrollbarPresenceChange,ref:this._bottomRightGridRef,rowCount:Math.max(0,r-n),rowHeight:this._rowHeightBottomGrid,scrollToColumn:i-o,scrollToRow:s-n,style:this._bottomRightGridStyle,width:this._getRightGridWidth(e)}))}},{key:"_renderTopLeftGrid",value:function(e){var t=e.fixedColumnCount,o=e.fixedRowCount;return t&&o?h.createElement(eP,ef({},e,{className:this.props.classNameTopLeftGrid,columnCount:t,height:this._getTopGridHeight(e),ref:this._topLeftGridRef,rowCount:o,style:this._topLeftGridStyle,tabIndex:null,width:this._getLeftGridWidth(e)})):null}},{key:"_renderTopRightGrid",value:function(e){var t=e.columnCount,o=e.enableFixedRowScroll,n=e.fixedColumnCount,r=e.fixedRowCount,i=e.scrollLeft,s=e.hideTopRightGridScrollbar,a=this.state,l=a.showHorizontalScrollbar,c=a.scrollbarSize;if(!r)return null;var d=this._getTopGridHeight(e),u=this._getRightGridWidth(e),p=d,f=this._topRightGridStyle;s&&(p=d+(l?c:0),f=t_({},this._topRightGridStyle,{left:0}));var m=h.createElement(eP,ef({},e,{cellRenderer:this._cellRendererTopRightGrid,className:this.props.classNameTopRightGrid,columnCount:Math.max(0,t-n)+(l?1:0),columnWidth:this._columnWidthRightGrid,deferredMeasurementCache:this._deferredMeasurementCacheTopRightGrid,height:p,onScroll:o?this._onScrollLeft:void 0,ref:this._topRightGridRef,rowCount:r,scrollLeft:i,style:f,tabIndex:null,width:u}));return s?h.createElement("div",{className:"TopRightGrid_ScrollWrapper",style:t_({},this._topRightGridStyle,{height:d,width:u,overflowX:"hidden"})},m):m}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.scrollLeft!==t.scrollLeft||e.scrollTop!==t.scrollTop?{scrollLeft:null!=e.scrollLeft&&e.scrollLeft>=0?e.scrollLeft:t.scrollLeft,scrollTop:null!=e.scrollTop&&e.scrollTop>=0?e.scrollTop:t.scrollTop}:null}}]),t}(h.PureComponent);function tT(e){var t=e.className,o=e.columns,n=e.style;return h.createElement("div",{className:t,role:"row",style:n},o)}eu(tR,"defaultProps",{classNameBottomLeftGrid:"",classNameBottomRightGrid:"",classNameTopLeftGrid:"",classNameTopRightGrid:"",enableFixedColumnScroll:!1,enableFixedRowScroll:!1,fixedColumnCount:0,fixedRowCount:0,scrollToColumn:-1,scrollToRow:-1,style:{},styleBottomLeftGrid:{},styleBottomRightGrid:{},styleTopLeftGrid:{},styleTopRightGrid:{},hideTopRightGridScrollbar:!1,hideBottomLeftGridScrollbar:!1}),tR.propTypes={},(0,ep.polyfill)(tR),function(e){function t(e,o){var n;return eo(this,t),(n=el(this,ec(t).call(this,e,o))).state={clientHeight:0,clientWidth:0,scrollHeight:0,scrollLeft:0,scrollTop:0,scrollWidth:0},n._onScroll=n._onScroll.bind(ea(n)),n}return eh(t,e),es(t,[{key:"render",value:function(){var e=this.props.children,t=this.state,o=t.clientHeight,n=t.clientWidth,r=t.scrollHeight,i=t.scrollLeft,s=t.scrollTop,a=t.scrollWidth;return e({clientHeight:o,clientWidth:n,onScroll:this._onScroll,scrollHeight:r,scrollLeft:i,scrollTop:s,scrollWidth:a})}},{key:"_onScroll",value:function(e){var t=e.clientHeight,o=e.clientWidth,n=e.scrollHeight,r=e.scrollLeft,i=e.scrollTop,s=e.scrollWidth;this.setState({clientHeight:t,clientWidth:o,scrollHeight:n,scrollLeft:r,scrollTop:i,scrollWidth:s})}}]),t}(h.PureComponent).propTypes={},tT.propTypes=null;let tk={ASC:"ASC",DESC:"DESC"};function tE(e){var t=e.sortDirection,o=em("ReactVirtualized__Table__sortableHeaderIcon",{"ReactVirtualized__Table__sortableHeaderIcon--ASC":t===tk.ASC,"ReactVirtualized__Table__sortableHeaderIcon--DESC":t===tk.DESC});return h.createElement("svg",{className:o,width:18,height:18,viewBox:"0 0 24 24"},t===tk.ASC?h.createElement("path",{d:"M7 14l5-5 5 5z"}):h.createElement("path",{d:"M7 10l5 5 5-5z"}),h.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}function tO(e){var t=e.dataKey,o=e.label,n=e.sortBy,r=e.sortDirection,i=[h.createElement("span",{className:"ReactVirtualized__Table__headerTruncatedText",key:"label",title:"string"==typeof o?o:null},o)];return n===t&&i.push(h.createElement(tE,{key:"SortIndicator",sortDirection:r})),i}function tI(e){var t=e.className,o=e.columns,n=e.index,r=e.key,i=e.onRowClick,s=e.onRowDoubleClick,a=e.onRowMouseOut,l=e.onRowMouseOver,c=e.onRowRightClick,d=e.rowData,u=e.style,p={"aria-rowindex":n+1};return(i||s||a||l||c)&&(p["aria-label"]="row",p.tabIndex=0,i&&(p.onClick=function(e){return i({event:e,index:n,rowData:d})}),s&&(p.onDoubleClick=function(e){return s({event:e,index:n,rowData:d})}),a&&(p.onMouseOut=function(e){return a({event:e,index:n,rowData:d})}),l&&(p.onMouseOver=function(e){return l({event:e,index:n,rowData:d})}),c&&(p.onContextMenu=function(e){return c({event:e,index:n,rowData:d})})),h.createElement("div",ef({},p,{className:t,key:r,role:"row",style:u}),o)}tE.propTypes={},tO.propTypes=null,tI.propTypes=null;var tM=function(e){function t(){return eo(this,t),el(this,ec(t).apply(this,arguments))}return eh(t,e),t}(h.Component);function tD(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function tA(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?tD(o,!0).forEach(function(t){eu(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):tD(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}eu(tM,"defaultProps",{cellDataGetter:function(e){var t=e.dataKey,o=e.rowData;return"function"==typeof o.get?o.get(t):o[t]},cellRenderer:function(e){var t=e.cellData;return null==t?"":String(t)},defaultSortDirection:tk.ASC,flexGrow:0,flexShrink:1,headerRenderer:tO,style:{}}),tM.propTypes={};var t$=function(e){function t(e){var o;return eo(this,t),(o=el(this,ec(t).call(this,e))).state={scrollbarWidth:0},o._createColumn=o._createColumn.bind(ea(o)),o._createRow=o._createRow.bind(ea(o)),o._onScroll=o._onScroll.bind(ea(o)),o._onSectionRendered=o._onSectionRendered.bind(ea(o)),o._setRef=o._setRef.bind(ea(o)),o}return eh(t,e),es(t,[{key:"forceUpdateGrid",value:function(){this.Grid&&this.Grid.forceUpdate()}},{key:"getOffsetForRow",value:function(e){var t=e.alignment,o=e.index;return this.Grid?this.Grid.getOffsetForCell({alignment:t,rowIndex:o}).scrollTop:0}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,o=e.rowIndex;this.Grid&&this.Grid.invalidateCellSizeAfterRender({rowIndex:o,columnIndex:t})}},{key:"measureAllRows",value:function(){this.Grid&&this.Grid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,o=e.rowIndex;this.Grid&&this.Grid.recomputeGridSize({rowIndex:void 0===o?0:o,columnIndex:void 0===t?0:t})}},{key:"recomputeRowHeights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.recomputeGridSize({rowIndex:e})}},{key:"scrollToPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToPosition({scrollTop:e})}},{key:"scrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToCell({columnIndex:0,rowIndex:e})}},{key:"getScrollbarWidth",value:function(){if(this.Grid){var e=(0,eq.findDOMNode)(this.Grid),t=e.clientWidth||0;return(e.offsetWidth||0)-t}return 0}},{key:"componentDidMount",value:function(){this._setScrollbarWidth()}},{key:"componentDidUpdate",value:function(){this._setScrollbarWidth()}},{key:"render",value:function(){var e=this,t=this.props,o=t.children,n=t.className,r=t.disableHeader,i=t.gridClassName,s=t.gridStyle,a=t.headerHeight,l=t.headerRowRenderer,c=t.height,d=t.id,u=t.noRowsRenderer,p=t.rowClassName,f=t.rowStyle,m=t.scrollToIndex,g=t.style,b=t.width,v=this.state.scrollbarWidth,y="function"==typeof p?p({index:-1}):p,w="function"==typeof f?f({index:-1}):f;return this._cachedColumnStyles=[],h.Children.toArray(o).forEach(function(t,o){var n=e._getFlexStyleForColumn(t,t.props.style);e._cachedColumnStyles[o]=tA({overflow:"hidden"},n)}),h.createElement("div",{"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-colcount":h.Children.toArray(o).length,"aria-rowcount":this.props.rowCount,className:em("ReactVirtualized__Table",n),id:d,role:"grid",style:g},!r&&l({className:em("ReactVirtualized__Table__headerRow",y),columns:this._getHeaderColumns(),style:tA({height:a,overflow:"hidden",paddingRight:v,width:b},w)}),h.createElement(eP,ef({},this.props,{"aria-readonly":null,autoContainerWidth:!0,className:em("ReactVirtualized__Table__Grid",i),cellRenderer:this._createRow,columnWidth:b,columnCount:1,height:r?c:c-a,id:void 0,noContentRenderer:u,onScroll:this._onScroll,onSectionRendered:this._onSectionRendered,ref:this._setRef,role:"rowgroup",scrollbarWidth:v,scrollToRow:m,style:tA({},s,{overflowX:"hidden"})})))}},{key:"_createColumn",value:function(e){var t=e.column,o=e.columnIndex,n=e.isScrolling,r=e.parent,i=e.rowData,s=e.rowIndex,a=this.props.onColumnClick,l=t.props,c=l.cellDataGetter,d=l.cellRenderer,u=l.className,p=l.columnData,f=l.dataKey,m=l.id,g=d({cellData:c({columnData:p,dataKey:f,rowData:i}),columnData:p,columnIndex:o,dataKey:f,isScrolling:n,parent:r,rowData:i,rowIndex:s}),b=this._cachedColumnStyles[o],v="string"==typeof g?g:null;return h.createElement("div",{"aria-colindex":o+1,"aria-describedby":m,className:em("ReactVirtualized__Table__rowColumn",u),key:"Row"+s+"-Col"+o,onClick:function(e){a&&a({columnData:p,dataKey:f,event:e})},role:"gridcell",style:b,title:v},g)}},{key:"_createHeader",value:function(e){var t,o,n,r,i,s=e.column,a=e.index,l=this.props,c=l.headerClassName,d=l.headerStyle,u=l.onHeaderClick,p=l.sort,f=l.sortBy,m=l.sortDirection,g=s.props,b=g.columnData,v=g.dataKey,y=g.defaultSortDirection,w=g.disableSort,C=g.headerRenderer,S=g.id,x=g.label,_=!w&&p,R=em("ReactVirtualized__Table__headerColumn",c,s.props.headerClassName,{ReactVirtualized__Table__sortableHeaderColumn:_}),T=this._getFlexStyleForColumn(s,tA({},d,{},s.props.headerStyle)),k=C({columnData:b,dataKey:v,disableSort:w,label:x,sortBy:f,sortDirection:m});if(_||u){var E=f!==v?y:m===tk.DESC?tk.ASC:tk.DESC,O=function(e){_&&p({defaultSortDirection:y,event:e,sortBy:v,sortDirection:E}),u&&u({columnData:b,dataKey:v,event:e})};i=s.props["aria-label"]||x||v,r="none",n=0,t=O,o=function(e){"Enter"!==e.key&&" "!==e.key||O(e)}}return f===v&&(r=m===tk.ASC?"ascending":"descending"),h.createElement("div",{"aria-label":i,"aria-sort":r,className:R,id:S,key:"Header-Col"+a,onClick:t,onKeyDown:o,role:"columnheader",style:T,tabIndex:n},k)}},{key:"_createRow",value:function(e){var t=this,o=e.rowIndex,n=e.isScrolling,r=e.key,i=e.parent,s=e.style,a=this.props,l=a.children,c=a.onRowClick,d=a.onRowDoubleClick,u=a.onRowRightClick,p=a.onRowMouseOver,f=a.onRowMouseOut,m=a.rowClassName,g=a.rowGetter,b=a.rowRenderer,v=a.rowStyle,y=this.state.scrollbarWidth,w="function"==typeof m?m({index:o}):m,C="function"==typeof v?v({index:o}):v,S=g({index:o}),x=h.Children.toArray(l).map(function(e,r){return t._createColumn({column:e,columnIndex:r,isScrolling:n,parent:i,rowData:S,rowIndex:o,scrollbarWidth:y})}),_=em("ReactVirtualized__Table__row",w),R=tA({},s,{height:this._getRowHeight(o),overflow:"hidden",paddingRight:y},C);return b({className:_,columns:x,index:o,isScrolling:n,key:r,onRowClick:c,onRowDoubleClick:d,onRowRightClick:u,onRowMouseOver:p,onRowMouseOut:f,rowData:S,style:R})}},{key:"_getFlexStyleForColumn",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o="".concat(e.props.flexGrow," ").concat(e.props.flexShrink," ").concat(e.props.width,"px"),n=tA({},t,{flex:o,msFlex:o,WebkitFlex:o});return e.props.maxWidth&&(n.maxWidth=e.props.maxWidth),e.props.minWidth&&(n.minWidth=e.props.minWidth),n}},{key:"_getHeaderColumns",value:function(){var e=this,t=this.props,o=t.children;return(t.disableHeader?[]:h.Children.toArray(o)).map(function(t,o){return e._createHeader({column:t,index:o})})}},{key:"_getRowHeight",value:function(e){var t=this.props.rowHeight;return"function"==typeof t?t({index:e}):t}},{key:"_onScroll",value:function(e){var t=e.clientHeight,o=e.scrollHeight,n=e.scrollTop;(0,this.props.onScroll)({clientHeight:t,scrollHeight:o,scrollTop:n})}},{key:"_onSectionRendered",value:function(e){var t=e.rowOverscanStartIndex,o=e.rowOverscanStopIndex,n=e.rowStartIndex,r=e.rowStopIndex;(0,this.props.onRowsRendered)({overscanStartIndex:t,overscanStopIndex:o,startIndex:n,stopIndex:r})}},{key:"_setRef",value:function(e){this.Grid=e}},{key:"_setScrollbarWidth",value:function(){var e=this.getScrollbarWidth();this.setState({scrollbarWidth:e})}}]),t}(h.PureComponent);eu(t$,"defaultProps",{disableHeader:!1,estimatedRowSize:30,headerHeight:0,headerStyle:{},noRowsRenderer:function(){return null},onRowsRendered:function(){return null},onScroll:function(){return null},overscanIndicesGetter:eN,overscanRowCount:10,rowRenderer:tI,headerRowRenderer:tT,rowStyle:{},scrollToAlignment:"auto",scrollToIndex:-1,style:{}}),t$.propTypes={};var tP=[],tN=null,tz=null;function tH(){tz&&(tz=null,document.body&&null!=tN&&(document.body.style.pointerEvents=tN),tN=null)}function tL(){tH(),tP.forEach(function(e){return e.__resetIsScrolling()})}function tF(e){var t;e.currentTarget===window&&null==tN&&document.body&&(tN=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),tz&&eI(tz),t=0,tP.forEach(function(e){t=Math.max(t,e.props.scrollingResetTimeInterval)}),tz=eM(tL,t),tP.forEach(function(t){t.props.scrollElement===e.currentTarget&&t.__handleWindowScrollEvent()})}function tW(e,t){tP.some(function(e){return e.props.scrollElement===t})||t.addEventListener("scroll",tF),tP.push(e)}function tG(e,t){(tP=tP.filter(function(t){return t!==e})).length||(t.removeEventListener("scroll",tF),tz&&(eI(tz),tH()))}var tB,tU,tV=function(e){return e===window},tj=function(e){return e.getBoundingClientRect()};function tZ(e,t){if(e){if(tV(e)){var o=window,n=o.innerHeight,r=o.innerWidth;return{height:"number"==typeof n?n:0,width:"number"==typeof r?r:0}}return tj(e)}return{height:t.serverHeight,width:t.serverWidth}}function tq(e){return tV(e)&&document.documentElement?{top:"scrollY"in window?window.scrollY:document.documentElement.scrollTop,left:"scrollX"in window?window.scrollX:document.documentElement.scrollLeft}:{top:e.scrollTop,left:e.scrollLeft}}function tK(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}var tY=function(){return"undefined"!=typeof window?window:void 0},tQ=(tU=tB=function(e){function t(){var e,o;eo(this,t);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return eu(ea(o=el(this,(e=ec(t)).call.apply(e,[this].concat(r)))),"_window",tY()),eu(ea(o),"_isMounted",!1),eu(ea(o),"_positionFromTop",0),eu(ea(o),"_positionFromLeft",0),eu(ea(o),"_detectElementResize",void 0),eu(ea(o),"_child",void 0),eu(ea(o),"state",function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?tK(o,!0).forEach(function(t){eu(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):tK(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({},tZ(o.props.scrollElement,o.props),{isScrolling:!1,scrollLeft:0,scrollTop:0})),eu(ea(o),"_registerChild",function(e){e&&Element,o._child=e,o.updatePosition()}),eu(ea(o),"_onChildScroll",function(e){var t=e.scrollTop;if(o.state.scrollTop!==t){var n=o.props.scrollElement;n&&("function"==typeof n.scrollTo?n.scrollTo(0,t+o._positionFromTop):n.scrollTop=t+o._positionFromTop)}}),eu(ea(o),"_registerResizeListener",function(e){e===window?window.addEventListener("resize",o._onResize,!1):o._detectElementResize.addResizeListener(e,o._onResize)}),eu(ea(o),"_unregisterResizeListener",function(e){e===window?window.removeEventListener("resize",o._onResize,!1):e&&o._detectElementResize.removeResizeListener(e,o._onResize)}),eu(ea(o),"_onResize",function(){o.updatePosition()}),eu(ea(o),"__handleWindowScrollEvent",function(){if(o._isMounted){var e=o.props.onScroll,t=o.props.scrollElement;if(t){var n=tq(t),r=Math.max(0,n.left-o._positionFromLeft),i=Math.max(0,n.top-o._positionFromTop);o.setState({isScrolling:!0,scrollLeft:r,scrollTop:i}),e({scrollLeft:r,scrollTop:i})}}}),eu(ea(o),"__resetIsScrolling",function(){o.setState({isScrolling:!1})}),o}return eh(t,e),es(t,[{key:"updatePosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollElement,t=this.props.onResize,o=this.state,n=o.height,r=o.width,i=this._child||eq.findDOMNode(this);if(i instanceof Element&&e){var s=function(e,t){if(tV(t)&&document.documentElement){var o=document.documentElement,n=tj(e),r=tj(o);return{top:n.top-r.top,left:n.left-r.left}}var i=tq(t),s=tj(e),a=tj(t);return{top:s.top+i.top-a.top,left:s.left+i.left-a.left}}(i,e);this._positionFromTop=s.top,this._positionFromLeft=s.left}var a=tZ(e,this.props);n===a.height&&r===a.width||(this.setState({height:a.height,width:a.width}),t({height:a.height,width:a.width}))}},{key:"componentDidMount",value:function(){var e=this.props.scrollElement;this._detectElementResize=eL(),this.updatePosition(e),e&&(tW(this,e),this._registerResizeListener(e)),this._isMounted=!0}},{key:"componentDidUpdate",value:function(e,t){var o=this.props.scrollElement,n=e.scrollElement;n!==o&&null!=n&&null!=o&&(this.updatePosition(o),tG(this,n),tW(this,o),this._unregisterResizeListener(n),this._registerResizeListener(o))}},{key:"componentWillUnmount",value:function(){var e=this.props.scrollElement;e&&(tG(this,e),this._unregisterResizeListener(e)),this._isMounted=!1}},{key:"render",value:function(){var e=this.props.children,t=this.state,o=t.isScrolling,n=t.scrollTop,r=t.scrollLeft,i=t.height,s=t.width;return e({onChildScroll:this._onChildScroll,registerChild:this._registerChild,height:i,isScrolling:o,scrollLeft:r,scrollTop:n,width:s})}}]),t}(h.PureComponent),eu(tB,"propTypes",null),tU);eu(tQ,"defaultProps",{onResize:function(){},onScroll:function(){},scrollingResetTimeInterval:150,scrollElement:tY(),serverHeight:0,serverWidth:0});var tX,tJ,t0=(tJ=function(e,t){return(tJ=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}tJ(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),t1=function(){return(t1=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},t2={top:{width:"100%",height:"10px",top:"-5px",left:"0px",cursor:"row-resize"},right:{width:"10px",height:"100%",top:"0px",right:"-5px",cursor:"col-resize"},bottom:{width:"100%",height:"10px",bottom:"-5px",left:"0px",cursor:"row-resize"},left:{width:"10px",height:"100%",top:"0px",left:"-5px",cursor:"col-resize"},topRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",top:"-10px",cursor:"ne-resize"},bottomRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",bottom:"-10px",cursor:"se-resize"},bottomLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",bottom:"-10px",cursor:"sw-resize"},topLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",top:"-10px",cursor:"nw-resize"}},t5=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onMouseDown=function(e){t.props.onResizeStart(e,t.props.direction)},t.onTouchStart=function(e){t.props.onResizeStart(e,t.props.direction)},t}return t0(t,e),t.prototype.render=function(){return h.createElement("div",{className:this.props.className||"",style:t1(t1({position:"absolute",userSelect:"none"},t2[this.props.direction]),this.props.replaceStyles||{}),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart},this.props.children)},t}(h.PureComponent),t3=o(3316),t6=o.n(t3),t4=(tX=function(e,t){return(tX=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}tX(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),t7=function(){return(t7=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},t9={width:"auto",height:"auto"},t8=t6()(function(e,t,o){return Math.max(Math.min(e,o),t)}),oe=t6()(function(e,t){return Math.round(e/t)*t}),ot=t6()(function(e,t){return RegExp(e,"i").test(t)}),oo=function(e){return!!(e.touches&&e.touches.length)},on=t6()(function(e,t,o){void 0===o&&(o=0);var n=t.reduce(function(o,n,r){return Math.abs(n-e)<Math.abs(t[o]-e)?r:o},0),r=Math.abs(t[n]-e);return 0===o||r<o?t[n]:e}),or=t6()(function(e,t){return e.substr(e.length-t.length,t.length)===t}),oi=t6()(function(e){return"auto"===(e=e.toString())||or(e,"px")||or(e,"%")||or(e,"vh")||or(e,"vw")||or(e,"vmax")||or(e,"vmin")?e:e+"px"}),os=function(e,t,o,n){if(e&&"string"==typeof e){if(or(e,"px"))return Number(e.replace("px",""));if(or(e,"%"))return Number(e.replace("%",""))/100*t;if(or(e,"vw"))return Number(e.replace("vw",""))/100*o;if(or(e,"vh"))return Number(e.replace("vh",""))/100*n}return e},oa=t6()(function(e,t,o,n,r,i,s){return n=os(n,e.width,t,o),r=os(r,e.height,t,o),i=os(i,e.width,t,o),s=os(s,e.height,t,o),{maxWidth:void 0===n?void 0:Number(n),maxHeight:void 0===r?void 0:Number(r),minWidth:void 0===i?void 0:Number(i),minHeight:void 0===s?void 0:Number(s)}}),ol=["as","style","className","grid","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],oc="__resizable_base__",od=function(e){function t(t){var o=e.call(this,t)||this;return o.ratio=1,o.resizable=null,o.parentLeft=0,o.parentTop=0,o.resizableLeft=0,o.resizableRight=0,o.resizableTop=0,o.resizableBottom=0,o.targetLeft=0,o.targetTop=0,o.appendBase=function(){if(!o.resizable||!o.window)return null;var e=o.parentNode;if(!e)return null;var t=o.window.document.createElement("div");return t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.transform="scale(0, 0)",t.style.left="0",t.style.flex="0",t.classList?t.classList.add(oc):t.className+=oc,e.appendChild(t),t},o.removeBase=function(e){var t=o.parentNode;t&&t.removeChild(e)},o.ref=function(e){e&&(o.resizable=e)},o.state={isResizing:!1,width:void 0===(o.propsSize&&o.propsSize.width)?"auto":o.propsSize&&o.propsSize.width,height:void 0===(o.propsSize&&o.propsSize.height)?"auto":o.propsSize&&o.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},o.onResizeStart=o.onResizeStart.bind(o),o.onMouseMove=o.onMouseMove.bind(o),o.onMouseUp=o.onMouseUp.bind(o),o}return t4(t,e),Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return this.resizable&&this.resizable.ownerDocument?this.resizable.ownerDocument.defaultView:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||t9},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){var e=0,t=0;if(this.resizable&&this.window){var o=this.resizable.offsetWidth,n=this.resizable.offsetHeight,r=this.resizable.style.position;"relative"!==r&&(this.resizable.style.position="relative"),e="auto"!==this.resizable.style.width?this.resizable.offsetWidth:o,t="auto"!==this.resizable.style.height?this.resizable.offsetHeight:n,this.resizable.style.position=r}return{width:e,height:t}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sizeStyle",{get:function(){var e=this,t=this.props.size,o=function(t){if(void 0===e.state[t]||"auto"===e.state[t])return"auto";if(e.propsSize&&e.propsSize[t]&&or(e.propsSize[t].toString(),"%")){if(or(e.state[t].toString(),"%"))return e.state[t].toString();var o=e.getParentSize();return Number(e.state[t].toString().replace("px",""))/o[t]*100+"%"}return oi(e.state[t])};return{width:t&&void 0!==t.width&&!this.state.isResizing?oi(t.width):o("width"),height:t&&void 0!==t.height&&!this.state.isResizing?oi(t.height):o("height")}},enumerable:!1,configurable:!0}),t.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var e=this.appendBase();if(!e)return{width:0,height:0};var t=!1,o=this.parentNode.style.flexWrap;"wrap"!==o&&(t=!0,this.parentNode.style.flexWrap="wrap"),e.style.position="relative",e.style.minWidth="100%";var n={width:e.offsetWidth,height:e.offsetHeight};return t&&(this.parentNode.style.flexWrap=o),this.removeBase(e),n},t.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},t.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},t.prototype.componentDidMount=function(){if(this.resizable&&this.window){var e=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:"auto"!==e.flexBasis?e.flexBasis:void 0})}},t.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},t.prototype.createSizeForCssProperty=function(e,t){var o=this.propsSize&&this.propsSize[t];return"auto"!==this.state[t]||this.state.original[t]!==e||void 0!==o&&"auto"!==o?e:"auto"},t.prototype.calculateNewMaxFromBoundary=function(e,t){var o,n,r=this.props.boundsByDirection,i=this.state.direction,s=r&&ot("left",i),a=r&&ot("top",i);if("parent"===this.props.bounds){var l=this.parentNode;l&&(o=s?this.resizableRight-this.parentLeft:l.offsetWidth+(this.parentLeft-this.resizableLeft),n=a?this.resizableBottom-this.parentTop:l.offsetHeight+(this.parentTop-this.resizableTop))}else"window"===this.props.bounds?this.window&&(o=s?this.resizableRight:this.window.innerWidth-this.resizableLeft,n=a?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(o=s?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),n=a?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return o&&Number.isFinite(o)&&(e=e&&e<o?e:o),n&&Number.isFinite(n)&&(t=t&&t<n?t:n),{maxWidth:e,maxHeight:t}},t.prototype.calculateNewSizeFromDirection=function(e,t){var o=this.props.scale||1,n=this.props.resizeRatio||1,r=this.state,i=r.direction,s=r.original,a=this.props,l=a.lockAspectRatio,c=a.lockAspectRatioExtraHeight,d=a.lockAspectRatioExtraWidth,h=s.width,u=s.height,p=c||0,f=d||0;return ot("right",i)&&(h=s.width+(e-s.x)*n/o,l&&(u=(h-f)/this.ratio+p)),ot("left",i)&&(h=s.width-(e-s.x)*n/o,l&&(u=(h-f)/this.ratio+p)),ot("bottom",i)&&(u=s.height+(t-s.y)*n/o,l&&(h=(u-p)*this.ratio+f)),ot("top",i)&&(u=s.height-(t-s.y)*n/o,l&&(h=(u-p)*this.ratio+f)),{newWidth:h,newHeight:u}},t.prototype.calculateNewSizeFromAspectRatio=function(e,t,o,n){var r=this.props,i=r.lockAspectRatio,s=r.lockAspectRatioExtraHeight,a=r.lockAspectRatioExtraWidth,l=void 0===n.width?10:n.width,c=void 0===o.width||o.width<0?e:o.width,d=void 0===n.height?10:n.height,h=void 0===o.height||o.height<0?t:o.height,u=s||0,p=a||0;if(i){var f=(d-u)*this.ratio+p,m=(h-u)*this.ratio+p,g=(l-p)/this.ratio+u,b=(c-p)/this.ratio+u;e=t8(e,Math.max(l,f),Math.min(c,m)),t=t8(t,Math.max(d,g),Math.min(h,b))}else e=t8(e,l,c),t=t8(t,d,h);return{newWidth:e,newHeight:t}},t.prototype.setBoundingClientRect=function(){if("parent"===this.props.bounds){var e=this.parentNode;if(e){var t=e.getBoundingClientRect();this.parentLeft=t.left,this.parentTop=t.top}}if(this.props.bounds&&"string"!=typeof this.props.bounds){var o=this.props.bounds.getBoundingClientRect();this.targetLeft=o.left,this.targetTop=o.top}if(this.resizable){var n=this.resizable.getBoundingClientRect(),r=n.left,i=n.top,s=n.right,a=n.bottom;this.resizableLeft=r,this.resizableRight=s,this.resizableTop=i,this.resizableBottom=a}},t.prototype.onResizeStart=function(e,t){if(this.resizable&&this.window){var o,n,r=0,i=0;if(e.nativeEvent&&((o=e.nativeEvent).clientX||0===o.clientX)&&(o.clientY||0===o.clientY)?(r=e.nativeEvent.clientX,i=e.nativeEvent.clientY):e.nativeEvent&&oo(e.nativeEvent)&&(r=e.nativeEvent.touches[0].clientX,i=e.nativeEvent.touches[0].clientY),!this.props.onResizeStart||!this.resizable||!1!==this.props.onResizeStart(e,t,this.resizable)){this.props.size&&(void 0!==this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),void 0!==this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio="number"==typeof this.props.lockAspectRatio?this.props.lockAspectRatio:this.size.width/this.size.height;var s=this.window.getComputedStyle(this.resizable);if("auto"!==s.flexBasis){var a=this.parentNode;if(a){var l=this.window.getComputedStyle(a).flexDirection;this.flexDir=l.startsWith("row")?"row":"column",n=s.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var c={original:{x:r,y:i,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:t7(t7({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(e.target).cursor||"auto"}),direction:t,flexBasis:n};this.setState(c)}}},t.prototype.onMouseMove=function(e){if(this.state.isResizing&&this.resizable&&this.window){if(this.window.TouchEvent&&oo(e))try{e.preventDefault(),e.stopPropagation()}catch(e){}var t=this.props,o=t.maxWidth,n=t.maxHeight,r=t.minWidth,i=t.minHeight,s=oo(e)?e.touches[0].clientX:e.clientX,a=oo(e)?e.touches[0].clientY:e.clientY,l=this.state,c=l.direction,d=l.original,h=l.width,u=l.height,p=this.getParentSize(),f=oa(p,this.window.innerWidth,this.window.innerHeight,o,n,r,i);o=f.maxWidth,n=f.maxHeight,r=f.minWidth,i=f.minHeight;var m=this.calculateNewSizeFromDirection(s,a),g=m.newHeight,b=m.newWidth,v=this.calculateNewMaxFromBoundary(o,n),y=this.calculateNewSizeFromAspectRatio(b,g,{width:v.maxWidth,height:v.maxHeight},{width:r,height:i});if(b=y.newWidth,g=y.newHeight,this.props.grid){var w=oe(b,this.props.grid[0]),C=oe(g,this.props.grid[1]),S=this.props.snapGap||0;b=0===S||Math.abs(w-b)<=S?w:b,g=0===S||Math.abs(C-g)<=S?C:g}this.props.snap&&this.props.snap.x&&(b=on(b,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(g=on(g,this.props.snap.y,this.props.snapGap));var x={width:b-d.width,height:g-d.height};h&&"string"==typeof h&&(or(h,"%")?b=b/p.width*100+"%":or(h,"vw")?b=b/this.window.innerWidth*100+"vw":or(h,"vh")&&(b=b/this.window.innerHeight*100+"vh")),u&&"string"==typeof u&&(or(u,"%")?g=g/p.height*100+"%":or(u,"vw")?g=g/this.window.innerWidth*100+"vw":or(u,"vh")&&(g=g/this.window.innerHeight*100+"vh"));var _={width:this.createSizeForCssProperty(b,"width"),height:this.createSizeForCssProperty(g,"height")};"row"===this.flexDir?_.flexBasis=_.width:"column"===this.flexDir&&(_.flexBasis=_.height),this.setState(_),this.props.onResize&&this.props.onResize(e,c,this.resizable,x)}},t.prototype.onMouseUp=function(e){var t=this.state,o=t.isResizing,n=t.direction,r=t.original;if(o&&this.resizable){var i={width:this.size.width-r.width,height:this.size.height-r.height};this.props.onResizeStop&&this.props.onResizeStop(e,n,this.resizable,i),this.props.size&&this.setState(this.props.size),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:t7(t7({},this.state.backgroundStyle),{cursor:"auto"})})}},t.prototype.updateSize=function(e){this.setState({width:e.width,height:e.height})},t.prototype.renderResizer=function(){var e=this,t=this.props,o=t.enable,n=t.handleStyles,r=t.handleClasses,i=t.handleWrapperStyle,s=t.handleWrapperClass,a=t.handleComponent;if(!o)return null;var l=Object.keys(o).map(function(t){return!1!==o[t]?h.createElement(t5,{key:t,direction:t,onResizeStart:e.onResizeStart,replaceStyles:n&&n[t],className:r&&r[t]},a&&a[t]?a[t]:null):null});return h.createElement("div",{className:s,style:i},l)},t.prototype.render=function(){var e=this,t=Object.keys(this.props).reduce(function(t,o){return -1!==ol.indexOf(o)||(t[o]=e.props[o]),t},{}),o=t7(t7(t7({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(o.flexBasis=this.state.flexBasis);var n=this.props.as||"div";return h.createElement(n,t7({ref:this.ref,style:o,className:this.props.className},t),this.state.isResizing&&h.createElement("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer())},t.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},t}(h.PureComponent);let oh={top:!1,right:!1,bottom:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},ou={min:0,max:1/0},op=({height:e,heightConstraints:t,width:o,widthConstraints:n})=>({height:(0,U.u)(e,t.min,t.max),width:(0,U.u)(o,n.min,n.max)}),of=({enable:e,height:t,heightConstraints:o,resizeEdge:n,width:r=0,widthConstraints:i})=>({...op({height:t,widthConstraints:i,heightConstraints:o,width:r}),enable:void 0===e||e,horizontal:"left"===n||"right"===n,initialHeight:t,initialWidth:r,resizing:!1,isMouseWheeling:!1,vertical:"top"===n||"bottom"===n});class om extends u().PureComponent{static defaultProps={className:"",enable:!0,heightConstraints:ou,resizeContentClassName:"",resizeHandleClassName:"",style:{},wrapperStyle:{},translate:()=>"",wrapChildrenInDivContainer:!0,widthConstraints:ou};onWheelTimeOut;isMouseWheeling=!1;constructor(e){super(e),this.state=of(e)}componentWillReceiveProps(e){let{onResizeFromPropChange:t}=this.props,{height:o,resizing:n,width:r}=this.state,{onResizeFromPropChange:i}=e;if(n)return;let s=of(e);this.setState(s);let{height:a,width:l}=s,c=i||t;c&&(a!==o||l!==r)&&c({height:a,width:l,originalHeight:o,originalWidth:r})}_onResize=(e,t,o,{height:n,width:r})=>{let{onResize:i}=this.props,{height:s,horizontal:a,vertical:l,width:c}=this.state,{height:d,width:h}=(({deltaWidth:e,deltaHeight:t},{heightConstraints:o,widthConstraints:n},{initialHeight:r,initialWidth:i})=>op({height:r+t,heightConstraints:o,width:i+e,widthConstraints:n}))({deltaWidth:r,deltaHeight:n},this.props,this.state),u=a&&h!==c,p=l&&d!==s;(u||p)&&(this.setState({height:p?d:s,width:u?h:c,isMouseWheeling:!1}),i&&i({height:p?d:void 0,width:u?h:void 0}))};_onResizeStart=e=>{e.preventDefault(),e.stopPropagation();let{onResizeStart:t}=this.props,{height:o,horizontal:n,vertical:r,width:i}=this.state;this.setState({resizing:!0}),t&&t({height:r?o:void 0,width:n?i:void 0})};_onResizeEnd=()=>{let{onResizeEnd:e}=this.props,{height:t,horizontal:o,vertical:n,width:r,initialWidth:i,initialHeight:s}=this.state;this.setState({initialWidth:r,initialHeight:t,resizing:!1}),i===r&&s===t||e&&e({width:o?r:void 0,height:n?t:void 0})};_onWheel=()=>{this.isMouseWheeling||(this.isMouseWheeling=!0,this.setState({isMouseWheeling:!0})),clearTimeout(this.onWheelTimeOut),this.onWheelTimeOut=setTimeout(()=>{this.isMouseWheeling=!1,this.setState({isMouseWheeling:!1})},50)};render(){let{children:e,className:t,handleStyles:o,resizeContentClassName:n,resizeEdge:r,resizeHandleClassName:i,style:s,translate:a,heightConstraints:l,wrapChildrenInDivContainer:c,widthConstraints:h}=this.props,{enable:p,height:f,horizontal:m,resizing:g,vertical:b,width:v,isMouseWheeling:y}=this.state,{display:w,...C}=s,{min:S,max:x}=h,{min:_,max:R}=l,T={...this.props.wrapperStyle};m&&(T.width=v,T.minWidth=v),b&&(T.height=f,T.minHeight=f);let k=d()("resizable",t,{resizing:g}),E=d()("contents",n,`resize-edge-${r}`,{horizontal:m,vertical:b}),O=d()(r,i,"resizable-handle",{horizontal:m,vertical:b}),I=u().createElement("span",{title:a("ResizePanel")});return u().createElement("div",{"data-testid":"resizable",onWheel:this._onWheel,style:{...T,display:w}},u().createElement(od,{className:k,"data-testid":"resizable-core",enable:{...oh,[r]:!y&&p},handleClasses:{[r]:O},handleComponent:{[r]:I},handleStyles:o,maxHeight:b?R:void 0,maxWidth:m?x:void 0,minHeight:b?_:void 0,minWidth:m?S:void 0,onResize:this._onResize,onResizeStart:this._onResizeStart,onResizeStop:this._onResizeEnd,size:{height:b?f:"100%",width:m?v:"100%"},style:C},c?u().createElement("div",{className:E,style:{userSelect:"none"}},e):e))}}var og=o(7154);class ob extends u().PureComponent{canvas;componentDidMount(){this.updateCanvas()}componentWillReceiveProps(e){e.branchUpstreamRowIndices===this.props.branchUpstreamRowIndices&&e.markerRowIndices===this.props.markerRowIndices&&e.totalRows===this.props.totalRows&&e.viewportHeight===this.props.viewportHeight&&e.viewportWidth===this.props.viewportWidth&&e.markerColors===this.props.markerColors&&e.enabledScrollMarkerTypes===this.props.enabledScrollMarkerTypes&&e.scrollWidth===this.props.scrollWidth||this.updateCanvas()}updateCanvas(e){let{branchUpstreamRowIndices:t,enabledScrollMarkerTypes:o,viewportHeight:n,markerRowIndices:r,markerColors:i,scrollWidth:s,totalRows:a}=e||this.props,l=this.canvas.getContext("2d");l.canvas.width=s,l.canvas.height=n;let c=s/w.dF;for(let[e,s]of(l.clearRect(0,0,l.canvas.width,l.canvas.height),Object.entries(w.Qh))){if(!(o.includes(e)||"remoteBranches"===e&&o.includes("localBranches")))continue;let d="remoteBranches"!==e||o.includes("remoteBranches")?r[e]||[]:t,h=i[e],u=s.lanes;h&&d.length&&(l.fillStyle=h,d.forEach(t=>{let{height:o,offset:r}=function(e,t,o){let n=t*w.$0,{shape:r}=w.Qh[e],i=w.d_[r];if(!i)return{height:0,offset:0};let{baseHeight:s,minHeight:a,maxHeight:l}=i,c=o/n*s;void 0!==a&&c<a&&(c=a),void 0!==l&&c>l&&(c=l);let d=w.$0*(o/n);return{height:c,offset:c>=d?0:(d-c)/2}}(e,a,n);u.length&&l.fillRect(u[0]*c,function(e,t,o){let n=o*w.$0;return e*w.$0/n*t}(t,n,a)+r-.5*o,c*u.length,o)}))}}render(){return u().createElement("canvas",{className:"graph-scroll-markers",ref:e=>this.canvas=e})}}var ov=function({children:e,className:t,height:o,heightAdjustment:n,graphZoneType:r,scrollTop:i,style:s}){let a=w.qi[r].listId,l=document.getElementById(a),c=l?.scrollHeight||0,d=o-28;void 0!==i&&(d=Number(s.top)-i,l&&c-o-i<0&&(d=o-n-28));let h={top:d,zIndex:2},p=u().createElement("span",{className:"absolute",style:h},e);return u().createElement("div",{className:t,style:s},l?eK().createPortal(p,document.getElementById("graph-container")):p)};function oy({inline:e,getExternalIcon:t,message:o,size:n=100,useSimpleSpinner:r}){let i=d()("loading-spinner",{"inline-block":e,ml2:e,"shrink-0":e}),s=d()("spinner","mr1",{"inline-block":e}),a={height:n,width:n},l=d()("message",{"inline-block":e,mx2:e}),c=r?u().createElement("span",{className:s,style:a},t("loading")):u().createElement("div",{className:s,style:a},u().createElement("img",{className:"ring outer",src:"../../../images/spinner-outer-ring.svg",style:a}),u().createElement("img",{className:"ring inner",src:"../../../images/spinner-inner-ring.svg",style:a}),u().createElement("img",{className:"bg-img",src:"../../../images/spinner-kraken.svg",style:a}));return u().createElement("div",{className:i},c,o&&u().createElement("div",{className:l},o))}class ow extends u().Component{render(){let{currentCommits:e,customFooterRow:t,graphZoneType:o,hasMoreCommits:n,height:r,horizontalScrollHeight:i,getExternalIcon:s,isLoadingRows:a,scrollTop:l,style:c,translate:d}=this.props,h=u().createElement(oy,{className:"loading-spinner",getExternalIcon:s,size:20,useSimpleSpinner:!0}),p=u().createElement("div",{className:"flex items-center"},u().createElement("span",{style:{paddingRight:"5px"}},h)),f=0!==(e>0?e:0)||n?t:u().createElement(u().Fragment,null,d("Graph-NoCommits")),m=u().createElement("div",{className:"graph-adjust-commit-count p1"},a?p:f);return u().createElement(ov,{graphZoneType:o,height:r,heightAdjustment:i,scrollTop:l,style:c},m)}}function oC({branchUpstreamRowIndices:e,rowCount:t,cellRenderersByIds:o,columnIndex:n,customFooterRow:r,enabledScrollMarkerTypes:i,enableResizer:s,getExternalIcon:a,getKeyForCell:l,graphHeight:c,graphWidth:h,graphZoneType:p,graphZones:f,hasMoreCommits:m,horizontalScrollHeight:g,isLoadingRows:b,markerColors:v,markerRowIndices:y,onResize:C,onResizeEnd:S,onResizeFromPropChange:x,onScroll:_,onScrollToRowCausedUpdate:R,onZoneEnter:T,scrollLeft:k,scrollToAlignment:E,scrollToIndex:O,scrollTop:I,smartCellRangeRenderer:M,translate:D,verticalScrollWidth:A}){let $=(0,F.zv)(p,f);if(!$)return null;let P=document.getElementById($.listId),N=(0,F.SH)(p,f),z=(0,F.Xq)(t,m,b),H=(0,F.Jq)(t,m,b),L=(0,F.Jp)($,t),W=(0,F.wE)(t,m,b),G=i.length>0,B=d()("graph-panel","react-virtualized-list","pad-for-horizontal-scrollbar",p===w.jZ?"z3":null,{"pad-for-vertical-scrollbar":A>0}),U=p===w.Wm?{...!N&&{position:"static"},...N&&{width:$.currentWidth>L?$.currentWidth:L,maxWidth:"none"}}:void 0,V=(e,i,s,d,f,v,y,C)=>u().createElement(eP,{autoContainerWidth:!0,cellRangeRenderer:M,cellRenderer:i=>((e,i)=>{if(i.rowIndex>t-1)return z&&0===n?u().createElement(ow,{currentCommits:t-1,customFooterRow:r,getExternalIcon:a,graphZoneType:p,hasMoreCommits:m,height:c,horizontalScrollHeight:g,isLoadingRows:b,key:l(i.rowIndex),scrollTop:I,style:i.style,translate:D}):void 0;let s={...i,style:{...i.style}};w.Gn===e&&(s.style.top=Number(i.style.top)-I);let d=o[e];return d?d(s):void 0})(e,i),className:s,columnCount:1,columnWidth:C,containerStyle:d,height:y,id:i,isScrolling:!1,key:i,onScrollToTargetCausedUpdate:R?e=>R(p,e,h,c,m):void 0,overscanRowCount:0,rowCount:H,rowHeight:w.$0,scrollLeft:k,scrollToAlignment:E,scrollTop:I,scrollToRow:O,style:f,tabIndex:null,width:v}),j=V($.type,$.listId,B,U,{position:"absolute"},$.currentWidth,c,L),Z=j&&u().createElement(u().Fragment,null,G&&N?u().createElement(ob,{branchUpstreamRowIndices:e,enabledScrollMarkerTypes:i,markerColors:v,markerRowIndices:y,scrollWidth:A,totalRows:H,viewportHeight:c<W?c:W,viewportWidth:$.currentWidth}):null,u().createElement(og.Z,{contentHeight:W,contentWidth:L,displayHorizontalScrollbar:$.type===w.Wm,displayVerticalScrollbar:N,forceOnWheel:!N,forceVerticalScrollbar:N&&G,height:c,onScroll:e=>{e.scrollTop>I&&P&&(0,F.BL)(P)||_(p,e,h,c,m)},scrollLeft:k,scrollTop:I,width:$.currentWidth},j)),q=N?u().createElement("div",{onWheelCapture:e=>{let t;(t=(t=I+e.deltaY)>=0?t:0)>I&&P&&(0,F.BL)(P)||_(p,{clientHeight:W,clientWidth:L,scrollHeight:g,scrollLeft:0,scrollTop:t>=0?t:0,scrollWidth:A},h,c,m)}},V(w.Gn,"timeline-column","graph-panel react-virtualized-list timeline-column",{overflow:"visible",zIndex:3,maxHeight:W},{position:"absolute",right:0,zIndex:3,maxHeight:c},1,c,1)):void 0,K=u().createElement("div",{onMouseEnter:T},Z,q);return N?K:u().createElement(om,{enable:s,height:c,id:`${p}Column`,key:`${p}Column`,onResize:C?e=>C($,e):void 0,onResizeEnd:S?e=>S($,e):void 0,onResizeFromPropChange:x?e=>x($,e):void 0,resizeContentClassName:"z1",resizeEdge:"right",resizeHandleClassName:"z1",width:$.currentWidth,widthConstraints:(0,F.eR)(p,f,h)},K)}var oS=o(977),ox=o.n(oS);let o_="dnd-container";class oR extends u().PureComponent{dndDrake;childReactElementsById={};constructor(e){super(e),this.loadChildrenReactElements(this.props.children)}componentDidMount(){this.dndDrake&&this.dndDrake.on("drop",this.onDrop)}componentWillReceiveProps(e){this.props.children!==e.children&&this.loadChildrenReactElements(e.children)}componentWillUnmount(){this.dndDrake&&this.dndDrake.destroy()}onDrop=(e,t,o,n)=>{if(this.props.onDrop&&e.id){let t=this.sanitizeId(e.id),o=n?.id?this.sanitizeId(n.id):null,r=this.childReactElementsById[t],i=o?this.childReactElementsById[o]:null;r&&this.props.onDrop(r,i)}};isContainerCallback=e=>!!e?.classList.contains(o_);movesCallback=e=>!!e?.id&&this.isDraggable(e.id);acceptsCallback=(e,t,o,n)=>!!e?.id&&this.isDroppable(e.id,n?.id);invalidCallBack=()=>!1;dndDecorator=e=>{if(e){let t={isContainer:this.isContainerCallback,mirrorContainer:this.props.mirrorContainer,moves:this.movesCallback,accepts:this.acceptsCallback,invalid:this.invalidCallBack,direction:this.props.direction||"horizontal",copy:!1,copySortSource:!1,revertOnSpill:!1,removeOnSpill:!1,ignoreInputTextSelection:!0};this.dndDrake=ox()([e],t)}};loadChildrenReactElements(e){this.childReactElementsById={},e&&(e instanceof Array?e.forEach(e=>{u().isValidElement(e)&&this.addChildReactElement(e)}):u().isValidElement(e)&&this.addChildReactElement(e))}addChildReactElement(e){let t=e.props.id;t&&(this.childReactElementsById[this.sanitizeId(t)]=e)}sanitizeId(e){return e.trim().toLowerCase().replace(/-/g,"").replace(/_/g,"")}isDraggable(e){if(this.props.isDraggable){let t=this.sanitizeId(e),o=this.childReactElementsById[t];return!!o&&this.props.isDraggable(o)}return!1}isDroppable(e,t){if(this.props.isDroppable){let o=this.sanitizeId(e),n=t?this.sanitizeId(t):null,r=this.childReactElementsById[o],i=n?this.childReactElementsById[n]:null;if(r)return this.props.isDroppable(r,i)}return!1}render(){let{children:e,className:t}=this.props,o=d()(o_,t);return u().createElement("div",{className:o,ref:this.dndDecorator},e)}}var oT=o(8613);function ok(e,t){if(null==e)return{};var o,n,r={},i=oT(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}var oE=o(5627),oO=o(433);function oI(e,t){return(oI=oO?oO.bind():function(e,t){return e.__proto__=t,e})(e,t)}function oM(e,t){e.prototype=oE(t.prototype),e.prototype.constructor=e,oI(e,t)}var oD=o(6981);function oA(){return(oA=oD?oD.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var o$,oP=o(5697),oN=o.n(oP),oz=o(2856),oH=o.n(oz),oL=o(8853),oF=o.n(oL),oW=o(644),oG={in:oN().bool,mountOnEnter:oN().bool,unmountOnExit:oN().bool,appear:oN().bool,timeout:oN().number,onEnter:oN().func,onEntering:oN().func,onEntered:oN().func,onExit:oN().func,onExiting:oN().func,onExited:oN().func},oB=((o$={})[oW.d0]="in",o$[oW.cn]="in",o$),oU=function(e){function t(){return e.apply(this,arguments)||this}return oM(t,e),t.prototype.render=function(){var e=this.props,t=e.className,o=e.children,n=ok(e,["className","children"]);return u().createElement(oW.ZP,n,function(e,n){return u().cloneElement(o,oA({},n,{className:d()("fade",t,o.props.className,oB[e])}))})},t}(u().Component);oU.propTypes=oG,oU.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1};var oV=oA({},oH().propTypes,{show:oN().bool,rootClose:oN().bool,onHide:oN().func,animation:oN().oneOfType([oN().bool,oF()]),onEnter:oN().func,onEntering:oN().func,onEntered:oN().func,onExit:oN().func,onExiting:oN().func,onExited:oN().func,placement:oN().oneOf(["top","right","bottom","left"])}),oj=function(e){function t(){return e.apply(this,arguments)||this}return oM(t,e),t.prototype.render=function(){var e,t=this.props,o=t.animation,n=t.children,r=ok(t,["animation","children"]),i=!0===o?oU:o||null;return e=i?n:(0,h.cloneElement)(n,{className:d()(n.props.className,"in")}),u().createElement(oH(),oA({},r,{transition:i}),e)},t}(u().Component);oj.propTypes=oV,oj.defaultProps={animation:oU,rootClose:!1,show:!1,placement:"right"};var oZ=o(5638),oq=o.n(oZ),oK=o(3562),oY=o.n(oK),oQ=o(1143),oX=o.n(oQ),oJ="large",o0="small",o1={large:"lg",medium:"md",small:"sm",xsmall:"xs",lg:"lg",md:"md",sm:"sm",xs:"xs"};function o2(e){return function(){for(var t=arguments.length,o=Array(t),n=0;n<t;n++)o[n]=arguments[n];return"function"==typeof o[o.length-1]?e.apply(void 0,o):function(t){return e.apply(void 0,o.concat([t]))}}}function o5(e,t){var o=(e.bsClass||"").trim();return null==o&&oX()(!1),o+(t?"-"+t:"")}var o3=o2(function(e,t){var o=t.propTypes||(t.propTypes={}),n=t.defaultProps||(t.defaultProps={});return o.bsClass=oN().string,n.bsClass=e,t}),o6=(o2(function(e,t,o){"string"!=typeof t&&(o=t,t=void 0);var n=o.STYLES||[],r=o.propTypes||{};e.forEach(function(e){-1===n.indexOf(e)&&n.push(e)});var i=oN().oneOf(n);return o.STYLES=n,i._values=n,o.propTypes=oA({},r,{bsStyle:i}),void 0!==t&&((o.defaultProps||(o.defaultProps={})).bsStyle=t),o}),o2(function(e,t,o){"string"!=typeof t&&(o=t,t=void 0);var n=o.SIZES||[],r=o.propTypes||{};e.forEach(function(e){-1===n.indexOf(e)&&n.push(e)});var i=[];n.forEach(function(e){var t=o1[e];t&&t!==e&&i.push(t),i.push(e)});var s=oN().oneOf(i);return s._values=i,o.SIZES=n,o.propTypes=oA({},r,{bsSize:s}),void 0!==t&&(o.defaultProps||(o.defaultProps={}),o.defaultProps.bsSize=t),o}));function o4(e){var t,o=((t={})[o5(e)]=!0,t);return e.bsSize&&(o[o5(e,o1[e.bsSize]||e.bsSize)]=!0),e.bsStyle&&(o[o5(e,e.bsStyle)]=!0),o}function o7(e){return{bsClass:e.bsClass,bsSize:e.bsSize,bsStyle:e.bsStyle,bsRole:e.bsRole}}function o9(e){return"bsClass"===e||"bsSize"===e||"bsStyle"===e||"bsRole"===e}function o8(e){var t={};return oY()(e).forEach(function(e){var o=e[0],n=e[1];o9(o)||(t[o]=n)}),[o7(e),t]}var ne={id:oq()(oN().oneOfType([oN().string,oN().number])),placement:oN().oneOf(["top","right","bottom","left"]),positionTop:oN().oneOfType([oN().number,oN().string]),positionLeft:oN().oneOfType([oN().number,oN().string]),arrowOffsetTop:oN().oneOfType([oN().number,oN().string]),arrowOffsetLeft:oN().oneOfType([oN().number,oN().string]),title:oN().node},nt=function(e){function t(){return e.apply(this,arguments)||this}return oM(t,e),t.prototype.render=function(){var e,t=this.props,o=t.placement,n=t.positionTop,r=t.positionLeft,i=t.arrowOffsetTop,s=t.arrowOffsetLeft,a=t.title,l=t.className,c=t.style,h=t.children,p=o8(ok(t,["placement","positionTop","positionLeft","arrowOffsetTop","arrowOffsetLeft","title","className","style","children"])),f=p[0],m=p[1],g=oA({},o4(f),((e={})[o]=!0,e)),b=oA({display:"block",top:n,left:r},c);return u().createElement("div",oA({},m,{role:"tooltip",className:d()(l,g),style:b}),u().createElement("div",{className:"arrow",style:{top:i,left:s}}),a&&u().createElement("h3",{className:o5(f,"title")},a),u().createElement("div",{className:o5(f,"content")},h))},t}(u().Component);nt.propTypes=ne,nt.defaultProps={placement:"right"};let no=o3("popover",nt);function nn(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var nr=o(8149),ni=o.n(nr),ns=o(1629),na=o.n(ns);o(670);let nl=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.filter(function(e){return null!=e}).reduce(function(e,t){if("function"!=typeof t)throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var o=arguments.length,n=Array(o),r=0;r<o;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}},null)};function nc(e,t){return ni()(t)?t.indexOf(e)>=0:e===t}var nd=oN().oneOf(["click","hover","focus"]),nh=oA({},oj.propTypes,{trigger:oN().oneOfType([nd,oN().arrayOf(nd)]),delay:oN().number,delayShow:oN().number,delayHide:oN().number,defaultOverlayShown:oN().bool,overlay:oN().node.isRequired,onBlur:oN().func,onClick:oN().func,onFocus:oN().func,onMouseOut:oN().func,onMouseOver:oN().func,target:oN().oneOf([null]),onHide:oN().oneOf([null]),show:oN().oneOf([null])}),nu=function(e){function t(t,o){var n;return(n=e.call(this,t,o)||this).handleToggle=n.handleToggle.bind(nn(nn(n))),n.handleDelayedShow=n.handleDelayedShow.bind(nn(nn(n))),n.handleDelayedHide=n.handleDelayedHide.bind(nn(nn(n))),n.handleHide=n.handleHide.bind(nn(nn(n))),n.handleMouseOver=function(e){return n.handleMouseOverOut(n.handleDelayedShow,e,"fromElement")},n.handleMouseOut=function(e){return n.handleMouseOverOut(n.handleDelayedHide,e,"toElement")},n._mountNode=null,n.state={show:t.defaultOverlayShown},n}oM(t,e);var o=t.prototype;return o.componentDidMount=function(){this._mountNode=document.createElement("div"),this.renderOverlay()},o.componentDidUpdate=function(){this.renderOverlay()},o.componentWillUnmount=function(){eK().unmountComponentAtNode(this._mountNode),this._mountNode=null,clearTimeout(this._hoverShowDelay),clearTimeout(this._hoverHideDelay)},o.handleDelayedHide=function(){var e=this;if(null!=this._hoverShowDelay)return clearTimeout(this._hoverShowDelay),void(this._hoverShowDelay=null);if(this.state.show&&null==this._hoverHideDelay){var t=null!=this.props.delayHide?this.props.delayHide:this.props.delay;t?this._hoverHideDelay=setTimeout(function(){e._hoverHideDelay=null,e.hide()},t):this.hide()}},o.handleDelayedShow=function(){var e=this;if(null!=this._hoverHideDelay)return clearTimeout(this._hoverHideDelay),void(this._hoverHideDelay=null);if(!this.state.show&&null==this._hoverShowDelay){var t=null!=this.props.delayShow?this.props.delayShow:this.props.delay;t?this._hoverShowDelay=setTimeout(function(){e._hoverShowDelay=null,e.show()},t):this.show()}},o.handleHide=function(){this.hide()},o.handleMouseOverOut=function(e,t,o){var n=t.currentTarget,r=t.relatedTarget||t.nativeEvent[o];r&&r===n||na()(n,r)||e(t)},o.handleToggle=function(){this.state.show?this.hide():this.show()},o.hide=function(){this.setState({show:!1})},o.makeOverlay=function(e,t){return u().createElement(oj,oA({},t,{show:this.state.show,onHide:this.handleHide,target:this}),e)},o.show=function(){this.setState({show:!0})},o.renderOverlay=function(){eK().unstable_renderSubtreeIntoContainer(this,this._overlay,this._mountNode)},o.render=function(){var e=this.props,t=e.trigger,o=e.overlay,n=e.children,r=e.onBlur,i=e.onClick,s=e.onFocus,a=e.onMouseOut,l=e.onMouseOver,c=ok(e,["trigger","overlay","children","onBlur","onClick","onFocus","onMouseOut","onMouseOver"]);delete c.delay,delete c.delayShow,delete c.delayHide,delete c.defaultOverlayShown;var d=u().Children.only(n),p=d.props,f={};return this.state.show&&(f["aria-describedby"]=o.props.id),f.onClick=nl(p.onClick,i),nc("click",t)&&(f.onClick=nl(f.onClick,this.handleToggle)),nc("hover",t)&&(f.onMouseOver=nl(p.onMouseOver,l,this.handleMouseOver),f.onMouseOut=nl(p.onMouseOut,a,this.handleMouseOut)),nc("focus",t)&&(f.onFocus=nl(p.onFocus,s,this.handleDelayedShow),f.onBlur=nl(p.onBlur,r,this.handleDelayedHide)),this._overlay=this.makeOverlay(o,c),(0,h.cloneElement)(d,f)},t}(u().Component);nu.propTypes=nh,nu.defaultProps={defaultOverlayShown:!1,trigger:["hover","focus"]};var np={id:oq()(oN().oneOfType([oN().string,oN().number])),placement:oN().oneOf(["top","right","bottom","left"]),positionTop:oN().oneOfType([oN().number,oN().string]),positionLeft:oN().oneOfType([oN().number,oN().string]),arrowOffsetTop:oN().oneOfType([oN().number,oN().string]),arrowOffsetLeft:oN().oneOfType([oN().number,oN().string])},nf=function(e){function t(){return e.apply(this,arguments)||this}return oM(t,e),t.prototype.render=function(){var e,t=this.props,o=t.placement,n=t.positionTop,r=t.positionLeft,i=t.arrowOffsetTop,s=t.arrowOffsetLeft,a=t.className,l=t.style,c=t.children,h=o8(ok(t,["placement","positionTop","positionLeft","arrowOffsetTop","arrowOffsetLeft","className","style","children"])),p=h[0],f=h[1],m=oA({},o4(p),((e={})[o]=!0,e)),g=oA({top:n,left:r},l);return u().createElement("div",oA({},f,{role:"tooltip",className:d()(a,m),style:g}),u().createElement("div",{className:o5(p,"arrow"),style:{top:i,left:s}}),u().createElement("div",{className:o5(p,"inner")},c))},t}(u().Component);nf.propTypes=np,nf.defaultProps={placement:"right"};let nm=o3("tooltip",nf),ng={},nb=document.createElement("canvas");nb.id="gk-graph-avatar-canvas";class nv extends u().Component{image;constructor(e){super(e),this.image=new Image,this.image.crossOrigin="anonymous",this.image.onload=()=>this.refreshImage(),this.state={dataURL:void 0}}componentDidMount(){let{url:e}=this.props;e&&this.startImgLoading(e)}componentDidUpdate(e){let{url:t}=this.props;t&&e.url!==t&&this.startImgLoading(t)}componentWillUnmount(){this.image=void 0}refreshImage(){let e;if(this.image){if(this.image.complete){let t=this.image.height,o=this.image.width,n=nb.getContext("2d");n.canvas.width=o,n.canvas.height=t,n.drawImage(this.image,0,0,o,t),e=nb.toDataURL(),ng[this.image.src]=e}this.setState({dataURL:e})}}startImgLoading(e){if(!this.image)return;let t=ng[e];t?this.setState({dataURL:t}):this.image.src=e}render(){let{avatarClassName:e,avatarStyle:t,children:o,className:n,context:r,style:i,height:s,hint:a,size:l,width:c}=this.props,{dataURL:h}=this.state,p=!h,f=p?i:{...i,...t,background:`url(${h}) 0% 0% / ${l}px no-repeat`,height:s||l,width:c||l},m=d()(n,p?"":e,!p&&{avatar:!0}),g=p?u().createElement(u().Fragment,null,o):void 0;return u().createElement("div",{className:m,"data-test-class":"avatar","data-vscode-context":(0,F.q3)(r),style:f,title:a},g)}}let ny=(e,t,o)=>u().createElement("span",{className:"ref-avatar"},u().createElement(nv,{avatarClassName:"mr1",context:o,size:14,url:e},t));function nw({icon:e,tooltipClassName:t="",tooltipId:o,tooltipText:n}){return n&&o?u().createElement(nu,{delayShow:400,overlay:u().createElement(nm,{className:d()("gk-graph","bs-tooltip",t),id:o},n),placement:"top",trigger:["hover","focus"]},e):u().createElement(u().Fragment,null," ",e," ")}function nC({id:e,toolTipText:t,getExternalIcon:o,issueTrackerType:n}){return u().createElement(nw,{icon:o(`issue-${n}`),tooltipClassName:"wide pull-left",tooltipId:`issue-tooltip-${e}`,tooltipText:t?t.trim():""})}function nS({hostingServiceType:e,icon:t,id:o,toolTipText:n}){return u().createElement(nw,{icon:t,tooltipClassName:"wide pull-left",tooltipId:`pr-tooltip-${e}-${o}`,tooltipText:n?n.trim():""})}function nx({icon:e,type:t,upstream:o,tooltipText:n}){return u().createElement(nw,{icon:e,tooltipClassName:"wide pull-left",tooltipId:`upstream-indicator-tooltip-${t}-${o}`,tooltipText:n})}function n_({avatarUrl:e,context:t,icon:o,tooltipText:n}){return u().createElement(nw,{icon:ny(e,o,t),tooltipId:`remote-icon-${n||"tooltipText"}`,tooltipText:n})}var nR=o(9453),nT=o(7334),nk=o(9915),nE=function({name:e}){return u().createElement("span",{className:"ref-name truncate",style:{height:w.pj}},e)};function nO(e,t,o,n=0){let r,i,s;let{annotated:a,refType:l,message:c,name:h}=t;switch(l){case B.V.REMOTE:{i=t.hostingServiceType?`${B.V.REMOTE}-${t.hostingServiceType}`:B.V.REMOTE,r=t.avatarUrl;let e=`${h} (${o("Ref-Remote")})`;s=t.owner?`${t.owner} -> ${e}`:e;break}case B.V.TAG:i=B.V.TAG,s=`${a&&c?c:h} (${o("Ref-Tag")})`;break;case B.V.HEAD:default:i=B.V.HEAD,s=`${h} (${o("Ref-Local")})`}let p=t.context||void 0,f=u().createElement("span",{className:d()("mr1"),"data-vscode-context":(0,F.q3)(p)},e(i));return u().createElement(n_,{avatarUrl:r||"",context:p,icon:f,key:`ref-icon-${n}-${l}-${h}`,tooltipText:s})}class nI extends u().PureComponent{getContextForRefGroupIfExists(e,t,o){let n,r=!1,i=!1,s=!1;for(let a of e){if(a.refType===B.V.HEAD)return o?a.contextGroup||t:a.context;a.refType===B.V.REMOTE&&("origin"===a.owner?(r=!0,n=o?a.contextGroup||t:a.context):r||"upstream"!==a.owner?r||i||(s=!0,n=o?a.contextGroup||t:a.context):(i=!0,n=o?a.contextGroup||t:a.context)),r||i||s||(n=o?a.contextGroup||t:a.context)}return n}getDecoratedRefIcon(e,t,o,n,r){return u().createElement("div",{className:r,"data-vscode-context":(0,F.q3)(n),key:e,onClick:e=>this.onClickMetadata(e,o),onDoubleClick:e=>this.onDoubleClickMetadata(e,o)},t)}getPullRequestIconsAndTooltipsForRef(e,t,o){let n;let{getExternalIcon:r,onMissingRefMetadata:i,translate:s}=this.props;if(!(n=t.refType===B.V.HEAD?t.upstream?e?.[t.upstream.id]?.[nR.mQ]:null:(0,F.uV)(t,e,i,nR.mQ))||0===n.length)return null;let a=[];for(let e of n){let{context:n,hostingServiceType:i,id:l,title:c}=e;if(o.has(l))continue;o.add(l);let h={refId:t.id,type:nR.mQ,data:e},p=`pr-icon-${t.refType}-${t.name}-${l}`,f=this.getDecoratedRefIcon(p,r("pull-request"),h,n,d()("mr1","ref-pull-request"));a.push(u().createElement(nS,{hostingServiceType:i,icon:f,id:l,key:p,toolTipText:c&&""!==c.trim()?s("PullRequestIcon-Tooltip",l,c,(0,nT.y)(i)):""}))}return a}getUpstreamIndicatorIconsAndTooltipsForRef(e,t){let{getExternalIcon:o,onMissingRefMetadata:n,translate:r}=this.props,i=(0,F.uV)(t,e,n,nR.uq);if(!i||0===i.ahead&&0===i.behind)return null;let s={refId:t.id,type:nR.uq,data:i},a=i.ahead>0,l=i.behind>0,c=i.context;if(a||l){let e,n;let d=a?`${i.ahead>99?"99+":i.ahead}`:"",h=l?`${i.behind>99?"99+":i.behind}`:"",p=`${i.owner}/${i.name}`;l&&a?(e=r("UpstreamIndicatorIcon-BehindAndAheadTooltip",h,d,p),n="ahead-behind"):l?(e=r("UpstreamIndicatorIcon-BehindTooltip",h,p),n="behind"):a&&(e=r("UpstreamIndicatorIcon-AheadTooltip",d,p),n="ahead");let f=u().createElement(u().Fragment,null,l?u().createElement(u().Fragment,null,u().createElement("span",{className:"ref-upstream-behind"},h),o("upstream-behind")):null,a?u().createElement(u().Fragment,null,u().createElement("span",{className:"ref-upstream-ahead"},d),o("upstream-ahead")):null);return u().createElement(nx,{icon:this.getDecoratedRefIcon(`ref-upstream-${t.id}`,f,s,c,"ref-upstream"),tooltipText:e,type:n,upstream:p})}return null}getIssueIconsAndTooltipsForRef(e,t,o){let{getExternalIcon:n,onMissingRefMetadata:r,translate:i}=this.props,s=(0,F.uV)(t,e,r,nR.$M);if(!s||0===s.length)return null;let a=[];for(let e of s){if(o.has(e.id))continue;let r={refId:t.id,type:nR.$M,data:e};o.add(e.id);let s=u().createElement(nC,{getExternalIcon:n,id:e.id,issueTrackerType:e.issueTrackerType,key:`issue-icon-${e.id}`,toolTipText:e.title&&""!==e.title.trim()?i("IssueIcon-Tooltip",e.displayId,e.title):""}),l=t.context||void 0;a.push(this.getDecoratedRefIcon(`ref-issue-${e.id}`,s,r,l,d()("mr1","ref-issue")))}return a}onContextMenu=e=>{let{onContextMenu:t,refGroup:o,sha:n}=this.props;t(e,o,n)};onClick=e=>{let{onClick:t,refGroup:o,sha:n}=this.props;t(e,o,n)};onClickMetadata=(e,t)=>{e.stopPropagation();let{onClick:o,refGroup:n,sha:r}=this.props;o(e,n,r,t)};onDoubleClick=e=>{let{onDoubleClick:t,refGroup:o,sha:n}=this.props;t(e,o,n)};onDoubleClickMetadata=(e,t)=>{e.stopPropagation();let{onDoubleClick:o,refGroup:n,sha:r}=this.props;o(e,n,r,t)};render(){let{enableShowHideRefsOptions:e,hasActive:t,hasRefs:o,isActive:n,isGhostRef:r,getExternalIcon:i,groupIsHovered:s,isInUnsupportedRebase:a,onRefBeginDrag:l,onRefDragEnter:c,onRefDragLeave:h,onRefDrop:p,onRefCanDrag:f,onRefCanDrop:m,onRefEndDrag:g,isRefGroupIncluded:b,refGroup:v,refGroupContext:y,refMetadata:C,onHovered:S,onHideRefClick:x,sha:_,showRemoteNamesOnRefs:R,enabledRefMetadataTypes:T,translate:k,type:E}=this.props,O=d()("ref-node-wrapper","flex"),I={minWidth:0,marginLeft:3,height:w.cZ},M=d()("ref-node","flex","items-center","p1",{"has-active":t,"dim-ref":!o&&s,"is-active":n}),D="";v.length>0&&(D=R&&v[0].fullName||v[0].name);let A=u().createElement(nE,{name:D}),$=[],P=[],N=[],z=null,H=new Set,L=new Set;v.forEach((e,t)=>{if($.push(nO(i,e,k,t)),T.includes(nR.$M)&&(e.refType===B.V.HEAD||e.refType===B.V.REMOTE)){let t=this.getIssueIconsAndTooltipsForRef(C,e,L);t&&N.push(...t)}if(T.includes(nR.mQ)&&e.refType===B.V.REMOTE){let t=this.getPullRequestIconsAndTooltipsForRef(C,e,H);t&&P.push(...t)}T.includes(nR.uq)&&e.refType===B.V.HEAD&&(z=this.getUpstreamIndicatorIconsAndTooltipsForRef(C,e))});let W=[...$,...P,...N],G=n?u().createElement(nw,{icon:u().createElement("span",{className:d()("mr1")},i("check")),tooltipId:"ref-icon-current",tooltipText:k("Ref-Current")}):null,U=this.getContextForRefGroupIfExists(v,y),V=this.getContextForRefGroupIfExists(v,y,!0),j=e&&!t&&s&&!b?u().createElement(nw,{icon:u().createElement("span",{className:d()("mr1","button"),onClick:e=>x(e,v,_)},i("hide")),tooltipId:`ref-node-toggle-visibility-btn-${D}`,tooltipText:k("Hide")}):null;return u().createElement(nk.Z,{canDrag:e=>f(e),canDrop:(e,t,o)=>m(e,t,o),className:O,"data-vscode-context":(0,F.q3)(V),dndData:{commitType:E,isGhostRef:r,isInUnsupportedRebase:a,refGroup:v,sha:_},dndId:`DndRefNode_${v[0].id}`,onBeginDrag:(e,t)=>l(e,t),onDragEnter:(e,t,o)=>c(e,t,o),onDragLeave:(e,t,o)=>h(e,t,o),onDrop:(e,t,o)=>p(e,t,o),onEndDrag:(e,t,o)=>g(e,t,o),style:I},u().createElement("span",{className:M,"data-test-class":"ref-node-span","data-vscode-context":(0,F.q3)(U),onContextMenu:a?void 0:this.onContextMenu,onDoubleClick:a?void 0:this.onDoubleClick,onMouseDown:this.onClick,onMouseEnter:e=>S(e,v,_),style:{minWidth:"100%"}},G,u().createElement("span",{className:"flex items-center"},W),A,z,u().createElement("span",{className:"flex ml-auto"},j)))}}class nM extends u().Component{headIconsRef=u().createRef();constructor(e){super(e),this.state={showPopoverMenu:!1,refPopoverMenuTarget:void 0}}onHiddenRefsClick=e=>{let{showPopoverMenu:t}=this.state;this.setState({showPopoverMenu:!t,refPopoverMenuTarget:t?e.target:void 0})};onShowRefNodes=(e,t,o)=>{this.props.onToggleRefNodesShown(e,t,o),0===Object.keys(this.props.excludeRefsById).length&&this.onHiddenRefsClick(e)};compareGraphRefOpts(e,t){let o=e.name.localeCompare(t.name);return 0===o&&e.type===B.V.REMOTE?-1:o}render(){let{columnSetting:e,enableResizer:t,enableShowHideRefsOptions:o,getExternalIcon:n,graphWidth:r,graphZones:i,graphZoneType:s,excludeRefsById:a,includeOnlyRefsById:l,isDraggable:c,onFilterColumnClick:h,onHover:p,onResize:f,onResizeEnd:m,onResizeFromPropChange:g,onResizeStart:b,onUnhover:v,onSettingsClick:y,rowsStatsLoading:C,settingsContext:S,showRemoteNamesOnRefs:x,translate:_}=this.props,{showPopoverMenu:R,refPopoverMenuTarget:T}=this.state,k=(0,F.zv)(s,i);if(!k)return null;let E=(0,F.SH)(s,i),O=k.currentWidth-w.b4,I=`${s}-header`,M=k.currentWidth<=k.showIconWidth,D=e?.isFilterable||!1,A=M&&(D||o),$=d()("columns-btn",{"small-btn":A}),P=null,N=null;if(s===w.jZ){let e=Object.entries(a),t=Object.values(l),r=t.length>0,i=r&&t.some(e=>e.type===B.V.TAG),s=e.filter(e=>e[1].type===B.V.TAG&&(!r||!i)||!l[e[0]]);s.length>0&&(N=s.sort((e,t)=>this.compareGraphRefOpts(e[1],t[1])).map((e,t)=>{let o=e[0],r=e[1];a[o].id=o;let i={name:r.name,refType:r.type,owner:r.owner,avatarUrl:r.avatarUrl},s=(x||"*"===i.name)&&i.refType===B.V.REMOTE?`${i.owner}/${i.name}`:i.name;return u().createElement("li",{id:o,key:o,onClick:e=>this.onShowRefNodes(e,[a[o]],!0)},nO(n,i,_,t),u().createElement("span",{className:"text-ellipsis"},s))}),P=o?u().createElement("div",{className:d()($,"right","text-normal","button",R?"active":null)},u().createElement(nw,{icon:u().createElement("span",{onClick:this.onHiddenRefsClick},n("hide")),tooltipId:"header-ref-node-hidden-refs-btn",tooltipText:_("GraphHeader-HiddenRefs-btn")})):null)}let z=D?u().createElement("div",{className:d()($,"columns-filter","right","fs-1",{filtering:e?.isFilterActive||!1})},u().createElement(nw,{icon:u().createElement("span",{className:"columns-filter-icon text-disabled hover-icon",id:`${s}-header-filter`,onClick:e=>h(e,s),style:{height:w.ze,marginBottom:w.wi}},n("filter")),tooltipId:"header-columns-filter",tooltipText:_("GraphHeader-Filter")})):null,H=!M&&s===w.WD&&C?u().createElement("span",{className:d()($,"spinner")},n("loading")):null,L=u().createElement(oj,{container:this,onHide:R?this.onHiddenRefsClick:void 0,placement:R?"bottom":void 0,rootClose:R,show:R,target:T},u().createElement(no,{className:d()({"is-last-header":E}),id:"opts-popover",style:{display:R?"block":"none"}},u().createElement("ul",null,N))),W=E&&y?u().createElement("div",{className:d()("columns-btn","columns-settings","right","fs-1"),"data-vscode-context":(0,F.q3)(S)},u().createElement(nw,{icon:u().createElement("span",{className:"columns-settings-icon text-disabled hover-icon",onClick:e=>y(e,r)},n("settings")),tooltipId:"header-columns-settings",tooltipText:_("GraphHeader-EditColumns")})):null,G=this.headIconsRef?.current?.clientWidth&&parseInt(this.headIconsRef.current.clientWidth,10)||0,U=u().createElement("div",{className:"header-columns-icons",ref:this.headIconsRef},W,H,z,P),V=M?u().createElement(u().Fragment,null,u().createElement("div",{className:d()($,"justify-start",{ml1:!A}),style:{width:O-G},title:_(k.headerLabelUntranslated)},n((0,F.sH)(s))),U):u().createElement(u().Fragment,null,u().createElement("div",{className:"text-disabled text-ellipsis",style:{height:w.ze,overflow:"hidden",width:O-G}},u().createElement("span",{className:"fs-1 ml1 font-monospace"},_(k.headerLabelUntranslated))),U),j=u().createElement("div",{onMouseEnter:p,onMouseLeave:v},L,V),Z=d()("panel-bg0","graph-header",{"is-draggable":c,"is-last-header":E});return E?u().createElement("div",{className:Z,id:I,key:I,style:{minWidth:O,transform:"translate3d(0, 0, 0)",zIndex:2}},j):u().createElement("div",{className:Z,id:I,key:I,style:{display:"flex",minWidth:k.currentWidth,transform:"translate3d(0, 0, 0)",width:k.currentWidth,zIndex:2}},u().createElement(om,{className:Z,enable:t,handleStyles:{right:{right:0}},height:w.ze,onResize:f?e=>f(k,e):void 0,onResizeEnd:m?e=>m(k,e):void 0,onResizeFromPropChange:g?e=>g(k,e):void 0,onResizeStart:b?e=>b(k,e):void 0,resizeContentClassName:"z1",resizeEdge:"right",resizeHandleClassName:"z2 border-right",style:{display:"flex"},translate:_,width:k.currentWidth,widthConstraints:(0,F.eR)(s,i,r)},j))}}class nD extends u().PureComponent{canDrag=!1;isDraggable=e=>this.canDrag&&e.props.isDraggable;isDroppable=(e,t)=>e.props.graphZoneType!==t?.props?.graphZoneType&&(!t||t.props.isDroppable);onDrop=(e,t)=>{this.props.onColumnReOrdered&&this.props.onColumnReOrdered(e.props.graphZoneType,t?t.props.graphZoneType:null)};onZoneHover=()=>{this.canDrag=!0};onZoneUnHover=()=>{this.canDrag=!1};render(){let{columnsSettings:e,dragAppendToContainer:t,enableResizer:o,enableShowHideRefsOptions:n,getExternalIcon:r,excludeRefsById:i,headerContext:s,includeOnlyRefsById:a,onFilterColumnClick:l,onPopupGraphHeaderContextMenu:c,onGraphZoneResize:d,onGraphZoneResizeEnd:h,onGraphZoneResizeFromPropChange:p,onSettingsClick:f,onToggleRefNodesShown:m,graphZones:g,repoPath:b,rowsStatsLoading:v,showRemoteNamesOnRefs:y,translate:C,width:S,height:x,settingsContext:_}=this.props,R=u().createElement("div",{className:"panel-bg0",style:{height:w.ze,marginBottom:w.wi,marginLeft:-w.mu,minWidth:w.mu+w.b4}});return u().createElement("div",{className:"graph-header flex","data-vscode-context":(0,F.q3)(s),onContextMenu:c?e=>c(e,S):void 0,style:{height:w.ze,marginBottom:w.wi}},R,u().createElement(oR,{className:"flex",direction:"horizontal",isDraggable:this.isDraggable,isDroppable:this.isDroppable,mirrorContainer:t,onDrop:this.onDrop},g.map(t=>u().createElement(nM,{columnSetting:e[t.type],enableResizer:o,enableShowHideRefsOptions:n,excludeRefsById:i,getExternalIcon:r,graphHeight:x,graphWidth:S,graphZones:g,graphZoneType:t.type,id:`${t.type}Header`,includeOnlyRefsById:a,isDraggable:t.isCustomizable,isDroppable:t.isCustomizable,key:`${t.type}Header`,onFilterColumnClick:l,onHover:this.onZoneHover,onResize:d,onResizeEnd:h,onResizeFromPropChange:p,onSettingsClick:f,onToggleRefNodesShown:m,onUnhover:this.onZoneUnHover,repoPath:b,rowsStatsLoading:v,settingsContext:_,showRemoteNamesOnRefs:y,translate:C}))))}}function nA(e){let{constraints:{max:t,min:o},stats:{files:n,additions:r,deletions:i},getExternalIcon:s,isLastColumn:a,isRowSelected:l,verticalScrollWidth:c,zoneWidth:h}=e,p=r+i,f=Math.max(o,Math.min(t,p)),m=a?c+w.SZ:w.SZ;p<=f&&(m+=w.SZ);let g=Math.max(w.QW,f/t*(h-52-m));return u().createElement("div",{className:d()("changes-zone",l?"selected":null)},u().createElement("span",{className:"changes-files",style:{width:52}},u().createElement("span",{className:"mr1"},s("files")),u().createElement("span",{className:"mr1"},n>999?"999+":n)),u().createElement("span",{className:"changes-bar",style:{width:g}},r?u().createElement("div",{className:"changes-sub-bar added",style:{width:r/p*g}}):null,i?u().createElement("div",{className:"changes-sub-bar deleted",style:{width:i/p*g}}):null))}let n$=d()("absolute","top-0","right-0","bottom-0","left-0","time-line"),nP=d()(n$,"z2");var nN=function({z2:e}){return u().createElement("div",{className:e?nP:n$,style:{height:2}})};let nz=u().createElement("div",{className:"color-strip height-100",style:{width:2}}),nH={},nL={};class nF extends u().PureComponent{render(){let{clearCurrentlyHoveredGraphCommit:e,children:t,column:o,context:n,currentlyHoveredCommitSha:r,dimRowsOfSelectedCommit:i,getExternalIcon:s,graphZoneType:a,hasAvatars:l,highlightRowsOnRefHover:c,isDimmedMergeCommitRow:h,isHighlighted:p,isHovering:f,isLastColumn:m,isInUnsupportedRebase:g,isMissingHoveredRefGroup:b,isSelected:v,numGraphColumns:y,onContextMenu:C,onClickCommit:S,onDoubleClickCommit:x,rowContext:_,sha:R,showColorStrip:T,showConflictIcon:k,showTimeline:E,setAsCurrentlyHoveredGraphCommit:O,style:I,title:M,type:D,verticalScrollWidth:A,zoneWidth:$}=this.props,P=function(e,t){let o=e+t.toString(),n=nH[o];return n||(n=d()("graph-row-wrapper","grow-3","height-100","graph-zone-column","min-width-0","pb3","pointer","pt3","relative",e,{"is-hovering":t}),nH[o]=n,n)}(D,f),N=function(e,t,o,n,r,i=!1,s=!1,a=!1,l=!1){let c=`${e}${t}${n}${o}${i}${s}${a}${l}${r}`,h=nL[c];return h||(h=d()("column-"+(t%r+1),"graph-row","height-100-percent","flex",e,{"is-selected":n},{"is-highlighted":o},{"dimmed-row":l&&!o||i&&(s||a)}),nL[c]=h,h)}(D,o,p,v,y,b,c,i,h),z=E?u().createElement(nN,null):null;return u().createElement("div",{className:P,"data-vscode-context":(0,F.q3)(_),onContextMenu:g?void 0:e=>C(e,a,R),onDoubleClick:e=>x(e,a,R),onMouseDown:e=>S(e,a,R),onMouseEnter:e=>O(e,a,R,r),onMouseLeave:t=>e(t,a,R,r),style:I},z,u().createElement("div",{className:N,"data-vscode-context":(0,F.q3)(n)},T?nz:null,k?u().createElement("span",{className:d()("ml2")},s("warning")):null,u().createElement("span",{className:d()("graph-zone","width-100","flex-1"),style:{lineHeight:`${w.cZ}px`,...m&&{width:$-A},...l&&{marginLeft:5}},title:M},t)))}}var nW=(e,t)=>{let{processedRows:o,rowStatsConstraints:n,getExternalIcon:r,highlightRowsOnRefHover:i,isInUnsupportedRebase:s,numGraphColumns:a,clearCurrentlyHoveredGraphCommit:l,currentlyHoveredCommitSha:c,dimMergeCommits:d,dimRowsOfSelectedCommit:h,onCommitContextMenu:p,onClickCommit:f,onDoubleClickCommit:m,rowsStats:g,setAsCurrentlyHoveredGraphCommit:b}=e,v=new F.Dj(e);return({rowIndex:e,style:C})=>{let S=t(e),x=o[e],{sha:_,type:R,contexts:T}=x,k=T?.stats||void 0,E=T?.row||void 0,O=g?.[_],I=[O?.files?`${O.files} files changed`:"",O?.additions?`${O.additions} lines added`:"",O?.deletions?`${O.deletions} lines deleted`:""].filter(Boolean).join(", ");I=R!==y.ch?I:"";let M=w.WD,D=v.isColumnFollowingGraphColumn(M),A=v.isLastColumn(M),$=v.getZoneWidth(M),P=v.getVerticalScrollWidth(M);return u().createElement(nF,{clearCurrentlyHoveredGraphCommit:l,column:x.column,context:k,currentlyHoveredCommitSha:c,dimRowsOfSelectedCommit:h,getExternalIcon:r,graphZoneType:M,highlightRowsOnRefHover:i,isDimmedMergeCommitRow:R===y.lH&&d,isHighlighted:v.isHighlighted(e),isHovering:v.isHovering(e),isInUnsupportedRebase:s,isLastColumn:A,isMissingHoveredRefGroup:v.isMissingHoveredRefGroup(e),isSelected:v.isSelected(e),key:S,numGraphColumns:a,onClickCommit:f,onContextMenu:p,onDoubleClickCommit:m,rowContext:E,setAsCurrentlyHoveredGraphCommit:b,sha:_,showColorStrip:D,showTimeline:v.hasTimeline(e),style:C,title:I,type:R,verticalScrollWidth:P,zoneWidth:$},O&&R!==y.ch?u().createElement(nA,{constraints:n,getExternalIcon:r,isLastColumn:A,isRowSelected:v.isSelected(e),stats:O,verticalScrollWidth:P,zoneWidth:$}):null)}};function nG(e){let t=(e||"").trim().toUpperCase();if(0===t.length)return"?";let o=t.split(" ");return 1===o.length?o[0][0]:o.length>1?o[0][0]+o[o.length-1][0]:"?"}function nB(e,t){return e&&t?`${e} <${t}>`:e||t||""}class nU extends u().Component{overlayTriggerRef;constructor(e){super(e),this.state={tooltipText:""}}componentDidUpdate(e,t){this.overlayTriggerRef&&this.state.tooltipText!==t.tooltipText&&this.overlayTriggerRef.show()}getDefaultAvatar=(e,t,o)=>{let{authorInitials:n,column:r,context:i,cssVariables:s,style:a,fontSize:l,minWidth:c,size:d,title:h=""}=this.props,p=void 0!==r&&s[(0,k.a2)(r)]||w.iq,f=v(p.trim()),m={alignItems:"center",backgroundColor:p,backgroundSize:d,color:f,display:"flex",fontSize:`${l}px`,fontWeight:"bold",height:e,justifyContent:"center",minWidth:c,top:o,width:t,...a};return u().createElement("div",{className:this.getAvatarClassName(),"data-vscode-context":(0,F.q3)(i),style:m,title:h},n?n.toUpperCase():"")};ensureTooltipText=()=>{let{tooltip:e}=this.props;this.setState({tooltipText:"function"==typeof e?e():e})};setOverlayTriggerRef=e=>{this.overlayTriggerRef=e};getAvatarClassName(){return d()("avatar","gravatar","rad2",this.props.className)}render(){let{tooltipText:e}=this.state,{avatarUrl:t,context:o,style:n,height:r,minWidth:i,size:s,title:a="",tooltip:l,top:c,useAuthorInitialsForAvatars:d,width:h}=this.props,p=r||s,f=h||s,m=c||w.P3/2-p/2,g={top:m,minWidth:i,...n},b=this.getDefaultAvatar(p,f,m),v=d?b:u().createElement("span",null,u().createElement(nv,{avatarClassName:this.getAvatarClassName(),avatarStyle:g,context:o,height:p,hint:a,size:s,url:t,width:f},this.getDefaultAvatar(p,f,m)));return l?u().createElement(nu,{delayShow:250,key:e,onEnter:this.ensureTooltipText,overlay:u().createElement(nm,{className:"gk-graph",id:"graph-gravatar-tooltip"},e),placement:"top",ref:this.setOverlayTriggerRef,trigger:["hover","focus"]},v):v}}var nV=(e,t)=>{let{avatarUrlByEmail:o,clearCurrentlyHoveredGraphCommit:n,cssVariables:r,currentlyHoveredCommitSha:i,dimMergeCommits:s,dimRowsOfSelectedCommit:a,getExternalIcon:l,highlightRowsOnRefHover:c,processedRows:h,isInUnsupportedRebase:p,onCommitContextMenu:f,onClickCommit:m,onDoubleClickCommit:g,numGraphColumns:b,setAsCurrentlyHoveredGraphCommit:v,useAuthorInitialsForAvatars:C}=e,S=new F.Dj(e);return({rowIndex:e,style:_})=>{let T=t(e),k=h[e],{author:E,email:O,message:I,sha:M,type:D,contexts:A}=k,$=w.GF,P=S.getActiveGraphZone($),N=D!==y.ch?E:void 0,z=D!==y.ch?nB(E,O):void 0,H=A?.author||void 0,L=A?.row||void 0,F=S.isColumnFollowingGraphColumn($),W=S.isLastColumn($),G=S.getZoneWidth($),B=(G<=P.minimumWidth||P?.mode===w.Um.Rich)&&D!==y.ch;if(B){let e=C?void 0:o[O];N=u().createElement(nU,{authorInitials:nG(E),avatarUrl:e,className:d()("node",`${y.o$}`,"z6"),column:k.column,context:A?.avatar||void 0,cssVariables:r,fontSize:10,height:w.LG,size:w.Y8,tooltip:()=>{let e=E&&""!==E.trim()&&"Unknown"!==E?nB(E,O):O,t=R(x(I||"")),o="";if(0===t.length)o=e;else{t.unshift({email:O,name:E});for(let e=0;e<t.length;e+=1){let n=t[e];o+=nB(n.name,n.email),e<t.length-1&&(o+=", ")}}return o},useAuthorInitialsForAvatars:C,width:w.LG})}return u().createElement(nF,{clearCurrentlyHoveredGraphCommit:n,column:k.column,context:H,currentlyHoveredCommitSha:i,dimRowsOfSelectedCommit:a,getExternalIcon:l,graphZoneType:$,hasAvatars:B,highlightRowsOnRefHover:c,isDimmedMergeCommitRow:D===y.lH&&s,isHighlighted:S.isHighlighted(e),isHovering:S.isHovering(e),isInUnsupportedRebase:p,isLastColumn:W,isMissingHoveredRefGroup:S.isMissingHoveredRefGroup(e),isSelected:S.isSelected(e),key:T,numGraphColumns:b,onClickCommit:m,onContextMenu:f,onDoubleClickCommit:g,rowContext:L,setAsCurrentlyHoveredGraphCommit:v,sha:M,showColorStrip:F,showTimeline:S.hasTimeline(e),style:_,title:z,type:D,verticalScrollWidth:S.getVerticalScrollWidth($),zoneWidth:G},N)}},nj=(e,t)=>{let{processedRows:o,getExternalIcon:n,highlightRowsOnRefHover:r,isInUnsupportedRebase:i,numGraphColumns:s,formatCommitDateTime:a,clearCurrentlyHoveredGraphCommit:l,dimMergeCommits:c,dimRowsOfSelectedCommit:d,currentlyHoveredCommitSha:h,onCommitContextMenu:p,onClickCommit:f,onDoubleClickCommit:m,setAsCurrentlyHoveredGraphCommit:g}=e,b=new F.Dj(e);return({rowIndex:e,style:v})=>{let C=t(e),S=o[e],{date:x,sha:_,type:R,contexts:T}=S,k=x&&R!==y.ch?a(x,y.Gu.RowEntry):void 0,E=x&&R!==y.ch?a(x,y.Gu.Tooltip):void 0,O=T?.date||void 0,I=T?.row||void 0,M=w.PL,D=b.isColumnFollowingGraphColumn(M),A=b.isLastColumn(M),$=b.getZoneWidth(M),P=b.getVerticalScrollWidth(M);return u().createElement(nF,{clearCurrentlyHoveredGraphCommit:l,column:S.column,context:O,currentlyHoveredCommitSha:h,dimRowsOfSelectedCommit:d,getExternalIcon:n,graphZoneType:M,highlightRowsOnRefHover:r,isDimmedMergeCommitRow:R===y.lH&&c,isHighlighted:b.isHighlighted(e),isHovering:b.isHovering(e),isInUnsupportedRebase:i,isLastColumn:A,isMissingHoveredRefGroup:b.isMissingHoveredRefGroup(e),isSelected:b.isSelected(e),key:C,numGraphColumns:s,onClickCommit:f,onContextMenu:p,onDoubleClickCommit:m,rowContext:I,setAsCurrentlyHoveredGraphCommit:g,sha:_,showColorStrip:D,showTimeline:!1,style:v,title:E,type:R,verticalScrollWidth:P,zoneWidth:$},k)}},nZ={glyph:oN().string.isRequired},nq=function(e){function t(){return e.apply(this,arguments)||this}return oM(t,e),t.prototype.render=function(){var e,t=this.props,o=t.glyph,n=t.className,r=o8(ok(t,["glyph","className"])),i=r[0],s=r[1],a=oA({},o4(i),((e={})[o5(i,o)]=!0,e));return u().createElement("span",oA({},s,{className:d()(n,a)}))},t}(u().Component);nq.propTypes=nZ;let nK=o3("glyphicon",nq);var nY={$bs_formGroup:oN().object},nQ=function(e){function t(){return e.apply(this,arguments)||this}oM(t,e);var o=t.prototype;return o.getGlyph=function(e){switch(e){case"success":return"ok";case"warning":return"warning-sign";case"error":return"remove";default:return null}},o.renderDefaultFeedback=function(e,t,o,n){var r=this.getGlyph(e&&e.validationState);return r?u().createElement(nK,oA({},n,{glyph:r,className:d()(t,o)})):null},o.render=function(){var e=this.props,t=e.className,o=e.children,n=o8(ok(e,["className","children"])),r=n[0],i=n[1],s=o4(r);if(!o)return this.renderDefaultFeedback(this.context.$bs_formGroup,t,s,i);var a=u().Children.only(o);return u().cloneElement(a,oA({},i,{className:d()(a.props.className,t,s)}))},t}(u().Component);nQ.defaultProps={bsRole:"feedback"},nQ.contextTypes=nY;let nX=o3("form-control-feedback",nQ);var nJ={componentClass:oF()},n0=function(e){function t(){return e.apply(this,arguments)||this}return oM(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,o=e.className,n=o8(ok(e,["componentClass","className"])),r=n[0],i=n[1],s=o4(r);return u().createElement(t,oA({},i,{className:d()(o,s)}))},t}(u().Component);n0.propTypes=nJ,n0.defaultProps={componentClass:"p"};let n1=o3("form-control-static",n0);var n2={componentClass:oF(),type:oN().string,id:oN().string,inputRef:oN().func},n5={$bs_formGroup:oN().object},n3=function(e){function t(){return e.apply(this,arguments)||this}return oM(t,e),t.prototype.render=function(){var e,t=this.context.$bs_formGroup,o=t&&t.controlId,n=this.props,r=n.componentClass,i=n.type,s=n.id,a=n.inputRef,l=n.className,c=n.bsSize,h=o8(ok(n,["componentClass","type","id","inputRef","className","bsSize"])),p=h[0],f=h[1];return"file"!==i&&(e=o4(p)),c&&(e[o5({bsClass:"input"},o1[c]||c)]=!0),u().createElement(r,oA({},f,{type:i,id:void 0===s?o:s,ref:a,className:d()(l,e)}))},t}(u().Component);n3.propTypes=n2,n3.defaultProps={componentClass:"input"},n3.contextTypes=n5,n3.Feedback=nX,n3.Static=n1;let n6=o3("form-control",o6([o0,oJ],n3)),n4={ADDED:"added",DELETED:"deleted",MODIFIED:"modified",RENAMED:"renamed"};class n7 extends u().Component{render(){let{fileDiffType:e,getExternalIcon:t,translate:o}=this.props;if(!e)return null;let n=(e=>{switch(e){case n4.ADDED:return"added";case n4.MODIFIED:return"modified";case n4.DELETED:return"deleted";case n4.RENAMED:return"renamed";default:return null}})(e),r=(e=>{switch(e){case n4.ADDED:return"color-green";case n4.MODIFIED:return"color-orange";case n4.DELETED:return"color-red";case n4.RENAMED:return"color-blue";default:return null}})(e),i=(e=>{switch(e){case n4.ADDED:return"CommitDiffSection-FileAdded";case n4.MODIFIED:return"CommitDiffSection-FileModified";case n4.DELETED:return"CommitDiffSection-FileDeleted";case n4.RENAMED:return"CommitDiffSection-FileRenamed";default:return null}})(e),s=d()("fs-1",r,"mr1");return u().createElement("span",{className:s,title:o(i)},n&&t(n))}}let{ADDED:n9,DELETED:n8,MODIFIED:re,RENAMED:rt}=n4,ro={[n9]:"CommitDiffSection-NFilesAdded",[n8]:"CommitDiffSection-NFilesDeleted",[re]:"CommitDiffSection-NFilesModified",[rt]:"CommitDiffSection-NFilesRenamed"};var rn=function({count:e,diffType:t,getExternalIcon:o,fileNodeListStyle:n,translate:r}){let i,s;let a=n?e:r(ro[t],e);return n&&(i={fontSize:w.wd,marginRight:w.IX},s={fontSize:w.dH,margin:`0px ${w.VB}px 0px 0px`}),u().createElement("span",{className:"tiny-files-readout",style:i},u().createElement(n7,{fileDiffType:t,getExternalIcon:o,style:s,translate:r}),u().createElement("span",{className:"tiny-files-readout-text"},a))},rr=function({diffStats:e,fileNodeListStyle:t,getExternalIcon:o,translate:n}){let{types:r}=l;if(!e||!Object.values(e).some(e=>!!e))return u().createElement("span",null);let i=e.modified?u().createElement(rn,{count:e.modified,diffType:r.MODIFIED,fileNodeListStyle:!0,getExternalIcon:o,translate:n}):null,s=e.added?u().createElement(rn,{count:e.added,diffType:r.ADDED,fileNodeListStyle:!0,getExternalIcon:o,translate:n}):null,a=e.deleted?u().createElement(rn,{count:e.deleted,diffType:r.DELETED,fileNodeListStyle:!0,getExternalIcon:o,translate:n}):null,c=e.renamed?u().createElement(rn,{count:e.renamed,diffType:r.RENAMED,fileNodeListStyle:!0,getExternalIcon:o,translate:n}):null,d=t?{marginLeft:w.aV}:null;return u().createElement("span",{className:"summary",style:d},i,s,a,c)};class ri extends u().Component{textWidthRef=u().createRef();wrapperRef=u().createRef();static defaultProps={style:{},value:""};componentDidMount(){this.wrapperRef?.current&&(this.wrapperRef.current.style.width="0px")}componentDidUpdate(){this.textWidthRef?.current&&this.wrapperRef?.current&&(this.wrapperRef.current.style.width=`${Number(this.textWidthRef.current.offsetWidth)+35}px`)}componentWillUnmount(){this.props.onBlur&&this.props.onBlur()}onWipKeyDown(e){e.stopPropagation()}render(){let{clearCurrentlyHoveredGraphCommit:e,currentlyHoveredCommitSha:t,getExternalIcon:o,graphZoneType:n,isCommitting:r,isHovering:i,isSelected:s,onBlur:a,onClickCommit:l,onContextMenu:c,onFocus:h,onMessageChange:p,setAsCurrentlyHoveredGraphCommit:f,sha:m,style:g,translate:b,value:v,workDirStats:w}=this.props,C=d()("graph-zone-column","pt3","pb3","pointer","height-100-percent","grow-3","graph-row-wrapper",y.ch,{"is-hovering":i}),S=d()("column-1","graph-row","flex",{"is-selected":s}),x=u().createElement(rr,{diffStats:w,getExternalIcon:o,translate:b}),_=u().createElement("div",{className:"work-dir-input",ref:this.wrapperRef},u().createElement(n6,{"data-test-class":"work-dir-input-field",disabled:r,onBlur:e=>a(e),onChange:e=>p(e.target.value),onContextMenu:e=>c(e,n,m),onFocus:e=>h(e),onKeyDown:e=>this.onWipKeyDown(e),placeholder:b("WorkDirMessageInput-WIPPlaceholder"),type:"text",value:v}),u().createElement("div",{className:"text-width","data-test-class":"work-dir-input-message",ref:this.textWidthRef},v));return u().createElement("div",{className:C,onMouseEnter:e=>f(e,n,m,t),onMouseLeave:o=>e(o,n,m,t),style:g},u().createElement("div",{className:S,"data-test-class":"work-dir-message-row-div",onMouseDown:e=>l(e,n,m)},_,x))}}var rs=(e,t)=>{let{dimMergeCommits:o,dimRowsOfSelectedCommit:n,processedRows:r,translate:i,getExternalIcon:s,graphCommitDescDisplayMode:a,highlightRowsOnRefHover:l,isInUnsupportedRebase:c,numGraphColumns:d,isCommitting:h,pendingCommitMessageSummary:p,workDirStats:f,onBlurWipNodeInput:m,onFocusWipNodeInput:g,onMessageChange:b,clearCurrentlyHoveredGraphCommit:v,currentlyHoveredCommitSha:C,onCommitContextMenu:S,onClickCommit:x,onDoubleClickCommit:_,setAsCurrentlyHoveredGraphCommit:R,wipMessageEditable:T}=e,k=new F.Dj(e);return({rowIndex:e,style:E})=>{let O=t(e),I=r[e],{displaySummary:M,displayBody:D,sha:A,type:$,contexts:P,message:N}=I,z=P?.message||void 0,H=P?.row||void 0,L=w.KE,F=k.isColumnFollowingGraphColumn(L),W=k.isLastColumn(L),G=k.getZoneWidth(L),B=k.getVerticalScrollWidth(L),U=k.isHovering(e),V=$===y.ch&&void 0!==f&&Object.keys(f).length>0,j=V&&!T?u().createElement(rr,{diffStats:f,getExternalIcon:s,translate:i}):null,Z=a===w.R_.ALWAYS||a===w.R_.ON_HOVER&&U,q=$!==y.ch||T?u().createElement(u().Fragment,null,u().createElement("span",{className:"message-zone--summary"},M),Z&&D?u().createElement("span",{className:"message-zone--body"},D):null):u().createElement("span",{style:{display:"flex",alignItems:"stretch",textOverflow:"ellipsis"}},Z?M:null,j);return V&&T?u().createElement(ri,{clearCurrentlyHoveredGraphCommit:v,currentlyHoveredCommitSha:C,getExternalIcon:s,graphZoneType:L,isCommitting:h,isHovering:k.isHovering(e),isSelected:k.isSelected(e),key:O,onBlur:m,onClickCommit:x,onContextMenu:S,onFocus:g,onMessageChange:b,setAsCurrentlyHoveredGraphCommit:R,sha:A,style:E,translate:i,value:p,workDirStats:f}):u().createElement(nF,{clearCurrentlyHoveredGraphCommit:v,column:I.column,context:z,currentlyHoveredCommitSha:C,dimRowsOfSelectedCommit:n,getExternalIcon:s,graphZoneType:L,highlightRowsOnRefHover:l,isDimmedMergeCommitRow:$===y.lH&&o,isHighlighted:k.isHighlighted(e),isHovering:U,isInUnsupportedRebase:c,isLastColumn:W,isMissingHoveredRefGroup:k.isMissingHoveredRefGroup(e),isSelected:k.isSelected(e),key:O,numGraphColumns:d,onClickCommit:x,onContextMenu:S,onDoubleClickCommit:_,rowContext:H,setAsCurrentlyHoveredGraphCommit:R,sha:A,showColorStrip:F,showConflictIcon:$===y.S7||$===y.br,showTimeline:k.hasTimeline(e),style:E,title:N,type:$,verticalScrollWidth:B,zoneWidth:G},q)}},ra=(e,t)=>{let{processedRows:o,getExternalIcon:n,highlightRowsOnRefHover:r,isInUnsupportedRebase:i,numGraphColumns:s,clearCurrentlyHoveredGraphCommit:a,currentlyHoveredCommitSha:l,dimMergeCommits:c,dimRowsOfSelectedCommit:d,onCommitContextMenu:h,onClickCommit:p,onDoubleClickCommit:f,setAsCurrentlyHoveredGraphCommit:m,shaLength:g}=e,b=new F.Dj(e);return({rowIndex:e,style:v})=>{let C=t(e),S=o[e],{sha:x,type:_,contexts:R}=S,T=((e,t=w.ai)=>e?e.substring(0,t):"")(x,g),k=R?.sha||void 0,E=R?.row||void 0,O=w.av,I=b.isColumnFollowingGraphColumn(O),M=b.isLastColumn(O),D=b.getZoneWidth(O),A=b.getVerticalScrollWidth(O);return u().createElement(nF,{clearCurrentlyHoveredGraphCommit:a,column:S.column,context:k,currentlyHoveredCommitSha:l,dimRowsOfSelectedCommit:d,getExternalIcon:n,graphZoneType:O,highlightRowsOnRefHover:r,isDimmedMergeCommitRow:_===y.lH&&c,isHighlighted:b.isHighlighted(e),isHovering:b.isHovering(e),isInUnsupportedRebase:i,isLastColumn:M,isMissingHoveredRefGroup:b.isMissingHoveredRefGroup(e),isSelected:b.isSelected(e),key:C,numGraphColumns:s,onClickCommit:p,onContextMenu:h,onDoubleClickCommit:f,rowContext:E,setAsCurrentlyHoveredGraphCommit:m,sha:x,showColorStrip:I,showTimeline:b.hasTimeline(e),style:v,type:_,verticalScrollWidth:A,zoneWidth:D},_!==y.ch?u().createElement("span",{className:"font-monospace pointer",title:T},T):null)}};function rl({hasRefs:e,isActiveSha:t,left:o,type:n,width:r}){let i=d()("ref-line","z4",{"is-active":t});return e&&[y.o$,y.lH,y.S7].includes(n)?u().createElement("hr",{className:i,style:{left:o,width:r}}):null}function rc({graphZoneModeConstants:{RADIUS_DIFF_MERGE_NODE_COMMIT_NODE:e},hasRefs:t,isActiveSha:o,nodeOffset:n,type:r}){return u().createElement(rl,{hasRefs:t,isActiveSha:o,left:0,type:r,width:n+(r===y.lH?e:0)})}function rd({className:e,marginLeft:t}){return u().createElement("div",{className:d()("app-bg0","absolute","left-0","right-0","bottom-0","top-0","pt3","pb3",e),style:{marginLeft:t}},u().createElement("div",{className:"commit-bg-color height-100-percent width-100-percent"}))}let rh=(e,t,o,n)=>o+t*e+n/2;function ru({column:e,graphZoneModeConstants:{COMMIT_COLUMN_WIDTH:t,COMMIT_NODE_DIAMETER:o,COMMIT_ZONE_GUTTER_WIDTH:n}}){return u().createElement(rd,{className:"z1",marginLeft:rh(e,t,n,o)})}function rp(){return u().createElement(rd,{marginLeft:0})}let rf=(e,t,o,n,r,i)=>{let s={height:i.COMMIT_MERGE_NODE_DIAMETER,left:o+i.COMMIT_MERGE_NODE_LEFT_OFFSET,marginTop:i.COMMIT_MERGE_NODE_TOP_OFFSET,opacity:n,width:i.COMMIT_MERGE_NODE_DIAMETER},a=d()("node",r,"z6"),l=u().createElement(nm,{className:"gk-graph",id:"graph-merge-node-tooltip"},nB(t,e));return u().createElement(nu,{delayShow:250,overlay:l,placement:"top",trigger:["hover","focus"]},u().createElement("div",{className:a,"data-test-class":"tree-row-commit-node",style:s}))};class rm extends u().PureComponent{render(){let{authorEmail:e,authorName:t,getExternalIcon:o,graphZoneModeConstants:n,left:r,opacity:i,translate:s,type:a}=this.props;return(t||e)&&a===y.o$?n.IS_COMPACT?rf(e,t,r,i,y.lH,n):(({authorEmail:e,authorInitials:t,authorName:o,avatarUrl:n,column:r,context:i,cssVariables:s,graphZoneModeConstants:a,left:l,message:c,opacity:h,type:p,useAuthorInitialsForAvatars:f})=>u().createElement(nU,{authorInitials:t,avatarUrl:n,className:d()("node",`${p}`,"z6"),column:r,context:i,cssVariables:s,fontSize:10,height:a.COMMIT_NODE_DIAMETER,size:a.COMMIT_ZONE_AVATAR_DIAMETER,style:{left:l,opacity:h},tooltip:()=>{let t=o&&""!==o.trim()&&"Unknown"!==o?nB(o,e):e,n=R(x(c||"")),r="";if(0===n.length)r=t;else{n.unshift({email:e,name:o});for(let e=0;e<n.length;e+=1){let t=n[e];r+=nB(t.name,t.email),e<n.length-1&&(r+=", ")}}return r},top:a.COMMIT_NODE_TOP_OFFSET,useAuthorInitialsForAvatars:f,width:a.COMMIT_NODE_DIAMETER}))(this.props):a===y.lH||a===y.S7||a===y.br?rf(e,t,r,i,a,n):((e,t,o,n,r,i,s,a=!1,l)=>{let c;let h={height:l.COMMIT_NODE_DIAMETER,left:n,marginTop:l.COMMIT_NODE_TOP_OFFSET,opacity:r,width:l.COMMIT_NODE_DIAMETER};a&&(h.borderWidth=1);let p=d()("gk-graph","node",s,"z6",{compact:a});c=s===y.kP?i("Stash"):s===y.ch?i("Graph-WorkInProgress"):nB(o,t);let f=u().createElement(nm,{className:"gk-graph",id:"graph-other-node-tooltip"},c);return u().createElement(nu,{delayShow:250,overlay:f,placement:"top",trigger:["hover","focus"]},u().createElement("div",{className:p,"data-test-class":"tree-row-commit-node",style:h},s!==y.kP||a?null:u().createElement("span",null,e("stash"))))})(o,e,t,r,i,s,a,n.IS_COMPACT,n)}}class rg extends u().Component{render(){let{columnColorByColumn:e,edgeColumnMax:t,edges:o,nodeColumn:n,graphZoneModeConstants:{COMMIT_COLUMN_WIDTH:r,COMMIT_ZONE_GUTTER_WIDTH:i,COMMIT_ZONE_LINE_WIDTH:s,IS_COMPACT:a}}=this.props,l=function(e,t,o,n,r,i,s,a){let l=function(e,t,o,n){let r="";for(let i=0;i<=t;i++){let{passThrough:t,starting:s,ending:a}=e[i]??{};r=`${r}_${H(i,o,s?.type,n)}_${H(i,o,a?.type,n)}_${L(i,t?.type,n)}`}return r}(e,t,o,a),c=et[l];if(c)return c;let d="";for(let l=0;l<=t;l+=1){let t=e[l];if(!t)continue;let{passThrough:c,starting:h,ending:u}=t;d+=(h?function(e,t,o,n,r,i,s,a){let l=H(e,t,o,a),c=ee[l];return c||(c=t===e?function(e,t,o,n,r,i,s){let a=z(o,e,i,s);return a.x1=A(t,n,r,s),a.x2=A(t,n,r,s),a.y1=w.at/2,a.y2=w.at,N(a)}(n[e],t,o,r,i,s,a):function(e,t,o,n,r,i,s,a){let l=z(n,e,s,a),c=t<o?-w.O5:w.O5,d={...l};d.x1=A(o,r,i,a),d.x2=A(o,r,i,a),d.y1=w.at-w.$s,d.y2=w.at;let h={...l};return h.x1=A(o,r,i,a)+c,h.x2=A(t,r,i,a),h.y1=w.at/2,h.y2=w.at/2,`<g>${Q(e,t<o?180:270,t<o?270:0,n,A(o,r,i,a)+c,w.at-w.$s,s,a)}${N(d)}${N(h)}</g>`}(n[e],t,e,o,r,i,s,a),ee[l]=c,c)}(l,o,h.type,n,r,i,s,a):"")+(c?function(e,t,o,n,r,i,s){let a=L(e,t,s),l=J[a];if(l)return l;let c=A(e,n,r,s),d=z(t,o[e],i,s);return d.x1=c,d.x2=c,d.y1=0,d.y2=w.at,l=N(d),J[a]=l,l}(l,c.type,n,r,i,s,a):"")+(u?function(e,t,o,n,r,i,s,a){let l=H(e,t,o,a),c=X[l];return c||(c=t===e?function(e,t,o,n,r,i,s){let a=z(o,e,i,s);return a.x1=A(t,n,r,s),a.x2=A(t,n,r,s),a.y1=0,a.y2=w.at/2,N(a)}(n[e],t,o,r,i,s,a):function(e,t,o,n,r,i,s,a){let l=z(n,e,s,a),c=t<o?-w.O5:w.O5,d={...l};d.x1=A(o,r,i,a),d.x2=A(o,r,i,a),d.y1=0,d.y2=w.An;let h={...l};return h.x1=A(o,r,i,a)+c,h.x2=A(t,r,i,a),h.y1=w.at/2,h.y2=w.at/2,`<g>${N(d)}${Q(e,t>o?0:90,t>o?90:180,n,A(o,r,i,a)+c,w.An,s,a)}${N(h)}</g>`}(n[e],t,e,o,r,i,s,a),X[l]=c,c)}(l,o,u.type,n,r,i,s,a):"")}return c=`url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><g>${d}</g></svg>')`,et[l]=c,c}(o,t,n,e,r,i,s,a);return u().createElement("div",{className:"absolute top-0 right-0 bottom-0 left-0 z2",style:{background:l}})}}function rb({boxShadowAlpha:e,boxShadowLeft:t,children:o,className:n="",left:r,width:i}){return u().createElement("div",{className:d()("absolute","top-0","bottom-0","z3",n),style:{boxShadow:`${t}px 5px 10px rgba(0, 0, 0, ${e})`,left:r,width:i}},o)}function rv({boxShadowAlpha:e,hasTimeline:t,scrollLeft:o,width:n}){return u().createElement(rb,{boxShadowAlpha:e,boxShadowLeft:5,className:"app-bg0 left-0",left:o,width:n},t?u().createElement(nN,{z2:!0}):null)}function ry({boxShadowAlpha:e,commitZoneWidth:t,hasTimeline:o,scrollLeft:n,width:r}){return u().createElement(rb,{boxShadowAlpha:e,boxShadowLeft:-5,left:n+t-r,width:r},o?u().createElement(nN,{z2:!0}):null,u().createElement(rp,null))}class rw extends u().PureComponent{render(){let{authorEmail:e,authorName:t,avatarContext:o,avatarUrl:n,clearCurrentlyHoveredGraphCommit:r,column:i,columnColorByColumn:s,commitZoneWidth:a,cssVariables:l,currentlyHoveredCommitSha:c,edgeColumnMax:h,edges:p,hasRefs:f,hasTimeline:m,getExternalIcon:g,graphZoneModeConstants:b,isActiveSha:v,isInUnsupportedRebase:y,isLastColumn:C,isSelected:S,leftGutterBoxShadowAlpha:x,leftGutterWidth:_,message:R,nodeOffset:T,nodeOpacity:k,numGraphColumns:E,onContextMenu:O,onClickCommit:I,onDoubleClickCommit:M,rightGutterBoxShadowAlpha:D,rightGutterWidth:A,rowContext:$,scrollLeft:P,setAsCurrentlyHoveredGraphCommit:N,sha:z,shouldShowRefLine:H,style:L,translate:W,type:G,useAuthorInitialsForAvatars:B,zoneContext:U}=this.props,V=i%E+1,j=d()("relative","commit-zone","height-100-percent","pt3",G,`column-${V}`,{"is-selected":S,"has-active":v}),Z=m?u().createElement(nN,{z2:!0}):null,q=u().createElement("div",{className:j,"data-vscode-context":(0,F.q3)(U),onContextMenu:y?void 0:e=>O(e,w.Wm,z),onDoubleClick:e=>M(e,w.Wm,z),onMouseDown:e=>I(e,w.Wm,z),onMouseEnter:e=>N(e,w.Wm,z,c),onMouseLeave:e=>r(e,w.Wm,z,c),style:{...L,...C&&{width:"100%"}}},Z,u().createElement(rv,{boxShadowAlpha:x,hasTimeline:m,scrollLeft:P,width:_}),H?u().createElement(rc,{graphZoneModeConstants:b,hasRefs:f,isActiveSha:v,nodeOffset:T,type:G}):null,u().createElement(rm,{authorEmail:e,authorInitials:nG(t),authorName:t,avatarUrl:n,column:i,context:o,cssVariables:l,getExternalIcon:g,graphZoneModeConstants:b,left:T,message:R,opacity:k,translate:W,type:G,useAuthorInitialsForAvatars:B}),u().createElement(ru,{column:i,graphZoneModeConstants:b}),u().createElement(rg,{columnColorByColumn:s,edgeColumnMax:h,edges:p,graphZoneModeConstants:b,nodeColumn:i}),u().createElement(ry,{boxShadowAlpha:D,commitZoneWidth:a,hasTimeline:m,scrollLeft:P,width:A}));return $?u().createElement("div",{"data-vscode-context":(0,F.q3)($)},q):q}}var rC=function(e,t){let{avatarUrlByEmail:o,onMissingAvatar:n,clearCurrentlyHoveredGraphCommit:r,columnColorByColumn:i,cssVariables:s,currentlyHoveredCommitSha:a,processedRows:l,getExternalIcon:c,graphZoneModeConstants:d,isInUnsupportedRebase:h,leftGutterBoxShadowAlpha:p,leftGutterWidth:f,onCommitContextMenu:m,onClickCommit:g,onDoubleClickCommit:b,nodeOffsetByColumn:v,nodeOpacityByColumn:y,numGraphColumns:C,rightGutterBoxShadowAlpha:S,rightGutterWidth:x,setAsCurrentlyHoveredGraphCommit:_,scrollLeft:R,shouldShowRefLine:T,translate:k,useAuthorInitialsForAvatars:E}=e,O=new F.Dj(e);return({rowIndex:e,style:I})=>{let M;let D=t(e),A=l[e],$=w.Wm,P=O.getZoneWidth($),{email:N,author:z,contexts:H,message:L,sha:F,type:W}=A,G=A.column,B=H?.graph||void 0,U=H?.avatar||void 0,V=H?.row||void 0;E||(M=o[N])||n(N,F);let j=O.isLastColumn($);return u().createElement(rw,{authorEmail:N,authorName:z,avatarContext:U,avatarUrl:M,clearCurrentlyHoveredGraphCommit:r,column:G,columnColorByColumn:i,commitZoneWidth:P,cssVariables:s,currentlyHoveredCommitSha:a,edgeColumnMax:A.edgeColumnMaxes,edges:A.edges,getExternalIcon:c,graphZoneModeConstants:d,hasRefs:A.hasRefs||!1,hasTimeline:O.hasTimeline(e),isActiveSha:O.rowContainsCurrentHeadRef(A),isInUnsupportedRebase:h,isLastColumn:j,isSelected:O.isSelected(e),key:D,leftGutterBoxShadowAlpha:p,leftGutterWidth:f,message:L,nodeOffset:v[G],nodeOpacity:y[G],numGraphColumns:C,onClickCommit:g,onContextMenu:m,onDoubleClickCommit:b,rightGutterBoxShadowAlpha:S,rightGutterWidth:x,rowContext:V,scrollLeft:R,setAsCurrentlyHoveredGraphCommit:_,sha:F,shouldShowRefLine:T,style:I,translate:k,type:W,useAuthorInitialsForAvatars:E,zoneContext:B})}};let rS={map:function(e,t,o){var n=0;return u().Children.map(e,function(e){return u().isValidElement(e)?t.call(o,e,n++):e})},forEach:function(e,t,o){var n=0;u().Children.forEach(e,function(e){u().isValidElement(e)&&t.call(o,e,n++)})},count:function(e){var t=0;return u().Children.forEach(e,function(e){u().isValidElement(e)&&++t}),t},find:function(e,t,o){var n,r=0;return u().Children.forEach(e,function(e){n||u().isValidElement(e)&&t.call(o,e,r++)&&(n=e)}),n},filter:function(e,t,o){var n=0,r=[];return u().Children.forEach(e,function(e){u().isValidElement(e)&&t.call(o,e,n++)&&r.push(e)}),r},every:function(e,t,o){var n=0,r=!0;return u().Children.forEach(e,function(e){r&&u().isValidElement(e)&&(t.call(o,e,n++)||(r=!1))}),r},some:function(e,t,o){var n=0,r=!1;return u().Children.forEach(e,function(e){r||u().isValidElement(e)&&t.call(o,e,n++)&&(r=!0)}),r},toArray:function(e){var t=[];return u().Children.forEach(e,function(e){u().isValidElement(e)&&t.push(e)}),t}};var rx={controlId:oN().string,validationState:oN().oneOf(["success","warning","error",null])},r_={$bs_formGroup:oN().object.isRequired},rR=function(e){function t(){return e.apply(this,arguments)||this}oM(t,e);var o=t.prototype;return o.getChildContext=function(){var e=this.props;return{$bs_formGroup:{controlId:e.controlId,validationState:e.validationState}}},o.hasFeedback=function(e){var t=this;return rS.some(e,function(e){return"feedback"===e.props.bsRole||e.props.children&&t.hasFeedback(e.props.children)})},o.render=function(){var e=this.props,t=e.validationState,o=e.className,n=e.children,r=function(e,t){var o={};t.forEach(function(e){o[e]=!0});var n={};return oY()(e).forEach(function(e){var t=e[0],r=e[1];o9(t)||o[t]||(n[t]=r)}),[o7(e),n]}(ok(e,["validationState","className","children"]),["controlId"]),i=r[0],s=r[1],a=oA({},o4(i),{"has-feedback":this.hasFeedback(n)});return t&&(a["has-"+t]=!0),u().createElement("div",oA({},s,{className:d()(o,a)}),n)},t}(u().Component);rR.propTypes=rx,rR.childContextTypes=r_;let rT=o3("form-group",o6([oJ,o0],rR));function rk(e,t){return(rk=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function rE(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var rO,rI,rM=(void 0===rO&&(rO=0),function(){return++rO}),rD={},rA={},r$=["touchstart","touchmove"];function rP(e,t){var o={};return -1!==r$.indexOf(t)&&rI&&(o.passive=!e.props.preventDefault),o}class rN extends u().PureComponent{handleClickOutside(){let{sha:e,shorthand:t,type:o,data:n}=this.props.createRefFormData;this.props.onCancel(t,e,o,n)}constructor(e){super(e);let{createRefFormData:t,formatRefShorthand:o}=this.props,{sha:n,shorthand:r,type:i,data:s}=t;this.state={currentShorthand:o(r,n,i,s),initShorthand:r}}static getDerivedStateFromProps(e,t){let{createRefFormData:o,formatRefShorthand:n}=e,{currentShorthand:r,initShorthand:i}=t,{sha:s,shorthand:a,type:l,data:c}=o,d=a!==i;return d&&n(a,s,l,c)!==r?{currentShorthand:n(a,s,l,c),initShorthand:a}:d?{currentShorthand:r,initShorthand:a}:null}onInputChange(e){let t=e||"";if(e){let{sha:e,type:o,data:n}=this.props.createRefFormData;t=this.props.formatRefShorthand(t,e,o,n)}this.setState({currentShorthand:t}),this.props.onRefShorthandChange?.(t)}render(){let{createRefFormData:e,isRefShorthandValid:t,onCancel:o,onContextMenu:n,onRefCreate:r,refZoneWidth:i,style:s,translate:a}=this.props,{currentShorthand:l}=this.state,{data:c,sha:d,type:h}=e,p=a(h===B.V.TAG?"RefZone-EnterTagName":"RefZone-EnterBranchName");return u().createElement("div",{className:"create-ref","data-testid":"create-ref",style:{...s,minWidth:i,width:i}},u().createElement(rT,{validationState:0===l.length||t(l,d,h,c)?"success":"error"},u().createElement(n6,{autoFocus:!0,"data-testid":"create-ref-form-control",onChange:e=>this.onInputChange(e.target?.value),onContextMenu:e=>n(e,l,d,h,c),onKeyDown:e=>{e.stopPropagation(),"Escape"!==e.key?d&&"Enter"===e.key&&r(l,d,h,c):o(l,d,h,c)},placeholder:p,type:"text",value:l})))}}var rz=(a=rN.displayName||rN.name||"Component",s=i=function(e){function t(t){var o;return(o=e.call(this,t)||this).__outsideClickHandler=function(e){if("function"!=typeof o.__clickOutsideHandlerProp){var t=o.getInstance();if("function"!=typeof t.props.handleClickOutside){if("function"!=typeof t.handleClickOutside)throw Error("WrappedComponent: "+a+" lacks a handleClickOutside(event) function for processing outside click events.");t.handleClickOutside(e)}else t.props.handleClickOutside(e)}else o.__clickOutsideHandlerProp(e)},o.__getComponentNode=function(){var e=o.getInstance();return r&&"function"==typeof r.setClickOutsideRef?r.setClickOutsideRef()(e):"function"==typeof e.setClickOutsideRef?e.setClickOutsideRef():(0,eq.findDOMNode)(e)},o.enableOnClickOutside=function(){if("undefined"!=typeof document&&!rA[o._uid]){void 0===rI&&(rI=function(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),o=function(){};return window.addEventListener("testPassiveEventSupport",o,t),window.removeEventListener("testPassiveEventSupport",o,t),e}}()),rA[o._uid]=!0;var e=o.props.eventTypes;e.forEach||(e=[e]),rD[o._uid]=function(e){null!==o.componentNode&&(o.props.preventDefault&&e.preventDefault(),o.props.stopPropagation&&e.stopPropagation(),o.props.excludeScrollbar&&(document.documentElement.clientWidth<=e.clientX||document.documentElement.clientHeight<=e.clientY)||function(e,t,o){if(e===t)return!0;for(;e.parentNode||e.host;){var n;if(e.parentNode&&((n=e)===t||(n.correspondingElement?n.correspondingElement.classList.contains(o):n.classList.contains(o))))return!0;e=e.parentNode||e.host}return e}(e.composed&&e.composedPath&&e.composedPath().shift()||e.target,o.componentNode,o.props.outsideClickIgnoreClass)===document&&o.__outsideClickHandler(e))},e.forEach(function(e){document.addEventListener(e,rD[o._uid],rP(rE(o),e))})}},o.disableOnClickOutside=function(){delete rA[o._uid];var e=rD[o._uid];if(e&&"undefined"!=typeof document){var t=o.props.eventTypes;t.forEach||(t=[t]),t.forEach(function(t){return document.removeEventListener(t,e,rP(rE(o),t))}),delete rD[o._uid]}},o.getRef=function(e){return o.instanceRef=e},o._uid=rM(),o}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,rk(t,e);var o=t.prototype;return o.getInstance=function(){if(rN.prototype&&!rN.prototype.isReactComponent)return this;var e=this.instanceRef;return e.getInstance?e.getInstance():e},o.componentDidMount=function(){if("undefined"!=typeof document&&document.createElement){var e=this.getInstance();if(r&&"function"==typeof r.handleClickOutside&&(this.__clickOutsideHandlerProp=r.handleClickOutside(e),"function"!=typeof this.__clickOutsideHandlerProp))throw Error("WrappedComponent: "+a+" lacks a function for processing outside click events specified by the handleClickOutside config option.");this.componentNode=this.__getComponentNode(),this.props.disableOnClickOutside||this.enableOnClickOutside()}},o.componentDidUpdate=function(){this.componentNode=this.__getComponentNode()},o.componentWillUnmount=function(){this.disableOnClickOutside()},o.render=function(){var e=this.props;e.excludeScrollbar;var t=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(o=i[n])>=0||(r[o]=e[o]);return r}(e,["excludeScrollbar"]);return rN.prototype&&rN.prototype.isReactComponent?t.ref=this.getRef:t.wrappedRef=this.getRef,t.disableOnClickOutside=this.disableOnClickOutside,t.enableOnClickOutside=this.enableOnClickOutside,(0,h.createElement)(rN,t)},t}(h.Component),i.displayName="OnClickOutside("+a+")",i.defaultProps={eventTypes:["mousedown","touchstart"],excludeScrollbar:r&&r.excludeScrollbar||!1,outsideClickIgnoreClass:"ignore-react-onclickoutside",preventDefault:!1,stopPropagation:!1},i.getClass=function(){return rN.getClass?rN.getClass():rN},s),rH=function({hasActive:e,overflowCount:t}){return u().createElement("span",{className:d()("overflow-count ml1",{"is-active":e}),"data-test-class":"overflow-count"},"+",t)},rL=function({style:e,children:t,column:o,numGraphColumns:n,onMouseEnter:r,onMouseLeave:i}){let s=e?.top||0;return u().createElement("div",{className:d()("gk-graph","ref-zone","column-"+(o%n+1))},u().createElement("ul",{onMouseEnter:r,onMouseLeave:i,style:{...e,top:s-w.cZ/2,position:"absolute",listStyle:"none",padding:0,zIndex:1}},t))},rF=function({enabledRefMetadataTypes:e,column:t,context:o,enableShowHideRefsOptions:n,getTargetRef:r,hasActive:i,hasRefs:s,getExternalIcon:a,includeOnlyRefsById:l,includeOnlyRemotesByName:c,isGhostRef:d,isHovered:h,isInUnsupportedRebase:p,numGraphColumns:f,onMissingRefMetadata:m,refGroupContexts:g,refGroupsByName:b,refMetadata:v,refNodeHovered:y,sha:C,showRemoteNamesOnRefs:S,showContextMenuForGroupedRef:x,onClickRef:_,onDoubleClickRef:R,onToggleRefNodesShown:T,onRefBeginDrag:k,onRefCanDrag:E,onRefCanDrop:O,onRefDragEnter:I,onRefDragLeave:M,onRefDrop:D,onRefEndDrag:A,translate:$,type:P}){let N=(e,t,o)=>{T(e,t.map(e=>({id:(0,F.qP)(e),name:e.name,type:e.refType,owner:e.owner,avatarUrl:e.avatarUrl})),!1,o)},z=b&&b.length>w.v6?b.slice(0,w.v6):b,H=z[0],L=h?z:[H],W=w.Vh+(H?.length||0)*w.B+(i?w.B:0),G=Object.values(l),U=G.length>0&&G.some(e=>e.type===B.V.TAG),V=L.map(t=>{let o=t[0],r=g?.[o.name]||void 0,f=t.some(e=>{let t=(0,F.qP)(e);switch(e.refType){case B.V.TAG:return U&&!!l[t];case B.V.REMOTE:return!!l[t]||e.owner&&c[e.owner];default:return!!l[t]}}),b=u().createElement(nI,{enabledRefMetadataTypes:e,enableShowHideRefsOptions:n,getExternalIcon:a,groupIsHovered:h,hasActive:i,hasRefs:s,isActive:o.isCurrentHead,isGhostRef:d,isInUnsupportedRebase:p,isRefGroupIncluded:f,key:`ref-node-${o.fullName||o.name}`,onClick:_,onContextMenu:x,onDoubleClick:R,onHideRefClick:N,onHovered:y,onMissingRefMetadata:m,onRefBeginDrag:k,onRefCanDrag:E,onRefCanDrop:O,onRefDragEnter:I,onRefDragLeave:M,onRefDrop:D,onRefEndDrag:A,refGroup:t,refGroupContext:r,refMetadata:v,sha:C,showRemoteNamesOnRefs:S,translate:$,type:P});return h?u().createElement("li",{key:b.key},b):b});return h?u().createElement("div",{"data-vscode-context":(0,F.q3)(o),style:{height:100,position:"relative"}},u().createElement(oj,{placement:"right",show:h,target:r},u().createElement(rL,{column:t,numGraphColumns:f},V))):u().createElement("span",{"data-vscode-context":(0,F.q3)(o),style:{minWidth:W}},V)};let rW={};class rG extends u().PureComponent{refPopoverTarget;isContextMenuShown=!1;static defaultProps={style:{}};componentWillReceiveProps(e){this.props.hasRefs||!this.props.isSingleSelected||e.isSingleSelected||this.props.hoveredRefZoneSha!==this.props.sha||(this.props.refZoneUnhovered(),this.props.hoveredRefGroup&&this.props.refNodeUnhovered(void 0,this.props.hoveredRefGroup,this.props.sha))}getRefPopoverTarget=()=>this.refPopoverTarget;onCustomToggleRefNodesShown=(e,t,o,n)=>{this.props.onToggleRefNodesShown(e,t,o,n),this.props.refZoneUnhovered()};render(){let{enabledRefMetadataTypes:e,column:t,context:o,enableShowHideRefsOptions:n,showGhostRefsOnRowHover:r,hasActive:i,hasRefs:s,hasTimeline:a,hoveredRefGroup:l,hoveredRefZoneSha:c,getExternalIcon:h,includeOnlyRefsById:p,includeOnlyRemotesByName:f,isContainerWindowFocused:m,isInUnsupportedRebase:g,numGraphColumns:b,onClickRef:v,onDoubleClickRef:y,onMissingRefMetadata:C,onRefBeginDrag:S,onRefCanDrag:x,onRefCanDrop:_,onRefDragEnter:R,onRefDragLeave:T,onRefDrop:k,onRefEndDrag:E,refGroupContexts:O,refGroupsByName:I,refMetadata:M,refNodeHovered:D,refNodeUnhovered:A,refZoneHovered:$,refZoneUnhovered:P,sha:N,shouldShowRefLine:z,showColorStrip:H,showContextMenuForGroupedRef:L,showRemoteNamesOnRefs:W,style:G,translate:B,type:U,width:V}=this.props,j=c===N&&m,Z={minWidth:V,width:V},q={...G,...Z},K=a?u().createElement(nN,null):null,Y=I.length,Q=e=>{$(N),Y?D(e,I[0],N):l&&A(e,l,N)},X=e=>{m&&this.isContextMenuShown?this.isContextMenuShown=!1:(P(),l&&A(e,l,N))},J=(0,F.h)((e,t)=>{X(e),S(e,t)}),ee=Y>0&&!s&&r,et=function(e,t,o,n,r,i){let s=`${e}${t}${o}${n}${r}${i}`,a=rW[s];return a||(a=d()("column-"+(t%r+1),"flex","pb3","pt3","ref-zone","relative",e,{"dim-ref":i,"has-active":n,z6:o,z1:!o}),rW[s]=a,a)}(U,t,j,i,b,ee),eo=u().createElement("div",{className:"color-strip height-100",style:{width:2}});if(!Y)return u().createElement("div",{className:et,onMouseEnter:Q,onWheel:X,style:q},H?eo:null,K);let en={minWidth:0,overflow:"hidden",width:V-w.PB},er=Y-1,ei=er>0&&!j?u().createElement(rH,{hasActive:i,overflowCount:er}):null;return u().createElement("div",{className:et,onMouseEnter:Q,onMouseLeave:X,onWheel:X,style:q},u().createElement("div",{ref:e=>this.refPopoverTarget=e}),H?eo:null,K,u().createElement("div",{className:"flex",style:en},u().createElement(rF,{column:t,context:o,enabledRefMetadataTypes:e,enableShowHideRefsOptions:n,getExternalIcon:h,getTargetRef:this.getRefPopoverTarget,hasActive:i,hasRefs:s,includeOnlyRefsById:p,includeOnlyRemotesByName:f,isGhostRef:ee,isHovered:j,isInUnsupportedRebase:g,numGraphColumns:b,onClickRef:v,onDoubleClickRef:y,onMissingRefMetadata:C,onRefBeginDrag:J,onRefCanDrag:x,onRefCanDrop:_,onRefDragEnter:(e,t,o)=>{j||o?.sha!==N||Q(e),R(e,t,o)},onRefDragLeave:T,onRefDrop:k,onRefEndDrag:E,onToggleRefNodesShown:this.onCustomToggleRefNodesShown,refGroupContexts:O,refGroupsByName:I,refMetadata:M,refNodeHovered:D,sha:N,showContextMenuForGroupedRef:(e,t,o)=>{Q(e),this.isContextMenuShown=!0,L(e,t,o)},showRemoteNamesOnRefs:W,translate:B,type:U}),ei),s&&z?u().createElement("div",{className:"absolute left-0 flex z1",style:Z},u().createElement(rl,{hasRefs:!0,isActiveSha:i,left:w.yv,type:U,width:"100%"})):null)}}var rB=(e,t)=>{let{createRefFormData:o,formatRefShorthand:n,enableShowHideRefsOptions:r,enabledRefMetadataTypes:i,isRefShorthandValid:s,showGhostRefsOnRowHover:a,showRemoteNamesOnRefs:l,onDoubleClickRef:c,processedRows:d,includeOnlyRefsById:h,includeOnlyRemotesByName:p,isContainerWindowFocused:f,isInUnsupportedRebase:m,getExternalIcon:g,hoveredRefGroup:b,hoveredRefZoneSha:v,numGraphColumns:y,onClickRef:C,onMissingRefMetadata:S,onShowContextMenuForGroupedRef:x,onRefBeginDrag:_,onRefCanDrag:R,onRefCanDrop:T,onRefCreate:k,onRefCreateCancel:E,onRefCreateContextMenu:O,onRefDragEnter:I,onRefDragLeave:M,onRefDrop:D,onRefEndDrag:A,onRefNodeHovered:$,onRefNodeUnhovered:P,onRefShorthandChange:N,onRefZoneHovered:z,onRefZoneUnhovered:H,onToggleRefNodesShown:L,refMetadataById:W,shouldShowRefLine:G,translate:B}=e,U=new F.Dj(e);return({rowIndex:e,style:F})=>{let V=t(e),j=d[e],Z=w.jZ,q=U.getZoneWidth(Z),K=U.isHovering(e),{sha:Y,type:Q,hasRefs:X,contexts:J}=j,ee=J?.ref||void 0,et=J?.refGroups||void 0,eo=U.isSingleSelected(e),en=(a||X)&&(X||K||eo)?U.getGraphRefGroupsByNameForRow(e):[],er=U.isColumnFollowingGraphColumn(Z);return o?.sha===Y?u().createElement(rz,{createRefFormData:o,formatRefShorthand:n,isRefShorthandValid:s,key:V,onCancel:E,onContextMenu:O,onRefCreate:k,onRefShorthandChange:N,refZoneWidth:q,style:F,translate:B}):u().createElement(rG,{column:j.column,context:ee,enabledRefMetadataTypes:i,enableShowHideRefsOptions:r,getExternalIcon:g,hasActive:U.rowContainsCurrentHeadRef(j),hasRefs:X||!1,hasTimeline:U.hasTimeline(e),hoveredRefGroup:b,hoveredRefZoneSha:v,includeOnlyRefsById:h,includeOnlyRemotesByName:p,isContainerWindowFocused:f,isInUnsupportedRebase:m,isSingleSelected:eo,key:V,numGraphColumns:y,onClickRef:C,onDoubleClickRef:c,onMissingRefMetadata:S,onRefBeginDrag:_,onRefCanDrag:R,onRefCanDrop:T,onRefDragEnter:I,onRefDragLeave:M,onRefDrop:D,onRefEndDrag:A,onToggleRefNodesShown:L,refGroupContexts:et,refGroupsByName:en,refMetadata:W,refNodeHovered:$,refNodeUnhovered:P,refZoneHovered:z,refZoneUnhovered:H,sha:Y,shouldShowRefLine:G,showColorStrip:er,showContextMenuForGroupedRef:x,showGhostRefsOnRowHover:a,showRemoteNamesOnRefs:l,style:F,translate:B,type:Q,width:q})}},rU=(e,t)=>{let{translate:o,processedRows:n}=e,r=d()("graph-row-wrapper","grow-3","height-100","graph-zone-column","min-width-0","pb3","pointer","pt3","relative"),i=new F.Dj(e);return({rowIndex:e,style:s})=>{let a=t(e),l=d()("graph-row","height-100-percent","flex"),c=i.hasTimeline(e),h=n[e],p=h.contexts?.row||void 0,f=h.timeLineEntry?.label||"",m=h.timeLineEntry?.value||0,g=c?u().createElement(nN,null):null,b=c?u().createElement("span",{className:"time-line-message-container"},u().createElement("span",{className:"time-line-message"},o(f,m))):null;return u().createElement("div",{className:r,"data-vscode-context":(0,F.q3)(p),key:a,style:s},g,u().createElement("div",{className:l,"data-vscode-context":(0,F.q3)(p)},b))}};class rV extends u().Component{graphContainerRef=u().createRef();resizeObserver;isSelectedBySha={};processedGraphRowBySha={};childrenBySha={};scrollToSha;headSha;headUpstreamSha;lastLazyLoadHeight=0;lastTopVisibleRowIndex=-1;lastBottomVisibleRowIndex=-1;maxColumns=0;orderedGraphRows=[];rowStatsConstraints={min:0,max:0};shouldFireShowMoreCommits=!0;columnsToFreeWhenFound={};hasMergeNodeChildBySha={};reserverInfoBySha={};columnsUsed={};rowsStats;workDirStats=w.OR;excludeByType={};excludeRefsById={};includeOnlyRefsById={};excludeRemotesByName={};includeOnlyRemotesByName={};scrollLeft=0;scrollTop=0;graphHeight=585;graphWidth=804;graphZoneModeConstants=(0,F.Ez)();graphZonesByType={};graphZoneOrdering=[w.jZ,w.Wm,w.KE,w.GF,w.WD,w.PL,w.av];clientHeight=0;missingAvatarsTimer;pendingMissingAvatars={};requestedMissingAvatars={};missingRefsMetadataTimer;pendingMissingRefsMetadata={};requestedMissingRefsMetadata={};markerRowIndices={};branchUpstreamRowIndices=[];downstreamsByUpstream={};timelinesInterval;constructor(e){super(e),this.resizeObserver=new ResizeObserver(e=>e.forEach(e=>this.onGraphResized(e.contentRect.width,e.contentRect.height))),this.isSelectedBySha=this.props.isSelectedBySha||{},this.excludeByType=this.props.excludeByType||{},this.excludeRefsById=this.props.excludeRefsById||{},this.excludeRemotesByName=this.getExcludeRemotesByName(),this.includeOnlyRemotesByName=this.getIncludeOnlyRemotesByName(),this.includeOnlyRefsById=this.props.includeOnlyRefsById||{},this.downstreamsByUpstream=this.props.downstreamsByUpstream||{},this.rowsStats=this.props.rowsStats||this.rowsStats,this.workDirStats=this.props.workDirStats||this.workDirStats,this.processRows(this.props.graphRows),this.cleanupSelections(),this.updateMarkerRowIndices(["selection","highlights"]);let t=(0,k.Ld)(this.props.cssVariables);this.graphZoneModeConstants=(0,F.Ez)(this.props.columnsSettings?.[w.Wm]?.mode),this.maybeSortGraphZoneOrderingFromSettings(this.props.columnsSettings),this.state={avatarUrlByEmail:this.props.avatarUrlByEmail||{},contexts:this.props.contexts,createRefFormData:this.props.createRefFormData,cssVariablesWithDefaults:t,columnColorByColumn:this.getColumnColorByColumn(t),currentlyHoveredCommitSha:void 0,dimMergeCommits:this.props.dimMergeCommits||!1,dimRowsOfSelectedCommit:!1,enableShowHideRefsOptions:this.props.enableShowHideRefsOptions||!1,highlightRowsOnRefHover:this.props.highlightRowsOnRefHover||!1,showGhostRefsOnRowHover:this.props.showGhostRefsOnRowHover||!1,showRemoteNamesOnRefs:this.props.showRemoteNamesOnRefs||!1,enabledRefMetadataTypes:this.props.enabledRefMetadataTypes||[],enabledScrollMarkerTypes:this.props.enabledScrollMarkerTypes||[],graphCommitDescDisplayMode:this.props.graphCommitDescDisplayMode||w.R_.ALWAYS,graphZones:this.initializeGraphZones(this.props.columnsSettings,this.graphZoneOrdering,580),hasMoreCommits:this.props.hasMoreCommits||!1,height:this.graphHeight,highlightedShas:this.props.highlightedShas,hoveredRefGroup:void 0,hoveredRefZoneSha:void 0,isContainerWindowFocused:void 0===this.props.isContainerWindowFocused||this.props.isContainerWindowFocused,isLoadingRows:this.props.isLoadingRows||!1,numGraphColumns:this.getNumGraphColumns(t),pendingCommitMessageSummary:this.props.pendingCommitMessageSummary||"",processedRows:[...this.orderedGraphRows],refMetadataById:this.props.refMetadataById,rowsStats:this.rowsStats,rowsStatsLoading:this.props.rowsStatsLoading||!1,useAuthorInitialsForAvatars:this.props.useAuthorInitialsForAvatars||!1,scrollLeft:this.getScrollLeft(),scrollToAlignment:this.getScrollToAlignment(),scrollToIndex:this.getScrollToIndex(),scrollTop:this.getScrollTop(),shaLength:this.props.shaLength,themeOpacityFactor:this.props.themeOpacityFactor||w.X9.dark,width:this.graphWidth,workDirStats:this.workDirStats}}componentDidMount(){this.resizeObserver.observe(this.graphContainerRef.current),window.addEventListener("keydown",this.onWindowKeyDown),window.addEventListener("keyup",this.onWindowKeyUp),window.addEventListener("blur",this.onWindowBlur);let e=this.isSelectedBySha?this.getSelectedShas():[];e.length>0&&this.selectCommits(e,!1,!0)}componentWillReceiveProps(e){let t=!1,o=!1,n=!1;if(this.props.highlightedShas!==e.highlightedShas){this.setState({highlightedShas:e.highlightedShas});let t=[];Object.keys(e.highlightedShas||{}).forEach(o=>{e.highlightedShas[o]&&void 0!==this.processedGraphRowBySha[o]?.rowIndex&&t.push(this.processedGraphRowBySha[o].rowIndex)}),this.markerRowIndices={...this.markerRowIndices,highlights:t}}if(this.props.isSelectedBySha!==e.isSelectedBySha&&this.selectCommits(e.isSelectedBySha?Object.keys(e.isSelectedBySha):[],!1,!0),this.props.excludeByType!==e.excludeByType&&(this.excludeByType=e.excludeByType||{},e.graphRows?.length&&(o=!0)),this.props.excludeRefsById!==e.excludeRefsById&&(this.excludeRefsById=e.excludeRefsById||{},this.excludeRemotesByName=this.getExcludeRemotesByName(),e.graphRows?.length&&(o=!0)),this.props.includeOnlyRefsById!==e.includeOnlyRefsById&&(this.includeOnlyRefsById=e.includeOnlyRefsById||{},this.includeOnlyRemotesByName=this.getIncludeOnlyRemotesByName(),e.graphRows?.length&&(o=!0)),this.props.themeOpacityFactor!==e.themeOpacityFactor&&this.setState({themeOpacityFactor:e.themeOpacityFactor}),this.props.dimMergeCommits!==e.dimMergeCommits&&this.setState({dimMergeCommits:e.dimMergeCommits||!1}),this.props.highlightRowsOnRefHover!==e.highlightRowsOnRefHover&&this.setState({highlightRowsOnRefHover:e.highlightRowsOnRefHover||!1}),this.props.showGhostRefsOnRowHover!==e.showGhostRefsOnRowHover&&this.setState({showGhostRefsOnRowHover:e.showGhostRefsOnRowHover||!1}),this.props.showRemoteNamesOnRefs!==e.showRemoteNamesOnRefs&&this.setState({showRemoteNamesOnRefs:e.showRemoteNamesOnRefs||!1}),this.props.enabledRefMetadataTypes!==e.enabledRefMetadataTypes&&this.setState({enabledRefMetadataTypes:e.enabledRefMetadataTypes||[]}),this.props.enabledScrollMarkerTypes!==e.enabledScrollMarkerTypes&&this.setState({enabledScrollMarkerTypes:e.enabledScrollMarkerTypes||[]}),this.props.graphCommitDescDisplayMode!==e.graphCommitDescDisplayMode&&this.setState({graphCommitDescDisplayMode:e.graphCommitDescDisplayMode||w.R_.ALWAYS}),this.props.isContainerWindowFocused!==e.isContainerWindowFocused&&this.setState({dimRowsOfSelectedCommit:!1,isContainerWindowFocused:void 0===e.isContainerWindowFocused||e.isContainerWindowFocused}),this.props.downstreamsByUpstream!==e.downstreamsByUpstream&&(this.downstreamsByUpstream=e.downstreamsByUpstream||{},e.graphRows?.length&&(o=!0)),this.props.graphRows!==e.graphRows||this.props.cssVariables!==e.cssVariables||o){this.cleanEdgeCaches();let r=(0,k.Ld)(e.cssVariables);n=!0,this.setState({columnColorByColumn:this.getColumnColorByColumn(r),cssVariablesWithDefaults:r,numGraphColumns:this.getNumGraphColumns(r)}),this.cleanupSelections(),t=!0,(e.graphRows?.length<this.props.graphRows?.length||o)&&(this.lastLazyLoadHeight=0)}if(this.props.useAuthorInitialsForAvatars!==e.useAuthorInitialsForAvatars&&this.setState({useAuthorInitialsForAvatars:e.useAuthorInitialsForAvatars}),this.props.shaLength!==e.shaLength&&this.setState({shaLength:e.shaLength}),this.props.hasMoreCommits===e.hasMoreCommits&&this.props.onShowMoreCommits===e.onShowMoreCommits||this.setState({hasMoreCommits:e.hasMoreCommits||!1},()=>this.loadMoreCommitsIfNecessary(this.graphHeight,this.state.hasMoreCommits)),this.props.isLoadingRows!==e.isLoadingRows&&this.setState({isLoadingRows:e.isLoadingRows||!1}),this.props.rowsStats!==e.rowsStats&&(this.rowsStats=e.rowsStats,this.updateRowStatsConstraints(),this.setState({rowsStats:e.rowsStats})),this.props.rowsStatsLoading!==e.rowsStatsLoading&&this.setState({rowsStatsLoading:e.rowsStatsLoading||!1}),this.props.workDirStats!==e.workDirStats&&(this.workDirStats=e.workDirStats||w.OR,(!(0,F.Kk)(this.props.workDirStats)&&(0,F.Kk)(e.workDirStats)||(0,F.Kk)(this.props.workDirStats)&&!(0,F.Kk)(e.workDirStats))&&(n=!0),this.setState({workDirStats:this.workDirStats})),this.props.avatarUrlByEmail!==e.avatarUrlByEmail&&(this.setState({avatarUrlByEmail:e.avatarUrlByEmail||{}}),this.requestedMissingAvatars={}),this.props.refMetadataById!==e.refMetadataById&&(this.setState({refMetadataById:e.refMetadataById}),this.requestedMissingRefsMetadata={}),this.props.columnsSettings!==e.columnsSettings){if(e.columnsSettings?.[w.Wm]?.mode!==this.props.columnsSettings?.[w.Wm]?.mode){this.cleanEdgeCaches(),this.graphZoneModeConstants=(0,F.Ez)(e.columnsSettings?.[w.Wm]?.mode),this.updateCommitZoneContentWidthFromChange();let o=this.graphZonesByType[w.Wm];o.currentWidth=o.contentWidth,o.preferredWidth=o.contentWidth,o.minimumWidth=this.graphZoneModeConstants.COMMIT_ZONE_VIEWPORT_WIDTH_MIN,o.showIconWidth=this.graphZoneModeConstants.COMMIT_ZONE_SHOW_ICON_WIDTH,this.loadEdgesBySha(),t=!0}e.columnsSettings&&(this.updateZonesFromSettings(e.columnsSettings),t=!0)}if(this.props.contexts!==e.contexts&&this.setState({contexts:e.contexts}),this.props.pendingCommitMessageSummary!==e.pendingCommitMessageSummary&&this.setState({pendingCommitMessageSummary:e.pendingCommitMessageSummary||""}),this.props.enableShowHideRefsOptions!==e.enableShowHideRefsOptions&&this.setState({enableShowHideRefsOptions:e.enableShowHideRefsOptions}),this.props.createRefFormData!==e.createRefFormData&&(e.createRefFormData?.sha&&this.selectCommits([e.createRefFormData?.sha],!1,!0),this.setState({createRefFormData:e.createRefFormData})),n&&(this.processRows(e.graphRows),this.setState({processedRows:[...this.orderedGraphRows]})),t){this.updateCommitZoneContentWidthFromChange();let e=this.getOrderedActiveGraphZones();this.expandLastZoneMinWidthForScrollbar(e),this.ensureZoneWidthsMatchGraphWidth(e,this.graphWidth),this.setState({graphZones:e})}}componentWillUnmount(){window.removeEventListener("keydown",this.onWindowKeyDown),window.removeEventListener("keyup",this.onWindowKeyUp),window.removeEventListener("blur",this.onWindowBlur),this.resizeObserver.disconnect()}onGraphVisibleRowsUpdatedThrottled=(0,F.P2)(()=>this.onGraphVisibleRowsUpdated(),250,20);onBlurWipNodeInput=e=>{this.props.onBlurWipNodeInput&&this.props.onBlurWipNodeInput(e)};onDoubleClickRef=(e,t,o,n)=>{this.props.onDoubleClickGraphRef&&this.props.onDoubleClickGraphRef(e,t,this.processedGraphRowBySha[o],n)};onFocusWipNodeInput=e=>{this.props.onFocusWipNodeInput&&this.props.onFocusWipNodeInput(e)};onFilterColumnClick=(e,t)=>{this.props.onFilterColumnClick&&this.props.onFilterColumnClick(e,t)};onCurrentlyHoveredGraphCommit=(e,t,o,n)=>{n!==o&&(this.props.onGraphRowHovered&&this.props.onGraphRowHovered(e,t,this.processedGraphRowBySha[o]),this.setState({currentlyHoveredCommitSha:o}))};onClearCurrentlyHoveredGraphCommit=(e,t,o,n)=>{n&&(this.props.onGraphRowUnhovered&&this.props.onGraphRowUnhovered(e,t,this.processedGraphRowBySha[o]),this.setState({currentlyHoveredCommitSha:void 0}))};onGraphColumnReOrdered=(e,t)=>{let o=this.graphZoneOrdering.indexOf(e),n=t?this.graphZoneOrdering.indexOf(t):this.graphZoneOrdering.length-1;t&&o<n&&(n-=1),this.graphZoneOrdering.splice(o,1),this.graphZoneOrdering.splice(n,0,e);let r={};this.graphZoneOrdering.forEach((e,t)=>{this.graphZonesByType[e].order=t,r[e]=this.getGraphColumnSettingFromZoneType(this.graphZonesByType[e])}),this.setState({graphZones:this.initializeGraphZones(r,this.graphZoneOrdering,this.graphWidth)}),this.props.onGraphColumnsReOrdered&&this.props.onGraphColumnsReOrdered(r)};onGraphZoneResize=(0,F.h)((e,t)=>{if(t?.width){let o=this.getOrderedActiveGraphZones();this.adjustResizedGraphZone(o,e,t,!1),this.setState({graphZones:o})}});onGraphZoneResizeEnd=(0,F.h)((e,t)=>{if(t?.width){let o=this.getOrderedActiveGraphZones();this.adjustResizedGraphZone(o,e,t,!0),this.setState({graphZones:o})}this.props.onColumnResized&&this.props.onColumnResized(e.type,this.getGraphColumnSettingFromZoneType(this.graphZonesByType[e.type]))});onPopupGraphHeaderContextMenu=(e,t)=>{this.props.onPopupGraphHeaderContextMenu&&this.props.onPopupGraphHeaderContextMenu(e,t)};onSettingsClick=(e,t)=>{this.props.onSettingsClick&&this.props.onSettingsClick(e,t)};onMessageChange=e=>{this.setState({pendingCommitMessageSummary:e}),this.props.onMessageChange&&this.props.onMessageChange(e)};onRefBeginDrag=(e,t)=>{this.props.onRefBeginDrag&&this.props.onRefBeginDrag(e,t)};onRefCanDrag=e=>!!this.props.onRefCanDrag&&this.props.onRefCanDrag(e);onRefCanDrop=(e,t,o)=>!!this.props.onRefCanDrop&&this.props.onRefCanDrop(e,t,o);onRefCreate=(e,t,o,n)=>{this.props.onRefCreate&&this.props.onRefCreate(e,t,o,n)};onRefCreateCancel=(e,t,o,n)=>{this.props.onRefCreateCancel&&this.props.onRefCreateCancel(e,t,o,n)};onRefCreateContextMenu=(e,t,o,n,r)=>{this.props.onRefCreateContextMenu&&this.props.onRefCreateContextMenu(e,t,o,n,r)};onRefDragEnter=(e,t,o)=>{this.props.onRefDragEnter&&this.props.onRefDragEnter(e,t,o)};onRefDragLeave=(e,t,o)=>{this.props.onRefDragLeave&&this.props.onRefDragLeave(e,t,o)};onRefDrop=(e,t,o)=>{this.props.onRefDrop&&this.props.onRefDrop(e,t,o)};onRefEndDrag=(e,t,o)=>{this.props.onRefEndDrag&&this.props.onRefEndDrag(e,t,o)};onZoneRowClick(e,t,o){if(0===e.button){let{enableMultiSelection:t}=this.props,n=this.isMacOSPlatform();t&&(!n&&e.ctrlKey||n&&e.metaKey)?this.selectCommits([o],!0,!1):t&&e.shiftKey||this.selectCommits([o],!1,!1)}}onClickRef=(e,t,o,n)=>{this.onZoneRowClick(e,w.jZ,o),this.props.onClickGraphRef&&this.props.onClickGraphRef(e,t,this.processedGraphRowBySha[o],n)};onClickCommit=(e,t,o)=>{if(this.onZoneRowClick(e,t,o),this.props.onClickGraphRow){let n=this.processedGraphRowBySha[o];this.props.onClickGraphRow(e,t,n)}};onDoubleClickCommit=(e,t,o)=>{if(this.props.onDoubleClickGraphRow){let n=this.processedGraphRowBySha[o];this.props.onDoubleClickGraphRow(e,t,n)}};onWindowKeyUp=e=>{switch(e.keyCode){case 91:this.isMacOSPlatform()&&this.dimRowsOfSelectedCommit(!1);break;case 17:this.isMacOSPlatform()||this.dimRowsOfSelectedCommit(!1)}};onWindowBlur=()=>{this.dimRowsOfSelectedCommit(!1)};onWindowKeyDown=e=>{switch(e.keyCode){case 91:this.isMacOSPlatform()&&this.dimRowsOfSelectedCommit(!0);break;case 17:this.isMacOSPlatform()||this.dimRowsOfSelectedCommit(!0);break;default:this.state.dimRowsOfSelectedCommit&&this.dimRowsOfSelectedCommit(!1)}};onKeyDown=e=>{switch(e.keyCode){case 38:this.selectPrevious(e.shiftKey);break;case 40:this.selectNext(e.shiftKey);break;case 72:this.selectHead(e.shiftKey)}};onRefNodeHovered=(e,t,o)=>{(!this.props.showGhostRefsOnRowHover||(0,F.PY)(this.isSelectedBySha,o)||this.processedGraphRowBySha[o]?.hasRefs)&&(this.props.onGraphRefNodeHovered&&this.props.onGraphRefNodeHovered(e,t,this.processedGraphRowBySha[o]),this.setState({hoveredRefGroup:[...t]}))};onRefNodeUnhovered=(e,t,o)=>{this.props.onGraphRefNodeUnhovered&&this.props.onGraphRefNodeUnhovered(e,t,this.processedGraphRowBySha[o]),this.setState({hoveredRefGroup:void 0})};onRefShorthandChange=e=>{let{createRefFormData:t}=this.state;this.setState({createRefFormData:{...t,shorthand:e}})};onRefZoneHovered=e=>{this.setState({hoveredRefZoneSha:e})};onRefZoneUnhovered=()=>{this.setState({hoveredRefZoneSha:void 0})};onShowMoreCommits=()=>{this.props.onShowMoreCommits&&this.shouldFireShowMoreCommits&&(this.props.onShowMoreCommits(),this.shouldFireShowMoreCommits=!1,setTimeout(()=>{this.shouldFireShowMoreCommits=!0},250))};onScrollForZone=(e,t,o,n,r)=>{this.setScroll(e,t),this.props.onScrollForZone&&this.props.onScrollForZone(e,t),this.loadMoreCommitsIfNecessary(n,r)};loadMoreCommitsIfNecessary(e,t){if(!this.props.onShowMoreCommits||!t||!e||e<0||!this.scrollTop||this.scrollTop<0||!this.orderedGraphRows?.length)return;let o=this.scrollTop+e,n=this.orderedGraphRows.length*w.$0;o>n-w.qG&&o>this.lastLazyLoadHeight&&(this.lastLazyLoadHeight=Math.min(o,n-1),this.onShowMoreCommits())}onScrollToRowCausedUpdateForRefZone=(e,t)=>{this.setScroll(e,t),this.props.onScrollToRowCausedUpdateForRefZone&&this.props.onScrollToRowCausedUpdateForRefZone(e,t)};onCommitContextMenu=(e,t,o)=>{if(this.props.onRowContextMenu){let n=this.processedGraphRowBySha[o];this.props.onRowContextMenu(e,t,n)}};onRefContextMenu=(e,t,o)=>{if(this.props.onRefContextMenu){let n=this.processedGraphRowBySha[o];this.props.onRefContextMenu(e,t,n)}};selectCommits(e,t,o){t||Object.keys(this.isSelectedBySha).forEach(t=>{e.includes(t)||delete this.isSelectedBySha[t]});let n=this.processedGraphRowBySha?Object.keys(this.processedGraphRowBySha):[];if(e.forEach(e=>{n.includes(e)&&(this.isSelectedBySha[e]=!t||!this.isSelectedBySha[e]||!this.isSelectedBySha[e],this.isSelectedBySha[e]&&this.selectSha(e,o))}),this.props.onSelectGraphRows){let e=this.getSelectedShas().map(e=>this.processedGraphRowBySha[e]);this.props.onSelectGraphRows(e)}this.updateMarkerRowIndices(["selection"]),this.setState({processedRows:[...this.orderedGraphRows]})}getCommitZoneContentWidthBetweenGutters(){return this.getCurrentWidthByZone(w.Wm)-this.getLeftGutterWidth()-this.getRightGutterWidth()}getSelectedShas(){let e=[];return Object.keys(this.isSelectedBySha).forEach(t=>{this.isSelectedBySha[t]&&e.push(t)}),e}getExcludeRemotesByName(){let e={};return Object.values(this.excludeRefsById).forEach(t=>{t.type===B.V.REMOTE&&t.owner&&"*"===t.name&&(e[t.owner]=!0)}),e}getIncludeOnlyRemotesByName(){let e={};return Object.values(this.includeOnlyRefsById).forEach(t=>{t.type===B.V.REMOTE&&t.owner&&"*"===t.name&&(e[t.owner]=!0)}),e}clearScrollToIndex=(0,F.h)(()=>{this.setState({scrollToIndex:void 0})});getTopAndBottomVisibleRowIndex(){let{graphHeight:e,orderedGraphRows:t,scrollTop:o}=this,n=e||0;if(!n||!t||!t.length)return{top:-1,bottom:-1};let r=(n-w.rl)/w.$0,i=o/w.$0;return{top:Math.max(Math.floor(i),0),bottom:Math.min(Math.ceil(i+(r-1)),t.length-1)}}getOffsetSha(e){let t=this.graphHeight||0,o=this.props.scrollRowPadding||0;if(!o||!t)return e;let n=o;if(n<=0)return e;let r=this.getTopAndBottomVisibleRowIndex(),i=r.top,s=r.bottom;if(-1===i||-1===s)return e;let a=Math.floor((s-i)/2);if(a<1)return e;n=Math.min(n,a);let l=this.orderedGraphRows.length,c=this.orderedGraphRows.findIndex(t=>t.sha===e);if(!c||!this.orderedGraphRows.length)return e;let d=s-n<c;return i+n>c?this.orderedGraphRows[Math.max(c-n,0)].sha||e:d&&this.orderedGraphRows[Math.min(c+n,l-1)].sha||e}selectSha(e,t=!1){let o=this.processedGraphRowBySha[e]?.column||0,n=this.getScrollLeft(),r=this.getCommitZoneContentWidthBetweenGutters(),i=this.getCurrentWidthByZone(w.Wm),s=this.getCommitZoneContentWidth(),a=o*this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,l=n-this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/3<=a&&a<=n+r?n:(0,U.u)(a-r/2,0,Math.max(0,s-i));this.setScrollToSha(t?this.getOffsetSha(e):e,l),this.setState({scrollToAlignment:this.getScrollToAlignment(),scrollToIndex:this.getScrollToIndex()},this.clearScrollToIndex)}updateWidthByZone(e,t,o){let n=this.getOrderedActiveGraphZones(),r=this.graphZonesByType[t],i=(0,F.C_)(r,n,e);if(r.currentWidth=i,t===w.Wm){let e=Math.max(0,this.getCommitZoneContentWidth()-r.currentWidth);this.getScrollLeft()>e&&this.setScrollLeft(e)}o&&(r.preferredWidth=i)}updateCommitZoneContentWidthFromChange(){let e=this.graphZonesByType[w.Wm];if(!e.isHidden){let t=this.getOrderedActiveGraphZones(),o=this.getCommitZoneContentWidth();e.contentWidth=o,e.maximumWidth=o,e.currentWidth>o&&(e.currentWidth=(0,F.C_)(e,t,o)),this.setState({graphZones:t})}}getCurrentWidthByZone(e,t=!0){let o=t?this.getVerticalScrollWidth(w.Wm,this.props.cssVariables,!0):0,n=this.graphZonesByType[e];return n&&!n.isHidden?n.currentWidth-o:0}getCommitZoneContentWidth(){return(this.maxColumns||1)*this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH+2*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+2*this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT}getCommitZoneWidth(e=!0){let t=e?this.getVerticalScrollWidth(w.Wm,this.props.cssVariables,!0):0;if(this.graphZonesByType[w.Wm])return this.graphZonesByType[w.Wm].currentWidth-t;let{columnsSettings:o}=this.props;return o?.[w.Wm]?o[w.Wm].width-t:w.qi[w.Wm].minimumWidth-t}getSingleColumnModeFactor(){let e=this.maxColumns,t=this.getCurrentWidthByZone(w.Wm);return 1===e?0:(0,U.u)(1-(t-2*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH-this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1)}setClientHeight(e){this.clientHeight=e}getClientHeight(){return this.clientHeight}setScroll(e,t){this.setClientHeight(t.clientHeight),null!=t.scrollTop&&this.setScrollTop(t.scrollTop),e===w.Wm&&null!=t.scrollLeft&&this.setScrollLeft(t.scrollLeft)}getNonAdjustedScrollLeft(){return this.scrollLeft}setScrollLeft(e){this.scrollLeft!==e&&(this.scrollLeft=e,this.setState({scrollLeft:e}))}getScrollLeft(){let e=this.getNonAdjustedScrollLeft();return this.getCommitZoneContentWidth()!==this.getCommitZoneWidth()?e:0}setScrollTop(e){this.scrollTop!==e&&(this.scrollTop=e,this.setState({scrollTop:e}),this.onGraphVisibleRowsUpdatedThrottled())}getScrollTop(){return this.scrollTop}getScrollToSha(){return this.scrollToSha}setScrollToSha(e,t){this.scrollToSha=e,this.setScrollLeft(t),this.onGraphVisibleRowsUpdated()}getScrollToIndex(){let e=this.getScrollToSha();if(e){let t=this.processedGraphRowBySha[e]?.rowIndex;return void 0===t?this.orderedGraphRows.findIndex(t=>t.sha===e):t}return -1}getScrollToAlignment(){let e=this.getClientHeight(),t=this.getScrollTop(),o=this.getScrollToIndex();return(0,F.Ry)(w.$0,e,t,o)}getMinNodeOffset(){let e=this.getScrollLeft(),t=this.getSingleColumnModeFactor();return(1-t)*(e+2*this.graphZoneModeConstants.COMMIT_ZONE_PADDING_LEFT)+t*(e+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH)}getHorizontalScrollHeight(e,t,o){return this.graphZonesByType[e]?(0,F.KI)(e,this.getOrderedActiveGraphZones(),this.orderedGraphRows,t,o):0}getVerticalScrollWidth(e,t,o){return this.graphZonesByType[e]?(0,F.Ne)(e,this.getOrderedActiveGraphZones(),this.props.hasMoreCommits,this.props.isLoadingRows,this.graphHeight,this.orderedGraphRows,this.props.enabledScrollMarkerTypes?.length>0,t,o):0}getMaxNodeOffset(){let e=this.getCurrentWidthByZone(w.Wm),t=this.getScrollLeft(),o=this.getSingleColumnModeFactor();return(1-o)*(e+t+(this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT-this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH))+o*(t+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH)}getAbsoluteNodeLeftByColumn(){let e={};for(let t=0;t<=this.maxColumns;t+=1)e[t]=this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH*t;return e}getNodeOffsetByColumn(){let e=this.getMinNodeOffset(),t=this.getMaxNodeOffset(),o=this.getAbsoluteNodeLeftByColumn(),n={};return Object.keys(o).forEach(r=>{let i=o[r];n[r]=(0,U.u)(i,e,t)}),n}getMaxNodeLeft(){return this.getScrollLeft()+(this.getCurrentWidthByZone(w.Wm)-this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH-this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)}getMinNodeLeft(){let e=this.getScrollLeft(),t=this.getSingleColumnModeFactor();return e+this.graphZoneModeConstants.COMMIT_ZONE_PADDING_LEFT+t*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH}getRightGutterSlideOutFactor(){let e=this.getCurrentWidthByZone(w.Wm),t=this.getCommitZoneContentWidth(),o=this.getSingleColumnModeFactor();return(0,U.u)((e-(t-(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)))/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1)+o/2}getNodeOpacityByColumn(){let e=this.getMinNodeLeft(),t=this.getMaxNodeLeft(),o=this.getAbsoluteNodeLeftByColumn(),n=this.getRightGutterSlideOutFactor(),r=this.getSingleColumnModeFactor(),i={};return Object.keys(o).forEach(s=>{let a=o[s],l=a-(e-r*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH),c=t+this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH-(a+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH*(1-n));i[s]=w.l3+(1-w.l3)*Math.max(Math.min(l,c)/(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/2),r)}),i}getLeftGutterWidth(){let e=this.getSingleColumnModeFactor();return this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/2*e}getRightGutterWidth(){return(1-this.getRightGutterSlideOutFactor())*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH}getBoxShadowAlphaForGutter(e,t){return .4*(1-Math.max(e,t))}getLeftGutterBoxShadowAlpha(e){let t=this.getScrollLeft(),o=this.getSingleColumnModeFactor();return e*this.getBoxShadowAlphaForGutter(o,(0,U.u)(1-t/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1))}getRightGutterBoxShadowAlpha(e){let t=this.getSingleColumnModeFactor(),o=this.getRightGutterSlideOutFactor();return e*this.getBoxShadowAlphaForGutter(t,o)}updateMarkerRowIndices(e){let t={...this.markerRowIndices};e.forEach(e=>{t[e]=[]}),e.includes("selection")&&this.getSelectedShas().forEach(e=>{void 0!==this.processedGraphRowBySha[e]?.rowIndex&&t.selection.push(this.processedGraphRowBySha[e].rowIndex)}),e.includes("highlights")&&Object.keys(this.state?.highlightedShas||this.props.highlightedShas||{}).forEach(e=>{void 0!==this.processedGraphRowBySha[e]?.rowIndex&&t.highlights.push(this.processedGraphRowBySha[e].rowIndex)}),this.markerRowIndices=t}getMarkerColors(){let e=getComputedStyle(document.documentElement),t={};return Object.values(w.Qh).forEach(o=>{let n=e.getPropertyValue(o.colorCssKey).trim();n&&(t[o.type]=n)}),t}initializeGraphZones(e,t,o){this.graphZonesByType={};let n=[],r=0;t.forEach((t,o)=>{let i=e?e[t]:void 0,s=w.qi[t],a=i?.width?i.width:s.minimumWidth,l={...s,type:t,currentWidth:a,preferredWidth:a,isHidden:i?.isHidden||!1,mode:i?.mode,order:s.isCustomizable&&void 0!==i?.order?i?.order:o};i?.isHidden||(r+=l.currentWidth),t===w.Wm&&(l.contentWidth=this.getCommitZoneContentWidth(),l.minimumWidth=this.graphZoneModeConstants.COMMIT_ZONE_VIEWPORT_WIDTH_MIN,l.showIconWidth=this.graphZoneModeConstants.COMMIT_ZONE_SHOW_ICON_WIDTH,this.maxColumns>0&&(l.maximumWidth=l.contentWidth)),this.graphZonesByType[t]=l,l?.isHidden||n.push(l)});let i=n[n.length-1];if(i){let e=(0,F.Zg)(this.props.cssVariables,!0),t=i.minimumWidth+e;(null==i.maximumWidth||i.maximumWidth>=t)&&(i.minimumWidth=t,null!=i.showIconWidth&&(i.showIconWidth+=e),n[n.length-1]=i)}for(n.forEach(e=>{let t=(0,F.C_)(e,n,e.currentWidth);t!==e.currentWidth&&(r-=e.currentWidth,e.currentWidth=t,r+=t)});r>o;){let e=(0,F.tC)(n);if(!e)break;let t=e.currentWidth,i=r-o,s=Math.max(e.minimumWidth,t-i),a=t-s;this.graphZonesByType[e.type].currentWidth=s,r-=a}if(r<o){let e=t[t.length-1],r=o-(0,F.iM)(n,e);this.graphZonesByType[e].currentWidth=r}return n}maybeSortGraphZoneOrderingFromSettings(e){this.graphZoneOrdering.every(t=>void 0!==e?.[t]?.order)&&this.graphZoneOrdering.sort((t,o)=>e[t].order<e[o].order?-1:e[t].order>e[o].order?1:0)}updateZonesFromSettings(e){let t=!1;this.graphZoneOrdering.forEach((o,n)=>{let r=this.graphZonesByType[o],i=e?.[r.type];i&&(i.isHidden!==r.isHidden&&(t=!0,r.type!==w.WD||i.isHidden||this.updateRowStatsConstraints()),r.isHidden=i.isHidden,r.order=r.isCustomizable&&void 0!==i?.order?i?.order:n,r.mode=i.mode,r.preferredWidth=i.width??r.preferredWidth,r.currentWidth=r.preferredWidth)}),t&&this.graphZoneOrdering.forEach(e=>{let t=this.graphZonesByType[e];t.currentWidth=t.minimumWidth})}getEdgeColumnMaxes(e){let t=0;return Object.keys(this.processedGraphRowBySha[e]?.edges||{}).forEach(e=>{t=Math.max(t,parseInt(e,10))}),t}getEndingAndPassThroughEdgesByColumnFromPrevRow(e,t){let o,n,r,i;let s={};return Object.keys(t).forEach(a=>{n=(o=t[a]).passThrough,r=o.starting,(i=n&&!C(n.type)?n:r&&!C(r.type)?r:n||r||void 0)&&(i.parentSha===e.sha?s[a]={ending:i}:s[a]={passThrough:i})}),s}getFinalEdgeStateForGraphAndRow(e,t){let o=this.getEndingAndPassThroughEdgesByColumnFromPrevRow(e,t),n=this.getStartingEdgesByColumn(e);return Object.keys(n).forEach(e=>{o[e]||(o[e]={ending:void 0,passThrough:void 0,starting:void 0}),o[e].starting=n[e]}),o}loadEdgesBySha(){this.maxColumns=0,this.orderedGraphRows.forEach((e,t)=>{let o=this.orderedGraphRows[t-1],n=o&&this.processedGraphRowBySha[o.sha]?.edges?this.processedGraphRowBySha[o.sha].edges:{};this.processedGraphRowBySha[e.sha].edges=this.getFinalEdgeStateForGraphAndRow(e,n);let r=this.getEdgeColumnMaxes(e.sha);this.processedGraphRowBySha[e.sha].edgeColumnMaxes=r,r>this.maxColumns&&(this.maxColumns=r)})}processRows(e){this.loadRowsbySha(e||[]),this.loadEdgesBySha()}getStartingEdgesByColumn(e){let t={},o=e.parents;if(o.length>0){let n=e.type,r=this.processedGraphRowBySha[e.sha]?.column;void 0!==r&&(t[r]={parentSha:o[0],type:n});for(let e=1;e<o.length;e+=1){let r=o[e],i=this.processedGraphRowBySha[r]?.column;void 0!==i&&(t[i]={parentSha:r,type:n})}}return t}formatCommitDateTimeCallback=(e,t)=>this.props.formatCommitDateTime?this.props.formatCommitDateTime(e,t):function(e,t,o,r=!0){let i=`${o??""}:${t=t??void 0}`,s=I.get(i);if(null==s){let e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=O.exec(e);if(null!=t?.groups){let{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(E))if(null!=t)for(let e in t){let n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);s=new Intl.DateTimeFormat(null==o?n:"system"===o?void 0:[o],e),r&&I.set(i,s)}if(null==t||O.test(t))return s.format(e);let a=s.formatToParts(e);return t.replace(E,(t,i,s,l,c,d,h,u,p,f,m,g,b,v,y)=>{if(null!=i)return i.substring(1,i.length-1);for(let t in y){let i=y[t];if(null==i)continue;let s=a.find(e=>e.type===t);if("Do"===i&&"day"===s?.type)return function(e){let t=e%100;return`${e}${M[(t-20)%10]??M[t]??"th"}`}(Number(s.value));if("a"===i&&"dayPeriod"===s?.type){let t=(function(e){let t=`${o??""}:time:${e}`,i=I.get(t);return null==i&&(i=new Intl.DateTimeFormat(null==o?n:"system"===o?void 0:[o],{localeMatcher:"best fit",timeStyle:e}),r&&I.set(t,i)),i})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return` ${(t??s)?.value??""}`}return s?.value??""}return""})}(e,w.It);formatCommitMessageCallback=e=>this.props.formatCommitMessage?this.props.formatCommitMessage(e):e;formatRefShorthandCallback=(e,t,o,n)=>this.props.formatRefShorthand?this.props.formatRefShorthand(e,t,o,n):e.replace(/\s/g,"");isRefShorthandValidCallback=(e,t,o,n)=>!this.props.isRefShorthandValid||this.props.isRefShorthandValid(e,t,o,n);translateCallback=(e,...t)=>this.props.translate?this.props.translate(e,...t):G[e]?function(e,t){if(0===t.length)return e;let o=e;return t.forEach((e,t)=>{let n=RegExp(`\\{${t}\\}`,"g");o=o.replace(n,e)}),o}(G[e],t):`${e}`;getIconCallback=e=>this.props.getExternalIcon?this.props.getExternalIcon(e):u().createElement("span",null);onMissingAvatar=(e,t)=>{this.props.onEmailsMissingAvatarUrls&&!this.requestedMissingAvatars[e]&&(this.pendingMissingAvatars[e]=t,this.missingAvatarsTimer&&(clearTimeout(this.missingAvatarsTimer),this.missingAvatarsTimer=void 0),this.missingAvatarsTimer=setTimeout(()=>{let e={...this.pendingMissingAvatars};this.pendingMissingAvatars={};let t=Object.keys(e);if(t.length){for(let e of t)this.requestedMissingAvatars[e]=!0;this.props.onEmailsMissingAvatarUrls?.(e)}},100))};onMissingRefMetadata=(e,t)=>{if(!this.props.onRefsMissingMetadata||this.requestedMissingRefsMetadata[e])return;let o=this.pendingMissingRefsMetadata[e]||[],n=t.filter(e=>!o.includes(e));this.pendingMissingRefsMetadata[e]=[...o,...n],this.missingRefsMetadataTimer&&(clearTimeout(this.missingRefsMetadataTimer),this.missingRefsMetadataTimer=void 0),this.missingRefsMetadataTimer=setTimeout(()=>{let e={...this.pendingMissingRefsMetadata};this.pendingMissingRefsMetadata={};let t=Object.keys(e);if(t.length){for(let e of t)this.requestedMissingRefsMetadata[e]=!0;this.props.onRefsMissingMetadata?.(e)}},100)};selectNext(e){let t;let o=this.getSelectedShas(),n=o.length>0?o[o.length-1]:null;if(e&&n){let e=this.processedGraphRowBySha[n];e?.parents?.length&&(t=e.parents[0])}else{let e=Math.min((n?this.orderedGraphRows.findIndex(e=>e.sha===n):-1)+1,this.orderedGraphRows.length-1);t=this.orderedGraphRows[e]?.sha}t&&this.selectCommits([t],!1,!0)}selectPrevious(e){let t;let o=this.getSelectedShas(),n=o.length>0?o[0]:null;if(e&&n){let e=this.childrenBySha[n];if(e?.length){for(let o=0;o<e.length;o+=1)if(o===e.length-1)t=e[o];else if(this.processedGraphRowBySha[e[o]]?.type!==y.kP){t=e[o];break}}}else{let e=Math.max(-1,(n?this.orderedGraphRows.findIndex(e=>e.sha===n):-1)-1);t=this.orderedGraphRows[e]?.sha,e<0&&(t=this.orderedGraphRows[0]?.sha)}t&&this.selectCommits([t],!1,!0)}selectHead(e){e&&this.headUpstreamSha?this.selectCommits([this.headUpstreamSha],!1,!0):this.headSha&&this.selectCommits([this.headSha],!1,!0)}getAvailableColumnAndUseIt(){let e=0;for(;this.columnsUsed[e];)e+=1;return this.columnsUsed[e]=!0,e}getColumns(e){let t,o;this.hasMergeNodeChildBySha[e.sha]&&delete this.hasMergeNodeChildBySha[e.sha];let n=e.parents||[],r=this.columnsToFreeWhenFound[e.sha];if(void 0!==r)for(let e=0;e<r.length;e+=1)delete this.columnsUsed[r[e]];let i=0,s=this.reserverInfoBySha[e.sha];void 0!==s?.column?(i=s.column,delete this.reserverInfoBySha[e.sha]):i=this.getAvailableColumnAndUseIt();for(let r=0;r<n.length;r+=1)if(t=n[r],e.type===y.lH&&(this.hasMergeNodeChildBySha[t]=!0),o=this.reserverInfoBySha[t],0===r&&void 0!==o?.column&&o?.column!==i){let n=this.columnsToFreeWhenFound[t]||[],r=o?.type===y.kP&&e.type!==y.kP&&s?.newestDate>o?.newestDate;(o?.column>i||r)&&!this.hasMergeNodeChildBySha[t]?(this.reserverInfoBySha[t]={type:e.type,newestDate:s?.newestDate,column:i},n.push(o.column)):n.push(i),this.columnsToFreeWhenFound[t]=n}else void 0===o?.column&&(this.reserverInfoBySha[t]={type:e.type,newestDate:s?.column===i?s?.newestDate:e.date,column:0===r?i:this.getAvailableColumnAndUseIt()});return i}getFilteredHeadsForGraphRow(e,t){return e.heads.filter(e=>e.isCurrentHead||(t?void 0!==this.includeOnlyRefsById[(0,F.bY)(B.V.HEAD,e)]:!this.excludeByType.heads&&void 0===this.excludeRefsById[(0,F.bY)(B.V.HEAD,e)]))}getFilteredRemotesForGraphRow(e,t){return e.remotes.filter(e=>t?void 0!==this.includeOnlyRefsById[(0,F.bY)(B.V.REMOTE,e)]||!e.owner||void 0!==this.includeOnlyRemotesByName[e.owner]:(!this.excludeByType.remotes||e.owner&&this.downstreamsByUpstream[`${e.owner}/${e.name}`]?.length>0)&&void 0===this.excludeRefsById[(0,F.bY)(B.V.REMOTE,e)]&&(!e.owner||void 0===this.excludeRemotesByName[e.owner]))}getFilteredTagsForGraphRow(e,t,o){let n=t&&Object.values(this.includeOnlyRefsById).some(e=>e.type===B.V.TAG),r=t&&(this.getFilteredHeadsForGraphRow(e,t).length>0||this.getFilteredRemotesForGraphRow(e,t).length>0);return e.tags.filter(e=>n?void 0!==this.includeOnlyRefsById[(0,F.bY)(B.V.TAG,e)]:!this.excludeByType.tags&&void 0===this.excludeRefsById[(0,F.bY)(B.V.TAG,e)]&&(!t||r||o))}loadRowsbySha(e){this.orderedGraphRows=[],this.processedGraphRowBySha={},this.childrenBySha={},this.reserverInfoBySha={},this.columnsToFreeWhenFound={},this.columnsUsed={};let t=new Map,o={},n=[],r=[];this.branchUpstreamRowIndices=[];let i=[],s=[],a=[],l=[],c={};if((0,F.Kk)(this.workDirStats)&&e.length>0&&!(0,F.H1)(e[0].type)){let t=(0,F.DN)(e),o={sha:y.ch,parents:t?[t]:[],author:"",email:"",date:(new Date).getTime(),message:this.translateCallback("Graph-WorkInProgress"),type:y.ch,heads:[],remotes:[],tags:[]};this.workDirStats.context&&(o.contexts={row:this.workDirStats.context}),e.unshift(o)}else!(0,F.Kk)(this.workDirStats)&&e.length>0&&(0,F.H1)(e[0].type)&&e.shift();let d=Object.keys(this.includeOnlyRefsById).length>0;e.forEach((e,h)=>{let u=this.childrenBySha[e.sha]?.length>0,p=e.heads?.length>0?this.getFilteredHeadsForGraphRow(e,d):[],f=e.remotes?.length>0?this.getFilteredRemotesForGraphRow(e,d):[],m=e.tags?.length>0?this.getFilteredTagsForGraphRow(e,d,!!(c[e.sha]||u)):[],g=e.parents?.length>0?e.parents.filter(e=>!o[e]):[],b=p.length>0||f.length>0||m.length>0,v=p.length>0||f.length>0;if(e.type!==y.o$&&e.type!==y.lH||c[e.sha]){if(e.type===y.kP&&this.excludeByType.stashes&&(o[e.sha]=!0),!o[e.sha]&&g.length>0){let e;for(e of g)c[e]=!0}}else e.type!==y.o$&&e.type!==y.lH||c[e.sha]||b||u||(o[e.sha]=!0);let w=o[e.sha],C=new W.A(this,{...e,heads:p,remotes:f,tags:m,parents:g},w?0:this.getColumns(e));if(!w){let o;let c=t.get(e.sha);c?.length&&(c.sort((e,t)=>{if(e.parentIndexScore<t.parentIndexScore)return -1;if(e.parentIndexScore>t.parentIndexScore)return 1;if(e.parentIndexScore===t.parentIndexScore){if(e.rowEntered<t.rowEntered)return -1;if(e.rowEntered>t.rowEntered)return 1}return 0}),o=c[0],C.childRefs={heads:[...o?.heads||[]],remotes:[...o?.remotes||[]],tags:[...o?.tags||[]]},t.delete(e.sha));for(let n=0;n<g.length;n+=1){let r=g[n];this.childrenBySha[r]||(this.childrenBySha[r]=[]),this.childrenBySha[r].push(e.sha);let i=t.get(r);(v||o)&&void 0===i&&(i=[],t.set(r,i)),v?i?.unshift({sha:e.sha,parentIndexScore:n,rowEntered:h,heads:p,remotes:f,tags:m}):o&&i?.unshift({...o,parentIndexScore:n,rowEntered:h})}let d=this.orderedGraphRows.length;if(C.rowIndex=d,p.length>0&&(i.push(d),p.some(e=>e.isCurrentHead)&&(this.headSha=C.sha,n.push(d))),f.length>0)for(let e of(s.push(d),f))e.current&&(r.push(d),this.headUpstreamSha=C.sha),this.downstreamsByUpstream[`${e.owner}/${e.name}`]?.length>0&&this.branchUpstreamRowIndices.push(d);m.length>0&&a.push(d),e.type===y.kP&&l.push(d),this.orderedGraphRows.push(C)}this.processedGraphRowBySha[e.sha]=C}),this.markerRowIndices={...this.markerRowIndices,head:n,upstream:r,localBranches:i,remoteBranches:s,tags:a,stashes:l},clearInterval(this.timelinesInterval),this.updateTimelines(),this.timelinesInterval=setInterval(()=>{this.clearTimelines(),this.updateTimelines(),this.setState({processedRows:[...this.orderedGraphRows]})},9e5),this.onGraphVisibleRowsUpdated()}updateRowStatsConstraints(){this.rowStatsConstraints=(0,F.L1)(null!=this.rowsStats?Object.values(this.rowsStats).map(e=>e.additions+e.deletions):[])}updateTimelines(){Object.values((0,F.yF)()).forEach(e=>{e.forEach(e=>{let{date:t}=e,o=this.orderedGraphRows.find(e=>e.date<t);o&&this.processedGraphRowBySha[o.sha]&&(this.processedGraphRowBySha[o.sha].timeLineEntry=e)})})}clearTimelines(){Object.keys(this.processedGraphRowBySha).forEach(e=>{this.processedGraphRowBySha[e].timeLineEntry&&delete this.processedGraphRowBySha[e].timeLineEntry})}cleanupSelections(){let e=Object.keys(this.isSelectedBySha);for(let t=0;t<e.length;t+=1){let o=e[t];this.processedGraphRowBySha[o]||delete this.isSelectedBySha[o]}}getColumnColorByColumn(e){var t;let o=this.getNumGraphColumns(e),n=this.maxColumns>o?this.maxColumns:o,r={};for(let i=0;i<=n;i+=1)if(i<o){let o=e[(0,k.a2)(i)];r[i]="rgba"===(t=b(o)).type?`rgba(${t.r}, ${t.g}, ${t.b}, ${Number(t.a.toFixed(2))})`:`hsla(${t.h}, ${(100*t.s).toFixed(2)}%, ${(100*t.l).toFixed(2)}%, ${Number(t.a.toFixed(2))})`}else{let e=r[i%o];r[i]=e}return r}getNumGraphColumns(e){let t=Number.parseInt(e[T.i],w.uK);return Number.isNaN(t)?w.uK:t}expandLastZoneMinWidthForScrollbar(e){let t=e[e.length-1]?.type;if(!t)return;let o=(0,F.Zg)(this.props.cssVariables,!0),n=w.qi[t].minimumWidth+o,r=this.graphZonesByType[t];if(!r||null!=r.maximumWidth&&n>r.maximumWidth)return;r.minimumWidth=n;let i=w.qi[t].showIconWidth;null!=i&&(r.showIconWidth=i+o),r.currentWidth<r.minimumWidth&&(r.currentWidth=r.minimumWidth),r.preferredWidth<r.minimumWidth&&(r.preferredWidth=r.minimumWidth)}ensureZoneWidthsMatchGraphWidth(e,t){let o=(0,F.iM)(e);o>t&&this.shrinkZoneWidthsToFitWidth(e,t),o<t&&this.expandZoneWidthsToFitWidth(e,t)}shrinkZoneWidthsToFitWidth(e,t,o){let n=(0,F.iM)(e);for(;n>t;){let r=(0,F.tC)(e,o);if(!r)break;let i=(0,F.iM)(e,r.type);if(i+r.currentWidth>t){let o=(0,F.C_)(r,e,t-i);this.updateWidthByZone(o,r.type)}n=(0,F.iM)(e)}}getOrderedActiveGraphZones(){return this.graphZoneOrdering.sort((e,t)=>this.graphZonesByType[e].order-this.graphZonesByType[t].order).filter(e=>!this.graphZonesByType[e].isHidden).map(e=>this.graphZonesByType[e])}expandZoneWidthsToFitWidth(e,t,o){let n=(0,F.iM)(e);for(;n<t;){let r=(0,F.nv)(e,o);if(!r)break;let i=(0,F.iM)(e,r.type),s=r.maximumWidth?Math.min(r.maximumWidth,r.preferredWidth||1/0):r.preferredWidth||0;if(i+r.currentWidth<t){let o=t-i;!(0,F.SH)(r.type,e)&&o>s&&(o=s),o=(0,F.C_)(r,e,o),this.updateWidthByZone(o,r.type)}n=(0,F.iM)(e)}}onGraphHeaderRowMouseDown=e=>{1===e.button&&e.preventDefault()};onToggleRefNodesShown=(e,t,o,n)=>{t.forEach(e=>{o&&this.excludeRefsById[e.id]?delete this.excludeRefsById[e.id]:o||(this.excludeRefsById[e.id]=e)}),this.excludeRemotesByName=this.getExcludeRemotesByName(),this.props.onToggleRefsVisibilityClick&&this.props.onToggleRefsVisibilityClick(e,t,o,n?this.processedGraphRowBySha[n]:void 0),this.processRows(this.props.graphRows),this.setState({processedRows:[...this.orderedGraphRows]})};cleanEdgeCaches(){et={},ee={},J={},X={},D={}}onZoneEnter=(e,t,o,n)=>{t!==w.jZ&&(o&&n&&this.onRefNodeUnhovered(e,o,n),this.onRefZoneUnhovered())};adjustResizedGraphZone(e,t,o,n){if(o?.width){let r=t.currentWidth;this.updateWidthByZone(o.width,t.type,n);let i=(0,F.mb)(t.type,e),s=this.graphZonesByType[t.type];r>s.currentWidth&&this.expandZoneWidthsToFitWidth(e,this.graphWidth,i+1),r<s.currentWidth&&this.shrinkZoneWidthsToFitWidth(e,this.graphWidth,i-1)}}dimRowsOfSelectedCommit(e){this.setState({dimRowsOfSelectedCommit:e})}onGraphContainerBlurred=(e,t,o)=>{setTimeout(()=>{t&&o&&this.onRefNodeUnhovered(e,t,o),this.onRefZoneUnhovered()},250)};onGraphContainerMouseEnter=e=>{this.props.onGraphMouseEnter&&this.props.onGraphMouseEnter(e)};onGraphContainerMouseLeave=e=>{this.props.onGraphMouseLeave&&this.props.onGraphMouseLeave(e)};onGraphResized=(0,F.h)((e,t)=>{let o=Math.floor(t),n=Math.floor(e),r=o!==this.graphHeight,i=n!==this.graphWidth,s={};if(r&&(this.graphHeight=o,s.height=o),i){this.graphWidth=n;let e=this.getOrderedActiveGraphZones();this.ensureZoneWidthsMatchGraphWidth(e,this.graphWidth),s.width=this.graphWidth,s.graphZones=e}(r||i)&&(this.setState(s),r&&this.onGraphVisibleRowsUpdatedThrottled(),this.props.onGraphResized&&this.props.onGraphResized(this.graphWidth,this.graphHeight))});onGraphVisibleRowsUpdated(){if(!this.props.onGraphVisibleRowsChanged||!this.orderedGraphRows||!this.orderedGraphRows.length)return;let{top:e,bottom:t}=this.getTopAndBottomVisibleRowIndex();-1===e||-1===t||e>=this.orderedGraphRows.length||t>=this.orderedGraphRows.length||e===this.lastTopVisibleRowIndex&&t===this.lastBottomVisibleRowIndex||(this.lastTopVisibleRowIndex=e,this.lastBottomVisibleRowIndex=t,this.props.onGraphVisibleRowsChanged&&this.props.onGraphVisibleRowsChanged(this.orderedGraphRows[e],this.orderedGraphRows[t]))}getCurrentPlatform(){return this.props.platform||"darwin"}isMacOSPlatform(){return"darwin"===this.getCurrentPlatform()}getGraphColumnSettingFromZoneType(e){return{width:e.preferredWidth||0,isHidden:e.isHidden,mode:e.mode,order:e.order}}decorateWithHelmet=(e,t,o)=>{let n=(0,k.M)(t);return u().createElement(u().Fragment,null,u().createElement("style",{nonce:o},n),u().createElement("div",{className:"gk-graph"},e))};render(){var e;let{columnsSettings:t,customFooterRow:o,isInUnsupportedRebase:n,isCommitting:r,repoPath:i,nonce:s,wipMessageEditable:a}=this.props,{avatarUrlByEmail:l,columnColorByColumn:c,contexts:h,createRefFormData:p,cssVariablesWithDefaults:f,currentlyHoveredCommitSha:m,dimMergeCommits:g,dimRowsOfSelectedCommit:b,enableShowHideRefsOptions:v,highlightRowsOnRefHover:y,showGhostRefsOnRowHover:C,showRemoteNamesOnRefs:S,enabledRefMetadataTypes:x,enabledScrollMarkerTypes:_,graphCommitDescDisplayMode:R,graphZones:T,hasMoreCommits:k,height:E,highlightedShas:O,hoveredRefGroup:I,hoveredRefZoneSha:M,themeOpacityFactor:D,isContainerWindowFocused:A,isLoadingRows:$,rowsStatsLoading:P,numGraphColumns:N,pendingCommitMessageSummary:z,processedRows:H,refMetadataById:L,useAuthorInitialsForAvatars:W,scrollToAlignment:G,scrollToIndex:B,scrollTop:U,scrollLeft:V,shaLength:j,width:Z,workDirStats:q}=this.state,K=d()("flex","graph-container"),Y=(0,F.uM)(H),Q=(e=e=>Y(e),({cellCache:t,cellRenderer:o,columnSizeAndPositionManager:n,columnStartIndex:r,columnStopIndex:i,deferredMeasurementCache:s,horizontalOffsetAdjustment:a,isScrolling:l,parent:c,rowSizeAndPositionManager:d,rowStartIndex:h,rowStopIndex:u,styleCache:p,verticalOffsetAdjustment:f,visibleColumnIndices:m,visibleRowIndices:g})=>{let b=[],v=n.areOffsetsAdjusted()||d.areOffsetsAdjusted(),y=!l&&!v;for(let v=h;v<=u;v+=1){let h=d.getSizeAndPositionOfCell(v);for(let d=r;d<=i;d+=1){let r,i;let u=n.getSizeAndPositionOfCell(d),w=d>=m.start&&d<=m.stop&&v>=g.start&&v<=g.stop,C=`${v}-${d}`;y&&p[C]?r=p[C]:s&&!s.has(v,d)?r={height:"auto",left:0,position:"absolute",top:0,width:"auto"}:(r={height:h.size,left:u.offset+a,position:"absolute",top:h.offset+f,width:u.size},p[C]=r);let S={columnIndex:d,isScrolling:l,isVisible:w,key:C,parent:c,rowIndex:v,style:r};if(!l||a||f)i=o(S);else{let n=e(v,d);t[C]&&t[C].realKeyForCell===n||(t[C]={realKeyForCell:n,cell:o(S)}),i=t[C].cell}null!=i&&b.push(i)}}return b}),X=this.getLeftGutterWidth(),J=this.getRightGutterWidth(),ee=this.getRightGutterBoxShadowAlpha(D),et=this.getLeftGutterBoxShadowAlpha(D),eo=this.getNodeOffsetByColumn(),en=this.getNodeOpacityByColumn(),er=(0,F.mb)(w.jZ,T),ei=(0,F.mb)(w.Wm,T),es=!I,ea={avatarUrlByEmail:l,createRefFormData:p,dimMergeCommits:g,dimRowsOfSelectedCommit:b,enableShowHideRefsOptions:v,highlightRowsOnRefHover:y,showGhostRefsOnRowHover:C,showRemoteNamesOnRefs:S,enabledRefMetadataTypes:x,enabledScrollMarkerTypes:_,isInUnsupportedRebase:n,isCommitting:r||!1,isContainerWindowFocused:A,pendingCommitMessageSummary:z,workDirStats:q,repoPath:i,columnColorByColumn:c,currentlyHoveredCommitSha:m,cssVariables:f,graphCommitDescDisplayMode:R,graphZoneModeConstants:this.graphZoneModeConstants,graphZones:T,hasMoreCommits:k,height:E,highlightedShas:O,hoveredRefGroup:I,hoveredRefZoneSha:M,includeOnlyRefsById:this.includeOnlyRefsById,includeOnlyRemotesByName:this.includeOnlyRemotesByName,isLoadingRows:$,isSelectedBySha:this.isSelectedBySha,leftGutterBoxShadowAlpha:et,leftGutterWidth:X,nodeOffsetByColumn:eo,nodeOpacityByColumn:en,nonce:s,numGraphColumns:N,processedRows:H,processedGraphRowBySha:this.processedGraphRowBySha,refMetadataById:L,rightGutterBoxShadowAlpha:ee,rightGutterWidth:J,rowStatsConstraints:this.rowStatsConstraints,rowsStats:this.rowsStats,useAuthorInitialsForAvatars:W,scrollToAlignment:G,scrollLeft:V,scrollTop:U,shaLength:j,shouldShowRefLine:-1!==er&&-1!==ei&&ei-er==1,width:Z,wipMessageEditable:a||!1,onMissingAvatar:this.onMissingAvatar,onMissingRefMetadata:this.onMissingRefMetadata,clearCurrentlyHoveredGraphCommit:this.onClearCurrentlyHoveredGraphCommit,setAsCurrentlyHoveredGraphCommit:this.onCurrentlyHoveredGraphCommit,onClickRef:this.onClickRef,onClickCommit:this.onClickCommit,onDoubleClickCommit:this.onDoubleClickCommit,onBlurWipNodeInput:this.onBlurWipNodeInput,onFocusWipNodeInput:this.onFocusWipNodeInput,onDoubleClickRef:this.onDoubleClickRef,onMessageChange:this.onMessageChange,onRefBeginDrag:this.onRefBeginDrag,onRefCanDrag:this.onRefCanDrag,onRefCanDrop:this.onRefCanDrop,onRefCreate:this.onRefCreate,onRefCreateCancel:this.onRefCreateCancel,onRefCreateContextMenu:this.onRefCreateContextMenu,onRefDragEnter:this.onRefDragEnter,onRefDragLeave:this.onRefDragLeave,onRefDrop:this.onRefDrop,onRefEndDrag:this.onRefEndDrag,onRefNodeHovered:this.onRefNodeHovered,onRefNodeUnhovered:this.onRefNodeUnhovered,onRefShorthandChange:this.onRefShorthandChange,onRefZoneHovered:this.onRefZoneHovered,onRefZoneUnhovered:this.onRefZoneUnhovered,onToggleRefNodesShown:this.onToggleRefNodesShown,onCommitContextMenu:this.onCommitContextMenu,onShowContextMenuForGroupedRef:this.onRefContextMenu,getExternalIcon:this.getIconCallback,formatCommitDateTime:this.formatCommitDateTimeCallback,formatRefShorthand:this.formatRefShorthandCallback,isRefShorthandValid:this.isRefShorthandValidCallback,translate:this.translateCallback},el={[w.jZ]:rB(ea,Y),[w.Wm]:rC(ea,Y),[w.KE]:rs(ea,Y),[w.GF]:nV(ea,Y),[w.PL]:nj(ea,Y),[w.av]:ra(ea,Y),[w.WD]:nW(ea,Y),[w.Gn]:rU(ea,Y)},ec=T.map((e,t)=>u().createElement(oC,{branchUpstreamRowIndices:this.branchUpstreamRowIndices,cellRenderersByIds:el,columnIndex:t,customFooterRow:o,enabledScrollMarkerTypes:_,enableResizer:es,getExternalIcon:this.getIconCallback,getKeyForCell:Y,graphHeight:E-w.rl,graphWidth:Z,graphZones:T,graphZoneType:e.type,hasMoreCommits:k,horizontalScrollHeight:this.getHorizontalScrollHeight(e.type,f),isLoadingRows:$,key:`${e.type}ColumnContainer`,markerColors:this.getMarkerColors(),markerRowIndices:this.markerRowIndices,onResize:this.onGraphZoneResize,onResizeEnd:this.onGraphZoneResizeEnd,onScroll:this.onScrollForZone,onScrollToRowCausedUpdate:e.type===w.jZ?this.onScrollToRowCausedUpdateForRefZone:void 0,onZoneEnter:t=>this.onZoneEnter(t,e.type,I,M),rowCount:H.length,scrollLeft:V,scrollToAlignment:e.type===w.jZ?G:void 0,scrollToIndex:e.type===w.jZ?B:void 0,scrollTop:U,smartCellRangeRenderer:Q,translate:this.translateCallback,verticalScrollWidth:this.getVerticalScrollWidth(e.type,f)})),ed=this.graphContainerRef?.current&&u().createElement(nD,{columnsSettings:t,dragAppendToContainer:this.graphContainerRef?.current,enableResizer:es,enableShowHideRefsOptions:v,excludeRefsById:this.excludeRefsById,getExternalIcon:this.getIconCallback,graphZones:T,headerContext:h?.header,height:E,includeOnlyRefsById:this.includeOnlyRefsById,onColumnReOrdered:this.onGraphColumnReOrdered,onFilterColumnClick:this.onFilterColumnClick,onGraphZoneResize:this.onGraphZoneResize,onGraphZoneResizeEnd:this.onGraphZoneResizeEnd,onPopupGraphHeaderContextMenu:this.onPopupGraphHeaderContextMenu,onSettingsClick:this.onSettingsClick,onToggleRefNodesShown:this.onToggleRefNodesShown,repoPath:i,rowsStatsLoading:P,settingsContext:h?.settings,showRemoteNamesOnRefs:S,translate:this.translateCallback,width:Z}),eh=u().createElement("div",{className:"graph-component","data-vscode-context":(0,F.q3)(h?.graph),onBlur:e=>this.onGraphContainerBlurred(e,I,M),onMouseEnter:this.onGraphContainerMouseEnter,onMouseLeave:this.onGraphContainerMouseLeave,ref:this.graphContainerRef,style:{height:"100%",width:"100%",position:"absolute"},tabIndex:-1},ed,u().createElement("div",{className:O&&Object.keys(O).length?d()(K,"graph-highlighted"):K,id:"graph-container",onKeyDown:this.onKeyDown,onMouseDown:this.onGraphHeaderRowMouseDown,style:{height:E,width:Z},tabIndex:-1},ec));return this.decorateWithHelmet(eh,f,s)}}var rj=rV},7154:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(6689),r=o.n(n),i=o(5191);class s extends r().PureComponent{horizontalScrollRef=r().createRef();scrollabbleContentRef=r().createRef();verticalScrollRef=r().createRef();outerHorizontalScrollRef=r().createRef();updateScrollbarValues(e,t){this.horizontalScrollRef?.current&&(this.horizontalScrollRef.current.scrollLeft=e||0),this.verticalScrollRef?.current&&(this.verticalScrollRef.current.scrollTop=t||0)}componentDidUpdate(e){let{scrollLeft:t,scrollTop:o}=this.props;e.scrollLeft===t&&e.scrollTop===o||this.updateScrollbarValues(t,o)}onHorizontalScroll(e){this.props.onScroll&&this.props.onScroll({clientHeight:this.props.height||0,clientWidth:e.target.clientWidth,scrollHeight:this.getAdjustedContentHeight(),scrollLeft:e.target.scrollLeft,scrollTop:this.props.scrollTop||0,scrollWidth:e.target.scrollWidth})}onVerticalScroll(e){this.props.onScroll&&this.props.onScroll({clientHeight:e.target.clientHeight,clientWidth:this.props.width||0,scrollHeight:e.target.scrollHeight,scrollLeft:this.props.scrollLeft||0,scrollTop:e.target.scrollTop,scrollWidth:this.props.contentWidth||0})}onWheel(e){if(!this.props.onScroll||!this.verticalScrollRef.current&&!this.props.forceOnWheel)return;let t=this.props.scrollTop||0,o=t+e.deltaY;(o=o>=0?o:0)>t&&this.verticalScrollRef?.current&&(0,i.BL)(this.verticalScrollRef.current)&&(o=t),o!==this.props.scrollTop&&this.props.onScroll({clientHeight:this.props.height||0,clientWidth:this.props.width||0,scrollHeight:this.getAdjustedContentHeight(),scrollLeft:this.props.scrollLeft||0,scrollTop:o>=0?o:0,scrollWidth:this.props.contentWidth||0})}componentDidMount(){this.updateScrollbarValues(this.props.scrollLeft,this.props.scrollTop)}hasHorizontalScroll(){let{contentWidth:e,displayHorizontalScrollbar:t,forceHorizontalScrollbar:o,width:n}=this.props;return o||t&&n<e}hasVerticalScroll(){let{displayVerticalScrollbar:e,forceVerticalScrollbar:t,height:o}=this.props;return t||e&&o<this.getAdjustedContentHeight()}getHorizontalScrollbarTickness(){return parseInt(this.outerHorizontalScrollRef.current?.clientHeight,10)||0}getAdjustedContentHeight(){return this.props.contentHeight+this.getHorizontalScrollbarTickness()}adjustScrollWhileDragging(e){let t;let o=this.getAdjustedContentHeight();if(!this.scrollabbleContentRef.current||this.props.height>=o||!this.props.onScroll)return;let n=this.scrollabbleContentRef.current.getBoundingClientRect(),r=e.clientY-n.top,i=Math.abs(o-this.props.height);if(this.props.scrollTop>0&&r<=20){let e=this.props.scrollTop-20;t={clientHeight:n.height,clientWidth:n.width,scrollHeight:i,scrollLeft:this.props.scrollLeft||0,scrollTop:e>0?e:0,scrollWidth:this.props.contentWidth||0}}if(this.props.scrollTop<i&&r>=this.props.height-20){let e=this.props.scrollTop+20;t={clientHeight:n.height,clientWidth:n.width,scrollHeight:i,scrollLeft:this.props.scrollLeft||0,scrollTop:e<i?e:i,scrollWidth:this.props.contentWidth||0}}t&&this.props.onScroll(t)}render(){let{children:e,contentHeight:t,contentWidth:o,forceHorizontalScrollbar:n,forceVerticalScrollbar:i,height:s,width:a}=this.props,l=this.hasVerticalScroll(),c=this.hasHorizontalScroll(),d=c&&r().createElement("div",{className:"scrollbar-outer horizontal",ref:this.outerHorizontalScrollRef,style:{top:`calc(${s}px - var(--scrollable-scrollbar-thickness))`,width:a}},r().createElement("div",{className:"scrollbar-inner horizontal_scrollbar",onScroll:e=>this.onHorizontalScroll(e),ref:this.horizontalScrollRef,style:{overflowX:n?"scroll":"auto",width:l?`calc(${a}px - var(--scrollable-scrollbar-thickness))`:a}},r().createElement("div",{style:{height:"1px",width:o}}))),h=l&&r().createElement("div",{className:"scrollbar-outer vertical",style:{height:s}},r().createElement("div",{className:"scrollbar-inner vertical_scrollbar",onScroll:e=>this.onVerticalScroll(e),ref:this.verticalScrollRef,style:{overflowY:i?"scroll":"auto",height:c?`calc(${s}px - var(--scrollable-scrollbar-thickness))`:s}},r().createElement("div",{style:{height:`calc(${t}px + var(--scrollable-scrollbar-thickness))`,width:"1px"}})));return r().createElement("div",{className:"scrollbar-container",onWheelCapture:e=>this.onWheel(e)},r().createElement("div",{className:"scrollable-content",onDragOverCapture:e=>this.adjustScrollWhileDragging(e),ref:this.scrollabbleContentRef},e),d,h)}}var a=s},827:(e,t,o)=>{o.d(t,{Gu:()=>d,S7:()=>r,br:()=>s,ch:()=>l,kP:()=>a,lH:()=>i,o$:()=>n});let n="commit-node",r="merge-conflict-node",i="merge-node",s="unsupported-rebase-warning-node",a="stash-node",l="work-dir-changes";var c,d=((c=d||{}).RowEntry="rowEntry",c.Tooltip="tooltip",c)},8289:()=>{},376:(e,t,o)=>{o.d(t,{C:()=>r,i:()=>n});let n="--num-columns-supported",r={"--graph-row-height":"22px","--font-default":"'Open Sans', Arial, sans-serif !important","--font-monospace":"'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace","--font-size":"62.5%","--fs-1":"1rem","--fs-2":"1.2rem","--fs-3":"1.4rem","--fs-4":"1.6rem","--fs-5":"1.8rem","--fs-6":"2rem","--fs-7":"2.4rem","--button-xs-padding-y":".15rem","--button-xs-padding-x":".25rem","--button-small-padding-y":".25rem","--button-small-padding-x":".5rem","--button-medium-padding-y":".5rem","--button-medium-padding-x":".75rem","--button-large-padding-y":"1rem","--button-large-padding-x":"1.25rem","--button-radius":".2rem","--input-radius":"3px","--about-modal-bg-color":"#e2e4e9","--about-modal-width":"650px","--label__purple-color-f25":"rgba(197,23,182,0.25)","--registration-modal-width":"400px","--file-history-header-height":"35px","--shop-modal-width":"95vw","--shop-modal-height":"95vh","--scrollable-scrollbar-thickness":"14px","--mini-commit-col-left-width":"30px","--mini-commit-col-middle-padding":"6px","--mini-commit-col-right-width":"56px","--fuzzy-finder-repo-color":"rgba(46,206,157,0.1)","--fuzzy-finder-checkout-color":"rgba(6,105,247,0.1)","--fuzzy-finder-history-color":"rgba(197,23,182,0.1)","--handle-width":"7px","--shadow-color":"rgba(0,0,0,0.4)","--graph-color-5-f10":"rgba(205,1,1,0.1)","--graph-color-6-f10":"rgba(242,93,46,0.1)","--graph-color-7-f10":"rgba(242,202,51,0.1)","--graph-color-8-f10":"rgba(123,217,56,0.1)","--graph-color-9-f10":"rgba(46,206,157,0.1)","--graph-color-0-f10":"rgba(21,160,191,0.1)","--graph-color-1-f10":"rgba(6,105,247,0.1)","--graph-color-2-f10":"rgba(142,0,194,0.1)","--graph-color-3-f10":"rgba(197,23,182,0.1)","--graph-color-4-f10":"rgba(217,1,113,0.1)","--graph-color-5-f50":"rgba(205,1,1,0.5)","--graph-color-6-f50":"rgba(242,93,46,0.5)","--graph-color-7-f50":"rgba(242,202,51,0.5)","--graph-color-8-f50":"rgba(123,217,56,0.5)","--graph-color-9-f50":"rgba(46,206,157,0.5)","--graph-color-0-f50":"rgba(21,160,191,0.5)","--graph-color-1-f50":"rgba(6,105,247,0.5)","--graph-color-2-f50":"rgba(142,0,194,0.5)","--graph-color-3-f50":"rgba(197,23,182,0.5)","--graph-color-4-f50":"rgba(217,1,113,0.5)","--axo-orange":"#e75225","--axo-ink":"#141422","--axo-cream":"#f9efc1","--axo-yellow":"#d8c13a","--info-bar-height":"26px","--left-panel-header-height":"60px","--toolbar-height":"48px","--toolbar-border":"1px","--toolbar-item-height":"calc(var(--toolbar-height, 0px) - var(--toolbar-border, 1px))","--expand-detail-panel-transition":"flex-grow 250ms ease-in-out","--conflict-left-color":"rgba(21,160,191,0.25)","--conflict-right-color":"rgba(242,202,51,0.25)","--conflict-output-color":"rgba(197,23,182,0.25)","--graph-color-5-bg50":"#751012","--graph-color-6-bg50":"#873e29","--graph-color-7-bg50":"#87742b","--graph-color-8-bg50":"#4c7c2e","--graph-color-9-bg50":"#257660","--graph-color-0-bg50":"#195f71","--graph-color-1-bg50":"#11448d","--graph-color-2-bg50":"#550f73","--graph-color-3-bg50":"#711b6d","--graph-color-4-bg50":"#7b104a","--graph-color-5-bg45":"#6c1114","--graph-color-6-bg45":"#7c3a28","--graph-color-7-bg45":"#7c6b2a","--graph-color-8-bg45":"#47722c","--graph-color-9-bg45":"#246d5a","--graph-color-0-bg45":"#195969","--graph-color-1-bg45":"#124082","--graph-color-2-bg45":"#4f116b","--graph-color-3-bg45":"#681b65","--graph-color-4-bg45":"#711146","--graph-color-5-bg25":"#48171b","--graph-color-6-bg25":"#522e26","--graph-color-7-bg25":"#524927","--graph-color-8-bg25":"#344d28","--graph-color-9-bg25":"#214a42","--graph-color-0-bg25":"#1a3f4a","--graph-color-1-bg25":"#173158","--graph-color-2-bg25":"#39174b","--graph-color-3-bg25":"#461c48","--graph-color-4-bg25":"#4b1737","--graph-color-5-bg15":"#371a1e","--graph-color-6-bg15":"#3c2725","--graph-color-7-bg15":"#3c3825","--graph-color-8-bg15":"#2a3a26","--graph-color-9-bg15":"#1f3835","--graph-color-0-bg15":"#1b323a","--graph-color-1-bg15":"#192943","--graph-color-2-bg15":"#2d1a3b","--graph-color-3-bg15":"#351d39","--graph-color-4-bg15":"#381a2f","--semi-bold":"500","--bold":"600","--num-columns-supported":"10","--column-0-color":"#15a0bf","--column-1-color":"#0669f7","--column-2-color":"#8e00c2","--column-3-color":"#c517b6","--column-4-color":"#d90171","--column-5-color":"#cd0101","--column-6-color":"#f25d2e","--column-7-color":"#f2ca33","--column-8-color":"#7bd938","--column-9-color":"#2ece9d","--red":"#D9413D","--orange":"#DE9B43","--yellow":"#ECB91C","--green":"#5CB85C","--blue":"#4D88FF","--ltblue":"#5bc0de","--app__bg0":"#1C1E23","--toolbar__bg0":"rgb(42,45,52)","--toolbar__bg1":"rgb(51,55,63)","--toolbar__bg2":"rgb(65,70,80)","--panel__bg0":"rgb(39,42,49)","--panel__bg1":"rgb(50,54,63)","--panel__bg2":"rgb(61,66,77)","--input__bg":"rgba(0,0,0,0.2)","--input-bg-warn-color":"rgba(222,155,67,0.6)","--panel-border":"rgb(19,20,24)","--section-border":"rgba(255,255,255,0.08)","--subtle-border":"rgba(255,255,255,0.04)","--modal-overlay-color":"rgba(0,0,0,.5)","--graph-color-0":"#15a0bf","--graph-color-1":"#0669f7","--graph-color-2":"#8e00c2","--graph-color-3":"#c517b6","--graph-color-4":"#d90171","--graph-color-5":"#cd0101","--graph-color-6":"#f25d2e","--graph-color-7":"#f2ca33","--graph-color-8":"#7bd938","--graph-color-9":"#2ece9d","--text-selected":"#FFFFFF","--text-selected-row":"#FFFFFF","--text-dimmed":"rgba(255,255,255,0.2)","--text-dimmed-selected":"rgba(255,255,255,0.5)","--text-normal":"rgba(255,255,255,0.75)","--text-secondary":"rgba(255,255,255,0.6)","--text-disabled":"rgba(255,255,255,0.4)","--text-accent":"#93A9EC","--text-inverse":"#222222","--text-bright":"#FFFFFF","--btn-text":"rgba(255,255,255,0.75)","--btn-text-hover":"#FFFFFF","--default-border":"rgba(255,255,255,0.75)","--default-bg":"transparent","--default-hover":"transparent","--default-border-hover":"#FFFFFF","--primary-border":"#4D88FF","--primary-bg":"rgba(77,136,255,0.2)","--primary-hover":"rgba(77,136,255,0.6)","--success-border":"#5CB85C","--success-bg":"rgba(92,184,92,0.2)","--success-hover":"rgba(92,184,92,0.6)","--warning-border":"#DE9B43","--warning-bg":"rgba(222,155,67,0.2)","--warning-hover":"rgba(222,155,67,0.6)","--danger-border":"#D9413D","--danger-bg":"rgba(217,65,61,0.2)","--danger-hover":"rgba(217,65,61,0.6)","--hover-row":"rgba(77,136,255,0.1)","--hover-row-border":"none","--danger-row":"rgba(217,65,61,0.6)","--selected-row":"rgba(77,136,255,0.2)","--selected-row-border":"none","--warning-row":"rgba(222,155,67,0.6)","--droppable":"rgba(236,185,28,0.3)","--drop-target":"rgba(92,184,92,0.5)","--input--disabled":"rgba(0,0,0,0.1)","--link-color":"#40c5ec","--link-color-bright":"#40c5ec","--form-control-focus":"#4D88FF","--scroll-thumb-border":"#1C1E23","--scroll-thumb-bg":"rgb(65,70,80)","--scroll-thumb-bg-light":"rgb(111,119,136)","--wip-status":"rgba(77,136,255,0.4)","--card__bg":"rgb(61,66,77)","--card-shadow":"rgba(0,0,0,.2)","--statusbar__warning-bg":"#87742b","--label__yellow-color":"#f2ca33","--label__light-blue-color":"#15a0bf","--label__purple-color":"#c517b6","--filtering":"rgba(77,136,255,0.5)","--soloing":"rgba(222,155,67,0.5)","--checked-out":"rgba(92,184,92,0.3)","--soloed":"rgba(222,155,67,0.3)","--filter-match":"rgba(77,136,255,0.5)","--clone__progress":"rgba(77,136,255,0.7)","--toolbar__prompt":"rgba(77,136,255,0.2)","--verified":"rgba(92,184,92,0.3)","--unverified":"rgba(255,255,255,0.1)","--drop-sort-border":"#5CB85C","--terminal__repo-name-color":"turquoise","--terminal__repo-branch-color":"violet","--terminal__repo-tag-color":"lightcoral","--terminal__repo-upstream-color":"yellowgreen","--terminal__background":"#000000","--terminal__cursor":"#FFFFFF","--terminal__cursorAccent":"#000000","--terminal__foreground":"#FFFFFF","--terminal__selection":"#304676","--terminal__black":"#000000","--terminal__red":"#F24A4A","--terminal__green":"#0DBC79","--terminal__yellow":"#E5E510","--terminal__blue":"#4A98EE","--terminal__magenta":"#E063E0","--terminal__cyan":"#11A8CD","--terminal__white":"#E5E5E5","--terminal__brightBlack":"#686868","--terminal__brightRed":"#FF5656","--terminal__brightGreen":"#23D18B","--terminal__brightYellow":"#F5F543","--terminal__brightBlue":"#51A4FF","--terminal__brightMagenta":"#D670D6","--terminal__brightCyan":"#29B8DB","--terminal__brightWhite":"#E5E5E5","--code-bg":"#1C1E23","--code-foreground":"rgba(255,255,255,0.75)","--code-blame-color-0":"#15a0bf","--code-blame-color-1":"#0669f7","--code-blame-color-2":"#8e00c2","--code-blame-color-3":"#c517b6","--code-blame-color-4":"#d90171","--code-blame-color-5":"#cd0101","--code-blame-color-6":"#f25d2e","--code-blame-color-7":"#f2ca33","--code-blame-color-8":"#7bd938","--code-blame-color-9":"#2ece9d","--added-line":"rgba(92,184,92,0.2)","--deleted-line":"rgba(217,65,61,0.2)","--modified-line":"rgba(0,0,0,0.25)","--conflict-info-color":"#15a0bf","--conflict-left-border-color":"#15a0bf","--conflict-right-border-color":"#f2ca33","--conflict-output-border-color":"#c517b6","--scroll-marker-head-color":"#16c216","--scroll-marker-highlights-color":"#e6e62b","--scroll-marker-local-branches-color":"#ffa500","--scroll-marker-remote-branches-color":"#ffd68b","--scroll-marker-selection-color":"#0821ff","--scroll-marker-stashes-color":"#fb94ff","--scroll-marker-tags-color":"#affcff","--scroll-marker-upstream-color":"#9bff9b","--stats-added-color":"#347d39","--stats-deleted-color":"#c93c37","--stats-files-color":"#e2c08d","--stats-bar-border-radius":"3px","--stats-bar-height":"40%"}},7675:(e,t,o)=>{o.d(t,{Ld:()=>i,M:()=>s,a2:()=>r});var n=o(376);function r(e){return`--column-${e}-color`}function i(e={}){let t={};return Object.keys(e).forEach(o=>{o.includes("--graph-color-")||o.match(/^--column-\d+-color$/)?CSS.supports("color",e[o])&&(t[o]=e[o]):t[o]=e[o]}),function(e={}){return{...n.C,...e}}(t)}function s(e){let t=e||n.C,o="";for(let e of(o+=".gk-graph {\n",Object.keys(t)))o+=`${e}: ${t[e]};
`;return o+"}\n"}},2149:()=>{},3308:(e,t,o)=>{o.d(t,{$0:()=>s,$s:()=>d,An:()=>h,B:()=>P,B8:()=>k,GF:()=>ei,Gn:()=>et,IX:()=>q,It:()=>x,KE:()=>er,LG:()=>y,MQ:()=>X,NP:()=>f,O5:()=>m,OR:()=>ew,Oi:()=>G,P3:()=>p,PB:()=>D,PL:()=>es,QW:()=>F,Qh:()=>em,RG:()=>ep,R_:()=>eC,Rg:()=>A,SZ:()=>W,Um:()=>eu,VB:()=>K,Vh:()=>N,WD:()=>el,Wm:()=>en,Wu:()=>g,X9:()=>V,Y8:()=>w,YJ:()=>ey,aV:()=>j,ai:()=>eb,am:()=>$,at:()=>u,av:()=>ea,b4:()=>ee,cZ:()=>a,dF:()=>r,dH:()=>Y,d_:()=>ef,eq:()=>v,iq:()=>n,jZ:()=>eo,j_:()=>E,jg:()=>_,jn:()=>b,l3:()=>c,lG:()=>T,m8:()=>C,mt:()=>z,mu:()=>J,os:()=>Q,pj:()=>O,q1:()=>S,qG:()=>l,qi:()=>ev,rl:()=>i,uK:()=>eg,v1:()=>L,v6:()=>H,wd:()=>Z,wi:()=>U,wy:()=>I,xI:()=>R,yv:()=>M,ze:()=>B});let n="#199489",r=3,i=26,s=28,a=22,l=1400,c=.5,d=3,h=3,u=28,p=22,f=3,m=11,g=56,b=56,v=32,y=22,w=18,C=55,S=50,x="short+short",_=55,R=50,T=50,k=50,E=55,O=18,I=32,M=2,D=6,A=14,$=5,P=19,N=10,z=55,H=100,L=50,F=10,W=25,G=58,B=22,U=2,V={dark:1,light:.5},j=10,Z=12,q=6,K=3,Y=12,Q="auto",X="center",J=7,ee=4,et="timelineMessage",eo="ref",en="graph",er="message",ei="author",es="datetime",ea="sha",el="changes";var ec,ed,eh,eu=((ec=eu||{}).Compact="compact",ec.Rich="rich",ec.Text="text",ec),ep=((ed=ep||{}).Block="block",ed.FullLine="fullLine",ed.ThinLine="thinLine",ed);let ef={block:{type:"block",baseHeight:1*s,minHeight:5,maxHeight:20},fullLine:{type:"fullLine",baseHeight:.5*s,minHeight:2,maxHeight:4},thinLine:{type:"thinLine",baseHeight:.25*s,minHeight:1,maxHeight:2}},em={stashes:{type:"stashes",colorCssKey:"--color-graph-scroll-marker-stashes",lanes:[0],shape:"block"},tags:{type:"tags",colorCssKey:"--color-graph-scroll-marker-tags",lanes:[2],shape:"block"},remoteBranches:{type:"remoteBranches",colorCssKey:"--color-graph-scroll-marker-remote-branches",lanes:[2],shape:"block"},localBranches:{type:"localBranches",colorCssKey:"--color-graph-scroll-marker-local-branches",lanes:[0],shape:"block"},highlights:{type:"highlights",colorCssKey:"--color-graph-scroll-marker-highlights",lanes:[1],shape:"block"},upstream:{type:"upstream",colorCssKey:"--color-graph-scroll-marker-upstream",lanes:[1,2],shape:"block"},head:{type:"head",colorCssKey:"--scroll-marker-head-color",lanes:[0,1],shape:"block"},selection:{type:"selection",colorCssKey:"--color-graph-scroll-marker-selection",lanes:[0,1,2],shape:"fullLine"}},eg=10,eb=6,ev={[ei]:{headerLabelUntranslated:"GraphHeader-CommitAuthor",isCustomizable:!0,listId:"commit-author-zone",minimumWidth:v,showIconWidth:C},[es]:{headerLabelUntranslated:"GraphHeader-CommitDateTime",isCustomizable:!0,listId:"commit-date-time-zone",minimumWidth:S,showIconWidth:_},[er]:{headerLabelUntranslated:"GraphHeader-CommitMessage",isCustomizable:!0,listId:"commit-message-zone",minimumWidth:k,showIconWidth:E},[ea]:{headerLabelUntranslated:"GraphHeader-CommitSha",isCustomizable:!0,listId:"commit-sha-zone",minimumWidth:R,showIconWidth:T},[en]:{headerLabelUntranslated:"GraphHeader-CommitGraph",isCustomizable:!0,listId:"commit-zone",minimumWidth:g,showIconWidth:b},[eo]:{headerLabelUntranslated:"GraphHeader-BranchTag",isCustomizable:!0,listId:"ref-zone",minimumWidth:I,showIconWidth:z},[el]:{headerLabelUntranslated:"GraphHeader-Changes",isCustomizable:!0,listId:"changes-zone",minimumWidth:L,showIconWidth:G}},ey={hour:23,day:6,week:4,month:11,year:6},ew={added:0,deleted:0,modified:0};var eC=((eh=eC||{}).ALWAYS="ALWAYS",eh.ON_HOVER="ON_HOVER",eh.NEVER="NEVER",eh)},5191:(e,t,o)=>{o.d(t,{BL:()=>u,C_:()=>I,DN:()=>z,Dj:()=>j,Ez:()=>$,H1:()=>H,Jp:()=>k,Jq:()=>R,KI:()=>E,Kk:()=>L,L1:()=>f,Ne:()=>O,P2:()=>h,PY:()=>W,Ry:()=>G,SH:()=>x,Xq:()=>_,Yv:()=>V,Zg:()=>C,bY:()=>b,eR:()=>A,h:()=>d,iM:()=>S,mb:()=>D,nv:()=>w,q3:()=>p,qP:()=>v,sH:()=>B,tC:()=>y,uM:()=>P,uV:()=>m,wE:()=>T,yF:()=>g,zv:()=>M});var n=o(4561),r=o(827),i=o(7675),s=o(8649),a=o(3308),l=o(9453),c=o(466);let d=e=>{let t;return(...o)=>{t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{e(...o)})}},h=(e,t,o)=>{let n,r,i=!1,s=t;return(...a)=>{void 0!==o&&(r=(new Date).getTime(),s=!n||r-n>s+o?o:t),i||(e(...a),n=(new Date).getTime(),i=!0,setTimeout(()=>{i=!1},s))}};function u(e){return 1>Math.abs(e.scrollHeight-e.scrollTop-e.clientHeight)}function p(e){return e?"string"==typeof e?e:JSON.stringify(e):null}function f(e){let{length:t}=e;if(0===t)return{min:0,max:0};if(1===t)return{min:0,max:e[0]};e.sort((e,t)=>e-t);let o=e[0],n=e[Math.floor(.25*t)],r=e[Math.floor(.5*t)],i=e[Math.floor(.75*t)],s=e[t-1],a=i-n;return{min:Math.max(o,r-1.5*a),max:Math.min(s,r+1.5*a)}}function m(e,t,o,n){let{id:r}=e;return!r||null===t||null===t?.[r]||n&&null===t?.[r]?.[n]?null:t&&r in t?n&&!t[r]?.[n]?(o(r,[n]),null):n?t?.[r]?.[n]:t?.[r]:(o(r,l.AI),null)}function g(){let e;let t=new Date,o={hour:[],day:[],week:[],month:[],year:[]};for(e=1;e<=a.YJ.hour;e+=1)o.hour.push({date:t.getTime()-36e5*e,label:1===e?"Timeline-1HourAgo":"Timeline-NHoursAgo",timeUnit:"hour",value:e});for(e=1;e<=a.YJ.day;e+=1)o.day.push({date:t.getTime()-864e5*e,label:1===e?"Timeline-Yesterday":"Timeline-NDaysAgo",timeUnit:"day",value:e});for(e=1;e<=a.YJ.week;e+=1)o.week.push({date:t.getTime()-6048e5*e,label:1===e?"Timeline-1WeekAgo":"Timeline-NWeeksAgo",timeUnit:"week",value:e});let n=new Date;for(n.setHours(0,0,0,0),e=1;e<=a.YJ.month;e+=1)n.setMonth(n.getMonth()-1),n.setHours(0,0,0,0),o.month.push({date:n.getTime(),label:1===e?"Timeline-1MonthAgo":"Timeline-NMonthsAgo",timeUnit:"month",value:e});let r=new Date;for(r.setHours(0,0,0,0),e=1;e<=a.YJ.year;e+=1){let t;switch(r.setFullYear(r.getFullYear()-1),r.setHours(0,0,0,0),e){case 1:t="Timeline-1YearAgo";break;case a.YJ.year:t="Timeline-NPlusYearsAgo";break;default:t="Timeline-NYearsAgo"}o.year.push({date:r.getTime(),label:t,timeUnit:"year",value:e})}return o}function b(e,t){if(t.id)return t.id;let o=t.owner||"";return e===s.V.REMOTE?`${e}/${o}/${t.name}`:`${e}/${t.name}`}function v(e){return b(e.refType,e)}function y(e,t=0){for(let o=e.length-1;o>=t;o-=1){let t=e[o];if(t.currentWidth>t.minimumWidth)return t}}function w(e,t=0){if(e.length){for(let o=t;o<e.length;o+=1){let t=e[o],n=t.maximumWidth?Math.min(t.maximumWidth,t.preferredWidth||1/0):t.preferredWidth;if(n&&t.currentWidth<n)return t}return e[e.length-1]}}function C(e,t=!1){let o="--scrollable-scrollbar-thickness",n=t||!e[o]?(0,i.Ld)(e):e,r=n[o]?parseInt(n[o],10):0;return Number.isNaN(r)?0:r}function S(e,t){let o=0;for(let n of e)t&&n.type===t||(o+=n.currentWidth);return o}let x=(e,t)=>e===t[t.length-1].type;function _(e,t,o){return t||o||0===e}function R(e,t,o){return e+(_(e,t,o)?1:0)}function T(e,t,o){let n=R(e,t,o);return a.$0*n}function k(e,t){return e.type===a.Wm&&t>0?e.contentWidth||0:e.currentWidth}function E(e,t,o,n,r){var i;let s=M(e,t);return s&&(i=o.length,s.currentWidth<k(s,i))?C(n,r):0}function O(e,t,o,n,r,i,s,a,l){let c=M(e,t);return c?!function(e,t,o,n,r,i,s){let a=T(i,o,n);return x(e.type,t)&&(r<a||s)}(c,t,o,n,r,i.length,s)?0:C(a,l):0}function I(e,t,o){return(0,n.u)(o,e.minimumWidth||0,e.maximumWidth&&!x(e.type,t)?e.maximumWidth||0:Number.MAX_VALUE)}function M(e,t){return t.find(({type:t})=>t===e)}function D(e,t){return t.findIndex(({type:t})=>t===e)}function A(e,t,o){let n=0,r=0,i=D(e,t);if(i>-1){let e=function(e,t=0){let o=0;for(let n=t;n<e.length;n+=1)o+=e[n].minimumWidth;return o}(t,i+1),s=function(e,t=e.length-1){let o=0;for(let n=0;n<=t;n+=1)o+=e[n].currentWidth;return o}(t,i-1),a=t[i].maximumWidth||Number.MAX_VALUE;n=t[i].minimumWidth,r=Math.min(a,o-e-s)}return{min:n,max:r}}function $(e){let t=!!e&&e===a.Um.Compact,o=t?1:2,n=t?10:28,r=t?1:3,i=t?1:3,s=t?10:22,l=t?s:a.P3,c=t?s:s/2+1;return{COMMIT_ZONE_LINE_WIDTH:o,COMMIT_ZONE_GUTTER_WIDTH:n,COMMIT_ZONE_PADDING_LEFT:r,COMMIT_ZONE_PADDING_RIGHT:i,COMMIT_COLUMN_WIDTH:s,COMMIT_NODE_DIAMETER:l,COMMIT_MERGE_NODE_DIAMETER:c,COMMIT_NODE_TOP_OFFSET:.5*a.P3-.5*l,COMMIT_MERGE_NODE_LEFT_OFFSET:s/2-c/2,COMMIT_MERGE_NODE_TOP_OFFSET:.5*a.P3-.5*c,COMMIT_ZONE_AVATAR_DIAMETER:l-2*o,COMMIT_ZONE_VIEWPORT_WIDTH_MIN:l+r+i+n,COMMIT_ZONE_SHOW_ICON_WIDTH:t?45:56,IS_COMPACT:t,RADIUS_DIFF_MERGE_NODE_COMMIT_NODE:l/2-c/2}}let P=e=>t=>t===e.length?"SHOW_MORE_COMMITS":e[t].sha;function N(e){return e instanceof c.A?!!e.refsData?.activeGraphRef:!!e?.heads&&e.heads.some(e=>U(e))}function z(e){let t=e.find(N);return t?.sha||void 0}function H(e){return[r.S7,r.br,r.ch].includes(e)}function L(e){return!!e&&Object.values(e).some(e=>e>0)}function F(e){return 1===Object.keys(e).length}function W(e,t){return!0===e[t]&&F(e)}function G(e,t,o,n){if(n<0)return a.os;let r=e+2,i=n*e;return i>=o-r&&i<o+t+r?a.os:a.MQ}function B(e){switch(e){case a.Wm:return"graph";case a.jZ:return"branch";case a.KE:return"message";case a.GF:return"author";case a.PL:return"datetime";case a.av:return"commit";case a.WD:return"changes";default:return""}}function U(e){return e.isCurrentHead}function V(e){return e.refType===s.V.HEAD&&U(e)}class j{props;constructor(e){this.props=e}getActiveGraphZone(e){let t=M(e,this.props.graphZones);return!t||t.isHidden?void 0:t}getGraphRefGroupsByNameForRow(e){let t=this.getRow(e);return t&&t.refsData?.orderedRefGroups||[]}getRow(e){if(!(e<0||e>this.props.processedRows.length-1))return this.props.processedRows[e]}getZoneWidth(e,t=!0){var o;let n=t?this.getVerticalScrollWidth(e):0;return o=this.props.graphZones,(M(e,o)?.currentWidth||a.qi[e].minimumWidth)-n}isDateTimeZoneActive(){return!!this.getActiveGraphZone(a.PL)}isFirstRow(e){return 0===e}isColumnFollowingGraphColumn(e){return((e,t)=>{let o=D(e,t),n=D(a.Wm,t);return -1!==o&&-1!==n&&o-n==1})(e,this.props.graphZones)}isHighlighted(e){if(this.props.processedRows[e]&&this.props.highlightedShas){let t=this.props.processedRows[e]?.sha;return this.props.highlightedShas[t]||!1}return!1}isHovering(e){return!(!this.props.isContainerWindowFocused||!this.props.processedRows[e])&&this.props.currentlyHoveredCommitSha===this.props.processedRows[e]?.sha}isLastColumn(e){return x(e,this.props.graphZones)}getSelectedRefGroupByName(){if(F(this.props.isSelectedBySha)){let e=Object.keys(this.props.isSelectedBySha),t=this.props.processedGraphRowBySha[e[0]];if(t)return t.refsData?.orderedRefGroups||[]}return[]}getHorizontalScrollHeight(e){return E(e,this.props.graphZones,this.props.processedRows,this.props.cssVariables)}getVerticalScrollWidth(e){return O(e,this.props.graphZones,this.props.hasMoreCommits,this.props.isLoadingRows,this.props.height,this.props.processedRows,this.props.enabledScrollMarkerTypes.length>0,this.props.cssVariables)}isMissingHoveredRefGroup(e){if(!this.props.isContainerWindowFocused||this.props.highlightedShas)return!1;let t=this.getRow(e);if(!t)return!1;let o=[];if(this.props.dimRowsOfSelectedCommit){let e=this.getSelectedRefGroupByName();if(!e.length)return!1;o=e[0]}else{let{hoveredRefGroup:e}=this.props;if(!e?.length)return!1;o=e}let{name:n,refType:r}=o[0],i=r===s.V.TAG,a=t.tags.length>0&&!t.heads.length&&!t.remotes.length,{heads:l,tags:c,remotes:d}=t.hasRefs&&(!a||i)?t:t.childRefs;return!l.length&&!d.length&&!c.length||!l.some(e=>e.name===n&&o.some(e=>e.refType===s.V.HEAD))&&!d.some(e=>e.name===n&&o.some(t=>t.refType===s.V.REMOTE&&t.owner===e.owner))&&!c.some(e=>e.name===n&&o.some(e=>e.refType===s.V.TAG))}isSelected(e){let t=this.getRow(e)?.sha;return!!t&&!0===this.props.isSelectedBySha[t]}isSingleSelected(e){let t=this.getRow(e)?.sha;return!!t&&W(this.props.isSelectedBySha,t)}hasTimeline(e){return!!this.props.processedRows[e]?.timeLineEntry&&!this.isDateTimeZoneActive()&&!this.isFirstRow(e)}rowContainsCurrentHeadRef(e){return N(e)}}},9453:(e,t,o)=>{o.d(t,{$M:()=>i,AI:()=>s,mQ:()=>n,uq:()=>r});let n="pullRequest",r="upstream",i="issue",s=[n,r,i]},466:(e,t,o)=>{o.d(t,{A:()=>i});var n=o(8649),r=o(5191);class i{_graph;_message;_heads;_remotes;_tags;_activeGraphRef;_activeGraphRefGroup;_refGroupsByName;_orderedRefGroups;sha;parents;author;email;date;type;contexts;rowIndex;column;edgeColumnMaxes;edges;childRefs;timeLineEntry;summary;body;displayMessage;displaySummary;displayBody;set message(e){this._message!==e&&(this._message=e,this.displayMessage=this._graph.formatCommitMessageCallback(e),this.updateSummaryAndBody(e))}get message(){return this._message}get heads(){return this._heads}set heads(e){this._heads!==e&&(this._heads=e,this.initializeRefGroups())}set remotes(e){this._remotes!==e&&(this._remotes=e,this.initializeRefGroups())}get remotes(){return this._remotes}set tags(e){this._tags!==e&&(this._tags=e,this.initializeRefGroups())}get tags(){return this._tags}get hasRefs(){return this.heads.length>0||this.remotes.length>0||this.tags.length>0}get hasChildRefs(){return this.childRefs.heads.length>0||this.childRefs.remotes.length>0||this.childRefs.tags.length>0}get refsData(){if(this.hasRefs||this.hasChildRefs)return 0===this._orderedRefGroups.length&&this.loadGraphRefGroupsData(),{activeGraphRef:this._activeGraphRef,activeGraphRefGroup:this._activeGraphRefGroup,orderedRefGroups:this._orderedRefGroups,refGroupsByName:this._refGroupsByName}}constructor(e,t,o,n,r,i,s){this._graph=e,this._heads=t.heads||[],this._remotes=t.remotes||[],this._tags=t.tags||[],this._message=t.message,this.sha=t.sha,this.parents=t.parents,this.author=t.author,this.email=t.email,this.date=t.date,this.type=t.type,this.contexts=t.contexts,this.column=o||0,this.edgeColumnMaxes=n||0,this.edges=r||{},this.childRefs=i||{heads:[],tags:[],remotes:[]},this.timeLineEntry=s,this.initializeRefGroups(),this.updateSummaryAndBody(t.message)}updateSummaryAndBody(e){let t,o=e?e.trim():"",n=o.indexOf("\n");-1!==n&&(t=o.substring(n+1).trim().replace(/\n+(?:\s+\n+)?/g," | "),o=o.substring(0,n)),this.body=t,this.summary=o,this.displaySummary=this._graph.formatCommitMessageCallback(o),this.displayBody=t?this._graph.formatCommitMessageCallback(t):void 0}initializeRefGroups(){this._activeGraphRefGroup=void 0,this._activeGraphRef=void 0,this._refGroupsByName={},this._orderedRefGroups=[]}addRefToRefGroup(e){let t=e.name;this._refGroupsByName[t]||(this._refGroupsByName[t]=[]),this._refGroupsByName[t].push(e)}loadGraphRefGroupsData(){this.initializeRefGroups();let e=[],{heads:t,tags:o,remotes:i}=this.hasRefs?this:this.childRefs;for(let o of t){let t={...o,refType:n.V.HEAD};this.addRefToRefGroup(t),(0,r.Yv)(t)?(this._activeGraphRefGroup=this._refGroupsByName[t.name],this._activeGraphRef=t,e.unshift(this._refGroupsByName[t.name])):e.push(this._refGroupsByName[t.name])}for(let t of i){let o={...t,fullName:t.owner?`${t.owner}/${t.name}`:t.name,refType:n.V.REMOTE},r=this._refGroupsByName[o.name];this.addRefToRefGroup(o),r||e.push(this._refGroupsByName[o.name])}for(let t of o){let o={...t,refType:n.V.TAG};this.addRefToRefGroup(o),e.push(this._refGroupsByName[o.name])}this._orderedRefGroups=e.sort((e,t)=>e===this._activeGraphRefGroup?-1:t===this._activeGraphRefGroup?1:e.length>t.length?-1:e.length<t.length?1:e[0].name.localeCompare(t[0].name))}}},7334:(e,t,o)=>{function n(e){switch(e){case"github":return"GitHub";case"githubEnterprise":return"GitHub Enterprise";case"gitlab":return"GitLab";case"gitlabSelfHosted":return"GitLab Self-Hosted";case"azureDevops":return"Azure DevOps";case"bitbucket":return"Bitbucket";case"bitbucketServer":return"Bitbucket Server";default:return e}}o.d(t,{y:()=>n})},8649:(e,t,o)=>{o.d(t,{V:()=>n});let n={HEAD:"head",REMOTE:"remote",TAG:"tag"}},664:()=>{},6756:()=>{},4561:(e,t,o)=>{function n(e,t,o){return(e=e<=o?e:o)>=t?e:t}o.d(t,{u:()=>n})},3316:e=>{function t(e,t,o,n){var r=null==n||"number"==typeof n||"boolean"==typeof n?n:o(n),i=t.get(r);return void 0===i&&(i=e.call(this,n),t.set(r,i)),i}function o(e,t,o){var n=Array.prototype.slice.call(arguments,3),r=o(n),i=t.get(r);return void 0===i&&(i=e.apply(this,n),t.set(r,i)),i}function n(){return JSON.stringify(arguments)}function r(){this.cache=Object.create(null)}r.prototype.has=function(e){return e in this.cache},r.prototype.get=function(e){return this.cache[e]},r.prototype.set=function(e,t){this.cache[e]=t};var i={create:function(){return new r}};e.exports=function(e,r){var s=r&&r.cache?r.cache:i,a=r&&r.serializer?r.serializer:n;return(r&&r.strategy?r.strategy:function(e,n){var r,i,s;return r=1===e.length?t:o,i=n.cache.create(),s=n.serializer,r.bind(this,e,i,s)})(e,{cache:s,serializer:a})},e.exports.strategies={variadic:function(e,t){var n,r;return n=t.cache.create(),r=t.serializer,o.bind(this,e,n,r)},monadic:function(e,o){var n,r;return n=o.cache.create(),r=o.serializer,t.bind(this,e,n,r)}}},1143:e=>{e.exports=function(e,t,o,n,r,i,s,a){if(!e){var l;if(void 0===t)l=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[o,n,r,i,s,a],d=0;(l=Error(t.replace(/%s/g,function(){return c[d++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},621:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=s(o(6689)),i=s(o(2613));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)(function(e,t,o,i,s){var a=e[t],l=void 0===a?"undefined":n(a);return r.default.isValidElement(a)?Error("Invalid "+i+" `"+s+"` of type ReactElement supplied to `"+o+"`, expected a ReactComponent or a DOMElement. You can usually obtain a ReactComponent or DOMElement from a ReactElement by attaching a ref to it."):"object"===l&&"function"==typeof a.render||1===a.nodeType?null:Error("Invalid "+i+" `"+s+"` of value `"+a+"` supplied to `"+o+"`, expected a ReactComponent or a DOMElement.")}),e.exports=t.default},8853:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=s(o(6689)),r=o(9864),i=s(o(2613));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)(function(e,t,o,i,s){var a=e[t];return n.default.isValidElement(a)?Error("Invalid "+i+" `"+s+"` of type ReactElement supplied to `"+o+"`,expected an element type (a string , component class, or function component)."):(0,r.isValidElementType)(a)?null:Error("Invalid "+i+" `"+s+"` of value `"+a+"` supplied to `"+o+"`, expected an element type (a string , component class, or function component).")}),e.exports=t.default},5638:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,o,n,r,i){if(null==t[o])return Error("The "+r+" `"+(i||o)+"` is required to make `"+(n||"<<anonymous>>")+"` accessible for users of assistive technologies such as screen readers.");for(var s=arguments.length,a=Array(s>5?s-5:0),l=5;l<s;l++)a[l-5]=arguments[l];return e.apply(void 0,[t,o,n,r,i].concat(a))}},e.exports=t.default},2613:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,o,n,r,i,s){var a=r||"<<anonymous>>",l=s||n;if(null==o[n])return t?Error("Required "+i+" `"+l+"` was not specified in `"+a+"`."):null;for(var c=arguments.length,d=Array(c>6?c-6:0),h=6;h<c;h++)d[h-6]=arguments[h];return e.apply(void 0,[o,n,a,i,l].concat(d))}var o=t.bind(null,!1);return o.isRequired=t.bind(null,!0),o},e.exports=t.default},2703:(e,t,o)=>{var n=o(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,o,r,i,s){if(s!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return o.PropTypes=o,o}},5697:(e,t,o)=>{e.exports=o(2703)()},414:e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},977:(e,t,o)=>{var n=o(7137),r=o(2584);e.exports=function(){return n.apply(this,r(arguments)).on("cloned",function(t){e(t),r(t.getElementsByTagName("*")).forEach(e)});function e(e){e.removeAttribute("data-reactid")}}},9921:(e,t)=>{var o="function"==typeof Symbol&&Symbol.for,n=o?Symbol.for("react.element"):60103,r=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,c=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.async_mode"):60111,h=o?Symbol.for("react.concurrent_mode"):60111,u=o?Symbol.for("react.forward_ref"):60112,p=o?Symbol.for("react.suspense"):60113,f=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116,b=o?Symbol.for("react.block"):60121,v=o?Symbol.for("react.fundamental"):60117,y=o?Symbol.for("react.responder"):60118,w=o?Symbol.for("react.scope"):60119;function C(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case d:case h:case i:case a:case s:case p:return e;default:switch(e=e&&e.$$typeof){case c:case u:case g:case m:case l:return e;default:return t}}case r:return t}}}function S(e){return C(e)===h}t.AsyncMode=d,t.ConcurrentMode=h,t.ContextConsumer=c,t.ContextProvider=l,t.Element=n,t.ForwardRef=u,t.Fragment=i,t.Lazy=g,t.Memo=m,t.Portal=r,t.Profiler=a,t.StrictMode=s,t.Suspense=p,t.isAsyncMode=function(e){return S(e)||C(e)===d},t.isConcurrentMode=S,t.isContextConsumer=function(e){return C(e)===c},t.isContextProvider=function(e){return C(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return C(e)===u},t.isFragment=function(e){return C(e)===i},t.isLazy=function(e){return C(e)===g},t.isMemo=function(e){return C(e)===m},t.isPortal=function(e){return C(e)===r},t.isProfiler=function(e){return C(e)===a},t.isStrictMode=function(e){return C(e)===s},t.isSuspense=function(e){return C(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===h||e===a||e===s||e===p||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===u||e.$$typeof===v||e.$$typeof===y||e.$$typeof===w||e.$$typeof===b)},t.typeOf=C},9864:(e,t,o)=>{e.exports=o(9921)},6871:(e,t,o)=>{function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){this.setState((function(t){var o=this.constructor.getDerivedStateFromProps(e,t);return null!=o?o:null}).bind(this))}function i(e,t){try{var o=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,n)}finally{this.props=o,this.state=n}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,s=null,a=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?a="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==o||null!==s||null!==a)throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+(e.displayName||e.name)+" uses "+("function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()")+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==s?"\n  "+s:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=r),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var l=t.componentDidUpdate;t.componentDidUpdate=function(e,t,o){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:o;l.call(this,e,t,n)}}return e}o.r(t),o.d(t,{polyfill:()=>s}),n.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},7281:(e,t,o)=>{t.__esModule=!0;var n=c(o(5697)),r=c(o(621)),i=c(o(6689)),s=c(o(6405)),a=c(o(3464)),l=c(o(290));function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}var h=function(e){function t(){var o,n;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,c=Array(r),h=0;h<r;h++)c[h]=arguments[h];return o=n=d(this,e.call.apply(e,[this].concat(c))),n._mountOverlayTarget=function(){n._overlayTarget||(n._overlayTarget=document.createElement("div"),n._portalContainerNode=(0,a.default)(n.props.container,(0,l.default)(n).body),n._portalContainerNode.appendChild(n._overlayTarget))},n._unmountOverlayTarget=function(){n._overlayTarget&&(n._portalContainerNode.removeChild(n._overlayTarget),n._overlayTarget=null),n._portalContainerNode=null},n._renderOverlay=function(){var e=n.props.children?i.default.Children.only(n.props.children):null;if(null!==e){n._mountOverlayTarget();var t=!n._overlayInstance;n._overlayInstance=s.default.unstable_renderSubtreeIntoContainer(n,e,n._overlayTarget,function(){t&&n.props.onRendered&&n.props.onRendered()})}else n._unrenderOverlay(),n._unmountOverlayTarget()},n._unrenderOverlay=function(){n._overlayTarget&&(s.default.unmountComponentAtNode(n._overlayTarget),n._overlayInstance=null)},n.getMountNode=function(){return n._overlayTarget},d(n,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._isMounted=!0,this._renderOverlay()},t.prototype.componentDidUpdate=function(){this._renderOverlay()},t.prototype.componentWillReceiveProps=function(e){this._overlayTarget&&e.container!==this.props.container&&(this._portalContainerNode.removeChild(this._overlayTarget),this._portalContainerNode=(0,a.default)(e.container,(0,l.default)(this).body),this._portalContainerNode.appendChild(this._overlayTarget))},t.prototype.componentWillUnmount=function(){this._isMounted=!1,this._unrenderOverlay(),this._unmountOverlayTarget()},t.prototype.render=function(){return null},t}(i.default.Component);h.displayName="Portal",h.propTypes={container:n.default.oneOfType([r.default,n.default.func]),onRendered:n.default.func},t.default=h,e.exports=t.default},2856:(e,t,o)=>{t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=d(o(5697)),i=d(o(8853)),s=d(o(6689)),a=d(o(5425)),l=d(o(7487)),c=d(o(2395));function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(o,n){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,o,n));return r.handleHidden=function(){var e;r.setState({exited:!0}),r.props.onExited&&(e=r.props).onExited.apply(e,arguments)},r.state={exited:!o.show},r.onHiddenListener=r.handleHidden.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillReceiveProps=function(e){e.show?this.setState({exited:!1}):e.transition||this.setState({exited:!0})},t.prototype.render=function(){var e=this.props,t=e.container,o=e.containerPadding,n=e.target,r=e.placement,i=e.shouldUpdatePosition,d=e.rootClose,h=e.children,u=e.transition,p=function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(e,["container","containerPadding","target","placement","shouldUpdatePosition","rootClose","children","transition"]);if(!(p.show||u&&!this.state.exited))return null;var f=h;if(f=s.default.createElement(l.default,{container:t,containerPadding:o,target:n,placement:r,shouldUpdatePosition:i},f),u){var m=p.onExit,g=p.onExiting,b=p.onEnter,v=p.onEntering,y=p.onEntered;f=s.default.createElement(u,{in:p.show,appear:!0,onExit:m,onExiting:g,onExited:this.onHiddenListener,onEnter:b,onEntering:v,onEntered:y},f)}return d&&(f=s.default.createElement(c.default,{onRootClose:p.onHide},f)),s.default.createElement(a.default,{container:t},f)},t}(s.default.Component);h.propTypes=n({},a.default.propTypes,l.default.propTypes,{show:r.default.bool,rootClose:r.default.bool,onHide:function(e){var t=r.default.func;e.rootClose&&(t=t.isRequired);for(var o=arguments.length,n=Array(o>1?o-1:0),i=1;i<o;i++)n[i-1]=arguments[i];return t.apply(void 0,[e].concat(n))},transition:i.default,onEnter:r.default.func,onEntering:r.default.func,onEntered:r.default.func,onExit:r.default.func,onExiting:r.default.func,onExited:r.default.func}),t.default=h,e.exports=t.default},5425:(e,t,o)=>{t.__esModule=!0;var n=d(o(5697)),r=d(o(621)),i=d(o(6689)),s=d(o(6405)),a=d(o(3464)),l=d(o(290)),c=d(o(7281));function d(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}var u=function(e){function t(){var o,n;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return o=n=h(this,e.call.apply(e,[this].concat(i))),n.setContainer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props;n._portalContainerNode=(0,a.default)(e.container,(0,l.default)(n).body)},n.getMountNode=function(){return n._portalContainerNode},h(n,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.setContainer(),this.forceUpdate(this.props.onRendered)},t.prototype.componentWillReceiveProps=function(e){e.container!==this.props.container&&this.setContainer(e)},t.prototype.componentWillUnmount=function(){this._portalContainerNode=null},t.prototype.render=function(){return this.props.children&&this._portalContainerNode?s.default.createPortal(this.props.children,this._portalContainerNode):null},t}(i.default.Component);u.displayName="Portal",u.propTypes={container:n.default.oneOfType([r.default,n.default.func]),onRendered:n.default.func},t.default=s.default.createPortal?u:c.default,e.exports=t.default},7487:(e,t,o)=>{t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=p(o(4184)),i=p(o(5697)),s=p(o(621)),a=o(6689),l=p(a),c=p(o(6405)),d=p(o(7603)),h=p(o(3464)),u=p(o(290));function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}var m=function(e){function t(o,n){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,o,n));return r.getTarget=function(){var e=r.props.target,t="function"==typeof e?e():e;return t&&c.default.findDOMNode(t)||null},r.maybeUpdatePosition=function(e){var t=r.getTarget();(r.props.shouldUpdatePosition||t!==r._lastTarget||e)&&r.updatePosition(t)},r.state={positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null},r._needsFlush=!1,r._lastTarget=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.updatePosition(this.getTarget())},t.prototype.componentWillReceiveProps=function(){this._needsFlush=!0},t.prototype.componentDidUpdate=function(e){this._needsFlush&&(this._needsFlush=!1,this.maybeUpdatePosition(this.props.placement!==e.placement))},t.prototype.render=function(){var e=this.props,t=e.children,o=e.className,i=f(e,["children","className"]),s=this.state,c=s.positionLeft,d=s.positionTop,h=f(s,["positionLeft","positionTop"]);delete i.target,delete i.container,delete i.containerPadding,delete i.shouldUpdatePosition;var u=l.default.Children.only(t);return(0,a.cloneElement)(u,n({},i,h,{positionLeft:c,positionTop:d,className:(0,r.default)(o,u.props.className),style:n({},u.props.style,{left:c,top:d})}))},t.prototype.updatePosition=function(e){if(this._lastTarget=e,e){var t=c.default.findDOMNode(this),o=(0,h.default)(this.props.container,(0,u.default)(this).body);this.setState((0,d.default)(this.props.placement,t,e,o,this.props.containerPadding))}else this.setState({positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null})},t}(l.default.Component);m.propTypes={target:i.default.oneOfType([s.default,i.default.func]),container:i.default.oneOfType([s.default,i.default.func]),containerPadding:i.default.number,placement:i.default.oneOf(["top","right","bottom","left"]),shouldUpdatePosition:i.default.bool},m.displayName="Position",m.defaultProps={containerPadding:0,placement:"right",shouldUpdatePosition:!1},t.default=m,e.exports=t.default},2395:(e,t,o)=>{t.__esModule=!0;var n=c(o(1629)),r=c(o(5697)),i=c(o(6689)),s=c(o(6405)),a=c(o(6616)),l=c(o(290));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(o,r){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,o,r));return i.addEventListeners=function(){var e=i.props.event,t=(0,l.default)(i);i.documentMouseCaptureListener=(0,a.default)(t,e,i.handleMouseCapture,!0),i.documentMouseListener=(0,a.default)(t,e,i.handleMouse),i.documentKeyupListener=(0,a.default)(t,"keyup",i.handleKeyUp)},i.removeEventListeners=function(){i.documentMouseCaptureListener&&i.documentMouseCaptureListener.remove(),i.documentMouseListener&&i.documentMouseListener.remove(),i.documentKeyupListener&&i.documentKeyupListener.remove()},i.handleMouseCapture=function(e){i.preventMouseRootClose=!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)||0!==e.button||(0,n.default)(s.default.findDOMNode(i),e.target)},i.handleMouse=function(e){!i.preventMouseRootClose&&i.props.onRootClose&&i.props.onRootClose(e)},i.handleKeyUp=function(e){27===e.keyCode&&i.props.onRootClose&&i.props.onRootClose(e)},i.preventMouseRootClose=!1,i}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.props.disabled||this.addEventListeners()},t.prototype.componentDidUpdate=function(e){!this.props.disabled&&e.disabled?this.addEventListeners():this.props.disabled&&!e.disabled&&this.removeEventListeners()},t.prototype.componentWillUnmount=function(){this.props.disabled||this.removeEventListeners()},t.prototype.render=function(){return this.props.children},t}(i.default.Component);d.displayName="RootCloseWrapper",d.propTypes={onRootClose:r.default.func,children:r.default.element,disabled:r.default.bool,event:r.default.oneOf(["click","mousedown"])},d.defaultProps={event:"click"},t.default=d,e.exports=t.default},6616:(e,t,o)=>{t.__esModule=!0,t.default=function(e,t,o,i){return(0,n.default)(e,t,o,i),{remove:function(){(0,r.default)(e,t,o,i)}}};var n=i(o(1416)),r=i(o(3249));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},7603:(e,t,o)=>{t.__esModule=!0,t.default=function(e,t,o,i,s){var a="BODY"===i.tagName?(0,n.default)(o):(0,r.default)(o,i),c=(0,n.default)(t),d=c.height,h=c.width,u=void 0,p=void 0,f=void 0,m=void 0;if("left"===e||"right"===e){p=a.top+(a.height-d)/2,u="left"===e?a.left-h:a.left+a.width;var g,b,v,y,w,C,S=(g=p,v=(b=l(i)).scroll,y=b.height,w=g-s-v,C=g+s-v+d,w<0?-w:C>y?y-C:0);p+=S,m=50*(1-2*S/d)+"%",f=void 0}else{if("top"!==e&&"bottom"!==e)throw Error('calcOverlayPosition(): No such placement of "'+e+'" found.');u=a.left+(a.width-h)/2,p="top"===e?a.top-d:a.top+a.height;var x,_,R,T,k=(x=u,_=l(i).width,R=x-s,T=x+s+h,R<0?-R:T>_?_-T:0);u+=k,f=50*(1-2*k/h)+"%",m=void 0}return{positionLeft:u,positionTop:p,arrowOffsetLeft:f,arrowOffsetTop:m}};var n=a(o(2565)),r=a(o(7265)),i=a(o(504)),s=a(o(290));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=void 0,o=void 0,r=void 0;if("BODY"===e.tagName)t=window.innerWidth,o=window.innerHeight,r=(0,i.default)((0,s.default)(e).documentElement)||(0,i.default)(e);else{var a=(0,n.default)(e);t=a.width,o=a.height,r=(0,i.default)(e)}return{width:t,height:o,scroll:r}}e.exports=t.default},3464:(e,t,o)=>{t.__esModule=!0,t.default=function(e,t){return e="function"==typeof e?e():e,r.default.findDOMNode(e)||t};var n=o(6405),r=n&&n.__esModule?n:{default:n};e.exports=t.default},290:(e,t,o)=>{t.__esModule=!0,t.default=function(e){return(0,r.default)(n.default.findDOMNode(e))};var n=i(o(6405)),r=i(o(9981));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},644:(e,t,o)=>{t.ZP=t.cn=t.d0=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e){for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}}return t.default=e,t}(o(5697)),r=a(o(6689)),i=a(o(6405)),s=o(6871);function a(e){return e&&e.__esModule?e:{default:e}}o(4726);var l="unmounted",c="exited",d="entering";t.d0=d;var h="entered";t.cn=h;var u="exiting",p=function(e){function t(t,o){n=e.call(this,t,o)||this;var n,r,i=o.transitionGroup,s=i&&!i.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?s?(r=c,n.appearStatus=d):r=h:r=t.unmountOnExit||t.mountOnEnter?l:c,n.state={status:r},n.nextCallback=null,n}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var o=t.prototype;return o.getChildContext=function(){return{transitionGroup:null}},t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:c}:null},o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var o=this.state.status;this.props.in?o!==d&&o!==h&&(t=d):o!==d&&o!==h||(t=u)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e,t,o,n=this.props.timeout;return e=t=o=n,null!=n&&"number"!=typeof n&&(e=n.exit,t=n.enter,o=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:o}},o.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var o=i.default.findDOMNode(this);t===d?this.performEnter(o,e):this.performExit(o)}else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:l})},o.performEnter=function(e,t){var o=this,n=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts(),s=r?i.appear:i.enter;t||n?(this.props.onEnter(e,r),this.safeSetState({status:d},function(){o.props.onEntering(e,r),o.onTransitionEnd(e,s,function(){o.safeSetState({status:h},function(){o.props.onEntered(e,r)})})})):this.safeSetState({status:h},function(){o.props.onEntered(e)})},o.performExit=function(e){var t=this,o=this.props.exit,n=this.getTimeouts();o?(this.props.onExit(e),this.safeSetState({status:u},function(){t.props.onExiting(e),t.onTransitionEnd(e,n.exit,function(){t.safeSetState({status:c},function(){t.props.onExited(e)})})})):this.safeSetState({status:c},function(){t.props.onExited(e)})},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,o=!0;return this.nextCallback=function(n){o&&(o=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},o.onTransitionEnd=function(e,t,o){this.setNextCallback(o);var n=null==t&&!this.props.addEndListener;e&&!n?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},o.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,o=t.children,n=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(o=i[n])>=0||(r[o]=e[o]);return r}(t,["children"]);if(delete n.in,delete n.mountOnEnter,delete n.unmountOnExit,delete n.appear,delete n.enter,delete n.exit,delete n.timeout,delete n.addEndListener,delete n.onEnter,delete n.onEntering,delete n.onEntered,delete n.onExit,delete n.onExiting,delete n.onExited,"function"==typeof o)return o(e,n);var i=r.default.Children.only(o);return r.default.cloneElement(i,n)},t}(r.default.Component);function f(){}p.contextTypes={transitionGroup:n.object},p.childContextTypes={transitionGroup:function(){}},p.propTypes={},p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},p.UNMOUNTED=0,p.EXITED=1,p.ENTERING=2,p.ENTERED=3,p.EXITING=4;var m=(0,s.polyfill)(p);t.ZP=m},4726:(e,t,o)=>{var n;t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0,(n=o(5697))&&n.__esModule,t.timeoutsShape=null,t.classNamesShape=null},6115:e=>{var t;t="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},e.exports=t},670:e=>{e.exports=function(){}},6689:e=>{e.exports=o(2735)},6405:e=>{e.exports=o(2788)},8149:(e,t,o)=>{e.exports=o(3285)},3562:(e,t,o)=>{e.exports=o(7965)},434:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{r.r(i),r.d(i,{CHANGES_BAR_MIN_WIDTH:()=>c.QW,CHANGES_BAR_RIGHT_MARGIN:()=>c.SZ,CHANGES_ZONE_MIN_WIDTH:()=>c.v1,CHANGES_ZONE_SHOW_ICON_WIDTH:()=>c.Oi,COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER:()=>c.Y8,COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER:()=>c.LG,COMMIT_AUTHOR_ZONE_MIN_WIDTH:()=>c.eq,COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH:()=>c.m8,COMMIT_DATE_TIME_ZONE_MIN_WIDTH:()=>c.q1,COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH:()=>c.jg,COMMIT_MESSAGE_ZONE_MIN_WIDTH:()=>c.B8,COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH:()=>c.j_,COMMIT_NODE_MIN_ALPHA:()=>c.l3,COMMIT_SHA_ZONE_MIN_WIDTH:()=>c.xI,COMMIT_SHA_ZONE_SHOW_ICON_WIDTH:()=>c.lG,COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN:()=>c.Wu,COMMIT_ZONE_EDGE_ARC_PADDING:()=>c.NP,COMMIT_ZONE_EDGE_ARC_RADIUS:()=>c.O5,COMMIT_ZONE_MARGIN_BOTTOM:()=>c.$s,COMMIT_ZONE_MARGIN_TOP:()=>c.An,COMMIT_ZONE_ROW_HEIGHT:()=>c.at,COMMIT_ZONE_ROW_INNER_HEIGHT:()=>c.P3,COMMIT_ZONE_SHOW_ICON_WIDTH:()=>c.jn,CommitDateTimeSources:()=>n.Gu,DEFAULT_AVATAR_BACKGROUND_COLOR:()=>c.iq,DEFAULT_COMMIT_SHA_LENGTH:()=>c.ai,DEFAULT_WORKDIR_STATS:()=>c.OR,DndComponent:()=>e.Z,GRAPH_HEADER_ROW_HEIGHT:()=>c.rl,GRAPH_ROW_HEIGHT:()=>c.$0,GRAPH_ROW_INNER_HEIGHT:()=>c.cZ,GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET:()=>c.qG,GRAPH_SCROLL_MARKER_LANES:()=>c.dF,GraphColumnMode:()=>c.Um,GraphMarkerShape:()=>c.RG,HEADER_ROW_HEIGHT:()=>c.ze,HEADER_ROW_MARGIN_BOTTOM:()=>c.wi,INLINE_SUMMARY_MARGIN_LEFT:()=>c.aV,LeftPanelToGraphMarginGap:()=>c.mu,OPACITY_FACTOR_BY_THEME:()=>c.X9,REF_NODE_ICON_MARGIN:()=>c.am,REF_NODE_ICON_SPACING:()=>c.B,REF_NODE_ICON_WIDTH:()=>c.Rg,REF_NODE_OUTER_SPACING:()=>c.Vh,REF_ZONE_MARGIN_LEFT:()=>c.yv,REF_ZONE_MARGIN_RIGHT:()=>c.PB,REF_ZONE_MAX_REFS_TO_RENDER:()=>c.v6,REF_ZONE_MIN_WIDTH:()=>c.wy,REF_ZONE_SHOW_ICON_WIDTH:()=>c.mt,REF_ZONE_TEXT_HEIGHT:()=>c.pj,ResizableHandleCorrection:()=>c.b4,SCROLL_TO_ALIGNMENT_AUTO:()=>c.os,SCROLL_TO_ALIGNMENT_CENTER:()=>c.MQ,ScrollbarContainer:()=>t.Z,TIMESTAMP_FORMAT_DATE_TIME:()=>c.It,TINY_FILES_READOUT_FONT_SIZE:()=>c.wd,TINY_FILES_READOUT_RIGHT_MARGIN:()=>c.IX,TINY_ICON_RIGHT_MARGIN:()=>c.VB,TINY_ICON_SIZE:()=>c.dH,allMetadataTypes:()=>d.AI,changesZone:()=>c.WD,commitAuthorZone:()=>c.GF,commitDateTimeZone:()=>c.PL,commitMessageZone:()=>c.KE,commitNodeType:()=>n.o$,commitShaZone:()=>c.av,commitZone:()=>c.Wm,default:()=>m,getHostingServiceName:()=>h.y,graphCommitDescDisplayModes:()=>c.R_,graphMarkerMetadata:()=>c.Qh,graphMarkerShapeMetadata:()=>c.d_,graphZoneMetaData:()=>c.qi,issueMetadataType:()=>d.$M,lookbackLimitByPeriod:()=>c.YJ,mergeConflictNodeType:()=>n.S7,mergeNodeType:()=>n.lH,numGraphColumnsDefault:()=>c.uK,pullRequestMetadataType:()=>d.mQ,refTypes:()=>u.V,refZone:()=>c.jZ,stashNodeType:()=>n.kP,timelineMsgRowRenderId:()=>c.Gn,unsupportedRebaseWarningNodeType:()=>n.br,upstreamMetadataType:()=>d.uq,workDirType:()=>n.ch});var e=r(9915),t=r(7154),o=r(3607),n=r(827),s=r(2149),a={};for(let e in s)0>["default","DndComponent","ScrollbarContainer","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType"].indexOf(e)&&(a[e]=()=>s[e]);r.d(i,a);var l=r(8289);for(let e in a={},l)0>["default","DndComponent","ScrollbarContainer","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType"].indexOf(e)&&(a[e]=()=>l[e]);r.d(i,a);var c=r(3308),d=r(9453),h=r(7334),u=r(8649),p=r(664);for(let e in a={},p)0>["default","DndComponent","ScrollbarContainer","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType","CHANGES_BAR_MIN_WIDTH","CHANGES_BAR_RIGHT_MARGIN","CHANGES_ZONE_MIN_WIDTH","CHANGES_ZONE_SHOW_ICON_WIDTH","COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER","COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER","COMMIT_AUTHOR_ZONE_MIN_WIDTH","COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH","COMMIT_DATE_TIME_ZONE_MIN_WIDTH","COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH","COMMIT_MESSAGE_ZONE_MIN_WIDTH","COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH","COMMIT_NODE_MIN_ALPHA","COMMIT_SHA_ZONE_MIN_WIDTH","COMMIT_SHA_ZONE_SHOW_ICON_WIDTH","COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN","COMMIT_ZONE_EDGE_ARC_PADDING","COMMIT_ZONE_EDGE_ARC_RADIUS","COMMIT_ZONE_MARGIN_BOTTOM","COMMIT_ZONE_MARGIN_TOP","COMMIT_ZONE_ROW_HEIGHT","COMMIT_ZONE_ROW_INNER_HEIGHT","COMMIT_ZONE_SHOW_ICON_WIDTH","DEFAULT_AVATAR_BACKGROUND_COLOR","DEFAULT_COMMIT_SHA_LENGTH","DEFAULT_WORKDIR_STATS","GRAPH_HEADER_ROW_HEIGHT","GRAPH_ROW_HEIGHT","GRAPH_ROW_INNER_HEIGHT","GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET","GRAPH_SCROLL_MARKER_LANES","GraphColumnMode","GraphMarkerShape","HEADER_ROW_HEIGHT","HEADER_ROW_MARGIN_BOTTOM","INLINE_SUMMARY_MARGIN_LEFT","LeftPanelToGraphMarginGap","OPACITY_FACTOR_BY_THEME","REF_NODE_ICON_MARGIN","REF_NODE_ICON_SPACING","REF_NODE_ICON_WIDTH","REF_NODE_OUTER_SPACING","REF_ZONE_MARGIN_LEFT","REF_ZONE_MARGIN_RIGHT","REF_ZONE_MAX_REFS_TO_RENDER","REF_ZONE_MIN_WIDTH","REF_ZONE_SHOW_ICON_WIDTH","REF_ZONE_TEXT_HEIGHT","ResizableHandleCorrection","SCROLL_TO_ALIGNMENT_AUTO","SCROLL_TO_ALIGNMENT_CENTER","TIMESTAMP_FORMAT_DATE_TIME","TINY_FILES_READOUT_FONT_SIZE","TINY_FILES_READOUT_RIGHT_MARGIN","TINY_ICON_RIGHT_MARGIN","TINY_ICON_SIZE","changesZone","commitAuthorZone","commitDateTimeZone","commitMessageZone","commitShaZone","commitZone","graphCommitDescDisplayModes","graphMarkerMetadata","graphMarkerShapeMetadata","graphZoneMetaData","lookbackLimitByPeriod","numGraphColumnsDefault","refZone","timelineMsgRowRenderId","allMetadataTypes","issueMetadataType","pullRequestMetadataType","upstreamMetadataType","getHostingServiceName","refTypes"].indexOf(e)&&(a[e]=()=>p[e]);r.d(i,a);var f=r(6756);for(let e in a={},f)0>["default","DndComponent","ScrollbarContainer","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType","CHANGES_BAR_MIN_WIDTH","CHANGES_BAR_RIGHT_MARGIN","CHANGES_ZONE_MIN_WIDTH","CHANGES_ZONE_SHOW_ICON_WIDTH","COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER","COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER","COMMIT_AUTHOR_ZONE_MIN_WIDTH","COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH","COMMIT_DATE_TIME_ZONE_MIN_WIDTH","COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH","COMMIT_MESSAGE_ZONE_MIN_WIDTH","COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH","COMMIT_NODE_MIN_ALPHA","COMMIT_SHA_ZONE_MIN_WIDTH","COMMIT_SHA_ZONE_SHOW_ICON_WIDTH","COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN","COMMIT_ZONE_EDGE_ARC_PADDING","COMMIT_ZONE_EDGE_ARC_RADIUS","COMMIT_ZONE_MARGIN_BOTTOM","COMMIT_ZONE_MARGIN_TOP","COMMIT_ZONE_ROW_HEIGHT","COMMIT_ZONE_ROW_INNER_HEIGHT","COMMIT_ZONE_SHOW_ICON_WIDTH","DEFAULT_AVATAR_BACKGROUND_COLOR","DEFAULT_COMMIT_SHA_LENGTH","DEFAULT_WORKDIR_STATS","GRAPH_HEADER_ROW_HEIGHT","GRAPH_ROW_HEIGHT","GRAPH_ROW_INNER_HEIGHT","GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET","GRAPH_SCROLL_MARKER_LANES","GraphColumnMode","GraphMarkerShape","HEADER_ROW_HEIGHT","HEADER_ROW_MARGIN_BOTTOM","INLINE_SUMMARY_MARGIN_LEFT","LeftPanelToGraphMarginGap","OPACITY_FACTOR_BY_THEME","REF_NODE_ICON_MARGIN","REF_NODE_ICON_SPACING","REF_NODE_ICON_WIDTH","REF_NODE_OUTER_SPACING","REF_ZONE_MARGIN_LEFT","REF_ZONE_MARGIN_RIGHT","REF_ZONE_MAX_REFS_TO_RENDER","REF_ZONE_MIN_WIDTH","REF_ZONE_SHOW_ICON_WIDTH","REF_ZONE_TEXT_HEIGHT","ResizableHandleCorrection","SCROLL_TO_ALIGNMENT_AUTO","SCROLL_TO_ALIGNMENT_CENTER","TIMESTAMP_FORMAT_DATE_TIME","TINY_FILES_READOUT_FONT_SIZE","TINY_FILES_READOUT_RIGHT_MARGIN","TINY_ICON_RIGHT_MARGIN","TINY_ICON_SIZE","changesZone","commitAuthorZone","commitDateTimeZone","commitMessageZone","commitShaZone","commitZone","graphCommitDescDisplayModes","graphMarkerMetadata","graphMarkerShapeMetadata","graphZoneMetaData","lookbackLimitByPeriod","numGraphColumnsDefault","refZone","timelineMsgRowRenderId","allMetadataTypes","issueMetadataType","pullRequestMetadataType","upstreamMetadataType","getHostingServiceName","refTypes"].indexOf(e)&&(a[e]=()=>f[e]);r.d(i,a);var m=o.Z})(),e.exports=i})()},4516:e=>{var t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var r={};if("abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},r)).join(""))return!1;return!0}catch(e){return!1}}()?function(e,r){for(var i,s,a=function(e){if(null==e)throw TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))o.call(i,c)&&(a[c]=i[c]);if(t){s=t(i);for(var d=0;d<s.length;d++)n.call(i,s[d])&&(a[s[d]]=i[s[d]])}}return a}:Object.assign},3975:(e,t,o)=>{var n,r,i,s=o(2735),a=o(4516),l=o(9146);function c(e){for(var t=arguments.length-1,o="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)o+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,o,n,r,i,s,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[o,void 0,void 0,void 0,void 0,void 0],c=0;(e=Error(t.replace(/%s/g,function(){return l[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",o)}function d(e,t,o,n,r,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(o,c)}catch(e){this.onError(e)}}s||c("227");var h=!1,u=null,p=!1,f=null,m={onError:function(e){h=!0,u=e}};function g(e,t,o,n,r,i,s,a,l){h=!1,u=null,d.apply(m,arguments)}var b=null,v={};function y(){if(b)for(var e in v){var t=v[e],o=b.indexOf(e);if(-1<o||c("96",e),!C[o])for(var n in t.extractEvents||c("97",e),C[o]=t,o=t.eventTypes){var r=void 0,i=o[n];S.hasOwnProperty(n)&&c("99",n),S[n]=i;var s=i.phasedRegistrationNames;if(s){for(r in s)s.hasOwnProperty(r)&&w(s[r],t,n);r=!0}else i.registrationName?(w(i.registrationName,t,n),r=!0):r=!1;r||c("98",n,e)}}}function w(e,t,o){x[e]&&c("100",e),x[e]=t,_[e]=t.eventTypes[o].dependencies}var C=[],S={},x={},_={},R=null,T=null,k=null;function E(e,t,o){var n=e.type||"unknown-event";e.currentTarget=k(o),function(e,t,o,n,r,i,s,a,l){if(g.apply(this,arguments),h){if(h){var d=u;h=!1,u=null}else c("198"),d=void 0;p||(p=!0,f=d)}}(n,t,void 0,e),e.currentTarget=null}function O(e,t){return(null==t&&c("30"),null==e)?t:Array.isArray(e)?(Array.isArray(t)?e.push.apply(e,t):e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function I(e,t,o){Array.isArray(e)?e.forEach(t,o):e&&t.call(o,e)}var M=null;function D(e){if(e){var t=e._dispatchListeners,o=e._dispatchInstances;if(Array.isArray(t))for(var n=0;n<t.length&&!e.isPropagationStopped();n++)E(e,t[n],o[n]);else t&&E(e,t,o);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}var A={injectEventPluginOrder:function(e){b&&c("101"),b=Array.prototype.slice.call(e),y()},injectEventPluginsByName:function(e){var t,o=!1;for(t in e)if(e.hasOwnProperty(t)){var n=e[t];v.hasOwnProperty(t)&&v[t]===n||(v[t]&&c("102",t),v[t]=n,o=!0)}o&&y()}};function $(e,t){var o=e.stateNode;if(!o)return null;var n=R(o);if(!n)return null;switch(o=n[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break;default:e=!1}return e?null:(o&&"function"!=typeof o&&c("231",t,typeof o),o)}function P(e){if(null!==e&&(M=O(M,e)),e=M,M=null,e&&(I(e,D),M&&c("95"),p))throw e=f,p=!1,f=null,e}var N=Math.random().toString(36).slice(2),z="__reactInternalInstance$"+N,H="__reactEventHandlers$"+N;function L(e){if(e[z])return e[z];for(;!e[z];)if(!e.parentNode)return null;else e=e.parentNode;return 5===(e=e[z]).tag||6===e.tag?e:null}function F(e){return(e=e[z])&&(5===e.tag||6===e.tag)?e:null}function W(e){if(5===e.tag||6===e.tag)return e.stateNode;c("33")}function G(e){return e[H]||null}function B(e){do e=e.return;while(e&&5!==e.tag)return e||null}function U(e,t,o){(t=$(e,o.dispatchConfig.phasedRegistrationNames[t]))&&(o._dispatchListeners=O(o._dispatchListeners,t),o._dispatchInstances=O(o._dispatchInstances,e))}function V(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,o=[];t;)o.push(t),t=B(t);for(t=o.length;0<t--;)U(o[t],"captured",e);for(t=0;t<o.length;t++)U(o[t],"bubbled",e)}}function j(e,t,o){e&&o&&o.dispatchConfig.registrationName&&(t=$(e,o.dispatchConfig.registrationName))&&(o._dispatchListeners=O(o._dispatchListeners,t),o._dispatchInstances=O(o._dispatchInstances,e))}function Z(e){e&&e.dispatchConfig.registrationName&&j(e._targetInst,null,e)}function q(e){I(e,V)}var K=!("undefined"==typeof window||!window.document||!window.document.createElement);function Y(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var Q={animationend:Y("Animation","AnimationEnd"),animationiteration:Y("Animation","AnimationIteration"),animationstart:Y("Animation","AnimationStart"),transitionend:Y("Transition","TransitionEnd")},X={},J={};function ee(e){if(X[e])return X[e];if(!Q[e])return e;var t,o=Q[e];for(t in o)if(o.hasOwnProperty(t)&&t in J)return X[e]=o[t];return e}K&&(J=document.createElement("div").style,"AnimationEvent"in window||(delete Q.animationend.animation,delete Q.animationiteration.animation,delete Q.animationstart.animation),"TransitionEvent"in window||delete Q.transitionend.transition);var et=ee("animationend"),eo=ee("animationiteration"),en=ee("animationstart"),er=ee("transitionend"),ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),es=null,ea=null,el=null;function ec(){if(el)return el;var e,t,o=ea,n=o.length,r="value"in es?es.value:es.textContent,i=r.length;for(e=0;e<n&&o[e]===r[e];e++);var s=n-e;for(t=1;t<=s&&o[n-t]===r[i-t];t++);return el=r.slice(e,1<t?1-t:void 0)}function ed(){return!0}function eh(){return!1}function eu(e,t,o,n){for(var r in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=o,e=this.constructor.Interface)e.hasOwnProperty(r)&&((t=e[r])?this[r]=t(o):"target"===r?this.target=n:this[r]=o[r]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?ed:eh,this.isPropagationStopped=eh,this}function ep(e,t,o,n){if(this.eventPool.length){var r=this.eventPool.pop();return this.call(r,e,t,o,n),r}return new this(e,t,o,n)}function ef(e){e instanceof this||c("279"),e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function em(e){e.eventPool=[],e.getPooled=ep,e.release=ef}a(eu.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=ed)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=ed)},persist:function(){this.isPersistent=ed},isPersistent:eh,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=eh,this._dispatchInstances=this._dispatchListeners=null}}),eu.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},eu.extend=function(e){function t(){}function o(){return n.apply(this,arguments)}var n=this;t.prototype=n.prototype;var r=new t;return a(r,o.prototype),o.prototype=r,o.prototype.constructor=o,o.Interface=a({},n.Interface,e),o.extend=n.extend,em(o),o},em(eu);var eg=eu.extend({data:null}),eb=eu.extend({data:null}),ev=[9,13,27,32],ey=K&&"CompositionEvent"in window,ew=null;K&&"documentMode"in document&&(ew=document.documentMode);var eC=K&&"TextEvent"in window&&!ew,eS=K&&(!ey||ew&&8<ew&&11>=ew),ex={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},e_=!1;function eR(e,t){switch(e){case"keyup":return -1!==ev.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function eT(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var ek=!1,eE=null,eO=null,eI=null;function eM(e){if(e=T(e)){"function"!=typeof eE&&c("280");var t=R(e.stateNode);eE(e.stateNode,e.type,t)}}function eD(e){eO?eI?eI.push(e):eI=[e]:eO=e}function eA(){if(eO){var e=eO,t=eI;if(eI=eO=null,eM(e),t)for(e=0;e<t.length;e++)eM(t[e])}}function e$(e,t){return e(t)}function eP(e,t,o){return e(t,o)}function eN(){}var ez=!1;function eH(e,t){if(ez)return e(t);ez=!0;try{return e$(e,t)}finally{ez=!1,(null!==eO||null!==eI)&&(eN(),eA())}}var eL={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eF(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!eL[e.type]:"textarea"===t}function eW(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function eG(e){if(!K)return!1;var t=(e="on"+e)in document;return t||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t}function eB(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function eU(e){e._valueTracker||(e._valueTracker=function(e){var t=eB(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==o&&"function"==typeof o.get&&"function"==typeof o.set){var r=o.get,i=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(e){n=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function eV(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),n="";return e&&(n=eB(e)?e.checked?"true":"false":e.value),(e=n)!==o&&(t.setValue(e),!0)}var ej=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;ej.hasOwnProperty("ReactCurrentDispatcher")||(ej.ReactCurrentDispatcher={current:null});var eZ=/^(.*)[\\\/]/,eq="function"==typeof Symbol&&Symbol.for,eK=eq?Symbol.for("react.element"):60103,eY=eq?Symbol.for("react.portal"):60106,eQ=eq?Symbol.for("react.fragment"):60107,eX=eq?Symbol.for("react.strict_mode"):60108,eJ=eq?Symbol.for("react.profiler"):60114,e0=eq?Symbol.for("react.provider"):60109,e1=eq?Symbol.for("react.context"):60110,e2=eq?Symbol.for("react.concurrent_mode"):60111,e5=eq?Symbol.for("react.forward_ref"):60112,e3=eq?Symbol.for("react.suspense"):60113,e6=eq?Symbol.for("react.memo"):60115,e4=eq?Symbol.for("react.lazy"):60116,e7="function"==typeof Symbol&&Symbol.iterator;function e9(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=e7&&e[e7]||e["@@iterator"])?e:null}function e8(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case e2:return"ConcurrentMode";case eQ:return"Fragment";case eY:return"Portal";case eJ:return"Profiler";case eX:return"StrictMode";case e3:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case e1:return"Context.Consumer";case e0:return"Context.Provider";case e5:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case e6:return e8(e.type);case e4:if(e=1===e._status?e._result:null)return e8(e)}return null}function te(e){var t="";do{switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var o="";break;default:var n=e._debugOwner,r=e._debugSource,i=e8(e.type);o=null,n&&(o=e8(n.type)),n=i,i="",r?i=" (at "+r.fileName.replace(eZ,"")+":"+r.lineNumber+")":o&&(i=" (created by "+o+")"),o="\n    in "+(n||"Unknown")+i}t+=o,e=e.return}while(e)return t}var tt=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,to=Object.prototype.hasOwnProperty,tn={},tr={};function ti(e,t,o,n,r){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=o,this.propertyName=e,this.type=t}var ts={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ts[e]=new ti(e,0,!1,e,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ts[t]=new ti(t,1,!1,e[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ts[e]=new ti(e,2,!1,e.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ts[e]=new ti(e,2,!1,e,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ts[e]=new ti(e,3,!1,e.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(e){ts[e]=new ti(e,3,!0,e,null)}),["capture","download"].forEach(function(e){ts[e]=new ti(e,4,!1,e,null)}),["cols","rows","size","span"].forEach(function(e){ts[e]=new ti(e,6,!1,e,null)}),["rowSpan","start"].forEach(function(e){ts[e]=new ti(e,5,!1,e.toLowerCase(),null)});var ta=/[\-:]([a-z])/g;function tl(e){return e[1].toUpperCase()}function tc(e,t,o,n){var r,i=ts.hasOwnProperty(t)?ts[t]:null;(null!==i?0===i.type:!n&&2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1]))||(function(e,t,o,n){if(null==t||function(e,t,o,n){if(null!==o&&0===o.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(n)return!1;if(null!==o)return!o.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,o,n))return!0;if(n)return!1;if(null!==o)switch(o.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,o,i,n)&&(o=null),n||null===i?(r=t,(!!to.call(tr,r)||!to.call(tn,r)&&(tt.test(r)?tr[r]=!0:(tn[r]=!0,!1)))&&(null===o?e.removeAttribute(t):e.setAttribute(t,""+o))):i.mustUseProperty?e[i.propertyName]=null===o?3!==i.type&&"":o:(t=i.attributeName,n=i.attributeNamespace,null===o?e.removeAttribute(t):(o=3===(i=i.type)||4===i&&!0===o?"":""+o,n?e.setAttributeNS(n,t,o):e.setAttribute(t,o))))}function td(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function th(e,t){var o=t.checked;return a({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=o?o:e._wrapperState.initialChecked})}function tu(e,t){var o=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;o=td(null!=t.value?t.value:o),e._wrapperState={initialChecked:n,initialValue:o,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function tp(e,t){null!=(t=t.checked)&&tc(e,"checked",t,!1)}function tf(e,t){tp(e,t);var o=td(t.value),n=t.type;if(null!=o)"number"===n?(0===o&&""===e.value||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if("submit"===n||"reset"===n){e.removeAttribute("value");return}t.hasOwnProperty("value")?tg(e,t.type,o):t.hasOwnProperty("defaultValue")&&tg(e,t.type,td(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function tm(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}""!==(o=e.name)&&(e.name=""),e.defaultChecked=!e.defaultChecked,e.defaultChecked=!!e._wrapperState.initialChecked,""!==o&&(e.name=o)}function tg(e,t,o){("number"!==t||e.ownerDocument.activeElement!==e)&&(null==o?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ta,tl);ts[t]=new ti(t,1,!1,e,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ta,tl);ts[t]=new ti(t,1,!1,e,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ta,tl);ts[t]=new ti(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")}),["tabIndex","crossOrigin"].forEach(function(e){ts[e]=new ti(e,1,!1,e.toLowerCase(),null)});var tb={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function tv(e,t,o){return(e=eu.getPooled(tb.change,e,t,o)).type="change",eD(o),q(e),e}var ty=null,tw=null;function tC(e){P(e)}function tS(e){if(eV(W(e)))return e}function tx(e,t){if("change"===e)return t}var t_=!1;function tR(){ty&&(ty.detachEvent("onpropertychange",tT),tw=ty=null)}function tT(e){"value"===e.propertyName&&tS(tw)&&eH(tC,e=tv(tw,e,eW(e)))}function tk(e,t,o){"focus"===e?(tR(),ty=t,tw=o,ty.attachEvent("onpropertychange",tT)):"blur"===e&&tR()}function tE(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return tS(tw)}function tO(e,t){if("click"===e)return tS(t)}function tI(e,t){if("input"===e||"change"===e)return tS(t)}K&&(t_=eG("input")&&(!document.documentMode||9<document.documentMode));var tM={eventTypes:tb,_isInputEventSupported:t_,extractEvents:function(e,t,o,n){var r=t?W(t):window,i=void 0,s=void 0,a=r.nodeName&&r.nodeName.toLowerCase();if("select"===a||"input"===a&&"file"===r.type?i=tx:eF(r)?t_?i=tI:(i=tE,s=tk):(a=r.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===r.type||"radio"===r.type)&&(i=tO),i&&(i=i(e,t)))return tv(i,o,n);s&&s(e,r,t),"blur"===e&&(e=r._wrapperState)&&e.controlled&&"number"===r.type&&tg(r,"number",r.value)}},tD=eu.extend({view:null,detail:null}),tA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t$(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=tA[e])&&!!t[e]}function tP(){return t$}var tN=0,tz=0,tH=!1,tL=!1,tF=tD.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:tP,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=tN;return tN=e.screenX,tH?"mousemove"===e.type?e.screenX-t:0:(tH=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=tz;return tz=e.screenY,tL?"mousemove"===e.type?e.screenY-t:0:(tL=!0,0)}}),tW=tF.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),tG={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}};function tB(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}var tU=Object.prototype.hasOwnProperty;function tV(e,t){if(tB(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var o=Object.keys(e),n=Object.keys(t);if(o.length!==n.length)return!1;for(n=0;n<o.length;n++)if(!tU.call(t,o[n])||!tB(e[o[n]],t[o[n]]))return!1;return!0}function tj(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{if(0!=(2&t.effectTag))return 1;for(;t.return;)if(0!=(2&(t=t.return).effectTag))return 1}return 3===t.tag?2:3}function tZ(e){2!==tj(e)&&c("188")}function tq(e){if(!(e=function(e){var t=e.alternate;if(!t)return 3===(t=tj(e))&&c("188"),1===t?null:e;for(var o=e,n=t;;){var r=o.return,i=r?r.alternate:null;if(!r||!i)break;if(r.child===i.child){for(var s=r.child;s;){if(s===o)return tZ(r),e;if(s===n)return tZ(r),t;s=s.sibling}c("188")}if(o.return!==n.return)o=r,n=i;else{s=!1;for(var a=r.child;a;){if(a===o){s=!0,o=r,n=i;break}if(a===n){s=!0,n=r,o=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===o){s=!0,o=i,n=r;break}if(a===n){s=!0,n=i,o=r;break}a=a.sibling}s||c("189")}}o.alternate!==n&&c("190")}return 3!==o.tag&&c("188"),o.stateNode.current===o?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}var tK=eu.extend({animationName:null,elapsedTime:null,pseudoElement:null}),tY=eu.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tQ=tD.extend({relatedTarget:null});function tX(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var tJ={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t1=tD.extend({key:function(e){if(e.key){var t=tJ[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tX(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?t0[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:tP,charCode:function(e){return"keypress"===e.type?tX(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tX(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),t2=tF.extend({dataTransfer:null}),t5=tD.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:tP}),t3=eu.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),t6=tF.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),t4=[["abort","abort"],[et,"animationEnd"],[eo,"animationIteration"],[en,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[er,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],t7={},t9={};function t8(e,t){var o=e[0],n="on"+((e=e[1])[0].toUpperCase()+e.slice(1));t={phasedRegistrationNames:{bubbled:n,captured:n+"Capture"},dependencies:[o],isInteractive:t},t7[e]=t,t9[o]=t}[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(e){t8(e,!0)}),t4.forEach(function(e){t8(e,!1)});var oe={eventTypes:t7,isInteractiveTopLevelEventType:function(e){return void 0!==(e=t9[e])&&!0===e.isInteractive},extractEvents:function(e,t,o,n){var r=t9[e];if(!r)return null;switch(e){case"keypress":if(0===tX(o))return null;case"keydown":case"keyup":e=t1;break;case"blur":case"focus":e=tQ;break;case"click":if(2===o.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=tF;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=t2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=t5;break;case et:case eo:case en:e=tK;break;case er:e=t3;break;case"scroll":e=tD;break;case"wheel":e=t6;break;case"copy":case"cut":case"paste":e=tY;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=tW;break;default:e=eu}return q(t=e.getPooled(r,t,o,n)),t}},ot=oe.isInteractiveTopLevelEventType,oo=[];function on(e){var t,o=e.targetInst,n=o;do{if(!n){e.ancestors.push(n);break}for(t=n;t.return;)t=t.return;if(!(t=3!==t.tag?null:t.stateNode.containerInfo))break;e.ancestors.push(n),n=L(t)}while(n)for(n=0;n<e.ancestors.length;n++){o=e.ancestors[n];var r=eW(e.nativeEvent);t=e.topLevelType;for(var i=e.nativeEvent,s=null,a=0;a<C.length;a++){var l=C[a];l&&(l=l.extractEvents(t,o,i,r))&&(s=O(s,l))}P(s)}}var or=!0;function oi(e,t){if(!t)return null;var o=(ot(e)?oa:ol).bind(null,e);t.addEventListener(e,o,!1)}function os(e,t){if(!t)return null;var o=(ot(e)?oa:ol).bind(null,e);t.addEventListener(e,o,!0)}function oa(e,t){eP(ol,e,t)}function ol(e,t){if(or){var o=eW(t);if(null===(o=L(o))||"number"!=typeof o.tag||2===tj(o)||(o=null),oo.length){var n=oo.pop();n.topLevelType=e,n.nativeEvent=t,n.targetInst=o,e=n}else e={topLevelType:e,nativeEvent:t,targetInst:o,ancestors:[]};try{eH(on,e)}finally{e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>oo.length&&oo.push(e)}}}var oc={},od=0,oh="_reactListenersID"+(""+Math.random()).slice(2);function ou(e){return Object.prototype.hasOwnProperty.call(e,oh)||(e[oh]=od++,oc[e[oh]]={}),oc[e[oh]]}function op(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function of(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function om(e,t){var o,n=of(e);for(e=0;n;){if(3===n.nodeType){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=of(n)}}function og(){for(var e=window,t=op();t instanceof e.HTMLIFrameElement;){try{e=t.contentDocument.defaultView}catch(e){break}t=op(e.document)}return t}function ob(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ov=K&&"documentMode"in document&&11>=document.documentMode,oy={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ow=null,oC=null,oS=null,ox=!1;function o_(e,t){var o=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;return ox||null==ow||ow!==op(o)?null:(o="selectionStart"in(o=ow)&&ob(o)?{start:o.selectionStart,end:o.selectionEnd}:{anchorNode:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset},oS&&tV(oS,o)?null:(oS=o,(e=eu.getPooled(oy.select,oC,e,t)).type="select",e.target=ow,q(e),e))}function oR(e,t){var o,n;return e=a({children:void 0},t),o=t.children,n="",s.Children.forEach(o,function(e){null!=e&&(n+=e)}),(t=n)&&(e.children=t),e}function oT(e,t,o,n){if(e=e.options,t){t={};for(var r=0;r<o.length;r++)t["$"+o[r]]=!0;for(o=0;o<e.length;o++)r=t.hasOwnProperty("$"+e[o].value),e[o].selected!==r&&(e[o].selected=r),r&&n&&(e[o].defaultSelected=!0)}else{for(r=0,o=""+td(o),t=null;r<e.length;r++){if(e[r].value===o){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}null!==t||e[r].disabled||(t=e[r])}null!==t&&(t.selected=!0)}}function ok(e,t){return null!=t.dangerouslySetInnerHTML&&c("91"),a({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oE(e,t){var o=t.value;null==o&&(o=t.defaultValue,null!=(t=t.children)&&(null!=o&&c("92"),Array.isArray(t)&&(1>=t.length||c("93"),t=t[0]),o=t),null==o&&(o="")),e._wrapperState={initialValue:td(o)}}function oO(e,t){var o=td(t.value),n=td(t.defaultValue);null!=o&&((o=""+o)!==e.value&&(e.value=o),null==t.defaultValue&&e.defaultValue!==o&&(e.defaultValue=o)),null!=n&&(e.defaultValue=""+n)}function oI(e){var t=e.textContent;t===e._wrapperState.initialValue&&(e.value=t)}A.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),R=G,T=F,k=W,A.injectEventPluginsByName({SimpleEventPlugin:oe,EnterLeaveEventPlugin:{eventTypes:tG,extractEvents:function(e,t,o,n){var r="mouseover"===e||"pointerover"===e,i="mouseout"===e||"pointerout"===e;if(r&&(o.relatedTarget||o.fromElement)||!i&&!r||(r=n.window===n?n:(r=n.ownerDocument)?r.defaultView||r.parentWindow:window,i?(i=t,t=(t=o.relatedTarget||o.toElement)?L(t):null):i=null,i===t))return null;var s=void 0,a=void 0,l=void 0,c=void 0;"mouseout"===e||"mouseover"===e?(s=tF,a=tG.mouseLeave,l=tG.mouseEnter,c="mouse"):("pointerout"===e||"pointerover"===e)&&(s=tW,a=tG.pointerLeave,l=tG.pointerEnter,c="pointer");var d=null==i?r:W(i);if(r=null==t?r:W(t),(e=s.getPooled(a,i,o,n)).type=c+"leave",e.target=d,e.relatedTarget=r,(o=s.getPooled(l,t,o,n)).type=c+"enter",o.target=r,o.relatedTarget=d,n=t,i&&n)e:{for(t=i,r=n,c=0,s=t;s;s=B(s))c++;for(s=0,l=r;l;l=B(l))s++;for(;0<c-s;)t=B(t),c--;for(;0<s-c;)r=B(r),s--;for(;c--;){if(t===r||t===r.alternate)break e;t=B(t),r=B(r)}t=null}else t=null;for(r=t,t=[];i&&i!==r&&(null===(c=i.alternate)||c!==r);)t.push(i),i=B(i);for(i=[];n&&n!==r&&(null===(c=n.alternate)||c!==r);)i.push(n),n=B(n);for(n=0;n<t.length;n++)j(t[n],"bubbled",e);for(n=i.length;0<n--;)j(i[n],"captured",o);return[e,o]}},ChangeEventPlugin:tM,SelectEventPlugin:{eventTypes:oy,extractEvents:function(e,t,o,n){var r,i=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;if(!(r=!i)){e:{i=ou(i),r=_.onSelect;for(var s=0;s<r.length;s++){var a=r[s];if(!i.hasOwnProperty(a)||!i[a]){i=!1;break e}}i=!0}r=!i}if(r)return null;switch(i=t?W(t):window,e){case"focus":(eF(i)||"true"===i.contentEditable)&&(ow=i,oC=t,oS=null);break;case"blur":oS=oC=ow=null;break;case"mousedown":ox=!0;break;case"contextmenu":case"mouseup":case"dragend":return ox=!1,o_(o,n);case"selectionchange":if(ov)break;case"keydown":case"keyup":return o_(o,n)}return null}},BeforeInputEventPlugin:{eventTypes:ex,extractEvents:function(e,t,o,n){var r=void 0,i=void 0;if(ey)t:{switch(e){case"compositionstart":r=ex.compositionStart;break t;case"compositionend":r=ex.compositionEnd;break t;case"compositionupdate":r=ex.compositionUpdate;break t}r=void 0}else ek?eR(e,o)&&(r=ex.compositionEnd):"keydown"===e&&229===o.keyCode&&(r=ex.compositionStart);return r?(eS&&"ko"!==o.locale&&(ek||r!==ex.compositionStart?r===ex.compositionEnd&&ek&&(i=ec()):(ea="value"in(es=n)?es.value:es.textContent,ek=!0)),r=eg.getPooled(r,t,o,n),i?r.data=i:null!==(i=eT(o))&&(r.data=i),q(r),i=r):i=null,(e=eC?function(e,t){switch(e){case"compositionend":return eT(t);case"keypress":if(32!==t.which)return null;return e_=!0," ";case"textInput":return" "===(e=t.data)&&e_?null:e;default:return null}}(e,o):function(e,t){if(ek)return"compositionend"===e||!ey&&eR(e,t)?(e=ec(),el=ea=es=null,ek=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eS&&"ko"!==t.locale?null:t.data}}(e,o))?((t=eb.getPooled(ex.beforeInput,t,o,n)).data=e,q(t)):t=null,null===i?t:null===t?i:[i,t]}}});var oM={html:"http://www.w3.org/1999/xhtml",svg:"http://www.w3.org/2000/svg"};function oD(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oA(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?oD(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var o$=void 0,oP=(n=function(e,t){if(e.namespaceURI!==oM.svg||"innerHTML"in e)e.innerHTML=t;else{for((o$=o$||document.createElement("div")).innerHTML="<svg>"+t+"</svg>",t=o$.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,o,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,o,r)})}:n);function oN(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&3===o.nodeType){o.nodeValue=t;return}}e.textContent=t}var oz={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oH=["Webkit","ms","Moz","O"];function oL(e,t,o){return null==t||"boolean"==typeof t||""===t?"":o||"number"!=typeof t||0===t||oz.hasOwnProperty(e)&&oz[e]?(""+t).trim():t+"px"}function oF(e,t){for(var o in e=e.style,t)if(t.hasOwnProperty(o)){var n=0===o.indexOf("--"),r=oL(o,t[o],n);"float"===o&&(o="cssFloat"),n?e.setProperty(o,r):e[o]=r}}Object.keys(oz).forEach(function(e){oH.forEach(function(t){oz[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=oz[e]})});var oW=a({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oG(e,t){t&&(oW[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&c("137",e,""),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&c("60"),"object"==typeof t.dangerouslySetInnerHTML&&"__html"in t.dangerouslySetInnerHTML||c("61")),null!=t.style&&"object"!=typeof t.style&&c("62",""))}function oB(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function oU(e,t){var o=ou(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=_[t];for(var n=0;n<t.length;n++){var r=t[n];if(!o.hasOwnProperty(r)||!o[r]){switch(r){case"scroll":os("scroll",e);break;case"focus":case"blur":os("focus",e),os("blur",e),o.blur=!0,o.focus=!0;break;case"cancel":case"close":eG(r)&&os(r,e);break;case"invalid":case"submit":case"reset":break;default:-1===ei.indexOf(r)&&oi(r,e)}o[r]=!0}}}function oV(){}var oj=null,oZ=null;function oq(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function oK(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var oY="function"==typeof setTimeout?setTimeout:void 0,oQ="function"==typeof clearTimeout?clearTimeout:void 0,oX=l.unstable_scheduleCallback,oJ=l.unstable_cancelCallback;function o0(e){for(e=e.nextSibling;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}function o1(e){for(e=e.firstChild;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}var o2=[],o5=-1;function o3(e){0>o5||(e.current=o2[o5],o2[o5]=null,o5--)}function o6(e,t){o2[++o5]=e.current,e.current=t}var o4={},o7={current:o4},o9={current:!1},o8=o4;function ne(e,t){var o=e.type.contextTypes;if(!o)return o4;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var r,i={};for(r in o)i[r]=t[r];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function nt(e){return null!=(e=e.childContextTypes)}function no(e){o3(o9,e),o3(o7,e)}function nn(e){o3(o9,e),o3(o7,e)}function nr(e,t,o){o7.current!==o4&&c("168"),o6(o7,t,e),o6(o9,o,e)}function ni(e,t,o){var n=e.stateNode;if(e=t.childContextTypes,"function"!=typeof n.getChildContext)return o;for(var r in n=n.getChildContext())r in e||c("108",e8(t)||"Unknown",r);return a({},o,n)}function ns(e){var t=e.stateNode;return t=t&&t.__reactInternalMemoizedMergedChildContext||o4,o8=o7.current,o6(o7,t,e),o6(o9,o9.current,e),!0}function na(e,t,o){var n=e.stateNode;n||c("169"),o?(t=ni(e,t,o8),n.__reactInternalMemoizedMergedChildContext=t,o3(o9,e),o3(o7,e),o6(o7,t,e)):o3(o9,e),o6(o9,o,e)}var nl=null,nc=null;function nd(e){return function(t){try{return e(t)}catch(e){}}}function nh(e,t,o,n){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function nu(e,t,o,n){return new nh(e,t,o,n)}function np(e){return!(!(e=e.prototype)||!e.isReactComponent)}function nf(e,t){var o=e.alternate;return null===o?((o=nu(e.tag,t,e.key,e.mode)).elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.effectTag=0,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null),o.childExpirationTime=e.childExpirationTime,o.expirationTime=e.expirationTime,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,o.contextDependencies=e.contextDependencies,o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function nm(e,t,o,n,r,i){var s=2;if(n=e,"function"==typeof e)np(e)&&(s=1);else if("string"==typeof e)s=5;else e:switch(e){case eQ:return ng(o.children,r,i,t);case e2:return nb(o,3|r,i,t);case eX:return nb(o,2|r,i,t);case eJ:return(e=nu(12,o,t,4|r)).elementType=eJ,e.type=eJ,e.expirationTime=i,e;case e3:return(e=nu(13,o,t,r)).elementType=e3,e.type=e3,e.expirationTime=i,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case e0:s=10;break e;case e1:s=9;break e;case e5:s=11;break e;case e6:s=14;break e;case e4:s=16,n=null;break e}c("130",null==e?e:typeof e,"")}return(t=nu(s,o,t,r)).elementType=e,t.type=n,t.expirationTime=i,t}function ng(e,t,o,n){return(e=nu(7,e,n,t)).expirationTime=o,e}function nb(e,t,o,n){return e=nu(8,e,n,t),t=0==(1&t)?eX:e2,e.elementType=t,e.type=t,e.expirationTime=o,e}function nv(e,t,o){return(e=nu(6,e,null,t)).expirationTime=o,e}function ny(e,t,o){return(t=nu(4,null!==e.children?e.children:[],e.key,t)).expirationTime=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nw(e,t){e.didError=!1;var o=e.earliestPendingTime;0===o?e.earliestPendingTime=e.latestPendingTime=t:o<t?e.earliestPendingTime=t:e.latestPendingTime>t&&(e.latestPendingTime=t),nx(t,e)}function nC(e,t){e.didError=!1,e.latestPingedTime>=t&&(e.latestPingedTime=0);var o=e.earliestPendingTime,n=e.latestPendingTime;o===t?e.earliestPendingTime=n===t?e.latestPendingTime=0:n:n===t&&(e.latestPendingTime=o),o=e.earliestSuspendedTime,n=e.latestSuspendedTime,0===o?e.earliestSuspendedTime=e.latestSuspendedTime=t:o<t?e.earliestSuspendedTime=t:n>t&&(e.latestSuspendedTime=t),nx(t,e)}function nS(e,t){var o=e.earliestPendingTime;return e=e.earliestSuspendedTime,o>t&&(t=o),e>t&&(t=e),t}function nx(e,t){var o=t.earliestSuspendedTime,n=t.latestSuspendedTime,r=t.earliestPendingTime,i=t.latestPingedTime;0===(r=0!==r?r:i)&&(0===e||n<e)&&(r=n),0!==(e=r)&&o>e&&(e=o),t.nextExpirationTimeToWorkOn=r,t.expirationTime=e}function n_(e,t){if(e&&e.defaultProps)for(var o in t=a({},t),e=e.defaultProps)void 0===t[o]&&(t[o]=e[o]);return t}var nR=(new s.Component).refs;function nT(e,t,o,n){o=null==(o=o(n,t=e.memoizedState))?t:a({},t,o),e.memoizedState=o,null!==(n=e.updateQueue)&&0===e.expirationTime&&(n.baseState=o)}var nk={isMounted:function(e){return!!(e=e._reactInternalFiber)&&2===tj(e)},enqueueSetState:function(e,t,o){e=e._reactInternalFiber;var n=st(),r=rK(n=iN(n,e));r.payload=t,null!=o&&(r.callback=o),iM(),rQ(e,r),iF(e,n)},enqueueReplaceState:function(e,t,o){e=e._reactInternalFiber;var n=st(),r=rK(n=iN(n,e));r.tag=rU,r.payload=t,null!=o&&(r.callback=o),iM(),rQ(e,r),iF(e,n)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var o=st(),n=rK(o=iN(o,e));n.tag=rV,null!=t&&(n.callback=t),iM(),rQ(e,n),iF(e,o)}};function nE(e,t,o,n,r,i,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,i,s):!t.prototype||!t.prototype.isPureReactComponent||!tV(o,n)||!tV(r,i)}function nO(e,t,o){var n=!1,r=o4,i=t.contextType;return"object"==typeof i&&null!==i?i=rB(i):(r=nt(t)?o8:o7.current,i=(n=null!=(n=t.contextTypes))?ne(e,r):o4),t=new t(o,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=nk,e.stateNode=t,t._reactInternalFiber=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function nI(e,t,o,n){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(o,n),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(o,n),t.state!==e&&nk.enqueueReplaceState(t,t.state,null)}function nM(e,t,o,n){var r=e.stateNode;r.props=o,r.state=e.memoizedState,r.refs=nR;var i=t.contextType;"object"==typeof i&&null!==i?r.context=rB(i):(i=nt(t)?o8:o7.current,r.context=ne(e,i)),null!==(i=e.updateQueue)&&(r1(e,i,o,r,n),r.state=e.memoizedState),"function"==typeof(i=t.getDerivedStateFromProps)&&(nT(e,t,i,o),r.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof r.getSnapshotBeforeUpdate||"function"!=typeof r.UNSAFE_componentWillMount&&"function"!=typeof r.componentWillMount||(t=r.state,"function"==typeof r.componentWillMount&&r.componentWillMount(),"function"==typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),t!==r.state&&nk.enqueueReplaceState(r,r.state,null),null!==(i=e.updateQueue)&&(r1(e,i,o,r,n),r.state=e.memoizedState)),"function"==typeof r.componentDidMount&&(e.effectTag|=4)}var nD=Array.isArray;function nA(e,t,o){if(null!==(e=o.ref)&&"function"!=typeof e&&"object"!=typeof e){if(o._owner){o=o._owner;var n=void 0;o&&(1!==o.tag&&c("309"),n=o.stateNode),n||c("147",e);var r=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===r?t.ref:((t=function(e){var t=n.refs;t===nR&&(t=n.refs={}),null===e?delete t[r]:t[r]=e})._stringRef=r,t)}"string"!=typeof e&&c("284"),o._owner||c("290",e)}return e}function n$(e,t){"textarea"!==e.type&&c("31","[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,"")}function nP(e){function t(t,o){if(e){var n=t.lastEffect;null!==n?(n.nextEffect=o,t.lastEffect=o):t.firstEffect=t.lastEffect=o,o.nextEffect=null,o.effectTag=8}}function o(o,n){if(!e)return null;for(;null!==n;)t(o,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function r(e,t,o){return(e=nf(e,t,o)).index=0,e.sibling=null,e}function i(t,o,n){return(t.index=n,e)?null!==(n=t.alternate)?(n=n.index)<o?(t.effectTag=2,o):n:(t.effectTag=2,o):o}function s(t){return e&&null===t.alternate&&(t.effectTag=2),t}function a(e,t,o,n){return null===t||6!==t.tag?(t=nv(o,e.mode,n)).return=e:(t=r(t,o,n)).return=e,t}function l(e,t,o,n){return null!==t&&t.elementType===o.type?(n=r(t,o.props,n)).ref=nA(e,t,o):(n=nm(o.type,o.key,o.props,null,e.mode,n)).ref=nA(e,t,o),n.return=e,n}function d(e,t,o,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==o.containerInfo||t.stateNode.implementation!==o.implementation?(t=ny(o,e.mode,n)).return=e:(t=r(t,o.children||[],n)).return=e,t}function h(e,t,o,n,i){return null===t||7!==t.tag?(t=ng(o,e.mode,n,i)).return=e:(t=r(t,o,n)).return=e,t}function u(e,t,o){if("string"==typeof t||"number"==typeof t)return(t=nv(""+t,e.mode,o)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case eK:return(o=nm(t.type,t.key,t.props,null,e.mode,o)).ref=nA(e,null,t),o.return=e,o;case eY:return(t=ny(t,e.mode,o)).return=e,t}if(nD(t)||e9(t))return(t=ng(t,e.mode,o,null)).return=e,t;n$(e,t)}return null}function p(e,t,o,n){var r=null!==t?t.key:null;if("string"==typeof o||"number"==typeof o)return null!==r?null:a(e,t,""+o,n);if("object"==typeof o&&null!==o){switch(o.$$typeof){case eK:return o.key===r?o.type===eQ?h(e,t,o.props.children,n,r):l(e,t,o,n):null;case eY:return o.key===r?d(e,t,o,n):null}if(nD(o)||e9(o))return null!==r?null:h(e,t,o,n,null);n$(e,o)}return null}function f(e,t,o,n,r){if("string"==typeof n||"number"==typeof n)return a(t,e=e.get(o)||null,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case eK:return e=e.get(null===n.key?o:n.key)||null,n.type===eQ?h(t,e,n.props.children,r,n.key):l(t,e,n,r);case eY:return d(t,e=e.get(null===n.key?o:n.key)||null,n,r)}if(nD(n)||e9(n))return h(t,e=e.get(o)||null,n,r,null);n$(t,n)}return null}return function(a,l,d,h){var m="object"==typeof d&&null!==d&&d.type===eQ&&null===d.key;m&&(d=d.props.children);var g="object"==typeof d&&null!==d;if(g)switch(d.$$typeof){case eK:e:{for(g=d.key,m=l;null!==m;){if(m.key===g){if(7===m.tag?d.type===eQ:m.elementType===d.type){o(a,m.sibling),(l=r(m,d.type===eQ?d.props.children:d.props,h)).ref=nA(a,m,d),l.return=a,a=l;break e}o(a,m);break}t(a,m),m=m.sibling}d.type===eQ?((l=ng(d.props.children,a.mode,h,d.key)).return=a,a=l):((h=nm(d.type,d.key,d.props,null,a.mode,h)).ref=nA(a,l,d),h.return=a,a=h)}return s(a);case eY:e:{for(m=d.key;null!==l;){if(l.key===m){if(4===l.tag&&l.stateNode.containerInfo===d.containerInfo&&l.stateNode.implementation===d.implementation){o(a,l.sibling),(l=r(l,d.children||[],h)).return=a,a=l;break e}o(a,l);break}t(a,l),l=l.sibling}(l=ny(d,a.mode,h)).return=a,a=l}return s(a)}if("string"==typeof d||"number"==typeof d)return d=""+d,null!==l&&6===l.tag?(o(a,l.sibling),(l=r(l,d,h)).return=a):(o(a,l),(l=nv(d,a.mode,h)).return=a),s(a=l);if(nD(d))return function(r,s,a,l){for(var c=null,d=null,h=s,m=s=0,g=null;null!==h&&m<a.length;m++){h.index>m?(g=h,h=null):g=h.sibling;var b=p(r,h,a[m],l);if(null===b){null===h&&(h=g);break}e&&h&&null===b.alternate&&t(r,h),s=i(b,s,m),null===d?c=b:d.sibling=b,d=b,h=g}if(m===a.length)return o(r,h),c;if(null===h){for(;m<a.length;m++)(h=u(r,a[m],l))&&(s=i(h,s,m),null===d?c=h:d.sibling=h,d=h);return c}for(h=n(r,h);m<a.length;m++)(g=f(h,r,m,a[m],l))&&(e&&null!==g.alternate&&h.delete(null===g.key?m:g.key),s=i(g,s,m),null===d?c=g:d.sibling=g,d=g);return e&&h.forEach(function(e){return t(r,e)}),c}(a,l,d,h);if(e9(d))return function(r,s,a,l){var d=e9(a);"function"!=typeof d&&c("150"),null==(a=d.call(a))&&c("151");for(var h=d=null,m=s,g=s=0,b=null,v=a.next();null!==m&&!v.done;g++,v=a.next()){m.index>g?(b=m,m=null):b=m.sibling;var y=p(r,m,v.value,l);if(null===y){m||(m=b);break}e&&m&&null===y.alternate&&t(r,m),s=i(y,s,g),null===h?d=y:h.sibling=y,h=y,m=b}if(v.done)return o(r,m),d;if(null===m){for(;!v.done;g++,v=a.next())null!==(v=u(r,v.value,l))&&(s=i(v,s,g),null===h?d=v:h.sibling=v,h=v);return d}for(m=n(r,m);!v.done;g++,v=a.next())null!==(v=f(m,r,g,v.value,l))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),s=i(v,s,g),null===h?d=v:h.sibling=v,h=v);return e&&m.forEach(function(e){return t(r,e)}),d}(a,l,d,h);if(g&&n$(a,d),void 0===d&&!m)switch(a.tag){case 1:case 0:c("152",(h=a.type).displayName||h.name||"Component")}return o(a,l)}}var nN=nP(!0),nz=nP(!1),nH={},nL={current:nH},nF={current:nH},nW={current:nH};function nG(e){return e===nH&&c("174"),e}function nB(e,t){o6(nW,t,e),o6(nF,e,e),o6(nL,nH,e);var o=t.nodeType;switch(o){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oA(null,"");break;default:t=oA(t=(o=8===o?t.parentNode:t).namespaceURI||null,o=o.tagName)}o3(nL,e),o6(nL,t,e)}function nU(e){o3(nL,e),o3(nF,e),o3(nW,e)}function nV(e){nG(nW.current);var t=nG(nL.current),o=oA(t,e.type);t!==o&&(o6(nF,e,e),o6(nL,o,e))}function nj(e){nF.current===e&&(o3(nL,e),o3(nF,e))}var nZ=ej.ReactCurrentDispatcher,nq=0,nK=null,nY=null,nQ=null,nX=null,nJ=null,n0=null,n1=0,n2=null,n5=0,n3=!1,n6=null,n4=0;function n7(){c("307")}function n9(e,t){if(null===t)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!tB(e[o],t[o]))return!1;return!0}function n8(e,t,o,n,r,i){if(nq=i,nK=t,nQ=null!==e?e.memoizedState:null,nZ.current=null===nQ?ru:rp,t=o(n,r),n3){do n3=!1,n4+=1,nQ=null!==e?e.memoizedState:null,n0=nX,n2=nJ=nY=null,nZ.current=rp,t=o(n,r);while(n3)n6=null,n4=0}return nZ.current=rh,(e=nK).memoizedState=nX,e.expirationTime=n1,e.updateQueue=n2,e.effectTag|=n5,e=null!==nY&&null!==nY.next,nq=0,n0=nJ=nX=nQ=nY=nK=null,n1=0,n2=null,n5=0,e&&c("300"),t}function re(){nZ.current=rh,nq=0,n0=nJ=nX=nQ=nY=nK=null,n1=0,n2=null,n5=0,n3=!1,n6=null,n4=0}function rt(){var e={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};return null===nJ?nX=nJ=e:nJ=nJ.next=e,nJ}function ro(){if(null!==n0)n0=(nJ=n0).next,nQ=null!==(nY=nQ)?nY.next:null;else{null===nQ&&c("310");var e={memoizedState:(nY=nQ).memoizedState,baseState:nY.baseState,queue:nY.queue,baseUpdate:nY.baseUpdate,next:null};nJ=null===nJ?nX=e:nJ.next=e,nQ=nY.next}return nJ}function rn(e,t){return"function"==typeof t?t(e):t}function rr(e){var t=ro(),o=t.queue;if(null===o&&c("311"),0<n4){var n=o.dispatch;if(null!==n6){var r=n6.get(o);if(void 0!==r){n6.delete(o);var i=t.memoizedState;do i=e(i,r.action),r=r.next;while(null!==r)return tB(i,t.memoizedState)||(r_=!0),t.memoizedState=i,t.baseUpdate===o.last&&(t.baseState=i),o.eagerReducer=e,o.eagerState=i,[i,n]}}return[t.memoizedState,n]}n=o.last;var s=t.baseUpdate;if(i=t.baseState,null!==s?(null!==n&&(n.next=null),n=s.next):n=null!==n?n.next:null,null!==n){var a=r=null,l=n,d=!1;do{var h=l.expirationTime;h<nq?(d||(d=!0,a=s,r=i),h>n1&&(n1=h)):i=l.eagerReducer===e?l.eagerState:e(i,l.action),s=l,l=l.next}while(null!==l&&l!==n)d||(a=s,r=i),tB(i,t.memoizedState)||(r_=!0),t.memoizedState=i,t.baseUpdate=a,t.baseState=r,o.eagerReducer=e,o.eagerState=i}return[t.memoizedState,o.dispatch]}function ri(e,t,o,n){return e={tag:e,create:t,destroy:o,deps:n,next:null},null===n2?(n2={lastEffect:null}).lastEffect=e.next=e:null===(t=n2.lastEffect)?n2.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n2.lastEffect=e),e}function rs(e,t,o,n){var r=rt();n5|=e,r.memoizedState=ri(t,o,void 0,void 0===n?null:n)}function ra(e,t,o,n){var r=ro();n=void 0===n?null:n;var i=void 0;if(null!==nY){var s=nY.memoizedState;if(i=s.destroy,null!==n&&n9(n,s.deps)){ri(0,o,i,n);return}}n5|=e,r.memoizedState=ri(t,o,i,n)}function rl(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function rc(){}function rd(e,t,o){25>n4||c("301");var n=e.alternate;if(e===nK||null!==n&&n===nK){if(n3=!0,e={expirationTime:nq,action:o,eagerReducer:null,eagerState:null,next:null},null===n6&&(n6=new Map),void 0===(o=n6.get(t)))n6.set(t,e);else{for(t=o;null!==t.next;)t=t.next;t.next=e}}else{iM();var r=st(),i={expirationTime:r=iN(r,e),action:o,eagerReducer:null,eagerState:null,next:null},s=t.last;if(null===s)i.next=i;else{var a=s.next;null!==a&&(i.next=a),s.next=i}if(t.last=i,0===e.expirationTime&&(null===n||0===n.expirationTime)&&null!==(n=t.eagerReducer))try{var l=t.eagerState,d=n(l,o);if(i.eagerReducer=n,i.eagerState=d,tB(d,l))return}catch(e){}finally{}iF(e,r)}}var rh={readContext:rB,useCallback:n7,useContext:n7,useEffect:n7,useImperativeHandle:n7,useLayoutEffect:n7,useMemo:n7,useReducer:n7,useRef:n7,useState:n7,useDebugValue:n7},ru={readContext:rB,useCallback:function(e,t){return rt().memoizedState=[e,void 0===t?null:t],e},useContext:rB,useEffect:function(e,t){return rs(516,192,e,t)},useImperativeHandle:function(e,t,o){return o=null!=o?o.concat([e]):null,rs(4,36,rl.bind(null,t,e),o)},useLayoutEffect:function(e,t){return rs(4,36,e,t)},useMemo:function(e,t){var o=rt();return t=void 0===t?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var n=rt();return t=void 0!==o?o(t):t,n.memoizedState=n.baseState=t,e=(e=n.queue={last:null,dispatch:null,eagerReducer:e,eagerState:t}).dispatch=rd.bind(null,nK,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},rt().memoizedState=e},useState:function(e){var t=rt();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={last:null,dispatch:null,eagerReducer:rn,eagerState:e}).dispatch=rd.bind(null,nK,e),[t.memoizedState,e]},useDebugValue:rc},rp={readContext:rB,useCallback:function(e,t){var o=ro();t=void 0===t?null:t;var n=o.memoizedState;return null!==n&&null!==t&&n9(t,n[1])?n[0]:(o.memoizedState=[e,t],e)},useContext:rB,useEffect:function(e,t){return ra(516,192,e,t)},useImperativeHandle:function(e,t,o){return o=null!=o?o.concat([e]):null,ra(4,36,rl.bind(null,t,e),o)},useLayoutEffect:function(e,t){return ra(4,36,e,t)},useMemo:function(e,t){var o=ro();t=void 0===t?null:t;var n=o.memoizedState;return null!==n&&null!==t&&n9(t,n[1])?n[0]:(e=e(),o.memoizedState=[e,t],e)},useReducer:rr,useRef:function(){return ro().memoizedState},useState:function(e){return rr(rn,e)},useDebugValue:rc},rf=null,rm=null,rg=!1;function rb(e,t){var o=nu(5,null,null,0);o.elementType="DELETED",o.type="DELETED",o.stateNode=t,o.return=e,o.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=o,e.lastEffect=o):e.firstEffect=e.lastEffect=o}function rv(e,t){switch(e.tag){case 5:var o=e.type;return null!==(t=1!==t.nodeType||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);default:return!1}}function ry(e){if(rg){var t=rm;if(t){var o=t;if(!rv(e,t)){if(!(t=o0(o))||!rv(e,t)){e.effectTag|=2,rg=!1,rf=e;return}rb(rf,o)}rf=e,rm=o1(t)}else e.effectTag|=2,rg=!1,rf=e}}function rw(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&18!==e.tag;)e=e.return;rf=e}function rC(e){if(e!==rf)return!1;if(!rg)return rw(e),rg=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!oK(t,e.memoizedProps))for(t=rm;t;)rb(e,t),t=o0(t);return rw(e),rm=rf?o0(e.stateNode):null,!0}function rS(){rm=rf=null,rg=!1}var rx=ej.ReactCurrentOwner,r_=!1;function rR(e,t,o,n){t.child=null===e?nz(t,null,o,n):nN(t,e.child,o,n)}function rT(e,t,o,n,r){o=o.render;var i=t.ref;return(rG(t,r),n=n8(e,t,o,n,i,r),null===e||r_)?(t.effectTag|=1,rR(e,t,n,r),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=r&&(e.expirationTime=0),rP(e,t,r))}function rk(e,t,o,n,r,i){if(null===e){var s=o.type;return"function"!=typeof s||np(s)||void 0!==s.defaultProps||null!==o.compare||void 0!==o.defaultProps?((e=nm(o.type,null,n,null,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,rE(e,t,s,n,r,i))}return(s=e.child,r<i&&(r=s.memoizedProps,(o=null!==(o=o.compare)?o:tV)(r,n)&&e.ref===t.ref))?rP(e,t,i):(t.effectTag|=1,(e=nf(s,n,i)).ref=t.ref,e.return=t,t.child=e)}function rE(e,t,o,n,r,i){return null!==e&&tV(e.memoizedProps,n)&&e.ref===t.ref&&(r_=!1,r<i)?rP(e,t,i):rI(e,t,o,n,i)}function rO(e,t){var o=t.ref;(null===e&&null!==o||null!==e&&e.ref!==o)&&(t.effectTag|=128)}function rI(e,t,o,n,r){var i=nt(o)?o8:o7.current;return(i=ne(t,i),rG(t,r),o=n8(e,t,o,n,i,r),null===e||r_)?(t.effectTag|=1,rR(e,t,o,r),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=r&&(e.expirationTime=0),rP(e,t,r))}function rM(e,t,o,n,r){if(nt(o)){var i=!0;ns(t)}else i=!1;if(rG(t,r),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),nO(t,o,n,r),nM(t,o,n,r),n=!0;else if(null===e){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=o.contextType;c="object"==typeof c&&null!==c?rB(c):ne(t,c=nt(o)?o8:o7.current);var d=o.getDerivedStateFromProps,h="function"==typeof d||"function"==typeof s.getSnapshotBeforeUpdate;h||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==n||l!==c)&&nI(t,s,n,c),rj=!1;var u=t.memoizedState;l=s.state=u;var p=t.updateQueue;null!==p&&(r1(t,p,n,s,r),l=t.memoizedState),a!==n||u!==l||o9.current||rj?("function"==typeof d&&(nT(t,o,d,n),l=t.memoizedState),(a=rj||nE(t,o,a,n,u,l,c))?(h||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.effectTag|=4)):("function"==typeof s.componentDidMount&&(t.effectTag|=4),t.memoizedProps=n,t.memoizedState=l),s.props=n,s.state=l,s.context=c,n=a):("function"==typeof s.componentDidMount&&(t.effectTag|=4),n=!1)}else s=t.stateNode,a=t.memoizedProps,s.props=t.type===t.elementType?a:n_(t.type,a),l=s.context,c="object"==typeof(c=o.contextType)&&null!==c?rB(c):ne(t,c=nt(o)?o8:o7.current),(h="function"==typeof(d=o.getDerivedStateFromProps)||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==n||l!==c)&&nI(t,s,n,c),rj=!1,l=t.memoizedState,u=s.state=l,null!==(p=t.updateQueue)&&(r1(t,p,n,s,r),u=t.memoizedState),a!==n||l!==u||o9.current||rj?("function"==typeof d&&(nT(t,o,d,n),u=t.memoizedState),(d=rj||nE(t,o,a,n,l,u,c))?(h||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(n,u,c),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(n,u,c)),"function"==typeof s.componentDidUpdate&&(t.effectTag|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),t.memoizedProps=n,t.memoizedState=u),s.props=n,s.state=u,s.context=c,n=d):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),n=!1);return rD(e,t,o,n,i,r)}function rD(e,t,o,n,r,i){rO(e,t);var s=0!=(64&t.effectTag);if(!n&&!s)return r&&na(t,o,!1),rP(e,t,i);n=t.stateNode,rx.current=t;var a=s&&"function"!=typeof o.getDerivedStateFromError?null:n.render();return t.effectTag|=1,null!==e&&s?(t.child=nN(t,e.child,null,i),t.child=nN(t,null,a,i)):rR(e,t,a,i),t.memoizedState=n.state,r&&na(t,o,!0),t.child}function rA(e){var t=e.stateNode;t.pendingContext?nr(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nr(e,t.context,!1),nB(e,t.containerInfo)}function r$(e,t,o){var n=t.mode,r=t.pendingProps,i=t.memoizedState;if(0==(64&t.effectTag)){i=null;var s=!1}else i={timedOutAt:null!==i?i.timedOutAt:0},s=!0,t.effectTag&=-65;if(null===e){if(s){var a=r.fallback;e=ng(null,n,0,null),0==(1&t.mode)&&(e.child=null!==t.memoizedState?t.child.child:t.child),n=ng(a,n,o,null),e.sibling=n,(o=e).return=n.return=t}else o=n=nz(t,null,r.children,o)}else null!==e.memoizedState?(a=(n=e.child).sibling,s?(o=r.fallback,r=nf(n,n.pendingProps,0),0==(1&t.mode)&&(s=null!==t.memoizedState?t.child.child:t.child)!==n.child&&(r.child=s),n=r.sibling=nf(a,o,a.expirationTime),o=r,r.childExpirationTime=0,o.return=n.return=t):o=n=nN(t,n.child,r.children,o)):(a=e.child,s?(s=r.fallback,(r=ng(null,n,0,null)).child=a,0==(1&t.mode)&&(r.child=null!==t.memoizedState?t.child.child:t.child),n=r.sibling=ng(s,n,o,null),n.effectTag|=2,o=r,r.childExpirationTime=0,o.return=n.return=t):n=o=nN(t,a,r.children,o)),t.stateNode=e.stateNode;return t.memoizedState=i,t.child=o,n}function rP(e,t,o){if(null!==e&&(t.contextDependencies=e.contextDependencies),t.childExpirationTime<o)return null;if(null!==e&&t.child!==e.child&&c("153"),null!==t.child){for(o=nf(e=t.child,e.pendingProps,e.expirationTime),t.child=o,o.return=t;null!==e.sibling;)e=e.sibling,(o=o.sibling=nf(e,e.pendingProps,e.expirationTime)).return=t;o.sibling=null}return t.child}var rN={current:null},rz=null,rH=null,rL=null;function rF(e,t){var o=e.type._context;o6(rN,o._currentValue,e),o._currentValue=t}function rW(e){var t=rN.current;o3(rN,e),e.type._context._currentValue=t}function rG(e,t){rz=e,rL=rH=null;var o=e.contextDependencies;null!==o&&o.expirationTime>=t&&(r_=!0),e.contextDependencies=null}function rB(e,t){return rL!==e&&!1!==t&&0!==t&&(("number"!=typeof t||1073741823===t)&&(rL=e,t=1073741823),t={context:e,observedBits:t,next:null},null===rH?(null===rz&&c("308"),rH=t,rz.contextDependencies={first:t,expirationTime:0}):rH=rH.next=t),e._currentValue}var rU=1,rV=2,rj=!1;function rZ(e){return{baseState:e,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function rq(e){return{baseState:e.baseState,firstUpdate:e.firstUpdate,lastUpdate:e.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function rK(e){return{expirationTime:e,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function rY(e,t){null===e.lastUpdate?e.firstUpdate=e.lastUpdate=t:(e.lastUpdate.next=t,e.lastUpdate=t)}function rQ(e,t){var o=e.alternate;if(null===o){var n=e.updateQueue,r=null;null===n&&(n=e.updateQueue=rZ(e.memoizedState))}else n=e.updateQueue,r=o.updateQueue,null===n?null===r?(n=e.updateQueue=rZ(e.memoizedState),r=o.updateQueue=rZ(o.memoizedState)):n=e.updateQueue=rq(r):null===r&&(r=o.updateQueue=rq(n));null===r||n===r?rY(n,t):null===n.lastUpdate||null===r.lastUpdate?(rY(n,t),rY(r,t)):(rY(n,t),r.lastUpdate=t)}function rX(e,t){var o=e.updateQueue;null===(o=null===o?e.updateQueue=rZ(e.memoizedState):rJ(e,o)).lastCapturedUpdate?o.firstCapturedUpdate=o.lastCapturedUpdate=t:(o.lastCapturedUpdate.next=t,o.lastCapturedUpdate=t)}function rJ(e,t){var o=e.alternate;return null!==o&&t===o.updateQueue&&(t=e.updateQueue=rq(t)),t}function r0(e,t,o,n,r,i){switch(o.tag){case rU:return"function"==typeof(e=o.payload)?e.call(i,n,r):e;case 3:e.effectTag=-2049&e.effectTag|64;case 0:if(null==(r="function"==typeof(e=o.payload)?e.call(i,n,r):e))break;return a({},n,r);case rV:rj=!0}return n}function r1(e,t,o,n,r){rj=!1,t=rJ(e,t);for(var i=t.baseState,s=null,a=0,l=t.firstUpdate,c=i;null!==l;){var d=l.expirationTime;d<r?(null===s&&(s=l,i=c),a<d&&(a=d)):(c=r0(e,t,l,c,o,n),null!==l.callback&&(e.effectTag|=32,l.nextEffect=null,null===t.lastEffect?t.firstEffect=t.lastEffect=l:(t.lastEffect.nextEffect=l,t.lastEffect=l))),l=l.next}for(d=null,l=t.firstCapturedUpdate;null!==l;){var h=l.expirationTime;h<r?(null===d&&(d=l,null===s&&(i=c)),a<h&&(a=h)):(c=r0(e,t,l,c,o,n),null!==l.callback&&(e.effectTag|=32,l.nextEffect=null,null===t.lastCapturedEffect?t.firstCapturedEffect=t.lastCapturedEffect=l:(t.lastCapturedEffect.nextEffect=l,t.lastCapturedEffect=l))),l=l.next}null===s&&(t.lastUpdate=null),null===d?t.lastCapturedUpdate=null:e.effectTag|=32,null===s&&null===d&&(i=c),t.baseState=i,t.firstUpdate=s,t.firstCapturedUpdate=d,e.expirationTime=a,e.memoizedState=c}function r2(e,t,o){null!==t.firstCapturedUpdate&&(null!==t.lastUpdate&&(t.lastUpdate.next=t.firstCapturedUpdate,t.lastUpdate=t.lastCapturedUpdate),t.firstCapturedUpdate=t.lastCapturedUpdate=null),r5(t.firstEffect,o),t.firstEffect=t.lastEffect=null,r5(t.firstCapturedEffect,o),t.firstCapturedEffect=t.lastCapturedEffect=null}function r5(e,t){for(;null!==e;){var o=e.callback;null!==o&&(e.callback=null,"function"!=typeof o&&c("191",o),o.call(t)),e=e.nextEffect}}function r3(e,t){return{value:e,source:t,stack:te(t)}}function r6(e){e.effectTag|=4}var r4=void 0,r7=void 0,r9=void 0,r8=void 0;r4=function(e,t){for(var o=t.child;null!==o;){if(5===o.tag||6===o.tag)e.appendChild(o.stateNode);else if(4!==o.tag&&null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break;for(;null===o.sibling;){if(null===o.return||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},r7=function(){},r9=function(e,t,o,n,r){var i=e.memoizedProps;if(i!==n){var s=t.stateNode;switch(nG(nL.current),e=null,o){case"input":i=th(s,i),n=th(s,n),e=[];break;case"option":i=oR(s,i),n=oR(s,n),e=[];break;case"select":i=a({},i,{value:void 0}),n=a({},n,{value:void 0}),e=[];break;case"textarea":i=ok(s,i),n=ok(s,n),e=[];break;default:"function"!=typeof i.onClick&&"function"==typeof n.onClick&&(s.onclick=oV)}oG(o,n),s=o=void 0;var l=null;for(o in i)if(!n.hasOwnProperty(o)&&i.hasOwnProperty(o)&&null!=i[o]){if("style"===o){var c=i[o];for(s in c)c.hasOwnProperty(s)&&(l||(l={}),l[s]="")}else"dangerouslySetInnerHTML"!==o&&"children"!==o&&"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(x.hasOwnProperty(o)?e||(e=[]):(e=e||[]).push(o,null))}for(o in n){var d=n[o];if(c=null!=i?i[o]:void 0,n.hasOwnProperty(o)&&d!==c&&(null!=d||null!=c)){if("style"===o){if(c){for(s in c)!c.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(l||(l={}),l[s]="");for(s in d)d.hasOwnProperty(s)&&c[s]!==d[s]&&(l||(l={}),l[s]=d[s])}else l||(e||(e=[]),e.push(o,l)),l=d}else"dangerouslySetInnerHTML"===o?(d=d?d.__html:void 0,c=c?c.__html:void 0,null!=d&&c!==d&&(e=e||[]).push(o,""+d)):"children"===o?c===d||"string"!=typeof d&&"number"!=typeof d||(e=e||[]).push(o,""+d):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&(x.hasOwnProperty(o)?(null!=d&&oU(r,o),e||c===d||(e=[])):(e=e||[]).push(o,d))}}l&&(e=e||[]).push("style",l),r=e,(t.updateQueue=r)&&r6(t)}},r8=function(e,t,o,n){o!==n&&r6(t)};var ie="function"==typeof WeakSet?WeakSet:Set;function it(e,t){var o=t.source,n=t.stack;null===n&&null!==o&&(n=te(o)),null!==o&&e8(o.type),t=t.value,null!==e&&1===e.tag&&e8(e.type)}function io(e){var t=e.ref;if(null!==t){if("function"==typeof t)try{t(null)}catch(t){iP(e,t)}else t.current=null}}function ir(e,t,o){if(null!==(o=null!==(o=o.updateQueue)?o.lastEffect:null)){var n=o=o.next;do{if((n.tag&e)!=0){var r=n.destroy;n.destroy=void 0,void 0!==r&&r()}(n.tag&t)!=0&&(r=n.create,n.destroy=r()),n=n.next}while(n!==o)}}function ii(e){switch("function"==typeof nc&&nc(e),e.tag){case 0:case 11:case 14:case 15:var t=e.updateQueue;if(null!==t&&null!==(t=t.lastEffect)){var o=t=t.next;do{var n=o.destroy;if(void 0!==n)try{n()}catch(t){iP(e,t)}o=o.next}while(o!==t)}break;case 1:if(io(e),"function"==typeof(t=e.stateNode).componentWillUnmount)try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){iP(e,t)}break;case 5:io(e);break;case 4:il(e)}}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ia(e){e:{for(var t=e.return;null!==t;){if(is(t)){var o=t;break e}t=t.return}c("160"),o=void 0}var n=t=void 0;switch(o.tag){case 5:t=o.stateNode,n=!1;break;case 3:case 4:t=o.stateNode.containerInfo,n=!0;break;default:c("161")}16&o.effectTag&&(oN(t,""),o.effectTag&=-17);e:t:for(o=e;;){for(;null===o.sibling;){if(null===o.return||is(o.return)){o=null;break e}o=o.return}for(o.sibling.return=o.return,o=o.sibling;5!==o.tag&&6!==o.tag&&18!==o.tag;){if(2&o.effectTag||null===o.child||4===o.tag)continue t;o.child.return=o,o=o.child}if(!(2&o.effectTag)){o=o.stateNode;break e}}for(var r=e;;){if(5===r.tag||6===r.tag){if(o){if(n){var i=t,s=r.stateNode,a=o;8===i.nodeType?i.parentNode.insertBefore(s,a):i.insertBefore(s,a)}else t.insertBefore(r.stateNode,o)}else n?(s=t,a=r.stateNode,8===s.nodeType?(i=s.parentNode).insertBefore(a,s):(i=s).appendChild(a),null!=(s=s._reactRootContainer)||null!==i.onclick||(i.onclick=oV)):t.appendChild(r.stateNode)}else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===e)break;for(;null===r.sibling;){if(null===r.return||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function il(e){for(var t=e,o=!1,n=void 0,r=void 0;;){if(!o){o=t.return;e:for(;;){switch(null===o&&c("160"),o.tag){case 5:n=o.stateNode,r=!1;break e;case 3:case 4:n=o.stateNode.containerInfo,r=!0;break e}o=o.return}o=!0}if(5===t.tag||6===t.tag){e:for(var i=t,s=i;;)if(ii(s),null!==s.child&&4!==s.tag)s.child.return=s,s=s.child;else{if(s===i)break;for(;null===s.sibling;){if(null===s.return||s.return===i)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}r?(i=n,s=t.stateNode,8===i.nodeType?i.parentNode.removeChild(s):i.removeChild(s)):n.removeChild(t.stateNode)}else if(4===t.tag){if(null!==t.child){n=t.stateNode.containerInfo,r=!0,t.child.return=t,t=t.child;continue}}else if(ii(t),null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return;4===(t=t.return).tag&&(o=!1)}t.sibling.return=t.return,t=t.sibling}}function ic(e,t){switch(t.tag){case 0:case 11:case 14:case 15:ir(4,8,t);break;case 1:case 3:case 12:case 17:break;case 5:var o=t.stateNode;if(null!=o){var n=t.memoizedProps;e=null!==e?e.memoizedProps:n;var r=t.type,i=t.updateQueue;t.updateQueue=null,null!==i&&function(e,t,o,n,r){e[H]=r,"input"===o&&"radio"===r.type&&null!=r.name&&tp(e,r),oB(o,n),n=oB(o,r);for(var i=0;i<t.length;i+=2){var s=t[i],a=t[i+1];"style"===s?oF(e,a):"dangerouslySetInnerHTML"===s?oP(e,a):"children"===s?oN(e,a):tc(e,s,a,n)}switch(o){case"input":tf(e,r);break;case"textarea":oO(e,r);break;case"select":t=e._wrapperState.wasMultiple,e._wrapperState.wasMultiple=!!r.multiple,null!=(o=r.value)?oT(e,!!r.multiple,o,!1):!!r.multiple!==t&&(null!=r.defaultValue?oT(e,!!r.multiple,r.defaultValue,!0):oT(e,!!r.multiple,r.multiple?[]:"",!1))}}(o,i,r,e,n,t)}break;case 6:null===t.stateNode&&c("162"),t.stateNode.nodeValue=t.memoizedProps;break;case 13:if(o=t.memoizedState,n=void 0,e=t,null===o?n=!1:(n=!0,e=t.child,0===o.timedOutAt&&(o.timedOutAt=st())),null!==e&&function(e,t){for(var o=e;;){if(5===o.tag){var n=o.stateNode;if(t)n.style.display="none";else{n=o.stateNode;var r=o.memoizedProps.style;r=null!=r&&r.hasOwnProperty("display")?r.display:null,n.style.display=oL("display",r)}}else if(6===o.tag)o.stateNode.nodeValue=t?"":o.memoizedProps;else if(13===o.tag&&null!==o.memoizedState){(n=o.child.sibling).return=o,o=n;continue}else if(null!==o.child){o.child.return=o,o=o.child;continue}if(o===e)break;for(;null===o.sibling;){if(null===o.return||o.return===e)return;o=o.return}o.sibling.return=o.return,o=o.sibling}}(e,n),null!==(o=t.updateQueue)){t.updateQueue=null;var s=t.stateNode;null===s&&(s=t.stateNode=new ie),o.forEach(function(e){var o=iH.bind(null,t,e);s.has(e)||(s.add(e),e.then(o,o))})}break;default:c("163")}}var id="function"==typeof WeakMap?WeakMap:Map;function ih(e,t,o){(o=rK(o)).tag=3,o.payload={element:null};var n=t.value;return o.callback=function(){sh(n),it(e,t)},o}function iu(e,t,o){(o=rK(o)).tag=3;var n=e.type.getDerivedStateFromError;if("function"==typeof n){var r=t.value;o.payload=function(){return n(r)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(o.callback=function(){"function"!=typeof n&&(null===iE?iE=new Set([this]):iE.add(this));var o=t.value,r=t.stack;it(e,t),this.componentDidCatch(o,{componentStack:null!==r?r:""})}),o}var ip=ej.ReactCurrentDispatcher,im=ej.ReactCurrentOwner,ig=1073741822,ib=!1,iv=null,iy=null,iw=0,iC=-1,iS=!1,ix=null,i_=!1,iR=null,iT=null,ik=null,iE=null;function iO(){if(null!==iv)for(var e=iv.return;null!==e;){var t=e;switch(t.tag){case 1:null!=t.type.childContextTypes&&no(t);break;case 3:nU(t),nn(t);break;case 5:nj(t);break;case 4:nU(t);break;case 10:rW(t)}e=e.return}iy=null,iw=0,iC=-1,iS=!1,iv=null}function iI(e,t){ik=iT=iR=null;var o=ij;ij=!0;do{if(512&t.effectTag){var n=!1,r=void 0;try{var i=t;ir(128,0,i),ir(0,64,i)}catch(e){n=!0,r=e}n&&iP(t,r)}t=t.nextEffect}while(null!==t)ij=o,0!==(o=e.expirationTime)&&so(e,o),iX||ij||sa(1073741823,!1)}function iM(){null!==iT&&oJ(iT),null!==ik&&ik()}function iD(e){for(;;){var t=e.alternate,o=e.return,n=e.sibling;if(0==(1024&e.effectTag)){iv=e;e:{var r=t,i=iw,s=(t=e).pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 18:break;case 1:case 17:nt(t.type)&&no(t);break;case 3:nU(t),nn(t),(s=t.stateNode).pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(null===r||null===r.child)&&(rC(t),t.effectTag&=-3),r7(t);break;case 5:nj(t);var l=nG(nW.current);if(i=t.type,null!==r&&null!=t.stateNode)r9(r,t,i,s,l),r.ref!==t.ref&&(t.effectTag|=128);else if(s){var d=nG(nL.current);if(rC(t)){r=(s=t).stateNode;var h=s.type,u=s.memoizedProps,p=l;switch(r[z]=s,r[H]=u,i=void 0,l=h){case"iframe":case"object":oi("load",r);break;case"video":case"audio":for(h=0;h<ei.length;h++)oi(ei[h],r);break;case"source":oi("error",r);break;case"img":case"image":case"link":oi("error",r),oi("load",r);break;case"form":oi("reset",r),oi("submit",r);break;case"details":oi("toggle",r);break;case"input":tu(r,u),oi("invalid",r),oU(p,"onChange");break;case"select":r._wrapperState={wasMultiple:!!u.multiple},oi("invalid",r),oU(p,"onChange");break;case"textarea":oE(r,u),oi("invalid",r),oU(p,"onChange")}for(i in oG(l,u),h=null,u)u.hasOwnProperty(i)&&(d=u[i],"children"===i?"string"==typeof d?r.textContent!==d&&(h=["children",d]):"number"==typeof d&&r.textContent!==""+d&&(h=["children",""+d]):x.hasOwnProperty(i)&&null!=d&&oU(p,i));switch(l){case"input":eU(r),tm(r,u,!0);break;case"textarea":eU(r),oI(r,u);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(r.onclick=oV)}i=h,s.updateQueue=i,(s=null!==i)&&r6(t)}else{u=t,r=i,p=s,h=9===l.nodeType?l:l.ownerDocument,d===oM.html&&(d=oD(r)),d===oM.html?"script"===r?((r=h.createElement("div")).innerHTML="<script></script>",h=r.removeChild(r.firstChild)):"string"==typeof p.is?h=h.createElement(r,{is:p.is}):(h=h.createElement(r),"select"===r&&p.multiple&&(h.multiple=!0)):h=h.createElementNS(d,r),(r=h)[z]=u,r[H]=s,r4(r,t,!1,!1),p=r;var f=l,m=oB(h=i,u=s);switch(h){case"iframe":case"object":oi("load",p),l=u;break;case"video":case"audio":for(l=0;l<ei.length;l++)oi(ei[l],p);l=u;break;case"source":oi("error",p),l=u;break;case"img":case"image":case"link":oi("error",p),oi("load",p),l=u;break;case"form":oi("reset",p),oi("submit",p),l=u;break;case"details":oi("toggle",p),l=u;break;case"input":tu(p,u),l=th(p,u),oi("invalid",p),oU(f,"onChange");break;case"option":l=oR(p,u);break;case"select":p._wrapperState={wasMultiple:!!u.multiple},l=a({},u,{value:void 0}),oi("invalid",p),oU(f,"onChange");break;case"textarea":oE(p,u),l=ok(p,u),oi("invalid",p),oU(f,"onChange");break;default:l=u}oG(h,l),d=void 0;var g=h,b=p,v=l;for(d in v)if(v.hasOwnProperty(d)){var y=v[d];"style"===d?oF(b,y):"dangerouslySetInnerHTML"===d?null!=(y=y?y.__html:void 0)&&oP(b,y):"children"===d?"string"==typeof y?("textarea"!==g||""!==y)&&oN(b,y):"number"==typeof y&&oN(b,""+y):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(x.hasOwnProperty(d)?null!=y&&oU(f,d):null!=y&&tc(b,d,y,m))}switch(h){case"input":eU(p),tm(p,u,!1);break;case"textarea":eU(p),oI(p,u);break;case"option":null!=u.value&&p.setAttribute("value",""+td(u.value));break;case"select":(l=p).multiple=!!u.multiple,null!=(p=u.value)?oT(l,!!u.multiple,p,!1):null!=u.defaultValue&&oT(l,!!u.multiple,u.defaultValue,!0);break;default:"function"==typeof l.onClick&&(p.onclick=oV)}(s=oq(i,s))&&r6(t),t.stateNode=r}null!==t.ref&&(t.effectTag|=128)}else null===t.stateNode&&c("166");break;case 6:r&&null!=t.stateNode?r8(r,t,r.memoizedProps,s):("string"!=typeof s&&null===t.stateNode&&c("166"),r=nG(nW.current),nG(nL.current),rC(t)?(i=(s=t).stateNode,r=s.memoizedProps,i[z]=s,(s=i.nodeValue!==r)&&r6(t)):(i=t,(s=(9===r.nodeType?r:r.ownerDocument).createTextNode(s))[z]=t,i.stateNode=s));break;case 13:if(s=t.memoizedState,0!=(64&t.effectTag)){t.expirationTime=i,iv=t;break e}s=null!==s,i=null!==r&&null!==r.memoizedState,null!==r&&!s&&i&&null!==(r=r.child.sibling)&&(null!==(l=t.firstEffect)?(t.firstEffect=r,r.nextEffect=l):(t.firstEffect=t.lastEffect=r,r.nextEffect=null),r.effectTag=8),(s||i)&&(t.effectTag|=4);break;case 4:nU(t),r7(t);break;case 10:rW(t);break;default:c("156")}iv=null}if(t=e,1===iw||1!==t.childExpirationTime){for(s=0,i=t.child;null!==i;)r=i.expirationTime,l=i.childExpirationTime,r>s&&(s=r),l>s&&(s=l),i=i.sibling;t.childExpirationTime=s}if(null!==iv)return iv;null!==o&&0==(1024&o.effectTag)&&(null===o.firstEffect&&(o.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==o.lastEffect&&(o.lastEffect.nextEffect=e.firstEffect),o.lastEffect=e.lastEffect),1<e.effectTag&&(null!==o.lastEffect?o.lastEffect.nextEffect=e:o.firstEffect=e,o.lastEffect=e))}else{if(null!==(e=function(e){switch(e.tag){case 1:nt(e.type)&&no(e);var t=e.effectTag;return 2048&t?(e.effectTag=-2049&t|64,e):null;case 3:return nU(e),nn(e),0!=(64&(t=e.effectTag))&&c("285"),e.effectTag=-2049&t|64,e;case 5:return nj(e),null;case 13:return 2048&(t=e.effectTag)?(e.effectTag=-2049&t|64,e):null;case 18:default:return null;case 4:return nU(e),null;case 10:return rW(e),null}}(e,iw)))return e.effectTag&=1023,e;null!==o&&(o.firstEffect=o.lastEffect=null,o.effectTag|=1024)}if(null!==n)return n;if(null!==o)e=o;else break}return null}function iA(e){var t=function(e,t,o){var n=t.expirationTime;if(null!==e){if(e.memoizedProps!==t.pendingProps||o9.current)r_=!0;else if(n<o){switch(r_=!1,t.tag){case 3:rA(t),rS();break;case 5:nV(t);break;case 1:nt(t.type)&&ns(t);break;case 4:nB(t,t.stateNode.containerInfo);break;case 10:rF(t,t.memoizedProps.value);break;case 13:if(null!==t.memoizedState){if(0!==(n=t.child.childExpirationTime)&&n>=o)return r$(e,t,o);return null!==(t=rP(e,t,o))?t.sibling:null}}return rP(e,t,o)}}else r_=!1;switch(t.expirationTime=0,t.tag){case 2:n=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps;var r=ne(t,o7.current);if(rG(t,o),r=n8(null,t,n,e,r,o),t.effectTag|=1,"object"==typeof r&&null!==r&&"function"==typeof r.render&&void 0===r.$$typeof){if(t.tag=1,re(),nt(n)){var i=!0;ns(t)}else i=!1;t.memoizedState=null!==r.state&&void 0!==r.state?r.state:null;var s=n.getDerivedStateFromProps;"function"==typeof s&&nT(t,n,s,e),r.updater=nk,t.stateNode=r,r._reactInternalFiber=t,nM(t,n,e,o),t=rD(null,t,n,!0,i,o)}else t.tag=0,rR(null,t,r,o),t=t.child;return t;case 16:switch(r=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),i=t.pendingProps,e=function(e){var t=e._result;switch(e._status){case 1:return t;case 2:case 0:throw t;default:switch(e._status=0,(t=(t=e._ctor)()).then(function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)},function(t){0===e._status&&(e._status=2,e._result=t)}),e._status){case 1:return e._result;case 2:throw e._result}throw e._result=t,t}}(r),t.type=e,r=t.tag=function(e){if("function"==typeof e)return np(e)?1:0;if(null!=e){if((e=e.$$typeof)===e5)return 11;if(e===e6)return 14}return 2}(e),i=n_(e,i),s=void 0,r){case 0:s=rI(null,t,e,i,o);break;case 1:s=rM(null,t,e,i,o);break;case 11:s=rT(null,t,e,i,o);break;case 14:s=rk(null,t,e,n_(e.type,i),n,o);break;default:c("306",e,"")}return s;case 0:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:n_(n,r),rI(e,t,n,r,o);case 1:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:n_(n,r),rM(e,t,n,r,o);case 3:return rA(t),null===(n=t.updateQueue)&&c("282"),r=null!==(r=t.memoizedState)?r.element:null,r1(t,n,t.pendingProps,null,o),(n=t.memoizedState.element)===r?(rS(),t=rP(e,t,o)):(r=t.stateNode,(r=(null===e||null===e.child)&&r.hydrate)&&(rm=o1(t.stateNode.containerInfo),rf=t,r=rg=!0),r?(t.effectTag|=2,t.child=nz(t,null,n,o)):(rR(e,t,n,o),rS()),t=t.child),t;case 5:return nV(t),null===e&&ry(t),n=t.type,r=t.pendingProps,i=null!==e?e.memoizedProps:null,s=r.children,oK(n,r)?s=null:null!==i&&oK(n,i)&&(t.effectTag|=16),rO(e,t),1!==o&&1&t.mode&&r.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(rR(e,t,s,o),t=t.child),t;case 6:return null===e&&ry(t),null;case 13:return r$(e,t,o);case 4:return nB(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=nN(t,null,n,o):rR(e,t,n,o),t.child;case 11:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:n_(n,r),rT(e,t,n,r,o);case 7:return rR(e,t,t.pendingProps,o),t.child;case 8:case 12:return rR(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(n=t.type._context,r=t.pendingProps,s=t.memoizedProps,rF(t,i=r.value),null!==s){var a=s.value;if(0==(i=tB(a,i)?0:("function"==typeof n._calculateChangedBits?n._calculateChangedBits(a,i):1073741823)|0)){if(s.children===r.children&&!o9.current){t=rP(e,t,o);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.contextDependencies;if(null!==l){s=a.child;for(var d=l.first;null!==d;){if(d.context===n&&0!=(d.observedBits&i)){1===a.tag&&((d=rK(o)).tag=rV,rQ(a,d)),a.expirationTime<o&&(a.expirationTime=o),null!==(d=a.alternate)&&d.expirationTime<o&&(d.expirationTime=o),d=o;for(var h=a.return;null!==h;){var u=h.alternate;if(h.childExpirationTime<d)h.childExpirationTime=d,null!==u&&u.childExpirationTime<d&&(u.childExpirationTime=d);else if(null!==u&&u.childExpirationTime<d)u.childExpirationTime=d;else break;h=h.return}l.expirationTime<o&&(l.expirationTime=o);break}d=d.next}}else s=10===a.tag&&a.type===t.type?null:a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}}rR(e,t,r.children,o),t=t.child}return t;case 9:return r=t.type,n=(i=t.pendingProps).children,rG(t,o),n=n(r=rB(r,i.unstable_observedBits)),t.effectTag|=1,rR(e,t,n,o),t.child;case 14:return i=n_(r=t.type,t.pendingProps),i=n_(r.type,i),rk(e,t,r,i,n,o);case 15:return rE(e,t,t.type,t.pendingProps,n,o);case 17:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:n_(n,r),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,nt(n)?(e=!0,ns(t)):e=!1,rG(t,o),nO(t,n,r,o),nM(t,n,r,o),rD(null,t,n,!0,e,o)}c("156")}(e.alternate,e,iw);return e.memoizedProps=e.pendingProps,null===t&&(t=iD(e)),im.current=null,t}function i$(e,t){ib&&c("243"),iM(),ib=!0;var o=ip.current;ip.current=rh;var n=e.nextExpirationTimeToWorkOn;(n!==iw||e!==iy||null===iv)&&(iO(),iy=e,iw=n,iv=nf(iy.current,null,iw),e.pendingCommitExpirationTime=0);for(var r=!1;;){try{if(t)for(;null!==iv&&!si();)iv=iA(iv);else for(;null!==iv;)iv=iA(iv)}catch(t){if(rL=rH=rz=null,re(),null===iv)r=!0,sh(t);else{null===iv&&c("271");var i=iv,s=i.return;if(null===s)r=!0,sh(t);else{e:{var a=e,l=s,d=i,h=t;if(s=iw,d.effectTag|=1024,d.firstEffect=d.lastEffect=null,null!==h&&"object"==typeof h&&"function"==typeof h.then){var u=h;h=l;var p=-1,f=-1;do{if(13===h.tag){var m=h.alternate;if(null!==m&&null!==(m=m.memoizedState)){f=10*(1073741822-m.timedOutAt);break}"number"==typeof(m=h.pendingProps.maxDuration)&&(0>=m?p=0:(-1===p||m<p)&&(p=m))}h=h.return}while(null!==h)h=l;do{if((m=13===h.tag)&&(m=void 0!==h.memoizedProps.fallback&&null===h.memoizedState),m){if(null===(l=h.updateQueue)?((l=new Set).add(u),h.updateQueue=l):l.add(u),0==(1&h.mode)){h.effectTag|=64,d.effectTag&=-1957,1===d.tag&&(null===d.alternate?d.tag=17:((s=rK(1073741823)).tag=rV,rQ(d,s))),d.expirationTime=1073741823;break e}d=a,l=s;var g=d.pingCache;null===g?(g=d.pingCache=new id,m=new Set,g.set(u,m)):void 0===(m=g.get(u))&&(m=new Set,g.set(u,m)),m.has(l)||(m.add(l),d=iz.bind(null,d,u,l),u.then(d,d)),-1===p?a=1073741823:(-1===f&&(f=10*(1073741822-nS(a,s))-5e3),a=f+p),0<=a&&iC<a&&(iC=a),h.effectTag|=2048,h.expirationTime=s;break e}h=h.return}while(null!==h)h=Error((e8(d.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+te(d))}iS=!0,h=r3(h,d),a=l;do{switch(a.tag){case 3:a.effectTag|=2048,a.expirationTime=s,s=ih(a,h,s),rX(a,s);break e;case 1:if(p=h,f=a.type,d=a.stateNode,0==(64&a.effectTag)&&("function"==typeof f.getDerivedStateFromError||null!==d&&"function"==typeof d.componentDidCatch&&(null===iE||!iE.has(d)))){a.effectTag|=2048,a.expirationTime=s,s=iu(a,p,s),rX(a,s);break e}}a=a.return}while(null!==a)}iv=iD(i);continue}}}break}if(ib=!1,ip.current=o,rL=rH=rz=null,re(),r)iy=null,e.finishedWork=null;else if(null!==iv)e.finishedWork=null;else{if(null===(o=e.current.alternate)&&c("281"),iy=null,iS){if(r=e.latestPendingTime,i=e.latestSuspendedTime,s=e.latestPingedTime,0!==r&&r<n||0!==i&&i<n||0!==s&&s<n){nC(e,n),i8(e,o,n,e.expirationTime,-1);return}if(!e.didError&&t){e.didError=!0,n=e.nextExpirationTimeToWorkOn=n,t=e.expirationTime=1073741823,i8(e,o,n,t,-1);return}}t&&-1!==iC?(nC(e,n),(t=10*(1073741822-nS(e,n)))<iC&&(iC=t),t=10*(1073741822-st()),t=iC-t,i8(e,o,n,e.expirationTime,0>t?0:t)):(e.pendingCommitExpirationTime=n,e.finishedWork=o)}}function iP(e,t){for(var o=e.return;null!==o;){switch(o.tag){case 1:var n=o.stateNode;if("function"==typeof o.type.getDerivedStateFromError||"function"==typeof n.componentDidCatch&&(null===iE||!iE.has(n))){e=iu(o,e=r3(t,e),1073741823),rQ(o,e),iF(o,1073741823);return}break;case 3:e=ih(o,e=r3(t,e),1073741823),rQ(o,e),iF(o,1073741823);return}o=o.return}3===e.tag&&(o=r3(t,e),o=ih(e,o,1073741823),rQ(e,o),iF(e,1073741823))}function iN(e,t){var o=l.unstable_getCurrentPriorityLevel(),n=void 0;if(0==(1&t.mode))n=1073741823;else if(ib&&!i_)n=iw;else{switch(o){case l.unstable_ImmediatePriority:n=1073741823;break;case l.unstable_UserBlockingPriority:n=1073741822-10*(((1073741822-e+15)/10|0)+1);break;case l.unstable_NormalPriority:n=1073741822-25*(((1073741822-e+500)/25|0)+1);break;case l.unstable_LowPriority:case l.unstable_IdlePriority:n=1;break;default:c("313")}null!==iy&&n===iw&&--n}return o===l.unstable_UserBlockingPriority&&(0===iK||n<iK)&&(iK=n),n}function iz(e,t,o){var n=e.pingCache;null!==n&&n.delete(t),null!==iy&&iw===o?iy=null:(t=e.earliestSuspendedTime,n=e.latestSuspendedTime,0!==t&&o<=t&&o>=n&&(e.didError=!1,(0===(t=e.latestPingedTime)||t>o)&&(e.latestPingedTime=o),nx(o,e),0!==(o=e.expirationTime)&&so(e,o)))}function iH(e,t){var o=e.stateNode;null!==o&&o.delete(t),t=iN(t=st(),e),null!==(e=iL(e,t))&&(nw(e,t),0!==(t=e.expirationTime)&&so(e,t))}function iL(e,t){e.expirationTime<t&&(e.expirationTime=t);var o=e.alternate;null!==o&&o.expirationTime<t&&(o.expirationTime=t);var n=e.return,r=null;if(null===n&&3===e.tag)r=e.stateNode;else for(;null!==n;){if(o=n.alternate,n.childExpirationTime<t&&(n.childExpirationTime=t),null!==o&&o.childExpirationTime<t&&(o.childExpirationTime=t),null===n.return&&3===n.tag){r=n.stateNode;break}n=n.return}return r}function iF(e,t){null!==(e=iL(e,t))&&(!ib&&0!==iw&&t>iw&&iO(),nw(e,t),ib&&!i_&&iy===e||so(e,e.expirationTime),i6>i3&&(i6=0,c("185")))}function iW(e,t,o,n,r){return l.unstable_runWithPriority(l.unstable_ImmediatePriority,function(){return e(t,o,n,r)})}var iG=null,iB=null,iU=0,iV=void 0,ij=!1,iZ=null,iq=0,iK=0,iY=!1,iQ=null,iX=!1,iJ=!1,i0=null,i1=l.unstable_now(),i2=1073741822-(i1/10|0),i5=i2,i3=50,i6=0,i4=null;function i7(){i2=1073741822-((l.unstable_now()-i1)/10|0)}function i9(e,t){if(0!==iU){if(t<iU)return;null!==iV&&l.unstable_cancelCallback(iV)}iU=t,e=l.unstable_now()-i1,iV=l.unstable_scheduleCallback(ss,{timeout:10*(1073741822-t)-e})}function i8(e,t,o,n,r){e.expirationTime=n,0!==r||si()?0<r&&(e.timeoutHandle=oY(se.bind(null,e,t,o),r)):(e.pendingCommitExpirationTime=o,e.finishedWork=t)}function se(e,t,o){e.pendingCommitExpirationTime=o,e.finishedWork=t,i7(),i5=i2,sl(e,o)}function st(){return ij||(sn(),(0===iq||1===iq)&&(i7(),i5=i2)),i5}function so(e,t){null===e.nextScheduledRoot?(e.expirationTime=t,null===iB?(iG=iB=e,e.nextScheduledRoot=e):(iB=iB.nextScheduledRoot=e).nextScheduledRoot=iG):t>e.expirationTime&&(e.expirationTime=t),ij||(iX?iJ&&(iZ=e,iq=1073741823,sc(e,1073741823,!1)):1073741823===t?sa(1073741823,!1):i9(e,t))}function sn(){var e=0,t=null;if(null!==iB)for(var o=iB,n=iG;null!==n;){var r=n.expirationTime;if(0===r){if((null===o||null===iB)&&c("244"),n===n.nextScheduledRoot){iG=iB=n.nextScheduledRoot=null;break}if(n===iG)iG=r=n.nextScheduledRoot,iB.nextScheduledRoot=r,n.nextScheduledRoot=null;else if(n===iB){(iB=o).nextScheduledRoot=iG,n.nextScheduledRoot=null;break}else o.nextScheduledRoot=n.nextScheduledRoot,n.nextScheduledRoot=null;n=o.nextScheduledRoot}else{if(r>e&&(e=r,t=n),n===iB||1073741823===e)break;o=n,n=n.nextScheduledRoot}}iZ=t,iq=e}var sr=!1;function si(){return!!sr||!!l.unstable_shouldYield()&&(sr=!0)}function ss(){try{if(!si()&&null!==iG){i7();var e=iG;do{var t=e.expirationTime;0!==t&&i2<=t&&(e.nextExpirationTimeToWorkOn=i2),e=e.nextScheduledRoot}while(e!==iG)}sa(0,!0)}finally{sr=!1}}function sa(e,t){if(sn(),t)for(i7(),i5=i2;null!==iZ&&0!==iq&&e<=iq&&!(sr&&i2>iq);)sc(iZ,iq,i2>iq),sn(),i7(),i5=i2;else for(;null!==iZ&&0!==iq&&e<=iq;)sc(iZ,iq,!1),sn();if(t&&(iU=0,iV=null),0!==iq&&i9(iZ,iq),i6=0,i4=null,null!==i0)for(e=i0,i0=null,t=0;t<e.length;t++){var o=e[t];try{o._onComplete()}catch(e){iY||(iY=!0,iQ=e)}}if(iY)throw e=iQ,iQ=null,iY=!1,e}function sl(e,t){ij&&c("253"),iZ=e,iq=t,sc(e,t,!1),sa(1073741823,!1)}function sc(e,t,o){if(ij&&c("245"),ij=!0,o){var n=e.finishedWork;null!==n?sd(e,n,t):(e.finishedWork=null,-1!==(n=e.timeoutHandle)&&(e.timeoutHandle=-1,oQ(n)),i$(e,o),null!==(n=e.finishedWork)&&(si()?e.finishedWork=n:sd(e,n,t)))}else null!==(n=e.finishedWork)?sd(e,n,t):(e.finishedWork=null,-1!==(n=e.timeoutHandle)&&(e.timeoutHandle=-1,oQ(n)),i$(e,o),null!==(n=e.finishedWork)&&sd(e,n,t));ij=!1}function sd(e,t,o){var n=e.firstBatch;if(null!==n&&n._expirationTime>=o&&(null===i0?i0=[n]:i0.push(n),n._defer)){e.finishedWork=t,e.expirationTime=0;return}e.finishedWork=null,e===i4?i6++:(i4=e,i6=0),l.unstable_runWithPriority(l.unstable_ImmediatePriority,function(){!function(e,t){i_=ib=!0,e.current===t&&c("177");var o,n=e.pendingCommitExpirationTime;0===n&&c("261"),e.pendingCommitExpirationTime=0;var r=t.expirationTime,i=t.childExpirationTime;for(function(e,t){if(e.didError=!1,0===t)e.earliestPendingTime=0,e.latestPendingTime=0,e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0;else{t<e.latestPingedTime&&(e.latestPingedTime=0);var o=e.latestPendingTime;0!==o&&(o>t?e.earliestPendingTime=e.latestPendingTime=0:e.earliestPendingTime>t&&(e.earliestPendingTime=e.latestPendingTime)),0===(o=e.earliestSuspendedTime)?nw(e,t):t<e.latestSuspendedTime?(e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0,nw(e,t)):t>o&&nw(e,t)}nx(0,e)}(e,i>r?i:r),im.current=null,r=void 0,1<t.effectTag?null!==t.lastEffect?(t.lastEffect.nextEffect=t,r=t.firstEffect):r=t:r=t.firstEffect,oj=or,oZ=function(){var e=og();if(ob(e)){if(("selectionStart"in e))var t={start:e.selectionStart,end:e.selectionEnd};else e:{var o=(t=(t=e.ownerDocument)&&t.defaultView||window).getSelection&&t.getSelection();if(o&&0!==o.rangeCount){t=o.anchorNode;var n,r=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{t.nodeType,i.nodeType}catch(e){t=null;break e}var s=0,a=-1,l=-1,c=0,d=0,h=e,u=null;t:for(;;){for(;h!==t||0!==r&&3!==h.nodeType||(a=s+r),h!==i||0!==o&&3!==h.nodeType||(l=s+o),3===h.nodeType&&(s+=h.nodeValue.length),null!==(n=h.firstChild);)u=h,h=n;for(;;){if(h===e)break t;if(u===t&&++c===r&&(a=s),u===i&&++d===o&&(l=s),null!==(n=h.nextSibling))break;u=(h=u).parentNode}h=n}t=-1===a||-1===l?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;return{focusedElem:e,selectionRange:t}}(),or=!1,ix=r;null!==ix;){i=!1;var s=void 0;try{!function(){for(;null!==ix;){if(256&ix.effectTag)e:{var e=ix.alternate,t=ix;switch(t.tag){case 0:case 11:case 15:ir(2,0,t);break e;case 1:if(256&t.effectTag&&null!==e){var o=e.memoizedProps,n=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?o:n_(t.type,o),n),e.__reactInternalSnapshotBeforeUpdate=t}break e;case 3:case 5:case 6:case 4:case 17:break e;default:c("163")}}ix=ix.nextEffect}}()}catch(e){i=!0,s=e}i&&(null===ix&&c("178"),iP(ix,s),null!==ix&&(ix=ix.nextEffect))}for(ix=r;null!==ix;){i=!1,s=void 0;try{!function(){for(;null!==ix;){var e=ix.effectTag;if(16&e&&oN(ix.stateNode,""),128&e){var t=ix.alternate;null!==t&&null!==(t=t.ref)&&("function"==typeof t?t(null):t.current=null)}switch(14&e){case 2:ia(ix),ix.effectTag&=-3;break;case 6:ia(ix),ix.effectTag&=-3,ic(ix.alternate,ix);break;case 4:ic(ix.alternate,ix);break;case 8:il(e=ix),e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,null!==(e=e.alternate)&&(e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null)}ix=ix.nextEffect}}()}catch(e){i=!0,s=e}i&&(null===ix&&c("178"),iP(ix,s),null!==ix&&(ix=ix.nextEffect))}for(function(e){var t=og(),o=e.focusedElem,n=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&function e(t,o){return!!t&&!!o&&(t===o||(!t||3!==t.nodeType)&&(o&&3===o.nodeType?e(t,o.parentNode):("contains"in t)?t.contains(o):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(o))))}(o.ownerDocument.documentElement,o)){if(null!==n&&ob(o)){if(t=n.start,void 0===(e=n.end)&&(e=t),("selectionStart"in o))o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if((e=(t=o.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var r=o.textContent.length,i=Math.min(n.start,r);n=void 0===n.end?i:Math.min(n.end,r),!e.extend&&i>n&&(r=n,n=i,i=r),r=om(o,i);var s=om(o,n);r&&s&&(1!==e.rangeCount||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&((t=t.createRange()).setStart(r.node,r.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=o;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof o.focus&&o.focus(),o=0;o<t.length;o++)(e=t[o]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(oZ),oZ=null,or=!!oj,oj=null,e.current=t,ix=r;null!==ix;){i=!1,s=void 0;try{!function(e,t){for(;null!==ix;){var o=ix.effectTag;if(36&o){var n=ix.alternate,r=ix,i=t;switch(r.tag){case 0:case 11:case 15:ir(16,32,r);break;case 1:var s=r.stateNode;if(4&r.effectTag){if(null===n)s.componentDidMount();else{var a=r.elementType===r.type?n.memoizedProps:n_(r.type,n.memoizedProps);s.componentDidUpdate(a,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}}null!==(n=r.updateQueue)&&r2(r,n,s,i);break;case 3:if(null!==(n=r.updateQueue)){if(s=null,null!==r.child)switch(r.child.tag){case 5:case 1:s=r.child.stateNode}r2(r,n,s,i)}break;case 5:i=r.stateNode,null===n&&4&r.effectTag&&oq(r.type,r.memoizedProps)&&i.focus();break;case 6:case 4:case 12:case 13:case 17:break;default:c("163")}}128&o&&null!==(r=ix.ref)&&(i=ix.stateNode,"function"==typeof r?r(i):r.current=i),512&o&&(iR=e),ix=ix.nextEffect}}(e,n)}catch(e){i=!0,s=e}i&&(null===ix&&c("178"),iP(ix,s),null!==ix&&(ix=ix.nextEffect))}if(null!==r&&null!==iR){var a=iI.bind(null,e,r);iT=l.unstable_runWithPriority(l.unstable_NormalPriority,function(){return oX(a)}),ik=a}ib=i_=!1,"function"==typeof nl&&nl(t.stateNode),n=t.expirationTime,0===(t=(t=t.childExpirationTime)>n?t:n)&&(iE=null),o=t,e.expirationTime=o,e.finishedWork=null}(e,t)})}function sh(e){null===iZ&&c("246"),iZ.expirationTime=0,iY||(iY=!0,iQ=e)}function su(e,t){var o=iX;iX=!0;try{return e(t)}finally{(iX=o)||ij||sa(1073741823,!1)}}function sp(e,t){return iX&&!iJ&&(iJ=!0,iJ=!1),e(t)}function sf(e,t,o){iX||ij||0===iK||(sa(iK,!1),iK=0);var n=iX;iX=!0;try{return l.unstable_runWithPriority(l.unstable_UserBlockingPriority,function(){return e(t,o)})}finally{(iX=n)||ij||sa(1073741823,!1)}}function sm(e,t,o,n,r){var i=t.current;e:if(o){o=o._reactInternalFiber;t:{2===tj(o)&&1===o.tag||c("170");var s=o;do{switch(s.tag){case 3:s=s.stateNode.context;break t;case 1:if(nt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break t}}s=s.return}while(null!==s)c("171"),s=void 0}if(1===o.tag){var a=o.type;if(nt(a)){o=ni(o,a,s);break e}}o=s}else o=o4;return null===t.context?t.context=o:t.pendingContext=o,t=r,(r=rK(n)).payload={element:e},null!==(t=void 0===t?null:t)&&(r.callback=t),iM(),rQ(i,r),iF(i,n),n}function sg(e,t,o,n){var r=t.current;return sm(e,t,o,r=iN(st(),r),n)}function sb(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function sv(e){var t=1073741822-25*(((1073741822-st()+500)/25|0)+1);t>=ig&&(t=ig-1),this._expirationTime=ig=t,this._root=e,this._callbacks=this._next=null,this._hasChildren=this._didComplete=!1,this._children=null,this._defer=!0}function sy(){this._callbacks=null,this._didCommit=!1,this._onCommit=this._onCommit.bind(this)}function sw(e,t,o){e={current:t=nu(3,null,null,t?3:0),containerInfo:e,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:o,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null},this._internalRoot=t.stateNode=e}function sC(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function sS(e,t,o,n,r){var i=o._reactRootContainer;if(i){if("function"==typeof r){var s=r;r=function(){var e=sb(i._internalRoot);s.call(e)}}null!=e?i.legacy_renderSubtreeIntoContainer(e,t,r):i.render(t,r)}else{if(i=o._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var o;o=e.lastChild;)e.removeChild(o);return new sw(e,!1,t)}(o,n),"function"==typeof r){var a=r;r=function(){var e=sb(i._internalRoot);a.call(e)}}sp(function(){null!=e?i.legacy_renderSubtreeIntoContainer(e,t,r):i.render(t,r)})}return sb(i._internalRoot)}function sx(e,t){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return sC(t)||c("200"),function(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:eY,key:null==n?null:""+n,children:e,containerInfo:t,implementation:null}}(e,t,null,o)}eE=function(e,t,o){switch(t){case"input":if(tf(e,o),t=o.name,"radio"===o.type&&null!=t){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var n=o[t];if(n!==e&&n.form===e.form){var r=G(n);r||c("90"),eV(n),tf(n,r)}}}break;case"textarea":oO(e,o);break;case"select":null!=(t=o.value)&&oT(e,!!o.multiple,t,!1)}},sv.prototype.render=function(e){this._defer||c("250"),this._hasChildren=!0,this._children=e;var t=this._root._internalRoot,o=this._expirationTime,n=new sy;return sm(e,t,null,o,n._onCommit),n},sv.prototype.then=function(e){if(this._didComplete)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},sv.prototype.commit=function(){var e=this._root._internalRoot,t=e.firstBatch;if(this._defer&&null!==t||c("251"),this._hasChildren){var o=this._expirationTime;if(t!==this){this._hasChildren&&(o=this._expirationTime=t._expirationTime,this.render(this._children));for(var n=null,r=t;r!==this;)n=r,r=r._next;null===n&&c("251"),n._next=r._next,this._next=t,e.firstBatch=this}this._defer=!1,sl(e,o),t=this._next,this._next=null,null!==(t=e.firstBatch=t)&&t._hasChildren&&t.render(t._children)}else this._next=null,this._defer=!1},sv.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++)(0,e[t])()}},sy.prototype.then=function(e){if(this._didCommit)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},sy.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++){var o=e[t];"function"!=typeof o&&c("191",o),o()}}},sw.prototype.render=function(e,t){var o=this._internalRoot,n=new sy;return null!==(t=void 0===t?null:t)&&n.then(t),sg(e,o,null,n._onCommit),n},sw.prototype.unmount=function(e){var t=this._internalRoot,o=new sy;return null!==(e=void 0===e?null:e)&&o.then(e),sg(null,t,null,o._onCommit),o},sw.prototype.legacy_renderSubtreeIntoContainer=function(e,t,o){var n=this._internalRoot,r=new sy;return null!==(o=void 0===o?null:o)&&r.then(o),sg(t,n,e,r._onCommit),r},sw.prototype.createBatch=function(){var e=new sv(this),t=e._expirationTime,o=this._internalRoot,n=o.firstBatch;if(null===n)o.firstBatch=e,e._next=null;else{for(o=null;null!==n&&n._expirationTime>=t;)o=n,n=n._next;e._next=n,null!==o&&(o._next=e)}return e},e$=su,eP=sf,eN=function(){ij||0===iK||(sa(iK,!1),iK=0)};var s_={createPortal:sx,findDOMNode:function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;return void 0===t&&("function"==typeof e.render?c("188"):c("268",Object.keys(e))),e=null===(e=tq(t))?null:e.stateNode},hydrate:function(e,t,o){return sC(t)||c("200"),sS(null,e,t,!0,o)},render:function(e,t,o){return sC(t)||c("200"),sS(null,e,t,!1,o)},unstable_renderSubtreeIntoContainer:function(e,t,o,n){return sC(o)||c("200"),(null==e||void 0===e._reactInternalFiber)&&c("38"),sS(e,t,o,!1,n)},unmountComponentAtNode:function(e){return sC(e)||c("40"),!!e._reactRootContainer&&(sp(function(){sS(null,null,e,!1,function(){e._reactRootContainer=null})}),!0)},unstable_createPortal:function(){return sx.apply(void 0,arguments)},unstable_batchedUpdates:su,unstable_interactiveUpdates:sf,flushSync:function(e,t){ij&&c("187");var o=iX;iX=!0;try{return iW(e,t)}finally{iX=o,sa(1073741823,!1)}},unstable_createRoot:function(e,t){return sC(e)||c("299","unstable_createRoot"),new sw(e,!0,null!=t&&!0===t.hydrate)},unstable_flushControlled:function(e){var t=iX;iX=!0;try{iW(e)}finally{(iX=t)||ij||sa(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[F,W,G,A.injectEventPluginsByName,S,q,function(e){I(e,Z)},eD,eA,ol,P]}};i=(r={findFiberByHostInstance:L,bundleType:0,version:"16.8.4",rendererPackageName:"react-dom"}).findFiberByHostInstance,function(e){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t.isDisabled&&t.supportsFiber)try{var o=t.inject(e);nl=nd(function(e){return t.onCommitFiberRoot(o,e)}),nc=nd(function(e){return t.onCommitFiberUnmount(o,e)})}catch(e){}}}(a({},r,{overrideProps:null,currentDispatcherRef:ej.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=tq(e))?null:e.stateNode},findFiberByHostInstance:function(e){return i?i(e):null}}));var sR={default:s_},sT=sR&&s_||sR;e.exports=sT.default||sT},2788:(e,t,o)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){}}(),e.exports=o(3975)},8447:(e,t,o)=>{var n=o(4516),r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,s=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,d=r?Symbol.for("react.provider"):60109,h=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,o="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)o+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,o,n,r,i,s,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[o,void 0,void 0,void 0,void 0,void 0],c=0;(e=Error(t.replace(/%s/g,function(){return l[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",o)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function C(e,t,o){this.props=e,this.context=t,this.refs=w,this.updater=o||y}function S(){}function x(e,t,o){this.props=e,this.context=t,this.refs=w,this.updater=o||y}C.prototype.isReactComponent={},C.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},C.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=C.prototype;var _=x.prototype=new S;_.constructor=x,n(_,C.prototype),_.isPureReactComponent=!0;var R={current:null},T={current:null},k=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,o){var n=void 0,r={},s=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)k.call(t,n)&&!E.hasOwnProperty(n)&&(r[n]=t[n]);var l=arguments.length-2;if(1===l)r.children=o;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===r[n]&&(r[n]=l[n]);return{$$typeof:i,type:e,key:s,ref:a,props:r,_owner:T.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var M=/\/+/g,D=[];function A(e,t,o,n){if(D.length){var r=D.pop();return r.result=e,r.keyPrefix=t,r.func=o,r.context=n,r.count=0,r}return{result:e,keyPrefix:t,func:o,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function P(e,t,o){return null==e?0:function e(t,o,n,r){var a=typeof t;("undefined"===a||"boolean"===a)&&(t=null);var l=!1;if(null===t)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case i:case s:l=!0}}if(l)return n(r,t,""===o?"."+N(t,0):o),1;if(l=0,o=""===o?".":o+":",Array.isArray(t))for(var c=0;c<t.length;c++){var d=o+N(a=t[c],c);l+=e(a,d,n,r)}else if("function"==typeof(d=null===t||"object"!=typeof t?null:"function"==typeof(d=b&&t[b]||t["@@iterator"])?d:null))for(t=d.call(t),c=0;!(a=t.next()).done;)d=o+N(a=a.value,c++),l+=e(a,d,n,r);else"object"===a&&v("31","[object Object]"==(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return l}(e,"",t,o)}function N(e,t){var o,n;return"object"==typeof e&&null!==e&&null!=e.key?(o=e.key,n={"=":"=0",":":"=2"},"$"+(""+o).replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function z(e,t){e.func.call(e.context,t,e.count++)}function H(e,t,o){var n,r,s=e.result,a=e.keyPrefix;Array.isArray(e=e.func.call(e.context,t,e.count++))?L(e,s,o,function(e){return e}):null!=e&&(I(e)&&(n=e,r=a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+o,e={$$typeof:i,type:n.type,key:r,ref:n.ref,props:n.props,_owner:n._owner}),s.push(e))}function L(e,t,o,n,r){var i="";null!=o&&(i=(""+o).replace(M,"$&/")+"/"),P(e,H,t=A(t,i,n,r)),$(t)}function F(){var e=R.current;return null===e&&v("307"),e}var W={Children:{map:function(e,t,o){if(null==e)return e;var n=[];return L(e,n,null,t,o),n},forEach:function(e,t,o){if(null==e)return e;P(e,z,t=A(null,null,t,o)),$(t)},count:function(e){return P(e,function(){return null},null)},toArray:function(e){var t=[];return L(e,t,null,function(e){return e}),t},only:function(e){return I(e)||v("143"),e}},createRef:function(){return{current:null}},Component:C,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:h,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,o){return F().useImperativeHandle(e,t,o)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,o){return F().useReducer(e,t,o)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:a,StrictMode:l,Suspense:f,createElement:O,cloneElement:function(e,t,o){null==e&&v("267",e);var r=void 0,s=n({},e.props),a=e.key,l=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,c=T.current),void 0!==t.key&&(a=""+t.key);var d=void 0;for(r in e.type&&e.type.defaultProps&&(d=e.type.defaultProps),t)k.call(t,r)&&!E.hasOwnProperty(r)&&(s[r]=void 0===t[r]&&void 0!==d?d[r]:t[r])}if(r=arguments.length-2,1===r)s.children=o;else if(1<r){d=Array(r);for(var h=0;h<r;h++)d[h]=arguments[h+2];s.children=d}return{$$typeof:i,type:e.type,key:a,ref:l,props:s,_owner:c}},createFactory:function(e){var t=O.bind(null,e);return t.type=e,t},isValidElement:I,version:"16.8.4",unstable_ConcurrentMode:u,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:R,ReactCurrentOwner:T,assign:n}},G={default:W},B=G&&W||G;e.exports=B.default||B},2735:(e,t,o)=>{e.exports=o(8447)},9666:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=null,r=!1,i=3,s=-1,a=-1,l=!1,c=!1;function d(){if(!l){var e=n.expirationTime;c?_():c=!0,x(p,e)}}function h(){var e=n,t=n.next;if(n===t)n=null;else{var o=n.previous;n=o.next=t,t.previous=o}e.next=e.previous=null,o=e.callback,t=e.expirationTime,e=e.priorityLevel;var r=i,s=a;i=e,a=t;try{var l=o()}finally{i=r,a=s}if("function"==typeof l){if(l={callback:l,priorityLevel:e,expirationTime:t,next:null,previous:null},null===n)n=l.next=l.previous=l;else{o=null,e=n;do{if(e.expirationTime>=t){o=e;break}e=e.next}while(e!==n)null===o?o=n:o===n&&(n=l,d()),(t=o.previous).next=o.previous=l,l.next=o,l.previous=t}}}function u(){if(-1===s&&null!==n&&1===n.priorityLevel){l=!0;try{do h();while(null!==n&&1===n.priorityLevel)}finally{l=!1,null!==n?d():c=!1}}}function p(e){l=!0;var o=r;r=e;try{if(e)for(;null!==n;){var i=t.unstable_now();if(n.expirationTime<=i)do h();while(null!==n&&n.expirationTime<=i)else break}else if(null!==n)do h();while(null!==n&&!R())}finally{l=!1,r=o,null!==n?d():c=!1,u()}}var f,m,g=Date,b="function"==typeof setTimeout?setTimeout:void 0,v="function"==typeof clearTimeout?clearTimeout:void 0,y="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,w="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function C(e){f=y(function(t){v(m),e(t)}),m=b(function(){w(f),e(t.unstable_now())},100)}if("object"==typeof performance&&"function"==typeof performance.now){var S=performance;t.unstable_now=function(){return S.now()}}else t.unstable_now=function(){return g.now()};var x,_,R,T=null;if("undefined"!=typeof window?T=window:void 0!==o.g&&(T=o.g),T&&T._schedMock){var k=T._schedMock;x=k[0],_=k[1],R=k[2],t.unstable_now=k[3]}else if("undefined"==typeof window||"function"!=typeof MessageChannel){var E=null,O=function(e){if(null!==E)try{E(e)}finally{E=null}};x=function(e){null!==E?setTimeout(x,0,e):(E=e,setTimeout(O,0,!1))},_=function(){E=null},R=function(){return!1}}else{var I=null,M=!1,D=-1,A=!1,$=!1,P=0,N=33,z=33;R=function(){return P<=t.unstable_now()};var H=new MessageChannel,L=H.port2;H.port1.onmessage=function(){M=!1;var e=I,o=D;I=null,D=-1;var n=t.unstable_now(),r=!1;if(0>=P-n){if(-1!==o&&o<=n)r=!0;else{A||(A=!0,C(F)),I=e,D=o;return}}if(null!==e){$=!0;try{e(r)}finally{$=!1}}};var F=function(e){if(null!==I){C(F);var t=e-P+z;t<z&&N<z?(8>t&&(t=8),z=t<N?N:t):N=t,P=e+z,M||(M=!0,L.postMessage(void 0))}else A=!1};x=function(e,t){I=e,D=t,$||0>t?L.postMessage(void 0):A||(A=!0,C(F))},_=function(){I=null,M=!1,D=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,o){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=i,r=s;i=e,s=t.unstable_now();try{return o()}finally{i=n,s=r,u()}},t.unstable_next=function(e){switch(i){case 1:case 2:case 3:var o=3;break;default:o=i}var n=i,r=s;i=o,s=t.unstable_now();try{return e()}finally{i=n,s=r,u()}},t.unstable_scheduleCallback=function(e,o){var r=-1!==s?s:t.unstable_now();if("object"==typeof o&&null!==o&&"number"==typeof o.timeout)o=r+o.timeout;else switch(i){case 1:o=r+-1;break;case 2:o=r+250;break;case 5:o=r+1073741823;break;case 4:o=r+1e4;break;default:o=r+5e3}if(e={callback:e,priorityLevel:i,expirationTime:o,next:null,previous:null},null===n)n=e.next=e.previous=e,d();else{r=null;var a=n;do{if(a.expirationTime>o){r=a;break}a=a.next}while(a!==n)null===r?r=n:r===n&&(n=e,d()),(o=r.previous).next=r.previous=e,e.next=r,e.previous=o}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)n=null;else{e===n&&(n=t);var o=e.previous;o.next=t,t.previous=o}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var o=i;return function(){var n=i,r=s;i=o,s=t.unstable_now();try{return e.apply(this,arguments)}finally{i=n,s=r,u()}}},t.unstable_getCurrentPriorityLevel=function(){return i},t.unstable_shouldYield=function(){return!r&&(null!==n&&n.expirationTime<a||R())},t.unstable_continueExecution=function(){null!==n&&d()},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return n}},9146:(e,t,o)=>{e.exports=o(9666)}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return r[e](o,o.exports,s),o.exports}s.m=r,s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce((t,o)=>(s.f[o](e,t),t),[])),s.u=e=>"feature-billboard.js",s.miniCssF=e=>{},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},s.l=(t,o,n,r)=>{if(e[t]){e[t].push(o);return}if(void 0!==n)for(var i,a,l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==t){i=d;break}}i||(a=!0,(i=document.createElement("script")).type="module",i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=t),e[t]=[o];var h=(o,n)=>{i.onerror=i.onload=null,clearTimeout(u);var r=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach(e=>e(n)),o)return o(n)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),a&&document.head.appendChild(i)},s.p="#{root}/dist/webviews/",Object.defineProperty(s,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}}),t={786:0},s.f.j=(e,o)=>{var n=s.o(t,e)?t[e]:void 0;if(0!==n){if(n)o.push(n[2]);else{var r=new Promise((o,r)=>n=t[e]=[o,r]);o.push(n[2]=r);var i=s.p+s.u(e),a=Error();s.l(i,o=>{if(s.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",a.name="ChunkLoadError",a.type=r,a.request=i,n[1](a)}},"chunk-"+e,e)}}},o=(e,o)=>{var n,r,[i,a,l]=o,c=0;if(i.some(e=>0!==t[e])){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);l&&l(s)}for(e&&e(o);c<i.length;c++)r=i[c],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0},(n=self.webpackChunk=self.webpackChunk||[]).forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n));var a={};(()=>{let e,t,o,n,r,i,l;s.d(a,{q:()=>cM});var c,d,h,u,p,f,m,g,b,v,y,w,C,S,x,_,R=s(2735),T=s.n(R),k=s(2788);class E{constructor(e,t=!1,o=!1){this.method=e,this.reset=t,this.pack=o}}class O extends E{}class I extends E{}function M(e,t,o){e.method===t.method&&o(t.params,e)}let D=new O("webview/ready"),A=new O("webview/focus");new O("command/execute"),new O("configuration/preview"),new O("configuration/update"),new I("configuration/didChange"),new I("configuration/didPreview"),new I("webview/didOpenAnchor");let $=new O("graph/chooseRepository"),P=new O("graph/dimMergeCommits"),N=new O("graph/dblclick"),z=new O("graph/rows/ensure"),H=new O("graph/avatars/get"),L=new O("graph/refs/metadata/get"),F=new O("graph/rows/get"),W=new O("graph/search"),G=new O("graph/search/openInView"),B=new O("graph/columns/update"),U=new O("graph/refs/update/visibility"),V=new O("graph/fitlers/update/excludeType"),j=new O("graph/configuration/update"),Z=new O("graph/fitlers/update/includeOnlyRefs"),q=new O("graph/selection/update"),K=new I("graph/didChange",!0,!0),Y=new I("graph/configuration/didChange"),Q=new I("graph/subscription/didChange"),X=new I("graph/avatars/didChange"),J=new I("graph/refs/didChangeMetadata"),ee=new I("graph/columns/didChange"),et=new I("graph/scrollMarkers/didChange"),eo=new I("graph/focus/didChange"),en=new I("graph/window/focus/didChange"),er=new I("graph/refs/didChangeVisibility"),ei=new I("graph/rows/didChange",void 0,!0),es=new I("graph/rows/stats/didChange"),ea=new I("graph/selection/didChange"),el=new I("graph/workingTree/didChange"),ec=new I("graph/rows/didEnsure"),ed=new I("graph/didSearch"),eh=new I("graph/didFetch");var eu=((c=eu||{})[c.Hash=35]="Hash",c[c.Slash=47]="Slash",c[c.Digit0=48]="Digit0",c[c.Digit1=49]="Digit1",c[c.Digit2=50]="Digit2",c[c.Digit3=51]="Digit3",c[c.Digit4=52]="Digit4",c[c.Digit5=53]="Digit5",c[c.Digit6=54]="Digit6",c[c.Digit7=55]="Digit7",c[c.Digit8=56]="Digit8",c[c.Digit9=57]="Digit9",c[c.Backslash=92]="Backslash",c[c.A=65]="A",c[c.B=66]="B",c[c.C=67]="C",c[c.D=68]="D",c[c.E=69]="E",c[c.F=70]="F",c[c.Z=90]="Z",c[c.a=97]="a",c[c.b=98]="b",c[c.c=99]="c",c[c.d=100]="d",c[c.e=101]="e",c[c.f=102]="f",c[c.z=122]="z",c),ep=((d=ep||{}).ActionPrefix="gitlens.action.",d.AddAuthors="gitlens.addAuthors",d.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",d.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",d.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",d.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",d.ClearFileAnnotations="gitlens.clearFileAnnotations",d.CloseUnchangedFiles="gitlens.closeUnchangedFiles",d.CloseWelcomeView="gitlens.closeWelcomeView",d.CompareWith="gitlens.compareWith",d.CompareHeadWith="gitlens.compareHeadWith",d.CompareWorkingWith="gitlens.compareWorkingWith",d.ComputingFileAnnotations="gitlens.computingFileAnnotations",d.ConnectRemoteProvider="gitlens.connectRemoteProvider",d.CopyAutolinkUrl="gitlens.copyAutolinkUrl",d.CopyCurrentBranch="gitlens.copyCurrentBranch",d.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",d.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",d.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",d.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",d.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",d.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",d.CopyMessageToClipboard="gitlens.copyMessageToClipboard",d.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",d.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",d.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",d.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",d.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",d.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",d.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",d.CopyRemoteIssueUrl="gitlens.copyRemoteIssueUrl",d.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",d.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",d.CopyShaToClipboard="gitlens.copyShaToClipboard",d.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",d.CreatePatch="gitlens.createPatch",d.CreateCloudPatch="gitlens.createCloudPatch",d.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",d.DiffDirectory="gitlens.diffDirectory",d.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",d.DiffWith="gitlens.diffWith",d.DiffWithNext="gitlens.diffWithNext",d.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",d.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",d.DiffWithPrevious="gitlens.diffWithPrevious",d.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",d.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",d.DiffLineWithPrevious="gitlens.diffLineWithPrevious",d.DiffWithRevision="gitlens.diffWithRevision",d.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",d.DiffWithWorking="gitlens.diffWithWorking",d.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",d.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",d.DiffLineWithWorking="gitlens.diffLineWithWorking",d.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",d.DisableDebugLogging="gitlens.disableDebugLogging",d.EnableDebugLogging="gitlens.enableDebugLogging",d.DisableRebaseEditor="gitlens.disableRebaseEditor",d.EnableRebaseEditor="gitlens.enableRebaseEditor",d.ExternalDiff="gitlens.externalDiff",d.ExternalDiffAll="gitlens.externalDiffAll",d.FetchRepositories="gitlens.fetchRepositories",d.GenerateCommitMessage="gitlens.generateCommitMessage",d.GetStarted="gitlens.getStarted",d.InviteToLiveShare="gitlens.inviteToLiveShare",d.OpenAutolinkUrl="gitlens.openAutolinkUrl",d.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",d.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",d.OpenBranchOnRemote="gitlens.openBranchOnRemote",d.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",d.OpenChangedFiles="gitlens.openChangedFiles",d.OpenCommitOnRemote="gitlens.openCommitOnRemote",d.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",d.OpenFileHistory="gitlens.openFileHistory",d.OpenFileFromRemote="gitlens.openFileFromRemote",d.OpenFileOnRemote="gitlens.openFileOnRemote",d.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",d.OpenFileAtRevision="gitlens.openFileRevision",d.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",d.OpenFolderHistory="gitlens.openFolderHistory",d.OpenOnRemote="gitlens.openOnRemote",d.OpenIssueOnRemote="gitlens.openIssueOnRemote",d.OpenCloudPatch="gitlens.openCloudPatch",d.OpenPatch="gitlens.openPatch",d.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",d.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",d.OpenRepoOnRemote="gitlens.openRepoOnRemote",d.OpenRevisionFile="gitlens.openRevisionFile",d.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",d.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",d.OpenWalkthrough="gitlens.openWalkthrough",d.OpenWorkingFile="gitlens.openWorkingFile",d.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",d.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",d.PullRepositories="gitlens.pullRepositories",d.PushRepositories="gitlens.pushRepositories",d.GitCommands="gitlens.gitCommands",d.GitCommandsBranch="gitlens.gitCommands.branch",d.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",d.GitCommandsMerge="gitlens.gitCommands.merge",d.GitCommandsRebase="gitlens.gitCommands.rebase",d.GitCommandsReset="gitlens.gitCommands.reset",d.GitCommandsRevert="gitlens.gitCommands.revert",d.GitCommandsSwitch="gitlens.gitCommands.switch",d.GitCommandsTag="gitlens.gitCommands.tag",d.GitCommandsWorktree="gitlens.gitCommands.worktree",d.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",d.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",d.PlusHide="gitlens.plus.hide",d.PlusLoginOrSignUp="gitlens.plus.loginOrSignUp",d.PlusLogout="gitlens.plus.logout",d.PlusManage="gitlens.plus.manage",d.PlusPurchase="gitlens.plus.purchase",d.PlusResendVerification="gitlens.plus.resendVerification",d.PlusRestore="gitlens.plus.restore",d.PlusShowPlans="gitlens.plus.showPlans",d.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",d.PlusValidate="gitlens.plus.validate",d.QuickOpenFileHistory="gitlens.quickOpenFileHistory",d.RefreshFocus="gitlens.focus.refresh",d.RefreshGraph="gitlens.graph.refresh",d.RefreshHover="gitlens.refreshHover",d.ResetAvatarCache="gitlens.resetAvatarCache",d.ResetAIKey="gitlens.resetAIKey",d.ResetSuppressedWarnings="gitlens.resetSuppressedWarnings",d.ResetTrackedUsage="gitlens.resetTrackedUsage",d.ResetViewsLayout="gitlens.resetViewsLayout",d.RevealCommitInView="gitlens.revealCommitInView",d.ShareAsCloudPatch="gitlens.shareAsCloudPatch",d.SearchCommits="gitlens.showCommitSearch",d.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",d.ShowBranchesView="gitlens.showBranchesView",d.ShowCommitDetailsView="gitlens.showCommitDetailsView",d.ShowCommitInView="gitlens.showCommitInView",d.ShowCommitsInView="gitlens.showCommitsInView",d.ShowCommitsView="gitlens.showCommitsView",d.ShowContributorsView="gitlens.showContributorsView",d.ShowDraftsView="gitlens.showDraftsView",d.ShowFileHistoryView="gitlens.showFileHistoryView",d.ShowFocusPage="gitlens.showFocusPage",d.ShowGraph="gitlens.showGraph",d.ShowGraphPage="gitlens.showGraphPage",d.ShowGraphView="gitlens.showGraphView",d.ShowHomeView="gitlens.showHomeView",d.ShowAccountView="gitlens.showAccountView",d.ShowInCommitGraph="gitlens.showInCommitGraph",d.ShowInCommitGraphView="gitlens.showInCommitGraphView",d.ShowInDetailsView="gitlens.showInDetailsView",d.ShowInTimeline="gitlens.showInTimeline",d.ShowLastQuickPick="gitlens.showLastQuickPick",d.ShowLineCommitInView="gitlens.showLineCommitInView",d.ShowLineHistoryView="gitlens.showLineHistoryView",d.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",d.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",d.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",d.ShowQuickCommit="gitlens.showQuickCommitDetails",d.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",d.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",d.ShowQuickFileHistory="gitlens.showQuickFileHistory",d.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",d.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",d.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",d.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",d.ShowQuickStashList="gitlens.showQuickStashList",d.ShowRemotesView="gitlens.showRemotesView",d.ShowRepositoriesView="gitlens.showRepositoriesView",d.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",d.ShowSettingsPage="gitlens.showSettingsPage",d.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",d.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",d.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",d.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",d.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",d.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",d.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",d.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",d.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",d.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",d.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",d.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",d.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",d.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",d.ShowStashesView="gitlens.showStashesView",d.ShowTagsView="gitlens.showTagsView",d.ShowTimelinePage="gitlens.showTimelinePage",d.ShowTimelineView="gitlens.showTimelineView",d.ShowWelcomePage="gitlens.showWelcomePage",d.ShowWorktreesView="gitlens.showWorktreesView",d.ShowWorkspacesView="gitlens.showWorkspacesView",d.StashApply="gitlens.stashApply",d.StashSave="gitlens.stashSave",d.StashSaveFiles="gitlens.stashSaveFiles",d.SwitchAIModel="gitlens.switchAIModel",d.SwitchMode="gitlens.switchMode",d.ToggleCodeLens="gitlens.toggleCodeLens",d.ToggleFileBlame="gitlens.toggleFileBlame",d.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",d.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",d.ToggleFileChanges="gitlens.toggleFileChanges",d.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",d.ToggleFileHeatmap="gitlens.toggleFileHeatmap",d.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",d.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",d.ToggleGraph="gitlens.toggleGraph",d.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",d.ToggleLineBlame="gitlens.toggleLineBlame",d.ToggleReviewMode="gitlens.toggleReviewMode",d.ToggleZenMode="gitlens.toggleZenMode",d.ViewsCopy="gitlens.views.copy",d.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",d.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",d.Deprecated_DiffHeadWith="gitlens.diffHeadWith",d.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",d.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",d.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",d.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",d.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",d.Deprecated_OpenInRemote="gitlens.openInRemote",d.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",d.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",d),ef=((h=ef||{}).AngleBracketLeftHeavy="❰",h.AngleBracketRightHeavy="❱",h.ArrowBack="↩",h.ArrowDown="↓",h.ArrowDownUp="⇵",h.ArrowDropRight="⤷",h.ArrowHeadRight="➤",h.ArrowLeft="←",h.ArrowLeftDouble="⇐",h.ArrowLeftRight="↔",h.ArrowLeftRightDouble="⇔",h.ArrowLeftRightDoubleStrike="⇎",h.ArrowLeftRightLong="⟷",h.ArrowRight="→",h.ArrowRightDouble="⇒",h.ArrowRightHollow="⇨",h.ArrowUp="↑",h.ArrowUpDown="⇅",h.ArrowUpRight="↗",h.ArrowsHalfLeftRight="⇋",h.ArrowsHalfRightLeft="⇌",h.ArrowsLeftRight="⇆",h.ArrowsRightLeft="⇄",h.Asterisk="∗",h.Check="✔",h.Dash="—",h.Dot="•",h.Ellipsis="…",h.EnDash="–",h.Envelope="✉",h.EqualsTriple="≡",h.Flag="⚑",h.FlagHollow="⚐",h.MiddleEllipsis="⋯",h.MuchLessThan="≪",h.MuchGreaterThan="≫",h.Pencil="✎",h.Space=" ",h.SpaceThin=" ",h.SpaceThinnest=" ",h.SquareWithBottomShadow="❏",h.SquareWithTopShadow="❐",h.Warning="⚠",h.ZeroWidthSpace="​",h),em=((u=em||{}).DebugConsole="debug",u.File="file",u.Git="git",u.GitHub="github",u.GitLens="gitlens",u.Output="output",u.PRs="pr",u.Terminal="vscode-terminal",u.Vsls="vsls",u.VslsScc="vsls-scc",u.Virtual="vscode-vfs",u),eg=((p=eg||{}).Version="gitlens:synced:version",p.PreReleaseVersion="gitlens:synced:preVersion",p.HomeViewWelcomeVisible="gitlens:views:welcome:visible",p);function eb(e,t){let o=e+t;return Math.round(t<0?o<0?0:o:o>255?255:o)}function ev(e,t){return ey(e,-t)}function ey(e,t){let o=function(e){let t=eI(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;let[n,r,i,s]=o,a=255*t/100;return`rgba(${eb(n,a)}, ${eb(r,a)}, ${eb(i,a)}, ${s})`}function ew(e,t){let o=ek.from(e);return null==o?e:o.transparent(t/100).toString()}function eC(e,t){let o=Math.pow(10,t);return Math.round(e*o)/o}class eS{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=eC(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class ex{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=eC(Math.max(Math.min(1,t),0),3),this.l=eC(Math.max(Math.min(1,o),0),3),this.a=eC(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,n=e.b/255,r=e.a,i=Math.max(t,o,n),s=Math.min(t,o,n),a=0,l=0,c=(s+i)/2,d=i-s;if(d>0){switch(l=Math.min(c<=.5?d/(2*c):d/(2-2*c),1),i){case t:a=(o-n)/d+(o<n?6:0);break;case o:a=(n-t)/d+2;break;case n:a=(t-o)/d+4}a*=60,a=Math.round(a)}return new ex(a,l,c,r)}static _hue2rgb(e,t,o){return(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?e+(t-e)*6*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){let t,o,n;let r=e.h/360,{s:i,l:s,a}=e;if(0===i)t=o=n=s;else{let e=s<.5?s*(1+i):s+i-s*i,a=2*s-e;t=ex._hue2rgb(a,e,r+1/3),o=ex._hue2rgb(a,e,r),n=ex._hue2rgb(a,e,r-1/3)}return new eS(Math.round(255*t),Math.round(255*o),Math.round(255*n),a)}}class e_{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=eC(Math.max(Math.min(1,t),0),3),this.v=eC(Math.max(Math.min(1,o),0),3),this.a=eC(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,n=e.b/255,r=Math.max(t,o,n),i=r-Math.min(t,o,n);return new e_(Math.round(60*(0===i?0:r===t?((o-n)/i%6+6)%6:r===o?(n-t)/i+2:(t-o)/i+4)),0===r?0:i/r,r,e.a)}static toRGBA(e){let{h:t,s:o,v:n,a:r}=e,i=n*o,s=i*(1-Math.abs(t/60%2-1)),a=n-i,[l,c,d]=[0,0,0];return t<60?(l=i,c=s):t<120?(l=s,c=i):t<180?(c=i,d=s):t<240?(c=s,d=i):t<300?(l=s,d=i):t<=360&&(l=i,d=s),new eS(l=Math.round((l+a)*255),c=Math.round((c+a)*255),d=Math.round((d+a)*255),r)}}function eR(e,t){return t.getPropertyValue(e).trim()}let eT=class e{static from(t){return t instanceof e?t:eI(t)||e.red}static fromCssVariable(t,o){return eI(eR(t,o))||e.red}static fromHex(t){return eM(t)||e.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:ex.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:e_.fromRGBA(this.rgba)}constructor(e){if(e){if(e instanceof eS)this.rgba=e;else if(e instanceof ex)this._hsla=e,this.rgba=ex.toRGBA(e);else if(e instanceof e_)this._hsva=e,this.rgba=e_.toRGBA(e);else throw Error("Invalid color ctor argument")}else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&eS.equals(this.rgba,e.rgba)&&ex.equals(this.hsla,e.hsla)&&e_.equals(this.hsva,e.hsva)}getRelativeLuminance(){let t=e._relativeLuminanceForComponent(this.rgba.r);return eC(.2126*t+.7152*e._relativeLuminanceForComponent(this.rgba.g)+.0722*e._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new ek(new eS(0,0,0,e.rgba.a));if(1===t)return new ek(new eS(255,255,255,e.rgba.a));let o=e.getRelativeLuminance(),n=20,r=(e,o)=>{let i=e.mix(o,.5),s=i.getRelativeLuminance();return!(1e-7>Math.abs(t-s))&&n--?s>t?r(e,i):r(i,o):i},i=(o>t?r(ek.black,e):r(e,ek.white)).rgba;return new ek(new eS(i.r,i.g,i.b,e.rgba.a))}(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(t){return new e(new ex(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*t,this.hsla.a))}darken(t){return new e(new ex(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*t,this.hsla.a))}transparent(t){let{r:o,g:n,b:r,a:i}=this.rgba;return new e(new eS(o,n,r,i*t))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new e(new eS(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(t){let o=t.rgba,n=this.rgba.a,r=o.a,i=n+r*(1-n);return i<1e-6?e.transparent:new e(new eS(this.rgba.r*n/i+o.r*r*(1-n)/i,this.rgba.g*n/i+o.g*r*(1-n)/i,this.rgba.b*n/i+o.b*r*(1-n)/i,i))}mix(e,t){return function(e,t,o){let n=e.rgba,r=t.rgba;return new ek(new eS(n.r+o*(r.r-n.r),n.g+o*(r.g-n.g),n.b+o*(r.b-n.b),n.a+o*(r.a-n.a)))}(this,e,t)}makeOpaque(t){if(this.isOpaque()||1!==t.rgba.a)return this;let{r:o,g:n,b:r,a:i}=this.rgba;return new e(new eS(t.rgba.r-i*(t.rgba.r-o),t.rgba.g-i*(t.rgba.g-n),t.rgba.b-i*(t.rgba.b-r),1))}flatten(...t){let o=t.reduceRight((t,o)=>e._flatten(o,t));return e._flatten(this,o)}static _flatten(t,o){let n=1-t.rgba.a;return new e(new eS(n*o.rgba.r+t.rgba.a*t.rgba.r,n*o.rgba.g+t.rgba.a*t.rgba.g,n*o.rgba.b+t.rgba.a*t.rgba.b))}toString(){var e;return this._toString||(this._toString=(e=this,e.isOpaque()?`#${eE(e.rgba.r)}${eE(e.rgba.g)}${eE(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;let n=e.getRelativeLuminance(),r=t.getRelativeLuminance();return o=o*(r-n)/r,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;let n=e.getRelativeLuminance(),r=t.getRelativeLuminance();return o=o*(n-r)/n,e.darken(o)}};eT.white=new eT(new eS(255,255,255,1)),eT.black=new eT(new eS(0,0,0,1)),eT.red=new eT(new eS(255,0,0,1)),eT.blue=new eT(new eS(0,0,255,1)),eT.green=new eT(new eS(0,255,0,1)),eT.cyan=new eT(new eS(0,255,255,1)),eT.lightgrey=new eT(new eS(211,211,211,1)),eT.transparent=new eT(new eS(0,0,0,0));let ek=eT;function eE(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let eO=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function eI(e){let t;if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===eu.Hash)return eM(e);let o=eO.exec(e);if(null==o)return null;let n=o[1];switch(n){case"rgb":case"hsl":t=[parseInt(o[2],10),parseInt(o[3],10),parseInt(o[4],10),1];break;case"rgba":case"hsla":t=[parseInt(o[2],10),parseInt(o[3],10),parseInt(o[4],10),parseFloat(o[5])];break;default:return null}switch(n){case"rgb":case"rgba":return new ek(new eS(t[0],t[1],t[2],t[3]));case"hsl":case"hsla":return new ek(new ex(t[0],t[1],t[2],t[3]))}return ek.red}function eM(e){let t=(e=e.trim()).length;if(0===t||e.charCodeAt(0)!==eu.Hash)return null;switch(t){case 7:return new ek(new eS(16*eD(e.charCodeAt(1))+eD(e.charCodeAt(2)),16*eD(e.charCodeAt(3))+eD(e.charCodeAt(4)),16*eD(e.charCodeAt(5))+eD(e.charCodeAt(6)),1));case 9:{let t=16*eD(e.charCodeAt(1))+eD(e.charCodeAt(2));return new ek(new eS(t,16*eD(e.charCodeAt(3))+eD(e.charCodeAt(4)),16*eD(e.charCodeAt(5))+eD(e.charCodeAt(6)),(16*eD(e.charCodeAt(7))+eD(e.charCodeAt(8)))/255))}case 4:{let t=eD(e.charCodeAt(1)),o=eD(e.charCodeAt(2)),n=eD(e.charCodeAt(3));return new ek(new eS(16*t+t,16*o+o,16*n+n))}case 5:{let t=eD(e.charCodeAt(1)),o=eD(e.charCodeAt(2)),n=eD(e.charCodeAt(3)),r=eD(e.charCodeAt(4));return new ek(new eS(16*t+t,16*o+o,16*n+n,(16*r+r)/255))}default:return null}}function eD(e){switch(e){case eu.Digit0:break;case eu.Digit1:return 1;case eu.Digit2:return 2;case eu.Digit3:return 3;case eu.Digit4:return 4;case eu.Digit5:return 5;case eu.Digit6:return 6;case eu.Digit7:return 7;case eu.Digit8:return 8;case eu.Digit9:return 9;case eu.a:case eu.A:return 10;case eu.b:case eu.B:return 11;case eu.c:case eu.C:return 12;case eu.d:case eu.D:return 13;case eu.e:case eu.E:return 14;case eu.f:case eu.F:return 15}return 0}function eA(e){let t=.001*performance.now(),o=Math.floor(t),n=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],(n-=e[1])<0&&(o--,n+=1e9)),[o,n]}function e$(e,t){let o,n,r,i,s;function a(e){let o=e-(n??0);return null==n||o>=t||o<0}function l(){let e=Date.now();a(e)?c():s=setTimeout(l,t-(e-(n??0)))}function c(){return(s=void 0,o)?function(){let t=o,n=r;return o=r=void 0,i=e.apply(n,t)}():(o=r=void 0,i)}function d(...e){let c=Date.now(),h=a(c);return(o=e,r=this,n=c,h&&null==s)?s=setTimeout(l,t):null==s&&(s=setTimeout(l,t)),i}return d.cancel=function(){null!=s&&clearTimeout(s),o=n=r=s=void 0},d.flush=function(){return null!=s?c():i},d.pending=function(){return null!=s},d}let eP=/\(([\s\S]*)\)/,eN=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,ez=/\s?=.*$/;var eH=((f=eH||{})[f.Off=0]="Off",f[f.Error=1]="Error",f[f.Warn=2]="Warn",f[f.Info=3]="Info",f[f.Debug=4]="Debug",f);let eL=new class{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=eF(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=eF(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let o;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...o){let n;if(!(this.level<1)||this.isDebugging){if(null==(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??""}${this.toLoggableParams(!1,o)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let o;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let o;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let o=t.map(e=>this.toLoggable(e)).join(", ");return 0!==o.length?` \u2014 ${o}`:""}};function eF(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}function eW(e){let t;if("function"==typeof e){if(e.prototype?.constructor==null)return e.name;t=e.prototype.constructor.name??""}else t=e.constructor?.name??"";let o=t.indexOf("_");return -1===o?t:t.substr(o+1)}let eG={enabled:e=>eL.enabled(e)||eL.isDebugging,log:(e,t,o,...n)=>{switch(e){case"error":eL.error("",t,o,...n);break;case"warn":eL.warn(t,o,...n);break;case"info":eL.log(t,o,...n);break;default:eL.debug(t,o,...n)}}},eB=new Map,eU=0;function eV(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};let o=ej();return{scopeId:o,prefix:`[${String(o).padStart(5)}] ${e}`}}function ej(){return 1073741824===eU&&(eU=0),++eU}let{fromCharCode:eZ}=String;function eq(e){let[t,o]=eA(e);return 1e3*t+Math.floor(o/1e6)}function eK(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;let n=1===t?e:o.plural??`${e}s`;return o.only?n:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${n}`}new TextEncoder;let eY=Symbol("logInstanceNameFn");function eQ(e,t=!1){let o,n,r,i;let s=0,a=!1,l=!1,c=!0;null!=e&&({args:o,enter:n,exit:r,prefix:i,logThreshold:s=0,scoped:a=!0,singleLine:l=!1,timed:c=!0}=e),s>0&&(l=!0,c=!0),c&&(a=!0);let d=eL.isDebugging,h=t?eL.debug:eL.log,u=d?"debug":"info";return(e,t,p)=>{let f,m;if("function"==typeof p.value?(f=p.value,m="value"):"function"==typeof p.get&&(f=p.get,m="get"),null==f||null==m)throw Error("Not supported");let g=!1!==o?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),o=(t=(t=t.replace(eN,"")||t).slice(0,t.indexOf("{"))).indexOf("("),n=t.indexOf(")");o=o>=0?o+1:0,n=n>0?n:t.indexOf("="),t=t.slice(o,n),t=`(${t})`;let r=eP.exec(t);return null!=r?r[1].split(",").map(e=>e.trim().replace(ez,"")):[]}(f):[];p[m]=function(...e){var p,m;let b,v;if(!d&&!eL.enabled(u))return f.apply(this,e);let y=ej(),w=this!=null?this.constructor?.[eY]?.(this,eW(this))??eW(this):void 0,C=w?a?`[${y.toString(16).padStart(5)}] ${w}.${t}`:`${w}.${t}`:t;null!=i&&(C=i({id:y,instance:this,instanceName:w??"",name:t,prefix:C},...e)),a&&(p=b={scopeId:y,prefix:C},eB.set(y,p));let S=null!=n?n(...e):"";if(!1===o||0===e.length)v="",l||h.call(eL,`${C}${S}`);else{let t,n,r,i;v="";let s=-1;for(i of e){if(n=g[++s],null!=(t=o?.[s])){if("boolean"==typeof t)continue;if(v.length>0&&(v+=", "),"string"==typeof t){v+=t;continue}r=String(t(i))}else v.length>0&&(v+=", "),r=eL.toLoggable(i);v+=n?`${n}=${r}`:r}l||h.call(eL,v?`${C}${S}(${v})`:`${C}${S}`)}if(l||c||null!=r){let t;let o=c?eA():void 0,n=e=>{let t=void 0!==o?` [${eq(o)}ms]`:"";l?eL.error(e,v?`${C}${S}(${v})`:`${C}${S}`,b?.exitDetails?`failed${b.exitDetails}${t}`:`failed${t}`):eL.error(e,C,b?.exitDetails?`failed${b.exitDetails}${t}`:`failed${t}`),a&&eB.delete(y)};try{t=f.apply(this,e)}catch(e){throw n(e),e}let i=e=>{let t,n,i,c;if(null!=o?(t=eq(o))>500?(n=eL.warn,i=` [*${t}ms] (slow)`):(n=h,i=` [${t}ms]`):(i="",n=h),null!=r){if("function"==typeof r)try{c=r(e)}catch(e){c=`@log.exit error: ${e}`}else!0===r&&(c=`returned ${eL.toLoggable(e)}`)}else b?.exitFailed?(c=b.exitFailed,n=eL.error):c="completed";l?(0===s||t>s)&&n.call(eL,v?`${C}${S}(${v}) ${c}${b?.exitDetails||""}${i}`:`${C}${S} ${c}${b?.exitDetails||""}${i}`):n.call(eL,v?`${C}(${v}) ${c}${b?.exitDetails||""}${i}`:`${C} ${c}${b?.exitDetails||""}${i}`),a&&eB.delete(y)};return null!=t&&null!=(m=t)&&(m instanceof Promise||"function"==typeof m?.then)?t.then(i,n):i(t),t}return f.apply(this,e)}}}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class eX{constructor(e,t,...o){let n;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:eV(e??""),n="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??eG,this._time=eA(),null!=n){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=eA(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=eA(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t){this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);return}let[o,n]=eA(this._time),r=1e3*o+Math.floor(n/1e6),i=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${i?`${i} `:""}[${r}ms]${e?.suffix??""}`)}}(m=S||(S={})).on=function(e,t,o,n){let r=!1;if("string"==typeof e){let i=function(t){let n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,i,n??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,i,n??!0))}}}let i=function(e){o(e,this)};return e.addEventListener(t,i,n??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,i,n??!1))}}},m.insertTemplate=function(e,t,o){let n=document.getElementById(e);if(t.replaceChildren(n?.content.cloneNode(!0)),t.className=n.className,o?.visible!=null)for(let e of t.querySelectorAll("[data-visible]")){let t=e.dataset.visible;t&&(o.visible[t]?e.style.display="initial":e.style.display="none")}if(o?.bindings!=null)for(let e of t.querySelectorAll("[data-bind]")){let t=e.dataset.bind;if(!t)continue;let n=o.bindings[t];null!=n&&(e.textContent=String(n))}},m.resetSlot=function(e){e.replaceChildren(),e.className=""};let eJ=class e{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(t,o,n)=>{null==this.listeners&&(this.listeners=new e2);let r=this.listeners.push(null==o?t:[t,o]),i={dispose:()=>{i.dispose=e._noop,this._disposed||r()}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new e2);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};eJ._noop=function(){};let e0={done:!0,value:void 0},e1=class e{constructor(t){this.element=t,this.next=e.Undefined,this.prev=e.Undefined}};e1.Undefined=new e1(void 0);class e2{constructor(){this._first=e1.Undefined,this._last=e1.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===e1.Undefined}clear(){this._first=e1.Undefined,this._last=e1.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let o=new e1(e);if(this._first===e1.Undefined)this._first=o,this._last=o;else if(t){let e=this._last;this._last=o,o.prev=e,e.next=o}else{let e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===e1.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===e1.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==e1.Undefined&&e.next!==e1.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===e1.Undefined&&e.next===e1.Undefined?(this._first=e1.Undefined,this._last=e1.Undefined):e.next===e1.Undefined?(this._last=this._last.prev,this._last.next=e1.Undefined):e.prev===e1.Undefined&&(this._first=this._first.next,this._first.prev=e1.Undefined);this._size-=1}iterator(){let e;let t=this._first;return{next:function(){return t===e1.Undefined?e0:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==e1.Undefined;t=t.next)e.push(t.element);return e}}let e5=new eJ,e3=e5.event;function e6(e){let t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,r=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),i=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),s=t.style,a=eR("--vscode-editor-background",o),l=eR("--vscode-editor-foreground",o);l||(l=eR("--vscode-foreground",o));let c=eR("--color-background",o);return s.setProperty("--color-background--lighten-05",ey(c,5)),s.setProperty("--color-background--darken-05",ev(c,5)),s.setProperty("--color-background--lighten-075",ey(c,7.5)),s.setProperty("--color-background--darken-075",ev(c,7.5)),s.setProperty("--color-background--lighten-10",ey(c,10)),s.setProperty("--color-background--darken-10",ev(c,10)),s.setProperty("--color-background--lighten-15",ey(c,15)),s.setProperty("--color-background--darken-15",ev(c,15)),s.setProperty("--color-background--lighten-30",ey(c,30)),s.setProperty("--color-background--darken-30",ev(c,30)),s.setProperty("--color-background--lighten-50",ey(c,50)),s.setProperty("--color-background--darken-50",ev(c,50)),c=eR("--color-button-background",o),s.setProperty("--color-button-background--darken-30",ev(c,30)),c=eR("--color-highlight",o),s.setProperty("--color-highlight--75",ew(c,75)),s.setProperty("--color-highlight--50",ew(c,50)),s.setProperty("--color-highlight--25",ew(c,25)),c=eR("--color-button-secondary-background",o),s.setProperty("--color-button-secondary-background--darken-30",ev(c,30)),c=eR("--color-foreground",o),s.setProperty("--color-foreground--85",ew(c,85)),s.setProperty("--color-foreground--75",ew(c,75)),s.setProperty("--color-foreground--65",ew(c,65)),s.setProperty("--color-foreground--50",ew(c,50)),c=eR("--color-link-foreground",o),s.setProperty("--color-link-foreground--darken-20",ev(c,20)),s.setProperty("--color-link-foreground--lighten-20",ey(c,20)),c=eR("--color-alert-infoBackground",o),s.setProperty("--color-alert-infoHoverBackground",r?ev(c,5):ey(c,5)),c=eR("--color-alert-warningBackground",o),s.setProperty("--color-alert-warningHoverBackground",r?ev(c,5):ey(c,5)),c=eR("--color-alert-errorBackground",o),s.setProperty("--color-alert-errorHoverBackground",r?ev(c,5):ey(c,5)),c=r?ev(a,5):ey(a,5),s.setProperty("--color-alert-neutralBackground",c),s.setProperty("--color-alert-neutralHoverBackground",r?ev(c,5):ey(c,5)),{colors:{background:a,foreground:l},computedStyle:o,isLightTheme:r,isHighContrastTheme:i,isInitializing:null==e}}var e4=Object.defineProperty,e7=Object.getOwnPropertyDescriptor;let e9=0;function e8(){return 1073741824===e9?e9=1:e9++,`webview:${e9}`}let te=new TextDecoder;class tt{constructor(e){this.appName=e;let t=[],o=e6();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(e3(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",eL.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=acquireVsCodeApi(),null!=this.state){let e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){let e=new MutationObserver(e=>{e5.fire(e6(e))});return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame(()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(S.on(window,"message",e=>this.onMessageReceivedCore(e))),this.sendCommand(D,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}}),t.push(S.on(window,"pagehide",()=>{t?.forEach(e=>e.dispose()),this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=void 0}))}onMessageReceivedCore(e){let t=eB.get(eU),o=e.data;if(o.packed&&o.params instanceof Uint8Array){let n=function(e,t,...o){return(t?.provider??eG).enabled(t?.logLevel??"info")?new eX(e,t,...o):void 0}(eV(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});o.params=JSON.parse(te.decode(o.params)),n?.stop()}this.onMessageReceived(o)}bind(){this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);let e=e$(e=>{this.sendCommand(A,e)},150);this.bindDisposables.push(S.on(document,"focusin",t=>{let o=t.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==o)&&(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))}),S.on(document,"focusout",()=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))}))}log(e,...t){"string"==typeof e?eL.log(e,...t):eL.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){let o=e8();this.log(`${this.appName}.sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,o){let n=e8();this.log(`${this.appName}.sendCommandWithCompletion(${n}): name=${e.method}`);let r=new Promise((e,t)=>{let r;let i=[S.on(window,"message",t=>{M(o,t.data,o=>{t.data.completionId===n&&(i.forEach(e=>e.dispose()),queueMicrotask(()=>e(o)))})}),{dispose:function(){null!=r&&(clearTimeout(r),r=void 0)}}];r=setTimeout(()=>{r=void 0,i.forEach(e=>e.dispose()),t(Error(`Timed out waiting for completion of ${o.method}`))},6e4)});return this.postMessage({id:n,method:e.method,params:t,completionId:n}),r}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}((e,t,o,n)=>{for(var r,i=n>1?void 0:n?e7(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&e4(t,o,i)})([eQ({args:{0:e=>`${e.data.id}, method=${e.data.method}`}},!0)],tt.prototype,"onMessageReceivedCore",1);var to=s(7507),tn=s.n(to);let tr=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return Function("return this")()}catch(e){return{}}}();void 0===tr.trustedTypes&&(tr.trustedTypes={createPolicy:(e,t)=>t});let ti={configurable:!1,enumerable:!1,writable:!1};void 0===tr.FAST&&Reflect.defineProperty(tr,"FAST",Object.assign({value:Object.create(null)},ti));let ts=tr.FAST;if(void 0===ts.getById){let e=Object.create(null);Reflect.defineProperty(ts,"getById",Object.assign({value(t,o){let n=e[t];return void 0===n&&(n=o?e[t]=o():null),n}},ti))}let ta=Object.freeze([]);function tl(){let e=new WeakMap;return function(t){let o=e.get(t);if(void 0===o){let n=Reflect.getPrototypeOf(t);for(;void 0===o&&null!==n;)o=e.get(n),n=Reflect.getPrototypeOf(n);o=void 0===o?[]:o.slice(0),e.set(t,o)}return o}}let tc=tr.FAST.getById(1,()=>{let e=[],t=[];function o(){if(t.length)throw t.shift()}function n(){let n=0;for(;n<e.length;)if(!function(e){try{e.call()}catch(e){t.push(e),setTimeout(o,0)}}(e[n]),++n>1024){for(let t=0,o=e.length-n;t<o;t++)e[t]=e[t+n];e.length-=n,n=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&tr.requestAnimationFrame(n),e.push(t)},process:n})}),td=tr.trustedTypes.createPolicy("fast-html",{createHTML:e=>e}),th=td,tu=`fast-${Math.random().toString(36).substring(2,8)}`,tp=`${tu}{`,tf=`}${tu}`,tm=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(th!==td)throw Error("The HTML policy can only be set once.");th=e},createHTML:e=>th.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(tu),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${tu}:`,"")),createInterpolationPlaceholder:e=>`${tp}${e}${tf}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`<!--${tu}:${e}-->`,queueUpdate:tc.enqueue,processUpdates:tc.process,nextUpdate:()=>new Promise(tc.enqueue),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class tg{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){let t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1){this.sub1=e;return}if(void 0===this.sub2){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else -1===t.indexOf(e)&&t.push(e)}unsubscribe(e){let t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{let o=t.indexOf(e);-1!==o&&t.splice(o,1)}}notify(e){let t=this.spillover,o=this.source;if(void 0===t){let t=this.sub1,n=this.sub2;void 0!==t&&t.handleChange(o,e),void 0!==n&&n.handleChange(o,e)}else for(let n=0,r=t.length;n<r;++n)t[n].handleChange(o,e)}}class tb{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;let o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new tg(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new tg(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}let tv=ts.getById(2,()=>{let e;let t=/(:|&&|\|\||if)/,o=new WeakMap,n=tm.queueUpdate,r=e=>{throw Error("Must call enableArrayObservation before observing arrays.")};function i(e){let t=e.$fastController||o.get(e);return void 0===t&&(Array.isArray(e)?t=r(e):o.set(e,t=new tb(e))),t}let s=tl();class a{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(t){return void 0!==e&&e.watch(t,this.name),t[this.field]}setValue(e,t){let o=this.field,n=e[o];if(n!==t){e[o]=t;let r=e[this.callback];"function"==typeof r&&r.call(e,n,t),i(e).notify(this.name)}}}class l extends tg{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(t,o){this.needsRefresh&&null!==this.last&&this.disconnect();let n=e;e=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let r=this.binding(t,o);return e=n,r}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(t,o){let n=this.last,r=i(t),s=null===n?this.first:{};if(s.propertySource=t,s.propertyName=o,s.notifier=r,r.subscribe(this,o),null!==n){if(!this.needsRefresh){let o;e=void 0,o=n.propertySource[n.propertyName],e=this,t===o&&(this.needsRefresh=!0)}n.next=s}this.last=s}handleChange(){this.needsQueue&&(this.needsQueue=!1,n(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{let t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){r=e},getNotifier:i,track(t,o){void 0!==e&&e.watch(t,o)},trackVolatile(){void 0!==e&&(e.needsRefresh=!0)},notify(e,t){i(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new a(t)),s(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:s,binding:(e,t,o=this.isVolatileBinding(e))=>new l(e,t,o),isVolatileBinding:e=>t.test(e.toString())})});function ty(e,t){tv.defineProperty(e,t)}function tw(e,t,o){return Object.assign({},o,{get:function(){return tv.trackVolatile(),o.get.apply(this)}})}let tC=ts.getById(3,()=>{let e=null;return{get:()=>e,set(t){e=t}}});class tS{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return tC.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){tC.set(e)}}tv.defineProperty(tS.prototype,"index"),tv.defineProperty(tS.prototype,"length");let tx=Object.seal(new tS);class t_{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function tR(e){return e.map(e=>e instanceof t_?tR(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function tT(e){return e.map(e=>e instanceof t_?e.behaviors:null).reduce((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t)),null)}t_.create=(()=>{if(tm.supportsAdoptedStyleSheets){let e=new Map;return t=>new tO(t,e)}return e=>new tM(e)})();let tk=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},tE=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter(e=>-1===t.indexOf(e))};if(tm.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),tk=(e,t)=>{e.adoptedStyleSheets.push(...t)},tE=(e,t)=>{for(let o of t){let t=e.adoptedStyleSheets.indexOf(o);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class tO extends t_{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=tT(e)}get styleSheets(){if(void 0===this._styleSheets){let e=this.styles,t=this.styleSheetCache;this._styleSheets=tR(e).map(e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&((o=new CSSStyleSheet).replaceSync(e),t.set(e,o)),o})}return this._styleSheets}addStylesTo(e){tk(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){tE(e,this.styleSheets),super.removeStylesFrom(e)}}let tI=0;class tM extends t_{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=tT(e),this.styleSheets=tR(e),this.styleClass=`fast-style-class-${++tI}`}addStylesTo(e){let t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){let r=document.createElement("style");r.innerHTML=t[n],r.className=o,e.append(r)}super.addStylesTo(e)}removeStylesFrom(e){let t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,n=t.length;o<n;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}let tD=Object.freeze({locate:tl()}),tA={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},t$={toView(e){if(null==e)return null;let t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;let t=1*e;return isNaN(t)?null:t}};class tP{constructor(e,t,o=t.toLowerCase(),n="reflect",r){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=n,this.converter=r,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===n&&void 0===r&&(this.converter=tA)}setValue(e,t){let o=e[this.fieldName],n=this.converter;void 0!==n&&(t=n.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return tv.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){let t=this.mode,o=this.guards;o.has(e)||"fromView"===t||tm.queueUpdate(()=>{o.add(e);let n=e[this.fieldName];switch(t){case"reflect":let r=this.converter;tm.setAttribute(e,this.attribute,void 0!==r?r.toView(n):n);break;case"boolean":tm.setBooleanAttribute(e,this.attribute,n)}o.delete(e)})}static collect(e,...t){let o=[];t.push(tD.locate(e));for(let n=0,r=t.length;n<r;++n){let r=t[n];if(void 0!==r)for(let t=0,n=r.length;t<n;++t){let n=r[t];"string"==typeof n?o.push(new tP(e,n)):o.push(new tP(e,n.property,n.attribute,n.mode,n.converter))}}return o}}function tN(e,t){let o;function n(e,t){arguments.length>1&&(o.property=t),tD.locate(e.constructor).push(o)}if(arguments.length>1){o={},n(e,t);return}return o=void 0===e?{}:e,n}let tz={mode:"open"},tH={},tL=ts.getById(4,()=>{let e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})});class tF{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;let o=tP.collect(e,t.attributes),n=Array(o.length),r={},i={};for(let e=0,t=o.length;e<t;++e){let t=o[e];n[e]=t.attribute,r[t.name]=t,i[t.attribute]=t}this.attributes=o,this.observedAttributes=n,this.propertyLookup=r,this.attributeLookup=i,this.shadowOptions=void 0===t.shadowOptions?tz:null===t.shadowOptions?void 0:Object.assign(Object.assign({},tz),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?tH:Object.assign(Object.assign({},tH),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?t_.create(t.styles):t.styles instanceof t_?t.styles:t_.create([t.styles])}get isDefined(){return!!tL.getByType(this.type)}define(e=customElements){let t=this.type;if(tL.register(this)){let e=this.attributes,o=t.prototype;for(let t=0,n=e.length;t<n;++t)tv.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}function tW(e,t,o,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,o,s):r(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s}tF.forType=tL.getByType,"function"==typeof SuppressedError&&SuppressedError;let tG=new WeakMap,tB={bubbles:!0,composed:!0,cancelable:!0};function tU(e){return e.shadowRoot||tG.get(e)||null}class tV extends tb{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;let o=t.shadowOptions;if(void 0!==o){let t=e.attachShadow(o);"closed"===o.mode&&tG.set(e,t)}let n=tv.getAccessors(e);if(n.length>0){let t=this.boundObservables=Object.create(null);for(let o=0,r=n.length;o<r;++o){let r=n[o].name,i=e[r];void 0!==i&&(delete e[r],t[r]=i)}}}get isConnected(){return tv.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,tv.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){let t=tU(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){let o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){let t=tU(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){let o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){let t=this.behaviors||(this.behaviors=new Map),o=e.length,n=[];for(let r=0;r<o;++r){let o=e[r];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),n.push(o))}if(this._isConnected){let e=this.element;for(let t=0;t<n.length;++t)n[t].bind(e,tx)}}removeBehaviors(e,t=!1){let o=this.behaviors;if(null===o)return;let n=e.length,r=[];for(let i=0;i<n;++i){let n=e[i];if(o.has(n)){let e=o.get(n)-1;0===e||t?o.delete(n)&&r.push(n):o.set(n,e)}}if(this._isConnected){let e=this.element;for(let t=0;t<r.length;++t)r[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;let e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,tx);let t=this.behaviors;if(null!==t)for(let[o]of t)o.bind(e,tx);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);let e=this.view;null!==e&&e.unbind();let t=this.behaviors;if(null!==t){let e=this.element;for(let[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){let n=this.definition.attributeLookup[e];void 0!==n&&n.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},tB),o)))}finishInitialization(){let e=this.element,t=this.boundObservables;if(null!==t){let o=Object.keys(t);for(let n=0,r=o.length;n<r;++n){let r=o[n];e[r]=t[r]}this.boundObservables=null}let o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){let t=this.element,o=tU(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||tm.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){let t=e.$fastController;if(void 0!==t)return t;let o=tF.forType(e.constructor);if(void 0===o)throw Error("Missing FASTElement definition.");return e.$fastController=new tV(e,o)}}function tj(e){return class extends e{constructor(){super(),tV.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}let tZ=Object.assign(tj(HTMLElement),{from:e=>tj(e),define:(e,t)=>new tF(e,t).define().type});function tq(e){return function(t){new tF(t,e).define()}}let tK=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(o){Reflect.defineMetadata(e,t,o)}},Reflect.defineMetadata=function(e,t,o){let n=tK.get(o);void 0===n&&tK.set(o,n=new Map),n.set(e,t)},Reflect.getOwnMetadata=function(e,t){let o=tK.get(t);if(void 0!==o)return o.get(e)});class tY{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,od(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){let{container:o,key:n}=this;return this.container=this.key=void 0,o.registerResolver(n,new t9(n,e,t))}}function tQ(e){let t;let o=e.slice(),n=Object.keys(e),r=n.length;for(let i=0;i<r;++i)ov(t=n[i])||(o[t]=e[t]);return o}let tX=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new t9(e,1,e),transient:e=>new t9(e,2,e)}).singleton})}),tJ=new Map;function t0(e){return t=>Reflect.getOwnMetadata(e,t)}let t1=null,t2=Object.freeze({createContainer:e=>new ol(null,Object.assign({},tX.default,e)),findResponsibleContainer(e){let t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:t2.findParentContainer(e)},findParentContainer(e){let t=new CustomEvent(os,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||t2.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new ol(e,Object.assign({},tX.default,t,{parentLocator:t2.findParentContainer})):t1||(t1=new ol(null,Object.assign({},tX.default,t,{parentLocator:()=>null}))),getDesignParamtypes:t0("design:paramtypes"),getAnnotationParamtypes:t0("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=tJ.get(e);if(void 0===t){let o=e.inject;if(void 0===o){let o=t2.getDesignParamtypes(e),n=t2.getAnnotationParamtypes(e);if(void 0===o){if(void 0===n){let o=Object.getPrototypeOf(e);t="function"==typeof o&&o!==Function.prototype?tQ(t2.getDependencies(o)):[]}else t=tQ(n)}else if(void 0===n)t=tQ(o);else{let e,r;t=tQ(o);let i=n.length;for(let o=0;o<i;++o)void 0!==(e=n[o])&&(t[o]=e);let s=Object.keys(n);i=s.length;for(let e=0;e<i;++e)ov(r=s[e])||(t[r]=n[r])}}else t=tQ(o);tJ.set(e,t)}return t},defineProperty(e,t,o,n=!1){let r=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[r];if(void 0===e&&(e=(this instanceof HTMLElement?t2.findResponsibleContainer(this):t2.getOrCreateDOMContainer()).get(o),this[r]=e,n&&this instanceof tZ)){let n=this.$fastController;n.subscribe({handleChange:()=>{t2.findResponsibleContainer(this).get(o)!==this[r]&&(this[r]=e,n.notify(t))}},"isConnected")}return e}})},createInterface(e,t){let o="function"==typeof e?e:t,n="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||of,r="string"!=typeof e&&!!e&&"respectConnection"in e&&(e.respectConnection||!1),i=function(e,t,o){if(null==e||new.target!==void 0)throw Error(`No registration for interface: '${i.friendlyName}'`);t?t2.defineProperty(e,t,i,r):t2.getOrCreateAnnotationParamTypes(e)[o]=i};return i.$isInterface=!0,i.friendlyName=null==n?"(anonymous)":n,null!=o&&(i.register=function(e,t){return o(new tY(e,null!=t?t:i))}),i.toString=function(){return`InterfaceSymbol<${i.friendlyName}>`},i},inject:(...e)=>function(t,o,n){if("number"==typeof n){let o=t2.getOrCreateAnnotationParamTypes(t),r=e[0];void 0!==r&&(o[n]=r)}else if(o)t2.defineProperty(t,o,e[0]);else{let o;let r=n?t2.getOrCreateAnnotationParamTypes(n.value):t2.getOrCreateAnnotationParamTypes(t);for(let t=0;t<e.length;++t)void 0!==(o=e[t])&&(r[t]=o)}},transient:e=>(e.register=function(t){return oh.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=t6)=>(e.register=function(t){return oh.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),t5=t2.createInterface("Container");function t3(e){return function(t){let o=function(e,t,n){t2.inject(o)(e,t,n)};return o.$isResolver=!0,o.resolve=function(o,n){return e(t,o,n)},o}}t2.inject;let t6={scoped:!1};function t4(e,t,o){t2.inject(t4)(e,t,o)}function t7(e,t){return t.getFactory(e).construct(t)}t3((e,t,o)=>()=>o.get(e)),t3((e,t,o)=>o.has(e,!0)?o.get(e):void 0),t4.$isResolver=!0,t4.resolve=()=>void 0,t3((e,t,o)=>{let n=t7(e,t),r=new t9(e,0,n);return o.registerResolver(e,r),n}),t3((e,t,o)=>t7(e,t));class t9{constructor(e,t,o){this.key=e,this.strategy=t,this.state=o,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{let o=e.getFactory(this.state);if(null===o)throw Error(`Resolver for ${String(this.key)} returned a null factory`);return o.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,o,n;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(n=null===(o=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===o?void 0:o.call(t,e))&&void 0!==n?n:null;default:return null}}}function t8(e){return this.get(e)}function oe(e,t){return t(e)}class ot{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let o;return(o=void 0===t?new this.Type(...this.dependencies.map(t8,e)):new this.Type(...this.dependencies.map(t8,e),...t),null==this.transformers)?o:this.transformers.reduce(oe,o)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}let oo={$isResolver:!0,resolve:(e,t)=>t};function on(e){return"function"==typeof e.register}function or(e){return on(e)&&"boolean"==typeof e.registerInRequestor&&e.registerInRequestor}let oi=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),os="__DI_LOCATE_PARENT__",oa=new Map;class ol{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(t5,oo),e instanceof Node&&e.addEventListener(os,e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())})}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){let t,o,n,r,i;if(100==++this.registerDepth)throw Error("Unable to autoregister dependency");let s=this.context;for(let a=0,l=e.length;a<l;++a)if(om(t=e[a])){if(on(t))t.register(this,s);else if(void 0!==t.prototype)oh.singleton(t,t).register(this);else for(o=Object.keys(t),r=0,i=o.length;r<i;++r)om(n=t[o[r]])&&(on(n)?n.register(this,s):this.register(n))}return--this.registerDepth,this}registerResolver(e,t){ou(e);let o=this.resolvers,n=o.get(e);return null==n?o.set(e,t):n instanceof t9&&4===n.strategy?n.state.push(t):o.set(e,new t9(e,4,[n,t])),t}registerTransformer(e,t){let o=this.getResolver(e);if(null==o)return!1;if(o.getFactory){let e=o.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){let o;if(ou(e),void 0!==e.resolve)return e;let n=this;for(;null!=n;){if(null!=(o=n.resolvers.get(e)))return o;if(null==n.parent){let o=or(e)?this:n;return t?this.jitRegister(e,o):null}n=n.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!!t&&null!=this.parent&&this.parent.has(e,!0)}get(e){let t;if(ou(e),e.$isResolver)return e.resolve(this,this);let o=this;for(;null!=o;){if(null!=(t=o.resolvers.get(e)))return t.resolve(o,this);if(null==o.parent){let n=or(e)?this:o;return(t=this.jitRegister(e,n)).resolve(o,this)}o=o.parent}throw Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){let o;ou(e);let n=this;if(t){let t=ta;for(;null!=n;)null!=(o=n.resolvers.get(e))&&(t=t.concat(op(o,n,this))),n=n.parent;return t}for(;null!=n;){if(null!=(o=n.resolvers.get(e)))return op(o,n,this);if(null==(n=n.parent))break}return ta}getFactory(e){let t=oa.get(e);if(void 0===t){if(og(e))throw Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);oa.set(e,t=new ot(e,t2.getDependencies(e)))}return t}registerFactory(e,t){oa.set(e,t)}createChild(e){return new ol(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(oi.has(e.name))throw Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(on(e)){let o=e.register(t);if(!(o instanceof Object)||null==o.resolve){let o=t.resolvers.get(e);if(void 0!=o)return o;throw Error("A valid resolver was not returned from the static register method")}return o}if(e.$isInterface)throw Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{let o=this.config.defaultResolver(e,t);return t.resolvers.set(e,o),o}}}let oc=new WeakMap;function od(e){return function(t,o,n){if(oc.has(n))return oc.get(n);let r=e(t,o,n);return oc.set(n,r),r}}let oh=Object.freeze({instance:(e,t)=>new t9(e,0,t),singleton:(e,t)=>new t9(e,1,t),transient:(e,t)=>new t9(e,2,t),callback:(e,t)=>new t9(e,3,t),cachedCallback:(e,t)=>new t9(e,3,od(t)),aliasTo:(e,t)=>new t9(t,5,e)});function ou(e){if(null==e)throw Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function op(e,t,o){if(e instanceof t9&&4===e.strategy){let n=e.state,r=n.length,i=Array(r);for(;r--;)i[r]=n[r].resolve(t,o);return i}return[e.resolve(t,o)]}let of="(anonymous)";function om(e){return"object"==typeof e&&null!==e||"function"==typeof e}let og=function(){let e=new WeakMap,t=!1,o="",n=0;return function(r){return void 0===(t=e.get(r))&&(t=(n=(o=r.toString()).length)>=29&&n<=100&&125===o.charCodeAt(n-1)&&32>=o.charCodeAt(n-2)&&93===o.charCodeAt(n-3)&&101===o.charCodeAt(n-4)&&100===o.charCodeAt(n-5)&&111===o.charCodeAt(n-6)&&99===o.charCodeAt(n-7)&&32===o.charCodeAt(n-8)&&101===o.charCodeAt(n-9)&&118===o.charCodeAt(n-10)&&105===o.charCodeAt(n-11)&&116===o.charCodeAt(n-12)&&97===o.charCodeAt(n-13)&&110===o.charCodeAt(n-14)&&88===o.charCodeAt(n-15),e.set(r,t)),t}}(),ob={};function ov(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{let t=ob[e];if(void 0!==t)return t;let o=e.length;if(0===o)return ob[e]=!1;let n=0;for(let t=0;t<o;++t)if(n=e.charCodeAt(t),0===t&&48===n&&o>1||n<48||n>57)return ob[e]=!1;return ob[e]=!0}default:return!1}}function oy(e){return`${e.toLowerCase()}:presentation`}let ow=new Map,oC=Object.freeze({define(e,t,o){let n=oy(e);void 0===ow.get(n)?ow.set(n,t):ow.set(n,!1),o.register(oh.instance(n,t))},forTag(e,t){let o=oy(e),n=ow.get(o);return!1===n?t2.findResponsibleContainer(t).get(o):n||null}});class oS{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?t_.create(t):t instanceof t_?t:t_.create([t])}applyTo(e){let t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class ox extends tZ{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=oC.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return (t={})=>new oR(this===ox?class extends ox{}:this,e,t)}}function o_(e,t,o){return"function"==typeof e?e(t,o):e}tW([ty],ox.prototype,"template",void 0),tW([ty],ox.prototype,"styles",void 0);class oR{constructor(e,t,o){this.type=e,this.elementDefinition=t,this.overrideDefinition=o,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){let o=this.definition,n=this.overrideDefinition,r=o.prefix||t.elementPrefix,i=`${r}-${o.baseName}`;t.tryDefineElement({name:i,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{let t=new oS(o_(o.template,e,o),o_(o.styles,e,o));e.definePresentation(t);let r=o_(o.shadowOptions,e,o);e.shadowRootMode&&(r?n.shadowOptions||(r.mode=e.shadowRootMode):null!==r&&(r={mode:e.shadowRootMode})),e.defineElement({elementOptions:o_(o.elementOptions,e,o),shadowOptions:r,attributes:o_(o.attributes,e,o)})}})}}let oT=new Set(["children","localName","ref","style","className"]),ok=Object.freeze(Object.create(null)),oE="_default",oO=new Map;function oI(e){return e.events||(e.events={})}class oM extends ox{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;let e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}tW([tN({attribute:"fill"})],oM.prototype,"fill",void 0),tW([tN({attribute:"color"})],oM.prototype,"color",void 0),tW([tN({mode:"boolean"})],oM.prototype,"circular",void 0);class oD{constructor(){this.targetIndex=0}}class oA extends oD{constructor(){super(...arguments),this.createPlaceholder=tm.createInterpolationPlaceholder}}class o$ extends oD{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return tm.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function oP(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=tv.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function oN(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function oz(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function oH(){this.bindingObserver.disconnect(),this.source=null,this.context=null;let e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function oL(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function oF(e){tm.setAttribute(this.target,this.targetName,e)}function oW(e){tm.setBooleanAttribute(this.target,this.targetName,e)}function oG(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{let t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function oB(e){this.target[this.targetName]=e}function oU(e){let t=this.classVersions||Object.create(null),o=this.target,n=this.version||0;if(null!=e&&e.length){let r=e.split(/\s+/);for(let e=0,i=r.length;e<i;++e){let i=r[e];""!==i&&(t[i]=n,o.classList.add(i))}}if(this.classVersions=t,this.version=n+1,0!==n)for(let e in n-=1,t)t[e]===n&&o.classList.remove(e)}class oV extends oA{constructor(e){super(),this.binding=e,this.bind=oP,this.unbind=oz,this.updateTarget=oF,this.isBindingVolatile=tv.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=oB,"innerHTML"===this.cleanedTargetName){let e=this.binding;this.binding=(t,o)=>tm.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=oW;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=oN,this.unbind=oL;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=oU)}}targetAtContent(){this.updateTarget=oG,this.unbind=oH}createBehavior(e){return new oj(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class oj{constructor(e,t,o,n,r,i,s){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=n,this.unbind=r,this.updateTarget=i,this.targetName=s}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){tS.setEvent(e);let t=this.binding(this.source,this.context);tS.setEvent(null),!0!==t&&e.preventDefault()}}let oZ=null;class oq{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){oZ=this}static borrow(e){let t=oZ||new oq;return t.directives=e,t.reset(),oZ=null,t}}let oK=tf.length;function oY(e,t){let o=t.split(tp);if(1===o.length)return null;let n=[];for(let t=0,r=o.length;t<r;++t){let r;let i=o[t],s=i.indexOf(tf);if(-1===s)r=i;else{let t=parseInt(i.substring(0,s));n.push(e.directives[t]),r=i.substring(s+oK)}""!==r&&n.push(r)}return n}function oQ(e,t,o=!1){let n=t.attributes;for(let r=0,i=n.length;r<i;++r){let s=n[r],a=s.value,l=oY(e,a),c=null;null===l?o&&((c=new oV(()=>a)).targetName=s.name):c=function(e){let t;if(1===e.length)return e[0];let o=e.length,n=e.map(e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding)),r=new oV((e,t)=>{let r="";for(let i=0;i<o;++i)r+=n[i](e,t);return r});return r.targetName=t,r}(l),null!==c&&(t.removeAttributeNode(s),r--,i--,e.addFactory(c))}}let oX=document.createRange();class oJ{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{let t;let o=this.lastChild;if(e.previousSibling===o)return;let n=e.parentNode,r=this.firstChild;for(;r!==o;)t=r.nextSibling,n.insertBefore(r,e),r=t;n.insertBefore(o,e)}}remove(){let e;let t=this.fragment,o=this.lastChild,n=this.firstChild;for(;n!==o;)e=n.nextSibling,t.appendChild(n),n=e;t.appendChild(o)}dispose(){let e;let t=this.firstChild.parentNode,o=this.lastChild,n=this.firstChild;for(;n!==o;)e=n.nextSibling,t.removeChild(n),n=e;t.removeChild(o);let r=this.behaviors,i=this.source;for(let e=0,t=r.length;e<t;++e)r[e].unbind(i)}bind(e,t){let o=this.behaviors;if(this.source!==e){if(null!==this.source){let n=this.source;this.source=e,this.context=t;for(let r=0,i=o.length;r<i;++r){let i=o[r];i.unbind(n),i.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,r=o.length;n<r;++n)o[n].bind(e,t)}}}unbind(){if(null===this.source)return;let e=this.behaviors,t=this.source;for(let o=0,n=e.length;o<n;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){oX.setStartBefore(e[0].firstChild),oX.setEndAfter(e[e.length-1].lastChild),oX.deleteContents();for(let t=0,o=e.length;t<o;++t){let o=e[t],n=o.behaviors,r=o.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(r)}}}}class o0{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;let t=this.html;if("string"==typeof t){(e=document.createElement("template")).innerHTML=tm.createHTML(t);let o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;let o=function(e,t){let o;let n=e.content;document.adoptNode(n);let r=oq.borrow(t);oQ(r,e,!0);let i=r.behaviorFactories;r.reset();let s=tm.createTemplateWalker(n);for(;o=s.nextNode();)switch(r.targetIndex++,o.nodeType){case 1:oQ(r,o);break;case 3:!function(e,t,o){let n=oY(e,t.textContent);if(null!==n){let r=t;for(let i=0,s=n.length;i<s;++i){let s=n[i],a=0===i?t:r.parentNode.insertBefore(document.createTextNode(""),r.nextSibling);"string"==typeof s?a.textContent=s:(a.textContent=" ",e.captureContentBinding(s)),r=a,e.targetIndex++,a!==t&&o.nextNode()}e.targetIndex--}}(r,o,s);break;case 8:tm.isMarker(o)&&r.addFactory(t[tm.extractDirectiveIndexFromMarker(o)])}let a=0;(tm.isMarker(n.firstChild)||1===n.childNodes.length&&t.length)&&(n.insertBefore(document.createComment(""),n.firstChild),a=-1);let l=r.behaviorFactories;return r.release(),{fragment:n,viewBehaviorFactories:l,hostBehaviorFactories:i,targetOffset:a}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}let t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,n=Array(this.behaviorCount),r=tm.createTemplateWalker(t),i=0,s=this.targetOffset,a=r.nextNode();for(let e=o.length;i<e;++i){let e=o[i],t=e.targetIndex;for(;null!==a;){if(s===t){n[i]=e.createBehavior(a);break}a=r.nextNode(),s++}}if(this.hasHostBehaviors){let t=this.hostBehaviorFactories;for(let o=0,r=t.length;o<r;++o,++i)n[i]=t[o].createBehavior(e)}return new oJ(t,n)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);let n=this.create(o);return n.bind(e,tx),n.appendTo(t),n}}let o1=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function o2(e,...t){let o=[],n="";for(let r=0,i=e.length-1;r<i;++r){let i=e[r],s=t[r];if(n+=i,s instanceof o0){let e=s;s=()=>e}if("function"==typeof s&&(s=new oV(s)),s instanceof oA){let e=o1.exec(i);null!==e&&(s.targetName=e[2])}s instanceof oD?(n+=s.createPlaceholder(o.length),o.push(s)):n+=s}return new o0(n+=e[e.length-1],o)}let o5=(e,t)=>o2`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;class o3{createCSS(){return""}createBehavior(){}}function o6(e,...t){let{styles:o,behaviors:n}=function(e,t){let o=[],n="",r=[];for(let i=0,s=e.length-1;i<s;++i){n+=e[i];let s=t[i];if(s instanceof o3){let e=s.createBehavior();s=s.createCSS(),e&&r.push(e)}s instanceof t_||s instanceof CSSStyleSheet?(""!==n.trim()&&(o.push(n),n=""),o.push(s)):n+=s}return""!==(n+=e[e.length-1]).trim()&&o.push(n),{styles:o,behaviors:r}}(e,t),r=t_.create(o);return n.length&&r.withBehaviors(...n),r}function o4(e){return`:host([hidden]){display:none}:host{display:${e}}`}function o7(e){let t=e.parentElement;if(t)return t;{let t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}let o9=document.createElement("div");class o8{setProperty(e,t){tm.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){tm.queueUpdate(()=>this.target.removeProperty(e))}}class ne extends o8{constructor(){super();let e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class nt extends o8{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);let{sheet:e}=this.style;if(e){let t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class no{constructor(e){this.store=new Map,this.target=null;let t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),tv.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(let[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),tm.queueUpdate(()=>{null!==this.target&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),tm.queueUpdate(()=>{null!==this.target&&this.target.removeProperty(e)})}handleChange(e,t){let{sheet:o}=this.style;if(o){let e=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[e].style}else this.target=null}}tW([ty],no.prototype,"target",void 0);class nn{constructor(e){this.target=e.style}setProperty(e,t){tm.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){tm.queueUpdate(()=>this.target.removeProperty(e))}}class nr{setProperty(e,t){for(let o of(nr.properties[e]=t,nr.roots.values()))na.getOrCreate(nr.normalizeRoot(o)).setProperty(e,t)}removeProperty(e){for(let t of(delete nr.properties[e],nr.roots.values()))na.getOrCreate(nr.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){let{roots:t}=nr;if(!t.has(e)){t.add(e);let o=na.getOrCreate(this.normalizeRoot(e));for(let e in nr.properties)o.setProperty(e,nr.properties[e])}}static unregisterRoot(e){let{roots:t}=nr;if(t.has(e)){t.delete(e);let o=na.getOrCreate(nr.normalizeRoot(e));for(let e in nr.properties)o.removeProperty(e)}}static normalizeRoot(e){return e===o9?document:e}}nr.roots=new Set,nr.properties={};let ni=new WeakMap,ns=tm.supportsAdoptedStyleSheets?class extends o8{constructor(e){super();let t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(t_.create([t]))}}:no,na=Object.freeze({getOrCreate(e){let t;return ni.has(e)?ni.get(e):(t=e===o9?new nr:e instanceof Document?tm.supportsAdoptedStyleSheets?new ne:new nt:e instanceof tZ?new ns(e):new nn(e),ni.set(e,t),t)}});class nl extends o3{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=nl.uniqueId(),nl.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new nl({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return nl.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){let t=np.getOrCreate(e).get(this);if(void 0!==t)return t;throw Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof nl&&(t=this.alias(t)),np.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),np.existsFor(e)&&np.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(o9,e),this}subscribe(e,t){let o=this.getOrCreateSubscriberSet(t);t&&!np.existsFor(t)&&np.getOrCreate(t),o.has(e)||o.add(e)}unsubscribe(e,t){let o=this.subscribers.get(t||this);o&&o.has(e)&&o.delete(e)}notify(e){let t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(e=>e.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(e=>e.handleChange(t))}alias(e){return t=>e.getValueFor(t)}}nl.uniqueId=(i=0,()=>(i++,i.toString(16))),nl.tokensById=new Map;class nc{constructor(e,t,o){this.source=e,this.token=t,this.node=o,this.dependencies=new Set,this.observer=tv.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,tx))}}class nd{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),tv.getNotifier(this).notify(e.id))}get(e){return tv.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}let nh=new WeakMap,nu=new WeakMap;class np{constructor(e){this.target=e,this.store=new nd,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{let o=nl.getTokenById(t);if(o&&(o.notify(this.target),nl.isCSSDesignToken(o))){let t=this.parent,n=this.isReflecting(o);if(t){let r=t.get(o),i=e.get(o);r===i||n?r===i&&n&&this.stopReflectToCSS(o):this.reflectToCSS(o)}else n||this.reflectToCSS(o)}}},nh.set(e,this),tv.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof tZ?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return nh.get(e)||new np(e)}static existsFor(e){return nh.has(e)}static findParent(e){if(o9!==e.target){let t=o7(e.target);for(;null!==t;){if(nh.has(t))return nh.get(t);t=o7(t)}return np.getOrCreate(o9)}return null}static findClosestAssignedNode(e,t){let o=t;do{if(o.has(e))return o;o=o.parent?o.parent:o.target!==o9?np.getOrCreate(o9):null}while(null!==o)return null}get parent(){return nu.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){let t=this.store.get(e);if(void 0!==t)return t;let o=this.getRaw(e);if(void 0!==o)return this.hydrate(e,o),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=np.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){nl.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),nl.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);let t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){let e=np.findParent(this);for(let t of(e&&e.appendChild(this),this.assignedValues.keys()))t.notify(this.target)}unbind(){this.parent&&nu.get(this).removeChild(this)}appendChild(e){e.parent&&nu.get(e).removeChild(e);let t=this.children.filter(t=>e.contains(t));for(let[o,n]of(nu.set(e,this),this.children.push(e),t.forEach(t=>e.appendChild(t)),tv.getNotifier(this.store).subscribe(e),this.store.all()))e.hydrate(o,this.bindingObservers.has(o)?this.getRaw(o):n)}removeChild(e){let t=this.children.indexOf(e);return -1!==t&&this.children.splice(t,1),tv.getNotifier(this.store).unsubscribe(e),e.parent===this&&nu.delete(e)}contains(e){return function(e,t){let o=t;for(;null!==o;){if(o===e)return!0;o=o7(o)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),np.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),np.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){let o=nl.getTokenById(t);o&&this.hydrate(o,this.getRaw(o))}hydrate(e,t){if(!this.has(e)){let o=this.bindingObservers.get(e);nl.isDerivedDesignTokenValue(t)?o?o.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(o&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){let o=new nc(t,e,this);return this.bindingObservers.set(e,o),o}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}np.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){let{token:t,target:o}=e;this.add(t,o)}add(e,t){na.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(np.getOrCreate(t).get(e)))}remove(e,t){na.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},tW([ty],np.prototype,"children",void 0);let nf=Object.freeze({create:function(e){return nl.from(e)},notifyConnection:e=>!!(e.isConnected&&np.existsFor(e))&&(np.getOrCreate(e).bind(),!0),notifyDisconnection:e=>!e.isConnected&&!!np.existsFor(e)&&(np.getOrCreate(e).unbind(),!0),registerRoot(e=o9){nr.registerRoot(e)},unregisterRoot(e=o9){nr.unregisterRoot(e)}});function nm(e){let t=getComputedStyle(document.body),o=document.querySelector("body");if(o){let n=o.getAttribute("data-vscode-theme-kind");for(let[r,i]of e){let e=t.getPropertyValue(r).toString();if("vscode-high-contrast"===n)0===e.length&&i.name.includes("background")&&(e="transparent"),"button-icon-hover-background"===i.name&&(e="transparent");else if("vscode-high-contrast-light"===n){if(0===e.length&&i.name.includes("background"))switch(i.name){case"button-primary-hover-background":e="#0F4A85";break;case"button-secondary-hover-background":case"button-icon-hover-background":e="transparent"}}else"contrast-active-border"===i.name&&(e="transparent");i.setValueFor(o,e)}}}let ng=new Map,nb=!1;function nv(e,t){let o=nf.create(e);if(t){if(t.includes("--fake-vscode-token")){let e="id"+Math.random().toString(16).slice(2);t=`${t}-${e}`}ng.set(t,o)}return!nb&&(window.addEventListener("load",()=>{new MutationObserver(()=>{nm(ng)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),nm(ng)}),nb=!0),o}let ny=nv("background","--vscode-editor-background").withDefault("#1e1e1e"),nw=nv("border-width").withDefault(1),nC=nv("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518");nv("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df");let nS=nv("corner-radius").withDefault(0),nx=nv("design-unit").withDefault(4),n_=nv("disabled-opacity").withDefault(.4),nR=nv("focus-border","--vscode-focusBorder").withDefault("#007fd4"),nT=nv("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol");nv("font-weight","--vscode-font-weight").withDefault("400");let nk=nv("foreground","--vscode-foreground").withDefault("#cccccc"),nE=nv("input-height").withDefault("26"),nO=nv("input-min-width").withDefault("100px"),nI=nv("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),nM=nv("type-ramp-base-line-height").withDefault("normal"),nD=nv("type-ramp-minus1-font-size").withDefault("11px"),nA=nv("type-ramp-minus1-line-height").withDefault("16px");nv("type-ramp-minus2-font-size").withDefault("9px"),nv("type-ramp-minus2-line-height").withDefault("16px"),nv("type-ramp-plus1-font-size").withDefault("16px"),nv("type-ramp-plus1-line-height").withDefault("24px");let n$=nv("scrollbarWidth").withDefault("10px"),nP=nv("scrollbarHeight").withDefault("10px"),nN=nv("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),nz=nv("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),nH=nv("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),nL=nv("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),nF=nv("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),nW=nv("button-border","--vscode-button-border").withDefault("transparent"),nG=nv("button-icon-background").withDefault("transparent"),nB=nv("button-icon-corner-radius").withDefault("5px"),nU=nv("button-icon-outline-offset").withDefault(0),nV=nv("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),nj=nv("button-icon-padding").withDefault("3px"),nZ=nv("button-primary-background","--vscode-button-background").withDefault("#0e639c"),nq=nv("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),nK=nv("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),nY=nv("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),nQ=nv("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),nX=nv("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),nJ=nv("button-padding-horizontal").withDefault("11px"),n0=nv("button-padding-vertical").withDefault("4px"),n1=nv("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),n2=nv("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),n5=nv("checkbox-corner-radius").withDefault(3);nv("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0");let n3=nv("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),n6=nv("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),n4=nv("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),n7=nv("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),n9=nv("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),n8=nv("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c");nv("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0");let re=nv("dropdown-list-max-height").withDefault("200px"),rt=nv("input-background","--vscode-input-background").withDefault("#3c3c3c"),ro=nv("input-foreground","--vscode-input-foreground").withDefault("#cccccc");nv("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc");let rn=nv("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),rr=nv("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),ri=nv("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),rs=nv("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),ra=nv("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),rl=nv("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799");nv("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),nv("panel-view-border","--vscode-panel-border").withDefault("#80808059");let rc=nv("tag-corner-radius").withDefault("2px"),rd=(class extends oM{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}).compose({baseName:"badge",template:o5,styles:(e,t)=>o6`
	${o4("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${nT};
		font-size: ${nD};
		line-height: ${nA};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${nL};
		border: calc(${nw} * 1px) solid ${nW};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${nF};
		display: flex;
		height: calc(${nx} * 4px);
		justify-content: center;
		min-width: calc(${nx} * 4px + 2px);
		min-height: calc(${nx} * 4px + 2px);
		padding: 3px 6px;
	}
`});class rh{}tW([tN({attribute:"aria-atomic"})],rh.prototype,"ariaAtomic",void 0),tW([tN({attribute:"aria-busy"})],rh.prototype,"ariaBusy",void 0),tW([tN({attribute:"aria-controls"})],rh.prototype,"ariaControls",void 0),tW([tN({attribute:"aria-current"})],rh.prototype,"ariaCurrent",void 0),tW([tN({attribute:"aria-describedby"})],rh.prototype,"ariaDescribedby",void 0),tW([tN({attribute:"aria-details"})],rh.prototype,"ariaDetails",void 0),tW([tN({attribute:"aria-disabled"})],rh.prototype,"ariaDisabled",void 0),tW([tN({attribute:"aria-errormessage"})],rh.prototype,"ariaErrormessage",void 0),tW([tN({attribute:"aria-flowto"})],rh.prototype,"ariaFlowto",void 0),tW([tN({attribute:"aria-haspopup"})],rh.prototype,"ariaHaspopup",void 0),tW([tN({attribute:"aria-hidden"})],rh.prototype,"ariaHidden",void 0),tW([tN({attribute:"aria-invalid"})],rh.prototype,"ariaInvalid",void 0),tW([tN({attribute:"aria-keyshortcuts"})],rh.prototype,"ariaKeyshortcuts",void 0),tW([tN({attribute:"aria-label"})],rh.prototype,"ariaLabel",void 0),tW([tN({attribute:"aria-labelledby"})],rh.prototype,"ariaLabelledby",void 0),tW([tN({attribute:"aria-live"})],rh.prototype,"ariaLive",void 0),tW([tN({attribute:"aria-owns"})],rh.prototype,"ariaOwns",void 0),tW([tN({attribute:"aria-relevant"})],rh.prototype,"ariaRelevant",void 0),tW([tN({attribute:"aria-roledescription"})],rh.prototype,"ariaRoledescription",void 0);class ru{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function rp(e){return new o$("fast-ref",ru,e)}class rf{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}let rm=(e,t)=>o2`
    <span
        part="end"
        ${rp("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${rp("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,rg=(e,t)=>o2`
    <span
        part="start"
        ${rp("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${rp("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;function rb(e,...t){let o=tD.locate(e);t.forEach(t=>{Object.getOwnPropertyNames(t.prototype).forEach(o=>{"constructor"!==o&&Object.defineProperty(e.prototype,o,Object.getOwnPropertyDescriptor(t.prototype,o))}),tD.locate(t).forEach(e=>o.push(e))})}o2`
    <span part="end" ${rp("endContainer")}>
        <slot
            name="end"
            ${rp("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,o2`
    <span part="start" ${rp("startContainer")}>
        <slot
            name="start"
            ${rp("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`,(g=x||(x={}))[g.alt=18]="alt",g[g.arrowDown=40]="arrowDown",g[g.arrowLeft=37]="arrowLeft",g[g.arrowRight=39]="arrowRight",g[g.arrowUp=38]="arrowUp",g[g.back=8]="back",g[g.backSlash=220]="backSlash",g[g.break=19]="break",g[g.capsLock=20]="capsLock",g[g.closeBracket=221]="closeBracket",g[g.colon=186]="colon",g[g.colon2=59]="colon2",g[g.comma=188]="comma",g[g.ctrl=17]="ctrl",g[g.delete=46]="delete",g[g.end=35]="end",g[g.enter=13]="enter",g[g.equals=187]="equals",g[g.equals2=61]="equals2",g[g.equals3=107]="equals3",g[g.escape=27]="escape",g[g.forwardSlash=191]="forwardSlash",g[g.function1=112]="function1",g[g.function10=121]="function10",g[g.function11=122]="function11",g[g.function12=123]="function12",g[g.function2=113]="function2",g[g.function3=114]="function3",g[g.function4=115]="function4",g[g.function5=116]="function5",g[g.function6=117]="function6",g[g.function7=118]="function7",g[g.function8=119]="function8",g[g.function9=120]="function9",g[g.home=36]="home",g[g.insert=45]="insert",g[g.menu=93]="menu",g[g.minus=189]="minus",g[g.minus2=109]="minus2",g[g.numLock=144]="numLock",g[g.numPad0=96]="numPad0",g[g.numPad1=97]="numPad1",g[g.numPad2=98]="numPad2",g[g.numPad3=99]="numPad3",g[g.numPad4=100]="numPad4",g[g.numPad5=101]="numPad5",g[g.numPad6=102]="numPad6",g[g.numPad7=103]="numPad7",g[g.numPad8=104]="numPad8",g[g.numPad9=105]="numPad9",g[g.numPadDivide=111]="numPadDivide",g[g.numPadDot=110]="numPadDot",g[g.numPadMinus=109]="numPadMinus",g[g.numPadMultiply=106]="numPadMultiply",g[g.numPadPlus=107]="numPadPlus",g[g.openBracket=219]="openBracket",g[g.pageDown=34]="pageDown",g[g.pageUp=33]="pageUp",g[g.period=190]="period",g[g.print=44]="print",g[g.quote=222]="quote",g[g.scrollLock=145]="scrollLock",g[g.shift=16]="shift",g[g.space=32]="space",g[g.tab=9]="tab",g[g.tilde=192]="tilde",g[g.windowsLeft=91]="windowsLeft",g[g.windowsOpera=219]="windowsOpera",g[g.windowsRight=92]="windowsRight";let rv="ArrowDown",ry="ArrowLeft",rw="ArrowRight",rC="ArrowUp",rS="Enter",rx="Escape",r_="Home",rR={ArrowDown:rv,ArrowLeft:ry,ArrowRight:rw,ArrowUp:rC},rT="form-associated-proxy",rk="ElementInternals",rE=rk in window&&"setFormValue"in window[rk].prototype,rO=new WeakMap;function rI(e){let t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return rE}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(!(this.proxy instanceof HTMLElement)||!this.proxy.ownerDocument||!this.id)return ta;{let e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`));return Object.freeze(e?t.concat(Array.from(e)):t)}}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),tm.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),tm.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!rE)return null;let e=rO.get(this);return e||(e=this.attachInternals(),rO.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),!this.elementInternals&&(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(e=>this.proxy.removeEventListener(e,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,o){this.elementInternals?this.elementInternals.setValidity(e,t,o):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(e=>this.proxy.addEventListener(e,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",rT),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",rT)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===rS&&this.form instanceof HTMLFormElement){let e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return tN({mode:"boolean"})(t.prototype,"disabled"),tN({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),tN({attribute:"current-value"})(t.prototype,"currentValue"),tN(t.prototype,"name"),tN({mode:"boolean"})(t.prototype,"required"),ty(t.prototype,"value"),t}function rM(e){class t extends rI(e){}class o extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){let e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return tN({attribute:"checked",mode:"boolean"})(o.prototype,"checkedAttribute"),tN({attribute:"current-checked",converter:tA})(o.prototype,"currentChecked"),ty(o.prototype,"defaultChecked"),ty(o.prototype,"checked"),o}class rD extends ox{}class rA extends rI(rD){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class r$ extends rA{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;let e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();let t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach(e=>{e.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();let t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach(e=>{e.removeEventListener("click",this.handleClick)})}}tW([tN({mode:"boolean"})],r$.prototype,"autofocus",void 0),tW([tN({attribute:"form"})],r$.prototype,"formId",void 0),tW([tN],r$.prototype,"formaction",void 0),tW([tN],r$.prototype,"formenctype",void 0),tW([tN],r$.prototype,"formmethod",void 0),tW([tN({mode:"boolean"})],r$.prototype,"formnovalidate",void 0),tW([tN],r$.prototype,"formtarget",void 0),tW([tN],r$.prototype,"type",void 0),tW([ty],r$.prototype,"defaultSlottedContent",void 0);class rP{}function rN(e){return e?function(t,o,n){return 1===t.nodeType&&t.matches(e)}:function(e,t,o){return 1===e.nodeType}}tW([tN({attribute:"aria-expanded"})],rP.prototype,"ariaExpanded",void 0),tW([tN({attribute:"aria-pressed"})],rP.prototype,"ariaPressed",void 0),rb(rP,rh),rb(r$,rf,rP);class rz{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){let t=this.options.property;this.shouldUpdate=tv.getAccessors(e).some(e=>e.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(ta),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class rH extends rz{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function rL(e){return"string"==typeof e&&(e={property:e}),new o$("fast-slotted",rH,e)}let rF=!function(){if("boolean"==typeof e)return e;if(!("undefined"!=typeof window&&window.document&&window.document.createElement))return e=!1;let t=document.createElement("style"),o=function(){let e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==o&&t.setAttribute("nonce",o),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),e=!0}catch(t){e=!1}finally{document.head.removeChild(t)}return e}()?"focus":"focus-visible",rW="not-allowed",rG=o6`
	${o4("inline-flex")} :host {
		outline: none;
		font-family: ${nT};
		font-size: ${nI};
		line-height: ${nM};
		color: ${nq};
		background: ${nZ};
		border-radius: 2px;
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${n0} ${nJ};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${nw} * 1px) solid ${nW};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${nK};
	}
	:host(:active) {
		background: ${nZ};
	}
	.control:${rF} {
		outline: calc(${nw} * 1px) solid ${nR};
		outline-offset: calc(${nw} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${n_};
		background: ${nZ};
		cursor: ${rW};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${nx} * 4px);
		height: calc(${nx} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,rB=o6`
	:host([appearance='primary']) {
		background: ${nZ};
		color: ${nq};
	}
	:host([appearance='primary']:hover) {
		background: ${nK};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${nZ};
	}
	:host([appearance='primary']) .control:${rF} {
		outline: calc(${nw} * 1px) solid ${nR};
		outline-offset: calc(${nw} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${nZ};
	}
`,rU=o6`
	:host([appearance='secondary']) {
		background: ${nY};
		color: ${nQ};
	}
	:host([appearance='secondary']:hover) {
		background: ${nX};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${nY};
	}
	:host([appearance='secondary']) .control:${rF} {
		outline: calc(${nw} * 1px) solid ${nR};
		outline-offset: calc(${nw} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${nY};
	}
`,rV=o6`
	:host([appearance='icon']) {
		background: ${nG};
		border-radius: ${nB};
		color: ${nk};
	}
	:host([appearance='icon']:hover) {
		background: ${nV};
		outline: 1px dotted ${nC};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${nj};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${nV};
	}
	:host([appearance='icon']) .control:${rF} {
		outline: calc(${nw} * 1px) solid ${nR};
		outline-offset: ${nU};
	}
	:host([appearance='icon'][disabled]) {
		background: ${nG};
	}
`;class rj extends r${connectedCallback(){if(super.connectedCallback(),!this.appearance){let e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,o){"appearance"!==e||"icon"!==o||this.getAttribute("aria-label")||(this.ariaLabel="Icon Button"),"aria-label"===e&&(this.ariaLabel=o),"disabled"===e&&(this.disabled=null!==o)}}tW([tN],rj.prototype,"appearance",void 0);let rZ=rj.compose({baseName:"button",template:(e,t)=>o2`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${rp("control")}
    >
        ${rg(e,t)}
        <span class="content" part="content">
            <slot ${rL("defaultSlottedContent")}></slot>
        </span>
        ${rm(e,t)}
    </button>
`,styles:(e,t)=>o6`
	${rG}
	${rB}
	${rU}
	${rV}
`,shadowOptions:{delegatesFocus:!0}});class rq extends ox{}class rK extends rM(rq){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class rY extends rK{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{this.readOnly||" "!==e.key||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}tW([tN({attribute:"readonly",mode:"boolean"})],rY.prototype,"readOnly",void 0),tW([ty],rY.prototype,"defaultSlottedNodes",void 0),tW([ty],rY.prototype,"indeterminate",void 0);let rQ=(class extends rY{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}).compose({baseName:"checkbox",template:(e,t)=>o2`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${rL("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>o6`
	${o4("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${nx} * 1px) 0;
		user-select: none;
		font-size: ${nI};
		line-height: ${nM};
	}
	.control {
		position: relative;
		width: calc(${nx} * 4px + 2px);
		height: calc(${nx} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${n5} * 1px);
		border: calc(${nw} * 1px) solid ${n2};
		background: ${n1};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${nT};
		color: ${nk};
		padding-inline-start: calc(${nx} * 2px + 2px);
		margin-inline-end: calc(${nx} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${nk};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${nk};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${n1};
		border-color: ${n2};
	}
	:host(:enabled) .control:active {
		background: ${n1};
		border-color: ${nR};
	}
	:host(:${rF}) .control {
		border: calc(${nw} * 1px) solid ${nR};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${rW};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${n_};
	}
`,checkedIndicator:`
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,indeterminateIndicator:`
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`});function rX(e,t,o){return{index:e,removed:t,addedCount:o}}function rJ(e,t,o,n,r,i){let s,a=0,l=0,c=Math.min(o-t,i-r);if(0===t&&0===r&&(a=function(e,t,o){for(let n=0;n<o;++n)if(e[n]!==t[n])return n;return o}(e,n,c)),o===e.length&&i===n.length&&(l=function(e,t,o){let n=e.length,r=t.length,i=0;for(;i<o&&e[--n]===t[--r];)i++;return i}(e,n,c-a)),t+=a,r+=a,o-=l,i-=l,o-t==0&&i-r==0)return ta;if(t===o){let e=rX(t,[],0);for(;r<i;)e.removed.push(n[r++]);return[e]}if(r===i)return[rX(t,[],o-t)];let d=function(e){let t=e.length-1,o=e[0].length-1,n=e[t][o],r=[];for(;t>0||o>0;){let i;if(0===t){r.push(2),o--;continue}if(0===o){r.push(3),t--;continue}let s=e[t-1][o-1],a=e[t-1][o],l=e[t][o-1];(i=a<l?a<s?a:s:l<s?l:s)===s?(s===n?r.push(0):(r.push(1),n=s),t--,o--):i===a?(r.push(3),t--,n=a):(r.push(2),o--,n=l)}return r.reverse(),r}(function(e,t,o,n,r,i){let s,a;let l=i-r+1,c=o-t+1,d=Array(l);for(let e=0;e<l;++e)d[e]=Array(c),d[e][0]=e;for(let e=0;e<c;++e)d[0][e]=e;for(let o=1;o<l;++o)for(let i=1;i<c;++i)e[t+i-1]===n[r+o-1]?d[o][i]=d[o-1][i-1]:(s=d[o-1][i]+1,a=d[o][i-1]+1,d[o][i]=s<a?s:a);return d}(e,t,o,n,r,i)),h=[],u=t,p=r;for(let e=0;e<d.length;++e)switch(d[e]){case 0:void 0!==s&&(h.push(s),s=void 0),u++,p++;break;case 1:void 0===s&&(s=rX(u,[],0)),s.addedCount++,u++,s.removed.push(n[p]),p++;break;case 2:void 0===s&&(s=rX(u,[],0)),s.addedCount++,u++;break;case 3:void 0===s&&(s=rX(u,[],0)),s.removed.push(n[p]),p++}return void 0!==s&&h.push(s),h}let r0=Array.prototype.push,r1=!1;function r2(e,t){let o=e.index,n=t.length;return o>n?o=n-e.addedCount:o<0&&(o=n+e.removed.length+o-e.addedCount),o<0&&(o=0),e.index=o,e}class r5 extends tg{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,tm.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,tm.queueUpdate(this))}flush(){let e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;let o=void 0===t?function(e,t){let o=[],n=function(e){let t=[];for(let o=0,n=e.length;o<n;o++){let n=e[o];!function(e,t,o,n){let r=rX(t,o,n),i=!1,s=0;for(let t=0;t<e.length;t++){var a,l,c,d;let o=e[t];if(o.index+=s,i)continue;let n=(a=r.index,l=r.index+r.removed.length,c=o.index,d=o.index+o.addedCount,l<c||d<a?-1:l===c||d===a?0:a<c?l<d?l-c:d-c:d<l?d-a:l-a);if(n>=0){e.splice(t,1),t--,s-=o.addedCount-o.removed.length,r.addedCount+=o.addedCount-n;let a=r.removed.length+o.removed.length-n;if(r.addedCount||a){let e=o.removed;if(r.index<o.index){let t=r.removed.slice(0,o.index-r.index);r0.apply(t,e),e=t}if(r.index+r.removed.length>o.index+o.addedCount){let t=r.removed.slice(o.index+o.addedCount-r.index);r0.apply(e,t)}r.removed=e,o.index<r.index&&(r.index=o.index)}else i=!0}else if(r.index<o.index){i=!0,e.splice(t,0,r),t++;let n=r.addedCount-r.removed.length;o.index+=n,s+=n}}i||e.push(r)}(t,n.index,n.removed,n.addedCount)}return t}(t);for(let t=0,r=n.length;t<r;++t){let r=n[t];if(1===r.addedCount&&1===r.removed.length){r.removed[0]!==e[r.index]&&o.push(r);continue}o=o.concat(rJ(e,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return o}(this.source,e):rJ(this.source,0,this.source.length,t,0,t.length);this.notify(o)}}function r3(e,t,o,n){e.bind(t[o],n)}function r6(e,t,o,n){let r=Object.create(n);r.index=o,r.length=t.length,e.bind(t[o],r)}Object.freeze({positioning:!1,recycle:!0});class r4{constructor(e,t,o,n,r,i){this.location=e,this.itemsBinding=t,this.templateBinding=n,this.options=i,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=r3,this.itemsBindingObserver=tv.binding(t,this,o),this.templateBindingObserver=tv.binding(n,this,r),i.positioning&&(this.bindView=r6)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items){this.items=ta;return}let t=this.itemsObserver,o=this.itemsObserver=tv.getNotifier(this.items),n=t!==o;n&&null!==t&&t.unsubscribe(this),(n||e)&&o.subscribe(this)}updateViews(e){let t=this.childContext,o=this.views,n=this.bindView,r=this.items,i=this.template,s=this.options.recycle,a=[],l=0,c=0;for(let d=0,h=e.length;d<h;++d){let h=e[d],u=h.removed,p=0,f=h.index,m=f+h.addedCount,g=o.splice(h.index,u.length),b=c=a.length+g.length;for(;f<m;++f){let e;let d=o[f],h=d?d.firstChild:this.location;s&&c>0?(p<=b&&g.length>0?(e=g[p],p++):(e=a[l],l++),c--):e=i.create(),o.splice(f,0,e),n(e,r,f,t),e.insertBefore(h)}g[p]&&a.push(...g.slice(p))}for(let e=l,t=a.length;e<t;++e)a[e].dispose();if(this.options.positioning)for(let e=0,t=o.length;e<t;++e){let n=o[e].context;n.length=t,n.index=e}}refreshAllViews(e=!1){let t=this.items,o=this.childContext,n=this.template,r=this.location,i=this.bindView,s=t.length,a=this.views,l=a.length;if((0===s||e||!this.options.recycle)&&(oJ.disposeContiguousBatch(a),l=0),0===l){this.views=a=Array(s);for(let e=0;e<s;++e){let s=n.create();i(s,t,e,o),a[e]=s,s.insertBefore(r)}}else{let e=0;for(;e<s;++e)if(e<l)i(a[e],t,e,o);else{let s=n.create();i(s,t,e,o),a.push(s),s.insertBefore(r)}let c=a.splice(e,l-e);for(e=0,s=c.length;e<s;++e)c[e].dispose()}}unbindAllViews(){let e=this.views;for(let t=0,o=e.length;t<o;++t)e[t].unbind()}}class r7 extends oD{constructor(e,t,o){super(),this.itemsBinding=e,this.templateBinding=t,this.options=o,this.createPlaceholder=tm.createBlockPlaceholder,function(){if(r1)return;r1=!0,tv.setArrayObserverFactory(e=>new r5(e));let e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});let t=e.pop,o=e.push,n=e.reverse,r=e.shift,i=e.sort,s=e.splice,a=e.unshift;e.pop=function(){let e=this.length>0,o=t.apply(this,arguments),n=this.$fastController;return void 0!==n&&e&&n.addSplice(rX(this.length,[o],0)),o},e.push=function(){let e=o.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(r2(rX(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;let t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());let o=n.apply(this,arguments);return void 0!==t&&t.reset(e),o},e.shift=function(){let e=this.length>0,t=r.apply(this,arguments),o=this.$fastController;return void 0!==o&&e&&o.addSplice(rX(0,[t],0)),t},e.sort=function(){let e;let t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());let o=i.apply(this,arguments);return void 0!==t&&t.reset(e),o},e.splice=function(){let e=s.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(r2(rX(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){let e=a.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(r2(rX(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=tv.isVolatileBinding(e),this.isTemplateBindingVolatile=tv.isVolatileBinding(t)}createBehavior(e){return new r4(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}let r9="focus",r8="focusin",ie="focusout",it="keydown",io={none:"none",default:"default",sticky:"sticky"},ir={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},ii={default:"default",header:"header",stickyHeader:"sticky-header"};class is extends ox{constructor(){super(),this.noTabbing=!1,this.generateHeader=io.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,o)=>{if(0===this.rowElements.length){this.focusRowIndex=0,this.focusColumnIndex=0;return}let n=Math.max(0,Math.min(this.rowElements.length-1,e)),r=this.rowElements[n].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),i=Math.max(0,Math.min(r.length-1,t)),s=r[i];o&&this.scrollHeight!==this.clientHeight&&(n<this.focusRowIndex&&this.scrollTop>0||n>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&s.scrollIntoView({block:"center",inline:"center"}),s.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach(e=>{e.addedNodes.forEach(e=>{1===e.nodeType&&"row"===e.getAttribute("role")&&(e.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,tm.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(void 0===e){if(""===this.generatedGridTemplateColumns&&this.rowElements.length>0){let e=this.rowElements[0];this.generatedGridTemplateColumns=Array(e.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach((t,o)=>{t.rowIndex=o,t.gridTemplateColumns=e,this.columnDefinitionsStale&&(t.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach(e=>{t=`${t}${""===t?"":" "}1fr`}),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=is.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(null===this.columnDefinitions){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=is.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new r7(e=>e.rowsData,e=>e.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(r9,this.handleFocus),this.addEventListener(it,this.handleKeydown),this.addEventListener(ie,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),tm.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(r9,this.handleFocus),this.removeEventListener(it,this.handleKeydown),this.removeEventListener(ie,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;let t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){null!==e.relatedTarget&&this.contains(e.relatedTarget)||this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){let t;if(e.defaultPrevented)return;let o=this.rowElements.length-1,n=this.offsetHeight+this.scrollTop,r=this.rowElements[o];switch(e.key){case rC:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case rv:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case"PageUp":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex-1;t>=0;t--){let e=this.rowElements[t];if(e.offsetTop<this.scrollTop){this.scrollTop=e.offsetTop+e.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case"PageDown":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=o||r.offsetTop+r.offsetHeight<=n){this.focusOnCell(o,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex+1;t<=o;t++){let e=this.rowElements[t];if(e.offsetTop+e.offsetHeight>n){let t=0;this.generateHeader===io.sticky&&null!==this.generatedHeader&&(t=this.generatedHeader.clientHeight),this.scrollTop=e.offsetTop-t;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case r_:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case"End":e.ctrlKey&&null!==this.columnDefinitions&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1!==this.pendingFocusUpdate||(this.pendingFocusUpdate=!0,tm.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==io.none&&this.rowsData.length>0){let e=document.createElement(this.rowElementTag);this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===io.sticky?ii.stickyHeader:ii.header,(null!==this.firstChild||null!==this.rowsPlaceholder)&&this.insertBefore(e,null!==this.firstChild?this.firstChild:this.rowsPlaceholder);return}}}is.generateColumns=e=>Object.getOwnPropertyNames(e).map((e,t)=>({columnDataKey:e,gridColumn:`${t}`})),tW([tN({attribute:"no-tabbing",mode:"boolean"})],is.prototype,"noTabbing",void 0),tW([tN({attribute:"generate-header"})],is.prototype,"generateHeader",void 0),tW([tN({attribute:"grid-template-columns"})],is.prototype,"gridTemplateColumns",void 0),tW([ty],is.prototype,"rowsData",void 0),tW([ty],is.prototype,"columnDefinitions",void 0),tW([ty],is.prototype,"rowItemTemplate",void 0),tW([ty],is.prototype,"cellItemTemplate",void 0),tW([ty],is.prototype,"headerCellItemTemplate",void 0),tW([ty],is.prototype,"focusRowIndex",void 0),tW([ty],is.prototype,"focusColumnIndex",void 0),tW([ty],is.prototype,"defaultRowItemTemplate",void 0),tW([ty],is.prototype,"rowElementTag",void 0),tW([ty],is.prototype,"rowElements",void 0);class ia extends rz{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function il(e){return"string"==typeof e&&(e={property:e}),new o$("fast-children",ia,e)}class ic extends ox{constructor(){super(...arguments),this.rowType=ii.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(null!==this.rowData&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new r7(e=>e.columnDefinitions,e=>e.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(ie,this.handleFocusout),this.addEventListener(it,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(ie,this.handleFocusout),this.removeEventListener(it,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case ry:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case rw:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case r_:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case"End":e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===ii.default&&void 0!==this.cellItemTemplate?this.cellItemTemplate:this.rowType===ii.default&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}tW([tN({attribute:"grid-template-columns"})],ic.prototype,"gridTemplateColumns",void 0),tW([tN({attribute:"row-type"})],ic.prototype,"rowType",void 0),tW([ty],ic.prototype,"rowData",void 0),tW([ty],ic.prototype,"columnDefinitions",void 0),tW([ty],ic.prototype,"cellItemTemplate",void 0),tW([ty],ic.prototype,"headerCellItemTemplate",void 0),tW([ty],ic.prototype,"rowIndex",void 0),tW([ty],ic.prototype,"isActiveRow",void 0),tW([ty],ic.prototype,"activeCellItemTemplate",void 0),tW([ty],ic.prototype,"defaultCellItemTemplate",void 0),tW([ty],ic.prototype,"defaultHeaderCellItemTemplate",void 0),tW([ty],ic.prototype,"cellElements",void 0);let id=o2`
    <template>
        ${e=>null===e.rowData||null===e.columnDefinition||null===e.columnDefinition.columnDataKey?null:e.rowData[e.columnDefinition.columnDataKey]}
    </template>
`,ih=o2`
    <template>
        ${e=>null===e.columnDefinition?null:void 0===e.columnDefinition.title?e.columnDefinition.columnDataKey:e.columnDefinition.title}
    </template>
`;class iu extends ox{constructor(){super(...arguments),this.cellType=ir.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(r8,this.handleFocusin),this.addEventListener(ie,this.handleFocusout),this.addEventListener(it,this.handleKeydown),this.style.gridColumn=`${(null===(e=this.columnDefinition)||void 0===e?void 0:e.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(r8,this.handleFocusin),this.removeEventListener(ie,this.handleFocusout),this.removeEventListener(it,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){if(this.isActiveCell=!0,this.cellType===ir.columnHeader){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){let e=this.columnDefinition.headerCellFocusTargetCallback(this);null!==e&&e.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){let e=this.columnDefinition.cellFocusTargetCallback(this);null!==e&&e.focus()}this.$emit("cell-focused",this)}}handleFocusout(e){this===document.activeElement||this.contains(document.activeElement)||(this.isActiveCell=!1)}handleKeydown(e){if(!e.defaultPrevented&&null!==this.columnDefinition&&(this.cellType!==ir.default||!0===this.columnDefinition.cellInternalFocusQueue)&&(this.cellType!==ir.columnHeader||!0===this.columnDefinition.headerCellInternalFocusQueue))switch(e.key){case rS:case"F2":if(this.contains(document.activeElement)&&document.activeElement!==this)return;if(this.cellType===ir.columnHeader){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){let t=this.columnDefinition.headerCellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){let t=this.columnDefinition.cellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}break;case rx:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case ir.columnHeader:void 0!==this.columnDefinition.headerCellTemplate?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=ih.render(this,this);break;case void 0:case ir.rowHeader:case ir.default:void 0!==this.columnDefinition.cellTemplate?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=id.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}tW([tN({attribute:"cell-type"})],iu.prototype,"cellType",void 0),tW([tN({attribute:"grid-column"})],iu.prototype,"gridColumn",void 0),tW([ty],iu.prototype,"rowData",void 0),tW([ty],iu.prototype,"columnDefinition",void 0);let ip=(class extends is{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}).compose({baseName:"data-grid",baseClass:is,template:(e,t)=>{let o=function(e){let t=e.tagFor(ic);return o2`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,t)=>t.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,t)=>t.parent.headerCellItemTemplate}"
    ></${t}>
`}(e),n=e.tagFor(ic);return o2`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>n}"
            :defaultRowItemTemplate="${o}"
            ${il({property:"rowElements",filter:rN("[role=row]")})}
        >
            <slot></slot>
        </template>
    `},styles:(e,t)=>o6`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`}),im=(class extends ic{}).compose({baseName:"data-grid-row",baseClass:ic,template:(e,t)=>{let o=function(e){let t=e.tagFor(iu);return o2`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,t)=>t.index+1}"
        :rowData="${(e,t)=>t.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e),n=function(e){let t=e.tagFor(iu);return o2`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,t)=>t.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e);return o2`
        <template
            role="row"
            class="${e=>"default"!==e.rowType?e.rowType:""}"
            :defaultCellItemTemplate="${o}"
            :defaultHeaderCellItemTemplate="${n}"
            ${il({property:"cellElements",filter:rN('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${rL("slottedCellElements")}></slot>
        </template>
    `},styles:(e,t)=>o6`
	:host {
		display: grid;
		padding: calc((${nx} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${ny};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${n4};
		outline: 1px dotted ${nC};
		outline-offset: -1px;
	}
`}),ig=(class extends iu{}).compose({baseName:"data-grid-cell",baseClass:iu,template:(e,t)=>o2`
        <template
            tabindex="-1"
            role="${e=>e.cellType&&"default"!==e.cellType?e.cellType:"gridcell"}"
            class="
            ${e=>"columnheader"===e.cellType?"column-header":"rowheader"===e.cellType?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,styles:(e,t)=>o6`
	:host {
		padding: calc(${nx} * 1px) calc(${nx} * 3px);
		color: ${nk};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${nT};
		font-size: ${nI};
		line-height: ${nM};
		font-weight: 400;
		border: solid calc(${nw} * 1px) transparent;
		border-radius: calc(${nS} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${rF}),
	:host(:focus),
	:host(:active) {
		background: ${n3};
		border: solid calc(${nw} * 1px) ${nR};
		color: ${n6};
		outline: none;
	}
	:host(:${rF}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${n6} !important;
	}
`}),ib={horizontal:"horizontal"};class iv extends ox{constructor(){super(...arguments),this.role="separator",this.orientation=ib.horizontal}}tW([tN],iv.prototype,"role",void 0),tW([tN],iv.prototype,"orientation",void 0);let iy=(class extends iv{}).compose({baseName:"divider",template:(e,t)=>o2`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>o6`
	${o4("block")} :host {
		border: none;
		border-top: calc(${nw} * 1px) solid ${n7};
		box-sizing: content-box;
		height: 0;
		margin: calc(${nx} * 1px) 0;
		width: 100%;
	}
`}),iw=0;function iC(e=""){return`${e}${iw++}`}function iS(e){return function(...e){return e.every(e=>e instanceof HTMLElement)}(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class ix extends ox{constructor(e,t,o,n){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),o&&(this.defaultSelected=o),n&&(this.selected=n),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if("boolean"==typeof t){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){!this.dirtySelected&&(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){let t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),tv.notify(this,"value")}get value(){var e;return tv.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}tW([ty],ix.prototype,"checked",void 0),tW([ty],ix.prototype,"content",void 0),tW([ty],ix.prototype,"defaultSelected",void 0),tW([tN({mode:"boolean"})],ix.prototype,"disabled",void 0),tW([tN({attribute:"selected",mode:"boolean"})],ix.prototype,"selectedAttribute",void 0),tW([ty],ix.prototype,"selected",void 0),tW([tN({attribute:"value",mode:"fromView"})],ix.prototype,"initialValue",void 0);class i_{}tW([ty],i_.prototype,"ariaChecked",void 0),tW([ty],i_.prototype,"ariaPosInSet",void 0),tW([ty],i_.prototype,"ariaSelected",void 0),tW([ty],i_.prototype,"ariaSetSize",void 0),rb(i_,rh),rb(ix,rf,i_);class iR extends ox{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return tv.track(this,"options"),this._options}set options(e){this._options=e,tv.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){let t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){let e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=RegExp(`^${e}`,"gi");return this.options.filter(e=>e.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){let o=e>t?-1:e<t?1:0,n=e+o,r=null;switch(o){case -1:r=this.options.reduceRight((e,t,o)=>e||t.disabled||!(o<n)?e:t,r);break;case 1:r=this.options.reduce((e,t,o)=>e||t.disabled||!(o>n)?e:t,r)}return this.options.indexOf(r)}handleChange(e,t){"selected"===t&&(iR.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions())}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,iR.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;let t=e.key;switch(t){case r_:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case rv:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case rC:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case"End":e.preventDefault(),this.selectLastOption();break;case"Tab":return this.focusAndScrollOptionIntoView(),!0;case rS:case rx:return!0;case" ":if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var o;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if((null===(o=this.options[this.selectedIndex])||void 0===o?void 0:o.disabled)&&"number"==typeof e){let o=this.getSelectableIndex(e,t),n=o>-1?o:e;this.selectedIndex=n,t===n&&this.selectedIndexChanged(t,n);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var o;let n=t.filter(iR.slottedOptionFilter);null===(o=this.options)||void 0===o||o.forEach(e=>{let t=tv.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=n.includes(e),t.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex(e=>!e.disabled))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let o=e.length;for(;o--;)if(t(e[o],o,e))return o;return -1}(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex(e=>e.defaultSelected))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,o;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(o=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==o?o:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((e,t)=>(iS(t)&&e.push(t),e),[]);let o=`${this.options.length}`;this.options.forEach((e,t)=>{e.id||(e.id=iC("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=o}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){let e=this.getTypeaheadMatches();if(e.length){let t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}iR.slottedOptionFilter=e=>iS(e)&&!e.hidden,iR.TYPE_AHEAD_TIMEOUT_MS=1e3,tW([tN({mode:"boolean"})],iR.prototype,"disabled",void 0),tW([ty],iR.prototype,"selectedIndex",void 0),tW([ty],iR.prototype,"selectedOptions",void 0),tW([ty],iR.prototype,"slottedOptions",void 0),tW([ty],iR.prototype,"typeaheadBuffer",void 0);class iT{}function ik(e,t,o=0){return[t,o]=[t,o].sort((e,t)=>e-t),t<=e&&e<o}tW([ty],iT.prototype,"ariaActiveDescendant",void 0),tW([ty],iT.prototype,"ariaDisabled",void 0),tW([ty],iT.prototype,"ariaExpanded",void 0),tW([ty],iT.prototype,"ariaMultiSelectable",void 0),rb(iT,rh),rb(iR,iT);class iE extends iR{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter(e=>e.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var o,n;this.ariaActiveDescendant=null!==(n=null===(o=this.options[t])||void 0===o?void 0:o.id)&&void 0!==n?n:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;let e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((e,t)=>{e.checked=ik(t,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,t)=>{e.checked=ik(t,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,t)=>{e.checked=ik(t,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach((e,t)=>{e.checked=ik(t,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);let o=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");if(o&&!o.disabled)return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(o),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;let{key:t,shiftKey:o}=e;switch(this.shouldSkipFocus=!1,t){case r_:this.checkFirstOption(o);return;case rv:this.checkNextOption(o);return;case rC:this.checkPreviousOption(o);return;case"End":this.checkLastOption(o);return;case"Tab":return this.focusAndScrollOptionIntoView(),!0;case rx:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case" ":if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var o;this.ariaMultiSelectable=t?"true":null,null===(o=this.options)||void 0===o||o.forEach(e=>{e.checked=!t&&void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var o;let n=Math.max(0,parseInt(null!==(o=null==t?void 0:t.toFixed())&&void 0!==o?o:"",10));n!==t&&tm.queueUpdate(()=>{this.size=n})}toggleSelectedForAllCheckedOptions(){let e=this.checkedOptions.filter(e=>!e.disabled),t=!e.every(e=>e.selected);e.forEach(e=>e.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){let e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(e=>e.checked=!this.multiple&&void 0),e||(this.rangeStartIndex=-1)}}tW([ty],iE.prototype,"activeIndex",void 0),tW([tN({mode:"boolean"})],iE.prototype,"multiple",void 0),tW([tN({converter:t$})],iE.prototype,"size",void 0);class iO extends iE{}class iI extends rI(iO){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let iM={above:"above",below:"below"};class iD extends iI{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=iC("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,tm.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return tv.track(this,"value"),this._value}set value(e){var t,o,n,r,i,s,a;let l=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){let t=this._options.findIndex(t=>t.value===e),l=null!==(n=null===(o=this._options[this.selectedIndex])||void 0===o?void 0:o.value)&&void 0!==n?n:null,c=null!==(i=null===(r=this._options[t])||void 0===r?void 0:r.value)&&void 0!==i?i:null;(-1===t||l!==c)&&(e="",this.selectedIndex=t),e=null!==(a=null===(s=this.firstSelectedOption)||void 0===s?void 0:s.value)&&void 0!==a?a:e}l!==e&&(this._value=e,super.valueChanged(l,e),tv.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,o;this.$fastController.isConnected&&(this.value=null!==(o=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==o?o:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){let e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?iM.above:iM.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===iM.above?~~e.top:~~t}get displayValue(){var e,t;return tv.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){let t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;let o=e.relatedTarget;if(this.isSameNode(o)){this.focus();return}(null===(t=this.options)||void 0===t?void 0:t.includes(o))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(e=>{tv.getNotifier(e).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(e=>{tv.getNotifier(e).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var o;super.selectedOptionsChanged(e,t),null===(o=this.options)||void 0===o||o.forEach((e,t)=>{var o;let n=null===(o=this.proxy)||void 0===o?void 0:o.options.item(t);n&&(n.selected=e.selected)})}setDefaultSelectedOption(){var e;let t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(iR.slottedOptionFilter),o=null==t?void 0:t.findIndex(e=>e.hasAttribute("selected")||e.selected||e.value===this.value);if(-1!==o){this.selectedIndex=o;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{let t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);let t=e.key||e.key.charCodeAt(0);switch(t){case" ":e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case r_:case"End":e.preventDefault();break;case rS:e.preventDefault(),this.open=!this.open;break;case rx:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case"Tab":return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===rv||t===rC)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&tv.notify(this,"displayValue")}}tW([tN({attribute:"open",mode:"boolean"})],iD.prototype,"open",void 0),tW([tw],iD.prototype,"collapsible",null),tW([ty],iD.prototype,"control",void 0),tW([tN({attribute:"position"})],iD.prototype,"positionAttribute",void 0),tW([ty],iD.prototype,"position",void 0),tW([ty],iD.prototype,"maxHeight",void 0);class iA{}tW([ty],iA.prototype,"ariaControls",void 0),rb(iA,iT),rb(iD,rf,iA);let i$=e=>"function"==typeof e,iP=()=>null;function iN(e){return void 0===e?iP:i$(e)?e:()=>e}function iz(e,t,o){let n=i$(e)?e:()=>e,r=iN(t),i=iN(o);return(e,t)=>n(e,t)?r(e,t):i(e,t)}let iH=(class extends iD{}).compose({baseName:"dropdown",template:(e,t)=>o2`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${iz(e=>e.collapsible,o2`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${rp("control")}
                >
                    ${rg(e,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${rm(e,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${rp("listbox")}
        >
            <slot
                ${rL({filter:iR.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>o6`
	${o4("inline-flex")} :host {
		background: ${n9};
		box-sizing: border-box;
		color: ${nk};
		contain: contents;
		font-family: ${nT};
		height: calc(${nE} * 1px);
		position: relative;
		user-select: none;
		min-width: ${nO};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${nw} * 1px) solid ${n8};
		border-radius: calc(${nS} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${nI};
		line-height: ${nM};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${n9};
		border: calc(${nw} * 1px) solid ${nR};
		border-radius: calc(${nS} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${re};
		padding: 0 0 calc(${nx} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${rF}) .control {
		border-color: ${nR};
	}
	:host(:not([disabled]):hover) {
		background: ${n9};
		border-color: ${n8};
	}
	:host(:${rF}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${n3};
		border: calc(${nw} * 1px) solid ${nR};
		color: ${n6};
	}
	:host([disabled]) {
		cursor: ${rW};
		opacity: ${n_};
	}
	:host([disabled]) .control {
		cursor: ${rW};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${n9};
		color: ${nk};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${nR};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${nR};
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) .control {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']) .control,
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${nE} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${nE} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${nx} * 4px);
		min-width: calc(${nx} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`});class iL extends ox{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{var e;null===(e=this.control)||void 0===e||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}tW([tN],iL.prototype,"download",void 0),tW([tN],iL.prototype,"href",void 0),tW([tN],iL.prototype,"hreflang",void 0),tW([tN],iL.prototype,"ping",void 0),tW([tN],iL.prototype,"referrerpolicy",void 0),tW([tN],iL.prototype,"rel",void 0),tW([tN],iL.prototype,"target",void 0),tW([tN],iL.prototype,"type",void 0),tW([ty],iL.prototype,"defaultSlottedContent",void 0);class iF{}tW([tN({attribute:"aria-expanded"})],iF.prototype,"ariaExpanded",void 0),rb(iF,rh),rb(iL,rf,iF);let iW=(class extends iL{}).compose({baseName:"link",template:(e,t)=>o2`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${rp("control")}
    >
        ${rg(e,t)}
        <span class="content" part="content">
            <slot ${rL("defaultSlottedContent")}></slot>
        </span>
        ${rm(e,t)}
    </a>
`,styles:(e,t)=>o6`
	${o4("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${rr};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${nT};
		font-size: ${nI};
		line-height: ${nM};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${nw} * 1px) solid transparent;
		border-radius: calc(${nS} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${rn};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${rn};
	}
	:host(:${rF}) .control,
	:host(:focus) .control {
		border: calc(${nw} * 1px) solid ${nR};
	}
`,shadowOptions:{delegatesFocus:!0}}),iG=(class extends ix{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}).compose({baseName:"option",template:(e,t)=>o2`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${rg(e,t)}
        <span class="content" part="content">
            <slot ${rL("content")}></slot>
        </span>
        ${rm(e,t)}
    </template>
`,styles:(e,t)=>o6`
	${o4("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${nS};
		border: calc(${nw} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${nk};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${nI};
		line-height: ${nM};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${nx} / 2) * 1px)
			calc((${nx} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${rF}) {
		border-color: ${nR};
		background: ${n3};
		color: ${nk};
	}
	:host([aria-selected='true']) {
		background: ${n3};
		border: calc(${nw} * 1px) solid ${nR};
		color: ${n6};
	}
	:host(:active) {
		background: ${n3};
		color: ${n6};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${n3};
		border: calc(${nw} * 1px) solid ${nR};
		color: ${n6};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${n3};
		color: ${nk};
	}
	:host([disabled]) {
		cursor: ${rW};
		opacity: ${n_};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`}),iB={horizontal:"horizontal"};class iU extends ox{constructor(){super(...arguments),this.orientation=iB.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{let e="gridColumn",t="gridRow",o=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((n,r)=>{if("tab"===n.slot){let e=this.activeTabIndex===r&&this.isFocusableElement(n);this.activeindicator&&this.isFocusableElement(n)&&(this.showActiveIndicator=!0);let t=this.tabIds[r],o=this.tabpanelIds[r];n.setAttribute("id",t),n.setAttribute("aria-selected",e?"true":"false"),n.setAttribute("aria-controls",o),n.addEventListener("click",this.handleTabClick),n.addEventListener("keydown",this.handleTabKeyDown),n.setAttribute("tabindex",e?"0":"-1"),e&&(this.activetab=n,this.activeid=t)}n.style[e]="",n.style[t]="",n.style[o]=`${r+1}`,this.isHorizontal()?n.classList.remove("vertical"):n.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,t)=>{let o=this.tabIds[t],n=this.tabpanelIds[t];e.setAttribute("id",n),e.setAttribute("aria-labelledby",o),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{let t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case ry:e.preventDefault(),this.adjustBackward(e);break;case rw:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case rC:e.preventDefault(),this.adjustBackward(e);break;case rv:e.preventDefault(),this.adjustForward(e)}switch(e.key){case r_:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case"End":e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{let t=this.tabs,o=0;for((o=this.activetab?t.indexOf(this.activetab)+1:1)===t.length&&(o=0);o<t.length&&t.length>1;){if(this.isFocusableElement(t[o])){this.moveToTabByIndex(t,o);break}if(this.activetab&&o===t.indexOf(this.activetab))break;o+1>=t.length?o=0:o+=1}},this.adjustBackward=e=>{let t=this.tabs,o=0;for(o=(o=this.activetab?t.indexOf(this.activetab)-1:0)<0?t.length-1:o;o>=0&&t.length>1;){if(this.isFocusableElement(t[o])){this.moveToTabByIndex(t,o);break}o-1<0?o=t.length-1:o-=1}},this.moveToTabByIndex=(e,t)=>{let o=e[t];this.activetab=o,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,o.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(t=>t.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`tab-${iC()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`panel-${iC()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===iB.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;let e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",o=this.isHorizontal()?"offsetLeft":"offsetTop",n=this.activeIndicatorRef[o];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;let r=this.activeIndicatorRef[o];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(${r-n}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){let t=this.tabs.filter(e=>this.isFocusableElement(e)),o=Math.min(Math.max(t.indexOf(this.activetab)+e,0),t.length-1),n=this.tabs.indexOf(t[o]);n>-1&&this.moveToTabByIndex(this.tabs,n)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}tW([tN],iU.prototype,"orientation",void 0),tW([tN],iU.prototype,"activeid",void 0),tW([ty],iU.prototype,"tabs",void 0),tW([ty],iU.prototype,"tabpanels",void 0),tW([tN({mode:"boolean"})],iU.prototype,"activeindicator",void 0),tW([ty],iU.prototype,"activeIndicatorRef",void 0),tW([ty],iU.prototype,"showActiveIndicator",void 0),rb(iU,rf);class iV extends ox{}tW([tN({mode:"boolean"})],iV.prototype,"disabled",void 0);class ij extends ox{}let iZ=(class extends iU{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=iB.horizontal),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}).compose({baseName:"panels",template:(e,t)=>o2`
    <template class="${e=>e.orientation}">
        ${rg(e,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${rL("tabs")}></slot>

            ${iz(e=>e.showActiveIndicator,o2`
                    <div
                        ${rp("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${rm(e,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${rL("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,t)=>o6`
	${o4("grid")} :host {
		box-sizing: border-box;
		font-family: ${nT};
		font-size: ${nI};
		line-height: ${nM};
		color: ${nk};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${nx} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${nx} * 1px) calc(${nx} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${nx} / 4) * 1px);
		justify-self: center;
		background: ${ra};
		margin: 0;
		border-radius: calc(${nS} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`}),iq=(class extends iV{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}).compose({baseName:"panel-tab",template:(e,t)=>o2`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:(e,t)=>o6`
	${o4("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${nT};
		font-size: ${nI};
		line-height: ${nM};
		height: calc(${nx} * 7px);
		padding: calc(${nx} * 1px) 0;
		color: ${rl};
		fill: currentcolor;
		border-radius: calc(${nS} * 1px);
		border: solid calc(${nw} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${ra};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${ra};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${ra};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${ra};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${ra};
		fill: currentcolor;
	}
	:host(:${rF}) {
		outline: none;
		border: solid calc(${nw} * 1px) ${rs};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${nx} * 2px);
	}
`}),iK=(class extends ij{}).compose({baseName:"panel-view",template:(e,t)=>o2`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,t)=>o6`
	${o4("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${nw} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${nI};
		line-height: ${nM};
		padding: 10px calc((${nx} + 2) * 1px);
	}
`});class iY extends ox{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){let e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,o="number"==typeof this.value?this.value:0,n=t-e;this.percentComplete=0===n?0:Math.fround((o-e)/n*100)}}tW([tN({converter:t$})],iY.prototype,"value",void 0),tW([tN({converter:t$})],iY.prototype,"min",void 0),tW([tN({converter:t$})],iY.prototype,"max",void 0),tW([tN({mode:"boolean"})],iY.prototype,"paused",void 0),tW([ty],iY.prototype,"percentComplete",void 0);let iQ=(class extends iY{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,o){"value"===e&&this.removeAttribute("value")}}).compose({baseName:"progress-ring",template:(e,t)=>o2`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${iz(e=>"number"==typeof e.value,o2`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>44*e.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,o2`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>o6`
	${o4("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${nx} * 7px);
		width: calc(${nx} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${nx} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${ri};
		stroke-width: calc(${nx} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`,indeterminateIndicator:`
		<svg class="progress" part="progress" viewBox="0 0 16 16">
			<circle
				class="background"
				part="background"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
			<circle
				class="indeterminate-indicator-1"
				part="indeterminate-indicator-1"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
		</svg>
	`});class iX extends ox{}class iJ extends rM(iX){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class i0 extends iJ{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(" "===e.key){this.checked||this.readOnly||(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;!this.$fastController.isConnected||this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1)}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))==="radiogroup"||null!==this.getAttribute("tabindex")||this.disabled||this.setAttribute("tabindex","0"),!this.checkedAttribute||this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1)}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}tW([tN({attribute:"readonly",mode:"boolean"})],i0.prototype,"readOnly",void 0),tW([ty],i0.prototype,"name",void 0),tW([ty],i0.prototype,"defaultSlottedNodes",void 0);let i1=(class extends i0{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}).compose({baseName:"radio",template:(e,t)=>o2`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${rL("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>o6`
	${o4("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${nI};
		line-height: ${nM};
		margin: calc(${nx} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${n1};
		border-radius: 999px;
		border: calc(${nw} * 1px) solid ${n2};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${nx} * 4px);
		position: relative;
		outline: none;
		width: calc(${nx} * 4px);
	}
	.label {
		color: ${nk};
		cursor: pointer;
		font-family: ${nT};
		margin-inline-end: calc(${nx} * 2px + 2px);
		padding-inline-start: calc(${nx} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${nk};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${nx} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${n1};
		border-color: ${n2};
	}
	:host(:not([disabled])) .control:active {
		background: ${n1};
		border-color: ${nR};
	}
	:host(:${rF}) .control {
		border: calc(${nw} * 1px) solid ${nR};
	}
	:host([aria-checked='true']) .control {
		background: ${n1};
		border: calc(${nw} * 1px) solid ${n2};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${n1};
		border: calc(${nw} * 1px) solid ${n2};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${n1};
		border: calc(${nw} * 1px) solid ${nR};
	}
	:host([aria-checked="true"]:${rF}:not([disabled])) .control {
		border: calc(${nw} * 1px) solid ${nR};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${rW};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${n_};
	}
`,checkedIndicator:`
		<div part="checked-indicator" class="checked-indicator"></div>
	`});(b=_||(_={})).ltr="ltr",b.rtl="rtl";let i2=e=>{let t=e.closest("[dir]");return null!==t&&"rtl"===t.dir?_.rtl:_.ltr};class i5 extends ox{constructor(){super(...arguments),this.orientation=ib.horizontal,this.radioChangeHandler=e=>{let t=e.target;t.checked&&(this.slottedRadioButtons.forEach(e=>{e===t||(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))}),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{let o=e[t];this.isInsideToolbar||(o.setAttribute("tabindex","0"),o.readOnly?this.slottedRadioButtons.forEach(e=>{e!==o&&e.setAttribute("tabindex","-1")}):(o.checked=!0,this.selectedRadio=o)),this.focusedRadio=o,o.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{let t=this.slottedRadioButtons,o=e.target,n=null!==o?t.indexOf(o):0,r=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0!==r||n!==r)&&(r!==t.length-1||r!==n)||(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach(e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")}))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach(e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{let t=e.target;if(t){let e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,o)=>e===t.length&&this.isInsideToolbar&&o===rw,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===ry,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{let t=this.slottedRadioButtons,o=0;if(o=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(o,t,e.key)){this.moveRightOffGroup();return}for(o===t.length&&(o=0);o<t.length&&t.length>1;)if(t[o].disabled){if(this.focusedRadio&&o===t.indexOf(this.focusedRadio))break;if(o+1>=t.length){if(this.isInsideToolbar)break;o=0}else o+=1}else{this.moveToRadioByIndex(t,o);break}},this.moveLeft=e=>{let t=this.slottedRadioButtons,o=0;if(o=(o=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0?t.length-1:o,this.shouldMoveOffGroupToTheLeft(t,e.key)){this.moveLeftOffGroup();return}for(;o>=0&&t.length>1;)if(t[o].disabled){if(this.focusedRadio&&o===t.indexOf(this.focusedRadio))break;o-1<0?o=t.length-1:o-=1}else{this.moveToRadioByIndex(t,o);break}},this.keydownHandler=e=>{let t=e.key;if(t in rR&&this.isInsideFoundationToolbar)return!0;switch(t){case rS:this.checkFocusedRadio();break;case rw:case rv:this.direction===_.ltr?this.moveRight(e):this.moveLeft(e);break;case ry:case rC:this.direction===_.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=i2(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){let e=this.slottedRadioButtons.filter(e=>e.hasAttribute("checked")),t=e?e.length:0;t>1&&(e[t-1].checked=!0);let o=!1;if(this.slottedRadioButtons.forEach(e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),o=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)}),void 0===this.value&&this.slottedRadioButtons.length>0){let e=this.slottedRadioButtons.filter(e=>e.hasAttribute("checked")),t=null!==e?e.length:0;if(t>0&&!o){let o=e[t-1];o.checked=!0,this.focusedRadio=o,o.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}tW([tN({attribute:"readonly",mode:"boolean"})],i5.prototype,"readOnly",void 0),tW([tN({attribute:"disabled",mode:"boolean"})],i5.prototype,"disabled",void 0),tW([tN],i5.prototype,"name",void 0),tW([tN],i5.prototype,"value",void 0),tW([tN],i5.prototype,"orientation",void 0),tW([ty],i5.prototype,"childItems",void 0),tW([ty],i5.prototype,"slottedRadioButtons",void 0);let i3=(class extends i5{connectedCallback(){super.connectedCallback();let e=this.querySelector("label");if(e){let t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}).compose({baseName:"radio-group",template:(e,t)=>o2`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===ib.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${rL({property:"slottedRadioButtons",filter:rN("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>o6`
	${o4("flex")} :host {
		align-items: flex-start;
		margin: calc(${nx} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${nk};
		font-size: ${nI};
		margin: calc(${nx} * 1px) 0;
	}
`}),i6=(class extends oM{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}).compose({baseName:"tag",template:o5,styles:(e,t)=>o6`
	${o4("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${nT};
		font-size: ${nD};
		line-height: ${nA};
	}
	.control {
		background-color: ${nL};
		border: calc(${nw} * 1px) solid ${nW};
		border-radius: ${rc};
		color: ${nF};
		padding: calc(${nx} * 0.5px) calc(${nx} * 1px);
		text-transform: uppercase;
	}
`});class i4 extends ox{}class i7 extends rI(i4){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class i9 extends i7{constructor(){super(...arguments),this.type="text"}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&tm.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}tW([tN({attribute:"readonly",mode:"boolean"})],i9.prototype,"readOnly",void 0),tW([tN({mode:"boolean"})],i9.prototype,"autofocus",void 0),tW([tN],i9.prototype,"placeholder",void 0),tW([tN],i9.prototype,"type",void 0),tW([tN],i9.prototype,"list",void 0),tW([tN({converter:t$})],i9.prototype,"maxlength",void 0),tW([tN({converter:t$})],i9.prototype,"minlength",void 0),tW([tN],i9.prototype,"pattern",void 0),tW([tN({converter:t$})],i9.prototype,"size",void 0),tW([tN({mode:"boolean"})],i9.prototype,"spellcheck",void 0),tW([ty],i9.prototype,"defaultSlottedNodes",void 0);class i8{}rb(i8,rh),rb(i9,rf,i8);class se extends ox{}class st extends rI(se){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}let so={none:"none"};class sn extends st{constructor(){super(...arguments),this.resize=so.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}tW([tN({mode:"boolean"})],sn.prototype,"readOnly",void 0),tW([tN],sn.prototype,"resize",void 0),tW([tN({mode:"boolean"})],sn.prototype,"autofocus",void 0),tW([tN({attribute:"form"})],sn.prototype,"formId",void 0),tW([tN],sn.prototype,"list",void 0),tW([tN({converter:t$})],sn.prototype,"maxlength",void 0),tW([tN({converter:t$})],sn.prototype,"minlength",void 0),tW([tN],sn.prototype,"name",void 0),tW([tN],sn.prototype,"placeholder",void 0),tW([tN({converter:t$,mode:"fromView"})],sn.prototype,"cols",void 0),tW([tN({converter:t$,mode:"fromView"})],sn.prototype,"rows",void 0),tW([tN({mode:"boolean"})],sn.prototype,"spellcheck",void 0),tW([ty],sn.prototype,"defaultSlottedNodes",void 0),rb(sn,i8);let sr=(class extends sn{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}).compose({baseName:"text-area",template:(e,t)=>o2`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==so.none?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${rL("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,t)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${rp("control")}
        ></textarea>
    </template>
`,styles:(e,t)=>o6`
	${o4("inline-block")} :host {
		font-family: ${nT};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${ro};
		background: ${rt};
		border-radius: calc(${nS} * 1px);
		border: calc(${nw} * 1px) solid ${n8};
		font: inherit;
		font-size: ${nI};
		line-height: ${nM};
		padding: calc(${nx} * 2px + 1px);
		width: 100%;
		min-width: ${nO};
		resize: none;
	}
	.control:hover:enabled {
		background: ${rt};
		border-color: ${n8};
	}
	.control:active:enabled {
		background: ${rt};
		border-color: ${nR};
	}
	.control:hover,
	.control:${rF},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${n$};
		height: ${nP};
	}
	.control::-webkit-scrollbar-corner {
		background: ${rt};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${nN};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${nz};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${nH};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${nR};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${nk};
		cursor: pointer;
		font-size: ${nI};
		line-height: ${nM};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${rW};
	}
	:host([disabled]) {
		opacity: ${n_};
	}
	:host([disabled]) .control {
		border-color: ${n8};
	}
`,shadowOptions:{delegatesFocus:!0}});function si(e,t,o){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}let ss=(class extends i9{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}).compose({baseName:"text-field",template:(e,t)=>o2`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${rL({property:"defaultSlottedNodes",filter:si})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${rg(e,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${rp("control")}
            />
            ${rm(e,t)}
        </div>
    </template>
`,styles:(e,t)=>o6`
	${o4("inline-block")} :host {
		font-family: ${nT};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${ro};
		background: ${rt};
		border-radius: calc(${nS} * 1px);
		border: calc(${nw} * 1px) solid ${n8};
		height: calc(${nE} * 1px);
		min-width: ${nO};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${nx} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${nx} * 2px + 1px);
		font-size: ${nI};
		line-height: ${nM};
	}
	.control:hover,
	.control:${rF},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${nk};
		cursor: pointer;
		font-size: ${nI};
		line-height: ${nM};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${nx} * 4px);
		height: calc(${nx} * 4px);
	}
	.start {
		margin-inline-start: calc(${nx} * 2px);
	}
	.end {
		margin-inline-end: calc(${nx} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${rt};
		border-color: ${n8};
	}
	:host(:active:not([disabled])) .root {
		background: ${rt};
		border-color: ${nR};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${nR};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${rW};
	}
	:host([disabled]) {
		opacity: ${n_};
	}
	:host([disabled]) .control {
		border-color: ${n8};
	}
`,shadowOptions:{delegatesFocus:!0}}),sa=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),sl=new Map,sc=new Map,sd=null,sh=t2.createInterface(e=>e.cachedCallback(e=>(null===sd&&(sd=new sp(null,e)),sd))),su=Object.freeze({tagFor:e=>sc.get(e),responsibleFor:e=>e.$$designSystem$$||t2.findResponsibleContainer(e).get(sh),getOrCreate(e){if(!e)return null===sd&&(sd=t2.getOrCreateDOMContainer().get(sh)),sd;let t=e.$$designSystem$$;if(t)return t;let o=t2.getOrCreateDOMContainer(e);if(o.has(sh,!1))return o.get(sh);{let t=new sp(e,o);return o.register(oh.instance(sh,t)),t}}});class sp{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>sa.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){let t=this.container,o=[],n=this.disambiguate,r=this.shadowRootMode,i={elementPrefix:this.prefix,tryDefineElement(e,i,s){let a="string"==typeof e?{name:e,type:i,callback:s}:e,{name:l,callback:c,baseClass:d}=a,{type:h}=a,u=l,p=sl.get(u),f=!0;for(;p;){let e=n(u,h,p);switch(e){case sa.ignoreDuplicate:return;case sa.definitionCallbackOnly:f=!1,p=void 0;break;default:u=e,p=sl.get(u)}}f&&((sc.has(h)||h===ox)&&(h=class extends h{}),sl.set(u,h),sc.set(h,u),d&&sc.set(d,u)),o.push(new sf(t,u,h,r,c,f))}};for(let n of(this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&nf.registerRoot(this.designTokenRoot)),t.registerWithContext(i,...e),o))n.callback(n),n.willDefine&&null!==n.definition&&n.definition.define();return this}}class sf{constructor(e,t,o,n,r,i){this.container=e,this.name=t,this.type=o,this.shadowRootMode=n,this.callback=r,this.willDefine=i,this.definition=null}definePresentation(e){oC.define(this.name,e,this.container)}defineElement(e){this.definition=new tF(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return su.tagFor(e)}}let{wrap:sm}=(v=R,y=su.getOrCreate(void 0).withPrefix("vscode"),l=[],{wrap:function(e,t={}){var o,n;e instanceof oR&&(y?y.register(e):l.push(e),e=e.type);let r=oO.get(e);if(r){let e=r.get(null!==(o=t.name)&&void 0!==o?o:oE);if(e)return e}class i extends v.Component{constructor(){super(...arguments),this._element=null}_updateElement(e){let o=this._element;if(null===o)return;let n=this.props,r=e||ok,i=oI(t);for(let e in this._elementProps){let t=n[e],s=i[e];if(void 0===s)o[e]=t;else{let n=r[e];if(t===n)continue;void 0!==n&&o.removeEventListener(s,n),void 0!==t&&o.addEventListener(s,t)}}}componentDidMount(){this._updateElement()}componentDidUpdate(e){this._updateElement(e)}render(){let o=this.props.__forwardedRef;(void 0===this._ref||this._userRef!==o)&&(this._ref=e=>{null===this._element&&(this._element=e),null!==o&&("function"==typeof o?o(e):o.current=e),this._userRef=o});let n={ref:this._ref},r=this._elementProps={},i=function(e,t){if(!t.keys){if(t.properties)t.keys=new Set(t.properties.concat(Object.keys(oI(t))));else{var o;let n=new Set(Object.keys(oI(t))),r=tv.getAccessors(e.prototype);if(r.length>0)for(let e of r)o=e.name,oT.has(o)||n.add(e.name);else for(let t in e.prototype)t in HTMLElement.prototype||oT.has(t)||n.add(t);t.keys=n}}return t.keys}(e,t),s=this.props;for(let e in s){let t=s[e];i.has(e)?r[e]=t:n["className"===e?"class":e]=t}return v.createElement(function(e,t){if(!t.name){let o=tF.forType(e);if(o)t.name=o.name;else throw Error("React wrappers must wrap a FASTElement or be configured with a name.")}return t.name}(e,t),n)}}let s=v.forwardRef((e,t)=>v.createElement(i,Object.assign(Object.assign({},e),{__forwardedRef:t}),null==e?void 0:e.children));return oO.has(e)||oO.set(e,new Map),oO.get(e).set(null!==(n=t.name)&&void 0!==n?n:oE,s),s},registry:{register(e,...t){l.forEach(o=>o.register(e,...t)),l=[]}}});sm(rd(),{name:"vscode-badge"}),sm(rZ(),{name:"vscode-button"});let sg=sm(rQ(),{name:"vscode-checkbox",events:{onChange:"change"}});sm(ip(),{name:"vscode-data-grid"}),sm(ig(),{name:"vscode-data-grid-cell"}),sm(im(),{name:"vscode-data-grid-row"}),sm(iy(),{name:"vscode-divider"}),sm(iH(),{name:"vscode-dropdown",events:{onChange:"change"}}),sm(iW(),{name:"vscode-link"}),sm(iG(),{name:"vscode-option"}),sm(iZ(),{name:"vscode-panels",events:{onChange:"change"}}),sm(iq(),{name:"vscode-panel-tab"}),sm(iK(),{name:"vscode-panel-view"}),sm(iQ(),{name:"vscode-progress-ring"});let sb=sm(i1(),{name:"vscode-radio",events:{onChange:"change"}}),sv=sm(i3(),{name:"vscode-radio-group",events:{onChange:"change"}});sm(i6(),{name:"vscode-tag"}),sm(sr(),{name:"vscode-text-area",events:{onChange:"change",onInput:"input"}}),sm(ss(),{name:"vscode-text-field",events:{onChange:"change",onInput:"input"}});let sy=navigator?.userAgentData?.platform,sw=navigator.userAgent,sC="Linux"===sy||sw.indexOf("Linux")>=0,sS="macOS"===sy||sw.indexOf("Macintosh")>=0,sx="Windows"===sy||sw.indexOf("Windows")>=0;function s_(e,t,o){return`command:${e}?${encodeURIComponent(JSON.stringify({webview:t,webviewInstance:o}))}`}let sR=new Set(["children","localName","ref","style","className"]),sT=new WeakMap,sk=(e,t,o,n,r)=>{let i,s;let a=r?.[t];void 0===a||o===n?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):(void 0===(i=sT.get(e))&&sT.set(e,i=new Map),s=i.get(a),void 0!==o?void 0===s?(i.set(a,s={handleEvent:o}),e.addEventListener(a,s)):s.handleEvent=o:void 0!==s&&(i.delete(a),e.removeEventListener(a,s)))},sE=({react:e,tagName:t,elementClass:o,events:n,displayName:r})=>{let i=new Set(Object.keys(n??{})),s=e.forwardRef((r,s)=>{let a=e.useRef(null),l=e.useRef(null),c={},d={};for(let[e,t]of Object.entries(r))sR.has(e)?c["className"===e?"class":e]=t:i.has(e)||e in o.prototype?d[e]=t:c[e]=t;return e.useLayoutEffect(()=>{if(null!==l.current){for(let e in d)sk(l.current,e,r[e],a.current?a.current[e]:void 0,n);a.current=r}}),e.useLayoutEffect(()=>{l.current?.removeAttribute("defer-hydration")},[]),c.suppressHydrationWarning=!0,e.createElement(t,{...c,ref:e.useCallback(e=>{l.current=e,"function"==typeof s?s(e):null!==s&&(s.current=e)},[s])})});return s.displayName=r??o.name,s};function sO(e,t){return sE({...t,elementClass:e,react:T()})}let sI=o6`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;var sM=Object.defineProperty,sD=Object.getOwnPropertyDescriptor;let sA=o2`
	<template role="listbox">
		<slot></slot>
	</template>
`,s$=o6`
	${sI}

	:host {
		width: max-content;
		background-color: var(--vscode-menu-background);
		border: 1px solid var(--vscode-menu-border);
	}
`,sP=class extends tZ{};sP=((e,t,o,n)=>{for(var r,i=n>1?void 0:n?sD(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&sM(t,o,i),i})([tq({name:"menu-list",template:sA,styles:s$})],sP);var sN=Object.defineProperty,sz=Object.getOwnPropertyDescriptor,sH=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?sz(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&sN(t,o,i),i};let sL=o2`
	<template tabindex="${e=>e.isInteractive?"0":null}" ?disabled="${e=>e.disabled}">
		<slot></slot>
	</template>
`,sF=o6`
	${sI}

	:host {
		display: block;
		font-family: inherit;
		border: none;
		padding: 0 0.6rem;
		cursor: pointer;
		color: var(--vscode-menu-foreground);
		background-color: var(--vscode-menu-background);
		text-align: left;
		height: auto;
		line-height: 2.2rem;
	}

	:host([role='option']:hover) {
		color: var(--vscode-menu-selectionForeground);
		background-color: var(--vscode-menu-selectionBackground);
	}

	:host([disabled]) {
		pointer-events: none;
		cursor: default;
		opacity: 0.5;
	}

	:host([aria-selected='true']) {
		opacity: 1;
		color: var(--vscode-menu-selectionForeground);
		background-color: var(--vscode-menu-background);
	}
`,sW=class extends tZ{constructor(){super(...arguments),this.disabled=!1,this.role="option"}get isInteractive(){return!this.disabled&&"option"===this.role}};sH([tN({mode:"boolean"})],sW.prototype,"disabled",2),sH([tN],sW.prototype,"role",2),sH([tw],sW.prototype,"isInteractive",1),sW=sH([tq({name:"menu-item",template:sL,styles:sF})],sW);var sG=Object.defineProperty,sB=Object.getOwnPropertyDescriptor;let sU=o2`
	<template>
		<slot></slot>
	</template>
`,sV=o6`
	${sI}

	:host {
		display: block;
		text-transform: uppercase;
		font-size: 0.84em;
		line-height: 2.2rem;
		padding-left: 0.6rem;
		padding-right: 0.6rem;
		margin: 0px;
		color: var(--vscode-menu-foreground);
		opacity: 0.6;
		user-select: none;
	}
`,sj=class extends tZ{};sj=((e,t,o,n)=>{for(var r,i=n>1?void 0:n?sB(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&sG(t,o,i),i})([tq({name:"menu-label",template:sU,styles:sV})],sj);var sZ=Object.defineProperty,sq=Object.getOwnPropertyDescriptor;let sK=o2``,sY=o6`
	${sI}

	:host {
		display: block;
		height: 0;
		margin: 0.6rem;
		border-top: 0.1rem solid var(--vscode-menu-separatorBackground);
	}
`,sQ=class extends tZ{},sX=sO(sQ=((e,t,o,n)=>{for(var r,i=n>1?void 0:n?sq(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&sZ(t,o,i),i})([tq({name:"menu-divider",template:sK,styles:sY})],sQ),{tagName:"menu-divider"}),sJ=sO(sW,{tagName:"menu-item"}),s0=sO(sj,{tagName:"menu-label"}),s1=sO(sP,{tagName:"menu-list"});function s2(...e){return e.some(e=>(e?.length??0)>0)}function s5(e){return t=>t.nodeType===e}var s3=Object.defineProperty,s6=Object.getOwnPropertyDescriptor,s4=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?s6(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&s3(t,o,i),i};let s7=o2`
	<template role="combobox">
		<slot ${rL({property:"triggerNodes",filter:s5(Node.ELEMENT_NODE)})} name="trigger"></slot>
		<slot ${rL({property:"contentNodes",filter:s5(Node.ELEMENT_NODE)})} name="content"></slot>
	</template>
`,s9=o6`
	${sI}

	:host {
		position: relative;
	}

	slot[name='content']::slotted(*)::before {
		font: normal normal normal 14px/1 codicon;
		display: inline-block;
		text-decoration: none;
		text-rendering: auto;
		text-align: center;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;

		vertical-align: middle;
		line-height: 2rem;
		letter-spacing: normal;
		content: '\\ea76';
		position: absolute;
		top: 2px;
		right: 5px;
		cursor: pointer;
		pointer-events: all;
		z-index: 10001;
	}

	slot[name='content']::slotted(*) {
		position: absolute;
		top: 100%;
		z-index: 10000;
	}

	:host([position='left']) slot[name='content']::slotted(*) {
		left: 0;
	}

	:host([position='right']) slot[name='content']::slotted(*) {
		right: 0;
	}

	:host(:not([open])) slot[name='content']::slotted(*) {
		display: none;
	}
`,s8=class extends tZ{constructor(){super(...arguments),this.open=!1,this.position="left",this.isTrackingOutside=!1}get triggerNode(){if(s2(this.triggerNodes))return this.triggerNodes[0]}get contentNode(){if(s2(this.contentNodes))return this.contentNodes[0]}connectedCallback(){super.connectedCallback(),this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.addEventListener("click",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.removeEventListener("click",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}close(){this.open=!1,this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerNode)&&(this.open=!this.open,this.updateToggle())}updateToggle(){null!=this.triggerNode&&(this.triggerNode.ariaExpanded=this.open.toString()),this.open&&(null!=this.contentNode&&window.requestAnimationFrame(()=>{this.contentNode?.focus()}),this.trackOutside())}handleDocumentEvent(e){if(!1===this.open)return;let t=e.composedPath();t.includes(this)&&("click"!==e.type||'""'!==window.getComputedStyle(t[0],"::before").content)||this.close()}trackOutside(){!this.isTrackingOutside&&this.open&&(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1),null==this._webviewBlurEventHandler&&(this._webviewBlurEventHandler=()=>this.close()),window.addEventListener("webview-blur",this._webviewBlurEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0),null!=this._webviewBlurEventHandler&&(window.removeEventListener("webview-blur",this._webviewBlurEventHandler,!1),this._webviewBlurEventHandler=void 0))}};s4([tN({mode:"boolean"})],s8.prototype,"open",2),s4([tN()],s8.prototype,"position",2),s4([ty],s8.prototype,"triggerNodes",2),s4([ty],s8.prototype,"contentNodes",2),s4([tw],s8.prototype,"triggerNode",1),s4([tw],s8.prototype,"contentNode",1);let ae=sO(s8=s4([tq({name:"pop-menu",template:s7,styles:s9})],s8),{tagName:"pop-menu"});var at=Object.defineProperty,ao=Object.getOwnPropertyDescriptor,an=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?ao(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&at(t,o,i),i};let ar=o2`
	<template>
		<div class="top" ?hidden="${e=>!e.hasTopNodes}">
			<slot ${rL("typeNodes")} name="type"></slot>
			<slot ${rL("actionsNodes")} name="actions"></slot>
		</div>
		<div class="heading" ?hidden="${e=>!e.hasHeadingNodes}">
			<slot ${rL("headingNodes")} name="heading"></slot>
		</div>
		<div class="content"><slot></slot></div>
		${iz(e=>e.caret,o2`<span class="caret"></span>`)}
	</template>
`,ai=o6`
	${sI}

	:host {
		position: absolute;
		width: var(--popover-width, 100%);
		max-width: var(--popover-max-width, 30rem);
		padding: 1.2rem 1.2rem 1.2rem;
		/* update with a standardized z-index */
		z-index: 10;

		background-color: var(--popover-bg);
		box-shadow: 0 0.3rem 0.3rem 0 var(--vscode-widget-shadow);

		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	:host([caret]:not([placement~='bottom'])) {
		transform: translateY(0.8rem);
	}

	:host([caret][placement~='bottom']) {
		transform: translateY(-0.8rem);
	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		opacity: 0.5;
		margin-top: -0.4rem;
	}

	.heading {
		font-weight: 600;
	}

	.caret {
		position: absolute;
		width: 0;
		height: 0;
		border-left: 0.8rem solid transparent;
		border-right: 0.8rem solid transparent;
		border-bottom: 0.8rem solid var(--popover-bg);
	}

	:host(:not([placement~='bottom'])) .caret {
		bottom: 100%;
	}

	:host([placement~='bottom']) .caret {
		top: 100%;
		transform: rotate(180deg);
	}

	:host(:not([placement~='end'])) .caret {
		left: 1.2rem;
	}

	:host([placement~='end']) .caret {
		right: 1.2rem;
	}
`,as=class extends tZ{constructor(){super(...arguments),this.open=!1,this.caret=!0}get hasTopNodes(){return s2(this.typeNodes,this.actionsNodes)}get hasHeadingNodes(){return s2(this.headingNodes)}};an([tN({mode:"boolean"})],as.prototype,"open",2),an([tN({mode:"boolean"})],as.prototype,"caret",2),an([tN],as.prototype,"placement",2),an([ty],as.prototype,"typeNodes",2),an([ty],as.prototype,"actionsNodes",2),an([ty],as.prototype,"headingNodes",2),an([tw],as.prototype,"hasTopNodes",1),an([tw],as.prototype,"hasHeadingNodes",1);let aa=sO(as=an([tq({name:"pop-over",template:ar,styles:ai})],as),{tagName:"pop-over"}),al=globalThis,ac=al.ShadowRoot&&(void 0===al.ShadyCSS||al.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ad=Symbol(),ah=new WeakMap;class au{constructor(e,t,o){if(this._$cssResult$=!0,o!==ad)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ac&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=ah.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&ah.set(t,e))}return e}toString(){return this.cssText}}let ap=e=>new au("string"==typeof e?e:e+"",void 0,ad),af=(e,...t)=>new au(1===e.length?e[0]:t.reduce((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]),e,ad),am=(e,t)=>{if(ac)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),n=al.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=o.cssText,e.appendChild(t)}},ag=ac?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return ap(t)})(e):e,{is:ab,defineProperty:av,getOwnPropertyDescriptor:ay,getOwnPropertyNames:aw,getOwnPropertySymbols:aC,getPrototypeOf:aS}=Object,ax=globalThis,a_=ax.trustedTypes,aR=a_?a_.emptyScript:"",aT=ax.reactiveElementPolyfillSupport,ak=(e,t)=>e,aE={toAttribute(e,t){switch(t){case Boolean:e=e?aR:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},aO=(e,t)=>!ab(e,t),aI={attribute:!0,type:String,converter:aE,reflect:!1,hasChanged:aO};Symbol.metadata??=Symbol("metadata"),ax.litPropertyMetadata??=new WeakMap;class aM extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=aI){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&av(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){let{get:n,set:r}=ay(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){let i=n?.call(this);r.call(this,t),this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??aI}static _$Ei(){if(this.hasOwnProperty(ak("elementProperties")))return;let e=aS(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ak("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ak("properties"))){let e=this.properties;for(let t of[...aw(e),...aC(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(ag(o));else void 0!==e&&t.push(ag(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return am(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){let o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){let r=(void 0!==o.converter?.toAttribute?o.converter:aE).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){let o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){let e=o.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:aE;this._$Em=n,this[n]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,n=!1,r){if(void 0!==e){if(!((o??=this.constructor.getPropertyOptions(e)).hasChanged??aO)(n?r:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$E_?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}}aM.elementStyles=[],aM.shadowRootOptions={mode:"open"},aM[ak("elementProperties")]=new Map,aM[ak("finalized")]=new Map,aT?.({ReactiveElement:aM}),(ax.reactiveElementVersions??=[]).push("2.0.2");let aD=globalThis,aA=aD.trustedTypes,a$=aA?aA.createPolicy("lit-html",{createHTML:e=>e}):void 0,aP="$lit$",aN=`lit$${(Math.random()+"").slice(9)}$`,az="?"+aN,aH=`<${az}>`,aL=document,aF=()=>aL.createComment(""),aW=e=>null===e||"object"!=typeof e&&"function"!=typeof e,aG=Array.isArray,aB=e=>aG(e)||"function"==typeof e?.[Symbol.iterator],aU="[ 	\n\f\r]",aV=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,aj=/-->/g,aZ=/>/g,aq=RegExp(`>|${aU}(?:([^\\s"'>=/]+)(${aU}*=${aU}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),aK=/'/g,aY=/"/g,aQ=/^(?:script|style|textarea|title)$/i,aX=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),aJ=aX(1),a0=(aX(2),Symbol.for("lit-noChange")),a1=Symbol.for("lit-nothing"),a2=new WeakMap,a5=aL.createTreeWalker(aL,129);function a3(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a$?a$.createHTML(t):t}let a6=(e,t)=>{let o=e.length-1,n=[],r,i=2===t?"<svg>":"",s=aV;for(let t=0;t<o;t++){let o=e[t],a,l,c=-1,d=0;for(;d<o.length&&(s.lastIndex=d,null!==(l=s.exec(o)));)d=s.lastIndex,s===aV?"!--"===l[1]?s=aj:void 0!==l[1]?s=aZ:void 0!==l[2]?(aQ.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=aq):void 0!==l[3]&&(s=aq):s===aq?">"===l[0]?(s=r??aV,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?aq:'"'===l[3]?aY:aK):s===aY||s===aK?s=aq:s===aj||s===aZ?s=aV:(s=aq,r=void 0);let h=s===aq&&e[t+1].startsWith("/>")?" ":"";i+=s===aV?o+aH:c>=0?(n.push(a),o.slice(0,c)+aP+o.slice(c)+aN+h):o+aN+(-2===c?t:h)}return[a3(e,i+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class a4{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let r=0,i=0,s=e.length-1,a=this.parts,[l,c]=a6(e,t);if(this.el=a4.createElement(l,o),a5.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=a5.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith(aP)){let t=c[i++],o=n.getAttribute(e).split(aN),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:r,name:s[2],strings:o,ctor:"."===s[1]?lt:"?"===s[1]?lo:"@"===s[1]?ln:le}),n.removeAttribute(e)}else e.startsWith(aN)&&(a.push({type:6,index:r}),n.removeAttribute(e));if(aQ.test(n.tagName)){let e=n.textContent.split(aN),t=e.length-1;if(t>0){n.textContent=aA?aA.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],aF()),a5.nextNode(),a.push({type:2,index:++r});n.append(e[t],aF())}}}else if(8===n.nodeType){if(n.data===az)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=n.data.indexOf(aN,e+1));)a.push({type:7,index:r}),e+=aN.length-1}}r++}}static createElement(e,t){let o=aL.createElement("template");return o.innerHTML=e,o}}function a7(e,t,o=e,n){if(t===a0)return t;let r=void 0!==n?o._$Co?.[n]:o._$Cl,i=aW(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),void 0===i?r=void 0:(r=new i(e))._$AT(e,o,n),void 0!==n?(o._$Co??=[])[n]=r:o._$Cl=r),void 0!==r&&(t=a7(e,r._$AS(e,t.values),r,n)),t}class a9{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??aL).importNode(t,!0);a5.currentNode=n;let r=a5.nextNode(),i=0,s=0,a=o[0];for(;void 0!==a;){if(i===a.index){let t;2===a.type?t=new a8(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new lr(r,this,e)),this._$AV.push(t),a=o[++s]}i!==a?.index&&(r=a5.nextNode(),i++)}return a5.currentNode=aL,n}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class a8{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=a1,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){aW(e=a7(this,e,t))?e===a1||null==e||""===e?(this._$AH!==a1&&this._$AR(),this._$AH=a1):e!==this._$AH&&e!==a0&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):aB(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==a1&&aW(this._$AH)?this._$AA.nextSibling.data=e:this.$(aL.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=a4.createElement(a3(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{let e=new a9(n,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=a2.get(e.strings);return void 0===t&&a2.set(e.strings,t=new a4(e)),t}T(e){aG(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,n=0;for(let r of e)n===t.length?t.push(o=new a8(this.k(aF()),this.k(aF()),this,this.options)):o=t[n],o._$AI(r),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class le{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,r){this.type=1,this._$AH=a1,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=a1}_$AI(e,t=this,o,n){let r=this.strings,i=!1;if(void 0===r)(i=!aW(e=a7(this,e,t,0))||e!==this._$AH&&e!==a0)&&(this._$AH=e);else{let n,s;let a=e;for(e=r[0],n=0;n<r.length-1;n++)(s=a7(this,a[o+n],t,n))===a0&&(s=this._$AH[n]),i||=!aW(s)||s!==this._$AH[n],s===a1?e=a1:e!==a1&&(e+=(s??"")+r[n+1]),this._$AH[n]=s}i&&!n&&this.O(e)}O(e){e===a1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class lt extends le{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===a1?void 0:e}}class lo extends le{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==a1)}}class ln extends le{constructor(e,t,o,n,r){super(e,t,o,n,r),this.type=5}_$AI(e,t=this){if((e=a7(this,e,t,0)??a1)===a0)return;let o=this._$AH,n=e===a1&&o!==a1||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==a1&&(o===a1||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class lr{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){a7(this,e)}}let li=aD.litHtmlPolyfillSupport;li?.(a4,a8),(aD.litHtmlVersions??=[]).push("3.1.0");let ls=(e,t,o)=>{let n=o?.renderBefore??t,r=n._$litPart$;if(void 0===r){let e=o?.renderBefore??null;n._$litPart$=r=new a8(t.insertBefore(aF(),e),e,void 0,o??{})}return r._$AI(e),r};class la extends aM{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ls(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return a0}}la._$litElement$=!0,la.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:la});let ll=globalThis.litElementPolyfillSupport;ll?.({LitElement:la}),(globalThis.litElementVersions??=[]).push("4.0.2");let lc=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ld={attribute:!0,type:String,converter:aE,reflect:!1,hasChanged:aO},lh=(e=ld,t,o)=>{let{kind:n,metadata:r}=o,i=globalThis.litPropertyMetadata.get(r);if(void 0===i&&globalThis.litPropertyMetadata.set(r,i=new Map),i.set(o.name,e),"accessor"===n){let{name:n}=o;return{set(o){let r=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,r,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){let{name:n}=o;return function(o){let r=this[n];t.call(this,o),this.requestUpdate(n,r,e)}}throw Error("Unsupported decorator location: "+n)};function lu(e){return(t,o)=>"object"==typeof o?lh(e,t,o):((e,t,o)=>{let n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}let lp=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,lf=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,lm=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],lg=new Map,lb=new Map;function lv(e,i){let s=("number"==typeof e?e:e.getTime())-new Date().getTime();for(let[e,a,l,c]of lm){let d=Math.abs(s);if(d>=a||1e3===a){if(i){if(null==t&&(t=null!=r?r.resolvedOptions().locale:null!=n?n.resolvedOptions().locale:(r=new Intl.RelativeTimeFormat(o,{localeMatcher:"best fit",numeric:"always",style:"narrow"})).resolvedOptions().locale),"en"===t||t?.startsWith("en-")){let e=Math.round(d/l);return`${e}${c}`}return null==r&&(r=new Intl.RelativeTimeFormat(o,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),r.format(Math.round(s/l),e)}return null==n&&(n=new Intl.RelativeTimeFormat(o,{localeMatcher:"best fit",numeric:"auto",style:"long"})),n.format(Math.round(s/l),e)}}return""}function ly(e,t,n,r=!0){t=t??void 0;let i=`${n??""}:${t}`,s=lg.get(i);if(null==s){let e;let a=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=lf.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(lp))if(null!=t)for(let e in t){let n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":"DD"===n?o.day="2-digit":o.day="numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);e=null==n?o:"system"===n?void 0:[n],s=new Intl.DateTimeFormat(e,a),r&&lg.set(i,s)}if(null==t||lf.test(t))return s.format(e);let a=s.formatToParts(e);return t.replace(lp,(t,i,s,l,c,d,h,u,p,f,m,g,b,v,y)=>{if(null!=i)return i.substring(1,i.length-1);for(let t in y){let i=y[t];if(null==i)continue;let s=a.find(e=>e.type===t);if("Do"===i&&s?.type==="day")return function(e){let t=e%100;return`${e}${lw[(t-20)%10]??lw[t]??"th"}`}(Number(s.value));if("a"===i&&s?.type==="dayPeriod"){let t=(function(e){let t=`${n??""}:time:${e}`,i=lg.get(t);if(null==i){let s;s=null==n?o:"system"===n?void 0:[n],i=new Intl.DateTimeFormat(s,{localeMatcher:"best fit",timeStyle:e}),r&&lg.set(t,i)}return i})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return` ${(t??s)?.value??""}`}return s?.value??""}return""})}let lw=["th","st","nd","rd"];function lC(e,t,n){null==t&&(t="decimal");let r=`${n??""}:${t}`,i=lb.get(r);if(null==i){let e;let s={localeMatcher:"best fit",style:t};e=null==n?o:"system"===n?void 0:[n],i=new Intl.NumberFormat(e,s),lb.set(r,i)}return i.format(e)}var lS=((w=lS||{}).Free="free",w.FreePlus="free+",w.Pro="pro",w.Teams="teams",w.Enterprise="enterprise",w),lx=((C=lx||{})[C.VerificationRequired=-1]="VerificationRequired",C[C.Free=0]="Free",C[C.FreeInPreviewTrial=1]="FreeInPreviewTrial",C[C.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",C[C.FreePlusInTrial=3]="FreePlusInTrial",C[C.FreePlusTrialExpired=4]="FreePlusTrialExpired",C[C.Paid=5]="Paid",C);function l_(e){switch(e){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function lR(e){return null!=e&&(5===e||1===e||3===e)}function lT(e){return null!=e&&(1===e||3===e)}af`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
`;let lk=af`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,lE=af`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;af`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${lk}
	}
	a:hover {
		text-decoration: underline;
	}
`,af`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}
`;var lO=Object.defineProperty,lI=Object.getOwnPropertyDescriptor,lM=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?lI(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&lO(t,o,i),i};let lD=class extends la{constructor(){super(...arguments),this.full=!1,this.disabled=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.setAttribute("aria-disabled",this.disabled.toString()))}render(){let e=aJ`<slot></slot>`;return null!=this.href?aJ`<a href=${this.href}>${e}</a>`:e}};lD.styles=[lE,af`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem 1.1rem;
				--button-compact-padding: 0.4rem 0.4rem;
				--button-line-height: 1.694;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius);
			}

			:host(:not([href])) {
				padding: var(--button-padding);
			}

			:host([href]) > a {
				display: inline-block;
				padding: var(--button-padding);

				color: inherit;
				text-decoration: none;

				width: 100%;
				height: 100%;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus) {
				${lk}
			}

			:host([full]) {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-padding: 0.4rem;
				--button-line-height: 1.6;
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) {
				padding: var(--button-compact-padding);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}
		`],lM([lu({type:Boolean,reflect:!0})],lD.prototype,"full",2),lM([lu({type:Boolean,reflect:!0})],lD.prototype,"disabled",2),lM([lu({reflect:!0})],lD.prototype,"density",2),lM([lu()],lD.prototype,"href",2),lM([lu({reflect:!0})],lD.prototype,"role",1),lM([lu()],lD.prototype,"appearance",2),lM([lu({type:Number,reflect:!0})],lD.prototype,"tabIndex",2),lD=lM([lc("gl-button")],lD);let lA=af`
	a {
		color: var(--link-foreground);
		text-decoration: var(--link-decoration-default, none);
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`;var l$=Object.defineProperty,lP=Object.getOwnPropertyDescriptor,lN=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?lP(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&l$(t,o,i),i};let lz=class extends la{render(){if(null==this.state){this.hidden=!0;return}this.hidden=!1;let e=(this.appearance??"alert")==="alert"?"alert":a1;switch(this.state){case lx.VerificationRequired:return aJ`
					<p>You must verify your email before you can continue.</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.resendVerification"
						>Resend verification email</gl-button
					>
					<gl-button appearance="${e}" href="command:gitlens.plus.validate"
						>Refresh verification status</gl-button
					>
				`;case lx.Free:return aJ`
					<gl-button appearance="${e}" href="command:gitlens.plus.startPreviewTrial"
						>Preview Now</gl-button
					>
					<p>
						Preview Pro for 3 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a> to start a full 7-day GitKraken trial.
					</p>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case lx.FreePreviewTrialExpired:return aJ`
					<p>
						Your 3-day Pro preview has ended, start a free GitKraken trial to get an additional 7 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a>.
					</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.loginOrSignUp"
						>Start Free GitKraken Trial</gl-button
					>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case lx.FreePlusTrialExpired:return aJ`
					<p>
						Your GitKraken trial has ended, please upgrade to continue to use this on privately hosted
						repos.
					</p>
					<p style="text-align: center;">
						Special: <b>50% off GitKraken's suite of dev tools</b><br />
						1st & 2nd seats only $4/month each
					</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.purchase"
						>Upgrade to Pro</gl-button
					>
					<p>✨ A paid plan is required to use this on privately hosted repos.</p>
				`}}};lz.styles=[lA,af`
			:host {
				container-type: inline-size;
			}

			:host([appearance='welcome']) gl-button {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='welcome']) gl-button {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			:host-context([appearance='alert']) p:first-child {
				margin-top: 0;
			}

			:host-context([appearance='alert']) p:last-child {
				margin-bottom: 0;
			}
		`],lN([lu({type:String})],lz.prototype,"appearance",2),lN([lu({attribute:!1,type:Number})],lz.prototype,"state",2),lz=lN([lc("gk-feature-gate-plus-state")],lz);var lH=Object.defineProperty,lL=Object.getOwnPropertyDescriptor,lF=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?lL(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&lH(t,o,i),i};let lW=class extends la{render(){if(!this.visible||null!=this.state&&lR(this.state)){this.hidden=!0;return}let e=this.appearance??(document.body.getAttribute("data-placement")??"editor")==="editor"?"alert":"welcome";return this.hidden=!1,aJ`
			<section>
				<slot>
					<slot name="feature" hidden=${this.state===lx.Free?a1:""}></slot>
				</slot>
				<gk-feature-gate-plus-state appearance=${e} .state=${this.state}></gk-feature-gate-plus-state>
			</section>
		`}};lW.styles=af`
		:host {
			--background: var(--vscode-sideBar-background);
			--foreground: var(--vscode-sideBar-foreground);
			--link-foreground: var(--vscode-textLink-foreground);
			--link-foreground-active: var(--vscode-textLink-activeForeground);

			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			overflow: auto;
			z-index: 100;

			box-sizing: border-box;
		}

		:host-context(body[data-placement='editor']),
		:host([appearance='alert']) {
			--background: transparent;
			--foreground: var(--vscode-editor-foreground);

			backdrop-filter: blur(3px) saturate(0.8);
			padding: 0 2rem;
		}

		::slotted(p) {
			margin: revert !important;
		}

		::slotted(p:first-child) {
			margin-top: 0 !important;
		}

		section {
			--section-foreground: var(--foreground);
			--section-background: var(--background);
			--section-border-color: transparent;

			display: flex;
			flex-direction: column;
			padding: 0 2rem 1.3rem 2rem;
			background: var(--section-background);
			color: var(--section-foreground);
			border: 1px solid var(--section-border-color);

			height: min-content;
		}

		:host-context(body[data-placement='editor']) section,
		:host([appearance='alert']) section {
			--section-foreground: var(--color-alert-foreground);
			--section-background: var(--color-alert-infoBackground);
			--section-border-color: var(--color-alert-infoBorder);

			--link-decoration-default: underline;
			--link-foreground: var(--vscode-foreground);
			--link-foreground-active: var(--vscode-foreground);

			border-radius: 0.3rem;
			max-width: 600px;
			max-height: min-content;
			margin: 0.2rem auto;
			padding: 1.3rem;
		}

		:host-context(body[data-placement='editor']) section ::slotted(gl-button),
		:host([appearance='alert']) section ::slotted(gl-button) {
			display: block;
			margin-left: auto;
			margin-right: auto;
		}
	`,lF([lu()],lW.prototype,"appearance",2),lF([lu({attribute:!1,type:Number})],lW.prototype,"state",2),lF([lu({type:Boolean})],lW.prototype,"visible",2);let lG=sO(lW=lF([lc("gk-feature-gate")],lW),{tagName:"gk-feature-gate"});var lB=Object.defineProperty,lU=Object.getOwnPropertyDescriptor,lV=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?lU(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&lB(t,o,i),i};let lj=class extends la{constructor(){super(...arguments),this.placement="top end"}render(){let e=lR(this.subscription?.state),t=lT(this.subscription?.state);return aJ`
			<span class="badge-container">
				<span class="badge ${e?"active":"inactive"}"
					>${t?aJ`<span class="badge-trial">Trial</span>`:""}✨</span
				>
				<pop-over .placement=${this.placement} class="badge-popover">
					<span slot="heading"
						>${function(e,t){switch(e){case 4:return l_("free+");case 1:return`${l_("pro")} (Trial)`;case 3:return`${l_(t??"pro")} (Trial)`;case -1:return"GitKraken (Unverified)";case 5:return l_(t??"pro");default:return"GitKraken"}}(this.subscription?.state,this.subscription?.plan.effective.id)}${this.trialHtml}</span
					>
					${this.footnoteHtml}
				</pop-over>
			</span>
		`}get trialHtml(){var e;if(!lT(this.subscription?.state))return a1;let t=(null!=(e=this.subscription.plan.effective.expiresOn)?function(e,t,o){let n=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime());switch(o){case"days":return Math.floor(n/864e5);case"hours":return Math.floor(n/36e5);case"minutes":return Math.floor(n/6e4);case"seconds":return Math.floor(n/1e3);default:return n}}(Date.now(),new Date(e),"days"):void 0)??0;return aJ`<span class="badge-trial-left">${t<1?"<1 day":eK("day",t)} left</span>`}get footnoteHtml(){switch(this.subscription?.state){case lx.VerificationRequired:case lx.Free:case lx.FreePreviewTrialExpired:return aJ`<span class="badge-footnote"
					>✨ Requires a trial or paid plan for use on privately hosted repos.</span
				>`;case lx.FreePlusTrialExpired:case lx.FreeInPreviewTrial:case lx.FreePlusInTrial:return aJ`<span class="badge-footnote"
					>✨ Requires a paid plan for use on privately hosted repos.</span
				>`;case lx.Paid:return aJ`<span class="badge-footnote"
					>You have access to ✨ features on privately hosted repos and ☁️ features based on your plan.</span
				>`;default:return a1}}};lj.styles=[lE,af`
			:host {
				position: relative;
			}

			:host(:focus) {
				${lk}
			}

			.badge-container {
				position: relative;
			}

			.badge {
				cursor: help;
			}

			.badge.inactive {
				filter: grayscale(100%);
			}

			.badge-popover {
				width: max-content;
				top: 100%;
				text-align: left;
			}

			.badge-footnote {
				white-space: break-spaces;
			}

			.badge-trial {
				font-size: smaller;
				font-weight: 700;
				margin-right: 0.5rem;
				text-transform: uppercase;
				white-space: nowrap;
			}

			.badge-trial-left {
				font-weight: 400;
				opacity: 0.6;
				margin-left: 1rem;
			}

			.badge:not(:hover) ~ .badge-popover {
				display: none;
			}

			:host(:not([placement~='end'])) .badge-popover {
				left: 0;
			}

			:host([placement~='end']) .badge-popover {
				right: 0;
			}
		`],lV([lu({reflect:!0})],lj.prototype,"placement",2),lV([lu({attribute:!1})],lj.prototype,"subscription",2);let lZ=sO(lj=lV([lc("gk-feature-gate-badge")],lj),{tagName:"gk-feature-gate-badge"}),lq={toView:function(e){return e.toString()},fromView:function(e){return parseInt(e,10)}};var lK=Object.defineProperty,lY=Object.getOwnPropertyDescriptor,lQ=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?lY(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&lK(t,o,i),i};let lX=class extends la{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};lX.styles=af`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: text-bottom;
			letter-spacing: normal;
		}

		:host([icon='add']):before {
			content: '\\ea60';
		}
		:host([icon='plus']):before {
			content: '\\ea60';
		}
		:host([icon='gist-new']):before {
			content: '\\ea60';
		}
		:host([icon='repo-create']):before {
			content: '\\ea60';
		}
		:host([icon='lightbulb']):before {
			content: '\\ea61';
		}
		:host([icon='light-bulb']):before {
			content: '\\ea61';
		}
		:host([icon='repo']):before {
			content: '\\ea62';
		}
		:host([icon='repo-delete']):before {
			content: '\\ea62';
		}
		:host([icon='gist-fork']):before {
			content: '\\ea63';
		}
		:host([icon='repo-forked']):before {
			content: '\\ea63';
		}
		:host([icon='git-pull-request']):before {
			content: '\\ea64';
		}
		:host([icon='git-pull-request-abandoned']):before {
			content: '\\ea64';
		}
		:host([icon='record-keys']):before {
			content: '\\ea65';
		}
		:host([icon='keyboard']):before {
			content: '\\ea65';
		}
		:host([icon='tag']):before {
			content: '\\ea66';
		}
		:host([icon='tag-add']):before {
			content: '\\ea66';
		}
		:host([icon='tag-remove']):before {
			content: '\\ea66';
		}
		:host([icon='person']):before {
			content: '\\ea67';
		}
		:host([icon='person-follow']):before {
			content: '\\ea67';
		}
		:host([icon='person-outline']):before {
			content: '\\ea67';
		}
		:host([icon='person-filled']):before {
			content: '\\ea67';
		}
		:host([icon='git-branch']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-create']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-delete']):before {
			content: '\\ea68';
		}
		:host([icon='source-control']):before {
			content: '\\ea68';
		}
		:host([icon='mirror']):before {
			content: '\\ea69';
		}
		:host([icon='mirror-public']):before {
			content: '\\ea69';
		}
		:host([icon='star']):before {
			content: '\\ea6a';
		}
		:host([icon='star-add']):before {
			content: '\\ea6a';
		}
		:host([icon='star-delete']):before {
			content: '\\ea6a';
		}
		:host([icon='star-empty']):before {
			content: '\\ea6a';
		}
		:host([icon='comment']):before {
			content: '\\ea6b';
		}
		:host([icon='comment-add']):before {
			content: '\\ea6b';
		}
		:host([icon='alert']):before {
			content: '\\ea6c';
		}
		:host([icon='warning']):before {
			content: '\\ea6c';
		}
		:host([icon='search']):before {
			content: '\\ea6d';
		}
		:host([icon='search-save']):before {
			content: '\\ea6d';
		}
		:host([icon='log-out']):before {
			content: '\\ea6e';
		}
		:host([icon='sign-out']):before {
			content: '\\ea6e';
		}
		:host([icon='log-in']):before {
			content: '\\ea6f';
		}
		:host([icon='sign-in']):before {
			content: '\\ea6f';
		}
		:host([icon='eye']):before {
			content: '\\ea70';
		}
		:host([icon='eye-unwatch']):before {
			content: '\\ea70';
		}
		:host([icon='eye-watch']):before {
			content: '\\ea70';
		}
		:host([icon='circle-filled']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-dot']):before {
			content: '\\ea71';
		}
		:host([icon='close-dirty']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint-disabled']):before {
			content: '\\ea71';
		}
		:host([icon='debug-hint']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-square']):before {
			content: '\\ea72';
		}
		:host([icon='edit']):before {
			content: '\\ea73';
		}
		:host([icon='pencil']):before {
			content: '\\ea73';
		}
		:host([icon='info']):before {
			content: '\\ea74';
		}
		:host([icon='issue-opened']):before {
			content: '\\ea74';
		}
		:host([icon='gist-private']):before {
			content: '\\ea75';
		}
		:host([icon='git-fork-private']):before {
			content: '\\ea75';
		}
		:host([icon='lock']):before {
			content: '\\ea75';
		}
		:host([icon='mirror-private']):before {
			content: '\\ea75';
		}
		:host([icon='close']):before {
			content: '\\ea76';
		}
		:host([icon='remove-close']):before {
			content: '\\ea76';
		}
		:host([icon='x']):before {
			content: '\\ea76';
		}
		:host([icon='repo-sync']):before {
			content: '\\ea77';
		}
		:host([icon='sync']):before {
			content: '\\ea77';
		}
		:host([icon='clone']):before {
			content: '\\ea78';
		}
		:host([icon='desktop-download']):before {
			content: '\\ea78';
		}
		:host([icon='beaker']):before {
			content: '\\ea79';
		}
		:host([icon='microscope']):before {
			content: '\\ea79';
		}
		:host([icon='vm']):before {
			content: '\\ea7a';
		}
		:host([icon='device-desktop']):before {
			content: '\\ea7a';
		}
		:host([icon='file']):before {
			content: '\\ea7b';
		}
		:host([icon='file-text']):before {
			content: '\\ea7b';
		}
		:host([icon='more']):before {
			content: '\\ea7c';
		}
		:host([icon='ellipsis']):before {
			content: '\\ea7c';
		}
		:host([icon='kebab-horizontal']):before {
			content: '\\ea7c';
		}
		:host([icon='mail-reply']):before {
			content: '\\ea7d';
		}
		:host([icon='reply']):before {
			content: '\\ea7d';
		}
		:host([icon='organization']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-filled']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-outline']):before {
			content: '\\ea7e';
		}
		:host([icon='new-file']):before {
			content: '\\ea7f';
		}
		:host([icon='file-add']):before {
			content: '\\ea7f';
		}
		:host([icon='new-folder']):before {
			content: '\\ea80';
		}
		:host([icon='file-directory-create']):before {
			content: '\\ea80';
		}
		:host([icon='trash']):before {
			content: '\\ea81';
		}
		:host([icon='trashcan']):before {
			content: '\\ea81';
		}
		:host([icon='history']):before {
			content: '\\ea82';
		}
		:host([icon='clock']):before {
			content: '\\ea82';
		}
		:host([icon='folder']):before {
			content: '\\ea83';
		}
		:host([icon='file-directory']):before {
			content: '\\ea83';
		}
		:host([icon='symbol-folder']):before {
			content: '\\ea83';
		}
		:host([icon='logo-github']):before {
			content: '\\ea84';
		}
		:host([icon='mark-github']):before {
			content: '\\ea84';
		}
		:host([icon='github']):before {
			content: '\\ea84';
		}
		:host([icon='terminal']):before {
			content: '\\ea85';
		}
		:host([icon='console']):before {
			content: '\\ea85';
		}
		:host([icon='repl']):before {
			content: '\\ea85';
		}
		:host([icon='zap']):before {
			content: '\\ea86';
		}
		:host([icon='symbol-event']):before {
			content: '\\ea86';
		}
		:host([icon='error']):before {
			content: '\\ea87';
		}
		:host([icon='stop']):before {
			content: '\\ea87';
		}
		:host([icon='variable']):before {
			content: '\\ea88';
		}
		:host([icon='symbol-variable']):before {
			content: '\\ea88';
		}
		:host([icon='array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-module']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-package']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-namespace']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-object']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-method']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-function']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-constructor']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-boolean']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-null']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-numeric']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-number']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-structure']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-struct']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-type-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-key']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-text']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-reference']):before {
			content: '\\ea94';
		}
		:host([icon='go-to-file']):before {
			content: '\\ea94';
		}
		:host([icon='symbol-enum']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-value']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-ruler']):before {
			content: '\\ea96';
		}
		:host([icon='symbol-unit']):before {
			content: '\\ea96';
		}
		:host([icon='activate-breakpoints']):before {
			content: '\\ea97';
		}
		:host([icon='archive']):before {
			content: '\\ea98';
		}
		:host([icon='arrow-both']):before {
			content: '\\ea99';
		}
		:host([icon='arrow-down']):before {
			content: '\\ea9a';
		}
		:host([icon='arrow-left']):before {
			content: '\\ea9b';
		}
		:host([icon='arrow-right']):before {
			content: '\\ea9c';
		}
		:host([icon='arrow-small-down']):before {
			content: '\\ea9d';
		}
		:host([icon='arrow-small-left']):before {
			content: '\\ea9e';
		}
		:host([icon='arrow-small-right']):before {
			content: '\\ea9f';
		}
		:host([icon='arrow-small-up']):before {
			content: '\\eaa0';
		}
		:host([icon='arrow-up']):before {
			content: '\\eaa1';
		}
		:host([icon='bell']):before {
			content: '\\eaa2';
		}
		:host([icon='bold']):before {
			content: '\\eaa3';
		}
		:host([icon='book']):before {
			content: '\\eaa4';
		}
		:host([icon='bookmark']):before {
			content: '\\eaa5';
		}
		:host([icon='debug-breakpoint-conditional-unverified']):before {
			content: '\\eaa6';
		}
		:host([icon='debug-breakpoint-conditional']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-conditional-disabled']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-data-unverified']):before {
			content: '\\eaa8';
		}
		:host([icon='debug-breakpoint-data']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-data-disabled']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-log-unverified']):before {
			content: '\\eaaa';
		}
		:host([icon='debug-breakpoint-log']):before {
			content: '\\eaab';
		}
		:host([icon='debug-breakpoint-log-disabled']):before {
			content: '\\eaab';
		}
		:host([icon='briefcase']):before {
			content: '\\eaac';
		}
		:host([icon='broadcast']):before {
			content: '\\eaad';
		}
		:host([icon='browser']):before {
			content: '\\eaae';
		}
		:host([icon='bug']):before {
			content: '\\eaaf';
		}
		:host([icon='calendar']):before {
			content: '\\eab0';
		}
		:host([icon='case-sensitive']):before {
			content: '\\eab1';
		}
		:host([icon='check']):before {
			content: '\\eab2';
		}
		:host([icon='checklist']):before {
			content: '\\eab3';
		}
		:host([icon='chevron-down']):before {
			content: '\\eab4';
		}
		:host([icon='chevron-left']):before {
			content: '\\eab5';
		}
		:host([icon='chevron-right']):before {
			content: '\\eab6';
		}
		:host([icon='chevron-up']):before {
			content: '\\eab7';
		}
		:host([icon='chrome-close']):before {
			content: '\\eab8';
		}
		:host([icon='chrome-maximize']):before {
			content: '\\eab9';
		}
		:host([icon='chrome-minimize']):before {
			content: '\\eaba';
		}
		:host([icon='chrome-restore']):before {
			content: '\\eabb';
		}
		:host([icon='circle-outline']):before {
			content: '\\eabc';
		}
		:host([icon='debug-breakpoint-unverified']):before {
			content: '\\eabc';
		}
		:host([icon='circle-slash']):before {
			content: '\\eabd';
		}
		:host([icon='circuit-board']):before {
			content: '\\eabe';
		}
		:host([icon='clear-all']):before {
			content: '\\eabf';
		}
		:host([icon='clippy']):before {
			content: '\\eac0';
		}
		:host([icon='close-all']):before {
			content: '\\eac1';
		}
		:host([icon='cloud-download']):before {
			content: '\\eac2';
		}
		:host([icon='cloud-upload']):before {
			content: '\\eac3';
		}
		:host([icon='code']):before {
			content: '\\eac4';
		}
		:host([icon='collapse-all']):before {
			content: '\\eac5';
		}
		:host([icon='color-mode']):before {
			content: '\\eac6';
		}
		:host([icon='comment-discussion']):before {
			content: '\\eac7';
		}
		:host([icon='credit-card']):before {
			content: '\\eac9';
		}
		:host([icon='dash']):before {
			content: '\\eacc';
		}
		:host([icon='dashboard']):before {
			content: '\\eacd';
		}
		:host([icon='database']):before {
			content: '\\eace';
		}
		:host([icon='debug-continue']):before {
			content: '\\eacf';
		}
		:host([icon='debug-disconnect']):before {
			content: '\\ead0';
		}
		:host([icon='debug-pause']):before {
			content: '\\ead1';
		}
		:host([icon='debug-restart']):before {
			content: '\\ead2';
		}
		:host([icon='debug-start']):before {
			content: '\\ead3';
		}
		:host([icon='debug-step-into']):before {
			content: '\\ead4';
		}
		:host([icon='debug-step-out']):before {
			content: '\\ead5';
		}
		:host([icon='debug-step-over']):before {
			content: '\\ead6';
		}
		:host([icon='debug-stop']):before {
			content: '\\ead7';
		}
		:host([icon='debug']):before {
			content: '\\ead8';
		}
		:host([icon='device-camera-video']):before {
			content: '\\ead9';
		}
		:host([icon='device-camera']):before {
			content: '\\eada';
		}
		:host([icon='device-mobile']):before {
			content: '\\eadb';
		}
		:host([icon='diff-added']):before {
			content: '\\eadc';
		}
		:host([icon='diff-ignored']):before {
			content: '\\eadd';
		}
		:host([icon='diff-modified']):before {
			content: '\\eade';
		}
		:host([icon='diff-removed']):before {
			content: '\\eadf';
		}
		:host([icon='diff-renamed']):before {
			content: '\\eae0';
		}
		:host([icon='diff']):before {
			content: '\\eae1';
		}
		:host([icon='discard']):before {
			content: '\\eae2';
		}
		:host([icon='editor-layout']):before {
			content: '\\eae3';
		}
		:host([icon='empty-window']):before {
			content: '\\eae4';
		}
		:host([icon='exclude']):before {
			content: '\\eae5';
		}
		:host([icon='extensions']):before {
			content: '\\eae6';
		}
		:host([icon='eye-closed']):before {
			content: '\\eae7';
		}
		:host([icon='file-binary']):before {
			content: '\\eae8';
		}
		:host([icon='file-code']):before {
			content: '\\eae9';
		}
		:host([icon='file-media']):before {
			content: '\\eaea';
		}
		:host([icon='file-pdf']):before {
			content: '\\eaeb';
		}
		:host([icon='file-submodule']):before {
			content: '\\eaec';
		}
		:host([icon='file-symlink-directory']):before {
			content: '\\eaed';
		}
		:host([icon='file-symlink-file']):before {
			content: '\\eaee';
		}
		:host([icon='file-zip']):before {
			content: '\\eaef';
		}
		:host([icon='files']):before {
			content: '\\eaf0';
		}
		:host([icon='filter']):before {
			content: '\\eaf1';
		}
		:host([icon='flame']):before {
			content: '\\eaf2';
		}
		:host([icon='fold-down']):before {
			content: '\\eaf3';
		}
		:host([icon='fold-up']):before {
			content: '\\eaf4';
		}
		:host([icon='fold']):before {
			content: '\\eaf5';
		}
		:host([icon='folder-active']):before {
			content: '\\eaf6';
		}
		:host([icon='folder-opened']):before {
			content: '\\eaf7';
		}
		:host([icon='gear']):before {
			content: '\\eaf8';
		}
		:host([icon='gift']):before {
			content: '\\eaf9';
		}
		:host([icon='gist-secret']):before {
			content: '\\eafa';
		}
		:host([icon='gist']):before {
			content: '\\eafb';
		}
		:host([icon='git-commit']):before {
			content: '\\eafc';
		}
		:host([icon='git-compare']):before {
			content: '\\eafd';
		}
		:host([icon='compare-changes']):before {
			content: '\\eafd';
		}
		:host([icon='git-merge']):before {
			content: '\\eafe';
		}
		:host([icon='github-action']):before {
			content: '\\eaff';
		}
		:host([icon='github-alt']):before {
			content: '\\eb00';
		}
		:host([icon='globe']):before {
			content: '\\eb01';
		}
		:host([icon='grabber']):before {
			content: '\\eb02';
		}
		:host([icon='graph']):before {
			content: '\\eb03';
		}
		:host([icon='gripper']):before {
			content: '\\eb04';
		}
		:host([icon='heart']):before {
			content: '\\eb05';
		}
		:host([icon='home']):before {
			content: '\\eb06';
		}
		:host([icon='horizontal-rule']):before {
			content: '\\eb07';
		}
		:host([icon='hubot']):before {
			content: '\\eb08';
		}
		:host([icon='inbox']):before {
			content: '\\eb09';
		}
		:host([icon='issue-reopened']):before {
			content: '\\eb0b';
		}
		:host([icon='issues']):before {
			content: '\\eb0c';
		}
		:host([icon='italic']):before {
			content: '\\eb0d';
		}
		:host([icon='jersey']):before {
			content: '\\eb0e';
		}
		:host([icon='json']):before {
			content: '\\eb0f';
		}
		:host([icon='kebab-vertical']):before {
			content: '\\eb10';
		}
		:host([icon='key']):before {
			content: '\\eb11';
		}
		:host([icon='law']):before {
			content: '\\eb12';
		}
		:host([icon='lightbulb-autofix']):before {
			content: '\\eb13';
		}
		:host([icon='link-external']):before {
			content: '\\eb14';
		}
		:host([icon='link']):before {
			content: '\\eb15';
		}
		:host([icon='list-ordered']):before {
			content: '\\eb16';
		}
		:host([icon='list-unordered']):before {
			content: '\\eb17';
		}
		:host([icon='live-share']):before {
			content: '\\eb18';
		}
		:host([icon='loading']):before {
			content: '\\eb19';
		}
		:host([icon='location']):before {
			content: '\\eb1a';
		}
		:host([icon='mail-read']):before {
			content: '\\eb1b';
		}
		:host([icon='mail']):before {
			content: '\\eb1c';
		}
		:host([icon='markdown']):before {
			content: '\\eb1d';
		}
		:host([icon='megaphone']):before {
			content: '\\eb1e';
		}
		:host([icon='mention']):before {
			content: '\\eb1f';
		}
		:host([icon='milestone']):before {
			content: '\\eb20';
		}
		:host([icon='mortar-board']):before {
			content: '\\eb21';
		}
		:host([icon='move']):before {
			content: '\\eb22';
		}
		:host([icon='multiple-windows']):before {
			content: '\\eb23';
		}
		:host([icon='mute']):before {
			content: '\\eb24';
		}
		:host([icon='no-newline']):before {
			content: '\\eb25';
		}
		:host([icon='note']):before {
			content: '\\eb26';
		}
		:host([icon='octoface']):before {
			content: '\\eb27';
		}
		:host([icon='open-preview']):before {
			content: '\\eb28';
		}
		:host([icon='package']):before {
			content: '\\eb29';
		}
		:host([icon='paintcan']):before {
			content: '\\eb2a';
		}
		:host([icon='pin']):before {
			content: '\\eb2b';
		}
		:host([icon='play']):before {
			content: '\\eb2c';
		}
		:host([icon='run']):before {
			content: '\\eb2c';
		}
		:host([icon='plug']):before {
			content: '\\eb2d';
		}
		:host([icon='preserve-case']):before {
			content: '\\eb2e';
		}
		:host([icon='preview']):before {
			content: '\\eb2f';
		}
		:host([icon='project']):before {
			content: '\\eb30';
		}
		:host([icon='pulse']):before {
			content: '\\eb31';
		}
		:host([icon='question']):before {
			content: '\\eb32';
		}
		:host([icon='quote']):before {
			content: '\\eb33';
		}
		:host([icon='radio-tower']):before {
			content: '\\eb34';
		}
		:host([icon='reactions']):before {
			content: '\\eb35';
		}
		:host([icon='references']):before {
			content: '\\eb36';
		}
		:host([icon='refresh']):before {
			content: '\\eb37';
		}
		:host([icon='regex']):before {
			content: '\\eb38';
		}
		:host([icon='remote-explorer']):before {
			content: '\\eb39';
		}
		:host([icon='remote']):before {
			content: '\\eb3a';
		}
		:host([icon='remove']):before {
			content: '\\eb3b';
		}
		:host([icon='replace-all']):before {
			content: '\\eb3c';
		}
		:host([icon='replace']):before {
			content: '\\eb3d';
		}
		:host([icon='repo-clone']):before {
			content: '\\eb3e';
		}
		:host([icon='repo-force-push']):before {
			content: '\\eb3f';
		}
		:host([icon='repo-pull']):before {
			content: '\\eb40';
		}
		:host([icon='repo-push']):before {
			content: '\\eb41';
		}
		:host([icon='report']):before {
			content: '\\eb42';
		}
		:host([icon='request-changes']):before {
			content: '\\eb43';
		}
		:host([icon='rocket']):before {
			content: '\\eb44';
		}
		:host([icon='root-folder-opened']):before {
			content: '\\eb45';
		}
		:host([icon='root-folder']):before {
			content: '\\eb46';
		}
		:host([icon='rss']):before {
			content: '\\eb47';
		}
		:host([icon='ruby']):before {
			content: '\\eb48';
		}
		:host([icon='save-all']):before {
			content: '\\eb49';
		}
		:host([icon='save-as']):before {
			content: '\\eb4a';
		}
		:host([icon='save']):before {
			content: '\\eb4b';
		}
		:host([icon='screen-full']):before {
			content: '\\eb4c';
		}
		:host([icon='screen-normal']):before {
			content: '\\eb4d';
		}
		:host([icon='search-stop']):before {
			content: '\\eb4e';
		}
		:host([icon='server']):before {
			content: '\\eb50';
		}
		:host([icon='settings-gear']):before {
			content: '\\eb51';
		}
		:host([icon='settings']):before {
			content: '\\eb52';
		}
		:host([icon='shield']):before {
			content: '\\eb53';
		}
		:host([icon='smiley']):before {
			content: '\\eb54';
		}
		:host([icon='sort-precedence']):before {
			content: '\\eb55';
		}
		:host([icon='split-horizontal']):before {
			content: '\\eb56';
		}
		:host([icon='split-vertical']):before {
			content: '\\eb57';
		}
		:host([icon='squirrel']):before {
			content: '\\eb58';
		}
		:host([icon='star-full']):before {
			content: '\\eb59';
		}
		:host([icon='star-half']):before {
			content: '\\eb5a';
		}
		:host([icon='symbol-class']):before {
			content: '\\eb5b';
		}
		:host([icon='symbol-color']):before {
			content: '\\eb5c';
		}
		:host([icon='symbol-constant']):before {
			content: '\\eb5d';
		}
		:host([icon='symbol-enum-member']):before {
			content: '\\eb5e';
		}
		:host([icon='symbol-field']):before {
			content: '\\eb5f';
		}
		:host([icon='symbol-file']):before {
			content: '\\eb60';
		}
		:host([icon='symbol-interface']):before {
			content: '\\eb61';
		}
		:host([icon='symbol-keyword']):before {
			content: '\\eb62';
		}
		:host([icon='symbol-misc']):before {
			content: '\\eb63';
		}
		:host([icon='symbol-operator']):before {
			content: '\\eb64';
		}
		:host([icon='symbol-property']):before {
			content: '\\eb65';
		}
		:host([icon='wrench']):before {
			content: '\\eb65';
		}
		:host([icon='wrench-subaction']):before {
			content: '\\eb65';
		}
		:host([icon='symbol-snippet']):before {
			content: '\\eb66';
		}
		:host([icon='tasklist']):before {
			content: '\\eb67';
		}
		:host([icon='telescope']):before {
			content: '\\eb68';
		}
		:host([icon='text-size']):before {
			content: '\\eb69';
		}
		:host([icon='three-bars']):before {
			content: '\\eb6a';
		}
		:host([icon='thumbsdown']):before {
			content: '\\eb6b';
		}
		:host([icon='thumbsup']):before {
			content: '\\eb6c';
		}
		:host([icon='tools']):before {
			content: '\\eb6d';
		}
		:host([icon='triangle-down']):before {
			content: '\\eb6e';
		}
		:host([icon='triangle-left']):before {
			content: '\\eb6f';
		}
		:host([icon='triangle-right']):before {
			content: '\\eb70';
		}
		:host([icon='triangle-up']):before {
			content: '\\eb71';
		}
		:host([icon='twitter']):before {
			content: '\\eb72';
		}
		:host([icon='unfold']):before {
			content: '\\eb73';
		}
		:host([icon='unlock']):before {
			content: '\\eb74';
		}
		:host([icon='unmute']):before {
			content: '\\eb75';
		}
		:host([icon='unverified']):before {
			content: '\\eb76';
		}
		:host([icon='verified']):before {
			content: '\\eb77';
		}
		:host([icon='versions']):before {
			content: '\\eb78';
		}
		:host([icon='vm-active']):before {
			content: '\\eb79';
		}
		:host([icon='vm-outline']):before {
			content: '\\eb7a';
		}
		:host([icon='vm-running']):before {
			content: '\\eb7b';
		}
		:host([icon='watch']):before {
			content: '\\eb7c';
		}
		:host([icon='whitespace']):before {
			content: '\\eb7d';
		}
		:host([icon='whole-word']):before {
			content: '\\eb7e';
		}
		:host([icon='window']):before {
			content: '\\eb7f';
		}
		:host([icon='word-wrap']):before {
			content: '\\eb80';
		}
		:host([icon='zoom-in']):before {
			content: '\\eb81';
		}
		:host([icon='zoom-out']):before {
			content: '\\eb82';
		}
		:host([icon='list-filter']):before {
			content: '\\eb83';
		}
		:host([icon='list-flat']):before {
			content: '\\eb84';
		}
		:host([icon='list-selection']):before {
			content: '\\eb85';
		}
		:host([icon='selection']):before {
			content: '\\eb85';
		}
		:host([icon='list-tree']):before {
			content: '\\eb86';
		}
		:host([icon='debug-breakpoint-function-unverified']):before {
			content: '\\eb87';
		}
		:host([icon='debug-breakpoint-function']):before {
			content: '\\eb88';
		}
		:host([icon='debug-breakpoint-function-disabled']):before {
			content: '\\eb88';
		}
		:host([icon='debug-stackframe-active']):before {
			content: '\\eb89';
		}
		:host([icon='debug-stackframe-dot']):before {
			content: '\\eb8a';
		}
		:host([icon='debug-stackframe']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-stackframe-focused']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-breakpoint-unsupported']):before {
			content: '\\eb8c';
		}
		:host([icon='symbol-string']):before {
			content: '\\eb8d';
		}
		:host([icon='debug-reverse-continue']):before {
			content: '\\eb8e';
		}
		:host([icon='debug-step-back']):before {
			content: '\\eb8f';
		}
		:host([icon='debug-restart-frame']):before {
			content: '\\eb90';
		}
		:host([icon='debug-alt']):before {
			content: '\\eb91';
		}
		:host([icon='call-incoming']):before {
			content: '\\eb92';
		}
		:host([icon='call-outgoing']):before {
			content: '\\eb93';
		}
		:host([icon='menu']):before {
			content: '\\eb94';
		}
		:host([icon='expand-all']):before {
			content: '\\eb95';
		}
		:host([icon='feedback']):before {
			content: '\\eb96';
		}
		:host([icon='group-by-ref-type']):before {
			content: '\\eb97';
		}
		:host([icon='ungroup-by-ref-type']):before {
			content: '\\eb98';
		}
		:host([icon='account']):before {
			content: '\\eb99';
		}
		:host([icon='bell-dot']):before {
			content: '\\eb9a';
		}
		:host([icon='debug-console']):before {
			content: '\\eb9b';
		}
		:host([icon='library']):before {
			content: '\\eb9c';
		}
		:host([icon='output']):before {
			content: '\\eb9d';
		}
		:host([icon='run-all']):before {
			content: '\\eb9e';
		}
		:host([icon='sync-ignored']):before {
			content: '\\eb9f';
		}
		:host([icon='pinned']):before {
			content: '\\eba0';
		}
		:host([icon='github-inverted']):before {
			content: '\\eba1';
		}
		:host([icon='server-process']):before {
			content: '\\eba2';
		}
		:host([icon='server-environment']):before {
			content: '\\eba3';
		}
		:host([icon='pass']):before {
			content: '\\eba4';
		}
		:host([icon='issue-closed']):before {
			content: '\\eba4';
		}
		:host([icon='stop-circle']):before {
			content: '\\eba5';
		}
		:host([icon='play-circle']):before {
			content: '\\eba6';
		}
		:host([icon='record']):before {
			content: '\\eba7';
		}
		:host([icon='debug-alt-small']):before {
			content: '\\eba8';
		}
		:host([icon='vm-connect']):before {
			content: '\\eba9';
		}
		:host([icon='cloud']):before {
			content: '\\ebaa';
		}
		:host([icon='merge']):before {
			content: '\\ebab';
		}
		:host([icon='export']):before {
			content: '\\ebac';
		}
		:host([icon='graph-left']):before {
			content: '\\ebad';
		}
		:host([icon='magnet']):before {
			content: '\\ebae';
		}
		:host([icon='notebook']):before {
			content: '\\ebaf';
		}
		:host([icon='redo']):before {
			content: '\\ebb0';
		}
		:host([icon='check-all']):before {
			content: '\\ebb1';
		}
		:host([icon='pinned-dirty']):before {
			content: '\\ebb2';
		}
		:host([icon='pass-filled']):before {
			content: '\\ebb3';
		}
		:host([icon='circle-large-filled']):before {
			content: '\\ebb4';
		}
		:host([icon='circle-large-outline']):before {
			content: '\\ebb5';
		}
		:host([icon='combine']):before {
			content: '\\ebb6';
		}
		:host([icon='gather']):before {
			content: '\\ebb6';
		}
		:host([icon='table']):before {
			content: '\\ebb7';
		}
		:host([icon='variable-group']):before {
			content: '\\ebb8';
		}
		:host([icon='type-hierarchy']):before {
			content: '\\ebb9';
		}
		:host([icon='type-hierarchy-sub']):before {
			content: '\\ebba';
		}
		:host([icon='type-hierarchy-super']):before {
			content: '\\ebbb';
		}
		:host([icon='git-pull-request-create']):before {
			content: '\\ebbc';
		}
		:host([icon='run-above']):before {
			content: '\\ebbd';
		}
		:host([icon='run-below']):before {
			content: '\\ebbe';
		}
		:host([icon='notebook-template']):before {
			content: '\\ebbf';
		}
		:host([icon='debug-rerun']):before {
			content: '\\ebc0';
		}
		:host([icon='workspace-trusted']):before {
			content: '\\ebc1';
		}
		:host([icon='workspace-untrusted']):before {
			content: '\\ebc2';
		}
		:host([icon='workspace-unknown']):before {
			content: '\\ebc3';
		}
		:host([icon='terminal-cmd']):before {
			content: '\\ebc4';
		}
		:host([icon='terminal-debian']):before {
			content: '\\ebc5';
		}
		:host([icon='terminal-linux']):before {
			content: '\\ebc6';
		}
		:host([icon='terminal-powershell']):before {
			content: '\\ebc7';
		}
		:host([icon='terminal-tmux']):before {
			content: '\\ebc8';
		}
		:host([icon='terminal-ubuntu']):before {
			content: '\\ebc9';
		}
		:host([icon='terminal-bash']):before {
			content: '\\ebca';
		}
		:host([icon='arrow-swap']):before {
			content: '\\ebcb';
		}
		:host([icon='copy']):before {
			content: '\\ebcc';
		}
		:host([icon='person-add']):before {
			content: '\\ebcd';
		}
		:host([icon='filter-filled']):before {
			content: '\\ebce';
		}
		:host([icon='wand']):before {
			content: '\\ebcf';
		}
		:host([icon='debug-line-by-line']):before {
			content: '\\ebd0';
		}
		:host([icon='inspect']):before {
			content: '\\ebd1';
		}
		:host([icon='layers']):before {
			content: '\\ebd2';
		}
		:host([icon='layers-dot']):before {
			content: '\\ebd3';
		}
		:host([icon='layers-active']):before {
			content: '\\ebd4';
		}
		:host([icon='compass']):before {
			content: '\\ebd5';
		}
		:host([icon='compass-dot']):before {
			content: '\\ebd6';
		}
		:host([icon='compass-active']):before {
			content: '\\ebd7';
		}
		:host([icon='azure']):before {
			content: '\\ebd8';
		}
		:host([icon='issue-draft']):before {
			content: '\\ebd9';
		}
		:host([icon='git-pull-request-closed']):before {
			content: '\\ebda';
		}
		:host([icon='git-pull-request-draft']):before {
			content: '\\ebdb';
		}
		:host([icon='debug-all']):before {
			content: '\\ebdc';
		}
		:host([icon='debug-coverage']):before {
			content: '\\ebdd';
		}
		:host([icon='run-errors']):before {
			content: '\\ebde';
		}
		:host([icon='folder-library']):before {
			content: '\\ebdf';
		}
		:host([icon='debug-continue-small']):before {
			content: '\\ebe0';
		}
		:host([icon='beaker-stop']):before {
			content: '\\ebe1';
		}
		:host([icon='graph-line']):before {
			content: '\\ebe2';
		}
		:host([icon='graph-scatter']):before {
			content: '\\ebe3';
		}
		:host([icon='pie-chart']):before {
			content: '\\ebe4';
		}
		:host([icon='bracket']):before {
			content: '\\eb0f';
		}
		:host([icon='bracket-dot']):before {
			content: '\\ebe5';
		}
		:host([icon='bracket-error']):before {
			content: '\\ebe6';
		}
		:host([icon='lock-small']):before {
			content: '\\ebe7';
		}
		:host([icon='azure-devops']):before {
			content: '\\ebe8';
		}
		:host([icon='verified-filled']):before {
			content: '\\ebe9';
		}
		:host([icon='newline']):before {
			content: '\\ebea';
		}
		:host([icon='layout']):before {
			content: '\\ebeb';
		}
		:host([icon='layout-activitybar-left']):before {
			content: '\\ebec';
		}
		:host([icon='layout-activitybar-right']):before {
			content: '\\ebed';
		}
		:host([icon='layout-panel-left']):before {
			content: '\\ebee';
		}
		:host([icon='layout-panel-center']):before {
			content: '\\ebef';
		}
		:host([icon='layout-panel-justify']):before {
			content: '\\ebf0';
		}
		:host([icon='layout-panel-right']):before {
			content: '\\ebf1';
		}
		:host([icon='layout-panel']):before {
			content: '\\ebf2';
		}
		:host([icon='layout-sidebar-left']):before {
			content: '\\ebf3';
		}
		:host([icon='layout-sidebar-right']):before {
			content: '\\ebf4';
		}
		:host([icon='layout-statusbar']):before {
			content: '\\ebf5';
		}
		:host([icon='layout-menubar']):before {
			content: '\\ebf6';
		}
		:host([icon='layout-centered']):before {
			content: '\\ebf7';
		}
		:host([icon='target']):before {
			content: '\\ebf8';
		}

		:host([icon='indent']):before {
			content: '\\ebf9';
		}
		:host([icon='record-small']):before {
			content: '\\ebfa';
		}
		:host([icon='error-small']):before {
			content: '\\ebfb';
		}
		:host([icon='terminal-decoration-error']):before {
			content: '\\ebfb';
		}
		:host([icon='arrow-circle-down']):before {
			content: '\\ebfc';
		}
		:host([icon='arrow-circle-left']):before {
			content: '\\ebfd';
		}
		:host([icon='arrow-circle-right']):before {
			content: '\\ebfe';
		}
		:host([icon='arrow-circle-up']):before {
			content: '\\ebff';
		}
		:host([icon='layout-sidebar-right-off']):before {
			content: '\\ec00';
		}
		:host([icon='layout-panel-off']):before {
			content: '\\ec01';
		}
		:host([icon='layout-sidebar-left-off']):before {
			content: '\\ec02';
		}
		:host([icon='blank']):before {
			content: '\\ec03';
		}
		:host([icon='heart-filled']):before {
			content: '\\ec04';
		}
		:host([icon='map']):before {
			content: '\\ec05';
		}
		:host([icon='map-filled']):before {
			content: '\\ec06';
		}
		:host([icon='circle-small']):before {
			content: '\\ec07';
		}
		:host([icon='bell-slash']):before {
			content: '\\ec08';
		}
		:host([icon='bell-slash-dot']):before {
			content: '\\ec09';
		}
		:host([icon='comment-unresolved']):before {
			content: '\\ec0a';
		}
		:host([icon='git-pull-request-go-to-changes']):before {
			content: '\\ec0b';
		}
		:host([icon='git-pull-request-new-changes']):before {
			content: '\\ec0c';
		}
		:host([icon='search-fuzzy']):before {
			content: '\\ec0d';
		}
		:host([icon='comment-draft']):before {
			content: '\\ec0e';
		}
		:host([icon='send']):before {
			content: '\\ec0f';
		}
		:host([icon='sparkle']):before {
			content: '\\ec10';
		}
		:host([icon='insert']):before {
			content: '\\ec11';
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}
		:host([icon='gl-commit-horizontal']):before {
			content: '\\f101';
		}
		:host([icon='gl-graph']):before {
			content: '\\f102';
		}
		:host([icon='gl-next-commit']):before {
			content: '\\f103';
		}
		:host([icon='gl-prev-commit-menu']):before {
			content: '\\f104';
		}
		:host([icon='gl-prev-commit']):before {
			content: '\\f105';
		}
		:host([icon='gl-compare-ref-working']):before {
			content: '\\f106';
		}
		:host([icon='gl-branches-view']):before {
			content: '\\f107';
		}
		:host([icon='gl-commit-view']):before {
			content: '\\f108';
		}
		:host([icon='gl-commits-view']):before {
			content: '\\f109';
		}
		:host([icon='gl-compare-view']):before {
			content: '\\f10a';
		}
		:host([icon='gl-contributors-view']):before {
			content: '\\f10b';
		}
		:host([icon='gl-history-view']):before {
			content: '\\f10c';
		}
		:host([icon='gl-remotes-view']):before {
			content: '\\f10d';
		}
		:host([icon='gl-repositories-view']):before {
			content: '\\f10e';
		}
		:host([icon='gl-search-view']):before {
			content: '\\f10f';
		}
		:host([icon='gl-stashes-view']):before {
			content: '\\f110';
		}
		:host([icon='gl-tags-view']):before {
			content: '\\f111';
		}
		:host([icon='gl-worktrees-view']):before {
			content: '\\f112';
		}
		:host([icon='gl-gitlens']):before {
			content: '\\f113';
		}
		:host([icon='gl-stash-pop']):before {
			content: '\\f114';
		}
		:host([icon='gl-stash-save']):before {
			content: '\\f115';
		}
		:host([icon='gl-unplug']):before {
			content: '\\f116';
		}
		:host([icon='gl-open-revision']):before {
			content: '\\f117';
		}
		:host([icon='gl-switch']):before {
			content: '\\f118';
		}
		:host([icon='gl-expand']):before {
			content: '\\f119';
		}
		:host([icon='gl-list-auto']):before {
			content: '\\f11a';
		}
		:host([icon='gl-arrow-up-force']):before {
			content: '\\f11b';
		}
		:host([icon='gl-pinned-filled']):before {
			content: '\\f11c';
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}
		:host([icon='gl-clock']):before {
			content: '\\f11d';
		}
		:host([icon='gl-provider-azdo']):before {
			content: '\\f11e';
		}
		:host([icon='gl-provider-bitbucket']):before {
			content: '\\f11f';
		}
		:host([icon='gl-provider-gerrit']):before {
			content: '\\f120';
		}
		:host([icon='gl-provider-gitea']):before {
			content: '\\f121';
		}
		:host([icon='gl-provider-github']):before {
			content: '\\f122';
		}
		:host([icon='gl-provider-gitlab']):before {
			content: '\\f123';
		}
		:host([icon='gl-gitlens-inspect']):before {
			content: '\\f124';
		}
		:host([icon='gl-workspaces-view']):before {
			content: '\\f125';
		}
		:host([icon='gl-cloud-patch']):before {
			content: '\\f128';
		}
		:host([icon='gl-cloud-patch-share']):before {
			content: '\\f129';
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}
	`,lQ([lu()],lX.prototype,"icon",2),lQ([lu()],lX.prototype,"modifier",2),lQ([lu({type:Number})],lX.prototype,"size",2),lX=lQ([lc("code-icon")],lX);var lJ=Object.defineProperty,l0=Object.getOwnPropertyDescriptor,l1=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?l0(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&lJ(t,o,i),i};let l2=class extends la{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return aJ`<div class="progress-bar"></div>`}};l2.styles=af`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,l1([lu({reflect:!0})],l2.prototype,"mode",2),l1([lu({type:Boolean})],l2.prototype,"active",2),l1([lu()],l2.prototype,"position",2),l2=l1([lc("progress-indicator")],l2);var l5=Object.defineProperty,l3=Object.getOwnPropertyDescriptor,l6=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?l3(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&l5(t,o,i),i};let l4=new Map([["=:","message:"],["message:","message:"],["@:","author:"],["author:","author:"],["#:","commit:"],["commit:","commit:"],["?:","file:"],["file:","file:"],["~:","change:"],["change:","change:"]]),l7=o2`
	<template role="search">
		<pop-menu ${rp("popmenu")} style="margin-left: -0.25rem;">
			<button
				type="button"
				class="action-button"
				slot="trigger"
				aria-label="${e=>e.label}"
				title="${e=>e.label}"
			>
				<code-icon icon="search" aria-hidden="true"></code-icon>
				<code-icon class="action-button__more" icon="chevron-down" aria-hidden="true"></code-icon>
			</button>
			<menu-list slot="content">
				<menu-label>Search by</menu-label>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("@me")}">
						My changes <small>@me</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("message:")}">
						Message <small>message: or =:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("author:")}">
						Author <small>author: or @:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("commit:")}">
						Commit SHA <small>commit: or #:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("file:")}">
						File <small>file: or ?:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("change:")}">
						Change <small>change: or ~:</small>
					</button>
				</menu-item>
			</menu-list>
		</pop-menu>
		<div class="field">
			<input
				${rp("input")}
				id="search"
				part="search"
				type="text"
				spellcheck="false"
				placeholder="${e=>e.placeholder}"
				:value="${e=>e.value}"
				aria-valid="${e=>!e.errorMessage}"
				aria-describedby="${e=>""!==e.errorMessage||null!=e.helpType?"help-text":""}"
				@input="${(e,t)=>e.handleInput(t.event)}"
				@keydown="${(e,t)=>e.handleShortcutKeys(t.event)}"
				@keyup="${(e,t)=>e.handleKeyup(t.event)}"
				@click="${(e,t)=>e.handleInputClick(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			/>
			<div class="message" id="help-text" aria-live="polite">
				${iz(e=>""!==e.errorMessage,o2`${e=>e.errorMessage}${e=>e.helpType?o2`<br />`:""}`)}
				${iz(e=>"message:"===e.helpType,o2`<span
						>Message: use quotes to search for phrases, e.g. message:"Updates dependencies"</span
					>`)}
				${iz(e=>"author:"===e.helpType,o2`<span>Author: use a user's account, e.g. author:eamodio</span>`)}
				${iz(e=>"commit:"===e.helpType,o2`<span>Commit: use a full or short Commit SHA, e.g. commit:4ce3a</span>`)}
				${iz(e=>"file:"===e.helpType,o2`<span
						>File: use a filename with extension, e.g. file:package.json, or a glob pattern, e.g.
						file:*graph*
					</span>`)}
				${iz(e=>"change:"===e.helpType,o2`<span>Change: use a regex pattern, e.g. change:update&#92;(param</span>`)}
			</div>
		</div>
		<div class="controls">
			<button
				class="control${e=>e.value?"":" is-hidden"}"
				type="button"
				role="button"
				aria-label="Clear"
				title="Clear"
				@click="${(e,t)=>e.handleClear(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="close"></code-icon>
			</button>
			<button
				class="control"
				type="button"
				role="checkbox"
				aria-label="Match All"
				title="Match All"
				aria-checked="${e=>e.matchAll}"
				@click="${(e,t)=>e.handleMatchAll(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="whole-word"></code-icon>
			</button>
			<button
				class="control"
				type="button"
				role="checkbox"
				aria-label="Match Case${e=>e.matchCaseOverride&&!e.matchCase?" (always on without regular expressions)":""}"
				title="Match Case${e=>e.matchCaseOverride&&!e.matchCase?" (always on without regular expressions)":""}"
				?disabled="${e=>!e.matchRegex}"
				aria-checked="${e=>e.matchCaseOverride}"
				@click="${(e,t)=>e.handleMatchCase(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="case-sensitive"></code-icon>
			</button>
			<button
				class="control"
				type="button"
				role="checkbox"
				aria-label="Use Regular Expression"
				title="Use Regular Expression"
				aria-checked="${e=>e.matchRegex}"
				@click="${(e,t)=>e.handleMatchRegex(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="regex"></code-icon>
			</button>
		</div>
	</template>
`,l9=o6`
	* {
		box-sizing: border-box;
	}

	:host {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.4rem;
		position: relative;

		flex: auto 1 1;
	}

	label {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.2rem;
		width: 3.2rem;
		height: 2.4rem;
		color: var(--vscode-input-foreground);
		cursor: pointer;
		border-radius: 3px;
	}
	label:hover {
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	label:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.icon-small {
		font-size: 1rem;
	}

	.field {
		position: relative;
		flex: auto 1 1;
	}

	input {
		width: 100%;
		height: 2.4rem;
		background-color: var(--vscode-input-background);
		color: var(--vscode-input-foreground);
		border: 1px solid var(--vscode-input-border);
		border-radius: 0.25rem;
		padding: 0 6.6rem 1px 0.4rem;
		font-family: inherit;
		font-size: inherit;
	}
	input:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	input::placeholder {
		color: var(--vscode-input-placeholderForeground);
	}

	input::-webkit-search-cancel-button {
		display: none;
	}

	input[aria-describedby='help-text'] {
		border-color: var(--vscode-inputValidation-infoBorder);
	}
	input[aria-describedby='help-text']:focus {
		outline-color: var(--vscode-inputValidation-infoBorder);
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	input[aria-valid='false'] {
		border-color: var(--vscode-inputValidation-errorBorder);
	}
	input[aria-valid='false']:focus {
		outline-color: var(--vscode-inputValidation-errorBorder);
	}

	.message {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		padding: 0.4rem;
		transform: translateY(-0.1rem);
		z-index: 1000;
		background-color: var(--vscode-inputValidation-infoBackground);
		border: 1px solid var(--vscode-inputValidation-infoBorder);
		color: var(--vscode-input-foreground);
		font-size: 1.2rem;
		line-height: 1.4;
	}

	input[aria-valid='false'] + .message {
		background-color: var(--vscode-inputValidation-errorBackground);
		border-color: var(--vscode-inputValidation-errorBorder);
	}

	input:not([aria-describedby='help-text']:focus) + .message {
		display: none;
	}

	.controls {
		position: absolute;
		top: 0.2rem;
		right: 0.2rem;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.1rem;
	}

	button {
		padding: 0;
		color: var(--vscode-input-foreground);
		border: 1px solid transparent;
		background: none;
	}
	button:focus:not([disabled]) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	button:not([disabled]) {
		cursor: pointer;
	}

	.control {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 2rem;
		height: 2rem;
		text-align: center;
		border-radius: 0.25rem;
	}
	.control:hover:not([disabled]):not([aria-checked='true']) {
		background-color: var(--vscode-inputOption-hoverBackground);
	}
	.control[disabled] {
		opacity: 0.5;
	}
	.control[disabled][aria-checked='true'] {
		opacity: 0.8;
	}
	.control[aria-checked='true'] {
		background-color: var(--vscode-inputOption-activeBackground);
		color: var(--vscode-inputOption-activeForeground);
		border-color: var(--vscode-inputOption-activeBorder);
	}

	.control.is-hidden {
		display: none;
	}

	.action-button {
		position: relative;
		appearance: none;
		font-family: inherit;
		font-size: 1.2rem;
		line-height: 2.2rem;
		// background-color: var(--color-graph-actionbar-background);
		background-color: transparent;
		border: none;
		color: inherit;
		color: var(--color-foreground);
		padding: 0 0.75rem;
		cursor: pointer;
		border-radius: 3px;
		height: auto;

		display: grid;
		grid-auto-flow: column;
		grid-gap: 0.5rem;
		gap: 0.5rem;
		max-width: fit-content;
	}

	.action-button[disabled] {
		pointer-events: none;
		cursor: default;
		opacity: 1;
	}

	.action-button:hover {
		background-color: var(--color-graph-actionbar-selectedBackground);
		color: var(--color-foreground);
		text-decoration: none;
	}

	.action-button[aria-checked] {
		border: 1px solid transparent;
	}

	.action-button[aria-checked='true'] {
		background-color: var(--vscode-inputOption-activeBackground);
		color: var(--vscode-inputOption-activeForeground);
		border-color: var(--vscode-inputOption-activeBorder);
	}

	.action-button code-icon,
	.action-button .codicon[class*='codicon-'],
	.action-button .glicon[class*='glicon-'] {
		line-height: 2.2rem;
		vertical-align: bottom;
	}

	.action-button__more,
	.action-button__more.codicon[class*='codicon-'] {
		font-size: 1rem;
		margin-right: -0.25rem;
	}

	.action-button__more::before {
		margin-left: -0.25rem;
	}

	menu-item {
		padding: 0 0.5rem;
	}

	menu-list {
		padding-bottom: 0.5rem;
	}

	.menu-button {
		display: block;
		width: 100%;
		padding: 0.1rem 0.6rem 0 0.6rem;
		line-height: 2.2rem;
		text-align: left;
		color: var(--vscode-menu-foreground);
		border-radius: 3px;
	}

	.menu-button:hover {
		color: var(--vscode-menu-selectionForeground);
		background-color: var(--vscode-menu-selectionBackground);
	}
`,l8=class extends tZ{constructor(){super(...arguments),this.errorMessage="",this.label="Search",this.placeholder="Search...",this.value="",this.matchAll=!1,this.matchCase=!1,this.matchRegex=!0,this.debouncedEmitSearch=e$(this.emitSearch.bind(this),250),this.searchHistory=[],this.searchHistoryPos=0}get matchCaseOverride(){return!this.matchRegex||this.matchCase}focus(e){this.input.focus(e)}handleFocus(e){this.popmenu.close()}handleClear(e){this.value="",this.debouncedEmitSearch()}updateHelpText(){null==this._updateHelpTextDebounced&&(this._updateHelpTextDebounced=e$(this.updateHelpTextCore.bind(this),200)),this._updateHelpTextDebounced()}updateHelpTextCore(){let e=this.input?.selectionStart,t=this.value;if(null!=e&&0!==t.length&&t.includes(":")){let o;let n=/(?:^|[\b\s]*)((=:|message:|@:|author:|#:|commit:|\?:|file:|~:|change:)(?:"[^"]*"?|\w*))(?:$|[\b\s])/gi;for(;null!=(o=n.exec(t));){let[,t,n]=o;if(e>o.index&&e<=o.index+t.trim().length){this.helpType=l4.get(n);return}}}this.helpType=void 0}handleInputClick(e){this.updateHelpText()}handleInput(e){let t=e.target?.value;this.value=t,this.updateHelpText(),this.debouncedEmitSearch()}handleMatchAll(e){this.matchAll=!this.matchAll,this.debouncedEmitSearch()}handleMatchCase(e){this.matchCase=!this.matchCase,this.debouncedEmitSearch()}handleMatchRegex(e){this.matchRegex=!this.matchRegex,this.debouncedEmitSearch()}handleKeyup(e){this.updateHelpText()}handleShortcutKeys(e){if(!["Enter","ArrowUp","ArrowDown"].includes(e.key)||e.ctrlKey||e.metaKey||e.altKey)return!0;if(e.preventDefault(),"Enter"===e.key)e.shiftKey?this.$emit("previous"):this.$emit("next");else if(0!==this.searchHistory.length){let t="ArrowDown"===e.key?1:-1,o=this.searchHistoryPos+t;if(o>-1&&o<this.searchHistory.length){this.searchHistoryPos=o;let e=this.searchHistory[o];e!==this.value&&(this.value=e,this.updateHelpText(),this.debouncedEmitSearch())}}return!1}handleInsertToken(e){this.value+=`${this.value.length>0?" ":""}${e}`,window.requestAnimationFrame(()=>{this.updateHelpText(),"@me"===e&&this.debouncedEmitSearch(),this.input.focus()})}emitSearch(){let e={query:this.value,matchAll:this.matchAll,matchCase:this.matchCase,matchRegex:this.matchRegex};this.$emit("change",e)}setCustomValidity(e=""){this.errorMessage=e}logSearch(e){let t=this.searchHistory.length-1;this.searchHistoryPos<t||this.searchHistory[t]===e.query||(this.searchHistory.push(e.query),this.searchHistoryPos=this.searchHistory.length-1)}};l6([ty],l8.prototype,"errorMessage",2),l6([ty],l8.prototype,"helpType",2),l6([tN],l8.prototype,"label",2),l6([tN],l8.prototype,"placeholder",2),l6([tN],l8.prototype,"value",2),l6([tN({mode:"boolean"})],l8.prototype,"matchAll",2),l6([tN({mode:"boolean"})],l8.prototype,"matchCase",2),l6([tN({mode:"boolean"})],l8.prototype,"matchRegex",2),l6([tw],l8.prototype,"matchCaseOverride",1),l8=l6([tq({name:"search-input",template:l7,styles:l9})],l8);var ce=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,co=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?ct(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&ce(t,o,i),i};let cn=o2`<template>
	<search-input
		${rp("searchInput")}
		id="search-input"
		:errorMessage="${e=>e.errorMessage}"
		label="${e=>e.label}"
		placeholder="${e=>e.placeholder}"
		matchAll="${e=>e.matchAll}"
		matchCase="${e=>e.matchCase}"
		matchRegex="${e=>e.matchRegex}"
		value="${e=>e.value}"
		@previous="${(e,t)=>{t.event.stopImmediatePropagation(),e.navigate("previous")}}"
		@next="${(e,t)=>{t.event.stopImmediatePropagation(),e.navigate("next")}}"
	></search-input>
	<div class="search-navigation" aria-label="Search navigation">
		<span class="count${e=>e.total<1&&e.valid&&e.resultsLoaded?" error":""}">
			${iz(e=>e.searching,o2`<code-icon icon="loading" modifier="spin"></code-icon>`)}
			${iz(e=>!e.searching&&e.total<1,o2`${e=>e.formattedLabel}`)}
			${iz(e=>!e.searching&&e.total>0,o2`<span aria-current="step">${e=>e.step}</span> of
					<span
						class="${e=>e.resultsHidden?"sr-hidden":""}"
						title="${e=>e.resultsHidden?"Some search results are hidden or unable to be shown on the Commit Graph":""}"
						>${e=>e.total}${e=>e.more?"+":""}</span
					><span class="sr-only"> ${e=>e.formattedLabel}</span>`)}
		</span>
		<button
			type="button"
			class="button"
			?disabled="${e=>!e.hasResults}"
			@click="${(e,t)=>e.handlePrevious(t.event)}"
		>
			<code-icon
				icon="arrow-up"
				aria-label="Previous Match (Shift+Enter)
First Match (Shift+Click)"
				title="Previous Match (Shift+Enter)
First Match (Shift+Click)"
			></code-icon>
		</button>
		<button
			type="button"
			class="button"
			?disabled="${e=>!e.hasResults}"
			@click="${(e,t)=>e.handleNext(t.event)}"
		>
			<code-icon
				icon="arrow-down"
				aria-label="Next Match (Enter)
Last Match (Shift+Click)"
				title="Next Match (Enter)
Last Match (Shift+Click)"
			></code-icon>
		</button>
		<button
			type="button"
			class="button"
			?disabled="${e=>!e.hasResults}"
			@click="${(e,t)=>e.handleOpenInView(t.event)}"
		>
			<code-icon
				icon="link-external"
				aria-label="Show Results in Side Bar"
				title="Show Results in Side Bar"
			></code-icon>
		</button>
	</div>
	<progress-indicator active="${e=>e.searching}"></progress-indicator>
</template>`,cr=o6`
	:host {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		color: var(--color-foreground);
		flex: auto 1 1;
		position: relative;
	}
	:host(:focus) {
		outline: 0;
	}
	progress-indicator {
		top: -4px;
	}

	.search-navigation {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.3rem;
		color: var(--color-foreground);
	}
	.search-navigation:focus {
		outline: 0;
	}

	.count {
		flex: none;
		margin-right: 0.4rem;
		font-size: 1.2rem;
		min-width: 10ch;
	}

	.count.error {
		color: var(--vscode-errorForeground);
	}

	.button {
		width: 2.4rem;
		height: 2.4rem;
		padding: 0;
		color: inherit;
		border: none;
		border-radius: 3px;
		background: none;
		text-align: center;
	}
	.button[disabled] {
		color: var(--vscode-disabledForeground);
	}
	.button:focus {
		background-color: var(--vscode-toolbar-activeBackground);
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	.button:not([disabled]) {
		cursor: pointer;
	}
	.button:hover:not([disabled]) {
		color: var(--vscode-foreground);
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	.button > code-icon[icon='arrow-up'] {
		transform: translateX(-0.1rem);
	}

	.sr-hidden {
		color: var(--vscode-errorForeground);
	}

	.sr-only {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
`,ci=class extends tZ{constructor(){super(...arguments),this.errorMessage="",this.label="Search",this.placeholder='Search commits (↑↓ for history), e.g. "Updates dependencies" author:eamodio',this.value="",this.matchAll=!1,this.matchCase=!1,this.matchRegex=!0,this.total=0,this.step=0,this.more=!1,this.searching=!1,this.valid=!1,this.resultsHidden=!1,this.resultsLabel="result",this.resultsLoaded=!1}get formattedLabel(){return eK(this.resultsLabel,this.total,{zero:"No"})}get hasResults(){return this.total>1}connectedCallback(){super.connectedCallback(),this._disposable=S.on(window,"keydown",e=>this.handleShortcutKeys(e))}disconnectedCallback(){super.disconnectedCallback(),this._disposable?.dispose()}focus(e){this.searchInput?.focus(e)}navigate(e){this.$emit("navigate",{direction:e})}logSearch(e){this.searchInput?.logSearch(e)}handleShortcutKeys(e){if(!e.altKey){if("F3"===e.key&&!e.ctrlKey&&!e.metaKey||"g"===e.key&&e.metaKey&&!e.ctrlKey&&sS){e.preventDefault(),e.stopImmediatePropagation(),this.navigate(e.shiftKey?"previous":"next");return}"f"===e.key&&(e.metaKey&&!e.ctrlKey&&sS||e.ctrlKey&&!sS)&&(e.preventDefault(),e.stopImmediatePropagation(),this.focus())}}handlePrevious(e){e.stopImmediatePropagation(),this.navigate(e.shiftKey?"first":"previous")}handleNext(e){e.stopImmediatePropagation(),this.navigate(e.shiftKey?"last":"next")}handleOpenInView(e){e.stopImmediatePropagation(),this.$emit("openinview")}};co([ty],ci.prototype,"errorMessage",2),co([tN],ci.prototype,"label",2),co([tN],ci.prototype,"placeholder",2),co([tN],ci.prototype,"value",2),co([tN({mode:"boolean"})],ci.prototype,"matchAll",2),co([tN({mode:"boolean"})],ci.prototype,"matchCase",2),co([tN({mode:"boolean"})],ci.prototype,"matchRegex",2),co([tN({converter:lq})],ci.prototype,"total",2),co([tN({converter:lq})],ci.prototype,"step",2),co([tN({mode:"boolean"})],ci.prototype,"more",2),co([tN({mode:"boolean"})],ci.prototype,"searching",2),co([tN({mode:"boolean"})],ci.prototype,"valid",2),co([tN({mode:"boolean"})],ci.prototype,"resultsHidden",2),co([tN],ci.prototype,"resultsLabel",2),co([tN({mode:"boolean"})],ci.prototype,"resultsLoaded",2),co([tw],ci.prototype,"formattedLabel",1),co([tw],ci.prototype,"hasResults",1);let cs=sO(ci=co([tq({name:"search-box",template:cn,styles:cr})],ci),{tagName:"search-box",events:{onChange:"change",onNavigate:"navigate",onOpenInView:"openinview"}});function*ca(e,t){for(let o of e)yield*t(o)}function*cl(...e){for(let t of e)if(null!=t)for(let e of t)yield e}var cc=Object.defineProperty,cd=Object.getOwnPropertyDescriptor,ch=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?cd(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&cc(t,o,i),i};let cu=o2`<template>
	<div id="spinner" ${rp("spinner")}><code-icon icon="loading" modifier="spin"></code-icon></div>
	<div id="chart" ${rp("chart")}></div>
	<div
		class="legend"
		title="${e=>"lines"===e.dataType?"Showing lines changed per day":"Showing commits per day"}"
	>
		<code-icon icon="${e=>"lines"===e.dataType?"request-changes":"git-commit"}"></code-icon>
	</div>
</template>`,cp=o6`
	:host {
		display: flex;
		position: relative;
		width: 100%;
		min-height: 24px;
		height: 40px;
		background: var(--color-background);
	}

	#chart {
		height: 100%;
		width: calc(100% - 1rem);
		overflow: hidden;
		position: initial !important;
	}

	#spinner {
		position: absolute;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
	}

	#spinner[aria-hidden='true'] {
		display: none;
	}

	.legend {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		z-index: 1;
		opacity: 0.7;
		cursor: help;
	}

	.bb svg {
		font: 10px var(--font-family);
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.bb-chart {
		width: 100%;
		height: 100%;
	}

	.bb-event-rect {
		height: calc(100% + 2px);
		transform: translateY(-5px);
	}

	/*-- Grid --*/
	.bb-grid {
		pointer-events: none;
	}

	.bb-xgrid-focus line {
		stroke: var(--color-graph-minimap-focusLine);
	}

	/*-- Line --*/
	.bb path,
	.bb line {
		fill: none;
	}

	/*-- Point --*/
	.bb-circle._expanded_ {
		fill: var(--color-background);
		opacity: 1 !important;
		fill-opacity: 1 !important;
		stroke-opacity: 1 !important;
		stroke-width: 1px;
	}

	.bb-selected-circle {
		fill: var(--color-background);
		opacity: 1 !important;
		fill-opacity: 1 !important;
		stroke-opacity: 1 !important;
		stroke-width: 2px;
	}

	/*-- Bar --*/
	.bb-bar {
		stroke-width: 0;
	}
	.bb-bar._expanded_ {
		fill-opacity: 0.75;
	}

	/*-- Regions --*/

	.bb-regions {
		pointer-events: none;
	}

	.bb-region > rect:not([x]) {
		display: none;
	}

	.bb-region.visible-area {
		fill: var(--color-graph-minimap-visibleAreaBackground);
		/* transform: translateY(-4px); */
	}
	.bb-region.visible-area > rect {
		height: 100%;
	}

	.bb-region.marker-result {
		fill: var(--color-graph-minimap-marker-highlights);
		transform: translateX(-1px);
		z-index: 10;
	}
	.bb-region.marker-result > rect {
		width: 2px;
		height: 100%;
	}

	.bb-region.marker-head {
		fill: var(--color-graph-minimap-marker-head);
		stroke: var(--color-graph-minimap-marker-head);
		transform: translateX(-1px);
	}
	.bb-region.marker-head > rect {
		width: 1px;
		height: 100%;
	}

	.bb-region.marker-head-arrow-left {
		fill: var(--color-graph-minimap-marker-head);
		stroke: var(--color-graph-minimap-marker-head);
		transform: translate(-5px, -1px) skewX(45deg);
	}
	.bb-region.marker-head-arrow-left > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-head-arrow-right {
		fill: var(--color-graph-minimap-marker-head);
		stroke: var(--color-graph-minimap-marker-head);
		transform: translate(1px, -1px) skewX(-45deg);
	}
	.bb-region.marker-head-arrow-right > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-upstream {
		fill: var(--color-graph-minimap-marker-upstream);
		stroke: var(--color-graph-minimap-marker-upstream);
		transform: translateX(-1px);
	}
	.bb-region.marker-upstream > rect {
		width: 1px;
		height: 100%;
	}

	.bb-region.marker-branch {
		fill: var(--color-graph-minimap-marker-local-branches);
		stroke: var(--color-graph-minimap-marker-local-branches);
		transform: translate(-2px, 35px);
	}
	.bb-region.marker-branch > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-remote {
		fill: var(--color-graph-minimap-marker-remote-branches);
		stroke: var(--color-graph-minimap-marker-remote-branches);
		transform: translate(-2px, 29px);
	}
	.bb-region.marker-remote > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-stash {
		fill: var(--color-graph-minimap-marker-stashes);
		stroke: var(--color-graph-minimap-marker-stashes);
		transform: translate(-2px, 35px);
	}
	.bb-region.marker-stash > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-tag {
		fill: var(--color-graph-minimap-marker-tags);
		stroke: var(--color-graph-minimap-marker-tags);
		transform: translate(-2px, 29px);
	}
	.bb-region.marker-tag > rect {
		width: 3px;
		height: 3px;
	}

	/*-- Zoom region --*/
	/*
	:host-context(.vscode-dark) .bb-zoom-brush {
		fill: white;
		fill-opacity: 0.2;
	}
	:host-context(.vscode-light) .bb-zoom-brush {
		fill: black;
		fill-opacity: 0.1;
	}
	*/

	/*-- Brush --*/
	/*
	.bb-brush .extent {
		fill-opacity: 0.1;
	}
	*/

	/*-- Button --*/
	/*
	.bb-button {
		position: absolute;
		top: 2px;
		right: 0;

		color: var(--color-button-foreground);

		font-size: var(--font-size);
		font-family: var(--font-family);
	}
	.bb-button .bb-zoom-reset {
		display: inline-block;
		padding: 0.1rem 0.3rem;
		cursor: pointer;
		font-family: 'codicon';
		font-display: block;

		background-color: var(--color-button-background);

		border: 1px solid var(--color-button-background);
		border-radius: 3px;
	}
	*/

	/*-- Tooltip --*/
	.bb-tooltip-container {
		top: unset !important;
		z-index: 10;
		user-select: none;
		min-width: 300px;
	}

	.bb-tooltip {
		display: flex;
		flex-direction: column;
		padding: 0.5rem 1rem;
		background-color: var(--color-hover-background);
		color: var(--color-hover-foreground);
		border: 1px solid var(--color-hover-border);
		box-shadow: 0 2px 8px var(--vscode-widget-shadow);
		font-size: var(--font-size);
		opacity: 1;
		white-space: nowrap;
	}

	.bb-tooltip .header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 1rem;
	}

	.bb-tooltip .header--title {
		font-weight: 600;
	}

	.bb-tooltip .header--description {
		font-weight: normal;
		font-style: italic;
	}

	.bb-tooltip .changes {
		margin: 0.5rem 0;
	}

	.bb-tooltip .refs {
		display: flex;
		font-size: 12px;
		gap: 0.5rem;
		flex-direction: row;
		flex-wrap: wrap;
		margin: 0.5rem 0;
		max-width: fit-content;
	}
	.bb-tooltip .refs:empty {
		margin: 0;
	}

	.bb-tooltip .refs .branch {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-branchBackground);
		border: 1px solid var(--color-graph-minimap-tip-branchBorder);
		color: var(--color-graph-minimap-tip-branchForeground);
	}
	.bb-tooltip .refs .branch.current {
		background-color: var(--color-graph-minimap-tip-headBackground);
		border: 1px solid var(--color-graph-minimap-tip-headBorder);
		color: var(--color-graph-minimap-tip-headForeground);
	}
	.bb-tooltip .refs .remote {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-remoteBackground);
		border: 1px solid var(--color-graph-minimap-tip-remoteBorder);
		color: var(--color-graph-minimap-tip-remoteForeground);
	}
	.bb-tooltip .refs .remote.current {
		background-color: var(--color-graph-minimap-tip-upstreamBackground);
		border: 1px solid var(--color-graph-minimap-tip-upstreamBorder);
		color: var(--color-graph-minimap-tip-upstreamForeground);
	}
	.bb-tooltip .refs .stash {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-stashBackground);
		border: 1px solid var(--color-graph-minimap-tip-stashBorder);
		color: var(--color-graph-minimap-tip-stashForeground);
	}
	.bb-tooltip .refs .tag {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-tagBackground);
		border: 1px solid var(--color-graph-minimap-tip-tagBorder);
		color: var(--color-graph-minimap-tip-tagForeground);
	}

	.bb-event-rects {
		cursor: pointer !important;
	}
`,cf=["marker-result","marker-head-arrow-left","marker-head-arrow-right","marker-head","marker-upstream","marker-branch","marker-stash","marker-remote","marker-tag","visible-area"],cm=class extends tZ{constructor(){super(...arguments),this.dataType="commits"}activeDayChanged(){this.select(this.activeDay)}dataChanged(e,t,o){this._loadTimer&&(clearTimeout(this._loadTimer),this._loadTimer=void 0),o&&(this._regions=void 0,this._markerRegions=void 0),this._loadTimer=setTimeout(()=>this.loadChart(),150)}dataTypeChanged(){this.dataChanged()}markersChanged(){this.dataChanged(void 0,void 0,!0)}searchResultsChanged(){this._chart?.regions.remove({classes:["marker-result"]}),null!=this.searchResults&&this._chart?.regions.add([...this.getSearchResultsRegions(this.searchResults)])}visibleDaysChanged(){this._chart?.regions.remove({classes:["visible-area"]}),null!=this.visibleDays&&this._chart?.regions.add(this.getVisibleAreaRegion(this.visibleDays))}connectedCallback(){super.connectedCallback(),this.dataChanged(void 0,void 0,!1)}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=void 0}getInternalChart(){try{return this._chart?.internal}catch{return}}select(e,t=!1){if(null==e){this.unselect();return}let o=this.getData(e);if(null==o)return;let n=this.getInternalChart();if(null!=n&&(n.showGridFocus([o]),!t)){let{index:e}=o;this._chart.$.main.selectAll(`.bb-shape-${e}`).each(function(t){n.toggleShape?.(this,t,e)})}}unselect(e,t=!1){if(t){this.getInternalChart()?.hideGridFocus();return}if(null!=e){let t=this.getIndex(e);if(null==t)return;this._chart?.unselect(void 0,[t])}else this._chart?.unselect()}getData(e){return e=new Date(e).setHours(0,0,0,0),this._chart?.data()[0]?.values.find(t=>("number"==typeof t.x?t.x:t.x.getTime())===e)}getIndex(e){return this.getData(e)?.index}getMarkerRegions(){if(null==this._markerRegions){if(null!=this.markers){let e=ca(this.markers,([e,t])=>ca(t,t=>t.current&&"branch"===t.type?[{axis:"x",start:e,end:e,class:"marker-head"},{axis:"x",start:e,end:e,class:"marker-head-arrow-left"},{axis:"x",start:e,end:e,class:"marker-head-arrow-right"}]:[{axis:"x",start:e,end:e,class:t.current&&"remote"===t.type?"marker-upstream":`marker-${t.type}`}]));this._markerRegions=e}else this._markerRegions=[]}return this._markerRegions}getAllRegions(){if(null==this._regions){let e=this.getMarkerRegions();null!=this.visibleDays&&(e=cl([this.getVisibleAreaRegion(this.visibleDays)],e)),null!=this.searchResults&&(e=cl(e,this.getSearchResultsRegions(this.searchResults))),this._regions=[...e].sort((e,t)=>cf.indexOf(t.class??"")-cf.indexOf(e.class??""))}return this._regions}getSearchResultsRegions(e){return function*(e,t){for(let o of e)yield t(o)}(e.keys(),e=>({axis:"x",start:e,end:e,class:"marker-result"}))}getVisibleAreaRegion(e){return{axis:"x",start:e.top,end:e.bottom,class:"visible-area"}}loadChart(){null==this._loading&&(this._loading=this.loadChartCore().then(()=>this._loading=void 0))}async loadChartCore(){let e,t,o;if(!this.data?.size){this.spinner.setAttribute("aria-hidden","false"),this._chart?.destroy(),this._chart=void 0;return}let n="lines"===this.dataType,r=[],i=[],a=this.data.keys()[Symbol.iterator]().next().value,l=new Date,c=new Date(a),d=0;for(;l>=c;)e=cg(l),t=this.data.get(e),r.push(e),d=Math.max(d,o=n?(t?.activity?.additions??0)+(t?.activity?.deletions??0):t?.commits??0),i.push(o),l.setDate(l.getDate()-1);let h=this.getAllRegions(),u=[],p=0,f=0;for(let e of i)0!==e&&(u.push(e),p+=e,f+=e**2);u.sort((e,t)=>e-t);let m=u.length,g=p/m,b=Math.sqrt(f/m-g**2),v=-1;for(let e=m-1;e>=0;e--)if(3>=Math.abs((u[e]-g)/b)){v=e;break}let y=u[Math.floor(.25*m)],w=u[Math.floor(.75*m)],C=u[m-1],S=w+3*(w-y),x=u[v],_=Math.floor(Math.min(C,S>C-S?x:S+(x-S)/2)+.1*S);if(null==this._chart){let{bb:e,selection:t,spline:o,zoom:n}=await s.e(490).then(s.bind(s,1893));this._chart=e.generate({bindto:this.chart,data:{x:"date",axes:{activity:"y"},columns:[["date",...r],["activity",...i]],names:{activity:"Activity"},onclick:e=>{if("activity"!==e.id)return;let t=new Date(e.x),o=cg(t),n=this.searchResults?.get(o)?.sha??this.data?.get(o)?.sha;queueMicrotask(()=>{this.$emit("selected",{date:t,sha:n})})},selection:{enabled:t(),grouped:!0,multiple:!1},colors:{activity:"var(--color-graph-minimap-line0)"},types:{activity:o()}},axis:{x:{inverted:!0,localtime:!0,type:"timeseries"},y:{min:0,max:_}},clipPath:!1,grid:{front:!1,focus:{show:!0}},legend:{show:!1},line:{point:!0,zerobased:!0},padding:{mode:"fit",bottom:-8,left:0,right:0,top:0},point:{show:!0,select:{r:5},focus:{only:!0,expand:{enabled:!0,r:3}},sensitivity:100},regions:h,resize:{auto:!0},spline:{interpolation:{type:"monotone-x"}},tooltip:{contents:(e,t,o,n)=>{var r,i;let s;let a=new Date(e[0].x),l=this.data?.get(cg(a)),c=this.markers?.get(cg(a));c?.length&&(r=e=>e.type,s=c.reduce((e,t)=>{let o=r(t),n=e.get(o);return void 0===n?e.set(o,[t]):n.push(t),e},new Map));let d=s?.get("stash")?.length??0,h="lines"===this.dataType;return`<div class="bb-tooltip">
							<div class="header">
								<span class="header--title">${ly(a,"MMMM Do, YYYY")}</span>
								<span class="header--description">(${(i=lv(a)).charAt(0).toUpperCase()+i.slice(1)})</span>
							</div>
							<div class="changes">
								<span>${(l?.commits??0)===0?"No commits":`${eK("commit",l?.commits??0,{format:e=>lC(e),zero:"No"})}${h?`, ${eK("file",l?.files??0,{format:e=>lC(e),zero:"No"})}, ${eK("line",(l?.activity?.additions??0)+(l?.activity?.deletions??0),{format:e=>lC(e),zero:"No"})} changed`:""}`}</span>
							</div>
							${null!=s?`
							<div class="refs">${d?`<span class="stash">${eK("stash",d,{plural:"stashes"})}</span>`:""}${s?.get("branch")?.sort((e,t)=>(e.current?-1:1)-(t.current?-1:1)).map(e=>`<span class="branch${e.current?" current":""}">${e.name}</span>`).join("")??""}</div>
							<div class="refs">${s?.get("remote")?.sort((e,t)=>(e.current?-1:1)-(t.current?-1:1))?.map(e=>`<span class="remote${e.current?" current":""}">${e.name}</span>`).join("")??""}${s?.get("tag")?.map(e=>`<span class="tag">${e.name}</span>`).join("")??""}</div>`:""}
						</div>`},grouped:!0,position:(e,t,o,n,r)=>{let{x:i}=r,s=n.getBoundingClientRect();return i+t>s.right&&(i=s.right-t),{top:0,left:i}}},transition:{duration:0},zoom:{enabled:n(),rescale:!1,type:"wheel",onzoom:e$(()=>this.activeDayChanged(),250)},onafterinit:function(){let e=this.$.main.selectAll(".bb-axis-x").node();e?.remove();let t=this.$.main.selectAll(".bb-axis-y").node();t?.remove();let o=this.$.main.selectAll(".bb-grid").node();try{o?.removeAttribute("clip-path")}catch{}let n=this.$.main.selectAll(".bb-regions").node(),r=this.$.main.selectAll(".bb-chart").node();null!=n&&null!=r&&r.insertAdjacentElement("afterend",n)}})}else this._chart.load({columns:[["date",...r],["activity",...i]]}),this._chart.axis.max({y:_}),this._chart.regions(h);this.spinner.setAttribute("aria-hidden","true"),this.activeDayChanged()}};function cg(e){return new Date(e).setHours(0,0,0,0)}ch([ty],cm.prototype,"activeDay",2),ch([ty],cm.prototype,"data",2),ch([eQ({singleLine:!0},!0)],cm.prototype,"dataChanged",1),ch([ty],cm.prototype,"dataType",2),ch([ty],cm.prototype,"markers",2),ch([ty],cm.prototype,"searchResults",2),ch([ty],cm.prototype,"visibleDays",2),ch([eQ({singleLine:!0},!0)],cm.prototype,"loadChartCore",1);let cb=sO(cm=ch([tq({name:"graph-minimap",template:cu,styles:cp})],cm),{tagName:"graph-minimap",events:{onSelected:"selected"}}),cv=e=>(t,o)=>(function(e,t="absolute",o="short+short",n){switch(n){case to.CommitDateTimeSources.Tooltip:return`${ly(e,o)} (${lv(e)})`;case to.CommitDateTimeSources.RowEntry:default:return"relative"===t?lv(e):ly(e,o)}})(t,e?.dateStyle,e?.dateFormat,o),cy=(()=>{let e={};return["head","remote","remote-github","remote-githubEnterprise","remote-gitlab","remote-gitlabSelfHosted","remote-bitbucket","remote-bitbucketServer","remote-azureDevops","tag","stash","check","loading","warning","added","modified","deleted","renamed","resolved","pull-request","show","hide","branch","graph","commit","author","datetime","message","changes","files"].forEach(t=>{e[t]=(0,R.createElement)("span",{className:`graph-icon icon--${t}`})}),["upstream-ahead","upstream-behind"].forEach(t=>{e[t]=(0,R.createElement)("span",{className:`graph-icon mini-icon icon--${t}`})}),e.settings=(0,R.createElement)("span",{className:"graph-icon icon--settings",style:{fontSize:"1.1rem",right:"0px",top:"-1px"}}),e})(),cw=e=>cy[e],cC=(()=>{switch(sx?"web-windows":sS?"web-macOS":sC?"web-linux":"web"){case"web-macOS":return"darwin";case"web-windows":return"win32";default:return"linux"}})();function cS({subscriber:e,nonce:t,state:o,onChooseRepository:n,onColumnsChange:r,onDimMergeCommits:i,onDoubleClickRef:s,onDoubleClickRow:a,onEnsureRowPromise:l,onMissingAvatars:c,onMissingRefsMetadata:d,onMoreRows:h,onRefsVisibilityChange:u,onSearch:p,onSearchPromise:f,onSearchOpenInView:m,onSelectionChange:g,onExcludeType:b,onIncludeOnlyRef:v,onUpdateGraphConfiguration:y}){let w=(0,R.useRef)(null),[C,S]=(0,R.useState)(o.rows??[]),[x,_]=(0,R.useState)(o.rowsStats),[k,E]=(0,R.useState)(o.rowsStatsLoading),[O,I]=(0,R.useState)(o.avatars),[M,D]=(0,R.useState)(o.downstreams??{}),[A,$]=(0,R.useState)(o.refsMetadata),[P,N]=(0,R.useState)(o.repositories??[]),[z,H]=(0,R.useState)(P.find(e=>e.path===o.selectedRepository)),[L,F]=(0,R.useState)(o.branchState),[W,G]=(0,R.useState)(o.selectedRows),[B,U]=(0,R.useState)(o.activeRow),[V,j]=(0,R.useState)(o.activeDay),[Z,q]=(0,R.useState)(o.visibleDays),[K,et]=(0,R.useState)(o.config),[eo,ec]=(0,R.useState)(o.columns),[eu,ep]=(0,R.useState)(o.excludeRefs),[ef,em]=(0,R.useState)(o.excludeTypes),[eg,eb]=(0,R.useState)(o.includeOnlyRefs),[ev,ey]=(0,R.useState)(o.context),[ew,eC]=(0,R.useState)(o.paging?.hasMore??!1),[eS,ex]=(0,R.useState)(o.loading),[e_,eR]=(0,R.useState)(o.theming),[eT,ek]=(0,R.useState)(o.branchName),[eE,eO]=(0,R.useState)(o.lastFetched),[eI,eM]=(0,R.useState)(o.windowFocused),[eD,eA]=(0,R.useState)(o.allowed??!1),[e$,eP]=(0,R.useState)(o.subscription),eN=(0,R.useRef)(null),[ez,eH]=(0,R.useState)(void 0),{results:eL,resultsError:eF}=cT(o),[eW,eG]=(0,R.useState)(eL),[eB,eU]=(0,R.useState)(eF),[eV,ej]=(0,R.useState)(!1),[eZ,eq]=(0,R.useState)(!1),[eY,eQ]=(0,R.useState)(o.workingTreeStats??{added:0,modified:0,deleted:0}),eX=(0,R.useRef)(void 0),eJ=(0,R.useRef)(new Set),e0=(0,R.useRef)(new Set);function e1(e,t,o){switch(o&&eR(e.theming),t){case"didChangeTheme":o||eR(e.theming);break;case X:I(e.avatars);break;case en:eM(e.windowFocused);break;case J:$(e.refsMetadata);break;case ee:ec(e.columns),ey(e.context);break;case ei:S(e.rows??[]),_(e.rowsStats),E(e.rowsStatsLoading),G(e.selectedRows),I(e.avatars),D(e.downstreams??{}),$(e.refsMetadata),eC(e.paging?.hasMore??!1),ex(e.loading);break;case es:_(e.rowsStats),E(e.rowsStatsLoading);break;case ed:{let{results:t,resultsError:o}=cT(e);eU(o),eG(t),G(e.selectedRows),eq(!1);break}case Y:et(e.config);break;case ea:G(e.selectedRows);break;case er:ep(e.excludeRefs),em(e.excludeTypes),eb(e.includeOnlyRefs);break;case Q:eA(e.allowed??!1),eP(e.subscription);break;case el:eQ(e.workingTreeStats??{added:0,modified:0,deleted:0});break;case eh:eO(e.lastFetched);break;default:{eA(e.allowed??!1),o||eR(e.theming),ek(e.branchName),eO(e.lastFetched),ec(e.columns),S(e.rows??[]),_(e.rowsStats),E(e.rowsStatsLoading),eQ(e.workingTreeStats??{added:0,modified:0,deleted:0}),et(e.config),G(e.selectedRows),ep(e.excludeRefs),em(e.excludeTypes),eb(e.includeOnlyRefs),ey(e.context),I(e.avatars??{}),D(e.downstreams??{}),F(e.branchState),$(e.refsMetadata),eC(e.paging?.hasMore??!1),N(e.repositories??[]),H(P.find(t=>t.path===e.selectedRepository)),eP(e.subscription);let{results:t,resultsError:n}=cT(e);eU(n),eG(t),ex(e.loading)}}}(0,R.useEffect)(()=>e?.(e1),[]);let e2=e=>{if("Enter"===e.key||" "===e.key){let t=cR(B??o.activeRow)?.id;if(null==t)return;let n=w.current?.graphContainerRef.current;if(!e.composedPath().some(e=>e===n))return;let r=C.find(e=>e.sha===t);null!=r&&a?.(r,"Enter"!==e.key)}};(0,R.useEffect)(()=>(window.addEventListener("keydown",e2),()=>{window.removeEventListener("keydown",e2)}),[B]);let e5=(0,R.useMemo)(()=>{let e,t,o,n,r,i,s,a,l,c;if(!K?.minimap)return;let d=(K?.minimapDataType??"commits")==="lines";if(d&&null==x)return;let h=new Map,u=new Map,p=K?.minimapMarkerTypes??[],f={head:void 0,branch:void 0,remote:void 0,tag:void 0};for(let m=C.length-1;m>=0;m--)(e=ck((a=C[m]).date))!==t&&(t=e,f={head:void 0,branch:void 0,remote:void 0,tag:void 0}),a.heads?.length&&(p.includes("head")||p.includes("localBranches"))&&(f.branch=a.sha,n=[],a.heads.forEach(e=>{e.isCurrentHead&&(f.head=a.sha),(p.includes("localBranches")||p.includes("head")&&e.isCurrentHead)&&n.push({type:"branch",name:e.name,current:e.isCurrentHead&&p.includes("head")})}),null==(o=u.get(e))?u.set(e,n):o.push(...n)),a.remotes?.length&&(p.includes("upstream")||p.includes("remoteBranches")||p.includes("localBranches"))&&(f.remote=a.sha,r=[],a.remotes.forEach(e=>{let t=!1,o=M?.[`${e.owner}/${e.name}`]?.length;e.current&&(f.remote=a.sha,t=!0),(p.includes("remoteBranches")||p.includes("upstream")&&t||p.includes("localBranches")&&o)&&r.push({type:"remote",name:`${e.owner}/${e.name}`,current:t&&p.includes("upstream")})}),null==(o=u.get(e))?u.set(e,r):o.push(...r)),"stash-node"===a.type&&p.includes("stashes")&&(i={type:"stash",name:a.message},null==(o=u.get(e))?u.set(e,[i]):o.push(i)),a.tags?.length&&p.includes("tags")&&(f.tag=a.sha,s=a.tags.map(e=>({type:"tag",name:e.name})),null==(o=u.get(e))?u.set(e,s):o.push(...s)),null==(l=h.get(e))?d?null!=(c=x[a.sha])&&(l={activity:{additions:c.additions,deletions:c.deletions},commits:1,files:c.files,sha:a.sha},h.set(e,l)):(l={commits:1,sha:a.sha},h.set(e,l)):(l.commits++,l.sha=f.head??f.branch??f.remote??f.tag??l.sha,d&&null!=(c=x[a.sha])&&(null==l.activity?l.activity={additions:c.additions,deletions:c.deletions}:(l.activity.additions+=c.additions,l.activity.deletions+=c.deletions),l.files=(l.files??0)+c.files));return{stats:h,markers:u}},[C,x,M,K?.minimap,K?.minimapDataType,K?.minimapMarkerTypes]),e3=(0,R.useMemo)(()=>{if(!K?.minimap||!K.minimapMarkerTypes?.includes("highlights"))return;let e=new Map;if(eW?.ids!=null){let t,o,n;for([o,n]of Object.entries(eW.ids))t=ck(n.date),null==e.get(t)&&e.set(t,{type:"search-result",sha:o})}return e},[eW,K?.minimap,K?.minimapMarkerTypes]),e6=e=>{let{sha:t}=e.detail;if(null==t){let o=e.detail.date?.getTime();if(null==o)return;t=C.reduce((e,t)=>Math.abs(t.date-o)<Math.abs(e.date-o)?t:e).sha}w.current?.selectCommits([t],!1,!0)},e4=e=>{if(K?.minimapMarkerTypes==null)return;let t=e.target,o=t.value;if(t.checked){if(!K.minimapMarkerTypes.includes(o)){let e=[...K.minimapMarkerTypes,o];et({...K,minimapMarkerTypes:e}),y?.({minimapMarkerTypes:e})}}else{let e=K.minimapMarkerTypes.indexOf(o);if(-1!==e){let t=[...K.minimapMarkerTypes];t.splice(e,1),et({...K,minimapMarkerTypes:t}),y?.({minimapMarkerTypes:t})}}};(0,R.useEffect)(()=>{null==eB&&null!=eW&&0!==eW.count&&null!=ez&&eN.current?.logSearch(ez)},[eW]);let e7=(0,R.useMemo)(()=>{if(eW?.ids==null||!ez?.query)return 0;let e=cR(B)?.id,t=e?eW.ids[e]?.i:void 0;return null==t&&([t]=cx(eW,ez,B)),t<1?1:t+1},[B,eW]),e9=(0,R.useMemo)(()=>null==eg||0===Object.keys(eg).length,[eg]),e8=(0,R.useMemo)(()=>!e9||null!=ef&&Object.values(ef).includes(!0),[ef,e9,K?.dimMergeCommits]),te=(0,R.useMemo)(()=>!e9,[e9]),tt=e=>{let t=e.detail;eH(t);let o=t.query.length>=3;eG(void 0),eU(void 0),ej(!1),eq(o),p?.(o?t:void 0)},tr=()=>{null!=ez&&m?.(ez)},ti=async e=>{if(null==l||eJ.current.has(e))return e;if(e0.current.has(e))return;let t=setTimeout(()=>{t=void 0,ex(!0)},500),o=await l(e,!1);if(null==t?ex(!1):clearTimeout(t),o?.id===e)return eJ.current.add(e),e;null!=o&&e0.current.add(e)},ts=async e=>{let t,o,n;if(null==eW)return;let r=e.detail?.direction??"next",i=eW,s=i.count;"first"===r?(n=!1,t=0):"last"===r?(n=!1,t=-1):(n="next"===r,[t,o]=cx(i,ez,B,n));let a=0;for(;a<1e3;){if(a++,-1==t){if(n){if(null!=ez&&i?.paging?.hasMore){let e;eq(!0);try{e=await f?.(ez,{more:!0})}finally{eq(!1)}e?.results==null||"error"in e.results?t=0:s<e.results.count?(i=e.results,t=s,s=i.count):t=0}else t=0}else if("last"===r&&null!=ez&&i?.paging?.hasMore){let e;eq(!0);try{e=await f?.(ez,{limit:0,more:!0})}finally{eq(!1)}e?.results==null||"error"in e.results||(s<e.results.count&&(s=(i=e.results).count),t=s)}else t=s-1}if(null!=(o=o??function(e,t){let{ids:o}=e;for(let e in o)if(o[e].i===t)return e}(i,t))&&null!=(o=await ti(o)))break;ej(!0),t=c_(t,n,i,ez)}null!=o&&queueMicrotask(()=>w.current?.selectCommits([o],!1,!0))},ta=()=>{n?.()},tl=e=>{let t=e.target,o=t.value;if(!["branch-all","branch-current"].includes(o)&&!["remotes","stashes","tags","mergeCommits"].includes(o))return;let n=t.checked;if("mergeCommits"===o){i?.(n);return}let r=ef?.[o];(null==r&&n||null!=r&&r!==n)&&(em({...ef,[o]:n}),b?.(o,n))};return T().createElement(T().Fragment,null,T().createElement("header",{className:"titlebar graph-app__header"},T().createElement("div",{className:`titlebar__row titlebar__row--wrap${eD?z&&L?.provider?.url?"":" no-remote-provider":" disallowed"}`},z&&L?.provider?.url&&T().createElement("a",{href:L.provider.url,className:"action-button",style:{marginRight:"-0.5rem"},title:`Open Repository on ${L.provider.name}`,"aria-label":`Open Repository on ${L.provider.name}`},T().createElement("span",{className:"cloud"===L.provider.icon?"codicon codicon-cloud action-button__icon":`glicon glicon-provider-${L.provider.icon} action-button__icon`,"aria-hidden":"true"})),T().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Switch to Another Repository...","aria-label":"Switch to Another Repository...",disabled:P.length<2,onClick:()=>ta()},z?.formattedName??"none selected",P.length>1&&T().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),eD&&z&&T().createElement(T().Fragment,null,T().createElement("span",null,T().createElement("span",{className:"codicon codicon-chevron-right"})),T().createElement("a",{href:s_("gitlens.graph.switchToAnotherBranch",o.webviewId,o.webviewInstanceId),className:"action-button",title:"Switch to Another Branch...","aria-label":"Switch to Another Branch..."},eT,T().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),T().createElement("span",null,T().createElement("span",{className:"codicon codicon-chevron-right"})),(()=>{let e=eE&&new Date(eE),t=e&&0!==e.getTime()?lv(e):void 0,n="fetch",r="sync",i="Fetch",s=!1,a=!1,l="",c="Fetch from",d="remote";if(L){s=L.behind>0,a=L.ahead>0;let e=`Branch ${eT} is`;d=`${L.upstream}${L.provider?.name?` on ${L.provider?.name}`:""}`,s?(n="pull",r="arrow-down",i="Pull",l=`Pull from ${d}
${e} ${eK("commit",L.behind)} behind of`):a&&(n="push",r="arrow-up",i="Push",l=`Push to ${d}
${e} ${eK("commit",L.ahead)} ahead of`),l+=` ${d}`,c+=` ${d}`}if(null!=t){let e=`
Last fetched ${t}`;l+=e,c+=e}return T().createElement("div",{className:"titlebar__group"},(s||a)&&T().createElement("a",{href:s_(`gitlens.graph.${n}`,o.webviewId,o.webviewInstanceId),className:`action-button${s?" is-behind":""}${a?" is-ahead":""}`,title:l},T().createElement("span",{className:`codicon codicon-${r} action-button__icon`}),i,(a||s)&&T().createElement("span",null,T().createElement("span",{className:"pill action-button__pill"},a&&T().createElement("span",null,L.ahead," ",T().createElement("span",{className:"codicon codicon-arrow-up"})),s&&T().createElement("span",null,L.behind," ",T().createElement("span",{className:"codicon codicon-arrow-down"}))))),T().createElement("a",{href:s_("gitlens.graph.fetch",o.webviewId,o.webviewInstanceId),className:"action-button",title:c},T().createElement("span",{className:"codicon codicon-sync action-button__icon"}),"Fetch",t&&T().createElement("span",{className:"action-button__small"},"(",t,")")))})()),T().createElement(lZ,{subscription:e$}),T().createElement("div",{className:"popover"},T().createElement("a",{href:"command:gitlens.showFocusPage",className:"action-button popover__trigger"},"Try the Focus Preview"),T().createElement(aa,{placement:"top end",className:"popover__content"},"Bring all of your GitHub pull requests and issues into a unified actionable to help to you more easily juggle work in progress, pending work, reviews, and more"))),eD&&T().createElement("div",{className:"titlebar__row"},T().createElement("div",{className:"titlebar__group"},T().createElement(ae,null,T().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Filter Graph"},T().createElement("span",{className:`codicon codicon-filter${e8?"-filled":""}`}),te&&T().createElement("span",{className:"action-button__indicator"}),T().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),T().createElement(s1,{slot:"content"},T().createElement(s0,null,"Filter options"),T().createElement(sJ,{role:"none"},T().createElement(sv,{orientation:"vertical",value:e9&&z?.isVirtual!==!0?"branch-all":"branch-current",readOnly:z?.isVirtual===!0},z?.isVirtual!==!0&&T().createElement(sb,{name:"branching-toggle",value:"branch-all",onChange:e=>{let t=e.target,o=t.value,n=t.checked,r="branch-all"===o&&n;e9!==r&&v?.(r)}},"Show All Branches"),T().createElement(sb,{name:"branching-toggle",value:"branch-current"},"Show Current Branch Only"))),T().createElement(sX,null),z?.isVirtual!==!0&&T().createElement(T().Fragment,null,T().createElement(sJ,{role:"none"},T().createElement(sg,{value:"remotes",onChange:tl,defaultChecked:ef?.remotes??!1},"Hide Remote-only Branches")),T().createElement(sJ,{role:"none"},T().createElement(sg,{value:"stashes",onChange:tl,defaultChecked:ef?.stashes??!1},"Hide Stashes"))),T().createElement(sJ,{role:"none"},T().createElement(sg,{value:"tags",onChange:tl,defaultChecked:ef?.tags??!1},"Hide Tags")),T().createElement(sX,null),T().createElement(sJ,{role:"none"},T().createElement(sg,{value:"mergeCommits",onChange:tl,defaultChecked:K?.dimMergeCommits??!1},"Dim Merge Commit Rows")))),T().createElement("span",null,T().createElement("span",{className:"action-divider"})),T().createElement(cs,{ref:eN,label:"Search Commits",step:e7,total:eW?.count??0,valid:!!(ez?.query&&ez.query.length>2),more:eW?.paging?.hasMore??!1,searching:eZ,value:ez?.query??"",errorMessage:eB?.error??"",resultsHidden:eV,resultsLoaded:null!=eW,onChange:e=>tt(e),onNavigate:e=>ts(e),onOpenInView:()=>tr()}),T().createElement("span",null,T().createElement("span",{className:"action-divider"})),T().createElement("span",{className:"button-group"},T().createElement("button",{type:"button",role:"checkbox",className:"action-button",title:"Toggle Minimap","aria-label":"Toggle Minimap","aria-checked":K?.minimap??!1,onClick:e=>{y?.({minimap:!K?.minimap})}},T().createElement("span",{className:"codicon codicon-graph-line action-button__icon"})),T().createElement(ae,{position:"right"},T().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Minimap Options"},T().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),T().createElement(s1,{slot:"content"},T().createElement(s0,null,"Chart"),T().createElement(sJ,{role:"none"},T().createElement(sv,{orientation:"vertical",value:K?.minimapDataType??"commits"},T().createElement(sb,{name:"minimap-datatype",value:"commits",onChange:e=>{if(null==K)return;let t=e.target;if("commits"===t.value){let e=t.checked?"commits":"lines";if(K.minimapDataType===e)return;et({...K,minimapDataType:e}),y?.({minimapDataType:e})}}},"Commits"),T().createElement(sb,{name:"minimap-datatype",value:"lines"},"Lines Changed"))),T().createElement(sX,null),T().createElement(s0,null,"Markers"),T().createElement(sJ,{role:"none"},T().createElement(sg,{value:"localBranches",onChange:e4,defaultChecked:K?.minimapMarkerTypes?.includes("localBranches")??!1},T().createElement("span",{className:"minimap-marker-swatch","data-marker":"localBranches"}),"Local Branches")),T().createElement(sJ,{role:"none"},T().createElement(sg,{value:"remoteBranches",onChange:e4,defaultChecked:K?.minimapMarkerTypes?.includes("remoteBranches")??!0},T().createElement("span",{className:"minimap-marker-swatch","data-marker":"remoteBranches"}),"Remote Branches")),T().createElement(sJ,{role:"none"},T().createElement(sg,{value:"stashes",onChange:e4,defaultChecked:K?.minimapMarkerTypes?.includes("stashes")??!1},T().createElement("span",{className:"minimap-marker-swatch","data-marker":"stashes"}),"Stashes")),T().createElement(sJ,{role:"none"},T().createElement(sg,{value:"tags",onChange:e4,defaultChecked:K?.minimapMarkerTypes?.includes("tags")??!0},T().createElement("span",{className:"minimap-marker-swatch","data-marker":"tags"}),"Tags"))))))),T().createElement("div",{className:`progress-container infinite${eS||k?" active":""}`,role:"progressbar"},T().createElement("div",{className:"progress-bar"}))),T().createElement(lG,{className:"graph-app__gate",appearance:"alert",state:e$?.state,visible:!eD},T().createElement("p",{slot:"feature"},"Helps you easily visualize your repository and keep track of all work in progress.",T().createElement("br",null),T().createElement("br",null),"Use the rich commit search to find exactly what you're looking for. It's powerful filters allow you to search by a specific commit, message, author, a changed file or files, or even a specific code change.")),K?.minimap&&T().createElement(cb,{ref:eX,activeDay:V,data:e5?.stats,dataType:K?.minimapDataType??"commits",markers:e5?.markers,searchResults:e3,visibleDays:Z,onSelected:e=>e6(e)}),T().createElement("main",{id:"main",className:"graph-app__main","aria-hidden":!eD},void 0!==z?T().createElement(T().Fragment,null,T().createElement(tn(),{ref:w,avatarUrlByEmail:O,columnsSettings:eo,contexts:ev,cssVariables:e_?.cssVariables,dimMergeCommits:K?.dimMergeCommits,downstreamsByUpstream:M,enabledRefMetadataTypes:K?.enabledRefMetadataTypes,enabledScrollMarkerTypes:K?.scrollMarkerTypes,enableShowHideRefsOptions:!0,enableMultiSelection:K?.enableMultiSelection,excludeRefsById:eu,excludeByType:ef,formatCommitDateTime:cv(K),getExternalIcon:cw,graphRows:C,hasMoreCommits:ew,highlightedShas:eW?.ids,highlightRowsOnRefHover:K?.highlightRowsOnRefHover,includeOnlyRefsById:eg,scrollRowPadding:K?.scrollRowPadding,showGhostRefsOnRowHover:K?.showGhostRefsOnRowHover,showRemoteNamesOnRefs:K?.showRemoteNamesOnRefs,isContainerWindowFocused:eI,isLoadingRows:eS,isSelectedBySha:W,nonce:t,onColumnResized:(e,t)=>{t.width&&r?.({[e]:{width:t.width,isHidden:t.isHidden,mode:t.mode,order:t.order}})},onDoubleClickGraphRow:(e,t,o)=>{t!==to.refZone&&a?.(o,!0)},onDoubleClickGraphRef:(e,t,o,n)=>{t.length>0&&s?.(t[0],n)},onGraphColumnsReOrdered:e=>{let t={};for(let[o,n]of Object.entries(e))t[o]={...n};r?.(t)},onGraphMouseLeave:eX.current?e=>{eX.current?.unselect(void 0,!0)}:void 0,onGraphRowHovered:eX.current?(e,t,o)=>{t!==to.refZone&&null!=eX.current&&eX.current?.select(o.date,!0)}:void 0,onSettingsClick:e=>{let t=e.nativeEvent,o=new MouseEvent("contextmenu",{bubbles:!0,clientX:t.clientX,clientY:t.clientY});t.target?.dispatchEvent(o),t.stopImmediatePropagation()},onSelectGraphRows:e=>{let t=e[0],n=null!=t?`${t.sha}|${t.date}`:void 0;o.activeRow=n,U(n),j(t?.date),g?.(e)},onToggleRefsVisibilityClick:(e,t,o)=>{u?.(t,o)},onEmailsMissingAvatarUrls:e=>{c?.(e)},onRefsMissingMetadata:e=>{d?.(e)},onShowMoreCommits:()=>{ex(!0),h?.()},onGraphVisibleRowsChanged:eX.current?(e,t)=>{q({top:new Date(e.date).setHours(23,59,59,999),bottom:new Date(t.date).setHours(0,0,0,0)})}:void 0,platform:cC,refMetadataById:A,rowsStats:x,rowsStatsLoading:k,shaLength:K?.idLength,themeOpacityFactor:e_?.themeOpacityFactor,useAuthorInitialsForAvatars:!K?.avatars,workDirStats:eY})):T().createElement("p",null,"No repository is selected")))}function cx(e,t,o,n=!0){let r,i,s;if(null==e.ids)return[0,void 0];let a=cR(o),l=a?.id;if(null==l)return[0,void 0];let c=e.ids[l];if(null!=c&&(r=c.i,i=l,s=r),null==r){let t,o,l,c;let d=a?.date!=null?a.date+(n?1:-1):void 0;if(null==d)return[0,void 0];for([o,{date:l,i:t}]of Object.entries(e.ids))n?l<d&&(null==c||l>c)&&(i=o,c=l,s=t):l>d&&(null==c||l<=c)&&(i=o,c=l,s=t);r=null==s?e.count-1:s+(n?-1:1)}return(r=c_(r,n,e,t))===s?[r,i]:[r,void 0]}function c_(e,t,o,n){return t?e<o.count-1?e++:e=null!=n&&o?.paging?.hasMore?-1:0:e>0?e--:e=null!=n&&o?.paging?.hasMore?-1:o.count-1,e}function cR(e){if(null==e)return;let[t,o]=e.split("|");return{id:t,date:Number(o)}}function cT(e){let t,o;return null!=e.searchResults&&("error"in e.searchResults?o=e.searchResults:t=e.searchResults),{results:t,resultsError:o}}function ck(e){return new Date(e).setHours(0,0,0,0)}var cE=Object.defineProperty,cO=Object.getOwnPropertyDescriptor;let cI=new Map([["--vscode-gitlens-graphLane1Color","#15a0bf"],["--vscode-gitlens-graphLane2Color","#0669f7"],["--vscode-gitlens-graphLane3Color","#8e00c2"],["--vscode-gitlens-graphLane4Color","#c517b6"],["--vscode-gitlens-graphLane5Color","#d90171"],["--vscode-gitlens-graphLane6Color","#cd0101"],["--vscode-gitlens-graphLane7Color","#f25d2e"],["--vscode-gitlens-graphLane8Color","#f2ca33"],["--vscode-gitlens-graphLane9Color","#7bd938"],["--vscode-gitlens-graphLane10Color","#2ece9d"]]);class cM extends tt{constructor(){super("GraphApp")}onBind(){let e=super.onBind?.()??[];this.log("onBind()"),this.ensureTheming(this.state);let t=document.getElementById("root");return null!=t&&((0,k.render)(T().createElement(cS,{nonce:this.state.nonce,state:this.state,subscriber:e=>this.registerUpdateStateCallback(e),onColumnsChange:e$(e=>this.onColumnsChanged(e),250),onDimMergeCommits:e=>this.onDimMergeCommits(e),onRefsVisibilityChange:(e,t)=>this.onRefsVisibilityChanged(e,t),onChooseRepository:e$(()=>this.onChooseRepository(),250),onDoubleClickRef:(e,t)=>this.onDoubleClickRef(e,t),onDoubleClickRow:(e,t)=>this.onDoubleClickRow(e,t),onMissingAvatars:(...e)=>this.onGetMissingAvatars(...e),onMissingRefsMetadata:(...e)=>this.onGetMissingRefsMetadata(...e),onMoreRows:(...e)=>this.onGetMoreRows(...e),onSearch:e$((e,t)=>this.onSearch(e,t),250),onSearchPromise:(...e)=>this.onSearchPromise(...e),onSearchOpenInView:(...e)=>this.onSearchOpenInView(...e),onSelectionChange:e$(e=>this.onSelectionChanged(e),250),onEnsureRowPromise:this.onEnsureRowPromise.bind(this),onExcludeType:this.onExcludeType.bind(this),onIncludeOnlyRef:this.onIncludeOnlyRef.bind(this),onUpdateGraphConfiguration:this.onUpdateGraphConfiguration.bind(this)}),t),e.push({dispose:()=>(0,k.unmountComponentAtNode)(t)})),e}onMessageReceived(e){let t=eB.get(eU);switch(e.method){case K.method:M(K,e,(e,t)=>{this.setState({...this.state,...e.state},t)});break;case eh.method:M(eh,e,(e,t)=>{this.state.lastFetched=e.lastFetched,this.setState(this.state,t)});break;case X.method:M(X,e,(e,t)=>{this.state.avatars=e.avatars,this.setState(this.state,t)});break;case eo.method:M(eo,e,e=>{window.dispatchEvent(new CustomEvent(e.focused?"webview-focus":"webview-blur"))});break;case en.method:M(en,e,(e,t)=>{this.state.windowFocused=e.focused,this.setState(this.state,t)});break;case ee.method:M(ee,e,(e,t)=>{this.state.columns=e.columns,this.state.context={...this.state.context,header:e.context,settings:e.settingsContext},this.setState(this.state,t)});break;case er.method:M(er,e,(e,t)=>{this.state.excludeRefs=e.excludeRefs,this.state.excludeTypes=e.excludeTypes,this.state.includeOnlyRefs=e.includeOnlyRefs,this.setState(this.state,t)});break;case J.method:M(J,e,(e,t)=>{this.state.refsMetadata=e.metadata,this.setState(this.state,t)});break;case ei.method:M(ei,e,(e,o)=>{var n,r;let i;if(e.rows.length&&e.paging?.startingCursor!=null&&null!=this.state.rows){let o=this.state.rows,n=o[o.length-1]?.sha,r=o.length,s=e.rows.length;if(this.log(t,`paging in ${s} rows into existing ${r} rows at ${e.paging.startingCursor} (last existing row: ${n})`),(i=[]).length=r+s,e.paging.startingCursor!==n){let n;this.log(t,`searching for ${e.paging.startingCursor} in existing rows`);let a=0;for(n of o)if(i[a++]=n,n.sha===e.paging.startingCursor){this.log(t,`found ${e.paging.startingCursor} in existing rows`),(r=a)!==o.length&&(i.length=r+s);break}}else for(let e=0;e<r;e++)i[e]=o[e];for(let t=0;t<s;t++)i[r+t]=e.rows[t]}else this.log(t,`setting to ${e.rows.length} rows`),i=0===e.rows.length?this.state.rows:e.rows;this.state.avatars=e.avatars,this.state.downstreams=e.downstreams,void 0!==e.refsMetadata&&(this.state.refsMetadata=e.refsMetadata),this.state.rows=i,this.state.paging=e.paging,null!=e.rowsStats&&(this.state.rowsStats={...this.state.rowsStats,...e.rowsStats}),this.state.rowsStatsLoading=e.rowsStatsLoading,null!=e.selectedRows&&(this.state.selectedRows=e.selectedRows),this.state.loading=!1,this.setState(this.state,o),n=` \u2022 rows=${this.state.rows?.length??0}`,null!=t&&(t.exitDetails=n,null!=r&&(t.exitFailed=r))});break;case es.method:M(es,e,(e,t)=>{this.state.rowsStats={...this.state.rowsStats,...e.rowsStats},this.state.rowsStatsLoading=e.rowsStatsLoading,this.setState(this.state,t)});break;case et.method:M(et,e,(e,t)=>{this.state.context={...this.state.context,settings:e.context},this.setState(this.state,t)});break;case ed.method:M(ed,e,(e,t)=>{this.state.searchResults=e.results,null!=e.selectedRows&&(this.state.selectedRows=e.selectedRows),this.setState(this.state,t)});break;case ea.method:M(ea,e,(e,t)=>{this.state.selectedRows=e.selection,this.setState(this.state,t)});break;case Y.method:M(Y,e,(e,t)=>{this.state.config=e.config,this.setState(this.state,t)});break;case Q.method:M(Q,e,(e,t)=>{this.state.subscription=e.subscription,this.state.allowed=e.allowed,this.setState(this.state,t)});break;case el.method:M(el,e,(e,t)=>{this.state.workingTreeStats=e.stats,this.setState(this.state,t)});break;default:super.onMessageReceived?.(e)}}onThemeUpdated(e){let t=document.documentElement.style;t.setProperty("--graph-theme-opacity-factor",e.isLightTheme?"0.5":"1"),t.setProperty("--color-graph-actionbar-background",e.isLightTheme?ev(e.colors.background,5):ey(e.colors.background,5)),t.setProperty("--color-graph-background",e.isLightTheme?ev(e.colors.background,5):ey(e.colors.background,5)),t.setProperty("--color-graph-background2",e.isLightTheme?ev(e.colors.background,10):ey(e.colors.background,10));let o=eR("--color-graph-text-selected-row",e.computedStyle);t.setProperty("--color-graph-text-dimmed-selected",ew(o,50)),t.setProperty("--color-graph-text-dimmed",ew(e.colors.foreground,20)),t.setProperty("--color-graph-text-normal",ew(e.colors.foreground,85)),t.setProperty("--color-graph-text-secondary",ew(e.colors.foreground,65)),t.setProperty("--color-graph-text-disabled",ew(e.colors.foreground,50));let n=ek.from(e.colors.background),r=ek.from(e.colors.foreground),i=n.getRelativeLuminance(),s=r.getRelativeLuminance(),a=e=>{let t,o;return s>i?(o=s,t=i):(t=s,o=i),e/1*(o-t)+t},l=ek.fromCssVariable("--vscode-scrollbarSlider-background",e.computedStyle);t.setProperty("--color-graph-minimap-visibleAreaBackground",l.luminance(a(e.isLightTheme?.6:.1)).toString()),e.isLightTheme||(l=ek.fromCssVariable("--color-graph-scroll-marker-local-branches",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchBackground",l.luminance(a(.55)).toString()),l=ek.fromCssVariable("--color-graph-scroll-marker-local-branches",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchBorder",l.luminance(a(.55)).toString()),l=ek.fromCssVariable("--vscode-editor-foreground",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchForeground",l.isLighter()?l.luminance(.01).toString():l.luminance(.99).toString()),l=ek.fromCssVariable("--vscode-editor-foreground",e.computedStyle),t.setProperty("--color-graph-minimap-tip-headForeground",l.isLighter()?l.luminance(.01).toString():l.luminance(.99).toString()),l=ek.fromCssVariable("--vscode-editor-foreground",e.computedStyle),t.setProperty("--color-graph-minimap-tip-upstreamForeground",l.isLighter()?l.luminance(.01).toString():l.luminance(.99).toString()));let c=a(e.isLightTheme?.72:.064),d=a(e.isLightTheme?.64:.076),h=a(e.isLightTheme?.92:.02);l=ek.fromCssVariable("--branch-status-ahead-foreground",e.computedStyle),t.setProperty("--branch-status-ahead-background",l.luminance(c).toString()),t.setProperty("--branch-status-ahead-hover-background",l.luminance(d).toString()),t.setProperty("--branch-status-ahead-pill-background",l.luminance(h).toString()),l=ek.fromCssVariable("--branch-status-behind-foreground",e.computedStyle),t.setProperty("--branch-status-behind-background",l.luminance(c).toString()),t.setProperty("--branch-status-behind-hover-background",l.luminance(d).toString()),t.setProperty("--branch-status-behind-pill-background",l.luminance(h).toString()),l=ek.fromCssVariable("--branch-status-both-foreground",e.computedStyle),t.setProperty("--branch-status-both-background",l.luminance(c).toString()),t.setProperty("--branch-status-both-hover-background",l.luminance(d).toString()),t.setProperty("--branch-status-both-pill-background",l.luminance(h).toString()),e.isInitializing||(this.state.theming=void 0,this.setState(this.state,"didChangeTheme"))}setState(e,t){let o=this.ensureTheming(e);this.state=e,super.setState({timestamp:e.timestamp,selectedRepository:e.selectedRepository}),this.updateStateCallback?.(this.state,t,o)}ensureTheming(e){return null==e.theming&&(e.theming=this.getGraphTheming(),!0)}getGraphTheming(){let e;let t=window.getComputedStyle(document.documentElement),o=eR("--color-background",t),n={},r=0;for(let[i,s]of cI){for(let a of(e=eR(i,t)||s,n[`--column-${r}-color`]=e,n[`--graph-color-${r}`]=e,[15,25,45,50]))n[`--graph-color-${r}-bg${a}`]=function(e,t,o){let n=ek.from(e),r=ek.from(t);return null==n||null==r?e:n.mix(r,o/100).toString()}(o,e,a);for(let t of[10,50])n[`--graph-color-${r}-f${t}`]=ew(e,t);r++}let i=document.body.classList.contains("vscode-high-contrast");return{cssVariables:{"--app__bg0":o,"--panel__bg0":eR("--color-graph-background",t),"--panel__bg1":eR("--color-graph-background2",t),"--section-border":eR("--color-graph-background2",t),"--selected-row":eR("--color-graph-selected-row",t),"--selected-row-border":i?`1px solid ${eR("--color-graph-contrast-border",t)}`:"none","--hover-row":eR("--color-graph-hover-row",t),"--hover-row-border":i?`1px dashed ${eR("--color-graph-contrast-border",t)}`:"none","--scrollable-scrollbar-thickness":eR("--graph-column-scrollbar-thickness",t),"--scroll-thumb-bg":eR("--vscode-scrollbarSlider-background",t),"--scroll-marker-head-color":eR("--color-graph-scroll-marker-head",t),"--scroll-marker-upstream-color":eR("--color-graph-scroll-marker-upstream",t),"--scroll-marker-highlights-color":eR("--color-graph-scroll-marker-highlights",t),"--scroll-marker-local-branches-color":eR("--color-graph-scroll-marker-local-branches",t),"--scroll-marker-remote-branches-color":eR("--color-graph-scroll-marker-remote-branches",t),"--scroll-marker-stashes-color":eR("--color-graph-scroll-marker-stashes",t),"--scroll-marker-tags-color":eR("--color-graph-scroll-marker-tags",t),"--scroll-marker-selection-color":eR("--color-graph-scroll-marker-selection",t),"--stats-added-color":eR("--color-graph-stats-added",t),"--stats-deleted-color":eR("--color-graph-stats-deleted",t),"--stats-files-color":eR("--color-graph-stats-files",t),"--stats-bar-border-radius":eR("--graph-stats-bar-border-radius",t),"--stats-bar-height":eR("--graph-stats-bar-height",t),"--text-selected":eR("--color-graph-text-selected",t),"--text-selected-row":eR("--color-graph-text-selected-row",t),"--text-hovered":eR("--color-graph-text-hovered",t),"--text-dimmed-selected":eR("--color-graph-text-dimmed-selected",t),"--text-dimmed":eR("--color-graph-text-dimmed",t),"--text-normal":eR("--color-graph-text-normal",t),"--text-secondary":eR("--color-graph-text-secondary",t),"--text-disabled":eR("--color-graph-text-disabled",t),"--text-accent":eR("--color-link-foreground",t),"--text-inverse":eR("--vscode-input-background",t),"--text-bright":eR("--vscode-input-background",t),...n},themeOpacityFactor:parseInt(eR("--graph-theme-opacity-factor",t))||1}}onColumnsChanged(e){this.sendCommand(B,{config:e})}onRefsVisibilityChanged(e,t){this.sendCommand(U,{refs:e,visible:t})}onChooseRepository(){this.sendCommand($,void 0)}onDimMergeCommits(e){this.sendCommand(P,{dim:e})}onDoubleClickRef(e,t){this.sendCommand(N,{type:"ref",ref:e,metadata:t})}onDoubleClickRow(e,t){this.sendCommand(N,{type:"row",row:{id:e.sha,type:e.type},preserveFocus:t})}onGetMissingAvatars(e){this.sendCommand(H,{emails:e})}onGetMissingRefsMetadata(e){this.sendCommand(L,{metadata:e})}onGetMoreRows(e){this.sendCommand(F,{id:e})}onSearch(e,t){null==e&&(this.state.searchResults=void 0),this.sendCommand(W,{search:e,limit:t?.limit})}async onSearchPromise(e,t){try{return await this.sendCommandWithCompletion(W,{search:e,limit:t?.limit,more:t?.more},ed)}catch{return}}onSearchOpenInView(e){this.sendCommand(G,{search:e})}async onEnsureRowPromise(e,t){try{return await this.sendCommandWithCompletion(z,{id:e,select:t},ec)}catch{return}}onExcludeType(e,t){this.sendCommand(V,{key:e,value:t})}onIncludeOnlyRef(e){this.sendCommand(Z,e?{}:{refs:[{id:"HEAD",type:"head",name:"HEAD"}]})}onUpdateGraphConfiguration(e){this.sendCommand(j,{changes:e})}onSelectionChanged(e){let t=e.filter(e=>null!=e).map(e=>({id:e.sha,type:e.type}));this.sendCommand(q,{selection:t})}registerUpdateStateCallback(e){return this.updateStateCallback=e,()=>{this.updateStateCallback=void 0}}}((e,t,o,n)=>{for(var r,i=n>1?void 0:n?cO(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&cE(t,o,i)})([eQ({args:!1,singleLine:!0},!0)],cM.prototype,"setState",1),new cM})();var l=a.q;export{l as GraphApp};