module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        grayShadow: "6px 6px #757575",
      },
      zIndex: {
        5: "5",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
        25: "25",
        26: "26",
        27: "27",
        28: "28",
        29: "29",
        45: "45",
        46: "46",
        47: "47",
      },
      backgroundImage: {
        "day-sky": `linear-gradient(
          to bottom,
          #010037 0%,    
          #0D0C59 17%,  
          #201E8D 34%,
          #3863DA 51%,
          #73AEE2 68%,
          #AFD9FF 85%,
          #DBEEFF 100%
        )`,
        "sunset-sky": `linear-gradient(
          to bottom,
          #010037 0%,
          #43387A 17%,
          #6A4D88 34%, 
          #A55C78 51%, 
          #D67A5A 68%,
          #FFA170 87%,
          #FFE4C4 100%
        )`,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-grayShadow": {
          textShadow: "6px 6px #757575",
        },
      });
    },
  ],
};

// #010037 0%,
// #43387A 17%,
// #9E4C54 34%,
// #C85B4C 51%,
// #D67A5A 68%,
// #FFA170 87%,
// #FFE4C4 100%
