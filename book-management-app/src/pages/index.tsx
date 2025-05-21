import { useEffect, useState } from 'react';
import { getAllBooks } from '../../services/bookService';
import BookCard from '../../components/BookCard';

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then(res => setBooks(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Books</h1>
      {books.map((book: any) => <BookCard key={book._id} book={book} />)}
    </div>
  );
}

