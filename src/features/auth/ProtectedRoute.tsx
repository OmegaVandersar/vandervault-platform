"use client";

import { useAuth } from "./AuthContext";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-black">
            Access Restricted
          </h1>

          <p className="text-zinc-500 mt-4">
            Please authenticate to continue.
          </p>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}
