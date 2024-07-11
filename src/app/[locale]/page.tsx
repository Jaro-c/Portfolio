import dynamic from "next/dynamic";

const Sc1_Name = dynamic(() => import("@/components/main/section_1/name"));
const Sc1_Carousel = dynamic(() => import("@/components/main/section_1/carousel"), { ssr: false });

export default function Home() {
	return (
		<div className="custom-scrollbar snap-y snap-mandatory h-screen overflow-y-auto">
			{/* Main - #1 */}
			<section className="w-full h-full snap-start snap-always">
				<div className="container h-full flex flex-col items-center justify-center">
					<Sc1_Name />
					<Sc1_Carousel />
				</div>
			</section>

			{/* About Me - #2 */}
			<section className="w-full h-full snap-start snap-always">
			</section>

			{/* Hard Skills - #3 */}
			<section className="w-full h-full snap-start snap-always">
			</section>

			{/* Contact - #4 */}
			<section className="w-full h-full snap-start snap-always">
			</section>
		</div>
	);
}