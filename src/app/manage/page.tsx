import React from "react";
import Link from "next/link";
import { FigmaAsset } from "@/components/common/figma-asset";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/common/page-header";

interface InventoryItem {
  label: string;
  value: string;
}

interface ManageCardData {
  id: string;
  nodeId: string;
  title: string;
  description: string;
  iconSrc: string;
  iconBgColor: string;
  items: InventoryItem[];
  ctaLabel: string;
  href?: string;
}

const MANAGE_CARDS: ManageCardData[] = [
  {
    id: "knowledge",
    nodeId: "365:4090",
    title: "Knowledge",
    description: "Stories, testimonials, reports and more.",
    iconSrc: "/figma/manage/book-open-01.svg",
    iconBgColor: "bg-[#FFF9E8]",
    items: [
      { label: "Stories", value: "48" },
      { label: "Testimonials", value: "127" },
      { label: "Reports", value: "12" },
      { label: "Program descriptions", value: "36" },
      { label: "Case studies", value: "18" },
    ],
    ctaLabel: "View knowledge",
  },
  {
    id: "assets",
    nodeId: "365:4091",
    title: "Assets",
    description: "Photos, videos, and brand materials you can use and reuse.",
    iconSrc: "/figma/manage/image-03.svg",
    iconBgColor: "bg-[#F0FDF4]",
    href: "/manage/assets",
    items: [
      { label: "Photos", value: "342" },
      { label: "Videos", value: "28" },
      { label: "Brand assets", value: "15" },
      { label: "Templates", value: "9" },
    ],
    ctaLabel: "View assets",
  },
  {
    id: "organization",
    nodeId: "365:4092",
    title: "Organization",
    description: "Your programs, impact, and brand identity.",
    iconSrc: "/figma/manage/bank.svg",
    iconBgColor: "bg-[#FAF5FF]",
    items: [
      { label: "Programs", value: "6" },
      { label: "Impact metrics", value: "12" },
      { label: "Brand voice & messaging", value: "1" },
      { label: "About our organization", value: "1" },
      { label: "Key information", value: "8" },
    ],
    ctaLabel: "View organization",
  },
  {
    id: "people",
    nodeId: "365:4093",
    title: "People",
    description: "Your team, donors, funders, partners and contacts.",
    iconSrc: "/figma/manage/users-01.svg",
    iconBgColor: "bg-[#EFF6FF]",
    items: [
      { label: "Team members", value: "24" },
      { label: "Donors", value: "156" },
      { label: "Funders", value: "32" },
      { label: "Partners", value: "18" },
      { label: "Board members", value: "12" },
    ],
    ctaLabel: "View people",
  },
  {
    id: "connections",
    nodeId: "365:4094",
    title: "Connections",
    description: "Integrations and external sources that power your organization.",
    iconSrc: "/figma/manage/link-01.svg",
    iconBgColor: "bg-[#FDF2F8]",
    items: [
      { label: "Google Drive", value: "Connected" },
      { label: "Google Calendar", value: "Connected" },
      { label: "Social accounts", value: "Connected" },
      { label: "Data sources", value: "Not connected" },
    ],
    ctaLabel: "Manage connections",
  },
  {
    id: "admin",
    nodeId: "365:4095",
    title: "Admin",
    description: "Permissions, data health and platform settings for your team.",
    iconSrc: "/figma/manage/shield-tick.svg",
    iconBgColor: "bg-[#FEF2F2]",
    items: [
      { label: "Team permissions", value: "Manage" },
      { label: "Data health", value: "Healthy" },
      { label: "Activity log", value: "View" },
      { label: "System settings", value: "Manage" },
    ],
    ctaLabel: "Go to admin",
  },
];

function ManageCard({ card }: { card: ManageCardData }) {
  const cardContent = (
    <div
      data-figma-node={card.nodeId}
      style={{
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      }}
      className={cn(
        "box-border w-full min-h-[360px] p-4 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] flex flex-col justify-between gap-3 transition-colors",
        card.href && "hover:border-[#D4D4D4] cursor-pointer"
      )}
    >
      {/* Top section: Header, Description, Inventory items */}
      <div className="flex flex-col gap-3">
        {/* 1. Header Row */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Featured Icon 56x56 */}
            <div
              className={cn(
                "relative w-[56px] h-[56px] rounded-[12px] shrink-0",
                card.iconBgColor
              )}
            >
              <FigmaAsset
                nodeId={card.nodeId}
                name={`${card.id}-icon`}
                src={card.iconSrc}
                width={28}
                height={28}
                className="absolute left-[14px] top-[14px]"
                alt={card.title}
              />
            </div>

            {/* Title */}
            <h2 className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717] m-0">
              {card.title}
            </h2>
          </div>

          {/* Chevron Right 24x24 */}
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <FigmaAsset
              nodeId={card.nodeId}
              name="chevron-right"
              src="/figma/manage/chevron-right.svg"
              width={24}
              height={24}
              alt=""
            />
          </div>
        </div>

        {/* 2. Supporting Description */}
        <p className="font-sans font-normal text-[12px] leading-[18px] text-[#525252] m-0 min-h-[36px]">
          {card.description}
        </p>

        {/* 3. Inventory List */}
        <div className="flex flex-col">
          {card.items.map((item, idx) => (
            <div
              key={item.label}
              className={cn(
                "h-[32px] py-1.5 flex items-center justify-between box-border",
                idx < card.items.length - 1 && "border-b border-[#E5E5E5]"
              )}
            >
              <span className="font-sans font-semibold text-[14px] leading-[20px] text-[#171717]">
                {item.label}
              </span>
              <span className="font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Bottom CTA */}
      <div
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
        className="flex items-center gap-1.5 font-semibold text-[14px] leading-[20px] text-[#8F6500] hover:opacity-80 transition-opacity bg-transparent border-none p-0 self-start"
      >
        <span>{card.ctaLabel}</span>
        <FigmaAsset
          nodeId={card.nodeId}
          name="cta-arrow"
          src="/figma/manage/arrow-right.svg"
          width={20}
          height={20}
          alt=""
        />
      </div>
    </div>
  );

  if (card.href) {
    return (
      <Link href={card.href} className="block w-full no-underline text-inherit">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

export default function ManagePage() {
  return (
    <div className="w-full flex flex-col gap-6 shrink-0 pb-6">
      {/* ==================================================
          PAGE HEADER (Figma Frame Node: 365:4088)
          ================================================== */}
      <PageHeader
        nodeId="365:4088"
        title="Your organization, all in one place."
        description="Everything PosterChild knows about your organization. Keep your information up to date, organized, and ready to use."
      />

      {/* ==================================================
          MANAGE CARDS GRID (3 cols desktop, 2 cols tablet, 1 col mobile)
          ================================================== */}
      <div className="w-full manage-grid">
        {MANAGE_CARDS.map((card) => (
          <ManageCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
