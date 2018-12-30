const youtube = require('../libs/youtube');
const validator = require('../libs/validator');
const Video = require('../models/video');

module.exports = {
  async create(ctx) {
    validator.validate(ctx.request.body, validator.schemas.video);
    ctx.body = await Video.create(ctx.request.body);
  },

  async destroy(ctx) {
    await Video.remove({_id: ctx.params.id});
    ctx.body = 'ok';
  },

  async getHistory(ctx) {
    ctx.body = await Video.find({}, null, {sort: {createdAt: -1}})
  },

  async search(ctx) {
    const query = ctx.query.query;
    ctx.body = await youtube.search(query);
  }
};
