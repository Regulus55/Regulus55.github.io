import scrollbarHide from "tailwind-scrollbar-hide";

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
        48: "48",
        49: "49",
      },
      backgroundImage: {
        "day-sky": `linear-gradient(
          to bottom,
          #020202 0%,
          #010037 4%,    
          #0D0C59 20%,  
          #201E8D 36%,
          #3863DA 52%,
          #73AEE2 68%,
          #AFD9FF 84%,
          #DBEEFF 100%
        )`,
        "sunset-sky": `linear-gradient(
          to bottom,
          #09090B 0%,
          #010037 4%,
          #43387A 20%,
          #6A4D88 36%, 
          #A55C78 52%, 
          #D67A5A 68%,
          #FFA170 84%,
          #FFE4C4 100%
        )`,

        "blue-sky": `linear-gradient(
          to bottom,
          #010037 0%,    
          #0D0C59 17%,  
          #201E8D 33%,
          #3863DA 50%,
          #73AEE2 66%,
          #AFD9FF 83%,
          #DBEEFF 100%
        )`,
        "orange-sky": `linear-gradient(
          to bottom,
          #C26129 0%,
          #CD672E 17%,
          #D67643 33%,
          #E0855B 50%,
          #EDA174 66%,
          #F8C49E 83%,
          #FFE4C4 100%
        )`,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-greyShadow": {
          textShadow: "4px 4px #757575",
        },
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
