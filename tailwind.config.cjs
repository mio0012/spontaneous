/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {

    extend: {
      fontFamily: { 
        'body': ['ui-sans-serif', 'system-ui', 'KyivType Sans'],
        'bold': ['KyivType Sans'],
    },
  
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
