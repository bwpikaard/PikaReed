import {
    Column, Entity,
} from "typeorm";

import {BaseEntity} from "./base-entity";

@Entity()
export class Tag extends BaseEntity {
    @Column()
    code: string;

    @Column()
    description: string;
}
