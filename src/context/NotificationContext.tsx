"use client";

import { createContext, useContext, useState } from "react";

type Notification = {
  id: number;
  message: string;
  type: "success" | "info" | "warning";
};

type ContextType = {
  notifications: Notification[];
  push: (msg: string, type?: "success" | "info" | "warning") => void;
  remove: (id: number) => void;
};

const NotificationContext = createContext<ContextType | null>(null);

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const push = (
    message: string,
    type: "success" | "info" | "warning" = "info"
  ) => {
    const id = Date.now();

    setNotifications((prev) => [
      ...prev,
      { id, message, type },
    ]);

    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((n) => n.id !== id)
      );
    }, 4000);
  };

  const remove = (id: number) => {
    setNotifications((prev) =>
      prev.filter((n) => n.id !== id)
    );
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, push, remove }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error("useNotifications must be used within provider");
  return context;
};
