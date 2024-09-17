import { NextResponse } from "next/server";

export async function middleware(request) {
  // return NextResponse.redirect(new URL("/home", request.url));
  // return NextResponse.next();

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
