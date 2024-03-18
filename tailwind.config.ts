import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages / **/*. { js, ts, jsx, tsx, mdx }",
    "./components / ** / *. { js, ts, jsx, tsx, mdx }",
    "./app/**/*. { js, ts, jsx, tsx, mdx }",
  ],
  theme: {
    extend: {
      background: {
        "radial gradient": "gradient radial (var (-tw-gradient-stops))",
        "gradient-conique":
          "gradient conique (à partir de 180 degrés à 50% 50%, var (-- tw-gradient-stops))",
      },
    },
     screens: {
      '«2xl»': {'max': '«1535px»'},
      // => @media (largeur max: 1535px) { ... }

      'xl': {'max': '«1279px»'},
      // => @media (largeur max: 1279px) { ... }

      'lg': {'max': '«1023px»'},
      // => @media (largeur max: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (largeur max: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (largeur max: 639px) { ... }
    },
  },
  plugins: [],
};
export default config;
