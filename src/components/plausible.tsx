"use client";

import { useEffect } from "react";

export function Plausible() {
  useEffect(() => {
    import("@plausible-analytics/tracker").then(({ init }) => {
      init({ domain: "gbolagade.com" });
    });
  }, []);
  return null;
}
