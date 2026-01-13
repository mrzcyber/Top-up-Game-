/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Transaktion` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Transaktion" ADD COLUMN     "url" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Transaktion_url_key" ON "Transaktion"("url");
