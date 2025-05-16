import Link from 'next/link';
import { GetStaticProps } from 'next';
import recipes from '../data/recipes.json';

type Recipe = {
  slug: string;
  title: string;
  image: string;
};

type Props = {
  recipes: Recipe[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      recipes,
    },
  };
};

export default function Home({ recipes }: Props) {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Recipe List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {recipes.map((recipe) => (
          <Link
            key={recipe.slug}
            href={`/recipes/${recipe.slug}`}
            className="block rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={`/images/${recipe.image}`}
              alt={recipe.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <h2 className="p-4 text-xl font-semibold text-gray-900">{recipe.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
