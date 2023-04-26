import { MigrationInterface, QueryRunner } from "typeorm";

export class Automigration1682357029653 implements MigrationInterface {
    name = 'Automigration1682357029653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "feedback_submission" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "email" character varying NOT NULL, "subject" character varying NOT NULL, "body" character varying NOT NULL, CONSTRAINT "PK_b7ce399f9a506c8af4a7e94003c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "feedback_submission"`);
    }

}
