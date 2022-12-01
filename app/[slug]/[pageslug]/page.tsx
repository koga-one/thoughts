"use client";

import { ComponentType, Suspense, use } from "react";
import { client } from "../../sanityClient";
import dynamic from "next/dynamic";

type LayoutType = { post: any };

const Page = ({ params }: { params: any }) => {
  const slug = params.slug;
  const title = params.pageslug;
  const { style } = use(
    client.fetch(`*[_type == "book" && slug.current == $slug][0]{style}`, {
      slug,
    })
  );
  const post = use(
    client.fetch(`*[_type == "post" && slug.current == $title][0]`, {
      title,
    })
  );

  const DynamicLayout: ComponentType<LayoutType> = dynamic(
    () => import("./layouts/" + style),
    {
      suspense: true,
    }
  );

  return (
    <Suspense fallback={`Loading...`}>
      <DynamicLayout post={post} />
    </Suspense>
  );
};

export default Page;
