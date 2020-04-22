# HTTP状态码

- 1**（信息响应）
- 2**（成功响应）
- 3**（重定向）
- 4**（客户端响应）
- 5**（服务端响应）

## 常见状态码

- 200（OK）请求成功
- 301（Moved Permanently）永久重定向
- 302（Found）临时重定向
- 304（Not Modified）缓存
- 307（Temporary Redirect）临时重定向
- 308（Permanent Redirect）永久重定向
- 400（Bad Request）
  - 语意有误，当前请求无法被服务器理解
  - 请求参数有误
- 403（Bad Request）服务器拒绝执行请求
- 404（Not Found）服务器找不到资源
- 405（Method Not Allowed）请求方法错误
- 500（Internal Server Error）服务器错误
- 502（Bad Gateway）错误网关，响应超时。错误原因是因为服务器当前链接过多，导致服务器无法响应
- 503（Service Unavailable）服务器为准备好，常见服务器宕机或接口错误
- 504（Gateway Timeout）服务器超时

相关资料：
> https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status

## 几个重定向区别

### 301、308

301和308都是永久重定向，都表示请求资源被永久的移动到了另外的URI上，未来的任何请求都将引用新的URI。区别在于308不准许浏览器将原本POST请求重新定义到GET请求。

### 302、303、307

- 302基本准许各种重定向
- 303只准许其它请求重定向到GET请求
- 307不准许POST重定向到GET请求

相关资料：
> https://zhuanlan.zhihu.com/p/60669395