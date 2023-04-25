import { MigrationInterface, QueryRunner } from "typeorm";

export class Automigration1682449756919 implements MigrationInterface {
    name = 'Automigration1682449756919'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "novel" ADD "featured" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "novel_chapter" DROP CONSTRAINT "FK_0191fdca407e9f409b94671463f"`);
        await queryRunner.query(`ALTER TABLE "novel_chapter" ALTER COLUMN "novelId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" DROP CONSTRAINT "FK_08b9872601c18975a5457b636aa"`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" DROP CONSTRAINT "FK_19f8d1d4ca007b137ddc9f99eab"`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" ALTER COLUMN "chapterId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "novel_chapter" ADD CONSTRAINT "FK_0191fdca407e9f409b94671463f" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" ADD CONSTRAINT "FK_08b9872601c18975a5457b636aa" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" ADD CONSTRAINT "FK_19f8d1d4ca007b137ddc9f99eab" FOREIGN KEY ("chapterId") REFERENCES "novel_chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chapter_comment" DROP CONSTRAINT "FK_19f8d1d4ca007b137ddc9f99eab"`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" DROP CONSTRAINT "FK_08b9872601c18975a5457b636aa"`);
        await queryRunner.query(`ALTER TABLE "novel_chapter" DROP CONSTRAINT "FK_0191fdca407e9f409b94671463f"`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" ALTER COLUMN "chapterId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" ADD CONSTRAINT "FK_19f8d1d4ca007b137ddc9f99eab" FOREIGN KEY ("chapterId") REFERENCES "novel_chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" ADD CONSTRAINT "FK_08b9872601c18975a5457b636aa" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel_chapter" ALTER COLUMN "novelId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "novel_chapter" ADD CONSTRAINT "FK_0191fdca407e9f409b94671463f" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel" DROP COLUMN "featured"`);
    }

}
