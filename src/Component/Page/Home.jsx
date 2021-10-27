import React from "react";
import "./Home.css";
import app from "../../Image/app.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <h2 className="home-text">
          Welcome! AM Prince Antwi <br />
          <span className="font">
            {" "}
            FrontEnd Web Developer Currently studying at a bootcamp called
            Codetrain
            <p>
              <Link to="/about" class="btn btn-success home-button">
                About Me
              </Link>
              <Link to="/project" class="btn btn-primary home-button">
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
      <div className="provider">
        <h1 style={{ textAlign: "center", fontWeight: "bolder" }}>
          My Service Proviver
        </h1>
      </div>
      <div>
        <div class="thum">
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

          <div class="thumbnail">
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

          <div class="thumbnail">
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
      <div>
        <h1
          style={{ textAlign: "center", fontWeight: "bolder", padding: "30px" }}
        >
          My Skills
        </h1>
      </div>
      <div className="skill">
        <img
          src="https://i.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif"
          alt="logo"
          className="logo"
        />
        <img
          src="https://i.pinimg.com/736x/e4/3e/4c/e43e4cd41ddffc21d2e6600dfca20306--logo-software-logotype.jpg"
          alt="logo"
          className="logo"
        />
        <img
          src="https://e7.pngegg.com/pngimages/840/443/png-clipart-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-thumbnail.png"
          alt="logo"
          className="logo"
        />
        <img
          src="https://www.seekpng.com/png/detail/142-1424663_bootstrap-stickers-bootstrap-logo-transparent.png"
          alt="logo"
          className="logo"
        />
        <img
          src="https://www.aalpha.net/wp-content/uploads/2021/02/reactjs-framework.gif"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="app">
        <img src={app} alt-="app" className="call" />
        <h1 className="app-text">
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
