import config from "config";
import type {EntityTarget, SelectQueryBuilder} from "typeorm";
import {DataSource as ORMDataSource} from "typeorm";

import {Action} from "./entities/action.entity";
import type {BaseEntity} from "./entities/base-entity";
import {ChapterComment} from "./entities/chapter-comment.entity";
import {FeedbackSubmission} from "./entities/feedback.entity";
import {Novel} from "./entities/novel.entity";
import {NovelChapter} from "./entities/novel-chapter.entity";
import {NovelReview} from "./entities/novel-review.entity";
import {Role} from "./entities/role.entity";
import {Tag} from "./entities/tag.entity";
import {User} from "./entities/user.entity";
import {UserSavedNovel} from "./entities/user-saved-novel.entity";

export const DataSource = new ORMDataSource({
    type: "postgres",
    host: config.get("database.host"),
    port: config.get("database.port"),
    username: config.get("database.username"),
    password: config.get("database.password"),
    database: config.get("database.database"),
    schema: "public",
    entities: [Action, NovelChapter, ChapterComment, NovelReview, Novel, Role, Tag, User, FeedbackSubmission, UserSavedNovel],
});

export async function ReadyDataSource(): Promise<ORMDataSource> {
    if (DataSource.isInitialized) return DataSource;

    await DataSource.initialize();
    return DataSource;
}

export async function similarityBuilder<T extends BaseEntity>(entity: EntityTarget<T>, query: string, field: keyof T, threshold = 0.5, limit = 10): Promise<SelectQueryBuilder<T>> {
    const ds = await ReadyDataSource();
    const repo = ds.getRepository(entity);

    return repo.createQueryBuilder(entity.constructor.name)
        .addSelect(`SIMILARITY(${String(field)}, :query)`, "similarity")
        .where(`SIMILARITY(${String(field)}, :query) > :threshold`, {threshold})
        .setParameter("query", query)
        .orderBy("similarity", "DESC")
        .take(limit < 0 ? undefined : limit);
}

export async function getSimilar<T extends BaseEntity>(entity: EntityTarget<T>, query: string, field: keyof T, threshold?: number, limit?: number): Promise<T[]> {
    const builder = await similarityBuilder(entity, query, field, threshold, limit);
    return builder.getMany();
}
