import { PortableText } from "@portabletext/react";
import BookPage from "../../../components/BookPage";

export default function laqBook({
  pages,
  title,
  description,
  slug,
  pageIdx,
  postsPerPage,
}: {
  pages: any[];
  title: string;
  description: any;
  slug: string;
  pageIdx: number;
  postsPerPage: number;
}) {
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
}
