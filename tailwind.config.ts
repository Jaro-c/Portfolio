import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "#36373C",
				secondary: "#E3E9FF",
			},
			screens: {
				"3xl": "1920px",
				"4xl": "2560px",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
				},
				screens: {
					"3xl": "1920px",
				},
			},
		},
	},
	plugins: [],
};

export default config;
