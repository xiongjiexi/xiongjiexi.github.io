(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{496:function(t,s,a){"use strict";a.r(s);var r=a(42),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vscode插件开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode插件开发"}},[t._v("#")]),t._v(" vscode插件开发")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#参考"}},[t._v("参考")])]),a("li",[a("a",{attrs:{href:"#使用microsoft提供的生成工具生成demo"}},[t._v("使用microsoft提供的生成工具生成demo")])]),a("li",[a("a",{attrs:{href:"#如何绑定快捷键和配置菜单"}},[t._v("如何绑定快捷键和配置菜单")])]),a("li",[a("a",{attrs:{href:"#了解package-json字段"}},[t._v("了解package.json字段")])]),a("li",[a("a",{attrs:{href:"#插件打包、发布"}},[t._v("插件打包、发布")]),a("ul",[a("li",[a("a",{attrs:{href:"#安装"}},[t._v("安装")])]),a("li",[a("a",{attrs:{href:"#本地打包"}},[t._v("本地打包")])]),a("li",[a("a",{attrs:{href:"#发布到官方插件市场"}},[t._v("发布到官方插件市场")])])])]),a("li",[a("a",{attrs:{href:"#调试"}},[t._v("调试")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/microsoft/vscode-generator-code",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSCode插件开发全攻略"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://code.visualstudio.com/api/references/vscode-api#workspace",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/xiongjiexi/vscode-ext-md",target:"_blank",rel:"noopener noreferrer"}},[t._v("vscode markdown插件（本人开发）"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"使用microsoft提供的生成工具生成demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用microsoft提供的生成工具生成demo"}},[t._v("#")]),t._v(" 使用microsoft提供的生成工具生成demo")]),t._v(" "),a("h2",{attrs:{id:"如何绑定快捷键和配置菜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何绑定快捷键和配置菜单"}},[t._v("#")]),t._v(" 如何绑定快捷键和配置菜单")]),t._v(" "),a("p",[t._v("在package.json的属性contributes中配置keybindings和menus属性，如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contributes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commands"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"md-ext.helloWorld"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keybindings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"md-ext.helloWorld"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ctrl+f10"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mac"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cmd+f10"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"when"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"editorTextFocus"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"menus"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor/context"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"when"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"editorFocus"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"md-ext.helloWorld"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"group"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigation"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"了解package-json字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解package-json字段"}},[t._v("#")]),t._v(" 了解package.json字段")]),t._v(" "),a("h2",{attrs:{id:"插件打包、发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件打包、发布"}},[t._v("#")]),t._v(" 插件打包、发布")]),t._v(" "),a("p",[t._v("使用vsce打包、发布")]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("npm install -g vsce")]),t._v(" "),a("h3",{attrs:{id:"本地打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地打包"}},[t._v("#")]),t._v(" 本地打包")]),t._v(" "),a("blockquote",[a("p",[t._v("可能会由于"),a("code",[t._v("Missing publisher name.")]),t._v("报错导致打包失败，请到package.json中添加"),a("code",[t._v('"publisher": "插件发布名称"')]),t._v("属性。")])]),t._v(" "),a("p",[t._v("vsce package")]),t._v(" "),a("h3",{attrs:{id:"发布到官方插件市场"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布到官方插件市场"}},[t._v("#")]),t._v(" 发布到官方插件市场")]),t._v(" "),a("p",[t._v("待补充")]),t._v(" "),a("h2",{attrs:{id:"调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[t._v("#")]),t._v(" 调试")]),t._v(" "),a("p",[t._v("F5开始")])])}),[],!1,null,null,null);s.default=e.exports}}]);