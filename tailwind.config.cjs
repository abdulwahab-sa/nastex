/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat'],
			},
			colors: {
				lightRed: '#C00000',
				darkRed: '#700000 ',
			},
		},
	},
	plugins: [],
};
