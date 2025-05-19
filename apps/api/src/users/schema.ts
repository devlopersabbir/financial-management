import { pgTable, varchar, text, serial, date } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),

  name: varchar('full_name').notNull(),
  email: varchar('email').unique(),
  password: text('password'),

  createdAt: date().defaultNow(),
  updatedAt: date().defaultNow(),
});
