---
autoGroup-1: React
---
# 生命周期

![生命周期](/img/react-生命周期.png)

::: tip 分为三个阶段：

- 挂载阶段
- 更新阶段
- 卸载阶段

v16.4+的版本废除了 ~~`componentWillMount`~~、~~`componentReceiveProps`~~、~~`componentWillUpdate`~~ 等三个生命周期函数
:::

## 挂载阶段

- constructor
  - 初始化`state`对象
  - 给自定义方法绑定this
- getDerivedStateFromProps
  - 这是一个静态方法，不能在函数里使用this
  - 接收新的state，可以与旧的state对比
- render
  - 返回渲染的东西
- componentDidMount
  - 组件完成装载后调用，此时可以获取到真实的`DOM`

## 更新阶段

- getDreviedStateFromProps
  - 可参考挂在阶段的此函数
- shouldComponentUpdate
  - 两个参数`nextProps`和`nextState`
  - 此方法用来自定义是否重新渲染
  - 默认结果返回true
  - 在未来版本中，即使返回false也有可能会导致重新渲染
- render
- getSnapshotBeforeUpdate
  - 有两个参数，分别是`preProps`和`preState`
  - 必须和`componentDidUpdate`合用
  - 如果不想要返回值，一定要返回`null`，否则会报错
- componentDidUpdate
  - 三个参数，分别是`preProps`、`preState`和`snapshot`

## 卸载阶段

- componentWillUnmount
  - 在这个函数里可以进行清除定时器，取消网络请求等操作
  - 不要在这里使用setState方法，因为此时组件已经不会重新渲染