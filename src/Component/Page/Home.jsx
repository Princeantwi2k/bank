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
        <img src={img1} alt="pic" className="about-img" data-aos="flip-left" />

        <h1 className="about-head" data-aos="">
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
      <div className="provider" id="project">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            marginTop: 30,
          }}
          data-aos="fade-up"
        >
          My Personal Projects
        </h1>
      </div>

      <div class="project">
        <div class="thumbnail" data-aos="flip-left">
          <img src={app1} alt="app" className="app1" />
          <div class="caption">
            <h3 className="filler">BnB_Million</h3>
            <p className="p">
              {" "}
              Do you want to stand out at that special occassion and be the
              center of attention? If your answer is YES then look look no
              further.bnb_millinery is here to make your dreams come true.We are
              the cheapest on the market.We beat all prices.And the good news
              is,we work with your budget.
            </p>
            <p>
              <a
                href="https://laughing-newton-2012ab.netlify.app"
                class="btn btn-success buttonss"
                role="button"
              >
                Demo
              </a>{" "}
              <a
                href="https://github.com/Princeantwi2k/bnb_millenery"
                class="btn btn-primary"
                role="button"
              >
                View Code
              </a>
            </p>
          </div>
        </div>
        <div class="thumbnail">
          <img src={app2} alt="app1" className="app1" data-aos="flip-left" />
          <div class="caption">
            <h3 className="filler">Phyjo mines</h3>
            <p className="p">
              This is a mining website that just came in existing this year and
              they are doing very good in their field of business right now in
              the country , if not the best at the moment they are one of the
              best in the country currently. Please visit their website if you
              need their services and you can reach them on all the social media
              handles. Thank You.
            </p>
            <p>
              <a
                href="https://confident-austin-7589d3.netlify.app/"
                class="btn btn-success buttons"
                role="button"
              >
                Demo
              </a>{" "}
              <a
                href="https://github.com/Princeantwi2k/mines"
                class="btn btn-primary"
                role="button"
              >
                View code
              </a>
            </p>
          </div>
        </div>
        <div class="thumbnail">
          <img src={app3} alt="app1" className="app1" data-aos="flip-right" />
          <div class="caption">
            <h3 className="filler">Think and Zoom</h3>
            <p className="p">
              This website help you to kwon of a goggle glass and Nuerosky EEG
              headset ,you can zoom in on objects and see better by simply
              thinking. that is the new technology in town so you have keep your
              self abreast
            </p>
            <p>
              <a
                href="https://wizardly-goodall-3662a4.netlify.app/"
                class="btn btn-success button "
                role="button"
              >
                Demo
              </a>{" "}
              <a
                href="https://github.com/Princeantwi2k/think-and-zoom"
                class="btn btn-primary"
                role="button"
              >
                View code
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="projects">
        <div class="thumbnail">
          <img src={app4} alt="app" className="app1" data-aos="flip-left" />
          <div class="caption">
            <h3 className="filler">Adom clinic</h3>
            <p>
              Adom clinic is a local based clinic that was build by a Software
              developer by name Prince Antwi to help the local community get the
              best healthcare that they deserve.
            </p>
            <p>
              <a
                href="https://adom-clinic-princeantwi2k.vercel.app/"
                class="btn btn-success buttonss"
                role="button"
              >
                Demo
              </a>{" "}
              <a href="#" class="btn btn-primary" role="button">
                View code
              </a>
            </p>
          </div>
        </div>
        <div class="thumbnail">
          <img src={app6} alt="app" className="app1" data-aos="flip-left" />
          <div class="caption">
            <h3 className="filler">Bluelet</h3>
            <p>
              Bluelet is an online shopping market that you yo can access to
              your basic needs such as phones,laptops,printers and whole lot of
              thing. just visit our website and be amaze.
            </p>
            <p>
              <a
                href="https://blog-five-iota.vercel.app/"
                class="btn btn-success buttonss"
                role="button"
              >
                Demo
              </a>{" "}
              <a
                href="https://github.com/Princeantwi2k/blog"
                class="btn btn-primary "
                role="button"
              >
                View code
              </a>
            </p>
          </div>
        </div>
        <div class="thumbnail">
          <img src={app5} alt="app" className="app1" data-aos="flip-left" />
          <div class="caption">
            <h3 className="filler">Filler Hub</h3>
            <p>
              Filler hub is a place you can get access to all the latest news is
              the world being it politices,sport,business,science and magazine
            </p>
            <p>
              <a
                href="https://articles-git-master-princeantwi2k.vercel.app/"
                class="btn btn-success button"
                role="button"
              >
                Demo
              </a>{" "}
              <a
                href="https://github.com/Princeantwi2k/articles"
                class="btn btn-primary"
                role="button"
              >
                View code
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="project">
        <div class="thumbnail">
          <img src={app7} alt="app" className="app1" data-aos="flip-left" />
          <div class="caption">
            <h3 className="filler">My Movie Review</h3>
            <p>
              My Movie Review is a place you can get access to all the latest
              movies is the world. feel free to visit this site if you are a
              movie lover and you will really enjoy your stay
            </p>
            <p>
              <a
                href="https://articles-git-master-princeantwi2k.vercel.app/"
                class="btn btn-success buttonss"
                role="button"
              >
                Demo
              </a>{" "}
              <a
                href="https://github.com/Princeantwi2k/articles"
                class="btn btn-primary"
                role="button"
              >
                View code
              </a>
            </p>
          </div>
        </div>
        <div class="thumbnail">
          <img src={app8} alt="app" className="app1" data-aos="flip-left" />
          <div class="caption">
            <h3 className="filler">Kawolegal</h3>
            <p>
              Kawolegal is a website for a collaborative ecosytem for problem
              solvers and support for startup companies or already existing
              companies
            </p>
            <p>
              <a href="#" class="btn btn-success buttonss" role="button">
                Demo
              </a>{" "}
              <a
                href="https://github.com/Princeantwi2k/react-kawolegal"
                class="btn btn-primary"
                role="button"
              >
                View code
              </a>
            </p>
          </div>
        </div>
        <div class="thumbnail">
          <img src={app9} alt="app" className="app1" data-aos="flip-left" />
          <div class="caption">
            <h3 className="filler">Coca Cola</h3>
            <p>
              this is a website that best allow you to know all the varsities of
              coca-cola that we have in the world look no where else that to
              visit this page if you want to kown any new thing about our
              product.
            </p>
            <p>
              <a
                href="https://cocacla-princeantwi2k.vercel.app/"
                class="btn btn-success buttons"
                role="button"
              >
                Demo
              </a>{" "}
              <a
                href="https://github.com/Princeantwi2k/Cocacla"
                class="btn btn-primary"
                role="button"
              >
                View code
              </a>
            </p>
          </div>
        </div>
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
        <h2 class="head" data-aos="fade-up">
          Contact
          <br />
          Call,Whatsapp or send us an E-mail
        </h2>
        <h2 class=" icons" data-aos="fade-up">
          <i class="bx bx-phone "> (+233)5503001103 </i>
          <br />

          <i class="bx bxl-whatsapp"> (+233)0572211378</i>
          <br />

          <i class="bx bx-mail-send"> antwi2k@gmail.com</i>
        </h2>
      </div>
      <div className="connect">
        <h2 class="head" data-aos="fade-up">
          Social
          <br />
          Follow me and stay updated with all my work and coming offers !
        </h2>
        <h2 class="icons" data-aos="fade-up">
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
