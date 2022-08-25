(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{668:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mysql的事务隔离级别介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql的事务隔离级别介绍"}},[t._v("#")]),t._v(" mysql的事务隔离级别介绍")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#简述"}},[t._v("简述")])]),e("li",[e("a",{attrs:{href:"#mysql引擎与事务的关系"}},[t._v("mysql引擎与事务的关系")])]),e("li",[e("a",{attrs:{href:"#数据库事务的四个特征"}},[t._v("数据库事务的四个特征")])]),e("li",[e("a",{attrs:{href:"#并发事务会带来的问题"}},[t._v("并发事务会带来的问题")])]),e("li",[e("a",{attrs:{href:"#mysql的事务隔离级别种类"}},[t._v("mysql的事务隔离级别种类")])]),e("li",[e("a",{attrs:{href:"#事务隔离级别的所依赖的技术"}},[t._v("事务隔离级别的所依赖的技术")]),e("ul",[e("li",[e("a",{attrs:{href:"#mvcc"}},[t._v("MVCC")])]),e("li",[e("a",{attrs:{href:"#共享锁-s-和排他锁-x"}},[t._v("共享锁(S)和排他锁(X)")])])])]),e("li",[e("a",{attrs:{href:"#分别简述事务隔离级别"}},[t._v("分别简述事务隔离级别")]),e("ul",[e("li",[e("a",{attrs:{href:"#read-uncommitted"}},[t._v("read uncommitted")])]),e("li",[e("a",{attrs:{href:"#read-committed"}},[t._v("read committed")])]),e("li",[e("a",{attrs:{href:"#repeatable-read"}},[t._v("repeatable read")])]),e("li",[e("a",{attrs:{href:"#serializable"}},[t._v("serializable")])])])]),e("li",[e("a",{attrs:{href:"#使用事务隔离级别所对应能解决的并发问题"}},[t._v("使用事务隔离级别所对应能解决的并发问题")])]),e("li",[e("a",{attrs:{href:"#不同隔离级别所对应出现的问题"}},[t._v("不同隔离级别所对应出现的问题")]),e("ul",[e("li",[e("a",{attrs:{href:"#rr下出现死锁"}},[t._v("RR下出现死锁")])])])]),e("li",[e("a",{attrs:{href:"#实践"}},[t._v("实践")]),e("ul",[e("li",[e("a",{attrs:{href:"#查询数据库事务隔离级别"}},[t._v("查询数据库事务隔离级别")])]),e("li",[e("a",{attrs:{href:"#设置事务隔离级别"}},[t._v("设置事务隔离级别")])]),e("li",[e("a",{attrs:{href:"#手动开启事务"}},[t._v("手动开启事务")])])])]),e("li",[e("a",{attrs:{href:"#实验"}},[t._v("实验")]),e("ul",[e("li",[e("a",{attrs:{href:"#待补充"}},[t._v("待补充")])])])]),e("li",[e("a",{attrs:{href:"#总结需掌握的重点"}},[t._v("总结需掌握的重点")])]),e("li",[e("a",{attrs:{href:"#全文参考资料"}},[t._v("全文参考资料")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"简述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[t._v("#")]),t._v(" 简述")]),t._v(" "),e("blockquote",[e("p",[t._v("关于事务隔离级别在接触mysql时就已经了解过了,有几个种类,会带来哪几种问题,但每次到实际场景时,却又不记得什么样的隔离级别会造成什么样的问题,应该如何解决. 其实每次重新查资料再分析都是可以解决问题的, 但是这中间又是重复推理学习的过程, 所以对于已经理解的东西, 就将自己的心路历程记录下来, 不仅可以带给他人帮助也帮助自己思考.\n这里想一遍将事务隔离级别讲清楚.")])]),t._v(" "),e("h2",{attrs:{id:"mysql引擎与事务的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql引擎与事务的关系"}},[t._v("#")]),t._v(" mysql引擎与事务的关系")]),t._v(" "),e("blockquote",[e("p",[t._v("只有InnoDB支持事务 , 会有另外文章解析与myisam的比较")])]),t._v(" "),e("h2",{attrs:{id:"数据库事务的四个特征"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库事务的四个特征"}},[t._v("#")]),t._v(" 数据库事务的四个特征")]),t._v(" "),e("blockquote",[e("p",[t._v("即ACID")])]),t._v(" "),e("ol",[e("li",[t._v("原子性（Atomicity）")]),t._v(" "),e("li",[t._v("一致性（Consistency）")]),t._v(" "),e("li",[t._v("隔离性（Isolation）")]),t._v(" "),e("li",[t._v("持久性（Durability）")])]),t._v(" "),e("h2",{attrs:{id:"并发事务会带来的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#并发事务会带来的问题"}},[t._v("#")]),t._v(" 并发事务会带来的问题")]),t._v(" "),e("blockquote",[e("p",[t._v("其他文章会详细介绍这四种问题")])]),t._v(" "),e("ol",[e("li",[t._v("脏读")])]),t._v(" "),e("blockquote",[e("p",[t._v("一句话: 能读到未提交事务的数据变化")]),t._v(" "),e("p",[t._v("解决方案:")]),t._v(" "),e("blockquote",[e("ol",[e("li",[t._v("设置"),e("code",[t._v("read committed")]),t._v("以上的事务隔离级别")])])])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("不可重复读")])]),t._v(" "),e("blockquote",[e("p",[t._v("一句话: 多次读取数据一直在变化")]),t._v(" "),e("p",[t._v("解决方案:")]),t._v(" "),e("blockquote",[e("ol",[e("li",[t._v("设置"),e("code",[t._v("repeatable read")]),t._v("以上的事务隔离级别")]),t._v(" "),e("li",[t._v("由要进行修改操作的事务显示使用排他锁")]),t._v(" "),e("li",[t._v("或者由重复读的事务显示使用共享锁")])])])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("幻读")])]),t._v(" "),e("blockquote",[e("p",[t._v("一句话: 多次读取数据, 数据的"),e("code",[t._v("数量")]),t._v("一直在变化")]),t._v(" "),e("p",[t._v("解决方案:")]),t._v(" "),e("blockquote",[e("ol",[e("li",[t._v("设置"),e("code",[t._v("serializable")]),t._v("以上的事务隔离级别")])])])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("数据丢失")])]),t._v(" "),e("h2",{attrs:{id:"mysql的事务隔离级别种类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql的事务隔离级别种类"}},[t._v("#")]),t._v(" mysql的事务隔离级别种类")]),t._v(" "),e("ol",[e("li",[t._v("read uncommitted")]),t._v(" "),e("li",[t._v("read committed")]),t._v(" "),e("li",[t._v("repeatable read")]),t._v(" "),e("li",[t._v("serializable")])]),t._v(" "),e("h2",{attrs:{id:"事务隔离级别的所依赖的技术"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事务隔离级别的所依赖的技术"}},[t._v("#")]),t._v(" 事务隔离级别的所依赖的技术")]),t._v(" "),e("blockquote",[e("p",[t._v("事务隔离级别依赖MVCC和数据库锁, 以下做简单介绍, 深入了解可以再查找资料.")])]),t._v(" "),e("h3",{attrs:{id:"mvcc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mvcc"}},[t._v("#")]),t._v(" MVCC")]),t._v(" "),e("blockquote",[e("p",[t._v("MVCC即"),e("code",[t._v("多版本并发控制")])]),t._v(" "),e("p",[t._v("MVCC实质上是给每一行数据增加了3个字段:  DB_TRX_ID、DB_ROLL_PTR、DB_ROW_ID. 也可以说给每一行加上了两个字段: 创建时间, 过期时间(删除时间)")]),t._v(" "),e("p",[t._v("Innodb中的"),e("code",[t._v("RC和RR")]),t._v("是基于MVCC实现的高性能事务, 另外文章会介绍"),e("code",[t._v("快照读")]),t._v("相关内容解释如何实现的高性能.")])]),t._v(" "),e("h3",{attrs:{id:"共享锁-s-和排他锁-x"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#共享锁-s-和排他锁-x"}},[t._v("#")]),t._v(" 共享锁(S)和排他锁(X)")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("共享锁\n"),e("RouterLink",{attrs:{to:"/villa/mysql/MySQL/mysql锁介绍.html"}},[t._v("mysql锁介绍")])],1)]),t._v(" "),e("li",[e("p",[t._v("排他锁\n"),e("RouterLink",{attrs:{to:"/villa/mysql/MySQL/mysql锁介绍.html"}},[t._v("mysql锁介绍")])],1)])]),t._v(" "),e("h2",{attrs:{id:"分别简述事务隔离级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分别简述事务隔离级别"}},[t._v("#")]),t._v(" 分别简述事务隔离级别")]),t._v(" "),e("blockquote",[e("p",[t._v("简述事务隔离级别的实现原理, 以下都是以两个事务A,B来举例说明.")])]),t._v(" "),e("h3",{attrs:{id:"read-uncommitted"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#read-uncommitted"}},[t._v("#")]),t._v(" read uncommitted")]),t._v(" "),e("blockquote",[e("p",[t._v("事务A读取数据时, 事务B读取数据和修改数据会加上排他锁, 事务B结束事务时会释放排他锁.")]),t._v(" "),e("p",[e("strong",[t._v("关键点抽取: 读取数据不加锁, 可以随意读取被加锁的数据")])])]),t._v(" "),e("h3",{attrs:{id:"read-committed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#read-committed"}},[t._v("#")]),t._v(" read committed")]),t._v(" "),e("blockquote",[e("p",[t._v("事务A读取数据时会加共享锁, 获取到数据后立马释放锁, 事务B读取数据和修改数据时会加上排他锁, 事务B结束事务时会释放排他锁.")]),t._v(" "),e("p",[e("strong",[t._v("关键点抽取: 读取加共享锁, 读完立马释放, 不等事务结束")])])]),t._v(" "),e("h3",{attrs:{id:"repeatable-read"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repeatable-read"}},[t._v("#")]),t._v(" repeatable read")]),t._v(" "),e("blockquote",[e("p",[t._v("事务A读取数据时会加共享锁, 直到事务结束才释放锁, 事务B读取数据也会加上共享锁, 但当事务B修改数据时想加排他锁则会等待事务A结束释放共享锁才行.")]),t._v(" "),e("p",[e("strong",[t._v("关键点抽取: 读取加共享锁, 等事务结束才释放")])])]),t._v(" "),e("h3",{attrs:{id:"serializable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serializable"}},[t._v("#")]),t._v(" serializable")]),t._v(" "),e("blockquote",[e("p",[t._v("事务A读取数据时会加共享锁, 直到事务结束才释放锁, 事务B读取和修改数据时会加上表级排他锁, 直到事务结束才释放.")]),t._v(" "),e("p",[e("strong",[t._v("关键点抽取: 修改数据会加表级排他锁")])])]),t._v(" "),e("h2",{attrs:{id:"使用事务隔离级别所对应能解决的并发问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用事务隔离级别所对应能解决的并发问题"}},[t._v("#")]),t._v(" 使用事务隔离级别所对应能解决的并发问题")]),t._v(" "),e("blockquote"),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("事务隔离级别")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("脏读")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("不可重复读")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("幻读")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("RU(read uncommitted)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("RC(read committed)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("RR(repeatable read)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("serializable")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")])])])]),t._v(" "),e("h2",{attrs:{id:"不同隔离级别所对应出现的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不同隔离级别所对应出现的问题"}},[t._v("#")]),t._v(" 不同隔离级别所对应出现的问题")]),t._v(" "),e("h3",{attrs:{id:"rr下出现死锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rr下出现死锁"}},[t._v("#")]),t._v(" RR下出现死锁")]),t._v(" "),e("blockquote",[e("p",[t._v("表结构为columns: id,c,d")]),t._v(" "),e("p",[t._v("表中已有数据为(0,0,0),(5,5,5),(10,10,10),id=9的数据行不存在")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}}),t._v(" "),e("th",[t._v("session A")]),t._v(" "),e("th",[t._v("session B")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("T1")]),t._v(" "),e("td",[t._v("begin;"),e("br"),t._v("select * from t where id=9 for update;")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("T2")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("select * from t where id=9 for update;"),e("br"),t._v("insert into t values(9,9,9);"),e("br"),e("strong",[t._v("(block)")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("T3")]),t._v(" "),e("td",[t._v("insert into t values(9,9,9);"),e("br"),e("strong",[t._v("(Deadlock found)")])]),t._v(" "),e("td")])])]),t._v(" "),e("p",[t._v("现在来分析上面场景出现的问题")]),t._v(" "),e("p",[t._v("上面问题导致的原因是"),e("strong",[t._v("间隙锁")])]),t._v(" "),e("ol",[e("li",[t._v("T1时刻session A在(5,10)之间加了间隙锁")]),t._v(" "),e("li",[t._v("T2时session B也同样加了间隙锁, "),e("strong",[t._v("间隙锁之间是不会互斥的")])]),t._v(" "),e("li",[t._v("之后无论是哪个session在(5,10)之间insert都会被阻塞, 如果同时有多个线程insert, 则会deadlock, 只有第一条insert会执行成功.")])]),t._v(" "),e("p",[t._v("避免上述问题的方案")]),t._v(" "),e("blockquote",[e("p",[t._v("使用read committed隔离级别并且binlog_format=row")])]),t._v(" "),e("h2",{attrs:{id:"实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[t._v("#")]),t._v(" 实践")]),t._v(" "),e("h3",{attrs:{id:"查询数据库事务隔离级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询数据库事务隔离级别"}},[t._v("#")]),t._v(" 查询数据库事务隔离级别")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" variables "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%isolation%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"设置事务隔离级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置事务隔离级别"}},[t._v("#")]),t._v(" 设置事务隔离级别")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询事务隔离级别")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" @"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@session.tx_isolation")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" @"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@global.tx_isolation")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置read uncommitted级别：")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("session")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transaction")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isolation")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("level")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("read")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uncommitted")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置read committed级别：")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("session")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transaction")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isolation")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("level")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("read")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("committed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置repeatable read级别：")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("session")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transaction")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isolation")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("level")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("repeatable")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("read")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置serializable级别：")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("session")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transaction")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isolation")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("level")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("serializable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以上是设置session级别, 如需设置全局, 则将session改为global")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transaction")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isolation")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("level")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("repeatable")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("read")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"手动开启事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手动开启事务"}},[t._v("#")]),t._v(" 手动开启事务")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启事务")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("START")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("begin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交事务")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("commit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回滚事务")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rollback")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"实验"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实验"}},[t._v("#")]),t._v(" 实验")]),t._v(" "),e("h3",{attrs:{id:"待补充"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#待补充"}},[t._v("#")]),t._v(" 待补充")]),t._v(" "),e("h2",{attrs:{id:"总结需掌握的重点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结需掌握的重点"}},[t._v("#")]),t._v(" 总结需掌握的重点")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("几种并发问题的典型场景")])]),t._v(" "),e("li",[e("p",[t._v("RR是如何解决幻读的")])])]),t._v(" "),e("h2",{attrs:{id:"全文参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全文参考资料"}},[t._v("#")]),t._v(" 全文参考资料")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/Genesisx/p/9139175.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址1"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/cjsblog/p/8365921.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址2"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/w2064004678/article/details/83012387",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址3"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.im/post/5b82e0196fb9a019f47d1823#heading-17",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金-全面了解mysql锁机制（InnoDB）与问题排查"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/itxiongwei/p/11098271.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅谈Mysql共享锁、排他锁、悲观锁、乐观锁及其使用场景"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);