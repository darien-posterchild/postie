"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FigmaAsset } from "@/components/common/figma-asset";
import { cn } from "@/lib/utils";
import { usePostie, PostieView } from "@/lib/postie-context";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
  time: string;
}

export function PostiePanel() {
  const { postieView, setPostieView, collapsePostie, openPostie } = usePostie();
  const pathname = usePathname();

  const isTell = pathname === "/tell";
  const isRaise = pathname === "/raise";
  const isManage = pathname === "/manage";

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [inputValue, setInputValue] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen]);

  const homePrompts = [
    {
      text: "What should I do first today?",
      iconSrc: "/figma/home/prompt-target.svg",
      iconName: "prompt-target",
    },
    {
      text: "Help me prepare for tomorrow",
      iconSrc: "/figma/home/prompt-calendar.svg",
      iconName: "prompt-calendar",
    },
  ];

  const tellPrompts = [
    {
      text: "What's strongest in this story?",
      iconSrc: "/figma/tell/prompt-edit.svg",
      iconName: "prompt-edit",
    },
    {
      text: "Make this donor-ready",
      iconSrc: "/figma/home/prompt-calendar.svg",
      iconName: "prompt-calendar",
    },
  ];

  const raisePrompts = [
    {
      text: "Compare my top matches",
      iconSrc: "/figma/home/coins-stacked-02.svg",
      iconName: "coins-stacked-02",
    },
    {
      text: "What am I missing?",
      iconSrc: "/figma/home/prompt-target.svg",
      iconName: "prompt-target",
    },
  ];

  const managePrompts = [
    {
      text: "What information is missing?",
      iconSrc: "/figma/home/prompt-target.svg",
      iconName: "prompt-target",
    },
    {
      text: "Show recent organization updates",
      iconSrc: "/figma/home/prompt-calendar.svg",
      iconName: "prompt-calendar",
    },
  ];

  const suggestedPrompts = isTell
    ? tellPrompts
    : isRaise
    ? raisePrompts
    : isManage
    ? managePrompts
    : homePrompts;

  // Auto-scroll on new messages or typing state
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSelectPrompt = (promptText: string) => {
    setSelectedPrompt(promptText);
    setInputValue(promptText);
    textareaRef.current?.focus();
  };

  const handleSendMessage = (overrideText?: string) => {
    const textToSend = (overrideText ?? inputValue).trim();
    if (!textToSend || isTyping) return;

    setSelectedPrompt(null);
    setInputValue("");

    // Step 1: Add user message after 150ms
    setTimeout(() => {
      const userMessage: Message = {
        id: `user-${Date.now()}`,
        role: "user",
        text: textToSend,
        time: "Just now",
      };

      setMessages((prev) => [...prev, userMessage]);

      // Step 2: Show typing state 500ms later
      setTimeout(() => {
        setIsTyping(true);

        // Step 3: Replace typing state with Postie response 900ms later
        setTimeout(() => {
          let responseText = "";

          if (isRaise) {
            if (
              textToSend.toLowerCase().includes("kresge") ||
              textToSend.toLowerCase().includes("why is kresge") ||
              textToSend.toLowerCase().includes("match")
            ) {
              responseText =
                "Kresge aligns closely with your workforce development program. You already have 2 stories, 6 testimonials, and 3 impact metrics that support the application. The main gap is your program budget.";
            } else if (
              textToSend.toLowerCase().includes("missing") ||
              textToSend.toLowerCase().includes("gap")
            ) {
              responseText =
                "Your main gap is your program budget documentation and updated demographic outcomes data for 2025–2026.";
            } else if (textToSend.toLowerCase().includes("compare")) {
              responseText =
                "Comparing your top matches: Kresge (92% Match) aligns closest with your workforce program; Community Impact Fund (87% Match) offers localized community development; W.K. Kellogg (84% Match) focuses on youth education.";
            } else {
              responseText =
                "Kresge aligns closely with your workforce development program. You already have 2 stories, 6 testimonials, and 3 impact metrics that support the application. The main gap is your program budget.";
            }
          } else if (isTell) {
            if (
              textToSend.toLowerCase().includes("jordan") ||
              textToSend.toLowerCase().includes("testimonial") ||
              textToSend.toLowerCase().includes("board")
            ) {
              responseText =
                "Yes. I can use Jordan M.’s new testimonial plus the strongest impact moments already in Youth Career Pathways and shape them into a short board-ready narrative.";
            } else if (textToSend.toLowerCase().includes("strongest")) {
              responseText =
                "The strongest element is the direct quote on community mentorship. Highlighting this in the lead paragraph will hook funders immediately.";
            } else {
              responseText =
                "I’ve analyzed the story draft. The core narrative is strong; I recommend adding specific participant quotes and clarifying the 6-week outcome metrics to increase engagement.";
            }
          } else if (isManage) {
            if (
              textToSend.toLowerCase().includes("missing") ||
              textToSend.toLowerCase().includes("information") ||
              textToSend.toLowerCase().includes("gap")
            ) {
              responseText =
                "I found the 2024 Impact Report plus your tracked impact metrics in Organization. I can summarize them, show what is outdated, or help update the missing pieces.";
            } else if (
              textToSend.toLowerCase().includes("update") ||
              textToSend.toLowerCase().includes("recent")
            ) {
              responseText =
                "Here are the latest updates: 3 new testimonials added to Knowledge, 2 donor profiles updated in People, and the 2025 Grant Calendar synced via Google Calendar.";
            } else {
              responseText =
                "I found the 2024 Impact Report plus your tracked impact metrics in Organization. I can summarize them, show what is outdated, or help update the missing pieces.";
            }
          } else {
            if (textToSend.toLowerCase().includes("tomorrow")) {
              responseText =
                "For tomorrow’s board meeting, I’d lead with 3 recent story examples, then connect them to your workforce impact and current funding momentum.";
            } else {
              responseText =
                "I’d start with Kresge. It closes in 12 days and you already have most of the evidence. Your main gap is the workforce program budget, last updated in 2025.";
            }
          }

          const assistantMessage: Message = {
            id: `assistant-${Date.now()}`,
            role: "assistant",
            text: responseText,
            time: "Just now",
          };

          setIsTyping(false);
          setMessages((prev) => [...prev, assistantMessage]);
        }, 900);
      }, 500);
    }, 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSelectView = (view: PostieView) => {
    setPostieView(view);
    setIsDropdownOpen(false);
  };

  // State 3: Collapsed (Launcher Button)
  if (postieView === "collapsed") {
    return (
      <button
        type="button"
        onClick={openPostie}
        aria-label="Open Postie"
        style={{
          boxShadow:
            "0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03), 0px 3px 3px -1.5px rgba(0, 0, 0, 0.04)",
        }}
        className="fixed right-5 bottom-5 max-sm:right-3 max-sm:bottom-3 w-[40px] h-[40px] bg-[#FFF9E8] border border-[#FFCC33] rounded-[8.57143px] z-50 flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 animate-in fade-in zoom-in-95 outline-none"
      >
        <FigmaAsset
          nodeId="358:3361"
          name="postie-icon"
          src="/figma/home/postie-icon.svg"
          width={40}
          height={40}
          alt="Open Postie"
          className="rounded-[8.57px]"
        />
      </button>
    );
  }

  // States 1 & 2: Sidebar & Floating (all bottom-right anchored for smooth upward expansion)
  return (
    <aside
      data-figma-node="358:3340"
      aria-label="Postie AI Assistant"
      style={{ transformOrigin: "bottom right" }}
      className={cn(
        "fixed bottom-6 max-sm:right-3 max-sm:bottom-3 z-40 bg-[#FFFFFF] border border-[#E9EAEB] rounded-[12px] overflow-hidden flex flex-col justify-between items-center box-border transition-[height,width,box-shadow,border-radius,right] duration-220 ease-out",
        postieView === "sidebar"
          ? "right-5 min-[1440px]:right-[calc((100vw-1440px)/2+20px)] w-[400px] max-w-[calc(100vw-24px)] h-[calc(100dvh-112px)] min-h-[480px] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]"
          : "right-5 w-[400px] max-w-[calc(100vw-24px)] h-[460px] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
      )}
    >
      {/* ==================================================
          1. TOP CONTROLS (Figma Node: 358:3341)
          ================================================== */}
      <div
        data-figma-node="358:3341"
        className="w-[400px] max-w-full h-[72px] p-[16px_8px_16px_20px] flex justify-between items-center bg-white shrink-0 box-border border-b border-[#F0F0F0]/60 relative"
      >
        <div className="w-[372px] max-w-full h-[40px] flex justify-between items-center">
          {/* Left Group */}
          <div className="w-[144px] h-[40px] flex items-center gap-2">
            {/* Chats Button */}
            <button
              type="button"
              data-figma-node="358:3344"
              style={{
                boxShadow:
                  "0px 1px 2px rgba(0, 0, 0, 0.05), inset 0px -2px 0px rgba(0, 0, 0, 0.05)",
              }}
              className="box-border w-[96px] h-[40px] px-[14px] py-[10px] bg-[#FFFFFF] border border-[#D4D4D4] rounded-[12px] flex items-center justify-between font-sans font-semibold text-[14px] leading-[20px] text-[#404040] appearance-none outline-none cursor-pointer hover:bg-[#F9FAFB] transition-colors"
            >
              <span>Chats</span>
              <FigmaAsset
                nodeId="358:3344"
                name="chats-chevron"
                src="/figma/home/chats-chevron.svg"
                width={20}
                height={20}
                alt=""
              />
            </button>

            {/* Plus Button */}
            <button
              type="button"
              data-figma-node="358:3345"
              aria-label="New chat"
              onClick={() => {
                setMessages([]);
                setSelectedPrompt(null);
                setInputValue("");
                setIsTyping(false);
              }}
              style={{
                boxShadow:
                  "0px 1px 2px rgba(0, 0, 0, 0.05), inset 0px -2px 0px rgba(0, 0, 0, 0.05)",
              }}
              className="box-border w-[40px] h-[40px] p-[10px] bg-[#FFFFFF] border border-[#D4D4D4] rounded-[12px] flex items-center justify-center appearance-none outline-none cursor-pointer hover:bg-[#F9FAFB] transition-colors"
            >
              <FigmaAsset
                nodeId="358:3345"
                name="top-plus"
                src="/figma/home/top-plus.svg"
                width={20}
                height={20}
                alt="New chat"
              />
            </button>
          </div>

          {/* Right Group: Single presentation control */}
          <div className="w-[40px] h-[40px] flex items-center justify-end relative">
            {/* View / Position Dropdown Trigger Button */}
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                data-figma-node="358:3347"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                aria-label="Choose presentation view"
                title="Choose presentation view"
                className={cn(
                  "w-[40px] h-[40px] p-[10px] rounded-[8px] bg-transparent border-0 flex items-center justify-center text-[#A3A3A3] hover:text-[#171717] hover:bg-[#F5F5F5] transition-colors cursor-pointer outline-none",
                  isDropdownOpen && "bg-[#F5F5F5] text-[#171717]"
                )}
              >
                <FigmaAsset
                  nodeId="358:3347"
                  name={postieView === "floating" ? "postie-floating" : "postie-sidebar"}
                  src={postieView === "floating" ? "/figma/home/postie-floating.svg" : "/figma/home/postie-sidebar.svg"}
                  width={20}
                  height={20}
                  alt="Choose presentation view"
                />
              </button>

              {/* Exact Dropdown Menu (177px x 122px for 3 options) */}
              {isDropdownOpen && (
                <div
                  style={{
                    boxShadow:
                      "0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03), 0px 2px 2px -1px rgba(0, 0, 0, 0.04)",
                  }}
                  className="absolute right-0 top-[48px] w-[177px] h-[122px] py-1 bg-[#FFFFFF] border border-[rgba(0,0,0,0.10)] rounded-[8px] flex flex-col z-50 animate-in fade-in zoom-in-95 duration-150 box-border"
                >
                  {/* Option 1: Sidebar */}
                  <div className="w-[177px] h-[38px] p-[1px_6px] box-border">
                    <button
                      type="button"
                      onClick={() => handleSelectView("sidebar")}
                      className="w-[165px] h-[36px] p-[8px_6px_8px_10px] gap-1 rounded-[6px] flex items-center justify-between font-sans font-semibold text-[14px] leading-[20px] text-[#404040] hover:bg-[#F5F5F5] transition-colors cursor-pointer border-none outline-none bg-transparent"
                    >
                      <div className="flex items-center gap-2">
                        <FigmaAsset
                          nodeId="358:3347"
                          name="window-position-sidebar"
                          src="/figma/home/window-position-sidebar.svg"
                          width={16}
                          height={16}
                          alt=""
                        />
                        <span>Sidebar</span>
                      </div>
                      {postieView === "sidebar" && (
                        <FigmaAsset
                          nodeId="358:3347"
                          name="check"
                          src="/figma/home/check.svg"
                          width={16}
                          height={16}
                          alt="Active"
                        />
                      )}
                    </button>
                  </div>

                  {/* Option 2: Floating */}
                  <div className="w-[177px] h-[38px] p-[1px_6px] box-border">
                    <button
                      type="button"
                      onClick={() => handleSelectView("floating")}
                      className="w-[165px] h-[36px] p-[8px_6px_8px_10px] gap-1 rounded-[6px] flex items-center justify-between font-sans font-semibold text-[14px] leading-[20px] text-[#404040] hover:bg-[#F5F5F5] transition-colors cursor-pointer border-none outline-none bg-transparent"
                    >
                      <div className="flex items-center gap-2">
                        <FigmaAsset
                          nodeId="358:3347"
                          name="window-position-floating"
                          src="/figma/home/window-position-floating.svg"
                          width={16}
                          height={16}
                          alt=""
                        />
                        <span>Floating</span>
                      </div>
                      {postieView === "floating" && (
                        <FigmaAsset
                          nodeId="358:3347"
                          name="check"
                          src="/figma/home/check.svg"
                          width={16}
                          height={16}
                          alt="Active"
                        />
                      )}
                    </button>
                  </div>

                  {/* Option 3: Hide chat */}
                  <div className="w-[177px] h-[38px] p-[1px_6px] box-border">
                    <button
                      type="button"
                      onClick={() => handleSelectView("collapsed")}
                      className="w-[165px] h-[36px] p-[8px_6px_8px_10px] gap-1 rounded-[6px] flex items-center justify-between font-sans font-semibold text-[14px] leading-[20px] text-[#404040] hover:bg-[#F5F5F5] transition-colors cursor-pointer border-none outline-none bg-transparent"
                    >
                      <div className="flex items-center gap-2">
                        <FigmaAsset
                          nodeId="358:3347"
                          name="minus"
                          src="/figma/home/minus.svg"
                          width={16}
                          height={16}
                          alt=""
                        />
                        <span>Hide chat</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          2. CONVERSATION AREA (Figma Node: 358:3350)
          ================================================== */}
      <div
        data-figma-node="358:3350"
        className="w-[400px] max-w-full flex-1 min-h-0 p-[20px] bg-white overflow-y-auto box-border scroll-smooth"
      >
        {/* Inner conversation stack aligned to bottom */}
        <div className="w-[360px] max-w-full min-h-full flex flex-col justify-end items-start gap-4 mx-auto">
          {/* Postie Intro Block (Identity + Context + Prompts) */}
          <div className="w-[360px] max-w-full flex flex-col gap-4 shrink-0">
            {/* Postie Identity Row (Figma Node: 358:3361) */}
            <div
              data-figma-node="358:3361"
              className="w-[360px] max-w-full h-[40px] flex items-center justify-between shrink-0"
            >
              <div className="flex items-center gap-2">
                {/* Postie Identity Icon (40x40 exact artwork) */}
                <FigmaAsset
                  nodeId="358:3361"
                  name="postie-icon"
                  src="/figma/home/postie-icon.svg"
                  width={40}
                  height={40}
                  alt="Postie"
                  className="rounded-[8.57px]"
                />
                {/* Postie Title */}
                <span
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  className="font-semibold text-[24px] leading-[32px] text-[#171717]"
                >
                  Postie
                </span>
                {/* Beta Badge */}
                <div className="w-[53px] h-[22px] px-[6px] py-[2px] gap-1 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[6px] flex items-center shrink-0 box-border">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0" />
                  <span className="font-sans font-medium text-[12px] leading-[18px] text-[#15803D]">
                    BETA
                  </span>
                </div>
              </div>
            </div>

            {/* Context Block (Figma Node: 358:3368) */}
            <div
              data-figma-node="358:3368"
              className="w-[360px] max-w-full flex flex-col gap-1 shrink-0"
            >
              {/* Context Label */}
              <div className="h-[18px] flex items-center font-sans font-semibold text-[12px] leading-[18px] text-[#535862]">
                Using {isTell ? "Tell" : isRaise ? "Raise" : isManage ? "Manage" : "Home"} context · Add more with +
              </div>

              {/* Suggested Prompts */}
              {suggestedPrompts.map((prompt) => {
                const isSelected = selectedPrompt === prompt.text;
                return (
                  <button
                    key={prompt.text}
                    type="button"
                    onClick={() => handleSelectPrompt(prompt.text)}
                    className={cn(
                      "w-[360px] max-w-full h-[36px] p-2 gap-2 rounded-[8px] flex items-center font-sans font-semibold text-[12px] leading-[18px] text-left cursor-pointer border box-border transition-all duration-150",
                      isSelected
                        ? "bg-[#FFF9E8] border-[#FFE8A3] text-[#8F6500] shadow-2xs"
                        : "bg-[#F5F5F5] border-transparent text-[#535862] hover:bg-[#EAEAEA]"
                    )}
                  >
                    <FigmaAsset
                      nodeId="358:3368"
                      name={prompt.iconName}
                      src={prompt.iconSrc}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="truncate">{prompt.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Rendered Conversation Messages */}
          {messages.map((msg) =>
            msg.role === "user" ? (
              /* User Message Bubble */
              <div
                key={msg.id}
                data-figma-node="358:3372"
                className="w-[360px] max-w-full flex flex-col items-end gap-1 shrink-0 animate-in fade-in slide-in-from-bottom-2 duration-200"
              >
                {/* Name/Time Row */}
                <div className="w-[360px] max-w-full h-[20px] flex items-center justify-between">
                  <span className="font-sans font-medium text-[14px] leading-[20px] text-[#404040]">
                    Jeff
                  </span>
                  <span className="font-sans font-normal text-[12px] leading-[18px] text-[#525252]">
                    {msg.time}
                  </span>
                </div>

                {/* User Bubble */}
                <div className="w-[360px] max-w-full min-h-[40px] px-3 py-2 bg-[#FFFDF5] border border-[#FFCC33] rounded-[8px_0px_8px_8px] flex items-center box-border">
                  <span className="font-sans font-normal text-[16px] leading-[24px] text-[#8F6500]">
                    {msg.text}
                  </span>
                </div>
              </div>
            ) : (
              /* Postie Response Bubble */
              <div
                key={msg.id}
                data-figma-node="358:3374"
                className="w-[360px] max-w-full flex flex-col items-start gap-3 shrink-0 animate-in fade-in duration-300"
              >
                {/* Content Wrapper */}
                <div className="w-[360px] max-w-full flex flex-col gap-[6px]">
                  {/* Header Row */}
                  <div
                    data-figma-node="358:3376"
                    className="w-[360px] max-w-full h-[20px] flex items-center justify-between"
                  >
                    {/* Left Identity */}
                    <div className="flex items-center gap-1">
                      <FigmaAsset
                        nodeId="358:3376"
                        name="postie-message-icon"
                        src="/figma/home/postie-message-icon.svg"
                        width={20}
                        height={20}
                        alt="Postie"
                      />
                      <span className="font-sans font-medium text-[14px] leading-[20px] text-[#404040]">
                        Postie
                      </span>
                    </div>

                    {/* Right Time */}
                    <span className="font-sans font-normal text-[12px] leading-[18px] text-[#525252]">
                      {msg.time}
                    </span>
                  </div>

                  {/* Message Bubble */}
                  <div
                    data-figma-node="358:3381"
                    className="w-[360px] max-w-full px-3 py-2 bg-[#FAFAFA] border border-[#E5E5E5] rounded-[0px_12px_12px_12px] flex flex-col items-start gap-[6px] overflow-hidden box-border"
                  >
                    <p
                      data-figma-node="358:3382"
                      className="w-full font-sans font-normal text-[15px] leading-[22px] text-[#171717] m-0"
                    >
                      {msg.text}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="w-[360px] max-w-full flex flex-col items-start gap-3 shrink-0 animate-in fade-in duration-200">
              <div className="w-[360px] max-w-full flex flex-col gap-[6px]">
                {/* Header Row */}
                <div className="w-[360px] max-w-full h-[20px] flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <FigmaAsset
                      nodeId="358:3376"
                      name="postie-message-icon"
                      src="/figma/home/postie-message-icon.svg"
                      width={20}
                      height={20}
                      alt="Postie"
                    />
                    <span className="font-sans font-medium text-[14px] leading-[20px] text-[#404040]">
                      Postie
                    </span>
                  </div>
                  <span className="font-sans font-normal text-[12px] leading-[18px] text-[#A3A3A3]">
                    Thinking...
                  </span>
                </div>

                {/* Typing Bubble */}
                <div className="px-3 py-2.5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-[0px_12px_12px_12px] flex items-center gap-1.5 box-border">
                  <span className="w-2 h-2 rounded-full bg-[#A3A3A3] animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 rounded-full bg-[#A3A3A3] animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-[#A3A3A3] animate-bounce" />
                </div>
              </div>
            </div>
          )}

          {/* Scroll anchor */}
          <div ref={messagesEndRef} className="h-0" />
        </div>
      </div>

      {/* ==================================================
          3. COMPOSER (Figma Node: 358:3386)
          ================================================== */}
      <div
        data-figma-node="358:3386"
        className="w-[400px] max-w-full h-[142px] p-[16px_20px] flex flex-col justify-between items-center bg-white border-t border-[#E9EAEB] shrink-0 box-border"
      >
        {/* Textarea Box */}
        <div className="w-[360px] max-w-full h-[110px] p-3 flex flex-col justify-between bg-[#FFFFFF] border border-[#D4D4D4] rounded-[8px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] box-border">
          {/* Input */}
          <textarea
            ref={textareaRef}
            data-figma-node="358:3394"
            rows={2}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              isTell
                ? "Ask Postie to draft, rewrite, or compare sources..."
                : isRaise
                ? "Ask Postie to compare, find gaps, or prepare an application…"
                : isManage
                ? "Ask Postie about your organization, people, assets, or data…"
                : "Ask Postie anything, or add context with +"
            }
            className="w-full bg-transparent font-sans font-normal text-[14px] leading-[20px] text-[#171717] placeholder:text-[#737373] resize-none outline-none border-0 p-0"
          />

          {/* Bottom Actions Row */}
          <div className="w-[336px] max-w-full h-[36px] flex justify-between items-center">
            {/* Left Controls */}
            <div className="flex items-center gap-2">
              {/* Plus Button */}
              <button
                type="button"
                data-figma-node="358:3398"
                aria-label="Add context"
                style={{
                  boxShadow:
                    "0px 1px 2px rgba(0, 0, 0, 0.05), inset 0px -2px 0px rgba(0, 0, 0, 0.05)",
                }}
                className="box-border w-[36px] h-[36px] p-2 bg-[#FFFFFF] border border-[#D4D4D4] rounded-[12px] flex items-center justify-center appearance-none outline-none cursor-pointer hover:bg-[#F9FAFB] transition-colors"
              >
                <FigmaAsset
                  nodeId="358:3398"
                  name="composer-plus"
                  src="/figma/home/composer-plus.svg"
                  width={20}
                  height={20}
                  alt="Add context"
                />
              </button>

              {/* Settings Button */}
              <button
                type="button"
                data-figma-node="358:3399"
                aria-label="Settings"
                style={{
                  boxShadow:
                    "0px 1px 2px rgba(0, 0, 0, 0.05), inset 0px -2px 0px rgba(0, 0, 0, 0.05)",
                }}
                className="box-border w-[36px] h-[36px] p-2 bg-[#FFFFFF] border border-[#D4D4D4] rounded-[12px] flex items-center justify-center appearance-none outline-none cursor-pointer hover:bg-[#F9FAFB] transition-colors"
              >
                <FigmaAsset
                  nodeId="358:3399"
                  name="composer-settings"
                  src="/figma/home/composer-settings.svg"
                  width={20}
                  height={20}
                  alt="Settings"
                />
              </button>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              {/* Microphone */}
              <button
                type="button"
                data-figma-node="358:3401"
                aria-label="Microphone"
                className="w-[36px] h-[36px] rounded-[8px] bg-transparent border-0 flex items-center justify-center text-[#A3A3A3] hover:text-[#171717] hover:bg-[#F5F5F5] transition-colors cursor-pointer"
              >
                <FigmaAsset
                  nodeId="358:3401"
                  name="composer-mic"
                  src="/figma/home/composer-mic.svg"
                  width={20}
                  height={20}
                  alt="Microphone"
                />
              </button>

              {/* Send Button */}
              <button
                type="button"
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isTyping}
                data-figma-node="358:3402"
                aria-label="Send message"
                style={{
                  boxShadow:
                    "0px 1px 2px rgba(0, 0, 0, 0.05), inset 0px -2px 0px rgba(0, 0, 0, 0.05)",
                }}
                className={cn(
                  "box-border w-[36px] h-[36px] p-2 bg-[#F4B400] rounded-[12px] flex items-center justify-center appearance-none outline-none transition-all duration-150",
                  inputValue.trim() && !isTyping
                    ? "opacity-100 hover:bg-[#E0A400] cursor-pointer"
                    : "opacity-60 cursor-not-allowed"
                )}
              >
                <FigmaAsset
                  nodeId="358:3402"
                  name="composer-send"
                  src="/figma/home/composer-send.svg"
                  width={20}
                  height={20}
                  alt="Send"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
