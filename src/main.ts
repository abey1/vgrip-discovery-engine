import "dotenv/config";

import { runScheduledJob } from "./scheduler/cron.js";

async function bootstrap() {
 console.log("[VGRIP-DE] Starting service...");

 await runScheduledJob();

 console.log("[VGRIP-DE] Initial run complete");
}

bootstrap().catch((err) => {
    console.error(err);
    process.exit(1);
  });

// import "dotenv/config";

// import { prisma } from "./db/index.js";

// async function main() {
//   const result = await prisma.discoveredContact.upsert({
//     where: { email: "abey@test.com" },
//     update: {},
//     create: {
//       name: "Abey",
//       email: "abey@test.com",
//       bio: "Testing Prisma 7",
//       domain: "test.com",
//       keyword: "test",
//     },
//   });

//   console.log(result);
// }

// main()
//   .catch(console.error)
//   .finally(() => prisma.$disconnect());
