import { pgEnum } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { createdAt, primaryId, updatedAt } from "src/database/db-utility";
import { resources, actions } from "@24studio/types";

export const resourceEnum = pgEnum("resource_enum", resources);
export const actionEnum = pgEnum("action_enum", actions);

export const permissions = pgTable("permissions", {
  id: primaryId(),

  resources: resourceEnum().default("deposits"),
  actions: actionEnum().default("read"),

  createdAt: createdAt(),
  updatedAt: updatedAt(),
});
