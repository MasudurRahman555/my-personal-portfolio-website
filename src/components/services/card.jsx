import React from "react";


function Card(props) {
    const {image, title, description} = props;
  return (
    <>
      <div className="card box_shodow user_select_none">
        <img src={image} alt="card images" />
        <h2>{title}</h2>
        <p>
        {description}
        </p>
      </div>
    </>
  );
}

export default Card;
