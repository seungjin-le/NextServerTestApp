import '@/styles/tailwind.css'
import React, { ReactNode } from 'react'
import { getServerSession } from 'next-auth'
import Providers from '@/providers/providers'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Section from '@/container/Section'
import Header from '@/container/Header'
import Footer from '@/container/Footer'
import { Session } from 'next-auth/core/types'
import { cookies } from 'next/headers'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import PageTransition from '@/providers/PageTransition'
import useServerCookie from '../../stores/useServerCookie'

interface RootLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: 'Home',
  description: 'Next.js'
}

export default async function RootLayout({ children }: RootLayoutProps): Promise<ReactNode> {
  const session: Session | null = await getServerSession(authOptions)

  const cookieStore: ReadonlyRequestCookies = await cookies()
  const theme: string | undefined = cookieStore.get('theme')?.value || 'light'

  const setCookie = useServerCookie()
  setCookie('theme', theme)
  return (
    <html lang="ko" className={`size-full ${theme}`}>
      <body className="dark:bg-[#262c36] bg-n50 size-full min-h-[100dvh] flex flex-col">
        <Providers session={session as Session}>
          <PageTransition>
            <div className={'flex-1 flex flex-col items-center justify-start'}>
              <Header />
              <Section>{children}</Section>
            </div>
            <Footer />
          </PageTransition>
        </Providers>
      </body>
    </html>
  )
}
