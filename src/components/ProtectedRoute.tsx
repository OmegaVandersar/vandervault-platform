"use client";

import { ReactNode, useEffect, useState } from "react";
import { getUserRole, UserRole } from "@/lib/auth";

export default function ProtectedRoute({
  children,
  allowedRoles,
}: {
  children: ReactNode;
  allowedRoles: UserRole[];
}) {
  const [role, setRole] = useState<UserRole | null>(null);

  useEffect(() => {
    setRole(getUserRole());
  }, []);

  if (!role) {
    return (
      <div className="p-10 text-white">
        Loading access control...
      </div>
    );
  }

  if (!allowedRoles.includes(role)) {
    return (
      <div className="p-10 text-red-400 font-bold">
        Access Denied
      </div>
    );
  }

  return <>{children}</>;
}
