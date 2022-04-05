import React from "react";
import Nav from "../../component/Nav/Nav";
import Poligon from "../../component/Poligon/Poligon";
import Card from "../../component/Card/Card";

const index = ({products, setFilter, filter}) => {
  return (
    <div>
      <Nav />
      <Poligon setFilter={setFilter} />
      <Card filter={filter} products={products} />
    </div>
  );
};

export default index;
