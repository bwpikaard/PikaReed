import { MigrationInterface, QueryRunner } from "typeorm";

export class Automigration1682439929516 implements MigrationInterface {
    name = 'Automigration1682439929516'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_saved_novel" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer NOT NULL, "novelId" integer NOT NULL, CONSTRAINT "PK_bc5d3a2a48367bcf011742545f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_saved_novel" ADD CONSTRAINT "FK_67360458dfc38d9b52b9755b944" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_saved_novel" ADD CONSTRAINT "FK_f5be0c4e338c029a931bbc37c80" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_saved_novel" DROP CONSTRAINT "FK_f5be0c4e338c029a931bbc37c80"`);
        await queryRunner.query(`ALTER TABLE "user_saved_novel" DROP CONSTRAINT "FK_67360458dfc38d9b52b9755b944"`);
        await queryRunner.query(`DROP TABLE "user_saved_novel"`);
    }

}
