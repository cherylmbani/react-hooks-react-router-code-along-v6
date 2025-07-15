import { NavLink } from "react-router-dom";
import "./NavBar.css";

/* define the NavBar component */
function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        className="nav-link"
      >
        Login
      </NavLink>
      <NavLink
      to="/profile"
      className="nav-link"
      >
        UserProfile
      </NavLink>
      <NavLink
      to="/errorpage"
      className="nav-link"
      >

      </NavLink>
    </nav>
  );
};

export default NavBar;