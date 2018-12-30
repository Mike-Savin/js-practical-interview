const Youtube = require('simple-youtube-api');
const config = require('config');

const youtube = new Youtube(config.google.apiKey);

module.exports = {
  async search(query, limit = 10, options = {}) {
    let response = await youtube.searchVideos(query, limit, options);
    return response.map(video => ({
      id: video.id,
      title: video.title,
      thumbnails: video.thumbnails
    }));
  }
};
