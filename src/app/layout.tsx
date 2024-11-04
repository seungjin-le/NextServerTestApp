import "@/styles/tailwind.css";
import React from "react";
import { getServerSession } from "next-auth";
import Providers from "@/providers/providers";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const session = getServerSession(authOptions);

  return (
    <html lang="ko" className="size-full" >
      <body className="bg-gray-500 size-full">
        <Providers session={session}>
          <div className="flex flex-col bg-blue-500">
            <div>Root Layout</div>
            {children}
          </div>
        </Providers>  
      </body>
    </html>
  );
}
