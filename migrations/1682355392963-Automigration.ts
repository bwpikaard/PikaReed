import { MigrationInterface, QueryRunner } from "typeorm";

export class Automigration1682355392963 implements MigrationInterface {
    name = 'Automigration1682355392963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "novel_review" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "novel" DROP CONSTRAINT "FK_9b8dadc5fd88639952d78a37a1f"`);
        await queryRunner.query(`ALTER TABLE "novel" ALTER COLUMN "authorId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "novel_review" DROP CONSTRAINT "FK_259293402c2939a4878c1a44fe9"`);
        await queryRunner.query(`ALTER TABLE "novel_review" DROP CONSTRAINT "FK_42196630459dd4ee0b45348730d"`);
        await queryRunner.query(`ALTER TABLE "novel_review" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "novel_review" ALTER COLUMN "novelId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "novel" ADD CONSTRAINT "FK_9b8dadc5fd88639952d78a37a1f" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel_review" ADD CONSTRAINT "FK_259293402c2939a4878c1a44fe9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel_review" ADD CONSTRAINT "FK_42196630459dd4ee0b45348730d" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "novel_review" DROP CONSTRAINT "FK_42196630459dd4ee0b45348730d"`);
        await queryRunner.query(`ALTER TABLE "novel_review" DROP CONSTRAINT "FK_259293402c2939a4878c1a44fe9"`);
        await queryRunner.query(`ALTER TABLE "novel" DROP CONSTRAINT "FK_9b8dadc5fd88639952d78a37a1f"`);
        await queryRunner.query(`ALTER TABLE "novel_review" ALTER COLUMN "novelId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "novel_review" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "novel_review" ADD CONSTRAINT "FK_42196630459dd4ee0b45348730d" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel_review" ADD CONSTRAINT "FK_259293402c2939a4878c1a44fe9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel" ALTER COLUMN "authorId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "novel" ADD CONSTRAINT "FK_9b8dadc5fd88639952d78a37a1f" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel_review" DROP COLUMN "title"`);
    }

}
