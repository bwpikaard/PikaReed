import {
    Column, Entity, ManyToMany, ManyToOne,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import {NovelStatus} from "./novel-status.enum";
import {Tag} from "./tag.entity";
import {User} from "./user.entity";

@Entity()
export class Novel extends BaseEntity {
    @ManyToOne(() => User)
    author: User;

    @Column()
    title: string;

    @Column()
    synopsis: string;

    @Column({type: "enum", enum: NovelStatus})
    status: NovelStatus;

    @ManyToMany(() => Tag)
    tags: Tag[];
}
