"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FigmaAsset } from "@/components/common/figma-asset";

function HomeNavIcon({ className, color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.66667 14.1667H13.3333M9.18141 2.30335L3.52949 6.69928C3.15168 6.99313 2.96278 7.14006 2.82669 7.32406C2.70614 7.48705 2.61633 7.67067 2.56169 7.86589C2.5 8.08628 2.5 8.32559 2.5 8.80422V14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3183C3.76654 17.5 4.23325 17.5 5.16667 17.5H14.8333C15.7668 17.5 16.2335 17.5 16.59 17.3183C16.9036 17.1586 17.1586 16.9036 17.3183 16.59C17.5 16.2335 17.5 15.7668 17.5 14.8333V8.80422C17.5 8.32559 17.5 8.08628 17.4383 7.86589C17.3837 7.67067 17.2939 7.48705 17.1733 7.32406C17.0372 7.14006 16.8483 6.99313 16.4705 6.69929L10.8186 2.30335C10.5258 2.07564 10.3794 1.96178 10.2178 1.91801C10.0752 1.8794 9.92484 1.8794 9.78221 1.91801C9.62057 1.96178 9.47418 2.07563 9.18141 2.30335Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TellNavIcon({ className, color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.33333 11.6667L4.64554 16.9155C4.68244 17.0631 4.70089 17.1369 4.72272 17.2014C4.93597 17.8309 5.50293 18.2736 6.16543 18.3278C6.23325 18.3333 6.30933 18.3333 6.46149 18.3333C6.65203 18.3333 6.7473 18.3333 6.82756 18.3255C7.62083 18.2486 8.24861 17.6208 8.32555 16.8276C8.33333 16.7473 8.33333 16.652 8.33333 16.4615V4.58333M15.4167 11.25C17.0275 11.25 18.3333 9.94416 18.3333 8.33333C18.3333 6.7225 17.0275 5.41667 15.4167 5.41667M8.54166 4.58333H5.41666C3.3456 4.58333 1.66666 6.26227 1.66666 8.33334C1.66667 10.4044 3.3456 12.0833 5.41666 12.0833H8.54167C10.0137 12.0833 11.8144 12.8724 13.2036 13.6297C14.014 14.0715 14.4192 14.2924 14.6846 14.2599C14.9307 14.2297 15.1168 14.1192 15.2611 13.9176C15.4167 13.7001 15.4167 13.265 15.4167 12.3948V4.2719C15.4167 3.40166 15.4167 2.96654 15.2611 2.74907C15.1168 2.54742 14.9307 2.43692 14.6846 2.40677C14.4192 2.37427 14.014 2.59517 13.2036 3.03696C11.8144 3.79426 10.0137 4.58333 8.54166 4.58333Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RaiseNavIcon({ className, color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.3333 5.83333L11.7761 12.3905C11.4461 12.7205 11.2811 12.8855 11.0908 12.9474C10.9235 13.0018 10.7432 13.0018 10.5758 12.9474C10.3855 12.8855 10.2205 12.7205 9.89052 12.3905L7.60947 10.1095C7.27946 9.77946 7.11445 9.61445 6.92418 9.55263C6.75681 9.49825 6.57652 9.49825 6.40915 9.55263C6.21888 9.61445 6.05387 9.77946 5.72386 10.1095L1.66667 14.1667M18.3333 11.6667V5.83333H12.5"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ManageNavIcon({ className, color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.8333 5.83333L9.90372 3.9741C9.63617 3.439 9.50239 3.17144 9.30281 2.97597C9.12632 2.80311 8.9136 2.67164 8.68006 2.59109C8.41597 2.5 8.11684 2.5 7.51858 2.5H4.33333C3.39991 2.5 2.9332 2.5 2.57668 2.68166C2.26308 2.84144 2.00811 3.09641 1.84832 3.41002C1.66667 3.76654 1.66667 4.23325 1.66667 5.16667V5.83333M1.66667 5.83333H14.3333C15.7335 5.83333 16.4335 5.83333 16.9683 6.10582C17.4387 6.3455 17.8212 6.72795 18.0608 7.19836C18.3333 7.73314 18.3333 8.4332 18.3333 9.83333V13.5C18.3333 14.9001 18.3333 15.6002 18.0608 16.135C17.8212 16.6054 17.4387 16.9878 16.9683 17.2275C16.4335 17.5 15.7335 17.5 14.3333 17.5H5.66667C4.26654 17.5 3.56647 17.5 3.03169 17.2275C2.56129 16.9878 2.17883 16.6054 1.93915 16.135C1.66667 15.6002 1.66667 14.9001 1.66667 13.5V5.83333Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
    nodeId: "358:3219",
    Icon: HomeNavIcon,
  },
  {
    href: "/tell",
    label: "Tell",
    nodeId: "358:3220",
    Icon: TellNavIcon,
  },
  {
    href: "/raise",
    label: "Raise",
    nodeId: "358:3221",
    Icon: RaiseNavIcon,
  },
  {
    href: "/manage",
    label: "Manage",
    nodeId: "358:3222",
    Icon: ManageNavIcon,
  },
];

export function Header() {
  const pathname = usePathname();
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        if (!searchQuery.trim()) {
          setIsSearchExpanded(false);
        }
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsSearchExpanded(true);
      }
      if (event.key === "Escape" && isSearchExpanded) {
        setIsSearchExpanded(false);
        setSearchQuery("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSearchExpanded, searchQuery]);

  useEffect(() => {
    if (isSearchExpanded) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isSearchExpanded]);

  return (
    <header className="w-full h-[64px] bg-[#FFFFFF] border-b border-[#E5E5E5] px-6 flex items-center justify-between flex-shrink-0 z-10">
      {/* Left: Logo (358:3217) + 48px gap + Navigation wrapper (358:3218) */}
      <div className="flex items-center">
        {/* Logo area: exactly 168px wide (Figma Node: 358:3217) composing logo-mark + logo-type */}
        <div
          className="w-[168px] flex items-center flex-shrink-0"
          data-figma-node="358:3217"
        >
          <Link href="/" className="flex items-center gap-2">
            <FigmaAsset
              nodeId="358:3217"
              name="logo-mark"
              src="/figma/home/logo-mark.svg"
              width={24}
              height={24}
              alt="PosterChild Mark"
            />
            <FigmaAsset
              nodeId="358:3217"
              name="logo-type"
              src="/figma/home/logo-type.svg"
              width={132}
              height={32}
              alt="PosterChild"
            />
          </Link>
        </div>

        {/* 48px gap */}
        <div className="w-12" />

        {/* Navigation wrapper (Figma Node: 358:3218) with 24px gap */}
        <nav
          data-figma-node="358:3218"
          className="flex items-center gap-6"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            const IconComponent = item.Icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                data-figma-node={item.nodeId}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "h-[32px] px-2 py-1.5 rounded-[12px] flex items-center gap-1 font-sans font-semibold text-[14px] leading-[20px] transition-colors box-border",
                  isActive
                    ? "bg-[#FFF9E8] text-[#8F6500]"
                    : "bg-transparent text-[#404040] hover:text-[#171717]"
                )}
              >
                <IconComponent
                  color={isActive ? "#F4B400" : "#A3A3A3"}
                  className="w-5 h-5 shrink-0"
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Right: Search (358:3226), Actions (358:3230-3232), Avatar (358:3233) */}
      <div className="flex flex-row items-center gap-3 flex-none">
        {/* 1. Search Container: fixed 280px wrapper aligned right */}
        <div
          ref={searchContainerRef}
          className="w-[280px] h-[36px] flex items-center justify-end flex-none relative"
        >
          <div
            onClick={() => {
              if (!isSearchExpanded) {
                setIsSearchExpanded(true);
              }
            }}
            className={cn(
              "h-[36px] flex flex-row items-center overflow-hidden transition-[width,background-color,border-color,box-shadow] duration-200 ease-out cursor-pointer box-border",
              isSearchExpanded
                ? "w-[280px] p-[8px_8px_8px_12px] gap-2 bg-[#FFFFFF] border border-[#D4D4D4] rounded-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] cursor-text"
                : "w-[36px] justify-center p-2 bg-transparent border border-transparent rounded-[12px] hover:bg-[#F5F5F5] ml-auto"
            )}
            data-figma-node="358:3226"
          >
            {/* Search Icon */}
            <div className="shrink-0 flex items-center justify-center">
              {isSearchExpanded ? (
                <FigmaAsset
                  nodeId="358:3226"
                  name="search-field"
                  src="/figma/home/search-field.svg"
                  width={16}
                  height={16}
                  alt="Search"
                />
              ) : (
                <FigmaAsset
                  nodeId="358:3230"
                  name="search-action"
                  src="/figma/home/search-action.svg"
                  width={20}
                  height={20}
                  alt="Search"
                />
              )}
            </div>

            {/* Expanded Input & Shortcut */}
            {isSearchExpanded && (
              <div className="flex items-center justify-between flex-1 min-w-0 h-[20px] transition-opacity duration-150">
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  className="font-sans font-normal text-[14px] leading-[20px] text-[#171717] placeholder:text-[#737373] bg-transparent outline-none w-full min-w-0"
                />
                <div className="box-border w-[26px] h-[20px] p-[1px_4px] border border-[#E5E5E5] rounded-[4px] shrink-0 flex items-center justify-center bg-[#FFFFFF]">
                  <span className="font-sans font-medium text-[12px] leading-[18px] text-[#737373]">
                    ⌘K
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 2. Actions Group (Settings & Notifications) */}
        <div className="flex flex-row items-center gap-[2px] relative flex-none">
          {/* Settings Action (Figma Node: 358:3230) */}
          <button
            type="button"
            data-figma-node="358:3230"
            aria-label="Settings"
            className="w-[36px] h-[36px] p-2 flex justify-center items-center rounded-[12px] bg-transparent border-none outline-none shadow-none hover:bg-[#F5F5F5] transition-colors cursor-pointer"
          >
            <FigmaAsset
              nodeId="358:3230"
              name="settings-icon"
              src="/figma/home/settings.svg"
              width={20}
              height={20}
              alt="Settings"
            />
          </button>

          {/* Notification Action (Figma Node: 358:3231) + Counter (358:3232) */}
          <button
            type="button"
            data-figma-node="358:3231"
            aria-label="Notifications"
            className="relative w-[36px] h-[36px] p-2 flex justify-center items-center rounded-[12px] bg-transparent border-none outline-none shadow-none hover:bg-[#F5F5F5] transition-colors cursor-pointer"
          >
            <FigmaAsset
              nodeId="358:3231"
              name="bell-icon"
              src="/figma/home/bell.svg"
              width={20}
              height={20}
              alt="Notifications"
            />
            {/* Notification Counter (358:3232) */}
            <span
              data-figma-node="358:3232"
              className="absolute -top-[1px] -right-[1px] w-[14px] h-[14px] p-[2px] bg-[#DC2626] rounded-full flex items-center justify-center z-10 box-border font-sans font-bold text-[10px] leading-[15px] text-white text-center"
            >
              2
            </span>
          </button>
        </div>

        {/* 3. Avatar (Figma Node: 358:3233) */}
        <div
          data-figma-node="358:3233"
          className="w-[32px] h-[32px] flex-none relative rounded-full overflow-hidden border-[0.5px] border-[rgba(0,0,0,0.16)] box-border cursor-pointer"
          title="Jeff"
        >
          <FigmaAsset
            nodeId="358:3233"
            name="avatar"
            src="/figma/home/avatar.png"
            width={32}
            height={32}
            alt="User Avatar"
            className="w-[32px] h-[32px] object-cover rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
