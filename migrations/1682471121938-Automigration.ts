import { MigrationInterface, QueryRunner } from "typeorm";

export class Automigration1682471121938 implements MigrationInterface {
    name = 'Automigration1682471121938'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chapter_comment" DROP CONSTRAINT "FK_1c142118039d4718ca02cebc6b4"`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" ALTER COLUMN "parentId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" ADD CONSTRAINT "FK_1c142118039d4718ca02cebc6b4" FOREIGN KEY ("parentId") REFERENCES "chapter_comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chapter_comment" DROP CONSTRAINT "FK_1c142118039d4718ca02cebc6b4"`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" ALTER COLUMN "parentId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" ADD CONSTRAINT "FK_1c142118039d4718ca02cebc6b4" FOREIGN KEY ("parentId") REFERENCES "chapter_comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
