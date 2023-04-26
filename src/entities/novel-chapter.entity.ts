import type {Relation} from "typeorm";
import {
    Column, Entity, ManyToOne, OneToMany,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import type {ChapterComment} from "./chapter-comment.entity";
import type {ChapterSuggestion} from "./chapter-suggestion.entity";
import {Novel} from "./novel.entity";

@Entity()
export class NovelChapter extends BaseEntity {
    @Column({type: "int"})
    novelId: number;

    @ManyToOne(() => Novel)
    novel: Novel;
    
    @Column({type: "int"})
    chapterNumber: number;

    @Column()
    title: string;

    @Column({type: "text"})
    htmlBody: string;

    @OneToMany("ChapterComment", "chapter")
    comments: Array<Relation<ChapterComment>>;

    @OneToMany("ChapterSuggestion", "chapter")
    suggestions: Array<Relation<ChapterSuggestion>>;
}
