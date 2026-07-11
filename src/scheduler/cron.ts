import cron from "node-cron";
import { runPipeline } from "../pipeline/runPipeline.js";
import waitForDatabase from "../db/waitForDatabase.js";

export async function runScheduledJob() {
 // Run immediately on startup
 await waitForDatabase();
 await runPipeline();

 // Then daily
//  */5 * * * *
// 0 2 * * *
 cron.schedule("0 2 * * *", async () => {
   console.log("[Scheduler] Running daily pipeline...");
   await runPipeline();
 });
}
