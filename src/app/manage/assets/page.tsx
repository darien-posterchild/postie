"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FigmaAsset } from "@/components/common/figma-asset";
import { PageHeader } from "@/components/common/page-header";
import { cn } from "@/lib/utils";

type AssetType = "Photo" | "Video" | "Brand asset" | "Template";
type AssetView = "cards" | "list";

interface AssetData {
  id: string;
  type: AssetType;
  date: string;
  title: string;
  size: string;
  tagsCount: string;
  previewSrc?: string;
  previewType: "image" | "brand-kit";
  fileExtension: string;
  supportingText: string;
  usedIn: string;
}

const ASSETS_DATA: AssetData[] = [
  {
    id: "asset-1",
    type: "Photo",
    date: "Sep 8, 2026",
    title: "Youth Career Pathways workshop",
    size: "6.52 MB",
    tagsCount: "3 tags",
    previewSrc: "/figma/manage/assets/youth-career-pathways-workshop.png",
    previewType: "image",
    fileExtension: "JPG",
    supportingText: "JPG · 6.52 MB",
    usedIn: "Story",
  },
  {
    id: "asset-2",
    type: "Photo",
    date: "Sep 2, 2026",
    title: "Community roundtable",
    size: "4.8 MB",
    tagsCount: "2 tags",
    previewSrc: "/figma/manage/assets/card-2-preview.png",
    previewType: "image",
    fileExtension: "JPG",
    supportingText: "JPG · 4.8 MB",
    usedIn: "—",
  },
  {
    id: "asset-3",
    type: "Video",
    date: "Sep 2, 2026",
    title: "Program recap — Spring cohort",
    size: "640 MB",
    tagsCount: "1 tag",
    previewSrc: "/figma/manage/assets/card-3-preview.png",
    previewType: "image",
    fileExtension: "MP4",
    supportingText: "MP4 · 1:24",
    usedIn: "Story",
  },
  {
    id: "asset-4",
    type: "Brand asset",
    date: "Sep 2, 2026",
    title: "Brighter Futures logo kit",
    size: "98.73 MB",
    tagsCount: "4 files",
    previewType: "brand-kit",
    fileExtension: "SVG + PNG",
    supportingText: "SVG + PNG · 4 files",
    usedIn: "Brand settings",
  },
  {
    id: "asset-5",
    type: "Template",
    date: "Aug 26, 2026",
    title: "Youth Career Pathways social",
    size: "238 KB",
    tagsCount: "2 tags",
    previewSrc: "/figma/manage/assets/card-5-preview.png",
    previewType: "image",
    fileExtension: "JPG",
    supportingText: "JPG · Social post",
    usedIn: "Social media",
  },
  {
    id: "asset-6",
    type: "Template",
    date: "Aug 18, 2026",
    title: "Annual impact report cover",
    size: "325 KB",
    tagsCount: "1 tag",
    previewSrc: "/figma/tell/story-4.png",
    previewType: "image",
    fileExtension: "JPG",
    supportingText: "JPG · Report",
    usedIn: "Impact report",
  },
];

