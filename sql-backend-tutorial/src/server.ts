// src/server.ts
import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import { testConnection } from './config/database';
import { runMigrations } from "./config/migrations"  // Qo'shdik

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    message: 'Server ishlayapti',
    timestamp: new Date().toISOString()
  });
});

async function startServer() {
  try {
    await testConnection();

    // Table'larni yaratish
    await runMigrations();  // Qo'shdik

    app.listen(PORT, () => {
      console.log(`🚀 Server ${PORT}-portda ishga tushdi`);
      console.log(`📝 Health check: http://localhost:${PORT}/health`);
    });
  } catch (error) {
    console.error('❌ Server ishga tushmadi:', error);
    process.exit(1);
  }
}

startServer();

export default app;