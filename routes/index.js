const router = require('koa-router')();

router.use('/videos', require('./levels/video'));

module.exports = router.routes();
