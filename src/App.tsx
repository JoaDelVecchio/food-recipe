import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Favorites from "./pages/favorites/Favorites";

import "./App.css";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [searchedItem, setSearchedItem] = useState<string>("");

  return (
    <div className="w-full flex flex-col gap-5">
      <header className="flex flex-col md:flex-row shadow-md shadow-emerald-500 bg-green-100 rounded-md justify-between items-center p-8 w-full">
        <h1 className="text-xl font-bold">Food Recipe</h1>
        <SearchBar
          searchedItem={searchedItem}
          setSearchedItem={setSearchedItem}
        />
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-item/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
