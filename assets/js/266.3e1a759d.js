(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{678:function(t,e,n){"use strict";n.r(e);var s=n(42),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"以时间范围来统计数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#以时间范围来统计数据"}},[t._v("#")]),t._v(" 以时间范围来统计数据")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("工作中很多时候需要统计时间段内的数据量, 以下用物流包裹举例.\n")])])]),n("h2",{attrs:{id:"统计某段时间范围内包裹每小时-每半小时的数据量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#统计某段时间范围内包裹每小时-每半小时的数据量"}},[t._v("#")]),t._v(" 统计某段时间范围内包裹每小时/每半小时的数据量")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("从题意分析, 得知有两个条件:")]),t._v(" "),n("ul",[n("li",[t._v("某段时间范围")]),t._v(" "),n("li",[t._v("每小时/每半小时")])])]),t._v(" "),n("li",[n("p",[t._v("解决关键点: 如何确定每半小时内的数据量?")])])]),t._v(" "),n("blockquote",[n("p",[t._v("通常来说, 首先想到的是分组, count(量点), 来达到计算分组内数据量."),n("br"),t._v("\n因此需要制造出每半小时的为一组的分组字段用来分组."),n("br"),t._v("\n对于每小时而言是比较简单的, 可以直接利用mysql函数hour(time)进行转换."),n("br"),t._v("\n而对于半小时而言就需要"),n("code",[t._v("用某种方式将其归纳为一组")]),n("br")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 半小时分组 - 对于半小时分组也是需要第一分组为小时, 第二分组才是分钟.\nselect \n    hour(colums_time) g_hours,\n    floor(minute(colums_time)/30)*30, g_minute,\n    count(package_id) num\nfrom package \ngroup by g_hours,g_minute\n\n# 另一种半小时分组, 没有上一种适用\nif(minute(colums_time)>=0 and minute(colums_time)<30, 0, 1) g_minutes\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);