import type {DefaultSession} from "next-auth";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
    interface User extends DefaultSession.User {
        id: number;
        roles: Array<{
            name: string;
            color: string;
        }>;
        actions: string[];
    }

    interface Session {
        user: User;
    }
}
