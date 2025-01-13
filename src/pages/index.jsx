import ComA from "@/components/ssrComA";
import { useRouter } from "next/navigation";

export default function Page({ data }) {
  const router = useRouter();
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
      <button
        onClick={() =>
          router.push("test1", undefined, {
            query: { id: 1, qwertt: "te222222222st" },
            state: {
              id: 1,
              qwertt: "test",
            },
          })
        }
      >
        Go To List
      </button>
      {data && `${data.data.name} ${data.data.email}`}
      <ComA />
    </main>
  );
}
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/v1/user");

  return {
    props: {
      data: await res.json(),
    },
  };
}
