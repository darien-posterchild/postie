"use client";

import React, { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { PostiePanel } from "@/components/layout/postie-panel";
import { PostieProvider, usePostie } from "@/lib/postie-context";
import { cn } from "@/lib/utils";

function ShellContent({ children }: { children: ReactNode }) {
  const { postieView } = usePostie();
  const isSidebar = postieView === "sidebar";

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#FAFAFA] relative">
      <Header />

      {/* Main page content area */}
      <div
        className={cn(
          "w-full max-w-[1440px] flex-1 flex flex-row px-5 py-6 gap-5 transition-all duration-200 ease-out",
          isSidebar ? "justify-between" : "justify-center"
        )}
      >
        <main className="flex-1 min-w-0 flex flex-col gap-6 transition-all duration-200">
          {children}
        </main>

        {isSidebar && (
          <div className="w-[400px] min-w-[400px] max-w-[400px] shrink-0 pointer-events-none hidden min-[1240px]:block" />
        )}
      </div>

      {/* Global Fixed Postie AI Agent */}
      <PostiePanel />
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
