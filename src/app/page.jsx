import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import Index from "./index";

import api from "@/utils/api";

export async function serverSide() {
  return await api.get("http://localhost:3001/api/v1/user").then((res) => res.data);
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
