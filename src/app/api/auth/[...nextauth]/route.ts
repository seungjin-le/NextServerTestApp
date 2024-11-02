import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "@/utils/api";
import { AxiosResponse } from 'axios';
import { JWT, JWTDecodeParams, JWTEncodeParams } from 'next-auth/jwt/types';

interface User {
  id: string;
  email: string;
  name: string;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {  
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize:  async (credentials: Record<"email" | "password", string>): Promise<User | null> => {
        try {
          const data = {
            email: credentials.email,
            password: credentials.password,
          };
          // 사용자 인증 로직
          const res: AxiosResponse<User> = await api.post("/auth/login", data);

          return res.data;
        } catch (error) {
          return null;         
        }
      },
    }),
  ],
  jwt: {     
    maxAge: 60 * 60 * 24 * 30,
    async encode(params: JWTEncodeParams): Promise<string> {
      return "";
    },
    async decode(params: JWTDecodeParams): Promise<JWT> {
      return {};
    },
  },
  session: {
    jwt: true,
    strategy: "jwt",
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
