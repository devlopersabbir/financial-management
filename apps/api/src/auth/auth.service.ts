import { CreateUserRequest } from "@24studio/types";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  async login(input: CreateUserRequest) {
    return "This action adds a new auth";
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: Partial<CreateUserRequest>) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
