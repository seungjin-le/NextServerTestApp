import React, { Suspense } from 'react'
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

export default async function Page() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: () => serverSide()
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Index />
      <div className={'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[44px] '}>sdjfhasdklfjh</div>
    </HydrationBoundary>
  )
}
