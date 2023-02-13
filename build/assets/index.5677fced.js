import{E as G,A as L,r as H}from"./index.d04af6e7.js";var $={},j=globalThis&&globalThis.__assign||function(){return(j=Object.assign||function(g){for(var a,v=1,O=arguments.length;v<O;v++)for(var t in a=arguments[v])Object.prototype.hasOwnProperty.call(a,t)&&(g[t]=a[t]);return g}).apply(this,arguments)},W=function(){function g(a,v,O){var t=this;this.endVal=v,this.options=O,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(R){t.startTime||(t.startTime=R);var V=R-t.startTime;t.remaining=t.duration-V,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(V,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(V,t.startVal,t.endVal-t.startVal,t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(V/t.duration);var E=t.countDown?t.frameVal<t.endVal:t.frameVal>t.endVal;t.frameVal=E?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),V<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.callback&&t.callback()},this.formatNumber=function(R){var V,E,F,S,b=R<0?"-":"";V=Math.abs(R).toFixed(t.options.decimalPlaces);var x=(V+="").split(".");if(E=x[0],F=x.length>1?t.options.decimal+x[1]:"",t.options.useGrouping){S="";for(var U=3,P=0,T=0,y=E.length;T<y;++T)t.options.useIndianSeparators&&T===4&&(U=2,P=1),T!==0&&P%U==0&&(S=t.options.separator+S),P++,S=E[y-T-1]+S;E=S}return t.options.numerals&&t.options.numerals.length&&(E=E.replace(/[0-9]/g,function(D){return t.options.numerals[+D]}),F=F.replace(/[0-9]/g,function(D){return t.options.numerals[+D]})),b+t.options.prefix+E+F+t.options.suffix},this.easeOutExpo=function(R,V,E,F){return E*(1-Math.pow(2,-10*R/F))*1024/1023+V},this.options=j(j({},this.defaults),O),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(v),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof a=="string"?document.getElementById(a):a,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,a):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return t.handleScroll(t)}),window.onscroll=function(){window.onScrollFns.forEach(function(R){return R()})},this.handleScroll(this)))}return g.prototype.handleScroll=function(a){if(a&&window&&!a.once){var v=window.innerHeight+window.scrollY,O=a.el.getBoundingClientRect(),t=O.top+window.pageYOffset,R=O.top+O.height+window.pageYOffset;R<v&&R>window.scrollY&&a.paused?(a.paused=!1,setTimeout(function(){return a.start()},a.options.scrollSpyDelay),a.options.scrollSpyOnce&&(a.once=!0)):(window.scrollY>R||t>v)&&!a.paused&&a.reset()}},g.prototype.determineDirectionAndSmartEasing=function(){var a=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>a;var v=a-this.startVal;if(Math.abs(v)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=a;var O=this.countDown?1:-1;this.endVal=a+O*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=a,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},g.prototype.start=function(a){this.error||(this.callback=a,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},g.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},g.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},g.prototype.update=function(a){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(a),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},g.prototype.printValue=function(a){var v=this.formattingFn(a);this.el&&(this.el.tagName==="INPUT"?this.el.value=v:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=v:this.el.innerHTML=v)},g.prototype.ensureNumber=function(a){return typeof a=="number"&&!isNaN(a)},g.prototype.validateValue=function(a){var v=Number(a);return this.ensureNumber(v)?v:(this.error="[CountUp] invalid start or end value: ".concat(a),null)},g.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},g}();const K=Object.freeze(Object.defineProperty({__proto__:null,CountUp:W},Symbol.toStringTag,{value:"Module"})),J=G(K);(function(g){Object.defineProperty(g,"__esModule",{value:!0});var a=H.exports,v=J;function O(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var t=O(a);function R(r,i){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);i&&(e=e.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),n.push.apply(n,e)}return n}function V(r){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?arguments[i]:{};i%2?R(Object(n),!0).forEach(function(e){b(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}function E(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function F(r,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function S(r,i,n){return i&&F(r.prototype,i),n&&F(r,n),r}function b(r,i,n){return i in r?Object.defineProperty(r,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[i]=n,r}function x(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),i&&P(r,i)}function U(r){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},U(r)}function P(r,i){return P=Object.setPrototypeOf||function(e,u){return e.__proto__=u,e},P(r,i)}function T(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function y(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function D(r,i){return i&&(typeof i=="object"||typeof i=="function")?i:y(r)}function z(r){var i=T();return function(){var e=U(r),u;if(i){var h=U(this).constructor;u=Reflect.construct(e,arguments,h)}else u=e.apply(this,arguments);return D(this,u)}}var N={decimal:".",delay:null,prefix:"",suffix:"",start:0},I=function(i,n){var e=n.decimal,u=n.decimals,h=n.duration,w=n.easingFn,o=n.end,s=n.formattingFn,f=n.numerals,p=n.prefix,d=n.separator,c=n.start,l=n.suffix,m=n.useEasing;return new v.CountUp(i,o,{startVal:c,duration:h,decimal:e,decimalPlaces:u,easingFn:w,formattingFn:s,numerals:f,separator:d,prefix:p,suffix:l,useEasing:m,useGrouping:!!d})},M=function(r){x(n,r);var i=z(n);function n(){var e;E(this,n);for(var u=arguments.length,h=new Array(u),w=0;w<u;w++)h[w]=arguments[w];return e=i.call.apply(i,[this].concat(h)),b(y(e),"instance",void 0),b(y(e),"timeoutId",void 0),b(y(e),"checkProps",function(o){var s=e.props,f=s.start,p=s.suffix,d=s.prefix,c=s.redraw,l=s.duration,m=s.separator,_=s.decimals,C=s.decimal,k=s.className,A=s.formattingFn,B=l!==o.duration||f!==o.start||p!==o.suffix||d!==o.prefix||m!==o.separator||_!==o.decimals||C!==o.decimal||k!==o.className||A!==o.formattingFn;return B||c}),b(y(e),"createInstance",function(){if(typeof e.props.children=="function"&&!(e.containerRef.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}return I(e.containerRef.current,e.props)}),b(y(e),"pauseResume",function(){var o,s=y(e),f=s.reset,p=s.restart,d=s.update,c=e.props.onPauseResume;(o=e.instance)===null||o===void 0||o.pauseResume(),c==null||c({reset:f,start:p,update:d})}),b(y(e),"reset",function(){var o,s=y(e),f=s.pauseResume,p=s.restart,d=s.update,c=e.props.onReset;(o=e.instance)===null||o===void 0||o.reset(),c==null||c({pauseResume:f,start:p,update:d})}),b(y(e),"restart",function(){e.reset(),e.start()}),b(y(e),"start",function(){var o=y(e),s=o.pauseResume,f=o.reset,p=o.restart,d=o.update,c=e.props,l=c.delay,m=c.onEnd,_=c.onStart,C=function(){var A;return(A=e.instance)===null||A===void 0?void 0:A.start(function(){return m==null?void 0:m({pauseResume:s,reset:f,start:p,update:d})})};l&&l>0?e.timeoutId=setTimeout(C,l*1e3):C(),_==null||_({pauseResume:s,reset:f,update:d})}),b(y(e),"update",function(o){var s,f=y(e),p=f.pauseResume,d=f.reset,c=f.restart,l=e.props.onUpdate;(s=e.instance)===null||s===void 0||s.update(o),l==null||l({pauseResume:p,reset:d,start:c})}),b(y(e),"containerRef",t.default.createRef()),e}return S(n,[{key:"componentDidMount",value:function(){var u=this.props,h=u.children,w=u.delay;this.instance=this.createInstance(),!(typeof h=="function"&&w!==0)&&this.start()}},{key:"shouldComponentUpdate",value:function(u){var h=this.props.end;return this.checkProps(u)||h!==u.end}},{key:"componentDidUpdate",value:function(u){var h=this.props,w=h.end,o=h.preserveValue;if(this.checkProps(u)){var s;(s=this.instance)===null||s===void 0||s.reset(),this.instance=this.createInstance(),this.start()}if(w!==u.end){var f;if(!o){var p;(p=this.instance)===null||p===void 0||p.reset()}(f=this.instance)===null||f===void 0||f.update(w)}}},{key:"componentWillUnmount",value:function(){var u;this.timeoutId&&clearTimeout(this.timeoutId),(u=this.instance)===null||u===void 0||u.reset()}},{key:"render",value:function(){var u=this.props,h=u.children,w=u.className,o=u.style,s=this.containerRef,f=this.pauseResume,p=this.reset,d=this.restart,c=this.update;return typeof h=="function"?h({countUpRef:s,pauseResume:f,reset:p,start:d,update:c}):t.default.createElement("span",{className:w,ref:s,style:o})}}]),n}(a.Component);b(M,"defaultProps",V(V({},N),{},{redraw:!1,style:void 0,preserveValue:!1}));var q=V(V({},N),{},{startOnMount:!0}),Y=function(i){var n=V(V({},q),i),e=n.ref,u=a.useRef(),h=a.useRef(),w=function(){return I(typeof e=="string"?e:e.current,n)},o=function(l){var m=u.current;if(m&&!l)return m;var _=w();return u.current=_,_},s=function(){var l=n.onReset;o().reset(),l==null||l({pauseResume:p,start:f,update:d})},f=function c(){var l=n.onStart,m=n.onEnd;o().reset(),l==null||l({pauseResume:p,reset:s,update:d}),o().start(function(){m==null||m({pauseResume:p,reset:s,start:c,update:d})})},p=function(){var l=n.onPauseResume;o().pauseResume(),l==null||l({reset:s,start:f,update:d})},d=function(l){var m=n.onUpdate;o().update(l),m==null||m({pauseResume:p,reset:s,start:f})};return a.useEffect(function(){var c=n.delay,l=n.onStart,m=n.onEnd,_=n.startOnMount;return _&&(h.current=setTimeout(function(){l==null||l({pauseResume:p,reset:s,update:d}),o(!0).start(function(){h.current&&clearTimeout(h.current),m==null||m({pauseResume:p,reset:s,start:f,update:d})})},c?c*1e3:0)),function(){h.current&&clearTimeout(h.current),s()}},[n]),{start:f,pauseResume:p,reset:s,update:d}};g.default=M,g.useCountUp=Y})($);const X=L($);export{X as C};
