import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const { Client } = pg;

export const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const db = drizzle(client);