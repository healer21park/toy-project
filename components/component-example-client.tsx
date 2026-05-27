"use client";

import dynamic from "next/dynamic";

export const ComponentExample = dynamic(
  () =>
    import("@/components/component-example").then((m) => ({
      default: m.ComponentExample,
    })),
  { ssr: false }
);
