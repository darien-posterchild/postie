"use client";

import React from "react";
import Image from "next/image";
import { PrimaryButton } from "@/components/ui/primary-button";

interface ConversationItem {
  id: string;
  title: string;
  recipientSummary: string;
  image: string;
  status: "active" | "closed" | "draft";
  statusLabel: string;
  responses: number;
  hearingSummary: string;
  lastUpdated: string;
}

const CONVERSATIONS: ConversationItem[] = [
  {
    id: "conv-1",
    title: "Youth Career Pathways",
    recipientSummary: "Sent to 32 participants",
    image: "/figma/tell/story-1.png",
    status: "active",
    statusLabel: "Active",
    responses: 17,
    hearingSummary: "Graduates want clearer mentorship beyond initial placements.",
    lastUpdated: "2 days ago",
  },
  {
    id: "conv-2",
    title: "Community Impact Story",
    recipientSummary: "Sent to 25 volunteers",
    image: "/figma/tell/story-2.png",
    status: "active",
    statusLabel: "Active",
    responses: 14,
    hearingSummary: "Volunteers feel most connected during 1-on-1 student sessions.",
    lastUpdated: "2 days ago",
  },
  {
    id: "conv-3",
    title: "After-School Success",
    recipientSummary: "Sent to 45 donors",
    image: "/figma/tell/story-3.png",
    status: "closed",
    statusLabel: "Closed",
    responses: 17,
    hearingSummary: "Donors requesting more direct student update videos.",
    lastUpdated: "1 week ago",
  },
  {
    id: "conv-4",
    title: "Workforce Mentorship",
    recipientSummary: "Draft question",
    image: "/figma/tell/story-4.png",
    status: "draft",
    statusLabel: "Draft",
    responses: 13,
    hearingSummary: "Awaiting first responses",
    lastUpdated: "3 days ago",
  },
];

