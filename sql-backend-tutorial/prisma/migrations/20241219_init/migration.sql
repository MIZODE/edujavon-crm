-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "age" INTEGER,
    "city" VARCHAR(100),
    "country" VARCHAR(100) NOT NULL DEFAULT 'Uzbekistan',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    -- ...
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");