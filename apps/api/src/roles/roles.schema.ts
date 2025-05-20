import { relations } from "drizzle-orm";
import { text } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { createdAt, primaryId, updatedAt } from "src/database/db-utility";
import { permissions } from "src/permissions/permission.schema";

export const roles = pgTable("roles", {
  id: primaryId(),
  name: text("name").notNull(),

  createdAt: createdAt(),
  updatedAt: updatedAt(),
});

export const roleRelations = relations(roles, ({ many }) => ({
  permissions: many(permissions),
}));
