webpackHotUpdate(0,{49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=u(n(1)),o=u(n(48)),i=n(19);function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={anime:[],manga:[]},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"animeSearch",value:function(){var e=this;(0,i.fetchAnime)().then(function(t){return e.setState({anime:t.data})})}},{key:"render",value:function(){var e=this;return a.default.createElement("div",null,a.default.createElement(o.default,{onAnimeSearchTermChange:function(){return e.animeSearch()}}),a.default.createElement("ul",null,this.state.anime.map(function(e){var t=Object.keys(e.attributes.titles)[0],n=e.attributes.titles[t],r=e.attributes.coverImage,o=r?r.original:"";return console.log({imageUrl:o}),a.default.createElement("li",{key:n},n,a.default.createElement("img",{src:o,height:"120",width:"120",alt:""}))})))}}]),t}();t.default=l}});
//# sourceMappingURL=0.08595ee6d21becb253f5.hot-update.js.map