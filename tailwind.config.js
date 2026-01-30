/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    // This is the "magic" line for your specific setup
    "./java-fullstack-portfolio/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
