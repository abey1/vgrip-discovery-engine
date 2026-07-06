import cron from "node-cron";
import { runPipeline } from "../pipeline/runPipeline.js";

export function runScheduledJob() {
 // Run immediately on startup
 runPipeline();

 // Then daily
 cron.schedule("0 2 * * *", async () => {
   console.log("[Scheduler] Running daily pipeline...");
   await runPipeline();
 });
}
