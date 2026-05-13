"use client";

import { useState } from "react";
import { setRole, getRole } from "@/lib/ui-role";

export default function RoleSwitch() {
  const [role, setLocalRole] = useState(getRole());

  function changeRole(newRole: "admin" | "investor") {
    setRole(newRole);
    setLocalRole(newRole);
  }

  return (
    <div className="bg-zinc-950 border border-white/10 p-4 rounded-2xl flex justify-between items-center">

      <div>
        <p className="text-sm text-zinc-400">Current Mode</p>
        <p className="font-bold text-white">{role.toUpperCase()}</p>
      </div>

      <div className="flex gap-2">

        <button
          onClick={() => changeRole("investor")}
          className="px-3 py-1 rounded-lg bg-white/10"
        >
          Investor
        </button>

        <button
          onClick={() => changeRole("admin")}
          className="px-3 py-1 rounded-lg bg-amber-500 text-black"
        >
          Admin
        </button>

      </div>

    </div>
  );
}
