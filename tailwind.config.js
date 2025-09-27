/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-blue': '#0093d3',
				'primary-blue-light': '#00b4ff',
				'primary-blue-dark': '#006db3',
			},
		},
	},
	plugins: [],
};
