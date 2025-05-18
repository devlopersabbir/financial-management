CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar,
	"last_name" varchar,
	"full_name" varchar NOT NULL,
	"email" varchar,
	"password" text,
	"createdAt" date DEFAULT now(),
	"updatedAt" date DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
