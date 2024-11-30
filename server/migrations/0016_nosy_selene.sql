CREATE TABLE IF NOT EXISTS "newsletter" (
	"id" text PRIMARY KEY NOT NULL,
	"ip" text NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
