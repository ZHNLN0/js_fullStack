- MVVM  前端新贵
    Model 数据  Page({data:{
        legends:[]
    }})
    View  视图
    WXML  
    VM    {{}}  wx:for ..... 

- MVC 经典的web开发模式
    Model => SQL
    View  => 静态页面
    Controller => 路由

- WebServer 软件程序
    Web服务器硬件运行webServer程序的 ip http 协议  http://127.0.0.1:8080   端口 不止一个服务
    3306 MySQL
    80 Web 服务
    http
        .createServer(function(request,response) {
            response.end('hello world')
        })
        .listen(3000)
    
    request 用户 N    Web Server 一直在3000端口上伺服
    request 就能找到店，每位用户到达，触发 事件，调用 createServer 回调函数， request用户身份，
    response ？相应请求 响应请求 http 响应后就断开
    