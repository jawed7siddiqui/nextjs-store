(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[70],{480:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=c(a(18)),l=c(a(35)),o=a(486);function c(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,b,y,E=function(e){function t(){return u(this,t),m(this,f(t).apply(this,arguments))}var a,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&l.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=n.default.createElement("div",{className:"react-head-temp"},t);l.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var n=Array.prototype.slice.call(a.children),r=document.head,l=r.innerHTML;(n=(n=n.filter((function(e){return-1===l.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,o.getDuplicateTitle)();a&&(0,o.removeChild)(r,a)}else if("meta"===t){var n=(0,o.getDuplicateMeta)(e);n&&(0,o.removeChild)(r,n)}else if("link"===t&&"canonical"===e.rel){var l=(0,o.getDuplicateCanonical)(e);l&&(0,o.removeChild)(r,l)}})),(0,o.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(a.prototype,r),c&&s(a,c),t}(n.Component);p=E,b="contextTypes",y={extract:r.default.func},b in p?Object.defineProperty(p,b,{value:y,enumerable:!0,configurable:!0,writable:!0}):p[b]=y;var v=E;t.default=v,e.exports=t.default},484:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var n=o(a(485)),r=o(a(480)),l=o(a(487));function o(e){return e&&e.__esModule?e:{default:e}}var c=r.default;t.default=c},485:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=a(0),l=(n=a(18))&&n.__esModule?n:{default:n};function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return c(this,t),u(this,s(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),a=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return r.Children.only(this.props.children)}}])&&i(a.prototype,n),l&&i(a,l),t}(r.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(f,"childContextTypes",{extract:l.default.func});var d=f;t.default=d,e.exports=t.default},486:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,n=[],o=[];return e.forEach((function(e){var r=e.type,l=e.props;"title"===r?t=e:"link"===r&&"canonical"===l.rel?a=e:"meta"===r?n.push(e):o.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};l.forEach((function(e){t[e]=[]}));for(var a=[],n=function(n){var o=e[n],c=o.props.id;(c?!t.id[c]:0===r.filter((function(e){var a=o.props[e],n=t[e][a];return n&&!n.props.id})).length)&&(a.unshift(o),l.forEach((function(e){var a=o.props[e];a&&(t[e][a]=o)})))},o=e.length-1;o>=0;o--)n(o);return a}(n)),[a],o)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return n.reduce((function(a,n){var r,l=e.getAttribute(n);return l?a.concat((r=t.querySelectorAll("[".concat(n,' = "').concat(l,'"]')),(r=Array.prototype.slice.call(r||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),n=0,r=t.length;n<r;n++)a.appendChild(t[n]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,n=t.length;a<n;a++)e.removeChild(t[a])};var n=["property","name","itemprop"],r=n.concat(["itemProp"]),l=r.concat(["id"])},487:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=o(a(18)),l=o(a(480));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,p,b,y=function(e){function t(){return i(this,t),s(this,m(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,(r=[{key:"render",value:function(){return n.default.createElement(l.default,null,n.default.createElement("title",null,this.props.title))}}])&&u(a.prototype,r),o&&u(a,o),t}(n.Component);d=y,p="propTypes",b={title:r.default.string},p in d?Object.defineProperty(d,p,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[p]=b;var E=y;t.default=E,e.exports=t.default},490:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(100);t.a=function(e){var t=e.footerLogo,a=e.spaceBottomClass,n=e.colorClass;return r.a.createElement("div",{className:"copyright ".concat(a||""," ").concat(n||"")},r.a.createElement("div",{className:"footer-logo"},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{alt:"",src:""+t}))),r.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," ",r.a.createElement("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank"},"Flone"),".",r.a.createElement("br",null)," All Rights Reserved"))}},491:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(508),o=function(e){var t,a=e.status,n=e.message,l=e.onValidated;return r.a.createElement("div",{className:"subscribe-form"},r.a.createElement("div",{className:"mc-form"},r.a.createElement("div",null,r.a.createElement("input",{id:"mc-form-email",className:"email",ref:function(e){return t=e},type:"email",placeholder:"Enter your email address..."})),r.a.createElement("div",{className:"clear"},r.a.createElement("button",{className:"button",onClick:function(){t&&t.value.indexOf("@")>-1&&l({EMAIL:t.value}),document.getElementById("mc-form-email").value=""}},"SUBSCRIBE"))),"sending"===a&&r.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===a&&r.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===a&&r.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}))},c=function(e){var t=e.mailchimpUrl;return r.a.createElement("div",null,r.a.createElement(l.a,{url:t,render:function(e){var t=e.subscribe,a=e.status,n=e.message;return r.a.createElement(o,{status:a,message:n,onValidated:function(e){return t(e)}})}}))};t.a=function(e){var t=e.spaceBottomClass,a=e.spaceLeftClass,n=e.sideMenu,l=e.colorClass,o=e.widgetColorClass;return r.a.createElement("div",{className:"footer-widget ".concat(t||""," ").concat(n?"ml-ntv5":a||""," ").concat(o||"")},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"SUBSCRIBE")),r.a.createElement("div",{className:"subscribe-style ".concat(l||"")},r.a.createElement("p",null,"Get E-mail updates about our latest shop and special offers."),r.a.createElement(c,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})))}},492:function(e,t,a){"use strict";var n=a(477),r=a(0),l=a.n(r),o=a(100),c=a(509),i=a(490),u=a(491);t.a=function(e){var t=e.backgroundColorClass,a=e.spaceTopClass,s=e.spaceBottomClass,m=e.spaceLeftClass,f=e.spaceRightClass,d=e.containerClass,p=e.extraFooterClass,b=e.sideMenu,y=Object(r.useState)(0),E=Object(n.a)(y,2),v=E[0],h=E[1],g=Object(r.useState)(0),w=Object(n.a)(g,2),O=w[0],C=w[1];Object(r.useEffect)((function(){return C(100),window.addEventListener("scroll",N),function(){window.removeEventListener("scroll",N)}}),[]);var N=function(){h(window.scrollY)};return l.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(a||""," ").concat(s||""," ").concat(p||""," ").concat(m||""," ").concat(f||"")},l.a.createElement("div",{className:"".concat(d||"container")},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"".concat(b?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement(i.a,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})),l.a.createElement("div",{className:"".concat(b?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement("div",{className:"footer-widget mb-30 ml-30"},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"ABOUT US")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/about"},"About us")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"#/"},"Store location")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/contact"},"Contact")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"#/"},"Orders tracking")))))),l.a.createElement("div",{className:"".concat(b?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement("div",{className:"".concat(b?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"USEFUL LINKS")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"#/"},"Returns")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"#/"},"Support Policy")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"#/"},"Size guide")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"#/"},"FAQs")))))),l.a.createElement("div",{className:"".concat(b?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},l.a.createElement("div",{className:"".concat(b?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"FOLLOW US")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer"},"Facebook")),l.a.createElement("li",null,l.a.createElement("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer"},"Twitter")),l.a.createElement("li",null,l.a.createElement("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer"},"Instagram")),l.a.createElement("li",null,l.a.createElement("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube")))))),l.a.createElement("div",{className:"".concat(b?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6")},l.a.createElement(u.a,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:b})))),l.a.createElement("button",{className:"scroll-top ".concat(v>O?"show":""),onClick:function(){c.animateScroll.scrollToTop()}},l.a.createElement("i",{className:"fa fa-angle-double-up"})))}},497:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(499),o=a(492);t.a=function(e){var t=e.children,a=e.headerContainerClass,c=e.headerTop,i=e.headerPaddingClass,u=e.headerPositionClass;return r.a.createElement(n.Fragment,null,r.a.createElement(l.a,{layout:a,top:c,headerPaddingClass:i,headerPositionClass:u}),t,r.a.createElement(o.a,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},511:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(100),o=a(143);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(o.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:l.c,finalItem:"span"}))))}},794:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(100),o=a(141),c=a(484),i=a.n(c),u=a(143),s=a(61),m=a(475),f=a(81),d=a(63),p=a(497),b=a(511);t.default=Object(s.connect)((function(e){return{cartItems:e.cartData,wishlistItems:e.wishlistData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,a,n){e(Object(d.e)(t,a,n))},addToWishlist:function(t,a,n){e(Object(f.d)(t,a,n))},deleteFromWishlist:function(t,a,n){e(Object(f.f)(t,a,n))},deleteAllFromWishlist:function(t){e(Object(f.e)(t))}}}))((function(e){var t=e.location,a=e.cartItems,c=e.currency,s=e.addToCart,f=e.wishlistItems,d=e.deleteFromWishlist,y=e.deleteAllFromWishlist,E=Object(o.useToasts)().addToast,v=t.pathname;return r.a.createElement(n.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("title",null,"Flone | Wishlist"),r.a.createElement("meta",{name:"description",content:"Wishlist page of flone react minimalist eCommerce template."})),r.a.createElement(u.BreadcrumbsItem,{to:"/"},"Home"),r.a.createElement(u.BreadcrumbsItem,{to:""+v},"Wishlist"),r.a.createElement(p.a,{headerTop:"visible"},r.a.createElement(b.a,null),r.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},r.a.createElement("div",{className:"container"},f&&f.length>=1?r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"cart-page-title"},"Your wishlist items"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"table-content table-responsive cart-table-content"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Image"),r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Unit Price"),r.a.createElement("th",null,"Add To Cart"),r.a.createElement("th",null,"action"))),r.a.createElement("tbody",null,f.map((function(e,t){var o=Object(m.a)(e.price,e.discount),i=(e.price*c.currencyRate).toFixed(2),u=(o*c.currencyRate).toFixed(2),f=a.filter((function(t){return t.id===e.id}))[0];return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"product-thumbnail"},r.a.createElement(l.b,{to:"/product/"+e.id},r.a.createElement("img",{className:"img-fluid",src:""+e.image[0],alt:""}))),r.a.createElement("td",{className:"product-name text-center"},r.a.createElement(l.b,{to:"/product/"+e.id},e.name)),r.a.createElement("td",{className:"product-price-cart"},null!==o?r.a.createElement(n.Fragment,null,r.a.createElement("span",{className:"amount old"},c.currencySymbol+i),r.a.createElement("span",{className:"amount"},c.currencySymbol+u)):r.a.createElement("span",{className:"amount"},c.currencySymbol+i)),r.a.createElement("td",{className:"product-wishlist-cart"},e.affiliateLink?r.a.createElement("a",{href:e.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):e.variation&&e.variation.length>=1?r.a.createElement(l.b,{to:"".concat("","/product/").concat(e.id)},"Select option"):e.stock&&e.stock>0?r.a.createElement("button",{onClick:function(){return s(e,E)},className:void 0!==f&&f.quantity>0?"active":"",disabled:void 0!==f&&f.quantity>0,title:void 0!==e?"Added to cart":"Add to cart"},void 0!==f&&f.quantity>0?"Added":"Add to cart"):r.a.createElement("button",{disabled:!0,className:"active"},"Out of stock")),r.a.createElement("td",{className:"product-remove"},r.a.createElement("button",{onClick:function(){return d(e,E)}},r.a.createElement("i",{className:"fa fa-times"}))))}))))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"cart-shiping-update-wrapper"},r.a.createElement("div",{className:"cart-shiping-update"},r.a.createElement(l.b,{to:"/shop-grid-standard"},"Continue Shopping")),r.a.createElement("div",{className:"cart-clear"},r.a.createElement("button",{onClick:function(){return y(E)}},"Clear Wishlist")))))):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"item-empty-area text-center"},r.a.createElement("div",{className:"item-empty-area__icon mb-30"},r.a.createElement("i",{className:"pe-7s-like"})),r.a.createElement("div",{className:"item-empty-area__text"},"No items found in wishlist ",r.a.createElement("br",null)," ",r.a.createElement(l.b,{to:"/shop-grid-standard"},"Add Items")))))))))}))}}]);
//# sourceMappingURL=70.f8283157.chunk.js.map