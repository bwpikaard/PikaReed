import type {Relation} from "typeorm";
import {
    Column, Entity, ManyToMany,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import type {Novel} from "./novel.entity";

@Entity()
export class Tag extends BaseEntity {
    @Column()
    code: string;

    @Column()
    description: string;

    @ManyToMany("Novel", "tags")
    novels: Array<Relation<Novel>>;
}
