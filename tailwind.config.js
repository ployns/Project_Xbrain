module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F2BCFB",
          80: "#855CF8",
          100: "#503795",
        },
        white: {
          100: "#FFFFFF",
        },
        gray: {
          50: "#D9D9D9",
          100: "#4F4F4F",
        },
        black: {
          100: "#000000",
        },
      },

      fontFamily: {
        body: ["sans-serif", "Noto Sans Thai"],

        black: {
          100: "#000000",

          fontFamily: {
            body: ["sans-serif", "Noto Sans Thai"],
          },
        },

        fontFamily: {
          body: ["sans-serif", "Noto Sans Thai"],
        },
      },
    },

    plugins: [],
  },
};
