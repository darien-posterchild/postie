"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/tell", label: "Tell" },
  { href: "/raise", label: "Raise" },
  { href: "/manage", label: "Manage" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex h-14 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 hover:opacity-80 transition-opacity"
          >
            <span className="inline-block h-3 w-3 rounded-full bg-blue-600" />
            <span className="text-base font-bold">Postie</span>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          <span>Dev Prototype</span>
        </div>
      </div>
    </header>
  );
}
