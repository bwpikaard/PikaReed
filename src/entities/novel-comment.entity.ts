import type {Relation} from "typeorm";
import {
    Column, Entity, ManyToOne, OneToMany,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import {NovelChapter} from "./novel-chapter.entity";
import {User} from "./user.entity";

@Entity()
export class NovelComment extends BaseEntity {
    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => NovelChapter)
    chapter: NovelChapter;

    @Column({type: "int"})
    parentId: number;

    @ManyToOne(() => NovelComment, {nullable: true})
    parent: NovelComment;

    @OneToMany("NovelComment", "parent")
    children: Array<Relation<NovelComment>>;

    @Column()
    comment: string;
}
