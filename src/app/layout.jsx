import "@/styles/tailwind.css";
import React from "react";
import Providers from "@/providers/providers";
export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="w-full h-full">
      <body className="bg-gray-500 w-full h-full">
        <Providers>
          <div className="flex flex-col bg-blue-500">
            <div>Root Layout</div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
