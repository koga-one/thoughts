"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  if (path && path != "/") {
    const paths = path.split("/").slice(1);
    const steps = SetSteps(path.split("/").slice(1));

    return (
      <div className="inline-block overflow-hidden transition-all">
        <div className="bordered grid grid-flow-col items-center overflow-hidden bg-back p-1.5 pr-4">
          <Link href="/">
            <div className="rounded-2xl bg-front px-2 pt-1 pb-0 transition-all hover:rounded-none">
              <h1 className="font-display text-xl text-back sm:text-2xl md:text-3xl lg:text-4xl">
                thoughts.
              </h1>
            </div>
          </Link>
          {steps.map((step, idx) => {
            return (
              <Link key={idx} href={"/" + step}>
                <h2 className="font-serif italic sm:text-lg md:text-xl lg:text-2xl">
                  <span className="px-2 not-italic md:px-3">{"/"}</span>
                  <span className="whitespace-nowrap hover:underline">
                    {paths[idx]}
                  </span>
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="inline-block overflow-hidden transition-all">
        <div className="bordered items-center overflow-hidden bg-back p-1.5">
          <Link href="/">
            <div className="rounded-2xl bg-front px-2 pt-1 pb-0 transition-all hover:rounded-none">
              <h1 className="font-display text-xl text-back sm:text-2xl md:text-3xl lg:text-4xl">
                thoughts.
              </h1>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

function SetSteps(steps: string[]): string[] {
  let result: string[] = [];

  for (let i = 1; i <= steps.length; i++) {
    result.push(steps.slice(0, i).join("/"));
  }

  return result;
}
