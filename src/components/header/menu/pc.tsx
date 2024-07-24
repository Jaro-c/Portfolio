"use client";

import userWidth from "@/utils/getWidth";

export default function PC_Menu() {
	const width = userWidth();

	return (
		<>
		{(width >= 1024) && (
			<></>
		)}
		</>
	);
}