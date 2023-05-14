/*
  Warnings:

  - You are about to drop the column `auteurId` on the `article` table. All the data in the column will be lost.
  - Added the required column `utilisateurId` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Article_auteurId_fkey` ON `article`;

-- DropIndex
DROP INDEX `Commentaire_articleId_fkey` ON `commentaire`;

-- AlterTable
ALTER TABLE `article` DROP COLUMN `auteurId`,
    ADD COLUMN `utilisateurId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_utilisateurId_fkey` FOREIGN KEY (`utilisateurId`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Commentaire` ADD CONSTRAINT `Commentaire_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `Article`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArticleToCategorie` ADD CONSTRAINT `_ArticleToCategorie_A_fkey` FOREIGN KEY (`A`) REFERENCES `Article`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArticleToCategorie` ADD CONSTRAINT `_ArticleToCategorie_B_fkey` FOREIGN KEY (`B`) REFERENCES `Categorie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
