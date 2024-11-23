import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL("/home", request.url));
  // return NextResponse.next();
  const requestHeaders = new Headers(request.headers)
  console.log('middleware1')
  // Add new request headers
  requestHeaders.set('x-hello-from-middleware1', '------------- Next?')
  requestHeaders.set('x-hello-from-middleware2', '------------- Next?')

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })
}

export const config = {
  matcher: '/api/'
}
