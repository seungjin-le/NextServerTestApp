/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compress: true, // 압축 활성화
  async rewrites() {
    // Proxy
    return [
      {
        source: '/api/v1/:path*',
        destination: `/api/v2/user`
      }
    ]
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js'
        }
      }
    }
  }
}

export default nextConfig
