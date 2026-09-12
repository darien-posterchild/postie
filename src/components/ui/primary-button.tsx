import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: "plus" | React.ReactNode;
}

export const PrimaryButton = React.forwardRef<
  HTMLButtonElement,
  PrimaryButtonProps
>(({ className, label, icon = "plus", children, style, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      style={{
        backgroundColor: "#F4B400",
        border: "1px solid rgba(0, 0, 0, 0.18)",
        boxShadow:
          "0 1px 2px rgba(0, 0, 0, 0.05), inset 0 -2px 0 rgba(0, 0, 0, 0.05)",
        ...style,
      }}
      className={cn(
        "h-10 px-[14px] py-[10px] rounded-[12px] box-border inline-flex items-center justify-center gap-1 font-['DM_Sans',sans-serif] font-semibold text-[14px] leading-[20px] text-[#171717] hover:brightness-95 active:brightness-90 transition-all cursor-pointer outline-none select-none shrink-0",
        className
      )}
      {...props}
    >
      {icon === "plus" ? (
        <Image
          src="/figma/home-v05/plus.svg"
          width={20}
          height={20}
          alt=""
          className="w-5 h-5 opacity-60 shrink-0"
        />
      ) : (
        icon
      )}
      <div className="px-[2px] flex items-center justify-center">
        <span>{label || children}</span>
      </div>
    </button>
  );
});

PrimaryButton.displayName = "PrimaryButton";
