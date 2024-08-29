import Providers from "@/app/providers";

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
