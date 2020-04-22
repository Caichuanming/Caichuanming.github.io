---
autoGroup-9: 基础面试题
---

# 面试题 - Vue

## 生命周期函数

## vue-router导航解析过程

## watch和computed区别

## 兄弟组件通信（父组件A，子组件B、C）

- B传给A，A传给C
- vuex
- eventBus
  - 单独创建一个新的vue实例，通过新的vue实例来完成通信
  - 要在destroyed周期中取消事件监听
  - 缺点是多人开发时，代码可读性比较差