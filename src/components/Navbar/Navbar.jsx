import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { FiMenu } from "../../assets/icons";
import { useState } from "react";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <nav>
        <NavLink to="/" className={classes.logo}>
          Prince.dev
        </NavLink>
        <div className={classes.links}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/project">Project</NavLink>
          <NavLink to="/blog">Blogs</NavLink>
          <NavLink>Contact</NavLink>
        </div>
        <button
          className={classes.menuButton}
          onClick={() => setShowLinks(!showLinks)}
        >
          <FiMenu size="25" />
        </button>
      </nav>

      {showLinks && (
        <div className={classes.mobileLinks}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/project">Project</NavLink>
          <NavLink to="/blog">Blogs</NavLink>
          <NavLink>Contact</NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
