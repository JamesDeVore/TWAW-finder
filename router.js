
const {responseProcessing} = require('./controllers/responseProcessing')

module.exports = function (app) {
  app.post('/api/responseProcessing',responseProcessing)
}