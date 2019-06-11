const Koa = require('koa');
const Router=require('koa-router');
const koaSession = require('koa-session');
const staticServer = require('koa-static');
const path = require('path');
const session_signed_Keys = ['secret'];
const app = new Koa();
const router = new Router();
app.keys = session_signed_Keys;

const sessionConfig = {
  key: 'sessionID', // 放在 cookie 里面
  maxAge: 1000 * 10,
  rolling: true // 每次响应的时候 刷新有效期
}
const session = koaSession(sessionConfig, app);
app.use(staticServer(path.join(__dirname, './static')))
app.use(session);
// /user 用户页面
// /post 
// if(ctx.path === '/user'){}
// else if(ctx.path === '/post'){}
// router.get('/',async(ctx)=>{
//     ctx.type=`html`;
//     ctx.body=`
//     <a href="/user">/user</a>
//     <a href="/post">/post</a>
//     `
// })

router.get('/user',async(ctx)=>{
    ctx.cookies.set('name','value',{
       path:'/user',
       httpOnly: false
    })
    //
    ctx.cookies.set('name1','value1')
    ctx.cookies.set('name2','value2',{
        path:'/user/abc'
    })
    ctx.body='user';
})
router.get('/post',async(ctx)=>{
    ctx.body='post';
})
router.get('/user/abc',async(ctx)=>{
    ctx.body='/user/abc';
})
router.get('/login', async (ctx) => {
  const {name, password} = ctx.query;
  if (name === 'test' && password === 'test') {
    ctx.session.login = true;
    ctx.type = 'html',
    ctx.body = `<a href="/testlogin">测试登陆状态</a>`
  }else {
    ctx.session.login = false;
    ctx.body = 'error name and password';
  }
})
router.get('/testlogin', async (ctx) => {
  if (ctx.session.login) {
    ctx.body = '登陆成功';
  }else {
    ctx.redirect('/')
  }
})
app.use(router.routes());
app.listen(9999,()=>{
    console.log('server is running 9999');
})