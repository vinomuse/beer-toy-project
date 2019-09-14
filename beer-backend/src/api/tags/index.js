const Router = require('koa-router');
const shortid = require('shortid');

const tags = new Router();

tags.get('/', (ctx, next) => {
  ctx.body = [
    { key: "Lager", name: '라거' },
    { key: "KoreaBeer", name: '국산맥주' },
    { key: "OBBeer", name: 'OB맥주' },
    { key: "Jinro", name: '진로' },
    { key: "Japan", name: '일본' },
    { key: "Lotte", name: '롯데' },
    { key: "Holland", name: '네덜란드' },
    { key: "ForeignBeer", name: '수입맥주' },
    { key: "Tsingtao", name: '칭따오' },
    { key: "China", name: '중국' },
  ]
});

module.exports = tags;