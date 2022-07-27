import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-component">
        <div className="footer-wrapper">
          <span className="footer-message">get in touch</span>

          <div className="footer-socials">
            {/* <span className="footer-social"><a href=""></a></span> */}
            <span className="footer-social"><a href="https://www.linkedin.com/in/ronaldo-suarez/">LinkedIn</a></span>
            <span className="footer-social"><a href="mailto:ronaldo3055@gmail.com">Email</a></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
