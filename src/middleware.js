import { NextResponse } from "next/server";

export async function middleware(request) {
  // return NextResponse.redirect(new URL("/home", request.url));
  // return NextResponse.next();
  const requestHeaders = new Headers(request.headers);

  // Add new request headers
  requestHeaders.set("x-hello-from-middleware1", "------------- Next?");
  requestHeaders.set("x-hello-from-middleware2", "------------- Next?");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: "/api/:path*",
};
