module.exports = {
  port: 3112,
  mongo: {
    uri: "mongodb+srv://root:levin-shout-knife-dawn-medal@cluster0-dpkgx.mongodb.net/test?retryWrites=true",
    options: {
      useNewUrlParser: true,
      keepAlive: 3000000,
      reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
      reconnectInterval: 15000, // sets the delay between every retry (milliseconds)
    }
  },
  google: {
    apiKey: 'AIzaSyA0KThnHWFy320F6e2D2kI9xlUnxrRoxII'
  }
};
