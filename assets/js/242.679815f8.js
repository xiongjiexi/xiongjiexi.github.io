(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{653:function(t,e,s){"use strict";s.r(e);var v=s(42),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"简述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[t._v("#")]),t._v(" 简述")]),t._v(" "),s("blockquote",[s("p",[t._v("现在大多项目都是使用RC事务隔离级别, 同时将binlog format设置为row. RR下死锁相对较多, 且因为next-key lock, 容易导致死锁, 而对RC下的死锁, 认识得比较浅显, 由于最近正好碰到一些场景, 故将其整理, 一起交流学习.")])]),t._v(" "),s("h1",{attrs:{id:"实战场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实战场景"}},[t._v("#")]),t._v(" 实战场景")]),t._v(" "),s("blockquote",[s("p",[t._v("所有场景均在"),s("strong",[t._v("read committed事务隔离级别")]),t._v("下")])]),t._v(" "),s("h3",{attrs:{id:"表结构与数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表结构与数据"}},[t._v("#")]),t._v(" 表结构与数据")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 与其他专题演示表结构一样")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表t, id为主键, c为索引(normal), d什么都不是")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表数据: (0,0,0),(5,5,5),(10,10,10),(15,15,15),(20,20,20),(25,25,25);")]),t._v("\n")])])]),s("h3",{attrs:{id:"场景一-update顺序导致的死锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#场景一-update顺序导致的死锁"}},[t._v("#")]),t._v(" 场景一, update顺序导致的死锁")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}}),t._v(" "),s("th",[t._v("session A")]),t._v(" "),s("th",[t._v("session B")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("T1")]),t._v(" "),s("td",[t._v("begin;"),s("br"),t._v("update t set d=100 where id=5;"),s("br"),s("strong",[t._v("(ok)")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("T2")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("begin; "),s("br"),t._v("update t set d=200 where d=10; "),s("strong",[t._v("(ok)")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("T3")]),t._v(" "),s("td",[t._v("update t set d=200 where d=10;"),s("br"),s("strong",[t._v("(block)")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("T4")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("update t set d=100 where id=5;"),s("br"),s("strong",[t._v("(Deadlock found...)")])])])])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("场景一分析")])]),t._v(" "),s("p",[t._v("本例由于两个事务都要更新两行数据, 但由于update顺序问题, 导致在T3,T4时刻互相锁住, T3被T2锁住, T4被T1锁住, 最后死锁检测报错.")]),t._v(" "),s("p",[s("strong",[t._v("场景一解决方案")])]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("保证执行顺序")]),t._v(". 如果是由于同一个逻辑导致的死锁, 那保证顺序一般没有问题, 如果执行逻辑不在同一处, 需要看业务逻辑是否能保证顺序.")]),t._v(" "),s("li",[t._v("锁住执行语句块, 可以使用分布式锁之类方式保证.")])])]),t._v(" "),s("h3",{attrs:{id:"场景二-普通索引与主键索引相互等导致死锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#场景二-普通索引与主键索引相互等导致死锁"}},[t._v("#")]),t._v(" 场景二, 普通索引与主键索引相互等导致死锁")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}}),t._v(" "),s("th",[t._v("session A")]),t._v(" "),s("th",[t._v("session B")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("T1")]),t._v(" "),s("td",[t._v("begin; "),s("br"),t._v("update t set d=100 where id=5; "),s("br"),s("strong",[t._v("(ok)")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("T2")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("update t set d=200 where c=5;"),s("br"),s("strong",[t._v("(block)")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("T3")]),t._v(" "),s("td",[t._v("update t set d=300 where c=5;"),s("br"),s("strong",[t._v("(ok)")])]),t._v(" "),s("td",[s("strong",[t._v("T2时刻的update从block变为Deadlock found...")])])])])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("场景二分析")])]),t._v(" "),s("ol",[s("li",[t._v("T1, update锁住id=5的主键索引.")]),t._v(" "),s("li",[t._v("T2, 查询条件c=5为索引查询, 会根据索引c找到对应的id, 同时将两者锁住, 但是由于session A已经锁住id=5, 因此只锁住c=5的索引, 等待获取id=5的主键锁(被阻塞).")]),t._v(" "),s("li",[t._v("T3, update索引c=5的行, 由于检测到session B已经锁住c=5的索引, 因此发现session A和session B死锁, 致使session B直接抛错不执行, session A语句执行成功.")])]),t._v(" "),s("p",[s("strong",[t._v("场景二解决方案")])]),t._v(" "),s("p",[t._v("尽量保证使用update语句都是基于主键查询.")])])])}),[],!1,null,null,null);e.default=_.exports}}]);