(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{442:function(t,a,v){"use strict";v.r(a);var _=v(42),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"堆"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#堆"}},[t._v("#")]),t._v(" 堆")]),t._v(" "),v("h2",{attrs:{id:"堆的定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#堆的定义"}},[t._v("#")]),t._v(" "),v("strong",[t._v("堆的定义：")])]),t._v(" "),v("p",[t._v("堆是由完全二叉树实现的。")]),t._v(" "),v("h2",{attrs:{id:"完全二叉树定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#完全二叉树定义"}},[t._v("#")]),t._v(" "),v("strong",[t._v("完全二叉树定义：")])]),t._v(" "),v("ul",[v("li",[t._v("非叶子节点大于或等于（小于或等于）其左右子树的所有结点。")]),t._v(" "),v("li",[t._v("除了叶子节点，可以不满，但最后一层节点必须靠左，其余层都是满节点。")])]),t._v(" "),v("h2",{attrs:{id:"完全二叉树的分类有哪些"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#完全二叉树的分类有哪些"}},[t._v("#")]),t._v(" "),v("strong",[t._v("完全二叉树的分类有哪些？")])]),t._v(" "),v("p",[t._v("大顶堆：堆顶的元素最大")]),t._v(" "),v("p",[t._v("小顶堆：堆顶的元素最小")]),t._v(" "),v("h2",{attrs:{id:"分别有什么特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分别有什么特点"}},[t._v("#")]),t._v(" "),v("strong",[t._v("分别有什么特点？")])]),t._v(" "),v("h2",{attrs:{id:"分别有什么应用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分别有什么应用场景"}},[t._v("#")]),t._v(" "),v("strong",[t._v("分别有什么应用场景")]),t._v("？")]),t._v(" "),v("p",[t._v("可以用来排序（堆排序）。")]),t._v(" "),v("h2",{attrs:{id:"堆的存储方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#堆的存储方式"}},[t._v("#")]),t._v(" "),v("strong",[t._v("堆的存储方式")])]),t._v(" "),v("p",[t._v("通常使用数组存储。")]),t._v(" "),v("h2",{attrs:{id:"数组存储堆有什么好处"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数组存储堆有什么好处"}},[t._v("#")]),t._v(" "),v("strong",[t._v("数组存储堆有什么好处")]),t._v("？")]),t._v(" "),v("ul",[v("li",[t._v("数组是连续的存储空间，节省空间，并且对cpu缓存有利。")]),t._v(" "),v("li",[t._v("结构紧凑。")])]),t._v(" "),v("h2",{attrs:{id:"实践-将数组转为完全二叉树-将完全二叉树转为数组"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实践-将数组转为完全二叉树-将完全二叉树转为数组"}},[t._v("#")]),t._v(" "),v("strong",[t._v("实践：将数组转为完全二叉树；将完全二叉树转为数组；")])]),t._v(" "),v("h2",{attrs:{id:"堆有哪些常用操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#堆有哪些常用操作"}},[t._v("#")]),t._v(" "),v("strong",[t._v("堆有哪些常用操作？")])]),t._v(" "),v("ul",[v("li",[t._v("插入元素")]),t._v(" "),v("li",[t._v("删除元素")]),t._v(" "),v("li",[t._v("获取最大值或最小值")])]),t._v(" "),v("h2",{attrs:{id:"分别是如何实现的-写一写常用操作的实现代码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分别是如何实现的-写一写常用操作的实现代码"}},[t._v("#")]),t._v(" "),v("strong",[t._v("分别是如何实现的？写一写常用操作的实现代码？")])]),t._v(" "),v("h2",{attrs:{id:"堆有哪些常见应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#堆有哪些常见应用"}},[t._v("#")]),t._v(" "),v("strong",[t._v("堆有哪些常见应用？")])]),t._v(" "),v("ul",[v("li",[t._v("堆排序\n"),v("ul",[v("li",[t._v("如何实现堆排序？--请跳转到"),v("code",[t._v("排序算法章节")])]),t._v(" "),v("li",[t._v("为什么快排的性能比堆排序的性能好？--请跳转到"),v("code",[t._v("排序算法章节")])])])]),t._v(" "),v("li",[t._v("TOP K问题")]),t._v(" "),v("li",[t._v("实现优先级队列\n"),v("ul",[v("li",[t._v("合并有序小文件")]),t._v(" "),v("li",[t._v("高性能定时器")])])]),t._v(" "),v("li",[t._v("求中位数")])]),t._v(" "),v("h3",{attrs:{id:"top-k问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#top-k问题"}},[t._v("#")]),t._v(" TOP K问题")]),t._v(" "),v("p",[t._v("方案：利用小顶堆。")]),t._v(" "),v("p",[t._v("举例：你可以需要在无序数组中找到最大的第K个元素，例如[9,3,6,1,4]，排序后为[1,3,4,6,9]，最大的第3个元素是4。此时你需要维护一个小顶堆，堆大小为K。遍历数组，往堆里添加元素，如果大于堆顶元素，则入堆，堆若满了则将最小元素出堆。数组遍历完成则堆顶元素是最大的第K个元素。")]),t._v(" "),v("p",[t._v("例题：")]),t._v(" "),v("ul",[v("li",[t._v("347.Top K Frequent Elements（前 K 个高频元素）")]),t._v(" "),v("li",[t._v("215.Kth Largest Element in an Array（数组中的第K个最大元素）")])])])}),[],!1,null,null,null);a.default=r.exports}}]);