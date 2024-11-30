import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const responseData = {
    message: ' Next.js! v2',
    status: 200,
    data: {
      name: '42222',
      email: 'john@doe.com'
    }
  }

  return NextResponse.json(responseData)
}

export async function PATCH(request: Request): Promise<NextResponse> {
  const responseData = {
    message: ' Next.js! v2',
    status: 200,
    data: {
      name: '42222',
      email: 'john@doe.com'
    }
  }
  return NextResponse.json(responseData)
}
