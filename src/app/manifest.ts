import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Jaro.c",
		short_name: "Jaro.c",
		description: "Welcome to Jaro.c portfolio. I'm a passionate web and backend developer with experience in Go, Next.js, Node.js, Python, and Express. I've worked on freelance projects involving web scraping and automated messaging. Since 2024, I've expanded my skills in frontend development and continue to learn new technologies. I also work with MongoDB, PostgreSQL, MySQL, Git, JavaScript, HTML, and TailwindCSS. Explore my projects to see innovative solutions in action.",
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