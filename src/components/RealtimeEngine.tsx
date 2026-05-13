"use client";

import { useEffect } from "react";

export default function RealtimeEngine() {
  useEffect(() => {
    const events = [
      "BTC price updated",
      "New investor joined",
      "KYC verification completed",
      "USDT deposit confirmed",
      "Market volatility detected",
      "System sync completed",
    ];

    const interval = setInterval(() => {
      const event = events[Math.floor(Math.random() * events.length)];

      // GLOBAL EVENT BROADCAST (SIMULATION ONLY)
      const customEvent = new CustomEvent("FINTECH_EVENT", {
        detail: {
          message: event,
          time: new Date().toLocaleTimeString(),
        },
      });

      window.dispatchEvent(customEvent);

    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
