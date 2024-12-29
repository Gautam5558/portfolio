import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    // i added this cause i wanted a desktopn first approach
    // rather than a mobile first approach which tailwind uses
    screens: {
      xl: { max: "1400px" },
      lg: { max: "1150px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      "min-sm": "640px",
      "min-md": "768px",
      "min-lg": "1024px",
      "min-xl": "1280px",
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
