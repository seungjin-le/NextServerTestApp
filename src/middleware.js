import { NextResponse } from "next/server";

export async function middleware(request) {
  // return NextResponse.redirect(new URL("/home", request.url));
  // return NextResponse.next();

  return NextResponse.next();
}


export const config = {
  matcher: "/",
};
