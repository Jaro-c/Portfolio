import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const SectionTitle = dynamic(() => import("@/components/main/section_title"));

const Sc1_Main = dynamic(() => import("@/components/main/section_1/main"));
const Sc2_About = dynamic(() => import("@/components/main/section_2/main"));
const Sc3_Skills = dynamic(() => import("@/components/main/section_3/main"));
const Sc4_Projects = dynamic(() => import("@/components/main/section_4/main"));
const Sc5_Contact = dynamic(() => import("@/components/main/section_5/main"));

export default function Home() {
	const t = useTranslations("Main.Sections");

	return (
		<div className="custom-scrollbar snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth">
			{/* Main - #1 */}
			<section className="w-full h-screen snap-start snap-always flex flex-col items-center">
				<Sc1_Main />
			</section>

			{/* About Me - #2 */}
			<section id="about" className="w-full h-screen snap-start snap-always flex flex-col justify-center items-center space-y-[4rem]">
				<SectionTitle title={t("About.title")} />
				<Sc2_About />
			</section>

			{/* Hard Skills - #3 */}
			<section className="w-full h-screen snap-start snap-always flex flex-col justify-center items-center space-y-[2rem] lg:space-y-[4rem]">
				<SectionTitle title={t("Skills.title")} />
				<Sc3_Skills />
			</section>

			{/* Projects - #4 */}
			<section className="w-full h-screen snap-start snap-always flex flex-col justify-center items-center space-y-[4rem]">
				<SectionTitle title={t("Projects.title")} />
				<Sc4_Projects />
			</section>

			{/* Contact - #5 */}
			<section id="contact" className="w-full h-screen snap-start snap-always flex flex-col justify-center items-center space-y-[4rem]">
				<SectionTitle title={t("Contact.title")} />
				<Sc5_Contact />
			</section>
		</div>
	);
}
