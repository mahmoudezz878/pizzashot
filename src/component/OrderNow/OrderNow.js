import React from "react";
import CardInfo from "../OrderModal/ModalCard";
import OrderForm from "./OrderForm";

const OrderNow = () => {
  return (
    <div className="orderNow">
      <div className="orderNowForm">
        <OrderForm />
      </div>
      <div className="orderCard">
        <CardInfo />
        <CardInfo />
        <div className="order">
          <span className="subtotal">Subtotal: LE 1700.00</span>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
