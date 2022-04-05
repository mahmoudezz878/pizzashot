import React from "react";
import CardInfo from "./CardInfo";

const Card = ({ products, filter }) => {
  function filterProducts(products) {
    switch (filter) {
      case "ALL":
        return products;
      case "POPULAR":
        return products.filter((item) => item.category === "popular");
      case "PIZZA":
        return products.filter((item) => item.category === "pizza");
      case "BURGER":
        return products.filter((item) => item.category === "burger");
      case "CREPE":
        return products.filter((item) => item.category === "crepe");
      case "DRINKS":
        return products.filter((item) => item.category === "drinks");
      default:
        return products;
    }
  }

  return (
    <div className="cardInfo">
      {filterProducts(products).map((product) => (
        <CardInfo product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Card;
