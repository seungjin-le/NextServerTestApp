import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  return (
    <div className="size-full bg-[gray]">
      <div className="text-3xl bg-[blue]">test1</div>

      <Link href="/test2">go To Test2</Link>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  console.log(req);
  return {
    props: {},
  };
}
