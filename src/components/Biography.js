import './Biography.css'

const Biography = () => {
    return (
        <>
        <div className="biography-component">
        <div className="biography-wrapper">
            <img src="https://www.seanhalpin.design/images/info/me@2x.png" />
            <div className="biography-content">
                <div className="biography-intro">
                    <span> I’m Seán, a Product Designer working remotely for Help Scout on their mobile products in sunny Dublin, Ireland.</span>
                </div>
                <div className="biography-bio">
                    <span>I’ve spent the past 12+ years working across different areas of digital design; front-end development, email design, marketing site pages, app UI/UX, to my current role designing products for mobile platforms.</span>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Biography;