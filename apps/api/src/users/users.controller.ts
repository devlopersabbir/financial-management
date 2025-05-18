import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../database/schema';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    @Inject()
    private readonly db: NodePgDatabase<typeof schema>,
  ) {}

  @Post()
  async create(@Body() createDto: any) {
    console.log(createDto);
    return 'created!';
  }

  @Get('/fetch')
  findAll(): string {
    return 'This action returns all cats';
  }
}
