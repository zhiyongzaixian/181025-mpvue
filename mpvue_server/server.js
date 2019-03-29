let Koa = require('koa');
let KoaRouter = require('koa-router');
let {get} = require('./utils/request')

const app = new Koa();

// 中间键 路由器
const router = new KoaRouter();

router.get('/', async (ctx, next) => {
  // 1. 接收请求参数
  // let {req} = ctx.query;
  // 2. 处理请求数据 ---> 调用数据库数据 ---> 操作数据(CRUD)
  // 3. 返回响应数据
  ctx.body = '服务器返回的数据2222'
});

let datas = require('./datas/data.json');
router.get('/searchBooks', async (ctx, next) => {
  // 1 获取请求参数
  let req = ctx.query.req;
  // 2. 处理数据
  let result;
  // result = await get(`https://api.douban.com/v2/book/search?q=${req}`);
  result = datas;
  ctx.body = result;
  
});

// 开发者的密钥，密钥动态生成
const appKey = '4a9ed63ce3ff7701485a2ccb27dd1ba1';
// 开发者的appId
const appId = 'wx0db5ac6ea2aca4fe';

router.get('/getOpenId', async (ctx, next) => {
  // 获取请求参数
  let code = ctx.query.code;
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appKey}&js_code=${code}&grant_type=authorization_code`
  // 对接微信接口
  let result = await get(url);
  console.log(result.data, typeof result.data);
  ctx.body = JSON.parse(result.data).openid;
})


app
  .use(router.routes()) // 声明使用路由
  .use(router.allowedMethods()) // 允许使用路由的方法


app.listen('3000', () => {
  console.log('服务器启动成功');
  console.log('服务器地址: http://localhost:3000');
})