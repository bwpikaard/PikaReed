import type {Relation} from "typeorm";
import {
    Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import type {NovelChapter} from "./novel-chapter.entity";
import type {NovelReview} from "./novel-review.entity";
import {NovelStatus} from "./novel-status.enum";
import type {NovelView} from "./novel-view.entity";
import type {Tag} from "./tag.entity";
import {User} from "./user.entity";
import type {UserSavedNovel} from "./user-saved-novel.entity";

@Entity()
export class Novel extends BaseEntity {
    @Column({type: "int"})
    authorId: number;
    
    @ManyToOne(() => User)
    author: User;

    @Column()
    title: string;

    @Column()
    synopsis: string;

    @Column({default: false})
    featured: boolean;

    @Column({type: "enum", enum: NovelStatus})
    status: NovelStatus;

    @ManyToMany("Tag", "novels")
    @JoinTable()
    tags: Array<Relation<Tag>>;

    @OneToMany("NovelChapter", "novel")
    chapters: Array<Relation<NovelChapter>>;

    @OneToMany("NovelReview", "novel")
    reviews: Array<Relation<NovelReview>>;

    @OneToMany("NovelView", "novel")
    views: Array<Relation<NovelView>>;

    @OneToMany("UserSavedNovel", "novel")
    saves: Array<Relation<UserSavedNovel>>;
}
