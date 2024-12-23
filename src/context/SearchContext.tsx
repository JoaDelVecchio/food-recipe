import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

// Define the Recipe type
export interface Recipe {
  title: ReactNode;
  id: string;
  publisher: string;
  image_url: string;
  // Add other fields if needed
}

// Define the context type
interface SearchContextType {
  searchedItem: Recipe[]; // Holds the list of recipes
  setSearchedItem: Dispatch<SetStateAction<Recipe[]>>; // Updates the list
}

// Create the context
export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("Home must be used within a SearchProvider");
  }
  return context;
};

// Provider component
export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchedItem, setSearchedItem] = useState<Recipe[]>([]); // Stores the recipes

  return (
    <SearchContext.Provider value={{ searchedItem, setSearchedItem }}>
      {children}
    </SearchContext.Provider>
  );
};
