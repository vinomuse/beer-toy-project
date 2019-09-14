const Router = require('koa-router');

const api = new Router();
const beers = require('./beers');
const tags = require('./tags');
const purchase = require('./purchase');

api.use('/beers', beers.routes());
api.use('/tags', tags.routes());
api.use('/purchase', purchase.routes());

module.exports = api;