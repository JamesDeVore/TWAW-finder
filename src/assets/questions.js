import answers from './answers'
const laser = require('./questionImages/laser.png');
const palmLength = require('./questionImages/palmLength.png')
const palmWidth = require('./questionImages/palmWidth.png')
const picatinnyRail = require('./questionImages/picatinnyRail.jpg')
const thumbSafety = require('./questionImages/thumbSafety.png')
const triggerFinger = require('./questionImages/triggerFinger.png') 
let { 
    yesNoUnsure,
    scale,
    purpose,
    handed,
    budget,
    calibers,
    palmRanges,
    triggerFingerRanges,
    thumbRanges }  = answers
const questions = {
  0: {
    id: 0,
    text: "What will this gun be used for?",
    subtext: "This will help determine the type of gun that best fits you.",
    answers: purpose,
    category: "purpose"
  },
  1: {
    id: 1,
    text: "Are you right handed or left handed?",
    answers: handed,
    category: "handedness"
  },
  2: {
    id: 2,
    text: "Do you require a gun with an external gun safety?",
    subtext:
      "An external gun safety can be a grip safety, or thumb safety, to prevent any accidental firing of the gun",
    answers: yesNoUnsure,
    category: "externalSafety",
    image: thumbSafety
  },
  3: {
    id: 3,
    text: "Do you require a gun with a laser?",
    subtext:
      "A laser assists with aiming by allowing you to see where the gun in aimed before pulling the trigger. Selecting yes will select guns that come factory-equipped with a laser. Selecting yes will take you directly to question 6",
    answers: yesNoUnsure,
    category: "laser",
    image: laser
  },
  4: {
    id: 4,
    text:
      "Do you require a gun with an accessory rail to attach aftermarket accessories?",
    answers: yesNoUnsure,
    subtext:
      "Aftermarket accessories can take the form of flashlights or lasers.",
    category: "accessoryRail",
    image: picatinnyRail
  },
  5: {
    id: 5,
    text:
      "Do you have a reason you are not willing, or are not physically able to carry a gun on your body?",
    answers: yesNoUnsure,
    subtext: "",
    category: "carry"
  },
  6: {
    id: 6,
    text:
      "At this time do you require a specific caliber or are you open to different calibers?",
    subtext:
      "Caliber can affect the recoil, overall weight, and other factors in choosing a gun. Selecting unsure will not eliminate any gun based on caliber. You can select multiple calibers.",
    answers: calibers,
    category: "caliber",
    type: "select"
  },
  7: {
    id: 7,
    text: "How would you rank your trigger finger strength on a scale of 1-4?",
    subtext:
      "With 1 being 'spraying a spray bottle can be difficult sometimes' and 4 being 'I can lift a gallon of water with ease with just my trigger finger'.",
    answers: scale,
    category: "fingerStrength"
  },
  8: {
    id: 8,
    text: "How would you rate your hand strength?",
    subtext:
      "With 1 being 'I have arthritis or significant weakness in my dominant hand which can inhibit my daily tasks' and 4 being 'I have no strength issues with my dominant hand'",
    answers: scale,
    category: "handStrength"
  },
  9: {
    id: 9,
    text: "How would you rate your upper body strength on a scale of 1 to 4?",
    subtext:
      "With 1 being 'I have a very weak upper body' and 4 being 'I have excellent upper body strength'",
    answers: scale,
    category: "armStrength"
  },
  10: {
    id: 10,
    text:
      "What is your palm length from the base of your palm to the bottom of your middle finger?",
    answers: palmRanges,
    subtext:
      "This will help ensure your guns have a grip width that will allow the gun to fit comfortably in your hand",
    category: "palmLength",
    image: palmLength
  },
  11: {
    id: 11,
    text: "With your fingers together, what is the width of your palm",
    subtext:
      "This will help to ensure that the height of the grip will be within your palm so the sun fits securely in your hand.",
    answers: palmRanges,
    category: "palmWidth",
    image: palmWidth
  },
  12: {
    id: 12,
    text: "What is your trigger (index) finger Length?",
    subtext:
      "This is the length of trigger finger from thumb web to the center of your outermost fingertip pad. This ensures your finger can safely and reliably reach the trigger of the gun.",
    answers: triggerFingerRanges,
    category: "triggerFingerLength",
    image: triggerFinger
  },
  13: {
    id: 13,
    text: "What is the length of your thumb?",
    subtext: "This measurement is from the center of your thumb web to the tip of your thumb. This measurement ensures your thumb can securely grip the pistol grip safely and securely.",
    answers: thumbRanges,
    category: "thumbLength"
  },
  14: {
    id: 14,
    text:
      "What will your budget allow for you to spend on the right gun for self-defense?",
    answers: budget,
    category: "budget"
  }
};

export default questions