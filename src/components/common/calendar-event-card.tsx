import React from "react";
import { FigmaAsset } from "@/components/common/figma-asset";
import { cn } from "@/lib/utils";

export type EventColorVariant = "yellow" | "purple" | "green";

export interface CalendarEventProps {
  nodeId?: string;
  month: string;
  day: string;
  variant?: EventColorVariant;
  supportingText: string;
  title: string;
  badgeIconSrc: string;
  badgeIconName: string;
  badgeLabel: string;
  className?: string;
}

export function CalendarEventCard({
  nodeId = "event-card",
  month,
  day,
  variant = "yellow",
  supportingText,
  title,
  badgeIconSrc,
  badgeIconName,
  badgeLabel,
  className,
}: CalendarEventProps) {
  const variantStyles = {
    yellow: {
      monthBg: "bg-[#FFFDF5]",
      textColor: "text-[#D99A00]",
    },
    purple: {
      monthBg: "bg-[#FAF5FF]",
      textColor: "text-[#7E22CE]",
    },
    green: {
      monthBg: "bg-[#F0FDF4]",
      textColor: "text-[#15803D]",
    },
  }[variant];

  return (
    <div
      data-figma-node={nodeId}
      className={cn(
        "box-border flex-1 min-w-[240px] h-[112px] shrink-0 flex items-center p-3 gap-4 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px]",
        className
      )}
    >
      <div className="flex flex-row items-center gap-3 w-full h-[80px]">
        {/* Date Block: 50x80 */}
        <div className="w-[50px] h-[80px] shrink-0 flex flex-col items-center bg-[#FFFFFF] border border-[#E5E5E5] rounded-[8px] overflow-hidden box-border">
          {/* Month Area: 50x30 */}
          <div
            className={cn(
              "w-[50px] h-[30px] p-[4px_8px_2px] flex justify-center items-center box-border",
              variantStyles.monthBg
            )}
          >
            <span
              className={cn(
                "font-sans font-semibold text-[16px] leading-[24px]",
                variantStyles.textColor
              )}
            >
              {month}
            </span>
          </div>
          {/* Date Area: 50x50 */}
          <div className="w-[50px] h-[50px] p-[1px_8px_3px] flex justify-center items-center box-border">
            <span
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              className={cn(
                "font-bold text-[24px] leading-[32px] text-center",
                variantStyles.textColor
              )}
            >
              {day}
            </span>
          </div>
        </div>

        {/* Text Column */}
        <div className="flex-1 h-[72px] flex flex-col justify-center items-start gap-[2px]">
          <span className="font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
            {supportingText}
          </span>
          <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717] truncate w-full">
            {title}
          </h3>
          {/* Badge */}
          <div className="h-[24px] px-[8px] pl-[6px] py-[2px] flex items-center gap-1 bg-[#FFFFFF] border border-[#D4D4D4] rounded-[6px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] box-border">
            <FigmaAsset
              nodeId={nodeId}
              name={badgeIconName}
              src={badgeIconSrc}
              width={12}
              height={12}
              alt=""
            />
            <span className="font-sans font-medium text-[14px] leading-[20px] text-[#404040]">
              {badgeLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export interface CalendarActionCardProps {
  nodeId?: string;
  iconSrc: string;
  iconName: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

export function CalendarActionCard({
  nodeId = "action-card",
  iconSrc,
  iconName,
  label,
  onClick,
  className,
}: CalendarActionCardProps) {
  return (
    <div
      data-figma-node={nodeId}
      onClick={onClick}
      className={cn(
        "box-border w-[118px] min-w-[118px] h-[112px] shrink-0 flex items-center justify-center p-3 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] cursor-pointer hover:bg-[#FAFAFA] transition-colors",
        className
      )}
    >
      <div className="w-[94px] h-[60px] flex flex-col justify-center items-center gap-3">
        <FigmaAsset
          nodeId={nodeId}
          name={iconName}
          src={iconSrc}
          width={28}
          height={28}
          alt={label}
        />
        <span className="w-[94px] font-sans font-medium text-[14px] leading-[20px] text-[#171717] text-center whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
}
