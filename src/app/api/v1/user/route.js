import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    massage: "Hello, Next.js!",
    status: 200,
    data: {
      name: "John Doe4",
      email: "john@doe.com",
    },
  });
}

export async function PATCH(request) {
  return NextResponse.json("Hello, Next.js!", {
    status: 200,
    data: {
      massage: "massage",
    },
  });
}
