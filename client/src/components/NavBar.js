import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar-expand-lg bg-light px-5 py-4">
      <ul className="nav justify-content-end">
        <li className="nav-item d-flex align-items-center">
          {location.pathname !== "/" && (
            <Link to="/" className="lead">
              Dashboard
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
