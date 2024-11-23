import React, { Suspense } from 'react'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import Index from './index'

import Loading from './loading'

export async function serverSide() {
  return { posts: [] }
}

export default async function Page() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: serverSide
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<Loading />}>
        <Index />
      </Suspense>
    </HydrationBoundary>
  )
}
