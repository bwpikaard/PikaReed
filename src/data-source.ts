import config from "config";
import {DataSource as ORMDataSource} from "typeorm";

import {Action} from "./entities/action.entity";
import {Novel} from "./entities/novel.entity";
import {NovelChapter} from "./entities/novel-chapter.entity";
import {NovelComment} from "./entities/novel-comment.entity";
import {NovelReview} from "./entities/novel-review.entity";
import {Role} from "./entities/role.entity";
import {Tag} from "./entities/tag.entity";
import {User} from "./entities/user.entity";

export const DataSource = new ORMDataSource({
    type: "postgres",
    host: config.get("database.host"),
    port: config.get("database.port"),
    username: config.get("database.username"),
    password: config.get("database.password"),
    database: config.get("database.database"),
    schema: "public",
    entities: [Action, NovelChapter, NovelComment, NovelReview, Novel, Role, Tag, User],
});

export async function ReadyDataSource(): Promise<ORMDataSource> {
    if (DataSource.isInitialized) return DataSource;

    await DataSource.initialize();
    return DataSource;
}
