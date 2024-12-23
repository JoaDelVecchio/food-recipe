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
    e.preventDefault();
    setSearchedItem(e.target.value);
  };

  return (
    <form>
      <input
        className="rounded-md p-2 bg-emerald-300 shadow-sm shadow-emerald-700 "
        type="text"
        placeholder="Enter items..."
        value={searchedItem}
        onChange={(e) => handleSearchedItemChanges(e)}
      />
    </form>
  );
};

export default SearchBar;
