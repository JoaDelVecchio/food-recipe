import { Recipe as RecipeType } from "../context/SearchContext";
import { Link } from "react-router-dom";

const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  return (
    <div className="h-auto p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 transform duration-300 ease-in-out">
      {/* Recipe Image */}
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={recipe.image_url}
          alt={recipe.publisher}
          className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Recipe Info */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
          {recipe.title}
        </h3>
        <p className="text-sm text-gray-500 mt-2">{recipe.publisher}</p>

        {/* Call to Action */}
        <Link
          to={`/recipe-item/${recipe.id}`}
          className="inline-block mt-4 px-6 py-2 text-sm font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
