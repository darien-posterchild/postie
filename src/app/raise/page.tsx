import React from "react";
import { FigmaAsset } from "@/components/common/figma-asset";
import { cn } from "@/lib/utils";
import { CalendarEventCard, CalendarActionCard } from "@/components/common/calendar-event-card";
import { PageHeader } from "@/components/common/page-header";

interface MetricCardProps {
  nodeId: string;
  label: string;
  value: string;
  description: string;
  iconName: string;
  iconSrc: string;
  iconBgColor: string;
  valueColor?: string;
  descriptionWeight?: "font-medium" | "font-normal";
}

function MetricCard({
  nodeId,
  label,
  value,
  description,
  iconName,
  iconSrc,
  iconBgColor,
  valueColor = "text-[#171717]",
  descriptionWeight = "font-normal",
}: MetricCardProps) {
  return (
    <div
      data-figma-node={nodeId}
      style={{
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      }}
      className="box-border flex-1 min-w-[280px] h-[122px] shrink-0 p-5 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] flex flex-col items-start gap-0 relative"
    >
      {/* Heading */}
      <span
        style={{ letterSpacing: "0.04em" }}
        className="w-full h-[24px] font-sans font-medium text-[14px] leading-[24px] uppercase text-[#171717]"
      >
        {label}
      </span>

      {/* Number + Supporting Block */}
      <div className="w-full h-[58px] flex flex-row items-end gap-5">
        {/* Number Column */}
        <div className="w-full h-[58px] flex flex-col justify-end items-start">
          {/* Number */}
          <span
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            className={cn(
              "w-full h-[38px] font-semibold text-[30px] leading-[38px]",
              valueColor
            )}
          >
            {value}
          </span>
          {/* Supporting Text */}
          <span
            className={cn(
              "w-full h-[20px] font-sans text-[14px] leading-[20px] text-[#525252] truncate",
              descriptionWeight
            )}
          >
            {description}
          </span>
        </div>
      </div>

      {/* Featured Icon Container */}
      <div
        style={{ backgroundColor: iconBgColor }}
        className="absolute right-4 top-4 w-8 h-8 rounded-[8px] flex items-center justify-center"
      >
        <FigmaAsset
          nodeId={nodeId}
          name={iconName}
          src={iconSrc}
          width={16}
          height={16}
          alt=""
        />
      </div>
    </div>
  );
}

