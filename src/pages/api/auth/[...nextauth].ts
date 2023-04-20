import {compare} from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import {ReadyDataSource} from "@/data-source";
import {User} from "@/entities/user.entity";

export default NextAuth({
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
                        where: {email: credentials.username},
                        select: {
                            id: true,
                            password: true,
                        },
                    });

                    if (!credentialsUser) return null;
                    if (!await compare(credentials.password, credentialsUser.password)) return null;

                    const user = await userRepository.findOneOrFail({where: {id: credentialsUser.id} });
                    return {
                        id: user.id, name: user.displayName, email: user.email, image: user.avatarUrl,
                    };
                } catch {
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
});
