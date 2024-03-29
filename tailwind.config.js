/** @type {import('tailwindcss').Config} */
import { METRICS, TO_HEX_COLORS } from "./src/lib/constants/themeHardcoded";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,jsx,ts,tsx}'",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1920px",
      xxxl: "2560px",
    },
    colors: {
      white: TO_HEX_COLORS.white,
      black: TO_HEX_COLORS.black,
      blue: TO_HEX_COLORS.blue,
      error: TO_HEX_COLORS.red,
      transparent: "transparent",

      // 50 shades of gray
      gray: TO_HEX_COLORS.gray,
      "dark-gray": TO_HEX_COLORS.darkGray,
      "light-gray": TO_HEX_COLORS.lightGray,
      "lightest-gray": TO_HEX_COLORS.lightestGray,
      "white-gray": TO_HEX_COLORS["gray-100"],

      // purple shades
      purple: TO_HEX_COLORS.purple,
      "light-purple": TO_HEX_COLORS.lightPurple,
      "lightest-purple": TO_HEX_COLORS.lightestPurple,
      "mid-purple": TO_HEX_COLORS.midPurple,
      "purple-500": TO_HEX_COLORS["purple-500"],
      "purple-300": TO_HEX_COLORS["purple-300"],
      "purple-100": TO_HEX_COLORS["purple-100"],

      // pink shades
      pink: TO_HEX_COLORS.pink,
      "pink-500": TO_HEX_COLORS["pink-500"],
      "pink-300": TO_HEX_COLORS["pink-300"],
      "pink-100": TO_HEX_COLORS["pink-100"],

      // gray shades
      green: TO_HEX_COLORS.green,
      "green-500": TO_HEX_COLORS["green-500"],
      "green-300": TO_HEX_COLORS["green-300"],
      "green-100": TO_HEX_COLORS["green-100"],
    },
    fontFamily: {
      global: ["Inter", "sans-serif"],
      handwritten: ["Permanent Marker", "cursive"],
      special: ["Sanchez", "serif"],
      inherit: "inherit",
    },
    extend: {
      width: {
        "side-panel": "clamp(11rem,10vw,30rem)",
      },
      padding: {
        edgeBase: METRICS.bodyEdgePadding,
        edgeLg: METRICS.bodyEdgePadding * 1.5,
      },
      fontSize: {
        xxs: ["9px", "13px"],
      },
      gridTemplateColumns: {
        "7": "repeat(7, minmax(0, 1fr))", // Simple 7 column grid
      },
    },
  },
  plugins: [],
};
