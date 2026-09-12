"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type PostieView = "sidebar" | "floating" | "collapsed";

interface PostieContextValue {
  postieView: PostieView;
  setPostieView: (view: PostieView) => void;
  lastOpenPostieView: "sidebar" | "floating";
  collapsePostie: () => void;
  openPostie: () => void;
}

const PostieContext = createContext<PostieContextValue | undefined>(undefined);

export function PostieProvider({ children }: { children: ReactNode }) {
  const [postieView, setPostieViewState] = useState<PostieView>("sidebar");
  const [lastOpenPostieView, setLastOpenPostieViewState] = useState<"sidebar" | "floating">("sidebar");

  useEffect(() => {
    try {
      const savedView = localStorage.getItem("postie_view") as PostieView | null;
      const savedLastOpen = localStorage.getItem("postie_last_open") as ("sidebar" | "floating") | null;
      queueMicrotask(() => {
        if (savedView && ["sidebar", "floating", "collapsed"].includes(savedView)) {
          setPostieViewState(savedView);
        }
        if (savedLastOpen && ["sidebar", "floating"].includes(savedLastOpen)) {
          setLastOpenPostieViewState(savedLastOpen);
        }
      });
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, []);

  const setPostieView = (view: PostieView) => {
    setPostieViewState(view);
    if (view !== "collapsed") {
      setLastOpenPostieViewState(view);
      try {
        localStorage.setItem("postie_last_open", view);
      } catch {
        // Ignore
      }
    }
    try {
      localStorage.setItem("postie_view", view);
    } catch {
      // Ignore
    }
  };

  const collapsePostie = () => {
    if (postieView !== "collapsed") {
      setLastOpenPostieViewState(postieView);
      setPostieViewState("collapsed");
      try {
        localStorage.setItem("postie_last_open", postieView);
        localStorage.setItem("postie_view", "collapsed");
      } catch {
        // Ignore
      }
    }
  };

  const openPostie = () => {
    setPostieViewState(lastOpenPostieView);
    try {
      localStorage.setItem("postie_view", lastOpenPostieView);
    } catch {
      // Ignore
    }
  };

  return (
    <PostieContext.Provider
      value={{
        postieView,
        setPostieView,
        lastOpenPostieView,
        collapsePostie,
        openPostie,
      }}
    >
      {children}
    </PostieContext.Provider>
  );
}

export function usePostie() {
  const context = useContext(PostieContext);
  if (!context) {
    throw new Error("usePostie must be used within a PostieProvider");
  }
  return context;
}
