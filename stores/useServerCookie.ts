import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
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

export const useServerCookie = async () => {
  const cookieStore: any = cookies()

  const getCookie = (name: string): string | undefined => cookieStore.get(name)?.value

  const setCookie = async (name: string, value: string, options?: CookieOptions) => {
    await cookieStore.set(name, value, {
      ...options,
      path: options?.path ?? '/',
      secure: options?.secure ?? process.env.NODE_ENV === 'production',
      sameSite: options?.sameSite ?? 'lax'
    })
  }

  const deleteCookie = (name: string) => cookieStore.delete(name)
  return {
    getCookie,
    setCookie,
    deleteCookie
  }
}
