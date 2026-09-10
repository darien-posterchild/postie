"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FigmaAsset } from "@/components/common/figma-asset";
import { cn } from "@/lib/utils";
import { usePostie, PostieView } from "@/lib/postie-context";

// Exact Page Icons for compact chip matching active nav colors
function HomeChipIcon({ color = "#D99A00" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path
        d="M6.66667 14.1667H13.3333M9.18141 2.30335L3.52949 6.69928C3.15168 6.99313 2.96278 7.14006 2.82669 7.32406C2.70614 7.48705 2.61633 7.67067 2.56169 7.86589C2.5 8.08628 2.5 8.32559 2.5 8.80422V14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3183C3.76654 17.5 4.23325 17.5 5.16667 17.5H14.8333C15.7668 17.5 16.2335 17.5 16.59 17.3183C16.9036 17.1586 17.1586 16.9036 17.3183 16.59C17.5 16.2335 17.5 15.7668 17.5 14.8333V8.80422C17.5 8.32559 17.5 8.08628 17.4383 7.86589C17.3837 7.67067 17.2939 7.48705 17.1733 7.32406C17.0372 7.14006 16.8483 6.99313 16.4705 6.69929L10.8186 2.30335C10.5258 2.07564 10.3794 1.96178 10.2178 1.91801C10.0752 1.8794 9.92484 1.8794 9.78221 1.91801C9.62057 1.96178 9.47418 2.07563 9.18141 2.30335Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TellChipIcon({ color = "#F4B400" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path
        d="M3.33333 11.6667L4.64554 16.9155C4.68244 17.0631 4.70089 17.1369 4.72272 17.2014C4.93597 17.8309 5.50293 18.2736 6.16543 18.3278C6.23325 18.3333 6.30933 18.3333 6.46149 18.3333C6.65203 18.3333 6.7473 18.3333 6.82756 18.3255C7.62083 18.2486 8.24861 17.6208 8.32555 16.8276C8.33333 16.7473 8.33333 16.652 8.33333 16.4615V4.58333M15.4167 11.25C17.0275 11.25 18.3333 9.94416 18.3333 8.33333C18.3333 6.7225 17.0275 5.41667 15.4167 5.41667M8.54166 4.58333H5.41666C3.3456 4.58333 1.66666 6.26227 1.66666 8.33334C1.66667 10.4044 3.3456 12.0833 5.41666 12.0833H8.54167C10.0137 12.0833 11.8144 12.8724 13.2036 13.6297C14.014 14.0715 14.4192 14.2924 14.6846 14.2599C14.9307 14.2297 15.1168 14.1192 15.2611 13.9176C15.4167 13.7001 15.4167 13.265 15.4167 12.3948V4.2719C15.4167 3.40166 15.4167 2.96654 15.2611 2.74907C15.1168 2.54742 14.9307 2.43692 14.6846 2.40677C14.4192 2.37427 14.014 2.59517 13.2036 3.03696C11.8144 3.79426 10.0137 4.58333 8.54166 4.58333Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RaiseChipIcon({ color = "#F4B400" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path
        d="M18.3333 5.83333L11.7761 12.3905C11.4461 12.7205 11.2811 12.8855 11.0908 12.9474C10.9235 13.0018 10.7432 13.0018 10.5758 12.9474C10.3855 12.8855 10.2205 12.7205 9.89052 12.3905L7.60947 10.1095C7.27946 9.77946 7.11445 9.61445 6.92418 9.55263C6.75681 9.49825 6.57652 9.49825 6.40915 9.55263C6.21888 9.61445 6.05387 9.77946 5.72386 10.1095L1.66667 14.1667M18.3333 11.6667V5.83333H12.5"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ManageChipIcon({ color = "#F4B400" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path
        d="M10.8333 5.83333L9.90372 3.9741C9.63617 3.439 9.50239 3.17144 9.30281 2.97597C9.12632 2.80311 8.9136 2.67164 8.68006 2.59109C8.41597 2.5 8.11684 2.5 7.51858 2.5H4.33333C3.39991 2.5 2.9332 2.5 2.57668 2.68166C2.26308 2.84144 2.00811 3.09641 1.84832 3.41002C1.66667 3.76654 1.66667 4.23325 1.66667 5.16667V5.83333M1.66667 5.83333H14.3333C15.7335 5.83333 16.4335 5.83333 16.9683 6.10582C17.4387 6.3455 17.8212 6.72795 18.0608 7.19836C18.3333 7.73314 18.3333 8.4332 18.3333 9.83333V13.5C18.3333 14.9001 18.3333 15.6002 18.0608 16.135C17.8212 16.6054 17.4387 16.9878 16.9683 17.2275C16.4335 17.5 15.7335 17.5 14.3333 17.5H5.66667C4.26654 17.5 3.56647 17.5 3.03169 17.2275C2.56129 16.9878 2.17883 16.6054 1.93915 16.135C1.66667 15.6002 1.66667 14.9001 1.66667 13.5V5.83333Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AssetsChipIcon({ color = "#16A34A" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path
        d="M4.98411 24.1826L12.6801 16.4866C13.1421 16.0246 13.3731 15.7936 13.6395 15.707C13.8738 15.6309 14.1262 15.6309 14.3605 15.707C14.6269 15.7936 14.8579 16.0246 15.3199 16.4866L22.9646 24.1312M16.3333 17.5L19.6801 14.1533C20.1421 13.6912 20.3731 13.4602 20.6395 13.3737C20.8738 13.2975 21.1262 13.2975 21.3605 13.3737C21.6269 13.4602 21.8579 13.6912 22.3199 14.1533L25.6667 17.5M11.6667 10.5C11.6667 11.7887 10.622 12.8333 9.33333 12.8333C8.04467 12.8333 7 11.7887 7 10.5C7 9.21134 8.04467 8.16667 9.33333 8.16667C10.622 8.16667 11.6667 9.21134 11.6667 10.5ZM7.93333 24.5H20.0667C22.0269 24.5 23.0069 24.5 23.7556 24.1185C24.4142 23.783 24.9496 23.2475 25.2852 22.589C25.6667 21.8403 25.6667 20.8602 25.6667 18.9V9.1C25.6667 7.13982 25.6667 6.15972 25.2852 5.41103C24.9496 4.75247 24.4142 4.21703 23.7556 3.88148C23.0069 3.5 22.0269 3.5 20.0667 3.5H7.93333C5.97315 3.5 4.99306 3.5 4.24437 3.88148C3.5858 4.21703 3.05037 4.75247 2.71481 5.41103C2.33333 6.15972 2.33333 7.13982 2.33333 9.1V18.9C2.33333 20.8602 2.33333 21.8403 2.71481 22.589C3.05037 23.2475 3.5858 23.783 4.24437 24.1185C4.99306 24.5 5.97315 24.5 7.93333 24.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Small quiet tertiary icons
function ArrowRightIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("shrink-0", className)}>
      <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function EditActionIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("shrink-0", className)}>
      <path d="M9.16667 3.33333H4.16667C3.72464 3.33333 3.30072 3.50893 2.98816 3.82149C2.67559 4.13405 2.5 4.55797 2.5 5V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15C15.442 17.5 15.8659 17.3244 16.1785 17.0118C16.4911 16.6993 16.6667 16.2754 16.6667 15.8333V10.8333M15.4167 2.08333C15.7482 1.75181 16.1978 1.56555 16.6667 1.56555C17.1355 1.56555 17.5851 1.75181 17.9167 2.08333C18.2482 2.41486 18.4345 2.86449 18.4345 3.33333C18.4345 3.80217 18.2482 4.25181 17.9167 4.58333L10 12.5L6.66667 13.3333L7.5 10L15.4167 2.08333Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function FilterActionIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("shrink-0", className)}>
      <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CopyIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("shrink-0", className)}>
      <path d="M13.3333 13.3333H15.8333C16.2754 13.3333 16.6993 13.1577 17.0118 12.8452C17.3244 12.5326 17.5 12.1087 17.5 11.6667V4.16667C17.5 3.72464 17.3244 3.30072 17.0118 2.98816C16.6993 2.67559 16.2754 2.5 15.8333 2.5H8.33333C7.89131 2.5 7.46738 2.67559 7.15482 2.98816C6.84226 3.30072 6.66667 3.72464 6.66667 4.16667V6.66667M4.16667 6.66667H11.6667C12.5872 6.66667 13.3333 7.41286 13.3333 8.33333V15.8333C13.3333 16.7538 12.5872 17.5 11.6667 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V8.33333C2.5 7.41286 3.24619 6.66667 4.16667 6.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CheckIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("shrink-0", className)}>
      <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CloseIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("shrink-0", className)}>
      <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

