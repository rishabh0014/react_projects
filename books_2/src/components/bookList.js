import BookShow from "./bookShow";
import useBooksContext from "../hooks/use-book-context";

function BookList() {
  const { books } = useBooksContext();

  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return (
    <div>
      <div className="book-list">{renderBooks} </div>
    </div>
  );
}

export default BookList;
