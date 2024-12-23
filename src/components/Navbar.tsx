import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between gap-3 p-5">
        <li>
          <Link className="text-black" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-black" to="/details">
            Details
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