interface ActionItem {
  label: string;
  actionType: "navigate" | "prompt";
  target: string;
  iconType?: "arrow" | "edit" | "filter";
}

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
  time: string;
  usedContext?: string[];
  actions?: ActionItem[];
}

interface AttachedContextItem {
  id: string;
  title: string;
  type: "funding" | "story" | "report" | "asset" | "org";
  category: string;
  iconSrc: string;
}

const DEMO_RECENT_CONTEXT: AttachedContextItem[] = [
  {
    id: "ctx-kresge",
    title: "Kresge Foundation",
    type: "funding",
    category: "Funding opportunities",
    iconSrc: "/figma/home/coins-stacked-02.svg",
  },
  {
    id: "ctx-pathways",
    title: "Youth Career Pathways",
    type: "story",
    category: "Stories",
    iconSrc: "/figma/tell/prompt-edit.svg",
  },
  {
    id: "ctx-impact-story",
    title: "Community Impact Story",
    type: "story",
    category: "Stories",
    iconSrc: "/figma/tell/prompt-edit.svg",
  },
  {
    id: "ctx-report",
    title: "2024 Impact Report",
    type: "report",
    category: "Reports",
    iconSrc: "/figma/manage/book-open-01.svg",
  },
];

const DEMO_BROWSE_CATEGORIES = [
  { id: "cat-stories", title: "Stories", count: "48", iconSrc: "/figma/tell/prompt-edit.svg" },
  { id: "cat-funding", title: "Funding opportunities", count: "14", iconSrc: "/figma/home/coins-stacked-02.svg" },
  { id: "cat-people", title: "People", count: "32", iconSrc: "/figma/home/avatar.png" },
  { id: "cat-assets", title: "Assets", count: "394", iconSrc: "/figma/manage/image-03.svg" },
  { id: "cat-org", title: "Organization", count: "6", iconSrc: "/figma/manage/bank.svg" },
];

const RECENT_CHATS = [
  {
    id: "recent-1",
    title: "Prepare board update",
    messages: [
      {
        id: "msg-1-1",
        role: "user" as const,
        text: "Help me prepare for tomorrow's board meeting",
        time: "2 hours ago",
      },
      {
        id: "msg-1-2",
        role: "assistant" as const,
        text: "For tomorrow’s board meeting, I’d lead with 3 recent story examples, then connect them to your workforce impact and current funding momentum.",
        time: "2 hours ago",
        usedContext: ["Board Update", "Kresge Grant"],
        actions: [
          { label: "Review opportunity", actionType: "navigate" as const, target: "/raise", iconType: "arrow" as const },
          { label: "Prepare update", actionType: "prompt" as const, target: "Help me prepare tomorrow's board update", iconType: "edit" as const },
        ],
      },
    ],
  },
  {
    id: "recent-2",
    title: "Kresge application",
    messages: [
      {
        id: "msg-2-1",
        role: "user" as const,
        text: "Why is Kresge my top match?",
        time: "Yesterday",
      },
      {
        id: "msg-2-2",
        role: "assistant" as const,
        text: "Kresge aligns closely with your workforce development program. You already have 2 stories, 6 testimonials, and 3 impact metrics that support the application. The main gap is your program budget.",
        time: "Yesterday",
        usedContext: ["Kresge Foundation", "2 stories", "6 testimonials"],
        actions: [
          { label: "Open Kresge", actionType: "navigate" as const, target: "/raise", iconType: "arrow" as const },
          { label: "Review gaps", actionType: "prompt" as const, target: "Show me the gaps for Kresge", iconType: "edit" as const },
        ],
      },
    ],
  },
  {
    id: "recent-3",
    title: "Workforce story",
    messages: [
      {
        id: "msg-3-1",
        role: "user" as const,
        text: "What's strongest in this story?",
        time: "3 days ago",
      },
      {
        id: "msg-3-2",
        role: "assistant" as const,
        text: "The direct quote from Jordan M. regarding community mentorship is the strongest highlight. Framing it in the first paragraph will capture reader interest immediately.",
        time: "3 days ago",
        usedContext: ["Youth Career Pathways", "Jordan M. testimonial"],
        actions: [
          { label: "Open story", actionType: "navigate" as const, target: "/tell", iconType: "arrow" as const },
          { label: "Rewrite intro", actionType: "prompt" as const, target: "Draft a stronger intro for this story", iconType: "edit" as const },
        ],
      },
    ],
  },
];

