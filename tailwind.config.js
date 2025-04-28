// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        grayShadow: "6px 6px #757575",
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
