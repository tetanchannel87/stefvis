/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    require("path").join(__dirname, "index.html"),
    require("path").join(__dirname, "src/**/*.{ts,tsx}"),
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(240 5% 18%)",
        input: "hsl(240 5% 18%)",
        ring: "hsl(240 5% 64%)",
        background: "hsl(0 0% 4%)",
        foreground: "hsl(0 0% 98%)",
        primary: {
          DEFAULT: "hsl(0 0% 98%)",
          foreground: "hsl(240 6% 10%)",
        },
        secondary: {
          DEFAULT: "hsl(240 4% 16%)",
          foreground: "hsl(0 0% 98%)",
        },
        destructive: {
          DEFAULT: "hsl(0 63% 31%)",
          foreground: "hsl(0 0% 98%)",
        },
        muted: {
          DEFAULT: "hsl(240 4% 16%)",
          foreground: "hsl(240 5% 65%)",
        },
        accent: {
          DEFAULT: "hsl(240 4% 16%)",
          foreground: "hsl(0 0% 98%)",
        },
        card: {
          DEFAULT: "hsl(240 5% 8%)",
          foreground: "hsl(0 0% 98%)",
        },
        "muted-foreground": "hsl(240 5% 65%)",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: 0, transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: 1, transform: "translate(-50%, -40%) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
