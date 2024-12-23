import { useSearch } from "../../context/SearchContext";
import Recipe from "../../components/Recipe";

const Home = () => {
  const { searchedItem } = useSearch();

  return searchedItem.length === 0 || !searchedItem ? (
    <p className="p-4 text-center text-gray-600">
      No recipes found. Try searching for something!
    </p>
  ) : (
    <div className="p-4 grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-6">
      {searchedItem.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Home;
