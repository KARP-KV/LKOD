import striptags from "striptags";

export function sanitizeText(str: string): string {
	return striptags(str);
}

export function sanitizeArray(str: string | string[]): string[] {
	return Array.from(Array.isArray(str) ? str : [str]).map((s) =>
		sanitizeText(s).trim()
	);
}
