"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FigmaAsset } from "@/components/common/figma-asset";
import { cn } from "@/lib/utils";
import { usePostie } from "@/lib/postie-context";
import { CalendarEventCard, CalendarActionCard } from "@/components/common/calendar-event-card";
import { PageHeader } from "@/components/common/page-header";

export default function TellPage() {
  const { postieView } = usePostie();
  const [activeTab, setActiveTab] = useState<"overview" | "story" | "calendar">("overview");

  return (
    <div
      data-figma-node="211:483"
      className="w-full flex flex-col gap-6 shrink-0 pb-6"
    >
      {/* 1. Header & Tabs Area */}
      <PageHeader
        nodeId="211:483"
        title="Tell powerful stories."
        description="Create, collaborate, and publish content that moves your mission forward."
        action={
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
            <span className="font-sans font-semibold text-[14px] leading-[20px] text-[#181D27] px-[2px] whitespace-nowrap">
              Create Story
            </span>
          </button>
        }
      >
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
      </PageHeader>

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
        <div className="w-full max-w-full min-h-[272px] flex flex-row items-stretch p-0 gap-4 overflow-x-auto no-scrollbar pb-1">
          {/* Card 1: Youth Career Pathways */}
          <div className="box-border flex-1 min-w-[220px] h-[272px] shrink-0 flex flex-col items-start p-4 gap-3 relative isolate bg-[#FFFFFF] border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[16px] hover:border-[#D4D4D4] transition-colors">
            {/* Image Container */}
            <div className="w-full h-[100px] border border-[rgba(0,0,0,0.10)] rounded-[8px] overflow-hidden relative shrink-0 bg-[#F5F5F5]">
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

            {/* Content Below Image */}
            <div className="w-full flex-1 flex flex-col items-start justify-between">
              {/* Title + Supporting text */}
              <div className="w-full flex flex-col items-start">
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717] truncate w-full">
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
              <div className="w-full flex flex-col gap-2">
                <div className="w-full h-[8px] rounded-full bg-[#E5E5E5] overflow-hidden">
                  <div className="h-full bg-[#F4B400] rounded-full" style={{ width: "40.25%" }} />
                </div>
                <span className="font-sans font-normal text-[12px] leading-[18px] text-[#525252]">
                  Step 3 of 5 - Review & refine
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Community Impact Story */}
          <div className="box-border flex-1 min-w-[220px] h-[272px] shrink-0 flex flex-col items-start p-4 gap-3 relative isolate bg-[#FFFFFF] border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[16px] hover:border-[#D4D4D4] transition-colors">
            {/* Image Container */}
            <div className="w-full h-[100px] border border-[rgba(0,0,0,0.10)] rounded-[8px] overflow-hidden relative shrink-0 bg-[#F5F5F5]">
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

            {/* Content Below Image */}
            <div className="w-full flex-1 flex flex-col items-start justify-between">
              {/* Title + Supporting text */}
              <div className="w-full flex flex-col items-start">
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717] truncate w-full">
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
              <div className="w-full flex flex-col gap-2">
                <div className="w-full h-[8px] rounded-full bg-[#E5E5E5] overflow-hidden">
                  <div className="h-full bg-[#F4B400] rounded-full" style={{ width: "57.5%" }} />
                </div>
                <span className="font-sans font-normal text-[12px] leading-[18px] text-[#525252]">
                  Step 2 of 4 - Build your story
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: After-School Success */}
          <div className="box-border flex-1 min-w-[220px] h-[272px] shrink-0 flex flex-col items-start p-4 gap-3 relative isolate bg-[#FFFFFF] border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[16px] hover:border-[#D4D4D4] transition-colors">
            {/* Image Container */}
            <div className="w-full h-[100px] border border-[rgba(0,0,0,0.10)] rounded-[8px] overflow-hidden relative shrink-0 bg-[#F5F5F5]">
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

            {/* Content Below Image */}
            <div className="w-full flex-1 flex flex-col items-start justify-between">
              {/* Title + Supporting text */}
              <div className="w-full flex flex-col items-start">
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717] truncate w-full">
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
              <div className="w-full flex flex-col gap-2">
                <div className="w-full h-[8px] rounded-full bg-[#E5E5E5] overflow-hidden">
                  <div className="h-full bg-[#F4B400] rounded-full" style={{ width: "74.66%" }} />
                </div>
                <span className="font-sans font-normal text-[12px] leading-[18px] text-[#525252]">
                  Step 4 of 4 - Schedule and publish
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: Workforce Mentorship */}
          <div className="box-border flex-1 min-w-[220px] h-[272px] shrink-0 flex flex-col items-start p-4 gap-3 relative isolate bg-[#FFFFFF] border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[16px] hover:border-[#D4D4D4] transition-colors">
            {/* Image Container */}
            <div className="w-full h-[100px] border border-[rgba(0,0,0,0.10)] rounded-[8px] overflow-hidden relative shrink-0 bg-[#F5F5F5]">
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

            {/* Content Below Image */}
            <div className="w-full flex-1 flex flex-col items-start justify-between">
              {/* Title + Supporting text */}
              <div className="w-full flex flex-col items-start">
                <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717] truncate w-full">
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
              <div className="w-full flex flex-col gap-2">
                <div className="w-full h-[8px] rounded-full bg-[#E5E5E5] overflow-hidden">
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
      <section
        className={cn(
          "flex flex-col gap-2.5 transition-[width] duration-200",
          postieView === "floating" ? "w-[calc(100%-420px)] max-w-[calc(100%-420px)]" : "w-full"
        )}
      >
        <h2 className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#737373]">
          Content Calendar
        </h2>

        {/* Events wrapper with horizontal scroll */}
        <div className="w-full max-w-full h-[112px] flex flex-row items-stretch gap-3 p-0 overflow-x-auto no-scrollbar pb-1">
          {/* Card 1: Board meeting */}
          <CalendarEventCard
            nodeId="211:483"
            month="SEP"
            day="15"
            variant="yellow"
            supportingText="Tomorrow"
            title="Board meeting"
            badgeIconSrc="/figma/home/event-calendar.svg"
            badgeIconName="event-calendar"
            badgeLabel="All day"
            className="flex-1 min-w-[260px] shrink-0"
          />

          {/* Card 2: After-School Success */}
          <CalendarEventCard
            nodeId="211:483"
            month="SEP"
            day="17"
            variant="purple"
            supportingText="Friday"
            title="After-School Success"
            badgeIconSrc="/figma/home/event-clock.svg"
            badgeIconName="event-clock"
            badgeLabel="9:00 AM"
            className="flex-1 min-w-[260px] shrink-0"
          />

          {/* Card 3: Grant follow-up */}
          <CalendarEventCard
            nodeId="211:483"
            month="SEP"
            day="20"
            variant="green"
            supportingText="Monday"
            title="Grant follow-up"
            badgeIconSrc="/figma/home/event-clock.svg"
            badgeIconName="event-clock"
            badgeLabel="10:00 AM"
            className="flex-1 min-w-[260px] shrink-0"
          />

          {/* Card 4: View calendar */}
          <CalendarActionCard
            nodeId="211:483"
            iconSrc="/figma/home/calendar-icon.svg"
            iconName="calendar-icon"
            label="View calendar"
            className="w-[118px] min-w-[118px] flex-none shrink-0"
          />
        </div>
      </section>
    </div>
  );
}
