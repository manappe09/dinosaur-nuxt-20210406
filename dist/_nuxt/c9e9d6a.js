(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{258:function(t,e,r){"use strict";r.r(e);var c=r(7),n=(r(49),{asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,c=t.error,e.prev=1,e.next=4,r.$get("column");case 4:return data=e.sent,e.abrupt("return",data);case 8:e.prev=8,e.t0=e.catch(1),c(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}),o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"l-main"},[r("Breadcrumbs"),t._v(" "),r("h2",{staticClass:"c-title c-title--accent u-align-c"},[t._v("コラム一覧")]),t._v(" "),r("ul",{staticClass:"p-column__list"},t._l(t.contents,(function(content){return r("li",{key:content.id},[r("NuxtLink",{staticClass:"c-box c-box--row",attrs:{to:"/column/"+content.id}},[r("img",{staticClass:"c-box__image c-box__image--row",attrs:{src:content.eyecatch.url,alt:"",width:"100",height:"100"}}),t._v(" "),r("div",{staticClass:"c-box__text c-box__text--row"},[r("p",[t._v(t._s(content.title))]),t._v(" "),r("span",{staticClass:"p-column__category",attrs:{"data-category":content.category[0]}},[t._v(t._s(t.$setColumnCategory(content.category[0])))])])])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumbs:r(122).default})}}]);