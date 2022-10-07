import React from "react";
import about_photo from "./../../others/Images/profile/profilepic2.png";
import "./about.css";

function about() {
  return (
    <div className="about_section" id="about">
      <div className="container f_flex about_container">
        <div className="left">
          <div className="about_img box_shodow">
            <img height={'300px'} src={about_photo} alt="About Pic" />
          </div>
        </div>
        <div className="right">
          <div className="about_details">
            <h1>About Me</h1>
            <h3>Masudur Rahman</h3>
            <h4>A Professional Web Designer and Devoloper</h4>
            <p>
              <span>L</span>
              orem ipsum dolor sit amet consectetur adipisicing elit. Est
              obcaecati magni ut eius a! Harum, id molestias aliquid odio
              pariatur adipisci dolor expedita deserunt. Corporis libero animi
              <br />
              facilis, at praesentium aspernatur mollitia laudantium ab fuga
              molestiae cum earum, distinctio sit accusamus reprehenderit
              obcaecati id natus, omnis beatae? Dolores, animi a!
            </p>
          </div>
          <div className="about_btns">
            <a className="button" href="a" target="_blank" rel="noopener noreferrer">HIRE ME</a>
            <a className="button" href={about_photo} download={about_photo} >DOWNLOAD MY CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
