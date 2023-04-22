import {
    Column, Entity, ManyToOne, OneToMany,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import {Novel} from "./novel.entity";
import {User} from "./user.entity";

@Entity()
export class NovelComment extends BaseEntity {
    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => Novel)
    novel: Novel;

    @ManyToOne(() => NovelComment, {nullable: true})
    parent: NovelComment;

    @OneToMany(() => NovelComment, nc => nc.parent)
    children: NovelComment[];

    @Column()
    comment: string;
}
