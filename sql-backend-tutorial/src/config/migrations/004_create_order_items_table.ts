// src/config/migrations/004_create_order_items_table.ts
import { Pool } from 'pg';

export async function up(pool: Pool): Promise<void> {
  const query = `
    CREATE TABLE IF NOT EXISTS order_items (
      id            SERIAL PRIMARY KEY,
      order_id      INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
      product_id    INTEGER NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
      quantity      INTEGER NOT NULL CHECK (quantity > 0),
      price         DECIMAL(10, 2) NOT NULL CHECK (price >= 0)
    )
  `;
  
  await pool.query(query);
  console.log('✅ Order items table yaratildi');
}

export async function down(pool: Pool): Promise<void> {
  const query = 'DROP TABLE IF EXISTS order_items CASCADE';
  await pool.query(query);
  console.log('🔄 Order items table o\'chirildi');
}