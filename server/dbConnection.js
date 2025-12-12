//TODO: Set up a pool to connect server with database
//DO NOT CREATE A CLIENT!

//imports
import pg from "pg";
import dotenv from "dotenv";

//config
dotenv.config();

//pool
export const dbPool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
