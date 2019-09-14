const Router = require('koa-router');
const data = require('../../data.json');

const purchase = new Router();

purchase.post('/', (ctx, next) => {
  let data = null;

  try {
    // data.beers.filter(item => {
    //   ctx.request.body.map(beer => {
    //     if (item.id === beer.id) {
    //       totalCount += beer.count;
    //       totalPrice += item.price * beer.count;
    //     }
    //   })
    // });
    data = { ...ctx.request.body }
  } catch (err) {
    return ctx.throw(500, err);
  }

  ctx.body = data;
});

module.exports = purchase;