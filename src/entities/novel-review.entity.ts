import {
    Column, Entity, ManyToOne,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import {Novel} from "./novel.entity";
import {User} from "./user.entity";

@Entity()
export class NovelReview extends BaseEntity {
    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => Novel)
    novel: Novel;

    @Column()
    rating: number;

    @Column()
    comment: string;

}
