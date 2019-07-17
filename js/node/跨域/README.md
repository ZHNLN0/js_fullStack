## 跨域
浏览器的安全策略
同源策略： 同协议 域名 端口 不存在跨域
不同源  存在跨域



## CORS 
  规定了一组 http 的头部字段作用是允许哪些网站通过浏览器有访问的权限

  1. access-X 
  2. cookie
  3. 浏览器会先以OPTIONS 请求方式发起一个预检 (preflight) 请求，获取一下允不允许当前的域请求，服务器允许之后才会发起正式的请求
  

## 代理

  1. nginx 
  反向代理：http://localhost:9999/api 不知道请求的是哪个服务器
  正向代理：

## iframe + postMessage 

  1. 前端页面 通过 iframe 引入一个后端目录下的html，iframe 是不受同源策略限制的
  2. postMessage 用于在两个窗口之间的传递数据
  3. 前端页面 通过 postMessage 向后端目录下的html 传递接口需要的请求参数
  4. 后端页面 通过 postMessage 向前端页面 传递 接口结果

## iframe + window.name
  ifram 共享 window.name 

## jsonp 
  1. 定义一个回调
  2. 将回调函数的名字告诉后端 后端会返回 。。。.js
      回调(res)
  3. script 标签 加载过后执行 返回内容

  写一个 jsonp 的函数 以promise 的方式调用
  jsonp(url)
  .then(res => {
    
  })