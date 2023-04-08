/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         screens: {
            sm: "26.5625em",
            md: "48em",
            lg: "64em",
            xl: "80em",
            xxl: "90em",
         },
         colors: {
            white: "hsl(0, 0%, 100%)",
            blue: "hsl(227, 79%, 59%)",
            splash: "hsl(226, 100%, 88%)",
            "main-txt": "hsla(0, 0%, 26%)",
            "alt-txt": "hsl(227, 48%, 25%)",
            "pale-blue": "hsl(227, 50%, 97%)",
            "very-pale-blue": "hsl(227, 24%, 95%)",
         },
         spacing: {
            '1': '0.6rem',
            '2': '1.25rem',
            '3': '0.6rem',
            '4': '0.6rem',
            '5': '0.6rem',
            '6': '0.6rem',
         },
         fontSize: {
            'xs': '0.6rem',
            'sm': '0.8rem',
            'base': '1rem',
            'xl': '1.25rem',
            '3xl': '1.9rem',
         },
      },
   },
   plugins: [],
};
