import { useEffect, useState } from "react";
import { Book } from "../Book/Book";

export const Books = () => {
  const [displayBooks, setDisplayBooks] = useState([]);
  useEffect(() => {
    fetch("/public/booksData.json")
      .then((res) => res.json())
      .then((data) => setDisplayBooks(data));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Books</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {displayBooks.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};
