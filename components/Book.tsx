import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import { client } from "../app/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default function Book({ data }: { data: any }) {
  return (
    <Link href={data.slug.current}>
      <div className="relative grid aspect-[3/4] place-items-center items-center overflow-hidden rounded bg-front text-back">
        <Image
          src={urlFor(data.image).width(500).url()}
          layout="fill"
          alt="Book cover"
        />
      </div>
      <div className="mt-1.5 rounded bg-front">
        <h2 className="py-0.5 text-center font-serif text-sm text-back">
          {data.title}
        </h2>
      </div>
    </Link>
  );
}
