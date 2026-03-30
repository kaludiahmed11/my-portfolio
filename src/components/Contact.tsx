import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a href="https://www.linkedin.com/in/ahmedkaludi/" target="_blank" rel="noreferrer" data-cursor="disable">
                LinkedIn — ahmedkaludi
              </a>
            </p>
            <p>
              <a href="mailto:Kaludiahmed00@gmail.com" data-cursor="disable">
                Kaludiahmed00@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+919033524584" data-cursor="disable">
                +91 90335 24584
              </a>
            </p>
            <h4>Education</h4>
            <p>Pursuing BCA, C.B. Patel Computer College — Surat</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a href="https://www.linkedin.com/in/ahmedkaludi/" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              LinkedIn <MdArrowOutward />
            </a>
            <a href="https://www.youtube.com/@Mindifyy" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              YouTube <MdArrowOutward />
            </a>
            <a href="https://www.instagram.com/thereachcrafter/" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              Instagram <MdArrowOutward />
            </a>
            <a href="https://wa.me/919033524584" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              WhatsApp <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Crafted with intent <br /> by <span>Ahmed Kaludi</span>
            </h2>
            <h5>
              <MdCopyright /> 2025 The Reach Crafter
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
