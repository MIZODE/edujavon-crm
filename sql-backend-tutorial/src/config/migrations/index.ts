// src/config/migrations/index.ts
import { pool } from '../database';
import * as createUsersTable from './001_create_users_table';
import * as createProductsTable from './002_create_products_table';
import * as createOrdersTable from './003_create_orders_table';
import * as createOrderItemsTable from './004_create_order_items_table';
import * as createSmth from "./005_create_smth"

// Barcha migration'lar (tartib muhim!)
const migrations = [
  createUsersTable,
  createProductsTable,
  createOrdersTable,
  createOrderItemsTable,
  createSmth
];

// Migration'larni bajarish
export async function runMigrations(): Promise<void> {
  console.log('📝 Migration\'lar boshlanmoqda...\n');

  try {
    for (const migration of migrations) {
      await migration.up(pool);
    }

    console.log('\n🎉 Barcha migration\'lar muvaffaqiyatli bajarildi!');
  } catch (error) {
    console.error('❌ Migration xatosi:', error);
    throw error;
  }
}

// Rollback - barcha table'larni o'chirish
export async function rollbackMigrations(): Promise<void> {
  console.log('🔄 Rollback boshlanmoqda...\n');

  try {
    // Teskari tartibda o'chirish (oxirgi'sidan birinchisiga)
    for (let i = migrations.length - 1; i >= 0; i--) {
      await migrations[i]?.down(pool);
    }

    console.log('\n✅ Rollback muvaffaqiyatli bajarildi!');
  } catch (error) {
    console.error('❌ Rollback xatosi:', error);
    throw error;
  }
}