import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)

  // Add new request headers
  requestHeaders.set('x-hello-from-middleware1', '------------- 123123123123Next?')
  requestHeaders.set('x-hello-from-middleware2', '------------- Next?')

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })
}

export const config = {
  matcher: ['/api/v1/:path*']
}
