interface TitleProps {
	title: string;
}

export default function SectionTitle({ title }: TitleProps) {
	return <h2 className="text-[2rem] md:text-[4rem] xl:text-[6rem] font-bold bg-gradient-to-b from-gray-50 to-gray-800 bg-clip-text text-transparent">{title}</h2>;
}