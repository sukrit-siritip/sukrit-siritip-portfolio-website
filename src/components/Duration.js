"use client";

import { useSyncExternalStore } from "react";
import { countMonths, formatMonths } from "@/lib/period";

const subscribe = () => () => {};

export default function Duration({ period, buildMonths, className }) {
  const months = useSyncExternalStore(
    subscribe,
    () => countMonths(period),
    () => buildMonths,
  );
  return <span className={className}>{formatMonths(months)}</span>;
}
