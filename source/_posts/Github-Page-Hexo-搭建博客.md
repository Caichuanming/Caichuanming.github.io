---
title: Github Page && Hexo 搭建博客
date: 2019-11-08 17:11:53
tags:
    - Hexo
---

#### 创建 git 仓库

在 github 上创建一个名为 `[用户名].github.io` 的项目

#### 环境

-   安装 node 环境 [下载地址](https://nodejs.org/zh-cn/)
-   安装 Hexo `npm install -g hexo-cli`
-   初始化 Hexo `hexo init blog`
-   进入 blog 文件夹
    ```bash
    hexo new [博客名]
    hexo g  #构建
    hexo s  #预览
    hexo d  #推送
    ```
    Hexo 常用命令
    ```bash
    hexo n "我的博客" == hexo new "我的博客" #新建文章
    hexo g == hexo generate #生成
    hexo s == hexo server #启动服务预览
    hexo d == hexo deploy #部署
    hexo server #Hexo会监视文件变动并自动更新，无须重启服务器
    hexo server -s #静态模式
    hexo server -p 5000 #更改端口
    hexo server -i 192.168.1.1 #自定义 IP
    hexo clean #清除缓存，若是网页正常情况下可以忽略这条命令
    ```

#### 安装主题

主题有很多，这里以 Next 为示例
