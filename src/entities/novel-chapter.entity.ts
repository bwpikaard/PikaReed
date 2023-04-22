import type {Relation} from "typeorm";
import {
    Column, Entity, ManyToOne, OneToMany,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import {Novel} from "./novel.entity";
import type {NovelComment} from "./novel-comment.entity";

@Entity()
export class NovelChapter extends BaseEntity {
    @ManyToOne(() => Novel)
    novel: Novel;
    
    @Column({type: "int"})
    chapterNumber: number;

    @Column()
    title: string;

    @Column({type: "text"})
    htmlBody: string;

    @OneToMany("NovelComment", "chapter")
    comments: Array<Relation<NovelComment>>;
}
