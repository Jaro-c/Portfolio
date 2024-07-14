"use server";

import path from "node:path";
import fs from "node:fs/promises";

export async function getSocial() {
	const socialPath = path.join(process.cwd(), "src", "libs", "social.json");

	try {
		const file = await fs.readFile(socialPath, "utf-8");
		return JSON.parse(file);
	} catch (error) {
		return false;
	}
}

export async function getSkills() {
	const skillPath = path.join(process.cwd(), "src", "libs", "skills.json");

	try {
		const file = await fs.readFile(skillPath, "utf-8");
		return JSON.parse(file);
	} catch (error) {
		return false;
	}
}