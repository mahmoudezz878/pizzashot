import React from "react";
import pizza from "./pizza.png";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="nav-info">
          <div className="text">
            <h1>
              Enjoy Our <br /> Delicious <span className="color">Food</span>
            </h1>
          </div>
          <div className="btn">
            <span className="btn-one">Buy 1 Get 2</span>
            <span className="btn-one btn-two">Order Online Now</span>
          </div>
        </div>
        <div className="nav-icon">
          <img src={pizza} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
