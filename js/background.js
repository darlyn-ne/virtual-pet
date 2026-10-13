const backgrounds = {
  //////////////////////////////////////////////// spring
  spring: {

    morning: [

    ],

    afternoon: [

    ],

    evening: [

    ],

    night: [

    ]

  },
  /////////////////////////////////////////////// summer
  summer: {

    morning: [

    ],

    afternoon: [

    ],

    evening: [

    ],

    night: [

    ]

  },
  /////////////////////////////////////////////// autumn
  autumn: {

    morning: [

    ],

    afternoon: [

    ],

    evening: [

    ],

    night: [

    ]

  },
  /////////////////////////////////////////////// winter
  winter: {

    morning: [

    ],

    afternoon: [

    ],

    evening: [

    ],

    night: [

    ]

  }
};

let currentBackground = 0;
// Function to switch to the next background on click
function nextBackground() {
  currentBackground++;

  if (currentBackground >= backgrounds.length) {
    currentBackground = 0;
  }

  setBackground();
}