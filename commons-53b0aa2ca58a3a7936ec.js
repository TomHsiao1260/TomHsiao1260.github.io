(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0wEy":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var a=n("xCC/");t.Motion=r(a);var l=n("unm8");t.StaggeredMotion=r(l);var i=n("p9CH");t.TransitionMotion=r(i);var o=n("tYRH");t.spring=r(o);var u=n("LQNH");t.presets=r(u);var s=n("u461");t.stripStyle=r(s);var c=n("MEvW");t.reorderKeys=r(c)},"8oxB":function(e,t){var n,r,a=e.exports={};function l(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(e){if(n===setTimeout)return setTimeout(e,0);if((n===l||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:l}catch(e){n=l}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,s=[],c=!1,f=-1;function p(){c&&u&&(c=!1,u.length?s=u.concat(s):f=-1,s.length&&d())}function d(){if(!c){var e=o(p);c=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new y(e,t)),1!==s.length||c||o(d)},y.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},Bl7J:function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),l=n.n(a),i=n("Wbzz"),o=n("fcpr"),u=n.n(o),s=n("w6mT"),c=function(e){return document.getElementsByClassName(e)[0]},f=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",(function(){this.scrollY>0?c(u.a.main_h).classList.add(u.a.sticky):c(u.a.main_h).classList.remove(u.a.sticky)})),c(u.a.mobile_toggle).addEventListener("click",(function(){c(u.a.main_h).classList.contains(u.a.open_nav)?c(u.a.main_h).classList.remove(u.a.open_nav):c(u.a.main_h).classList.add(u.a.open_nav)}))},n.render=function(){return l.a.createElement("div",null,l.a.createElement("header",{className:u.a.main_h},l.a.createElement("div",{className:u.a.row},l.a.createElement(s.a,{x:{start:20,end:0,stiffness:50,damping:20}},l.a.createElement("a",{href:"/",className:u.a.logo},this.props.data.title)),l.a.createElement("div",{className:u.a.mobile_toggle},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"/art"},"Art")),l.a.createElement("li",null,l.a.createElement("a",{href:"/science"},"Science"))))),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("main",null,this.props.children),l.a.createElement("footer",null,"© ",(new Date).getFullYear()," Hsiao Yao")))},t}(a.Component);t.a=function(e){var t=e.children;return l.a.createElement(i.StaticQuery,{query:"3159585216",render:function(e){return l.a.createElement(f,{children:t,data:e.site.siteMetadata})}})}},LQNH:function(e,t,n){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},MEvW:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){0};e.exports=t.default},VciW:function(e,t,n){(function(t){(function(){var n,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,a=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})()):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(this,n("8oxB"))},Z6NN:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t},e.exports=t.default},bQgK:function(e,t,n){(function(t){(function(){var n,r,a,l,i,o;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,l=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),o=1e9*t.uptime(),i=l-o):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(this,n("8oxB"))},fXKH:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n,a,l,i,o){var u=n+(-l*(t-a)+-i*n)*e,s=t+u*e;if(Math.abs(u)<o&&Math.abs(s-a)<o)return r[0]=a,r[1]=0,r;return r[0]=s,r[1]=u,r};var r=[0,0];e.exports=t.default},fcpr:function(e,t,n){e.exports={main_h:"layout-module--main_h--qnRta",open_nav:"layout-module--open_nav--1eNn3",sticky:"layout-module--sticky--3XO1J",logo:"layout-module--logo--79z0h",mobile_toggle:"layout-module--mobile_toggle--3qrCn",row:"layout-module--row--3MTT0"}},kXpG:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(0!==n[r])return!1;var a="number"==typeof t[r]?t[r]:t[r].val;if(e[r]!==a)return!1}return!0},e.exports=t.default},p9CH:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function l(e){return e&&e.__esModule?e:{default:e}}var i=l(n("Z6NN")),o=l(n("u461")),u=l(n("fXKH")),s=l(n("pwmp")),c=l(n("VciW")),f=l(n("xEkU")),p=l(n("kXpG")),d=l(n("q1tI")),y=l(n("17x9"));function m(e,t,n){var r=t;return null==r?e.map((function(e,t){return{key:e.key,data:e.data,style:n[t]}})):e.map((function(e,t){for(var a=0;a<r.length;a++)if(r[a].key===e.key)return{key:r[a].key,data:r[a].data,style:n[t]};return{key:e.key,data:e.data,style:n[t]}}))}function h(e,t,n,r,a,l,o,u,c){for(var f=s.default(r,a,(function(e,r){var a=t(r);return null==a||p.default(l[e],a,o[e])?(n({key:r.key,data:r.data}),null):{key:r.key,data:r.data,style:a}})),d=[],y=[],m=[],h=[],v=0;v<f.length;v++){for(var g=f[v],b=null,w=0;w<r.length;w++)if(r[w].key===g.key){b=w;break}if(null==b){var S=e(g);d[v]=S,m[v]=S;var T=i.default(g.style);y[v]=T,h[v]=T}else d[v]=l[b],m[v]=u[b],y[v]=o[b],h[v]=c[b]}return[f,d,y,m,h]}var v=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=h(a.props.willEnter,a.props.willLeave,a.props.didLeave,a.state.mergedPropsStyles,e,a.state.currentStyles,a.state.currentVelocities,a.state.lastIdealStyles,a.state.lastIdealVelocities),n=t[0],l=t[1],i=t[2],o=t[3],u=t[4],s=0;s<e.length;s++){var c=e[s].style,f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"==typeof d&&(f||(f=!0,l[s]=r({},l[s]),i[s]=r({},i[s]),o[s]=r({},o[s]),u[s]=r({},u[s]),n[s]={key:n[s].key,data:n[s].data,style:r({},n[s].style)}),l[s][p]=d,i[s][p]=0,o[s][p]=d,u[s][p]=0,n[s].style[p]=d)}}a.setState({currentStyles:l,currentVelocities:i,mergedPropsStyles:n,lastIdealStyles:o,lastIdealVelocities:u})},this.startAnimationIfNecessary=function(){a.unmounting||(a.animationID=f.default((function(e){if(!a.unmounting){var t=a.props.styles,n="function"==typeof t?t(m(a.state.mergedPropsStyles,a.unreadPropStyles,a.state.lastIdealStyles)):t;if(function(e,t,n,r){if(r.length!==t.length)return!1;for(var a=0;a<r.length;a++)if(r[a].key!==t[a].key)return!1;for(a=0;a<r.length;a++)if(!p.default(e[a],t[a].style,n[a]))return!1;return!0}(a.state.currentStyles,n,a.state.currentVelocities,a.state.mergedPropsStyles))return a.animationID=null,void(a.accumulatedTime=0);var r=e||c.default(),l=r-a.prevTime;if(a.prevTime=r,a.accumulatedTime=a.accumulatedTime+l,a.accumulatedTime>1e3/60*10&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();for(var i=(a.accumulatedTime-Math.floor(a.accumulatedTime/(1e3/60))*(1e3/60))/(1e3/60),o=Math.floor(a.accumulatedTime/(1e3/60)),s=h(a.props.willEnter,a.props.willLeave,a.props.didLeave,a.state.mergedPropsStyles,n,a.state.currentStyles,a.state.currentVelocities,a.state.lastIdealStyles,a.state.lastIdealVelocities),f=s[0],d=s[1],y=s[2],v=s[3],g=s[4],b=0;b<f.length;b++){var w=f[b].style,S={},T={},I={},O={};for(var k in w)if(Object.prototype.hasOwnProperty.call(w,k)){var P=w[k];if("number"==typeof P)S[k]=P,T[k]=0,I[k]=P,O[k]=0;else{for(var _=v[b][k],x=g[b][k],E=0;E<o;E++){var j=u.default(1e3/60/1e3,_,x,P.val,P.stiffness,P.damping,P.precision);_=j[0],x=j[1]}var D=u.default(1e3/60/1e3,_,x,P.val,P.stiffness,P.damping,P.precision),M=D[0],V=D[1];S[k]=_+(M-_)*i,T[k]=x+(V-x)*i,I[k]=_,O[k]=x}}v[b]=I,g[b]=O,d[b]=S,y[b]=T}a.animationID=null,a.accumulatedTime-=o*(1e3/60),a.setState({currentStyles:d,currentVelocities:y,lastIdealStyles:v,lastIdealVelocities:g,mergedPropsStyles:f}),a.unreadPropStyles=null,a.startAnimationIfNecessary()}})))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyles:y.default.arrayOf(y.default.shape({key:y.default.string.isRequired,data:y.default.any,style:y.default.objectOf(y.default.number).isRequired})),styles:y.default.oneOfType([y.default.func,y.default.arrayOf(y.default.shape({key:y.default.string.isRequired,data:y.default.any,style:y.default.objectOf(y.default.oneOfType([y.default.number,y.default.object])).isRequired}))]).isRequired,children:y.default.func.isRequired,willEnter:y.default.func,willLeave:y.default.func,didLeave:y.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(e){return o.default(e.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=e.willEnter,a=e.willLeave,l=e.didLeave,u="function"==typeof n?n(t):n,s=void 0;s=null==t?u:t.map((function(e){for(var t=0;t<u.length;t++)if(u[t].key===e.key)return u[t];return e}));var c=null==t?u.map((function(e){return o.default(e.style)})):t.map((function(e){return o.default(e.style)})),f=null==t?u.map((function(e){return i.default(e.style)})):t.map((function(e){return i.default(e.style)})),p=h(r,a,l,s,u,c,f,c,f),d=p[0];return{currentStyles:p[1],currentVelocities:p[2],lastIdealStyles:p[3],lastIdealVelocities:p[4],mergedPropsStyles:d}},t.prototype.componentDidMount=function(){this.prevTime=c.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;this.unreadPropStyles="function"==typeof t?t(m(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):t,null==this.animationID&&(this.prevTime=c.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(f.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=m(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&d.default.Children.only(t)},t}(d.default.Component);t.default=v,e.exports=t.default},pwmp:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){for(var r={},a=0;a<e.length;a++)r[e[a].key]=a;var l={};for(a=0;a<t.length;a++)l[t[a].key]=a;var i=[];for(a=0;a<t.length;a++)i[a]=t[a];for(a=0;a<e.length;a++)if(!Object.prototype.hasOwnProperty.call(l,e[a].key)){var o=n(a,e[a]);null!=o&&i.push(o)}return i.sort((function(e,n){var a=l[e.key],i=l[n.key],o=r[e.key],u=r[n.key];if(null!=a&&null!=i)return l[e.key]-l[n.key];if(null!=o&&null!=u)return r[e.key]-r[n.key];if(null!=a){for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(a<l[c]&&u>r[c])return-1;if(a>l[c]&&u<r[c])return 1}}return 1}for(s=0;s<t.length;s++){c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(i<l[c]&&o>r[c])return 1;if(i>l[c]&&o<r[c])return-1}}return-1}))},e.exports=t.default},tYRH:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t){return r({},o,t,{val:e})};var a,l=n("LQNH"),i=(a=l)&&a.__esModule?a:{default:a},o=r({},i.default.noWobble,{precision:.01});e.exports=t.default},u461:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"==typeof e[n]?e[n]:e[n].val);return t},e.exports=t.default},unm8:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function l(e){return e&&e.__esModule?e:{default:e}}var i=l(n("Z6NN")),o=l(n("u461")),u=l(n("fXKH")),s=l(n("VciW")),c=l(n("xEkU")),f=l(n("kXpG")),p=l(n("q1tI")),d=l(n("17x9"));var y=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=a.state,n=t.currentStyles,l=t.currentVelocities,i=t.lastIdealStyles,o=t.lastIdealVelocities,u=!1,s=0;s<e.length;s++){var c=e[s],f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"==typeof d&&(f||(f=!0,u=!0,n[s]=r({},n[s]),l[s]=r({},l[s]),i[s]=r({},i[s]),o[s]=r({},o[s])),n[s][p]=d,l[s][p]=0,i[s][p]=d,o[s][p]=0)}}u&&a.setState({currentStyles:n,currentVelocities:l,lastIdealStyles:i,lastIdealVelocities:o})},this.startAnimationIfNecessary=function(){a.animationID=c.default((function(e){var t=a.props.styles(a.state.lastIdealStyles);if(function(e,t,n){for(var r=0;r<e.length;r++)if(!f.default(e[r],t[r],n[r]))return!1;return!0}(a.state.currentStyles,t,a.state.currentVelocities))return a.animationID=null,void(a.accumulatedTime=0);var n=e||s.default(),r=n-a.prevTime;if(a.prevTime=n,a.accumulatedTime=a.accumulatedTime+r,a.accumulatedTime>1e3/60*10&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();for(var l=(a.accumulatedTime-Math.floor(a.accumulatedTime/(1e3/60))*(1e3/60))/(1e3/60),i=Math.floor(a.accumulatedTime/(1e3/60)),o=[],c=[],p=[],d=[],y=0;y<t.length;y++){var m=t[y],h={},v={},g={},b={};for(var w in m)if(Object.prototype.hasOwnProperty.call(m,w)){var S=m[w];if("number"==typeof S)h[w]=S,v[w]=0,g[w]=S,b[w]=0;else{for(var T=a.state.lastIdealStyles[y][w],I=a.state.lastIdealVelocities[y][w],O=0;O<i;O++){var k=u.default(1e3/60/1e3,T,I,S.val,S.stiffness,S.damping,S.precision);T=k[0],I=k[1]}var P=u.default(1e3/60/1e3,T,I,S.val,S.stiffness,S.damping,S.precision),_=P[0],x=P[1];h[w]=T+(_-T)*l,v[w]=I+(x-I)*l,g[w]=T,b[w]=I}}p[y]=h,d[y]=v,o[y]=g,c[y]=b}a.animationID=null,a.accumulatedTime-=i*(1e3/60),a.setState({currentStyles:p,currentVelocities:d,lastIdealStyles:o,lastIdealVelocities:c}),a.unreadPropStyles=null,a.startAnimationIfNecessary()}))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyles:d.default.arrayOf(d.default.objectOf(d.default.number)),styles:d.default.func.isRequired,children:d.default.func.isRequired},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=t||n().map(o.default),a=r.map((function(e){return i.default(e)}));return{currentStyles:r,currentVelocities:a,lastIdealStyles:r,lastIdealVelocities:a}},t.prototype.componentDidMount=function(){this.prevTime=s.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=s.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&p.default.Children.only(e)},t}(p.default.Component);t.default=y,e.exports=t.default},w6mT:function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),l=n.n(a),i=n("0wEy"),o=function(e){function t(){return e.call(this)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.opacity,r=t.x,a=t.y;return this.props.right?l.a.createElement(i.Motion,{defaultStyle:{opacity:n.start,x:r.start,y:a.start},style:{opacity:Object(i.spring)(n.end,{stiffness:120,damping:17}),x:Object(i.spring)(r.end,{stiffness:r.stiffness,damping:r.damping}),y:Object(i.spring)(a.end,{stiffness:a.stiffness,damping:a.damping})}},(function(t){return l.a.createElement("div",{style:{opacity:t.opacity,marginTop:t.y+"px",marginRight:t.x+"px"}},e.props.children)})):l.a.createElement(i.Motion,{defaultStyle:{opacity:n.start,x:r.start,y:a.start},style:{opacity:Object(i.spring)(n.end,{stiffness:120,damping:17}),x:Object(i.spring)(r.end,{stiffness:r.stiffness,damping:r.damping}),y:Object(i.spring)(a.end,{stiffness:a.stiffness,damping:a.damping})}},(function(t){return l.a.createElement("div",{style:{display:"inherit",opacity:t.opacity,top:t.y+"px",marginLeft:t.x+"px"}},e.props.children)}))},t}(l.a.Component);o.defaultProps={right:!1,opacity:{start:0,end:1,stiffness:120,damping:17},x:{start:0,end:0,stiffness:50,damping:6.5},y:{start:0,end:0,stiffness:0,damping:0}},t.a=o},"xCC/":function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function l(e){return e&&e.__esModule?e:{default:e}}var i=l(n("Z6NN")),o=l(n("u461")),u=l(n("fXKH")),s=l(n("VciW")),c=l(n("xEkU")),f=l(n("kXpG")),p=l(n("q1tI")),d=l(n("17x9")),y=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,n=a.state,l=n.currentStyle,i=n.currentVelocity,o=n.lastIdealStyle,u=n.lastIdealVelocity;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var c=e[s];"number"==typeof c&&(t||(t=!0,l=r({},l),i=r({},i),o=r({},o),u=r({},u)),l[s]=c,i[s]=0,o[s]=c,u[s]=0)}t&&a.setState({currentStyle:l,currentVelocity:i,lastIdealStyle:o,lastIdealVelocity:u})},this.startAnimationIfNecessary=function(){a.animationID=c.default((function(e){var t=a.props.style;if(f.default(a.state.currentStyle,t,a.state.currentVelocity))return a.wasAnimating&&a.props.onRest&&a.props.onRest(),a.animationID=null,a.wasAnimating=!1,void(a.accumulatedTime=0);a.wasAnimating=!0;var n=e||s.default(),r=n-a.prevTime;if(a.prevTime=n,a.accumulatedTime=a.accumulatedTime+r,a.accumulatedTime>1e3/60*10&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();var l=(a.accumulatedTime-Math.floor(a.accumulatedTime/(1e3/60))*(1e3/60))/(1e3/60),i=Math.floor(a.accumulatedTime/(1e3/60)),o={},c={},p={},d={};for(var y in t)if(Object.prototype.hasOwnProperty.call(t,y)){var m=t[y];if("number"==typeof m)p[y]=m,d[y]=0,o[y]=m,c[y]=0;else{for(var h=a.state.lastIdealStyle[y],v=a.state.lastIdealVelocity[y],g=0;g<i;g++){var b=u.default(1e3/60/1e3,h,v,m.val,m.stiffness,m.damping,m.precision);h=b[0],v=b[1]}var w=u.default(1e3/60/1e3,h,v,m.val,m.stiffness,m.damping,m.precision),S=w[0],T=w[1];p[y]=h+(S-h)*l,d[y]=v+(T-v)*l,o[y]=h,c[y]=v}}a.animationID=null,a.accumulatedTime-=i*(1e3/60),a.setState({currentStyle:p,currentVelocity:d,lastIdealStyle:o,lastIdealVelocity:c}),a.unreadPropStyle=null,a.startAnimationIfNecessary()}))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyle:d.default.objectOf(d.default.number),style:d.default.objectOf(d.default.oneOfType([d.default.number,d.default.object])).isRequired,children:d.default.func.isRequired,onRest:d.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,n=e.style,r=t||o.default(n),a=i.default(r);return{currentStyle:r,currentVelocity:a,lastIdealStyle:r,lastIdealVelocity:a}},t.prototype.componentDidMount=function(){this.prevTime=s.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=s.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&p.default.Children.only(e)},t}(p.default.Component);t.default=y,e.exports=t.default},xEkU:function(e,t,n){(function(t){for(var r=n("bQgK"),a="undefined"==typeof window?t:window,l=["moz","webkit"],i="AnimationFrame",o=a["request"+i],u=a["cancel"+i]||a["cancelRequest"+i],s=0;!o&&s<l.length;s++)o=a[l[s]+"Request"+i],u=a[l[s]+"Cancel"+i]||a[l[s]+"CancelRequest"+i];if(!o||!u){var c=0,f=0,p=[];o=function(e){if(0===p.length){var t=r(),n=Math.max(0,1e3/60-(t-c));c=n+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return o.call(a,e)},e.exports.cancel=function(){u.apply(a,arguments)},e.exports.polyfill=function(e){e||(e=a),e.requestAnimationFrame=o,e.cancelAnimationFrame=u}}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-53b0aa2ca58a3a7936ec.js.map