export default function RaisePage() {
  return (
    <div
      data-figma-node="358:3622"
      className="w-full flex flex-col gap-6 shrink-0 pb-6"
    >
      {/* 1. Header & Primary CTA */}
      <PageHeader
        nodeId="358:3622"
        title="Raise more. Change more lives."
        description="Smart matches, stronger relationships, more resources for your mission."
        action={
          <button
            type="button"
            style={{
              boxShadow:
                "0px 1px 2px rgba(10, 13, 18, 0.05), inset 0px 0px 0px 1px rgba(10, 13, 18, 0.18), inset 0px -2px 0px rgba(10, 13, 18, 0.05)",
            }}
            className="box-border w-[172px] h-[36px] px-3 py-2 bg-[#FFC700] rounded-[8px] flex flex-row items-center justify-center gap-1 cursor-pointer hover:bg-[#F5BF00] transition-colors border-none outline-none appearance-none whitespace-nowrap shrink-0"
          >
            <FigmaAsset
              nodeId="358:3622"
              name="plus"
              src="/figma/tell/plus-icon.svg"
              width={20}
              height={20}
              alt=""
            />
            <span className="font-sans font-semibold text-[14px] leading-[20px] text-[#181D27] px-[2px] whitespace-nowrap">
              Find opportunities
            </span>
          </button>
        }
      />

      {/* 2. METRICS ROW Section with responsive scrolling */}
      <section className="flex flex-col gap-3">
        <div className="w-full flex flex-row items-stretch gap-4 overflow-x-auto no-scrollbar pb-1">
          {/* Card 1: Opportunities (Figma Node: 358:3655) */}
          <MetricCard
            nodeId="358:3655"
            label="OPPORTUNITIES"
            value="24"
            description="New matches and opportunities"
            descriptionWeight="font-medium"
            iconName="folder"
            iconSrc="/figma/raise/folder.svg"
            iconBgColor="#F0FDF4"
          />

          {/* Card 2: In Progress (Figma Node: 358:3662) */}
          <MetricCard
            nodeId="358:3662"
            label="IN PROGRESS"
            value="7"
            description="Applications you’re working on"
            descriptionWeight="font-normal"
            iconName="file-06"
            iconSrc="/figma/raise/file-06.svg"
            iconBgColor="#EFF6FF"
          />

          {/* Card 3: Needs Attention (Figma Node: 358:3669) */}
          <MetricCard
            nodeId="358:3669"
            label="NEEDS ATTENTION"
            value="3"
            description="Deadlines and follow-ups"
            descriptionWeight="font-normal"
            iconName="alert-triangle"
            iconSrc="/figma/raise/alert-triangle.svg"
            iconBgColor="#FFF7ED"
            valueColor="text-[#EA580C]"
          />
        </div>
      </section>

      {/* 3. CONTINUE YOUR WORK Section (Figma Node: 358:3676) */}
      <section
        data-figma-node="358:3676"
        className="w-full max-w-full h-[200px] flex flex-col items-start p-0 gap-3 box-border"
      >
        {/* Section Header Row */}
        <div className="w-full max-w-full h-[20px] flex flex-row justify-between items-center box-border">
          <h2 className="font-sans font-semibold text-[14px] leading-[20px] uppercase text-[#171717] m-0">
            CONTINUE YOUR WORK
          </h2>
          <button
            type="button"
            className="font-sans font-semibold text-[14px] leading-[20px] text-[#8F6500] hover:text-[#6E4E00] flex flex-row items-center gap-1 transition-colors cursor-pointer bg-transparent border-0 p-0 outline-none"
          >
            <span>View all in progress</span>
            <FigmaAsset
              nodeId="358:3676"
              name="arrow-right"
              src="/figma/raise/arrow-right.svg"
              width={20}
              height={20}
              alt=""
            />
          </button>
        </div>

        {/* Table Outer with responsive horizontal scroll */}
        <div
          style={{
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          }}
          className="w-full max-w-full overflow-x-auto no-scrollbar rounded-[12px] border border-[#E5E5E5] bg-[#FFFFFF] box-border"
        >
          <div className="min-w-[980px] w-full h-[168px] flex flex-col">
            {/* Table Header Row (40px) */}
            <div className="w-full h-[40px] grid grid-cols-[350px_160px_125px_120px_125px_90px] items-center bg-[#FAFAFA] border-b border-[#E5E5E5] box-border shrink-0">
              <div className="h-[40px] px-5 py-2 flex items-center font-sans font-semibold text-[12px] leading-[18px] text-[#737373] box-border">
                Company
              </div>
              <div className="h-[40px] px-5 py-2 flex items-center font-sans font-semibold text-[12px] leading-[18px] text-[#737373] box-border">
                Potential
              </div>
            <div className="h-[40px] px-5 py-2 flex items-center font-sans font-semibold text-[12px] leading-[18px] text-[#737373] box-border">
              Next Action
            </div>
            <div className="h-[40px] px-5 py-2 flex items-center font-sans font-semibold text-[12px] leading-[18px] text-[#737373] box-border">
              Due
            </div>
            <div className="h-[40px] px-5 py-2 flex items-center font-sans font-semibold text-[12px] leading-[18px] text-[#737373] box-border">
              Status
            </div>
            <div className="h-[40px] px-4 py-2 flex items-center box-border"></div>
          </div>

          {/* Table Row 1: Mellon Foundation (64px) */}
          <div className="w-full h-[64px] grid grid-cols-[350px_160px_125px_120px_125px_90px] items-center border-b border-[#E5E5E5] box-border shrink-0">
            {/* Company (350px) */}
            <div className="h-[64px] px-5 py-4 flex items-center gap-2 box-border">
              <div className="w-8 h-8 rounded-[8px] border-[0.5px] border-black/16 bg-[#EFF6FF] flex items-center justify-center shrink-0 overflow-hidden box-border">
                <FigmaAsset
                  nodeId="358:3676"
                  name="mellon-logo"
                  src="/figma/home/mellon-logo.svg"
                  width={20}
                  height={20}
                  alt="Mellon Foundation"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-sans font-medium text-[14px] leading-[20px] text-[#171717] truncate">
                  Mellon Foundation
                </span>
                <span className="font-sans font-normal text-[14px] leading-[20px] text-[#525252] truncate">
                  Workforce Development
                </span>
              </div>
            </div>

            {/* Potential (160px) */}
            <div className="h-[64px] px-5 py-4 flex items-center font-sans font-medium text-[14px] leading-[20px] text-[#171717] whitespace-nowrap box-border">
              $250K – $500K
            </div>

            {/* Next Action (125px) */}
            <div className="h-[64px] px-5 py-4 flex items-center font-sans font-medium text-[14px] leading-[20px] text-[#171717] box-border">
              LOI due
            </div>

            {/* Due (120px) */}
            <div className="h-[64px] px-5 py-4 flex flex-col justify-center items-start box-border">
              <span className="font-sans font-medium text-[14px] leading-[20px] text-[#171717]">
                Sep 18, 2025
              </span>
              <span className="font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
                12 days left
              </span>
            </div>

            {/* Status (125px) */}
            <div className="h-[64px] px-5 py-4 flex items-center box-border">
              <div className="w-[87px] h-[22px] px-1.5 py-0.5 gap-1 bg-[#EFF6FF] border border-[#BFDBFE] rounded-[6px] flex items-center shrink-0 box-border">
                <span className="w-2 h-2 flex items-center justify-center shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                </span>
                <span className="font-sans font-medium text-[12px] leading-[18px] text-[#1D4ED8] whitespace-nowrap">
                  In progress
                </span>
              </div>
            </div>

            {/* Actions (90px) */}
            <div className="h-[64px] p-4 flex items-center gap-0.5 box-border">
              <button
                type="button"
                aria-label="Open in full"
                className="w-7 h-7 p-1.5 rounded-[12px] flex items-center justify-center text-[#A3A3A3] hover:text-[#171717] hover:bg-[#F5F5F5] transition-colors cursor-pointer border-0 bg-transparent outline-none"
              >
                <FigmaAsset
                  nodeId="358:3676"
                  name="arrow-up-right"
                  src="/figma/raise/arrow-up-right.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </button>
              <button
                type="button"
                aria-label="More actions"
                className="w-7 h-7 p-1.5 rounded-[12px] flex items-center justify-center text-[#A3A3A3] hover:text-[#171717] hover:bg-[#F5F5F5] transition-colors cursor-pointer border-0 bg-transparent outline-none"
              >
                <FigmaAsset
                  nodeId="358:3676"
                  name="dots-vertical"
                  src="/figma/raise/dots-vertical.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </button>
            </div>
          </div>

          {/* Table Row 2: W.K. Kellogg Foundation (64px) */}
          <div className="w-full h-[64px] grid grid-cols-[350px_160px_125px_120px_125px_90px] items-center box-border shrink-0">
            {/* Company (350px) */}
            <div className="h-[64px] px-5 py-4 flex items-center gap-2 box-border">
              <div className="w-8 h-8 rounded-[8px] border-[0.5px] border-black/16 bg-[#FFF9E8] flex items-center justify-center shrink-0 overflow-hidden box-border">
                <span
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  className="font-semibold text-[16px] leading-[20px] text-[#D99A00]"
                >
                  K
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-sans font-medium text-[14px] leading-[20px] text-[#171717] truncate">
                  W.K. Kellogg Foundation
                </span>
                <span className="font-sans font-normal text-[14px] leading-[20px] text-[#525252] truncate">
                  Youth &amp; Education
                </span>
              </div>
            </div>

            {/* Potential (160px) */}
            <div className="h-[64px] px-5 py-4 flex items-center font-sans font-medium text-[14px] leading-[20px] text-[#171717] whitespace-nowrap box-border">
              $150K – $300K
            </div>

            {/* Next Action (125px) */}
            <div className="h-[64px] px-5 py-4 flex items-center font-sans font-medium text-[14px] leading-[20px] text-[#171717] box-border">
              Proposal due
            </div>

            {/* Due (120px) */}
            <div className="h-[64px] px-5 py-4 flex flex-col justify-center items-start box-border">
              <span className="font-sans font-medium text-[14px] leading-[20px] text-[#171717]">
                Oct 10, 2025
              </span>
              <span className="font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
                34 days left
              </span>
            </div>

            {/* Status (125px) */}
            <div className="h-[64px] px-5 py-4 flex items-center box-border">
              <div className="w-[87px] h-[22px] px-1.5 py-0.5 gap-1 bg-[#EFF6FF] border border-[#BFDBFE] rounded-[6px] flex items-center shrink-0 box-border">
                <span className="w-2 h-2 flex items-center justify-center shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                </span>
                <span className="font-sans font-medium text-[12px] leading-[18px] text-[#1D4ED8] whitespace-nowrap">
                  In progress
                </span>
              </div>
            </div>

            {/* Actions (90px) */}
            <div className="h-[64px] p-4 flex items-center gap-0.5 box-border">
              <button
                type="button"
                aria-label="Open in full"
                className="w-7 h-7 p-1.5 rounded-[12px] flex items-center justify-center text-[#A3A3A3] hover:text-[#171717] hover:bg-[#F5F5F5] transition-colors cursor-pointer border-0 bg-transparent outline-none"
              >
                <FigmaAsset
                  nodeId="358:3676"
                  name="arrow-up-right"
                  src="/figma/raise/arrow-up-right.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </button>
              <button
                type="button"
                aria-label="More actions"
                className="w-7 h-7 p-1.5 rounded-[12px] flex items-center justify-center text-[#A3A3A3] hover:text-[#171717] hover:bg-[#F5F5F5] transition-colors cursor-pointer border-0 bg-transparent outline-none"
              >
                <FigmaAsset
                  nodeId="358:3676"
                  name="dots-vertical"
                  src="/figma/raise/dots-vertical.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* 4. TOP MATCHES Section (Figma Node: 358:3622) */}
      <section
        data-figma-node="358:3622"
        className="w-full flex flex-col items-start p-0 gap-3 box-border"
      >
        {/* Section Header */}
        <div className="w-full flex flex-row items-center justify-between box-border">
          <div className="flex items-center gap-1.5">
            <h2 className="font-sans font-semibold text-[14px] leading-[20px] uppercase text-[#171717] m-0">
              TOP MATCHES
            </h2>
            <FigmaAsset
              nodeId="358:3622"
              name="info-circle"
              src="/figma/raise/info-circle.svg"
              width={16}
              height={16}
              alt="Info"
            />
          </div>
          <button
            type="button"
            className="font-sans font-semibold text-[14px] leading-[20px] text-[#8F6500] hover:text-[#6E4E00] flex flex-row items-center gap-1 transition-colors cursor-pointer bg-transparent border-0 p-0 outline-none"
          >
            <span>View all opportunities</span>
            <FigmaAsset
              nodeId="358:3622"
              name="arrow-right"
              src="/figma/raise/arrow-right.svg"
              width={20}
              height={20}
              alt=""
            />
          </button>
        </div>

        {/* Cards Wrapper + Carousel Button with horizontal scroll */}
        <div className="w-full flex flex-row items-center gap-4 pr-4 relative box-border overflow-x-auto no-scrollbar pb-1">
          {/* Card 1: Kresge Foundation */}
          <div
            style={{
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            }}
            className="flex-1 min-w-[290px] h-[332px] flex flex-col items-start p-4 gap-3 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] box-border shrink-0"
          >
            {/* Header Block (compact top-row + directly stacked text-group) */}
            <div className="w-full flex flex-col gap-2 min-h-[92px]">
              {/* Row A: Logo left, Match badge right */}
              <div className="w-full flex items-start justify-between">
                <div className="w-[42px] h-[42px] rounded-[8px] border-[0.5px] border-black/16 bg-[#FAF5FF] flex items-center justify-center shrink-0 overflow-hidden box-border">
                  <FigmaAsset
                    nodeId="358:3622"
                    name="kresge-logo"
                    src="/figma/raise/kresge-logo.svg"
                    width={32}
                    height={32}
                    alt="Kresge Foundation"
                  />
                </div>
                <div className="h-[22px] px-1.5 py-0.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[6px] flex items-center shrink-0 box-border">
                  <span className="font-sans font-medium text-[12px] leading-[18px] text-[#15803D] whitespace-nowrap">
                    92% Match
                  </span>
                </div>
              </div>

              {/* Row B & C: Directly stacked Title + Supporting (gap: 0) */}
              <div className="w-full flex flex-col gap-0">
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717] m-0 line-clamp-2">
                  Kresge Foundation
                </h3>
                <span className="font-sans font-normal text-[12px] leading-[18px] text-[#525252] truncate">
                  Workforce Development
                </span>
              </div>
            </div>

            {/* Funding line */}
            <span className="font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
              $200K - $500K · Closes Sep 18, 2025
            </span>

            {/* Detail Block */}
            <div className="w-full flex-1 flex flex-col justify-between">
              {/* Why it fits */}
              <div className="flex flex-col gap-0.5">
                <span className="font-sans font-semibold text-[14px] leading-[20px] text-[#171717]">
                  Why it fits
                </span>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525252] m-0 line-clamp-2">
                  Strong workforce alignment, with most application evidence already available.
                </p>
              </div>

              {/* Readiness */}
              <div className="flex flex-col gap-0.5">
                <span className="font-sans font-semibold text-[14px] leading-[20px] text-[#171717]">
                  Readiness
                </span>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525252] m-0 truncate">
                  ✓ 2 stories · ✓ 6 testimonials · ⚠ Program budget needs update
                </p>
              </div>

              {/* CTA */}
              <button
                type="button"
                className="font-sans font-semibold text-[14px] leading-[20px] text-[#8F6500] hover:text-[#6E4E00] flex flex-row items-center gap-1 transition-colors cursor-pointer bg-transparent border-0 p-0 outline-none"
              >
                <span>Review opportunities</span>
                <FigmaAsset
                  nodeId="358:3622"
                  name="arrow-right"
                  src="/figma/raise/arrow-right.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </button>
            </div>
          </div>

          {/* Card 2: Community Impact Fund */}
          <div
            style={{
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            }}
            className="flex-1 min-w-[290px] h-[332px] flex flex-col items-start p-4 gap-3 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] box-border shrink-0"
          >
            {/* Header Block (compact top-row + directly stacked text-group) */}
            <div className="w-full flex flex-col gap-2 min-h-[92px]">
              {/* Row A: Logo left, Match badge right */}
              <div className="w-full flex items-start justify-between">
                <div className="w-[42px] h-[42px] rounded-[8px] border-[0.5px] border-black/16 bg-[#F0FDF4] flex items-center justify-center shrink-0 overflow-hidden box-border">
                  <FigmaAsset
                    nodeId="358:3622"
                    name="community-logo"
                    src="/figma/raise/community-logo.svg"
                    width={32}
                    height={32}
                    alt="Community Impact Fund"
                  />
                </div>
                <div className="h-[22px] px-1.5 py-0.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[6px] flex items-center shrink-0 box-border">
                  <span className="font-sans font-medium text-[12px] leading-[18px] text-[#15803D] whitespace-nowrap">
                    87% Match
                  </span>
                </div>
              </div>

              {/* Row B & C: Directly stacked Title + Supporting (gap: 0) */}
              <div className="w-full flex flex-col gap-0">
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717] m-0 line-clamp-2">
                  Community Impact Fund
                </h3>
                <span className="font-sans font-normal text-[12px] leading-[18px] text-[#525252] truncate">
                  Community &amp; Economic Development
                </span>
              </div>
            </div>

            {/* Funding line */}
            <span className="font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
              $150K - $350K · Closes Sep 25, 2025
            </span>

            {/* Detail Block */}
            <div className="w-full flex-1 flex flex-col justify-between">
              {/* Why it fits */}
              <div className="flex flex-col gap-0.5">
                <span className="font-sans font-semibold text-[14px] leading-[20px] text-[#171717]">
                  Why it fits
                </span>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525252] m-0 line-clamp-2">
                  Good fit for community outcomes and local economic mobility work.
                </p>
              </div>

              {/* What to strengthen */}
              <div className="flex flex-col gap-0.5">
                <span className="font-sans font-semibold text-[14px] leading-[20px] text-[#171717]">
                  What to strengthen
                </span>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525252] m-0 truncate">
                  ✓ Impact metrics · ✓ 1 report · ⚠ Add a recent participant story
                </p>
              </div>

              {/* CTA */}
              <button
                type="button"
                className="font-sans font-semibold text-[14px] leading-[20px] text-[#8F6500] hover:text-[#6E4E00] flex flex-row items-center gap-1 transition-colors cursor-pointer bg-transparent border-0 p-0 outline-none"
              >
                <span>Review opportunities</span>
                <FigmaAsset
                  nodeId="358:3622"
                  name="arrow-right"
                  src="/figma/raise/arrow-right.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </button>
            </div>
          </div>

          {/* Card 3: W.K. Kellogg Foundation */}
          <div
            style={{
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            }}
            className="flex-1 min-w-[290px] h-[332px] flex flex-col items-start p-4 gap-3 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] box-border shrink-0"
          >
            {/* Header Block (compact top-row + directly stacked text-group) */}
            <div className="w-full flex flex-col gap-2 min-h-[92px]">
              {/* Row A: Logo left, Match badge right */}
              <div className="w-full flex items-start justify-between">
                <div className="w-[42px] h-[42px] rounded-[8px] border-[0.5px] border-black/16 bg-[#FFF9E8] flex items-center justify-center shrink-0 overflow-hidden box-border">
                  <FigmaAsset
                    nodeId="358:3622"
                    name="kellogg-logo"
                    src="/figma/raise/kellogg-logo.svg"
                    width={32}
                    height={32}
                    alt="W.K. Kellogg Foundation"
                  />
                </div>
                <div className="h-[22px] px-1.5 py-0.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[6px] flex items-center shrink-0 box-border">
                  <span className="font-sans font-medium text-[12px] leading-[18px] text-[#15803D] whitespace-nowrap">
                    84% Match
                  </span>
                </div>
              </div>

              {/* Row B & C: Directly stacked Title + Supporting (gap: 0) */}
              <div className="w-full flex flex-col gap-0">
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717] m-0 line-clamp-2">
                  W.K. Kellogg Foundation
                </h3>
                <span className="font-sans font-normal text-[12px] leading-[18px] text-[#525252] truncate">
                  Youth &amp; Education
                </span>
              </div>
            </div>

            {/* Funding line */}
            <span className="font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
              $150K - $300K · Closes Oct 10, 2025
            </span>

            {/* Detail Block */}
            <div className="w-full flex-1 flex flex-col justify-between">
              {/* Why it fits */}
              <div className="flex flex-col gap-0.5">
                <span className="font-sans font-semibold text-[14px] leading-[20px] text-[#171717]">
                  Why it fits
                </span>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525252] m-0 line-clamp-2">
                  Strong youth education alignment with more runway to prepare.
                </p>
              </div>

              {/* What to strengthen */}
              <div className="flex flex-col gap-0.5">
                <span className="font-sans font-semibold text-[14px] leading-[20px] text-[#171717]">
                  What to strengthen
                </span>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525252] m-0 truncate">
                  ✓ Program outcomes · ⚠ Recent financials · ⚠ Board-ready narrative
                </p>
              </div>

              {/* CTA */}
              <button
                type="button"
                className="font-sans font-semibold text-[14px] leading-[20px] text-[#8F6500] hover:text-[#6E4E00] flex flex-row items-center gap-1 transition-colors cursor-pointer bg-transparent border-0 p-0 outline-none"
              >
                <span>Review opportunities</span>
                <FigmaAsset
                  nodeId="358:3622"
                  name="arrow-right"
                  src="/figma/raise/arrow-right.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </button>
            </div>
          </div>

          {/* Carousel Next Button (Outer right edge aligns with section/table right edge) */}
          <button
            type="button"
            aria-label="Next matches"
            style={{
              boxShadow:
                "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.06)",
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 p-2 bg-[#FFFFFF] border border-[#D4D4D4] rounded-[12px] flex items-center justify-center cursor-pointer hover:bg-[#F9FAFB] transition-colors outline-none z-10"
          >
            <FigmaAsset
              nodeId="358:3622"
              name="chevron-right"
              src="/figma/raise/chevron-right.svg"
              width={16}
              height={16}
              alt="Next"
            />
          </button>
        </div>
      </section>

      {/* 5. UPCOMING DEADLINES & FOLLOW-UPS Section */}
      <section className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#737373]">
            Upcoming Deadlines &amp; Follow-ups
          </h2>
          <button
            type="button"
            className="font-sans font-semibold text-[14px] leading-[20px] text-[#8F6500] hover:text-[#6E4E00] flex items-center gap-1 transition-colors cursor-pointer bg-transparent border-0 p-0 outline-none"
          >
            <span>View calendar</span>
            <FigmaAsset
              nodeId="358:3622"
              name="arrow-right"
              src="/figma/raise/arrow-right.svg"
              width={20}
              height={20}
              alt=""
            />
          </button>
        </div>

        {/* Row of 5 Calendar/Follow-up items with horizontal scroll */}
        <div className="w-full max-w-full h-[112px] flex flex-row items-stretch gap-3 p-0 overflow-x-auto no-scrollbar pb-1">
          {/* Card 1: Mellon Foundation */}
          <CalendarEventCard
            nodeId="358:3622"
            month="SEP"
            day="18"
            variant="yellow"
            supportingText="In 12 days"
            title="Mellon Foundation"
            badgeIconSrc="/figma/home/event-calendar.svg"
            badgeIconName="event-calendar"
            badgeLabel="LOI due"
          />

          {/* Card 2: Ford Foundation */}
          <CalendarEventCard
            nodeId="358:3622"
            month="SEP"
            day="22"
            variant="purple"
            supportingText="In 16 days"
            title="Ford Foundation"
            badgeIconSrc="/figma/home/event-clock.svg"
            badgeIconName="event-clock"
            badgeLabel="Call scheduled"
          />

          {/* Card 3: Community Impact */}
          <CalendarEventCard
            nodeId="358:3622"
            month="SEP"
            day="25"
            variant="green"
            supportingText="In 19 days"
            title="Community Impact"
            badgeIconSrc="/figma/home/event-calendar.svg"
            badgeIconName="event-calendar"
            badgeLabel="Application due"
          />

          {/* Card 4: Kellogg Foundation */}
          <CalendarEventCard
            nodeId="358:3622"
            month="OCT"
            day="10"
            variant="purple"
            supportingText="In 34 days"
            title="Kellogg Foundation"
            badgeIconSrc="/figma/home/event-calendar.svg"
            badgeIconName="event-calendar"
            badgeLabel="Proposal due"
          />

          {/* Card 5: Add Item */}
          <CalendarActionCard
            nodeId="358:3622"
            iconSrc="/figma/raise/calendar-plus-01.svg"
            iconName="calendar-plus-01"
            label="Add item"
          />
        </div>
      </section>
    </div>
  );
}
