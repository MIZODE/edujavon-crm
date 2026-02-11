import express from "express";
import * as dotenv from "dotenv";
import { testPrismaConnection } from "./config/index";
import { appRouter } from "./app.route";
import path from "path";
dotenv.config();

const app = express();
const port = process.env.PORT || 9090;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/api/v1", appRouter);

async function startServer() {
  try {
    await testPrismaConnection();
    app.listen(port, () => {
      console.log(`🚀 Server http://localhost:${port} portda ishga tushdi`);
    });
  } catch (error) {
    console.error("❌ Server ishga tushmadi:", error);
    process.exit(1);
  }
}

startServer();

export default app;
