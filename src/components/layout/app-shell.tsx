"use client";

import React, { ReactNode } from "react";
import { SidebarNavigation } from "@/components/layout/sidebar-navigation";
import { PostiePanel } from "@/components/layout/postie-panel";
import { PostieProvider } from "@/lib/postie-context";

function ShellContent({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen h-screen flex flex-row bg-[#FFFDF5] relative overflow-hidden">
      {/* Sidebar: width: 280px (or 84px collapsed), flex: none */}
      <SidebarNavigation />

      {/* App content: flex: 1, min-width: 0 */}
      <div className="flex-1 min-w-0 h-full flex flex-col overflow-hidden">
        {/* Body: display flex, align-items flex-start, padding 20px, gap 20px, width 100%, height 100%, min-width: 0 */}
        <div className="w-full h-full p-5 flex flex-row items-start gap-5 min-w-0 box-border overflow-y-auto">
          {/* Main content: flex: 1 1 0%, min-width: 0, width: auto */}
          <main className="flex-1 min-w-0 w-auto self-stretch flex flex-col gap-6">
            {children}
          </main>

          {/* Postie AI Assistant: width: 360px, flex: 0 0 360px */}
          <PostiePanel />
        </div>
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <PostieProvider>
      <ShellContent>{children}</ShellContent>
    </PostieProvider>
  );
}
