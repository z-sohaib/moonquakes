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
				"space": "url('/images/bg.jpg')",
				"moon": "url('/images/bg2.jpg')",
				"background": "url('/images/background2.png')",
			}
		},
	},
	plugins: [],
}
