import Link from "next/link";
import dynamic from "next/dynamic";

const Sc1_Name = dynamic(() => import("@/components/main/section_1/name"));
const Sc1_Carousel = dynamic(() => import("@/components/main/section_1/carousel"), { ssr: false });
const Sc1_More = dynamic(() => import("@/components/main/section_1/more"));

export default function Main() {
	return (
		<>
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
		</>
	);
}
