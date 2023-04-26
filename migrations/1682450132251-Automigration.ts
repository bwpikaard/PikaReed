import { MigrationInterface, QueryRunner } from "typeorm";

export class Automigration1682450132251 implements MigrationInterface {
    name = 'Automigration1682450132251'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "novel_view" ADD CONSTRAINT "user_novel" UNIQUE ("userId", "novelId")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "novel_view" DROP CONSTRAINT "user_novel"`);
    }

}
