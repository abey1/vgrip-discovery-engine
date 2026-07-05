import "dotenv/config";

import { db } from "./db/index.js";
import { discoveredContacts } from "./db/schema.js";

async function main() {
  const result = await db
    .insert(discoveredContacts)
    .values({
      name: "Abey",
      email: "abey@test.com",
      bio: "Testing Drizzle ORM",
      domain: "test.com",
      keyword: "test",
    })
    .returning();

  console.log(result);
}

main().catch(console.error);
