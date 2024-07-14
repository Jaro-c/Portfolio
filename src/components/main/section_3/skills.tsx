import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface Skill_Props {
	name: string;
	url: string;
}

interface Skills_Props {
	skills: Skill_Props[];
}

export default function Skills({ skills }: Skills_Props) {
	return (
		<div className="container flex flex-wrap items-center justify-center space-x-[.4rem]">
			{skills.map((skill) => (
				<div key={uuidv4()} className="flex items-center justify-center space-x-[.4rem] px-[.8rem] py-[.5rem] mb-[.4rem] rounded-lg bg-gray-900 group hover:bg-gray-50">
					<Image className="no-select max-h-5" src={skill.url} width={24} height={24} alt={skill.name} />
					<span className="select-none text-[.8rem] lg:text-[1rem] text-secondary opacity-80 group-hover:opacity-100 group-hover:text-black">{skill.name}</span>
				</div>
			))}
		</div>
	);
}