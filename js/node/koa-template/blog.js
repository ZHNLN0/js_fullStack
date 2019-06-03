const Koa = require('koa');
const views = require('koa-views');
const app = new Koa();
const path = require('path')
// ejs 提供了转 html 的中间件
// 模板引擎在那个位置
app.use(
  views(
    path.join(__dirname, './view'),{
      extension: 'ejs'
    }
  )
)
const user = {
  name: 'zhangsan',
  post: [
    {id: 0, title: '流动的 SVG 线条'},
    {id: 1, title: '的地方的'}
  ]
}
const posts = [
  {
    id: 0,
    content: '大打发打发'
  },
  {
    id: 1,
    content: '<strong>士大夫士大夫倒萨的</strong>'
  }
]
app.use(async (ctx) => {
  // req res 
  // /user 用户的主页
  // req.url 解析出请求的地址
  if(ctx.path === '/user') {
    // user ejs
    await ctx.render('user',{
      user
    });
  }else if(ctx.path === '/post') {
    // query 封装的 get 请求的 查询参数?  name=a&age=b {name: a, age: b}
    const {id} = ctx.query;
    const post = posts.find(item => item.id == id);
    await ctx.render('post', {post})
  }
  else {
    ctx.body = '无法处理该路径' + ctx.request.url
  }
})

// .listen 就是 原生 http .listen
app.listen(8080, () => {
  console.log('server is running 8080');
})