/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    // Proxy
    return [
      {
        source: "/api/:path*/",
        destination: `${process.env.NEXT_PUBLIC_URL}/:path*/`,
      },
    ];
  },
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  },
  trailingSlash: true,
};

export default nextConfig;
