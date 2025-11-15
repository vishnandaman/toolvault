import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value);

export const sentenceCase = (value: string) =>
  value
    .toLowerCase()
    .replace(/(^\w)|(\s\w)/g, (match) => match.toUpperCase());

