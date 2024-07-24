"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function Lang() {
	const router = useRouter();
	const locale = useLocale();
	
	const changeLocale = locale === "en" ? "es" : "";

	const switchLocale = () => {
		const { hash } = window.location;
		router.push(`/${changeLocale}${hash}`);
	};

	return (
		<button className="flex" onClick={switchLocale}>
			<Image className="no-select opacity-50 transition-opacity ease-in-out duration-300 hover:opacity-100" src="/lang.svg" width={24} height={24} alt="Change language" />
		</button>
	);
}