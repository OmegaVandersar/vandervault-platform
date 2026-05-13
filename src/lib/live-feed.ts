export type FeedEvent = {
  id: string;
  message: string;
  time: string;
};

const countries = ["Canada", "USA", "Germany", "Switzerland", "UK", "Australia"];
const actions = [
  "completed KYC verification",
  "initiated a BTC deposit",
  "requested a withdrawal of €3,500",
  "received USDT transfer",
  "opened new investment portfolio",
];

export function generateFeedEvent(): FeedEvent {
  const country = countries[Math.floor(Math.random() * countries.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];

  return {
    id: Math.random().toString(),
    message: `User from ${country} ${action}`,
    time: new Date().toLocaleTimeString(),
  };
}
