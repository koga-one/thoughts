"use client";

import "./book.scss";
import { use } from "react";
import { client } from "../sanityClient";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type LayoutType = {
  pages: any[];
  title: string;
  description: any;
  slug: string;
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const slug = params.slug;
  let pageIdx: number = parseInt(useSearchParams().get("page") || "0");
  let { description, pages, title } = use(
    client.fetch(
      `*[_type == "book" && slug.current == $slug][0]{title, description, pages[]->}`,
      {
        slug,
      }
    )
  );
  return (
    <div className="book">
      {children}
      <nav className="flex flex-col">
        <Link href={slug}>{title}</Link>
        {pages.map((page: any) => {
          return (
            <Link href={slug + "/" + page.slug.current}>
              <p className="text-sm">{page.title}</p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
