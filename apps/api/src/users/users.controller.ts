import { Body, Controller, Get, Post, Query, Res } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Response } from "express";
import type { CreateUserRequest } from "@24studio/types";

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Body() data: CreateUserRequest, @Res() res: Response) {
    const user = await this.userService.store(data);
    return res.status(200).json(user);
  }

  @Get()
  findAll(@Query() query: any) {
    console.log(query);
    const data = this.userService.index(query);
    return data;
  }
}
