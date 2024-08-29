import ComA from "@/components/ssrComA";

export default function Page({ data }) {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
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
