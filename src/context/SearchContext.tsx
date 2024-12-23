import { SetStateAction, createContext, useState } from "react";

const SearchContext = createContext<{
  searchedItem: string;
  setSearchedItem: React.Dispatch<SetStateAction<string>>;
} | null>(null);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchedItem, setSearchedItem] = useState<string>("");
  return (
    <SearchContext.Provider value={{ searchedItem, setSearchedItem }}>
      {children}
    </SearchContext.Provider>
  );
};
