(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{278:function(t,e,r){"use strict";r.r(e);var n=r(7),c=(r(19),r(36),r(47),r(56)),o={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.params,c=t.error,e.prev=1,e.next=4,r.$get("news/"+n.slug);case 4:return data=e.sent,e.abrupt("return",data);case 8:e.prev=8,e.t0=e.catch(1),c(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},data:function(){return{directories:[{name:"お知らせ一覧",path:"/news/"},{name:"",path:"/news/"+this.$route.params.slug}]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.title;case 2:t.directories[1].name=e.sent;case 3:case"end":return e.stop()}}),e)})))()},head:function(){return{title:""+this.title}},computed:Object.assign({},Object(c.b)({convertData:"convertData/convertData"})),methods:{setNewsCategory:function(t){return this.convertData.news.filter((function(e){return e.name===t}))[0].ja}}},l=r(2),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"l-main"},[r("Breadcrumbs",{attrs:{directories:t.directories}}),t._v(" "),r("span",{staticClass:"p-news__category",attrs:{"data-category":t.category[0]}},[t._v(t._s(t.$setNewsCategory(t.category[0])))]),t._v(" "),r("span",{staticClass:"p-news__date"},[t._v(t._s(t.$setDate(t.createdAt)))]),t._v(" "),r("h2",{staticClass:"c-subtitle u-mgt-10"},[t._v(t._s(t.title))]),t._v(" "),r("hr"),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.text01)}}),t._v(" "),r("Button",{staticClass:"u-mgt-40",attrs:{linkto:"news",level:"secondary",label:"お知らせ一覧へ戻る"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumbs:r(117).default,Button:r(46).default})}}]);