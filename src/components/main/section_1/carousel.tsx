"use client";

import { v4 as uuidv4 } from "uuid";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState, useCallback } from "react";

import style from "./styles.module.css";

export default function Carousel() {
	const t = useTranslations("Main.Sections.Main");
	const text = useMemo(() => t("Carousel").split(","), [t]);
	const changeInterval = 5 * 1000;

	const [currentIndex, setCurrentIndex] = useState(0);
	const [prevIndex, setPrevIndex] = useState(text.length - 1);

	const updateIndex = useCallback(() => {
		setPrevIndex(currentIndex);
		setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
	}, [currentIndex, text.length]);

	useEffect(() => {
		const intervalId = setInterval(updateIndex, changeInterval);

		return () => clearInterval(intervalId);
	}, [updateIndex, changeInterval]);

	return (
		<div className="w-full overflow-hidden">
			<div className="relative h-[4rem] md:h-[8rem]">
				{text.map((item, index) => (
					<div key={uuidv4()} className={`absolute w-full h-full flex justify-center items-center opacity-0 ${index === currentIndex ? style["slide-in"] : index === prevIndex ? style["slide-out"] : ""}`}>
						<h2 className={`text-center leading-none text-[2rem] md:text-[4rem] xl:text-[6rem] font-bold bg-gradient-to-b from-gray-50 to-gray-700 bg-clip-text text-transparent py-[1rem]`}>{item}</h2>
					</div>
				))}
			</div>
		</div>
	);
}