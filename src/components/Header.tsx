import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Header = ({
  searchedItem,
  setSearchedItem,
}: {
  searchedItem: string;
  setSearchedItem: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-green-400 to-emerald-600 text-white rounded-md shadow-lg p-6">
      <h1 className="text-3xl font-extrabold tracking-tight">
        Food<span className="text-yellow-300">Recipe</span>
      </h1>

      {/* Search Bar */}
      <SearchBar
        searchedItem={searchedItem}
        setSearchedItem={setSearchedItem}
      />

      {/* Navigation Bar */}
      <Navbar />
    </header>
  );
};

export default Header;
