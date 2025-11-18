import type { MouseEvent } from "react";

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export function trackPhoneClick(_event: MouseEvent<HTMLAnchorElement>, phoneUrl: string) {
  if (typeof window !== "undefined") {
    if (!Array.isArray(window.dataLayer)) {
      window.dataLayer = [];
    }

    window.dataLayer.push({
      event: "phone_click",
      phone_number: phoneUrl,
      location: "header",
    });
  }
}
