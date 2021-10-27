import React from "react";
import img1 from "../../Image/me.jpg";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about">
        <img src={img1} alt="pic" className="about-img" />

        <h1 className="about-head">
          Aboute Me <br />
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
      <div className="footer">
        <h1>Portfolio Made By Prince Antwi</h1>
        <p>Phone:+233 572 211 378</p>
        <p>Follow me; Twitter @endtime24</p>
      </div>
    </>
  );
};

export default About;
