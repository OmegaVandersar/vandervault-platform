"use client";

import { useEffect, useState } from "react";
import { FeedEvent, generateFeedEvent } from "@/lib/live-feed";

export default function LiveGlobalFeed() {
  const [feed, setFeed] = useState<FeedEvent[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const event = generateFeedEvent();

      setFeed((prev) => [event, ...prev.slice(0, 12)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

      <h3 className="text-xl font-black mb-6">
        Global Crypto Activity Feed
      </h3>

      <div className="space-y-3 max-h-96 overflow-auto">

        {feed.map((f) => (
          <div
            key={f.id}
            className="flex justify-between border border-white/10 p-4 rounded-xl"
          >
            <p>{f.message}</p>
            <p className="text-xs text-zinc-500">{f.time}</p>
          </div>
        ))}

      </div>

    </div>
  );
}
