"use client";

import { useNotifications } from "@/context/NotificationContext";

export default function Notifications() {
  const { notifications } = useNotifications();

  return (
    <div className="fixed top-5 right-5 space-y-3 z-50">

      {notifications.map((n) => (
        <div
          key={n.id}
          className={`px-5 py-3 rounded-xl text-sm font-semibold shadow-lg border
          ${
            n.type === "success"
              ? "bg-green-500/10 border-green-500/30 text-green-400"
              : n.type === "warning"
              ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
              : "bg-blue-500/10 border-blue-500/30 text-blue-400"
          }`}
        >
          {n.message}
        </div>
      ))}

    </div>
  );
}
