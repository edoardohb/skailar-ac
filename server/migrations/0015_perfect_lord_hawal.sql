CREATE TABLE IF NOT EXISTS "exeFile" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"name" text NOT NULL,
	"clientName" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "subscription" ALTER COLUMN "plan" DROP DEFAULT;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "exeFile" ADD CONSTRAINT "exeFile_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
