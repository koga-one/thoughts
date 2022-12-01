import Book from "../components/Book";
import { client } from "./sanityClient";

export default async function Page() {
  const books = await client.fetch(`*[_type == "book"]`);

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6">
      {books.map((book: any, idx: number) => {
        return <Book key={idx} data={book} />;
      })}
    </div>
  );
}
