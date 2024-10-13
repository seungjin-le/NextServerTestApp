import { NextResponse } from "next/server";

export async function POST(request) {
  const response = {
    status: 200,
    data: {
      accessToken: "accessTokensadfasdfasdfasdfasdf",
    },
  };

  return NextResponse.json(response);
}
