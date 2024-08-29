export async function serverSide() {
  //await res.json();
  return (await fetch("http://localhost:3000/api/user")).json();
}

export default async function Page() {
  const getTest = await serverSide();

  console.log(getTest);
  console.log(getTest?.data.data);
  // const get = async () => {
  //   const test = await axios.get("/api/v1/user");
  //   console.log(test);
  // };
  // useEffect(() => {
  //   get();
  // }, []);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>{getTest && "sdfasdf"}</main>
  );
}
