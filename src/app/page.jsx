import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { getServerSession } from "next-auth/next";
import Index from "./index";
import { authOptions } from "./api/auth/[...nextauth]/route";
import api from "@/utils/api";

export async function serverSide() {
  return await api.get("http://localhost:3000/api/user").then((res) => res.data);
}

export default async function Page() {
  const queryClient = new QueryClient();
  const session = await getServerSession(authOptions);
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
