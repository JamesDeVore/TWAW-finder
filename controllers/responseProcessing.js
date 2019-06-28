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
    if(gun["GUN"] === "Question"){
      gun.disqualified = true;
      return
    }
    gun;
    gun.disqualified = false;
    idealGun;
    let { budget,
          caliber,
          externalSafety,
          handedness,
          armStrength,
          carry,
          purpose,
          standardLaser,
          fingerStrength,
          accessoryRail,
          triggerFingerLength,
          thumbLength,
          palmLength,
          laser,
          handStrength
    } = idealGun
    //now to cycle through all the criteria
    
    if(budget < parseInt(gun["MSRP"])){
      gun.disqualified = true;
      return
    };
    if(purpose === "Home Defense"){
      if(gun["HomeDefense"]){
        gun.disqualified = true;
        return
      }
    }
    if (handedness === "Left") {
      //only disqualify guns if the person is left handed
      if (gun["LeftHanded"] === "no") {
        gun.disqualified = true;
        return
      }
    }
    if(externalSafety !== null){
      externalSafety = externalSafety ? "yes":"no"
      if(externalSafety !== gun["safety"]){
        gun.disqualified = true;
        return
      }
    }
    if (laser !== null) {
      laser = laser ? "yes" : "no";
      if (laser !== gun["Laser"]) {
        gun.disqualified = true;
        return;
      }
    }
    if (accessoryRail !== null) {
      accessoryRail = accessoryRail ? "yes" : "no";
      if (accessoryRail !== gun["AccessoryRail"]) {
        //this is currently slightly off because of null values
        gun.disqualified = true;
        return;
      }
    }
    if(carry && gun["SEMI"] === "yes"){
      gun.disqualified = true;
      return;
    }
    let unsureCal = caliber.find(selection => selection === "Unsure")
    if(!unsureCal){
      if (caliber.length > 0 && caliber.length !== 5) {
        //only care if there are calibers selected ant not all are selected
        let foundCal = caliber.find(desiredCal => desiredCal === gun.caliber);
        if (!foundCal) {
          gun.disqualified = true;
          return
        }
      }
    }
    if(fingerStrength < parseInt(gun["TriggerPull"])){
      gun.disqualified = true;
      return
    }
    if (handStrength < parseInt(gun["Recoil"])) {
      gun.disqualified = true;
      return;
    }
    if (armStrength < parseInt(gun["GunWeightUnloaded"])) {
      gun.disqualified = true;
      return;
    }
    //PALM LENGTH is in red, not being considered right now
    if(triggerFingerLength < parseInt(gun["TriggerLength"])){
      gun.disqualified = true;
      return;
    }
    if(parseInt(thumbLength) < parseInt(gun["MagazineRelease"])){
      gun.disqualified = true;
      return
    }
    
  })
  let eligibleGuns = gunData.filter(gun => !gun.disqualified);
  eligibleGuns;
  res.send(JSON.stringify(eligibleGuns))

}
module.exports = {responseProcessing}