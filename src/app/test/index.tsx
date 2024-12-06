'use client'

import { useRouter } from 'next/navigation'
export default function Index() {
  const router = useRouter()
  return (
    <div>
      TestPage Link
      <button onClick={() => router.push('/')}>Go to Home</button>
    </div>
  )
}
