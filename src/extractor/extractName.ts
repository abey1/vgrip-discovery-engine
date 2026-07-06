import * as cheerio from "cheerio";

export function extractName(html: string): string | null {
 const $ = cheerio.load(html);

 return $("h1").first().text().trim() || null;
}
