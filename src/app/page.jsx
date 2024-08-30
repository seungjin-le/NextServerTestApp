import { dehydrate, HydrationBoundary, QueryClient, useQuery } from "@tanstack/react-query";
import Index from "./index";

export async function serverSide() {
  return (await fetch("http://localhost:3000/api/user")).json();
}

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: () => serverSide(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Index />
    </HydrationBoundary>
  );
}
