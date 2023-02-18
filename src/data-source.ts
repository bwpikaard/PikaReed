import config from "config";
import {DataSource as ORMDataSource} from "typeorm";

import {User} from "./entities/user.entity";

export const DataSource = new ORMDataSource({
    type: "postgres",
    host: config.get("database.host"),
    port: config.get("database.port"),
    username: config.get("database.username"),
    password: config.get("database.password"),
    database: config.get("database.database"),
    schema: "public",
    entities: [User],
});

export async function ReadyDataSource(): Promise<ORMDataSource> {
    if (DataSource.isInitialized) return DataSource;

    await DataSource.initialize();
    return DataSource;
}
