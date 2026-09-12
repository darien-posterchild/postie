import React from "react";
import Image from "next/image";
import "./needs-attention.css";

export function NeedsAttention() {
  return (
    <section
      data-figma-node="513:11524"
      aria-label="Needs your attention"
      className="w-full self-stretch flex flex-col items-start gap-3 p-0 box-border"
    >
      {/* Section Header: 100% width, 24px height, space-between */}
      <div className="w-full h-6 flex items-center justify-between">
        <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[24px] text-[#171717] m-0 p-0">
          Needs your attention
        </h2>
        <button
          type="button"
          className="font-['DM_Sans',sans-serif] font-semibold text-[14px] leading-[20px] text-[#8F6500] hover:underline cursor-pointer bg-transparent border-none p-0 outline-none"
        >
          View all
        </button>
      </div>

      {/* Table: Row-based grid container */}
      <div
        data-figma-node="513:11530"
        className="attention-table-container"
      >
        {/* Header Row: 40px height, #FAFAFA, 1px continuous border-bottom */}
        <div className="attention-header-row">
          <div className="attention-header-cell">
            Item
          </div>
          <div className="attention-header-cell">
            Priority
          </div>
          <div className="attention-header-cell">
            What you should know
          </div>
        </div>

        {/* Data Row 1 — Board meeting */}
        <div className="attention-data-row">
          <div className="attention-row-top">
            {/* Column 1: Item */}
            <div className="attention-cell-item">
              <div className="w-10 h-10 shrink-0 rounded-[12px] bg-[#FFF9E8] flex items-center justify-center">
                <Image
                  src="/figma/home-v05/attention-table/calendar-heart-02.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="w-5 h-5"
                />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[14px] leading-[20px] text-[#171717] truncate whitespace-nowrap">
                  Board meeting
                </span>
                <span className="font-['DM_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#525252] truncate whitespace-nowrap">
                  Upcoming event
                </span>
              </div>
            </div>

            {/* Column 2: Priority */}
            <div className="attention-cell-priority">
              <div className="h-[22px] px-1.5 py-0.5 bg-[#FEF2F2] border border-[#FECACA] rounded-[6px] flex items-center gap-1 box-border">
                <div className="w-2 h-2 shrink-0 flex items-center justify-center">
                  <Image
                    src="/figma/home-v05/attention-table/dot-immediate.svg"
                    width={8}
                    height={8}
                    alt=""
                    className="w-2 h-2"
                  />
                </div>
                <span className="font-['DM_Sans',sans-serif] font-medium text-[12px] leading-[18px] text-[#B91C1C] whitespace-nowrap">
                  Immediate
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: What you should know */}
          <div className="attention-cell-detail">
            <span className="font-['DM_Sans',sans-serif] font-medium text-[14px] leading-[20px] text-[#171717] truncate whitespace-nowrap">
              Tomorrow
            </span>
            <span className="font-['DM_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#525252] truncate whitespace-nowrap">
              3 stories could strengthen your update.
            </span>
          </div>
        </div>

        {/* Data Row 2 — Kresge Foundation */}
        <div className="attention-data-row">
          <div className="attention-row-top">
            {/* Column 1: Item */}
            <div className="attention-cell-item">
              <div className="w-10 h-10 shrink-0 rounded-[12px] bg-[#FAF5FF] flex items-center justify-center">
                <Image
                  src="/figma/home-v05/attention-table/coins-hand.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="w-5 h-5"
                />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[14px] leading-[20px] text-[#171717] truncate whitespace-nowrap">
                  Kresge Foundation
                </span>
                <span className="font-['DM_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#525252] truncate whitespace-nowrap">
                  Funding opportunity
                </span>
              </div>
            </div>

            {/* Column 2: Priority */}
            <div className="attention-cell-priority">
              <div className="h-[22px] px-1.5 py-0.5 bg-[#FEFCE8] border border-[#FEF08A] rounded-[6px] flex items-center gap-1 box-border">
                <div className="w-2 h-2 shrink-0 flex items-center justify-center">
                  <Image
                    src="/figma/home-v05/attention-table/dot-upcoming.svg"
                    width={8}
                    height={8}
                    alt=""
                    className="w-2 h-2"
                  />
                </div>
                <span className="font-['DM_Sans',sans-serif] font-medium text-[12px] leading-[18px] text-[#A16207] whitespace-nowrap">
                  Upcoming
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: What you should know */}
          <div className="attention-cell-detail">
            <span className="font-['DM_Sans',sans-serif] font-medium text-[14px] leading-[20px] text-[#171717] truncate whitespace-nowrap">
              Closes in 12 days
            </span>
            <span className="font-['DM_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#525252] truncate whitespace-nowrap">
              Strong match (92%). Application is ready for your review.
            </span>
          </div>
        </div>

        {/* Data Row 3 — Youth Career Pathways */}
        <div className="attention-data-row">
          <div className="attention-row-top">
            {/* Column 1: Item */}
            <div className="attention-cell-item">
              <div className="w-10 h-10 shrink-0 rounded-[12px] bg-[#F0FDF4] flex items-center justify-center">
                <Image
                  src="/figma/home-v05/attention-table/file-06.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="w-5 h-5"
                />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[14px] leading-[20px] text-[#171717] truncate whitespace-nowrap">
                  Youth Career Pathways
                </span>
                <span className="font-['DM_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#525252] truncate whitespace-nowrap">
                  Story draft
                </span>
              </div>
            </div>

            {/* Column 2: Priority */}
            <div className="attention-cell-priority">
              <div className="h-[22px] px-1.5 py-0.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[6px] flex items-center gap-1 box-border">
                <div className="w-2 h-2 shrink-0 flex items-center justify-center">
                  <Image
                    src="/figma/home-v05/attention-table/dot-ready.svg"
                    width={8}
                    height={8}
                    alt=""
                    className="w-2 h-2"
                  />
                </div>
                <span className="font-['DM_Sans',sans-serif] font-medium text-[12px] leading-[18px] text-[#15803D] whitespace-nowrap">
                  Ready
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: What you should know */}
          <div className="attention-cell-detail">
            <span className="font-['DM_Sans',sans-serif] font-medium text-[14px] leading-[20px] text-[#171717] truncate whitespace-nowrap">
              Draft is complete
            </span>
            <span className="font-['DM_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#525252] truncate whitespace-nowrap">
              Review and publish when you’re ready.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
