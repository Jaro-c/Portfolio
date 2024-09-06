import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface Skill_Props {
	name: string;
	icon: string;
}

interface Skills_Props {
	skills: Skill_Props[];
}

export default function Skills({ skills }: Skills_Props) {
	return (
		<div className="container no-select flex flex-wrap items-center justify-center space-x-[.4rem]">
			{skills.map((skill) => (
				<div key={uuidv4()} className="flex items-center justify-center space-x-[.4rem] px-[.8rem] py-[.5rem] mb-[.4rem] rounded-lg bg-gray-900 group transition-colors duration-300 ease-in-out hover:bg-gray-50">
					<Image className="max-h-5" src={skill.icon} width={20} height={20} alt={skill.name} />
					<span className="text-[.8rem] lg:text-[1rem] text-secondary opacity-80 transition-colors duration-300 ease-in-out group-hover:opacity-100 group-hover:text-black">{skill.name}</span>
				</div>
			))}
		</div>
	);
}