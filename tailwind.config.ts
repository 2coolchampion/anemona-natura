import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "background-light": "#E7E4E1",
        "background-dark": "#DCD7D2",
        "background-green-light": "#CFD5C4",
        "green-dark": "#011e0e",
        "green-dark-hover": "#012310",
        // ""
        "green-light": "#066437",
        "green-light-hover": "#08864A",
        "green-super-light": "#627c5a",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
}
export default config
