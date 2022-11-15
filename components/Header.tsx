import Link from "next/link";

export default function Header() {
  return (
    <div className="m-2 flex flex-col gap-2 md:m-4 md:flex-row md:gap-4">
      <div className="bordered flex-grow py-6 px-4 md:py-8 md:px-6">
        <h1 className="font-display text-5xl">thoughts.</h1>
        <a href="https://koga.one" target="_blank">
          <h2 className="-mt-2 font-sans text-xl italic hover:underline md:-mt-4">
            by koga
          </h2>
        </a>
      </div>
      <div className="bordered py-6 px-4 md:py-8 md:px-6">
        <h3 className="font-serif text-xl font-medium">summary</h3>
        <ul className="ml-4 list-decimal pt-4">
          <li>
            <Link href={""}>
              <p className="text-lg hover:underline">the beginning</p>
            </Link>
          </li>
          <li className="pt-2">
            <Link href={""}>
              <p className="text-lg hover:underline">the journey</p>
            </Link>
          </li>
          <li className="pt-2">
            <Link href={""}>
              <p className="text-lg hover:underline">the end</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
