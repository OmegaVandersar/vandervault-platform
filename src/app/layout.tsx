import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Notifications from "@/components/Notifications";
import { NotificationProvider } from "@/context/NotificationContext";

export const metadata = {
  title: "Omega Finance Dashboard",
  description: "Institutional Investment Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <NotificationProvider>

          <div className="flex">

            <Sidebar />

            <main className="flex-1 md:ml-64 min-h-screen">
              {children}
            </main>

            <Notifications />

          </div>

        </NotificationProvider>

      </body>
    </html>
  );
}
