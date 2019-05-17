前端安全
 
表单
form -> onsubmit -> url
POST data: 
  email: 'zm@163.com'
  password: '123456'
  
后端 登陆过程sql查找的过程  sql 语法报错，服务器出错
用户的输入不可信任
password' sql 的提前结束或多了一个 500    编码解码
登陆账号
SELECT * from users
  WHERE email = 'user@mail.com'
AND password = 'password%27'