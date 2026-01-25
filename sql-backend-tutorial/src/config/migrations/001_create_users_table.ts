// src/config/migrations/001_create_users_table.ts
import { Pool } from 'pg';

export async function up(pool: Pool): Promise<void> {
  // Migration: Table yaratish
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id           SERIAL PRIMARY KEY,
      name         VARCHAR(100) NOT NULL,
      email        VARCHAR(150) UNIQUE NOT NULL,
      age          INTEGER CHECK (age >= 0 AND age <= 150),
      city         VARCHAR(100),
      country      VARCHAR(100) DEFAULT 'Uzbekistan',
      created_at   TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  await pool.query(query);
  console.log('✅ Users table yaratildi');
}

export async function down(pool: Pool): Promise<void> {
  // Rollback: Table o'chirish
  const query = 'DROP TABLE IF EXISTS users CASCADE';
  await pool.query(query);
  console.log('🔄 Users table o\'chirildi');
}