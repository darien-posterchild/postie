import React from "react";
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
  title: React.ReactNode;
  description: React.ReactNode;
  action?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  nodeId?: string;
}

export function PageHeader({
  title,
  description,
  action,
  children,
  className,
  nodeId,
}: PageHeaderProps) {
  return (
    <div
      data-figma-node={nodeId}
      className={cn("w-full flex flex-col items-start gap-4", className)}
    >
      <div className="w-full flex flex-wrap items-start justify-between gap-x-5 gap-y-4">
        <div className="flex-1 min-w-[320px] flex flex-col items-start gap-[2px]">
          <h1
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              letterSpacing: "-0.72px",
            }}
            className="font-semibold text-[36px] leading-[44px] text-[#171717] m-0 p-0"
          >
            {title}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              letterSpacing: "0px",
            }}
            className="font-normal text-[16px] leading-[24px] text-[#525252] m-0 p-0"
          >
            {description}
          </p>
        </div>
        {action && <div className="shrink-0 flex items-start">{action}</div>}
      </div>
      {children}
    </div>
  );
}
