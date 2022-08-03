import Pdf from "../resume/Ronaldo_Suarez_Resume_v2.pdf";

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
            <a href={Pdf} target="_blank" rel="noreferrer">Resume</a>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
