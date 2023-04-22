import {compare} from "bcrypt";
import type {
    AuthOptions, Session, TokenSet,
} from "next-auth";
import NextAuth from "next-auth";
import type {AdapterUser} from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";

import {ReadyDataSource} from "@/data-source";
import {User} from "@/entities/user.entity";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Email", type: "text", placeholder: "jsmith",
                },
                password: {label: "Password", type: "password"},
            },
            authorize: async function authorize(credentials) {
                if (!credentials?.username?.length || !credentials?.password?.length) return null;

                try {
                    const ds = await ReadyDataSource();
                    const userRepository = ds.getRepository(User);
                    const credentialsUser = await userRepository.findOne({
                        where: [
                            {email: credentials.username},
                            {displayName: credentials.username},
                        ],
                        select: {
                            id: true,
                            password: true,
                        },
                    });

                    if (!credentialsUser) return null;
                    if (!await compare(credentials.password, credentialsUser.password)) return null;

                    const user = await userRepository.findOneOrFail({where: {id: credentialsUser.id}, relations: {roles: {actions: true} } });

                    return {
                        id: user.id,
                        name: user.displayName,
                        email: user.email,
                        image: user.avatarUrl,
                        roles: user.roles.flatMap(r => ({
                            name: r.title,
                            color: r.color,
                        })),
                        actions: user.roles.flatMap(r => r.actions.flatMap(a => a.code)),
                    };
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.error(e);
                    throw new Error("Internal Server Error");
                }
            },
        }),
    ],
    pages: {
        signIn: "/sign-in",
        // signOut: "/sign-out",
        // error: "/error",
        // verifyRequest: "/verify-request",
        newUser: "/sign-up",
    },
    callbacks: {
        async jwt({
            token, user,
        }: {token: TokenSet; user: Session["user"] | AdapterUser;}): Promise<TokenSet> {
            user && (token.user = user);
            return token;
        },
        async session({
            session, token,
        }: {session: Session; token: TokenSet;}): Promise<Session> {
            session.user = token.user as Session["user"];
            return session;
        },
    },
};

export default NextAuth(authOptions);
