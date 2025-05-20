import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";
import { PERMISSIONS_KEY } from "src/decorators/permission.decorator";
import { Permissions } from "@24studio/types";

export class AuthorizationGuard implements CanActivate {
  constructor(private reflactor: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    if (!request.user) throw new UnauthorizedException("User not found");

    const routePermissions: Permissions[] = this.reflactor.getAllAndOverride(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );
    console.log(` the route permissions are ${routePermissions}`);
    if (!routePermissions) {
      return true;
    }

    try {
      // const userPermissions = await this.authService.getUserPermissions(
      //   request.user.id,
      // );
      const userPermissions: Permissions[] = []; // TODO: need to be replaced with the actual user permissions

      for (const routePermission of routePermissions) {
        const userPermission = userPermissions.find(
          (perm) => perm.resource === routePermission.resource,
        );

        if (!userPermission) throw new ForbiddenException();

        const allActionsAvailable = routePermission.actions.every(
          (requiredAction) => userPermission.actions.includes(requiredAction),
        );
        if (!allActionsAvailable) throw new ForbiddenException();
      }
    } catch (e) {
      throw new ForbiddenException();
    }
    return true;
  }
}
