import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Favorites from "./pages/favorites/Favorites";
import "./App.css";
import { useState } from "react";

function App() {
  const [searchedItem, setSearchedItem] = useState<string>("");

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <Header searchedItem={searchedItem} setSearchedItem={setSearchedItem} />

      <main className="flex-grow px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-item/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Food Recipe. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
