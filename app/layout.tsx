import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import DesktopHeader from "@/components/DesktopHeader";
import BottomNavigation from "@/components/BottomNavigation";

export const metadata: Metadata = {
  title: "JobGuide",
  description: "Your guide to government job notifications, exam calendars, and study resources",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "JobGuide",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased min-h-screen"
        style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      >
        <ThemeProvider>
          <DesktopHeader />
          <main
            style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 4rem)" }}
          >
            {children}
          </main>
          <BottomNavigation />
        </ThemeProvider>
      </body>
    </html>
  );
}
