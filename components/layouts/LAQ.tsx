import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import React from "react";
import { client } from "../../app/sanityClient";

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
    spotify: ({ value }: { value: any }) => (
      <iframe
        className="mb-2 rounded"
        src={value.src}
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    ),
  },
};

export default function laq({ post }: { post: any }) {
  const createdAt = new Date(post._createdAt);

  return (
    <section className="prose mx-auto">
      <PortableText value={post.pieces[0].text} components={components} />
      <div className="prose-base relative mx-auto overflow-hidden rounded-xl bg-[#000] p-3 text-[#eee] prose-headings:font-serif prose-headings:text-[#eee] sm:p-4 md:p-5 lg:prose-lg">
        <h1>{post.title}</h1>
        <PortableText value={post.pieces[1].text} components={components} />
        <time className="text-xs italic opacity-70">
          {String(createdAt.getHours()).padStart(2, "0")}:
          {String(createdAt.getMinutes()).padStart(2, "0")} -{" "}
          {monthNames[createdAt.getMonth()]} {ordinal(createdAt.getDate())},{" "}
          {createdAt.getFullYear()}
        </time>
      </div>
    </section>
  );
}
