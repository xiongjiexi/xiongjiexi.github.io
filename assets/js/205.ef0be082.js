(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{614:function(t,r,a){"use strict";a.r(r);var s=a(42),e=Object(s.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"锁对象的实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锁对象的实现原理"}},[t._v("#")]),t._v(" 锁对象的实现原理")]),t._v(" "),a("p",[t._v("这里不做详细的展开，仅简单说明。")]),t._v(" "),a("p",[t._v("sychronized是在对象头的Mark Word区域做了标记。")]),t._v(" "),a("h1",{attrs:{id:"包装类和string的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包装类和string的特点"}},[t._v("#")]),t._v(" 包装类和String的特点")]),t._v(" "),a("p",[t._v("要想知道为什么不建议用作锁对象，需要你对包装类和String有较深入点的了解。")]),t._v(" "),a("p",[t._v("主要原因有两个：")]),t._v(" "),a("ol",[a("li",[t._v("锁不住")]),t._v(" "),a("li",[t._v("锁滥用")])]),t._v(" "),a("h3",{attrs:{id:"锁不住"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锁不住"}},[t._v("#")]),t._v(" 锁不住")]),t._v(" "),a("p",[t._v("如果修改String对象，其变量引用将指向一个新的String对象或常量池中存在的String对象，也就是存在更换对象的可能性。包装类也是一样，部分值存在缓存，会导致修改后将变量引用指向其他对象。")]),t._v(" "),a("h3",{attrs:{id:"锁滥用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锁滥用"}},[t._v("#")]),t._v(" 锁滥用")]),t._v(" "),a("p",[t._v("因为包装类中部分使用了缓存，例如long，integer，因此可能会导致多处共用一处锁对象。String类更不用说，都是使用常量池中的对象。")])])}),[],!1,null,null,null);r.default=e.exports}}]);