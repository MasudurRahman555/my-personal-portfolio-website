import React, { useEffect, useRef, useState } from "react";
import LinkComp from "../../mini-comp/link/link";
import "./nav.css";

const Nav = () => {
  const [menuCondition, setMenuCondition] = useState(false);
  const insideDive = useRef(null);

  useEffect(() => {
    window.addEventListener("click", outSideClick, true);
  }, []);

  const outSideClick = (event) => {
    if (!insideDive.current.contains(event.target)) {
      setMenuCondition(false);
    }
  };

  return (
    <div className={menuCondition ? "active_menu navigation" : "navigation"}>
      <div
        className="menu_btn"
        onClick={() => {
          setMenuCondition(!menuCondition);
        }}
        ref={insideDive}
      >
        <span></span>
      </div>
      <div className="nav">
        <ul className="menu_item">
          <li>
            <LinkComp name="home" target="home" />
          </li>
          <li>
            <LinkComp name="about" target="about" />
          </li>
          <li>
            <LinkComp name="services" target="services" />
          </li>
          <li>
            <LinkComp name="resume" target="resume" />
          </li>
          <li>
            <LinkComp name="portfolio" target="portfolio" />
          </li>
          <li>
            <LinkComp name="contact" target="contact" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
