import React, { useState } from "react";

function Card({ imageUrl, title, text }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showContent, setShowContent] = useState(false); // State for displaying content

  const cardStyle = {
    margin: "2px",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "transform 0.3s",
  };

  const imageStyle = {
    maxWidth: 700,
    height: 300,
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleReadClick = () => {
    setShowContent(!showContent); // Toggle the state to show/hide content
  };

   
  return( <div>
    <div
      className="card m-3"
      id="card"
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="card-img-top"
        src={imageUrl}
        alt="Card image cap"
        style={imageStyle}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {showContent ? <p className="card-text">{text}</p> : null}
        <button
          className="btn btn-primary"
          onClick={handleReadClick}
        >
          {showContent ? "Hide" : "Read"}
        </button>
      </div>
    </div>
  </div>
); 
}

export default Card;
