import { pgTable, varchar, text, serial, date } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "src/database/db-utility";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  name: varchar("full_name").notNull(),
  email: varchar("email").unique(),
  password: text("password"),

  createdAt: createdAt(),
  updatedAt: updatedAt(),
});
