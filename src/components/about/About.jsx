import React from "react";
import "./about.css";
import awardimg from "../../assets/images/award.png";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            className="about-img"
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          I am a College Student, I am studying at{" "}
          <a href="https://www.pmctech.org/">
            Er. Perumal manimekalai college of Engineering
          </a>
          . I am Persuing Master of Computer Applications. I am from
          Krishnagiri.
        </p>
        <div className="about-award">
          <img src={awardimg} alt="award" className="award-img" />
          <div className="about-award-text"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
