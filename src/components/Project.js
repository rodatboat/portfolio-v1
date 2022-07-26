import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Project = ({ projectData }) => {
  return (
    <>
      <li className="container">
        <div className="col">
          <div className="row project-links-wrapper container">
            <span className="socials project-links">
              <a href="https://github.com/rodatboat">
                <FaGithub size={28} />
              </a>
            </span>
          </div>
          <div className="row project-title-wrapper container">
            <span className="project-title">{projectData.title}</span>
          </div>
          <div className="row project-bio-wrapper container">
            <span className="project-bio">{projectData.bio}</span>
          </div>
          <div className="row project-techstack-wrapper container">
            <span className="project-techstack">{projectData.tech_stack.map((t) => `${t}`)}</span>
          </div>
        </div>
      </li>
    </>
  );
};

export default Project;
