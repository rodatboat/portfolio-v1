import { Link } from "react-router-dom";
import Pdf from "../Ronaldo_Suarez_Resume_v1.pdf";

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
            <a href={Pdf} target="_blank">Resume</a>
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
