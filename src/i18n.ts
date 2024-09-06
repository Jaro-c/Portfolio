import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "es"];

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as any)) notFound();

	return {
		messages: {
			...(await import(`../languages/${locale}/main.json`)).default,
			...(await import(`../languages/${locale}/NotFound.json`)).default,
		},
	};
});
