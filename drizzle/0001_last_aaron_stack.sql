CREATE TABLE IF NOT EXISTS "account" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"code" varchar(256),
	"description" varchar(256),
	"balance" double precision,
	"accTypeId" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "accountType" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"type" varchar(256)
);
--> statement-breakpoint
DROP TABLE "cities";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account" ADD CONSTRAINT "account_accTypeId_accountType_id_fk" FOREIGN KEY ("accTypeId") REFERENCES "public"."accountType"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
