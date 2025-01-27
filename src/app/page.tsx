// React 핵심 및 타입 관련 임포트
import React, { ReactNode, Suspense } from 'react'
// 서버 사이드 데이터 페칭 및 하이드레이션을 위한 React Query 임포트
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import Index from './index'
// 서버 사이드 API 호출을 위한 커스텀 유틸리티 함수
import serverFetch from '@/utils/api'

/**
 * 서버로부터 사용자 데이터를 가져오는 함수
 * @returns {Promise<{posts: any}>} 사용자 게시물 데이터를 포함한 객체 또는 실패 시 빈 객체 반환
 */
export async function serverSide() {
  try {
    // API로부터 사용자 데이터 가져오기
    const data: Response | undefined = await serverFetch('/api/v1/user')
    const jsonData = await data?.json()

    return { posts: jsonData || {} }
  } catch (error) {
    // 오류 발생 시 빈 객체 반환
    return { posts: {} }
  }
}

/**
 * 서버 사이드 데이터 페칭과 클라이언트 사이드 하이드레이션을 처리하는 Next.js 페이지 컴포넌트
 * React Query를 사용하여 효율적인 데이터 관리와 상태 동기화를 구현
 * @returns {Promise<ReactNode>} 하이드레이션된 데이터가 포함된 렌더링된 페이지 컴포넌트
 */
export default async function Page(): Promise<ReactNode> {
  // React Query 클라이언트 초기화
  const queryClient = new QueryClient()

  // 서버 사이드에서 데이터 미리 가져오기
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: () => serverSide()
  })

  // 하이드레이션된 데이터와 함께 페이지 렌더링
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Index />
    </HydrationBoundary>
  )
}
