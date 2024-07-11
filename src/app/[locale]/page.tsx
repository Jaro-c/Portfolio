import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import "./styles.module.css";

const Sc1_Name = dynamic(() => import("@/components/main/section_1/name"));
const Sc1_Carousel = dynamic(() => import("@/components/main/section_1/carousel"), { ssr: false });

export default function Home() {
	const t = useTranslations("Main.Sections");

	return (
		<>
		{/* Main - #1 */}
		<section className="w-full h-[100vh]">
			<div className="container h-full flex flex-col items-center justify-center">
				<Sc1_Name />
				<Sc1_Carousel />
			</div>
		</section>

		{/* About Me - #2 */}
		<section className="w-full h-[100vh]">
		</section>

		{/* Hard Skills */}
		<section className="w-full h-[100vh]">
		</section>
		</>
	);
}