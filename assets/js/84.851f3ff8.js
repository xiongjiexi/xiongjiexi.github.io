(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{484:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"maven学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven学习"}},[e._v("#")]),e._v(" Maven学习")]),e._v(" "),a("h2",{attrs:{id:"maven生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven生命周期"}},[e._v("#")]),e._v(" maven生命周期")]),e._v(" "),a("blockquote",[a("p",[e._v("项目构建时需要怎么操作等等")])]),e._v(" "),a("h2",{attrs:{id:"dependency的scope属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependency的scope属性"}},[e._v("#")]),e._v(" dependency的scope属性")]),e._v(" "),a("p",[e._v("scope有5个值：")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("scope")]),e._v(" "),a("th",[e._v("释义")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("compile")]),e._v(" "),a("td",[e._v("缺省值，适用所有阶段，会随项目一起打包")])]),e._v(" "),a("tr",[a("td",[e._v("provided")]),e._v(" "),a("td",[e._v("类似compile，在编译范围和测试范围可用，但不会随项目打包")])]),e._v(" "),a("tr",[a("td",[e._v("runtime")]),e._v(" "),a("td",[e._v("编译不需要，但运行时需要，会随项目打包")])]),e._v(" "),a("tr",[a("td",[e._v("test")]),e._v(" "),a("td",[e._v("只应用于测试范围")])]),e._v(" "),a("tr",[a("td",[e._v("system")]),e._v(" "),a("td",[e._v("类似provided，但必须显式指定包含jar，不会去仓库lookup")])]),e._v(" "),a("tr",[a("td",[e._v("import")]),e._v(" "),a("td",[e._v("只能用于dependencyManagement中，用于导入package为pom的依赖管理")])])])]),e._v(" "),a("h2",{attrs:{id:"maven配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven配置"}},[e._v("#")]),e._v(" maven配置")]),e._v(" "),a("h3",{attrs:{id:"配置本地repository位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置本地repository位置"}},[e._v("#")]),e._v(" 配置本地repository位置")]),e._v(" "),a("p",[e._v("修改conf文件中的settings.xml配置\n修改"),a("code",[e._v("<settings>")]),e._v("标签内容如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<settings>   \n  <localRepository>D:\\my_code\\maven_repository</localRepository>   \n</settings> \n")])])]),a("h3",{attrs:{id:"配置国内镜像仓库-阿里"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置国内镜像仓库-阿里"}},[e._v("#")]),e._v(" 配置国内镜像仓库（阿里）")]),e._v(" "),a("p",[e._v("同样修改conf中的settings.xml配置\n修改"),a("code",[e._v("<mirrors>")]),e._v("标签内容如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<mirrors>\n    <id>nexus-aliyun</id>\n    <mirrorOf>central</mirrorOf>\n    <name>Nexus aliyun</name>\n    <url>http://maven.aliyun.com/nexus/content/groups/public</url>\n</mirrors>\n")])])]),a("p",[e._v("上面是全局配置，如果需要配置单个项目则按照如下配置（会覆盖全局配置）：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<repositories>\n    <repository>\n        <id>central</id>\n        <name>aliyun maven</name>\n        <url>http://maven.aliyun.com/nexus/content/groups/public/</url>\n        <layout>default</layout>\n        \x3c!-- 是否开启发布版构件下载 --\x3e\n        <releases>\n            <enabled>true</enabled>\n        </releases>\n        \x3c!-- 是否开启快照版构件下载 --\x3e\n        <snapshots>\n            <enabled>false</enabled>\n        </snapshots>\n    </repository>\n</repositories>\n")])])]),a("h2",{attrs:{id:"如何使用maven分析依赖树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用maven分析依赖树"}},[e._v("#")]),e._v(" 如何使用maven分析依赖树")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ mvn dependency:tree\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);