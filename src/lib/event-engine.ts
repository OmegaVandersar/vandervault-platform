type EventType =
  | "DEPOSIT"
  | "WITHDRAWAL"
  | "KYC"
  | "LOGIN"
  | "TRADE";

export type PlatformEvent = {
  id: string;
  type: EventType;
  message: string;
  timestamp: number;
};

let listeners: ((event: PlatformEvent) => void)[] = [];

export function emitEvent(event: PlatformEvent) {
  listeners.forEach((fn) => fn(event));
}

export function subscribe(fn: (event: PlatformEvent) => void) {
  listeners.push(fn);
}

export function unsubscribe(fn: (event: PlatformEvent) => void) {
  listeners = listeners.filter((l) => l !== fn);
}

// demo generator (simulates real investor activity)
export function startDemoEvents() {
  const events: PlatformEvent[] = [
    {
      id: "1",
      type: "DEPOSIT",
      message: "New BTC deposit received (€12,450)",
      timestamp: Date.now(),
    },
    {
      id: "2",
      type: "KYC",
      message: "New KYC submission pending review",
      timestamp: Date.now(),
    },
    {
      id: "3",
      type: "WITHDRAWAL",
      message: "Withdrawal request initiated (€2,100)",
      timestamp: Date.now(),
    },
    {
      id: "4",
      type: "LOGIN",
      message: "New investor login detected (EU region)",
      timestamp: Date.now(),
    },
  ];

  setInterval(() => {
    const event = events[Math.floor(Math.random() * events.length)];
    emitEvent({
      ...event,
      id: Math.random().toString(),
      timestamp: Date.now(),
    });
  }, 15000);
}
