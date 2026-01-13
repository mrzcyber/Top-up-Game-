/*
  Warnings:

  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `transaktions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_transaktionId_fkey";

-- DropForeignKey
ALTER TABLE "transaktions" DROP CONSTRAINT "transaktions_trakId_fkey";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "transaktions";

-- CreateTable
CREATE TABLE "Transaktion" (
    "id" SERIAL NOT NULL,
    "trakId" INTEGER,
    "product" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "paymentMethod" TEXT,
    "paymentStatus" TEXT NOT NULL DEFAULT 'unpaid',
    "invoice" TEXT,
    "gameId" TEXT NOT NULL,
    "titleGame" TEXT NOT NULL,
    "imageGame" TEXT NOT NULL,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaktion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transaktion_invoice_key" ON "Transaktion"("invoice");

-- AddForeignKey
ALTER TABLE "Transaktion" ADD CONSTRAINT "Transaktion_trakId_fkey" FOREIGN KEY ("trakId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
