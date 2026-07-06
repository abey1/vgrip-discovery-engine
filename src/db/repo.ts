import "dotenv/config";

import { prisma } from "./index.js";
import type { Profile } from "../types/typeProfile.js";

export async function saveProfile(profile: Profile) {
  const result = await prisma.discoveredContact.upsert({
    where: { email: profile.email ?? "" },
    update: {},
    create: {
      name: profile.name ?? "",
      email: profile.email ?? "",
      bio: profile.bio ?? "",
      domain: profile.domain ?? "",
      keyword: profile.keyword ?? "",
      discoveredAt: profile.discovered_at,
    },
  });

  console.log(result);
}

// import { db } from "./index.js";
// import { discoveredContacts } from "./schema.js";

// export async function saveProfile(profile: any) {
//  return db.insert(discoveredContacts).values(profile);
// }