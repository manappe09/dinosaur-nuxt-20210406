(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{264:function(t,e,n){"use strict";n.r(e);var r=n(7),c=(n(47),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("news");case 3:return data=e.sent,e.abrupt("return",data);case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{directories:[{name:"お知らせ一覧",path:"/news"}]}},head:function(){return{title:"お知らせ一覧"}},mounted:function(){console.log(this.contents)}}),o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"l-main"},[n("Breadcrumbs",{attrs:{directories:t.directories}}),t._v(" "),n("h2",{staticClass:"c-title c-title--accent u-align-c"},[t._v("お知らせ一覧")]),t._v(" "),n("ul",{staticClass:"p-news"},t._l(t.contents,(function(content){return n("li",{key:content.id,staticClass:"p-news__item c-listitem"},[n("span",{staticClass:"p-news__date"},[t._v(t._s(t.$setDate(content.createdAt)))]),t._v(" "),n("span",{staticClass:"p-news__category",attrs:{"data-category":content.category[0]}},[t._v(t._s(t.$setNewsCategory(content.category[0])))]),t._v(" "),n("NuxtLink",{attrs:{to:"/news/"+content.id}},[n("span",{staticClass:"p-news__link"},[t._v(t._s(content.title))])])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumbs:n(117).default})}}]);