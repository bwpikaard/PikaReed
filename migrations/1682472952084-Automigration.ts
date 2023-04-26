import { MigrationInterface, QueryRunner } from "typeorm";

export class Automigration1682472952084 implements MigrationInterface {
    name = 'Automigration1682472952084'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "chapter_suggestion" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer NOT NULL, "chapterId" integer NOT NULL, "comment" character varying NOT NULL, CONSTRAINT "PK_f81413266536f8a24fb702d539f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "chapter_suggestion" ADD CONSTRAINT "FK_185ac39a567399a8be4f02d54b0" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chapter_suggestion" ADD CONSTRAINT "FK_95333b6dc1c783bd0084e6cd781" FOREIGN KEY ("chapterId") REFERENCES "novel_chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chapter_suggestion" DROP CONSTRAINT "FK_95333b6dc1c783bd0084e6cd781"`);
        await queryRunner.query(`ALTER TABLE "chapter_suggestion" DROP CONSTRAINT "FK_185ac39a567399a8be4f02d54b0"`);
        await queryRunner.query(`DROP TABLE "chapter_suggestion"`);
    }

}
