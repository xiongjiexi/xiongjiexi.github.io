(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{688:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"监控mysql事务执行时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控mysql事务执行时间"}},[t._v("#")]),t._v(" 监控mysql事务执行时间")]),t._v(" "),a("h2",{attrs:{id:"长事务可能会扣你绩效的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#长事务可能会扣你绩效的"}},[t._v("#")]),t._v(" 长事务可能会扣你绩效的")]),t._v(" "),a("blockquote",[a("p",[t._v("长事务在数据库中可能会导致你各种问题, 有可能会出现锁超时, 应用性能大幅度降低等现象.")]),t._v(" "),a("p",[t._v("所以在开发中, 需要时刻注意两点: 1控制事务长度  2减小锁粒度")])]),t._v(" "),a("h2",{attrs:{id:"你需要监控长事务的发生"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你需要监控长事务的发生"}},[t._v("#")]),t._v(" 你需要监控长事务的发生")]),t._v(" "),a("blockquote",[a("p",[t._v("长事务其实在代码的管控中是不好监控的, 如果只是在审核代码时去管控, 很难保证效果, 难免有漏网之鱼, 因此也需要能监控线上长事务的发生.")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询数据库中长事务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" information_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innodb_trx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" TIME_TO_SEC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timediff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("trx_started"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在上一句的基础上增加与processlist表的关联, 获取到长事务的当前db和状态")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" trx_state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("trx_mysql_thread_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("TIME_TO_SEC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timediff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("trx_started"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" information_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innodb_trx a \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" information_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PROCESSLIST b "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trx_mysql_thread_id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" TIME_TO_SEC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timediff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("trx_started"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);