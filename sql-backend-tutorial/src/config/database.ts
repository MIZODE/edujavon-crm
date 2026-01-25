// src/config/database.ts
import { Pool } from 'pg';
import dotenv from 'dotenv';

// .env faylni yuklash
dotenv.config();

// Pool nima?
// Pool - bu database connection'lar to'plami.
// Har safar yangi connection ochish o'rniga,
// mavjud connection'larni qayta ishlatadi (tezroq va samaraliroq).

export const pool = new Pool({
  host: process.env.DB_HOST,      // Database server manzili
  port: parseInt(process.env.DB_PORT || '5432'),  // Port
  database: process.env.DB_NAME,  // Database nomi
  user: process.env.DB_USER,      // Username
  password: process.env.DB_PASSWORD,  // Parol
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