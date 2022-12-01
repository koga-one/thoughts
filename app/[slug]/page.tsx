import { client } from "../sanityClient";
import { NextPage } from "next";
import { use } from "react";
import BookPage from "../../components/BookPage";
import { PortableText } from "@portabletext/react";

const postsPerPage = 15;

type Props = {
  params: any;
  searchParams: any;
};

const Page: NextPage<Props> = ({ params, searchParams }) => {
  const slug = params.slug;
  let pageIdx = 0;

  if (!isNaN(parseInt(searchParams["page"]))) pageIdx = searchParams["page"];

  let { description, pages, title } = use(
    client.fetch(
      `*[_type == "book" && slug.current == $slug][0]{title, description, pages[]->}`,
      {
        slug,
      }
    )
  );
  pages = pages.slice(pageIdx * postsPerPage, (pageIdx + 1) * postsPerPage);

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
      <div className="prose prose-base col-span-2 max-w-none overflow-hidden rounded bg-front px-3 py-4 text-back prose-headings:font-serif prose-headings:text-back md:col-span-4 lg:col-span-6 lg:prose-lg">
        <h1>{title}</h1>
        <PortableText value={description} />
      </div>
      {pages.map((post: any, idx: number) => {
        return (
          <BookPage
            slug={slug}
            key={idx}
            data={post}
            idx={1 + pageIdx * postsPerPage + idx}
          />
        );
      })}
    </div>
  );
};

export default Page;
