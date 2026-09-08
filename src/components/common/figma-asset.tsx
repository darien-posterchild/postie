"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FigmaAssetProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  nodeId: string;
  name: string;
  src: string;
  width: number;
  height: number;
  className?: string;
}

/**
 * Dedicated component rendering exact Figma assets downloaded to /public/figma/home/
 */
export function FigmaAsset({
  nodeId,
  name,
  src,
  width,
  height,
  className,
  alt = name,
  ...props
}: FigmaAssetProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-figma-node={nodeId}
      className={cn("inline-block flex-shrink-0 object-contain", className)}
      {...props}
    />
  );
}
