(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[71],{480:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};r.get||r.set?Object.defineProperty(t,a,r):t[a]=e[a]}return t.default=e,t}(a(0)),n=c(a(18)),o=c(a(35)),l=a(486);function c(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,b,h,E=function(e){function t(){return s(this,t),m(this,d(t).apply(this,arguments))}var a,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),a=t,(n=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&o.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=r.default.createElement("div",{className:"react-head-temp"},t);o.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var r=Array.prototype.slice.call(a.children),n=document.head,o=n.innerHTML;(r=(r=r.filter((function(e){return-1===o.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,l.getDuplicateTitle)();a&&(0,l.removeChild)(n,a)}else if("meta"===t){var r=(0,l.getDuplicateMeta)(e);r&&(0,l.removeChild)(n,r)}else if("link"===t&&"canonical"===e.rel){var o=(0,l.getDuplicateCanonical)(e);o&&(0,l.removeChild)(n,o)}})),(0,l.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(a.prototype,n),c&&u(a,c),t}(r.Component);f=E,b="contextTypes",h={extract:n.default.func},b in f?Object.defineProperty(f,b,{value:h,enumerable:!0,configurable:!0,writable:!0}):f[b]=h;var v=E;t.default=v,e.exports=t.default},484:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var r=l(a(485)),n=l(a(480)),o=l(a(487));function l(e){return e&&e.__esModule?e:{default:e}}var c=n.default;t.default=c},485:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=a(0),o=(r=a(18))&&r.__esModule?r:{default:r};function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return c(this,t),s(this,u(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),a=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return n.Children.only(this.props.children)}}])&&i(a.prototype,r),o&&i(a,o),t}(n.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(d,"childContextTypes",{extract:o.default.func});var p=d;t.default=p,e.exports=t.default},486:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,r=[],l=[];return e.forEach((function(e){var n=e.type,o=e.props;"title"===n?t=e:"link"===n&&"canonical"===o.rel?a=e:"meta"===n?r.push(e):l.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};o.forEach((function(e){t[e]=[]}));for(var a=[],r=function(r){var l=e[r],c=l.props.id;(c?!t.id[c]:0===n.filter((function(e){var a=l.props[e],r=t[e][a];return r&&!r.props.id})).length)&&(a.unshift(l),o.forEach((function(e){var a=l.props[e];a&&(t[e][a]=l)})))},l=e.length-1;l>=0;l--)r(l);return a}(r)),[a],l)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return r.reduce((function(a,r){var n,o=e.getAttribute(r);return o?a.concat((n=t.querySelectorAll("[".concat(r,' = "').concat(o,'"]')),(n=Array.prototype.slice.call(n||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),r=0,n=t.length;r<n;r++)a.appendChild(t[r]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,r=t.length;a<r;a++)e.removeChild(t[a])};var r=["property","name","itemprop"],n=r.concat(["itemProp"]),o=n.concat(["id"])},487:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};r.get||r.set?Object.defineProperty(t,a,r):t[a]=e[a]}return t.default=e,t}(a(0)),n=l(a(18)),o=l(a(480));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,f,b,h=function(e){function t(){return i(this,t),u(this,m(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(n=[{key:"render",value:function(){return r.default.createElement(o.default,null,r.default.createElement("title",null,this.props.title))}}])&&s(a.prototype,n),l&&s(a,l),t}(r.Component);p=h,f="propTypes",b={title:n.default.string},f in p?Object.defineProperty(p,f,{value:b,enumerable:!0,configurable:!0,writable:!0}):p[f]=b;var E=h;t.default=E,e.exports=t.default},523:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(508),l=function(e){var t,a=e.status,r=e.message,o=e.onValidated,l=e.spaceTopClass,c=e.subscribeBtnClass;return n.a.createElement("div",{className:"subscribe-form-3 ".concat(l||"")},n.a.createElement("div",{className:"mc-form"},n.a.createElement("div",null,n.a.createElement("input",{className:"email",ref:function(e){return t=e},type:"email",placeholder:"Your Email Address",required:!0})),"sending"===a&&n.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===a&&n.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}),"success"===a&&n.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}),n.a.createElement("div",{className:"clear-3 ".concat(c||"")},n.a.createElement("button",{className:"button",onClick:function(){t&&t.value.indexOf("@")>-1&&o({EMAIL:t.value}),t.value=""}},"SUBSCRIBE"))))};t.a=function(e){var t=e.mailchimpUrl,a=e.spaceTopClass,r=e.subscribeBtnClass;return n.a.createElement("div",null,n.a.createElement(o.a,{url:t,render:function(e){var t=e.subscribe,o=e.status,c=e.message;return n.a.createElement(l,{status:o,message:c,onValidated:function(e){return t(e)},spaceTopClass:a,subscribeBtnClass:r})}}))}},542:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(523);t.a=function(e){var t=e.spaceTopClass,a=e.spaceBottomClass,r=e.subscribeBtnClass;return n.a.createElement("div",{className:"subscribe-area-3 ".concat(t||""," ").concat(a||""," ")},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-5 col-lg-7 col-md-10 ml-auto mr-auto"},n.a.createElement("div",{className:"subscribe-style-3 text-center"},n.a.createElement("h2",null,"Subscribe "),n.a.createElement("p",null,"Subscribe to our newsletter to receive news on update"),n.a.createElement(o.a,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:r}))))))}},553:function(e,t,a){"use strict";var r=a(477),n=a(0),o=a.n(n),l=a(100),c=a(509);t.a=function(e){var t=e.backgroundColorClass,a=e.copyrightColorClass,i=e.spaceLeftClass,s=e.spaceRightClass,u=e.footerTopBackgroundColorClass,m=e.footerTopSpaceTopClass,d=e.footerTopSpaceBottomClass,p=e.footerLogo,f=e.backgroundImage,b=Object(n.useState)(0),h=Object(r.a)(b,2),E=h[0],v=h[1],y=Object(n.useState)(0),g=Object(r.a)(y,2),w=g[0],C=g[1];Object(n.useEffect)((function(){return C(100),window.addEventListener("scroll",N),function(){window.removeEventListener("scroll",N)}}),[]);var N=function(){v(window.scrollY)};return o.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(i||""," ").concat(s||""," ").concat(f?"bg-img":""),style:{backgroundImage:" ".concat(f?"url(".concat(""+f,")"):"url()")}},o.a.createElement("div",{className:"footer-top text-center ".concat(u||""," ").concat(m||"","  ").concat(d||"")},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"footer-logo"},o.a.createElement(l.b,{to:""},o.a.createElement("img",{alt:"",src:""+"".concat(p||"/assets/img/logo/logo.png")}))),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"),o.a.createElement("div",{className:"footer-social"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"//www.facebook.com"},o.a.createElement("i",{className:"fa fa-facebook"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"//www.dribbble.com"},o.a.createElement("i",{className:"fa fa-dribbble"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"//www.pinterest.com"},o.a.createElement("i",{className:"fa fa-pinterest-p"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"//www.twitter.com"},o.a.createElement("i",{className:"fa fa-twitter"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"//www.linkedin.com"},o.a.createElement("i",{className:"fa fa-linkedin"}))))))),o.a.createElement("div",{className:"footer-bottom text-center"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"copyright-2 ".concat(a||"")},o.a.createElement("p",null,"\xa9 2020"," ",o.a.createElement("a",{href:"//www.hasthemes.com",rel:"noopener noreferrer",target:"_blank"},"Flone"),". All Rights Reserved.")))),o.a.createElement("button",{className:"scroll-top ".concat(E>w?"show":""),onClick:function(){c.animateScroll.scrollToTop()}},o.a.createElement("i",{className:"fa fa-angle-double-up"})))}},619:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(499),l=a(553);t.a=function(e){var t=e.children,a=e.headerContainerClass,c=e.headerTop,i=e.headerBorderStyle,s=e.headerPaddingClass;return n.a.createElement(r.Fragment,null,n.a.createElement(o.a,{layout:a,top:c,borderStyle:i,headerPaddingClass:s}),t,n.a.createElement(l.a,{backgroundColorClass:"footer-white",spaceLeftClass:"ml-70",spaceRightClass:"mr-70",footerTopBackgroundColorClass:"bg-gray-2",footerTopSpaceTopClass:"pt-80",footerTopSpaceBottomClass:"pb-60",copyrightColorClass:"copyright-gray",footerLogo:"/assets/img/logo/logo.png"}))}},775:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(484),l=a.n(o),c=a(100),i=a(619),s=a(542);t.default=function(){return n.a.createElement(r.Fragment,null,n.a.createElement(l.a,null,n.a.createElement("title",null,"Flone | Grid Banner Home"),n.a.createElement("meta",{name:"description",content:"Grid banner home of flone react minimalist eCommerce template."})),n.a.createElement(i.a,{headerTop:"visible",headerContainerClass:"container-fluid",headerBorderStyle:"fluid-border",headerPaddingClass:"header-padding-2"},n.a.createElement("div",{className:"product-area hm6-section-padding pb-80"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"product-wrap-4 mb-20"},n.a.createElement(c.b,{to:"/shop-grid-standard"},n.a.createElement("img",{src:"/assets/img/product/hm6-pro-1.jpg",alt:""})),n.a.createElement("div",{className:"product-content-4 text-center position-1"},n.a.createElement("h4",null,n.a.createElement(c.b,{to:"/shop-grid-standard"},"T- Shirt And ",n.a.createElement("br",null),"Jeans")),n.a.createElement("div",{className:"price-4 price-4-center"},n.a.createElement("span",null,"$ 60.00"),n.a.createElement("span",{className:"old"},"$ 80.00"))))),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"product-wrap-4 mb-20"},n.a.createElement(c.b,{to:"/shop-grid-standard"},n.a.createElement("img",{src:"/assets/img/product/hm6-pro-3.jpg",alt:""})),n.a.createElement("div",{className:"product-content-4 text-center position-1"},n.a.createElement("h4",null,n.a.createElement(c.b,{to:"/shop-grid-standard"},"T- Shirt And ",n.a.createElement("br",null),"Jeans")),n.a.createElement("div",{className:"price-4"},n.a.createElement("span",null,"$ 60.00"),n.a.createElement("span",{className:"old"},"$ 80.00"))))),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"product-wrap-4 mb-20"},n.a.createElement(c.b,{to:"/shop-grid-standard"},n.a.createElement("img",{src:"/assets/img/product/hm6-pro-4.jpg",alt:""})),n.a.createElement("div",{className:"product-content-4 text-center position-3"},n.a.createElement("h4",null,n.a.createElement(c.b,{to:"/shop-grid-standard"},"T- Shirt And ",n.a.createElement("br",null),"Jeans")),n.a.createElement("div",{className:"price-4"},n.a.createElement("span",null,"$ 60.00"),n.a.createElement("span",{className:"old"},"$ 80.00"))))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"product-wrap-4 mb-20"},n.a.createElement(c.b,{to:"/shop-grid-standard"},n.a.createElement("img",{src:"/assets/img/product/hm6-pro-2.jpg",alt:""})),n.a.createElement("div",{className:"product-content-4 product-content-center position-2"},n.a.createElement("h4",null,n.a.createElement(c.b,{to:"/shop-grid-standard"},"T- Shirt And ",n.a.createElement("br",null),"Jeans")),n.a.createElement("div",{className:"price-4"},n.a.createElement("span",null,"$ 60.00"),n.a.createElement("span",{className:"old"},"$ 80.00"))))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"product-wrap-4 mb-20"},n.a.createElement(c.b,{to:"/shop-grid-standard"},n.a.createElement("img",{src:"/assets/img/product/hm6-pro-5.jpg",alt:""})),n.a.createElement("div",{className:"product-content-4 product-content-center position-2"},n.a.createElement("h4",null,n.a.createElement(c.b,{to:"/shop-grid-standard"},"T- Shirt And ",n.a.createElement("br",null),"Jeans")),n.a.createElement("div",{className:"price-4"},n.a.createElement("span",null,"$ 60.00"),n.a.createElement("span",{className:"old"},"$ 80.00"))))),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"product-wrap-4 mb-20"},n.a.createElement(c.b,{to:"/shop-grid-standard"},n.a.createElement("img",{src:"/assets/img/product/hm6-pro-6.jpg",alt:""})),n.a.createElement("div",{className:"product-content-4 product-content-center position-2"},n.a.createElement("h4",null,n.a.createElement(c.b,{to:"/shop-grid-standard"},"T- Shirt And ",n.a.createElement("br",null),"Jeans")),n.a.createElement("div",{className:"price-4"},n.a.createElement("span",null,"$ 60.00"),n.a.createElement("span",{className:"old"},"$ 80.00"))))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"product-wrap-4 mb-20"},n.a.createElement(c.b,{to:"/shop-grid-standard"},n.a.createElement("img",{src:"/assets/img/product/hm6-pro-7.jpg",alt:""})),n.a.createElement("div",{className:"product-content-4 product-content-center position-2"},n.a.createElement("h4",null,n.a.createElement(c.b,{to:"/shop-grid-standard"},"T- Shirt And ",n.a.createElement("br",null),"Jeans")),n.a.createElement("div",{className:"price-4"},n.a.createElement("span",null,"$ 60.00"),n.a.createElement("span",{className:"old"},"$ 80.00"))))),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"product-wrap-4 mb-20"},n.a.createElement(c.b,{to:"/shop-grid-standard"},n.a.createElement("img",{src:"/assets/img/product/hm6-pro-8.jpg",alt:""})),n.a.createElement("div",{className:"product-content-4 product-content-center position-2"},n.a.createElement("h4",null,n.a.createElement(c.b,{to:"/shop-grid-standard"},"T- Shirt And ",n.a.createElement("br",null),"Jeans")),n.a.createElement("div",{className:"price-4"},n.a.createElement("span",null,"$ 60.00"),n.a.createElement("span",{className:"old"},"$ 80.00")))))))),n.a.createElement(s.a,{spaceBottomClass:"pb-100"})))}}}]);
//# sourceMappingURL=71.e25d4d4f.chunk.js.map