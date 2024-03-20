/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      "«2xl»": { max: "«1535px»" },
      // => @media (largeur max: 1535px) { ... }

      xl: { max: "«1279px»" },
      // => @media (largeur max: 1279px) { ... }

      lg: { max: "«1023px»" },
      // => @media (largeur max: 1023px) { ... }

      md: { max: "991px" },
      // => @media (largeur max: 767px) { ... }

      sm: { max: "639px" },
      // => @media (largeur max: 639px) { ... }
    },
  },
  plugins: [],
};
