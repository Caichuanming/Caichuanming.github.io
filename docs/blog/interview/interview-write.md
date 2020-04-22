---
autoGroup-1: 基础面试题
---

# 面试题 - 手写代码

## 闭包相关

```js
function fun(n, o) {
  console.log(o);
  return {
    fun: function(m) {
      return fun(m, n);
    }
  };
}

var a = fun(0); // undefined
a.fun(1); // 0
a.fun(2); // 0
a.fun(3); // 0

var b = fun(0) // undefined
    .fun(1) // 0
    .fun(2) // 1
    .fun(3) // 2

var c = fun(0) // undefined
    .fun(1) // 0
c.fun(2) // 1
c.fun(3) // 1
```