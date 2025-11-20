import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  CredentialsSignin,
  type DefaultSession,
  type NextAuthConfig,
} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import Google from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/server/db";
import { verifyPassword } from "../../lib/bcrypt";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      isCredential?: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    id?: string;
    isCredential?: boolean;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */

type Credentials = {
  email: string;
  password: string;
};

class InvalidCredential extends CredentialsSignin {
  code = "Invalid Credential";
}
class InvalidInput extends CredentialsSignin {
  code = "Invalid Input";
}

export const authConfig = {
  session: { strategy: "jwt" },
  providers: [
    DiscordProvider,
    Google,
    CredentialsProvider({
      async authorize(credentials) {
        const creds = credentials as Credentials;
        if (
          !creds ||
          typeof creds.email !== "string" ||
          typeof creds.password !== "string"
        ) {
          throw new InvalidInput();
        }
        const userData = await db.userCredential.findUnique({
          where: {
            email: creds.email.toLowerCase(),
          },
          select: { id: true, password: true },
        });
        if (!userData?.password) {
          throw new InvalidCredential();
        }

        const isValid = await verifyPassword(creds.password, userData.password);
        if (!isValid) {
          throw new InvalidCredential();
        }

        const user = { id: userData.id, isCredential: true };
        return user;
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  callbacks: {
    jwt: ({ user, token }) => {
      if (user) {
        if (user?.isCredential) {
          token.isCredential = true;
        } else {
          token.isCredential = false;
        }
        token.id = user?.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      session.user.id = token.id as string;
      session.user.isCredential = token.isCredential as boolean;
      return session;
    },
  },
} satisfies NextAuthConfig;
