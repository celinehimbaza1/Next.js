import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { addBook } from '../../services/bookService';

export default function AddBook() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    await addBook(data);
    router.push('/books');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h1 className="text-2xl font-bold">Add Book</h1>
      <div>
        <label>Title</label>
        <input {...register('title', { required: true })} className="border w-full" />
        {errors.title && <p className="text-red-500">Title is required</p>}
      </div>
      <div>
        <label>Author</label>
        <input {...register('author', { required: true })} className="border w-full" />
        {errors.author && <p className="text-red-500">Author is required</p>}
      </div>
      <div>
        <label>Published Year</label>
        <input type="number" {...register('publishedYear')} className="border w-full" />
      </div>
      <div>
        <label>ISBN</label>
        <input {...register('isbn')} className="border w-full" />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Add Book</button>
    </form>
  );
}