/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    // Proxy
    return [
      {
        source: "/api/v1/:path*/",
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*/`,
      },
    ];
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  trailingSlash: true,
};

export default nextConfig;
