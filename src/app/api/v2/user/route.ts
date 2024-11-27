import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json({
    massage: ' Next.js!',
    status: 200,
    data: {
      name: 'Doe42222',
      email: 'john@doe.com'
    }
  })
}

export async function PATCH(request: Request): Promise<NextResponse> {
  return NextResponse.json('Hello, Next.js!', {
    status: 200,
    data: null,
    message: ''
  })
}
