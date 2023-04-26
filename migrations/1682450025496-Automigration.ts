import { MigrationInterface, QueryRunner } from "typeorm";

export class Automigration1682450025496 implements MigrationInterface {
    name = 'Automigration1682450025496'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "novel_view" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer NOT NULL, "novelId" integer NOT NULL, CONSTRAINT "PK_d9c521cf4d554faaaadeb1e12c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "novel_view" ADD CONSTRAINT "FK_09b25ace4c6b68d64b13f92cb14" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel_view" ADD CONSTRAINT "FK_cd9df2b0beadcd1b9f6a8253fb7" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "novel_view" DROP CONSTRAINT "FK_cd9df2b0beadcd1b9f6a8253fb7"`);
        await queryRunner.query(`ALTER TABLE "novel_view" DROP CONSTRAINT "FK_09b25ace4c6b68d64b13f92cb14"`);
        await queryRunner.query(`DROP TABLE "novel_view"`);
    }

}
