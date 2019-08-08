## 跨域
浏览器的安全策略
  同源策略：
  同协议 域名 端口 同源 不存在跨域的
  不同源  存在跨域
## CORS
  规定了一组 http 的头部字段 作用是：
  允许哪些网站通过浏览器有访问的权限 
1. access-X
2. cookie
3. 浏览器会先 以 OPTIONS 请求方法发起一个预检(preflight) 请求 ，获取一下允许不允许当前的域请求，服务器允许之后才会发起正式的请求.


## 代理
1. nginx


反向代理
http://localhost:9999/api/
http://localhost:8888/api/
不知道 请求的是哪一个服务器

正向代理
A->proxy->goole.com

## iframe + postMessage
1. 前端页面 通过iframe 引入一个后端目录下面的html 
  iframe 是不受同源策略限制的
2. postMessage 用于在两个窗口之间传递数据
3. 前端页面 通过 possMessage 向 后端目录下面的HTML 传递接口需要的请求参数
4. 后端页面 通过 possMessage 向 前端页面 传递接口结果

## iframe + window.name 
iframe 共享 window.name 

没有postMessage 只能借助 中间页面 通知前端页面
window.parent.callback(window.name)

## jsonp 
1. 定义一个回调
2. 将回调函数的名字 告诉后端 后端会返回
    ···js
      回调（res）
      ···
3. script 标签  加载过后 执行 返回的内容 

缺点 ： 只能发起get 请求 .

写一个jsonp 的函数，以promise 的方式调用 
json(url)
.then(res =>{

})