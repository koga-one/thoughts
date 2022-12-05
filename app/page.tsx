import Book from "../components/Book";
import { client } from "./sanityClient";

export default async function Page() {
  const books = await client.fetch(`*[_type == "book"]`);

  return (
    <div>
      <div className="mb-1.5 rounded-xl bg-front">
        <p className="py-1 text-center text-sm font-semibold uppercase italic text-back opacity-50">
          click on the books below to check my posts!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6">
        {books.map((book: any, idx: number) => {
          return <Book key={idx} data={book} />;
        })}
      </div>
    </div>
  );
}
