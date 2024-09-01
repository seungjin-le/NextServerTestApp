"use client";

import { useQuery } from "@tanstack/react-query";
import { serverSide } from "./page";
import { signIn } from "next-auth/react";
import React from "react";

const Index = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => serverSide(),
  });
  console.log(data);
  return (
    <div>
      {data && `${data.data.name} ${data.data.email}`}
      <button onClick={() => signIn()}>로그인</button>
    </div>
  );
};

export default Index;
