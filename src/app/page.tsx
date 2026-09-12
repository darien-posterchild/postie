import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AttentionMetrics } from "@/components/home/attention-metrics";
import { NeedsAttention } from "@/components/home/needs-attention";
import { PosterChildNoticed } from "@/components/home/posterchild-noticed";
import { PrimaryButton } from "@/components/ui/primary-button";
import "./home-v05.css";

export default function HomePage() {
  return (
    <div
      data-figma-node="513:11470"
      className="main-content w-full self-stretch"
    >
      {/* 1. Header row */}
      <div className="home-header-row">
        <div className="page-header">
          <div className="content8">
            <div className="text-and-supporting-text3">
              <div className="text10">Good morning, Darien! ☀️</div>
              <div className="supporting-text3">Here&apos;s what matters most today.</div>
            </div>
          </div>
        </div>
        <PrimaryButton label="Create story" />
      </div>

      {/* 2. Key Metrics Row */}
      <AttentionMetrics />

      {/* 3. PosterChild noticed */}
      <PosterChildNoticed />

      {/* 4. Needs your attention */}
      <NeedsAttention />

      {/* 5. Suggested for you */}
      <div className="needs-your-attention">
        <div className="frame3">
          <div className="frame4">
            <div className="frame5">
              <div className="nav-home">Suggested for you</div>
              <div className="based-on-your">Based on your work, here’s a story we’ve already drafted.</div>
            </div>
          </div>
          <Link href="/tell" className="buttonsbutton4">
            <div className="text">View all</div>
          </Link>
        </div>
        <div className="suggested-story">
          <Image
            src="/figma/home-v05/suggested-story.png"
            alt="Suggested story preview"
            width={250}
            height={190}
            className="image-icon"
            priority
          />
          <div className="frame6">
            <div className="badge-ai-insight3">
              <div className="text23">Draft Story</div>
            </div>
            <div className="what-happens-when">What happens when young people see a future for themselves?</div>
            <div className="posterchild-pulled-together">
              PosterChild pulled together a first draft using 4 recent testimonials from your Youth Career Pathways program. It highlights themes of belonging, confidence, and career opportunity.
            </div>
            <div className="frame2">
              <div className="badge-ai-insight3">
                <div className="text23">Youth Career Pathway</div>
              </div>
              <div className="badge-ai-insight3">
                <div className="text23">Workforce Development</div>
              </div>
              <div className="badge-ai-insight3">
                <div className="text23">4 testimonials</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
