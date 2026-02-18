// import { defineConfig } from '@prisma/config';
// import 'dotenv/config';

// export default defineConfig({
//     datasource: {
//         url: process.env.DATABASE_URL,
//     },
// });





// prisma.config.ts
import "dotenv/config"; // Import dotenv to load environment variables
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations", // Optional: specify migrations path
  },
  datasource: {
    url: env("DATABASE_URL"), // Use the env helper to access your DATABASE_URL
  },
});
