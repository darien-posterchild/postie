import React from "react";
import Link from "next/link";
import { FigmaAsset } from "@/components/common/figma-asset";

export function PosterChildNoticed() {
  return (
    <section
      data-figma-node="513:11506"
      aria-label="PosterChild noticed"
      className="w-full flex flex-col items-start gap-3 box-border"
    >
      {/* Section Title: DM Sans 16 / 24, semibold, #171717 */}
      <h2 className="m-0 p-0 font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[24px] text-[#171717]">
        PosterChild noticed
      </h2>

      {/* Large Insight Card: width 100% (740px at 1440 ref), min-height 137px, radius 12px, border 1px solid #FFCC33 */}
      <div
        className="w-full min-h-[137px] rounded-[12px] border border-[#FFCC33] p-5 box-border flex flex-row items-start gap-4 relative overflow-hidden shadow-[0px_1px_3px_rgba(255,204,51,0.12)]"
        style={{
          background:
            "linear-gradient(100deg, #FFFDF5 0%, #FFFDF5 42%, #FFF9E8 78%, #FFF2C7 100%)",
        }}
      >
        {/* Abstract AI Background Layer (mesh glow, wave/orbit forms, constellation lines, sparkles) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
        >
          {/* Soft Gold Mesh Glow in top-right */}
          <div
            className="absolute -top-12 -right-8 w-80 h-44 rounded-full blur-2xl opacity-60 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 204, 51, 0.45) 0%, rgba(244, 180, 0, 0.25) 45%, rgba(255, 253, 245, 0) 75%)",
            }}
          />

          {/* Secondary Soft Glow along bottom right */}
          <div
            className="absolute -bottom-10 right-28 w-56 h-28 rounded-full blur-xl opacity-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(244, 180, 0, 0.3) 0%, rgba(255, 249, 232, 0) 70%)",
            }}
          />

          {/* Subtle Abstract Vector Elements: Soft wave, orbital paths, network nodes, and micro-sparkles */}
          <svg
            className="absolute right-0 top-0 bottom-0 h-full w-[440px] max-w-full"
            viewBox="0 0 440 137"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="aiWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F4B400" stopOpacity="0" />
                <stop offset="45%" stopColor="#F4B400" stopOpacity="0.25" />
                <stop offset="85%" stopColor="#FFCC33" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#F4B400" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="aiWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8F6500" stopOpacity="0" />
                <stop offset="50%" stopColor="#F4B400" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#FFCC33" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Smooth AI Harmonic Wave 1 */}
            <path
              d="M10 137C110 65 220 115 440 25"
              stroke="url(#aiWaveGrad1)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            {/* Echoing Harmonic Wave 2 (dashed) */}
            <path
              d="M50 140C160 85 270 130 440 60"
              stroke="url(#aiWaveGrad2)"
              strokeWidth="1"
              strokeDasharray="4 5"
              strokeLinecap="round"
            />

            {/* Concentric Orbital Arc */}
            <path
              d="M260 0C325 35 390 80 440 137"
              stroke="#F4B400"
              strokeWidth="0.8"
              strokeOpacity="0.15"
              strokeLinecap="round"
            />

            {/* Faint Connected Constellation Lines & Dots */}
            <line
              x1="290"
              y1="56"
              x2="350"
              y2="38"
              stroke="#F4B400"
              strokeWidth="0.75"
              strokeOpacity="0.22"
            />
            <line
              x1="350"
              y1="38"
              x2="400"
              y2="78"
              stroke="#F4B400"
              strokeWidth="0.75"
              strokeOpacity="0.2"
            />
            <line
              x1="350"
              y1="38"
              x2="378"
              y2="18"
              stroke="#F4B400"
              strokeWidth="0.75"
              strokeOpacity="0.16"
            />

            {/* Constellation Nodes */}
            <circle cx="290" cy="56" r="2" fill="#F4B400" fillOpacity="0.35" />
            <circle cx="350" cy="38" r="2.5" fill="#F4B400" fillOpacity="0.45" />
            <circle cx="400" cy="78" r="2" fill="#F4B400" fillOpacity="0.3" />
            <circle cx="378" cy="18" r="1.5" fill="#F4B400" fillOpacity="0.25" />

            {/* Ambient Sparkle 1 */}
            <path
              d="M380 28L382 33L387 35L382 37L380 42L378 37L373 35L378 33Z"
              fill="#F4B400"
              fillOpacity="0.32"
            />

            {/* Ambient Sparkle 2 (smaller) */}
            <path
              d="M325 88L326.5 91.5L330 93L326.5 94.5L325 98L323.5 94.5L320 93L323.5 91.5Z"
              fill="#F4B400"
              fillOpacity="0.24"
            />
          </svg>
        </div>

        {/* Left Icon: Exact 28px stars icon from Figma, stroke #F4B400 */}
        <div className="w-7 h-7 shrink-0 relative z-10 flex items-center justify-center">
          <FigmaAsset
            nodeId="513:11508"
            name="stars"
            src="/figma/home/stars.svg"
            width={28}
            height={28}
            alt=""
            className="w-7 h-7 shrink-0"
          />
        </div>

        {/* Content Column: Text Group + CTA Row */}
        <div className="flex-1 min-w-0 flex flex-col items-start justify-center gap-3 relative z-10">
          {/* Text Group */}
          <div className="w-full flex flex-col items-start gap-1">
            {/* Insight Title: DM Sans 16 / 24, semibold, #8F6500 */}
            <h3 className="m-0 p-0 font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[24px] text-[#8F6500]">
              You haven’t shared a workforce development story in 6 weeks.
            </h3>
            {/* Supporting Text: DM Sans 14 / 20, regular, #525252 */}
            <p className="m-0 p-0 font-['DM_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#525252]">
              You’re pursuing 3 funders focused on workforce development, and you have 4 new testimonials from that program.
            </p>
          </div>

          {/* CTA Row: “See why this matters” + arrow-right */}
          <div className="flex items-center gap-3 font-['DM_Sans',sans-serif] text-[14px]">
            <Link
              href="/tell"
              className="inline-flex items-center gap-1.5 font-['DM_Sans',sans-serif] font-semibold text-[14px] leading-[20px] text-[#8F6500] hover:text-[#6E4E00] transition-colors cursor-pointer no-underline group"
            >
              <span>See why this matters</span>
              <FigmaAsset
                nodeId="513:11516"
                name="arrow-right"
                src="/figma/home-v05/arrow-right-accent.svg"
                width={16}
                height={16}
                alt=""
                className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
