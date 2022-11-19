import { client } from "../sanityClient";
import { NextPage } from "next";
import { use } from "react";
import BookPage from "../../components/BookPage";
import { usePathname } from "next/navigation";

const postsPerPage = 8;

type Props = {
  params: any;
  searchParams: any;
};

const Page: NextPage<Props> = ({ params, searchParams }) => {
  const slug = params.slug;
  // if (searchParams["page"] === undefined) {
  //   usePathname.name
  // } else {
  //   let idx = parseInt(searchParams["page"]);
  // }
  // if (isNaN(idx)) idx = 0;

  let { pages } = use(
    client.fetch(`*[_type == "book" && slug.current == $slug][0]{pages}`, {
      slug,
    })
  );
  // pages = pages.slice(idx * postsPerPage, (idx + 1) * postsPerPage);

  return (
    <div className="m-1 grid grid-cols-4 gap-4">
      {pages.map((post: any) => {
        return <BookPage data={post} />;
      })}
    </div>
  );
};

export default Page;
