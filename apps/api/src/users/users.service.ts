import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { DRIZZLE_CONNECTION } from "src/database/database.connection";
import * as schema from "../database/schema";
import { eq } from "drizzle-orm";
import { CreateUserRequest } from "@24studio/types";

@Injectable()
export class UsersService {
  constructor(
    @Inject(DRIZZLE_CONNECTION)
    private readonly db: NodePgDatabase<typeof schema>,
  ) {}

  async index(query: any) {
    return this.db.query.users.findMany();
  }
  async store(data: CreateUserRequest) {
    return this.db.transaction(async (tx) => {
      const isUser = await tx.query.users.findFirst({
        where: eq(schema.users.email, data.email),
      });
      if (isUser)
        throw new HttpException(
          "User email already exists",
          HttpStatus.BAD_REQUEST,
        );
      const [user] = await tx
        .insert(schema.users)
        .values({
          name: data.name || "Anonymous",
        })
        .returning();
      if (!user)
        throw new HttpException(
          "Fail to create user",
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      return user;
    });
  }
}
