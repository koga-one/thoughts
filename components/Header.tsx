"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  console.log(path);

  if (path && path != "/") {
    const paths = path.split("/").slice(1);
    const steps = SetSteps(path.split("/").slice(1));

    return (
      <div className="mb-4 inline-block transition-all">
        <div className="bordered grid grid-flow-col items-center overflow-hidden bg-back p-1.5 pr-4">
          <Link href="/">
            <div className="rounded-2xl bg-front px-2 pt-1 pb-0 transition-all hover:rounded-none">
              <h1 className="font-display text-4xl text-back">thoughts.</h1>
            </div>
          </Link>
          {steps.map((step, idx) => {
            return (
              <Link href={"/" + step}>
                <h2 className="font-serif text-2xl italic">
                  <span className="px-3 not-italic">{"/"}</span>
                  <span className="hover:underline">{paths[idx]}</span>
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mb-4 inline-block transition-all">
        <div className="bordered grid grid-flow-col items-center gap-2 overflow-hidden bg-back p-1.5">
          <Link href="/">
            <div className="rounded-2xl bg-front px-2 pt-1 pb-0 transition-all hover:rounded-none">
              <h1 className="font-display text-4xl text-back">thoughts.</h1>
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
