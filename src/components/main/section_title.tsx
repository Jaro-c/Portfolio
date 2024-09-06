interface TitleProps {
	title: string;
}

export default function SectionTitle({ title }: TitleProps) {
	return (
		<h2 className="select-none text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[5rem] 3xl:text-[6rem] 4xl:text-[7rem] font-bold bg-gradient-to-b from-gray-50 to-gray-800 bg-clip-text text-transparent">
			{title}
		</h2>
	);
}
