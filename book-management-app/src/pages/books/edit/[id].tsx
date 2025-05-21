import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { getBookById, updateBook } from '../../../services/bookService';

export default function EditBook() {
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getBookById(id as string).then(res => {
        const book = res.data;
        setValue('title', book.title);
        setValue('author', book.author);
        setValue('publishedYear', book.publishedYear);
        setValue('isbn', book.isbn);
      });
    }
  }, [id]);

  const onSubmit = async (data: any) => {
    await updateBook(id as string, data);
    router.push('/books');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h1 className="text-2xl font-bold">Edit Book</h1>
      <input {...register('title')} className="border w-full" />
      <input {...register('author')} className="border w-full" />
      <input type="number" {...register('publishedYear')} className="border w-full" />
      <input {...register('isbn')} className="border w-full" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">Update Book</button>
    </form>
  );
}
