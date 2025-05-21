import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4 fixed">
      <h1 className="text-2xl font-bold mb-6">Book Manager</h1>
      <ul className="space-y-4">
        <li><Link href="/books" className="hover:underline">All Books</Link></li>
        <li><Link href="/books/add" className="hover:underline">Add Book</Link></li>
      </ul>
    </div>
  );
}
