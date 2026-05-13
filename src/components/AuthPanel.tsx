"use client";

import { useState } from "react";
import { login, logout, getSession } from "@/lib/auth-core";

export default function AuthPanel() {
  const [session, setSession] = useState(getSession());

  function handleLogin(role: "admin" | "investor") {
    login(role);
    setSession(getSession());
  }

  function handleLogout() {
    logout();
    setSession(null);
  }

  return (
    <div className="bg-zinc-950 border border-white/10 p-6 rounded-3xl">

      <h3 className="text-xl font-black mb-4">Authentication Panel</h3>

      {!session ? (
        <div className="flex gap-3">
          <button
            onClick={() => handleLogin("investor")}
            className="px-4 py-2 bg-white/10 rounded-xl"
          >
            Investor Login
          </button>

          <button
            onClick={() => handleLogin("admin")}
            className="px-4 py-2 bg-amber-500 text-black rounded-xl"
          >
            Admin Login
          </button>
        </div>
      ) : (
        <div className="space-y-3">

          <p className="text-green-400 font-bold">
            Logged in as: {session.role.toUpperCase()}
          </p>

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-xl"
          >
            Logout
          </button>

        </div>
      )}

    </div>
  );
}
