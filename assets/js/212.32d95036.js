(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{624:function(t,r,a){"use strict";a.r(r);var e=a(42),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"排查问题专栏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排查问题专栏"}},[t._v("#")]),t._v(" 排查问题专栏")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("排查线程压测引起的Full GC\nfastjson使用不当引入了ASM Serializer，重复加载同一个classloader，导致元空间的内存泄漏。像fastjson之所以快就是因为使用了asm字节码增加代替了反射。\nrefer: https://mp.weixin.qq.com/s/N7YKNGHL3g6oEXKUcTDlZg")])]),t._v(" "),a("li",[a("p",[t._v("MQ消息积压\na. 首先看入口流量有无积压，核心线程池数是否满了\nb. 查看消息消费日志\nrefer：https://mp.weixin.qq.com/s/kUgbNDw23diOacYN79PZvw")])]),t._v(" "),a("li",[a("p",[t._v("线程池中任务堆积\nhttps://mp.weixin.qq.com/s/BhqOsTrHGSC0hsIviLJZ7Q")])]),t._v(" "),a("li",[a("p",[t._v("在事务里异步刷缓存，缓存刷不上，异步会再查询数据库，不在一个事务里。")])])]),t._v(" "),a("h2",{attrs:{id:"内存泄露"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存泄露"}},[t._v("#")]),t._v(" 内存泄露")]),t._v(" "),a("h3",{attrs:{id:"内存泄露-导致old区内存逐渐变大-直至oom。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存泄露-导致old区内存逐渐变大-直至oom。"}},[t._v("#")]),t._v(" 内存泄露，导致old区内存逐渐变大，直至OOM。")]),t._v(" "),a("p",[t._v("refer：【刚上线，生产环境中发生一连串的报警，有点慌~】")]),t._v(" "),a("p",[t._v("因为自定义实现的内存lru缓存导致的。")]),t._v(" "),a("h2",{attrs:{id:"待归档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#待归档"}},[t._v("#")]),t._v(" 待归档")]),t._v(" "),a("h3",{attrs:{id:"通过gc日志发现耗时的细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过gc日志发现耗时的细节"}},[t._v("#")]),t._v(" 通过GC日志发现耗时的细节")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/WtJ2VaA2M65nCwr5xcfTog",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个超时问题花了我两周才解决！"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"young-gc频繁导致接口超时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#young-gc频繁导致接口超时"}},[t._v("#")]),t._v(" Young GC频繁导致接口超时")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/VniCp1JeYFKlYmPbmIYyJA",target:"_blank",rel:"noopener noreferrer"}},[t._v("一次简单的 JVM 调优，拿去写到简历里"),a("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=s.exports}}]);