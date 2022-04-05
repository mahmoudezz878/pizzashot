import React from "react";

const Poligon = ({ setFilter }) => {
  return (
    <div className="poligon">
      <div onClick={() => setFilter("ALL")} className="first-poligon">All</div>
      <div onClick={() => setFilter("POPULAR")} className="first-poligon">POPULAR</div>
      <div onClick={() => setFilter("PIZZA")} className="first-poligon">PIZZA</div>
      <div onClick={() => setFilter("BURGER")} className="first-poligon">BURGER</div>
      <div onClick={() => setFilter("CREPE")} className="first-poligon">CREPE</div>
      <div onClick={() => setFilter("DRINKS")} className="first-poligon">DRINKS</div>
    </div>
  );
};

export default Poligon;
