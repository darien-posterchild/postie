"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FigmaAsset } from "@/components/common/figma-asset";
import { cn } from "@/lib/utils";

export default function TellPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "story" | "calendar">("overview");

  return (
    <div
      data-figma-node="211:483"
      className="w-full flex flex-col gap-6 shrink-0"
    >
      {/* 1. Header & Tabs Area */}
      <div className="flex flex-col gap-6">
        {/* Top Row: Title + Primary CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="flex-1 min-w-0 flex flex-col gap-1">
            <h1
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              className="text-[32px] leading-[40px] font-bold text-[#171717] tracking-[-0.02em]"
            >
              Tell powerful stories.
            </h1>
            <p className="font-sans font-normal text-[16px] leading-[24px] text-[#525252]">
              Create, collaborate, and publish content that moves your mission forward.
            </p>
          </div>

          {/* Primary Create Story CTA button */}
          <button
            type="button"
            style={{
              boxShadow:
                "0px 1px 2px rgba(10, 13, 18, 0.05), inset 0px 0px 0px 1px rgba(10, 13, 18, 0.18), inset 0px -2px 0px rgba(10, 13, 18, 0.05)",
            }}
            className="box-border w-[137px] h-[36px] px-3 py-2 bg-[#FFC700] rounded-[8px] flex flex-row items-center justify-center gap-1 cursor-pointer hover:bg-[#F5BF00] transition-colors border-none outline-none appearance-none whitespace-nowrap shrink-0"
          >
            <FigmaAsset
              nodeId="211:483"
              name="plus"
              src="/figma/tell/plus-icon.svg"
              width={20}
              height={20}
              alt=""
            />
            <span className="font-inter font-semibold text-[14px] leading-[20px] text-[#181D27] px-[2px] whitespace-nowrap">
              Create Story
            </span>
          </button>
        </div>

        {/* Outer Tabs Container (32px) */}
        <div className="w-full h-[32px] flex flex-col items-start p-0 border-b border-[#E5E5E5] relative">
          {/* Tab Row */}
          <div className="flex flex-row items-start gap-3 h-[32px]">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={cn(
                "w-[71px] h-[32px] p-[0_2px_12px] gap-1 flex flex-row justify-center items-center box-border cursor-pointer transition-colors outline-none appearance-none -mb-[1px] relative z-10 border-b-2",
                activeTab === "overview"
                  ? "border-[#F4B400] text-[#D99A00]"
                  : "border-transparent text-[#737373] hover:text-[#171717]"
              )}
            >
              <span className="font-sans font-semibold text-[14px] leading-[20px]">
                Overview
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("story")}
              className={cn(
                "w-[56px] h-[32px] p-[0_2px_12px] gap-1 flex flex-row justify-center items-center box-border cursor-pointer transition-colors outline-none appearance-none -mb-[1px] relative z-10 border-b-2",
                activeTab === "story"
                  ? "border-[#F4B400] text-[#D99A00]"
                  : "border-transparent text-[#737373] hover:text-[#171717]"
              )}
            >
              <span className="font-sans font-semibold text-[14px] leading-[20px]">
                Story
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("calendar")}
              className={cn(
                "w-[70px] h-[32px] p-[0_2px_12px] gap-1 flex flex-row justify-center items-center box-border cursor-pointer transition-colors outline-none appearance-none -mb-[1px] relative z-10 border-b-2",
                activeTab === "calendar"
                  ? "border-[#F4B400] text-[#D99A00]"
                  : "border-transparent text-[#737373] hover:text-[#171717]"
              )}
            >
              <span className="font-sans font-semibold text-[14px] leading-[20px]">
                Calendar
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. IN PROGRESS Section */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#737373]">
            In Progress
          </h2>
          <button
            type="button"
            className="font-sans font-semibold text-[14px] leading-[20px] text-[#8F6500] hover:text-[#6E4E00] flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>View all stories</span>
            <FigmaAsset
              nodeId="211:483"
              name="action-arrow"
              src="/figma/home/action-arrow.svg"
              width={16}
              height={16}
              alt=""
            />
          </button>
        </div>

        {/* 4 Cards Row (272px) with horizontal scroll */}
        <div className="w-full max-w-full h-[272px] flex flex-row items-start p-0 gap-4 overflow-x-auto no-scrollbar pb-1">
          {/* Card 1: Youth Career Pathways */}
          <div className="box-border w-[233px] min-w-[233px] h-[272px] shrink-0 flex flex-col items-start p-4 gap-3 relative isolate bg-[#FFFFFF] border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[16px] hover:border-[#D4D4D4] transition-colors">
            {/* Image Container: 201x100 */}
            <div className="w-[201px] h-[100px] border border-[rgba(0,0,0,0.10)] rounded-[8px] overflow-hidden relative shrink-0 bg-[#F5F5F5]">
              <Image
                src="/figma/tell/story-1.png"
                alt="Youth Career Pathways"
                fill
                className="object-cover"
              />
            </div>

            {/* Badge: Absolutely positioned overlapping image */}
            <span className="absolute left-[24px] top-[86px] h-[22px] px-[6px] py-[2px] bg-[#FFFDF5] border border-[#FFF2C7] text-[#D99A00] font-sans font-medium text-[12px] leading-[18px] rounded-[6px] flex items-center justify-center z-10 box-border whitespace-nowrap">
              In review
            </span>

            {/* Content Below Image: 201x128 */}
            <div className="w-[201px] h-[128px] flex flex-col items-start justify-between">
              {/* Title + Supporting text */}
              <div className="flex flex-col items-start">
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717]">
                  Youth Career Pathways
                </h3>
                <p className="font-sans font-normal text-[12px] leading-[18px] text-[#525252]">
                  Updated 2 days ago
                </p>
              </div>

              {/* Avatar Group */}
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full overflow-hidden border-[1.5px] border-white relative shrink-0">
                  <Image src="/figma/home/avatar.png" alt="" fill className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full overflow-hidden border-[1.5px] border-white -ml-1 relative shrink-0">
                  <Image src="/figma/home/avatar.png" alt="" fill className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full overflow-hidden border-[1.5px] border-white -ml-1 relative shrink-0">
                  <Image src="/figma/home/avatar.png" alt="" fill className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full bg-[#F5F5F5] border-[0.5px] border-[#E5E5E5] -ml-1 flex items-center justify-center font-sans font-semibold text-[12px] leading-[18px] text-[#737373] shrink-0 box-border">
                  +2
                </div>
              </div>

              {/* Progress Block */}
              <div className="w-[201px] h-[34px] flex flex-col gap-2">
                <div className="w-[201px] h-[8px] rounded-full bg-[#E5E5E5] overflow-hidden">
                  <div className="h-full bg-[#F4B400] rounded-full" style={{ width: "40.25%" }} />
                </div>
                <span className="font-sans font-normal text-[12px] leading-[18px] text-[#525252]">
                  Step 3 of 5 - Review & refine
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Community Impact Story */}
          <div className="box-border w-[233px] min-w-[233px] h-[272px] shrink-0 flex flex-col items-start p-4 gap-3 relative isolate bg-[#FFFFFF] border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[16px] hover:border-[#D4D4D4] transition-colors">
            {/* Image Container: 201x100 */}
            <div className="w-[201px] h-[100px] border border-[rgba(0,0,0,0.10)] rounded-[8px] overflow-hidden relative shrink-0 bg-[#F5F5F5]">
              <Image
                src="/figma/tell/story-2.png"
                alt="Community Impact Story"
                fill
                className="object-cover"
              />
            </div>

            {/* Badge: Absolutely positioned overlapping image */}
            <span className="absolute left-[24px] top-[86px] h-[22px] px-[6px] py-[2px] bg-[#FAFAFA] border border-[#E5E5E5] text-[#404040] font-sans font-medium text-[12px] leading-[18px] rounded-[6px] flex items-center justify-center z-10 box-border whitespace-nowrap">
              Draft
            </span>

            {/* Content Below Image: 201x128 */}
            <div className="w-[201px] h-[128px] flex flex-col items-start justify-between">
              {/* Title + Supporting text */}
              <div className="flex flex-col items-start">
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717]">
                  Community Impact Story
                </h3>
                <p className="font-sans font-normal text-[12px] leading-[18px] text-[#525252]">
                  Updated 5 days ago
                </p>
              </div>

              {/* Avatar Group */}
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full overflow-hidden border-[1.5px] border-white relative shrink-0">
                  <Image src="/figma/home/avatar.png" alt="" fill className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full overflow-hidden border-[1.5px] border-white -ml-1 relative shrink-0">
                  <Image src="/figma/home/avatar.png" alt="" fill className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full overflow-hidden border-[1.5px] border-white -ml-1 relative shrink-0">
                  <Image src="/figma/home/avatar.png" alt="" fill className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full bg-[#F5F5F5] border-[0.5px] border-[#E5E5E5] -ml-1 flex items-center justify-center font-sans font-semibold text-[12px] leading-[18px] text-[#737373] shrink-0 box-border">
                  +2
                </div>
              </div>

              {/* Progress Block */}
              <div className="w-[201px] h-[34px] flex flex-col gap-2">
                <div className="w-[201px] h-[8px] rounded-full bg-[#E5E5E5] overflow-hidden">
                  <div className="h-full bg-[#F4B400] rounded-full" style={{ width: "57.5%" }} />
                </div>
                <span className="font-sans font-normal text-[12px] leading-[18px] text-[#525252]">
                  Step 2 of 4 - Build your story
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: After-School Success */}
          <div className="box-border w-[233px] min-w-[233px] h-[272px] shrink-0 flex flex-col items-start p-4 gap-3 relative isolate bg-[#FFFFFF] border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[16px] hover:border-[#D4D4D4] transition-colors">
            {/* Image Container: 201x100 */}
            <div className="w-[201px] h-[100px] border border-[rgba(0,0,0,0.10)] rounded-[8px] overflow-hidden relative shrink-0 bg-[#F5F5F5]">
              <Image
                src="/figma/tell/story-3.png"
                alt="After-School Success"
                fill
                className="object-cover"
              />
            </div>

            {/* Badge: Absolutely positioned overlapping image */}
            <span className="absolute left-[24px] top-[86px] h-[22px] px-[6px] py-[2px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] font-sans font-medium text-[12px] leading-[18px] rounded-[6px] flex items-center justify-center z-10 box-border whitespace-nowrap">
              Ready to schedule
            </span>

            {/* Content Below Image: 201x128 */}
            <div className="w-[201px] h-[128px] flex flex-col items-start justify-between">
              {/* Title + Supporting text */}
              <div className="flex flex-col items-start">
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717]">
                  After-School Success
                </h3>
                <p className="font-sans font-normal text-[12px] leading-[18px] text-[#525252]">
                  Updated yesterday
                </p>
              </div>

              {/* Avatar Group */}
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full overflow-hidden border-[1.5px] border-white relative shrink-0">
                  <Image src="/figma/home/avatar.png" alt="" fill className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full overflow-hidden border-[1.5px] border-white -ml-1 relative shrink-0">
                  <Image src="/figma/home/avatar.png" alt="" fill className="object-cover" />
                </div>
              </div>

              {/* Progress Block */}
              <div className="w-[201px] h-[34px] flex flex-col gap-2">
                <div className="w-[201px] h-[8px] rounded-full bg-[#E5E5E5] overflow-hidden">
                  <div className="h-full bg-[#F4B400] rounded-full" style={{ width: "74.66%" }} />
                </div>
                <span className="font-sans font-normal text-[12px] leading-[18px] text-[#525252]">
                  Step 4 of 4 - Schedule and publish
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: Workforce Mentorship */}
          <div className="box-border w-[233px] min-w-[233px] h-[272px] shrink-0 flex flex-col items-start p-4 gap-3 relative isolate bg-[#FFFFFF] border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[16px] hover:border-[#D4D4D4] transition-colors">
            {/* Image Container: 201x100 */}
            <div className="w-[201px] h-[100px] border border-[rgba(0,0,0,0.10)] rounded-[8px] overflow-hidden relative shrink-0 bg-[#F5F5F5]">
              <Image
                src="/figma/tell/story-4.png"
                alt="Workforce Mentorship"
                fill
                className="object-cover"
              />
            </div>

            {/* Badge: Absolutely positioned overlapping image */}
            <span className="absolute left-[24px] top-[86px] h-[22px] px-[6px] py-[2px] bg-[#FAFAFA] border border-[#E5E5E5] text-[#404040] font-sans font-medium text-[12px] leading-[18px] rounded-[6px] flex items-center justify-center z-10 box-border whitespace-nowrap">
              Draft
            </span>

            {/* Content Below Image: 201x128 */}
            <div className="w-[201px] h-[128px] flex flex-col items-start justify-between">
              {/* Title + Supporting text */}
              <div className="flex flex-col items-start">
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717]">
                  Workforce Mentorship
                </h3>
                <p className="font-sans font-normal text-[12px] leading-[18px] text-[#525252]">
                  Updated today
                </p>
              </div>

              {/* Avatar Group */}
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full overflow-hidden border-[1.5px] border-white relative shrink-0">
                  <Image src="/figma/home/avatar.png" alt="" fill className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full overflow-hidden border-[1.5px] border-white -ml-1 relative shrink-0">
                  <Image src="/figma/home/avatar.png" alt="" fill className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full overflow-hidden border-[1.5px] border-white -ml-1 relative shrink-0">
                  <Image src="/figma/home/avatar.png" alt="" fill className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full bg-[#F5F5F5] border-[0.5px] border-[#E5E5E5] -ml-1 flex items-center justify-center font-sans font-semibold text-[12px] leading-[18px] text-[#737373] shrink-0 box-border">
                  +2
                </div>
              </div>

              {/* Progress Block */}
              <div className="w-[201px] h-[34px] flex flex-col gap-2">
                <div className="w-[201px] h-[8px] rounded-full bg-[#E5E5E5] overflow-hidden">
                  <div className="h-full bg-[#F4B400] rounded-full" style={{ width: "40.25%" }} />
                </div>
                <span className="font-sans font-normal text-[12px] leading-[18px] text-[#525252]">
                  Step 3 of 5 - Review & refine
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTENT IDEAS Section */}
      <section className="flex flex-col gap-3">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#737373]">
            Content Ideas
          </h2>
          <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
            Signals worth considering when you decide what to create next.
          </p>
        </div>

        {/* Main Wrapper (220px) with horizontal scroll */}
        <div className="w-full max-w-full h-[220px] flex flex-row items-center p-[0_16px_0_0] gap-4 relative overflow-x-auto no-scrollbar pb-1">
          {/* Card 1: Workforce development update */}
          <div className="box-border flex-1 min-w-[290px] h-[220px] shrink-0 p-4 gap-3 flex flex-col items-start bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            {/* Icon Container 56x56 */}
            <div className="w-[56px] h-[56px] bg-[#F0FDF4] rounded-[12px] shrink-0 flex items-center justify-center">
              <FigmaAsset
                nodeId="211:483"
                name="feather-icon"
                src="/figma/tell/feather-icon.svg"
                width={28}
                height={28}
                alt=""
              />
            </div>

            {/* Content Below Icon: 278.67px x 120px */}
            <div className="w-full h-[120px] flex flex-col items-start justify-between gap-2">
              {/* Text Block: 64px */}
              <div className="w-full flex flex-col items-start">
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717]">
                  Workforce development update
                </h3>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
                  You haven’t shared a workforce story in 6 weeks.
                </p>
              </div>

              {/* CTA: 137x36 */}
              <button
                type="button"
                style={{
                  boxShadow:
                    "0px 1px 2px rgba(10, 13, 18, 0.05), inset 0px -2px 0px rgba(10, 13, 18, 0.05)",
                }}
                className="box-border w-[137px] h-[36px] px-3 py-2 bg-[#FFFFFF] border border-[#D5D7DA] rounded-[8px] flex items-center justify-center gap-1 font-sans font-semibold text-[14px] leading-[20px] text-[#414651] hover:bg-[#F9FAFB] transition-colors cursor-pointer appearance-none outline-none"
              >
                <span>Create story</span>
                <FigmaAsset
                  nodeId="211:483"
                  name="cta-arrow"
                  src="/figma/tell/cta-arrow.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </button>
            </div>
          </div>

          {/* Card 2: Board meeting is tomorrow */}
          <div className="box-border flex-1 min-w-[290px] h-[220px] shrink-0 p-4 gap-3 flex flex-col items-start bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            {/* Icon Container 56x56 */}
            <div className="w-[56px] h-[56px] bg-[#FFF9E8] rounded-[12px] shrink-0 flex items-center justify-center">
              <FigmaAsset
                nodeId="211:483"
                name="calendar-heart"
                src="/figma/tell/calendar-heart.svg"
                width={28}
                height={28}
                alt=""
              />
            </div>

            {/* Content Below Icon: 278.67px x 120px */}
            <div className="w-full h-[120px] flex flex-col items-start justify-between gap-2">
              {/* Text Block: 64px */}
              <div className="w-full flex flex-col items-start">
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717]">
                  Board meeting is tomorrow
                </h3>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
                  Three recent stories could strengthen the conversation.
                </p>
              </div>

              {/* CTA: 137x36 */}
              <button
                type="button"
                style={{
                  boxShadow:
                    "0px 1px 2px rgba(10, 13, 18, 0.05), inset 0px -2px 0px rgba(10, 13, 18, 0.05)",
                }}
                className="box-border w-[137px] h-[36px] px-3 py-2 bg-[#FFFFFF] border border-[#D5D7DA] rounded-[8px] flex items-center justify-center gap-1 font-sans font-semibold text-[14px] leading-[20px] text-[#414651] hover:bg-[#F9FAFB] transition-colors cursor-pointer appearance-none outline-none"
              >
                <span>Prepare now</span>
                <FigmaAsset
                  nodeId="211:483"
                  name="cta-arrow"
                  src="/figma/tell/cta-arrow.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </button>
            </div>
          </div>

          {/* Card 3: New testimonial received */}
          <div className="box-border flex-1 min-w-[290px] h-[220px] shrink-0 p-4 gap-3 flex flex-col items-start bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            {/* Icon Container 56x56 */}
            <div className="w-[56px] h-[56px] bg-[#FAF5FF] rounded-[12px] shrink-0 flex items-center justify-center">
              <FigmaAsset
                nodeId="211:483"
                name="announcement-icon"
                src="/figma/tell/announcement-icon.svg"
                width={28}
                height={28}
                alt=""
              />
            </div>

            {/* Content Below Icon: 278.67px x 120px */}
            <div className="w-full h-[120px] flex flex-col items-start justify-between gap-2">
              {/* Text Block: 64px */}
              <div className="w-full flex flex-col items-start">
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717]">
                  New testimonial received
                </h3>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
                  Jordan M. shared a strong outcome from the program.
                </p>
              </div>

              {/* CTA: 145x36 */}
              <button
                type="button"
                style={{
                  boxShadow:
                    "0px 1px 2px rgba(10, 13, 18, 0.05), inset 0px -2px 0px rgba(10, 13, 18, 0.05)",
                }}
                className="box-border w-[145px] h-[36px] px-3 py-2 bg-[#FFFFFF] border border-[#D5D7DA] rounded-[8px] flex items-center justify-center gap-1 font-sans font-semibold text-[14px] leading-[20px] text-[#414651] hover:bg-[#F9FAFB] transition-colors cursor-pointer appearance-none outline-none"
              >
                <span>Use in a story</span>
                <FigmaAsset
                  nodeId="211:483"
                  name="cta-arrow"
                  src="/figma/tell/cta-arrow.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </button>
            </div>
          </div>

          {/* Right Carousel Button */}
          <button
            type="button"
            aria-label="Next ideas"
            style={{
              boxShadow:
                "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.06)",
            }}
            className="absolute right-0 top-[94px] w-[32px] h-[32px] p-2 bg-[#FFFFFF] border border-[#D4D4D4] rounded-[12px] flex items-center justify-center cursor-pointer hover:bg-[#F9FAFB] transition-colors appearance-none outline-none z-10"
          >
            <FigmaAsset
              nodeId="211:483"
              name="carousel-chevron"
              src="/figma/tell/carousel-chevron.svg"
              width={16}
              height={16}
              alt="Next"
            />
          </button>
        </div>
      </section>

      {/* 4. CONTENT CALENDAR Section */}
      <section className="flex flex-col gap-2.5">
        <h2 className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#737373]">
          Content Calendar
        </h2>

        {/* Events wrapper with horizontal scroll */}
        <div className="w-full max-w-full h-[112px] flex flex-row items-stretch gap-3 p-0 overflow-x-auto no-scrollbar pb-1">
          {/* Card 1: Board meeting */}
          <div className="box-border flex-1 min-w-[240px] h-[112px] shrink-0 flex items-center p-3 gap-4 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px]">
            <div className="flex flex-row items-center gap-3 w-full h-[80px]">
              {/* Date Block */}
              <div className="w-[50px] h-[80px] shrink-0 flex flex-col items-center bg-[#FFFFFF] border border-[#E5E5E5] rounded-[8px] overflow-hidden box-border">
                <div className="w-[50px] h-[30px] p-[4px_8px_2px] flex justify-center items-center bg-[#FFFDF5] box-border">
                  <span className="font-sans font-semibold text-[16px] leading-[24px] text-[#D99A00]">
                    SEP
                  </span>
                </div>
                <div className="w-[50px] h-[50px] p-[1px_8px_3px] flex justify-center items-center box-border">
                  <span
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                    className="font-bold text-[24px] leading-[32px] text-center text-[#D99A00]"
                  >
                    15
                  </span>
                </div>
              </div>

              {/* Text Column */}
              <div className="flex-1 h-[72px] flex flex-col justify-center items-start gap-[2px]">
                <span className="font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
                  Tomorrow
                </span>
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717]">
                  Board meeting
                </h3>
                {/* Time Badge */}
                <div className="h-[24px] px-[8px] pl-[6px] py-[2px] flex items-center gap-1 bg-[#FFFFFF] border border-[#D4D4D4] rounded-[6px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] box-border">
                  <FigmaAsset
                    nodeId="211:483"
                    name="event-calendar"
                    src="/figma/home/event-calendar.svg"
                    width={12}
                    height={12}
                    alt=""
                  />
                  <span className="font-sans font-medium text-[14px] leading-[20px] text-[#404040]">
                    All day
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: After-School Success */}
          <div className="box-border flex-1 min-w-[240px] h-[112px] shrink-0 flex items-center p-3 gap-4 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px]">
            <div className="flex flex-row items-center gap-3 w-full h-[80px]">
              {/* Date Block */}
              <div className="w-[50px] h-[80px] shrink-0 flex flex-col items-center bg-[#FFFFFF] border border-[#E5E5E5] rounded-[8px] overflow-hidden box-border">
                <div className="w-[50px] h-[30px] p-[4px_8px_2px] flex justify-center items-center bg-[#FAF5FF] box-border">
                  <span className="font-sans font-semibold text-[16px] leading-[24px] text-[#7E22CE]">
                    SEP
                  </span>
                </div>
                <div className="w-[50px] h-[50px] p-[1px_8px_3px] flex justify-center items-center box-border">
                  <span
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                    className="font-bold text-[24px] leading-[32px] text-center text-[#7E22CE]"
                  >
                    17
                  </span>
                </div>
              </div>

              {/* Text Column */}
              <div className="flex-1 h-[72px] flex flex-col justify-center items-start gap-[2px]">
                <span className="font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
                  Friday
                </span>
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717]">
                  After-School Success
                </h3>
                {/* Time Badge */}
                <div className="h-[24px] px-[8px] pl-[6px] py-[2px] flex items-center gap-1 bg-[#FFFFFF] border border-[#D4D4D4] rounded-[6px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] box-border">
                  <FigmaAsset
                    nodeId="211:483"
                    name="event-clock"
                    src="/figma/home/event-clock.svg"
                    width={12}
                    height={12}
                    alt=""
                  />
                  <span className="font-sans font-medium text-[14px] leading-[20px] text-[#404040]">
                    9:00 AM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Grant follow-up */}
          <div className="box-border flex-1 min-w-[240px] h-[112px] shrink-0 flex items-center p-3 gap-4 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px]">
            <div className="flex flex-row items-center gap-3 w-full h-[80px]">
              {/* Date Block */}
              <div className="w-[50px] h-[80px] shrink-0 flex flex-col items-center bg-[#FFFFFF] border border-[#E5E5E5] rounded-[8px] overflow-hidden box-border">
                <div className="w-[50px] h-[30px] p-[4px_8px_2px] flex justify-center items-center bg-[#F0FDF4] box-border">
                  <span className="font-sans font-semibold text-[16px] leading-[24px] text-[#15803D]">
                    SEP
                  </span>
                </div>
                <div className="w-[50px] h-[50px] p-[1px_8px_3px] flex justify-center items-center box-border">
                  <span
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                    className="font-bold text-[24px] leading-[32px] text-center text-[#15803D]"
                  >
                    20
                  </span>
                </div>
              </div>

              {/* Text Column */}
              <div className="flex-1 h-[72px] flex flex-col justify-center items-start gap-[2px]">
                <span className="font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
                  Monday
                </span>
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717]">
                  Grant follow-up
                </h3>
                {/* Time Badge */}
                <div className="h-[24px] px-[8px] pl-[6px] py-[2px] flex items-center gap-1 bg-[#FFFFFF] border border-[#D4D4D4] rounded-[6px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] box-border">
                  <FigmaAsset
                    nodeId="211:483"
                    name="event-clock"
                    src="/figma/home/event-clock.svg"
                    width={12}
                    height={12}
                    alt=""
                  />
                  <span className="font-sans font-medium text-[14px] leading-[20px] text-[#404040]">
                    10:00 AM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: View calendar */}
          <div className="box-border w-[118px] min-w-[118px] h-[112px] shrink-0 flex items-center justify-center p-3 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] cursor-pointer hover:bg-[#FAFAFA] transition-colors">
            <div className="w-[94px] h-[60px] flex flex-col justify-center items-center gap-3">
              <FigmaAsset
                nodeId="211:483"
                name="calendar-icon"
                src="/figma/home/calendar-icon.svg"
                width={28}
                height={28}
                alt="Calendar"
              />
              <span className="w-[94px] font-sans font-medium text-[14px] leading-[20px] text-[#171717] text-center whitespace-nowrap">
                View calendar
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
