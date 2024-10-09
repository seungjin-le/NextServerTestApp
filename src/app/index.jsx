"use client";

import { useQuery } from "@tanstack/react-query";
import { serverSide } from "./page";
import { signIn } from "next-auth/react";
import { useState } from "react";
import React from "react";

import axios from "axios";

const Index = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => serverSide(),
  });
  const [email, setEmail] = useState("asfdsafd");
  const [password, setPassword] = useState("asfasffasd");

  const handleLogin = async () => {
    const res = await axios.post("/api/v1/login", {
      data: {
        email,
        password,
      },
    });
    console.log(res);
  };

  return (
    <div>
      {data && `${data.data.name} ${data.data.email}`}
      <button onClick={() => signIn("credentials", { email, password })}>로그인</button>
      <div className="flex flex-col w-[400px] gap-[20px]  text-black">
        <form className={"flex flex-col gap-[15px]"}>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete={"off"} />
        </form>
        <button onClick={handleLogin}>로그인</button>
      </div>
    </div>
  );
};

export default Index;
