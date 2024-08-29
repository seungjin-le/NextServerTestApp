import { NextResponse } from "next/server";

export async function GET(request) {
  console.log(request);
  return NextResponse.json(
    {
      data: {
        massage: "massage",
        status: 200,
        data: {
          name: "John Doe",
          email: "john@doe.com",
        },
      },
    },
    {
      status: 200,
    }
  );
}

export async function PATCH(request) {
  return NextResponse.json("Hello, Next.js!", {
    status: 200,
    data: {
      massage: "massage",
    },
  });
}
