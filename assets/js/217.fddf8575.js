(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{629:function(t,a,e){"use strict";e.r(a);var r=e(42),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"精读阿里巴巴java开发手册"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#精读阿里巴巴java开发手册"}},[t._v("#")]),t._v(" 精读阿里巴巴Java开发手册")]),t._v(" "),e("blockquote",[e("p",[t._v("本文是精读<阿里巴巴Java开发手册>时做的笔记, 帮助自己加深理解.")]),t._v(" "),e("p",[t._v("手册版本1.5华山版")])]),t._v(" "),e("h2",{attrs:{id:"华山版《java开发手册》独家讲解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#华山版《java开发手册》独家讲解"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://developer.aliyun.com/live/1201",target:"_blank",rel:"noopener noreferrer"}},[t._v("华山版《Java开发手册》独家讲解"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("作者孤尽讲解了5个浮点类常见误区、在线解答了各种提问。")]),t._v(" "),e("h2",{attrs:{id:"编码规约"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编码规约"}},[t._v("#")]),t._v(" 编码规约")]),t._v(" "),e("h3",{attrs:{id:"线程池不允许使用executors去创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程池不允许使用executors去创建"}},[t._v("#")]),t._v(" 线程池不允许使用Executors去创建")]),t._v(" "),e("p",[e("strong",[t._v("原因")])]),t._v(" "),e("blockquote",[e("p",[t._v("FixedThreadPool和SingleThreadPool允许的请求队列长度为"),e("code",[t._v("Integer.MAX_VALUE")]),t._v(", 可能会堆积大量请求, 从而导致OOM.")]),t._v(" "),e("p",[t._v("CachedThreadPool允许创建的线程数量为"),e("code",[t._v("Integer.MAX_VALUE")]),t._v(", 可能会创建大量的线程, 从而导致OOM.")])]),t._v(" "),e("p",[e("strong",[t._v("探索")])]),t._v(" "),e("p",[e("strong",[t._v("解决方案")])])])}),[],!1,null,null,null);a.default=v.exports}}]);