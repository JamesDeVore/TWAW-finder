
const responseProcessing = async (idealGun, gunData) => {
  console.log(idealGun);
  gunData.forEach(gun => {
    if (gun["GUN"] === "Question") {
      gun.disqualified = true;
      return;
    }

    gun.disqualified = false;
    gun.calScore = 0;
    gun.bonusPoints = 0;

    let {
      budget,
      caliber,
      externalSafety,
      handedness,
      armStrength,
      carry,
      purpose,
      fingerStrength,
      accessoryRail,
      triggerFingerLength,
      thumbLength,
      laser,
      handStrength
    } = idealGun;
    //now to cycle through all the criteria

    if (budget < parseInt(gun["MSRP"])) {
      gun.disqualified = true;
      return;
    } else if (parseInt(gun["MSRP"]) - parseInt(budget) === 0) {
      gun.bonusPoints++;
    }
    if (purpose === "Home Defense") {
      if (gun["HomeDefense"]) {
        gun.disqualified = true;
        return;
      }
    }
    if (handedness === "Left") {
      //only disqualify guns if the person is left handed
      if (gun["LeftHanded"] === "no") {
        gun.disqualified = true;
        return;
      }
    }
    if (externalSafety !== null) {
      externalSafety = externalSafety ? "yes" : "no";
      if (externalSafety !== gun["safety"]) {
        gun.disqualified = true;
        return;
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
    if (carry && gun["SEMI"] === "yes") {
      gun.disqualified = true;
      return;
    }
    let unsureCal = caliber.find(selection => selection === "Unsure");
    if (!unsureCal) {
      if (caliber.length > 0 && caliber.length !== 5) {
        //only care if there are calibers selected ant not all are selected
        let foundCal = caliber.find(desiredCal => desiredCal === gun.caliber);
        if (foundCal) {
          gun.bonusPoints += 2;
          // gun.calScore = 1;
          return;
        }
      }
    }
    if (fingerStrength < parseInt(gun["TriggerPull"])) {
      gun.disqualified = true;
      return;
    } else if (fingerStrength === parseInt(gun["TriggerPull"])) {
      gun.bonusPoints++;
    }
    if (handStrength < parseInt(gun["Recoil"])) {
      gun.disqualified = true;
      return;
    } else if (handStrength === parseInt(gun["Recoil"])) {
      gun.bonusPoints++;
    }
    if (armStrength < parseInt(gun["GunWeightUnloaded"])) {
      gun.disqualified = true;
      return;
    } else if (armStrength === parseInt(gun["GunWeightUnloaded"])) {
      gun.bonusPoints++;
    }
    //PALM LENGTH is in red, not being considered right now
    if (triggerFingerLength < parseInt(gun["TriggerLength"])) {
      gun.disqualified = true;
      return;
    } else if (triggerFingerLength === parseInt(gun["TriggerLength"])) {
      gun.bonusPoints++;
    }
    if (parseInt(thumbLength) < parseInt(gun["MagazineRelease"])) {
      gun.disqualified = true;
      return;
    } else if (thumbLength === parseInt(gun["MagazineRelease"])) {
      gun.bonusPoints++;
    }
    if(gun.bonusPoints > 0){
      debugger;
    }
  });

  let eligibleGuns = gunData.filter(gun => !gun.disqualified);

  // eligibleGuns.sort((a, b) => (b.calScore > a.calScore ? 1 : -1));
  eligibleGuns.sort((a, b) => (b.bonusPoints > a.bonusPoints ? 1 : -1));

  console.log(eligibleGuns);

  if(eligibleGuns.length >= 7) {
    eligibleGuns.length = 7;
  }
  return eligibleGuns;
};
export default responseProcessing;
