import Link from "next/link";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const SectionTitle = dynamic(() => import("@/components/main/section_title"));

const Sc1_Name = dynamic(() => import("@/components/main/section_1/name"));
const Sc1_Carousel = dynamic(() => import("@/components/main/section_1/carousel"), { ssr: false });
const Sc1_More = dynamic(() => import("@/components/main/section_1/more"));

const Sc2_About = dynamic(() => import("@/components/main/section_2/main"));
const Sc3_Skills = dynamic(() => import("@/components/main/section_3/main"));
const Sc5_Contact = dynamic(() => import("@/components/main/section_5/main"));

export default function Home() {
	const t = useTranslations("Main.Sections");

	return (
		<div className="custom-scrollbar snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth">
			{/* Main - #1 */}
			<section className="w-full h-screen snap-start snap-always flex flex-col items-center">
				<div className="w-full h-full flex flex-col items-center justify-center space-y-[4rem]">
					<Sc1_Name />
					<Sc1_Carousel />
					<Sc1_More />
				</div>

				<Link href="#about" className="mb-[4rem] animate-bounce" aria-label="Scroll to About section">
					<svg className="rotate-90 fill-gray-500 hover:fill-secondary w-[1rem] h-[1rem] md:w-[2rem] md:h-[2rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" />
					</svg>
				</Link>
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
				<p className="text-secondary opacity-80">This section is still under construction...</p>
			</section>

			{/* Contact - #5 */}
			<section id="contact" className="w-full h-screen snap-start snap-always flex flex-col justify-center items-center space-y-[4rem]">
				<SectionTitle title={t("Contact.title")} />
				<Sc5_Contact />
			</section>
		</div>
	);
}
