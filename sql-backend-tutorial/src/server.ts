// src/server.ts
import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import {
  testPrismaConnection,
  disconnectPrisma,
} from "./config/prisma";
import userRoutes from "./routes/userRoutes";

dotenv.config(); // 👈 eng tepada

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoutes);

app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "OK",
    message: "Server ishlayapti",
    timestamp: new Date().toISOString(),
  });
});

async function startServer() {
  try {
    await testPrismaConnection();

    app.listen(PORT, () => {
      console.log(`\n🚀 Server ${PORT}-portda ishga tushdi`);
      console.log(`📝 Health: http://localhost:${PORT}/health`);
      console.log(`👤 Users: http://localhost:${PORT}/api/users`);
      console.log(`🎨 Prisma Studio: npx prisma studio`);
    });
  } catch (error) {
    console.error("❌ Server ishga tushmadi:", error);
    process.exit(1);
  }
}

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("\n⏹️ Server to‘xtatilmoqda...");
  await disconnectPrisma();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("\n⏹️ Server to‘xtatilmoqda...");
  await disconnectPrisma();
  process.exit(0);
});

startServer();

export default app;