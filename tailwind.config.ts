import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#727272",
        secondary: "#0c0c0d",
        tertiary: "#111",
        borderColor: "#3e3e3e",
      },
    },
  },
  plugins: [],
};
export default config;
