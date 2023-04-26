import {
    Column, Entity, ManyToOne,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import {NovelChapter} from "./novel-chapter.entity";
import {User} from "./user.entity";

@Entity()
export class UserChapterBookmark extends BaseEntity {
    @Column({type: "int"})
    userId: number;

    @ManyToOne(() => User)
    user: User;

    @Column({type: "int"})
    chapterId: number;

    @ManyToOne(() => NovelChapter)
    chapter: NovelChapter;
}
