"use client";

import { ComponentType, Suspense, use } from "react";
import dynamic from "next/dynamic";
import { PortableText } from "@portabletext/react";
import { useSearchParams } from "next/navigation";
import { client } from "../sanityClient";

type LayoutType = { title: any; description: any };

export default function Page({ params }: { params: any }) {
  const slug = params.slug;
  let pageIdx: number = parseInt(useSearchParams().get("page") || "0");
  let { description, style, pages, title } = use(
    client.fetch(
      `*[_type == "book" && slug.current == $slug][0]{title, style, description, pages[]->}`,
      {
        slug,
      }
    )
  );

  const DynamicLayout: ComponentType<LayoutType> = dynamic(
    () => import("./layouts/" + style),
    {
      suspense: true,
    }
  );

  return (
    <Suspense fallback={`Loading...`}>
      <DynamicLayout title={title} description={description} />
    </Suspense>
  );
}
