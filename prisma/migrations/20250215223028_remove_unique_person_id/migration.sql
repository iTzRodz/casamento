-- DropForeignKey
ALTER TABLE `Companion` DROP FOREIGN KEY `Companion_personId_fkey`;

-- DropIndex
DROP INDEX `Companion_personId_key` ON `Companion`;

-- AddForeignKey
ALTER TABLE `Companion` ADD CONSTRAINT `Companion_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `Person`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
