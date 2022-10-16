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
			keyframes: {
				fadein: {
					from: { opacity: '0%' },
					to: { opacity: '100' },
				},
			},
			Animation: {
				fadein: 'fadein 150ms ease-in-out',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
