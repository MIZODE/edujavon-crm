const { Client } = require('pg');
require('dotenv').config();

async function checkColumns() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    });
    try {
        await client.connect();
        const res = await client.query(`
            SELECT column_name, is_nullable, column_default 
            FROM information_schema.columns 
            WHERE table_name = 'User' AND is_nullable = 'NO'
        `);
        console.log("NOT NULL columns in User table:");
        console.table(res.rows);
    } catch(e) {
        console.error(e);
    } finally {
        await client.end();
    }
}
checkColumns();
