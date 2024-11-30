/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  compress: true, // 압축 활성화

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
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/v1/:path*',
          destination: `/api/v2/:path*`
        }
      ], //  헤더/리디렉션 후에 확인되며  _next/public 파일을 포함한 모든 파일 전에 확인 페이지 파일을 덮어쓸 수 있다.
      afterFiles: [], // 이 rewrites는 페이지/공용 파일을 확인한 후에 확인되며 동적 경로 전에 확인
      fallback: [] // 이 rewrites는 페이지/공용 파일과 동적 경로를 확인한 후에 확인
    }
  }
}
