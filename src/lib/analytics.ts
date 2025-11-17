import type { MouseEvent } from "react";

export function trackPhoneClick(event: MouseEvent<HTMLAnchorElement>, phoneUrl: string) {
  const gtagConversion =
    typeof window !== "undefined"
      ? ((window as any).gtag_report_conversion as ((url?: string) => void) | undefined)
      : undefined;

  if (typeof gtagConversion === "function") {
    event.preventDefault();
    gtagConversion(phoneUrl);
  }
}
