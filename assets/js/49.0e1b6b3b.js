(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{372:function(s,t,a){"use strict";a.r(t);var n=a(34),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),a("h3",{attrs:{id:"docker常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker常用命令"}},[s._v("#")]),s._v(" docker常用命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看帮助")]),s._v("\ndocker --help\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索镜像")]),s._v("\ndocker search "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取镜像")]),s._v("\ndocker pull "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送镜像到仓库")]),s._v("\ndocker push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录镜像仓库地址")]),s._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("login/logout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("仓库地址"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地镜像")]),s._v("\ndocker images\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除本地镜像")]),s._v("\ndocker rmi "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像名称/镜像ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除本地镜像 - 强制")]),s._v("\ndocker rmi -f "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像名称/镜像ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看镜像详情")]),s._v("\ndocker inspect "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像名称/镜像ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h3",{attrs:{id:"dockerfile创建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile创建镜像"}},[s._v("#")]),s._v(" "),a("code",[s._v("Dockerfile")]),s._v("创建镜像")]),s._v(" "),a("h4",{attrs:{id:"dockerfile文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile文件"}},[s._v("#")]),s._v(" Dockerfile文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("FROM "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("基础镜像"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nCOPY ./dist/  /usr/share/nginx/html/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"创建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建镜像"}},[s._v("#")]),s._v(" 创建镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker build -t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"启动-停止-镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-停止-镜像"}},[s._v("#")]),s._v(" 启动/停止 镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动镜像")]),s._v("\ndocker run\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止镜像")]),s._v("\ndocker stop "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"run命令常用选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run命令常用选项"}},[s._v("#")]),s._v(" run命令常用选项")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("选项")]),s._v(" "),a("th",{staticStyle:{"text-align":"right"}},[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("香蕉")]),s._v(" "),a("td",{staticStyle:{"text-align":"right"}},[s._v("$1")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);