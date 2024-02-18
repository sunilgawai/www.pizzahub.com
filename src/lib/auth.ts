import { AuthOptions} from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: {
                    label: "User Name",
                    type: "text",
                    placeholder: "Enter your username"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials, req) {
                const user = await db.user.findUnique({
                    where: {
                        email: credentials?.username
                    }
                })

                if(!user) throw new Error("Username or email is incorrect");

                const isPasswordCorrect = await bcrypt.compare(credentials?.password as string, user.password as string);

                if(!isPasswordCorrect) throw new Error("Password is incorrect");

                const {password, ...userwithoutpass} = user;

                return userwithoutpass;
            },
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            if(user) token.user = user as User;
            return token;
        },
        async session({token, session}) {
            session.user = token.user;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_JWT_SECRET
    
}
