CREATE TABLE IF NOT EXISTS "subscription" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"plan" text DEFAULT 'Free Plan' NOT NULL,
	"status" text NOT NULL,
	"startDate" timestamp NOT NULL,
	"endDate" timestamp
);
--> statement-breakpoint
ALTER TABLE "ban" DROP COLUMN IF EXISTS "isAppealed";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "subscription" ADD CONSTRAINT "subscription_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
