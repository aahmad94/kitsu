webpackHotUpdate(0,{51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(n(1)),a=c(n(50)),u=c(n(49)),i=n(19);function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={items:[]},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"onSearch",value:function(e){var t=this;(0,i.fetchAnime)(e).then(function(e){return t.setState({items:e.data})})}},{key:"render",value:function(){var e=this;return o.default.createElement("div",{className:"search-feed"},o.default.createElement(a.default,{onSearchTermChange:function(t){return e.onSearch(t)}}),o.default.createElement(u.default,{items:this.state.items}))}}]),t}();t.default=f}});
//# sourceMappingURL=0.09c494066c991c2cc901.hot-update.js.map