import { useRouter } from 'next/router';
import { deleteBook } from '../services/bookService';

export default function BookCard({ book }: { book: any }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this book?')) {
      await deleteBook(book._id);
      router.reload();
    }
  };

  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold">{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>{book.publishedYear}</p>
      <div className="mt-2 space-x-2">
        <button onClick={() => router.push(`/books/${book._id}`)} className="text-blue-500">View</button>
        <button onClick={() => router.push(`/books/edit/${book._id}`)} className="text-green-500">Edit</button>
        <button onClick={handleDelete} className="text-red-500">Delete</button>
      </div>
    </div>
  );
}
