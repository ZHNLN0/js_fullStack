const Koa = require('koa');
const app = new Koa()
const koaStatic = require('koa-static');
const path = require('path');
const router = require('koa-router')();

app.use(koaStatic(
  path.join(__dirname, './static/')
))

app.use(async(ctx, next) => {
  // 允许哪个域名请求
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
  ctx.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  ctx.set('Access-Control-Allow-Headers', 'X-custom')
  ctx.set('Access-Control-Allow-Credentials', true)   
  // cookie 是否允许携带 cookie true -> Access-Control-Allow-Origin 需要一个详细的域名 而不是 *
  await next()
})
router.get('/api/post', async function (ctx) {
  // console.log(ctx.headers);
  console.log('cookies', ctx.cookies.get('name'));
  ctx.body = [
    { title: 'node.js 入门到精通', createTime: '2018-12-12' },
    { title: 'php 入门到精通', createTime: '2018-11-11' },
  ]
});
router.get('/api/jsonp', async (ctx) => {
  const cb = ctx.request.query.callback
  const person = {
    name: 'name1', age: 18
  }
  ctx.body = `${cb}(${JSON.stringify(person)})`
})
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(9999, () => {
  console.log('server is running 9999');
});
