"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FigmaAsset } from "@/components/common/figma-asset";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "posterchild_sidebar_collapsed";

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getSnapshot = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
};

const getServerSnapshot = () => false;

function CollapsedTooltip({ label }: { label: string }) {
  return (
    <div
      role="tooltip"
      className="absolute left-[calc(100%+22px)] top-1/2 -translate-y-1/2 z-50 pointer-events-none whitespace-nowrap min-h-[28px] px-2 py-1 bg-[#262626] text-[#FFFFFF] font-['DM_Sans',sans-serif] font-medium text-[12px] leading-[18px] rounded-[6px] shadow-[0_4px_8px_rgba(0,0,0,0.12)] select-none opacity-0 transition-opacity duration-100 delay-0 group-hover:opacity-100 group-hover:duration-150 group-hover:delay-300 group-focus-within:opacity-100 group-focus-within:duration-100 group-focus-within:delay-0 flex items-center justify-center"
    >
      {label}
    </div>
  );
}

export function SidebarNavigation() {
  const pathname = usePathname();
  const storedCollapsed = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [localCollapsed, setLocalCollapsed] = useState<boolean | null>(null);
  const isCollapsed = localCollapsed !== null ? localCollapsed : storedCollapsed;

  const isTellRoute = pathname.startsWith("/tell");
  const [tellExpanded, setTellExpanded] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("posterchild_tell_expanded");
        if (saved !== null) {
          return saved === "true";
        }
      } catch {
        // Ignore
      }
    }
    return true;
  });

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (pathname.startsWith("/tell") && !tellExpanded) {
      setTellExpanded(true);
      try {
        localStorage.setItem("posterchild_tell_expanded", "true");
      } catch {
        // Ignore
      }
    }
  }

  const handleToggleTell = (expanded: boolean) => {
    setTellExpanded(expanded);
    try {
      localStorage.setItem("posterchild_tell_expanded", String(expanded));
    } catch {
      // Ignore
    }
  };

  const tellSubmenuItems = [
    {
      label: "Overview",
      href: "/tell",
      active: pathname === "/tell",
      iconInactive: "/figma/sidebar-v05/bar-chart-square-02.svg",
      iconActive: "/figma/sidebar-v05/bar-chart-square-02-active.svg",
    },
    {
      label: "Stories",
      href: "/tell/stories",
      active: pathname.startsWith("/tell/stories"),
      iconInactive: "/figma/sidebar-v05/book-open-01.svg",
      iconActive: "/figma/sidebar-v05/book-open-01-active.svg",
    },
    {
      label: "Connect",
      href: "/tell/connect",
      active: pathname.startsWith("/tell/connect"),
      iconInactive: "/figma/sidebar-v05/users-02.svg",
      iconActive: "/figma/sidebar-v05/users-02-active.svg",
    },
    {
      label: "Calendar",
      href: "/tell/calendar",
      active: pathname.startsWith("/tell/calendar"),
      iconInactive: "/figma/sidebar-v05/calendar.svg",
      iconActive: "/figma/sidebar-v05/calendar-active.svg",
    },
  ];

  const handleToggle = (collapsed: boolean) => {
    setLocalCollapsed(collapsed);
    try {
      localStorage.setItem(STORAGE_KEY, String(collapsed));
      window.dispatchEvent(new Event("storage"));
    } catch {
      // Ignore
    }
  };

  const navItems = [
    {
      label: "Home",
      href: "/",
      iconSrc: "/figma/sidebar-v05/home-line.svg",
      iconActiveSrc: "/figma/sidebar-v05/home-line-active.svg",
      active: pathname === "/",
    },
    {
      label: "Tell",
      href: "/tell",
      iconSrc: "/figma/sidebar-v05/announcement-02.svg",
      iconActiveSrc: "/figma/sidebar-v05/announcement-02-active.svg",
      active: pathname.startsWith("/tell"),
    },
    {
      label: "Raise",
      href: "/raise",
      iconSrc: "/figma/sidebar-v05/coins-hand.svg",
      iconActiveSrc: "/figma/sidebar-v05/coins-hand-active.svg",
      active: pathname.startsWith("/raise"),
    },
    {
      label: "Manage",
      href: "/manage",
      iconSrc: "/figma/sidebar-v05/folder.svg",
      iconActiveSrc: "/figma/sidebar-v05/folder-active.svg",
      active: pathname.startsWith("/manage"),
    },
  ];

  return (
    <aside
      data-figma-node="514:14456"
      aria-label="Sidebar navigation"
      className={cn(
        "h-screen sticky top-0 p-[20px_0px_20px_20px] box-border shrink-0 z-30 flex flex-col font-['DM_Sans',sans-serif] text-[14px] text-[#404040] transition-[width] duration-200 ease-out",
        isCollapsed
          ? "w-[84px] min-w-[84px] max-w-[84px]"
          : "w-[280px] min-w-[280px] max-w-[280px]"
      )}
    >
      {/* Content: 260px wide (expanded) or 64px wide (collapsed), 16px radius, white background, space-between */}
      <div
        className={cn(
          "h-full bg-[#FFFFFF] border border-[#E5E5E5] rounded-[16px] flex flex-col justify-between box-border shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-[width] duration-200 ease-out",
          isCollapsed
            ? "w-[64px] items-center overflow-visible"
            : "w-[260px] items-start overflow-y-auto overflow-x-hidden"
        )}
      >
        {/* Navigation: Top portion (Header + Primary Nav items) */}
        <div
          className={cn(
            "flex flex-col p-0 isolate transition-all duration-200 ease-out",
            isCollapsed ? "w-16 items-center" : "w-full items-start"
          )}
        >
          {/* Header: 260px x 64px (expanded) or 64px x 64px (collapsed) */}
          <div
            className={cn(
              "h-16 flex items-center box-border transition-all duration-200 ease-out",
              isCollapsed
                ? "w-16 justify-center p-[20px_12px]"
                : "w-full justify-between p-5"
            )}
          >
            {isCollapsed ? (
              <div className="relative group flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => handleToggle(false)}
                  aria-label="Open sidebar"
                  className="w-9 h-9 rounded-[12px] flex items-center justify-center cursor-pointer border-none bg-transparent hover:bg-[#F5F5F5] transition-colors p-0 outline-none relative"
                >
                  {/* Default: PosterChild logomark 24x24 */}
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-[140ms] ease-out opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0 pointer-events-none">
                    <FigmaAsset
                      nodeId="514:14458"
                      name="posterchild-logo"
                      src="/figma/sidebar-v05/posterchild-logo.svg"
                      width={24}
                      height={24}
                      alt=""
                      className="w-6 h-6 shrink-0 rounded-[6px] shadow-[0px_24px_48px_-9px_rgba(0,0,0,0.14),0px_3.75px_3.75px_-1.875px_rgba(0,0,0,0.04)]"
                    />
                  </div>

                  {/* Hover/Focus: Open sidebar icon 20x20 */}
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-[140ms] ease-out opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 pointer-events-none text-[#404040]">
                    <FigmaAsset
                      nodeId="514:12753"
                      name="layout-left"
                      src="/figma/sidebar-v05/layout-left.svg"
                      width={20}
                      height={20}
                      alt=""
                      className="w-5 h-5 shrink-0"
                    />
                  </div>
                </button>
                <CollapsedTooltip label="Open sidebar" />
              </div>
            ) : (
              <>
                {/* Logo row: 126px x 24px, gap 3px */}
                <Link
                  href="/"
                  className="flex items-center gap-[3px] cursor-pointer no-underline select-none"
                >
                  <div className="w-6 h-6 flex items-start shrink-0">
                    <FigmaAsset
                      nodeId="514:14458"
                      name="posterchild-logo"
                      src="/figma/sidebar-v05/posterchild-logo.svg"
                      width={24}
                      height={24}
                      alt="PosterChild"
                      className="w-6 h-6 shrink-0 rounded-[6px] shadow-[0px_24px_48px_-9px_rgba(0,0,0,0.14),0px_3.75px_3.75px_-1.875px_rgba(0,0,0,0.04)]"
                    />
                  </div>
                  <FigmaAsset
                    nodeId="514:14459"
                    name="posterchild-logotype"
                    src="/figma/sidebar-v05/posterchild-logotype.svg"
                    width={99}
                    height={24}
                    alt="PosterChild"
                    className="shrink-0"
                  />
                </Link>

                {/* Layout left icon: 20x20 */}
                <button
                  type="button"
                  onClick={() => handleToggle(true)}
                  aria-label="Collapse sidebar"
                  className="w-5 h-5 flex items-center justify-center text-[#737373] hover:text-[#171717] transition-colors border-none bg-transparent cursor-pointer p-0 shrink-0 outline-none"
                >
                  <FigmaAsset
                    nodeId="514:12753"
                    name="layout-left"
                    src="/figma/sidebar-v05/layout-left.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="shrink-0"
                  />
                </button>
              </>
            )}
          </div>

          {/* Primary Navigation */}
          {isCollapsed ? (
            <nav className="w-16 px-3 flex flex-col items-center gap-[2px] box-border">
              {navItems.map((item) => (
                <div key={item.label} className="relative group flex items-center justify-center">
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      "w-9 h-9 p-2 rounded-[12px] flex items-center justify-center transition-colors no-underline box-border",
                      item.active
                        ? "bg-[#FFFDF5]"
                        : "bg-transparent hover:bg-[#F5F5F5]"
                    )}
                  >
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      <FigmaAsset
                        nodeId="4:7429"
                        name={item.label}
                        src={item.active ? item.iconActiveSrc : item.iconSrc}
                        width={20}
                        height={20}
                        alt=""
                        className="shrink-0"
                      />
                    </div>
                  </Link>
                  <CollapsedTooltip label={item.label} />
                </div>
              ))}
            </nav>
          ) : (
            <nav className="w-full px-4 flex flex-col items-start box-border">
              {/* Home */}
              <div className="w-full h-[38px] py-[1px] box-border flex items-center">
                <Link
                  href="/"
                  className={cn(
                    "w-full h-[36px] max-h-[36px] p-2 rounded-[12px] flex items-center gap-3 font-semibold text-[14px] leading-[20px] transition-colors no-underline box-border",
                    pathname === "/"
                      ? "bg-[#FFF9E8] text-[#8F6500]"
                      : "bg-[#FFFFFF] text-[#404040] hover:bg-[#F5F5F5] hover:text-[#171717]"
                  )}
                >
                  <div className="w-[212px] h-5 flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      <FigmaAsset
                        nodeId="4:7429"
                        name="Home"
                        src={
                          pathname === "/"
                            ? "/figma/sidebar-v05/home-line-active.svg"
                            : "/figma/sidebar-v05/home-line.svg"
                        }
                        width={20}
                        height={20}
                        alt=""
                        className="shrink-0"
                      />
                    </div>
                    <span className="whitespace-nowrap">Home</span>
                  </div>
                </Link>
              </div>

              {/* Tell (with expandable submenu) */}
              <div className="w-full flex flex-col items-start p-0 box-border">
                <div className="w-full h-[38px] py-[1px] box-border flex items-center">
                  <Link
                    href="/tell"
                    onClick={(e) => {
                      if (isTellRoute) {
                        e.preventDefault();
                        handleToggleTell(!tellExpanded);
                      } else {
                        handleToggleTell(true);
                      }
                    }}
                    className={cn(
                      "w-full h-[36px] max-h-[36px] p-2 rounded-[12px] flex items-center justify-between font-semibold text-[14px] leading-[20px] transition-colors no-underline box-border cursor-pointer select-none",
                      isTellRoute && !tellExpanded
                        ? "bg-[#FFF9E8] text-[#8F6500]"
                        : "bg-[#FFFFFF] text-[#404040] hover:bg-[#F5F5F5] hover:text-[#171717]"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 flex items-center justify-center shrink-0">
                        <FigmaAsset
                          nodeId="4:7429"
                          name="Tell"
                          src={
                            isTellRoute
                              ? "/figma/sidebar-v05/announcement-02-active.svg"
                              : "/figma/sidebar-v05/announcement-02.svg"
                          }
                          width={20}
                          height={20}
                          alt=""
                          className="shrink-0"
                        />
                      </div>
                      <span className="whitespace-nowrap">Tell</span>
                    </div>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleToggleTell(!tellExpanded);
                      }}
                      className="w-4 h-4 flex items-center justify-center shrink-0 text-[#737373] hover:text-[#171717] transition-colors"
                    >
                      <FigmaAsset
                        nodeId="4:7430"
                        name="chevron"
                        src={
                          tellExpanded
                            ? "/figma/sidebar-v05/chevron-up.svg"
                            : "/figma/sidebar-v05/chevron-down.svg"
                        }
                        width={16}
                        height={16}
                        alt=""
                        className="shrink-0"
                      />
                    </div>
                  </Link>
                </div>

                {/* Tell Submenu: Overview, Stories, Connect, Calendar */}
                {tellExpanded && (
                  <div className="w-full flex flex-col items-start p-0 box-border">
                    {tellSubmenuItems.map((subItem) => (
                      <div
                        key={subItem.label}
                        className="w-[228px] h-[38px] py-[1px] box-border flex items-center"
                      >
                        <Link
                          href={subItem.href}
                          className={cn(
                            "w-[228px] h-[36px] max-h-[36px] p-[8px_8px_8px_36px] rounded-[12px] flex items-center gap-2 font-semibold text-[14px] leading-[20px] transition-colors no-underline box-border",
                            subItem.active
                              ? "bg-[#FFF9E8] text-[#8F6500]"
                              : "bg-[#FFFFFF] text-[#404040] hover:bg-[#F5F5F5] hover:text-[#171717]"
                          )}
                        >
                          <div className="w-5 h-5 flex items-center justify-center shrink-0">
                            <FigmaAsset
                              nodeId="514:14456"
                              name={subItem.label}
                              src={subItem.active ? subItem.iconActive : subItem.iconInactive}
                              width={20}
                              height={20}
                              alt=""
                              className="shrink-0"
                            />
                          </div>
                          <span className="whitespace-nowrap">{subItem.label}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Raise */}
              <div className="w-full h-[38px] py-[1px] box-border flex items-center">
                <Link
                  href="/raise"
                  className={cn(
                    "w-full h-[36px] max-h-[36px] p-2 rounded-[12px] flex items-center gap-3 font-semibold text-[14px] leading-[20px] transition-colors no-underline box-border",
                    pathname.startsWith("/raise")
                      ? "bg-[#FFF9E8] text-[#8F6500]"
                      : "bg-[#FFFFFF] text-[#404040] hover:bg-[#F5F5F5] hover:text-[#171717]"
                  )}
                >
                  <div className="w-[212px] h-5 flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      <FigmaAsset
                        nodeId="4:7429"
                        name="Raise"
                        src={
                          pathname.startsWith("/raise")
                            ? "/figma/sidebar-v05/coins-hand-active.svg"
                            : "/figma/sidebar-v05/coins-hand.svg"
                        }
                        width={20}
                        height={20}
                        alt=""
                        className="shrink-0"
                      />
                    </div>
                    <span className="whitespace-nowrap">Raise</span>
                  </div>
                </Link>
              </div>

              {/* Manage */}
              <div className="w-full h-[38px] py-[1px] box-border flex items-center">
                <Link
                  href="/manage"
                  className={cn(
                    "w-full h-[36px] max-h-[36px] p-2 rounded-[12px] flex items-center gap-3 font-semibold text-[14px] leading-[20px] transition-colors no-underline box-border",
                    pathname.startsWith("/manage")
                      ? "bg-[#FFF9E8] text-[#8F6500]"
                      : "bg-[#FFFFFF] text-[#404040] hover:bg-[#F5F5F5] hover:text-[#171717]"
                  )}
                >
                  <div className="w-[212px] h-5 flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      <FigmaAsset
                        nodeId="4:7429"
                        name="Manage"
                        src={
                          pathname.startsWith("/manage")
                            ? "/figma/sidebar-v05/folder-active.svg"
                            : "/figma/sidebar-v05/folder.svg"
                        }
                        width={20}
                        height={20}
                        alt=""
                        className="shrink-0"
                      />
                    </div>
                    <span className="whitespace-nowrap">Manage</span>
                  </div>
                </Link>
              </div>
            </nav>
          )}
        </div>

        {/* Footer: 260px x 308px (expanded) or 64px width (collapsed) */}
        {isCollapsed ? (
          <div className="w-16 px-3 pb-4 flex flex-col items-center gap-3 box-border">
            {/* Support & Settings block: width 36px, gap 2px */}
            <div className="w-9 flex flex-col items-center gap-[2px] p-0">
              {/* Support */}
              <div className="relative group flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Support"
                  className="w-9 h-9 p-2 rounded-[12px] flex items-center justify-center text-[#404040] hover:bg-[#F5F5F5] hover:text-[#171717] transition-colors border-none bg-transparent cursor-pointer box-border"
                >
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <FigmaAsset
                      nodeId="515:232"
                      name="life-buoy-01"
                      src="/figma/sidebar-v05/life-buoy-01.svg"
                      width={20}
                      height={20}
                      alt=""
                      className="shrink-0"
                    />
                  </div>
                </button>
                <CollapsedTooltip label="Support" />
              </div>

              {/* Settings */}
              <div className="relative group flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Settings"
                  className="w-9 h-9 p-2 rounded-[12px] flex items-center justify-center text-[#404040] hover:bg-[#F5F5F5] hover:text-[#171717] transition-colors border-none bg-transparent cursor-pointer box-border"
                >
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <FigmaAsset
                      nodeId="10:2826"
                      name="settings-01"
                      src="/figma/sidebar-v05/settings-01.svg"
                      width={20}
                      height={20}
                      alt=""
                      className="shrink-0"
                    />
                  </div>
                </button>
                <CollapsedTooltip label="Settings" />
              </div>
            </div>

            {/* Collapsed Account Avatar: 40x40 */}
            <div className="relative w-10 h-10 shrink-0 rounded-full cursor-pointer">
              <div className="absolute inset-0 rounded-full bg-[#FFFFFF] border-[0.75px] border-[rgba(0,0,0,0.1)] shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-[1px] flex items-center justify-center shrink-0 box-border">
                <div className="w-[38px] h-[38px] rounded-full overflow-hidden border-[0.5px] border-[rgba(0,0,0,0.16)] shrink-0">
                  <Image
                    src="/figma/sidebar-v05/avatar.png"
                    width={38}
                    height={38}
                    alt="Darien Menendez"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -right-[2px] -bottom-[2px] w-[14px] h-[14px] shrink-0">
                <div className="absolute inset-[2px] bg-[#22C55E] border-[1.5px] border-[#FFFFFF] rounded-full box-border" />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full px-4 pb-5 flex flex-col gap-3 box-border">
            {/* Support & Settings Navigation block: 228px x 76px */}
            <div className="w-full flex flex-col items-start p-0">
              {/* Support */}
              <div className="w-full h-[38px] py-[1px] box-border flex items-center">
                <button
                  type="button"
                  className="w-full h-[36px] max-h-[36px] p-2 rounded-[12px] flex items-center gap-3 font-semibold text-[14px] leading-[20px] text-[#404040] hover:bg-[#F5F5F5] hover:text-[#171717] transition-colors border-none bg-transparent cursor-pointer text-left box-border"
                >
                  <div className="w-[212px] h-5 flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      <FigmaAsset
                        nodeId="515:232"
                        name="life-buoy-01"
                        src="/figma/sidebar-v05/life-buoy-01.svg"
                        width={20}
                        height={20}
                        alt=""
                        className="shrink-0"
                      />
                    </div>
                    <span className="whitespace-nowrap">Support</span>
                  </div>
                </button>
              </div>

              {/* Settings */}
              <div className="w-full h-[38px] py-[1px] box-border flex items-center">
                <button
                  type="button"
                  className="w-full h-[36px] max-h-[36px] p-2 rounded-[12px] flex items-center gap-3 font-semibold text-[14px] leading-[20px] text-[#404040] hover:bg-[#F5F5F5] hover:text-[#171717] transition-colors border-none bg-transparent cursor-pointer text-left box-border"
                >
                  <div className="w-[212px] h-5 flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      <FigmaAsset
                        nodeId="10:2826"
                        name="settings-01"
                        src="/figma/sidebar-v05/settings-01.svg"
                        width={20}
                        height={20}
                        alt=""
                        className="shrink-0"
                      />
                    </div>
                    <span className="whitespace-nowrap">Settings</span>
                  </div>
                </button>
              </div>
            </div>

            {/* _Nav featured card (Free Trial Card): 228px x 124px, padding 16px, gap 16px */}
            <div className="w-full h-[124px] p-4 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] flex flex-col gap-4 box-border">
              {/* Text and progress bar: 196px x 40px, gap 12px */}
              <div className="w-full flex flex-col gap-3">
                {/* Text and supporting text: 196px x 20px, gap 4px */}
                <div className="w-full h-5 flex items-center justify-between leading-[20px]">
                  <span className="font-semibold text-[14px] text-[#171717] whitespace-nowrap">
                    Free trial
                  </span>
                  <span className="font-normal text-[14px] text-[#737373] whitespace-nowrap">
                    24 days left
                  </span>
                </div>

                {/* Progress bar: 196px x 8px */}
                <div className="w-full h-2 bg-[#E5E5E5] rounded-full relative overflow-hidden">
                  <div
                    style={{ width: "31.63%" }}
                    className="absolute left-0 top-0 h-2 bg-[#F4B400] rounded-full"
                  />
                </div>
              </div>

              {/* Buttons/Button: 196px x 36px, padding 8px 12px */}
              <button
                type="button"
                style={{
                  boxShadow:
                    "0px 1px 2px rgba(0, 0, 0, 0.05), inset 0px -2px 0px rgba(0, 0, 0, 0.05)",
                }}
                className="w-full h-9 px-3 py-2 bg-[#FFFFFF] border border-[#D4D4D4] rounded-[12px] font-semibold text-[14px] leading-[20px] text-[#404040] hover:bg-[#F9FAFB] active:bg-[#F0F0F0] transition-colors cursor-pointer flex items-center justify-center box-border outline-none whitespace-nowrap"
              >
                Upgrade now
              </button>
            </div>

            {/* _Nav account card: 228px x 64px, padding 12px, gap 16px, isolation: isolate */}
            <div className="w-full h-16 p-3 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] flex items-center justify-between box-border hover:bg-[#FAFAFA] transition-colors cursor-pointer relative isolate">
              {/* Avatar label group: 204px x 40px, gap 8px */}
              <div className="flex items-center gap-2 min-w-0 pr-7 z-0">
                {/* Avatar: 40px x 40px */}
                <div className="relative w-10 h-10 shrink-0 rounded-full">
                  <div className="absolute inset-0 rounded-full bg-[#FFFFFF] border-[0.75px] border-[rgba(0,0,0,0.1)] shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-[1px] flex items-center justify-center shrink-0 box-border">
                    <div className="w-[38px] h-[38px] rounded-full overflow-hidden border-[0.5px] border-[rgba(0,0,0,0.16)] shrink-0">
                      <Image
                        src="/figma/sidebar-v05/avatar.png"
                        width={38}
                        height={38}
                        alt="Darien Menendez"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Status icon: 14x14, right: -2px, bottom: -2px */}
                  <div className="absolute -right-[2px] -bottom-[2px] w-[14px] h-[14px] shrink-0">
                    <div className="absolute inset-[2px] bg-[#22C55E] border-[1.5px] border-[#FFFFFF] rounded-full box-border" />
                  </div>
                </div>

                {/* Text and supporting text: 156px x 40px */}
                <div className="flex flex-col min-w-0 justify-center">
                  <span className="font-semibold text-[14px] leading-[20px] text-[#171717] truncate">
                    Darien Menendez
                  </span>
                  <span className="font-normal text-[14px] leading-[20px] text-[#525252] truncate">
                    darien@poeterchild.ai
                  </span>
                </div>
              </div>

              {/* Buttons/Button utility: 28x28, top: 8px, right: 8px, padding: 6px */}
              <div className="absolute top-2 right-2 w-7 h-7 p-1.5 shrink-0 flex items-center justify-center rounded-[12px] z-10 box-border">
                <FigmaAsset
                  nodeId="10:5465"
                  name="chevron-selector-vertical"
                  src="/figma/sidebar-v05/chevron-selector-vertical.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="shrink-0"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
