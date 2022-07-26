import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="row nav-container">
        <ul>
          <li>
            <span className="navbar-link">
              <a href="/">About</a>
            </span>
          </li>
          <li>
            <span className="navbar-link">
              <a href="/projects">Work</a>
            </span>
          </li>
          <li>
            <span className="navbar-link">
              <a href="/resume">Resume</a>
            </span>
          </li>
          <li>
            <span className="navbar-link">
              <a href="/contact">Contact</a>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
