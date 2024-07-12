import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutMe() {
	const t = useTranslations("Main.Sections.About");

	return (
		<div className="container flex flex-col xl:flex-row items-center justify-evenly lg:space-y-[2rem] xl:space-y-0">
			<div className="hidden lg:block">
				<Image className="rounded-full shadow-[0px_0px_20px_1px_#645180]" src="/me.webp" width={300} height={300} alt="Jaro.c | Alejandro" />
			</div>

			<p className="lg:w-4/5 xl:w-3/5 2xl:w-2/5 text-secondary text-justify opacity-80 whitespace-pre-line">
				{t.rich("description", {
					name: (chunks) => <span className="font-semibold underline decoration-2">{chunks}</span>
				})}
			</p>
		</div>
	);
}