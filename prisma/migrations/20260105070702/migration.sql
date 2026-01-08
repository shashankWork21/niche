/*
  Warnings:

  - You are about to drop the column `age` on the `CustomerPersona` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `CustomerPersona` table. All the data in the column will be lost.
  - Added the required column `maxAge` to the `CustomerPersona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minAge` to the `CustomerPersona` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CustomerPersona" DROP COLUMN "age",
DROP COLUMN "gender",
ADD COLUMN     "maxAge" INTEGER NOT NULL,
ADD COLUMN     "minAge" INTEGER NOT NULL;
