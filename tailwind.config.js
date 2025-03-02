// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        softCyan: "hsl(174, 77%, 80%)",
        strongCyan: "hsl(174, 86%, 45%)",
        lightGrayishRed: "hsl(14, 92%, 95%)",
        lightRed: "hsl(15, 100%, 70%)",
        paleBlue: "hsl(226, 100%, 87%)",
        whitePricingBackground: "hsl(0, 0%, 100%)",
        veryPaleBlueBackground: "hsl(230, 100%, 99%)",
        lightGrayishBlueSlider: "hsl(224, 65%, 95%)",
        lightGrayishBlueToggle: "hsl(223, 50%, 87%)",
        grayishBlueText: "hsl(225, 20%, 60%)",
        darkDesaturatedBlue: "hsl(227, 35%, 25%)",
        // Dark mode colors
        darkBackground: "hsl(230, 17%, 14%)",
        darkText: "hsl(228, 34%, 66%)",
        darkCard: "hsl(228, 28%, 20%)",
        darkToggle: "hsl(174, 77%, 65%)",
      },
    },
  },
  plugins: [],
};
