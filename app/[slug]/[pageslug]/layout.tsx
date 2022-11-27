"use client";

import React, { ComponentType } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

type LayoutType = { children: React.ReactNode };

const DynamicLayout: ComponentType<LayoutType> = dynamic(
  () => import("../../../components/layouts/LAQ"),
  {
    suspense: true,
  }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicLayout>{children}</DynamicLayout>
    </Suspense>
  );
}
