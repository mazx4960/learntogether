(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"1c566aba6b26582ddf85":function(e,t,r){var n=r("369bf5399186d5e21f13");"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r("1e4534d1d62a11482e97")(n,o);n.locals&&(e.exports=n.locals)},"369bf5399186d5e21f13":function(e,t,r){(e.exports=r("0e326f80368fd0b1333e")(!1)).push([e.i,".light-theme{\n  --light-gray: var(--chakra-colors-gray-200);\n  --gray: var(--chakra-colors-gray-300);\n  --blue700:var(--chakra-colors-blue-600);\n  --blue600: var(--chakra-colors-blue-500);\n  --blue500: var(--chakra-colors-gray-400);\n  --blue400: var(--chakra-colors-gray-300);\n  --blue300: var(--chakra-colors-gray-200);\n  --blue200: var(--chakra-colors-gray-200);\n  --blue100: var(--chakra-colors-gray-100);\n  --monthBackground: var(--chakra-colors-white);\n  --text:var(--chakra-colors-black);\n  --negative-text:var(--chakra-colors-white);\n}\n.dark-theme{\n  --light-gray: var(--chakra-colors-gray-600);\n  --gray: var(--chakra-colors-gray-500);\n  --blue700: var(--chakra-colors-blue-600);\n  --blue600: var(--chakra-colors-blue-300);\n  --blue500: var(--chakra-colors-gray-500);\n  --blue400: var(--chakra-colors-gray-600);\n  --blue300: var(--chakra-colors-gray-700);\n  --blue200: var(--chakra-colors-gray-600);\n  --blue100: var(--chakra-colors-gray-800);\n  --monthBackground: var(--chakra-colors-gray-700);\n  --text:var(--chakra-colors-gray-200);\n  --negative-text:var(--chakra-colors-black);\n}\n\n/* if you dont want to use chakra's theme use this class in the wrapping div. These are the exact original values */\n.light-theme-original{\n  --light-gray: #cccccc;\n  --gray: #b3b3b3;\n  --blue700:#2a69ac;\n  --blue600: #3182ce;\n  --blue500: #a0aec0;\n  --blue400: #cbd5e0;\n  --blue300: #e2e8f0;\n  --blue200: #edf2f7;\n  --blue100: #f7fafc;\n}\n.react-datepicker {\n\tfont-family: unset;\n\tfont-size: 0.9rem;\n  border-color: var(--light-gray);\n}\n  \n.react-datepicker-wrapper,\n.react-datepicker__input-container {\ndisplay: block;\n}\n\n.react-datepicker__input-container {\nfont-size: 1rem;\npadding-left: 1rem;\npadding-right: 1rem;\nheight: 2.5rem;\nborder-radius: 0.25rem;\nborder: 1px solid;\nborder-color: var(--light-gray);\n}\n.react-datapicker__input-text {\n  background-color: transparent;\n}\n\n.react-datepicker__input-container:hover {\nborder-color: var(--gray)\n}\n.react-datepicker__input-container:focus-within {\nz-index: 1;\nborder-color: var(--blue600);\nbox-shadow: 0 0 0 1px var(--blue600);\n}\n\n.react-datepicker__input-container > input {\nwidth: 100%;\nheight: 100%;\noutline: 0;\n}\n\n.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {\nright: 90px;\n}\n\n.react-datepicker__navigation--previous,\n.react-datepicker__navigation--next {\nheight: 8px;\n}\n\n.react-datepicker__navigation--previous {\nborder-right-color: var(--blue400);\n}\n\n.react-datepicker__navigation--previous:hover {\nborder-right-color: var(--blue500);\n}\n\n.react-datepicker__navigation--next {\nborder-left-color: var(--blue400);\n\n}\n\n.react-datepicker__navigation--next:hover {\nborder-left-color: var(--blue500);\n}\n\n.react-datepicker__header {\nbackground-color: var(--blue100);\n}\n\n.react-datepicker__header,\n.react-datepicker__time-container {\nborder-color: var(--blue300);\n}\n\n.react-datepicker__current-month,\n.react-datepicker-time__header,\n.react-datepicker-year-header {\nfont-size: inherit;\nfont-weight: 600;\ncolor: var(--text)\n}\n\n.react-datepicker__month{\n  background-color: var(--monthBackground);\n  margin:0;\n  padding:0.4rem;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {\nmargin: 0 1px 0 0;\n    height: auto;\n  padding: 7px 10px;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {\n  background: var(--blue200);\n}\n\n.react-datepicker__day {\n  color: var(--text)\n}\n\n.react-datepicker__day:hover {\n  background: var(--blue200);\n}\n\n.react-datepicker__day-name {\n  color:var(--text)\n}\n\n.react-datepicker__day--selected,\n.react-datepicker__day--in-selecting-range,\n.react-datepicker__day--in-range,\n.react-datepicker__month-text--selected,\n.react-datepicker__month-text--in-selecting-range,\n.react-datepicker__month-text--in-range,\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {\nbackground: var(--blue600);\nfont-weight: normal;\ncolor:var(--negative-text);\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {\nbackground: var(--blue700);\n}\n\n.react-datepicker__close-icon::after {\nbackground-color: unset;\nborder-radius: unset;\nfont-size: 1.5rem;\nfont-weight: bold;\ncolor: var(--light-gray);\nheight: 20px;\nwidth: 20px;\n}\n\n.react-datepicker__close-icon::after:hover {\ncolor: var(--gray)\n}",""])},bfba2bcebe5bb22d6eb4:function(e,t,r){"use strict";r.r(t);var n=r("8af190b70a6bc55c6f1b"),o=r.n(n),a=(r("8a2d1b95e05b6a321e74"),r("d7dd51e1bf6bfc2c9c3d")),i=r("0d7f0986bcd2f33d8a2a"),c=r("a28fc3c963a1d4d1a2e5"),l=r("ab4cb61bcb2dc161defb"),u=r("e95a63b25fb92ed15721"),s=r("4a5602adf82fe13d6438"),d=r("adc20f99e57c573c589c"),f=r("d95b0cf107403b178365"),p=r("6542cd13fd5dd1bcffd4"),v=r("01e2cd22dd17a35e4094"),h="app/CoursePage/DEFAULT_ACTION",b="app/CoursePage/joinSlotAdded",m="app/CoursePage/joinSlotSelected",y="app/CoursePage/hostSlotAdded",g="app/CoursePage/hostSlotSelected",k=1;function S(e){var t=e*k*60;return String(Math.floor(t/60)).padStart(2,"0")+String(t%60).padStart(2,"0")}function w(e,t){var r=e.reduce(function(e,t){return e.concat(t)}).reduce(function(e,t){return e+t.numVots},0);return Math.floor(r/(7*t))}function O(e,t){for(var r=0;r<t.length;r+=1)if(t[r]===e)return!0;return!1}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){j(e,t,r[t])})}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C=function(){for(var e=[],t=[],r=0;r<7;r+=1){for(var n=[],o=[],a=Math.floor(24/k),i=0;i<a;i+=1)n.push({id:i,availSlots:[],selected:!1}),o.push({id:i,votes:[],selected:!1});e.push(n),t.push(o)}return{joinSlots:e,hostSlots:t}}(),x={joinSlots:C.joinSlots,hostSlots:C.hostSlots},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;return Object(v.a)(e,function(){switch(t.type){case b:return _({},e,{joinSlots:e.joinSlots.map(function(e,r){return e.map(function(e){return e.id!==t.payload.id||r!==t.payload.day?e:_({},e,{availSlots:O(t.payload.slot,e.availSlots)?e.availSlots:e.availSlots.concat(t.payload.slot)})})})});case m:return _({},e,{joinSlots:e.joinSlots.map(function(e,r){return e.map(function(e){return e.id!==t.payload.id||r!==t.payload.day?e:_({},e,{selected:!e.selected})})})});case y:return _({},e,{hostSlots:e.hostSlots.map(function(e,r){return e.map(function(e){return e.id!==t.payload.id||r!==t.payload.day?e:_({},e,{votes:O(t.payload.slot,e.votes)?e.votes:e.votes.concat(t.payload.slot)})})})});case g:return _({},e,{hostSlots:e.hostSlots.map(function(e,r){return e.map(function(e){return e.id!==t.payload.id||r!==t.payload.day?e:_({},e,{selected:!e.selected})})})});case h:default:return _({},e)}})},T=function(e){return e.coursePage||x},I=function(){return Object(c.a)(T,function(e){return e})},B=regeneratorRuntime.mark(M);function M(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},B)}var A,D,L=r("5744828f4855bfd1694a");function N(e,t,r,n){A||(A="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=n;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:A,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function V(e){var t=e.title,r=e.leftButtonText,n=e.leftButtonLink,o=e.rightButtonText,a=e.rightButtonLink;return N(L.Flex,{w:"full",h:"70vh",backgroundImage:"url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",backgroundSize:"cover",backgroundPosition:"center center"},void 0,N(L.VStack,{w:"full",justify:"center",px:Object(L.useBreakpointValue)({base:4,md:8}),bgGradient:"linear(to-r, blackAlpha.600, transparent)"},void 0,N(L.Stack,{maxW:"2xl",align:"flex-start",spacing:6},void 0,N(L.Text,{color:"white",fontWeight:700,lineHeight:1.2,fontSize:Object(L.useBreakpointValue)({base:"3xl",md:"4xl"})},void 0,t),N(L.Stack,{direction:"row"},void 0,N(L.Button,{as:"a",href:n,bg:"blue.400",rounded:"full",color:"white",_hover:{bg:"blue.500"}},void 0,r),N(L.Button,{as:"a",href:a,bg:"whiteAlpha.300",rounded:"full",color:"white",_hover:{bg:"whiteAlpha.500"}},void 0,o)))))}function H(e,t,r,n){D||(D="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=n;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:D,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var E=H(L.Container,{maxW:"7xl",py:12},void 0,H(L.Box,{},void 0,H(L.Heading,{mb:4},void 0,"About this course"),H(L.Text,{fontSize:"l"},void 0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa est, auctor vel condimentum eget, dignissim ut libero. Nulla commodo risus magna, sit amet consectetur eros porttitor quis. Nulla purus lacus, malesuada non condimentum quis, tristique nec lacus. Nunc a porta justo. Nunc lacinia lobortis leo, ac tincidunt lectus facilisis ac. Mauris nec pellentesque tellus. Etiam luctus sem erat, hendrerit laoreet lacus sodales vitae. Sed diam dui, volutpat vitae mollis sed, egestas in ligula. Ut risus mauris, vehicula ut fringilla a, maximus ut magna. Nullam pharetra mollis cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit arcu, consectetur quis placerat at, imperdiet nec ipsum. Integer sagittis risus a porta pulvinar. Nullam rhoncus et nulla ut laoreet. In nec nunc id nisi tincidunt maximus vitae vitae felis. Nulla ac iaculis augue.")));function $(e){var t=e.match.params.courseId,r="/courses/".concat(String(t),"/join"),n="/courses/".concat(String(t),"/host");return H(L.VStack,{},void 0,H(V,{title:"React Bootcamp",leftButtonText:"View course timings",leftButtonLink:r,rightButtonText:"Host this course",rightButtonLink:n}),E)}var F,z=r("67cab2d3541edef7eb53");function R(e,t,r,n){F||(F="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=n;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:F,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function J(e){var t=e.slot,r=e.onClick,n=e.onSelectAvailSlot,o=t.availSlots.length,a=t.selected,i=Object(L.useColorModeValue)("gray.100","gray.900"),c=Object(L.useColorModeValue)("gray.200","gray.800"),l=Object(L.useColorModeValue)("green.200","green.900"),u=Object(L.useColorModeValue)("green.300","green.800"),s=Object(L.useColorModeValue)("orange.200","orange.900");return 0===o?R(L.Box,{as:"button",onClick:r,width:"100%",height:10,justifyContent:"flex-end",bg:a?s:i,_hover:{bg:c}},void 0,"- Vote -"):R(L.Box,{as:"button",onClick:n,width:"100%",height:10,justifyContent:"flex-end",bg:l,_hover:{bg:u}},void 0,"- ",o," slots -")}var W,q=r("3e9c7e5351d86134f5f6");function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Y(e,t,r,n){W||(W="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=n;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:W,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var G=Y(L.ModalOverlay,{}),X=Y(L.ModalCloseButton,{});var Q,Z=function(e){var t=e.isOpen,r=e.onClose,n=e.title,a=e.CardComponent,i=e.cardProps;return Y(L.Modal,{blockScrollOnMount:!1,isOpen:t,onClose:r,size:"xl"},void 0,G,Y(L.ModalContent,{},void 0,Y(L.ModalHeader,{},void 0,n),X,Y(L.ModalBody,{pb:6},void 0,Y(L.Stack,{spacing:8},void 0,i.map(function(e){return o.a.createElement(a,U({key:Object(q.v4)()},e))}))),Y(L.ModalFooter,{},void 0,Y(L.Button,{colorScheme:"blue",onClick:r},void 0,"Done"))))};function K(e,t,r,n){Q||(Q="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=n;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:Q,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var te=K(z.ChevronUpIcon,{}),re=K(z.ChevronDownIcon,{});var ne,oe=function(e){var t=e.title,r=e.desc,o=e.extraContent,a=ee(Object(n.useState)(!1),2),i=a[0],c=a[1],l=i?te:re;return K(L.Stack,{},void 0,K(L.HStack,{},void 0,K(L.Box,{mr:"auto"},void 0,K(L.Heading,{fontSize:"xl"},void 0,t),K(L.Text,{},void 0,r)),K(L.Button,{onClick:function(){return c(!i)}},void 0,l)),i&&o)};function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ie(e,t,r,n){ne||(ne="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=n;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:ne,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function ce(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function le(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var ue,se=ie(L.TableCaption,{placement:"top"},void 0,"Course Timings"),de=ie(L.Thead,{},void 0,ie(L.Tr,{},void 0,ie(L.Th,{}),ie(L.Th,{},void 0,ie(L.Center,{},void 0,"Sun")),ie(L.Th,{},void 0,ie(L.Center,{},void 0,"Mon")),ie(L.Th,{},void 0,ie(L.Center,{},void 0,"Tue")),ie(L.Th,{},void 0,ie(L.Center,{},void 0,"Wed")),ie(L.Th,{},void 0,ie(L.Center,{},void 0,"Thu")),ie(L.Th,{},void 0,ie(L.Center,{},void 0,"Fri")),ie(L.Th,{},void 0,ie(L.Center,{},void 0,"Sat")))),fe=ie(L.Tfoot,{});function pe(e){var t=e.slotItems,r=e.periodLen,n=e.numPeriodsPerDay,a=e.scrollable,i=le(e,["slotItems","periodLen","numPeriodsPerDay","scrollable"]);return ie(L.Box,{height:a&&"500px",overflowY:a&&"auto"},void 0,o.a.createElement(L.Table,ae({variant:"simple"},i),se,de,ie(L.Tbody,{},void 0,ce(Array(n).keys()).map(function(e){return ie(L.Tr,{},Object(q.v4)(),ie(L.Td,{padding:"0px"},void 0,ie(L.Center,{fontWeight:"bold",borderRight:"1px",borderColor:"gray.500"},void 0,function(e,t){var r=e*t*60,n=String(Math.floor(r/60)).padStart(2,"0"),o=String(r%60).padStart(2,"0");return n+o}(e,r))),ce(Array(7).keys()).map(function(r){return ie(L.Td,{padding:"0px"},Object(q.v4)(),t[r][e])}))})),fe))}function ve(e,t,r,n){ue||(ue="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=n;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:ue,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function he(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function be(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function i(e){he(a,n,o,i,c,"next",e)}function c(e){he(a,n,o,i,c,"throw",e)}i(void 0)})}}function me(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ye=ve(L.Td,{},void 0,"Number of meetings"),ge=ve(L.Td,{},void 0,"Participant Limit"),ke=ve(z.ChevronRightIcon,{color:"gray.500"}),Se=ve(L.BreadcrumbItem,{},void 0,ve(L.BreadcrumbLink,{as:u.Link,to:"/"},void 0,"Course")),we=ve(L.BreadcrumbItem,{isCurrentPage:!0},void 0,ve(L.BreadcrumbLink,{as:u.Link,to:"#"},void 0,"Join")),Oe=ve(L.Heading,{mb:4},void 0,"Choose slots to join"),_e=ve("br",{});var je=Object(c.b)({coursePage:I(),courseId:function(e,t){return t.match.params.courseId},availSlots:Object(c.a)(p.b,function(e){return e.ordered.coursesHosted?e.ordered.coursesHosted:[]}),joinSlots:Object(c.a)(T,function(e){return e.joinSlots?e.joinSlots:[]}),votedJoinSlots:Object(c.a)(T,function(e){for(var t=[],r=0;r<e.joinSlots.length;r+=1)for(var n=0;n<e.joinSlots[r].length;n+=1)e.joinSlots[r][n].selected&&t.push({day:r,period:n});return t})});var Ce,xe=Object(a.connect)(je,function(e){return{onSelectJoinSlot:function(t,r){return function(){return e(function(e,t){return{type:m,payload:{day:e,id:t}}}(t,r))}},addAvail:function(t,r,n){return e(function(e,t,r){return{type:b,payload:{day:e,id:t,slot:r}}}(t,r,n))}}}),Pe=Object(l.compose)(Object(s.firebaseConnect)(function(e){return[{path:"coursesHosted",queryParams:["orderByChild=courseId",e.match.params.courseId]}]}),xe,n.memo)(function(e){var t=e.auth,r=e.courseId,o=e.availSlots,a=e.joinSlots,i=e.votedJoinSlots,c=e.onSelectJoinSlot,l=e.addAvail;Object(f.a)({key:"coursePage",reducer:P}),Object(d.a)({key:"coursePage",saga:M});var p=Object(s.useFirebase)(),v=Object(L.useToast)(),h=Object(L.useDisclosure)(),b=h.isOpen,m=h.onOpen,y=h.onClose,g=me(Object(n.useState)({day:0,period:0}),2),S=g[0],w=g[1],O=me(Object(n.useState)([]),2),_=O[0],j=O[1],C=function(e){return v({title:"Success!",description:e.toString(),status:"success",isClosable:!0})},x=function(e){return v({title:"Error!",description:e.toString(),status:"error",isClosable:!0})};Object(n.useEffect)(function(){for(var e=0;e<o.length;e+=1)for(var t=JSON.parse(o[e].value.periods),r=0;r<t.length;r+=1){var n=t[r],a=n.day,i=n.period;l(a,i,o[e])}j(o.filter(function(e){var t=JSON.parse(e.value.periods);if(!t.length>0)return!1;var r=t[0];return r.day===S.day&&r.period===S.period}))},[o,S]);var T=(N=be(regeneratorRuntime.mark(function e(n){var o,a,c,l,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(n.preventDefault(),e.prev=1,o=[],a=0;a<i.length;a+=1)c=i[a],l=c.day,u=c.period,o.push(p.push("coursesVoted",{dateCreated:(new Date).toDateString(),userId:t.uid,courseId:r,day:l,period:u}));return e.next=6,Promise.all(o);case 6:C("Voted saved."),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),x(e.t0);case 12:case"end":return e.stop()}},e,null,[[1,9]])})),function(e){return N.apply(this,arguments)}),I=function(e,t){return function(){w({day:e,period:t}),m()}},B=Math.floor(24/k),A=a.map(function(e,t){return e.map(function(e){return ve(J,{slot:e,onClick:c(t,e.id),onSelectAvailSlot:I(t,e.id)})})}),D=_.map(function(e){var n;return{title:new Date(e.value.startDate).toDateString(),desc:"Hosted by: ".concat(e.value.hostDisplayName),extraContent:ve(L.Stack,{},void 0,ve(L.Table,{},void 0,ve(L.Tbody,{},void 0,ve(L.Tr,{},void 0,ye,ve(L.Td,{isNumeric:!0},void 0,e.value.numMeetings.toString())),ve(L.Tr,{},void 0,ge,ve(L.Td,{isNumeric:!0},void 0,e.value.participantLimit.toString())))),ve(L.Center,{},void 0,ve(L.Button,{onClick:(n=e.key,be(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:p.push("coursesJoined",{dateCreated:(new Date).toString(),userId:t.uid,courseId:r,courseHostedId:n}).then(function(){return C("Joined course")}).catch(function(e){return x(e)});case 1:case"end":return e.stop()}},e)})))},void 0,"Join")))}});var N;return ve(L.Container,{maxW:"7xl",py:12},void 0,ve(L.Breadcrumb,{spacing:"8px",separator:ke},void 0,Se,ve(L.BreadcrumbItem,{},void 0,ve(L.BreadcrumbLink,{as:u.Link,to:"/courses/".concat(r)},void 0,r)),we),ve(Z,{isOpen:b,onClose:y,title:"Available Timings",CardComponent:oe,cardProps:D}),ve(L.Box,{pt:12},void 0,Oe,ve(pe,{scrollable:!0,height:"100px",slotItems:A,periodLen:k,numPeriodsPerDay:B}),_e,ve(L.Center,{},void 0,ve(L.Button,{onClick:T},void 0,"Save Votes"))))}),Te=r("6d0b3088082c0f598087"),Ie=r.n(Te);r("f85e09def79cc2a20bc2"),r("1c566aba6b26582ddf85");function Be(){return(Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Me(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var Ae,De=function(e){var t=e.selectedDate,r=e.onChange,n=e.isClearable,a=void 0!==n&&n,i=e.showPopperArrow,c=void 0!==i&&i,l=Me(e,["selectedDate","onChange","isClearable","showPopperArrow"]);return function(e,t,r,n){Ce||(Ce="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=n;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:Ce,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}("div",{className:"light"===Object(L.useColorMode)().colorMode?"light-theme":"dark-theme"},void 0,o.a.createElement(Ie.a,Be({selected:t,onChange:r,isClearable:a,showPopperArrow:c,className:"react-datapicker__input-text"},l)))};function Le(e,t,r,n){Ae||(Ae="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=n;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:Ae,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var Ne=Le(L.ModalOverlay,{}),Ve=Le(L.ModalHeader,{},void 0,"Schedule a meeting"),He=Le(L.ModalCloseButton,{}),Ee=Le(L.FormLabel,{},void 0,"Set your display name"),$e=Le(L.FormLabel,{},void 0,"Meeting Timings"),Fe=Le(L.Thead,{},void 0,Le(L.Tr,{},void 0,Le(L.Th,{},void 0,"Day"),Le(L.Th,{},void 0,"Period"))),ze=Le(L.FormLabel,{},void 0,"Number of meetings"),Re=Le(L.NumberInputStepper,{},void 0,Le(L.NumberIncrementStepper,{}),Le(L.NumberDecrementStepper,{})),Je=Le(L.FormLabel,{},void 0,"Participant Limiit"),We=Le(L.NumberInputStepper,{},void 0,Le(L.NumberIncrementStepper,{}),Le(L.NumberDecrementStepper,{})),qe=Le(L.FormControl,{mt:4},void 0,Le(L.FormLabel,{},void 0,"Meeting Duration"),Le(L.Select,{placeholder:"Select duration",defaultValue:1},void 0,Le("option",{value:1},void 0,"1 hour"))),Ue=Le(L.FormLabel,{},void 0,"Course Start Date");var Ye,Ge=function(e){var t=e.isOpen,r=e.onCreate,n=e.onClose,o=e.timings,a=e.displayName,i=e.setDisplayName,c=e.numMeetings,l=e.setNumMeetings,u=e.participantLimit,s=e.setParticipantLimit,d=e.startDate,f=e.setStartDate;return Le(L.Modal,{blockScrollOnMount:!1,isOpen:t,onClose:n,size:"xl"},void 0,Ne,Le(L.ModalContent,{},void 0,Ve,He,Le(L.ModalBody,{pb:6},void 0,Le(L.FormControl,{},void 0,Ee,Le(L.Input,{placeholder:"Display name",value:a,onChange:function(e){i(e.target.value)}})),Le(L.FormControl,{mt:4},void 0,$e,Le(L.Table,{},void 0,Fe,Le(L.Tbody,{},void 0,o.map(function(e){return Le(L.Tr,{},Object(q.v4)(),Le(L.Td,{},void 0,["Sun","Mon","Tues","Wed","Thu","Fri","Sat"][e.day]),Le(L.Td,{},void 0,S(e.period)))})))),Le(L.FormControl,{mt:4},void 0,ze,Le(L.NumberInput,{max:50,min:1,defaultValue:c},void 0,Le(L.NumberInputField,{value:c,onChange:function(e){l(e.target.value)}}),Re)),Le(L.FormControl,{mt:4},void 0,Je,Le(L.NumberInput,{max:50,min:1,defaultValue:u},void 0,Le(L.NumberInputField,{value:u,onChange:function(e){s(e.target.value)}}),We)),qe,Le(L.FormControl,{mt:4},void 0,Ue,Le(De,{selected:d,onChange:function(e){return f(e)},showPopperArrow:!0}))),Le(L.ModalFooter,{},void 0,Le(L.Button,{colorScheme:"blue",mr:3,onClick:r},void 0,"Create"),Le(L.Button,{onClick:n},void 0,"Cancel"))))},Xe=r("bd183afcc37eabd79225"),Qe=r.n(Xe);function Ze(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Ke,et,tt=function(e){var t=e.title,r=void 0===t?"":t,o=e.width,a=void 0===o?500:o,i=e.height,c=void 0===i?500:i,l=e.url,u=e.children,s=e.onCode,d=e.onClose,f=Ze(Object(n.useState)(),2),p=f[0],v=f[1],h=Object(n.useRef)(),b=function(){window.clearInterval(h.current)},m=function(){v(function(e){var t=e.url,r=e.title,n=e.height,o=e.width,a=window.screenX+(window.outerWidth-o)/2,i=window.screenY+(window.outerHeight-n)/2.5;return window.open(t,r,"width=".concat(o,",height=").concat(n,",left=").concat(a,",top=").concat(i))}({url:l,title:r,width:a,height:c}))};return Object(n.useEffect)(function(){return p&&(h.current=window.setInterval(function(){try{var e=p.location.href,t=new URL(e).searchParams,r=t.get("code");if(!r)return;s(r,t),b()}catch(e){}finally{p&&!p.closed||(d(),b())}},700)),function(){p&&p.close(),d&&d()}},[p]),function(e,t,r,n){Ye||(Ye="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=n;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:Ye,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}("div",{onClick:function(){m()}},void 0,u)};function rt(e){var t=e.slot,r=e.onClick,n=e.aveVotes,o=t.votes.length,a=t.selected,i="green.100";return i=0===o?"gray.100":o<n-1?"green.100":o>n+1?"green.300":"green.200",function(e,t,r,n){Ke||(Ke="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=n;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:Ke,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}(L.Box,{as:"button",onClick:r,width:"100%",height:10,justifyContent:"flex-end",bg:a?"orange.200":i,_hover:{bg:"orange.200"}},void 0,"- ",o," votes -")}function nt(e,t,r,n){et||(et="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=n;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:et,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function ot(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function at(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function i(e){ot(a,n,o,i,c,"next",e)}function c(e){ot(a,n,o,i,c,"throw",e)}i(void 0)})}}function it(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ct(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var lt=nt(z.ChevronRightIcon,{color:"gray.500"}),ut=nt(L.BreadcrumbItem,{},void 0,nt(L.BreadcrumbLink,{href:"/"},void 0,"Course")),st=nt(L.BreadcrumbItem,{isCurrentPage:!0},void 0,nt(L.BreadcrumbLink,{href:"#"},void 0,"Host")),dt=nt(L.Heading,{mb:4},void 0,"Choose slots to host"),ft=nt("br",{});var pt=Object(c.b)({coursePage:I(),userDetails:Object(c.a)(p.b,function(e){return e.ordered.users}),courseId:function(e,t){return t.match.params.courseId},hostSlots:Object(c.a)(T,function(e){return e.hostSlots?e.hostSlots:[]}),selectedHostSlots:Object(c.a)(T,function(e){for(var t=[],r=0;r<e.hostSlots.length;r+=1)for(var n=0;n<e.hostSlots[r].length;n+=1)e.hostSlots[r][n].selected&&t.push({day:r,period:n});return t}),slotVotes:Object(c.a)(p.b,function(e){return e.ordered.coursesVoted?e.ordered.coursesVoted:[]})});var vt,ht=Object(a.connect)(pt,function(e){return{onSelectHostSlot:function(t,r){return function(){return e(function(e,t){return{type:g,payload:{day:e,id:t}}}(t,r))}},addVote:function(t,r,n){return e(function(e,t,r){return{type:y,payload:{day:e,id:t,slot:r}}}(t,r,n))}}}),bt=Object(l.compose)(Object(s.firebaseConnect)(function(e){return[{path:"coursesVoted",queryParams:["orderByChild=courseId",e.match.params.courseId]},{path:"users/".concat(e.auth.uid)}]}),ht,n.memo)(function(e){var t=e.auth,r=e.userDetails,o=e.courseId,a=e.slotVotes,i=e.hostSlots,c=e.selectedHostSlots,l=e.onSelectHostSlot,u=e.addVote;Object(f.a)({key:"coursePage",reducer:P}),Object(d.a)({key:"coursePage",saga:M});var p=Object(s.useFirebase)(),v=Object(L.useToast)(),h=Object(L.useDisclosure)(),b=h.isOpen,m=h.onOpen,y=h.onClose,g=ct(Object(n.useState)(!1),2),O=g[0],_=g[1],j=ct(Object(n.useState)(""),2),C=j[0],x=j[1],T=ct(Object(n.useState)(""),2),I=(T[0],T[1]),B=ct(Object(n.useState)(new Date),2),A=B[0],D=B[1],N=ct(Object(n.useState)(""),2),V=N[0],H=N[1],E=ct(Object(n.useState)(14),2),$=E[0],F=E[1],z=ct(Object(n.useState)(10),2),R=z[0],J=z[1],W=function(e){return v({title:"Success!",description:e.toString(),status:"success",isClosable:!0})},q=function(e){return v({title:"Error!",description:e.toString(),status:"error",isClosable:!0})};Object(n.useEffect)(function(){for(var e=0;e<a.length;e+=1){var n=a[e].value,o=n.day,i=n.period;u(o,i,a[e])}if(Object(s.isLoaded)(r)){var c=r[t.uid].reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){it(e,t,r[t])})}return e}({},e,it({},t.key,t.value))},{});c.zoomTokenManager&&c.zoomTokenManager.accessToken&&(_(!0),x(c.zoomTokenManager.accessToken),I(c.zoomTokenManager.refreshToken))}},[a,r]);var U="https://zoom.us/oauth/authorize?response_type=code&client_id=".concat("6Ec652wBQyPQ8c435pHOA","&redirect_uri=").concat("AXClBoFlY21176BBzAwtoUYvVeNt9pLk"),Y=(K=at(regeneratorRuntime.mark(function e(r,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.resolve(!0);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),q(e.t0);case 8:return e.prev=8,Qe.a.get("/api/zoom/getToken",{params:{code:r}}).then(function(e){var r=e.data;p.update("users/".concat(t.uid),{zoomTokenManager:{accessToken:r.access_token,refreshToken:r.refresh_token}}),W("Connected zoom account!")}).catch(function(e){return q(e.response.data.reason)}),e.finish(8);case 11:case"end":return e.stop()}},e,null,[[0,5,8,11]])})),function(e,t){return K.apply(this,arguments)}),G=(Z=at(regeneratorRuntime.mark(function e(r){var n,a,i,l,u,s,d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,n=A.toISOString().slice(0,10),a=S(c[0].period),i="".concat(a.slice(0,2),":").concat(a.slice(2,4),":00"),l=c[0].day,u={accessToken:C,topic:"topic",startTime:"".concat(n,"T").concat(i),days:l,numMeetings:$},e.next=9,Qe.a.post("/api/zoom/createMeeting",u).catch(function(e){throw p.remove("users/".concat(t.uid,"/zoomTokenManager")),new Error(e.response.data.error.message)});case 9:return s=e.sent,d=s.data.join_url,e.next=13,p.push("coursesHosted",{dateCreated:(new Date).toDateString(),userId:t.uid,hostDisplayName:V,courseId:o,startDate:A.toString(),periods:JSON.stringify(c),numMeetings:$,participantLimit:R,zoomUrl:d});case 13:W("Hosted a new course!"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),q(e.t0);case 19:case"end":return e.stop()}},e,null,[[1,16]])})),function(e){return Z.apply(this,arguments)}),X=Math.floor(24/k),Q=i.map(function(e,t){return e.map(function(e){return nt(rt,{day:t,slot:e,aveVotes:w(i,X),onClick:l(t,e.id)})})});var Z;var K;return nt(L.Container,{maxW:"7xl",py:12},void 0,nt(L.Breadcrumb,{spacing:"8px",separator:lt},void 0,ut,nt(L.BreadcrumbItem,{},void 0,nt(L.BreadcrumbLink,{href:"/courses/".concat(o)},void 0,o)),st),nt(Ge,{isOpen:b,onCreate:G,onClose:y,timings:c,displayName:V,setDisplayName:H,numMeetings:$,setNumMeetings:F,participantLimit:R,setParticipantLimit:J,startDate:A,setStartDate:D}),nt(L.Box,{pt:12},void 0,dt,nt(pe,{scrollable:!0,height:"100px",slotItems:Q,periodLen:k,numPeriodsPerDay:X}),ft,nt(L.Center,{},void 0,O?nt(L.Button,{onClick:m,disabled:c.length<=0},void 0,"Schedule meeting"):nt(tt,{url:U,onCode:Y,onClose:function(){return null},title:"Zoom Oauth"},void 0,nt(L.Button,{color:"white",bg:"blue.400",_hover:{bg:"blue.300"}},void 0,"Sign in with Zoom to Schedule a meeting")))))});function mt(){return(mt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function yt(e,t,r,n){vt||(vt="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=n;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:vt,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}r.d(t,"CoursePage",function(){return wt});var gt=yt(i.Helmet,{},void 0,yt("title",{},void 0,"CoursePage"),yt("meta",{name:"description",content:"Description of CoursePage"})),kt=yt(u.Redirect,{to:"/auth/signin"}),St=yt(u.Redirect,{to:"/auth/signin"});function wt(e){var t=e.auth;return Object(f.a)({key:"coursePage",reducer:P}),Object(d.a)({key:"coursePage",saga:M}),yt("div",{},void 0,gt,yt(u.Switch,{},void 0,yt(u.Route,{exact:!0,path:"/courses/:courseId",render:function(e){return o.a.createElement($,e)}}),yt(u.Route,{exact:!0,path:"/courses/:courseId/join",render:function(e){return o.a.createElement(Pe,mt({auth:t},e))}},void 0,Object(s.isLoaded)(t)&&Object(s.isEmpty)(t)&&kt),yt(u.Route,{exact:!0,path:"/courses/:courseId/host",render:function(e){return o.a.createElement(bt,mt({auth:t},e))}},void 0,Object(s.isLoaded)(t)&&Object(s.isEmpty)(t)&&St)))}var Ot=Object(c.b)({coursePage:I(),auth:Object(p.a)()});var _t=Object(a.connect)(Ot,function(e){return{dispatch:e}});t.default=Object(l.compose)(_t,n.memo)(wt)}}]);