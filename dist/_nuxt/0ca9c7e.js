(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(t,e,o){"use strict";o.r(e);var n=o(2),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("script",{attrs:{async:"",src:"https://cse.google.com/cse.js?cx=3b9570ffdbcd15b39"}}),t._v(" "),o("div",{staticClass:"u-mgt-80 c-searchbox"},[o("div",{staticClass:"gcse-search"})])])}],!1,null,null,null);e.default=component.exports},121:function(t,e,o){"use strict";var n=o(87);function r(content){var t;switch(content){case"news":t="お知らせ";break;case"announce":t="ご注意"}return t}function c(t){var area;switch(t){case"tokyo":area="東京";break;case"chiba":area="千葉";break;case"tochigi":area="栃木";break;case"ishikawa":area="石川";break;case"kyoto":area="京都";break;case"ibaraki":area="茨城"}return area}function l(t){var e;switch(t){case"park":e="公園";break;case"museum":e="博物館"}return e}function d(t){var e;switch(t){case"dinosaur":e="恐竜のこと";break;case"history":e="恐竜の歴史";break;case"event":e="イベント情報";break;case"tips":e="豆知識"}return e}function m(t){console.log("hello!".concat(t))}function _(content){var t;switch(content){case"dragon":t="竜盤目";break;case"bird":t="鳥盤目"}return t}function f(content){var t;switch(content){case"jurassic":t="ジュラ紀";break;case"cretaceous":t="白亜紀"}return t}e.a=function(t,e){Object(n.a)(t),e("setNewsCategory",r),e("setArea",c),e("setMuseumCategory",l),e("setColumnCategory",d),e("setDinosaurCategory",_),e("setDinosaurAge",f),e("hello",m)}},122:function(t,e,o){"use strict";var n=o(87);o(115),o(116),o(49),o(32);function r(t){return t.slice(0,10).split("-").join("/")}e.a=function(t,e){Object(n.a)(t),e("setDate",r)}},123:function(t,e,o){"use strict";o.r(e);var n=o(2),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"c-breadcrumbs"},[o("li",{staticClass:"c-breadcrumbs-link"},[o("a",{attrs:{href:"../"}},[t._v("TOP")])]),t._v(" "),o("li",{staticClass:"c-breadcrumbs-link"},[o("a",{attrs:{href:"./"}},[t._v("お知らせ一覧")])])])}],!1,null,null,null);e.default=component.exports},124:function(t,e,o){"use strict";o.r(e);var n={props:["filteringBoxState"],data:function(){return{dinosaurCategory:[],dinosaurAge:[]}},methods:{hideFilteringBox:function(){this.$emit("hide-filtering-box",!1)},filterContents:function(){this.$emit("hide-filtering-box",!1),this.$emit("filtered-contents",{dinosaurCategory:this.dinosaurCategory,dinosaurAge:this.dinosaurAge}),this.dinosaurCategory=[],this.dinosaurAge=[]}}},r=o(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"c-filter__window u-mgt-10",class:{"is-open":t.filteringBoxState},attrs:{id:"filter-window"}},[o("h3",{staticClass:"c-filter__index"},[t._v("種類")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.dinosaurCategory,expression:"dinosaurCategory"}],attrs:{id:"bird",type:"checkbox",name:"category",value:"bird"},domProps:{checked:Array.isArray(t.dinosaurCategory)?t._i(t.dinosaurCategory,"bird")>-1:t.dinosaurCategory},on:{change:function(e){var o=t.dinosaurCategory,n=e.target,r=!!n.checked;if(Array.isArray(o)){var c="bird",l=t._i(o,c);n.checked?l<0&&(t.dinosaurCategory=o.concat([c])):l>-1&&(t.dinosaurCategory=o.slice(0,l).concat(o.slice(l+1)))}else t.dinosaurCategory=r}}}),t._v(" "),o("label",{attrs:{for:"bird"}},[t._v("鳥盤目")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.dinosaurCategory,expression:"dinosaurCategory"}],attrs:{id:"dragon",type:"checkbox",name:"category",value:"dragon"},domProps:{checked:Array.isArray(t.dinosaurCategory)?t._i(t.dinosaurCategory,"dragon")>-1:t.dinosaurCategory},on:{change:function(e){var o=t.dinosaurCategory,n=e.target,r=!!n.checked;if(Array.isArray(o)){var c="dragon",l=t._i(o,c);n.checked?l<0&&(t.dinosaurCategory=o.concat([c])):l>-1&&(t.dinosaurCategory=o.slice(0,l).concat(o.slice(l+1)))}else t.dinosaurCategory=r}}}),t._v(" "),o("label",{attrs:{for:"dragon"}},[t._v("竜盤目")]),t._v(" "),o("h3",{staticClass:"c-filter__index"},[t._v("時代")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.dinosaurAge,expression:"dinosaurAge"}],attrs:{id:"jurassic",type:"checkbox",name:"age",value:"jurassic"},domProps:{checked:Array.isArray(t.dinosaurAge)?t._i(t.dinosaurAge,"jurassic")>-1:t.dinosaurAge},on:{change:function(e){var o=t.dinosaurAge,n=e.target,r=!!n.checked;if(Array.isArray(o)){var c="jurassic",l=t._i(o,c);n.checked?l<0&&(t.dinosaurAge=o.concat([c])):l>-1&&(t.dinosaurAge=o.slice(0,l).concat(o.slice(l+1)))}else t.dinosaurAge=r}}}),t._v(" "),o("label",{attrs:{for:"jurassic"}},[t._v("ジュラ紀")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.dinosaurAge,expression:"dinosaurAge"}],attrs:{id:"cretaceous",type:"checkbox",name:"age",value:"cretaceous"},domProps:{checked:Array.isArray(t.dinosaurAge)?t._i(t.dinosaurAge,"cretaceous")>-1:t.dinosaurAge},on:{change:function(e){var o=t.dinosaurAge,n=e.target,r=!!n.checked;if(Array.isArray(o)){var c="cretaceous",l=t._i(o,c);n.checked?l<0&&(t.dinosaurAge=o.concat([c])):l>-1&&(t.dinosaurAge=o.slice(0,l).concat(o.slice(l+1)))}else t.dinosaurAge=r}}}),t._v(" "),o("label",{attrs:{for:"cretaceous"}},[t._v("白亜紀")]),t._v(" "),o("div",{staticClass:"c-filter__window__bottom"},[o("button",{staticClass:"c-filter__submit c-button c-button--third",on:{click:t.filterContents}},[t._v("\n      この条件で絞り込む\n    ")]),t._v(" "),o("button",{staticClass:"js-filter__button c-button c-filter__window__hide u-mgt-20",attrs:{type:"button"},on:{click:t.hideFilteringBox}},[t._v("\n      絞り込み検索をやめる\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},125:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:o(166),alt:""}})])}],r=o(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,null,null);e.default=component.exports},166:function(t,e,o){t.exports=o.p+"img/slide01.d201836.png"},167:function(t,e,o){var content=o(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("1930a9a0",content,!0,{sourceMap:!1})},176:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-box c-box--column"},[n("img",{staticClass:"c-box__image",attrs:{src:o(90),alt:"",width:"100",height:"100"}}),t._v(" "),n("p",{staticClass:"c-box__text--column"},[t._v("\n    それはどうも個人へするだように限らて得るたらのですからまたはまた目黒自分忘れでしょまい。ただそう一日も自分が聴いて、元来にはなはだいうでだろと下すから、ないありうてしかしお準備が窮めたた。\n  ")])])}],r=o(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,null,null);e.default=component.exports},177:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-box c-box--row"},[n("img",{staticClass:"c-box__image c-box__image--row",attrs:{src:o(90),alt:"",width:"100",height:"100"}}),t._v(" "),n("p",{staticClass:"c-box__text c-box__text--row"},[t._v("\n    それはどうも個人へするだように限らて得るたらのですからまたはまた目黒自分忘れでしょまい。ただそう一日も自分が聴いて、元来にはなはだいうでだろと下すから、ないありうてしかしお準備が窮めたた。\n  ")])])}],r=o(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,null,null);e.default=component.exports},178:function(t,e,o){"use strict";o.r(e);var n=o(2),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("NuxtLink",{staticClass:"c-box c-box--row",attrs:{to:"/column/1"}},[n("img",{staticClass:"c-box__image c-box__image--row",attrs:{src:o(90),alt:"",width:"100",height:"100"}}),t._v(" "),n("div",{staticClass:"c-box__text c-box__text--row"},[n("span",{staticClass:"p-column__category",attrs:{"data-category":"dinosaur"}},[t._v("恐竜について")]),t._v(" "),n("p",[t._v("\n        それはどうも個人へするだように限らて得るたらのですからまたはまた目黒自分忘れでしょまい。ただそう一日も自分が聴いて、元来にはなはだいうでだろと下すから、ないありうてしかしお準備が窮めたた。\n      ")])])])],1)}),[],!1,null,null,null);e.default=component.exports},179:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticClass:"p-column__eyecatch",attrs:{src:o(166),alt:"",width:"100",height:"200"}}),t._v(" "),n("span",{staticClass:"p-column__category",attrs:{"data-category":"dinosaur"}},[t._v("恐竜について")]),t._v(" "),n("h2",{staticClass:"c-subtitle u-mgt-10"},[t._v("恐竜についてのコラム")]),t._v(" "),n("hr")])}],r=o(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,null,null);e.default=component.exports},180:function(t,e,o){"use strict";o.r(e);o(237);var n=o(2),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),t._v(" "),o("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),t._v(" "),o("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},187:function(t,e,o){"use strict";var n={data:function(){return{navClickedTrigger:!1}}},r=o(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Header",{on:{"toggle-nav":function(e){t.navClickedTrigger=!t.navClickedTrigger}}}),t._v(" "),o("Searchbox"),t._v(" "),o("Nav",{attrs:{"nav-state":t.navClickedTrigger}}),t._v(" "),o("Nuxt"),t._v(" "),o("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:o(84).default,Searchbox:o(117).default,Nav:o(85).default,Footer:o(86).default})},188:function(t,e,o){o(189),t.exports=o(190)},227:function(t,e,o){var content=o(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("27894c40",content,!0,{sourceMap:!1})},228:function(t,e,o){var n=o(61),r=o(229),c=o(230),l=o(231),d=o(232),m=o(233),_=o(234),f=n(!1),h=r(c),x=r(l),v=r(d),y=r(m),k=r(_);f.push([t.i,'abbr,address,article,aside,audio,b,blockquote,body,canvas,caption,cite,code,dd,del,details,dfn,div,dl,dt,em,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,p,pre,q,samp,section,small,span,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,ul,var,video{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent}body{line-height:1}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}nav ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent}ins{text-decoration:none}ins,mark{background-color:#ff9;color:#000}mark{font-style:italic;font-weight:700}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}table{border-collapse:collapse;border-spacing:0}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}input,select{vertical-align:middle}*,:after,:before{box-sizing:border-box}body,html{overflow-x:hidden}body{font-family:"游ゴシック","YuGothic","メイリオ","Meiryo","ＭＳ Ｐゴシック",sans-serif;line-height:1.8;letter-spacing:.05em}@media screen and (min-width:970px){body{max-width:960px;margin:auto}}a{text-decoration:none;transition:opacity .3s}a,a:hover{color:inherit}a:hover{opacity:.7}img{width:100%;vertical-align:bottom;-o-object-fit:cover;object-fit:cover}.l-main{margin-top:70px;padding:1px 20px 0}@media screen and (min-width:970px){.l-main{padding:0}}.l-inner{width:100%;margin:auto}@media screen and (min-width:970px){.l-inner{max-width:960px}}.c-button{display:block;width:100%;margin:auto;padding:0 1em;font-size:1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;transform:translateY(0)}.c-button:active{box-shadow:none;transform:translateY(2px)}.c-button--primary{background:#f5b013;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;max-width:350px;height:50px;line-height:50px;border-radius:30px;box-shadow:0 5px 0 #fbe6b9}.c-button--secondary{background:#c39e5c;max-width:250px;height:40px;line-height:40px;box-shadow:0 5px 0 #d8bf92}.c-button--secondary,.c-button--third{border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border-radius:4px;font-size:.9rem}.c-button--third{background:#f1e1e4;max-width:200px;height:38px;line-height:38px}.c-button--reset{background:transparent;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.c-like-button{display:flex;position:fixed;right:1rem;bottom:1rem;width:50px;height:50px;justify-content:center;align-items:center;background-color:#f1e1e4;border-radius:50%;color:#91091e;font-size:1.5em;z-index:10000}.c-like-button:after{content:"＋";display:block;position:absolute;bottom:5px;right:5px;font-size:.5em;font-weight:700;color:#91091e}.c-like-button:hover{color:#91091e}.c-sentence+.c-sentence{margin-top:1.8rem}.c-linktext{color:#266fcf;text-decoration:underline}.c-box{display:flex;margin-bottom:2rem}.c-box__image{width:100%}.c-box__text{flex:1}.c-box--row{flex-direction:row;margin-bottom:1}.c-box__image--row{width:40%;-o-object-fit:cover;object-fit:cover}.c-box__text--row{margin-left:1rem}.c-box--column{flex-direction:column}.c-box--column:nth-child(2n){margin-left:1rem}@media screen and (min-width:970px){.c-box--column:nth-child(2n){margin-left:0}}@media screen and (min-width:970px){.c-box--column:not(:nth-child(3n+1)){margin-left:1rem}}.c-box__text--column{margin-top:.5em}.c-searchbox{height:30px;line-height:30px;display:none}.c-title{display:block;margin:3.5rem auto auto;font-size:1.4rem;font-family:"RocknRoll One",sans-serif;font-weight:400}.c-title--accent:after{content:"";display:block;width:80px;height:40px;margin:-.5em auto 0;background:url('+h+') 50%/contain no-repeat}.c-subtitle{font-size:1.2rem;font-weight:700;line-height:1.5}.c-breadcrumbs{margin:.5rem 0;font-size:.7rem;color:#969696}.c-breadcrumbs-link{display:inline;list-style:none}.c-breadcrumbs-link:not(:last-child):after{content:"＞";padding:0 .5em}.c-breadcrumbs-link a{color:#969696}.c-banner__image{width:100%;height:auto;-o-object-fit:contain;object-fit:contain}.c-profile{border:2px dotted #91091e;margin:1rem 0;padding:.5rem;font-size:.8rem;font-weight:700;color:#91091e}.c-profile__item{list-style:none;display:inline-block}.c-profile__item:not(:last-child):after{content:"/";padding:0 0 0 .4em}.c-filter{position:relative}.c-filter__button{background:transparent;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;position:relative;width:100%;height:30px;padding-left:2.5em;line-height:30px;text-align:left;color:#505050;background-color:#f0f0f0}.c-filter__button:after{content:"+";right:.5em}.c-filter__button:after,.c-filter__icon{position:absolute;top:50%;color:#969696;transform:translateY(-50%)}.c-filter__icon{left:.5em}.c-filter__window{position:fixed;top:50%;left:50%;width:calc(100% - 2rem);min-height:300px;height:auto;padding:2rem;border-radius:10px;background-color:#f0f0f0;visibility:hidden;opacity:0;transition:opacity .2s;transform:translate(-50%,-50%);z-index:10000}.c-filter__window.is-open{visibility:visible;opacity:1}.c-filter__window__bottom{position:absolute;bottom:1rem;right:0;left:0;margin:auto;padding:0 2rem}.c-filter__window__hide{background:transparent;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:block;text-align:center;font-size:.8em;color:#505050}.c-filter__select__wrapper{display:flex;justify-content:flex-end}.c-filter__select{background-color:#f0f0f0;border:none;outline:none;height:30px}.c-filter__selected{border:1px solid #ccc;padding:.5rem;text-align:center}.c-listitem{display:block;padding:1rem 0;border-bottom:1px solid #969696;list-style:none}.c-listitem:first-of-type{border-top:1px solid #969696}.c-listitem--next{position:relative}.c-listitem--next:after{content:">";position:absolute;top:50%;right:1rem;line-height:1;font-weight:700;transform:translateY(-50%)}.swiper-container{width:100vw;height:auto;margin-left:-20px}@media screen and (min-width:970px){.c-pc_content--m{display:block;max-width:600px;margin-right:auto;margin-left:auto}}.p-header{display:flex;justify-content:space-between;flex-wrap:nowrap;position:fixed;top:0;left:0;right:0;width:100vw;max-width:960px;height:70px;background-color:#91091e;z-index:10000}@media screen and (min-width:970px){.p-header{width:100%;margin:auto}}.p-header__title{font-family:"RocknRoll One",sans-serif;font-weight:400;padding-left:20px;font-size:1.4rem;line-height:70px;color:#fff}.p-header__items{display:flex;flex-wrap:nowrap;list-style:none}.p-header__item{display:flex;justify-content:center;flex-direction:column;width:56px;height:70px;color:#fff}.p-header__item:visited{color:#fff}button.p-header__item{background:transparent;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}button.p-header__item:hover{opacity:.7;cursor:pointer}.p-header__item__icon{font-size:1.9rem;margin:0 auto;text-align:center}.p-header__item__name{font-size:.7em;text-align:center}.p-nav{position:fixed;top:0;right:-80vw;width:80vw;height:90vh;background-color:#91091e;border-radius:10px 0 0 10px;transition:right .3s ease-in-out;z-index:100000}@media screen and (min-width:970px){.p-nav{width:280px}}.p-nav.is-open{right:0}.p-nav__close{background:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;width:45px;height:45px;margin:2vw auto 2vw calc(100% - .5rem);padding:0;background-color:#fff;line-height:45px;border:none;border-radius:8px;color:#91091e;font-size:3rem;font-weight:900;transform:translateX(-100%)}.p-nav__list{width:90%;margin-left:auto;background-color:#fff;border-radius:5px}.p-nav__category,.p-nav__item a{height:60px;line-height:60px;padding-left:1rem}.p-nav__item{width:100%;font-weight:700}.p-nav__item:not(:last-child){border-bottom:1px solid #000}.p-nav__item a{display:block}.p-nav__subitem{text-indent:1rem;font-size:.9rem}.p-nav__subitem a{color:#505050;height:50px;line-height:50px}.p-footer{background-color:#fdf9f0;margin-top:3rem;padding:2rem 0}.p-footer__block{margin-bottom:1rem;text-align:center}.p-footer__subtitle{font-size:.8rem}.p-footer__list{font-size:.7rem}.p-footer__item{display:inline}.p-footer__item:not(:last-child):after{content:"＊";padding:0 .5em;font-size:.4em;color:#f5b013}.p-footer__copyright{margin-top:2rem;font-size:.8rem;text-align:center}.p-news__date{margin-right:1em;font-size:.8rem;vertical-align:top}.p-news__link{display:block;font-size:.8rem}.p-news__category{display:inline-block;font-size:.8em;padding:0 .5em;vertical-align:top;line-height:1.5;margin-top:.2em;margin-right:.5em}.p-news__category[data-category=news]{background-color:#c7e3e4}.p-news__category[data-category=announce]{background-color:#ebd86c}.p-museum__list{display:flex;list-style:none;flex-direction:column}.p-museum__area{display:inline-block;font-size:.8em;padding:0 .5em;vertical-align:top;line-height:1.5;border-radius:20px}.p-museum__area[data-area=chiba],.p-museum__area[data-area=ibaraki],.p-museum__area[data-area=tochigi],.p-museum__area[data-area=tokyo]{background-color:#ccae5c}.p-museum__area[data-area=kyoto]{background-color:#b5ceaf}.p-museum__area[data-area=ishikawa]{background-color:#ceafc9}.p-museum__category{display:inline-block;font-size:.8em;padding:0 .5em;vertical-align:top;line-height:1.5;border-radius:20px}.p-museum__category[data-category=park]{background-color:#c2bbe9}.p-museum__category[data-category=museum]{background-color:#e9e6bb}.p-museum__eyecatch{display:block;width:100%;height:200px;margin-bottom:1rem;-o-object-fit:cover;object-fit:cover}.p-dinosaur__list{display:flex;list-style:none;flex-wrap:wrap}.p-dinosaur__list .c-box{width:calc(50% - .5em)}@media screen and (min-width:970px){.p-dinosaur__list .c-box{width:calc(33% - .5em)}}.p-dinosaur__item{display:none}.p-dinosaur__item.is-show{display:block}.p-dinosaur__age,.p-dinosaur__category{display:inline-block;font-size:.8em;padding:0 .5em;vertical-align:top;line-height:1.5;border-radius:20px;color:#fff}.p-dinosaur__category[data-category=dragon],[data-category=dragon].p-dinosaur__age{background-color:#c45719}.p-dinosaur__category[data-category=bird],[data-category=bird].p-dinosaur__age{background-color:#0f75b9}.p-dinosaur__age{color:#000}.p-dinosaur__age[data-category=jurassic]{background-color:#c7e3e4}.p-dinosaur__age[data-category=cretaceous]{background-color:#ebd86c}.p-dinosaur__eyecatch{display:block;width:100%;height:200px;-o-object-fit:cover;object-fit:cover;margin-bottom:3rem}.p-dinosaur__slide{position:relative;top:0;left:0}.p-dinosaur__slide:after{content:"";position:absolute;bottom:-20px;right:-30px;display:block;background:url('+x+') 50%/contain no-repeat;width:160px;height:40px;z-index:1}.p-related__list{display:flex;list-style:none}.p-related__item:not(:first-child){margin-left:.5em}.p-dinosaur__favorite{position:fixed;bottom:1rem;right:1rem;display:block;width:50px;height:50px;z-index:1000}.p-column__list{display:flex;list-style:none;flex-direction:column}.p-column__category{display:inline-block;font-size:.8em;padding:0 .5em;vertical-align:top;line-height:1.5;border-radius:20px}.p-column__category[data-category=dinosaur]{background-color:#ccae5c}.p-column__category[data-category=tips]{background-color:#b5ceaf}.p-column__category[data-category=history]{background-color:#a5c5ca}.p-column__category[data-category=event]{background-color:#ceafc9}.p-column__eyecatch{display:block;width:100%;height:200px;margin-bottom:1rem;-o-object-fit:cover;object-fit:cover}.p-guide__date{margin-right:1em;font-size:.8rem}.p-guide__tag{padding:0 1rem;background-color:#fdf1d6;font-size:.7rem}.p-guide__link{display:block;font-size:.8rem;width:calc(100% - 2rem)}.p-faq__date{margin-right:1em;font-size:.8rem}.p-faq__tag{padding:0 1rem;background-color:#fdf1d6;font-size:.7rem}.p-faq__link{position:relative;width:calc(100% - 2rem);font-size:.9rem;list-style:none;cursor:pointer}.p-faq__link::-webkit-details-marker{display:none}.p-faq__link:after{content:"+";position:absolute;top:50%;right:-1rem;font-weight:700;font-size:1.3rem;line-height:1;transform:translateY(-50%)}.p-faq__item details[open] .p-faq__link:after{content:"-"}.p-faq__text{margin-top:.5em}.p-mypage__name{margin-bottom:3rem;border-bottom:3px dotted #91091e;font-size:1.5rem;font-weight:700}.p-mypage__list{display:flex;list-style:none;overflow-x:scroll;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.p-mypage__list__wrapper{overflow-x:hidden}.p-mypage__item{flex:0 0 40%}.p-mypage__item+.p-mypage__item{margin-left:.5rem}.p-mypage__category{display:inline-block;font-size:.8em;padding:0 .5em;vertical-align:top;line-height:1.5;border-radius:20px;color:#fff}.p-mypage__category[data-category=dragon]{background-color:#c45719}.p-mypage__category[data-category=bird]{background-color:#0f75b9}.p-newstop__list{list-style:none;font-size:.9rem}.p-newstop__item{padding:.2em 0}.p-newstop__title{display:block;white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden}.p-searchtop__list{display:flex;justify-content:space-between}.p-searchtop__image{border:3px solid #de6d7f}.p-searchtop__link{display:flex;align-items:center;justify-content:center;width:48.5%;height:80px;background-color:#de6d7f;color:#fff;font-size:1.1rem;font-weight:700;line-height:1.2}.p-rankingtop__list{display:flex;list-style:none}.p-rankingtop__item+.p-rankingtop__item{margin-left:.5em}.p-rankingtop__item:before{content:"";display:block;width:30%;height:40px;margin:auto}.p-rankingtop__item[data-index="1"]:before{background:url('+v+') 50%/contain no-repeat;height:50px;margin-top:-10px}.p-rankingtop__item[data-index="2"]:before{background:url('+y+') 50%/contain no-repeat}.p-rankingtop__item[data-index="3"]:before{background:url('+k+') 50%/contain no-repeat}.p-rankingtop__image{width:100%;height:120px;-o-object-fit:cover;object-fit:cover}.p-museumtop{display:flex;list-style:none;flex-wrap:wrap}.p-museumtop .c-box{width:calc(50% - .5em)}@media screen and (min-width:970px){.p-museumtop .c-box{width:calc(33% - .5em)}}.p-museumtop__list{display:flex;flex-wrap:wrap}.p-museumtop__text{position:relative;height:5.4rem;overflow:hidden}.p-museumtop__text:after{content:"";position:absolute;right:0;bottom:0;width:60px;height:1.8rem;background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff)}.p-columntop{display:flex;list-style:none;flex-wrap:wrap}.p-columntop .c-box{width:calc(50% - .5em)}@media screen and (min-width:970px){.p-columntop .c-box{width:calc(33% - .5em)}}.p-columntop__list{display:flex;flex-wrap:wrap}.p-columntop__text{height:5.4rem;overflow:hidden;position:relative}.p-columntop__text:after{content:"";position:absolute;right:0;bottom:0;width:60px;height:1.8rem;background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff)}.u-mgb-5{margin-bottom:5px}.u-mgb-10{margin-bottom:10px}.u-mgb-20{margin-bottom:20px}.u-mgb-40{margin-bottom:40px}.u-mgb-60{margin-bottom:60px}.u-mgb-80{margin-bottom:80px}.u-mgt-5{margin-top:5px}.u-mgt-10{margin-top:10px}.u-mgt-20{margin-top:20px}.u-mgt-40{margin-top:40px}.u-mgt-60{margin-top:60px}.u-mgt-80{margin-top:80px}.u-bold{font-weight:700}.u-text-l{font-size:1.2em}.u-text-s{font-size:.8em}.u-link{text-decoration:underline}.u-align-c{text-align:center}',""]),t.exports=f},230:function(t,e,o){t.exports=o.p+"img/heading-accent.03ac5ec.png"},231:function(t,e,o){t.exports=o.p+"img/dinosaur-accent.7205392.png"},232:function(t,e,o){t.exports=o.p+"img/ranking01.4b7f099.png"},233:function(t,e,o){t.exports=o.p+"img/ranking02.85f7ad4.png"},234:function(t,e,o){t.exports=o.p+"img/ranking03.d57f9e7.png"},235:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return n})),o.d(e,"mutations",(function(){return r}));var n=function(){return{counter:0}},r={increment:function(t){t.counter++}}},236:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return n})),o.d(e,"mutations",(function(){return r}));o(163);var n=function(){return{list:[]}},r={add:function(t,text){t.list.push({text:text,done:!1})},remove:function(t,e){var o=e.todo;t.list.splice(t.list.indexOf(o),1)},toggle:function(t,e){t.done=!t.done}}},237:function(t,e,o){"use strict";o(167)},238:function(t,e,o){var n=o(61)(!1);n.push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),t.exports=n},84:function(t,e,o){"use strict";o.r(e);var n={methods:{toggleNav:function(){this.$emit("toggle-nav")}}},r=o(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"p-header"},[o("h1",{staticClass:"p-header__title"},[o("NuxtLink",{attrs:{to:"/"}},[t._v("恐竜ずかん")])],1),t._v(" "),o("ul",{staticClass:"p-header__items"},[o("li",[o("NuxtLink",{staticClass:"p-header__item",attrs:{id:"searchbox",to:"/dinosaur",title:"さがす"}},[o("fa",{staticClass:"fas fa-search p-header__item__icon",attrs:{icon:"search"}}),t._v(" "),o("h3",{staticClass:"p-header__item__name"},[t._v("さがす")])],1)],1),t._v(" "),o("li",[o("NuxtLink",{staticClass:"p-header__item",attrs:{to:"/login",title:"ログイン"}},[o("fa",{staticClass:"fas fa-door-open p-header__item__icon",attrs:{icon:"door-open"}}),t._v(" "),o("h3",{staticClass:"p-header__item__name"},[t._v("ログイン")])],1)],1),t._v(" "),o("li",[o("button",{staticClass:"p-header__item",attrs:{id:"menu",to:"",title:"メニューを開く"},on:{click:t.toggleNav}},[o("fa",{staticClass:"fas fa-bars p-header__item__icon",attrs:{icon:"bars"}}),t._v(" "),o("h3",{staticClass:"p-header__item__name"},[t._v("メニュー")])],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(84).default})},85:function(t,e,o){"use strict";o.r(e);var n={props:["navState"],data:function(){return{toggleNavState:!1}},watch:{navState:function(){this.toggleNavState=!0}},methods:{closeNav:function(){this.toggleNavState=!1}}},r=o(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"p-nav",class:{"is-open":t.toggleNavState},attrs:{id:"nav"}},[o("button",{staticClass:"p-nav__close",attrs:{id:"nav-close"},on:{click:t.closeNav}},[t._v("×")]),t._v(" "),o("ul",{staticClass:"p-nav__list"},[o("li",{staticClass:"p-nav__item"},[o("p",{staticClass:"p-nav__category"},[t._v("カテゴリからさがす")]),t._v(" "),o("ul",{staticClass:"p-nav__sublist"},[o("li",{staticClass:"p-nav__subitem"},[o("NuxtLink",{attrs:{to:"/dinosaur"},nativeOn:{click:function(e){return t.closeNav()}}},[t._v("竜盤目")])],1),t._v(" "),o("li",{staticClass:"p-nav__subitem"},[o("NuxtLink",{attrs:{to:"/dinosaur"},nativeOn:{click:function(e){return t.closeNav()}}},[t._v("鳥盤目")])],1)])]),t._v(" "),o("li",{staticClass:"p-nav__item"},[o("NuxtLink",{attrs:{to:"/dinosaur"},nativeOn:{click:function(e){return t.closeNav()}}},[t._v("人気からさがす")])],1),t._v(" "),o("li",{staticClass:"p-nav__item"},[o("NuxtLink",{attrs:{to:"/dinosaur"},nativeOn:{click:function(e){return t.closeNav()}}},[t._v("特徴からさがす")])],1),t._v(" "),o("li",{staticClass:"p-nav__item"},[o("NuxtLink",{attrs:{to:"/register"},nativeOn:{click:function(e){return t.closeNav()}}},[t._v("新規登録")])],1),t._v(" "),o("li",{staticClass:"p-nav__item"},[o("NuxtLink",{attrs:{to:"/guide"},nativeOn:{click:function(e){return t.closeNav()}}},[t._v("ご利用ガイド")])],1),t._v(" "),o("li",{staticClass:"p-nav__item"},[o("NuxtLink",{attrs:{to:"/faq"},nativeOn:{click:function(e){return t.closeNav()}}},[t._v("よくある質問")])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:o(85).default})},86:function(t,e,o){"use strict";o.r(e);var n=o(2),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"p-footer"},[o("div",{staticClass:"p-footer__block"},[o("p",{staticClass:"p-footer__subtitle"},[t._v("ヘルプ")]),t._v(" "),o("ul",{staticClass:"p-footer__list"},[o("li",{staticClass:"p-footer__item"},[o("NuxtLink",{attrs:{to:"/dinosaur"}},[t._v("恐竜をさがす")])],1),t._v(" "),o("li",{staticClass:"p-footer__item"},[o("NuxtLink",{attrs:{to:"/guide"}},[t._v("ご利用ガイド")])],1),t._v(" "),o("li",{staticClass:"p-footer__item"},[o("NuxtLink",{attrs:{to:"/faq"}},[t._v("よくある質問")])],1)])]),t._v(" "),o("div",{staticClass:"p-footer__block"},[o("p",{staticClass:"p-footer__subtitle"},[t._v("サイトについて")]),t._v(" "),o("ul",{staticClass:"p-footer__list"},[o("li",{staticClass:"p-footer__item"},[o("NuxtLink",{attrs:{to:"/common/agreement"}},[t._v("利用規約")])],1),t._v(" "),o("li",{staticClass:"p-footer__item"},[o("NuxtLink",{attrs:{to:"/common/privacy"}},[t._v("プライバシーポリシー")])],1),t._v(" "),o("li",{staticClass:"p-footer__item"},[o("NuxtLink",{attrs:{to:"/common/contact"}},[t._v("お問い合わせ")])],1)])]),t._v(" "),o("p",{staticClass:"p-footer__copyright"},[t._v("©️manappe 2021")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:o(86).default})},90:function(t,e,o){t.exports=o.p+"img/slide02.3f9f10d.png"}},[[188,26,1,27]]]);