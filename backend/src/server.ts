import express from "express";
import * as dotenv from "dotenv";
import { testPrismaConnection } from "./config/index";
dotenv.config();

const app = express();
const port = process.env.PORT || 9090;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function startServer() {
  try {
    await testPrismaConnection();
    app.listen(port, () => {
      console.log(`🚀 Server ${port}-portda ishga tushdi`);
      console.log(`📝 Health check: http://localhost:${port}/health`);
    });
  } catch (error) {
    console.error("❌ Server ishga tushmadi:", error);
    process.exit(1);
  }
}

// Serverni ishga tushirish
startServer();

export default app;
