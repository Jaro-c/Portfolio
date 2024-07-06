import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Jaro.c",
		short_name: "Jaro.c",
		description: "Welcome to Jaro.c's portfolio. Discover my projects and skills.",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#ffffff",
		icons: [{
			src: "/favicon.ico",
			sizes: "any",
			type: "image/x-icon"
		}]
	}
}