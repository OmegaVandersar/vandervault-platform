import "./globals.css";

import { AuthProvider } from "@/features/auth/AuthContext";
import { LanguageProvider } from "@/i18n/LanguageContext";

import NotificationFeed from "@/components/NotificationFeed";

export const metadata = {
  title: "VanderVault Holdings",
  description: "Institutional Global Digital Asset Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* LANGUAGE SYSTEM */}
        <LanguageProvider>

          {/* AUTH SYSTEM */}
          <AuthProvider>

            {/* APP CONTENT */}
            {children}

            {/* GLOBAL LIVE NOTIFICATIONS */}
            <NotificationFeed />

          </AuthProvider>

        </LanguageProvider>

      </body>
    </html>
  );
}
