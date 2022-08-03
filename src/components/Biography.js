import './Biography.css'
import BiographyData from '../data.json'
import { useState, useEffect } from 'react'

const Biography = () => {

    const [biography, setBiography] = useState(null)

    useEffect(() => {
        setBiography(BiographyData);
    },[biography])

    return (
        <>
        <div className="biography-component">
        <div className="biography-wrapper">
            <img alt="avatar-portrait" src={biography ? biography.biography.img_src : '#'} />
            <div className="biography-content">
                <div className="biography-intro">
                    <span>{biography ? biography.biography.intro.map((c, i) => i === 1 ? (<span key={i} className='intro-company'>{c}</span>) : c) : false}</span>
                </div>
                <div className="biography-bio">
                    {biography ? biography.biography.bio.map((b, i) => <span key={i} className='bio-paragraph'>{b}</span>) : false}
                </div>
                <div className="biography-techstack">
                <span className="biography-techstack-title">Technologies I've been working with recently:</span>
                    {biography ? biography.biography.recent_tech.map((b, i) => <span key={i} className='bio-techstack'>{b}</span>) : false}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Biography;