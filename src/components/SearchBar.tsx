import React from "react";
import { SetStateAction } from "react";

const SearchBar = ({
  searchedItem,
  setSearchedItem,
}: {
  searchedItem: string;
  setSearchedItem: React.Dispatch<SetStateAction<string>>;
}) => {
  const handleSearchedItemChanges = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchedItem(e.target.value);
  };

  return (
    <form>
      <input
        className="rounded-md p-3 w-64 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:ring-2 focus:ring-emerald-500 outline-none transition"
        type="text"
        placeholder="Search recipes..."
        value={searchedItem}
        onChange={(e) => handleSearchedItemChanges(e)}
      />
    </form>
  );
};

export default SearchBar;
