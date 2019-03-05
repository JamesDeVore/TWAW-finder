const Questions = require('./controllers/questions')

module.exports = function (app) {
  app.get('/api/questions', Questions.getAllQuestions)
}