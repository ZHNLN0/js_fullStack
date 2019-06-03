const Koa = require('koa');

// 应用的实例
const app = new Koa();
// 很多个实例
const admin = new Koa();
// ctx 封装了 req res
app.use(async (ctx, next) => {
  console.log(1);
  // koa 没有回应 自己处理了 Not found
  // 交给下一个中间件
  await next();
  console.log(2);
})
app.use(async(ctx, next) => {
  await next();
  console.log(4);
  
})
// 输出 1 3 2 
app.use(async (ctx) => {
  console.log(3)
  ctx.body = `hello Koa`;
})

app.listen(3000, () => {
  console.log('Server is running 3000');
});
admin.listen(4000, () => {
  // console.log('Server is running 3000');
});
