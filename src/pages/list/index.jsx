const Page = () => {
  return <div>Enter</div>;
};

export default Page;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/v1/user");

  const data = await res.json();
  console.log(data);
  return { props: { data } };
}
