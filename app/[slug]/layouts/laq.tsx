import { PortableText } from "@portabletext/react";

export default function laq({
  title,
  description,
}: {
  title: string;
  description: any;
}) {
  return (
    <div className="prose">
      <h1>{title}</h1>
      <PortableText value={description} />
    </div>
  );
}
