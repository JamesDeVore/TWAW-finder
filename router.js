const RvS = require('./controllers/RvS')

module.exports = function (app) {
  app.get('/api/rvsquestions', RvS.getAllQuestions)
  app.post('/api/selectguntype', RvS.selectType)
}