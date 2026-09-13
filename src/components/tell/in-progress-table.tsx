import React from "react";
import Image from "next/image";
import Link from "next/link";

interface InProgressStory {
  id: string;
  image: string;
  title: string;
  updated: string;
  priority: {
    label: string;
    bg: string;
    border: string;
    dot: string;
    color: string;
  };
  when: string;
  detail: string;
}

const IN_PROGRESS_STORIES: InProgressStory[] = [
  {
    id: "story-1",
    image: "/figma/tell/story-1.png",
    title: "Youth Career Pathways",
    updated: "Updated 2 days ago",
    priority: {
      label: "Immediate action required",
      bg: "#FEFCE8",
      border: "#FEF08A",
      dot: "#EAB308",
      color: "#A16207",
    },
    when: "Tomorrow",
    detail: "3 stories could strengthen your update.",
  },
  {
    id: "story-2",
    image: "/figma/tell/story-2.png",
    title: "Community Impact Story",
    updated: "Updated 5 days ago",
    priority: {
      label: "Draft",
      bg: "#FAFAFA",
      border: "#E5E5E5",
      dot: "#737373",
      color: "#404040",
    },
    when: "In 5 days",
    detail: "Step 2 of 4 - Build your story",
  },
  {
    id: "story-3",
    image: "/figma/tell/story-3.png",
    title: "After-School Success",
    updated: "Updated yesterday",
    priority: {
      label: "Ready",
      bg: "#F0FDF4",
      border: "#BBF7D0",
      dot: "#22C55E",
      color: "#15803D",
    },
    when: "Friday",
    detail: "Schedule and publish",
  },
  {
    id: "story-4",
    image: "/figma/tell/story-4.png",
    title: "Workforce Mentorship",
    updated: "Updated today",
    priority: {
      label: "Draft",
      bg: "#FAFAFA",
      border: "#E5E5E5",
      dot: "#737373",
      color: "#404040",
    },
    when: "In 10 days",
    detail: "Step 3 of 5 - Review & refine",
  },
];

export function InProgressTable() {
  return (
    <section
      aria-label="Needs your attention"
      className="w-full self-stretch flex flex-col items-start gap-3 p-0 box-border"
    >
      {/* Header Row: 24px height, space-between */}
      <div className="w-full h-6 flex items-center justify-between">
        <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[24px] text-[#171717] m-0 p-0">
          Needs your attention
        </h2>
        <Link
          href="/tell/stories"
          className="font-['DM_Sans',sans-serif] font-semibold text-[14px] leading-[20px] text-[#8F6500] hover:underline cursor-pointer bg-transparent border-none p-0 outline-none"
        >
          View all
        </Link>
      </div>

      {/* Row-based table container: 296px height at 4 rows */}
      <div className="w-full border border-[#E5E5E5] rounded-[12px] overflow-hidden bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] box-border">
        {/* Table Header Row: 40px height */}
        <div className="h-10 min-h-[40px] max-h-[40px] flex flex-row items-center bg-[#FAFAFA] border-b border-[#E5E5E5] w-full px-1 box-border">
          <div className="flex-[1.2] min-w-[220px] px-3 py-2 font-['DM_Sans',sans-serif] font-semibold text-[12px] leading-[18px] text-[#737373] box-border">
            Item
          </div>
          <div className="w-[153px] shrink-0 px-3 py-2 font-['DM_Sans',sans-serif] font-semibold text-[12px] leading-[18px] text-[#737373] box-border">
            Priority
          </div>
          <div className="w-[110px] shrink-0 px-3 py-2 font-['DM_Sans',sans-serif] font-semibold text-[12px] leading-[18px] text-[#737373] box-border">
            When
          </div>
          <div className="flex-[1.1] min-w-[200px] px-3 py-2 font-['DM_Sans',sans-serif] font-semibold text-[12px] leading-[18px] text-[#737373] box-border">
            What you should know
          </div>
        </div>

        {/* Data Rows: 64px each */}
        {IN_PROGRESS_STORIES.map((story, idx) => (
          <div
            key={story.id}
            className={`h-16 min-h-[64px] max-h-[64px] flex flex-row items-center bg-white px-1 box-border hover:bg-[#FAF9F6] transition-colors ${
              idx < IN_PROGRESS_STORIES.length - 1 ? "border-b border-[#E5E5E5]" : ""
            }`}
          >
            {/* Column 1: Item */}
            <div className="flex-[1.2] min-w-[220px] px-3 py-3 flex items-center gap-3 box-border min-w-0">
              <div className="w-10 h-10 shrink-0 rounded-[8px] overflow-hidden border border-[rgba(0,0,0,0.1)] relative bg-[#F5F5F5]">
                <Image
                  src={story.image}
                  alt={story.title}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <span className="font-['DM_Sans',sans-serif] font-medium text-[14px] leading-[20px] text-[#171717] truncate">
                  {story.title}
                </span>
                <span className="font-['DM_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#525252] truncate">
                  {story.updated}
                </span>
              </div>
            </div>

            {/* Column 2: Priority */}
            <div className="w-[153px] shrink-0 px-3 py-3 flex items-center box-border">
              <div
                style={{
                  backgroundColor: story.priority.bg,
                  borderColor: story.priority.border,
                }}
                className="h-[22px] px-1.5 py-0.5 border rounded-[6px] flex items-center gap-1 box-border whitespace-nowrap"
              >
                <span
                  style={{ backgroundColor: story.priority.dot }}
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                />
                <span
                  style={{ color: story.priority.color }}
                  className="font-['DM_Sans',sans-serif] font-medium text-[12px] leading-[18px]"
                >
                  {story.priority.label}
                </span>
              </div>
            </div>

            {/* Column 3: When */}
            <div className="w-[110px] shrink-0 px-3 py-3 flex items-center box-border min-w-0">
              <span className="font-['DM_Sans',sans-serif] font-medium text-[14px] leading-[20px] text-[#171717] truncate">
                {story.when}
              </span>
            </div>

            {/* Column 4: What you should know */}
            <div className="flex-[1.1] min-w-[200px] px-3 py-3 flex items-center box-border min-w-0">
              <span className="font-['DM_Sans',sans-serif] font-medium text-[14px] leading-[20px] text-[#171717] truncate">
                {story.detail}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
