(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"6d7a478e7cc0d7712c31":function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return o}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return i});var r="@@saga-injector/restart-on-remount",c="@@saga-injector/daemon",o="@@saga-injector/once-till-unmount",a="6Ec652wBQyPQ8c435pHOA",i="https://learntogether2021.herokuapp.com/"},"7830fb198d99e49e14ff":function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var c=n("8af190b70a6bc55c6f1b"),o=r(c),a=r(n("f66a9a2f451f5f6cfabf")),i=r(n("a88d2aa2cbd689d523e2"));e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u=[],f=void 0;function d(){f=e(u.map(function(e){return e.props})),s.canUseDOM?t(f):n&&(f=n(f))}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return f},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=f;return f=void 0,u=[],e},t.prototype.shouldComponentUpdate=function(e){return!i(e,this.props)},t.prototype.componentWillMount=function(){u.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),d()},t.prototype.render=function(){return o.createElement(r,this.props)},t}(c.Component);return s.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",s.canUseDOM=a.canUseDOM,s}}},"804982f965dff9c45325":function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),c=n.n(r),o=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),a=n("0d7f0986bcd2f33d8a2a"),i=n("a28fc3c963a1d4d1a2e5"),u=n("ab4cb61bcb2dc161defb"),f=n("adc20f99e57c573c589c"),d=n("d95b0cf107403b178365"),s=n("e95a63b25fb92ed15721"),l=n("01e2cd22dd17a35e4094"),p={},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;return Object(l.a)(e,function(){t.type})},y=function(e){return e.searchPage||p},v=function(){return Object(i.createSelector)(y,function(e){return e})},h=regeneratorRuntime.mark(m);function m(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},h)}var j,g,O,w=n("5744828f4855bfd1694a"),S=n("192b971c63d4096a30d1"),k=n("369a2015feb3eb249252"),x=n("4a5602adf82fe13d6438"),E=n("3e9c7e5351d86134f5f6"),P=n("67cab2d3541edef7eb53");function R(e,t,n,r){O||(O="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var a=new Array(o),i=0;i<o;i++)a[i]=arguments[i+3];t.children=a}if(t&&c)for(var u in c)void 0===t[u]&&(t[u]=c[u]);else t||(t=c||{});return{$$typeof:O,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,c,o=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){i=!0,c=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw c}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A,U,I=Object(i.createStructuredSelector)({courses:Object(k.a)(),users:Object(S.k)()}),M=Object(o.connect)(I),T=Object(u.compose)(Object(x.firebaseConnect)(function(){return[{path:"courses"},{path:"users"}]}),M)(function(e){var t=e.courses,n=e.users,c=e.match.params.query,o=C(Object(r.useState)([]),2),a=o[0],i=o[1];return Object(r.useEffect)(function(){if(t&&n){var e=[];e=(e=e.concat(t.filter(function(e){return e.value.title.toLowerCase().includes(c.toLowerCase())}).map(function(e){return{courseId:e.key,label:e.value.title,link:"/courses/".concat(e.key)}}))).concat(n.filter(function(e){return e.value.displayName}).filter(function(e){return e.value.displayName.toLowerCase().includes(c.toLowerCase())}).map(function(e){return{userId:e.key,label:e.value.displayName,link:"/users/".concat(e.key)}})),i(e)}},[t,n]),R(w.Container,{maxW:"8xl",py:12},void 0,R(w.Text,{},void 0,"Your query returned ",a.length," results"),j||(j=R("br",{})),R(w.Stack,{spacing:8},void 0,a.map(function(e){return R(w.Box,{as:s.Link,to:e.link,p:5,shadow:"md",borderWidth:"1px"},Object(E.v4)(),R(w.HStack,{},void 0,R(w.Text,{},void 0,e.label),g||(g=R(P.ChevronRightIcon,{}))))})))});function _(e,t,n,r){U||(U="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var a=new Array(o),i=0;i<o;i++)a[i]=arguments[i+3];t.children=a}if(t&&c)for(var u in c)void 0===t[u]&&(t[u]=c[u]);else t||(t=c||{});return{$$typeof:U,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function L(){return Object(d.a)({key:"searchPage",reducer:b}),Object(f.a)({key:"searchPage",saga:m}),_("div",{},void 0,A||(A=_(a.Helmet,{},void 0,_("title",{},void 0,"SearchPage"),_("meta",{name:"description",content:"Description of SearchPage"}))),_(s.Switch,{},void 0,_(s.Route,{exact:!0,path:"/search/:query",render:function(e){return c.a.createElement(T,e)}})))}n.d(t,"SearchPage",function(){return L});var N=Object(i.createStructuredSelector)({searchPage:v()});var W=Object(o.connect)(N,function(e){return{dispatch:e}});t.default=Object(u.compose)(W,r.memo)(L)},a88d2aa2cbd689d523e2:function(e,t){e.exports=function(e,t,n,r){var c=n?n.call(r,e,t):void 0;if(void 0!==c)return!!c;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var f=o[u];if(!i(f))return!1;var d=e[f],s=t[f];if(!1===(c=n?n.call(r,d,s,f):void 0)||void 0===c&&d!==s)return!1}return!0}},adc20f99e57c573c589c:function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),c=n.n(r),o=(n("5ef9de3df8d92ea0e41c"),n("d7dd51e1bf6bfc2c9c3d")),a=n("f2873ecf7390fe7d7c89"),i=n.n(a),u=n("5fa3f8487e09c6182715"),f=n.n(u),d=n("f3b0ff1628e56352bcbf"),s=n.n(d),l=n("a1cf5d6fa4ed65a6ddd5"),p=n.n(l),b=n("6a4f9c383785f9168266"),y=n.n(b),v=n("cc13decd9f9c09598c2f"),h=n("6d7a478e7cc0d7712c31");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){g(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=[h.c,h.a,h.b],w=function(e){return y()(f()(e)&&!p()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},S=function(e){var t={saga:s.a,mode:function(e){return f()(e)&&O.includes(e)}};y()(i()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function k(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments.length>2?arguments[2]:void 0;t||Object(v.a)(e);var o=j(j({},r),{},{mode:r.mode||h.a}),a=o.saga,i=o.mode;w(n),S(o);var u=Reflect.has(e.injectedSagas,n);(!u||u&&i!==h.a&&i!==h.b)&&(e.injectedSagas[n]=j(j({},o),{},{task:e.runSaga(a,c)}))}}function x(e,t){return function(n){if(t||Object(v.a)(e),w(n),Reflect.has(e.injectedSagas,n)){var r=e.injectedSagas[n];r.mode&&r.mode!==h.a&&(r.task.cancel(),e.injectedSagas[n]="done")}}}function E(e){return Object(v.a)(e),{injectSaga:k(e,!0),ejectSaga:x(e,!0)}}n.d(t,"a",function(){return P});var P=function(e){var t=e.key,n=e.saga,r=e.mode,a=c.a.useContext(o.ReactReduxContext);c.a.useEffect(function(){var e=E(a.store);return e.injectSaga(t,{saga:n,mode:r}),function(){e.ejectSaga(t)}},[])}},cc13decd9f9c09598c2f:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n("d3a850c4000d77bccc89"),c=n.n(r),o=n("f3b0ff1628e56352bcbf"),a=n.n(o),i=n("f2873ecf7390fe7d7c89"),u=n.n(i),f=n("6a4f9c383785f9168266"),d=n.n(f);function s(e){var t={dispatch:a.a,subscribe:a.a,getState:a.a,replaceReducer:a.a,runSaga:a.a,injectedReducers:c.a,injectedSagas:c.a};d()(u()(e,t),"(app/utils...) injectors: Expected a valid redux store")}},d95b0cf107403b178365:function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),c=n.n(r),o=(n("5ef9de3df8d92ea0e41c"),n("d7dd51e1bf6bfc2c9c3d")),a=n("5fa3f8487e09c6182715"),i=n.n(a),u=n("f3b0ff1628e56352bcbf"),f=n.n(u),d=n("a1cf5d6fa4ed65a6ddd5"),s=n.n(d),l=n("6a4f9c383785f9168266"),p=n.n(l),b=n("cc13decd9f9c09598c2f"),y=n("491cc2e27aa2b4221847");function v(e,t){return function(n,r){t||Object(b.a)(e),p()(i()(n)&&!s()(n)&&f()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(y.a)(e.injectedReducers)))}}function h(e){return Object(b.a)(e),{injectReducer:v(e,!0)}}n.d(t,"a",function(){return m});var m=function(e){var t=e.key,n=e.reducer,r=c.a.useContext(o.ReactReduxContext);c.a.useEffect(function(){h(r.store).injectReducer(t,n)},[])}}}]);