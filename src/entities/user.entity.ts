import {
    Column, Entity, JoinTable, ManyToMany,
} from "typeorm";

import {BaseEntity} from "./base-entity";
import {Role} from "./role.entity";

@Entity()
export class User extends BaseEntity {
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    displayName: string;

    @Column()
    email: string;

    @Column({select: false})
    password: string;

    @Column({nullable: true})
    avatarUrl?: string;

    @ManyToMany(() => Role)
    @JoinTable()
    roles: Role[];
}
