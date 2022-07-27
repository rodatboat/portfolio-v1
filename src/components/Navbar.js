import Pdf from "../Ronaldo_Suarez_Resume_v1.pdf";

import './Navbar.css'

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
              <a href="/projects">Projects</a>
            </span>
          </li>
          <li>
            <span className="navbar-link">
            <a href={Pdf} target="_blank">Resume</a>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;