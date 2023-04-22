import {
    Column, Entity, JoinTable, ManyToMany,
} from "typeorm";

import {Action} from "./action.entity";
import {BaseEntity} from "./base-entity";
import {User} from "./user.entity";

@Entity()
export class Role extends BaseEntity {
    @Column()
    title: string;

    @Column()
    color: string;

    @ManyToMany(() => User)
    users: User[];

    @ManyToMany(() => Action)
    @JoinTable()
    actions: Action[];
}
