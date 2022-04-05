import React from "react";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

const OrderPlaced = () => {
  return (
    <div className="orderPlaced">
      <CheckCircleOutlinedIcon />
      <h1>Order Placed</h1>
      <p>Order Number: 1234</p>
    </div>
  );
};

export default OrderPlaced;
