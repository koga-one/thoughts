import { PortableText } from "@portabletext/react";

export default function obs({
  title,
  description,
}: {
  title: string;
  description: any;
}) {
  return (
    <div className="prose mx-auto overflow-hidden rounded bg-[#1E1E1E] text-[#DADADA] prose-headings:text-[#DADADA]">
      <div className="prose-base relative mx-auto p-3 font-mono text-[#DADADA] prose-headings:font-mono prose-headings:text-[#DADADA] prose-p:min-h-[1rem] prose-p:leading-5 prose-strong:text-[#DADADA] sm:p-4 md:p-5 lg:prose-lg">
        <h1 className="whitespace-nowrap">{title}</h1>
        <PortableText value={description} />
      </div>
      <div className="bg-[#4A37A0]">
        <p className="m-0 py-1.5 px-2 text-center font-mono text-xs text-[#DADADA] opacity-60">
          yes, <i className="font-bold">that</i> obsidian ~ (⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧
        </p>
      </div>
    </div>
  );
}
