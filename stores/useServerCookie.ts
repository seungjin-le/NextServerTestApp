'use server'

import { cookies } from 'next/headers'

export type CookieOptions = {
  maxAge?: number
  expires?: Date
  path?: string
  domain?: string
  secure?: boolean
  httpOnly?: boolean
  sameSite?: 'strict' | 'lax' | 'none'
}

const cookieOption: CookieOptions = {
  path: '/',
  httpOnly: true,
  secure: true,
  sameSite: 'lax'
}

export async function setCookie(name: string, value: string) {
  const cookie = await cookies()
  cookie.set(name, value, cookieOption)
}

export async function clearCookie(name: string) {
  const cookieStore = await cookies()
  cookieStore.delete(name)
}

/*
* @param {string} 쿠키 이름
* @return: cookie value
* */
export const getServerCookie = async (name: string): Promise<string | undefined> => (await cookies()).get(name)?.value
