import "./Project.css";
import { FaGithub, FaFolderOpen } from "react-icons/fa";

const Project = ({ projectData }) => {
  return (
    <>
      <li className="container project-list-item">
        <div className="col project-wrapper">
          <div className="row project-links-wrapper">
            <span className="socials project-links">
            <FaFolderOpen className="folder-icon" size={28} />
              <a href={projectData.link}>
                <FaGithub size={28} />
              </a>
              
            </span>
          </div>
          <div className="row project-title-wrapper">
            <span className="project-title">{projectData.title}{/*<br></br><span className="project-repo">{"/ " + projectData.repo}</span>*/}</span>
          </div>
          <div className="row project-bio-wrapper">
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
