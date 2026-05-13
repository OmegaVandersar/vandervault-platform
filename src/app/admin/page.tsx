"use client";

import AdminControlCenter from "@/components/AdminControlCenter";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminPage() {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <main className="min-h-screen bg-black text-white">
        <AdminControlCenter />
      </main>
    </ProtectedRoute>
  );
}
