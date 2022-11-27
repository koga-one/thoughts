import React from "react";

export default function LAQ({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-base relative my-1 mx-auto overflow-hidden rounded-2xl bg-front p-3 text-back prose-h1:text-back sm:p-4 md:p-5 lg:prose-lg">
      {children}
    </div>
  );
}
