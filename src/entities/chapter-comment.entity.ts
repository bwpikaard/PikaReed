import type {Relation} from "typeorm";
import {
    Column, Entity, ManyToOne, OneToMany,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import {NovelChapter} from "./novel-chapter.entity";
import {User} from "./user.entity";

@Entity()
export class ChapterComment extends BaseEntity {
    @Column({type: "int"})
    userId: number;
    
    @ManyToOne(() => User)
    user: User;

    @Column({type: "int"})
    chapterId: number;

    @ManyToOne(() => NovelChapter)
    chapter: NovelChapter;

    @Column({type: "int", nullable: true})
    parentId: number;

    @ManyToOne(() => ChapterComment, {nullable: true})
    parent: ChapterComment;

    @OneToMany("ChapterComment", "parent")
    children: Array<Relation<ChapterComment>>;

    @Column()
    comment: string;
}
