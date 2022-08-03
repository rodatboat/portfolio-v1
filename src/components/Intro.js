import "./Intro.css";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import IntroData from '../data.json'
import { useState, useEffect } from 'react'

const Intro = () => {
  const iconSize = 18;

  const [intro, setIntro] = useState(null)

    useEffect(() => {
      setIntro(IntroData);
    },[intro])


  return (
    <>
        <div className="intro-component">
        <div className="intro-wrapper">
          <span className="name">{intro ? intro.intro.full_name : ""} - {intro ? intro.intro.title : ""}</span>
          <span className="introduction">
          {intro ? intro.intro.part_1 : ""} 
            <span className="introduction-name-border">
              <span className="introduction-name-wrapper">
                <span className="introduction-name">
                  <a href="/#">{intro ? intro.intro.part_2 : ""} </a>
                </span>
              </span>
            </span>
            {intro ? intro.intro.part_3 : ""} 
          </span>
          <span className="socials align-center">
            {intro ? intro.intro.github ? (<a href={intro.intro.github}>
              <FaGithub size={iconSize} />
            </a>) : false : false}
            
            {intro ? intro.intro.linkedin ? (<a href={intro.intro.linkedin}>
              <FaLinkedinIn size={iconSize} />
            </a>) : false : false}

            {intro ? intro.intro.instagram ? (<a href={intro.intro.instagram}>
              <FaInstagram size={iconSize} />
            </a>) : false : false}
            
          </span>
          </div>
        </div>
    </>
  );
};

export default Intro;
