import React from "react";

function Card(props) {
  const { value, name } = props;
  const progress_size = 377 - (377 * value) / 100;
  return (
    <div className="skill">
      <div className="outer">
        <div className="inner">
          <div id="number">{value}%</div>
        </div>
        <div className="lang_name">
          <h3>{name}</h3>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="140px"
        height="140px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>
        <circle
          cx="70"
          cy="70"
          r="60"
          strokeLinecap="round"
          style={{ "--hello": progress_size }}
        />
      </svg>
    </div>
  );
}

export default Card;
