---
autoGroup-4: 基础面试题
---

# 面试题 - JavaScript基础

## 浏览器输入地址到页面渲染完毕，经历了哪些过程

## 数组的常用方法

## 闭包

跟作用域紧密相关。js的作用域是函数作用域，跟其它语言的块作用域不太相同。根据浏览器垃圾回收机制，函数在执行完成后，是要将作用域回收的，
所以闭包可以让你从内部函数访问外部函数作用域，作用就是能够打破函数作用域的限制，使在函数外部能够访问函数内部变量

缺点：不合理的闭包会占用内存，造成内存泄漏

## 原型链

每一个构造函数都有一个原型对象`prototype`，原型对象有一个内部指针指向其构造函数，构造函数的实例有一个指针`_proto_`指向构造函数的原型对象

## 继承

### 原型链继承

缺点：包含引用类型的值，会被所有实例共享。多个实例继承，对引用类型的值会被篡改
```js
function Parent() {}

function Child() {}

Child.prototype = new Parent()
```

### 借用构造函数继承

优点：可以在子类型中向父类传参

缺点：父类原型上的方法不可用

```js
function Parent() {}

function Child() {
    Parent.call(this)
}
```

### 组合继承

综合了原型链和构造函数继承的优点，又避免了两者的缺陷，但会在创建子类实例的时候调用两次父类实例

```js
function Parent() {}

function Child() {
    Parent.call(this)
}

Child.prototype = new Parent()
```

### 原型式继承

类似工厂模式，但其实是对于父类的一个浅拷贝

缺点同原型链继承一样，实例属性会共享，无法传参
```js
function objCreate(parent) {
    function f() {};
    function.prototype = parent;
    return new f();
}

// 此函数在ES5中等同于Object.create()
```

### 寄生式继承

不能做到函数复用而降低效率
```js
function createChild(parent) {
    const child = Object.create(parent)
    return child
}
```

### 寄生组合式继承

通过借用构造函数来继承属性，通过原型链的混成形式来继承方法
```js

function Parent(){}

function Child(){
    Parent.call(this)
}
function inherit(child, parent) {
    const obj = Object.create(parent);
    obj.constructor = child;
    child.prototype = obj;
}

inherit(Child, Parent)
```

### ES6 - extend

### ES5继承和ES6继承的区别

- ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上（Parent.call(this)）.
- ES6的继承有所不同，实质上是先创建父类的实例对象this，然后再用子类的构造函数修改this。因为子类没有自己的this对象，所以必须先调用父类的super()方法，否则新建实例报错。

## this

- 普通函数中`this`永远指向最后调用它的对象。没有调用对象，就指向`window`，严格模式下，是`undefined`，会报错
- 箭头函数的`this`始终指向函数定义时的this，非执行时

## call、apply、bind

- 都能改变普通函数中的this指向
- 区别在于传入的参数不同，第一个参数都是要改变到的对象。后面的参数call是一个个参数列举，而apply是所有的参数组成一个数组作为第二个参数
- bind是创建一个新的待执行函数，这个新函数是原函数的拷贝

```js
Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new error('不是函数');
    }

    const args = [...arguments].sclie(1);
    const that = this;
    return function () {
        return that.call(context, ...arg, ...arguments)
    }
}
```

### new

- 创建一个新对象
- 将新对象原型绑定到
```js
function myNew(item) {
    const newObj1 = Object.create(item.prototype);
    const newObj2 = item.apply(newObj1, [...arguments].sclie(1));
    typeof newObj2 === 'object' && newObj2 !== null ? newObj2 : newObj1;
}
```

## 函数声明与函数表达式区别



## 函数节流（throttle）与函数防抖（debounce）

- 节流函数：（以时间为切入点）指定时间间隔内，只触发一次函数
- 防抖函数：（以事件为切入点）只有任务触发达到指定时间的时候，才执行函数

### 常见应用场景

- 节流（throttle）：
    - 页面滚动
    - 鼠标点击事件
- 防抖（debounce）：
    - 搜索联想
    - window的resize事件

代码示例：

```JavaScript
// throttle
function throttle(fn, interval = 300) {
    let canRun = true;
    return function () {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            canRun = true;
        }, interval);
    };
}
// debounce
function debounce(fn, interval = 300) {
    let timeout = null;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, interval);
    };
}
```

## Event Loop（JavaScript事件循还机制）

JavaScript是单线程语言。只有一个主线程`main thread`和一个执行栈`call-task`，
同步任务会在执行栈中按照先后顺序等待主线程执行，异步任务在有结果后会将
注册时的回调函数放入任务队列中等待执行栈空闲时被主线程执行。

其中任务队列又分为宏任务和微任务

- 宏任务：setTimeout、setInterval
- 微任务：promise

微任务队列空了之后，才会执行下一个宏任务，如果这时有未执行的微任务，那么当微任务队列清空后，再执行下一个宏任务

## 常用的ES6新特性

- let、const
- Class
- 箭头函数
- 模板字符串
- promise
- 解构赋值
- 扩展运算符
- for...of...
- Set去重

## 箭头函数与普通函数区别

- 箭头函数语法更加简洁、清晰
- 箭头函数不会创建自己的this，箭头函数的this是继承自定义函数所处的外层执行环境
- 箭头函数的this的指向不会改变，call、apply、bind无法改变this指向
- 箭头函数不能作为构造函数使用
- 箭头函数没有自己的arguments，继承外层函数的arguments
- 箭头函数没有自己的原型对象
- 箭头函数不能作为Generator函数使用，不能使用yeild关键字

## Promise与async await
