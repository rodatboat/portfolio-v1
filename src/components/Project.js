import { FaGithub, FaLinkedinIn, FaInstagram, FaFolderOpen } from "react-icons/fa";

const Project = ({ projectData }) => {
  return (
    <>
      <li className="container">
        <div className="col">
          <div className="row project-links-wrapper container">
            <span className="socials project-links">
            <FaFolderOpen className="folder-icon" size={28} />
              <a href={projectData.link}>
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
          <div className="row project-techstack-wrapper">
          {projectData.tech_stack.map((t, i) => <span key={i} className="project-techstack">{t}</span>)}
          </div>
        </div>
      </li>
    </>
  );
};

export default Project;