function AssetTypeBadge({ type }: { type: AssetType }) {
  const configs: Record<
    AssetType,
    { bg: string; border: string; text: string; iconSrc: string; iconName: string; shadow?: string }
  > = {
    Photo: {
      bg: "bg-[#FFFFFF]",
      border: "border-[#D4D4D4]",
      text: "text-[#404040]",
      iconSrc: "/figma/manage/assets/icons/image-01.svg",
      iconName: "image-01",
      shadow: "shadow-[0_1px_1px_rgba(0,0,0,0.05)]",
    },
    Video: {
      bg: "bg-[#FFF7ED]",
      border: "border-[#FED7AA]",
      text: "text-[#C2410C]",
      iconSrc: "/figma/manage/assets/icons/play-circle.svg",
      iconName: "play-circle",
    },
    "Brand asset": {
      bg: "bg-[#F0F9FF]",
      border: "border-[#BAE6FD]",
      text: "text-[#0369A1]",
      iconSrc: "/figma/manage/assets/icons/palette.svg",
      iconName: "palette",
    },
    Template: {
      bg: "bg-[#FAF5FF]",
      border: "border-[#E9D5FF]",
      text: "text-[#7E22CE]",
      iconSrc: "/figma/manage/assets/icons/layout-alt-03.svg",
      iconName: "layout-alt-03",
    },
  };

  const config = configs[type];

  return (
    <div
      className={cn(
        "h-[22px] px-2 pl-1.5 py-0.5 rounded-[6px] border inline-flex items-center gap-[2px] font-sans font-medium text-[12px] leading-[18px] box-border shrink-0",
        config.bg,
        config.border,
        config.text,
        config.shadow
      )}
    >
      <FigmaAsset
        nodeId="428:4295"
        name={config.iconName}
        src={config.iconSrc}
        width={12}
        height={12}
        alt=""
      />
      <span className="text-center">{type}</span>
    </div>
  );
}

