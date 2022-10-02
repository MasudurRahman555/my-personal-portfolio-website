import React from "react";
import { Link } from "react-scroll";
import "./link.css";

function LinkComp(props) {
    const { name,target } = props;
  return (
    <Link
      activeClass="active_link"
      to={target}
      spy={true}
      smooth={true}
      duration={500}
    >
      {name}
    </Link>
  );
}

export default LinkComp;