export default function TellConnectPage() {
  return (
    <div
      data-figma-node="tell-connect-exploration-05"
      className="w-full flex-1 flex flex-col items-start gap-6 box-border pb-10"
    >
      {/* 1. Header Row (Home header row / Page header) */}
      <div className="w-full flex flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-start gap-1 max-w-[620px]">
          <h1 className="font-serif font-semibold text-[36px] leading-[44px] tracking-[-0.02em] text-[#171717] m-0">
            Connect through conversation.
          </h1>
          <p className="font-sans font-normal text-[16px] leading-[24px] text-[#525252] m-0">
            Ask meaningful questions, listen to your supporters, and uncover real stories.
          </p>
        </div>

        <PrimaryButton label="Create story" />
      </div>

      {/* 2. Question Worth Asking Section */}
      <section
        aria-labelledby="question-worth-asking-title"
        className="w-full flex flex-col items-start gap-3"
      >
        <h2
          id="question-worth-asking-title"
          className="m-0 p-0 font-sans font-semibold text-[16px] leading-[24px] text-[#171717]"
        >
          Question worth asking
        </h2>

        {/* Highlight notification card */}
        <div className="w-full bg-[#FFF9E8] border border-[#FFE58F] rounded-[12px] p-4 flex flex-row items-start gap-4 box-border">
          {/* Star Icon (28x28 with gold stroke #F4B400) */}
          <div className="w-7 h-7 shrink-0 flex items-center justify-center text-[#F4B400]">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 shrink-0"
              aria-hidden="true"
            >
              <path
                d="M14 2.5L16.6533 9.47997C17.1599 10.8123 18.1877 11.8401 19.52 12.3467L26.5 15L19.52 17.6533C18.1877 18.1599 17.1599 19.1877 16.6533 20.52L14 27.5L11.3467 20.52C10.8401 19.1877 9.81232 18.1599 8.47997 17.6533L1.5 15L8.47997 12.3467C9.81232 11.8401 10.8401 10.8123 11.3467 9.47997L14 2.5Z"
                stroke="#F4B400"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start gap-3 flex-1 min-w-0">
            <div className="flex flex-col items-start gap-1 w-full">
              <h3 className="m-0 font-sans font-semibold text-[16px] leading-[24px] text-[#171717]">
                What was the pivotal turning point in your journey with us?
              </h3>
              <p className="m-0 font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
                Send this question to recent alumni to uncover inspiring transformation moments for your upcoming report.
              </p>
            </div>

            {/* Action link */}
            <button
              type="button"
              className="p-0 m-0 bg-transparent border-none inline-flex items-center gap-1 font-sans font-semibold text-[14px] leading-[20px] text-[#8F6500] hover:text-[#704F00] transition-colors cursor-pointer group"
            >
              <span>Ask this question</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 shrink-0 transform group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              >
                <path
                  d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334"
                  stroke="#FFCC33"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Your Conversations Section */}
      <section
        aria-labelledby="conversations-title"
        className="w-full flex flex-col items-start gap-3"
      >
        {/* Frame Header */}
        <div className="w-full flex flex-row justify-between items-end gap-4">
          <div className="flex flex-col items-start">
            <h2
              id="conversations-title"
              className="m-0 p-0 font-sans font-semibold text-[16px] leading-[24px] text-[#171717]"
            >
              Your conversations
            </h2>
            <p className="m-0 p-0 font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
              Active prompts and responses gathered from your community.
            </p>
          </div>

          <button
            type="button"
            className="p-0 m-0 bg-transparent border-none font-sans font-semibold text-[14px] leading-[20px] text-[#8F6500] hover:text-[#704F00] transition-colors cursor-pointer whitespace-nowrap"
          >
            View all conversations
          </button>
        </div>

        {/* Row-based table container matching exact Figma tokens */}
        <div className="w-full bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] overflow-hidden shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
          {/* Table Header */}
          <div className="w-full h-10 bg-[#FAFAFA] border-b border-[#E5E5E5] flex flex-row items-center px-3 text-[#737373] font-sans font-semibold text-[12px] leading-[18px]">
            <div className="flex-1 min-w-[220px] px-3">Conversation</div>
            <div className="w-[110px] shrink-0 px-3">Status</div>
            <div className="w-[90px] shrink-0 px-3">Responses</div>
            <div className="w-[200px] shrink-0 px-3">What you’re hearing</div>
            <div className="w-[110px] shrink-0 px-3">Last updated</div>
          </div>

          {/* Table Rows */}
          <div className="w-full flex flex-col">
            {CONVERSATIONS.map((conv, index) => {
              const isLast = index === CONVERSATIONS.length - 1;

              return (
                <div
                  key={conv.id}
                  className={`w-full min-h-[64px] py-3 px-3 flex flex-row items-center hover:bg-[#FAF9F6] transition-colors ${
                    !isLast ? "border-b border-[#E5E5E5]" : ""
                  }`}
                >
                  {/* Column 1: Conversation (Image + Title & Supporting text) */}
                  <div className="flex-1 min-w-[220px] px-3 flex flex-row items-center gap-2">
                    <div className="w-10 h-10 rounded-[8px] overflow-hidden border border-[rgba(0,0,0,0.1)] relative shrink-0 bg-[#F5F5F5]">
                      <Image
                        src={conv.image}
                        alt={conv.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start min-w-0">
                      <span className="font-sans font-medium text-[14px] leading-[20px] text-[#171717] truncate max-w-[220px]">
                        {conv.title}
                      </span>
                      <span className="font-sans font-normal text-[14px] leading-[20px] text-[#525252] truncate max-w-[220px]">
                        {conv.recipientSummary}
                      </span>
                    </div>
                  </div>

                  {/* Column 2: Status Badge */}
                  <div className="w-[110px] shrink-0 px-3 flex items-center">
                    {conv.status === "active" && (
                      <span className="inline-flex items-center gap-1 h-[22px] px-[6px] py-[2px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[6px] text-[#15803D] font-sans font-medium text-[12px] leading-[18px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0" />
                        <span>Active</span>
                      </span>
                    )}
                    {conv.status === "closed" && (
                      <span className="inline-flex items-center gap-1 h-[22px] px-[6px] py-[2px] bg-[#FEF2F2] border border-[#FECACA] rounded-[6px] text-[#B91C1C] font-sans font-medium text-[12px] leading-[18px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0" />
                        <span>Closed</span>
                      </span>
                    )}
                    {conv.status === "draft" && (
                      <span className="inline-flex items-center gap-1 h-[22px] px-[6px] py-[2px] bg-[#FAFAFA] border border-[#E5E5E5] rounded-[6px] text-[#404040] font-sans font-medium text-[12px] leading-[18px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#737373] shrink-0" />
                        <span>Draft</span>
                      </span>
                    )}
                  </div>

                  {/* Column 3: Responses */}
                  <div className="w-[90px] shrink-0 px-3 font-sans font-medium text-[14px] leading-[20px] text-[#171717]">
                    {conv.responses}
                  </div>

                  {/* Column 4: What you’re hearing */}
                  <div className="w-[200px] shrink-0 px-3 font-sans font-medium text-[14px] leading-[20px] text-[#171717]">
                    <p className="m-0 line-clamp-2">{conv.hearingSummary}</p>
                  </div>

                  {/* Column 5: Last updated */}
                  <div className="w-[110px] shrink-0 px-3 font-sans font-medium text-[14px] leading-[20px] text-[#171717]">
                    {conv.lastUpdated}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Need Inspiration? Footer Banner */}
      <section
        aria-label="Need inspiration banner"
        className="w-full flex flex-row justify-between items-center py-4 gap-4"
      >
        <div className="flex flex-col items-start gap-0.5 max-w-[580px]">
          <h3 className="m-0 p-0 font-sans font-semibold text-[16px] leading-[24px] text-[#171717]">
            Need inspiration?
          </h3>
          <p className="m-0 p-0 font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
            Explore community questions that have sparked authentic, high-impact stories.
          </p>
        </div>

        {/* Secondary Button */}
        <button
          type="button"
          style={{
            boxShadow:
              "0px 1px 2px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.18), inset 0px -2px 0px rgba(0, 0, 0, 0.05)",
          }}
          className="h-9 px-3 py-2 bg-[#FFFFFF] border border-[#D4D4D4] rounded-[12px] inline-flex items-center justify-center gap-1 font-sans font-semibold text-[14px] leading-[20px] text-[#404040] hover:bg-[#F9F9F9] transition-all cursor-pointer whitespace-nowrap shrink-0 group outline-none"
        >
          <span className="px-0.5">Browse question bank</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 shrink-0 group-hover:translate-x-0.5 transition-transform"
            aria-hidden="true"
          >
            <path
              d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334"
              stroke="#A3A3A3"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>
    </div>
  );
}
