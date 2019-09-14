const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');

const bodyParser = require('koa-bodyparser');

const PORT = process.env.PORT || 8000;

app.use(bodyParser());

router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})