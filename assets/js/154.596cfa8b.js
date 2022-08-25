(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{557:function(a,t,v){"use strict";v.r(t);var r=v(42),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"浅拷贝与深拷贝的自我介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝与深拷贝的自我介绍"}},[a._v("#")]),a._v(" 浅拷贝与深拷贝的自我介绍")]),a._v(" "),v("blockquote",[v("p",[a._v("先了解下他们代表的含义")])]),a._v(" "),v("h3",{attrs:{id:"浅拷贝-shallow-copy"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝-shallow-copy"}},[a._v("#")]),a._v(" 浅拷贝(Shallow Copy)")]),a._v(" "),v("blockquote",[v("p",[a._v("仅拷贝对象的引用(指针), 不拷贝对象本身.")])]),a._v(" "),v("h3",{attrs:{id:"深拷贝-deep-copy"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝-deep-copy"}},[a._v("#")]),a._v(" 深拷贝(Deep Copy)")]),a._v(" "),v("blockquote",[v("p",[a._v("拷贝对象内存到另一块新的内存中.")])]),a._v(" "),v("h1",{attrs:{id:"在java中他们有点不一样"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在java中他们有点不一样"}},[a._v("#")]),a._v(" 在Java中他们有点不一样")]),a._v(" "),v("blockquote",[v("p",[a._v("所有的高级语言都有相关的应用, 那他们在Java中有什么不同呢?")]),a._v(" "),v("p",[a._v("Java中分为"),v("code",[a._v("基础数据类型")]),a._v("和"),v("code",[a._v("引用数据类型")]),a._v(", 并且在Java中只有"),v("code",[a._v("值传递")]),a._v("(想了解值传递可以参考这篇文章"),v("RouterLink",{attrs:{to:"/villa/Java/值传递和引用传递.html"}},[a._v("值传递和引用传递")]),a._v("),  所以Java不存在拷贝引用, 都是对"),v("code",[a._v("值")]),a._v("的拷贝.")],1),a._v(" "),v("p",[a._v("浅拷贝是对值的拷贝, 基础数据类型直接拷贝值, 新变量对其修改, 不会影响之前变量的值.")]),a._v(" "),v("p",[a._v("深拷贝是将"),v("code",[a._v("对象图")]),a._v("整体进行了拷贝, 放在里新的heap上.")]),a._v(" "),v("p",[v("code",[a._v("对象图")]),a._v("代表一个对象向下所包含的所有属性(包括对象属性中的属性), 由此好似形成了一幅对象关系图.")])]),a._v(" "),v("h1",{attrs:{id:"在java中是怎么使用的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在java中是怎么使用的"}},[a._v("#")]),a._v(" 在Java中是怎么使用的")]),a._v(" "),v("h3",{attrs:{id:"浅拷贝"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝"}},[a._v("#")]),a._v(" 浅拷贝")]),a._v(" "),v("ol",[v("li",[a._v("clone()方法实现")])]),a._v(" "),v("h3",{attrs:{id:"深拷贝"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝"}},[a._v("#")]),a._v(" 深拷贝")]),a._v(" "),v("ol",[v("li",[a._v("对象中的全部引用类型属性(向里穷尽)都实现clone()")]),a._v(" "),v("li",[a._v("序列化与反序列化")])]),a._v(" "),v("h1",{attrs:{id:""}},[v("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),v("h1",{attrs:{id:"有哪些工具类来帮助我们"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#有哪些工具类来帮助我们"}},[a._v("#")]),a._v(" 有哪些工具类来帮助我们")]),a._v(" "),v("ol",[v("li",[a._v("Apache BeanUtil.CopyProperties")]),a._v(" "),v("li",[a._v("Apache  PropertyUtils.CopyProperties")]),a._v(" "),v("li",[a._v("Spring  BeanUtils.CopyProperties")]),a._v(" "),v("li",[a._v("cglib  BeanCopier")]),a._v(" "),v("li",[a._v("Kyro")]),a._v(" "),v("li",[a._v("google protobuf")]),a._v(" "),v("li",[a._v("orika")])]),a._v(" "),v("h1",{attrs:{id:"faq"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[a._v("#")]),a._v(" FAQ")]),a._v(" "),v("h3",{attrs:{id:"为什么string类型通过常量赋值时相当于基本数据类型-通过new关键字创建对象时便是引用数据类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么string类型通过常量赋值时相当于基本数据类型-通过new关键字创建对象时便是引用数据类型"}},[a._v("#")]),a._v(" 为什么String类型通过常量赋值时相当于基本数据类型，通过new关键字创建对象时便是引用数据类型?")]),a._v(" "),v("blockquote",[v("p",[a._v("String str1 = “ABC”;可能创建一个或者不创建对象，如果”ABC”这个字符串在java String池里不存在，会在java String池里创建一个创建一个String对象(“ABC”)，然后str1指向这个内存地址，无论以后用这种方式创建多少个值为”ABC”的字符串对象，始终只有一个内存地址被分配，之后的都是String的拷贝，Java中称为“字符串驻留”，所有的字符串常量都会在编译之后自动地驻留。")]),a._v(" "),v("p",[a._v("String str2 = new String(“ABC”);至少创建一个对象，也可能两个。因为用到new关键字，肯定会在heap中创建一个str2的String对象，它的value是“ABC”。同时如果这个字符串再java String池里不存在，会在java池里创建这个String对象“ABC”")])])])}),[],!1,null,null,null);t.default=e.exports}}]);