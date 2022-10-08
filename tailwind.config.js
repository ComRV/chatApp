/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				main: "url('/img/background.jpg')",
			},
			fontFamily: {
				roboto: "'Roboto', sans-serif",
				intertight: "'Inter Tight', sans-serif",
			},
		},
	},
	plugins: [],
};
