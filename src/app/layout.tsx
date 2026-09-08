import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/app-shell";

export const metadata: Metadata = {
  title: "PosterChild",
  description: "Postie AI & PosterChild Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-[#FAFAFA]">
      <body className="min-h-screen bg-[#FAFAFA] text-[#171717] antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
