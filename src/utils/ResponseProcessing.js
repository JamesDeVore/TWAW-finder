import * as fs from "fs";
// const csv = require('csvtojson');


const responseProcessing = async (idealGun, gunData) => {
    
  gunData.forEach(gun => {
    if(gun["GUN"] === "Question"){
      gun.disqualified = true;
      return
    }
    
    gun.disqualified = false;

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
  //add the bang, and dont unshift
  
  let eligibleGuns = gunData.filter(gun => !gun.disqualified);
  // if(eligibleGuns.length >= 6) {
  //   eligibleGuns.length = 6;
  // }
  // console.log(eligibleGuns)
  return eligibleGuns
  
}
export default responseProcessing