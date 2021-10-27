import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <div className="contact">
        <h1>Contact Me</h1>
        <p className="para">let's get in touch!</p>
      </div>
      <div className="connect">
        <h2 class="head">
          Contact
          <br />
          Call,Whatsapp or send us an E-mail
        </h2>
        <h2 class=" icons">
          <i class="bx bx-phone "> (+233)5503001103 </i>
          <br />

          <i class="bx bxl-whatsapp"> (+233)0572211378</i>
          <br />

          <i class="bx bx-mail-send"> antwi2k@gmail.com</i>
        </h2>
      </div>
      <div className="connect">
        <h2 class="head">
          Social
          <br />
          Follow me and stay updated with all my work and coming offers !
        </h2>
        <h2 class="icons">
          {" "}
          <i class="bx bxl-instagram phone">
            <Link to="https://www.instagram.com/" className="contact-email">
              {" "}
              Qwajo monies{" "}
            </Link>
          </i>
          <br />
          <i class="bx bxl-twitter phone">
            <Link to="https://twitter.com/home" className="contact-email">
              {" "}
              Prince2k{" "}
            </Link>{" "}
          </i>
          <br />
          <i class="bx bxl-facebook-circle phone">
            <Link to="https://web.facebook.com/" className="contact-email">
              {" "}
              Qwajo monies{" "}
            </Link>
          </i>
        </h2>
      </div>

      <div className="footer">
        <h1>Portfolio Made By Prince Antwi</h1>
        <p>Phone:+233 572 211 378</p>
        <p>Follow me; Twitter @endtime24</p>
      </div>
    </div>
  );
};

export default Contact;
