import Link from 'next/link'

export default function TestPage() {
  return (
    <div>
      TestPage
      <Link href="/test/test_1">test_2</Link>
      <div className={'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[44px] '}>sdjfhasdklfjh</div>
    </div>
  )
}
