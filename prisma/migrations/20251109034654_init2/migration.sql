/*
  Warnings:

  - Added the required column `popluer` to the `games` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transaktions" DROP CONSTRAINT "transaktions_trakids_fkey";

-- AlterTable
ALTER TABLE "games" ADD COLUMN     "popluer" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "transaktions" ALTER COLUMN "trakids" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "transaktions" ADD CONSTRAINT "transaktions_trakids_fkey" FOREIGN KEY ("trakids") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