export function PostiePanel() {
  const { postieView, setPostieView, collapsePostie, openPostie } = usePostie();
  const pathname = usePathname();
  const router = useRouter();

  const isTell = pathname === "/tell";
  const isRaise = pathname === "/raise";
  const isAssets = pathname.startsWith("/manage/assets");
  const isManage = pathname === "/manage";

  const currentPageName = isAssets
    ? "Assets"
    : isTell
    ? "Tell"
    : isRaise
    ? "Raise"
    : isManage
    ? "Manage"
    : "Home";

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isChatsDropdownOpen, setIsChatsDropdownOpen] = useState(false);
  const chatsDropdownRef = useRef<HTMLDivElement>(null);

  const [isContextPickerOpen, setIsContextPickerOpen] = useState(false);
  const [contextSearchQuery, setContextSearchQuery] = useState("");
  const contextPickerRef = useRef<HTMLDivElement>(null);

  const [attachedContext, setAttachedContext] = useState<AttachedContextItem[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [activityStatus, setActivityStatus] = useState<string>("Thinking...");
  const [streamingMessage, setStreamingMessage] = useState<Message | null>(null);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const streamingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const hasConversation = messages.length > 0 || isTyping || Boolean(streamingMessage);

  // Restore messages and attached context from localStorage on first mount
  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem("postie_persistent_thread");
      if (savedMessages) {
        const parsed = JSON.parse(savedMessages);
        if (Array.isArray(parsed)) {
          setMessages(parsed);
        }
      }
      const savedContext = localStorage.getItem("postie_attached_context");
      if (savedContext) {
        const parsedContext = JSON.parse(savedContext);
        if (Array.isArray(parsedContext)) {
          setAttachedContext(parsedContext);
        }
      }
    } catch {
      // Ignore
    }
    setIsHydrated(true);
  }, []);

  // Save messages to localStorage only when complete messages update
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("postie_persistent_thread", JSON.stringify(messages));
    } catch {
      // Ignore
    }
  }, [messages, isHydrated]);

  // Save attached context to localStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("postie_attached_context", JSON.stringify(attachedContext));
    } catch {
      // Ignore
    }
  }, [attachedContext, isHydrated]);

  // Clean up streaming interval on unmount
  useEffect(() => {
    return () => {
      if (streamingIntervalRef.current) {
        clearInterval(streamingIntervalRef.current);
      }
    };
  }, []);

  // Close dropdowns on outside click or Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (chatsDropdownRef.current && !chatsDropdownRef.current.contains(event.target as Node)) {
        setIsChatsDropdownOpen(false);
      }
      const targetNode = event.target as Node;
      const clickedInsidePicker =
        contextPickerRef.current && contextPickerRef.current.contains(targetNode);
      if (!clickedInsidePicker) {
        setIsContextPickerOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
        setIsChatsDropdownOpen(false);
        setIsContextPickerOpen(false);
      }
    }
    if (isDropdownOpen || isChatsDropdownOpen || isContextPickerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen, isChatsDropdownOpen, isContextPickerOpen]);

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

  const assetsPrompts = [
    {
      text: "What assets are missing?",
      iconSrc: "/figma/manage/assets/icons/target-02.svg",
      iconName: "target-02",
    },
    {
      text: "Find recent program photos",
      iconSrc: "/figma/manage/assets/icons/calendar-check-01.svg",
      iconName: "calendar-check-01",
    },
  ];

  const suggestedPrompts = isAssets
    ? assetsPrompts
    : isTell
    ? tellPrompts
    : isRaise
    ? raisePrompts
    : isManage
    ? managePrompts
    : homePrompts;

  // Auto-scroll on new messages, typing state, or streaming chunk
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, streamingMessage?.text]);

  const handleSelectPrompt = (promptText: string) => {
    setSelectedPrompt(promptText);
    setInputValue(promptText);
    textareaRef.current?.focus();
  };

  const handleToggleContext = (item: AttachedContextItem) => {
    setAttachedContext((prev) => {
      const exists = prev.some((c) => c.id === item.id);
      if (exists) {
        return prev.filter((c) => c.id !== item.id);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, item];
    });
    setIsContextPickerOpen(false);
    setContextSearchQuery("");
  };

  const handleRemoveContext = (id: string) => {
    setAttachedContext((prev) => prev.filter((c) => c.id !== id));
  };

  const handleNewChat = () => {
    if (streamingIntervalRef.current) {
      clearInterval(streamingIntervalRef.current);
      streamingIntervalRef.current = null;
    }
    setStreamingMessage(null);
    setMessages([]);
    setAttachedContext([]);
    setSelectedPrompt(null);
    setInputValue("");
    setIsTyping(false);
    setIsChatsDropdownOpen(false);
    setIsContextPickerOpen(false);
    try {
      localStorage.removeItem("postie_persistent_thread");
      localStorage.removeItem("postie_attached_context");
    } catch {
      // Ignore
    }
  };

  const handleSelectRecentChat = (chat: typeof RECENT_CHATS[number]) => {
    if (streamingIntervalRef.current) {
      clearInterval(streamingIntervalRef.current);
      streamingIntervalRef.current = null;
    }
    setStreamingMessage(null);
    setMessages(chat.messages);
    setSelectedPrompt(null);
    setInputValue("");
    setIsTyping(false);
    setIsChatsDropdownOpen(false);
    setIsContextPickerOpen(false);
  };

  const handleCopyMessage = (id: string, text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedMessageId(id);
      setTimeout(() => setCopiedMessageId(null), 2000);
    }
  };

  const handleActionClick = (action: ActionItem) => {
    if (action.actionType === "navigate") {
      router.push(action.target);
    } else if (action.actionType === "prompt") {
      handleSendMessage(action.target);
    }
  };

  const handleSendMessage = (overrideText?: string) => {
    const textToSend = (overrideText ?? inputValue).trim();
    if (!textToSend || isTyping || streamingMessage) return;

    setSelectedPrompt(null);
    setInputValue("");

    // Check attached context
    const hasAttachedKresge = attachedContext.some((c) => c.title.toLowerCase().includes("kresge"));
    const attachedStory = attachedContext.find((c) => c.type === "story");
    const attachedReport = attachedContext.find((c) => c.type === "report");
    const lowerQuery = textToSend.toLowerCase();

    // Determine smart activity status based on current context, attached context, and query
    let calculatedStatus = "Thinking...";
    if (hasAttachedKresge && (lowerQuery.includes("next") || lowerQuery.includes("first") || lowerQuery.includes("should i do") || lowerQuery.includes("help"))) {
      calculatedStatus = "Reviewing Kresge application priorities…";
    } else if (attachedStory && (lowerQuery.includes("next") || lowerQuery.includes("story") || lowerQuery.includes("should i do") || lowerQuery.includes("help") || lowerQuery.includes("lead"))) {
      calculatedStatus = `Reviewing ${attachedStory.title}…`;
    } else if (isAssets) {
      if (lowerQuery.includes("recent") || lowerQuery.includes("photo")) {
        calculatedStatus = "Reviewing recent uploads…";
      } else {
        calculatedStatus = "Searching your assets…";
      }
    } else if (isRaise) {
      if (lowerQuery.includes("compare") || lowerQuery.includes("match")) {
        calculatedStatus = "Reviewing your top matches…";
      } else if (lowerQuery.includes("gap") || lowerQuery.includes("missing")) {
        calculatedStatus = "Checking application gaps…";
      } else {
        calculatedStatus = "Reviewing your top matches…";
      }
    } else if (isTell) {
      if (lowerQuery.includes("strongest") || lowerQuery.includes("story")) {
        calculatedStatus = "Reviewing your story…";
      } else if (lowerQuery.includes("testimonial") || lowerQuery.includes("jordan")) {
        calculatedStatus = "Looking at recent testimonials…";
      } else {
        calculatedStatus = "Reviewing your story…";
      }
    } else if (isManage) {
      if (lowerQuery.includes("update") || lowerQuery.includes("recent")) {
        calculatedStatus = "Reviewing organization updates…";
      } else {
        calculatedStatus = "Checking organization information…";
      }
    } else {
      if (lowerQuery.includes("tomorrow") || lowerQuery.includes("board")) {
        calculatedStatus = "Checking upcoming events…";
      } else {
        calculatedStatus = "Reviewing today’s priorities…";
      }
    }

    // Step 1: Add user message after ~120ms
    setTimeout(() => {
      const userMessage: Message = {
        id: `user-${Date.now()}`,
        role: "user",
        text: textToSend,
        time: "Just now",
      };

      setMessages((prev) => [...prev, userMessage]);

      // Step 2: Show typing state ~350ms later with smart activity status
      setTimeout(() => {
        setActivityStatus(calculatedStatus);
        setIsTyping(true);

        // Step 3: Begin progressive streaming ~600ms later
        setTimeout(() => {
          setIsTyping(false);

          let responseText = "";
          let usedContext: string[] | undefined = undefined;
          let actions: ActionItem[] | undefined = undefined;

          // Priority 1: Check if manually attached context explicitly influences the general query
          if (hasAttachedKresge && (lowerQuery.includes("next") || lowerQuery.includes("first") || lowerQuery.includes("should i do") || lowerQuery.includes("what next"))) {
            responseText =
              "For Kresge, I’d complete the workforce program budget first. The rest of the application evidence is already in good shape.";
            usedContext = ["Kresge Foundation", currentPageName];
            actions = [
              { label: "Open Kresge", actionType: "navigate", target: "/raise", iconType: "arrow" },
              { label: "Review gaps", actionType: "prompt", target: "Show me the gaps for Kresge", iconType: "edit" },
            ];
          } else if (attachedStory && (lowerQuery.includes("next") || lowerQuery.includes("story") || lowerQuery.includes("should i do") || lowerQuery.includes("what next") || lowerQuery.includes("strongest"))) {
            responseText =
              `For ${attachedStory.title}, the direct quote from Jordan M. regarding community mentorship is the strongest highlight. Framing it in the first paragraph will capture reader interest immediately.`;
            usedContext = [attachedStory.title, currentPageName];
            actions = [
              { label: "Open story", actionType: "navigate", target: "/tell", iconType: "arrow" },
              { label: "Rewrite intro", actionType: "prompt", target: "Draft a stronger intro for this story", iconType: "edit" },
            ];
          } else if (attachedReport && (lowerQuery.includes("next") || lowerQuery.includes("report") || lowerQuery.includes("should i do") || lowerQuery.includes("what next"))) {
            responseText =
              "From your 2024 Impact Report, the 85% workforce placement rate and verified employer testimonials are your highest performing metrics to cite in upcoming grant proposals.";
            usedContext = ["2024 Impact Report", currentPageName];
            actions = [
              { label: "Open organization", actionType: "navigate", target: "/manage", iconType: "arrow" },
              { label: "Update missing info", actionType: "prompt", target: "Help me update the missing organization info", iconType: "edit" },
            ];
          } else if (isAssets) {
            if (
              lowerQuery.includes("missing") ||
              lowerQuery.includes("gap")
            ) {
              responseText =
                "You’re currently missing high-resolution event photos for the Fall Career Fair and vector SVG assets for the Youth Leadership cohort.";
              usedContext = ["Assets", "Sep 2026 uploads"];
              actions = [
                { label: "View assets", actionType: "navigate", target: "/manage/assets", iconType: "arrow" },
                { label: "Filter recent", actionType: "prompt", target: "Find recent program photos", iconType: "filter" },
              ];
            } else if (
              lowerQuery.includes("recent") ||
              lowerQuery.includes("photo")
            ) {
              responseText =
                "Found 12 recent photos from the Youth Career Pathways workshop uploaded this week on Sep 8, 2026.";
              usedContext = ["Youth Career Pathways", "12 Photos"];
              actions = [
                { label: "View assets", actionType: "navigate", target: "/manage/assets", iconType: "arrow" },
                { label: "Filter recent", actionType: "prompt", target: "Find recent program photos", iconType: "filter" },
              ];
            } else {
              responseText =
                "I searched your assets library. I found 6 matching media items across Photos, Videos, and Templates ready for use.";
              usedContext = ["Assets", "Media Library"];
              actions = [
                { label: "View assets", actionType: "navigate", target: "/manage/assets", iconType: "arrow" },
                { label: "Filter recent", actionType: "prompt", target: "Find recent program photos", iconType: "filter" },
              ];
            }
          } else if (isRaise) {
            if (
              lowerQuery.includes("kresge") ||
              lowerQuery.includes("why is kresge") ||
              lowerQuery.includes("match")
            ) {
              responseText =
                "Kresge aligns closely with your workforce development program. You already have 2 stories, 6 testimonials, and 3 impact metrics that support the application. The main gap is your program budget.";
              usedContext = ["Kresge Foundation", "2 stories", "6 testimonials"];
              actions = [
                { label: "Open Kresge", actionType: "navigate", target: "/raise", iconType: "arrow" },
                { label: "Review gaps", actionType: "prompt", target: "Show me the gaps for Kresge", iconType: "edit" },
              ];
            } else if (
              lowerQuery.includes("missing") ||
              lowerQuery.includes("gap")
            ) {
              responseText =
                "Your main gap for Kresge is the workforce program budget documentation and updated demographic outcomes data for 2025–2026.";
              usedContext = ["Kresge Foundation", "Program Budget", "2025-2026 Data"];
              actions = [
                { label: "Open Kresge", actionType: "navigate", target: "/raise", iconType: "arrow" },
                { label: "Compare my top matches", actionType: "prompt", target: "Compare my top matches", iconType: "edit" },
              ];
            } else if (lowerQuery.includes("compare")) {
              responseText =
                "Comparing your top matches: Kresge (92% Match) aligns closest with your workforce program; Community Impact Fund (87% Match) offers localized community development; W.K. Kellogg (84% Match) focuses on youth education.";
              usedContext = ["Kresge Foundation", "Community Impact Fund", "W.K. Kellogg"];
              actions = [
                { label: "Open Kresge", actionType: "navigate", target: "/raise", iconType: "arrow" },
                { label: "Review gaps", actionType: "prompt", target: "Show me the gaps for Kresge", iconType: "edit" },
              ];
            } else {
              responseText =
                "Kresge aligns closely with your workforce development program. You already have 2 stories, 6 testimonials, and 3 impact metrics that support the application. The main gap is your program budget.";
              usedContext = ["Kresge Foundation", "2 stories", "6 testimonials"];
              actions = [
                { label: "Open Kresge", actionType: "navigate", target: "/raise", iconType: "arrow" },
                { label: "Review gaps", actionType: "prompt", target: "Show me the gaps for Kresge", iconType: "edit" },
              ];
            }
          } else if (isTell) {
            if (
              lowerQuery.includes("jordan") ||
              lowerQuery.includes("testimonial") ||
              lowerQuery.includes("board")
            ) {
              responseText =
                "Yes. I can use Jordan M.’s new testimonial plus the strongest impact moments already in Youth Career Pathways and shape them into a short board-ready narrative.";
              usedContext = ["Youth Career Pathways", "Jordan M. testimonial"];
              actions = [
                { label: "Open story", actionType: "navigate", target: "/tell", iconType: "arrow" },
                { label: "Rewrite intro", actionType: "prompt", target: "Draft a stronger intro for this story", iconType: "edit" },
              ];
            } else if (lowerQuery.includes("strongest")) {
              responseText =
                "The strongest element is the direct quote on community mentorship. Highlighting this in the lead paragraph will hook funders immediately.";
              usedContext = ["Youth Career Pathways", "Jordan M. testimonial"];
              actions = [
                { label: "Open story", actionType: "navigate", target: "/tell", iconType: "arrow" },
                { label: "Rewrite intro", actionType: "prompt", target: "Draft a stronger intro for this story", iconType: "edit" },
              ];
            } else {
              responseText =
                "I’ve analyzed the story draft. The core narrative is strong; I recommend adding specific participant quotes and clarifying the 6-week outcome metrics to increase engagement.";
              usedContext = ["Youth Career Pathways", "2026 Outcome Metrics"];
              actions = [
                { label: "Open story", actionType: "navigate", target: "/tell", iconType: "arrow" },
                { label: "Rewrite intro", actionType: "prompt", target: "Draft a stronger intro for this story", iconType: "edit" },
              ];
            }
          } else if (isManage) {
            if (
              lowerQuery.includes("missing") ||
              lowerQuery.includes("information") ||
              lowerQuery.includes("gap")
            ) {
              responseText =
                "I found the 2024 Impact Report plus your tracked impact metrics in Organization. I can summarize them, show what is outdated, or help update the missing pieces.";
              usedContext = ["2024 Impact Report", "Organization Data"];
              actions = [
                { label: "Open organization", actionType: "navigate", target: "/manage", iconType: "arrow" },
                { label: "Update missing info", actionType: "prompt", target: "Help me update the missing organization info", iconType: "edit" },
              ];
            } else if (
              lowerQuery.includes("update") ||
              lowerQuery.includes("recent")
            ) {
              responseText =
                "Here are the latest updates: 3 new testimonials added to Knowledge, 2 donor profiles updated in People, and the 2025 Grant Calendar synced via Google Calendar.";
              usedContext = ["Knowledge", "People", "Grant Calendar"];
              actions = [
                { label: "Open organization", actionType: "navigate", target: "/manage", iconType: "arrow" },
                { label: "Check missing info", actionType: "prompt", target: "What information is missing?", iconType: "edit" },
              ];
            } else {
              responseText =
                "I found the 2024 Impact Report plus your tracked impact metrics in Organization. I can summarize them, show what is outdated, or help update the missing pieces.";
              usedContext = ["2024 Impact Report", "Organization Data"];
              actions = [
                { label: "Open organization", actionType: "navigate", target: "/manage", iconType: "arrow" },
                { label: "Update missing info", actionType: "prompt", target: "Help me update the missing organization info", iconType: "edit" },
              ];
            }
          } else {
            if (lowerQuery.includes("tomorrow") || lowerQuery.includes("board")) {
              responseText =
                "For tomorrow’s board meeting, I’d lead with 3 recent story examples, then connect them to your workforce impact and current funding momentum.";
              usedContext = ["Board Update", "Kresge Grant"];
              actions = [
                { label: "Review opportunity", actionType: "navigate", target: "/raise", iconType: "arrow" },
                { label: "Prepare update", actionType: "prompt", target: "Help me prepare tomorrow's board update", iconType: "edit" },
              ];
            } else {
              responseText =
                "I’d start with Kresge. It closes in 12 days and you already have most of the evidence. Your main gap is the workforce program budget, last updated in 2025.";
              usedContext = ["Kresge Foundation", "Workforce Program"];
              actions = [
                { label: "Review opportunity", actionType: "navigate", target: "/raise", iconType: "arrow" },
                { label: "Review gaps", actionType: "prompt", target: "Show me the gaps for Kresge", iconType: "edit" },
              ];
            }
          }

          // If there is any attached context that wasn't already in usedContext, blend it in
          if (attachedContext.length > 0) {
            const extraAttached = attachedContext
              .map((c) => c.title)
              .filter((title) => !usedContext?.includes(title));
            if (extraAttached.length > 0 && usedContext) {
              usedContext = [...usedContext, ...extraAttached];
            }
          }

          const assistantMsgId = `assistant-${Date.now()}`;
          const words = responseText.split(" ");
          let currentWordIndex = 0;

          setStreamingMessage({
            id: assistantMsgId,
            role: "assistant",
            text: "",
            time: "Just now",
          });

          if (streamingIntervalRef.current) {
            clearInterval(streamingIntervalRef.current);
          }

          // Progressive streaming: reveal 1-2 words every ~35ms
          streamingIntervalRef.current = setInterval(() => {
            const chunkSize = Math.min(
              Math.floor(Math.random() * 2) + 1,
              words.length - currentWordIndex
            );
            currentWordIndex += chunkSize;
            const currentText = words.slice(0, currentWordIndex).join(" ");

            setStreamingMessage({
              id: assistantMsgId,
              role: "assistant",
              text: currentText,
              time: "Just now",
            });

            if (currentWordIndex >= words.length) {
              if (streamingIntervalRef.current) {
                clearInterval(streamingIntervalRef.current);
                streamingIntervalRef.current = null;
              }
              const finalizedMessage: Message = {
                id: assistantMsgId,
                role: "assistant",
                text: responseText,
                time: "Just now",
                usedContext,
                actions,
              };
              setMessages((prev) => [...prev, finalizedMessage]);
              setStreamingMessage(null);
            }
          }, 35);
        }, 600);
      }, 350);
    }, 120);
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

  const filteredRecentContext = DEMO_RECENT_CONTEXT.filter((item) =>
    item.title.toLowerCase().includes(contextSearchQuery.toLowerCase())
  );

  // Context Picker Popover Component (opens upward above context row)
  const ContextPickerPopover = () => (
    <div
      style={{
        boxShadow:
          "0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03)",
      }}
      className="absolute bottom-[calc(100%+8px)] right-0 w-[320px] max-w-[calc(100%-16px)] p-2 bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] flex flex-col z-50 animate-in fade-in zoom-in-95 duration-150 box-border text-left overflow-hidden max-h-[360px]"
    >
      {/* Top Search Field (fixed at top) */}
      <div className="h-[36px] px-2.5 bg-[#FFFFFF] border border-[#D4D4D4] rounded-[8px] flex items-center gap-2 mb-2 box-border shadow-[0_1px_2px_rgba(0,0,0,0.05)] shrink-0">
        <FigmaAsset
          nodeId="358:3226"
          name="search-field"
          src="/figma/home/search-field.svg"
          width={16}
          height={16}
          alt="Search"
          className="shrink-0"
        />
        <input
          type="text"
          value={contextSearchQuery}
          onChange={(e) => setContextSearchQuery(e.target.value)}
          placeholder="Search anything…"
          className="w-full bg-transparent font-sans font-normal text-[13px] leading-[18px] text-[#171717] placeholder:text-[#737373] outline-none border-none p-0"
          autoFocus
        />
      </div>

      {/* Internal scrollable list container */}
      <div className="flex flex-col max-h-[200px] overflow-y-auto overflow-x-hidden">
        {/* Recent Section */}
        <div className="px-2 py-1 font-sans font-semibold text-[11px] leading-[16px] text-[#737373] uppercase tracking-wider shrink-0">
          Recent
        </div>
        <div className="flex flex-col gap-0.5 mb-1.5 shrink-0">
          {filteredRecentContext.map((item) => {
            const isAttached = attachedContext.some((c) => c.id === item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleToggleContext(item)}
                className={cn(
                  "w-full h-[38px] px-2 rounded-[8px] flex items-center justify-between transition-colors cursor-pointer border-none outline-none text-left shrink-0",
                  isAttached ? "bg-[#FFF9E8] hover:bg-[#FFF3D1]" : "bg-transparent hover:bg-[#F5F5F5]"
                )}
              >
                <div className="flex items-center gap-2 min-w-0 pr-2 overflow-hidden">
                  <FigmaAsset
                    nodeId="358:3368"
                    name={item.id}
                    src={item.iconSrc}
                    width={18}
                    height={18}
                    alt=""
                    className="shrink-0"
                  />
                  <span className="font-sans font-medium text-[13px] leading-[18px] text-[#171717] truncate overflow-hidden whitespace-nowrap">
                    {item.title}
                  </span>
                </div>
                {isAttached && (
                  <span className="font-sans font-medium text-[11px] text-[#8F6500] shrink-0">Attached</span>
                )}
              </button>
            );
          })}
          {filteredRecentContext.length === 0 && (
            <div className="px-2 py-2 text-center font-sans text-[12px] text-[#737373]">
              No results found
            </div>
          )}
        </div>

        {/* Browse Section */}
        <div className="h-[1px] bg-[#E5E5E5] my-1 shrink-0" />
        <div className="px-2 py-1 font-sans font-semibold text-[11px] leading-[16px] text-[#737373] uppercase tracking-wider shrink-0">
          Browse
        </div>
        <div className="flex flex-col gap-0.5 shrink-0">
          {DEMO_BROWSE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                const matchingRecent = DEMO_RECENT_CONTEXT.find((r) => r.category === cat.title);
                if (matchingRecent) {
                  handleToggleContext(matchingRecent);
                } else {
                  setIsContextPickerOpen(false);
                }
              }}
              className="w-full h-[34px] px-2 rounded-[8px] flex items-center justify-between hover:bg-[#F5F5F5] transition-colors cursor-pointer border-none outline-none bg-transparent text-left shrink-0"
            >
              <div className="flex items-center gap-2 min-w-0 pr-2 overflow-hidden">
                <FigmaAsset
                  nodeId="358:3368"
                  name={cat.id}
                  src={cat.iconSrc}
                  width={16}
                  height={16}
                  alt=""
                  className="shrink-0"
                />
                <span className="font-sans font-medium text-[13px] leading-[18px] text-[#404040] truncate overflow-hidden whitespace-nowrap">
                  {cat.title}
                </span>
              </div>
              <span className="font-sans font-normal text-[12px] leading-[16px] text-[#A3A3A3] shrink-0">
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

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
          <div className="w-[144px] h-[40px] flex items-center gap-2 relative">
            {/* Chats Dropdown Container */}
            <div ref={chatsDropdownRef} className="relative">
              {/* Chats Button */}
              <button
                type="button"
                data-figma-node="358:3344"
                onClick={() => setIsChatsDropdownOpen((prev) => !prev)}
                style={{
                  boxShadow:
                    "0px 1px 2px rgba(0, 0, 0, 0.05), inset 0px -2px 0px rgba(0, 0, 0, 0.05)",
                }}
                className={cn(
                  "box-border w-[96px] h-[40px] px-[14px] py-[10px] bg-[#FFFFFF] border border-[#D4D4D4] rounded-[12px] flex items-center justify-between font-sans font-semibold text-[14px] leading-[20px] text-[#404040] appearance-none outline-none cursor-pointer hover:bg-[#F9FAFB] transition-colors",
                  isChatsDropdownOpen && "bg-[#F9FAFB]"
                )}
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

              {/* Chats Dropdown Menu */}
              {isChatsDropdownOpen && (
                <div
                  style={{
                    boxShadow:
                      "0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03), 0px 2px 2px -1px rgba(0, 0, 0, 0.04)",
                  }}
                  className="absolute left-0 top-[48px] w-[210px] py-1.5 bg-[#FFFFFF] border border-[rgba(0,0,0,0.10)] rounded-[8px] flex flex-col z-50 animate-in fade-in zoom-in-95 duration-150 box-border"
                >
                  <div className="px-1.5 pb-1">
                    <button
                      type="button"
                      onClick={handleNewChat}
                      className="w-full h-[36px] px-2.5 rounded-[6px] flex items-center gap-2 font-sans font-semibold text-[14px] leading-[20px] text-[#171717] hover:bg-[#F5F5F5] transition-colors cursor-pointer border-none outline-none bg-transparent"
                    >
                      <FigmaAsset
                        nodeId="358:3345"
                        name="top-plus"
                        src="/figma/home/top-plus.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                      <span>New chat</span>
                    </button>
                  </div>
                  <div className="h-[1px] bg-[#E5E5E5] my-1" />
                  <div className="px-3 py-1 font-sans font-semibold text-[11px] leading-[16px] text-[#737373] uppercase tracking-wider">
                    Recent
                  </div>
                  {RECENT_CHATS.map((chat) => (
                    <div key={chat.id} className="px-1.5 py-0.5">
                      <button
                        type="button"
                        onClick={() => handleSelectRecentChat(chat)}
                        className="w-full h-[32px] px-2.5 rounded-[6px] flex items-center font-sans font-medium text-[13px] leading-[18px] text-[#404040] hover:bg-[#F5F5F5] hover:text-[#171717] transition-colors cursor-pointer border-none outline-none bg-transparent truncate text-left"
                      >
                        <span className="truncate">{chat.title}</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Plus Button: Creates New Chat */}
            <button
              type="button"
              data-figma-node="358:3345"
              aria-label="New chat"
              onClick={handleNewChat}
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
        className="w-[400px] max-w-full flex-1 min-h-0 p-[20px] bg-white overflow-y-auto overflow-x-hidden box-border scroll-smooth"
      >
        {/* Inner conversation stack aligned to bottom when empty */}
        <div className="w-[360px] max-w-full min-h-full flex flex-col justify-end items-start gap-4 mx-auto">
          {/* HEADER: COMPACT IF CONVERSATION EXISTS, OR LARGE INTRO IF EMPTY */}
          {!hasConversation ? (
            /* LARGE INTRO STATE (Empty chat) */
            <div className="w-[360px] max-w-full flex flex-col gap-3 shrink-0">
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

              {/* Suggested Starter Prompts */}
              <div className="flex flex-col gap-1 w-full animate-in fade-in duration-200">
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
          ) : (
            /* COMPACT CHAT HEADER (Active conversation) */
            <div
              data-figma-node="358:3368"
              className="w-[360px] max-w-full flex items-center justify-start gap-2 h-[28px] shrink-0 border-b border-[#F0F0F0]/60 pb-2 mb-1"
            >
              {/* Left: 20x20 postie-message-icon + Postie + small BETA badge */}
              <div className="flex items-center gap-1.5 shrink-0">
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
                <div className="px-[5px] py-[1px] gap-1 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[4px] flex items-center shrink-0 box-border">
                  <span className="w-1 h-1 rounded-full bg-[#22C55E] shrink-0" />
                  <span className="font-sans font-medium text-[10px] leading-[14px] text-[#15803D]">
                    BETA
                  </span>
                </div>
              </div>
            </div>
          )}

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
                    You
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
                className="group/msg w-[360px] max-w-full flex flex-col items-start gap-2 shrink-0 animate-in fade-in duration-300"
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

                    {/* Right: Time & Copy Action */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopyMessage(msg.id, msg.text)}
                        className="opacity-0 group-hover/msg:opacity-100 transition-opacity p-0.5 rounded hover:bg-[#F0F0F0] text-[#737373] hover:text-[#171717] cursor-pointer flex items-center gap-1 text-[11px] leading-[14px] border-none bg-transparent outline-none"
                        title="Copy message"
                      >
                        {copiedMessageId === msg.id ? (
                          <>
                            <CheckIcon className="w-3.5 h-3.5 text-[#16A34A]" />
                            <span className="text-[#16A34A] font-sans font-medium text-[11px]">Copied</span>
                          </>
                        ) : (
                          <CopyIcon className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <span className="font-sans font-normal text-[12px] leading-[18px] text-[#525252]">
                        {msg.time}
                      </span>
                    </div>
                  </div>

                  {/* Message Bubble */}
                  <div
                    data-figma-node="358:3381"
                    className="w-[360px] max-w-full px-3 py-2 bg-[#FAFAFA] border border-[#E5E5E5] rounded-[0px_12px_12px_12px] flex flex-col items-start gap-[6px] overflow-hidden box-border"
                  >
                    <p
                      data-figma-node="358:3382"
                      className="w-full font-sans font-normal text-[15px] leading-[22px] text-[#171717] m-0 whitespace-pre-wrap"
                    >
                      {msg.text}
                    </p>
                  </div>
                </div>

                {/* Used Data / Grounded Context Chips (Secondary Row) */}
                {msg.usedContext && msg.usedContext.length > 0 && (
                  <div className="flex items-center flex-wrap gap-1.5 pl-1">
                    <span className="font-sans font-medium text-[11px] leading-[16px] text-[#737373] mr-0.5">
                      Used
                    </span>
                    {msg.usedContext.map((item, idx) => (
                      <span
                        key={idx}
                        className="h-[22px] px-[6px] py-[2px] bg-[#FFFFFF] border border-[#E5E5E5] rounded-[6px] flex items-center font-sans font-medium text-[11px] leading-[16px] text-[#525252]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {/* Inline Response Actions (Tertiary Buttons) */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="flex items-center flex-wrap gap-2 pl-1 pt-0.5">
                    {msg.actions.map((act, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleActionClick(act)}
                        className="h-[30px] px-2.5 py-1.5 gap-1 bg-[#FFFFFF] border border-[#D4D4D4] hover:border-[#A3A3A3] hover:bg-[#F9FAFB] rounded-[8px] flex items-center font-sans font-semibold text-[12px] leading-[18px] text-[#404040] hover:text-[#171717] transition-colors cursor-pointer outline-none box-border"
                      >
                        {act.iconType === "edit" ? (
                          <EditActionIcon />
                        ) : act.iconType === "filter" ? (
                          <FilterActionIcon />
                        ) : (
                          <ArrowRightIcon />
                        )}
                        <span>{act.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          )}

          {/* Active Streaming Response Bubble */}
          {streamingMessage && (
            <div
              data-figma-node="358:3374"
              className="w-[360px] max-w-full flex flex-col items-start gap-3 shrink-0 animate-in fade-in duration-200"
            >
              <div className="w-[360px] max-w-full flex flex-col gap-[6px]">
                {/* Header Row */}
                <div
                  data-figma-node="358:3376"
                  className="w-[360px] max-w-full h-[20px] flex items-center justify-between"
                >
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
                  <span className="font-sans font-normal text-[12px] leading-[18px] text-[#525252]">
                    {streamingMessage.time}
                  </span>
                </div>

                {/* Streaming Message Bubble */}
                <div
                  data-figma-node="358:3381"
                  className="w-[360px] max-w-full px-3 py-2 bg-[#FAFAFA] border border-[#E5E5E5] rounded-[0px_12px_12px_12px] flex flex-col items-start gap-[6px] overflow-hidden box-border"
                >
                  <p
                    data-figma-node="358:3382"
                    className="w-full font-sans font-normal text-[15px] leading-[22px] text-[#171717] m-0 whitespace-pre-wrap"
                  >
                    {streamingMessage.text}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Smart Contextual Typing Indicator */}
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
                    {activityStatus}
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
          3. CONTEXT BAR (Above Composer)
          ================================================== */}
      <div className="w-[400px] max-w-full px-[20px] pt-2.5 pb-1 bg-white shrink-0 box-border border-t border-[#F0F0F0]/80">
        <div
          ref={contextPickerRef}
          className="w-[360px] max-w-full mx-auto relative flex items-center flex-wrap gap-1.5 min-h-[26px]"
        >
          <span className="font-sans font-semibold text-[12px] leading-[18px] text-[#535862]">
            Context
          </span>

          {/* Automatic Current Page Context Chip */}
          <div className="h-[24px] px-2 bg-[#FAFAFA] border border-[#E5E5E5] rounded-[6px] inline-flex items-center gap-1 font-sans font-medium text-[12px] leading-[18px] text-[#404040]">
            {isAssets ? (
              <AssetsChipIcon />
            ) : isTell ? (
              <TellChipIcon />
            ) : isRaise ? (
              <RaiseChipIcon />
            ) : isManage ? (
              <ManageChipIcon />
            ) : (
              <HomeChipIcon />
            )}
            <span>{currentPageName}</span>
          </div>

          {/* Manually Attached Context Chips */}
          {attachedContext.map((ctx) => (
            <div
              key={ctx.id}
              className="h-[24px] pl-2 pr-1 bg-[#FFFFFF] border border-[#D4D4D4] rounded-[6px] inline-flex items-center gap-1 font-sans font-medium text-[11px] leading-[16px] text-[#404040] max-w-[140px] truncate animate-in fade-in zoom-in-95 duration-150 box-border"
            >
              <span className="truncate">{ctx.title}</span>
              <button
                type="button"
                onClick={() => handleRemoveContext(ctx.id)}
                className="w-3.5 h-3.5 rounded hover:bg-[#F0F0F0] flex items-center justify-center text-[#737373] hover:text-[#171717] cursor-pointer border-none bg-transparent p-0 outline-none"
                title={`Remove ${ctx.title}`}
              >
                <CloseIcon className="w-2.5 h-2.5" />
              </button>
            </div>
          ))}

          {/* + Add Context Trigger Button */}
          {attachedContext.length < 3 && (
            <button
              type="button"
              onClick={() => setIsContextPickerOpen((prev) => !prev)}
              className="font-sans font-semibold text-[12px] leading-[18px] text-[#8F6500] hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              + Add
            </button>
          )}

          {/* Upward Popover */}
          {isContextPickerOpen && <ContextPickerPopover />}
        </div>
      </div>

      {/* ==================================================
          4. COMPOSER (Figma Node: 358:3386)
          ================================================== */}
      <div
        data-figma-node="358:3386"
        className="w-[400px] max-w-full p-[8px_20px_16px_20px] flex flex-col justify-between items-center bg-white shrink-0 box-border"
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
            placeholder="Ask Postie anything, or add context with +"
            className="w-full bg-transparent font-sans font-normal text-[14px] leading-[20px] text-[#171717] placeholder:text-[#737373] resize-none outline-none border-none p-0"
          />

          {/* Bottom Actions Row */}
          <div className="w-[336px] max-w-full h-[36px] flex justify-between items-center">
            {/* Left Controls */}
            <div className="flex items-center gap-2">
              {/* Plus Button: Opens Context Picker */}
              <div className="relative">
                <button
                  type="button"
                  data-figma-node="358:3398"
                  aria-label="Add context"
                  onClick={() => setIsContextPickerOpen((prev) => !prev)}
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
              </div>

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
                disabled={!inputValue.trim() || isTyping || Boolean(streamingMessage)}
                data-figma-node="358:3402"
                aria-label="Send message"
                style={{
                  boxShadow:
                    "0px 1px 2px rgba(0, 0, 0, 0.05), inset 0px -2px 0px rgba(0, 0, 0, 0.05)",
                }}
                className={cn(
                  "box-border w-[36px] h-[36px] p-2 bg-[#F4B400] rounded-[12px] flex items-center justify-center appearance-none outline-none transition-all duration-150",
                  inputValue.trim() && !isTyping && !streamingMessage
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
