import Link from "next/link";

export default function Header() {
  return (
    <div className="m-2 flex gap-2">
      <div className="bordered p-3">
        <h1 className="font-display text-3xl">thoughts.</h1>
        <a href="https://koga.one" target="_blank">
          <h2 className="-mt-1 font-sans italic hover:underline">by koga</h2>
        </a>
      </div>
      {/* Breadcrumb here */}
      <div className="bordered p-3"></div>
    </div>
  );
}
