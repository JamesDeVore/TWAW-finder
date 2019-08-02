const answers = {
  yesNoUnsure: [
    { text: "Yes", value: true },
    { text: "No", value: false },
    { text: "Unsure", value: null }
  ],
  scale: [
    { text: "1", value: 1 },
    { text: "2", value: 2 },
    { text: "3", value: 3 },
    { text: "4", value: 4 }
  ],
  yesNoNoPreference: [
    { text: "Yes", value: true },
    { text: "No", value: false },
    { text: "Unsure", value: null }
  ],
  purpose: [
    { text: "Home Defence", value: "Home Defence" },
    { text: "Concealed Carry", value: "Concealed Carry" },
    { text: "Unsure", value: null }
  ],
  handed: [
    { text: "Right", value: "Right" },
    { text: "Left", value: "Left" },
    { text: "Unsure / Ambidextrous", value: null }
  ],
  calibers: [
    { text: "22", value: "22" },
    { text: ".380", value: "380" },
    { text: "0.38", value: "0.38" },
    { text: "9mm", value: "9" },
    { text: ".40", value: "40" },
    { text: ".45", value: "45" },
    { text: "Unsure", value: "Unsure" }
  ],
  palmRanges: [
    { text: '0" - 2.5"', value: 1 },
    { text: '2.6" - 3"', value: 2 },
    { text: '3.1" - 3.5"', value: 3 },
    { text: '3.6" +', value: 4 }
  ],
  triggerFingerRanges: [
    { text: '0" - 2.5"', value: 1 },
    { text: '2.6" - 3"', value: 2 },
    { text: '3.1" - 3.5"', value: 3 },
    { text: '3.6" - 4,4" +', value: 4 }
  ],
  thumbRanges: [
    { text: '0" - 1.9"', value: "1" },
    { text: '2.0" - 2.25"', value: "2" },
    { text: '2.26" - 2.49"', value: "3" },
    { text: '2.5" +', value: "4" }
  ],
  budget: [
    { text: "$0-$300", value: 1 },
    { text: "$301-$500", value: 2 },
    { text: "$501-$700", value: 3 },
    { text: "$701-$1000", value: 4 },
    { text: "$1000+", value: 5 }
  ]
};

export default answers