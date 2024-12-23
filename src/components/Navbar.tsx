import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center gap-2">
        <li>
          <Link className="text-black" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-black" to="/favorites">
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
