import { Recipe as RecipeType } from "../context/SearchContext";

const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  return (
    <div className="p-3 bg-gray-100 rounded-md shadow-md hover:bg-gray-200 transition">
      {/* Recipe Image */}
      <img
        src={recipe.image_url}
        alt={recipe.publisher}
        className="w-full h-40 object-cover rounded-t-md"
      />
      {/* Recipe Publisher */}
      <div className="mt-2 text-center">
        <h3 className="text-lg font-semibold text-gray-700">
          {recipe.publisher}
        </h3>
      </div>
    </div>
  );
};

export default Recipe;
