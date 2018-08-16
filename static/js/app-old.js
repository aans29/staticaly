!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function o(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return m.iterable&&(e[Symbol.iterator]=function(){return e}),e}function n(t){this.map={},t instanceof n?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function s(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function a(t){var e=new FileReader,r=s(e);return e.readAsArrayBuffer(t),r}function u(t){var e=new FileReader,r=s(e);return e.readAsText(t),r}function h(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(m.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(m.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(m.arrayBuffer&&m.blob&&v(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!B(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(h(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function y(t){var e=t.toUpperCase();return _.indexOf(e)>-1?e:t}function l(t,e){e=e||{};var r=e.body;if("string"==typeof t)this.url=t;else{if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new n(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new n(e.headers)),this.method=y(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function p(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function c(t){var e=new n;return t.split("\r\n").forEach(function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}}),e}function b(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new n(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var m={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(m.arrayBuffer)var w=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],v=function(t){return t&&DataView.prototype.isPrototypeOf(t)},B=ArrayBuffer.isView||function(t){return t&&w.indexOf(Object.prototype.toString.call(t))>-1};n.prototype.append=function(t,o){t=e(t),o=r(o);var n=this.map[t];this.map[t]=n?n+","+o:o},n.prototype.delete=function(t){delete this.map[e(t)]},n.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},n.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},n.prototype.set=function(t,o){this.map[e(t)]=r(o)},n.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},n.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),o(t)},n.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),o(t)},n.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),o(t)},m.iterable&&(n.prototype[Symbol.iterator]=n.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];l.prototype.clone=function(){return new l(this,{body:this._bodyInit})},d.call(l.prototype),d.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var A=[301,302,303,307,308];b.redirect=function(t,e){if(A.indexOf(e)===-1)throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.Headers=n,t.Request=l,t.Response=b,t.fetch=function(t,e){return new Promise(function(r,o){var n=new l(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:c(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;r(new b(e,t))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.open(n.method,n.url,!0),"include"===n.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),n.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send("undefined"==typeof n._bodyInit?null:n._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this);
!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){!function(a,c){"undefined"!=typeof b&&b.exports?b.exports=c():"function"==typeof define&&define.amd?define(c):this[a]=c()}("bowser",function(){function a(a){function c(b){var c=a.match(b);return c&&c.length>1&&c[1]||""}function d(b){var c=a.match(b);return c&&c.length>1&&c[2]||""}var e,f=c(/(ipod|iphone|ipad)/i).toLowerCase(),g=/like android/i.test(a),h=!g&&/android/i.test(a),i=/CrOS/.test(a),j=c(/edge\/(\d+(\.\d+)?)/i),k=c(/version\/(\d+(\.\d+)?)/i),l=/tablet/i.test(a),m=!l&&/[^-]mobi/i.test(a);/opera|opr/i.test(a)?e={name:"Opera",opera:b,version:k||c(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(a)?e={name:"Yandex Browser",yandexbrowser:b,version:k||c(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(a)?(e={name:"Windows Phone",windowsphone:b},j?(e.msedge=b,e.version=j):(e.msie=b,e.version=c(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(a)?e={name:"Internet Explorer",msie:b,version:c(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:i?e={name:"Chrome",chromeBook:b,chrome:b,version:c(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(a)?e={name:"Microsoft Edge",msedge:b,version:j}:/chrome|crios|crmo/i.test(a)?e={name:"Chrome",chrome:b,version:c(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:f?(e={name:"iphone"==f?"iPhone":"ipad"==f?"iPad":"iPod"},k&&(e.version=k)):/sailfish/i.test(a)?e={name:"Sailfish",sailfish:b,version:c(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(a)?e={name:"SeaMonkey",seamonkey:b,version:c(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(a)?(e={name:"Firefox",firefox:b,version:c(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(a)&&(e.firefoxos=b)):/silk/i.test(a)?e={name:"Amazon Silk",silk:b,version:c(/silk\/(\d+(\.\d+)?)/i)}:h?e={name:"Android",version:k}:/phantom/i.test(a)?e={name:"PhantomJS",phantom:b,version:c(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(a)||/rim\stablet/i.test(a)?e={name:"BlackBerry",blackberry:b,version:k||c(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(a)?(e={name:"WebOS",webos:b,version:k||c(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(a)&&(e.touchpad=b)):e=/bada/i.test(a)?{name:"Bada",bada:b,version:c(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(a)?{name:"Tizen",tizen:b,version:c(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||k}:/safari/i.test(a)?{name:"Safari",safari:b,version:k}:{name:c(/^(.*)\/(.*) /),version:d(/^(.*)\/(.*) /)},!e.msedge&&/(apple)?webkit/i.test(a)?(e.name=e.name||"Webkit",e.webkit=b,!e.version&&k&&(e.version=k)):!e.opera&&/gecko\//i.test(a)&&(e.name=e.name||"Gecko",e.gecko=b,e.version=e.version||c(/gecko\/(\d+(\.\d+)?)/i)),e.msedge||!h&&!e.silk?f&&(e[f]=b,e.ios=b):e.android=b;var n="";e.windowsphone?n=c(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):f?(n=c(/os (\d+([_\s]\d+)*) like mac os x/i),n=n.replace(/[_\s]/g,".")):h?n=c(/android[ \/-](\d+(\.\d+)*)/i):e.webos?n=c(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):e.blackberry?n=c(/rim\stablet\sos\s(\d+(\.\d+)*)/i):e.bada?n=c(/bada\/(\d+(\.\d+)*)/i):e.tizen&&(n=c(/tizen[\/\s](\d+(\.\d+)*)/i)),n&&(e.osversion=n);var o=n.split(".")[0];return l||"ipad"==f||h&&(3==o||4==o&&!m)||e.silk?e.tablet=b:(m||"iphone"==f||"ipod"==f||h||e.blackberry||e.webos||e.bada)&&(e.mobile=b),e.msedge||e.msie&&e.version>=10||e.yandexbrowser&&e.version>=15||e.chrome&&e.version>=20||e.firefox&&e.version>=20||e.safari&&e.version>=6||e.opera&&e.version>=10||e.ios&&e.osversion&&e.osversion.split(".")[0]>=6||e.blackberry&&e.version>=10.1?e.a=b:e.msie&&e.version<10||e.chrome&&e.version<20||e.firefox&&e.version<20||e.safari&&e.version<6||e.opera&&e.version<10||e.ios&&e.osversion&&e.osversion.split(".")[0]<6?e.c=b:e.x=b,e}var b=!0,c=a("undefined"!=typeof navigator?navigator.userAgent:"");return c.test=function(a){for(var b=0;b<a.length;++b){var d=a[b];if("string"==typeof d&&d in c)return!0}return!1},c._detect=a,c})},{}],2:[function(a,b,c){var d=a("bowser"),e=document.queryCommandSupported;document.queryCommandSupported=function(a){if("copy"===a||"cut"===a){if(d.chrome)return d.version>=43?!0:!1;if(d.firefox)return d.version>=41?!0:!1}return e.apply(this,arguments)}},{bowser:1}]},{},[2]);
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,o){function i(c,a){if(!n[c]){if(!e[c]){var s="function"==typeof require&&require;if(!a&&s)return s(c,!0);if(r)return r(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[c]={exports:{}};e[c][0].call(u.exports,function(t){var n=e[c][1][t];return i(n?n:t)},u,u.exports,t,e,n,o)}return n[c].exports}for(var r="function"==typeof require&&require,c=0;c<o.length;c++)i(o[c]);return i}({1:[function(t,e,n){var o=t("matches-selector");e.exports=function(t,e,n){for(var i=n?t:t.parentNode;i&&i!==document;){if(o(i,e))return i;i=i.parentNode}}},{"matches-selector":5}],2:[function(t,e,n){function o(t,e,n,o,r){var c=i.apply(this,arguments);return t.addEventListener(n,c,r),{destroy:function(){t.removeEventListener(n,c,r)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e,!0),n.delegateTarget&&o.call(t,n)}}var r=t("closest");e.exports=o},{closest:1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},{}],4:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!a.string(e))throw new TypeError("Second argument must be a String");if(!a.fn(n))throw new TypeError("Third argument must be a Function");if(a.node(t))return i(t,e,n);if(a.nodeList(t))return r(t,e,n);if(a.string(t))return c(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function c(t,e,n){return s(document.body,t,e,n)}var a=t("./is"),s=t("delegate");e.exports=o},{"./is":3,delegate:2}],5:[function(t,e,n){function o(t,e){if(r)return r.call(t,e);for(var n=t.parentNode.querySelectorAll(e),o=0;o<n.length;++o)if(n[o]==t)return!0;return!1}var i=Element.prototype,r=i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=o},{}],6:[function(t,e,n){function o(t){var e;if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}e.exports=o},{}],7:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;i>o;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,c=o.length;c>r;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if("undefined"!=typeof o)r(n,e("select"));else{var c={exports:{}};r(c,i.select),i.clipboardAction=c.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},c=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=e.action,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""},t.prototype.initSelection=function t(){this.text?this.selectFake():this.target&&this.selectTarget()},t.prototype.selectFake=function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandler=document.body.addEventListener("click",function(){return e.removeFake()}),this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="fixed",this.fakeElem.style[n?"right":"left"]="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()},t.prototype.removeFake=function t(){this.fakeHandler&&(document.body.removeEventListener("click"),this.fakeHandler=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function t(){this.selectedText=(0,i.default)(this.target),this.copyText()},t.prototype.copyText=function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(n){e=!1}this.handleResult(e)},t.prototype.handleResult=function t(e){e?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function t(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function t(){this.removeFake()},c(t,[{key:"action",set:function t(){var e=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==("undefined"==typeof e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function t(){return this._target}}]),t}();t.exports=a})},{select:6}],9:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var c={exports:{}};r(c,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=c.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=i(e),u=i(n),f=i(o),d=function(t){function e(n,o){r(this,e);var i=c(this,t.call(this));return i.resolveOptions(o),i.listenClick(n),i}return a(e,t),e.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText},e.prototype.listenClick=function t(e){var n=this;this.listener=(0,f.default)(e,"click",function(t){return n.onClick(t)})},e.prototype.onClick=function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})},e.prototype.defaultAction=function t(e){return s("action",e)},e.prototype.defaultTarget=function t(e){var n=s("target",e);return n?document.querySelector(n):void 0},e.prototype.defaultText=function t(e){return s("text",e)},e.prototype.destroy=function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(u.default);t.exports=d})},{"./clipboard-action":8,"good-listener":4,"tiny-emitter":7}]},{},[9])(9)});
/* global Clipboard, cdn_domain, devDomain */
(function (doc) {
  'use strict';

  // -- Constants --------------------------------------------------------------
  const GITHUB_API_URL = 'https://api.github.com';

  const REGEX_GIST_URL     = /^https?:\/\/gist\.github\.com\/.+?\/([0-9a-f]+)(?:\/([0-9a-f]+))?/i;
  const REGEX_RAW_GIST_URL = /^https?:\/\/gist\.githubusercontent\.com\/(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+\..+)$/i;

  /**
  Matches a GitHub raw URL.

  Captures:

  1.  Username
  2.  Repo
  3.  Ref
  4.  File path
  **/
  const REGEX_RAW_REPO_URL = /^https?:\/\/raw\.github(?:usercontent)?\.com\/(.+?)\/(.+?)\/(.+?)\/(.+)/i;

  /**
  Matches a GitHub repo URL.

  Captures:

  1.  Username
  2.  Repo
  3.  Ref
  4.  File path
  **/
  const REGEX_REPO_URL = /^https?:\/\/github\.com\/(.+?)\/(.+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?)\/(.+)/i;

  // -- Init -------------------------------------------------------------------
  let copyButtonProd = doc.getElementById('url-prod-copy');
  let inputProd      = doc.getElementById('url-prod');
  let inputUrl       = doc.getElementById('url');

  new Clipboard('.url-copy-button');

  if (doc.queryCommandSupported && doc.queryCommandSupported('copy')) {
    copyButtonProd.style.display = 'inline-block';
  }

  inputProd.addEventListener('focus', onInputFocus);
  inputUrl.addEventListener('input', formatUrl);

  if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
    // On iOS, it's quite difficult to copy the value of readonly input elements (see https://git.io/vpI8Z).
    // By making the inputs non-readonly and preventing keydown we can mimic the behaviour of readonly inputs while
    // improving the copy-input-value interaction.
    inputProd.removeAttribute('readonly')
    inputProd.addEventListener('keydown', function (e) {
      e.preventDefault();
    });
  }

  formatUrl();

  // -- Functions --------------------------------------------------------------
  function formatRawGistUrl(url) {
    inputProd.value = url.replace(REGEX_RAW_GIST_URL, 'https://' + cdn_domain + '/$1');

    setValid();
  }

  function formatRawRepoUrl(url) {
    inputProd.value = url.replace(REGEX_RAW_REPO_URL, 'https://' + cdn_domain + '/$1/$2/$3/$4');

    setValid();
  }

  function formatRepoUrl(url) {
    let matches = url.match(REGEX_REPO_URL);

    if (matches[3] !== 'master') {
      inputProd.value = url.replace(REGEX_REPO_URL, 'https://' + cdn_domain + '/$1/$2/$3/$4');
      setValid();
      return;
    }

    let apiUrl = `${GITHUB_API_URL}/repos/${matches[1]}/${matches[2]}/commits/${matches[3]}`;

    fetch(apiUrl)
      .then(res => {
        if (!res.ok) {
          console.error('Failed to fetch latest repo commit from GitHub API');
          return;
        }

        return res.json();
      })

      .then(data => {
        let ref = data && data.sha
          ? data.sha.slice(0, 8)
          : matches[3];

        inputProd.value = url.replace(REGEX_REPO_URL, `https://${cdn_domain}/$1/$2/${ref}/$4`);
        setValid();
      });
  }

  function formatUrl() {
    let url = inputUrl.value.trim();

    if (REGEX_RAW_REPO_URL.test(url)) {
      formatRawRepoUrl(url);
    } else if (REGEX_RAW_GIST_URL.test(url)) {
      formatRawGistUrl(url);
    } else if (REGEX_REPO_URL.test(url)) {
      formatRepoUrl(url);
    } else if (REGEX_GIST_URL.test(url)) {
      requestGistUrl(url);
    } else {
      setInvalid();
    }
  }

  function onInputFocus(e) {
    setTimeout(function () {
      e.target.select();
    }, 1);
  }

  function requestGistUrl(url) {
    let matches = url.match(REGEX_GIST_URL);

    let apiUrl = GITHUB_API_URL + '/gists/' + matches[1]
      + (matches[2] ? '/' + matches[2] : '');

    return fetch(apiUrl)
      .then(res => {
        if (!res.ok) {
          setInvalid();
          throw new Error('Failed to fetch gist URL from GitHub API');
        }

        return res.json();
      })

      .then(data => {
        let files     = data && data.files;
        let filenames = files && Object.keys(data.files);

        if (!filenames || !filenames.length) {
          return void setInvalid();
        }

        let rawUrl = files[filenames[0]] && files[filenames[0]].raw_url;

        if (rawUrl) {
          formatRawGistUrl(rawUrl);
        } else {
          setInvalid();
        }
      });
  }

  function setInvalid() {
    copyButtonProd.disabled = true;

    inputUrl.classList.remove('valid');

    if (inputUrl.value.trim().length) {
      inputUrl.classList.add('invalid');
    } else {
      inputUrl.classList.remove('invalid');
    }

    inputProd.value = '';

    inputProd.classList.remove('valid');
  }

  function setValid() {
    copyButtonProd.disabled = false;

    inputUrl.classList.remove('invalid');

    inputProd.classList.add('valid');
    inputUrl.classList.add('valid');
  }
}(document));
