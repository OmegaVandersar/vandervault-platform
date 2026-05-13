"use client";

import { useEffect, useState } from "react";

type Chat = {
  id: string;
  user: string;
  message: string;
};

export default function BitcoinChat() {
  const [messages, setMessages] = useState<Chat[]>([]);
  const [input, setInput] = useState("");

  const users = ["Satoshi", "TraderX", "CryptoQueen", "MinerPro", "BlockChainGuy"];

  useEffect(() => {
    const interval = setInterval(() => {
      const msg: Chat = {
        id: Math.random().toString(),
        user: users[Math.floor(Math.random() * users.length)],
        message: "Bitcoin is looking strong today 🚀",
      };

      setMessages((prev) => [msg, ...prev.slice(0, 10)]);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

      <h3 className="text-xl font-black mb-4">
        Live Bitcoin Chat
      </h3>

      <div className="space-y-3 max-h-72 overflow-auto mb-4">

        {messages.map((m) => (
          <div key={m.id} className="border border-white/10 p-3 rounded-xl">
            <p className="text-amber-400 text-sm font-bold">{m.user}</p>
            <p>{m.message}</p>
          </div>
        ))}

      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type message..."
        className="w-full p-3 bg-black border border-white/10 rounded-xl"
      />

    </div>
  );
}
