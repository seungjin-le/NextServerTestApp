export async function serverSide() {
  return (await fetch("http://localhost:3000/api/user")).json();
}

export default async function Page() {
  const { data } = await serverSide();

  console.log(data);
  console.log(data.data);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
      {data && `${data.data.name} ${data.data.email}`}
    </main>
  );
}
