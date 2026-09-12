import React from "react";
import Image from "next/image";

export function AttentionMetrics() {
  return (
    <div
      data-figma-node="517:9383"
      className="w-full self-stretch h-[102px] flex flex-col items-start p-0 gap-3 box-border"
    >
      <div className="w-full h-[102px] flex flex-row items-start gap-4 p-0">
        {/* Card 1: NEW TESTIMONIALS */}
        <div className="flex-1 min-w-0 h-[102px] bg-[#FFFFFF] border border-[#E5E5E5] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[12px] p-5 relative flex flex-col items-start box-border">
          <div className="w-full h-6 font-['DM_Sans',sans-serif] font-medium text-[14px] leading-[24px] tracking-[0.04em] uppercase text-[#171717]">
            NEW TESTIMONIALS
          </div>
          <div className="w-full h-[38px] flex items-end gap-5">
            <span className="font-['Fraunces',serif] font-semibold text-[30px] leading-[38px] text-[#171717]">
              24
            </span>
          </div>
          <div className="absolute top-4 right-4 w-8 h-8 rounded-[8px] bg-[#F0FDF4] flex items-center justify-center">
            <Image
              src="/figma/home-v05/metrics/folder.svg"
              width={16}
              height={16}
              alt=""
              className="w-4 h-4"
            />
          </div>
        </div>

        {/* Card 2: RELEVANT FOUNDERS */}
        <div className="flex-1 min-w-0 h-[102px] bg-[#FFFFFF] border border-[#E5E5E5] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[12px] p-5 relative flex flex-col items-start box-border">
          <div className="w-full h-6 font-['DM_Sans',sans-serif] font-medium text-[14px] leading-[24px] tracking-[0.04em] uppercase text-[#171717]">
            RELEVANT FOUNDERS
          </div>
          <div className="w-full h-[38px] flex items-end gap-5">
            <span className="font-['Fraunces',serif] font-semibold text-[30px] leading-[38px] text-[#171717]">
              7
            </span>
          </div>
          <div className="absolute top-4 right-4 w-8 h-8 rounded-[8px] bg-[#EFF6FF] flex items-center justify-center">
            <Image
              src="/figma/home-v05/metrics/file-06.svg"
              width={16}
              height={16}
              alt=""
              className="w-4 h-4"
            />
          </div>
        </div>

        {/* Card 3: PROGRAM MATCH */}
        <div className="flex-1 min-w-0 h-[102px] bg-[#FFFFFF] border border-[#E5E5E5] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[12px] p-5 relative flex flex-col items-start box-border">
          <div className="w-full h-6 font-['DM_Sans',sans-serif] font-medium text-[14px] leading-[24px] tracking-[0.04em] uppercase text-[#171717]">
            PROGRAM MATCH
          </div>
          <div className="w-full h-[38px] flex items-end gap-5">
            <span className="font-['Fraunces',serif] font-semibold text-[30px] leading-[38px] text-[#EA580C]">
              3
            </span>
          </div>
          <div className="absolute top-4 right-4 w-8 h-8 rounded-[8px] bg-[#FFF7ED] flex items-center justify-center">
            <Image
              src="/figma/home-v05/metrics/alert-triangle.svg"
              width={16}
              height={16}
              alt=""
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
