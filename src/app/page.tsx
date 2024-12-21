import React, { ReactNode, Suspense } from 'react'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import Index from './index'
import serverFetch from '@/utils/api'

export async function serverSide() {
  try {
    const data: Response | undefined = await serverFetch('/api/v1/user')
    const jsonData = await data?.json()

    return { posts: jsonData || {} }
  } catch (error) {
    return { posts: {} }
  }
}

export default async function Page(): Promise<ReactNode> {
  const queryClient = new QueryClient()  

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: () => serverSide()
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Index />
    </HydrationBoundary>
  )
}
  