import "./Projects.css";
import { useEffect, useState } from 'react';
import ProjectData from '../data.json'
import Project from './Project';

const Projects = () => {

    const [projects, setProjects] = useState(null)

    useEffect(() => {
        setProjects(ProjectData);
    },[projects])
    return(
        <>
        <div className="projects-component">
            <ul className="project-list">
                {projects ? projects.projects.map((p, i)=> <Project key={i} projectData={p}/>) : false}
            </ul>
        </div>
        </>
    )
}

export default Projects;