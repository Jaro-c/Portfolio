import Link from "next/link";
import { useTranslations } from "next-intl";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "404",
	alternates: { canonical: "404" },
};

export default function NotFound() {
	const t = useTranslations("NotFound");

	return (
		<div className="h-full flex items-center justify-center">
			<div className="container flex flex-col items-center justify-center space-y-[2rem]">
				<div className="flex flex-col items-center justify-center">
					<h1 className="select-none text-[2rem] md:text-[4rem] xl:text-[6rem] font-bold bg-gradient-to-b from-gray-50 to-gray-800 bg-clip-text text-transparent">404</h1>
					<p className="select-none text-center text-[1rem] lg:text-[1.5rem] bg-gradient-to-b from-gray-50 to-gray-500 bg-clip-text text-transparent">{t("description")}</p>
				</div>

				<Link passHref href="/">
					<button className="border border-gray-500 rounded-full px-[2rem] py-[.8rem] transition-transform duration-300 ease-in-out hover:scale-110 hover:border-secondary">
						<span className="text-gray-400 text-[1rem] lg:text-[1.2rem]">{t("button")}</span>
					</button>
				</Link>
			</div>
		</div>
	);
}
