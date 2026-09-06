import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { PostiePanel } from "@/components/layout/postie-panel";

export const metadata: Metadata = {
  title: "Postie Prototype",
  description: "UX/UI Prototype for Postie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="h-full flex flex-col font-sans bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-y-auto">{children}</main>
          <PostiePanel />
        </div>
      </body>
    </html>
  );
}
