const Schema = require('validate');
const videoSchema = require('./schemas/video');

module.exports = {
  schemas: {
    video: new Schema(videoSchema)
  },
  validate(data, schema) {
    let errors = schema.validate(data);
    if (errors.length) {
      let error = new Error();
      error.message = 'Validation error';
      error.errors = errors.map(error => error.message);
      throw error;
    }
    return errors;
  }
};
