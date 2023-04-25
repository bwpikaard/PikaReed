import { MigrationInterface, QueryRunner } from "typeorm";

export class Automigration1682440850252 implements MigrationInterface {
    name = 'Automigration1682440850252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "novel_tags_tag" DROP CONSTRAINT "FK_cdaf59b2fbdf8ba75e72eea3b28"`);
        await queryRunner.query(`CREATE TABLE "chapter_comment" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "parentId" integer NOT NULL, "comment" character varying NOT NULL, "userId" integer, "chapterId" integer, CONSTRAINT "PK_acae709ef370113933331ffb065" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" ADD CONSTRAINT "FK_08b9872601c18975a5457b636aa" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" ADD CONSTRAINT "FK_19f8d1d4ca007b137ddc9f99eab" FOREIGN KEY ("chapterId") REFERENCES "novel_chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" ADD CONSTRAINT "FK_1c142118039d4718ca02cebc6b4" FOREIGN KEY ("parentId") REFERENCES "chapter_comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel_tags_tag" ADD CONSTRAINT "FK_cdaf59b2fbdf8ba75e72eea3b28" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE "novel_comment"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "novel_tags_tag" DROP CONSTRAINT "FK_cdaf59b2fbdf8ba75e72eea3b28"`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" DROP CONSTRAINT "FK_1c142118039d4718ca02cebc6b4"`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" DROP CONSTRAINT "FK_19f8d1d4ca007b137ddc9f99eab"`);
        await queryRunner.query(`ALTER TABLE "chapter_comment" DROP CONSTRAINT "FK_08b9872601c18975a5457b636aa"`);
        await queryRunner.query(`DROP TABLE "chapter_comment"`);
        await queryRunner.query(`ALTER TABLE "novel_tags_tag" ADD CONSTRAINT "FK_cdaf59b2fbdf8ba75e72eea3b28" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
