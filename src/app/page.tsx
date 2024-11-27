import React, { Suspense } from 'react'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import Index from './index'

import Loading from './loading'
import serverFetch from '@/utils/api'

export async function serverSide() {
  const data: Response | undefined = await serverFetch('/api/v1/user')
  const jsonData = await data?.json()
  console.log(jsonData)
  return { posts: jsonData || [] }
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
