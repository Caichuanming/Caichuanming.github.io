---
autoGroup-1: Vue
---
# 生命周期

- 初始化
  - beforeCreate
    - vue实例初始化完成，数据监测和事件监听未完成
  - created
    - 数据初始化完成
    - 一般推荐接口请求数据放在这个周期中
- 挂载
  - beforeMounte
    - 默认组件挂载完成
  - mounted
    - 真实dom挂载完成
- 更新
  - beforeUpdate
  - updated
- 卸载
  - beforeDestroy
  - destroyed
- keep-alive缓存
  - activated
  - deactivated
- 错误捕获
  - errorCaptured

