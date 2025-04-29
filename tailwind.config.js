module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        grayShadow: "6px 6px #757575",
      },
      backgroundImage: {
        "day-sky": `linear-gradient(
          to bottom,
          #010037 0%,    
          #0D0C59 17%,  
          #201E8D 31%,
          #3863DA 48%,
          #73AEE2 64%,
          #AFD9FF 75%,
          #DBEEFF 87%,
          #DBEEFF 100%
        )`,
        "sunset-sky": `linear-gradient(
          to bottom,
          #010037 0%,
          #43387A 17%,
          #804466 31%,
          #9E4C54 48%,
          #C85B4C 64%, 
          #D67A5A 75%,
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
