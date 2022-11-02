import React, { useState } from "react";
import "./Place.css";

const Place = (props) => {
  const [readmore, setReadMore] = useState(false);

  const { id, name, info, image, price, handleNotSelected } = props;

  const handleReadmore = () => {
    setReadMore(!readmore);
  };
  return (
    <div className="place-component">
      <div className="place-component-image">
        <img src={image} alt={name} width="400px" />
      </div>
      <div className="place-component-details">
        <div className="name-price">
          <h2>{name}</h2>
          <p>${price}</p>
        </div>
        <div className="info">
          <p>
            {readmore ? info : `${info.substring(0, 150)}...`}{" "}
            <button onClick={handleReadmore} className="read-more">
              {readmore ? "Readless" : "Readmore"}
            </button>
          </p>
        </div>
        <button
          className="not-interested"
          onClick={() => {
            handleNotSelected(id);
          }}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Place;
