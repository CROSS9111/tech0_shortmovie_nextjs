// import NextAuth from 'next-auth';
// import { PrismaAdapter } from '@auth/prisma-adapter';
// import { db } from '@/lib/db';
// import authConfig from '@/auth.config';

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   adapter: PrismaAdapter(db),
//   session: { strategy: 'jwt' },
//   ...authConfig,
// });


import NextAuth from "next-auth"
import { ZodError } from "zod"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "./lib/zod"
// Your own logic for dealing with plaintext password strings; be careful!
import { saltAndHashPassword } from "@/utils/password"
import { getUserFromDb } from "@/utils/db"

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials, request) => {
        try {
          const { email, password } = await signInSchema.parseAsync(credentials);

          // ユーザーを取得し、パスワードを検証
          const user = await getUserFromDb(email, password);

          if (!user) {
            throw new Error("User not found or invalid credentials.");
          }

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            console.error("Validation error:", error.errors);
          } else {
            console.error("Authentication error:", error);
          }
          return null;
        }
      },
    }),
  ],
})