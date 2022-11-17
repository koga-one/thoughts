import Book from "../../components/Book";
import Folder from "../../components/Folder";

export default function Page() {
  return (
    <div className="m-1 grid grid-cols-12">
      <Book />
      <Folder link="test" />
    </div>
  );
}
