"use client";

import React, { useState } from "react";
import { PanelRightClose, PanelRightOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface PostiePanelProps {
  className?: string;
  defaultOpen?: boolean;
}

export function PostiePanel({ className, defaultOpen = true }: PostiePanelProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <aside
      className={cn(
        "relative flex flex-col border-l border-zinc-200 bg-white transition-all duration-200 dark:border-zinc-800 dark:bg-zinc-900",
        isOpen ? "w-80 sm:w-96" : "w-12",
        className
      )}
      aria-label="Postie Panel"
    >
      {/* Panel Header & Toggle */}
      <div className="flex h-14 items-center justify-between border-b border-zinc-200 px-3 dark:border-zinc-800">
        {isOpen && (
          <div className="flex items-center gap-2 overflow-hidden px-1">
            <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
            <span className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Postie Panel
            </span>
          </div>
        )}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-md text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
            !isOpen && "mx-auto"
          )}
          title={isOpen ? "Collapse panel" : "Expand panel"}
          aria-label={isOpen ? "Collapse panel" : "Expand panel"}
        >
          {isOpen ? (
            <PanelRightClose className="h-4 w-4" />
          ) : (
            <PanelRightOpen className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Panel Body */}
      {isOpen ? (
        <div className="flex-1 overflow-y-auto p-4">
          <div className="rounded-lg border border-dashed border-zinc-200 p-6 text-center text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
            PostiePanel content placeholder
          </div>
        </div>
      ) : (
        <div className="flex-1 py-4 flex flex-col items-center">
          <span className="text-[10px] tracking-wider text-zinc-400 uppercase [writing-mode:vertical-rl] rotate-180">
            Postie Panel
          </span>
        </div>
      )}
    </aside>
  );
}
