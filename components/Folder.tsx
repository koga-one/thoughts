import Link from "next/link";

export default function Folder({ link }: { link: string }) {
  return (
    <div className="col-span-2 aspect-[3/2] p-1">
      <Link href={link}>
        <div className="h-full rounded-3xl border-b-4 border-red-600 bg-orange-100 p-4 transition-all hover:rounded-none dark:bg-slate-700">
          this is a folder!
        </div>
      </Link>
    </div>
  );
}
