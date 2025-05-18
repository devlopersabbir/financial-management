import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '../database/schema';
import { DRIZZLE_CONNECTION } from './database.connection';

@Module({
  providers: [
    {
      provide: DRIZZLE_CONNECTION,
      useFactory: (configService: ConfigService) => {
        const pool = new Pool({
          connectionString: configService.getOrThrow('DATABASE_URL'),
        });
        return drizzle(pool, {
          schema,
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class DatabaseModule {}
