import * as cheerio from "cheerio";

export function extractBio(html: string): string | null {
 const $ = cheerio.load(html);

 const bio =
   $(".bio").text() ||
   $(".profile").text() ||
   $("p").first().text();

 return bio?.trim() || null;
}
