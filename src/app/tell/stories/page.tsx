import React from "react";
import { PageHeader } from "@/components/common/page-header";

export default function TellStoriesPage() {
  return (
    <div className="w-full flex flex-col gap-6 shrink-0 pb-6">
      <PageHeader
        title="Stories"
        description="Draft, edit, and organize all of your organization's stories."
      />
      <div className="w-full bg-white border border-[#E5E5E5] rounded-[16px] p-8 flex flex-col items-center justify-center min-h-[360px] text-center">
        <h3 className="font-sans font-semibold text-[18px] text-[#171717] mb-2">
          Stories Management
        </h3>
        <p className="font-sans text-[14px] text-[#737373] max-w-[420px]">
          Create, edit, and publish stories across all your organization channels.
        </p>
      </div>
    </div>
  );
}
