-- DropIndex
DROP INDEX `Article_utilisateurId_fkey` ON `article`;

-- DropIndex
DROP INDEX `Commentaire_articleId_fkey` ON `commentaire`;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_utilisateurId_fkey` FOREIGN KEY (`utilisateurId`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Commentaire` ADD CONSTRAINT `Commentaire_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `Article`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArticleToCategorie` ADD CONSTRAINT `_ArticleToCategorie_A_fkey` FOREIGN KEY (`A`) REFERENCES `Article`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArticleToCategorie` ADD CONSTRAINT `_ArticleToCategorie_B_fkey` FOREIGN KEY (`B`) REFERENCES `Categorie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
