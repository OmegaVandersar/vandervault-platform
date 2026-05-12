"use client";

import { useEffect, useState } from "react";

type Notification = {
  id: number;
  message: string;
  type: "info" | "success" | "warning";
};

export default function NotificationFeed() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const messages = [
      "New investor joined from Switzerland",
      "Deposit confirmed: €12,500",
      "Security scan completed successfully",
      "New login detected (Germany)",
      "Portfolio rebalance executed",
    ];

    let counter = 0;

    const interval = setInterval(() => {
      const newNotification: Notification = {
        id: Date.now(),
        message: messages[counter % messages.length],
        type: "info",
      };

      setNotifications((prev) => [
        newNotification,
        ...prev.slice(0, 4),
      ]);

      counter++;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 w-80 space-y-3 z-50">

      {notifications.map((n) => (
        <div
          key={n.id}
          className="bg-zinc-950 border border-white/10 p-4 rounded-xl text-sm text-white animate-pulse"
        >
          🔔 {n.message}
        </div>
      ))}

    </div>
  );
          }
