import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1536px",
        desktop: "1720px",
      },
      fontFamily: {
        primary: ["Inter Tight", "sans-serif"],
      },
      colors: {
        primary: "#5F43B2",
        text: "rgba(255, 255, 255, 0.66)",
        class: "rgba(255, 255, 255, 0.2)",
        tech: "#B2B2B2",
      },
    },
  },
  plugins: [],
};
export default config;
