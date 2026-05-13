"use client";

import { useEffect, useState } from "react";

type Notification = {
  id: string;
  message: string;
  type: "success" | "info" | "warning";
};

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const pool = [
    { message: "BTC surged +2.4% in last 5 minutes", type: "success" },
    { message: "Large USDT transfer detected", type: "info" },
    { message: "Market volatility increasing", type: "warning" },
    { message: "New investor joined platform", type: "info" },
    { message: "Ethereum breakout forming", type: "success" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const item = pool[Math.floor(Math.random() * pool.length)];

      const notification: Notification = {
        id: Math.random().toString(),
        message: item.message,
        type: item.type as any,
      };

      setNotifications((prev) => [notification, ...prev.slice(0, 4)]);

      setTimeout(() => {
        setNotifications((prev) => prev.slice(0, -1));
      }, 5000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const colorMap = {
    success: "border-green-500 text-green-400",
    info: "border-blue-500 text-blue-400",
    warning: "border-yellow-500 text-yellow-400",
  };

  return (
    <div className="fixed top-5 right-5 space-y-3 z-50">

      {notifications.map((n) => (
        <div
          key={n.id}
          className={`bg-black border ${colorMap[n.type]} px-4 py-3 rounded-xl shadow-lg w-80`}
        >

          <p className="text-sm font-medium">
            {n.message}
          </p>

        </div>
      ))}

    </div>
  );
}
