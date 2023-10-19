/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			fontFamily: {
				inter: ["Inter"],
			},
			colors: {
				dasar: "#29aae1",
				ungu: "#29AAE1",
				"text-abu": "#535F6C",
				"red-icon": "#F96C6C",
				oren: "#F0864E",
			},
		},
	},
	plugins: [],
};