function AssetCard({ asset }: { asset: AssetData }) {
  return (
    <div
      data-figma-node="428:4295"
      className="box-border w-full h-[268px] p-3 gap-3 bg-[#FFFFFF] border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[12px] flex flex-col items-start overflow-hidden"
    >
      {/* 1. TOP ROW: w-full, height 22px */}
      <div className="w-full h-[22px] flex flex-row justify-between items-center p-0 bg-[#FFFFFF]">
        <AssetTypeBadge type={asset.type} />
        <span className="h-[22px] flex items-center justify-end font-sans font-normal text-[12px] leading-[18px] text-[#525252]">
          {asset.date}
        </span>
      </div>

      {/* 2. PREVIEW: w-full, height 140px */}
      <div className="w-full h-[140px] rounded-[12px] overflow-hidden flex-none relative bg-[#FAFAFA]">
        {asset.previewType === "image" && asset.previewSrc ? (
          <Image
            src={asset.previewSrc}
            alt={asset.title}
            fill
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <FigmaAsset
                nodeId="428:4295"
                name="logo-mark"
                src="/figma/home/logo-mark.svg"
                width={28}
                height={28}
                alt=""
              />
              <span className="font-sans font-bold text-[18px] tracking-tight text-[#171717]">
                Brighter Futures
              </span>
            </div>
            <span className="font-sans font-medium text-[11px] text-[#737373] tracking-wide uppercase">
              Brand Kit · 4 files
            </span>
          </div>
        )}
      </div>

      {/* 3. ASSET DETAILS: w-full, height 58px */}
      <div className="w-full h-[58px] flex flex-col items-start gap-[2px] p-0">
        {/* Title */}
        <h3 className="w-full h-[24px] font-sans font-semibold text-[16px] leading-[24px] text-[#171717] whitespace-nowrap truncate m-0 p-0">
          {asset.title}
        </h3>

        {/* METADATA + ACTION ROW */}
        <div className="w-full h-[32px] flex flex-row justify-between items-center p-0 bg-[#FFFFFF]">
          {/* Metadata group: height 22px */}
          <div className="flex flex-row items-center gap-1 h-[22px]">
            {/* Badge 1: Size */}
            <span className="h-[22px] px-2 py-0.5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-full font-sans font-medium text-[12px] leading-[18px] text-[#404040] text-center flex items-center justify-center box-border">
              {asset.size}
            </span>
            {/* Badge 2: Tags */}
            <span className="h-[22px] px-2 py-0.5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-full font-sans font-medium text-[12px] leading-[18px] text-[#404040] text-center flex items-center justify-center box-border">
              {asset.tagsCount}
            </span>
          </div>

          {/* Download button: 32x32 */}
          <button
            type="button"
            aria-label={`Download ${asset.title}`}
            style={{
              boxShadow:
                "0px 1px 2px rgba(0, 0, 0, 0.05), inset 0px -2px 0px rgba(0, 0, 0, 0.05)",
            }}
            className="box-border w-[32px] h-[32px] p-2 bg-[#FFFFFF] border border-[#D4D4D4] rounded-[12px] flex items-center justify-center shrink-0 cursor-pointer hover:bg-[#F9FAFB] transition-colors appearance-none outline-none"
          >
            <FigmaAsset
              nodeId="428:4295"
              name="download-01"
              src="/figma/manage/assets/icons/download-01.svg"
              width={16}
              height={16}
              alt="Download"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

type FileType = "JPG" | "MP4" | "SVG";

function FileTypeIcon({ type }: { type: FileType | string }) {
  const normalizedType: FileType = type.includes("MP4")
    ? "MP4"
    : type.includes("SVG")
    ? "SVG"
    : "JPG";

  const config = {
    JPG: {
      label: "JPG",
      bg: "bg-[#F4B400]",
      right: "32.5%",
    },
    MP4: {
      label: "MP4",
      bg: "bg-[#2563EB]",
      right: "25%",
    },
    SVG: {
      label: "SVG",
      bg: "bg-[#F4B400]",
      right: "27.5%",
    },
  }[normalizedType];

  return (
    <div
      data-figma-node="468:8050"
      className="w-[32px] h-[32px] relative shrink-0 overflow-visible"
    >
      {/* Document page shape: left 17.5% (5.6px), right 2.5% (0.8px), top 0, bottom 0 */}
      <img
        src="/figma/manage/assets/icons/file-page.svg"
        alt=""
        width={25.6}
        height={32}
        style={{
          position: "absolute",
          left: "17.5%",
          right: "2.5%",
          top: "0",
          bottom: "0",
          width: "25.6px",
          height: "32px",
          display: "block",
        }}
      />
      {/* File type label strip: left 2.5%, top 45%, bottom 15%, padding 1.6px 2.4px, border-radius 1.6px */}
      <div
        style={{
          position: "absolute",
          left: "2.5%",
          right: config.right,
          top: "45%",
          bottom: "15%",
          padding: "1.6px 2.4px",
          borderRadius: "1.6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
        className={cn(config.bg)}
      >
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "8px",
            lineHeight: "10px",
            textAlign: "center",
            color: "#FFFFFF",
            userSelect: "none",
          }}
        >
          {config.label}
        </span>
      </div>
    </div>
  );
}

export default function AssetsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [assetView, setAssetView] = useState<AssetView>("cards");

  const categories = [
    { id: "all", label: "All assets" },
    { id: "onboarding", label: "Onboarding uploads" },
    { id: "social", label: "Social media" },
    { id: "forms", label: "Form uploads" },
  ];

  return (
    <div
      data-figma-node="428:4295"
      className="w-full flex flex-col gap-4 min-w-0 pb-6"
    >
      {/* 1. Breadcrumbs: Manage > Assets */}
      <nav aria-label="Breadcrumb" className="flex items-center">
        <div className="flex items-center gap-1">
          <Link
            href="/manage"
            className="px-2 py-1 rounded-[6px] font-sans font-semibold text-[14px] leading-[20px] text-[#737373] hover:text-[#171717] hover:bg-[#F5F5F5] transition-colors"
          >
            Manage
          </Link>
          <div className="w-4 h-4 flex items-center justify-center shrink-0">
            <FigmaAsset
              nodeId="428:4295"
              name="chevron-right"
              src="/figma/manage/assets/icons/chevron-right.svg"
              width={16}
              height={16}
              alt=""
            />
          </div>
          <span className="px-2 py-1 rounded-[6px] bg-[#FAFAFA] font-sans font-semibold text-[14px] leading-[20px] text-[#404040]">
            Assets
          </span>
        </div>
      </nav>

      {/* 2. Page Header */}
      <PageHeader
        nodeId="428:4295"
        title="Assets"
        description="Manage your organization's images, videos and other assets."
        action={
          <button
            type="button"
            style={{
              boxShadow:
                "0px 1px 2px rgba(10, 13, 18, 0.05), inset 0px 0px 0px 1px rgba(10, 13, 18, 0.18), inset 0px -2px 0px rgba(10, 13, 18, 0.05)",
            }}
            className="box-border h-[36px] px-3 py-2 bg-[#FFC700] rounded-[8px] flex flex-row items-center justify-center gap-1 cursor-pointer hover:bg-[#F5BF00] transition-colors border-none outline-none appearance-none whitespace-nowrap shrink-0"
          >
            <FigmaAsset
              nodeId="428:4295"
              name="plus"
              src="/figma/manage/assets/icons/plus.svg"
              width={20}
              height={20}
              alt=""
            />
            <span className="font-sans font-semibold text-[14px] leading-[20px] text-[#181D27] px-[2px] whitespace-nowrap">
              Upload assets
            </span>
          </button>
        }
      >
        {/* Category Tabs */}
        <div className="w-full h-[32px] flex flex-row items-start gap-6 border-b border-[#E5E5E5] relative">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "h-[32px] p-[0_2px_12px] font-sans font-semibold text-[14px] leading-[20px] cursor-pointer transition-colors outline-none appearance-none -mb-[1px] relative z-10 border-b-2 whitespace-nowrap",
                activeCategory === cat.id
                  ? "border-[#F4B400] text-[#D99A00]"
                  : "border-transparent text-[#737373] hover:text-[#171717]"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </PageHeader>

      {/* 3. Filters + Search Row */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 pt-2">
        {/* Left Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Type Filter */}
          <button
            type="button"
            className="h-[36px] min-w-[88px] px-3 pr-2.5 bg-white border border-[#D4D4D4] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[12px] flex items-center justify-between gap-2 font-sans font-normal text-[14px] leading-[20px] text-[#737373] hover:bg-[#FAFAFA] transition-colors cursor-pointer"
          >
            <span>Type</span>
            <FigmaAsset
              nodeId="428:4295"
              name="chevron-down"
              src="/figma/manage/assets/icons/chevron-down.svg"
              width={16}
              height={16}
              alt=""
            />
          </button>

          {/* Source Filter */}
          <button
            type="button"
            className="h-[36px] min-w-[100px] px-3 pr-2.5 bg-white border border-[#D4D4D4] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[12px] flex items-center justify-between gap-2 font-sans font-normal text-[14px] leading-[20px] text-[#737373] hover:bg-[#FAFAFA] transition-colors cursor-pointer"
          >
            <span>Source</span>
            <FigmaAsset
              nodeId="428:4295"
              name="chevron-down"
              src="/figma/manage/assets/icons/chevron-down.svg"
              width={16}
              height={16}
              alt=""
            />
          </button>

          {/* Tags Filter */}
          <button
            type="button"
            className="h-[36px] min-w-[82px] px-3 pr-2.5 bg-white border border-[#D4D4D4] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[12px] flex items-center justify-between gap-2 font-sans font-normal text-[14px] leading-[20px] text-[#737373] hover:bg-[#FAFAFA] transition-colors cursor-pointer"
          >
            <span>Tags</span>
            <FigmaAsset
              nodeId="428:4295"
              name="chevron-down"
              src="/figma/manage/assets/icons/chevron-down.svg"
              width={16}
              height={16}
              alt=""
            />
          </button>

          {/* Date Filter */}
          <button
            type="button"
            className="h-[36px] min-w-[82px] px-3 pr-2.5 bg-white border border-[#D4D4D4] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[12px] flex items-center justify-between gap-2 font-sans font-normal text-[14px] leading-[20px] text-[#737373] hover:bg-[#FAFAFA] transition-colors cursor-pointer"
          >
            <span>Date</span>
            <FigmaAsset
              nodeId="428:4295"
              name="chevron-down"
              src="/figma/manage/assets/icons/chevron-down.svg"
              width={16}
              height={16}
              alt=""
            />
          </button>

          {/* Used in Filter */}
          <button
            type="button"
            className="h-[36px] min-w-[96px] px-3 pr-2.5 bg-white border border-[#D4D4D4] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[12px] flex items-center justify-between gap-2 font-sans font-normal text-[14px] leading-[20px] text-[#737373] hover:bg-[#FAFAFA] transition-colors cursor-pointer"
          >
            <span>Used in</span>
            <FigmaAsset
              nodeId="428:4295"
              name="chevron-down"
              src="/figma/manage/assets/icons/chevron-down.svg"
              width={16}
              height={16}
              alt=""
            />
          </button>

          {/* Clear all */}
          <button
            type="button"
            className="h-[36px] px-2 flex items-center font-sans font-semibold text-[14px] leading-[20px] text-[#D99A00] hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
          >
            Clear all
          </button>
        </div>

        {/* Right Search + Filters */}
        <div className="flex items-center gap-3">
          {/* Search Field */}
          <div className="w-[220px] h-[36px] px-3 bg-white border border-[#D4D4D4] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[12px] flex items-center gap-2">
            <FigmaAsset
              nodeId="428:4295"
              name="search-lg"
              src="/figma/manage/assets/icons/search-lg.svg"
              width={16}
              height={16}
              alt=""
            />
            <input
              type="text"
              placeholder="Search assets..."
              className="w-full bg-transparent font-sans font-normal text-[14px] leading-[20px] text-[#171717] placeholder:text-[#737373] outline-none border-none p-0"
            />
            <span className="font-sans font-medium text-[12px] text-[#737373] bg-[#FAFAFA] border border-[#E5E5E5] rounded-[4px] px-1.5 py-0.5 shrink-0">
              ⌘K
            </span>
          </div>

          {/* Filters Button */}
          <button
            type="button"
            className="h-[36px] px-3 bg-white border border-[#D4D4D4] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[12px] flex items-center gap-1.5 hover:bg-[#FAFAFA] transition-colors cursor-pointer"
          >
            <FigmaAsset
              nodeId="428:4295"
              name="filter-lines"
              src="/figma/manage/assets/icons/filter-lines.svg"
              width={20}
              height={20}
              alt=""
            />
            <span className="font-sans font-semibold text-[14px] leading-[20px] text-[#404040]">
              Filters
            </span>
            <FigmaAsset
              nodeId="428:4295"
              name="chevron-down"
              src="/figma/manage/assets/icons/filter-chevron-down.svg"
              width={16}
              height={16}
              alt=""
            />
          </button>
        </div>
      </div>

      {/* 4. Result Header */}
      <div className="w-full flex items-center justify-between pt-2">
        <span className="font-sans font-semibold text-[16px] leading-[24px] text-[#171717]">
          Showing 6 of 394 assets
        </span>

        {/* Cards / List View Switch */}
        <div
          data-figma-node="463:861"
          style={{ boxShadow: "0 1px 1px rgba(0, 0, 0, 0.05)" }}
          className="h-[36px] bg-[#FFFFFF] border border-[#D4D4D4] rounded-[8px] flex items-center overflow-hidden"
        >
          {/* Cards Segment */}
          <button
            type="button"
            onClick={() => setAssetView("cards")}
            className={cn(
              "h-[36px] px-[14px] pl-[12px] py-[8px] gap-[6px] flex items-center cursor-pointer transition-colors border-none outline-none font-sans font-semibold text-[14px] leading-[20px]",
              assetView === "cards"
                ? "bg-[#FAFAFA] text-[#262626]"
                : "bg-[#FFFFFF] text-[#404040] hover:bg-[#FAFAFA]"
            )}
            aria-label="Cards view"
          >
            <FigmaAsset
              nodeId="463:861"
              name="grid-01"
              src="/figma/manage/assets/icons/grid-01.svg"
              width={20}
              height={20}
              alt=""
            />
            <span>Cards</span>
          </button>

          {/* List Segment */}
          <button
            type="button"
            onClick={() => setAssetView("list")}
            className={cn(
              "h-[36px] px-[14px] pl-[12px] py-[8px] gap-[6px] flex items-center cursor-pointer transition-colors border-l border-[#D4D4D4] border-t-0 border-r-0 border-b-0 outline-none font-sans font-semibold text-[14px] leading-[20px]",
              assetView === "list"
                ? "bg-[#FAFAFA] text-[#262626]"
                : "bg-[#FFFFFF] text-[#404040] hover:bg-[#FAFAFA]"
            )}
            aria-label="List view"
          >
            <FigmaAsset
              nodeId="463:861"
              name="list"
              src="/figma/manage/assets/icons/list.svg"
              width={20}
              height={20}
              alt=""
            />
            <span>List</span>
          </button>
        </div>
      </div>

      {/* 5. Main Body: Cards View OR List View */}
      {assetView === "cards" ? (
        /* Cards View (3 columns on desktop, 2 on tablet, 1 on mobile) */
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ASSETS_DATA.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      ) : (
        /* List View (Table with min-width 968px and horizontal overflow safety) */
        <div className="w-full overflow-x-auto rounded-[12px] border border-[#E5E5E5] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
          <table className="w-full min-w-[968px] border-collapse">
            <thead>
              <tr className="h-[40px] bg-[#FAFAFA] border-b border-[#E5E5E5]">
                <th className="w-[350px] px-5 py-2.5 text-left font-sans font-semibold text-[12px] leading-[18px] text-[#737373]">
                  Asset
                </th>
                <th className="w-[120px] px-5 py-2.5 text-left font-sans font-semibold text-[12px] leading-[18px] text-[#737373]">
                  Type
                </th>
                <th className="w-[130px] px-5 py-2.5 text-left font-sans font-semibold text-[12px] leading-[18px] text-[#737373]">
                  Date added
                </th>
                <th className="w-[100px] px-5 py-2.5 text-left font-sans font-semibold text-[12px] leading-[18px] text-[#737373]">
                  Size
                </th>
                <th className="w-[100px] px-5 py-2.5 text-left font-sans font-semibold text-[12px] leading-[18px] text-[#737373]">
                  Tags
                </th>
                <th className="w-[168px] px-5 py-2.5 text-left font-sans font-semibold text-[12px] leading-[18px] text-[#737373]">
                  Used in
                </th>
              </tr>
            </thead>
            <tbody>
              {ASSETS_DATA.map((asset, idx) => (
                <tr
                  key={asset.id}
                  className={cn(
                    "h-[64px] hover:bg-[#FAFAFA]/60 transition-colors",
                    idx < ASSETS_DATA.length - 1 && "border-b border-[#E5E5E5]"
                  )}
                >
                  {/* Asset column: 350px */}
                  <td className="w-[350px] px-5 py-3">
                    <div className="flex items-center gap-2">
                      <FileTypeIcon type={asset.fileExtension} />
                      <div className="flex flex-col justify-center h-[40px] min-w-0">
                        <span className="font-sans font-medium text-[14px] leading-[20px] text-[#171717] truncate">
                          {asset.title}
                        </span>
                        <span className="font-sans font-normal text-[14px] leading-[20px] text-[#525252]">
                          {asset.supportingText}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Type column: 120px */}
                  <td className="w-[120px] px-5 py-3">
                    <AssetTypeBadge type={asset.type} />
                  </td>

                  {/* Date added column: 130px */}
                  <td className="w-[130px] px-5 py-3 font-sans font-medium text-[14px] leading-[20px] text-[#171717]">
                    {asset.date}
                  </td>

                  {/* Size column: 100px */}
                  <td className="w-[100px] px-5 py-3 font-sans font-medium text-[14px] leading-[20px] text-[#171717] whitespace-nowrap">
                    {asset.size}
                  </td>

                  {/* Tags column: 100px */}
                  <td className="w-[100px] px-5 py-3">
                    <span className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-full px-2 py-0.5 font-sans font-medium text-[12px] leading-[18px] text-[#404040]">
                      {asset.tagsCount}
                    </span>
                  </td>

                  {/* Used in column: 168px */}
                  <td className="w-[168px] px-5 py-3 font-sans font-medium text-[14px] leading-[20px] text-[#171717]">
                    {asset.usedIn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 6. Pagination */}
      <div className="border-t border-[#E5E5E5] pt-5 w-full flex items-center justify-between">
        {/* Previous Button */}
        <button
          type="button"
          className="flex items-center gap-1.5 font-sans font-semibold text-[14px] leading-[20px] text-[#525252] hover:text-[#171717] transition-colors cursor-pointer bg-transparent border-none p-0"
        >
          <FigmaAsset
            nodeId="428:4295"
            name="arrow-left"
            src="/figma/manage/assets/icons/arrow-left.svg"
            width={20}
            height={20}
            alt=""
          />
          <span>Previous</span>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            className="w-9 h-9 rounded-[8px] bg-[#FAFAFA] flex items-center justify-center font-sans font-medium text-[14px] leading-[20px] text-[#171717] border-none cursor-pointer"
          >
            1
          </button>
          <button
            type="button"
            className="w-9 h-9 rounded-[8px] bg-transparent hover:bg-[#FAFAFA] flex items-center justify-center font-sans font-medium text-[14px] leading-[20px] text-[#737373] hover:text-[#171717] border-none transition-colors cursor-pointer"
          >
            2
          </button>
          <button
            type="button"
            className="w-9 h-9 rounded-[8px] bg-transparent hover:bg-[#FAFAFA] flex items-center justify-center font-sans font-medium text-[14px] leading-[20px] text-[#737373] hover:text-[#171717] border-none transition-colors cursor-pointer"
          >
            3
          </button>
          <span className="w-9 h-9 flex items-center justify-center font-sans font-medium text-[14px] leading-[20px] text-[#737373]">
            ...
          </span>
          <button
            type="button"
            className="w-9 h-9 rounded-[8px] bg-transparent hover:bg-[#FAFAFA] flex items-center justify-center font-sans font-medium text-[14px] leading-[20px] text-[#737373] hover:text-[#171717] border-none transition-colors cursor-pointer"
          >
            64
          </button>
          <button
            type="button"
            className="w-9 h-9 rounded-[8px] bg-transparent hover:bg-[#FAFAFA] flex items-center justify-center font-sans font-medium text-[14px] leading-[20px] text-[#737373] hover:text-[#171717] border-none transition-colors cursor-pointer"
          >
            65
          </button>
          <button
            type="button"
            className="w-9 h-9 rounded-[8px] bg-transparent hover:bg-[#FAFAFA] flex items-center justify-center font-sans font-medium text-[14px] leading-[20px] text-[#737373] hover:text-[#171717] border-none transition-colors cursor-pointer"
          >
            66
          </button>
        </div>

        {/* Next Button */}
        <button
          type="button"
          className="flex items-center gap-1.5 font-sans font-semibold text-[14px] leading-[20px] text-[#525252] hover:text-[#171717] transition-colors cursor-pointer bg-transparent border-none p-0"
        >
          <span>Next</span>
          <FigmaAsset
            nodeId="428:4295"
            name="arrow-right"
            src="/figma/manage/assets/icons/arrow-right.svg"
            width={20}
            height={20}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
