var whitelist = ['http://example1.com', 'http://example2.com']
//urls allowed to make API calls. update this once we know what the frontend URL is
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

module.exports = corsOptions