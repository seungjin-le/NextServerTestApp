import { NextResponse } from "next/server";

export async function POST(request) {
  console.log("------------- login start -------------");
  console.log(request);
  console.log("------------- login end -------------");
  const response = {
    status: 200,
    data: {
      accessToken: "accessTokensadfasdfasdfasdfasdf",
    },
  };

  return NextResponse.json(response);
}
