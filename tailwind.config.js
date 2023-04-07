/** @type {import('tailwindcss').Config} */
import containerQueries from "@tailwindcss/container-queries";
import tailwindScrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [containerQueries, tailwindScrollbarHide],
};
