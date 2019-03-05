const Questions = require('../jsonData/QUESTIONS.json')

exports.getAllQuestions = (req, res) => {
  //not the best solution but it works?
  let parsed = JSON.parse(JSON.stringify(Questions));
  res.send(parsed.final)
}