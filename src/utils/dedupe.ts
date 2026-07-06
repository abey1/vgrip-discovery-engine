const seen = new Set<string>();

export function dedupeByEmail(email: string) {
 if (seen.has(email)) return false;

 seen.add(email);
 return true;
}
