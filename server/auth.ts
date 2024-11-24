import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import { db } from ".";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        const existingUser = await db.user.findUnique({
          where: { email: user.email! },
        });

        if (!existingUser) {
          // Aggiungi l'utente al database
          await db.user.create({
            data: {
              id: user.id!,
              name: user.name!,
              email: user.email!,
              image: user.image!,
            },
          });
        }
        return true;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },
    async session({ session, user }) {
      return session;
    },
  },
});