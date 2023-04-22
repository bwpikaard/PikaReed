import type {Relation} from "typeorm";
import {
    Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import type {NovelChapter} from "./novel-chapter.entity";
import type {NovelReview} from "./novel-review.entity";
import {NovelStatus} from "./novel-status.enum";
import {Tag} from "./tag.entity";
import {User} from "./user.entity";

@Entity()
export class Novel extends BaseEntity {
    @ManyToOne(() => User)
    author: User;

    @Column()
    title: string;

    @Column()
    synopsis: string;

    @Column({type: "enum", enum: NovelStatus})
    status: NovelStatus;

    @ManyToMany(() => Tag)
    @JoinTable()
    tags: Tag[];

    @OneToMany("NovelChapter", "novel")
    chapters: Array<Relation<NovelChapter>>;

    @OneToMany("NovelReview", "novel")
    reviews: Array<Relation<NovelReview>>;
}
