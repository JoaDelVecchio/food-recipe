import { Recipe as RecipeType } from "../context/SearchContext";

const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  return (
    <div className=" h-auto p-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
      {/* Recipe Image */}
      <img
        src={recipe.image_url}
        alt={recipe.publisher}
        className="w-full h-48 object-cover rounded-t-md"
      />
      {/* Recipe Publisher */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold text-gray-800">{recipe.title}</h3>
        <p className="text-gray-600">{recipe.publisher}</p>
      </div>
    </div>
  );
};

export default Recipe;
