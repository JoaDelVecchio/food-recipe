import { useSearch } from "../../context/SearchContext";
import Recipe from "../../components/Recipe";
const Home = () => {
  const { searchedItem } = useSearch();
  return (
    <ul className="p-4">
      {searchedItem.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};

export default Home;
