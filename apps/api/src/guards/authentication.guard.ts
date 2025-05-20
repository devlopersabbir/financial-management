import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

@Injectable()
export class AuthenticationGuard implements CanActivate {
  // private readonly jwtService: JwtService;
  constructor() {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    try {
      // const payload = this.jwtService.verify(token); from jwt service
      const payload = true;
      request.user = payload;
    } catch (err) {
      Logger.error(err);
      throw new UnauthorizedException("Token not valid");
    }
    return true;
  }
  private extractTokenFromHeader(request: Request): string {
    const token = request.headers.authorization?.split(" ")[1];
    if (!token) throw new UnauthorizedException("Token not found");
    return token;
  }
}
