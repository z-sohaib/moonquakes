/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"space": "url('/images/bg.png')",
				"moon": "url('/images/bg2.jpg')",
				"mn": "url('/images/bg-moon.png')",
				"background": "url('/images/background.png')",
			}
		},
	},
	plugins: [],
}
