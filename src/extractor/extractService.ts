import { extractName } from "./extractName.js";
import { extractEmail } from "./extractEmail.js";
import { extractBio } from "./extractBio.js";

export function extractProfile(html: string, url: string, keyword: string) {
 const name = extractName(html);
 const email = extractEmail(html);
 const bio = extractBio(html);

 return {
   name,
   email,
   bio,
   source_url: url,
   domain: new URL(url).hostname,
   keyword,
   discovered_at: new Date(),
 };
}
