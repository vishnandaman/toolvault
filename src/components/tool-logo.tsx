"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type ToolLogoProps = {
  name: string;
  logo?: string;
  className?: string;
  imageClassName?: string;
  fallbackClassName?: string;
  sizes?: string;
};

const getInitials = (value: string) =>
  value
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export function ToolLogo({
  name,
  logo,
  className,
  imageClassName,
  fallbackClassName,
  sizes = "64px",
}: ToolLogoProps) {
  const [isError, setIsError] = useState(false);
  const initials = useMemo(() => getInitials(name), [name]);

  const showFallback = isError || !logo;

  return (
    <div className={cn("relative", className)}>
      {!showFallback ? (
        <Image
          fill
          src={logo}
          alt={name}
          className={cn("object-contain", imageClassName)}
          sizes={sizes}
          onError={() => setIsError(true)}
        />
      ) : (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 text-sm font-semibold uppercase text-indigo-600",
            fallbackClassName,
          )}
        >
          {initials}
        </div>
      )}
    </div>
  );
}

