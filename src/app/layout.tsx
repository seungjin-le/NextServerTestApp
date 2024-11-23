import '@/styles/tailwind.css'
import React, { ReactNode } from 'react'
import { getServerSession } from 'next-auth'
import Providers from '@/providers/providers'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Section from './contailer/Section'
import Header from './contailer/Header'
import Footer from './contailer/Footer'
import { Session } from 'next-auth/core/types'
import { cookies } from 'next/headers'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
}

export default async function RootLayout({ children }: { children: ReactNode }): Promise<ReactNode> {
  const session: Session | null = await getServerSession(authOptions)

  const cookieStore: ReadonlyRequestCookies = await cookies()
  const theme: string | undefined = cookieStore.get('theme')?.value || 'light'

  return (
    <html lang="ko" className={`size-full ${theme}`}>
      <body className="bg-gray-500 size-full min-h-[100dvh]">
        <Providers session={session as Session}>
          <div className="flex flex-col bg-blue-500">
            <Header />
            <Section>{children}</Section>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
