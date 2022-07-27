import "./Experience.css";
import { useState, useEffect } from "react";
import ExperienceData from '../data.json'

const Experience = () => {

    const [experience, setExperience] = useState(null)

    useEffect(() => {
        setExperience(ExperienceData);
    },[experience])

  return (
    <>
      <div className="experience-component">
        <div className="experience-wrapper">
          <div className="experience-header">
            <span>Where I've Worked</span>
          </div>
          <div className="experience-content">
            <ul className="experience-list">
              {experience ? experience.experience.map((j,_) => (
                <li key={_} className="experience-job">
                <div className="job-header">
                  <span className="job-company">{j.company}</span>
                  <span className="job-year">{j.year}</span>
                </div>

                <div className="job-title">
                  <span>{j.title}</span>
                </div>
                <div className="job-desc">
                  {j.desc.map((d, _) => <span key={_}>{d}</span>)}
                </div>
              </li>
              )) : false}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
