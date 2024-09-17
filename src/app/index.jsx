"use client";

import { useQuery } from "@tanstack/react-query";
import { serverSide } from "./page";
import { signIn } from "next-auth/react";
import { useState } from "react";
import React from "react";
import api from "@/utils/api";

const Index = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => serverSide(),
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await api
      .post("/auth/login", { email, password })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {data && `${data.data.name} ${data.data.email}`}
      <button onClick={() => signIn("credentials", { email, password })}>로그인</button>
      <div className="flex flex-col w-[400px] gap-[20px]  text-black">
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>로그인</button>
      </div>
    </div>
  );
};

export default Index;
