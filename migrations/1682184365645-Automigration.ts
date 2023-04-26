import { MigrationInterface, QueryRunner } from "typeorm";

export class Automigration1682184365645 implements MigrationInterface {
    name = 'Automigration1682184365645'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "title" character varying NOT NULL, "color" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "action" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "code" character varying NOT NULL, CONSTRAINT "PK_2d9db9cf5edfbbae74eb56e3a39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tag" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "code" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."novel_status_enum" AS ENUM('Draft', 'PendingReview', 'Hidden', 'Published')`);
        await queryRunner.query(`CREATE TABLE "novel" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "title" character varying NOT NULL, "synopsis" character varying NOT NULL, "status" "public"."novel_status_enum" NOT NULL, "authorId" integer, CONSTRAINT "PK_b0fea0838ae7d287445c53d6139" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "novel_chapter" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "chapterNumber" integer NOT NULL, "title" character varying NOT NULL, "htmlBody" text NOT NULL, "novelId" integer, CONSTRAINT "PK_df325e83936d51a23143f5f8cbe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "novel_comment" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "comment" character varying NOT NULL, "userId" integer, "novelId" integer, "parentId" integer, CONSTRAINT "PK_03e717e9f5e3fcb7795d87738a3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "novel_review" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "rating" integer NOT NULL, "comment" character varying NOT NULL, "userId" integer, "novelId" integer, CONSTRAINT "PK_6bd041a332b3bce94c359c6fd40" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_roles_role" ("userId" integer NOT NULL, "roleId" integer NOT NULL, CONSTRAINT "PK_b47cd6c84ee205ac5a713718292" PRIMARY KEY ("userId", "roleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role" ("roleId") `);
        await queryRunner.query(`CREATE TABLE "role_actions_action" ("roleId" integer NOT NULL, "actionId" integer NOT NULL, CONSTRAINT "PK_13f0e9645524fbe4e3b19872731" PRIMARY KEY ("roleId", "actionId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cf2ebc4ece99339e2255820d78" ON "role_actions_action" ("roleId") `);
        await queryRunner.query(`CREATE INDEX "IDX_cd8e0c4728ededd87779d3531f" ON "role_actions_action" ("actionId") `);
        await queryRunner.query(`ALTER TABLE "novel" ADD CONSTRAINT "FK_9b8dadc5fd88639952d78a37a1f" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel_chapter" ADD CONSTRAINT "FK_0191fdca407e9f409b94671463f" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel_comment" ADD CONSTRAINT "FK_933ce1cc1cfca2c63d3350c5334" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel_comment" ADD CONSTRAINT "FK_1455b01738b5f90a3a57b3f7cc2" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel_comment" ADD CONSTRAINT "FK_f180af83918eaf3a5e006d55012" FOREIGN KEY ("parentId") REFERENCES "novel_comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel_review" ADD CONSTRAINT "FK_259293402c2939a4878c1a44fe9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "novel_review" ADD CONSTRAINT "FK_42196630459dd4ee0b45348730d" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "FK_5f9286e6c25594c6b88c108db77" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "FK_4be2f7adf862634f5f803d246b8" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_actions_action" ADD CONSTRAINT "FK_cf2ebc4ece99339e2255820d786" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_actions_action" ADD CONSTRAINT "FK_cd8e0c4728ededd87779d3531f2" FOREIGN KEY ("actionId") REFERENCES "action"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_actions_action" DROP CONSTRAINT "FK_cd8e0c4728ededd87779d3531f2"`);
        await queryRunner.query(`ALTER TABLE "role_actions_action" DROP CONSTRAINT "FK_cf2ebc4ece99339e2255820d786"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_4be2f7adf862634f5f803d246b8"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_5f9286e6c25594c6b88c108db77"`);
        await queryRunner.query(`ALTER TABLE "novel_review" DROP CONSTRAINT "FK_42196630459dd4ee0b45348730d"`);
        await queryRunner.query(`ALTER TABLE "novel_review" DROP CONSTRAINT "FK_259293402c2939a4878c1a44fe9"`);
        await queryRunner.query(`ALTER TABLE "novel_comment" DROP CONSTRAINT "FK_f180af83918eaf3a5e006d55012"`);
        await queryRunner.query(`ALTER TABLE "novel_comment" DROP CONSTRAINT "FK_1455b01738b5f90a3a57b3f7cc2"`);
        await queryRunner.query(`ALTER TABLE "novel_comment" DROP CONSTRAINT "FK_933ce1cc1cfca2c63d3350c5334"`);
        await queryRunner.query(`ALTER TABLE "novel_chapter" DROP CONSTRAINT "FK_0191fdca407e9f409b94671463f"`);
        await queryRunner.query(`ALTER TABLE "novel" DROP CONSTRAINT "FK_9b8dadc5fd88639952d78a37a1f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cd8e0c4728ededd87779d3531f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cf2ebc4ece99339e2255820d78"`);
        await queryRunner.query(`DROP TABLE "role_actions_action"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4be2f7adf862634f5f803d246b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5f9286e6c25594c6b88c108db7"`);
        await queryRunner.query(`DROP TABLE "user_roles_role"`);
        await queryRunner.query(`DROP TABLE "novel_review"`);
        await queryRunner.query(`DROP TABLE "novel_comment"`);
        await queryRunner.query(`DROP TABLE "novel_chapter"`);
        await queryRunner.query(`DROP TABLE "novel"`);
        await queryRunner.query(`DROP TYPE "public"."novel_status_enum"`);
        await queryRunner.query(`DROP TABLE "tag"`);
        await queryRunner.query(`DROP TABLE "action"`);
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
