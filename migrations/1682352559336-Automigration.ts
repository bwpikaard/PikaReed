import { MigrationInterface, QueryRunner } from "typeorm";

export class Automigration1682352559336 implements MigrationInterface {
    name = 'Automigration1682352559336'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "displayName" TO "username"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME CONSTRAINT "UQ_059e69c318702e93998f26d1528" TO "UQ_78a916df40e02a9deb1c4b75edb"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" TO "UQ_059e69c318702e93998f26d1528"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "username" TO "displayName"`);
    }

}
