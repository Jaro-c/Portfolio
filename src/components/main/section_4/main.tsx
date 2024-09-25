import dynamic from "next/dynamic";

const Template = dynamic(() => import("@/components/main/section_4/template"));

export default function Projects() {
	return (
		<>
			<Template />
		</>
	);
}
