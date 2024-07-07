import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

/* SEO */
import type { Metadata } from "next";
export async function generateMetadata({ params: { locale }}: { params: { locale: string }}): Promise<Metadata> {
	const t = await getTranslations({ locale, namespace: "Main.Metadata" });
	
	return {
		metadataBase: new URL(process.env.URL as string),
		title: {
			template: "%s | " + t("title"),
			default: t("title")
		},
		description: t("description"),
		keywords: t("keywords"),
		category: "portfolio",
		alternates: {
			canonical: "/",
			languages: {
				"en": "/en",
				"es": "/es"
			}
		},
		openGraph: {
			url: process.env.URL + "/" + locale,
			locale: locale,
			type: "website",
			siteName: t("title"),
			title: t("title"),
			description: t("description"),
			images: [{ url: "/logo.webp", width: 1024, height: 1024, alt: "Jaro.c Logo - 1024" }]
		},
		robots: {
			index: true,
			follow: true,
			nocache: false
		},
		icons: {
			icon: "/favicon.ico",
			apple: "/apple-touch-icon.png",
			other: {
				rel: "apple-touch-icon-precomposed",
				url: "/apple-touch-icon.png"
			}
		}
	};
}

/* FONT */
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

/* Components */
import "@/app/globals.css";

export default async function RootLayout({ children, params: { locale }}: { children: React.ReactNode; params: { locale: string }; }) {
	const messages = await getMessages({ locale: locale });

	return (
		<html lang={locale}>
			<body className={`${poppins.className} antialiased min-h-screen flex`}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<main className="flex-grow">{children}</main>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}