import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "@/utils/api";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        // 사용자 인증 로직
        const user = { email: credentials.email, password: credentials.password };
        try {
          console.log(user);
          const res = await api.post("http://localhost:3000/api/v1/auth/login", user);
          console.log(res);
        } catch (error) {
          // console.log(error);
        }

        return res.data;
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
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
