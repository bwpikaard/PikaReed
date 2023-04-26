import { MigrationInterface, QueryRunner } from "typeorm";

export class Automigration1682473492497 implements MigrationInterface {
    name = 'Automigration1682473492497'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_chapter_bookmark" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer NOT NULL, "chapterId" integer NOT NULL, CONSTRAINT "PK_2b5f40b2b7ac4916f38a4cbb425" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_chapter_bookmark" ADD CONSTRAINT "FK_3b1b8da36c62e0fc4083bf3f571" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_chapter_bookmark" ADD CONSTRAINT "FK_c748b933a708948fce455fd7fc0" FOREIGN KEY ("chapterId") REFERENCES "novel_chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_chapter_bookmark" DROP CONSTRAINT "FK_c748b933a708948fce455fd7fc0"`);
        await queryRunner.query(`ALTER TABLE "user_chapter_bookmark" DROP CONSTRAINT "FK_3b1b8da36c62e0fc4083bf3f571"`);
        await queryRunner.query(`DROP TABLE "user_chapter_bookmark"`);
    }

}
