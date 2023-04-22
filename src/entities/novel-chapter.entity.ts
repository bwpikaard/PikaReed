import {
    Column, Entity, ManyToOne,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import {Novel} from "./novel.entity";

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
}
