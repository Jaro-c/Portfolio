import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const Names = dynamic(() => import("@/components/main/section_1/client/name_client"), { ssr: false });

export default function Name() {
	const t = useTranslations("Main.Sections.Main");

	return (
		<div className="text-white">
			<h1 className="text-[1rem] md:text-[2rem]">{t("Name")}<Names /></h1>
		</div>
	);
}