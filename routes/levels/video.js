const router = require('koa-router')();
const videoController = require('../../controllers/video');

router.get('/', videoController.search);
router.get('/history', videoController.getHistory);
router.post('/', videoController.create);
router.delete('/:id', videoController.destroy);

module.exports = router.routes();
