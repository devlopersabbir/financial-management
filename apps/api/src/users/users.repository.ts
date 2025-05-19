import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "../database/schema";

export class UserRepository {
  constructor(private readonly db: NodePgDatabase<typeof schema>) {}

  create() {}
  async finds() {
    return this.db.transaction(async (tx) => {
      return await tx.query.users.findMany();
    });
  }
  update() {}
  delete() {}
}
