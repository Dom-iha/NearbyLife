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
            fade: 'hsl(0, 0%, 21%)',
            white: "hsl(0, 0%, 100%)",
            blue: "hsl(227, 79%, 59%)",
            splash: "hsl(226, 100%, 88%)",
            "main-txt": "hsla(0, 0%, 26%)",
            "alt-txt": "hsl(227, 48%, 25%)",
            "pale-blue": "hsl(227, 50%, 97%)",
            'light-blue': 'hsl(227, 71%, 66%)',
            "very-pale-blue": "hsl(227, 24%, 95%)",
         },
         // spacing: {
         //    1: "0.6rem",
         //    2: "1.25rem",
         //    3: "1.5rem",
         //    4: "1.75rem",
         //    5: "2rem",
         //    6: "2.25rem",
         // },
         fontSize: {
            xs: "0.6rem",
            sm: "0.8rem",
            xl: "1.25rem",
            "3xl": "1.9rem",
         },
      },
   },
   plugins: [require("@tailwindcss/forms")],
};
