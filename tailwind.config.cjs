/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				blob: 'blob 7s infinite',
				smallBlob: 'smallBlob 6s infinite',
			},
			fontFamily: {
				montserrat: ['Montserrat'],
			},
			colors: {
				lightRed: '#C00000',
				darkRed: '#700000 ',
				darkGray: '#303030',
			},
			keyframes: {
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)',
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)',
					},
					'100%': {
						transform: 'tranlate(0px, 0px) scale(1)',
					},
				},
				smallBlob: {
					'0%': {
						transform: 'scale(1)',
					},
					'33%': {
						transform: 'scale(1.1)',
					},
					'66%': {
						transform: 'scale(0.9)',
					},
					'100%': {
						transform: 'scale(1)',
					},
				},
			},
		},
	},
	plugins: [],
};
