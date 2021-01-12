(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{422:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"···-项目文档编写规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#···-项目文档编写规范"}},[t._v("#")]),t._v(" ··· 项目文档编写规范")]),t._v(" "),s("h2",{attrs:{id:"文档运行环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档运行环境"}},[t._v("#")]),t._v(" 文档运行环境")]),t._v(" "),s("blockquote",[s("p",[t._v("基于 vuepress 构建，相关 API 查看"),s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress 文档"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("文档目录："),s("code",[t._v("docs/")])]),t._v(" "),s("p",[t._v("文档运行命令：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" dev\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" build\n")])])]),s("h2",{attrs:{id:"创建-markdown-规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-markdown-规范"}},[t._v("#")]),t._v(" 创建 Markdown 规范")]),t._v(" "),s("ul",[s("li",[t._v("项目文档中在"),s("code",[t._v("project/")]),t._v("文件夹下添加与"),s("code",[t._v("技术")]),t._v(" Markdown 文档")]),t._v(" "),s("li",[t._v("项目文档中在"),s("code",[t._v("log/")]),t._v("文件夹下添加与"),s("code",[t._v("日志")]),t._v(" Markdown 文档")]),t._v(" "),s("li",[t._v("在配置文件"),s("code",[t._v(".vuepress")]),t._v("中的"),s("code",[t._v("config.js")]),t._v("中配置添加相应的文件名")]),t._v(" "),s("li",[t._v("文件名命名尽量简洁")])]),t._v(" "),s("h2",{attrs:{id:"核心节点书写规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心节点书写规范"}},[t._v("#")]),t._v(" 核心节点书写规范")]),t._v(" "),s("ul",[s("li",[t._v("指明核心模块"),s("code",[t._v("绝对路径")]),t._v("地址")]),t._v(" "),s("li",[s("code",[t._v("必须")]),t._v("注明"),s("code",[t._v("开始时间")]),t._v("以及"),s("code",[t._v("完成时间")])]),t._v(" "),s("li",[t._v("如果某个版本把此模块迭代掉"),s("code",[t._v("必须")]),t._v("及时更新文档")]),t._v(" "),s("li",[s("code",[t._v("必须")]),t._v("粘贴必要的代码和注释")])]),t._v(" "),s("h2",{attrs:{id:"组件文档编写规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件文档编写规范"}},[t._v("#")]),t._v(" 组件文档编写规范")]),t._v(" "),s("ul",[s("li",[t._v("该组件文档"),s("code",[t._v("必须")]),t._v("包含组件"),s("code",[t._v("属性")]),t._v("表")]),t._v(" "),s("li",[t._v("该组件文档"),s("code",[t._v("必须")]),t._v("包含 "),s("code",[t._v("基础用法")])]),t._v(" "),s("li",[t._v("该组件文档"),s("code",[t._v("必须")]),t._v("包含 组件用法"),s("code",[t._v("实例")])])]),t._v(" "),s("p",[t._v("举例：")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" Layout 布局")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token blockquote punctuation"}},[t._v(">")]),t._v(" 网页整体框架布局\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 属性")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token table"}},[s("span",{pre:!0,attrs:{class:"token table-header-row"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-header important"}},[t._v(" 参数        ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-header important"}},[t._v(" 说明                   ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-header important"}},[t._v("  类型   ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-header important"}},[t._v(" 可选值 ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-header important"}},[t._v(" 默认值 ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\n")]),s("span",{pre:!0,attrs:{class:"token table-line"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":----------")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":---------------------")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":-----:")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":----:")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":----:")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\n")]),s("span",{pre:!0,attrs:{class:"token table-data-rows"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v(" link        ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v(" s2h5-navbar 的跳转链接 ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v(" String  ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v("   "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("    ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v("   "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("    ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v(" title       ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v(" s2h5-navbar 的标题     ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v(" String  ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v("   "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("    ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v("   "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("    ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v(" show-navbar ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v(" 是否显示 s2h5-navbar   ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v(" Boolean ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v("   "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("    ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token table-data"}},[t._v("  true  ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\n")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 基础用法")]),t._v("\n\n’‘’jsx\n\n’‘’\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 实例")]),t._v("\n\n’‘’jsx\n\n’‘’\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);