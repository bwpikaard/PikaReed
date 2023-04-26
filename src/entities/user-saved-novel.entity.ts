import {
    Column, Entity, ManyToOne,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import {Novel} from "./novel.entity";
import {User} from "./user.entity";

@Entity()
export class UserSavedNovel extends BaseEntity {
    @Column({type: "int"})
    userId: number;

    @ManyToOne(() => User)
    user: User;

    @Column({type: "int"})
    novelId: number;

    @ManyToOne(() => Novel)
    novel: Novel;
}
