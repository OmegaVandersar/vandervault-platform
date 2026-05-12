import "./globals.css";

export const metadata = {
  title: "VanderVault Platform",
  description: "Global fintech infrastructure platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
