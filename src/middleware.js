import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  console.log("middleware asdfkasdfgkasdfgkajsdfgkajshf");

  // return NextResponse.redirect(new URL("/home", request.url));
  // return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/list",
};
