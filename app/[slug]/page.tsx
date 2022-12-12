"use client";

import { ComponentType, Suspense, use } from "react";
import dynamic from "next/dynamic";
import { client } from "../sanityClient";

type LayoutType = { title: any; description: any };

export default function Page({ params }: { params: any }) {
  const slug = params.slug;
  let { description, style, title } = use(
    client.fetch(
      `*[_type == "book" && slug.current == $slug][0]{title, style, description}`,
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
    <Suspense>
      <DynamicLayout title={title} description={description} />
    </Suspense>
  );
}
