(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{280:function(t,e,r){"use strict";r.r(e);var n=r(7),c=(r(23),r(51),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.params,c=t.error,e.prev=1,e.next=4,r.$get("dinosaur/".concat(n.slug));case 4:return data=e.sent,e.abrupt("return",data);case 8:e.prev=8,e.t0=e.catch(1),c(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},data:function(){return{eyecatch:{imageSrc:"slide02"},dinosaurArea:{data:"chiba ",name:"千葉県"},dinosaurCategory:{data:"museum",name:"博物館"},name:"ティラノサウルス",directories:[{name:"恐竜一覧",path:"/dinosaur"},{name:"",path:"/dinosaur/".concat(this.$route.params.slug)}]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.name;case 2:t.directories[1].name=e.sent;case 3:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.title)}}}),o=r(2),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"l-main"},[n("Breadcrumbs",{attrs:{directories:t.directories}}),t._v(" "),n("div",[n("div",{staticClass:"p-dinosaur__slide"},[n("img",{staticClass:"p-dinosaur__eyecatch",attrs:{src:t.image.url,alt:"",width:"100",height:"200"}}),t._v(" "),n("div",{staticClass:"p-dinosaur__accent",attrs:{role:"none"}})]),t._v(" "),n("h2",{staticClass:"c-subtitle"},[t._v(t._s(t.name))]),t._v(" "),n("ul",{staticClass:"c-profile"},[n("li",{staticClass:"c-profile__item"},[t._v(t._s(t.$setDinosaurAge(t.age[0])))]),t._v(" "),n("li",{staticClass:"c-profile__item"},[t._v(t._s(t.$setDinosaurCategory(t.category[0])))])])]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.text)}}),t._v(" "),n("div",{staticClass:"p-ralated u-mgt-80"},[n("h3",{staticClass:"u-align-c u-mgb-10"},[t._v("ほかの恐竜を見る")]),t._v(" "),n("ul",{staticClass:"p-related__list"},[n("li",{staticClass:"p-related__item c-box c-box--row"},[n("NuxtLink",{attrs:{to:""}},[n("img",{staticClass:"c-box__image",attrs:{src:r(90),alt:""}}),t._v(" "),n("p",[t._v("ステゴサウルス")])])],1),t._v(" "),n("li",{staticClass:"p-related__item c-box c-box--row"},[n("NuxtLink",{attrs:{to:""}},[n("img",{staticClass:"c-box__image",attrs:{src:r(90),alt:""}}),t._v(" "),n("p",[t._v("トリケラトプス")])])],1),t._v(" "),n("li",{staticClass:"p-related__item c-box c-box--row"},[n("NuxtLink",{attrs:{to:""}},[n("img",{staticClass:"c-box__image",attrs:{src:r(90),alt:""}}),t._v(" "),n("p",[t._v("ユタラプトル")])])],1)])]),t._v(" "),n("NuxtLink",{staticClass:"c-button c-button--secondary u-mgt-80 u-mgb-80",attrs:{to:"/dinosaur"}},[t._v("＜ 恐竜のなかまたちへ戻る")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumbs:r(123).default})}}]);