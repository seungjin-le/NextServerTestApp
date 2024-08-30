import Providers from "@/app/providers";
import "@/styles/tailwind.css";

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="w-full h-full">
      <body className="bg-gray-500 w-full h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
