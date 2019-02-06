const {GunType} = require('../jsonData/QUESTIONS.json')

exports.getAllQuestions = (req,res) => {
  res.send(GunType)  
}

exports.selectType = (req,res) => {
  let tally = {
    Revolver:0,
    Semi:0,
  }
  let responseObj = req.body;
  //checking to see if they have a preference, and give that more weight
  if(responseObj.preference === "Semi" || responseObj.preference === "Revolver"){
    tally[responseObj.preference] += 10
  }
  //tally the responses for either type of gun
  for(let i in responseObj){
    if(responseObj[i] === "Semi"){
      tally.Semi++
    } else if (responseObj[i] === "Revolver"){
      tally.Revolver++
    }
  }
res.send(tally)
  //here i need to tally the values for the various responses
}