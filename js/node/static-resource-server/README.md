## 静态资源
不会随着服务运行二改变内容： html css js 图片
1. 如果有 index.html打开
2. 否则列出所有文件
3. 请求 路径和磁盘路径一一对应
## 打开方式
file:// 本地文件读取协议  ./xx.png  ok
http://localhost:8080/ http 协议
html 里面引入的资源，都会发出请求

请求： /static/*.* 磁盘位置static目录下面 --对应
1. 拿到 req.url 
2. 读取磁盘下面的同一个位置 返回
3. 静态资源通常会放在某一个目录下面 /static/ 所有请求都以某个目录开头 ……

## 上传图片
### formidable 
处理请求的 
fileds 是input [type="file"] 的提交项
files input[type="file] 提交项
根据 input 的 name 属性来获取值