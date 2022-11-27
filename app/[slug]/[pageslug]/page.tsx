import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import { use } from "react";
import { client } from "../../sanityClient";
import imageUrlBuilder from "@sanity/image-url";

var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function ordinal(i: number) {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
}

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

  const createdAt = new Date(post._createdAt);

  return (
    <div className="contents">
      <h1 className="pt-2 font-serif">{post.title}</h1>
      <PortableText value={post.text} components={components} />
      <time className="text-xs italic opacity-70">
        {String(createdAt.getHours()).padStart(2, "0")}:
        {String(createdAt.getMinutes()).padStart(2, "0")} -{" "}
        {monthNames[createdAt.getMonth()]} {ordinal(createdAt.getDate())},{" "}
        {createdAt.getFullYear()}
      </time>
    </div>
  );
};

export default Page;
