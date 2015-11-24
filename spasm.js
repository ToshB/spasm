!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.spasm=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function e(a){return"function"==typeof a}function f(a){return"number"==typeof a}function g(a){return"object"==typeof a&&null!==a}function h(a){return void 0===a}b.exports=d,d.EventEmitter=d,d.prototype._events=void 0,d.prototype._maxListeners=void 0,d.defaultMaxListeners=10,d.prototype.setMaxListeners=function(a){if(!f(a)||0>a||isNaN(a))throw TypeError("n must be a positive number");return this._maxListeners=a,this},d.prototype.emit=function(a){var b,c,d,f,i,j;if(this._events||(this._events={}),"error"===a&&(!this._events.error||g(this._events.error)&&!this._events.error.length)){if(b=arguments[1],b instanceof Error)throw b;throw TypeError('Uncaught, unspecified "error" event.')}if(c=this._events[a],h(c))return!1;if(e(c))switch(arguments.length){case 1:c.call(this);break;case 2:c.call(this,arguments[1]);break;case 3:c.call(this,arguments[1],arguments[2]);break;default:for(d=arguments.length,f=new Array(d-1),i=1;d>i;i++)f[i-1]=arguments[i];c.apply(this,f)}else if(g(c)){for(d=arguments.length,f=new Array(d-1),i=1;d>i;i++)f[i-1]=arguments[i];for(j=c.slice(),d=j.length,i=0;d>i;i++)j[i].apply(this,f)}return!0},d.prototype.addListener=function(a,b){var c;if(!e(b))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",a,e(b.listener)?b.listener:b),this._events[a]?g(this._events[a])?this._events[a].push(b):this._events[a]=[this._events[a],b]:this._events[a]=b,g(this._events[a])&&!this._events[a].warned){var c;c=h(this._maxListeners)?d.defaultMaxListeners:this._maxListeners,c&&c>0&&this._events[a].length>c&&(this._events[a].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[a].length),"function"==typeof console.trace&&console.trace())}return this},d.prototype.on=d.prototype.addListener,d.prototype.once=function(a,b){function c(){this.removeListener(a,c),d||(d=!0,b.apply(this,arguments))}if(!e(b))throw TypeError("listener must be a function");var d=!1;return c.listener=b,this.on(a,c),this},d.prototype.removeListener=function(a,b){var c,d,f,h;if(!e(b))throw TypeError("listener must be a function");if(!this._events||!this._events[a])return this;if(c=this._events[a],f=c.length,d=-1,c===b||e(c.listener)&&c.listener===b)delete this._events[a],this._events.removeListener&&this.emit("removeListener",a,b);else if(g(c)){for(h=f;h-->0;)if(c[h]===b||c[h].listener&&c[h].listener===b){d=h;break}if(0>d)return this;1===c.length?(c.length=0,delete this._events[a]):c.splice(d,1),this._events.removeListener&&this.emit("removeListener",a,b)}return this},d.prototype.removeAllListeners=function(a){var b,c;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[a]&&delete this._events[a],this;if(0===arguments.length){for(b in this._events)"removeListener"!==b&&this.removeAllListeners(b);return this.removeAllListeners("removeListener"),this._events={},this}if(c=this._events[a],e(c))this.removeListener(a,c);else for(;c.length;)this.removeListener(a,c[c.length-1]);return delete this._events[a],this},d.prototype.listeners=function(a){var b;return b=this._events&&this._events[a]?e(this._events[a])?[this._events[a]]:this._events[a].slice():[]},d.listenerCount=function(a,b){var c;return c=a._events&&a._events[b]?e(a._events[b])?1:a._events[b].length:0}},{}],2:[function(a,b,c){c.createAtom=function(a,b){function c(b){if(!e(b)){var c=new Error(b+" failed validation");throw c.name="AssertionError",c}var g=a;a=b,Object.keys(d).forEach(function(a){d[a](a,f,g,b)})}var d={},e=b&&b.validator||function(){return!0},f={addWatch:function(a,b){d[a]=b},removeWatch:function(a){delete d[a]},swap:function(b){var d=[a].concat([].slice.call(arguments,1));c(b.apply(null,d))},reset:function(a){c(a)},deref:function(){return a},toString:function(){return"Atom("+JSON.stringify(a)+")"}};return f}},{}],3:[function(a,b,c){"use strict";function d(a,b){for(var c=0,d=b.length;d>c;++c){var e=a(b[c]);if(e)return e}}function e(a,b){for(var c=0,d=b.length;d>c;++c)if(a(b[c]))return b[c]}function f(a,b){var c=b.host,d=b.port,e=b.scheme;return c?(d&&(c=c.replace(/(:.*)?$/,":"+d)),(e||"http")+"://"+c.replace(/\/$/,"")+a):a}function g(a){var b=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],c=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];return a?j({path:f(a.paramNames.reduce(function(a,c){return a.replace(":"+c,b[c])},a.route),b),query:c}):null}function h(a,b,c,d){return g(e(function(a){return a.page===b},a),c,d)}function i(){var a=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];return a.reduce(function(a,b){var c=o(b,2),d=c[0],e=c[1];return a[d]=e,a},{})}function j(a){var b=a.query,c=a.path,d=Object.keys(b).map(function(a){return null===b[a]||void 0===b[a]?null:b[a]===!0?a:a+"="+b[a]}).filter(function(a){return a}).join("&");return c+(d?"?"+d:"")}function k(a,b){var c=a.regexp,d=a.page,e=a.paramNames,f=b.match(p),g=o(f,6),h=g[1],j=g[2],k=g[3],l=g[4],m=g[5],n=l.match(c);return n?{page:d,url:b,path:l,host:j,port:Number(k||80),scheme:h||"http",params:i(n.slice(1).map(function(a,b){return[e[b],a]})),query:i(m&&m.split("&").map(function(a){return a.split("=")})||[])}:null}function l(a,b){return d(function(a){return k(a,b)},a)||{params:{}}}function m(a,b){var c=(b.match(/:[a-zA-Z0-9]+/g)||[]).map(function(a){return a.slice(1)});return{page:a,paramNames:c,route:b,regexp:new RegExp(c.reduce(function(a,b){return a.replace(":"+b,"([^/?]+)")},b)+"$")}}function n(a){return a.map(function(a){var b=o(a,2),c=b[0],d=b[1];return m(c,d)})}var o=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Object.defineProperty(c,"__esModule",{value:!0}),c.getURL=h,c.toURLString=j,c.match=k,c.getPage=l,c.createRoute=m,c.createRoutes=n;var p=/(?:(?:(https?):)?\/\/([^:\/]+)(?::(\d+))?)?([^\?]*)(?:\?(.*))?/},{}],4:[function(a,b,c){"use strict";function d(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function e(a){return Array.isArray(a)?a:Array.from(a)}function f(a,b){var c=a.getData&&a.getData(k(b));return c&&c.then?c:new Promise(function(a,b){return a(c)})}function g(a){function b(){var a=v(l(B,k(A)),A.location,A.state.deref());return a.title&&(document.title=a.title),t(B.render,a),a}function c(a){return f(a,A).then(function(c){return A.pageData=c,B=a,b()})["catch"](function(a){return setTimeout(function(){throw a})})}function g(a){"function"==typeof a&&(a=a(A.state.deref())),A.state.swap(function(b){return Object.keys(a).reduce(function(b,c){return null===a[c]?delete b[c]:b[c]=a[c],b},b)}),w.emit("updateState",A.state.deref())}function m(a){var b=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];g(b);var d=h.getPage(x,a);return A.location=d,c(z[d.page]||z[404])}function n(a){if(a){for(var b=e(a),c=b[0],f=b.slice(1),g=arguments.length,h=Array(g>1?g-1:0),i=1;g>i;i++)h[i-1]=arguments[i];var j=f.concat(h),k=y.listeners(c);if(0===k.length)throw new Error("Tried to trigger action "+c+" ("+j+"), which has no handlers");return Promise.all(k.map(function(a){return a.apply(void 0,d(j))}))}}function o(){var a=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return g(a),c(B)}function p(){return h.toURLString(A.location)}function q(){return B?b():void 0}function r(a){g(a),q()}function s(a){if(!B)throw new Error("Cannot update query params before a page is loaded");return A.location.query=a,history.pushState({},"",p()),o()}var t=a.render,u=a.state,v=a.finalizeData,w=new i.EventEmitter,x=[],y=new i.EventEmitter,z={},A={state:j.createAtom(u||{})},B=void 0;v=v||function(a){return a};var C={};return{loadURL:m,triggerAction:n,refresh:o,getCurrentURL:p,rerender:q,on:w.on.bind(w),emit:w.emit.bind(w),off:w.removeListener.bind(w),getURL:function(){for(var a=arguments.length,b=Array(a),c=0;a>c;c++)b[c]=arguments[c];return h.getURL.apply(void 0,[x].concat(b))},addAction:function(a,b){y.on(a,function(){for(var a=arguments.length,c=Array(a),d=0;a>d;d++)c[d]=arguments[d];return b.apply(void 0,c.concat([k(A)]))})},performAction:function(a){return function(b){b&&b.preventDefault&&b.preventDefault(),n(a,b&&b.nativeEvent||b)}},addPage:function(a,b,c){x.push(h.createRoute(a,b)),z[a]=c},start:function(){return window.onpopstate=function(){m(location.href)},m(location.href)},gotoURL:function(a){var b=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return history.pushState({},"",a),m(a,b)},updateQueryParams:function(a){return s(Object.keys(a).reduce(function(b,c){return b[c]=a[c],b},A.location.query))},clearQueryParams:function(){return s({})},updateState:r,flashState:function(a){var b=arguments.length<=1||void 0===arguments[1]?5e3:arguments[1];g(a);var c=(new Date).getTime()+b;Object.keys(a).forEach(function(a){return C[a]=c}),setTimeout(function(){var a=(new Date).getTime();r(Object.keys(C).reduce(function(b,c){return C[c]<=a&&(b[c]=null,delete C[c]),b},{}))},b)}}}Object.defineProperty(c,"__esModule",{value:!0}),c.createApp=g;var h=a("./router"),i=a("events"),j=a("js-atom"),k=function(a){return{pageData:a.pageData,location:a.location,state:a.state.deref()}},l=function(a,b){return(a.prepareData||function(a){var b=a.pageData;return b})(b)}},{"./router":3,events:1,"js-atom":2}]},{},[4])(4)});