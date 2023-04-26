import {
    Column, Entity, ManyToOne, Unique,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import {Novel} from "./novel.entity";
import {User} from "./user.entity";

@Entity()
@Unique("user_novel", ["userId", "novelId"])
export class NovelView extends BaseEntity {
    @Column({type: "int"})
    userId: number;

    @ManyToOne(() => User)
    user: User;

    @Column({type: "int"})
    novelId: number;

    @ManyToOne(() => Novel)
    novel: Novel;
}
