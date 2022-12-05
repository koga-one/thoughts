import Image from "next/image";
import Link from "next/link";
import React from "react";
import { client } from "../app/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default function Book({ data }: { data: any }) {
  return (
    <Link href={data.slug.current}>
      <div className="relative grid aspect-[3/4] items-end overflow-hidden rounded-2xl border-2 border-[#fff] bg-front text-back">
        <Image
          src={urlFor(data.image).width(500).url()}
          layout="fill"
          alt="Book cover"
        />
        <div className="z-50 mt-1.5 rounded-xl bg-front">
          <h2 className="py-0.5 text-center font-serif text-lg text-[#eee]">
            {data.title}
          </h2>
        </div>
      </div>
    </Link>
  );
}
