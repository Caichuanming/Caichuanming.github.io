const nav = require("./nav.js");
module.exports = {
    base: "/",
    title: "橘大胖 Blog",
    description: "橘大胖 Blog vuepress",
    dest: "./dist",
    head: [
        [
            [
                "meta",
                {
                    name: "viewport",
                    content:
                        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"
                }
            ]
        ]
    ],
    markdown: {
        lineNumbers: true // 代码显示行号
    },
    lastUpdated: "Last Updated", //显示更新时间
    themeConfig: {
        // GitHub仓库地址
        repo: "https://github.com/Caichuanming",
        // // 自定义仓库链接文字。
        repoLabel: "GitHub",
        sidebarDepth: 3,
        nav
    },
    plugins: {
        "vuepress-plugin-auto-sidebar": { titleMode: "default", nav: true }
    }
};
