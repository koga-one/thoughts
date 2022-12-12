import { use } from "react";
import { client } from "../sanityClient";
import Link from "next/link";

type LayoutType = {
  pages: any[];
  title: string;
  description: any;
  slug: string;
};

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const slug = params.slug;
  let { pages, title } = use(
    client.fetch(
      `*[_type == "book" && slug.current == $slug][0]{title, pages[]->}`,
      {
        slug,
      }
    )
  );
  return (
    <div className="relative flex flex-col justify-center gap-1 md:flex-row">
      <div className="contents md:block">
        <nav className="sticky top-1 z-50 mb-1 flex flex-row flex-wrap gap-1 md:flex-col">
          <Link className="flex-grow md:flex-grow-0" href={slug}>
            <p className="rounded border-2 border-front bg-back px-1.5 py-0.5 font-medium text-front">
              {title}
            </p>
          </Link>
          {pages.map((page: any, idx: number) => {
            return (
              <Link
                className="flex-grow md:flex-grow-0"
                key={idx}
                href={slug + "/" + page.slug.current}
              >
                <p className="rounded bg-front px-1.5 py-0.5 text-sm text-back">
                  {idx + 1}. {page.title}
                </p>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
}
