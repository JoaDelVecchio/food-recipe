import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center gap-6 font-medium">
        <li>
          <Link className="hover:text-yellow-300 transition-colors" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-yellow-300 transition-colors"
            to="/favorites"
          >
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
