CREATE TABLE "discovered_contacts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"bio" text,
	"source_url" text,
	"domain" text,
	"keyword" text,
	"discovered_at" timestamp DEFAULT now(),
	CONSTRAINT "discovered_contacts_email_unique" UNIQUE("email")
);
