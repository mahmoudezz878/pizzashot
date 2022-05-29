import React from "react";
import CardInfo from "../OrderModal/ModalCard";
import OrderForm from "./OrderForm";
import { useSelector } from "react-redux";

const OrderNow = () => {
  const products = useSelector((state) => state.Counter);

  const newProducts = products.filter((card) => {
    return card.qty > 0;
  });

  const total = newProducts.reduce((acc, curr) => {
    return acc + curr.qty * curr.price;
  }, 0);

  return (
    <div className="orderNow">
      <div className="orderNowForm">
        <OrderForm />
      </div>
      {newProducts.length ? (
        <div className="orderCard">
          {newProducts?.map((card, index) => {
            return <CardInfo key={index} card={card} />;
          })}
          <div className="order">
            <span className="subtotal">Subtotal: LE {total}</span>
          </div>
        </div>
      ) : (
        "no food"
      )}
    </div>
  );
};

export default OrderNow;
