import {DataSource as ORMDataSource} from "typeorm";

export const DataSource = new ORMDataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "pikareed",
    schema: "public",
    entities: ["src/entities/*.entity.ts"],
    migrationsTableName: "migrations",
    migrations: ["migrations/*.ts"],
});

export async function ReadyDataSource(): Promise<ORMDataSource> {
    if (DataSource.isInitialized) return DataSource;

    await DataSource.initialize();
    return DataSource;
}