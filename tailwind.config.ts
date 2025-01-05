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
      md: { max: "768px" },
      sm: { max: "639px" },
      "min-sm": { min: "640px" },
      "min-md": { min: "769px" },
      "min-lg": { min: "1151px" },
      "min-xl": { min: "1401px" },
      "tablet-lg": { min: "1024px", max: "1150px" },
      "mid-tab": { min: "820px", max: "1023px" },
      "small-tab": { min: "768px", max: "819px" },
      "big-phone": { min: "639px", max: "767px" },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
