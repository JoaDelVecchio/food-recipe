import { useParams } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

const Details = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const { searchedItem } = useSearch();
  const searchedRecipe = searchedItem.find((recipe) => recipe.id === id);

  if (!searchedRecipe) {
    console.error(`Recipe with ID ${id} not found`); // Log the error for debugging
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold text-red-600">Error</h2>
        <p className="text-gray-600">
          Recipe not found. Please try searching again.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800">
        {searchedRecipe.title}
      </h1>
      <p className="text-lg text-gray-600 mt-2">
        By: {searchedRecipe.publisher}
      </p>
      <img
        src={searchedRecipe.image_url}
        className="w-full max-w-md mt-4 object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

export default Details;
