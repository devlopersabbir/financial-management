import { Permissions } from "@24studio/types";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PermissionsService {
  create(createPermissionDto: Permissions) {
    return "This action adds a new permission";
  }

  findAll() {
    return `This action returns all permissions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permission`;
  }

  update(id: number, updatePermissionDto: Permissions) {
    return `This action updates a #${id} permission`;
  }

  remove(id: number) {
    return `This action removes a #${id} permission`;
  }
}
