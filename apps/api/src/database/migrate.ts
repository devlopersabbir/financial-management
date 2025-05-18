import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import drizzleConfig from '../../drizzle.config';
import { Pool } from 'pg';
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';

expand(config());

if (!process.env.DB_MIGRATING) {
  throw new Error(
    'You must set DB_MIGRATING to "true" when running migrations',
  );
}

(async () => {
  console.log('Running migrations...');
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('databse url not found!');
  const pool = new Pool({
    connectionString: url,
  });
  const db = drizzle(pool, {
    schema,
  });

  // Get list of all table names in the schema
  const tablesInSchema = Object.keys(schema);

  // Check if each table already exists in the database
  const tablesToCreate = await getTablesToCreate(pool, tablesInSchema);

  // If there's any table to create, run the migrations
  if (tablesToCreate.length > 0) {
    console.log('Some tables do not exist, running migrations...');
    await migrate(db, { migrationsFolder: drizzleConfig.out });
    console.log('Migrations completed');
  } else {
    console.log('All tables already exist, skipping migrations.');
  }

  pool.end();
})();

// Function to check which tables don't exist in the database
async function getTablesToCreate(pool: Pool, tablesInSchema: string[]) {
  const tablesToCreate: string[] = [];

  for (const table of tablesInSchema) {
    const exists = await tableExists(pool, table);
    if (!exists) {
      tablesToCreate.push(table);
    }
  }
  return tablesToCreate;
}

// Function to check if a specific table exists in the database
async function tableExists(pool: Pool, tableName: string) {
  const query = `
    SELECT EXISTS (
      SELECT 1 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
        AND table_name = $1
    );
  `;
  const res = await pool.query(query, [tableName]);
  return res.rows[0].exists;
}
