/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"DarkBlue": "#2d314d",
				"LimeGreen": "#31d35c",
				"BrightCyan": "#2bb7da",
				"GrayishBlue": "#9698a6",
				"LightGrayishBlue": "#f3f4f6",
				"VeryLightGray": "#fafafa",
				"White": "#ffffff",
			},
			fontFamily: {
				"PublicSans": ["Public Sans", "sans-serif"],
			}
		},
	},
	plugins: [],
}
