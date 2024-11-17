import "@/styles/tailwind.css";
import React from "react";
import { getServerSession } from "next-auth";
import Providers from "@/providers/providers";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Section from './contailer/Section';
import Header from './contailer/Header';
import Footer from './contailer/Footer';
import { Provider } from 'jotai'
export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const session = getServerSession(authOptions);

  return (
    <html lang="ko" className="size-full" >
      <body className="bg-gray-500 size-full min-h-[100dvh]">
      <Provider>
        <Providers session={session}>
   
          <div className="flex flex-col bg-blue-500">
            <Header />
            <Section>{children}</Section>
            <Footer />
          </div>
        
        </Providers>  
        </Provider>
      </body>
    </html>
  );
}
