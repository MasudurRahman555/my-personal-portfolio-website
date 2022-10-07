import React from "react";
import Card from "./card";
import "./services.css";
import ServicesData from "./servicesApi";

function Services() {
  return (
    <div className="features_section" id="services">
      <div className="container">
        <div className="heading">
          <h4>services</h4>
          <h1>What I do</h1>
        </div>
        <div className="content">
          {ServicesData.map((val, index) => {
            return(
              <Card key={index} image={val.image} title={val.title} description={val.description} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
