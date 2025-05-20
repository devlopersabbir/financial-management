import { SetMetadata } from "@nestjs/common";
import { Permissions } from "@24studio/types";

export const PERMISSIONS_KEY = "permissions";

export const PermissionsDecorator = (permissions: Permissions[]) =>
  SetMetadata(PERMISSIONS_KEY, permissions);
