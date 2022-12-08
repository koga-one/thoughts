import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Link from "next/link";

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: any }) => <p>[image]</p>,
    spotify: ({ value }: { value: any }) => (
      <iframe
        className="mb-2 rounded"
        src={value.src}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    ),
  },
};

export default function laqBook({
  pages,
  title,
  description,
  slug,
}: {
  pages: any[];
  title: string;
  description: any;
  slug: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
      <div className="prose prose-base col-span-2 max-w-none overflow-hidden rounded-xl bg-[#000] px-3 py-4 text-back prose-headings:font-serif prose-headings:text-[#eee] md:col-span-4 lg:col-span-6 lg:prose-lg">
        <h1 className="relative">
          <span className="absolute left-0 -translate-x-full opacity-20">
            {title}
          </span>
          {title}
          <span className="opacity-20">
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
          </span>
        </h1>
        <PortableText value={description} />
      </div>
      <div className="col-span-2 rounded-xl bg-front md:col-span-4 lg:col-span-6">
        <p className="py-1 text-center text-sm font-semibold uppercase italic text-back opacity-50">
          click on the pages below to check my posts!
        </p>
      </div>
      {pages.map((post: any, idx: number) => {
        return (
          <Link
            className="col-span-2 overflow-hidden rounded-2xl border-2 border-[#fff] bg-[#000]"
            key={idx}
            href={slug + "/" + post.slug.current}
          >
            <PortableText value={post.pieces[0].text} components={components} />
            <div className="prose-sm relative mx-auto p-3 text-[#eee] prose-headings:font-serif prose-headings:text-[#eee] sm:p-4 md:p-5 lg:prose-base">
              <h1 className="relative whitespace-nowrap font-semibold">
                <span className="absolute left-0 -translate-x-full opacity-20">
                  {post.title}
                </span>
                {post.title}
                <span className="opacity-20">
                  {post.title}
                  {post.title}
                  {post.title}
                  {post.title}
                  {post.title}
                  {post.title}
                  {post.title}
                  {post.title}
                  {post.title}
                  {post.title}
                </span>
              </h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
