import {
    Column, Entity,
} from "typeorm";

import {BaseEntity} from "./base-entity";

@Entity()
export class FeedbackSubmission extends BaseEntity {
    @Column()
    email: string;

    @Column()
    subject: string;

    @Column()
    body: string;
}
