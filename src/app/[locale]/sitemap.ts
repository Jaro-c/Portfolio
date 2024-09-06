import { MetadataRoute } from "next";

const SITE = process.env.URL as string;
const pathnames = ["/"];

const defaultLocale = "en" as const;
const locales = ["en", "es"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
	function getURL(pathname: string, locale: string) {
		return `${SITE}/${locale}${pathname === "/" ? "" : pathname}`;
	}

	return pathnames.map(pathname => ({
		url: getURL(pathname, defaultLocale),
		lastModified: new Date(),
		priority: 1,
		alternates: {
			languages: Object.fromEntries(locales.map(locale => [locale, getURL(pathname, locale)])),
		},
	}));
}
