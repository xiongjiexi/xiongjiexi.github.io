(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{649:function(t,c,r){"use strict";r.r(c);var a=r(42),p=Object(a.a)({},(function(){var t=this,c=t.$createElement,r=t._self._c||c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"总核数-物理cpu个数-x-每颗物理cpu的核数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总核数-物理cpu个数-x-每颗物理cpu的核数"}},[t._v("#")]),t._v(" 总核数 = 物理CPU个数 X 每颗物理CPU的核数")]),t._v(" "),r("h1",{attrs:{id:"总逻辑cpu数-物理cpu个数-x-每颗物理cpu的核数-x-超线程数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总逻辑cpu数-物理cpu个数-x-每颗物理cpu的核数-x-超线程数"}},[t._v("#")]),t._v(" 总逻辑CPU数 = 物理CPU个数 X 每颗物理CPU的核数 X 超线程数")]),t._v(" "),r("h1",{attrs:{id:"查看物理cpu个数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看物理cpu个数"}},[t._v("#")]),t._v(" 查看物理CPU个数")]),t._v(" "),r("p",[t._v('cat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l')]),t._v(" "),r("h1",{attrs:{id:"查看每个物理cpu中core的个数-即核数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看每个物理cpu中core的个数-即核数"}},[t._v("#")]),t._v(" 查看每个物理CPU中core的个数(即核数)")]),t._v(" "),r("p",[t._v('cat /proc/cpuinfo| grep "cpu cores"| uniq')]),t._v(" "),r("h1",{attrs:{id:"查看逻辑cpu的个数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看逻辑cpu的个数"}},[t._v("#")]),t._v(" 查看逻辑CPU的个数")]),t._v(" "),r("p",[t._v('cat /proc/cpuinfo| grep "processor"| wc -l')]),t._v(" "),r("p",[t._v("查看CPU信息（型号）\ncat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c")]),t._v(" "),r("p",[t._v("本文转载地址: http://www.cnblogs.com/emanlee/p/3587571.html")])])}),[],!1,null,null,null);c.default=p.exports}}]);