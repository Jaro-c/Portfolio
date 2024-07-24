import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";

const Lang = dynamic(() => import("@/components/header/lang"), { ssr: false });
const PC_Menu = dynamic(() => import("@/components/header/menu/pc"), { ssr: false });

export default function Header() {
	return (
		<header className="w-full fixed">
			<div className="lg:mr-[6px]">
				<div className="border-b-2 border-primary">
					<div className="container flex items-center justify-between">
						<div className="flex">
							<div className="my-[1rem] flex items-center justify-center space-x-[1rem]">
								{Array.from({ length: 3 }, () => (
									<span key={uuidv4()} className="border-2 border-primary rounded-full w-[1rem] h-[1rem]"></span>
								))}
							</div>

							<nav className="hidden lg:block">
								<PC_Menu />
							</nav>
						</div>

						<div className="my-[1rem]">
							<Lang />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}