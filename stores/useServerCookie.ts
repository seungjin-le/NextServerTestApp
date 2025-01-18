import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

export type CookieOptions = {
  maxAge?: number
  expires?: Date
  path?: string
  domain?: string
  secure?: boolean
  httpOnly?: boolean
  sameSite?: 'strict' | 'lax' | 'none'
}

// Server Action for setting cookie
export async function setServerCookie(name: string, value: string, options?: CookieOptions) {
  'use server'

  const cookieStore = await cookies()

   cookieStore.set(name, value, {
    ...options,
    path: options?.path ?? '/',
    secure: options?.secure ?? process.env.NODE_ENV === 'production',
    sameSite: options?.sameSite ?? 'lax'
  })
  revalidatePath('/')
}

// Server Action for deleting cookie
export async function deleteServerCookie(name: string) {
  'use server'

  const cookieStore = await cookies()
  cookieStore.delete(name)
  revalidatePath('/')
}

// Read-only cookie access
export  async function getServerCookie(name: string):Promise<string | undefined> {
  const cookieStore = await cookies()
  return cookieStore.get(name)?.value
}
