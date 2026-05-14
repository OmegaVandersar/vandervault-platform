import "./globals.css";
import Sidebar from "@/components/Sidebar";

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

        {/* GLOBAL APP WRAPPER */}
        <div className="flex">

          {/* SIDEBAR (GLOBAL) */}
          <Sidebar />

          {/* MAIN CONTENT */}
          <main className="flex-1 md:ml-64 min-h-screen">
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}
