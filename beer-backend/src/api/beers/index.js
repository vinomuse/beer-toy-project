const Router = require('koa-router');
const data = require('../../data.json');

const beers = new Router();

beers.get('/', (ctx, next) => {
  ctx.body = data.beers;
});

module.exports = beers;