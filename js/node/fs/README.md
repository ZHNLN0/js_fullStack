node 让 js 来到后端
服务器 linux
文件系统操作 fs 

没有DOM
文件读取 要花时间 定位文件参数1，打开文件，将文件内容读到内存中 输出到命令行
js是单线程语言 花时间 js 中就要异步
1. callback   fs.readFile(path,'utf-8',function(err,data){})
2. promise 
    分开，Promise 是类 是用于畜栏里异步问题的类，为了防止回调地狱，看到好事问题就用出一个 Promise 实例
    resolve 将控制权交给 then 并且将结果 resolve(data) reject 失败 catch{ }  