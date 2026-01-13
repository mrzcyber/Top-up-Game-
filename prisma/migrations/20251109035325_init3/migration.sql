/*
  Warnings:

  - You are about to drop the column `popluer` on the `games` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "games" DROP COLUMN "popluer",
ADD COLUMN     "pinned" BOOLEAN NOT NULL DEFAULT false;
