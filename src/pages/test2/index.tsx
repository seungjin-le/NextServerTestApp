import Link from "next/link";

export default function Page() {
  return (
    <div className="size-full bg-[#ddd]">
      <div className="text-3xl bg-[blue]">test2</div>

      <Link href="/test1">go To Test1</Link>
    </div>
  );
}
