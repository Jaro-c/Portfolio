interface TitleProps {
	title: string;
}

export default function Skill_Title({ title }: TitleProps) {
	return <h3 className="select-none text-center text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] bg-gradient-to-b from-gray-50 to-gray-500 bg-clip-text text-transparent">{title}</h3>;
}
