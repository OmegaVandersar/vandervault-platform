"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      // simple simulated auth
      localStorage.setItem("auth", "true");
      router.push("/dashboard");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="w-full max-w-md bg-zinc-950 border border-white/10 rounded-3xl p-8">

        <h1 className="text-3xl font-black mb-6">
          Investor Login
        </h1>

        <input
          className="w-full mb-4 px-4 py-3 bg-black border border-white/10 rounded-xl"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-6 px-4 py-3 bg-black border border-white/10 rounded-xl"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-amber-500 text-black font-bold py-3 rounded-xl"
        >
          Login
        </button>

        <p className="text-xs text-zinc-500 mt-6 text-center">
          Secure institutional access portal
        </p>

      </div>

    </main>
  );
}
