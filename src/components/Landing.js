import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Landing = () => {
  const iconSize = 18;
  return (
    <>
      <span className="name">Ronaldo Suarez - Software Engineer</span>
      <br></br>
      <span className="introduction">
        Hey 👋 I’m Ronaldo, a developer focused on solving problems with digital
        solutions.
      </span>
      <br></br>
      <span className="socials align-center">
        <FaGithub size={iconSize} /> <FaLinkedinIn size={iconSize} />{" "}
        <FaInstagram size={iconSize} />
      </span>
    </>
  );
};

export default Landing;
