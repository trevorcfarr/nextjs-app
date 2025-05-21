/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		fontFamily: {
			sans: ["Avenir", "sans-serif"],
			serif: ["Merriweather", "serif"]
		},
		extend: {
			backgroundImage: {
				"header-tile": 'url("/images/header_tile.jpg")'
			}
		}
	},
	plugins: []
};
