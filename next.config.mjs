/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compress: true, // 압축 활성화
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
  experimental: {

    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },

  trailingSlash: true,
};

export default nextConfig;
