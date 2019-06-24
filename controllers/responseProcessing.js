const path = require('path')
const csv = require("csvtojson");

const responseProcessing = async (req,res) => {
  //first thing I have to do is load in the csv data
  const csvFilePath = path.join(__dirname,'../','gunData','GunData.csv');
  let idealGun = req.body;
  const jsonArray = await csv().fromFile(csvFilePath);
  const gunData = jsonArray.map(item => {
    return JSON.parse(JSON.stringify(item))
  })
  //now to process each gun and give it a score according to the responses
  gunData.forEach(gun => {
    gun;
    gun.score = 0;
    gun.disqualified = false;
    idealGun;
    let { budget,
          caliber,
          externalSafety,
          handedness,
          standardLaser,
          fingerStrength,
          triggerFingerLength,
          thumbLength,
          handStrength
    } = idealGun
    //first, check to make sure it is under the budget
    if(parseFloat(gun.MSRP) > parseFloat(budget)){
      gun.disqualified = true;
      //stop checking and move on
      return
    }
    //"At this time do you require a specific caliber?"
    if(caliber === null){
      //don't have a preference, maybe prioritize lower ones?

    }
    else{
      if(gun.Caliber !== caliber){
        //disqualify only if they want one and it doesn't show up
        gun.disqualified = true;
      }
  }
    //"Do you require the gun to have an alternate safety?"
    if(externalSafety && gun.AlternateSafety === "No"){
      //they want an alternate, and the gun does not have one available
      gun.disqualified = true;
    }
    //"Do you prefer a gun with a left handed option?"
    if(handedness == "Left" && gun.LeftHandedOption === "No"){
      //gun does not have a left handed option
      gun.disqualified = true;
    } 
    //"Do you want a gun that comes standard with a laser?"
    if(standardLaser){
      //disqualify guns without one
      if(gun.LaserStd == "No"){gun.disqualified = true;}
    }
    //What is your trigger finger length?
    if(parseFloat(triggerFingerLength) >= gun.BackstrapToCenter || triggerFingerLength === null){
      gun.score++;
    }
    //What is the length of your thumb, from the center of your thumb web to the tip of your thumb?
    //for mag release
    if(parseFloat(thumbLength) >= gun.BackstrapToMagRelease || thumbLength === null){
      gun.score++;
    }
    //How would you rank your trigger finger strength on a scale of 1-4?
    if(fingerStrength * 3.125 >= parseFloat(gun.TriggerPull)){
      gun.score++;
    }
    if(handStrength * 10.75 >= parseFloat(gun.WeightLoaded)){
      gun.score++;
    }
    if(handStrength * 2.5 >= parseFloat(gun.SlideTension)){
      gun.score++;
    }
    
  })
  let eligibleGuns = gunData.filter(gun => !gun.disqualified);
  eligibleGuns.sort((a,b) => a.score < b.score? 1:-1);
  eligibleGuns;
  res.send(JSON.stringify(eligibleGuns))

}
module.exports = {responseProcessing}