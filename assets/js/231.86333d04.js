(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{643:function(s,t,a){"use strict";a.r(t);var e=a(42),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[s._v("#")]),s._v(" ubuntu")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#安装jdk"}},[s._v("安装jdk")])]),a("li",[a("a",{attrs:{href:"#配置apt源"}},[s._v("配置apt源")]),a("ul",[a("li",[a("a",{attrs:{href:"#备份原来的源"}},[s._v("备份原来的源")])]),a("li",[a("a",{attrs:{href:"#配置新的apt源"}},[s._v("配置新的apt源")])]),a("li",[a("a",{attrs:{href:"#更新"}},[s._v("更新")])])])]),a("li",[a("a",{attrs:{href:"#ubuntu上使用ssh"}},[s._v("ubuntu上使用ssh")])]),a("li",[a("a",{attrs:{href:"#ubuntu中安装docker"}},[s._v("ubuntu中安装docker")]),a("ul",[a("li",[a("a",{attrs:{href:"#检查linux版本内核和存储驱动"}},[s._v("检查linux版本内核和存储驱动")])]),a("li",[a("a",{attrs:{href:"#通过官方shell脚本安装"}},[s._v("通过官方shell脚本安装")])]),a("li",[a("a",{attrs:{href:"#安装后添加docker用户组"}},[s._v("安装后添加docker用户组")])])])]),a("li",[a("a",{attrs:{href:"#安装gcc和make"}},[s._v("安装gcc和make")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"安装jdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装jdk"}},[s._v("#")]),s._v(" 安装jdk")]),s._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[a("p",[s._v("下载jdk8（别下错了，64位系统不要下载32位jdk）：\n地址：https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html")])]),s._v(" "),a("li",[a("p",[s._v("创建jdk放置的目录\nsudo mkdir /usr/lib/jvm")])]),s._v(" "),a("li",[a("p",[s._v("解压到该目录\nsudo tar -zxvf jdk-8u291-linux-x64.tar.gz -C /usr/lib/jvm")])]),s._v(" "),a("li",[a("p",[s._v("修改环境变量\nsudo vi ~/.bashrc")])])]),s._v(" "),a("p",[s._v("在文件最底下粘贴：\n#set oracle jdk environment\nexport JAVA_HOME=/usr/lib/jvm/jdk1.8.0_291\nexport JRE_HOME=${JAVA_HOME}/jre\nexport CLASSPATH=.😒{JAVA_HOME}/lib:${JRE_HOME}/lib\nexport PATH=${JAVA_HOME}/bin:$PATH")]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[s._v("使环境变量生效\nsource ~/.bashrc")])]),s._v(" "),a("li",[a("p",[s._v("系统注册此jdk\nsudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk1.8.0_291/bin/java 300")])]),s._v(" "),a("li",[a("p",[s._v("查看是否安装成功\njava -version")])]),s._v(" "),a("li",[a("p",[s._v("如果安装多版本jdk，可以使用下面命令做切换\nsudo update-alternatives --config java")])])]),s._v(" "),a("h2",{attrs:{id:"配置apt源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置apt源"}},[s._v("#")]),s._v(" 配置apt源")]),s._v(" "),a("h3",{attrs:{id:"备份原来的源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份原来的源"}},[s._v("#")]),s._v(" 备份原来的源")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd /etc/apt/\ncp source.list source.lisk.bak\n")])])]),a("h3",{attrs:{id:"配置新的apt源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置新的apt源"}},[s._v("#")]),s._v(" 配置新的apt源")]),s._v(" "),a("p",[s._v("打开apt源设置文件\nvim /etc/apt/sources.list\n使用以下对应环境的源替换即可：")]),s._v(" "),a("p",[s._v("raspberry pi 的清华源")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main non-free contrib\ndeb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main non-free contrib\n")])])]),a("p",[s._v("ubuntu清华源\nhttps://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/")]),s._v(" "),a("h3",{attrs:{id:"更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[s._v("#")]),s._v(" 更新")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apt-get update\n")])])]),a("h2",{attrs:{id:"ubuntu上使用ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu上使用ssh"}},[s._v("#")]),s._v(" ubuntu上使用ssh")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/jackghq/article/details/54974141",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考地址"),a("OutboundLink")],1)]),s._v(" "),a("blockquote",[a("p",[s._v("如果你只是想登陆别的机器的SSH只需要安装openssh-client（ubuntu有默认安装，如果没有则sudo apt-get install openssh-client），如果要使本机开放SSH服务就需要安装openssh-server。")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("查看当前的ubuntu是否安装了ssh-server服务。默认只安装ssh-client服务。\ndpkg -l | grep ssh")])]),s._v(" "),a("li",[a("p",[s._v("安装ssh-server服务\nsudo apt-get install openssh-server")])]),s._v(" "),a("li",[a("p",[s._v("查看ssh是否安装完成\ndpkg -l | grep ssh")])]),s._v(" "),a("li",[a("p",[s._v("查看ssh-server是否启动\nps -e | grep ssh")])])]),s._v(" "),a("h2",{attrs:{id:"ubuntu中安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu中安装docker"}},[s._v("#")]),s._v(" ubuntu中安装docker")]),s._v(" "),a("p",[s._v("\\1. 检查linux版本内核和存储驱动> uname -a> ls -l /sys/class/misc/device-mapper\n\\2. 通过官方shell脚本安装> sudo apt-get install curl安装curl时, 可能需要卸载其他软件, 使用apt-get --purge remove software_name\ncurl -sSL "),a("a",{attrs:{href:"https://get.docker.com/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://get.docker.com/"),a("OutboundLink")],1),s._v(" | sudo sh\n\\3. 添加docker用户组> sudo groupadd docker> sudo gpasswd -a ${USER} docker> sudo service docker restart")]),s._v(" "),a("h3",{attrs:{id:"检查linux版本内核和存储驱动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查linux版本内核和存储驱动"}},[s._v("#")]),s._v(" 检查linux版本内核和存储驱动")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -a\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l /sys/class/misc/device-mapper\n")])])]),a("h3",{attrs:{id:"通过官方shell脚本安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过官方shell脚本安装"}},[s._v("#")]),s._v(" 通过官方shell脚本安装")]),s._v(" "),a("p",[s._v("下载官方安装脚本需要使用curl")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装curl时, 可能需要卸载其他软件, 使用apt-get --purge remove  software_name")]),s._v("\n")])])]),a("p",[s._v("下载官方安装脚本")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sSL https://get.docker.com/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])])]),a("h3",{attrs:{id:"安装后添加docker用户组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装后添加docker用户组"}},[s._v("#")]),s._v(" 安装后添加docker用户组")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" docker\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gpasswd -a "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v(" docker\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker restart\n")])])]),a("h2",{attrs:{id:"安装gcc和make"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装gcc和make"}},[s._v("#")]),s._v(" 安装gcc和make")]),s._v(" "),a("p",[s._v("基础镜像什么都没有带，如果要编译c相关的工具，需要这两个工具，接下来是安装步骤：")]),s._v(" "),a("ol",[a("li",[s._v("sudo apt install make")]),s._v(" "),a("li",[s._v("sudo apt install make-guile")]),s._v(" "),a("li",[s._v("sudo apt-get install gcc")])]),s._v(" "),a("p",[s._v("也可以直接安装基础软件包：\nsudo apt install build-essential")])])}),[],!1,null,null,null);t.default=r.exports}}]);