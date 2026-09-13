import React from "react";
import { PosterChildNoticed } from "@/components/home/posterchild-noticed";
import { PrimaryButton } from "@/components/ui/primary-button";
import { InProgressTable } from "@/components/tell/in-progress-table";

export default function TellPage() {
  return (
    <div
      data-figma-node="tell-overview"
      className="main-content w-full self-stretch flex flex-col gap-6"
    >
      {/* 1. Header row */}
      <div className="home-header-row flex flex-row justify-between items-center w-full min-h-[70px]">
        <div className="page-header flex-1 min-w-[320px] flex flex-col gap-[2px]">
          <h1
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              letterSpacing: "-0.02em",
            }}
            className="font-semibold text-[36px] leading-[44px] text-[#171717] m-0 p-0"
          >
            Tell powerful stories.
          </h1>
          <p className="font-['DM_Sans',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252] m-0 p-0">
            Create, collaborate, and publish content that moves your mission forward.
          </p>
        </div>
        <PrimaryButton label="Create story" />
      </div>

      {/* 2. PosterChild noticed */}
      <PosterChildNoticed />

      {/* 3. Needs your attention / In progress stories */}
      <InProgressTable />
    </div>
  );
}
