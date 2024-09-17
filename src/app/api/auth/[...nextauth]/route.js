import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "@/utils/api";

export const authOptions = {
  providers: [
    CredentialsProvider({
      authorize: async (credentials, req) => {
        try {
          console.log("credentials", credentials);
          const data = {
            email: credentials.email,
            password: credentials.password,
          };
          // 사용자 인증 로직
          const res = await api.post("/auth/login", data);
          console.log("res", res);
          return res;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: {
    jwt: true,
    strategy: "test_jwt",
    secureCookie: true,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token.user) session.user = token.user;
      return Promise.resolve(session);
    },
  },
  pages: {
    signIn: "/",
    error: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
