import { PortableText } from "@portabletext/react";

export default function laq({
  title,
  description,
}: {
  title: string;
  description: any;
}) {
  return (
    <div className="prose mx-auto overflow-hidden rounded-xl bg-[#000] text-[#eee] prose-headings:text-[#eee]">
      <div className="prose-base relative mx-auto p-3 text-[#eee] prose-headings:font-serif prose-headings:text-[#eee] prose-p:min-h-[1rem] prose-strong:text-[#eee] sm:p-4 md:p-5 lg:prose-lg">
        <h1 className="relative whitespace-nowrap">
          <span className="absolute left-0 -translate-x-full opacity-20">
            {title}
          </span>
          {title}
          <span className="opacity-20">
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
          </span>
        </h1>
        <PortableText value={description} />
      </div>
      <div className="bg-front">
        <p className="m-0 py-1.5 px-2 text-center text-xs text-back opacity-50">
          it's all art ~ (✿◡‿◡)
        </p>
      </div>
    </div>
  );
}
