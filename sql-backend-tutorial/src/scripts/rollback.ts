// src/scripts/rollback.ts
import { rollbackMigrations } from '../config/migrations';
import { pool } from '../config/database';

async function main() {
  try {
    await rollbackMigrations();
    await pool.end();  // Connection'ni yopish
    process.exit(0);
  } catch (error) {
    console.error('Rollback xatosi:', error);
    process.exit(1);
  }
}

main();