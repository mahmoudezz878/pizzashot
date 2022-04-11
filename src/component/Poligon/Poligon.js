import React from "react";

const Poligon = ({ setFilter }) => {
  return (
    <div className="poligon">
      <div onClick={() => setFilter("all")} className="first-poligon">All</div>
      <div onClick={() => setFilter("popular")} className="first-poligon">POPULAR</div>
      <div onClick={() => setFilter("pizza")} className="first-poligon">PIZZA</div>
      <div onClick={() => setFilter("burger")} className="first-poligon">BURGER</div>
      <div onClick={() => setFilter("crepe")} className="first-poligon">CREPE</div>
      <div onClick={() => setFilter("drinks")} className="first-poligon">DRINKS</div>
    </div>
  );
};

export default Poligon;
