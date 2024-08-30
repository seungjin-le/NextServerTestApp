"use client";

import { useQuery } from "@tanstack/react-query";
import { serverSide } from "./page";
const Index = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => serverSide(),
  });
  console.log(data);
  return <div>{data && `${data.data.data.name} ${data.data.data.email}`}</div>;
};

export default Index;
