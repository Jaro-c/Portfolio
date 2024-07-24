import { v4 as uuidv4 } from "uuid";

import { getSocial } from "@/utils/read_files";

interface Social {
	name: string;
	url: string;
	icon: string;
}

export default async function Social_Network() {
	const socials: Social[] = await getSocial();
	if (!socials) return null;

	return (
		<div className="fixed z-50 right-[1rem] bottom-[1rem] lg:right-[2rem] lg:bottom-[2rem]">
			<ul className="flex flex-col lg:flex-row lg:space-x-[1rem]">
				{socials.filter((social) => social.icon && social.name && social.url).map((social) => (
					<li key={uuidv4()} className="animate-pulse hover:animate-none">
						<a className="inline-block rounded-2xl border-2 border-gray-700 border-r-gray-500 border-b-gray-500 transition-all duration-200 ease-in group hover:shadow-[0px_0px_15px_1px_#fff]" href={social.url} target="_blank" rel="noopener noreferrer" title={social.name}>
							<svg className="fill-gray-600 transition-all duration-200 ease-in group-hover:fill-white m-[1rem] w-[1rem] h-[1rem] lg:w-[1.5rem] lg:h-[1.5rem]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d={social.icon}></path></svg>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}