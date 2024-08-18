import type { SyntheticEvent } from "react";

export function preventBubbling(
  callback?: ((...args: never[]) => unknown) | null,
  noPreventDefault?: boolean,
) {
  return (e: SyntheticEvent): void => {
    e.stopPropagation();

    if (!noPreventDefault) e.preventDefault();
    if (callback) callback();
  };
}

export function delayScroll(ms: number) {
  return (): NodeJS.Timeout => setTimeout(() => window.scrollTo(0, 0), ms);
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function isPlural(count: number): string {
  return count > 1 ? "s" : "";
}

export function formatNumber(
  num: number,
  option?: "shorten" | "commas",
): string {
  if (isNaN(num)) return "";

  if (option === "shorten") {
    return shortenNumber(num);
  } else if (option === "commas") {
    return numCommas(num);
  } else {
    return num.toString();
  }
}

function shortenNumber(num: number): string {
  if (isNaN(num)) return "";

  const units = ["", "K", "M", "B", "T"];
  let unitIndex = 0;
  let shortNum = num;

  while (shortNum >= 1000 && unitIndex < units.length - 1) {
    shortNum /= 1000;
    unitIndex++;
  }

  return shortNum.toFixed(1) + units[unitIndex];
}

function numCommas(num: number): string {
  if (isNaN(num)) return "";

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function calculateScore(score: number) {
  if (isNaN(score)) return "0%";

  const percentage = Math.round(score * 100);

  return `${percentage}%`;
}

export function formatMarkdown(content: string): string {
  if (!content) return "";

  // TODO: Sanitize

  return (
    content
      // Bold text
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      // Italic text
      .replace(/\*([^*]+)\*/g, "<em>$1</em>")
      // Underlined text
      .replace(/--([^--]+)--/g, "<u>$1</u>")
      // Quotes
      .replace(/"([^"]+)"/g, "<q>$1</q>")
      // Preserve new lines
      .replace(/\n/g, "<br>")
  );
}
