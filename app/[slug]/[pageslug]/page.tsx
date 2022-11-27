import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import { use } from "react";
import { client } from "../../sanityClient";
import imageUrlBuilder from "@sanity/image-url";

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
  const title = params.pageslug;
  const post = use(
    client.fetch(`*[_type == "post" && slug.current == $title][0]`, {
      title,
    })
  );

  return (
    <div className="contents">
      <h1 className="pt-2 font-serif">{post.title}</h1>
      <PortableText value={post.text} components={components} />
    </div>
  );
};

export default Page;
