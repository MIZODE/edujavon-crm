// src/config/migrations/003_create_orders_table.ts
import { Pool } from 'pg';

export async function up(pool: Pool): Promise<void> {
  const query = `
    CREATE TABLE IF NOT EXISTS orders (
      id             SERIAL PRIMARY KEY,
      user_id        INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      total_amount   DECIMAL(10, 2) NOT NULL CHECK (total_amount >= 0),
      status         VARCHAR(50) DEFAULT 'pending',
      created_at     TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  await pool.query(query);
  console.log('✅ Orders table yaratildi');
}

export async function down(pool: Pool): Promise<void> {
  const query = 'DROP TABLE IF EXISTS orders CASCADE';
  await pool.query(query);
  console.log('🔄 Orders table o\'chirildi');
}