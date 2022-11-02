import React from "react";
import Place from "../Place/Place";
import "./Tours.css";

const Tours = (props) => {
  const { toursData, handleNotSelected } = props;
  return (
    <div className="tours-cards">
      <h1>Our Tours</h1>
      <div className="tour-card">
        {toursData.map((tour) => {
          return (
            <Place
              {...tour}
              key={tour.id}
              handleNotSelected={handleNotSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tours;
