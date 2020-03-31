# 缓存

浏览器请求网站资源后留下的资源副本

## 缓存的作用

- 缓解服务器压力
- 提升性能（重复资源不用再请求，加快访问速度）
- 减少带宽消耗

## 缓存分类

- 私有缓存
- 共享缓存

## 浏览器缓存

- **Cache-Control(HTTP 1.1)**
  - `private` 该资源只能被浏览器缓存
  - `public` 该资源既能被浏览器缓存，也能被中间人（如代理服务器、CDN缓存）
  - `max-age` 该资源能被缓存的最大时间
  - `no-cache` 不缓存过期资源，相当于`max-age=0`，缓存立刻过期。需要与服务器确认资源是否更新
  - `no-store` 不准缓存
- **Expires(HTTP 1.0)**
  - 标识了缓存的具体过期时间，来控制资源何时过期。通过设置 `Expires` 可以启用缓存。不过需要注意 `Expires` 的值是格林威治时间（Greenwich Mean Time, GMT），不是本地时间
  - `Expires=0`时，仍然会启用缓存，只是过期时间为0，即马上就会过期

> **Cache-Control** 优先级高于 **Expires**

## 缓存位置

![浏览器缓存](/img/cache.png)
浏览器缓存优先级：`Service Worker` -> `Memory Cache` -> `Disk Cache` -> `Push Cache`

## 缓存方式

- 强制缓存
  - `Cache-Control`
  - `Expires`
- 协商缓存
  - `Last-Modified，If-Modified-Since`
  - `ETag、If-None-Match`

### 为何使用ETag

- 一些文件也许会周期性的更改，但是他的内容并不改变(仅仅改变的修改时间)，这个时候我们并不希望客户端认为这个文件被修改了，而重新GET
- 某些文件修改非常频繁，比如在秒以下的时间内进行修改，(比方说1s内修改了N次)，If-Modified-Since能检查到的粒度是s级的，这种修改无法判断(或者说UNIX记录MTIME只能精确到秒)
- 某些服务器不能精确的得到文件的最后修改时间

> 一般缓存的资源都是GET请求的，因为像是POST和Option请求大部分请求内容和返回结果都不一样
