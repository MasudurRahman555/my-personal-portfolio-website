import React from "react";
import "./button.css";

function button(props) {
  const { nameOrIcon, link } = props;
  return (
    <a href={link}>
      <button className="btn_shadow">{nameOrIcon}</button>
    </a>
  );
}

export default button;
