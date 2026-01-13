/*
  Warnings:

  - You are about to drop the column `gameids` on the `transaktions` table. All the data in the column will be lost.
  - You are about to drop the column `imagegames` on the `transaktions` table. All the data in the column will be lost.
  - You are about to drop the column `titlegames` on the `transaktions` table. All the data in the column will be lost.
  - You are about to drop the column `email_verified` on the `users` table. All the data in the column will be lost.
  - Added the required column `gameId` to the `transaktions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageGame` to the `transaktions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleGame` to the `transaktions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transaktions" DROP COLUMN "gameids",
DROP COLUMN "imagegames",
DROP COLUMN "titlegames",
ADD COLUMN     "gameId" TEXT NOT NULL,
ADD COLUMN     "imageGame" TEXT NOT NULL,
ADD COLUMN     "titleGame" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "email_verified",
ADD COLUMN     "emailVerified" TIMESTAMP(3);
