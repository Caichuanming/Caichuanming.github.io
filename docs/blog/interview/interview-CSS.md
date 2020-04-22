---
autoGroup-3: 基础面试题
---

# 面试题 - CSS

## 如何理解BFC/IFC

## 常见的布局方式

## CSS3动画属性

## 如何画三角形

```css
/* 向上箭头 */
.triangle-up{
    width: 0;
    height: 0;
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 1px solid #000;
}
/* 向下箭头 */
.triangle-down{
    width: 0;
    height: 0;
    border-top: 1px solid #000;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
}
/* 相左箭头 */
.triangle-left{
    width: 0;
    height: 0;
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid #000;
    border-bottom: 1px solid transparent;
}
/* 向右箭头 */
.triangle-right{
    width: 0;
    height: 0;
    border-top: 1px solid transparent;
    border-left: 1px solid #000;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
}
```

## 居中布局

### 固定宽高

- 绝对定位
- margin

### 不定宽高

- 绝对定位 && transform
- flex

## 移动端适配方案

- meta标签
- rem相对根元素单位
- 媒体查询