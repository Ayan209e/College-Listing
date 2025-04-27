import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./packages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#F5F3F5",
        gray: "#9C9C9C",
        primary: "#49C5B6",
        "primary-active": "#20575a",
        secondary: "#2563EB",
        black: "#0D1821",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      animation: {
        rippling: "rippling 0.5s ease-out",
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        pulse: "pulse var(--duration) ease-out infinite",
        marquee: "marquee var(--duration) linear infinite",
      },
      keyframes: {
        rippling: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        pulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 var(--pulse-color)" },
          "50%": { boxShadow: "0 0 0 6px var(--pulse-color)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
      boxShadow: {
        searchBar: "0 0 10px 10px rgb(256 256 256 / 6%)",
      },
    },
  },
  plugins: [],
};

export default config;
