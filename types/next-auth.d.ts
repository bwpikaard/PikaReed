// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

import type {User as UserEntity} from "@/entities/user.entity";

declare module "next-auth" {
    type User = Omit<UserEntity, "password">;

    interface Session {
        user: User;
    }
}
