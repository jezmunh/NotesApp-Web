/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // purge: [    
  //   './src/**/*.{js,jsx,ts,tsx,vue}',
  // ],
  theme: {
    extend: {},
  },
  plugins: [],
 };