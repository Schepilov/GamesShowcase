if("undefined"==typeof Map&&function(e){function t(e){var t=[],r=[],i=[],o=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t},a=function(e){if(e!=e||0===e)for(var t=this.length;t--&&!o(this[t],e););else t=[].indexOf.call(this,e);return t},u=function(e,t){var n=0;return Object.create({},{next:{value:function(){if(n<e.items().length)switch(t){case"keys":return e.keys()[n++];case"values":return e.values()[n++];case"keys+values":return[].slice.call(e.items()[n++]);default:throw new TypeError("Invalid iterator type")}throw new Error("Stop Iteration")}},iterator:{value:function(){return this}},toString:{value:function(){return"[object Map Iterator]"}}})},l=function(e,n){var o=a.call(r,e);o>-1?(t[o][1]=n,i[o]=n):(t.push([e,n]),r.push(e),i.push(n))};if(Array.isArray(e))e.forEach(function(e){if(2!==e.length)throw new TypeError("Invalid iterable passed to Map constructor");l(e[0],e[1])});else if(void 0!==e)throw new TypeError("Invalid Map");return Object.create(n,{items:{value:function(){return[].slice.call(t)}},keys:{value:function(){return[].slice.call(r)}},values:{value:function(){return[].slice.call(i)}},has:{value:function(e){return a.call(r,e)>-1}},get:{value:function(e){var t=a.call(r,e);return t>-1?i[t]:void 0}},set:{value:l},size:{get:function(){return t.length}},clear:{value:function(){r.length=i.length=t.length=0}},delete:{value:function(e){var n=a.call(r,e);return n>-1&&(r.splice(n,1),i.splice(n,1),t.splice(n,1),!0)}},forEach:{value:function(e){function t(){try{return n.next()}catch(e){return}}if("function"!=typeof e)throw new TypeError("Invalid callback function given to forEach");for(var n=this.iterator(),r=t(),i=t();void 0!==r;)e.apply(arguments[1],[r[1],r[0],this]),r=i,i=t()}},iterator:{value:function(){return new u(this,"keys+values")}},toString:{value:function(){return"[Object Map]"}}})}var n=t.prototype;t.prototype=n=t(),window.Map=window.Map||t}(),void 0===Set||"function"!=typeof Set.prototype.keys)var Set=function(){"use strict";function e(e,t){return c.call(e,t)}function t(e){var t;return"object"==typeof e&&(t=s.call(e),!0===l[t]||"number"==typeof e.length&&e.length>=0&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0))}function n(e,t,n,r,i){f?Object.defineProperty(e,t,{enumerable:r,configurable:!1,writable:i,value:n}):e[t]=n}function r(e,t){h=!0,e.size=t,h=!1}function i(e){var r=0;if(n(this,"baseType","Set",!1,!1),n(this,"_data",{},!1,!0),f?Object.defineProperty(this,"size",{enumerable:!0,configurable:!1,get:function(){return r},set:function(e){if(!h)throw new Error("Can't set size property on Set object.");r=e}}):this.size=0,void 0!==e&&null!==e)if(t(e))for(var i=0;i<e.length;i++)this.add(e[i]);else(e instanceof Set||"Set"===e.baseType)&&e.forEach(function(e){this.add(e)},this)}function o(e,t){var n,r=typeof e;if(y[r])return r.substr(0,3)+"_"+e;if(null===e)return"nul_null";if("object"===r||"function"===r)return e[d]?e[d]:t?(n=v+p++,"[object Object]"===s.call(e)&&f?Object.defineProperty(e,d,{enumerable:!1,configurable:!1,writable:!1,value:n}):e[d]=n,n):null;throw new Error("Unsupported type for Set.add()")}function a(t,n,r){var i=0,o=t.length;this.next=function(){for(var a,u,l={};;){if(i<o){if(l.done=!1,u=t[i++],void 0===(a=n[u])&&!e(n,u))continue;"keys"===r?l.value=a:"entries"===r&&(l.value=[a,a])}else t=null,n=null,l.done=!0;return l}}}function u(t){var n=[];for(var r in t)e(t,r)&&n.push(r);return n}var l={"[object Array]":!0,"[object Arguments]":!0,"[object HTMLCollection]":!0,"[object NodeList]":!0},c=Object.prototype.hasOwnProperty,s=Object.prototype.toString,f=Object.defineProperty&&Object.defineProperties,h=!1,p=0,v="obj_",d="__objectPolyFillID",y={string:!0,boolean:!0,number:!0,undefined:!0};return i.prototype={add:function(t){var n=o(t,!0);return e(this._data,n)||(this._data[n]=t,r(this,this.size+1)),this},clear:function(){this._data={},r(this,0)},delete:function(t){var n=o(t,!1);return!(null===n||!e(this._data,n))&&(delete this._data[n],r(this,this.size-1),!0)},remove:function(e){return this.delete(e)},forEach:function(e){if("function"==typeof e)for(var t,n,r=arguments[1],i=this.keys();(t=i.next())&&!t.done;)n=t.value,e.call(r,n,n,this)},has:function(e){var t=o(e,!1);return null!==t&&c.call(this._data,t)},values:function(){return this.keys()},keys:function(){return new a(u(this._data),this._data,"keys")},entries:function(){return new a(u(this._data),this._data,"entries")}},i.prototype.constructor=i,i}();