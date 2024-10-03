import { NextResponse } from "next/server";

export async function POST(request) {
  console.log(request);
  const response = {
    status: 200,
    data: {
      accessToken: "accessTokensadfasdfasdfasdfasdf",
    },
  };

  return NextResponse.json(response);
}
