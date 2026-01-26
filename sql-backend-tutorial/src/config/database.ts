// src/config/database.ts
import { Pool } from 'pg';
import dotenv from 'dotenv';

// .env faylni yuklash
import path from 'path';

// .env faylni yuklash
const result = dotenv.config({ path: path.resolve(__dirname, '../../.env') });
if (result.error) {
  console.error('❌ .env yuklashda xato:', result.error);
}
console.log('📝 Loaded env:', result.parsed);
console.log('🔑 Password check:', typeof process.env.DB_PASSWORD, process.env.DB_PASSWORD);


// Pool nima?
// Pool - bu database connection'lar to'plami.
// Har safar yangi connection ochish o'rniga,
// mavjud connection'larni qayta ishlatadi (tezroq va samaraliroq).

export const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'edujavon_crm',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '', // Parol string bo'lishi shart
});

// Connection test funksiyasi
export async function testConnection() {
  try {
    // Database'ga ulanishni sinab ko'ramiz
    const client = await pool.connect();
    console.log('✅ PostgreSQL database\'ga muvaffaqiyatli ulandi');

    // Database versiyasini tekshirish
    const result = await client.query('SELECT version()');
    console.log('📊 PostgreSQL versiyasi:', result.rows[0].version);

    // Connection'ni qaytarish (pool'ga)
    client.release();
  } catch (error) {
    console.error('❌ Database ulanishda xato:', error);
    process.exit(1);  // Dasturni to'xtatish
  }
}