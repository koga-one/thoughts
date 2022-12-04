"use client";

import { ComponentType, Suspense, use } from "react";
import { client } from "../sanityClient";
import dynamic from "next/dynamic";
import { NextPage } from "next";

type LayoutType = {
  pages: any[];
  title: string;
  description: any;
  slug: string;
  pageIdx: number;
  postsPerPage: number;
};
const postsPerPage = 15;

type Props = {
  params: any;
  searchParams: any;
};

const Page: NextPage<Props> = ({ params, searchParams }) => {
  const slug = params.slug;
  let pageIdx = 0;

  if (!isNaN(parseInt(searchParams["page"]))) pageIdx = searchParams["page"];

  let { description, pages, title, style } = use(
    client.fetch(
      `*[_type == "book" && slug.current == $slug][0]{title, style, description, pages[]->}`,
      {
        slug,
      }
    )
  );
  pages = pages.slice(pageIdx * postsPerPage, (pageIdx + 1) * postsPerPage);
  const DynamicLayout: ComponentType<LayoutType> = dynamic(
    () => import("./layouts/" + style),
    {
      suspense: true,
    }
  );

  return (
    <Suspense fallback={`Loading...`}>
      <DynamicLayout
        pages={pages}
        title={title}
        description={description}
        slug={slug}
        pageIdx={pageIdx}
        postsPerPage={postsPerPage}
      />
    </Suspense>
  );
};

export default Page;
