"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  return (
    <div className="mb-4 inline-block">
      <div className="bordered grid grid-flow-col items-center gap-2 overflow-hidden bg-back p-1.5">
        <Link href="/">
          <div className="rounded-2xl bg-front px-2 pt-1 pb-0 transition-all hover:rounded-none">
            <h1 className="font-display text-4xl text-back">thoughts.</h1>
          </div>
        </Link>
        {path?.substring(1) && (
          <Link href={path}>
            <h2 className="px-2 font-serif text-2xl italic">
              <span className="not-italic">{"> "}</span>
              {path.substring(1)}
            </h2>
          </Link>
        )}
      </div>
    </div>
  );
}
