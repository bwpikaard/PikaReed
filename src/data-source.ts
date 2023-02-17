import {DataSource as ORMDataSource} from "typeorm";

export const DataSource = new ORMDataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
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
