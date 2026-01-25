// src/config/migrations/002_create_products_table.ts
import { Pool } from 'pg';

export async function up(pool: Pool): Promise<void> {
  const query = `
    CREATE TABLE IF NOT EXISTS products (
      id           SERIAL PRIMARY KEY,
      name         VARCHAR(200) NOT NULL,
      category     VARCHAR(100) NOT NULL,
      price        DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
      stock        INTEGER DEFAULT 0 CHECK (stock >= 0),
      rating       REAL DEFAULT 0.0 CHECK (rating >= 0 AND rating <= 5),
      description  TEXT,
      created_at   TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  await pool.query(query);
  console.log('✅ Products table yaratildi');
}

export async function down(pool: Pool): Promise<void> {
  const query = 'DROP TABLE IF EXISTS products CASCADE';
  await pool.query(query);
  console.log('🔄 Products table o\'chirildi');
}