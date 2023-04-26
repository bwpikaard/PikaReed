import {
    Column, Entity, ManyToMany,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import {Role} from "./role.entity";

@Entity()
export class Action extends BaseEntity {
    @Column()
    code: string;

    @ManyToMany(() => Role)
    roles: Role[];
}
