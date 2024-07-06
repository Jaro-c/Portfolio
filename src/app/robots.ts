import { MetadataRoute } from "next";

const SITE = process.env.URL as string;

export default function robots(): MetadataRoute.Robots {
	return {
		host: SITE,
		rules: {
			userAgent: "*",
			allow: "/"
		},
		sitemap: SITE + "/sitemap.xml"
	}
}