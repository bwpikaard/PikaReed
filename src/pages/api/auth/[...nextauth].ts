import {compare} from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import {ReadyDataSource} from "@/data-source";
import {User} from "@/entities/user.entity";

export default NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: "Credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: {
                    label: "Username", type: "text", placeholder: "jsmith",
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
                            password: true,
                        },
                    });

                    if (!credentialsUser) return null;
                    if (!await compare(credentials.password, credentialsUser.password)) return null;

                    const user = await userRepository.findOneOrFail({where: {id: credentialsUser.id} });
                    return user;
                } catch {
                    throw new Error("Internal Server Error");
                }
            },
        }),
    ],
});
