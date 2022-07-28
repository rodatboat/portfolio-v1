import "./Intro.css";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Intro = () => {
  const iconSize = 18;
  return (
    <>
        <div className="intro-component">
        <div className="intro-wrapper">
          <span className="name">Ronaldo Suarez - Software Engineer</span>
          <span className="introduction">
            Hey 👋 I’m{" "}
            <span className="introduction-name-border">
              <span className="introduction-name-wrapper">
                <span className="introduction-name">
                  <a href="/#">Ronaldo</a>
                </span>
              </span>
            </span>
            , a developer focused on solving problems with digital solutions.
          </span>
          <span className="socials align-center">
            <a href="https://github.com/rodatboat">
              <FaGithub size={iconSize} />
            </a>
            <a href="https://www.linkedin.com/in/ronaldo-suarez/">
              <FaLinkedinIn size={iconSize} />
            </a>
            <a href="https://www.instagram.com/ro.datboat/">
              <FaInstagram size={iconSize} />
            </a>
          </span>
          </div>
        </div>
    </>
  );
};

export default Intro;
