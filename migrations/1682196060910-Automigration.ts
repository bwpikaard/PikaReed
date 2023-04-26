import { MigrationInterface, QueryRunner } from "typeorm";

export class Automigration1682196060910 implements MigrationInterface {
    name = 'Automigration1682196060910'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "novel_comment" DROP CONSTRAINT "FK_1455b01738b5f90a3a57b3f7cc2"`);
        await queryRunner.query(`CREATE TABLE "novel_tags_tag" ("novelId" integer NOT NULL, "tagId" integer NOT NULL, CONSTRAINT "PK_b2c8f6c2df37df4c6ca373ef182" PRIMARY KEY ("novelId", "tagId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_76a8ab0e558d2330f1000fad93" ON "novel_tags_tag" ("novelId") `);
        await queryRunner.query(`CREATE INDEX "IDX_cdaf59b2fbdf8ba75e72eea3b2" ON "novel_tags_tag" ("tagId") `);
        await queryRunner.query(`ALTER TABLE "novel_comment" DROP COLUMN "novelId"`);
        await queryRunner.query(`ALTER TABLE "novel_comment" ADD "chapterId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_059e69c318702e93998f26d1528" UNIQUE ("displayName")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "novel_comment" DROP CONSTRAINT "FK_f180af83918eaf3a5e006d55012"`);
        await queryRunner.query(`ALTER TABLE "novel_comment" ALTER COLUMN "parentId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "novel_comment" ADD CONSTRAINT "FK_f8139472b1a48dddac36c1f2083" FOREIGN KEY ("chapterId") REFERENCES "novel_chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel_comment" ADD CONSTRAINT "FK_f180af83918eaf3a5e006d55012" FOREIGN KEY ("parentId") REFERENCES "novel_comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel_tags_tag" ADD CONSTRAINT "FK_76a8ab0e558d2330f1000fad93c" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "novel_tags_tag" ADD CONSTRAINT "FK_cdaf59b2fbdf8ba75e72eea3b28" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "novel_tags_tag" DROP CONSTRAINT "FK_cdaf59b2fbdf8ba75e72eea3b28"`);
        await queryRunner.query(`ALTER TABLE "novel_tags_tag" DROP CONSTRAINT "FK_76a8ab0e558d2330f1000fad93c"`);
        await queryRunner.query(`ALTER TABLE "novel_comment" DROP CONSTRAINT "FK_f180af83918eaf3a5e006d55012"`);
        await queryRunner.query(`ALTER TABLE "novel_comment" DROP CONSTRAINT "FK_f8139472b1a48dddac36c1f2083"`);
        await queryRunner.query(`ALTER TABLE "novel_comment" ALTER COLUMN "parentId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "novel_comment" ADD CONSTRAINT "FK_f180af83918eaf3a5e006d55012" FOREIGN KEY ("parentId") REFERENCES "novel_comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_059e69c318702e93998f26d1528"`);
        await queryRunner.query(`ALTER TABLE "novel_comment" DROP COLUMN "chapterId"`);
        await queryRunner.query(`ALTER TABLE "novel_comment" ADD "novelId" integer`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cdaf59b2fbdf8ba75e72eea3b2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_76a8ab0e558d2330f1000fad93"`);
        await queryRunner.query(`DROP TABLE "novel_tags_tag"`);
        await queryRunner.query(`ALTER TABLE "novel_comment" ADD CONSTRAINT "FK_1455b01738b5f90a3a57b3f7cc2" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
