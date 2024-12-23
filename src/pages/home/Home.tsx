import { useSearch } from "../../context/SearchContext";
import Recipe from "../../components/Recipe";

const Home = () => {
  const { searchedItem } = useSearch();

  if (searchedItem.length === 0) {
    return (
      <p className=" p-4 text-center text-gray-600">
        No recipes found. Try searching for something!
      </p>
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {searchedItem.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Home;
