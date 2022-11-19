import { PortableText } from "@portabletext/react";

export default function BookPage({ data }: { data: any }) {
  return (
    <div className="flex flex-col">
      <div className="prose prose-sm flex-grow rounded bg-front px-3 py-4 text-back">
        <PortableText value={data.text} />
      </div>
      <div className="mt-1.5 rounded bg-front">
        <h2 className="py-0.5 text-center font-serif text-sm text-back">
          {data.title}
        </h2>
      </div>
    </div>
  );
}
