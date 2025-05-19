import { sql } from "drizzle-orm";
import {
  serial,
  PgTimestampConfig,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const primaryId = (name: string = "id") => serial(name).primaryKey();
export const primaryUuid = (name: string = "uuid") =>
  uuid(name).primaryKey().defaultRandom().unique();
export const createdAt = (
  name: string = "created_at",
  config: PgTimestampConfig<"date" | "string"> | undefined = {
    mode: "date",
  },
) => timestamp(name, config).defaultNow().notNull();
export const updatedAt = (
  name: string = "updated_at",
  config: PgTimestampConfig<"date" | "string"> | undefined = {
    mode: "date",
  },
) =>
  timestamp(name, config)
    .$defaultFn(() => sql`NULL`)
    .$onUpdateFn(() => new Date());
