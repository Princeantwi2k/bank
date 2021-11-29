import React, { useEffect } from "react";
import "./Home.css";
import app from "../../Image/app.png";
import { HashLink as Link } from "react-router-hash-link";
import img1 from "../../Image/me.jpg";
import app1 from "../../Image/app1.png";
import app2 from "../../Image/app2.png";
import app3 from "../../Image/app3.png";
import app4 from "../../Image/app4.png";
import app5 from "../../Image/app5.png";
import app6 from "../../Image/app6.png";
import app7 from "../../Image/app7.png";
import app8 from "../../Image/app8.png";
import app9 from "../../Image/app9.png";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="home-page" id="nav">
        <h2 className="home-text">
          Welcome! I'm Prince Antwi <br />
          <span className="font">
            {" "}
            FrontEnd Web Developer Currently studying at a bootcamp called
            Codetrain
            <p>
              <Link to="#about" class="btn btn-success home-button">
                About Me
              </Link>
              <Link to="#project" class="btn btn-primary home-button">
                My Projects
              </Link>
            </p>
          </span>
        </h2>
        <img
          src="https://cdn.dribbble.com/users/1059583/screenshots/4171367/coding-freak.gif"
          alt="gif"
          className="gif"
        />
      </div>
      <div className="up">
        <Link to="#nav">
          <i className="bx bx-up-arrow-alt ups"></i>
        </Link>
      </div>

      <div id="about">
        {" "}
        <h2 className="about-me" data-aos="fade-up">
          About Me
        </h2>
      </div>
      <div className="about">
        <img src={img1} alt="pic" className="about-img" data-aos="fade-right" />

        <h1 className="about-head" data-aos="fade-left">
          <span className="about-text">
            {" "}
            AM Prince Kojo Antwi. I'm a FrontEnd web developer currently
            studying at in Codetrain in Ghana. I am 23 years old. I dont have
            any professional experience at the moment,but i have built some nice
            website as my personal project you can check them out in my project
            page. I'm hoping to get deals with companies and individuals so i
            can help in building projects to gain experience and more skill in
            the process. The programming language i specialize in is
            Javascript,React,Bootstrap,Html and Css. I do most of my projects in
            Reactjs. In the near future, I would like to work for any of the big
            and successful software companies such as Google, Apple, Microsoft,
            Amazon and Start up my own software Companies after working for ages
            and againing more experience.
          </span>
        </h1>
      </div>

      <div className="provider">
        <h1
          style={{ textAlign: "center", fontWeight: "bolder" }}
          data-aos="fade-up"
        >
          My Service Proviver
        </h1>
      </div>
      <div>
        <div class="thum" data-aos="zoom-out-right">
          <div class="thumbnail">
            <img
              src="https://cdn.dribbble.com/users/179703/screenshots/4294979/design-levers.gif"
              alt="gif"
              className="service-gifs"
            />
            <div class="caption">
              <h3
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  color: "teal",
                }}
              >
                Quality Design
              </h3>
              <p>
                Your project will be done with speed and quality design for your
                project is assured always 24/7.
              </p>
            </div>
          </div>

          <div class="thumbnail" data-aos="zoom-out-up">
            <img
              src="https://s24787.pcdn.co/wp-content/uploads/2019/07/bc-communication-intropanel-animation-7col.gif"
              alt="gif"
              className="service-gif"
            />
            <div class="caption">
              <h3
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  color: "teal",
                }}
              >
                Effective Communication
              </h3>
              <p>
                Communication between the client and me will be effective and
                easy,am alway available to my client 24/7
              </p>
            </div>
          </div>

          <div class="thumbnail" data-aos="zoom-in-left">
            <img
              src="https://i.pinimg.com/originals/02/74/20/0274207612d515f49012c87803a9e631.gif"
              alt="gif"
              className="service-gifss"
            />
            <div class="caption">
              <h3
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  color: "teal",
                }}
              >
                Webdeveloping
              </h3>
              <p>
                I build HTML/CSS, Wordpress, Responsive Website,React Javascript
                websites with the skills i have acquired so far.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="skills">
        <h1
          style={{ textAlign: "center", fontWeight: "bolder", padding: "30px" }}
          data-aos="fade-up"
        >
          My Skills
        </h1>
      </div>
      <div className="skill">
        <img
          src="https://i.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif"
          alt="logo"
          className="logo"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://i.pinimg.com/736x/e4/3e/4c/e43e4cd41ddffc21d2e6600dfca20306--logo-software-logotype.jpg"
          alt="logo"
          className="logo"
          data-aos="fade-lift"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://e7.pngegg.com/pngimages/840/443/png-clipart-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-thumbnail.png"
          alt="logo"
          className="logo"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://www.seekpng.com/png/detail/142-1424663_bootstrap-stickers-bootstrap-logo-transparent.png"
          alt="logo"
          className="logo"
          data-aos="fade-lift"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://www.aalpha.net/wp-content/uploads/2021/02/reactjs-framework.gif"
          alt="logo"
          className="logo"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        />
      </div>

      <div className="contact" id="contact">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            marginTop: 30,
          }}
          data-aos="fade-up"
        >
          Contact Me
        </h1>
        <p className="para">let's get in touch!</p>
      </div>
      <div className="connect">
        <h2 class="head" data-aos="fade-right">
          Contact
          <br />
          Call,Whatsapp or send us an E-mail
        </h2>
        <h2 class=" icons" data-aos="fade-left">
          <i class="bx bx-phone "> (+233)5503001103 </i>
          <br />

          <i class="bx bxl-whatsapp"> (+233)0572211378</i>
          <br />

          <i class="bx bx-mail-send"> antwi2k@gmail.com</i>
        </h2>
      </div>
      <div className="connect">
        <h2 class="head" data-aos="fade-right">
          Social
          <br />
          Follow me and stay updated with all my work and coming offers !
        </h2>
        <h2 class="icons" data-aos="fade-left">
          {" "}
          <i class="bx bxl-instagram phone">Qwajo monies </i>
          <br />
          <i class="bx bxl-twitter phone">Prince2k </i>
          <br />
          <i class="bx bxl-facebook-circle phone">Qwajo monies </i>
        </h2>
      </div>
      <div className="app">
        <img
          src={app}
          alt-="app"
          className="call"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        />
        <h1
          className="app-text"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          Thank You For Visiting My Portfolio <br />
          <span className="app-texts">
            Hope you consider offering me a project to work on
          </span>
        </h1>
      </div>
      <div className="footer">
        <h1>Portfolio Made By Prince Antwi</h1>
        <p>Phone:+233 572 211 378</p>
        <p>Follow me; Twitter @endtime24</p>
      </div>
    </>
  );
};

export default Home;
