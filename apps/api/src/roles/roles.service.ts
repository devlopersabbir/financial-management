import { Roles } from "@24studio/types";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RolesService {
  create(createRoleDto: Roles) {
    return "This action adds a new role";
  }

  findAll() {
    return `This action returns all roles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: Partial<Roles>) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
