module.exports = {
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  thumbnails: {
    medium: {
      url: {
        type: String,
        required: true
      }
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
};
