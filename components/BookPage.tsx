import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Link from "next/link";

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: any }) => <p>[image]</p>,
  },
};

export default function BookPage({
  slug,
  data,
  idx,
}: {
  slug: string;
  data: any;
  idx: number;
}) {
  return (
    <Link href={slug + "/" + data.slug.current}>
      <div className="prose prose-sm aspect-[3/4] overflow-hidden rounded bg-front px-3 py-4 text-back lg:prose-base">
        <PortableText value={data.text} components={components} />
      </div>
      <div className="mt-1.5 rounded bg-front">
        <h2 className="py-0.5 px-2 text-center font-serif text-sm text-back">
          {idx} - {data.title}
        </h2>
      </div>
    </Link>
  );
}
