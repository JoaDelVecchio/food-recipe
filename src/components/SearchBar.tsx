import { useState } from "react";
import { useSearch } from "../context/SearchContext";

const SearchBar = () => {
  const { setSearchedItem } = useSearch();
  const [searchParams, setSearchedParams] = useState("");

  const handleSearchedItemChanges = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchedParams(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      const data = await res.json();

      if (data?.data?.recipes) {
        setSearchedItem(data.data.recipes);
        setSearchedParams("");
      }
    } catch (error) {
      console.error("Error fetching", error);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        className="rounded-md p-3 w-64 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:ring-2 focus:ring-emerald-500 outline-none transition"
        type="text"
        placeholder="Search recipes..."
        value={searchParams}
        onChange={(e) => handleSearchedItemChanges(e)}
      />
    </form>
  );
};

export default SearchBar;
