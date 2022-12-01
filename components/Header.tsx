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
        <div className="bordered flex items-stretch overflow-hidden bg-back p-1.5">
          <Link href="/">
            <div className="rounded-2xl bg-front px-2 pt-1 pb-0 transition-all hover:rounded-none">
              <h1 className="font-display text-xl text-back sm:text-2xl md:text-3xl lg:text-4xl">
                thoughts.
              </h1>
            </div>
          </Link>
          {steps.map((step, idx) => {
            return (
              <div
                key={idx}
                className="ml-1 grid items-center rounded-2xl border-2 border-front px-1.5 py-0.5 transition-all hover:rounded-none"
              >
                <Link href={"/" + step}>
                  <h2 className="font-serif text-sm italic sm:text-lg md:text-xl lg:text-2xl">
                    <span className="whitespace-nowrap">{paths[idx]}</span>
                  </h2>
                </Link>
              </div>
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
