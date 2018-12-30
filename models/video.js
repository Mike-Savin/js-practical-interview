const mongoose = require('mongoose');
const videoSchema = require('../libs/validator/schemas/video');

module.exports = mongoose.model('video', videoSchema);
