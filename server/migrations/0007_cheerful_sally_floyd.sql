ALTER TABLE "pin" DROP CONSTRAINT "pin_userId_account_providerAccountId_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pin" ADD CONSTRAINT "pin_userId_account_providerAccountId_fk" FOREIGN KEY ("userId") REFERENCES "account"("providerAccountId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;