import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PermissionsService } from "./permissions.service";
import { Permissions } from "@24studio/types";

@Controller("permissions")
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  create(@Body() createPermissionDto: Permissions) {
    return this.permissionsService.create(createPermissionDto);
  }

  @Get()
  findAll() {
    return this.permissionsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.permissionsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePermissionDto: Permissions) {
    return this.permissionsService.update(+id, updatePermissionDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.permissionsService.remove(+id);
  }
}
