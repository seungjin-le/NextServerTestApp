import { NextResponse } from "next/server";

export async function POST(request) {
  const response = {
    status: 200,
    data: {
      accessToken: "accessToken",
    },
  };

  return NextResponse.json("Hello, Next.js!", response);
}
