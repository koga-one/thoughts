import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import React from "react";
import { client } from "../../../sanityClient";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

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

export default function obs({ post }: { post: any }) {
  const createdAt = new Date(post._createdAt);

  return (
    <section className="prose mx-auto overflow-hidden rounded bg-[#1E1E1E]">
      <div className="prose-base relative mx-auto p-3 font-mono text-[#DADADA] prose-headings:text-[#DADADA] prose-p:min-h-[1rem] prose-p:leading-5 prose-strong:text-[#DADADA] prose-code:text-[#DADADA] sm:p-4 md:p-5 lg:prose-lg">
        <div className="-mt-4 mb-6 inline-block rounded border border-[#DADADA] px-2 py-1 italic prose-p:m-0">
          <PortableText value={post.pieces[1].text} components={components} />
        </div>
        <h1 className="whitespace-nowrap">{post.title}</h1>
        <PortableText value={post.pieces[0].text} components={components} />
      </div>
      <div className="bg-[#4A37A0]">
        <p className="m-0 py-1.5 px-2 text-center font-mono text-xs text-[#DADADA] opacity-60">
          yes, <i className="font-bold">that</i> obsidian ~ (⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧
        </p>
      </div>
    </section>
  );
}
