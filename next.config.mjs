/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  proxy: {
    "/api": {  
      target: process.env.NEXT_PUBLIC_URL,
    },
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*/",
        destination: `${process.env.NEXT_PUBLIC_URL}/:path*/`
      },
    ];
  },
  trailingSlash: true,
};

export default nextConfig;
