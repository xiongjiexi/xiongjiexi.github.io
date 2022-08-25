(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{632:function(t,e,r){"use strict";r.r(e);var s=r(42),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"说透泛型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说透泛型"}},[t._v("#")]),t._v(" 说透泛型")]),t._v(" "),r("p",[t._v("泛型是属于编译器阶段的，在编译期泛型会被擦除，被称为"),r("code",[t._v("泛型擦除机制")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"通配符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通配符"}},[t._v("#")]),t._v(" 通配符")]),t._v(" "),r("p",[t._v("使用泛型时，Java允许使用通配符，有以下形式：")]),t._v(" "),r("ol",[r("li",[t._v("？")]),t._v(" "),r("li",[t._v("\n<? super T>\n")]),t._v(" "),r("li",[t._v("\n<? extends T>\n")])]),t._v(" "),r("p",[t._v("以上形式还有各种变种，这里不赘述。")]),t._v(" "),r("h2",{attrs:{id:"取值和赋值"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#取值和赋值"}},[t._v("#")]),t._v(" 取值和赋值")]),t._v(" "),r("p",[t._v("泛型通配符的使用对于其概念稍作了解后，使用一般是没有多大问题，但对使用了泛型通配符的对象进行取值和赋值时，很多人有会一头雾水，接下来我们介绍extends和super它们对于取值赋值的理解难点。")]),t._v(" "),r("h2",{attrs:{id:"extends-t"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#extends-t"}},[t._v("#")]),t._v(" "),r("code",[t._v("<? extends T>")])]),t._v(" "),r("p",[t._v("假设有List<? extends Number> array对象，现需要从中读取和写入值，我们来看下有什么区别。")]),t._v(" "),r("h3",{attrs:{id:"读取"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#读取"}},[t._v("#")]),t._v(" 读取")]),t._v(" "),r("p",[t._v("只能从array中获取Number对象，因为其他extends对象都会引发运行报错的可能。")]),t._v(" "),r("h3",{attrs:{id:"写入"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#写入"}},[t._v("#")]),t._v(" 写入")]),t._v(" "),r("p",[t._v("无法写入对象到array，因为其不确定性，无法确保写入的类型能匹配，依然有报错的可能。")]),t._v(" "),r("h2",{attrs:{id:"super-t"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#super-t"}},[t._v("#")]),t._v(" "),r("code",[t._v("<? super T>")])]),t._v(" "),r("p",[t._v("假设有List<? super Integer> array对象。")]),t._v(" "),r("h3",{attrs:{id:"读取-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#读取-2"}},[t._v("#")]),t._v(" 读取")]),t._v(" "),r("p",[t._v("只能从array中获取Object对象，否则其他都可能会引发报错。")]),t._v(" "),r("h3",{attrs:{id:"写入-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#写入-2"}},[t._v("#")]),t._v(" 写入")]),t._v(" "),r("p",[t._v("只能往array中写入Integer或其子类对象，其他都可能会引发报错。")]),t._v(" "),r("h2",{attrs:{id:"使用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),r("p",[t._v("PECE 原则: "),r("strong",[t._v("Producer Extends, Consumer Super")])]),t._v(" "),r("p",[r("strong",[t._v("只读用extends，只写用super")])]),t._v(" "),r("p",[t._v("Producer extends: 如果我们需要一个 List 提供类型为 T 的数据(即希望从 List 中读取 T 类型的数据), 那么我们需要使用 ? extends T, 例如 List<? extends Integer>. 但是我们不能向这个 List 添加数据.")]),t._v(" "),r("p",[t._v("Consumer Super: 如果我们需要一个 List 来消费 T 类型的数据(即希望将 T 类型的数据写入 List 中), 那么我们需要使用 ? super T, 例如 List<? super Integer>. 但是这个 List 不能保证从它读取的数据的类型.")]),t._v(" "),r("p",[t._v("如果我们既希望读取, 也希望写入, 那么我们就必须明确地声明泛型参数的类型, 例如 "),r("code",[t._v("List<Integer>")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"reference"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" reference")]),t._v(" "),r("p",[t._v("https://segmentfault.com/a/1190000008423240")])])}),[],!1,null,null,null);e.default=a.exports}}]);