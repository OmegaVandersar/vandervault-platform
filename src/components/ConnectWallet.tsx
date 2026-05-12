"use client";

import { useState } from "react";

export default function ConnectWallet() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");

  const connectWallet = () => {
    // Mock wallet connection (UI only for now)
    const fakeAddress =
      "0x7A6...F9C2" + Math.floor(Math.random() * 9999);

    setAddress(fakeAddress);
    setConnected(true);
  };

  const disconnectWallet = () => {
    setAddress("");
    setConnected(false);
  };

  return (
    <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4 flex items-center justify-between">

      {!connected ? (
        <button
          onClick={connectWallet}
          className="px-5 py-2 bg-amber-500 text-black rounded-xl font-semibold"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="flex items-center gap-4">

          <div className="text-sm text-zinc-300">
            {address}
          </div>

          <button
            onClick={disconnectWallet}
            className="px-4 py-2 border border-white/20 rounded-xl text-white text-sm"
          >
            Disconnect
          </button>

        </div>
      )}

    </div>
  );
}
