(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{505:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"压测工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压测工具"}},[t._v("#")]),t._v(" 压测工具")]),t._v(" "),e("p",[t._v("有wrk 、sb、httpd-tools")]),t._v(" "),e("h2",{attrs:{id:"wrk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wrk"}},[t._v("#")]),t._v(" wrk")]),t._v(" "),e("p",[t._v("安装wrk：")]),t._v(" "),e("ol",[e("li",[t._v("从github下载")]),t._v(" "),e("li",[t._v("下载目录下执行make，如果执行报错，解决问题即可（一般是make、gcc未安装）")]),t._v(" "),e("li",[t._v("配置环境变量")])]),t._v(" "),e("p",[t._v("基本使用：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('wrk -t8 -c200 -d30s --latency "http://localhost:8088"\n')])])]),e("p",[t._v("代表8个线程，200个连接，压测30s，使用非常简单。")]),t._v(" "),e("p",[t._v("压测结果：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Running 10s test @ http://localhost:8088\n  8 threads and 200 connections\n  Thread Stats   Avg      Stdev     Max   +/- Stdev\n    Latency   106.56ms  192.96ms   1.99s    90.57%\n    Req/Sec   607.36    253.36     1.64k    69.10%\n  Latency Distribution\n     50%   25.48ms\n     75%  141.15ms\n     90%  289.76ms\n     99%    1.03s \n  46451 requests in 10.01s, 11.54MB read\n  Socket errors: connect 0, read 0, write 0, timeout 16\n  Non-2xx or 3xx responses: 46451\nRequests/sec:   4642.09\nTransfer/sec:      1.15MB\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);