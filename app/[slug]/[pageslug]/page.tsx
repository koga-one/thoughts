import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import { use } from "react";
import { client } from "../../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import "./prose.scss";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: any }) => (
      <Image
        src={urlFor(value).quality(90).url()}
        alt=""
        width={512}
        height={0}
        className="w-full rounded-lg"
      />
    ),
  },
};

const Page = ({ params }: { params: any }) => {
  const slug = params.slug;
  const title = params.pageslug;
  const { pages } = use(
    client.fetch(
      `*[_type == "book" && slug.current == $slug][0]{pages[slug.current == $title][0]}`,
      {
        slug,
        title,
      }
    )
  );

  return (
    <div className="prose-settings prose prose-base relative mx-auto overflow-hidden rounded-2xl bg-front p-3 text-back sm:p-4 md:p-6 lg:prose-lg">
      <h1 className="pt-2 font-serif">{pages.title}</h1>
      <PortableText value={pages.text} components={components} />
    </div>
  );
};

export default Page;
