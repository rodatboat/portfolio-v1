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
            <img src={biography ? biography.biography.img_src    : false} />
            <div className="biography-content">
                <div className="biography-intro">
                    <span>{biography ? biography.biography.intro : false}</span>
                </div>
                <div className="biography-bio">
                    {biography ? biography.biography.bio.map((b, i) => <span className='bio-paragraph'>{b}</span>) : false}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Biography;