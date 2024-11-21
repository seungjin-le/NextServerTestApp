'use server'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

interface FetchOptions extends RequestInit {
  headers?: HeadersInit
}

export default async function serverFetch(url: string): Promise<Response | undefined> {
  const session: any = await getServerSession(authOptions)
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${session?.accessToken}`
  }

  const fetchOptions: FetchOptions = {
    headers
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, fetchOptions)

    if (response.status === 500) throw new Error(`Undefined Error ${response.statusText}`, { cause: response.status })

    if (response.status >= 400) {
      const errorData = await response.json()
      const error = new Error(errorData.message, errorData.status)
      throw error // catch 로 빠짐
    }

    return response
  } catch (error: Error | any) {
    // Promise 자체가 rejected (network error, CORS 등)
    throw {
      data: null,
      status: 500,
      message: error.response?.message || error.message
    }
  }
}
