import Link from "next/link";
import { useTranslations } from "next-intl";

export default function More() {
	const status = true;
	const t = useTranslations("Main.Sections.Main");

	return (
		<div className="select-none flex flex-col items-center space-y-[2rem]">
			<Link href="#contact" passHref>
				<button className="border border-gray-500 rounded-full px-[4rem] py-[.8rem] transition-transform duration-300 ease-in-out hover:scale-110 hover:border-secondary">
					<span className="text-gray-400 text-[1rem] lg:text-[1.2rem]">{t("Contact")}</span>
				</button>
			</Link>

			<div className="flex items-center space-x-[.6rem]">
				<div className="relative flex items-center justify-center w-[.6rem] h-[.6rem]">
					<div className={`animate-ping absolute w-full h-full rounded-full opacity-80 ${status ? "bg-green-400" : "bg-red-400"}`}></div>
					<div className={`w-[.6rem] h-[.6rem] rounded-full ${status ? "bg-green-400" : "bg-red-400"}`}></div>
				</div>

				<p className="bg-gradient-to-b from-gray-50 to-gray-500 bg-clip-text text-transparent">{status ? t("Status.On") : t("Status.Off")}</p>
			</div>
		</div>
	);
}
