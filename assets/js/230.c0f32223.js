(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{642:function(t,r,n){"use strict";n.r(r);var i=n(42),e=Object(i.a)({},(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"cp命令的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cp命令的使用"}},[t._v("#")]),t._v(" cp命令的使用")]),t._v(" "),n("p",[t._v("linux 复制指定目录下的全部文件到另一个目录中\n复制指定目录下的全部文件到另一个目录中\n文件及目录的复制是经常要用到的。linux 下进行复制的命令为 cp。\n假设复制源目录 为 dir1 , 目标目录为 dir2。怎样才能将 dir1 下所有文件复制到 dir2 下了\n如果 dir2 目录不存在，则可以直接使用\ncp -r dir1 dir2\n即可。\n如果 dir2 目录已存在，则需要使用\ncp -r dir1/. dir2\n如果这时使用 cp -r dir1 dir2, 则也会将 dir1 目录复制到 dir2 中，明显不符合要求。\nps:dir1、dir2 改成对应的目录路径即可。")]),t._v(" "),n("p",[t._v("cp -r /home/www/xxx/statics/. /home/www/statics\n如果存在文件需要先删除\nrm -rf /home/www/statics/*\n否则会一个个文件提示你确认，使用 cp -rf 也一样提示")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("linux 下 cp 整个文件夹的文件到另一个文件夹\ncp -ri A/B/* A1/B1/ 回车\n若复制过程中询问是否覆盖，输入 y 按回车，若不想看到提示直接覆盖使用 - rf\n另外若 A A1 不在同一目录下，最好填绝对路径，就是 / xxx/xxx/A/B/* /xxx/A1/B1/")]),t._v(" "),n("p",[t._v("实例：")]),t._v(" "),n("p",[t._v("cp -ri /home/server/tomcat/* /home/server/test/")]),t._v(" "),n("p",[t._v("cp: target `/home/server/test/' is not a directory\n需要先创建目标文件夹\nmkdir /home/server/test")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("copy 命令的功能是将给出的文件或目录拷贝到另一文件或目录中，同 MSDOS 下的 copy 命令一样，功能十分强大。\n语法： cp [选项] 源文件或目录 目标文件或目录\n说明：该命令把指定的源文件复制到目标文件或把多个源文件复制到目标目录中。\n该命令的各选项含义如下：")]),t._v(" "),n("ul",[n("li",[t._v("a 该选项通常在拷贝目录时使用。它保留链接、文件属性，并递归地拷贝目录，其作用等于 dpR 选项的组合。")]),t._v(" "),n("li",[t._v("d 拷贝时保留链接。")]),t._v(" "),n("li",[t._v("f 删除已经存在的目标文件而不提示。")]),t._v(" "),n("li",[t._v("i 和 f 选项相反，在覆盖目标文件之前将给出提示要求用户确认。回答 y 时目标文件将被覆盖，是交互式拷贝。")]),t._v(" "),n("li",[t._v("p 此时 cp 除复制源文件的内容外，还将把其修改时间和访问权限也复制到新文件中。")]),t._v(" "),n("li",[t._v("r 若给出的源文件是一目录文件，此时 cp 将递归复制该目录下所有的子目录和文件。此时目标文件必须为一个目录名。")]),t._v(" "),n("li",[t._v("l 不作拷贝，只是链接文件。")])]),t._v(" "),n("p",[t._v("需要说明的是，为防止用户在不经意的情况下用 cp 命令破坏另一个文件，如用户指定的目标文件名已存在，用 cp 命令拷贝文件后，这个文件就会被新源文件覆盖，因此，建议用户在使用 cp 命令拷贝文件时，最好使用 i 选项。\n例 1\n复制指定目录下的全部文件到另一个目录中\n文件及目录的复制是经常要用到的。linux 下进行复制的命令为 cp。\n假设复制源目录 为 dir1 , 目标目录为 dir2。怎样才能将 dir1 下所有文件复制到 dir2 下了\n如果 dir2 目录不存在，则可以直接使用\ncp -r dir1 dir2\n即可。\n如果 dir2 目录已存在，则需要使用\ncp -r dir1/. dir2\n如果这时使用 cp -r dir1 dir2, 则也会将 dir1 目录复制到 dir2 中，明显不符合要求。\nps:dir1、dir2 改成对应的目录路径即可。\n例 2\n复制指定文件到指定文件夹\n首先建立一个用于测试的目录，用'tree'命令查看\n可见，目录中主要包含用于测试的 *.txt 文件和用于充当炮灰的 *。tes 文件\n目标是保持当前的目录结构，只把 txt 文件复制出来")]),t._v(" "),n("p",[t._v("方法一：当不需要的文件类型较为单一时，可以通过完全复制然后删除指定类型的文件完成\nStep1 使用命令 cp -r test/ test2 将测试目录 test 下所有内容完全复制到 test2")]),t._v(" "),n("p",[t._v("Step2 组合使用 find 及 xargs，将 "),n("em",[t._v(".tes 文件删除\nxargs 是给命令传递参数的一个过滤器，可以将前一个命令产生的输出作为后一个命令的参数\n命令 find test2/ -name '")]),t._v(".tes' |xargs rm -rf, 即将 find 产生的输出（test2 目录下的所有 tes 文件），作为 rm 的参数，从而完全删除\n适用场景举例：把项目文件备份，要去除其中的. svn 文件，可以采用这种方式")]),t._v(" "),n("p",[t._v("方法二：需要的文件为单一类型，带目录结构复制\n这种情况下可以使用 tar 命令将指定类型的文件打包，然后解包，同样需要组合使用 find 和 xargs")]),t._v(" "),n("p",[t._v("Step1 建立目录 test3\nmkdir test3")]),t._v(" "),n("p",[t._v("Step2 将指定类型文件带目录结构打包\nfind test/ -name '*.txt' |xargs tar czf test3.tgz")]),t._v(" "),n("p",[t._v("Step3 解包到目录 test3\ntar zxvf test3.tgz -C test3")]),t._v(" "),n("p",[t._v("适用场景：较为普遍，例如可以复制某个 Web 项目的所有 html/jsp/php 文件；或复制其他项目中特定类型的源文件")]),t._v(" "),n("p",[t._v("本文转载于: https://www.cnblogs.com/zdz8207/p/linux-cp-dir.html")])])}),[],!1,null,null,null);r.default=e.exports}}]);