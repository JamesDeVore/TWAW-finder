const RvS = require('./controllers/RvS')
const Revolver = require('./controllers/Revolver')

module.exports = function (app) {
  app.get('/api/rvsquestions', RvS.getAllQuestions)
  app.get('/api/revolverQuestions', RvS.getRevolverQuestions)
  app.post('/api/selectguntype', RvS.selectType)
  app.post('/api/selectrevolver', Revolver.findIdealRevolver)
}