import { client } from "../sanityClient";
import { NextPage } from "next";
import { use } from "react";
import BookPage from "../../components/BookPage";

const postsPerPage = 15;

type Props = {
  params: any;
  searchParams: any;
};

const Page: NextPage<Props> = ({ params, searchParams }) => {
  const slug = params.slug;
  let pageIdx = 0;

  if (!isNaN(parseInt(searchParams["page"]))) pageIdx = searchParams["page"];

  let { pages } = use(
    client.fetch(`*[_type == "book" && slug.current == $slug][0]{pages}`, {
      slug,
    })
  );
  pages = pages.slice(pageIdx * postsPerPage, (pageIdx + 1) * postsPerPage);

  return (
    <div className="m-1 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
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
