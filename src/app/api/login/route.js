export async function POST(request) {
  return NextResponse.json("Hello, Next.js!", {
    status: 200,
    data: {
      accessToken: "accessToken",
    },
  });
}
