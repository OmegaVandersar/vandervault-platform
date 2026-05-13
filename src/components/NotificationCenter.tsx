"use client";

import { useEffect, useState } from "react";
import useRealtimeEvents from "@/hooks/useRealtimeEvents";

type Notification = {
  id: string;
  message: string;
};

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const event = useRealtimeEvents();

  useEffect(() => {
    if (!event) return;

    const newNotification: Notification = {
      id: Math.random().toString(),
      message: event.message,
    };

    setNotifications((prev) => [newNotification, ...prev.slice(0, 4)]);
  }, [event]);

  return (
    <div className="fixed top-5 right-5 space-y-3 z-50">

      {notifications.map((n) => (
        <div
          key={n.id}
          className="bg-black border border-amber-500/40 text-amber-300 px-4 py-3 rounded-xl shadow-xl w-80 backdrop-blur-xl"
        >
          <p className="text-sm font-medium">{n.message}</p>
        </div>
      ))}

    </div>
  );
}
