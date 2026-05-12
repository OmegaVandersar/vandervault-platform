import "./globals.css";

import {
  AuthProvider,
} from "@/features/auth/AuthContext";

import {
  LanguageProvider,
} from "@/i18n/LanguageContext";

export const metadata = {
  title: "VanderVault Platform",
  description: "Institutional fintech infrastructure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <LanguageProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </LanguageProvider>

      </body>
    </html>
  );
}
