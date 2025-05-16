// src/pages/recipes/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import path from 'path';
import fs from 'fs';

type Recipe = {
  slug: string;
  title: string;
  image: string;
  ingredients: string[];
  steps: string[];
};

type RecipeProps = {
  recipe: Recipe | null;
};

export default function RecipeDetail({ recipe }: RecipeProps) {
  if (!recipe) {
    return <p className="text-center mt-10 text-red-600">Recipe not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{recipe.title}</h1>

      <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={`/images/${recipe.image}`}
          alt={recipe.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 700px,
                 700px"
          priority
        />
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-300 pb-1">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-300 pb-1">Preparation Steps</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const recipesFilePath = path.join(process.cwd(), 'data', 'recipes.json');
  const recipesData = fs.readFileSync(recipesFilePath, 'utf-8');
  const recipes: Recipe[] = JSON.parse(recipesData);

  const paths = recipes.map((recipe) => ({
    params: { slug: recipe.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;

  const recipesFilePath = path.join(process.cwd(), 'data', 'recipes.json');
  const recipesData = fs.readFileSync(recipesFilePath, 'utf-8');
  const recipes: Recipe[] = JSON.parse(recipesData);

  const recipe = recipes.find((r) => r.slug === slug) || null;

  return {
    props: {
      recipe,
    },
  };
};
