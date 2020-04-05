const nav = require("./nav.js");
const sortFn = key => (a, b) => {
    if (a[key] === "README") {
        return -1;
    }
    if (b[key] === "README") {
        return 1;
    }
    return a[key].charCodeAt(0) - b[key].charCodeAt(0);
};
module.exports = {
    base: "/",
    title: "橘大胖 Blog",
    description: "橘大胖 Blog vuepress",
    dest: "./dist",
    head: [
        [
            "meta",
            {
                name: "viewport",
                content:
                    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"
            }
        ],
        [
            "link",
            {
                rel: "shortcut icon",
                href: "/img/logo.png"
            }
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
    plugins: [
        [
            "vuepress-plugin-auto-sidebar",
            {
                titleMode: "titlecase",
                sort: sortFn,
                nav: true
            }
        ],
        [
            "vuepress-plugin-clean-urls",
            {
                normalSuffix: "/",
                indexSuffix: "/",
                notFoundPath: "/404.html"
            }
        ],
        ["vuepress-plugin-nprogress"]
    ]
};
