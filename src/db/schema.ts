import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const discoveredContacts = pgTable("discovered_contacts", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: text("name").notNull(),

  email: text("email").notNull().unique(),

  bio: text("bio"),

  sourceUrl: text("source_url"),

  domain: text("domain"),

  keyword: text("keyword"),

  discoveredAt: timestamp("discovered_at").defaultNow(),
});
