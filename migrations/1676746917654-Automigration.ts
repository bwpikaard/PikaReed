import { MigrationInterface, QueryRunner } from "typeorm";

export class Automigration1676746917654 implements MigrationInterface {
    name = 'Automigration1676746917654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "avatarUrl" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "avatarUrl"`);
    }

}
