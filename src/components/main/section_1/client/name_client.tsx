"use client";

import { useEffect, useState } from "react";

export default function Names() {
	const names = ["Alejandro R.", "Jaro.c"];
	const typingSpeed = 100;
	const changeInterval = 2 * 1000;

	const [displayedText, setDisplayedText] = useState("");
  	const [charIndex, setCharIndex] = useState(0);
  	const [nameIndex, setNameIndex] = useState(0);
  	const [isDeleting, setIsDeleting] = useState(false);

  	useEffect(() => {
		const handleTyping = () => {
			const currentName = names[nameIndex];

			if (isDeleting) {
				setDisplayedText(currentName.substring(0, charIndex - 1));
				setCharIndex((prev) => prev - 1);
			} else {
				setDisplayedText(currentName.substring(0, charIndex + 1));
				setCharIndex((prev) => prev + 1);
			}
		};

		if (!isDeleting && charIndex === names[nameIndex].length) {
			const timeoutId = setTimeout(() => setIsDeleting(true), changeInterval);
			return () => clearTimeout(timeoutId);
		}

		if (isDeleting && !charIndex) {
			setIsDeleting(false);
			setNameIndex((prevIndex) => (prevIndex + 1) % names.length);
		} else {
			const timeoutId = setTimeout(handleTyping, typingSpeed);
			return () => clearTimeout(timeoutId);
		}
	}, [charIndex, isDeleting, nameIndex, names, typingSpeed, changeInterval]);

	return (
		<>
		<span className="font-semibold">{displayedText}</span>
		<span className="animate-pulse text-white font-extralight">|</span>
		</>
	);
}