let guns = require('./GUNS.json')

guns.forEach(gun => {
  if(gun.Type === "Revolver"){
  let {Grip_Circumference, Grip_Depth, Grip_Width} = gun
  let object = {Grip_Circumference, Grip_Depth, Grip_Width}
  console.log(object)
  } 
})