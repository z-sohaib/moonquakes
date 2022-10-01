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
				"background": "url('/images/background2.png')",

			}
		},
	},
	plugins: [],
}
