import dynamic from "next/dynamic";
import { getTranslations } from "next-intl/server";

import { getSkills } from "@/utils/read_files";

const Title = dynamic(() => import("@/components/main/section_3/title"));
const Skills = dynamic(() => import("@/components/main/section_3/skills"));

export default async function Hard_Skills() {
	const t = await getTranslations("Main.Sections.Skills");
	const skills = await getSkills();

	return (
		<div className="w-full flex flex-col items-center justify-center space-y-[1.5rem]">
			<div className="flex flex-col items-center justify-center space-y-[.6rem]">
				<Title title={t("skills.Languages")} />
				<Skills skills={skills.Languages} />
			</div>

			<div className="flex flex-col items-center justify-center space-y-[.6rem]">
				<Title title={t("skills.Styling")} />
				<Skills skills={skills.Styling} />
			</div>

			<div className="flex flex-col items-center justify-center space-y-[.6rem]">
				<Title title={t("skills.Frameworks")} />
				<Skills skills={skills.Frameworks} />
			</div>

			<div className="flex flex-col items-center justify-center space-y-[.6rem]">
				<Title title={t("skills.Databases")} />
				<Skills skills={skills.Databases} />
			</div>

			<div className="flex flex-col items-center justify-center space-y-[.6rem]">
				<Title title={t("skills.Tools")} />
				<Skills skills={skills.Tools} />
			</div>
		</div>
	);
}