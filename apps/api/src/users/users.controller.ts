import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
// import {} from "@24studio/types";

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Body() userRequestBody: any) {
    console.log(userRequestBody);
    return "created!";
  }

  @Get()
  findAll() {
    const data = this.userService.index();
    return data;
  }
}
