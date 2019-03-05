/*=====================================================
as of 3/5/19 not being used
=====================================================*/

// let allGuns = require('../jsonData/GUNS.json')

// exports.findIdealRevolver = (req,res) => {
//   let idealGun = req.body
//   let revolversToConsider = []
//   allGuns.forEach(guns => {
//    if(guns.Type === "Revolver"){
//      guns.score = 0;
//      revolversToConsider.push(guns)
//    }
//   })
//   //array of just revolvers
//   revolversToConsider.forEach(gun => {
//     if(gun.MSRP < idealGun.Budget){
//       gun.score += 5
//     }
//     if(parseFloat(gun.Caliber) == parseFloat(idealGun.Caliber)){
//       gun.score++
//     }
//     //whatever DOA means
//     if(gun.Frame_Material == idealGun.FrameMaterial){
//       gun.score++
//     }
//     if(gun.Grip_Safety == idealGun.Grip_Safety){
//       gun.score++
//     }
//     //somehow manage size

//     //sight radius == high vis?

//     if(gun.Laser == idealGun.Laser){
//       gun.score++
//     }
//     //manage max weight??

//     //how to handle being on body or not?

//     if(idealGun.RLHanded == "Right" && gun.LH == false){
//       gun.score++
//     }
//     if(idealGun.RLHanded == "Left" && gun.LH == true){
//       gun.score++
//     }
//     if(idealGun.Shrouded == gun.Revolver_Hammer_Shrouded){
//       gun.score++
//     }
//   })
//   revolversToConsider.forEach(test => {
//     console.log(test.score, test.Model)
//   })
// }
