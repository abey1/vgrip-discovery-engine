import { db } from "./index.js";

import { discoveredContacts } from "./schema.js";

export async function saveProfile(
  profile: typeof discoveredContacts.$inferInsert,
) {
  return db.insert(discoveredContacts).values(profile);
}
