!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/cellular-automata/",t(t.s="mdyV")}({"/hs+":function(e,t,n){"use strict";function o(e,t){L.options.__h&&L.options.__h(P,e,F||t),F=0;var n=P.__H||(P.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:N}),n.__[e]}function r(e,t){var n=o(A++,3);!L.options.__s&&a(n.__H,t)&&(n.__=e,n.i=t,P.__H.__h.push(n))}function i(e){return F=5,_((function(){return{current:e}}),[])}function _(e,t){var n=o(A++,7);return a(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function l(e,t){return F=8,_((function(){return e}),t)}function u(){for(var e;e=M.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(s),e.__H.__h.forEach(f),e.__H.__h=[]}catch(t){e.__H.__h=[],L.options.__e(t,e.__v)}}function c(e){var t,n=function(){clearTimeout(o),R&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);R&&(t=requestAnimationFrame(n))}function s(e){var t=P,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),P=t}function f(e){var t=P;e.__c=e.__(),P=t}function a(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function d(e,t="canvas",n="2d"){const o=e.getElementById(t);if(!o)throw new Error(`Could not find context with id "${t}"`);if(!("getContext"in o))throw new Error(`Element with id "${t}" is not a canvas`);const r=o.getContext(n);if(!r)throw new Error(`canvas with id "${t}" does not have context`);return r}function h(){return I.size}function p(e,t,n){const[o,r]=function(e,t){const n=h();return[e-e%n,t-t%n]}(t,n);y(e,o,r,I.color)}function v(e,t,n){y(e,t*I.size,n*I.size,I.color)}function m(e,t,n){e.clearRect(t*I.size,n*I.size,I.size,I.size)}function y(e,t,n,o){e.fillStyle=o,e.beginPath(),e.rect(t,n,I.size,I.size),e.fill()}function g(e){const t=e.canvas.width,n=e.canvas.height,o=h();!function(e){e.fillStyle=$.color,e.beginPath(),e.rect(0,0,e.canvas.width,e.canvas.height),e.fill()}(e);for(let r=o;r<=t;r+=o)w(e,r,n);for(let r=o;r<=n;r+=o)b(e,r,t)}function w(e,t,n){e.beginPath(),e.moveTo(t,0),e.lineWidth=j.width,e.lineTo(t,n),e.strokeStyle=j.color,e.stroke()}function b(e,t,n){e.beginPath(),e.moveTo(0,t),e.lineWidth=j.width,e.lineTo(n,t),e.strokeStyle=j.color,e.stroke()}function C(e){const t=d(e,"grid");t.clearRect(0,0,t.canvas.width,t.canvas.height),g(t)}function k(e){const t=window.innerWidth,n=window.innerHeight;e.canvas.style.width=`${t}px`,e.canvas.style.height=`${n}px`;const o=window.devicePixelRatio;e.canvas.width=Math.floor(t*o),e.canvas.height=Math.floor(n*o),e.scale(o,o)}function x(e,t,n){return e?n.survival.has(t):n.birth.has(t)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){return((e,t)=>{const n=function(e){const t=q[e],[n,o]=t.split("/");return{birth:new Set(n.slice(1).split("").map(Number)),survival:new Set(o.slice(1).split("").map(Number))}}(e),o=t.copy();for(const[e,r]of t.indices()){x(t.isCellFilled(e,r),t.getNeighborsCount(e,r),n)?o.fillCell(e,r):o.clearCell(e,r)}return o})("Game of Life",e)}function H(){const e=i(null),t=i(null),n=i(!1),o=i(),_=l((()=>{requestAnimationFrame((()=>{let e;if(o.current)e=E(o.current);else{const[t,n]=function(e){const t=d(e);return[Math.floor(t.canvas.width/I.size),Math.floor(t.canvas.height/I.size)]}(document);e=function(e,t){const n=J.fromDimensions(e,t);return n.fillRandom(),n}(t,n)}!function(e,t,n){const o=d(e),r=n?t.diff(n):t.indices();for(const[e,n]of r)t.isCellFilled(e,n)?v(o,e,n):m(o,e,n)}(document,e,o.current),o.current=e}))}),[]),u=l((()=>{t.current&&(t.current.width=window.innerWidth,t.current.height=window.innerHeight,k(d(document,"grid")),C(document)),e.current&&(e.current.width=window.innerWidth,e.current.height=window.innerHeight,k(d(document,"canvas")))}),[]),c=l((()=>{n.current||(_(),setTimeout((()=>{c()}),1e3/U))}),[_]),s=l((e=>{p(d(document),e.offsetX,e.offsetY)}),[]),f=l((e=>{"Space"===e.code&&(e.preventDefault(),n.current=!n.current,n.current||c())}),[c]);return r((()=>(window.addEventListener("resize",u),window.addEventListener("keypress",f),()=>{window.removeEventListener("resize",u),window.removeEventListener("keypress",f)})),[f,u]),r((()=>{k(d(document,"canvas")),k(d(document,"grid")),C(document),c()}),[c,_]),Object(L.h)("div",{id:"root"},Object(L.h)("canvas",{ref:t,id:"grid","data-testid":"grid",width:window.innerWidth,height:window.innerHeight}),Object(L.h)("canvas",{ref:e,id:"canvas","data-testid":"canvas",width:window.innerWidth,height:window.innerHeight,onClick:s}))}n.r(t),n.d(t,"default",(function(){return H}));var A,P,T,D,L=n("hosL"),F=0,M=[],N=[],O=L.options.__b,V=L.options.__r,W=L.options.diffed,z=L.options.__c,B=L.options.unmount;L.options.__b=function(e){"function"!=typeof e.type||e.__m||e.type===L.Fragment?e.__m||(e.__m=e.__&&e.__.__m?e.__.__m:""):e.__m=(e.__&&e.__.__m?e.__.__m:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),P=null,O&&O(e)},L.options.__r=function(e){V&&V(e),A=0;var t=(P=e.__c).__H;t&&(T===P?(t.__h=[],P.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=N,e.__N=e.i=void 0}))):(t.__h.forEach(s),t.__h.forEach(f),t.__h=[])),T=P},L.options.diffed=function(e){W&&W(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==M.push(t)&&D===L.options.requestAnimationFrame||((D=L.options.requestAnimationFrame)||c)(u)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==N&&(e.__=e.__V),e.i=void 0,e.__V=N}))),T=P=null},L.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(s),e.__h=e.__h.filter((function(e){return!e.__||f(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],L.options.__e(n,e.__v)}})),z&&z(e,t)},L.options.unmount=function(e){B&&B(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{s(e)}catch(e){t=e}})),n.__H=void 0,t&&L.options.__e(t,n.__v))};var R="function"==typeof requestAnimationFrame;const U=10,j={width:1,color:"#d0d0d0"},I={size:10,color:"#000000"},$={color:"#ffffff"},q={Replicator:"B1357/S1357",Seeds:"B2/S","Life without Death":"B3/S012345678","Game of Life":"B3/S23","34 Life":"B34/S34",Diamoeba:"B35678/S5678","2x2":"B36/S125",HighLife:"B36/S23","Day & Night":"B3678/S34678",Morley:"B368/S245",Anneal:"B4678/S35678"},G=.3;class J{constructor(){S(this,"_rows",void 0),S(this,"_cols",void 0),S(this,"matrix",void 0),S(this,"filledCell",1),S(this,"emptyCell",0)}static fromDimensions(e,t){const n=new J;return n._rows=e,n._cols=t,n.matrix=new Array(e).fill([]).map((()=>new Array(t).fill(n.emptyCell))),n}static from2DArray(e){const t=new J;return t._rows=e.length,t._cols=e[0].length,t.matrix=e.map((e=>[...e])),t}get rows(){return this._rows}get cols(){return this._cols}get size(){return this._rows*this._cols}fillCell(e,t){this.areValidCoords(e,t)&&(this.matrix[e][t]=this.filledCell)}clearCell(e,t){this.areValidCoords(e,t)&&(this.matrix[e][t]=this.emptyCell)}isCellFilled(e,t){return!!this.areValidCoords(e,t)&&this.matrix[e][t]===this.filledCell}fillRandom(){for(let e=0;e<this._rows;e++)for(let t=0;t<this._cols;t++)this.matrix[e][t]=this.randomCellValue()}*indices(){for(let e=0;e<this._rows;e++)for(let t=0;t<this._cols;t++)yield[e,t]}getNeighborsCount(e,t){let n=0;for(const[o,r]of this.neighbourCoords(e,t))this.isCellFilled(o,r)&&n++;return n}copy(){return J.from2DArray(this.matrix)}*diff(e){for(const[t,n]of e.indices())this.isCellFilled(t,n)!==e.isCellFilled(t,n)&&(yield[t,n])}*neighbourCoords(e,t){const n=[e-1,e,e+1],o=[t-1,t,t+1];for(const r of n)for(const n of o)r===e&&n===t||(yield[r,n])}areValidCoords(e,t){try{return"number"==typeof this.matrix[e][t]}catch(e){return!1}}randomCellValue(){return Math.random()<G?this.filledCell:this.emptyCell}}},hosL:function(e,t,n){"use strict";function o(e,t){for(var n in t)e[n]=t[n];return e}function r(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var o,r,i,l={};for(i in t)"key"==i?o=t[i]:"ref"==i?r=t[i]:l[i]=t[i];if(arguments.length>2&&(l.children=arguments.length>3?L.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return _(e,l,o,r,null)}function _(e,t,n,o,r){var i={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++M:r};return null==r&&null!=F.vnode&&F.vnode(i),i}function l(){return{current:null}}function u(e){return e.children}function c(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function f(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return f(e)}}function a(e){(!e.__d&&(e.__d=!0)&&O.push(e)&&!d.__r++||V!==F.debounceRendering)&&((V=F.debounceRendering)||setTimeout)(d)}function d(){for(var e;d.__r=O.length;)e=O.sort((function(e,t){return e.__v.__b-t.__v.__b})),O=[],e.some((function(e){var t,n,r,i,_,l;e.__d&&(_=(i=(t=e).__v).__e,(l=t.__P)&&(n=[],(r=o({},i)).__v=i.__v+1,C(l,i,r,t.__n,void 0!==l.ownerSVGElement,null!=i.__h?[_]:null,n,null==_?s(i):_,i.__h),k(n,i),i.__e!=_&&f(i)))}))}function h(e,t,n,o,r,i,l,c,f,a){var d,h,v,y,g,w,b,k=o&&o.__k||B,x=k.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(y=n.__k[d]=null==(y=t[d])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?_(null,y,null,null,y):Array.isArray(y)?_(u,{children:y},null,null,null):y.__b>0?_(y.type,y.props,y.key,y.ref?y.ref:null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=k[d])||v&&y.key==v.key&&y.type===v.type)k[d]=void 0;else for(h=0;h<x;h++){if((v=k[h])&&y.key==v.key&&y.type===v.type){k[h]=void 0;break}v=null}C(e,y,v=v||z,r,i,l,c,f,a),g=y.__e,(h=y.ref)&&v.ref!=h&&(b||(b=[]),v.ref&&b.push(v.ref,null,y),b.push(h,y.__c||g,y)),null!=g?(null==w&&(w=g),"function"==typeof y.type&&y.__k===v.__k?y.__d=f=p(y,f,e):f=m(e,y,v,k,g,f),"function"==typeof n.type&&(n.__d=f)):f&&v.__e==f&&f.parentNode!=e&&(f=s(v))}for(n.__e=w,d=x;d--;)null!=k[d]&&E(k[d],k[d]);if(b)for(d=0;d<b.length;d++)S(b[d],b[++d],b[++d])}function p(e,t,n){for(var o,r=e.__k,i=0;r&&i<r.length;i++)(o=r[i])&&(o.__=e,t="function"==typeof o.type?p(o,t,n):m(n,o,o,r,o.__e,t));return t}function v(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){v(e,t)})):t.push(e)),t}function m(e,t,n,o,r,i){var _,l,u;if(void 0!==t.__d)_=t.__d,t.__d=void 0;else if(null==n||r!=i||null==r.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(r),_=null;else{for(l=i,u=0;(l=l.nextSibling)&&u<o.length;u+=2)if(l==r)break e;e.insertBefore(r,i),_=i}return void 0!==_?_:r.nextSibling}function y(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||R.test(t)?n:n+"px"}function g(e,t,n,o,r){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||y(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||y(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o||e.addEventListener(t,i?b:w,i):e.removeEventListener(t,i?b:w,i);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,n))}}function w(e){this.l[e.type+!1](F.event?F.event(e):e)}function b(e){this.l[e.type+!0](F.event?F.event(e):e)}function C(e,t,n,r,i,_,l,s,f){var a,d,p,v,m,y,g,w,b,C,k,S,E,A=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(f=n.__h,s=t.__e=n.__e,t.__h=null,_=[s]),(a=F.__b)&&a(t);try{e:if("function"==typeof A){w=t.props,b=(a=A.contextType)&&r[a.__c],C=a?b?b.props.value:a.__:r,n.__c?g=(d=t.__c=n.__c).__=d.__E:("prototype"in A&&A.prototype.render?t.__c=d=new A(w,C):(t.__c=d=new c(w,C),d.constructor=A,d.render=H),b&&b.sub(d),d.props=w,d.state||(d.state={}),d.context=C,d.__n=r,p=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=A.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=o({},d.__s)),o(d.__s,A.getDerivedStateFromProps(w,d.__s))),v=d.props,m=d.state;for(a=0;a<d._sb.length;a++)d.__h.push(d._sb[a]),d._sb=[];if(p)null==A.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==A.getDerivedStateFromProps&&w!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(w,C),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(w,d.__s,C)||t.__v===n.__v){d.props=w,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),d.__h.length&&l.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(w,d.__s,C),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,m,y)}))}if(d.context=C,d.props=w,d.__v=t,d.__P=e,k=F.__r,S=0,"prototype"in A&&A.prototype.render)d.state=d.__s,d.__d=!1,k&&k(t),a=d.render(d.props,d.state,d.context);else do{d.__d=!1,k&&k(t),a=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++S<25);d.state=d.__s,null!=d.getChildContext&&(r=o(o({},r),d.getChildContext())),p||null==d.getSnapshotBeforeUpdate||(y=d.getSnapshotBeforeUpdate(v,m)),E=null!=a&&a.type===u&&null==a.key?a.props.children:a,h(e,Array.isArray(E)?E:[E],t,n,r,i,_,l,s,f),d.base=t.__e,t.__h=null,d.__h.length&&l.push(d),g&&(d.__E=d.__=null),d.__e=!1}else null==_&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=x(n.__e,t,n,r,i,_,l,f);(a=F.diffed)&&a(t)}catch(e){t.__v=null,(f||null!=_)&&(t.__e=s,t.__h=!!f,_[_.indexOf(s)]=null),F.__e(e,t,n)}}function k(e,t){F.__c&&F.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){F.__e(e,t.__v)}}))}function x(e,t,n,o,i,_,l,u){var c,f,a,d=n.props,p=t.props,v=t.type,m=0;if("svg"===v&&(i=!0),null!=_)for(;m<_.length;m++)if((c=_[m])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){e=c,_[m]=null;break}if(null==e){if(null===v)return document.createTextNode(p);e=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,p.is&&p),_=null,u=!1}if(null===v)d===p||u&&e.data===p||(e.data=p);else{if(_=_&&L.call(e.childNodes),f=(d=n.props||z).dangerouslySetInnerHTML,a=p.dangerouslySetInnerHTML,!u){if(null!=_)for(d={},m=0;m<e.attributes.length;m++)d[e.attributes[m].name]=e.attributes[m].value;(a||f)&&(a&&(f&&a.__html==f.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(function(e,t,n,o,r){var i;for(i in n)"children"===i||"key"===i||i in t||g(e,i,null,n[i],o);for(i in t)r&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||g(e,i,t[i],n[i],o)}(e,p,d,i,u),a)t.__k=[];else if(m=t.props.children,h(e,Array.isArray(m)?m:[m],t,n,o,i&&"foreignObject"!==v,_,l,_?_[0]:n.__k&&s(n,0),u),null!=_)for(m=_.length;m--;)null!=_[m]&&r(_[m]);u||("value"in p&&void 0!==(m=p.value)&&(m!==e.value||"progress"===v&&!m||"option"===v&&m!==d.value)&&g(e,"value",m,d.value,!1),"checked"in p&&void 0!==(m=p.checked)&&m!==e.checked&&g(e,"checked",m,d.checked,!1))}return e}function S(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){F.__e(e,n)}}function E(e,t,n){var o,i;if(F.unmount&&F.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||S(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){F.__e(e,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&E(o[i],t,n||"function"!=typeof e.type);n||null==e.__e||r(e.__e),e.__=e.__e=e.__d=void 0}function H(e,t,n){return this.constructor(e,n)}function A(e,t,n){var o,r,_;F.__&&F.__(e,t),r=(o="function"==typeof n)?null:n&&n.__k||t.__k,_=[],C(t,e=(!o&&n||t).__k=i(u,null,[e]),r||z,z,void 0!==t.ownerSVGElement,!o&&n?[n]:r?null:t.firstChild?L.call(t.childNodes):null,_,!o&&n?n:r?r.__e:t.firstChild,o),k(_,e)}function P(e,t){A(e,t,P)}function T(e,t,n){var r,i,l,u=o({},e.props);for(l in t)"key"==l?r=t[l]:"ref"==l?i=t[l]:u[l]=t[l];return arguments.length>2&&(u.children=arguments.length>3?L.call(arguments,2):n),_(e.type,u,r||e.key,i||e.ref,null)}function D(e,t){var n={__c:t="__cC"+W++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,o;return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(a)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"Component",(function(){return c})),n.d(t,"Fragment",(function(){return u})),n.d(t,"cloneElement",(function(){return T})),n.d(t,"createContext",(function(){return D})),n.d(t,"createElement",(function(){return i})),n.d(t,"createRef",(function(){return l})),n.d(t,"h",(function(){return i})),n.d(t,"hydrate",(function(){return P})),n.d(t,"isValidElement",(function(){return N})),n.d(t,"options",(function(){return F})),n.d(t,"render",(function(){return A})),n.d(t,"toChildArray",(function(){return v}));var L,F,M,N,O,V,W,z={},B=[],R=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;L=B.slice,F={__e:function(e,t,n,o){for(var r,i,_;t=t.__;)if((r=t.__c)&&!r.__)try{if((i=r.constructor)&&null!=i.getDerivedStateFromError&&(r.setState(i.getDerivedStateFromError(e)),_=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,o||{}),_=r.__d),_)return r.__E=r}catch(t){e=t}throw e}},M=0,N=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof e&&(e=e(o({},n),this.props)),e&&o(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),a(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),a(this))},c.prototype.render=u,O=[],d.__r=0,W=0},mdyV:function(e,t,n){"use strict";n.r(t);var o=n("hosL");const{h:r,render:i,hydrate:_}=o,l=e=>e&&e.default?e.default:e;if("function"==typeof l(n("/hs+"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=l(n("/hs+")),o={};const _=document.querySelector('[type="__PREACT_CLI_DATA__"]');_&&(o=JSON.parse(decodeURI(_.innerHTML)).preRenderData||o);o.url&&(u=o.url);var u;i(r(t,{CLI_DATA:{preRenderData:o}}),document.body,e)};0,t()}}});
//# sourceMappingURL=bundle.aea14.esm.js.map