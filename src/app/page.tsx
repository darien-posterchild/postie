import React from "react";
import Image from "next/image";
import { FigmaAsset } from "@/components/common/figma-asset";
import { CalendarEventCard, CalendarActionCard } from "@/components/common/calendar-event-card";
import { PageHeader } from "@/components/common/page-header";

export default function HomePage() {
  return (
    <div
      className="w-full flex flex-col gap-6 pb-6"
      data-figma-node="358:3236"
    >
      {/* 1. Page Header (Figma Node: 358:3237) */}
      <PageHeader
        nodeId="358:3237"
        title="Good morning, Jeff! 👋"
        description="Here's what deserves your attention today."
      />

      {/* 2. WHAT NEEDS YOUR ATTENTION Section (Figma Node: 358:3238) */}
      <section className="flex flex-col gap-3" data-figma-node="358:3238">
        <h2 className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#737373]">
          What Needs Your Attention
        </h2>

        {/* 3-column horizontal card row with responsive scrolling (Figma Node: 358:3240) */}
        <div className="w-full flex flex-row items-stretch gap-4 overflow-x-auto no-scrollbar pb-1" data-figma-node="358:3240">
          {/* Card 1: Youth Career Pathways (Figma Node: 358:3241) */}
          <div
            data-figma-node="358:3241"
            className="box-border flex-1 min-w-[280px] h-[176px] flex flex-col justify-between items-start p-4 bg-[#FFFFFF] border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[12px] shrink-0"
          >
            {/* Child 1: Top Row (Figma Node: 358:3242) */}
            <div
              data-figma-node="358:3242"
              className="flex flex-row items-center gap-3"
            >
              {/* Left: Featured icon container (Figma Node: 358:3243) */}
              <div
                data-figma-node="358:3243"
                className="relative w-[56px] h-[56px] shrink-0 bg-[#F0FDF4] rounded-[12px]"
              >
                <FigmaAsset
                  nodeId="358:3243"
                  name="message-text-square-02"
                  src="/figma/home/message-text-square-02.svg"
                  width={28}
                  height={28}
                  className="absolute left-[14px] top-[14px]"
                  alt="Story Icon"
                />
              </div>

              {/* Right: Text stack (Figma Node: 358:3244) */}
              <div
                data-figma-node="358:3244"
                className="flex flex-col gap-0 items-start bg-white p-0 whitespace-nowrap"
              >
                <h3
                  data-figma-node="358:3245"
                  className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717]"
                >
                  Youth Career Pathways
                </h3>
                <span
                  data-figma-node="358:3246"
                  className="font-sans font-medium text-[14px] leading-[20px] text-[#404040]"
                >
                  Ready for your review
                </span>
              </div>
            </div>

            {/* Child 2: Supporting copy (Figma Node: 358:3247) */}
            <p
              data-figma-node="358:3247"
              className="w-full font-sans font-normal text-[14px] leading-[20px] text-[#525252] m-0 p-0"
            >
              Your story draft is complete and ready for your feedback.
            </p>

            {/* Child 3: Actions row (Figma Node: 358:3248) */}
            <div
              data-figma-node="358:3248"
              className="flex items-center justify-between w-full"
            >
              {/* Left: Tell badge (Figma Node: 358:3249) */}
              <span
                data-figma-node="358:3249"
                className="inline-flex items-center px-2 py-[2px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[6px] font-sans font-medium text-[14px] leading-[20px] text-[#15803D]"
              >
                Tell
              </span>

              {/* Right: Review story action (Figma Node: 358:3250) */}
              <button
                type="button"
                data-figma-node="358:3250"
                className="flex items-center gap-1 bg-transparent border-0 p-0 font-semibold text-[14px] leading-[20px] text-[#8F6500] cursor-pointer"
              >
                <span>Review story</span>
                <FigmaAsset
                  nodeId="358:3250"
                  name="arrow-up-right"
                  src="/figma/home/arrow-up-right.svg"
                  width={20}
                  height={20}
                  alt="Arrow Up Right"
                />
              </button>
            </div>
          </div>

          {/* Card 2: Kresge Foundation (Figma Node: 358:3251) */}
          <div
            data-figma-node="358:3251"
            className="box-border flex-1 min-w-[280px] h-[176px] flex flex-col justify-between items-start p-4 bg-[#FFFFFF] border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[12px] shrink-0"
          >
            {/* Child 1: Top Row (Figma Node: 358:3252) */}
            <div
              data-figma-node="358:3252"
              className="flex flex-row items-center gap-3"
            >
              {/* Left: Featured icon container (Figma Node: 358:3253) */}
              <div
                data-figma-node="358:3253"
                className="relative w-[56px] h-[56px] shrink-0 bg-[#FAF5FF] rounded-[12px]"
              >
                <FigmaAsset
                  nodeId="358:3253"
                  name="coins-stacked-02"
                  src="/figma/home/coins-stacked-02.svg"
                  width={28}
                  height={28}
                  className="absolute left-[14px] top-[14px]"
                  alt="Funding Icon"
                />
              </div>

              {/* Right: Text stack (Figma Node: 358:3254) */}
              <div
                data-figma-node="358:3254"
                className="flex flex-col gap-0 items-start bg-white p-0 whitespace-nowrap"
              >
                <h3
                  data-figma-node="358:3255"
                  className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717]"
                >
                  Kresge Foundation
                </h3>
                <span
                  data-figma-node="358:3256"
                  className="font-sans font-medium text-[14px] leading-[20px] text-[#404040]"
                >
                  Start here · 12 days left
                </span>
              </div>
            </div>

            {/* Child 2: Supporting copy (Figma Node: 358:3257) */}
            <p
              data-figma-node="358:3257"
              className="w-full font-sans font-normal text-[14px] leading-[20px] text-[#525252] m-0 p-0"
            >
              You have most of what you need to submit a strong application.
            </p>

            {/* Child 3: Actions row (Figma Node: 358:3258) */}
            <div
              data-figma-node="358:3258"
              className="flex items-center justify-between w-full"
            >
              {/* Left: Raise badge (Figma Node: 358:3259) */}
              <span
                data-figma-node="358:3259"
                className="inline-flex items-center px-2 py-[2px] bg-[#FAF5FF] border border-[#E9D5FF] rounded-[6px] font-sans font-medium text-[14px] leading-[20px] text-[#7E22CE]"
              >
                Raise
              </span>

              {/* Right: Review opportunity action (Figma Node: 358:3260) */}
              <button
                type="button"
                data-figma-node="358:3260"
                className="flex items-center gap-1 bg-transparent border-0 p-0 font-semibold text-[14px] leading-[20px] text-[#8F6500] cursor-pointer"
              >
                <span>Review opportunity</span>
                <FigmaAsset
                  nodeId="358:3260"
                  name="arrow-up-right"
                  src="/figma/home/arrow-up-right.svg"
                  width={20}
                  height={20}
                  alt="Arrow Up Right"
                />
              </button>
            </div>
          </div>

          {/* Card 3: Board meeting tomorrow (Figma Node: 358:3261) */}
          <div
            data-figma-node="358:3261"
            className="box-border flex-1 min-w-[280px] h-[176px] flex flex-col justify-between items-start p-4 bg-[#FFFFFF] border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[12px] shrink-0"
          >
            {/* Child 1: Top Row (Figma Node: 358:3262) */}
            <div
              data-figma-node="358:3262"
              className="flex flex-row items-center gap-3"
            >
              {/* Left: Featured icon container (Figma Node: 358:3263) */}
              <div
                data-figma-node="358:3263"
                className="relative w-[56px] h-[56px] shrink-0 bg-[#FFF9E8] rounded-[12px]"
              >
                <FigmaAsset
                  nodeId="358:3263"
                  name="calendar"
                  src="/figma/home/featured-calendar-attention.svg"
                  width={28}
                  height={28}
                  className="absolute left-[14px] top-[14px]"
                  alt="Calendar Icon"
                />
              </div>

              {/* Right: Text stack (Figma Node: 358:3264) */}
              <div
                data-figma-node="358:3264"
                className="flex flex-col gap-0 items-start bg-white p-0 whitespace-nowrap"
              >
                <h3
                  data-figma-node="358:3265"
                  className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717]"
                >
                  Board meeting tomorrow
                </h3>
                <span
                  data-figma-node="358:3266"
                  className="font-sans font-medium text-[14px] leading-[20px] text-[#404040]"
                >
                  3 stories could help
                </span>
              </div>
            </div>

            {/* Child 2: Supporting copy (Figma Node: 358:3267) */}
            <p
              data-figma-node="358:3267"
              className="w-full font-sans font-normal text-[14px] leading-[20px] text-[#525252] m-0 p-0"
            >
              You have recent impact stories that can support your update.
            </p>

            {/* Child 3: Actions row (Figma Node: 358:3268) */}
            <div
              data-figma-node="358:3268"
              className="flex items-center justify-between w-full"
            >
              {/* Left: Manage badge (Figma Node: 358:3269) */}
              <span
                data-figma-node="358:3269"
                className="inline-flex items-center px-2 py-[2px] bg-[#FEFCE8] border border-[#FEF08A] rounded-[6px] font-sans font-medium text-[14px] leading-[20px] text-[#A16207]"
              >
                Manage
              </span>

              {/* Right: Prepare update action (Figma Node: 358:3270) */}
              <button
                type="button"
                data-figma-node="358:3270"
                className="flex items-center gap-1 bg-transparent border-0 p-0 font-semibold text-[14px] leading-[20px] text-[#8F6500] cursor-pointer"
              >
                <span>Prepare update</span>
                <FigmaAsset
                  nodeId="358:3270"
                  name="arrow-up-right"
                  src="/figma/home/arrow-up-right.svg"
                  width={20}
                  height={20}
                  alt="Arrow Up Right"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTINUE WHERE YOU LEFT OFF Section (Figma Node: 358:3271) */}
      <section className="flex flex-col gap-3" data-figma-node="358:3271">
        <h2 className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#737373]">
          Continue Where You Left Off
        </h2>

        {/* 2-column horizontal row with responsive scrolling (Figma Node: 358:3273) */}
        <div className="w-full flex flex-row items-stretch gap-4 overflow-x-auto no-scrollbar pb-1" data-figma-node="358:3273">
          {/* Community Impact Story card (Figma Node: 358:3274) */}
          <div
            data-figma-node="358:3274"
            className="box-border flex-1 min-w-[360px] flex flex-row items-center p-4 gap-4 min-h-[108px] bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] shrink-0"
          >
            {/* Child 1: Image (Figma Node: 358:3275) */}
            <div
              data-figma-node="358:3275"
              className="self-stretch w-[76px] h-full shrink-0 border border-[rgba(0,0,0,0.1)] rounded-[8px] overflow-hidden"
            >
              <FigmaAsset
                nodeId="358:3275"
                name="community-impact-story"
                src="/figma/home/community-impact-story.png"
                width={76}
                height={76}
                alt="Community Impact Story"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Child 2: Primary Content (Figma Node: 358:3276) */}
            <div
              data-figma-node="358:3276"
              className="flex flex-col flex-1 min-w-0 gap-1 items-start p-0 overflow-hidden"
            >
              {/* Title (Figma Node: 358:3277) */}
              <h3
                data-figma-node="358:3277"
                className="font-sans font-semibold text-[16px] leading-[24px] text-[#000000] whitespace-nowrap"
              >
                Community Impact Story
              </h3>

              {/* Metadata Block (Figma Node: 358:3279) */}
              <div
                data-figma-node="358:3279"
                className="flex flex-col gap-1 items-start"
              >
                {/* Story Badge (Figma Node: 358:3280) */}
                <div
                  data-figma-node="358:3280"
                  className="inline-flex items-center gap-[6px] px-2 py-[2px] bg-[#FFFFFF] border border-[#D4D4D4] rounded-[6px] shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
                >
                  <FigmaAsset
                    nodeId="358:3280"
                    name="story-dot"
                    src="/figma/home/story-dot.svg"
                    width={8}
                    height={8}
                    alt="Story Dot"
                  />
                  <span className="font-sans font-medium text-[14px] leading-[20px] text-[#404040]">
                    Story
                  </span>
                </div>

                {/* Updated text (Figma Node: 358:3281) */}
                <span
                  data-figma-node="358:3281"
                  className="font-sans font-normal text-[14px] leading-[20px] text-[#000000] whitespace-nowrap"
                >
                  Updated 2 days ago
                </span>
              </div>
            </div>

            {/* Child 3: Status and Action (Figma Node: 358:3282) */}
            <div
              data-figma-node="358:3282"
              className="flex items-center gap-3 shrink-0 bg-white p-0"
            >
              {/* Status Badge (Figma Node: 358:3283) */}
              <span
                data-figma-node="358:3283"
                className="inline-flex items-center px-[10px] py-[2px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-full font-sans font-medium text-[14px] leading-[20px] text-[#15803D] whitespace-nowrap"
              >
                In review
              </span>

              {/* Action Button (Figma Node: 358:3284) */}
              <button
                type="button"
                aria-label="Open story"
                data-figma-node="358:3284"
                style={{
                  boxShadow:
                    "0px 1px 2px rgba(0, 0, 0, 0.05), inset 0px -2px 0px rgba(0, 0, 0, 0.05)",
                }}
                className="box-border w-[32px] h-[32px] p-[6px] flex items-center justify-center border border-[#D4D4D4] rounded-[12px] bg-[#FFFFFF] appearance-none outline-none cursor-pointer"
              >
                <FigmaAsset
                  nodeId="358:3284"
                  name="open-story-arrow"
                  src="/figma/home/open-story-arrow.svg"
                  width={20}
                  height={20}
                  alt="Open story"
                />
              </button>
            </div>
          </div>

          {/* Mellon Foundation card (Figma Node: 358:3285) */}
          <div
            data-figma-node="358:3285"
            className="box-border flex-1 min-w-[360px] flex flex-row items-center p-4 gap-4 min-h-[108px] bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] shrink-0"
          >
            {/* Child 1: Funding Logo (Figma Node: 358:3286) */}
            <div
              data-figma-node="358:3286"
              className="self-stretch w-[76px] h-full shrink-0 bg-[#FAF5FF] rounded-[8px] flex items-center justify-center overflow-hidden"
            >
              <FigmaAsset
                nodeId="358:3286"
                name="mellon-mark"
                src="/figma/home/mellon-mark.svg"
                width={48}
                height={48}
                alt="Mellon Foundation Logo"
              />
            </div>

            {/* Child 2: Primary Content (Figma Node: 358:3288) */}
            <div
              data-figma-node="358:3288"
              className="flex flex-col flex-1 min-w-0 gap-1 items-start p-0 overflow-hidden"
            >
              {/* Title (Figma Node: 358:3289) */}
              <h3
                data-figma-node="358:3289"
                className="font-sans font-semibold text-[16px] leading-[24px] text-[#000000] whitespace-nowrap"
              >
                Mellon Foundation
              </h3>

              {/* Metadata Block (Figma Node: 358:3291) */}
              <div
                data-figma-node="358:3291"
                className="flex flex-col gap-1 items-start"
              >
                {/* Funding Opportunity Badge (Figma Node: 358:3292) */}
                <div
                  data-figma-node="358:3292"
                  className="inline-flex items-center gap-[6px] px-2 py-[2px] bg-[#FFFFFF] border border-[#D4D4D4] rounded-[6px] shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
                >
                  <FigmaAsset
                    nodeId="358:3292"
                    name="funding-dot"
                    src="/figma/home/funding-dot.svg"
                    width={8}
                    height={8}
                    alt="Funding Dot"
                  />
                  <span className="font-sans font-medium text-[14px] leading-[20px] text-[#404040]">
                    Funding opportunity
                  </span>
                </div>

                {/* Updated text (Figma Node: 358:3293) */}
                <span
                  data-figma-node="358:3293"
                  className="font-sans font-normal text-[14px] leading-[20px] text-[#000000] whitespace-nowrap"
                >
                  Updated 1 day ago
                </span>
              </div>
            </div>

            {/* Child 3: Status and Action (Figma Node: 358:3294) */}
            <div
              data-figma-node="358:3294"
              className="flex items-center gap-3 shrink-0 bg-white p-0"
            >
              {/* Status Badge (Figma Node: 358:3295) */}
              <span
                data-figma-node="358:3295"
                className="inline-flex items-center px-[10px] py-[2px] bg-[#FAF5FF] border border-[#E9D5FF] rounded-full font-sans font-medium text-[14px] leading-[20px] text-[#7E22CE] whitespace-nowrap"
              >
                Reviewing
              </span>

              {/* Action Button (Figma Node: 358:3296) */}
              <button
                type="button"
                aria-label="Open opportunity"
                data-figma-node="358:3296"
                style={{
                  boxShadow:
                    "0px 1px 2px rgba(0, 0, 0, 0.05), inset 0px -2px 0px rgba(0, 0, 0, 0.05)",
                }}
                className="box-border w-[32px] h-[32px] p-[6px] flex items-center justify-center border border-[#D4D4D4] rounded-[12px] bg-[#FFFFFF] appearance-none outline-none cursor-pointer"
              >
                <FigmaAsset
                  nodeId="358:3296"
                  name="open-funding-arrow"
                  src="/figma/home/open-funding-arrow.svg"
                  width={20}
                  height={20}
                  alt="Open opportunity"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POSTERCHILD NOTICED Section (Figma Node: 358:3297) */}
      <section className="flex flex-col gap-2" data-figma-node="358:3297">
        <h2 className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#737373]">
          PosterChild Noticed
        </h2>

        {/* Notification card (Figma Node: 358:3299) */}
        <div
          data-figma-node="358:3299"
          className="box-border w-full max-w-full min-h-[108px] flex flex-row items-start p-4 gap-4 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px]"
        >
          {/* Content Row (Figma Node: 358:3300) */}
          <div
            data-figma-node="358:3300"
            className="w-full flex flex-row items-start gap-4 p-0"
          >
            {/* Left Icon (Figma Node: 358:3301) */}
            <div
              data-figma-node="358:3301"
              className="w-[28px] h-[28px] shrink-0"
            >
              <FigmaAsset
                nodeId="358:3301"
                name="stars-notification"
                src="/figma/home/stars-notification.svg"
                width={28}
                height={28}
                alt=""
              />
            </div>

            {/* Right Content (Figma Node: 358:3302) */}
            <div
              data-figma-node="358:3302"
              className="flex-1 min-w-0 flex flex-col justify-center items-start gap-3 p-0"
            >
              {/* Text Block (Figma Node: 358:3303) */}
              <div
                data-figma-node="358:3303"
                className="w-full flex flex-col items-start gap-1"
              >
                {/* Title Row (Figma Node: 358:3304) */}
                <h3
                  data-figma-node="358:3304"
                  className="font-sans font-semibold text-[14px] leading-[20px] text-[#171717] w-full"
                >
                  You may have a timely workforce story opportunity
                </h3>
                {/* Supporting Text (Figma Node: 358:3307) */}
                <p
                  data-figma-node="358:3307"
                  className="font-sans font-normal text-[14px] leading-[20px] text-[#404040] w-full"
                >
                  Why now: 3 active workforce funders · 4 new testimonials · 6
                  weeks since your last workforce story
                </p>
              </div>

              {/* Actions (Figma Node: 358:3308) */}
              <div
                data-figma-node="358:3308"
                className="flex items-start gap-3 p-0"
              >
                {/* Visible Action (Figma Node: 358:3310) */}
                <button
                  type="button"
                  data-figma-node="358:3310"
                  className="p-0 bg-transparent border-none font-sans font-semibold text-[14px] leading-[20px] text-[#8F6500] hover:text-[#6E4E00] cursor-pointer transition-colors"
                >
                  Create workforce story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMING UP Section (Figma Node: 358:3311) */}
      <section className="flex flex-col gap-2.5" data-figma-node="358:3311">
        <h2 className="text-[12px] font-semibold tracking-[0.06em] uppercase text-[#737373]">
          Coming Up
        </h2>

        {/* Events wrapper (Figma Node: 358:3313) */}
        <div
          data-figma-node="358:3313"
          className="w-full max-w-full h-[112px] flex flex-row items-stretch gap-3 p-0 overflow-x-auto no-scrollbar pb-1"
        >
          {/* Card 1: Board meeting */}
          <CalendarEventCard
            nodeId="358:3314"
            month="SEP"
            day="15"
            variant="yellow"
            supportingText="Tomorrow"
            title="Board meeting"
            badgeIconSrc="/figma/home/event-calendar.svg"
            badgeIconName="event-calendar"
            badgeLabel="All day"
          />

          {/* Card 2: Kresge Foundation */}
          <CalendarEventCard
            nodeId="358:3321"
            month="SEP"
            day="17"
            variant="purple"
            supportingText="Friday"
            title="Kresge Foundation"
            badgeIconSrc="/figma/home/event-clock.svg"
            badgeIconName="event-clock"
            badgeLabel="9:00 AM"
          />

          {/* Card 3: Grant follow-up */}
          <CalendarEventCard
            nodeId="358:3328"
            month="SEP"
            day="20"
            variant="green"
            supportingText="Monday"
            title="Grant follow-up"
            badgeIconSrc="/figma/home/event-clock.svg"
            badgeIconName="event-clock"
            badgeLabel="10:00 AM"
          />

          {/* Card 4: View calendar */}
          <CalendarActionCard
            nodeId="358:3335"
            iconSrc="/figma/home/calendar-icon.svg"
            iconName="calendar-icon"
            label="View calendar"
          />
        </div>
      </section>
    </div>
  );
}
