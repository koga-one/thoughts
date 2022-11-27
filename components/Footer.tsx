export default function Footer() {
  return (
    <div>
      <div className="flex place-content-center items-center pt-8">
        <a href="https://koga.one" target={"_blank"}>
          <p className="bordered m-2 py-1 px-3 text-center font-serif text-lg hover:underline">
            check my other projects!
          </p>
        </a>
      </div>
      <div className="flex place-content-center items-center gap-4 bg-front py-4 text-back">
        <p className="-mb-2 text-center font-display text-3xl md:text-4xl">
          why so serious?
        </p>
        <p className="border-l-2 border-back pl-4 text-xs font-bold uppercase italic">
          writing
          <br />
          since
          <br />
          2022
        </p>
      </div>
    </div>
  );
}
