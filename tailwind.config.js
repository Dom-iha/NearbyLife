/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				sm: '26.5625em',
				md: '48em',
				lg: '64em',
				xl: '80em',
				xxl: '90em',
			},
			colors: {
				fade: 'hsl(0, 0%, 24%)',
				gray: 'hsl(0, 0%, 48%)',
				darkgray: 'hsl(0, 0%, 26%)',
				lightgray: 'hsl(0, 0%, 68%)',

				splash: 'hsl(226, 100%, 88%)',
				choose: 'hsl(227, 24%, 95%)',
				deepblue: 'hsl(227, 48%, 25%)',
				input: 'hsl(227, 50%, 97%)',
				logo: 'hsl(227, 15%, 92%)',

				blue: 'hsl(227, 88%, 65%)',
				darkblue: 'hsl(227, 79%, 59%)',
				paleblue: 'hsl(227, 71%, 66%)',
				lightblue: 'hsl(227, 87%, 78%)',
			},
			fontSize: {
				xs: '0.6rem',
				sm: '0.8rem',
				xl: '1.25rem',
				xxl: '1.9rem',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
