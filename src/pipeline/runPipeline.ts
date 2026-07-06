import { keywords } from "../config/keywords.js";
import { searchGoogle } from "../search/searchService.js";
import { filterUrls } from "../filter/urlFilter.js";
import { loadPage } from "../crawler/pageLoader.js";
import { extractProfile } from "../extractor/extractService.js";
import { saveProfile } from "../db/repo.js";
import { dedupeByEmail } from "../utils/dedupe.js";

export async function runPipeline() {
 console.log("[Pipeline] Starting run...");

 for (const keyword of keywords) {
   console.log(`[Pipeline] Keyword: ${keyword}`);

   const results = await searchGoogle(keyword);

   const urls = filterUrls(results);

   for (const url of urls.slice(0, 20)) {
     try {
       const html = await loadPage(url);

       const profile = await extractProfile(html, url, keyword);

       if (!profile?.email) {
         console.log("[Skip] No email found");
         continue;
       }

       if (dedupeByEmail(profile.email)) {
         await saveProfile(profile);
         console.log(`[Saved] ${profile.email}`);
       } else {
         console.log(`[Duplicate] ${profile.email}`);
       }

     } catch (err) {
       console.log(`[Error] ${url}`, err);
     }
   }
 }

 console.log("[Pipeline] Run complete");
}
