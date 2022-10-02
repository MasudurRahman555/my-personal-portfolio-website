import React, { useState } from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { SiFiverr, SiFreelancer, SiUpwork } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import Button from "../mini-comp/button/button";
import cover_photo from "./../../others/Images/profile/cover.jpg";
import profile_photo from "./../../others/Images/profile/profilepic.jpg";
import "./home.css";
import Nav from "./nav/nav";

const Home = () => {
  const [navFixed, setNavFixed] = useState(false);

  const changeNavPosition = () => {
    if (window.scrollY >= 200) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  };
  window.addEventListener("scroll", changeNavPosition);

  return (
    <section className="home-section" id="home">
      
      <div className={navFixed ? "nav_fixed nav_comp" : "nav_comp"}>
        <div className="container">
          <Nav />
        </div>
      </div>

      <div
        className="home-coverphoto"
        style={{ backgroundImage: `url(${cover_photo})` }}
      ></div>

      <div className="home_profile">
        <div className="container f_flex">
          <div className="left">
            <div className="profile_details">
              <h3>Welcome to my website</h3>
              <h1>
                Hi, I’m <span>Masudur rahman</span>
              </h1>
              <h2>
                a
                <span>
                  <Typewriter
                    words={[
                      " Web Designer",
                      " Web Devoloper",
                      " app devoloper",
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
              </h2>
            </div>
            <div className="profile_btn d_flex">
              <div className="contact_btn">
                <h4>Find me with</h4>
                <Button nameOrIcon={<FiFacebook />} link="FiFacebook" />
                <Button nameOrIcon={<FiLinkedin />} link="FiFacebook" />
                <Button nameOrIcon={<FiInstagram />} link="FiFacebook" />
              </div>

              <div className="here_btn">
                <h4>hire me on</h4>
                <Button nameOrIcon={<SiFiverr />} link="FiFacebook" />
                <Button nameOrIcon={<SiUpwork />} link="FiFacebook" />
                <Button nameOrIcon={<SiFreelancer />} link="FiFacebook" />
              </div>
            </div>
          </div>

          <div className="right">
            <div className="profile_image">
              <img width={"50px"} src={profile_photo} alt="Profile Pic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
